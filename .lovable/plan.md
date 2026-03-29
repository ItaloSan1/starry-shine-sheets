

# Speed Up Page Loading

## Root Causes

1. **Duplicate API calls on LatestArrivals page**: The makes useEffect calls `mongoInventoryProvider.getMakes()` AND then does a raw `fetch` for the same data — 2 requests instead of 1
2. **Extra 200-vehicle fetch for year filter**: On mount, it fetches 200 vehicles just to extract unique years, triggering a full image-signing pass for 200 vehicles
3. **No caching**: Every page navigation re-fetches everything from scratch — no in-memory cache, no HTTP cache headers
4. **New MongoDB connection per request**: Edge functions are stateless, so every API call opens a new TCP+TLS connection to MongoDB Atlas
5. **Going live won't fix this** — the bottleneck is the edge function cold start + MongoDB connection + image signing, not the preview environment

## Changes

### 1. Edge Function: Add Cache-Control headers and a `years` action
**File**: `supabase/functions/mongo-inventory/index.ts`
- Add `Cache-Control: public, max-age=300` (5 min) to `makes` and `models` responses — these rarely change
- Add `Cache-Control: public, max-age=60` to `vehicles` list responses
- Add a new `action=years` that runs a fast `$group` aggregation on `vehicleInfo.Year` — no image signing needed, returns in ~100ms
- Redeploy the edge function

### 2. Frontend: In-memory API cache
**File**: `src/lib/mongo-inventory.ts`
- Add a simple `Map<string, { data, expiry }>` cache
- Cache `getMakes()` for 5 minutes, `getModels()` for 5 minutes, `getVehiclesPaginated()` for 1 minute
- This eliminates redundant network calls when navigating between Home → Latest Arrivals → Home

### 3. Fix duplicate makes fetch
**File**: `src/pages/LatestArrivals.tsx`
- Remove the raw `fetch` call inside the makes useEffect — use only `mongoInventoryProvider` which already calls the same endpoint
- The provider's `getMakes()` returns names only; update it to return `{ name, count }[]` so the sidebar has counts
- Replace the 200-vehicle fetch for years with the new `action=years` endpoint

### 4. Update getMakes to return counts
**File**: `src/lib/mongo-inventory.ts`
- Add `getMakesWithCounts()` method returning `{ name: string; count: number }[]`
- Used by the sidebar, cached for 5 min

## Performance Impact
- **Makes/models**: Cached after first load, zero network requests on subsequent navigations
- **Years filter**: ~100ms aggregation vs ~3-5s for 200 vehicles with image signing
- **Page revisits**: Cached vehicle results serve instantly for 1 minute
- **HTTP caching**: Browser-level caching means even hard navigations skip the network for 60-300s

## Files Changed
| File | Change |
|------|--------|
| `supabase/functions/mongo-inventory/index.ts` | Cache-Control headers, `years` action |
| `src/lib/mongo-inventory.ts` | In-memory cache, `getMakesWithCounts()`, `getYears()` via API |
| `src/pages/LatestArrivals.tsx` | Remove duplicate fetch, use cached provider methods |

