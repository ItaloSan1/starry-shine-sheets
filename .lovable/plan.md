

# Tire Inventory System — Full Plan

## Overview

A complete tire inventory management system with two sides:
1. **Employee app** — authenticated, mobile-first entry tool with AI camera scan, smart cascading dropdowns, and image uploads
2. **Customer storefront** — public-facing tire shop page with filters, search, and purchase CTAs

---

## System Architecture

```text
┌─────────────────────┐     ┌──────────────────────┐
│  Employee App       │     │  Customer Storefront  │
│  /staff/tires       │     │  /used-tires-rims     │
│  (auth required)    │     │  (public)             │
└────────┬────────────┘     └────────┬──────────────┘
         │                           │
         ▼                           ▼
┌─────────────────────────────────────────────┐
│  Supabase Database: tire_inventory table    │
│  + Supabase Storage: tire-images bucket     │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│  Edge Function: scan-tire                   │
│  (Lovable AI vision → structured output)    │
└─────────────────────────────────────────────┘
```

---

## Database Design

### Table: `tire_inventory`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK | Auto-generated |
| stock_number | text UNIQUE | Format: `XX-0001` (employee initials + sequential) |
| brand | text | e.g. Goodyear, Michelin |
| model | text | e.g. Wrangler, Defender |
| width | integer | e.g. 195, 205, 225 |
| aspect_ratio | integer | e.g. 55, 60, 65 |
| rim_diameter | integer | e.g. 15, 16, 17 |
| full_size | text | Generated: "195/55R16" |
| season | text | All-Season, Winter, Summer, All-Weather |
| speed_rating | text | e.g. H, V, T, S, W, Y |
| load_index | integer | e.g. 91, 95, 100 |
| tread_depth_mm | numeric | e.g. 7.5 |
| tread_depth_32nds | numeric | Auto-calculated from mm |
| quantity | integer | Tires on hand |
| price | numeric | Price per tire |
| condition | text | New, Like New, Good, Fair |
| notes | text | Optional |
| images | text[] | Array of storage URLs (up to 5) |
| status | text | Available, Sold, Reserved |
| added_by | uuid FK→auth.users | Employee who added |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### Table: `staff_profiles`

| Column | Type | Notes |
|--------|------|-------|
| id | uuid PK FK→auth.users | |
| initials | text (2-3 chars) | Used for stock numbers |
| full_name | text | Display name |
| role | text | admin / staff |

### Storage Bucket: `tire-images`
- Public read, authenticated write
- Up to 5 images per tire listing

---

## Smart Form Features

### Cascading Tire Size Dropdowns
- **Width**: 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335, 345
- **Aspect Ratio**: Filtered by width (e.g. 195 → shows 50, 55, 60, 65, 70, 75). Uses a lookup table of real-world width/aspect combinations
- **Rim Diameter**: Filtered by width+aspect (e.g. 195/65 → shows R14, R15, R16)
- Auto-generates `full_size` string like "225/65R17"

### Brand + Model Dropdowns
Pre-populated brands with corresponding models:
- Goodyear → Wrangler, Eagle, Assurance, UltraGrip...
- Michelin → Defender, Pilot Sport, X-Ice, LTX...
- Bridgestone → Blizzak, Dueler, Turanza, Potenza...
- Continental → ExtremeContact, VikingContact, CrossContact...
- Pirelli, Firestone, BFGoodrich, Hankook, Yokohama, Toyo, Cooper, General, Nokian, Falken, Kumho, Nexen
- **"Other" option** with free-text input for both brand and model

### Tread Depth Conversion
- Enter in mm → auto-converts to 32nds (multiply by 1.26)
- Display both values

### Stock Number Generation
- Auto-generated: `{employee_initials}-{sequential_number}`
- Queries existing stock numbers for that employee to get next number
- Guaranteed unique via DB constraint

---

## AI Camera Scan (Lovable AI Vision)

### Edge Function: `scan-tire`
- Accepts a base64 image of the tire sidewall
- Sends to Lovable AI (gemini-2.5-pro for vision) with structured output extraction
- Returns: brand, model, width, aspect_ratio, rim_diameter, speed_rating, load_index, season (if visible)
- Employee reviews and confirms before saving — scan pre-fills the form

### Prompt Strategy
```
Analyze this tire sidewall image. Extract:
- Brand name, Model name
- Tire size (width/aspect_ratio R rim_diameter)
- Speed rating letter, Load index number
- DOT code if visible
Return structured JSON.
```

---

## Employee Interface

### Routes (all behind auth)
- `/staff/login` — email/password login
- `/staff/tires` — tire inventory dashboard (list, search, edit)
- `/staff/tires/add` — add new tire entry

### Add Tire Flow
1. **Camera Scan button** (top of form) — opens camera, snaps sidewall photo, AI pre-fills fields
2. **Manual entry** — smart cascading dropdowns for size, brand/model selects with type-ahead
3. **Image upload** — drag-drop or camera capture, up to 5 photos
4. **Review & Save** — shows full_size string, tread depth in both units, stock number preview

### Dashboard
- Table view of all tires with filters (brand, size, status, season)
- Quick edit quantity and price inline
- Mark as Sold/Reserved
- Multi-user safe — each entry tagged with employee initials

---

## Customer Storefront

### Updated `/used-tires-rims-edmonton` page
- Grid of tire cards with photos, size, brand, price, tread depth
- Filters: size, brand, season, price range
- Sort by: price, date added, tread depth
- Click → detail view with all photos, full specs, CTA to call/request
- Only shows `status = 'Available'` and `quantity > 0`

---

## Authentication Setup

- Email/password auth with manual user creation (you'll create 2-3 accounts)
- `staff_profiles` table with initials for stock numbers
- RLS: staff can INSERT/UPDATE tire_inventory, public can SELECT where status='Available'
- Auto-confirm email enabled (internal tool, not public signup)

---

## Files to Create/Modify

### New Files
1. `src/pages/staff/StaffLogin.tsx` — login page
2. `src/pages/staff/TireDashboard.tsx` — inventory list/management
3. `src/pages/staff/AddTire.tsx` — add/edit tire form
4. `src/components/tires/TireEntryForm.tsx` — the smart form with cascading dropdowns
5. `src/components/tires/TireScanButton.tsx` — camera capture + AI scan trigger
6. `src/components/tires/TireCard.tsx` — customer-facing tire card
7. `src/components/tires/TireFilters.tsx` — customer-facing filters
8. `src/components/tires/TireDetailModal.tsx` — full tire detail view
9. `src/lib/tire-data.ts` — brand/model/size lookup tables
10. `src/hooks/useTireInventory.ts` — data fetching hook
11. `supabase/functions/scan-tire/index.ts` — AI vision edge function

### Modified Files
12. `src/App.tsx` — add staff routes and tire detail routes
13. `src/pages/UsedTiresRims.tsx` — replace static page with live tire storefront

### Database Migrations
14. Create `tire_inventory` table with RLS
15. Create `staff_profiles` table with RLS
16. Create `tire-images` storage bucket
17. Enable auto-confirm for email auth (internal staff only)

---

## Multi-User Safety
- Stock numbers are employee-scoped (`XX-0001`) — no collisions between users
- `added_by` column tracks who entered each tire
- RLS ensures authenticated staff can create/edit, public can only view available tires
- Optimistic locking on quantity updates to prevent race conditions

