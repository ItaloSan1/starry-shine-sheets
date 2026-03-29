

# Populate ~900 Cylinder Heads from ATK Sales API

## Problem
Only 58 cylinder heads in the database (from JEGS search). The full ~900 catalog lives on atksales.com, which uses a backend API at `extservices.lkqcorp.com/api/atksales/catalog/v1/`. JEGS doesn't list ATK cylinder heads as a browsable category (returns 0 items).

## Discovery
The ATK Sales API has a working `/categories` GET endpoint confirming Cylinder Heads = `categoryID: 2`. The `/search` endpoint requires **POST** (returns 405 on GET). Previous attempts to reverse-engineer the POST payload hit .NET deserialization errors.

## Approach: Edge Function with Direct API POST

Create/update the `firecrawl-scrape-atk` edge function to call the ATK Sales search API directly (no Firecrawl needed for this). The search endpoint is `POST https://extservices.lkqcorp.com/api/atksales/catalog/v1/search`.

### Step 1: Crack the POST payload
The edge function will try multiple payload formats against the search endpoint, iterating through known .NET model binding patterns. Based on earlier research, the site sends:
- `AttributeName: "pcn"`, `Values: ["Cylinder Heads"]`, `Condition: "eq"`
- Pagination via `page` and `count` params

The function will attempt these payload shapes and log results until we find the one that returns product data.

### Step 2: Paginate and extract all products
Once the correct payload works, paginate through all pages (count=100 per page, ~9 pages for 900 products). Extract:
- `partNumber` → `vendor_part_number`
- Product name → `name` (rewritten)
- `listPrice` → `price_usd`
- Image URL from CDN pattern: `https://cdn.lkqcorp.com/atk/catalog/cylinder-heads/{partnum}/atk{partnum}-1.jpg`
- Make → `engine_make_size` (use the `make` field from the API directly)
- Displacement extracted from name

### Step 3: Upsert into `cylinder_heads` table
Batch upsert all products using `ON CONFLICT (vendor_part_number) DO UPDATE`. This will update the existing 58 and add the remaining ~840.

## Files Changed

| File | Change |
|------|--------|
| `supabase/functions/firecrawl-scrape-atk/index.ts` | Rewrite to call ATK Sales API directly via POST for cylinder heads; add pagination; upsert into `cylinder_heads` table |

## Execution
1. Deploy the updated edge function
2. Invoke it to probe the search endpoint and find the correct payload format
3. Once working, run it to paginate through all ~900 cylinder heads and insert them
4. Verify count matches expectations

