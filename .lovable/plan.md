

# Remove Duplicate Entries from Engines and Cylinder Heads

## Problem
Duplicate entries exist in both the `remanufactured_engines` and `cylinder_heads` tables. These were caused by the same parts being scraped from multiple sources (JEGS API and ATK catalog API), resulting in records with the same `vendor_part_number` but different UUIDs.

## Pricing Verification (Already Correct)
- **Engines**: All pages call `formatCad(price_usd)` which applies **1.38 × 1.10 = 1.518** multiplier (10% markup over CAD conversion). Confirmed in `RemanufacturedEnginesATK.tsx` (line 362) and `RemanufacturedEngineDetail.tsx` (line 185).
- **Cylinder heads**: All pages call `formatCad(price_usd, CYLINDER_HEAD_MARKUP)` which applies **1.38 × 1.15 = 1.587** multiplier (15% markup). Confirmed in `CylinderHeadsATK.tsx` (line 318) and `CylinderHeadDetail.tsx` (line 163).
- **Schema.org structured data**: Both detail pages use `usdToCad()` with the correct markup for the `offers.price` field in CAD currency.
- No changes needed for pricing — it is implemented correctly everywhere.

## Deduplication Plan

### Step 1: Identify duplicates via SQL query
Run queries to find records sharing the same `vendor_part_number`, keeping the one with the best data (prefer non-zero price, has image, most recent).

### Step 2: Delete duplicates from both tables
Use the database insert tool (which supports DELETE) to remove duplicate rows, keeping one canonical record per `vendor_part_number`:

**For `remanufactured_engines`:**
```sql
DELETE FROM remanufactured_engines
WHERE id NOT IN (
  SELECT DISTINCT ON (vendor_part_number) id
  FROM remanufactured_engines
  ORDER BY vendor_part_number, 
    (CASE WHEN price_usd > 0 THEN 0 ELSE 1 END),
    (CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END),
    created_at DESC
);
```

**For `cylinder_heads`:**
```sql
DELETE FROM cylinder_heads
WHERE id NOT IN (
  SELECT DISTINCT ON (vendor_part_number) id
  FROM cylinder_heads
  ORDER BY vendor_part_number,
    (CASE WHEN price_usd > 0 THEN 0 ELSE 1 END),
    (CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END),
    created_at DESC
);
```

### Step 3: Add unique constraint
Create a migration to add a unique index on `vendor_part_number` for both tables to prevent future duplicates.

### Step 4: Verify counts
Query final counts to confirm no duplicates remain.

## Files Changed

| File | Change |
|------|--------|
| Database (via insert tool) | DELETE duplicate rows from both tables |
| Database (via migration) | Add unique index on `vendor_part_number` for `remanufactured_engines` and `cylinder_heads` |

## No Frontend Changes Needed
Pricing is already correct. The frontend will automatically show fewer (correct) results once duplicates are removed.

