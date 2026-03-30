import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const table = url.searchParams.get("table") || "remanufactured_engines";
    const batchSize = parseInt(url.searchParams.get("batch") || "15");
    const offset = parseInt(url.searchParams.get("offset") || "0");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableKey = Deno.env.get("LOVABLE_API_KEY")!;

    const supabase = createClient(supabaseUrl, serviceKey);

    // Fetch a batch of records that haven't been rewritten yet (no description)
    const { data: records, error: fetchErr } = await supabase
      .from(table)
      .select("id, name, vendor_part_number, displacement, engine_make_size, fits_vehicles, config")
      .is("description", null)
      .order("vendor_part_number")
      .range(offset, offset + batchSize - 1);

    if (fetchErr) throw fetchErr;
    if (!records || records.length === 0) {
      return new Response(
        JSON.stringify({ done: true, message: `No more records to process in ${table}`, offset }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const productType = table === "cylinder_heads" ? "cylinder head" : "remanufactured engine";

    // Build prompt with all products in this batch
    const productList = records.map((r, i) => {
      const parts = [`${i + 1}. Current name: "${r.name}"`];
      if (r.vendor_part_number) parts.push(`Part #: ${r.vendor_part_number}`);
      if (r.displacement) parts.push(`Displacement: ${r.displacement}`);
      if (r.engine_make_size) parts.push(`Engine: ${r.engine_make_size}`);
      if (r.fits_vehicles) parts.push(`Fits: ${r.fits_vehicles}`);
      if (r.config) parts.push(`Config: ${r.config}`);
      return parts.join(" | ");
    }).join("\n");

    const systemPrompt = `You are a product copywriter for Eskimo Auto Wrecking, a Canadian auto recycler and parts dealer. You rewrite product listings to be unique, professional, and SEO-friendly.

Rules:
- Keep ATK as the manufacturer name where it appears, but restructure the name format
- Use this name pattern: "ATK [Displacement] [Config] [Application] - Part #[number]"
  Example: "ATK 5.7L V8 Crate Engine - Fits 1996-2000 GM Trucks - Part #DC06"
- For cylinder heads use: "ATK [Engine Type] Cylinder Head - [Application] - Part #[number]"
- Write a 2-3 sentence unique description highlighting key specs, compatibility, and quality
- Mention "remanufactured to OEM specifications" or similar quality language
- Include fitment info naturally in the description
- Do NOT copy the original name verbatim
- Keep descriptions factual and concise — no fluff`;

    const userPrompt = `Rewrite these ${records.length} ${productType} listings. Return ONLY a JSON array with objects containing "index" (1-based), "name" (rewritten), and "description" (2-3 sentences).

${productList}`;

    // Call AI
    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "rewrite_products",
              description: "Return rewritten product names and descriptions",
              parameters: {
                type: "object",
                properties: {
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        index: { type: "number" },
                        name: { type: "string" },
                        description: { type: "string" },
                      },
                      required: ["index", "name", "description"],
                    },
                  },
                },
                required: ["products"],
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "rewrite_products" } },
      }),
    });

    if (!aiResp.ok) {
      const errText = await aiResp.text();
      console.error("AI error:", aiResp.status, errText);
      return new Response(
        JSON.stringify({ error: `AI error ${aiResp.status}`, detail: errText }),
        { status: aiResp.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiData = await aiResp.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      console.error("No tool call in response:", JSON.stringify(aiData));
      return new Response(
        JSON.stringify({ error: "AI did not return structured output", raw: aiData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const rewritten = JSON.parse(toolCall.function.arguments);
    const products = rewritten.products;

    // Update each record
    let updated = 0;
    const errors: string[] = [];

    for (const product of products) {
      const record = records[product.index - 1];
      if (!record) {
        errors.push(`Index ${product.index} out of range`);
        continue;
      }

      const { error: updateErr } = await supabase
        .from(table)
        .update({
          name: product.name,
          description: product.description,
        })
        .eq("id", record.id);

      if (updateErr) {
        errors.push(`${record.id}: ${updateErr.message}`);
      } else {
        updated++;
      }
    }

    // Check how many remain
    const { count } = await supabase
      .from(table)
      .select("id", { count: "exact", head: true })
      .is("description", null);

    return new Response(
      JSON.stringify({
        processed: records.length,
        updated,
        errors: errors.length > 0 ? errors : undefined,
        remaining: count,
        nextOffset: offset + batchSize,
        table,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
