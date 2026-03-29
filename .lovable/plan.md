

# Build MongoDB Inventory Integration

## Problem
Three issues visible in your screenshots:
1. **Vehicle detail page errors** — clicking ES1806 shows "Vehicle Not Found" / WORKER_LIMIT error because the Firebase edge function queries 13,000+ task documents, exceeding compute limits
2. **Missing images** — some vehicles show broken images because the Firebase `tasks` collection doesn't map all images to stock numbers
3. **Missing vehicles** — newer stock (ES1850+) not in Firebase tasks collection at all

MongoDB has all 1,234 vehicles with proper fields: `stockNumber`, `vinNumber`, `vehicleInfo`, `preDismantling.images`, `postDismantling.images`.

## Solution

Replace the Firebase-based vehicle data pipeline with MongoDB. Keep Firebase edge function for now (fallback) but route all vehicle queries through a new `mongo-inventory` edge function.

## Steps

### Step 1: Create `mongo-inventory` edge function
New edge function at `supabase/functions/mongo-inventory/index.ts` that:
- Connects to MongoDB `yard-app.vehicles-inventory` collection
- Supports actions: `vehicles` (list with pagination), `vehicle` (single by ID), `makes`, `models`
- For `vehicles`: returns paginated results (default 50), supports `page`, `pageSize`, `make`, `model`, `year`, `search` query params
- For `vehicle`: returns single vehicle by MongoDB `_id`, includes VIN decoding via NHTSA API
- Images: collects from `preDismantling.images` (priority) then `postDismantling.images`, generates signed URLs using existing Firebase service account for GCS bucket
- Parses `vehicleInfo` map for Make/Model/Year/Trim/BodyClass/VehicleType
- Server-side caching (5 min TTL) to avoid repeated MongoDB queries
- Pagination support with `skip`/`limit` for the dropdown (50/100/150/200)

### Step 2: Create `mongo-inventory` client adapter
New file `src/lib/mongo-inventory.ts`:
- Same `InventoryProvider` interface as Firebase adapter
- Calls the new edge function
- Client-side cache for vehicle list
- `getAllVehicles` supports pagination params
- `getVehicleById` returns full detail including VIN-decoded specs

### Step 3: Update Latest Arrivals page
Modify `src/pages/LatestArrivals.tsx`:
- Switch from `firebaseInventoryProvider` to new MongoDB provider
- Add pagination with page size dropdown (50, 100, 150, 200)
- Add page navigation (prev/next)
- Use lower-resolution thumbnail URLs for grid view (append resize param or use smaller image set)
- Show loading skeleton during pagination

### Step 4: Update Vehicle Detail page
Modify `src/pages/VehicleDetailPage.tsx`:
- Switch to MongoDB provider
- Show all images with thumbnail strip (low-res) and HD toggle
- Display full VIN-decoded specs (engine, drivetrain, body, fuel, transmission, origin, vehicle type)
- Add proper error handling with retry button instead of blank page
- Fallback: if MongoDB fails, try cached vehicle list data

### Step 5: Update Home page latest arrivals section
Update `src/components/home/LatestArrivals.tsx` to use MongoDB provider.

### Step 6: Clean up
- Remove `mongo-discover` edge function (discovery complete)
- Update memory notes

## Technical Details

**MongoDB document structure** (from discovery):
```text
stockNumber: "ES1850"
vinNumber: "1HGCV..."
vehicleInfo: { Make, Model, Year, Trim, BodyClass, VehicleType }
preDismantling: { images: ["vehicles-pre-dismantle/..."] }
postDismantling: { images: ["vehicles-post-dismantle/..."] }
```

**Image resolution strategy**:
- Grid/list view: serve images as-is (GCS signed URLs already work)
- Detail page: show all images in thumbnail strip, click to view full size
- HD toggle: future enhancement if GCS supports resize transforms

**Pagination API**:
```text
GET /mongo-inventory?action=vehicles&page=1&pageSize=50&make=FORD&year=2020&search=bronco
GET /mongo-inventory?action=vehicle&id=672d2d31ecbe757479b526c0
```

**Why this fixes the errors**:
- MongoDB query for 1,234 docs is fast vs 13,000+ Firestore task docs
- Single vehicle lookup is a direct `findOne` by `_id` — no full scan needed
- Pre-dismantled images are properly linked in MongoDB
- No more WORKER_LIMIT errors

