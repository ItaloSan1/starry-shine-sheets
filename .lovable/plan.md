

# Populate All 1,034 ATK Engines into Database

## Current State
- 5 engines in the database (from earlier test insert)
- Scraper edge function exists but JEGS blocks server-side requests (403)
- No Firecrawl connector available

## Approach

Use the `fetch_website` tool to scrape all 6 JEGS listing pages (pageSize=180), extract product data (part number, name, price, engine category), then batch-insert via `psql` directly into the `remanufactured_engines` table.

### Steps

1. **Fetch all 6 JEGS pages** using `fetch_website` with the ATK Engine listing URL, paginated:
   - `https://www.jegs.com/part-type/Engine?Brand=ATK+Engines&pageSize=180&page=1` through `page=6`
   
2. **Parse product data** from the fetched markdown/HTML — extract:
   - Vendor part number (from URL pattern `/059/{partnum}/`)
   - Product name
   - Price
   - Engine MakeSize category (derived from name using the `guessEngineMakeSize` logic already in the scraper)

3. **Generate SQL INSERT statements** — construct image URLs from the pattern `https://www.jegs.com/images/photos/500/059/059-{PART}.jpg`, generate slugs, extract displacement/engine codes

4. **Batch insert via psql** — insert all engines in chunks, using `ON CONFLICT (vendor_part_number) DO UPDATE` to handle the 5 existing records

5. **Verify count** — confirm all ~1,034 engines are in the database

### Data per engine
- `brand`: "ATK Engines"
- `vendor_part_number`: from JEGS listing
- `name`: product title (rewritten to remove JEGS-specific language)
- `slug`: auto-generated from part number + name
- `engine_make_size`: categorized by the existing logic (GM, Ford, Toyota, etc.)
- `displacement`: extracted from name (e.g. "2.7L")
- `price_usd`: from listing
- `image_url`: constructed from JEGS photo pattern
- `active`: true

### Technical Notes
- The `fetch_website` tool can handle JEGS pages since it renders like a browser
- Each page yields ~180 products; 6 pages covers all 1,034
- SQL inserts will be batched in groups of ~50 to avoid command-line limits
- Existing 5 records will be updated (not duplicated) via upsert

