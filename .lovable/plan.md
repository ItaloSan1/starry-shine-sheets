

# Remove JEGS References & Rewrite Content

## JEGS References Found

### Frontend (User-Facing) — Must Fix
1. **`src/pages/RemanufacturedEngineDetail.tsx` line 127**: Specs table shows "JEGS Part #" label
2. **`src/pages/RemanufacturedEngineDetail.tsx` lines 227-236**: "View on JEGS" external link with icon
3. **`src/pages/RemanufacturedEngineDetail.tsx` line 15**: Interface references `jegs_part_number`
4. **Image URLs in database**: All `image_url` values point to `jegs.com/images/...` — these are hotlinked from JEGS servers, which is both a legal risk and a reliability risk (they can block hotlinking at any time)

### Backend (Not User-Facing) — Low Priority
5. **`supabase/functions/scrape-jegs-engines/index.ts`**: The scraper itself references JEGS throughout — this is internal tooling, not visible to users, but comments reference JEGS
6. **Database column `jegs_part_number`**: Stored in DB, referenced in types

## Changes

### 1. Detail Page — Remove JEGS references
**File**: `src/pages/RemanufacturedEngineDetail.tsx`

- Remove `jegs_part_number` from the interface and specs table
- Remove the "View on JEGS" external link entirely (lines 227-236)
- Remove the `ExternalLink` icon import (no longer needed)
- Remove `source_url` from the interface since it links to JEGS
- Rename "Part Number" label to "Manufacturer Part #" for clarity

### 2. Rewrite Product Descriptions / SEO Content
**File**: `src/pages/RemanufacturedEngines.tsx`

Current text references ATK marketing copy. Rewrite the SEO section with unique, original content:
- Rewrite "Why Choose ATK Engines?" section with original language emphasizing Eskimo Auto's role as a supplier
- Rewrite the "Remanufactured vs Used vs Rebuilt" section with unique phrasing
- Keep the same information conveyed but use completely different wording

### 3. Rewrite Detail Page Content
**File**: `src/pages/RemanufacturedEngineDetail.tsx`

- Change "Warranty-backed remanufactured engine" to unique copy like "Factory-spec remanufactured powerplant — fully warranted"
- Rewrite CTA text from "Request This Engine" to "Get a Quote on This Engine"
- Rewrite "Need Help With Your Engine Order?" to something unique

### 4. Handle JEGS-Hosted Images
The `image_url` column currently stores URLs like `https://www.jegs.com/images/photos/500/059/059-{PART}.jpg`. These are hotlinked from JEGS servers. Two options:

**Option A (recommended)**: Keep the URLs in the database for now but add `referrerPolicy="no-referrer"` to img tags so JEGS can't easily detect hotlinking. Add a fallback to `/placeholder.svg` (already in place). This works short-term.

**Option B (long-term)**: Create an edge function that proxies/caches images to your own storage bucket. This is more work but eliminates the dependency entirely.

I'll implement Option A now and note Option B as a future improvement.

### 5. Database Column Rename (Optional)
The `jegs_part_number` column can stay in the database — it's not exposed to users after the frontend changes. Renaming it would require a migration and type regeneration. Not worth the risk for a non-user-facing change.

## Files Changed

| File | Change |
|------|--------|
| `src/pages/RemanufacturedEngineDetail.tsx` | Remove JEGS Part #, remove "View on JEGS" link, add `referrerPolicy` to images, rewrite copy |
| `src/pages/RemanufacturedEngines.tsx` | Rewrite SEO content sections with unique original copy |
| `src/pages/RemanufacturedEnginesATK.tsx` | Add `referrerPolicy="no-referrer"` to product card images |

