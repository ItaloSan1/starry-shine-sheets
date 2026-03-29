

# Reorganize "Browse by Make" into an Alphabetical Sidebar

Yes — a sidebar is the right move. The current chip cloud takes up significant vertical space (5+ rows), pushes the actual vehicle grid below the fold, and becomes harder to scan as the list grows. An alphabetical sidebar keeps the makes organized and always accessible while giving the vehicle grid the full stage.

## Design

```text
┌─────────────────────────────────────────────────┐
│  Hero Banner                                    │
├──────────────┬──────────────────────────────────┤
│  MAKES (A-Z) │  Search bar / Year / Per page    │
│              │  1234 vehicles    Page 1 of 25   │
│  A           │ ┌──────┐ ┌──────┐ ┌──────┐      │
│  ACURA (37)  │ │ card │ │ card │ │ card │      │
│  AUDI (26)   │ └──────┘ └──────┘ └──────┘      │
│  AZURE D.(1) │ ┌──────┐ ┌──────┐ ┌──────┐      │
│              │ │ card │ │ card │ │ card │      │
│  B           │ └──────┘ └──────┘ └──────┘      │
│  BMW (17)    │                                  │
│  BUICK (15)  │                                  │
│              │                                  │
│  C           │                                  │
│  CADILLAC    │                                  │
│  ...         │                                  │
└──────────────┴──────────────────────────────────┘
```

**Mobile**: Sidebar collapses into a horizontal scrollable strip or a collapsible accordion at the top (not a full sidebar, which would be awkward on mobile).

## Changes

### `src/pages/LatestArrivals.tsx`
- Replace the flex-wrap chip cloud with a two-column layout: left sidebar (w-56, sticky) + right content area
- Sort makes alphabetically and group by first letter with letter headings (A, B, C...)
- Each make is a compact row: `ACURA (37)` — clickable, highlighted when selected
- When a make is selected, show models indented underneath it
- On mobile (below `lg`): render a collapsible `<details>` element or horizontal scroll strip instead of a sidebar
- Vehicle grid changes from 3-col to 2-col on desktop (since sidebar takes space), stays 1-col on mobile

### SEO considerations
- No layout changes affect heading hierarchy or meta tags
- Sidebar uses `<nav>` with `aria-label="Filter by make"` for accessibility
- No new pages or routes — purely a UI reorganization

