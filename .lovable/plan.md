

# Insert All 1,034 ATK Engines

## Current State
- 5 engines in database, 132 parsed and ready
- `fetch_website` truncates large pages, yielding ~20-25 products per fetch
- Need ~900 more engines after inserting the 132

## Approach

### Step 1: Insert 132 already-parsed engines
Use `psql` batch INSERT with `ON CONFLICT (vendor_part_number) DO UPDATE` to upsert all 132 engines immediately.

### Step 2: Fetch remaining engines in smaller batches
Instead of `pageSize=180` (which gets truncated), use `pageSize=24` (JEGS default). This means:
- ~1,034 engines / 24 per page = ~44 pages
- Subtract engines already captured = estimate ~38-40 more fetches needed
- Each `fetch_website` call returns manageable content with all product data visible

### Step 3: Parse and insert continuously
For each fetched page:
1. Extract part numbers, names, prices from the markdown
2. Apply `guessEngineMakeSize` categorization
3. Generate slugs, image URLs, displacement
4. Batch INSERT via `psql`

### Step 4: Verify final count
Run `SELECT COUNT(*) FROM remanufactured_engines` to confirm we hit ~1,034.

## Data per engine
- `brand`: "ATK Engines"
- `vendor_part_number`, `name`, `slug`, `price_usd`
- `engine_make_size`: categorized (GM, Ford, Toyota, etc.)
- `displacement`: extracted from name
- `image_url`: `https://www.jegs.com/images/photos/500/059/059-{PART}.jpg`
- `active`: true

## Execution
This will require multiple sequential fetch+insert cycles. I will not stop until all ~1,034 engines are in the database.

