

# Remanufactured Engines Product Catalog — All 1,034 ATK Engines with Images

## Approach

Scraping 1,034 product pages from JEGS requires a multi-step pipeline. Here is the practical approach:

### Phase 1: Database + Scraper Edge Function

**Database table**: `remanufactured_engines` to store all engine data.

**Scraper edge function**: `scrape-jegs-engines` — fetches JEGS ATK listing pages (using `pageSize=180`, so ~6 pages), parses the HTML to extract product name, part number, price, description, and engine category. Image URLs are constructed from the predictable pattern:
```text
https://www.jegs.com/images/photos/0/059/059-{VENDOR_PART}.jpg
```

The scraper runs in batches (one page per invocation) to avoid edge function timeouts. You trigger it manually ~6 times to populate all 1,034 engines.

### Phase 2: Frontend Catalog Pages

Three new routes:
```text
/remanufactured-engines              → Hub page (ATK brand, browse by manufacturer)
/remanufactured-engines/atk          → ATK catalog with sidebar + grid + pagination
/remanufactured-engines/atk/:slug    → Individual engine detail page
```

## Database Schema

```sql
CREATE TABLE remanufactured_engines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL DEFAULT 'ATK Engines',
  vendor_part_number text NOT NULL UNIQUE,
  jegs_part_number text,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  engine_make_size text,        -- e.g. "Toyota L4", "Chevy Small Block"
  displacement text,            -- e.g. "2.7L"
  fits_vehicles text,           -- e.g. "1994-1997 Toyota 4Runner, T100, Tacoma"
  engine_code text,             -- e.g. "3RZFE"
  config text,                  -- e.g. "L4 DOHC"
  block_material text,
  head_material text,
  category text,                -- "Replacement Parts" or "Performance Parts"
  price_usd numeric NOT NULL,
  image_url text,               -- constructed from JEGS pattern
  source_url text,              -- link back to JEGS product page
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
```

RLS: Public SELECT for all visitors. No INSERT/UPDATE/DELETE via client.

### Engine MakeSize Categories (from JEGS, all 42)

GM: Chevy Small Block (138), Chevy Big Block (34), GM Gen III/IV LS (49), GM V6 (63), GM L4 (16), GM L3 (2), GM L5 (2), GM V8 (2), GM Diesel (4), GM I6 (4)
Ford: Ford Small Block (66), Ford Modular (69), Ford V6 (40), Ford Big Block (19), Ford L4 (16), Ford V10 (14), Ford I6 (6), Ford Diesel (4), Ford Coyote (1)
Chrysler/Mopar: Chrysler V6 (43), Chrysler L4 (5), Chrysler V8 (10), Mopar Gen III Hemi (16), Mopar Small Block Magnum (12), Mopar Small Block LA (11)
Toyota: Toyota L4 (29), Toyota V6 (18), Toyota V8 (5)
Honda: Honda V6 (17), Honda L4 (15)
Nissan: Nissan V6 (13), Nissan L4 (11), Nissan V8 (2)
Subaru: Subaru H4 (18), Subaru L4 (1)
Others: Jeep I6 (11), Jeep L4 (1), Mazda L4 (10), Mazda V6 (3), Hyundai L4 (5), Hyundai V6 (3), Mitsubishi L4 (1), Mitsubishi V6 (4), Kia V6 (2), Kia L4 (1), Isuzu L4 (1), Isuzu V6 (1), Suzuki L4 (1), AMC/Jeep I6 (7)

## Scraper Edge Function

**File**: `supabase/functions/scrape-jegs-engines/index.ts`

- Accepts `?page=1` through `?page=6` (fetches JEGS with `pageSize=180`)
- Fetches the HTML, parses product blocks using regex patterns
- Extracts: name, vendor part number, price, description, JEGS URL
- Constructs image URL: `https://www.jegs.com/images/photos/0/059/059-{part}.jpg`
- Parses description to extract fits_vehicles, engine_code, config, displacement
- Upserts into `remanufactured_engines` table
- Returns count of engines inserted/updated

## Frontend Pages

### Hub Page: `/remanufactured-engines`
- Hero: "Remanufactured Engines — Edmonton"
- Trust bar (ATK Certified, Warranty-Backed, Made in USA)
- Grid of vehicle manufacturer cards (GM, Ford, Chrysler, Toyota, Honda, etc.) linking to ATK page filtered
- SEO content about remanufactured vs used vs rebuilt
- Part request form CTA

### ATK Catalog: `/remanufactured-engines/atk`
- Alphabetical sidebar with engine_make_size categories and counts (matching the Latest Arrivals sidebar pattern)
- Product grid: each card shows image, name, displacement, price, "Request Quote" button
- Filters: by manufacturer group, displacement, price range
- Sort: price low/high, name
- Pagination (30 per page)

### Engine Detail: `/remanufactured-engines/atk/:slug`
- Large product image (from JEGS)
- Name, price, displacement, engine code, config
- Block/head material specs table
- Fits vehicles list
- "Request This Engine" button (pre-fills part request form)
- Link to JEGS source
- Schema.org/Product structured data
- Related engines from same engine_make_size category

## Files Created/Changed

| File | Action |
|------|--------|
| Migration SQL | Create `remanufactured_engines` table + RLS |
| `supabase/functions/scrape-jegs-engines/index.ts` | Scraper edge function |
| `src/pages/RemanufacturedEngines.tsx` | Hub page |
| `src/pages/RemanufacturedEnginesATK.tsx` | ATK catalog with sidebar |
| `src/pages/RemanufacturedEngineDetail.tsx` | Detail page |
| `src/App.tsx` | Add 3 routes |
| `src/components/layout/Footer.tsx` | Add nav link |

## Execution Order

1. Create database table with migration
2. Deploy scraper edge function
3. Run scraper 6 times (pages 1-6) to populate all 1,034 engines
4. Build frontend pages reading from database
5. Add navigation links

