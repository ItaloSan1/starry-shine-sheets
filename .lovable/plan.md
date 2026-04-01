

# Vehicle Detail Page Content Enrichment — SEO Content Strategy

## The Opportunity

You have **1,234 unique vehicle pages**, each currently showing only basic specs (engine type, drivetrain, body style). From an SEO perspective, these are thin pages. By adding rich, AI-generated content sections to every vehicle page, you turn 1,234 thin pages into 1,234 content-rich, indexable landing pages — each targeting long-tail keywords like "2019 Honda Ridgeline used parts Edmonton" or "2015 Ford F-150 3.5L EcoBoost engine specs."

## What We Already Have (Per Vehicle)

From the NHTSA VIN decode (already running on the edge function):
- Year, Make, Model, Trim
- Engine type, displacement, cylinders
- Transmission style
- Drivetrain, body style, fuel type
- Country of origin, vehicle type

## Content Sections to Add to Every Vehicle Detail Page

### 1. Generation Overview (H2)
- What generation this vehicle belongs to (e.g., "10th Generation Honda Civic, 2016–2021")
- Key design changes, platform info, what made this generation notable
- Targets: "[year] [make] [model] generation", "[make] [model] specs"

### 2. Engine Overview (H2)
- Engine family, displacement, horsepower/torque ranges for that engine
- Common strengths, known issues, maintenance notes
- Oil capacity, timing chain vs belt, interference vs non-interference
- Targets: "[year] [make] [model] engine specs", "[engine code] engine problems"

### 3. Transmission Overview (H2)
- Transmission type and model (e.g., "6R80 6-speed automatic")
- Gear ratios context, common issues, fluid type
- Targets: "[year] [make] [model] transmission type"

### 4. Key Vehicle Facts (H2)
- Safety ratings (general for that year/model)
- Common recall items
- Towing capacity, fuel economy ranges
- Popular trim levels and what they included
- Targets: "[year] [make] [model] specs", "[make] [model] towing capacity"

### 5. Compatible Parts Note (H2)
- Which other year ranges share the same platform/parts
- Cross-compatibility info (e.g., "Parts from 2015–2020 F-150s generally interchange")
- This is extremely high-value for parts buyers and SEO

## Technical Architecture

### New Database Table: `vehicle_content_cache`
| Column | Type | Purpose |
|--------|------|---------|
| id | uuid | PK |
| vehicle_key | text | Unique key: `{year}_{make}_{model}_{trim}` |
| generation_overview | text | AI-generated content |
| engine_overview | text | AI-generated content |
| transmission_overview | text | AI-generated content |
| vehicle_facts | text | AI-generated content |
| parts_compatibility | text | AI-generated content |
| created_at | timestamp | When generated |

**Key insight**: Content is cached by year/make/model/trim — not by individual vehicle ID. A 2015 Ford F-150 XLT will share the same content regardless of stock number. This means ~400-600 unique content sets cover all 1,234 vehicles.

### New Edge Function: `generate-vehicle-content`
- Accepts: year, make, model, trim, engine specs, transmission type
- Uses Lovable AI (no API key needed) to generate all 5 sections
- Checks cache first — only generates if content doesn't exist for that vehicle key
- Returns cached or freshly generated content

### Frontend Changes: `VehicleDetailPage.tsx`
- After loading vehicle data, fetch content from the edge function
- Render 5 new content sections below the existing specs/images
- Each section uses proper H2/H3 headings for SEO
- Collapsible accordion on mobile to keep the page scannable
- Content loads asynchronously (doesn't block the page)

### Updated JSON-LD Schema
- Add `description` with the generation overview text
- Add `additionalProperty` entries for engine specs, transmission type
- Richer schema = better search snippets

## Content Generation Approach

The AI prompt will be structured like:
```
You are an automotive expert. Generate factual content about:
Vehicle: {year} {make} {model} {trim}
Engine: {engineType} {displacement}
Transmission: {transmissionType}

Write 5 sections: Generation Overview, Engine Overview, 
Transmission Overview, Key Facts, Parts Compatibility.
Keep it factual. No fluff. Focus on specs and practical info 
a parts buyer would want to know.
```

## SEO Impact Projection

- **Before**: 1,234 pages with ~50 words each (title, stock number, specs table)
- **After**: 1,234 pages with ~400-600 words each of unique, relevant content
- **Keyword coverage**: Each page naturally targets 10-20 long-tail keywords
- **Internal linking**: Parts compatibility section links to other vehicles on the same platform
- **Rich snippets**: Enhanced JSON-LD improves SERP presentation

## Files to Create/Modify

1. **New**: `supabase/functions/generate-vehicle-content/index.ts` — AI content generation + caching
2. **New DB table**: `vehicle_content_cache` — stores generated content by vehicle key
3. **New**: `src/components/vehicle/VehicleContentSections.tsx` — renders the 5 content blocks
4. **Modified**: `src/pages/VehicleDetailPage.tsx` — integrates content sections
5. **Modified**: `src/lib/mongo-inventory.ts` — add method to fetch/trigger content generation

## Rollout Strategy

Phase 1: Build the edge function + cache table + UI components
Phase 2: Content generates lazily on first page visit (so no upfront batch cost)
Phase 3: Optional batch generation script to pre-warm all ~500 unique vehicle keys

