

# Revision 3: Launch-Ready Implementation Plan

## Summary
This revision adds 5 new files and modifies ~25 existing files to elevate from polished prototype to launch-ready. Three workstreams: (1) SEO metadata system with structured data, (2) Request a Part lead flow, (3) UX polish across search, forms, and homepage.

## New Files to Create

### 1. `src/hooks/useSEO.ts`
Custom hook that manages `document.title`, `<meta name="description">`, `<link rel="canonical">`, and OG tags dynamically per route. Replaces all bare `useEffect` title calls across every page.

### 2. `src/components/seo/SchemaMarkup.tsx`
Three schema components:
- **LocalBusinessSchema** — AutoPartsStore JSON-LD (real address, phone, hours, geo coords). Rendered once in Layout.
- **FAQSchema** — Receives `{question, answer}[]`, renders FAQPage JSON-LD. Used on FAQ page and HomeFAQ.
- **BreadcrumbSchema** — Receives breadcrumb items, renders BreadcrumbList JSON-LD. Used on category/detail pages.

### 3. `src/components/layout/Breadcrumbs.tsx`
Visual breadcrumb nav component. Receives `items: {label, to?}[]`. Used on SEO category pages and detail pages.

### 4. `src/pages/RequestPart.tsx`
Dedicated `/request-a-part` page with full lead form, "How it works" steps, call/text CTAs, useSEO + breadcrumbs.

### 5. `src/components/forms/RequestPartForm.tsx`
Standalone form: Year, Make, Model, Part Needed, VIN (optional), preferred contact method (Call/Text/Email radio), photo upload placeholder, notes, honeypot anti-spam field, validation, success state.

## Files to Modify

### App & Layout
- **`src/App.tsx`** — Add `/request-a-part` route import and route entry.
- **`src/components/layout/Layout.tsx`** — Add `LocalBusinessSchema`, scroll-to-top on route change via `useLocation`.
- **`src/components/layout/Header.tsx`** — Add "Request a Part" nav link. Add logo slot (commented `<img>` ready for real logo).
- **`src/components/layout/Footer.tsx`** — Add "Request a Part" link in Parts column. Add logo slot.

### Homepage
- **`src/pages/Home.tsx`** — Reorder: Hero > TrustBar > Categories > Arrivals > WhyEskimo > ShopsFleet > SellVehicleCTA > Testimonials > HomeFAQ > CTA. Add FAQSchema. Replace `useEffect` title with `useSEO`.
- **`src/components/home/HomeFAQ.tsx`** — Export FAQ data array so Home.tsx can pass it to FAQSchema.

### Search & Inventory
- **`src/pages/SearchInventory.tsx`** — Add `useSEO`, breadcrumbs, help text below sort.
- **`src/components/inventory/SearchResults.tsx`** — Add fitment help text: "Need fitment help? Call or text us at (780) 473-2424."
- **`src/components/inventory/PartCard.tsx`** — Add availability status badge (In Stock = green, Call to Confirm = amber, On Hold = gray). Add "Request Part" link to `/request-a-part?stock=XXX`. Show donor stock number.
- **`src/components/inventory/EmptyState.tsx`** — Stronger messaging with sourcing network mention. Add link to `/request-a-part`.

### Forms
- **`src/components/forms/PartRequestForm.tsx`** — Add honeypot field, success state replacing form, better validation messages.
- **`src/components/forms/SellVehicleForm.tsx`** — Add honeypot field, success state replacing form, better validation messages.

### SEO Category Pages (all get `useSEO` + `Breadcrumbs` + `BreadcrumbSchema`)
- **`src/pages/UsedAutoParts.tsx`** — Full polish: expanded copy, trust signals strip, inline CTA mid-page, related categories links section.
- **`src/pages/UsedTruckParts.tsx`** — Same treatment: more internal links, trust signals, related categories.
- **`src/pages/UsedEngines.tsx`** — Same treatment: expanded content, trust signals, related categories.
- **`src/pages/UsedTransmissions.tsx`** — Add `useSEO` + breadcrumbs.
- **`src/pages/UsedBodyParts.tsx`** — Add `useSEO` + breadcrumbs.
- **`src/pages/UsedTiresRims.tsx`** — Add `useSEO` + breadcrumbs.
- **`src/pages/AutoRecycler.tsx`** — Add `useSEO` + breadcrumbs.

### Other Pages (all get `useSEO` replacing bare `useEffect`)
- **`src/pages/LatestArrivals.tsx`**
- **`src/pages/SellYourVehicle.tsx`**
- **`src/pages/WarrantyReturns.tsx`**
- **`src/pages/FAQ.tsx`** — Add `FAQSchema` with exported FAQ data.
- **`src/pages/Contact.tsx`**
- **`src/pages/About.tsx`**
- **`src/pages/ForShopsFleet.tsx`**
- **`src/pages/DeliveryPartsSourcing.tsx`**

## Per-Page SEO Metadata

Each page gets unique title + description via `useSEO()`:

| Page | Title |
|------|-------|
| Home | Eskimo Auto & Truck Parts \| Used Auto Parts Edmonton \| Since 1984 |
| Search | Search Used Auto Parts Inventory \| Eskimo Auto & Truck Parts |
| Latest Arrivals | Latest Vehicle Arrivals \| Eskimo Auto & Truck Parts Edmonton |
| Sell Your Vehicle | Sell Your Vehicle in Edmonton \| Eskimo Auto & Truck Parts |
| Warranty | Warranty & Returns \| Eskimo Auto & Truck Parts Edmonton |
| Contact | Contact Us \| Eskimo Auto & Truck Parts Edmonton |
| Request a Part | Request a Part \| Eskimo Auto & Truck Parts Edmonton |
| FAQ | FAQ \| Eskimo Auto & Truck Parts Edmonton |
| About | About \| Eskimo Auto & Truck Parts Edmonton |
| Used Auto Parts | Used Auto Parts Edmonton \| Eskimo Auto & Truck Parts |
| Used Truck Parts | Used Truck Parts Edmonton \| Eskimo Auto & Truck Parts |
| Used Engines | Used Engines Edmonton \| Eskimo Auto & Truck Parts |
| (etc. for remaining pages) |

## Content Needing Business Confirmation
Documented as code comments:
- 50,000+ parts inventory claim
- Business hours
- Warranty terms
- Logo image file
- Facility/yard/staff photographs
- Response time promises

