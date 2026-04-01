import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { year, make, model, trim, engineType, displacement, transmissionType } = await req.json();

    if (!year || !make || !model) {
      return new Response(JSON.stringify({ error: "year, make, model required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const vehicleKey = `${year}_${make}_${model}_${trim || "Base"}`.replace(/\s+/g, "_");

    // Check cache first
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const { data: cached } = await supabase
      .from("vehicle_content_cache")
      .select("*")
      .eq("vehicle_key", vehicleKey)
      .maybeSingle();

    if (cached) {
      return new Response(JSON.stringify(cached), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Generate with AI
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const vehicleName = `${year} ${make} ${model}${trim ? ` ${trim}` : ""}`;
    const engineInfo = engineType ? `Engine: ${engineType}${displacement ? ` ${displacement}` : ""}` : "";
    const transInfo = transmissionType ? `Transmission: ${transmissionType}` : "";

    const prompt = `You are an automotive expert writing content for a used auto parts website in Edmonton, Alberta, Canada. Generate factual, SEO-optimized content about this vehicle:

Vehicle: ${vehicleName}
${engineInfo}
${transInfo}

Write exactly 5 sections in this JSON format. Each section should be 80-150 words, factual, and useful for someone looking to buy used parts from this vehicle. Include specific years, specs, and compatibility info where possible.

{
  "generation_overview": "Which generation this vehicle belongs to, year range, platform name, key design changes, what made this generation notable.",
  "engine_overview": "Engine family/code, displacement, horsepower/torque, common strengths and known issues, timing chain vs belt, oil capacity notes.",
  "transmission_overview": "Transmission model/type, gear count, common issues, fluid type, durability reputation.",
  "vehicle_facts": "Safety ratings, common recalls, towing capacity if applicable, fuel economy, popular trims and features.",
  "parts_compatibility": "Which other year ranges and models share the same platform and parts. Cross-compatibility info for parts buyers. Be specific about which years interchange."
}

Return ONLY valid JSON with these 5 string fields. No markdown, no code fences.`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are an automotive encyclopedia. Return only valid JSON." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!aiResponse.ok) {
      const status = aiResponse.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, try again later" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${status}`);
    }

    const aiData = await aiResponse.json();
    const rawContent = aiData.choices?.[0]?.message?.content || "";

    // Parse JSON from response (handle possible markdown fences)
    let content: Record<string, string>;
    try {
      const cleaned = rawContent.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      content = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", rawContent);
      return new Response(JSON.stringify({ error: "Failed to generate content" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Store in cache
    const row = {
      vehicle_key: vehicleKey,
      generation_overview: content.generation_overview || null,
      engine_overview: content.engine_overview || null,
      transmission_overview: content.transmission_overview || null,
      vehicle_facts: content.vehicle_facts || null,
      parts_compatibility: content.parts_compatibility || null,
    };

    const { data: inserted, error: insertError } = await supabase
      .from("vehicle_content_cache")
      .upsert(row, { onConflict: "vehicle_key" })
      .select()
      .single();

    if (insertError) {
      console.error("Cache insert error:", insertError);
      // Still return the content even if caching failed
      return new Response(JSON.stringify(row), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(inserted), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-vehicle-content error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
