

# Fix: Add Pre-Dismantled Image Support + Priority Order

## Problem
The edge function (`firebase-inventory/index.ts`) only reads two image fields:
- `inv.postDismantledImages`
- `task.postDisassembly.partDisassembledImages`

It completely ignores **pre-dismantled images**. Vehicles like ES1850 and ES1851 that only have pre-dismantled photos appear with zero images and may effectively be "invisible."

## Solution
Update the edge function to also collect pre-dismantled images, and reorder the image priority so **pre-dismantled photos appear first** (showing the vehicle in better condition), with post-dismantled as fallback.

### Changes to `supabase/functions/firebase-inventory/index.ts`

**In `extractVehiclesFromTasks` (lines ~330-344)** — reorder image collection:
1. First: `inv.preDismantledImages` (or similar field name — may need to check `preDisassemblyImages`, `preDismantleImages`)
2. Second: `inv.postDismantledImages`
3. Third: `task.postDisassembly.partDisassembledImages`

**In the vehicle detail handler (lines ~415-431)** — same reordering for the detail page image gallery.

**Add field discovery**: Since we don't know the exact Firestore field name for pre-dismantled images, add temporary logging that dumps all field keys from a few inventory objects to discover the correct field name. Likely candidates:
- `preDismantledImages`
- `preDisassemblyImages`
- `images`
- `vehicleImages`

### Also remove debug logging
Clean up the ES1850/ES1851 debug logging from the previous investigation (lines 303-321).

### Implementation steps
1. Add temporary field-name discovery logging to find the pre-dismantled image field
2. Deploy and check logs to confirm the field name
3. Update image collection logic with correct field name and priority order (pre-dismantled first)
4. Remove debug/discovery logging
5. Redeploy final version

