import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 120);
}

function extractDisplacement(name: string): string | null {
  const match = name.match(/(\d+\.\d+)L/i) || name.match(/(\d+)ci/i);
  return match ? (match[0].includes('ci') ? `${match[1]}ci` : `${match[1]}L`) : null;
}

function guessEngineMakeSize(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('chevy') || lower.includes('chevrolet')) {
    if (lower.includes('big block') || lower.match(/\b(396|402|427|454|502)\b/)) return 'Chevy Big Block';
    if (lower.includes('ls') || lower.match(/\b(ls1|ls2|ls3|ls6|lq4|lq9|ly6|l76|l92|l99)\b/i)) return 'GM Gen III/IV LS';
    if (lower.match(/\b(262|265|267|283|302|305|307|327|350|383|400)\b/) || lower.includes('small block')) return 'Chevy Small Block';
    if (lower.includes('v6') || lower.match(/\b(2\.8|3\.1|3\.4|3\.5|3\.6|3\.8|4\.3)l/)) return 'GM V6';
    if (lower.includes('l4') || lower.match(/\b(1\.4|1\.6|1\.8|2\.0|2\.2|2\.4|2\.5)l/)) return 'GM L4';
    return 'Chevy Small Block';
  }
  if (lower.includes('gm ') || lower.includes('gmc') || lower.includes('buick') || lower.includes('pontiac') || lower.includes('oldsmobile') || lower.includes('cadillac') || lower.includes('saturn')) {
    if (lower.includes('v6') || lower.match(/\b(2\.8|3\.1|3\.4|3\.5|3\.6|3\.8|4\.3)l/)) return 'GM V6';
    if (lower.match(/\b(1\.4|1\.6|1\.8|2\.0|2\.2|2\.4|2\.5)l/) || lower.includes('l4') || lower.includes('4 cyl')) return 'GM L4';
    if (lower.includes('diesel')) return 'GM Diesel';
    if (lower.includes('i6') || lower.includes('inline 6') || lower.includes('4.2l')) return 'GM I6';
    if (lower.includes('ls') || lower.match(/\b(ls1|ls2|ls3|lq4|ly6|l76)\b/i)) return 'GM Gen III/IV LS';
    return 'GM V6';
  }
  if (lower.includes('ford') || lower.includes('lincoln') || lower.includes('mercury')) {
    if (lower.includes('coyote') || lower.includes('5.0l coyote')) return 'Ford Coyote';
    if (lower.includes('modular') || lower.match(/\b(4\.6|5\.4)l/)) return 'Ford Modular';
    if (lower.includes('v10') || lower.includes('6.8l')) return 'Ford V10';
    if (lower.includes('big block') || lower.match(/\b(351m|351c|400m|429|460)\b/)) return 'Ford Big Block';
    if (lower.includes('diesel') || lower.includes('power stroke') || lower.includes('powerstroke')) return 'Ford Diesel';
    if (lower.includes('v6') || lower.match(/\b(2\.5|2\.9|3\.0|3\.8|4\.0|4\.2)l/)) return 'Ford V6';
    if (lower.match(/\b(1\.6|1\.9|2\.0|2\.3|2\.5)l/) && !lower.includes('v6')) return 'Ford L4';
    if (lower.includes('i6') || lower.includes('inline 6') || lower.includes('4.9l')) return 'Ford I6';
    if (lower.match(/\b(221|255|260|289|302|351w|5\.0)\b/i) || lower.includes('small block')) return 'Ford Small Block';
    return 'Ford Small Block';
  }
  if (lower.includes('chrysler') || lower.includes('dodge') || lower.includes('plymouth') || lower.includes('jeep') || lower.includes('mopar')) {
    if (lower.includes('hemi') || lower.match(/\b(5\.7|6\.1|6\.4)l/)) return 'Mopar Gen III Hemi';
    if (lower.includes('magnum') || lower.match(/\b(5\.2|5\.9)l.*magnum/)) return 'Mopar Small Block Magnum';
    if (lower.match(/\b(273|318|340|360)\b/) && !lower.includes('magnum')) return 'Mopar Small Block LA';
    if (lower.includes('v6') || lower.match(/\b(2\.7|3\.3|3\.5|3\.8|4\.0)l/)) return 'Chrysler V6';
    if (lower.includes('v8')) return 'Chrysler V8';
    if (lower.includes('l4') || lower.match(/\b(1\.8|2\.0|2\.4)l/)) return 'Chrysler L4';
    if (lower.includes('jeep') && (lower.includes('4.0l') || lower.includes('i6') || lower.includes('inline'))) return 'Jeep I6';
    return 'Chrysler V6';
  }
  if (lower.includes('toyota') || lower.includes('lexus') || lower.includes('scion')) {
    if (lower.includes('v8') || lower.match(/\b(4\.7|4\.6|5\.7)l/)) return 'Toyota V8';
    if (lower.includes('v6') || lower.match(/\b(3\.0|3\.3|3\.4|3\.5|4\.0)l/)) return 'Toyota V6';
    return 'Toyota L4';
  }
  if (lower.includes('honda') || lower.includes('acura')) {
    if (lower.includes('v6') || lower.match(/\b(3\.0|3\.2|3\.5|3\.7)l/)) return 'Honda V6';
    return 'Honda L4';
  }
  if (lower.includes('nissan') || lower.includes('infiniti')) {
    if (lower.includes('v8') || lower.match(/\b(5\.6)l/)) return 'Nissan V8';
    if (lower.includes('v6') || lower.match(/\b(3\.0|3\.3|3\.5|4\.0)l/)) return 'Nissan V6';
    return 'Nissan L4';
  }
  if (lower.includes('subaru')) return 'Subaru H4';
  if (lower.includes('mazda')) {
    if (lower.includes('v6') || lower.match(/\b(3\.0)l/)) return 'Mazda V6';
    return 'Mazda L4';
  }
  if (lower.includes('hyundai')) {
    if (lower.includes('v6') || lower.match(/\b(2\.7|3\.3|3\.5|3\.8)l/)) return 'Hyundai V6';
    return 'Hyundai L4';
  }
  if (lower.includes('kia')) {
    if (lower.includes('v6') || lower.match(/\b(2\.7|3\.5|3\.8)l/)) return 'Kia V6';
    return 'Kia L4';
  }
  if (lower.includes('mitsubishi')) {
    if (lower.includes('v6') || lower.match(/\b(3\.0|3\.5|3\.8)l/)) return 'Mitsubishi V6';
    return 'Mitsubishi L4';
  }
  if (lower.includes('isuzu')) {
    if (lower.includes('v6') || lower.match(/\b(3\.2|3\.5)l/)) return 'Isuzu V6';
    return 'Isuzu L4';
  }
  if (lower.includes('suzuki')) return 'Suzuki L4';
  if (lower.includes('amc')) return 'AMC/Jeep I6';
  return 'Other';
}

function parseCategory(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('high performance') || lower.includes('hp ') || lower.includes('stroker')) {
    return 'Performance Parts';
  }
  return 'Replacement Parts';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) throw new Error('FIRECRAWL_API_KEY not configured');

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '180');
    const mode = url.searchParams.get('mode') || 'scrape';

    if (mode === 'debug') {
      const jegsUrl = `https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=${pageSize}&page=${page}`;
      const resp = await fetch('https://api.firecrawl.dev/v1/scrape', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: jegsUrl, formats: ['markdown'], waitFor: 3000 }),
      });
      const data = await resp.json();
      const md = data.data?.markdown || data.markdown || '';
      const offset = parseInt(url.searchParams.get('offset') || '0');
      return new Response(
        JSON.stringify({ totalLength: md.length, offset, chunk: md.slice(offset, offset + 5000) }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Main scrape mode
    const jegsUrl = `https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=${pageSize}&page=${page}`;
    console.log(`Scraping ATK engines page ${page}: ${jegsUrl}`);

    const scrapeResponse = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: jegsUrl, formats: ['markdown'], waitFor: 3000 }),
    });

    if (!scrapeResponse.ok) {
      const errText = await scrapeResponse.text();
      throw new Error(`Firecrawl error ${scrapeResponse.status}: ${errText}`);
    }

    const scrapeData = await scrapeResponse.json();
    const markdown = scrapeData.data?.markdown || scrapeData.markdown || '';
    console.log(`Got ${markdown.length} chars of markdown`);

    // Parse products from markdown
    // Format: **ATK Engines {PART} {Name}** linked to /i/ATK-Engines/059/{PART}/...
    // Price: $X,XXX.XX
    const engines: any[] = [];
    const seen = new Set<string>();

    // Pattern 1: Extract part numbers from URLs like /059/{PART}/
    const partUrlRegex = /\/ATK-Engines\/059\/([A-Z0-9]+)\//gi;
    const allPartNumbers = new Set<string>();
    let m;
    while ((m = partUrlRegex.exec(markdown)) !== null) {
      allPartNumbers.add(m[1]);
    }

    // Pattern 2: For each part number, find name and price in nearby context
    for (const partNum of allPartNumbers) {
      if (seen.has(partNum)) continue;
      seen.add(partNum);

      // Find product name - bold text containing this part number
      const nameRegex = new RegExp(`\\*\\*ATK Engines ${partNum.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+(.+?)\\*\\*`, 'i');
      const nameMatch = markdown.match(nameRegex);
      
      // Also try: **ATK Engines {NAME}** near the part number
      let name = '';
      if (nameMatch) {
        name = `ATK Engines ${partNum} ${nameMatch[1]}`;
      } else {
        // Try broader pattern
        const broadRegex = new RegExp(`\\*\\*ATK Engines\\s+([^*]*${partNum.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^*]*)\\*\\*`, 'i');
        const broadMatch = markdown.match(broadRegex);
        if (broadMatch) {
          name = `ATK Engines ${broadMatch[1]}`.trim();
        } else {
          // Try: Part Number: 059-{PART} near a bold name
          const ctxRegex = new RegExp(`059-${partNum.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]{0,500}?\\*\\*([^*]+)\\*\\*`, 'i');
          const ctxMatch = markdown.match(ctxRegex);
          if (ctxMatch) {
            name = ctxMatch[1].trim();
          }
        }
      }

      if (!name || name.length < 10) {
        // Last resort: try any bold text near the part number
        const idx = markdown.indexOf(`059/${partNum}/`);
        if (idx > 0) {
          const chunk = markdown.slice(Math.max(0, idx - 1000), idx + 1000);
          const boldMatch = chunk.match(/\*\*ATK Engines\s+[^*]*?\*\*/i);
          if (boldMatch) {
            name = boldMatch[0].replace(/\*\*/g, '').trim();
          }
        }
        if (!name || name.length < 10) continue;
      }

      // Find price near part number
      let price = 0;
      const partIdx = markdown.indexOf(`059-${partNum}`);
      if (partIdx > 0) {
        const priceChunk = markdown.slice(partIdx, partIdx + 500);
        const priceMatch = priceChunk.match(/\$([0-9,]+\.\d{2})/);
        if (priceMatch) {
          price = parseFloat(priceMatch[1].replace(/,/g, ''));
        }
      }
      if (price === 0) {
        // Try before the part number
        const beforeChunk = markdown.slice(Math.max(0, (partIdx || 0) - 500), partIdx || 0);
        const priceMatch = beforeChunk.match(/\$([0-9,]+\.\d{2})/g);
        if (priceMatch) {
          price = parseFloat(priceMatch[priceMatch.length - 1].replace(/[$,]/g, ''));
        }
      }

      engines.push({
        brand: 'ATK Engines',
        vendor_part_number: partNum,
        jegs_part_number: `059-${partNum}`,
        name: name.replace(/\[|\]/g, ''),
        slug: slugify(`atk-${partNum}-${name}`),
        engine_make_size: guessEngineMakeSize(name),
        displacement: extractDisplacement(name),
        fits_vehicles: name.replace(/\[|\]/g, ''),
        engine_code: null,
        config: null,
        block_material: null,
        head_material: null,
        category: parseCategory(name),
        price_usd: price,
        image_url: `https://www.jegs.com/images/photos/500/059/059-${partNum.toLowerCase()}.jpg`,
        source_url: `https://www.jegs.com/i/ATK-Engines/059/${partNum}/10002/-1`,
        active: true,
      });
    }

    console.log(`Parsed ${engines.length} ATK engines from page ${page}`);

    if (engines.length === 0) {
      return new Response(
        JSON.stringify({ success: true, page, enginesFound: 0, partNumbersFound: allPartNumbers.size, mdLength: markdown.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Upsert into database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('remanufactured_engines')
      .upsert(engines, { onConflict: 'vendor_part_number' });

    if (error) throw new Error(`DB upsert failed: ${error.message}`);

    return new Response(
      JSON.stringify({
        success: true,
        page,
        enginesProcessed: engines.length,
        partNumbersFound: allPartNumbers.size,
        sampleEngines: engines.slice(0, 3),
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
