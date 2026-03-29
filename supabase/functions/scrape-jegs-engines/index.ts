import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 120);
}

function extractDisplacement(name: string): string | null {
  const match = name.match(/(\d+\.\d+)L/i);
  return match ? `${match[1]}L` : null;
}

function extractEngineCode(name: string): string | null {
  // Common patterns like 3RZFE, LS1, 5.7L, VQ35DE, etc.
  const patterns = [
    /\b([A-Z0-9]{2,6}FE)\b/,
    /\b(LS[0-9X])\b/i,
    /\b(LT[0-9])\b/i,
    /\b(VQ\d{2}[A-Z]{2})\b/,
    /\b(SR20[A-Z]{2,3})\b/,
    /\b(KA24[A-Z]{2})\b/,
    /\b(EJ\d{2,3})\b/,
    /\b(K[0-9]{2}[A-Z])\b/,
    /\b(J[0-9]{2}[A-Z])\b/,
    /\b(\d{3}ci)\b/i,
  ];
  for (const p of patterns) {
    const m = name.match(p);
    if (m) return m[1];
  }
  return null;
}

function extractFitsVehicles(desc: string): string | null {
  // Try to find year ranges and vehicle names
  const match = desc.match(/(?:for|fits)\s+([\d]{4}[-–]\d{4}\s+.+?)(?:\.|,\s*(?:with|featuring|includes))/i);
  return match ? match[1].trim() : null;
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
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = 180;

    console.log(`Scraping JEGS ATK engines page ${page} (pageSize=${pageSize})`);

    // Fetch JEGS listing page for ATK Engines
    const jegsUrl = `https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=${pageSize}&page=${page}`;
    const response = await fetch(jegsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
      },
    });

    if (!response.ok) {
      throw new Error(`JEGS returned ${response.status}`);
    }

    const html = await response.text();
    console.log(`Fetched ${html.length} chars of HTML`);

    // Parse product blocks from the HTML
    // JEGS product cards contain: product name, JEGS part number, vendor part number, price, description
    const engines: any[] = [];

    // Match product blocks - JEGS uses structured product cards
    // Pattern: find product containers with data
    const productRegex = /class="product-name"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    const priceRegex = /class="product-price"[^>]*>[\s\S]*?\$([0-9,]+\.\d{2})/gi;
    const partNumRegex = /(?:Part|Vendor Part)\s*(?:#|Number|No\.?)\s*:?\s*(\d{3,6}[-]?\d*)/gi;
    const vendorPartRegex = /Vendor Part[^:]*:\s*(\d+)/gi;
    const jegsPartRegex = /JEGS Part[^:]*:\s*(\d+-\d+)/gi;
    const descRegex = /class="product-desc[^"]*"[^>]*>([\s\S]*?)<\/(?:div|p|span)>/gi;

    // Alternative: parse using a simpler approach - find all product links and prices
    // JEGS product URLs follow pattern: /i/ATK-Engines/059/PARTNUMBER/...
    const productLinkRegex = /<a[^>]*href="(\/i\/ATK-Engines\/059\/([^/]+)\/[^"]*)"[^>]*>(.*?)<\/a>/gi;
    let linkMatch;
    const productMap = new Map<string, any>();

    while ((linkMatch = productLinkRegex.exec(html)) !== null) {
      const [, href, partNum, rawName] = linkMatch;
      const name = rawName.replace(/<[^>]*>/g, '').trim();
      if (name && name.length > 10 && !productMap.has(partNum)) {
        productMap.set(partNum, {
          href: `https://www.jegs.com${href}`,
          vendor_part_number: partNum,
          name,
        });
      }
    }

    // Also try a broader product card pattern
    const cardRegex = /data-product-id="([^"]*)"[\s\S]*?href="([^"]*\/ATK-Engines\/059\/(\d+)[^"]*)"[\s\S]*?class="[^"]*product-name[^"]*"[^>]*>([\s\S]*?)<\/[\s\S]*?(?:\$([0-9,]+\.\d{2}))/gi;
    let cardMatch;
    while ((cardMatch = cardRegex.exec(html)) !== null) {
      const [, prodId, href, partNum, rawName, price] = cardMatch;
      const name = rawName.replace(/<[^>]*>/g, '').trim();
      if (name && partNum) {
        const existing = productMap.get(partNum) || {};
        productMap.set(partNum, {
          ...existing,
          href: `https://www.jegs.com${href}`,
          vendor_part_number: partNum,
          name: name || existing.name,
          price: price ? parseFloat(price.replace(',', '')) : existing.price,
        });
      }
    }

    // Extract prices near part numbers
    const priceNearPartRegex = /059-(\d+)[\s\S]{0,500}?\$([0-9,]+\.\d{2})/gi;
    let priceMatch;
    while ((priceMatch = priceNearPartRegex.exec(html)) !== null) {
      const [, partNum, price] = priceMatch;
      if (productMap.has(partNum)) {
        const p = productMap.get(partNum);
        if (!p.price) {
          p.price = parseFloat(price.replace(',', ''));
        }
      }
    }

    // Also try reverse: price then part number
    const reversePriceRegex = /\$([0-9,]+\.\d{2})[\s\S]{0,200}?059-(\d+)/gi;
    let revMatch;
    while ((revMatch = reversePriceRegex.exec(html)) !== null) {
      const [, price, partNum] = revMatch;
      if (productMap.has(partNum)) {
        const p = productMap.get(partNum);
        if (!p.price) {
          p.price = parseFloat(price.replace(',', ''));
        }
      }
    }

    // Try to find Engine MakeSize from the page
    // JEGS categorizes by "Engine MakeSize" in the sidebar/filters
    const makeSizeRegex = /Engine MakeSize[^:]*:\s*([^<"]+)/gi;
    
    // For each product, try to determine engine_make_size from the name
    function guessEngineMakeSize(name: string): string {
      const lower = name.toLowerCase();
      // GM
      if (lower.includes('chevy') || lower.includes('chevrolet')) {
        if (lower.includes('big block') || lower.match(/\b(396|402|427|454|502)\b/)) return 'Chevy Big Block';
        if (lower.includes('ls') || lower.match(/\b(ls1|ls2|ls3|ls6|lq4|lq9|ly6|l76|l92|l99|lc9|lh6)\b/i)) return 'GM Gen III/IV LS';
        if (lower.match(/\b(262|265|267|283|302|305|307|327|350|400)\b/) || lower.includes('small block')) return 'Chevy Small Block';
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
      // Ford
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
      // Chrysler/Mopar
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
      // Toyota
      if (lower.includes('toyota') || lower.includes('lexus') || lower.includes('scion')) {
        if (lower.includes('v8') || lower.match(/\b(4\.7|4\.6|5\.7)l/)) return 'Toyota V8';
        if (lower.includes('v6') || lower.match(/\b(3\.0|3\.3|3\.4|3\.5|4\.0)l/)) return 'Toyota V6';
        return 'Toyota L4';
      }
      // Honda
      if (lower.includes('honda') || lower.includes('acura')) {
        if (lower.includes('v6') || lower.match(/\b(3\.0|3\.2|3\.5|3\.7)l/)) return 'Honda V6';
        return 'Honda L4';
      }
      // Nissan
      if (lower.includes('nissan') || lower.includes('infiniti')) {
        if (lower.includes('v8') || lower.match(/\b(5\.6)l/)) return 'Nissan V8';
        if (lower.includes('v6') || lower.match(/\b(3\.0|3\.3|3\.5|4\.0)l/)) return 'Nissan V6';
        return 'Nissan L4';
      }
      // Subaru
      if (lower.includes('subaru')) {
        return 'Subaru H4';
      }
      // Mazda
      if (lower.includes('mazda')) {
        if (lower.includes('v6') || lower.match(/\b(3\.0)l/)) return 'Mazda V6';
        return 'Mazda L4';
      }
      // Hyundai / Kia
      if (lower.includes('hyundai')) {
        if (lower.includes('v6') || lower.match(/\b(2\.7|3\.3|3\.5|3\.8)l/)) return 'Hyundai V6';
        return 'Hyundai L4';
      }
      if (lower.includes('kia')) {
        if (lower.includes('v6') || lower.match(/\b(2\.7|3\.5|3\.8)l/)) return 'Kia V6';
        return 'Kia L4';
      }
      // Mitsubishi
      if (lower.includes('mitsubishi')) {
        if (lower.includes('v6') || lower.match(/\b(3\.0|3\.5|3\.8)l/)) return 'Mitsubishi V6';
        return 'Mitsubishi L4';
      }
      // Isuzu
      if (lower.includes('isuzu')) {
        if (lower.includes('v6') || lower.match(/\b(3\.2|3\.5)l/)) return 'Isuzu V6';
        return 'Isuzu L4';
      }
      // Suzuki
      if (lower.includes('suzuki')) return 'Suzuki L4';
      // AMC
      if (lower.includes('amc')) return 'AMC/Jeep I6';

      return 'Other';
    }

    // Build final engine list
    for (const [partNum, product] of productMap) {
      if (!product.name || !product.price) continue;
      
      const engineMakeSize = guessEngineMakeSize(product.name);
      const displacement = extractDisplacement(product.name);
      const engineCode = extractEngineCode(product.name);
      const fitsVehicles = extractFitsVehicles(product.name) || product.name;
      const category = parseCategory(product.name);
      const slug = slugify(`atk-${partNum}-${product.name}`);
      const imageUrl = `https://www.jegs.com/images/photos/500/059/059-${partNum}.jpg`;

      engines.push({
        brand: 'ATK Engines',
        vendor_part_number: partNum,
        jegs_part_number: `059-${partNum}`,
        name: product.name,
        slug,
        engine_make_size: engineMakeSize,
        displacement,
        fits_vehicles: fitsVehicles,
        engine_code: engineCode,
        config: null,
        block_material: null,
        head_material: null,
        category,
        price_usd: product.price,
        image_url: imageUrl,
        source_url: product.href,
        active: true,
      });
    }

    console.log(`Parsed ${engines.length} engines from page ${page}`);

    if (engines.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          page,
          message: 'No engines found on this page. HTML parsing may need adjustment.',
          htmlPreview: html.slice(0, 2000),
          totalHtmlLength: html.length,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Upsert into database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('remanufactured_engines')
      .upsert(engines, { onConflict: 'vendor_part_number' });

    if (error) {
      console.error('Upsert error:', error);
      throw new Error(`DB upsert failed: ${error.message}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        page,
        enginesProcessed: engines.length,
        message: `Successfully upserted ${engines.length} engines from page ${page}`,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Scraper error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
