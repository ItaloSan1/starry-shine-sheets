import html
import os
import re
import time
import webbrowser
from datetime import datetime
from pathlib import Path

from anthropic import Anthropic

client = Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))


def save_html(html_content):
    os.makedirs("html_outputs", exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filepath = f"html_outputs/{timestamp}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html_content)
    return filepath


def extract_html(text):
    pattern = r"```(?:html)?\s*(.*?)\s*```"
    matches = re.findall(pattern, text, re.DOTALL)
    return matches[0] if matches else None


def open_in_browser(filepath):
    abs_path = Path(filepath).resolve()
    webbrowser.open(f"file://{abs_path}")
    print(f"  Opened in browser: {filepath}")


def generate_html_with_claude(system_prompt, user_prompt):
    print("  Generating HTML...\n")

    full_response = ""
    start_time = time.time()

    with client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=64000,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}],
    ) as stream:
        for text in stream.text_stream:
            full_response += text
            print(text, end="", flush=True)

    elapsed = time.time() - start_time
    print(f"\n\n  Complete in {elapsed:.1f}s\n")

    html_content = extract_html(full_response)
    if html_content is None:
        print("  Error: Could not extract HTML from response.")
        raise ValueError("Failed to extract HTML from Claude's response.")

    filepath = save_html(html_content)
    print(f"  HTML saved to: {filepath}")
    open_in_browser(filepath)

    return filepath


# ─── Eskimo Auto & Truck Parts — Dark Premium Redesign ───

BASE_SYSTEM_PROMPT = """
You are an expert frontend engineer and world-class UI designer who has worked at Apple, NVIDIA, and Amazon.
You craft beautiful, performant frontend applications with obsessive attention to visual detail.

<tech_stack>
Use vanilla HTML, CSS, & JavaScript. Use Google Fonts (Space Grotesk for headings, Inter for body).
All CSS and JS must be inline in a single self-contained HTML file.
</tech_stack>

<output>
Generate complete, self-contained HTML code. Include all CSS and JavaScript inline.

CRITICAL: You must wrap your HTML code in triple backticks with html language identifier like this:
```html
<!DOCTYPE html>
<html>
...
</html>
```

Our parser depends on this format - do not deviate from it!
</output>
"""

ESKIMO_AESTHETICS_PROMPT = """
<aesthetics>
You are designing a PREMIUM, DARK, FUTURISTIC auto parts website. Think NVIDIA meets luxury automotive.

## Color System (MANDATORY — use these exact values)
- Background: hsl(220, 20%, 4%) — near-black with blue undertone
- Foreground text: hsl(210, 20%, 92%) — soft white
- Card surfaces: hsl(220, 18%, 8%) — elevated dark
- Secondary surfaces: hsl(220, 15%, 12%) — slightly elevated
- Accent: hsl(210, 100%, 55%) — ELECTRIC BLUE (primary action color)
- Accent glow: hsl(210, 100%, 65%) — brighter blue for glow effects
- Borders: hsl(220, 15%, 15%) — subtle dark borders
- Muted text: hsl(210, 10%, 50%) — subdued information
- Success: hsl(142, 71%, 45%) — green for availability badges
- Destructive: hsl(0, 72%, 51%) — red for errors

## Typography
- Headings: 'Space Grotesk', system-ui — font-weight: 700, letter-spacing: -0.04em, line-height: 1.1
- Body: 'Inter', system-ui — clean, readable
- Hero h1: 3.5rem desktop, 2.25rem mobile
- Section titles: 2.25rem desktop, 1.75rem mobile
- Section labels: 0.8rem, uppercase, tracking-widest, accent color

## Glassmorphism (use extensively)
- Cards: background: hsla(220,18%,8%,0.6); backdrop-filter: blur(20px); border: 1px solid hsla(220,15%,15%,0.5)
- Strong glass: background: hsla(220,18%,8%,0.8); backdrop-filter: blur(30px)
- Every card, the search bar, nav pills, and the header-on-scroll should use glass effect

## Glow Effects
- Hover glow: box-shadow: 0 0 20px hsla(210,100%,55%,0.3), 0 0 60px hsla(210,100%,55%,0.1)
- Card hover: transform: translateY(-4px) + blue border glow + elevated shadow
- Button hover: box-shadow: 0 0 30px hsla(210,100%,55%,0.3)
- Icon containers on hover: background brightens + subtle glow shadow

## Text Gradient
- For key words and the logo: background: linear-gradient(135deg, accent, accent-glow); -webkit-background-clip: text; -webkit-text-fill-color: transparent

## Animations
- Hero background: Animated gradient mesh (radial gradients shifting over 8s)
- Grid pattern overlay: CSS background-image with 60px grid lines at 15% opacity
- Radial glow pulse: Central blue orb pulsing opacity 0.4-0.8 over 3s
- Scroll bounce indicator: chevron bouncing 8px over 2s
- Elements fade in + slide up on load with staggered delays
- Cards lift on hover with 0.4s cubic-bezier transition

## Layout Principles
- Max-width: 1200px centered container
- Section padding: 5rem top/bottom (generous)
- Dark hierarchy: bg (4%) → card (8%) → secondary (12%) → border (15%)
- Alternating section backgrounds: default bg vs secondary/50 for rhythm
- Fully responsive: 3-col → 2-col → 1-col grids

## What NOT to do
- NO light backgrounds anywhere
- NO orange or warm accents — ONLY electric blue
- NO flat design — everything should have depth via glass, glow, and layering
- NO small padding — be generous with whitespace
- NO generic stock photo placeholders — use emoji icons or SVG shapes instead
</aesthetics>
"""

USER_PROMPT = """
Create the homepage for "Eskimo Auto & Truck Parts" — an auto recycler and used/remanufactured parts store in Edmonton, Alberta, Canada (est. 1984). They ship parts worldwide.

The page must include ALL of these sections, in this order:

1. **HEADER** — Sticky. Transparent by default, glass effect on scroll. Logo: "ESKIMO" in blue gradient text + "Auto & Truck Parts" subtitle in muted text. Desktop nav links: Search Inventory, Request a Part, Latest Arrivals, Sell Your Vehicle, VIN Decoder, Warranty, About, Contact. Phone CTA: glass pill with blue phone icon + "(780) 473-2424". Hide nav on mobile, show hamburger.

2. **CINEMATIC HERO** — Full viewport height. Animated gradient mesh background + grid pattern overlay + radial blue glow orb (pulsing). Centered content:
   - Trust chip: glass pill "Since 1984 — Edmonton, Alberta" in accent color
   - Massive headline: "Quality Auto Parts." (white) + "Worldwide Delivery." (blue gradient text) on second line
   - Subtitle: "Used & remanufactured parts from Edmonton's most trusted auto recycler. Engines, transmissions, body panels, tires — tested, warrantied, shipped."
   - Glass search bar: 4 inputs (Year, Make, Model, Part needed) + blue Search button in a single row (stacks on mobile)
   - Quick category pills below search: Engines | Transmissions | Body Parts | Tires & Rims | Truck Parts | Remanufactured
   - Two CTA buttons: "Call (780) 473-2424" (blue solid) + "Browse Latest Arrivals" (glass outline)
   - Animated scroll-down chevron at bottom of viewport

3. **TRUST BAR** — Thin accent gradient line at top. 5-column stats: "40+" (Years), "1000s" (Parts in Stock), "100%" (Warranty-Backed), "Canada" (Wide Sourcing), 5 blue stars (Google Reviews). Values in blue gradient text.

4. **CATEGORY CARDS** — Section label "Categories", title "Shop by Part Type". 3x2 grid of dark glass cards (aspect 3:2) with hover glow. Categories: Engines, Transmissions, Body Parts, Tires & Rims, Auto Parts, Truck Parts. Each has name, description, "Browse →" text on hover.

5. **LATEST ARRIVALS** — Label "New In", title "Latest Arrivals". 4-column grid of glass vehicle cards with mock data: 2021 Toyota Camry SE (Available, 48k km), 2019 Ford F-150 XLT V8 (Now Dismantling, 112k km), 2020 Honda Civic EX (Available, 62k km), 2018 Chevy Silverado LT V8 (Dismantling, 145k km). Green badge for Available, blue for Dismantling. "View Parts →" on hover.

6. **WHY ESKIMO** — Label "Why Us", title "Why Choose Eskimo Auto?". 3-column grid of glass feature cards: Huge Inventory, Fair Pricing, Warranty-Backed, Parts Sourcing Network, Eco-Friendly Recycling, Trusted Since 1984. Each with icon, title, description.

7. **SHOPS & FLEET** — Label "B2B", title "For Shops, Mechanics & Fleets". 3 glass cards: Mechanics & Repair Shops, Body Shops, Fleet Operators. Link: "Learn about our shop & fleet programs →"

8. **SELL VEHICLE CTA** — Glass panel with subtle blue gradient top border line. Flex layout: left side has dollar icon + "Got a Vehicle to Sell?" heading + description, right side has "Get Your Free Quote →" blue button. Background glow orb in corner.

9. **TESTIMONIALS** — Label "Reviews", title "What Edmonton Drivers Say". 2x2 grid of glass cards with blue left border. Each: 5 blue stars, quote text, avatar circle with initial + name + role. Reviews from M.R. (Mechanic), S.K. (Vehicle Owner), D.T. (Body Shop Owner), J.L. (Fleet Manager).

10. **FAQ** — Label "FAQ", title "Frequently Asked Questions". 6 clickable accordion items in glass cards: parts types, warranty, finding parts, buying vehicles, worldwide shipping, business history. JavaScript toggle with smooth height animation.

11. **FINAL CTA** — Gradient mesh background. "Need a Part? We're Here to Help." heading + subtitle + two buttons (Call blue solid + Search Inventory glass outline).

12. **FOOTER** — Blue gradient line at top. 4-column grid: Brand (ESKIMO logo + description), Parts links (8 items), Company links (9 items), Contact (phone, email, address, hours with blue accent icons). Copyright bar at bottom.

Make it BEAUTIFUL. Every pixel matters. This should look like a $50,000 custom website.
"""

if __name__ == "__main__":
    generate_html_with_claude(
        BASE_SYSTEM_PROMPT + "\n\n" + ESKIMO_AESTHETICS_PROMPT,
        USER_PROMPT,
    )
