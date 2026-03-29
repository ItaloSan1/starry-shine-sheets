

# Fix Vehicle Data Display, Slow Carousel, and Detail Page Errors

## Problems Identified

1. **Year shows "0"** — `vehicleInfo.Year` is parsed with `parseInt()` but may be stored as a number (not string) or in a different field. Need to handle both cases.
2. **Vehicle detail "Not Found"** — clicking a vehicle card navigates by MongoDB `_id`, but the edge function may still have the "Invalid time value" bug or the ObjectId lookup is failing.
3. **Homepage carousel loads slow** — `getAllVehicles()` fetches 200 vehicles and the edge function signs an image URL for each one sequentially (200 GCS signing operations). Should fetch only ~30 for the carousel.
4. **Missing images on some cards** — vehicles without `preDismantling` or `postDismantling` images show blank car icon. This is expected for some units but we should ensure the signing isn't silently failing.

## Steps

### Step 1: Fix edge function — year parsing and performance
In `supabase/functions/mongo-inventory/index.ts`:
- Fix `mapVehicleDoc` to handle `Year` as both string and number: `parseInt(String(info.Year)) || 0`
- Add a `vehiclesLight` action (or modify `vehicles` with a `light=true` param) that skips image signing entirely — returns just vehicle metadata + raw image paths. The client can show a placeholder or skip images for the carousel's non-visible pages.
- **Remove the "cache all 1,234 vehicles" block** (lines 209-221) — this is what causes the massive slowdown. On the first unfiltered request it re-queries ALL docs and signs ALL images.
- For the carousel specifically, only fetch `pageSize=30` and sign only those 30 thumbnails.

### Step 2: Fix homepage carousel — fetch only 30 units
In `src/components/home/LatestArrivals.tsx`:
- Change `getAllVehicles()` to `getLatestArrivals(30)` — fetch only 30 newest vehicles instead of 200.
- This reduces the edge function from signing 200 images to 30.

### Step 3: Fix vehicle detail page
In `supabase/functions/mongo-inventory/index.ts` (vehicle action):
- Ensure ObjectId parsing doesn't silently fail
- Add logging for the vehicle lookup to diagnose "not found" cases
- Ensure VIN-decoded specs (engine, drivetrain, etc.) are properly merged into the response

### Step 4: Remove expensive full-cache block
Delete lines 209-221 in the edge function that fetch ALL documents on the first unfiltered request. This single block is signing 1,234 images and causing timeouts / slow loads.

### Step 5: Redeploy edge function

## Technical Details

**Root cause of slow carousel**: Lines 209-221 fetch all 1,234 docs and sign every image on first request. GCS signing requires a crypto operation per image — 1,234 sequential crypto ops take 10+ seconds, causing the function to timeout or appear frozen.

**Root cause of "0" year**: `vehicleInfo.Year` may be stored as integer `2020` in MongoDB. `parseInt(2020)` works, but if it's `null` or `undefined`, it returns `NaN` → `|| 0` gives `0`. The real fix is to also check `doc.year` as a fallback field.

**Root cause of "Vehicle Not Found"**: Likely the edge function is timing out before reaching the vehicle lookup, or the previous "Invalid time value" fix wasn't deployed. Need to confirm deployment succeeded.

