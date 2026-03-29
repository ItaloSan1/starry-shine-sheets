

# Use Firecrawl Batch Scrape API for Cylinder Heads

## Problem
Currently scraping ATK product pages one at a time (sequential loop in `scrape-batch` mode), which is slow. The sitemap has 12,000+ part numbers and we need to identify ~900 cylinder heads among them.

## Solution
Use Firecrawl's **Batch Scrape API** (`POST /v1/batch/scrape`) which accepts an array of URLs and processes them in parallel. This is significantly faster than sequential single-page scrapes.

The batch API works as follows:
1. Submit a batch of URLs → returns a batch `id`
2. Poll `GET /v1/batch/scrape/{id}` until status is `completed`
3. Process all results at once

## Approach

### Step 1: Add `batch-scrape` mode to the edge function
Update `firecrawl-scrape-atk/index.ts` with a new `batch-scrape` mode that:
- Accepts up to 100 part numbers per call (Firecrawl batch limit)
- Submits all URLs to `POST /v1/batch/scrape` in one request
- Polls for completion (with timeout)
- Parses each result to identify cylinder heads vs engines
- Upserts cylinder heads into `cylinder_heads` table

### Step 2: Add `list-and-batch` orchestration mode
A higher-level mode that:
1. Fetches the sitemap to get all 12,000+ part numbers
2. Splits them into batches of 100
3. Submits each batch via the Firecrawl batch API
4. Returns progress (how many batches submitted, how many cylinder heads found)

Since edge functions have a ~60s timeout, each invocation will process one batch of 100 URLs and return the next offset, so the caller can loop.

## File Changes

| File | Change |
|------|--------|
| `supabase/functions/firecrawl-scrape-atk/index.ts` | Add `batch-scrape` mode using Firecrawl batch API; add `list-and-batch` orchestration mode |

## Execution Flow
1. Deploy updated edge function
2. Call with `?mode=list-sitemap` to get all part numbers
3. Call with `?mode=batch-scrape` + body `{ partNumbers: [...100 pnos] }` — submits batch, polls, parses, upserts
4. Repeat for each batch of 100 until all 12,000+ are processed
5. Cylinder heads are automatically identified and inserted

## Key Details
- Firecrawl batch API: `POST https://api.firecrawl.dev/v1/batch/scrape` with `{ urls: [...], formats: ['markdown'], waitFor: 8000 }`
- Poll: `GET https://api.firecrawl.dev/v1/batch/scrape/{id}` until `status === 'completed'`
- Each batch of 100 URLs processes ~10x faster than sequential scraping
- The `isCylinderHead()` function already exists and will filter cylinder heads from the results

