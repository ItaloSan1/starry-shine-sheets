

# VIN Decoder Tool — Plan

## What We're Building

A public **VIN Decoder page** at `/vin-decoder` that handles two types of VINs:

1. **Modern VINs (1981+, 17-digit)** — decoded via the free **NHTSA vPIC API** (no API key needed)
2. **Classic VINs (1960–1980, 5–13 digits)** — decoded using built-in lookup tables for GM, Ford, and Mopar

The tool serves both customers (finding compatible parts) and your team (quick vehicle identification).

---

## How It Works

### Modern VIN (1981+)
- User enters a 17-character VIN
- We call the NHTSA API: `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/{VIN}?format=json`
- Display: Year, Make, Model, Trim, Engine, Transmission, Drivetrain, Body Style, Country of Origin, etc.

### Classic VIN (1960–1980)
- User enters a shorter VIN (typically 5–13 characters)
- We detect it's pre-1981 based on length and format
- We decode using hardcoded lookup tables:
  - **GM**: Division code, model year, assembly plant, body style
  - **Ford**: Model year, assembly plant, body style, engine code
  - **Mopar**: Model year, assembly plant, body/trim, engine code
- Display what we can decode with a note that classic VINs have limited standardization

### After Decode
- Show a "Request Parts for This Vehicle" button that pre-fills the Part Request form with the decoded year/make/model
- Show a "Search Our Inventory" link filtered to the decoded vehicle

---

## Files to Create / Modify

### New Files
1. **`src/lib/vin-decoder.ts`** — Core decode logic
   - `decodeModernVIN(vin)` — calls NHTSA API, returns structured result
   - `decodeClassicVIN(vin)` — uses lookup tables for GM/Ford/Mopar
   - `detectVINType(vin)` — returns `'modern' | 'classic' | 'unknown'`
   - Lookup tables for ~60s–80s division codes, engine codes, plant codes

2. **`src/pages/VinDecoder.tsx`** — The page component
   - Input field with validation
   - Auto-detect modern vs classic
   - Results display with vehicle specs
   - CTA buttons to request parts or search inventory

3. **`src/components/vin/VinResults.tsx`** — Results display component
   - Clean table/card layout of decoded fields
   - Different layouts for modern (full data) vs classic (partial data)

### Modified Files
4. **`src/App.tsx`** — Add route `/vin-decoder`
5. **`src/components/layout/Header.tsx`** — Add "VIN Decoder" to navigation
6. **`src/components/layout/Footer.tsx`** — Add link if tools section exists

---

## Classic VIN Lookup Coverage

The classic decoder will cover the most common patterns:

| Make | Years | What We Decode |
|------|-------|----------------|
| GM (Chevy, Buick, Olds, Pontiac, Cadillac) | 1960–1980 | Division, model year, assembly plant, body style, engine |
| Ford / Lincoln-Mercury | 1960–1980 | Model year, assembly plant, body style, engine |
| Mopar (Chrysler, Dodge, Plymouth) | 1960–1980 | Model year, assembly plant, body/trim, engine |

A disclaimer will note that pre-1981 VINs were not federally standardized, so decoding accuracy varies.

---

## Technical Notes
- NHTSA API is free, no key required, public endpoint
- Classic decode is 100% client-side (no API calls)
- All decode logic lives in one utility file for maintainability
- SEO-optimized page with proper meta tags and schema markup

