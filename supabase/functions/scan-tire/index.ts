import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const { image } = await req.json();
    if (!image) {
      return new Response(JSON.stringify({ error: "image (base64) is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a tire identification expert. Analyze the tire sidewall image and extract all visible information. Be precise with numbers. If a field is not visible, omit it from the response.`,
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze this tire sidewall image. Extract all visible tire specifications.",
              },
              {
                type: "image_url",
                image_url: { url: image },
              },
            ],
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "extract_tire_info",
              description: "Extract tire specifications from a sidewall image",
              parameters: {
                type: "object",
                properties: {
                  brand: { type: "string", description: "Tire manufacturer brand name" },
                  model: { type: "string", description: "Tire model name" },
                  width: { type: "integer", description: "Tire width in mm (e.g. 225)" },
                  aspect_ratio: { type: "integer", description: "Aspect ratio (e.g. 65)" },
                  rim_diameter: { type: "integer", description: "Rim diameter in inches (e.g. 17)" },
                  speed_rating: { type: "string", description: "Speed rating letter (e.g. H, V, T)" },
                  load_index: { type: "integer", description: "Load index number (e.g. 95)" },
                  season: {
                    type: "string",
                    enum: ["All-Season", "Winter", "Summer", "All-Weather"],
                    description: "Tire season type if identifiable",
                  },
                  dot_code: { type: "string", description: "DOT code if visible" },
                  tread_depth_mm: { type: "number", description: "Estimated remaining tread depth in mm if visible" },
                },
                required: ["brand"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "extract_tire_info" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again in a moment" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error("AI gateway error");
    }

    const result = await response.json();
    const toolCall = result.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");

    const tireInfo = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(tireInfo), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("scan-tire error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
