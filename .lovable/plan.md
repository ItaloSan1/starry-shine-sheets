

# Eskimo Auto & Truck Parts — Full Website Build Plan

## Overview
Complete transformation from creative portfolio template into a modern, conversion-first auto recycler website for Eskimo Auto & Truck Parts in Edmonton, Alberta. Every piece of the current template code will be replaced.

## Architecture

```text
src/
├── main.tsx                    # App entry with router
├── App.tsx                     # Router setup with all routes
├── index.css                   # New design system (automotive colors)
├── lib/
│   ├── utils.ts                # Keep existing
│   ├── inventory-adapter.ts    # Adapter interface for future API/CSV/etc
│   └── mock-inventory.ts       # Realistic mock data (~30 vehicles/parts)
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav, phone CTA, mobile menu
│   │   ├── Footer.tsx          # Full footer with contact, nav, hours
│   │   ├── Layout.tsx          # Wraps Header + Outlet + Footer
│   │   ├── MobileActionBar.tsx # Sticky bottom call/text bar (mobile)
│   │   └── CallToAction.tsx    # Reusable CTA banner component
│   ├── inventory/
│   │   ├── SearchForm.tsx      # Year/Make/Model/Part type filters
│   │   ├── SearchResults.tsx   # Grid/list results with cards
│   │   ├── PartCard.tsx        # Individual part result card
│   │   ├── PartDetail.tsx      # Full part detail view
│   │   ├── VehicleDetail.tsx   # Vehicle/arrival detail view
│   │   ├── MobileFilters.tsx   # Drawer-based filters for mobile
│   │   └── EmptyState.tsx      # No results state
│   ├── home/
│   │   ├── HeroSection.tsx     # Edmonton-focused headline + search
│   │   ├── TrustBar.tsx        # Warranty, quality, local, fast
│   │   ├── CategoryCards.tsx   # Engines, transmissions, body, tires
│   │   ├── LatestArrivals.tsx  # Preview of recent vehicles
│   │   ├── WhyEskimo.tsx       # Differentiators section
│   │   ├── SellVehicleCTA.tsx  # Sell your vehicle banner
│   │   ├── ShopsFleetSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── HomeFAQ.tsx
│   ├── forms/
│   │   ├── PartRequestForm.tsx # Quick part request lead form
│   │   └── SellVehicleForm.tsx # Vehicle sell lead form
│   └── ui/                    # Keep existing shadcn components
├── pages/
│   ├── Home.tsx
│   ├── SearchInventory.tsx
│   ├── LatestArrivals.tsx
│   ├── PartDetailPage.tsx
│   ├── VehicleDetailPage.tsx
│   ├── SellYourVehicle.tsx
│   ├── UsedAutoParts.tsx       # SEO category pages
│   ├── UsedTruckParts.tsx
│   ├── UsedEngines.tsx
│   ├── UsedTransmissions.tsx
│   ├── UsedBodyParts.tsx
│   ├── UsedTiresRims.tsx
│   ├── AutoRecycler.tsx
│   ├── WarrantyReturns.tsx
│   ├── DeliveryPartsSourcing.tsx
│   ├── ForShopsFleet.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
```

## Design System

**Colors** — Automotive-industrial palette:
- Primary: Deep navy blue (#1B2A4A) — trust, reliability
- Accent: Bold orange (#E8601C) — urgency, CTAs, energy
- Secondary: Steel gray (#4A5568) — industrial feel
- Background: Clean white (#FFFFFF) with light gray sections (#F7F8FA)
- Success green for availability indicators

**Typography**: Inter or system font stack — clean, professional, highly readable. Remove Bagel Fat One entirely.

**Components**: Clean cards with subtle borders, no glass effects, no film grain, no portfolio animations. Solid, fast-loading, conversion-focused.

## Key Technical Decisions

1. **Router**: React Router v6 with a `Layout` route wrapper providing Header/Footer on all pages
2. **Inventory Adapter**: TypeScript interface (`InventoryProvider`) with methods like `searchParts()`, `getPartById()`, `getLatestArrivals()`. A `MockInventoryProvider` implements it with hardcoded data. Later swapped for Hollander/URG/CSV/API provider with zero UI changes.
3. **Mock Data**: ~30 realistic parts across engines, transmissions, body panels, tires/rims for various makes (Ford, Chevy, Toyota, Honda, Dodge). Includes year, make, model, part type, price, condition, stock number, availability, fitment notes.
4. **SEO Pages**: Each category/service page gets unique, Edmonton-focused copy written for search intent — not thin duplicates. Internal links between related pages.
5. **Forms**: Zod-validated part request and sell-vehicle forms. No backend yet — toast confirmation on submit.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/search-inventory` | Search with filters + results |
| `/search-inventory/:id` | Part detail |
| `/latest-arrivals` | Latest vehicles/parts |
| `/latest-arrivals/:id` | Vehicle detail |
| `/sell-your-vehicle` | Lead form |
| `/used-auto-parts-edmonton` | SEO category |
| `/used-truck-parts-edmonton` | SEO category |
| `/used-engines-edmonton` | SEO category |
| `/used-transmissions-edmonton` | SEO category |
| `/used-body-parts-edmonton` | SEO category |
| `/used-tires-rims-edmonton` | SEO category |
| `/auto-recycler-edmonton` | SEO service page |
| `/warranty-returns` | Policy page |
| `/delivery-parts-sourcing` | Service page |
| `/for-shops-fleet` | B2B page |
| `/about` | About |
| `/faq` | FAQ |
| `/contact` | Contact |

## Conversion Strategy
- Phone number (780-xxx-xxxx placeholder) in header on desktop, sticky mobile bar with Call + Text buttons
- Every page ends with a CTA (call, request part, or sell vehicle)
- Search is the #1 path — prominent in hero and nav
- Part cards have "Call Now" and "Request Part" buttons
- Short inline lead forms on category pages

## What Gets Deleted
All current components (Hero, Portfolio, Awards, About, Services, Team, Contact, Footer, AnimationShowcase, GlassCard, figma/*) and all asset images. The `index.css` gets fully rewritten. Only shadcn UI components and library utilities are preserved.

## Future Integration Notes (documented in code comments)
- Inventory adapter ready for: Hollander/YMS API, URG/AutoPartSearch, car-part.com bridge, CSV import, or custom middleware
- Forms ready for: Supabase/email service backend
- Phone numbers and address are placeholders to be replaced with real business info

