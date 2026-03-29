

# Fix: Query the `vehicles` Collection Instead of (or in Addition to) `tasks`

## Problem
The edge function currently queries a `tasks` collectionGroup to extract vehicle data. But the actual vehicle records — including ES1850 and ES1851, and likely their pre-dismantled images — live in a separate **`vehicles`** collection in Firestore. This is why ES1850/ES1851 are missing and why pre-dismantled images aren't being found.

## Plan

### Step 1: Discovery — Query the `vehicles` collection and log its structure
**File**: `supabase/functions/firebase-inventory/index.ts`

- Add a new `discover-vehicles` action that queries the top-level `vehicles` collection (paginated, same approach as `queryAllTasks`)
- Log: total document count, field names from 3-5 sample documents, and specifically look for any documents with stock numbers ES1850/ES1851
- Log all field names containing "image", "photo", "pre", "dismantle" to find the correct pre-dismantled image field
- Deploy and check logs to confirm collection structure

### Step 2: Switch primary data source to `vehicles` collection
Based on discovery results:

- Add a `queryVehiclesCollection()` function that queries the `vehicles` collection directly
- Extract vehicle data (stock number, year, make, model, VIN, images) from the `vehicles` documents
- Use the correct field name for pre-dismantled images (discovered in Step 1)
- Set image priority: **pre-dismantled first**, then post-dismantled, then part-disassembled
- Optionally still cross-reference `tasks` for additional part-disassembled images

### Step 3: Update vehicle detail handler
- Same image priority reordering for the detail page
- Pull VIN from the vehicles collection document
- Continue VIN decoding for specs display

### Step 4: Clean up
- Remove discovery logging
- Final deploy

## Technical Notes
- The `vehicles` collection is likely a top-level collection (not a subcollection), so we use a standard collection query instead of `collectionGroup`
- This should also resolve the "CPU Time exceeded" errors since the vehicles collection likely has ~1,300 documents vs 13,221 task documents — much faster to query
- Image signing logic stays the same, just applied to the correct fields

