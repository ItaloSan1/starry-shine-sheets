

# Fix Vehicle Detail 404 and Year = 0

## Problems Found

**1. Vehicle detail returns 404** — The edge function tries `findOne({ _id: new ObjectId(id) })`, but the `_id` in MongoDB is likely stored as a **string**, not an ObjectId. The ObjectId query silently returns null, then the string fallback only checks `stockNumber`, missing the string `_id` match.

**2. Year always shows 0** — `vehicleInfo.Year` may be stored under a different key, or `vehicleInfo` is a BSON Map that doesn't support direct property access. Make/Model work because the aggregation pipeline accesses them differently. Need to add broader field fallbacks and diagnostic logging.

## Steps

### Step 1: Fix vehicle lookup in edge function
In `supabase/functions/mongo-inventory/index.ts`, update the `vehicle` action to also try matching `_id` as a plain string:

```ts
let doc = null;
try { doc = await col.findOne({ _id: new ObjectId(id) }); } catch {}
if (!doc) doc = await col.findOne({ _id: id as any });
if (!doc) doc = await col.findOne({ stockNumber: id });
```

### Step 2: Fix Year parsing with broader field access
Update `mapVehicleDoc` to handle `vehicleInfo` as either a plain object or a BSON Map, and check multiple field paths:

```ts
const info = doc.vehicleInfo || {};
const getField = (obj: any, ...keys: string[]) => {
  for (const k of keys) {
    const v = typeof obj.get === 'function' ? obj.get(k) : obj[k];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  return undefined;
};

const year = Number(getField(info, 'Year', 'year', 'ModelYear') ?? doc.year ?? 0) || 0;
const make = String(getField(info, 'Make', 'make') ?? doc.make ?? '').toUpperCase();
const model = String(getField(info, 'Model', 'model') ?? doc.model ?? '');
const trim = String(getField(info, 'Trim', 'trim') ?? '');
```

### Step 3: Add diagnostic logging
Add `console.log` for the first document in the `vehicles` action to see the actual field names/types. Also log the vehicle lookup attempt in the `vehicle` action.

### Step 4: Redeploy edge function

## Technical Details

- The `_id` field in this MongoDB collection appears to be stored as a hex string rather than a native BSON ObjectId. `new ObjectId("69c60e88...")` creates a different value than the string `"69c60e88..."`, so `findOne` returns null.
- The `vehicleInfo` field may be a BSON Map (from Firestore migration), where properties must be accessed via `.get()` rather than dot notation. The aggregation pipeline (`$vehicleInfo.Make`) works because MongoDB handles this internally, but the JS driver returns a Map object.

