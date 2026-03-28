

# Firebase Inventory Integration — Implementation Plan

## Overview

Connect the real Firebase database (`mini-eam-monorepo`) to the new site, replacing mock data with live salvage vehicle inventory. This requires enabling Lovable Cloud, storing the Firebase service account key, creating edge functions, updating the Vehicle interface, and rewriting key UI components.

## Prerequisites (must happen first)

1. **Enable Lovable Cloud** — needed for edge functions, database, and secrets
2. **Store Firebase service account key** as a secret (`FIREBASE_SERVICE_ACCOUNT_KEY`) — the uploaded JSON file content
3. **Create `part_requests` database table** via migration

## Phase 1: Infrastructure

### 1a. Edge Function: `firebase-inventory`
Single edge function with query-param routing:
- `?action=vehicles` — returns all vehicles sorted by newest year first
- `?action=vehicle&id=X` — returns single vehicle with all images
- `?action=makes` — unique makes list
- `?action=models&make=X` — models for a make

The function will:
- Authenticate to Firestore using the service account key (JWT signing with the private key, no SDK — pure fetch to Firestore REST API)
- Query the Firestore collection (will try `vehicles`, `inventory`, `cars` to discover the correct one)
- For each vehicle: extract year/make/model/trim from the `title` field, pull image URLs from the `image` array
- Strip VIN from response (never sent to browser)
- Decode VIN server-side using NHTSA vPIC API (free, no key needed) to extract engine, drivetrain, body style, fuel type
- Return clean JSON

### 1b. Edge Function: `submit-part-request`
- Receives form data, validates with Zod
- Saves to `part_requests` Supabase table
- Sends email to `Parts@eskimoinfo.com` (via Lovable email or Resend — will use Lovable Cloud's built-in email if available, otherwise store-and-notify pattern)
- Anti-spam: honeypot field check
- Returns success/failure

### 1c. Database Migration
Create `part_requests` table:
- id, created_at, name, phone, email, year, make, model, part_needed, vin, contact_method, notes, stock_number, status (new/contacted/completed)

## Phase 2: Client-Side Adapter

### 2a. Update `inventory-adapter.ts`
Add to Vehicle interface:
- `images: string[]` — array of photo URLs
- `engineType?: string`, `drivetrain?: string`, `bodyStyle?: string`, `fuelType?: string`, `countryOfOrigin?: string`, `transmissionType?: string`

### 2b. Create `src/lib/firebase-inventory.ts`
New `FirebaseInventoryProvider` implementing `InventoryProvider`:
- Calls the `firebase-inventory` edge function
- Caches makes/models for performance
- Falls back to mock data if edge function fails
- Sorts vehicles by year descending (newest first)

### 2c. Update `src/lib/mock-inventory.ts`
Change the exported `inventoryProvider` to use `FirebaseInventoryProvider` as primary, with mock as fallback.

## Phase 3: Homepage Carousel

### Rewrite `src/components/home/LatestArrivals.tsx`
- Fetch ALL vehicles, sorted newest year first
- Use the existing Carousel component for auto-play rotating display
- Show 4 vehicles at a time on desktop, 1 on mobile, swipeable
- Auto-advance every 5 seconds, pause on hover
- Each card shows first image, year/make/model, status badge
- "View All Arrivals" link

## Phase 4: Latest Arrivals Full Page

### Rewrite `src/pages/LatestArrivals.tsx`
- Fetch all vehicles from Firebase
- Top section: visual Make cards grid (Ford, Toyota, Chevrolet, etc.) with vehicle counts
- Filter bar: text search + Make dropdown + Model dropdown + Year dropdown
- Results grid: vehicle cards with first photo, year/make/model/trim, status
- Sorted newest year first
- Clicking a make card filters to that make

## Phase 5: Vehicle Detail Page

### Rewrite `src/pages/VehicleDetailPage.tsx`
- Full photo gallery with thumbnails + large main image
- Click-to-expand lightbox for full-screen viewing
- VIN-decoded specs displayed (VIN number itself hidden):
  - Engine type & size, Drivetrain, Body style, Fuel type, Transmission, Country of origin
- Vehicle info: year, make, model, trim, color, mileage, stock#, status, date arrived
- **Embedded "Request Parts from This Vehicle" form** — pre-filled with year/make/model/stock#
- Call and text CTAs

## Phase 6: Request a Part Form

### Update `src/components/forms/RequestPartForm.tsx`
- Accept optional props for pre-filling (year, make, model, stockNumber)
- Wire submit to `submit-part-request` edge function
- Show success/error states
- Accept query params on `/request-a-part?stock=X&year=Y&make=Z&model=W`

### Update `src/pages/RequestPart.tsx`
- Read query params to pre-fill form when coming from vehicle detail page

## File Summary

| Action | Files |
|--------|-------|
| Create | `supabase/functions/firebase-inventory/index.ts`, `supabase/functions/submit-part-request/index.ts`, `src/lib/firebase-inventory.ts`, 1 migration SQL |
| Modify | `src/lib/inventory-adapter.ts`, `src/lib/mock-inventory.ts`, `src/components/home/LatestArrivals.tsx`, `src/pages/LatestArrivals.tsx`, `src/pages/VehicleDetailPage.tsx`, `src/components/forms/RequestPartForm.tsx`, `src/pages/RequestPart.tsx` |

## Content Needing Business Confirmation
- Firestore collection name (will auto-discover)
- Response time promise ("within 1 business day")
- Whether vehicle stock numbers from Firebase should be shown or hidden

## Implementation Order
1. Enable Cloud + store secret + create migration
2. Build edge functions + deploy
3. Create Firebase adapter + swap mock provider
4. Update homepage carousel
5. Update Latest Arrivals page
6. Update Vehicle Detail page
7. Wire up Request a Part form

