

# Ensure All Engines and Cylinder Heads Have Working Pictures

## Problem

All 1,418 engines and 912 cylinder heads have `image_url` values stored, but many are likely broken:

1. **Guessed CDN URLs**: When the ATK API returned no `partImageUrl`, the scraper fell back to a pattern: `https://cdn.lkqcorp.com/atk/catalog/engines/{partnum}/atk{partnum}-1.jpg`. This path uses `/engines/` even for cylinder heads, and many part numbers may not have images at that exact path.

2. **JEGS URLs** (196 engines, 13 heads): These may hotlink-block or 404 since they're from a third-party retailer.

3. **No validation**: Images were never checked for actual availability — the `onError` handler silently swaps to `placeholder.svg`, making it look like items have no pictures.

## Solution

### Step 1: Probe the ATK API for correct image URLs

Re-run the ATK catalog API search and **update image_url** for every record where `partImageUrl` is available from the API response. The API returns the actual CDN image URL when one exists — we should trust that over guessed patterns.

Also fix the cylinder head CDN fallback pattern. Currently it uses `/engines/` — try `/cylinderheads/` or `/cylinder-heads/` as the subfolder for heads.

### Step 2: Add an image validation edge function mode

Add an `image-check` mode to the existing `firecrawl-scrape-atk` edge function that:
- Fetches batches of records with CDN/JEGS image URLs
- Sends HEAD requests to each URL to check if it returns 200
- For broken URLs, attempts alternative ATK CDN patterns:
  - `https://cdn.lkqcorp.com/atk/catalog/engines/{PARTNUM}/atk{PARTNUM}-1.jpg` (uppercase)
  - `https://cdn.lkqcorp.com/atk/catalog/cylinderheads/{partnum}/atk{partnum}-1.jpg`
  - The `partImageUrl` from the ATK product detail page
- Updates records with working URLs, or sets a known placeholder for truly missing images

### Step 3: Re-scrape with image priority

Re-invoke the `atk-api-search` mode for both engines and cylinder heads with `doUpsert=true`. Since the API returns `partImageUrl` when available, this will overwrite guessed URLs with real ones for any records the API has images for.

### Step 4: Frontend fallback improvement

Update the `onError` handlers in the listing and detail pages to try the ATK CDN pattern as a secondary fallback before showing `placeholder.svg`. This provides a client-side safety net.

## Files Changed

| File | Change |
|------|--------|
| `supabase/functions/firecrawl-scrape-atk/index.ts` | Add `image-check` mode; fix cylinder head CDN path pattern from `/engines/` to proper subfolder |
| `src/pages/RemanufacturedEnginesATK.tsx` | Improve `onError` to try ATK CDN fallback before placeholder |
| `src/pages/CylinderHeadsATK.tsx` | Same `onError` improvement |
| `src/pages/RemanufacturedEngineDetail.tsx` | Same `onError` improvement |
| `src/pages/CylinderHeadDetail.tsx` | Same `onError` improvement |

## Execution Order

1. Update edge function with corrected CDN patterns and image-check mode
2. Re-run `atk-api-search` for both tables to pull fresh `partImageUrl` values from the API
3. Run `image-check` mode to validate remaining URLs and fix broken ones
4. Update frontend with smarter fallback chain
5. Verify images display correctly on both catalog pages

