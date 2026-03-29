

# ATK Cylinder Heads Catalog + Engine Gap Fill

## Summary

Use Firecrawl to scrape the ATK Sales website (atksales.com) for:
1. All cylinder head products — new product category
2. Any missing engine products not yet in the database

Then build a cylinder heads catalog page with 15% markup pricing, and update the pricing utility to support product-specific markup rates.

## Data Collection (Firecrawl)

The ATK Sales site is a JavaScript SPA hosted on `atksales.com`. Products are rendered client-side, so Firecrawl (which renders JS) is needed.

### Scraping Strategy

1. **Map the site** using Firecrawl map to discover all product URLs under `atksales.com/products/`
2. **Scrape cylinder heads category page** — extract product names, part numbers, prices, and image URLs from `atksales.com/products/cylinder-heads`
3. **Scrape engines category page** — compare against existing 578 engines in DB, identify missing ones
4. **Scrape individual product pages** if listing pages truncate data

Image URLs on ATK Sales follow the pattern: `https://cdn.lkqcorp.com/atk/images/...` — these will be stored directly.

### Edge Function

Create/update `supabase/functions/firecrawl-scrape-atk/index.ts` to:
- Accept a `category` parameter (engines or cylinder-heads)
- Scrape the ATK Sales site via Firecrawl with `waitFor` for JS rendering
- Parse product data from the rendered markdown/HTML
- Upsert into the appropriate database table

## Database Changes

### New table: `cylinder_heads`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, auto-generated |
| brand | text | Default 'ATK' |
| vendor_part_number | text | Unique |
| name | text | Product name (rewritten) |
| slug | text | URL-friendly |
| price_usd | numeric | Base price |
| image_url | text | From cdn.lkqcorp.com |
| displacement | text | Extracted |
| engine_make_size | text | Categorized (GM, Ford, etc.) |
| fits_vehicles | text | Vehicle compatibility |
| config | text | Specs |
| active | boolean | Default true |
| created_at | timestamptz | Default now() |

RLS: Public SELECT (same as remanufactured_engines).

## Pricing Changes

Update `src/lib/pricing.ts`:
- Add a `formatCadWithMarkup(usd, markupPercent)` function
- Cylinder heads use 15% markup: `1.38 * 1.15 = 1.587`
- Engines keep existing 10% markup: `1.38 * 1.10 = 1.518`

## Frontend Pages

### 1. Cylinder Heads Hub: `/remanufactured-cylinder-heads`
- New page `src/pages/CylinderHeads.tsx`
- Similar layout to RemanufacturedEngines hub
- Links to ATK cylinder heads catalog

### 2. ATK Cylinder Heads Catalog: `/remanufactured-cylinder-heads/atk`
- New page `src/pages/CylinderHeadsATK.tsx`
- Reuse the same sidebar filter pattern from RemanufacturedEnginesATK
- Filter by make, then displacement
- Product cards with images, CAD prices (15% markup)
- Pagination, search, sort

### 3. Cylinder Head Detail: `/remanufactured-cylinder-heads/atk/:slug`
- New page `src/pages/CylinderHeadDetail.tsx`
- Same layout pattern as RemanufacturedEngineDetail
- Specs table, related products, CTA
- CAD pricing with 15% markup

## Routing & Navigation

- Add 3 new routes in `App.tsx`
- Add "Cylinder Heads" link in Footer and any relevant navigation
- Update the Remanufactured Engines hub page to cross-link to cylinder heads

## Content

All product text will be rewritten to be unique. No ATK Sales branding or references. Images will use `referrerPolicy="no-referrer"`.

## Files Changed

| File | Change |
|------|--------|
| `src/lib/pricing.ts` | Add `formatCadWithMarkup()` for variable markup rates |
| `supabase/functions/firecrawl-scrape-atk/index.ts` | Update to support cylinder heads + ATK Sales site |
| New migration | Create `cylinder_heads` table with RLS |
| `src/pages/CylinderHeads.tsx` | New hub page |
| `src/pages/CylinderHeadsATK.tsx` | New catalog with sidebar filters |
| `src/pages/CylinderHeadDetail.tsx` | New detail page |
| `src/App.tsx` | Add 3 routes |
| `src/components/layout/Footer.tsx` | Add nav link |

## Execution Order

1. Create `cylinder_heads` table via migration
2. Update pricing utility with variable markup support
3. Update Firecrawl scraper to handle ATK Sales site for both engines and cylinder heads
4. Run scraper to populate cylinder heads data
5. Run scraper to find missing engines and fill gaps
6. Build all 3 frontend pages
7. Add routes and navigation links

