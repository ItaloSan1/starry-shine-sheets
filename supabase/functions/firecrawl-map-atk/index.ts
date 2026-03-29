const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) throw new Error('FIRECRAWL_API_KEY not configured');

    // Use map to find all ATK engine product URLs
    console.log('Mapping JEGS for ATK engine URLs...');
    const mapResponse = await fetch('https://api.firecrawl.dev/v1/map', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: 'https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=180',
        search: 'ATK Engines 059',
        limit: 5000,
        includeSubdomains: false,
      }),
    });

    if (!mapResponse.ok) {
      const errText = await mapResponse.text();
      throw new Error(`Map error ${mapResponse.status}: ${errText}`);
    }

    const mapData = await mapResponse.json();
    const links = mapData.links || [];
    
    // Filter for ATK engine product URLs
    const atkUrls = links.filter((url: string) => url.includes('/ATK-Engines/059/'));
    
    // Extract part numbers
    const partNumbers: string[] = [];
    const seen = new Set<string>();
    for (const url of atkUrls) {
      const match = url.match(/\/059\/([A-Z0-9]+)\//i);
      if (match && !seen.has(match[1])) {
        seen.add(match[1]);
        partNumbers.push(match[1]);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        totalLinks: links.length,
        atkUrls: atkUrls.length,
        uniquePartNumbers: partNumbers.length,
        samplePartNumbers: partNumbers.slice(0, 20),
        sampleUrls: atkUrls.slice(0, 10),
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
