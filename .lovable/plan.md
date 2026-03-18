

# Revision 2: Production-Quality Upgrade Plan

## Scope Summary

This is a comprehensive polish pass across ~25 files. No new routes or architectural changes needed — the structure is solid. The work is: replace all placeholder data with real business info, strengthen visual design, improve key UX flows, and elevate copy quality.

## 1. Global Constants File (NEW)

Create `src/lib/constants.ts` with all real business info used site-wide:
- Phone: `(780) 473-2424`
- Email: `parts@eskimoinfo.com`
- Address: `12940 53 St NW, Edmonton, AB T5A 0B9`
- Domain: `eskimoautoandtruckparts.com`
- Established: `1984`

Every file currently hardcoding `780-555-0199`, fake email, fake address will import from this file instead.

**Files affected** (15 files): Header, Footer, MobileActionBar, CallToAction, HeroSection, PartCard, PartRequestForm, PartDetailPage, VehicleDetailPage, Contact, FAQ, ForShopsFleet, WarrantyReturns, SellYourVehicle, EmptyState.

## 2. Update `index.html`

- Change phone to `(780) 473-2424`
- Change address to `12940 53 St NW, Edmonton, AB T5A 0B9`
- Change canonical URL to `https://www.eskimoautoandtruckparts.com/`
- Update JSON-LD schema with correct data
- Change meta description phone number

## 3. Design System Refresh (`index.css`)

- Shift primary slightly darker/more charcoal: `#1a1f2e` (dark charcoal instead of pure navy)
- Keep accent orange but slightly warmer
- Make secondary background warmer off-white (`#f5f5f0`) instead of cold gray
- Tighten default section padding
- Add utility classes for common patterns (`.page-header`, `.section-tight`)

## 4. Rebuild Homepage Hero (`HeroSection.tsx`)

Current: Large navy block with centered text + single search input.

New layout:
- Tighter padding (py-12 md:py-16 instead of py-16 md:py-24)
- Left-aligned content on desktop with a right-side visual panel (automotive-themed placeholder with gradient overlay — not just empty gray)
- Trust chips row: "Since 1984" · "Warranty-Backed Parts" · "Parts Sourcing Available" · "Edmonton Auto Recycler"
- Replace single search input with a compact Year/Make/Model/Part 4-field row + Search button
- Quick category links below search: Engines | Transmissions | Body Parts | Tires & Rims | Truck Parts | Latest Arrivals
- Keep Call + Text CTAs but use real phone number

## 5. Improve MobileActionBar (`MobileActionBar.tsx`)

Current: 2-col (Call, Text).

New: 4-col grid with: Call | Text | Search (links to /search-inventory) | Sell (links to /sell-your-vehicle). Real phone number.

## 6. Improve Search Inventory Page (`SearchInventory.tsx` + `SearchResults.tsx`)

- Add sort dropdown (Newest, Price Low-High, Price High-Low)
- Add active filter chips with remove buttons
- Add result count header: "Showing X of Y parts"
- Improve empty state text: "Don't see it? We can source many parts from our network. Call or text us at (780) 473-2424."

## 7. Improve Part Cards (`PartCard.tsx`)

- Add "Text" CTA button alongside existing "Call" and "Details"
- Add "Request Part" link
- Better visual hierarchy: part name larger, price more prominent
- Add image placeholder that looks more intentional (camera icon + "Photo coming soon" text instead of bare Package icon)

## 8. Improve Latest Arrivals Page + Cards

Vehicle cards get:
- Stock number display
- Arrival date shown as "Arrived Dec 15"
- Status as "Now Dismantling" instead of just "Dismantling"
- "View Parts from This Vehicle" CTA text on the link

Vehicle detail page: add "Text About This Vehicle" CTA alongside call.

## 9. Rebuild Warranty Page (`WarrantyReturns.tsx`)

Current: Two side-by-side cards with specific durations (90-day, 60-day, 30-day) that aren't confirmed.

New structure:
- Clear intro: "We stand behind every part we sell"
- Structured policy sections without specific durations (say "warranty periods vary by part category — contact us for details")
- What IS covered vs what is NOT covered
- Return process steps (numbered)
- Core charges explanation
- Contact CTA with real phone
- Note: "Specific warranty terms are provided at the time of purchase"

## 10. Improve Sell Your Vehicle Page + Form

Add to `SellVehicleForm.tsx`:
- Vehicle location field
- Title/ownership status dropdown (Clean title, Salvage title, No title, Unknown)
- Running or not (move from condition dropdown to explicit Yes/No radio or dropdown)
- Photo upload placeholder (file input, styled, with note "Photos help us provide a faster, more accurate quote")

Add to page:
- "How it works" numbered steps section
- "What vehicles do we buy?" section
- Service area mention
- Remove unconfirmed claims (free towing, same-day offers) — soften to "Contact us to arrange pickup" and "We aim to respond quickly"

## 11. Improve Testimonials Section

Replace fake-sounding reviews with a "Google Reviews" style layout:
- Header: "What Edmonton Drivers Say" with a note "Reviews from our customers"
- Make names more anonymous (e.g., "Mike R., Edmonton" → "M.R. — Edmonton Mechanic")  
- Add a disclaimer: "Selected customer feedback. See our Google reviews for more."
- Visually distinguish with a subtle quote icon and star rating

## 12. Fix WhyEskimo Section

- Change "Trusted Since 1985" → "Trusted Since 1984"
- Remove unconfirmed claims: "up to 90 days" warranty, "same-day pickup or local delivery"
- Replace with confirmed strengths: "Warranty-backed parts", "Parts sourcing from our recycler network", "Serving Edmonton since 1984"

## 13. Fix About Page

- Change "since 1985" → "Since 1984"
- Change "38+ Years" → "40+ Years"
- Add real address
- Remove "nearly four decades" → "over four decades"

## 14. Fix All SEO Category Pages + AutoRecycler

All pages with "since 1985" → "Since 1984". Remove unconfirmed specific warranty durations. Keep the copy but soften claims to match what's confirmed. Ensure all internal links work. Add real phone in inline CTAs.

## 15. Fix FAQ Page

- Update phone number in answer text from `780-555-0199` to `(780) 473-2424`
- Remove specific warranty duration claims or soften to "warranty periods vary"
- Remove "free towing" claim (unconfirmed)

## 16. Fix Contact Page

- Real phone, email, address
- Add a placeholder for Google Maps embed area (styled div with "Map — 12940 53 St NW, Edmonton" text)

## 17. Fix Footer

- Real phone: `(780) 473-2424`
- Real email: `parts@eskimoinfo.com`  
- Real address: `12940 53 St NW, Edmonton, AB T5A 0B9`
- "Since 1984" in bottom line
- Hours: keep as-is (business should confirm later)

## 18. Page-Specific `<title>` Tags

Add a `useEffect` in each page to set `document.title` for SEO. Examples:
- Home: "Eskimo Auto & Truck Parts | Used Auto Parts Edmonton"
- Search: "Search Used Auto Parts Inventory | Eskimo Auto & Truck Parts Edmonton"
- Latest Arrivals: "Latest Vehicle Arrivals | Eskimo Auto & Truck Parts Edmonton"
- Engines: "Used Engines Edmonton | Eskimo Auto & Truck Parts"
- etc.

## Content Requiring Business Confirmation (documented in code comments)

- Business hours (currently Mon-Fri 8-5, Sat 9-2)
- Warranty terms and durations
- Whether free towing is offered
- Whether same-day pickup is available
- Whether local delivery is offered and terms
- Whether net-30 terms are available for shops
- Logo image file
- Real photos of yard, parts, vehicles, staff

## Files to Create
1. `src/lib/constants.ts`

## Files to Modify (all others)
~25 files across components, pages, layout, and index.html

