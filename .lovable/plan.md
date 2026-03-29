

# Carousel Timing + Secondary Sort Fix

Two small changes:

## 1. Carousel rotation: 5s → 7s
**File**: `src/components/home/LatestArrivals.tsx`
- Change `setInterval(nextPage, 5000)` to `setInterval(nextPage, 7000)`

## 2. Secondary sort by arrival date within same year
**File**: `supabase/functions/firebase-inventory/index.ts`
- Update the vehicle sort to add a tiebreaker: when two vehicles share the same year, sort by `dateArrived` descending (newest arrival first)
- Change: `vehicles.sort((a, b) => (b.year || 0) - (a.year || 0))` → `vehicles.sort((a, b) => (b.year || 0) - (a.year || 0) || new Date(b.dateArrived || 0).getTime() - new Date(a.dateArrived || 0).getTime())`

