import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 120);
}

function extractDisplacement(text: string): string | null {
  const match = text.match(/(\d+\.\d+)\s*L/i) || text.match(/(\d+)\s*ci/i);
  return match ? (match[0].toLowerCase().includes('ci') ? `${match[1]}ci` : `${match[1]}L`) : null;
}

function guessEngineMakeSize(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes('chev') || lower.includes('gm ') || lower.includes('chevy')) {
    if (lower.includes('ls') || lower.match(/\b(ls1|ls2|ls3|ls6|lq4|lq9|ly6|l76|l92|l99)\b/i)) return 'GM Gen III/IV LS';
    if (lower.match(/\b(v6|3\.1|3\.4|3\.5|3\.6|3\.8|4\.3)/)) return 'GM V6';
    if (lower.match(/\b(1\.4|1\.6|1\.8|2\.0|2\.2|2\.4|2\.5)l/)) return 'GM L4';
    return 'Chevy Small Block';
  }
  if (lower.includes('ford') || lower.includes('merc')) {
    if (lower.includes('coyote') || lower.includes('5.0l coyote')) return 'Ford Coyote';
    if (lower.match(/\b(4\.6|5\.4)l/) || lower.includes('modular')) return 'Ford Modular';
    if (lower.match(/\b(v6|3\.0|3\.8|4\.0|4\.2)l?/)) return 'Ford V6';
    if (lower.match(/\b(2\.0|2\.3|2\.5)l/) && !lower.includes('v6')) return 'Ford L4';
    return 'Ford Small Block';
  }
  if (lower.includes('chry') || lower.includes('dodge') || lower.includes('jeep') || lower.includes('mopar')) {
    if (lower.includes('hemi') || lower.match(/\b(5\.7|6\.1|6\.4)l?/)) return 'Mopar Gen III Hemi';
    if (lower.match(/\b(v6|3\.3|3\.5|3\.6|3\.7|3\.8|4\.0|4\.7)/)) return 'Chrysler V6';
    if (lower.match(/\b(2\.0|2\.4)l/)) return 'Chrysler L4';
    return 'Chrysler V6';
  }
  if (lower.includes('toyota') || lower.includes('lexus')) {
    if (lower.match(/\b(v8|4\.7|5\.7)l?/)) return 'Toyota V8';
    if (lower.match(/\b(v6|3\.0|3\.3|3\.4|3\.5|4\.0)l?/)) return 'Toyota V6';
    return 'Toyota L4';
  }
  if (lower.includes('honda') || lower.includes('acura')) {
    if (lower.match(/\b(v6|3\.0|3\.2|3\.5|3\.7)/)) return 'Honda V6';
    return 'Honda L4';
  }
  if (lower.includes('nissan') || lower.includes('infin')) {
    if (lower.match(/\b(v8|5\.6)/)) return 'Nissan V8';
    if (lower.match(/\b(v6|3\.0|3\.3|3\.5|4\.0)/)) return 'Nissan V6';
    return 'Nissan L4';
  }
  if (lower.includes('subaru')) return 'Subaru H4';
  if (lower.includes('mazda')) return lower.match(/v6/) ? 'Mazda V6' : 'Mazda L4';
  if (lower.includes('hyun') || lower.includes('kia')) {
    if (lower.match(/\b(v6|2\.7|3\.3|3\.5|3\.8)/)) return lower.includes('kia') ? 'Kia V6' : 'Hyundai V6';
    return lower.includes('kia') ? 'Kia L4' : 'Hyundai L4';
  }
  if (lower.includes('mits')) return lower.match(/v6/) ? 'Mitsubishi V6' : 'Mitsubishi L4';
  if (lower.includes('isuzu')) return 'Isuzu L4';
  if (lower.includes('suzuki')) return 'Suzuki L4';
  if (lower.includes('vw') || lower.includes('volkswagen') || lower.includes('audi')) return 'VW/Audi';
  if (lower.includes('bmw')) return 'BMW';
  if (lower.includes('mercedes') || lower.includes('benz')) return 'Mercedes';
  return 'Other';
}

function isCylinderHead(title: string, specs: string): boolean {
  const combined = (title + ' ' + specs).toLowerCase();
  return (combined.includes('head') || combined.includes('cyl hd') || combined.includes('cyl. hd') || combined.includes('cylinder hd'))
    && !combined.includes('header') && !combined.includes('headlight') && !combined.includes('headgasket');
}

function parseProductFromMarkdown(pno: string, md: string) {
  const titleMatch = md.match(new RegExp(`####\\s*${pno.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n+([^\\n]+)`, 'i'));
  const title = titleMatch ? titleMatch[1].trim() : '';
  const priceMatch = md.match(/\*\*\$([0-9,]+\.\d{2})\s*USD\*\*/);
  const price = priceMatch ? parseFloat(priceMatch[1].replace(/,/g, '')) : 0;
  const engineSizeMatch = md.match(/Engine Size:\s*\*\*([^*]+)\*\*/);
  const engineSize = engineSizeMatch ? engineSizeMatch[1].trim() : null;
  const imgMatch = md.match(/https:\/\/cdn\.lkqcorp\.com\/atk\/catalog\/[^)\s]+/);
  const imageUrl = imgMatch ? imgMatch[0] : null;
  return { pno, title, price, engineSize, imageUrl, isCH: isCylinderHead(title, md) };
}

function buildCylinderHeadRecord(info: any) {
  return {
    brand: 'ATK',
    vendor_part_number: info.pno,
    name: `ATK ${info.pno} ${info.title}`,
    slug: slugify(`atk-${info.pno}-${info.title}`),
    engine_make_size: guessEngineMakeSize(info.title),
    displacement: info.engineSize || extractDisplacement(info.title),
    fits_vehicles: info.title,
    config: null,
    price_usd: info.price,
    image_url: info.imageUrl,
    active: true,
  };
}

async function upsertCylinderHeads(records: any[]) {
  if (records.length === 0) return;
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase
    .from('cylinder_heads')
    .upsert(records, { onConflict: 'vendor_part_number' });
  if (error) throw new Error(`DB upsert failed: ${error.message}`);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const firecrawlKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!firecrawlKey) throw new Error('FIRECRAWL_API_KEY not configured');

    const url = new URL(req.url);
    const mode = url.searchParams.get('mode') || 'sitemap-scrape';

    // ── LIST SITEMAP ──
    if (mode === 'list-sitemap') {
      const resp = await fetch('https://www.atksales.com/sitemap.xml');
      const xml = await resp.text();
      const parts = [...xml.matchAll(/pno=([A-Za-z0-9]+)/g)].map(m => m[1]);
      return new Response(
        JSON.stringify({ total: parts.length, parts }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── BATCH-SUBMIT: submit URLs, return batchId immediately ──
    if (mode === 'batch-submit') {
      const body = await req.json();
      const partNumbers: string[] = body.partNumbers || [];
      if (partNumbers.length === 0) throw new Error('No part numbers provided');
      if (partNumbers.length > 100) throw new Error('Max 100 parts per batch');

      const urls = partNumbers.map(pno => `https://www.atksales.com/product-detail/?pno=${pno}`);
      console.log(`Submitting batch of ${urls.length} URLs to Firecrawl...`);

      const batchResp = await fetch('https://api.firecrawl.dev/v1/batch/scrape', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${firecrawlKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls, formats: ['markdown'], waitFor: 8000 }),
      });

      if (!batchResp.ok) {
        const errText = await batchResp.text();
        throw new Error(`Firecrawl batch submit failed ${batchResp.status}: ${errText}`);
      }

      const batchData = await batchResp.json();
      return new Response(
        JSON.stringify({ success: true, batchId: batchData.id, urlCount: urls.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── BATCH-POLL: check batch status, process + upsert if complete ──
    if (mode === 'batch-poll') {
      const batchId = url.searchParams.get('batchId');
      if (!batchId) throw new Error('batchId parameter required');

      const pollResp = await fetch(`https://api.firecrawl.dev/v1/batch/scrape/${batchId}`, {
        headers: { 'Authorization': `Bearer ${firecrawlKey}` },
      });
      const pollData = await pollResp.json();

      if (pollData.status !== 'completed') {
        return new Response(
          JSON.stringify({ success: true, status: pollData.status, completed: pollData.completed, total: pollData.total }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Process completed results
      const pages = pollData.data || [];
      const cylinderHeads: any[] = [];
      const summary: any[] = [];

      for (const page of pages) {
        const md = page.markdown || '';
        const sourceUrl = page.metadata?.sourceURL || '';
        const pnoMatch = sourceUrl.match(/pno=([A-Za-z0-9]+)/);
        if (!pnoMatch) continue;
        const pno = pnoMatch[1];
        const info = parseProductFromMarkdown(pno, md);
        summary.push({ pno, title: info.title, price: info.price, isCH: info.isCH });
        if (info.isCH && info.title) {
          cylinderHeads.push(buildCylinderHeadRecord(info));
        }
      }

      await upsertCylinderHeads(cylinderHeads);

      return new Response(
        JSON.stringify({ success: true, status: 'completed', totalPages: pages.length, cylinderHeadsFound: cylinderHeads.length, summary: summary.slice(0, 20) }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── LIST-AND-SUBMIT: fetch sitemap chunk + submit batch, return batchId ──
    if (mode === 'list-and-submit') {
      const body = await req.json();
      const offset = body.offset || 0;
      const batchSize = Math.min(body.batchSize || 100, 100);

      const resp = await fetch('https://www.atksales.com/sitemap.xml');
      const xml = await resp.text();
      const allParts = [...xml.matchAll(/pno=([A-Za-z0-9]+)/g)].map(m => m[1]);

      const chunk = allParts.slice(offset, offset + batchSize);
      if (chunk.length === 0) {
        return new Response(
          JSON.stringify({ success: true, done: true, total: allParts.length, offset }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const urls = chunk.map(pno => `https://www.atksales.com/product-detail/?pno=${pno}`);
      const batchResp = await fetch('https://api.firecrawl.dev/v1/batch/scrape', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${firecrawlKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls, formats: ['markdown'], waitFor: 8000 }),
      });

      if (!batchResp.ok) {
        const errText = await batchResp.text();
        throw new Error(`Firecrawl batch submit failed ${batchResp.status}: ${errText}`);
      }

      const batchData = await batchResp.json();
      return new Response(
        JSON.stringify({
          success: true,
          batchId: batchData.id,
          offset,
          batchSize: chunk.length,
          nextOffset: offset + batchSize,
          totalParts: allParts.length,
          done: offset + batchSize >= allParts.length,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── ATK-API-SEARCH: call ATK Sales search API for cylinder heads ──
    if (mode === 'atk-api-search') {
      const body = await req.json();
      const page = body.page || 1;
      const pageSize = body.pageSize || 100;
      const pcn = body.pcn || 'Cylinder Heads';
      const make = body.make || '';

      const payload = {
        FieldsList: ['partNumber', 'description', 'price', 'category', 'make', 'imagePath'],
        QueryModel: [
          { AttributeName: 'pcn', Condition: 'eq', Values: [pcn] },
          ...(make ? [{ AttributeName: 'make', Condition: 'eq', Values: [make] }] : []),
        ],
        SortCriteria: [{ Field: 'partNumber', Direction: 'asc' }],
        CustomerGroup: 'retail',
        page, pageSize,
      };

      console.log(`ATK API search: pcn=${pcn}, make=${make}, page=${page}, pageSize=${pageSize}`);
      const searchResp = await fetch('https://extservices.lkqcorp.com/api/atksales/catalog/v1/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const text = await searchResp.text();
      return new Response(
        JSON.stringify({ success: searchResp.ok, status: searchResp.status, data: text.slice(0, 5000) }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── ATK-API-CATEGORIES: get full categories list ──
    if (mode === 'atk-api-categories') {
      const r = await fetch('https://extservices.lkqcorp.com/api/atksales/catalog/v1/categories', { signal: AbortSignal.timeout(15000) });
      const data = await r.json();
      return new Response(
        JSON.stringify({ success: true, data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── ATK-API-PRODUCTS: fetch products by category from ATK API ──
    if (mode === 'atk-api-products') {
      const body = await req.json();
      const category = body.category || 'Cylinder Heads';
      const categoryId = body.categoryId || 2;
      const make = body.make || '';
      const page = body.page || 1;
      const pageSize = body.pageSize || 100;

      const endpoints = [
        { method: 'GET', url: `https://extservices.lkqcorp.com/api/atksales/catalog/v1/categories/${categoryId}/products?page=${page}&pageSize=${pageSize}` },
        { method: 'GET', url: `https://extservices.lkqcorp.com/api/atksales/catalog/v1/category/${categoryId}/products?page=${page}&pageSize=${pageSize}` },
        { method: 'GET', url: `https://extservices.lkqcorp.com/api/atksales/catalog/v1/products/${categoryId}?page=${page}&pageSize=${pageSize}` },
        { method: 'POST', url: 'https://extservices.lkqcorp.com/api/atksales/catalog/v1/products', body: JSON.stringify({ categoryId, make, page, pageSize, pcn: category }) },
        { method: 'POST', url: 'https://extservices.lkqcorp.com/api/atksales/catalog/v1/search', body: JSON.stringify({ searchTerm: category, page, pageSize }) },
        { method: 'GET', url: `https://extservices.lkqcorp.com/api/atksales/catalog/v1/search?q=${encodeURIComponent(category)}&page=${page}&pageSize=${pageSize}` },
        { method: 'POST', url: 'https://extservices.lkqcorp.com/api/atksales/catalog/v1/catalog', body: JSON.stringify({ pcn: category, make, page, pageSize }) },
        { method: 'GET', url: `https://extservices.lkqcorp.com/api/atksales/catalog/v1/product-listing?pcn=${encodeURIComponent(category)}&make=${encodeURIComponent(make)}&page=${page}&pageSize=${pageSize}` },
      ];

      const results: any[] = [];
      for (const ep of endpoints) {
        try {
          const opts: any = { method: ep.method, signal: AbortSignal.timeout(10000) };
          if (ep.body) {
            opts.headers = { 'Content-Type': 'application/json' };
            opts.body = ep.body;
          }
          const r = await fetch(ep.url, opts);
          const text = await r.text();
          results.push({ method: ep.method, url: ep.url, status: r.status, body: text.slice(0, 2000) });
          if (r.ok) break; // stop if we found a working endpoint
        } catch (e) {
          results.push({ method: ep.method, url: ep.url, error: e.message });
        }
      }

      return new Response(
        JSON.stringify({ success: true, results }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── SCRAPE-BATCH (sequential, kept for backward compat) ──
    if (mode === 'scrape-batch') {
      const body = await req.json();
      const partNumbers: string[] = body.partNumbers || [];
      if (partNumbers.length === 0) throw new Error('No part numbers provided');
      if (partNumbers.length > 10) throw new Error('Max 10 parts per batch');

      const cylinderHeads: any[] = [];
      const results: any[] = [];

      for (const pno of partNumbers) {
        try {
          const scrapeResp = await fetch('https://api.firecrawl.dev/v1/scrape', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${firecrawlKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: `https://www.atksales.com/product-detail/?pno=${pno}`, formats: ['markdown'], waitFor: 8000 }),
          });
          const scrapeData = await scrapeResp.json();
          const md = scrapeData.data?.markdown || '';
          const info = parseProductFromMarkdown(pno, md);
          results.push(info);
          if (info.isCH && info.title) cylinderHeads.push(buildCylinderHeadRecord(info));
        } catch (e) {
          results.push({ pno, error: e.message });
        }
      }

      await upsertCylinderHeads(cylinderHeads);

      return new Response(
        JSON.stringify({ success: true, total: partNumbers.length, cylinderHeadsFound: cylinderHeads.length, results }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── SCRAPE-DIRECT (single page debug) ──
    if (mode === 'scrape-direct') {
      const pno = url.searchParams.get('pno');
      if (!pno) throw new Error('pno parameter required');
      const scrapeResp = await fetch('https://api.firecrawl.dev/v1/scrape', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${firecrawlKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: `https://www.atksales.com/product-detail/?pno=${pno}`, formats: ['markdown'], waitFor: 8000 }),
      });
      const scrapeData = await scrapeResp.json();
      const md = scrapeData.data?.markdown || '';
      return new Response(
        JSON.stringify({ success: true, markdown: md.slice(0, 5000), fullLength: md.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // ── DEFAULT: JEGS engine scraping ──
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '180');
    const jegsUrl = `https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=${pageSize}&page=${page}`;
    console.log(`Scraping ATK engines page ${page}: ${jegsUrl}`);

    const scrapeResponse = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${firecrawlKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: jegsUrl, formats: ['markdown'], waitFor: 3000 }),
    });

    if (!scrapeResponse.ok) {
      const errText = await scrapeResponse.text();
      throw new Error(`Firecrawl error ${scrapeResponse.status}: ${errText}`);
    }

    const scrapeData = await scrapeResponse.json();
    const markdown = scrapeData.data?.markdown || scrapeData.markdown || '';

    const engines: any[] = [];
    const seen = new Set<string>();
    const partUrlRegex = /\/ATK-Engines\/059\/([A-Z0-9]+)\//gi;
    const allPartNumbers = new Set<string>();
    let m;
    while ((m = partUrlRegex.exec(markdown)) !== null) allPartNumbers.add(m[1]);

    for (const partNum of allPartNumbers) {
      if (seen.has(partNum)) continue;
      seen.add(partNum);
      const nameRegex = new RegExp(`\\*\\*ATK Engines ${partNum.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+(.+?)\\*\\*`, 'i');
      const nameMatch = markdown.match(nameRegex);
      let name = '';
      if (nameMatch) {
        name = `ATK Engines ${partNum} ${nameMatch[1]}`;
      } else {
        const broadRegex = new RegExp(`\\*\\*ATK Engines\\s+([^*]*${partNum.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^*]*)\\*\\*`, 'i');
        const broadMatch = markdown.match(broadRegex);
        if (broadMatch) name = `ATK Engines ${broadMatch[1]}`.trim();
      }
      if (!name || name.length < 10) continue;

      let price = 0;
      const partIdx = markdown.indexOf(`059-${partNum}`);
      if (partIdx > 0) {
        const priceChunk = markdown.slice(partIdx, partIdx + 500);
        const priceMatch = priceChunk.match(/\$([0-9,]+\.\d{2})/);
        if (priceMatch) price = parseFloat(priceMatch[1].replace(/,/g, ''));
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
        engine_code: null, config: null, block_material: null, head_material: null,
        category: 'Replacement Parts',
        price_usd: price,
        image_url: `https://www.jegs.com/images/photos/500/059/059-${partNum.toLowerCase()}.jpg`,
        source_url: `https://www.jegs.com/i/ATK-Engines/059/${partNum}/10002/-1`,
        active: true,
      });
    }

    if (engines.length > 0) {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase.from('remanufactured_engines').upsert(engines, { onConflict: 'vendor_part_number' });
      if (error) throw new Error(`DB upsert failed: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, page, enginesProcessed: engines.length }),
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
