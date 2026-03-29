

# Locate and Add Missing ATK Engines via Catalog API

## Problem
We have 578 engines in the database. The ATK catalog likely has 800-1,000+ engines, same as the ~912 cylinder heads we found. The existing `atk-api-search` mode already works — we just used it with `pcn=Cylinder Heads`. We need to use it with engine categories.

## Approach

### Step 1: Discover engine category names
The `atk-api-categories` mode already exists. Invoke it to get the full category list from ATK's API. Engine categories are likely named things like "Long Block Engines", "Short Block Engines", "Complete Engines", etc.

### Step 2: Add an engine upsert path to the edge function
The current `atk-api-search` mode hardcodes upserts to the `cylinder_heads` table. Add a `table` parameter so we can target `remanufactured_engines` instead. Map ATK API fields to the engine table schema (which has additional columns like `block_material`, `head_material`, `engine_code`).

### Step 3: Run the API search for each engine category
Paginate through all engine categories (likely "Long Block Engines" and possibly others), upserting into `remanufactured_engines` on `vendor_part_number` conflict. Include $0-price engines with the same "Call for Pricing" treatment.

### Step 4: Update engine detail page for "Call for Pricing"
Same pattern as cylinder heads — show "Call for Pricing" instead of $0.

## Files Changed

| File | Change |
|------|--------|
| `supabase/functions/firecrawl-scrape-atk/index.ts` | Add `table` param to `atk-api-search` mode; add engine-specific field mapping and upsert to `remanufactured_engines` |
| `src/pages/RemanufacturedEngineDetail.tsx` | Handle $0 price with "Call for Pricing" label |
| `src/pages/RemanufacturedEnginesATK.tsx` | Handle $0 price with "Call for Pricing" label |

## Execution Order
1. Invoke `atk-api-categories` to discover exact engine category names
2. Update edge function with engine upsert support
3. Deploy and run for each engine category, paginating through all pages
4. Update frontend for "Call for Pricing" on $0 engines
5. Verify final engine count

