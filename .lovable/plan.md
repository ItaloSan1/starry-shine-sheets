

# Poll Batch + Continue Scraping All ATK Cylinder Heads

## What we'll do

Use the existing edge function's `batch-poll` and `list-and-submit` modes to systematically process all 12,000+ ATK sitemap URLs in batches of 100, identifying and inserting cylinder heads.

## Execution steps

1. **Poll batch `019d3b4c-d6ec-76d9-a17c-32df290bcdd1`** — call the edge function with `?mode=batch-poll&batchId=019d3b4c-d6ec-76d9-a17c-32df290bcdd1` to check status and process any completed results into the `cylinder_heads` table.

2. **Submit remaining batches via `list-and-submit`** — loop through the sitemap using `offset` increments of 100:
   - Call `?mode=list-and-submit` with `{ offset: 100, batchSize: 100 }`, then `{ offset: 200 }`, etc.
   - Each call returns a `batchId` for the submitted batch
   - Poll each `batchId` until complete, then move to the next batch

3. **Process results** — for each completed batch, the edge function automatically:
   - Parses markdown from each scraped page
   - Runs `isCylinderHead()` to identify cylinder heads
   - Upserts matches into `cylinder_heads` with make/displacement/pricing/image data

## Practical approach given edge function timeouts

Since there are ~12,400 parts and each batch is 100 URLs, that's ~124 batches. Each batch-submit is fast (just sends URLs to Firecrawl). The polling takes longer but Firecrawl processes batches in parallel server-side.

I'll invoke these calls sequentially — submit a batch, poll it, process results, then move to the next offset. I'll track cumulative cylinder heads found and report progress.

## No file changes needed

The edge function already has all the required modes (`batch-submit`, `batch-poll`, `list-and-submit`). This is purely execution — invoking the existing function repeatedly.

