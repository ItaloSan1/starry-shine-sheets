

# Improve Vehicle Image Quality & Speed

## Current Architecture
- Images stored in Google Cloud Storage (Firebase bucket)
- Every API call generates RSA-signed URLs server-side (1-hour expiry)
- List views: sign 1 image per vehicle (thumbnail mode)
- Detail views: sign all images per vehicle
- No image resizing — raw uploaded photos served at full resolution
- No CDN caching — signed URLs bypass most CDN layers
- Client-side: `loading="lazy"` used, but no placeholder/blur-up

## Problems
1. **Speed**: Every page load hits the edge function to generate fresh signed URLs, even for the same vehicles
2. **Image size**: Full-resolution photos served even for 160x120 thumbnail strips — wastes bandwidth on mobile
3. **No visual feedback**: Images pop in with no placeholder, causing layout shift
4. **Signed URL churn**: 1-hour expiry means users returning within minutes still trigger re-signing

## Proposed Improvements

### 1. Cache Signed URLs in the Database (biggest speed win)
- Add a `vehicle_image_cache` table in the database with columns: `vehicle_id`, `image_path`, `signed_url`, `expires_at`
- Edge function checks cache first — if a valid URL exists (expiring > 10 min from now), return it directly without RSA signing
- Generate with 12-hour expiry instead of 1 hour to maximize cache hits
- Reduces RSA signing operations by ~90% for repeat visits

### 2. Serve Optimized Thumbnails via GCS Image Transformation
- Google Cloud Storage supports on-the-fly image resizing via the `=w400` suffix on `lh3.googleusercontent.com` or via Firebase Extensions
- Alternative: Create a lightweight edge function that proxies images through a resize step and caches the result
- For list views, request images at 400px width max — cuts payload by 60-80%

### 3. Progressive Image Loading with Blur Placeholders
- Add a `BlurImage` component that shows a CSS blur placeholder (solid color based on average) while loading
- Use `IntersectionObserver` for smarter lazy loading with preload-ahead distance
- Prevents layout shift and gives visual feedback during load

### 4. Increase Client-Side Cache TTL
- Current in-memory cache: 1 minute for vehicles
- Increase to 5 minutes for list views (inventory doesn't change that fast)
- Add `stale-while-revalidate` pattern so users see cached data instantly while fresh data loads in background

### 5. Preload Next Page Images
- When user is on page 1, prefetch page 2 vehicle thumbnails in the background
- Improves perceived speed when paginating

## Implementation Order
1. Cache signed URLs in DB (edge function + migration) — largest impact
2. Increase client cache TTL + stale-while-revalidate
3. BlurImage component for progressive loading
4. Thumbnail resizing (may require Firebase Extension or proxy function)
5. Preload next page

## Technical Details

**New table migration:**
```sql
CREATE TABLE vehicle_image_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id text NOT NULL,
  image_path text NOT NULL,
  signed_url text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(vehicle_id, image_path)
);
ALTER TABLE vehicle_image_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON vehicle_image_cache FOR SELECT TO anon, authenticated USING (true);
```

**Edge function change:** Before signing, query cache. After signing, upsert cache. Expiry set to 12 hours.

**BlurImage component:** Wraps `<img>` with a gray/muted background that fades out on load via `onLoad` event.

**Files modified:**
- `supabase/functions/mongo-inventory/index.ts` — add cache lookup/write, increase URL expiry
- `src/lib/mongo-inventory.ts` — increase client cache from 1min to 5min, add stale-while-revalidate
- New: `src/components/ui/BlurImage.tsx` — progressive image component
- `src/pages/LatestArrivals.tsx` — use BlurImage
- `src/pages/VehicleDetailPage.tsx` — use BlurImage

