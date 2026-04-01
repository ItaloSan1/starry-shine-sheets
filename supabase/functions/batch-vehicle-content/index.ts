import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BATCH_SIZE = 5; // Process 5 vehicles per invocation to stay within time/rate limits

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    // 1. Get all cached keys
    const { data: cachedRows } = await supabase
      .from("vehicle_content_cache")
      .select("vehicle_key");
    const cachedKeys = new Set((cachedRows || []).map((r: any) => r.vehicle_key));

    // 2. Fetch vehicles page by page to find uncached ones
    let uncached: any[] = [];
    let page = 1;
    const maxPages = 25;

    while (uncached.length < BATCH_SIZE && page <= maxPages) {
      const vehiclesResp = await fetch(
        `${supabaseUrl}/functions/v1/mongo-inventory?action=vehicles&page=${page}&pageSize=100`,
        {
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
          },
        }
      );

      if (!vehiclesResp.ok) {
        const t = await vehiclesResp.text();
        console.error(`Failed to fetch vehicles page ${page}:`, t);
        break;
      }

      const data = await vehiclesResp.json();
      const vehicles = data.vehicles || [];
      if (vehicles.length === 0) break;

      // Deduplicate and find uncached
      const seen = new Set<string>();
      for (const v of vehicles) {
        const key = `${v.year || 0}_${(v.make || "").replace(/\s+/g, "_")}_${(v.model || "").replace(/\s+/g, "_")}_${(v.trim || "Base").replace(/\s+/g, "_")}`;
        
        if (!v.make || !v.model || !v.year) continue;
        if (cachedKeys.has(key) || seen.has(key)) continue;
        seen.add(key);

        uncached.push({
          year: v.year,
          make: v.make,
          model: v.model,
          trim: v.trim || "",
          engineType: v.engineType || undefined,
          displacement: v.engineSize || undefined,
          transmissionType: v.transmissionType || undefined,
        });

        if (uncached.length >= BATCH_SIZE) break;
      }

      if (page >= (data.totalPages || 1)) break;
      page++;
    }

    if (uncached.length === 0) {
      console.log("All vehicles have cached content. Job complete.");
      return new Response(
        JSON.stringify({ status: "complete", message: "All vehicles cached", totalCached: cachedKeys.size }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Generate content for each uncached vehicle
    let success = 0;
    let errors = 0;
    const results: string[] = [];

    for (const vehicle of uncached) {
      try {
        const resp = await fetch(`${supabaseUrl}/functions/v1/generate-vehicle-content`, {
          method: "POST",
          headers: {
            apikey: anonKey,
            Authorization: `Bearer ${anonKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vehicle),
        });

        const key = `${vehicle.year}_${vehicle.make}_${vehicle.model}_${vehicle.trim || "Base"}`.replace(/\s+/g, "_");

        if (resp.ok) {
          await resp.text(); // consume body
          success++;
          results.push(`✓ ${key}`);
        } else if (resp.status === 429) {
          await resp.text();
          results.push(`⏳ ${key} (rate limited)`);
          errors++;
          // Stop processing this batch to let rate limit cool down
          break;
        } else {
          const t = await resp.text();
          errors++;
          results.push(`✗ ${key}: ${resp.status}`);
        }

        // Small delay between requests
        await new Promise((r) => setTimeout(r, 1500));
      } catch (e) {
        errors++;
        results.push(`✗ error: ${e}`);
      }
    }

    const totalCached = cachedKeys.size + success;
    console.log(`Batch complete: ${success} generated, ${errors} errors, ~${totalCached} total cached`);

    return new Response(
      JSON.stringify({
        status: "processing",
        batchSize: uncached.length,
        success,
        errors,
        totalCached,
        results,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("batch-vehicle-content error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
