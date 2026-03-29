

# Implement Image Quality Toggle for Faster Loading

## Current Problem

Every image URL requires an RSA cryptographic signing operation (CPU-intensive) on the edge function. For the list page with 50 vehicles, that's 50 sign operations. For the detail page, it signs ALL images (4-8+ per vehicle). This is the primary cause of slow loading.

The "HD toggle" mentioned in the architecture memory was planned but never implemented.

## Solution

### 1. Edge Function: Add `quality` parameter

Add a `quality` query parameter to the `mongo-inventory` edge function:

- **`quality=thumb`** (default for list view): Return only the first pre-dismantled image URL, signed. Skip post-dismantled images entirely.
- **`quality=standard`** (default for detail view): Return all images signed normally.
- **`quality=hd`** (toggle on detail page): Same as standard but signals the frontend to render full-resolution (no CSS constraints).

Additionally, **batch sign images in parallel** using `Promise.all()` instead of sequential `for` loops — this alone could cut detail page load time in half.

### 2. Latest Arrivals List Page

No visible change needed. Already loads 1 image per vehicle. The parallel signing improvement speeds this up automatically.

### 3. Vehicle Detail Page: Add HD Toggle

- Add a small toggle button (e.g., "HD" pill) in the image gallery area
- **Default (off)**: Images render at standard container size with `object-cover` — browser only downloads what it needs
- **HD (on)**: Opens lightbox-style full-resolution view
- Lazy-load thumbnails strip images using `loading="lazy"`

### 4. Home Page Carousel Optimization

- Limit the carousel to 8 vehicles max (currently may load 50+)
- Use the `thumb` quality level
- Add `loading="lazy"` to non-visible carousel slides

## Files Changed

| File | Change |
|------|--------|
| `supabase/functions/mongo-inventory/index.ts` | Parallelize image signing with `Promise.all()`, add `quality` param |
| `src/pages/VehicleDetailPage.tsx` | Add HD toggle button, lazy-load thumbnail strip |
| `src/pages/LatestArrivals.tsx` | Minor — already optimized, just ensure `loading="lazy"` is on all images |
| `src/components/home/LatestArrivals.tsx` | Limit to 8 vehicles, use lazy loading |

## Technical Detail

The biggest performance win comes from parallelizing the signing. Current code:
```text
for (const doc of docs) {
  const thumbUrl = await generateSignedUrl(...)  // sequential, blocking
}
```

Changed to:
```text
const vehicles = await Promise.all(docs.map(async doc => {
  const thumbUrl = await generateSignedUrl(...)  // parallel
  return mapVehicleDoc(doc, ...)
}))
```

For 50 vehicles, this could reduce edge function response time from ~5s to ~1-2s.

