

# Hero Redesign + Site-Wide UI/UX Polish

## The Core Problem

The hero background photo (snowy junkyard) is too visually busy — cars, snow, sky, building lines all compete with the headline, search bar, and CTAs. The gradient overlay isn't heavy enough to create sufficient contrast. The result: nothing reads cleanly, the search form feels lost, and the first impression undermines trust.

## Design Philosophy

The best landing pages for local service businesses (think Apple's retail pages, Amazon's category pages) share one principle: **visual hierarchy through restraint**. The hero's job is singular — get the visitor to search or call. Everything else is noise.

## Hero Section Redesign

**Replace the full-bleed photo background with a split-panel layout:**

```text
┌─────────────────────────────────────────────────────┐
│ ████ SOLID DARK BG ████████  │  PHOTO (right panel) │
│                              │  (clean, cropped,     │
│  Trust chips                 │   single subject —    │
│  HEADLINE                    │   e.g. engine on      │
│  Subtitle                    │   clean bench or      │
│                              │   organized shelf)    │
│  [Year] [Make] [Model] [Part]│                       │
│  Popular: ...                │                       │
│  [Call CTA] [Text CTA]       │                       │
│                              │                       │
└─────────────────────────────────────────────────────┘
```

Key changes:
- **Left 60%**: Solid `primary` background (dark charcoal `#1a1f2e`) with NO photo behind it. Text sits on a clean, predictable surface. Instant readability.
- **Right 40%**: A single, well-composed photo — not the busy yard shot. Use `engine-parts.jpg` or `parts-warehouse.jpg` (already in assets) which show organized, professional imagery. Apply a subtle gradient fade from the left edge so the photo melts into the dark background.
- **Remove the duplicate right-panel card** that currently shows the same yard photo with "40+ Years" overlay — it's redundant with the trust chips.
- **Search form**: Solid white inputs on the dark background (already the case), but increase the form container's backdrop opacity and add a subtle border-glow on focus states.
- **CTAs**: Reduce from 3 to 2 (Call + Search Inventory). "Text Us" moves to a secondary position or the mobile action bar only — three equal-weight buttons create decision paralysis.
- **On mobile**: Photo disappears entirely (already hidden), clean dark background remains. Full-width search form.

## Site-Wide UI/UX Improvements

### Header
- Add a subtle `backdrop-blur-md` and reduce opacity slightly on scroll for a glass-morphism effect (premium feel)
- Increase nav link padding slightly for better touch targets

### Category Cards
- Add a subtle text-shadow to card labels for better legibility over images
- Tighten the aspect ratio from `4/3` to `3/2` for a more modern card feel

### Trust Bar
- Add a thin top-border accent line (matching the hero accent line) for visual continuity
- Slightly increase vertical padding for breathing room

### Latest Arrivals
- Add skeleton loading with a subtle shimmer animation instead of plain `animate-pulse`

### Testimonials
- Increase the quote text size slightly for better readability
- Add a subtle left-border accent on each card for visual anchoring

### Call-to-Action sections
- Add a subtle noise/grain texture overlay for depth (CSS background-image with tiny SVG pattern)

### Global
- Add `scroll-margin-top` to sections so anchor links don't hide behind the sticky header
- Ensure all interactive elements have visible focus rings (accessibility)

## Files Changed

| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Redesign to split-panel layout; remove background photo from text area; use `engine-parts.jpg` for right panel; reduce CTAs to 2; improve search form styling |
| `src/components/layout/Header.tsx` | Add scroll-aware backdrop blur effect |
| `src/components/home/CategoryCards.tsx` | Add text-shadow, tighten aspect ratio |
| `src/components/home/TrustBar.tsx` | Add accent border, increase padding |
| `src/components/home/TestimonialsSection.tsx` | Add left accent border to cards, increase quote text size |
| `src/index.css` | Add scroll-margin-top utility, focus-ring improvements, shimmer keyframe |

## Execution Order

1. Redesign HeroSection (biggest impact, core complaint)
2. Header scroll effect
3. Category cards and trust bar polish
4. Testimonials refinement
5. Global CSS improvements

