# 09c — Parts reference: mechanical, structural and engine (Parts Manual 106877GT)

**Scope.** Everything in Genie Parts Manual 106877GT that is *not* electrical and *not*
hydraulic: engine assemblies and engine-mounted parts for every engine option, fuel
tank, chassis/axles/steer/wheels, turntable and rotation bearing, counterweight, booms,
wear pads, cable tracks, pins and bushings, platform and gates, foot switch mechanical
parts, covers/latches, decals, manuals and the optional accessories. Companion files:
electrical parts (sections 305.1, 308.1, 603.1–606.1, 809.1) and hydraulic parts
(sections 700–714.1, 814.1, 817.1) are covered in their own files; where a mechanical
section also lists a hydraulic or electrical sub-part it is kept here so the section is
complete.

**Confidence.** Every row below is `[V]` — copied from the extracted text of the manual
(`extracted/106877.txt`) and spot-checked against rendered page images. Part numbers are
quoted exactly as printed, including the `GT` suffix, `P` (painted) and `-S` (service)
variants and the `*`, `**`, `***` markers Genie prints after some descriptions (the
manual prints no legend for those asterisks). Anything I inferred rather than read is
marked "(inferred)".

## 1. Which manual this is (important — differs from the README)

The PDF in `source/106877.pdf` is **not** the "Rev G6, Jan 2013" printing named in the
README. Its cover and page 2 read:

> Part No. 106877GT · Rev: H.04 · July 2024 · From SN100 to 2000 · Z-135/70 · Serial Number Range · Parts Manual
>
> Copyright © 2011 Terex Corporation. 106877GT Rev H.04 July 2024. First Edition, Eighth Printing.

So this file documents **Rev H.04 (July 2024, First Edition, Eighth Printing)**, 358
pages, serial range Z-135/70 SN 100 to 2000. The README/01-machine-identity entries that
say "Rev G6 Jan 2013" should be updated to H.04 July 2024 (same part number 106877GT).
Rev H.04 already carries the later part supersessions (1253702GT swivel, 1255768GT swing
drive, 216061GT angle sensors, 1316635GT fuel cap, 1303581GT battery, etc.).

## 2. The manual's own introduction (quoted from pp. 2–6)

Pages 2–6 are image-only in the PDF (no text layer); the text below was read from the
rendered page images.

**Page 2 — Technical Publications**

> Genie has endeavored to deliver the highest degree of accuracy possible. However,
> continuous improvement of our products is a Genie policy. Therefore, product
> specifications are subject to change without notice.
>
> Readers are encouraged to notify Genie of errors and send in suggestions for
> improvement. All communications will be carefully considered for future printings of
> this and all other manuals.
>
> **Contact Us:** Internet: www.genielift.com · e-mail: awp.techpub@terex.com
>
> **Find a Manual for this Model:** Go to http://www.genielift.com. Use the links to
> locate Operator's, Parts, Maintenance, and Service and Repair Manuals.
>
> Genie is a registered trademark of Terex South Dakota, Inc. in the USA and many other
> countries. "Z" is a trademark of Terex South Dakota, Inc.

**Page 3 — Serial label and serial-number format.** The page shows the serial label
(located under the cover; serial number also stamped on the chassis) with an example:

> Model: Z-135/70 · Serial number: Z13505-12345 · Model year: 2005 · Manufacture date:
> 04/12/05 · Electrical schematic number: ES0366 · Rated work load (including
> occupants): 600 lb / 273 kg · Maximum number of platform occupants: 2 · Maximum
> allowable side force: 150 lb / 670 N · Maximum allowable inclination of the chassis:
> 0 deg · Maximum wind speed: 28 mph / 12.5 m/s · Maximum platform height: 135 ft /
> 41.15 m · Maximum platform reach: 69 ft 9 in / 21.26 m · Gradeability: 45% · Country
> of manufacture: USA · This machine complies with: ANSI A92.5, CAN B.354.4 · Terex
> South Dakota, Inc., 18340 NE 76th Street, Redmond, WA 98052 USA

The serial is decoded as **Z135 | 05 | – 12345 = Model | Year of manufacture | Sequence
number**. The "SN nnnn" breaks quoted throughout this file refer to that sequence
number (e.g. "to SN 950" = Z135xx-0950 and earlier).

**Page 4 — How to Order Parts**

> Please be prepared with the following information when ordering replacement parts for
> your Terex or Genie product: Machine model number · Machine serial number · Part
> number · Part description and quantity · Purchase order number · "Ship to" address ·
> Desired method of shipment · Name and telephone number of the authorized distributor
> in your area.
>
> Use the Service Parts Fax Order Form on the next page and fax your order to our Parts
> Department. If you don't know the name of your authorized distributor, or if your area
> is not currently serviced by an authorized distributor, please call Terex or Genie
> Industries.
>
> North America: Telephone (425)881-1800 · Toll Free (800)536-1800 in US and Canada ·
> Fax (425)556-8659 · Toll Free fax (888)274-6192 · Email AWP.PartsSalesPO@terex.com ·
> http://genielift.com/en. EMEAR: Telephone (31)(165)519 313 · Fax (31)(165)511 148.
> Asia Pacific (Genie Singapore): +65 6692 7777. Australia: (61)(7)3456 4444. South
> America: (55)(11)4082 5600.

**Page 5 — Required Parts, Recommended Parts, Manuals** (quoted in full; these are the
manual's own service-consumable list)

> The following parts are required to perform maintenance procedures as outlined in the
> Genie Z-135/70 Service Manual.

| Description (as printed) | Part No. |
|---|---|
| Filter Element - Medium and High Pressure | 60857 |
| FILTER ELEMENT,10 MICRON | 131323 |
| Filter Element - Tank Return | 101959 |
| Engine Oil Filter - Cummins Models | 102288 |
| Engine Oil Filter - Deutz Models | 49924 |
| Engine Oil Filter - Perkins Models | 102632 |
| Fuel Filter/Separator - Cummins Models | 102287 |
| Fuel Filter - Deutz Models | 108543 |
| Fuel Filter/Separator - Perkins Models | 62433 |
| Fuel Filter - Perkins Models | 102639 |
| Air Filter Element | 62425 |
| O-ring Kit (for ORFS Fitting) | 49612 |
| Plug and Cap Kit (for ORFS Fitting) | 49613 |
| Dielectric Grease | 66339 |

> **Recommended Parts:** Genie Blue Paint, 1 Gallon 32150 · Genie Blue Paint, 12 Ounce
> Aerosol 1484 · Genie Gray Paint, 1 Gallon 32151 · Genie Gray Paint, 12 Ounce Aerosol
> 1268.
>
> **Manuals.** Genie Industries offers the following support documents for these models:
> EMI Safety Manual 27581 · Manual of Responsibilities ANSI A92.5 31779.

Note that page 5 lists the *original-engine* filters only (Cummins B4.5, Deutz, Perkins
1104C); the later B3.3T and 804D-33T engines use different numbers — see §4.

**Page 6** is the blank Service Parts Fax Order Form (Fax (425) 556-8659 / Toll Free
888-274-6192 / International +1-425-556-8659).

## 3. Table of contents (pp. 7–9, with page numbers as printed)

Sections marked **[here]** are reproduced in this file; **[elec]** / **[hyd]** belong to
the electrical and hydraulic parts files.

| Section | Title (as printed) | Page | In |
|---|---|---|---|
| 100 | Decals | 10 | |
| 101.1 | Word Decals | 10 | [here] |
| 102.1 | Symbol Decals | 16 | [here] |
| 200 | Drive Chassis | 20 | |
| 201.1 | Top View | 20 | [here] |
| 202.1 | Steer Yoke, Wheel Drive and Motor | 24 | [here] |
| 203.1 | Steer Sensor and Steer Cylinder | 28 | [here] |
| 204.1 | Chassis Components, Yellow Triangle Side | 32 | [here] |
| 205.1 | Chassis Components, Blue Triangle Side | 36 | [here] |
| 300 | Turntable Components | 38 | |
| 301.1 | Tank Side Covers | 38 | [here] |
| 302.1 | Engine Side Covers | 42 | [here] |
| 303.1 | Engine Compartment Components | 46 | [here] (mostly elec) |
| 304.1 | Hydraulic Tank Side Components | 50 | [here] (swing drive, tank, filters) |
| 305.1 | Ground controls | 60 | [elec] |
| 306.1 | Turntable Center Components | 66 | [here] |
| 307.1 | Secondary Boom Lift Cylinder | 72 | [here] |
| 308.1 | Wire Harness Diagram | 74 | [elec] |
| 400 | Engine Components | 80 | |
| 401.1 | Cummins B4. 5L Engine, View 1 (to SN 950) | 80 | [here] |
| 401.2 | Cummins B3.3T Engine, View 1 (from SN 951) | 86 | [here] |
| 402.1 | Cummins B4.5L Engine, View 2 (to SN 950) | 92 | [here] |
| 402.2 | Cummins B3.3T Engine, View 2 (fromSN 951) | 96 | [here] |
| 403.1 | Deutz BF4L 2011 / TD2011L04i Engine, View 1 | 100 | [here] |
| 404.1 | Deutz BF4L 2011 / TD2011L04i Engine, View 2 | 104 | [here] |
| 405.1 | Perkins 1104C-44 Engine, View 1 (to SN 952) | 110 | [here] |
| 405.2 | Perkins 804D-33T Engine, View 1 (from SN 953) | 114 | [here] |
| 406.1 | Perkins 1104C-44 Engine, View 2 (to SN 952) | 120 | [here] |
| 406.2 | Perkins 804D-33T Engine, View 2 (from SN 953) | 124 | [here] |
| 500 | Boom Components | 130 | |
| 501.1 | Secondary Boom Tube Reference | 130 | [here] |
| 502.1 | Secondary Boom Tube 1 (to SN 1853) | 132 | [here] |
| 502.2 | Secondary Boom Tube 1 (from SN 1854) | 138 | [here] |
| 503.1 | Secondary Boom Tube 2 | 142 | [here] |
| 504.1 | Secondary Boom Tube 3 | 144 | [here] |
| 505.1 | Secondary Boom Tube 4 | 146 | [here] |
| 506.1 | Secondary Boom Extension Cylinders | 148 | [here] |
| 507.1 | Secondary Boom Cable Track and Pull Tube | 152 | [here] |
| 508.1 | Secondary Boom Cable and Hose Clamps, Front View | 154 | [here] |
| 509.1 | Secondary Boom Cable and Hose Clamps, Rear View | 156 | [here] |
| 510.1 | Primary Boom Link, Lever and Lift Cylinder (to SN 359) | 158 | [here] |
| 510.2 | Primary Boom Link, Lever and Lift Cylinder (from SN 360) | 162 | [here] |
| 511.1 | Primary Boom Angle Sensor and Retract Limit Switch (to SN 1853) | 166 | [here] |
| 511.2 | Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854) | 168 | [here] |
| 512.1 | Primary Boom Cable Track | 172 | [here] |
| 513.1 | Primary Boom Bearings and Wear Pads | 176 | [here] |
| 514.1 | Primary Extension Boom | 178 | [here] |
| 515.1 | Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (to SN 1853) | 182 | [here] |
| 515.2 | Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (from SN 1854) | 186 | [here] |
| 516.1 | Jib Boom Cable Track | 190 | [here] |
| 517.1 | Jib Boom Extension and Platform Level Cylinders | 194 | [here] |
| 518.1 | Jib Boom Tubes and Wear Pads | 196 | [here] |
| 519.1 | Platform Rotator | 198 | [here] |
| 600 | Platform Components | 200 | |
| 601.1 | Platform Mount | 200 | [here] |
| 602.1 | Platform configurtion (sic) | 202 | [here] |
| 602.2 | Platform Components | 204 | [here] |
| 603.1 | Platform Control Box, View 1 | 208 | [elec] |
| 604.1 | Platform Control Box, View 2 | 212 | [elec] |
| 605.1 | Toggle Switch Lid Option | 214 | [elec] |
| 606.1 | Joysticks | 218 | [elec] |
| 700 | Hydraulic Components | 220 | |
| 701.1 | Traction Manifold, View 1 | 220 | [hyd] |
| 702.1 | Traction Manifold, View 2 | 222 | [hyd] |
| 703.1 | Steer/Axle Manifold | 224 | [hyd] |
| 704.1 | Jib Manifold | 228 | [hyd] |
| 705.1 | Function Manifold, View 1 (to SN 439) | 230 | [hyd] |
| 705.2 | Function Manifold, View 1 (from SN 440) | 232 | [hyd] |
| 706.1 | Function Manifold, View 2 (to SN 439) | 236 | [hyd] |
| 706.2 | Function Manifold, View 2 (from SN 440) | 240 | [hyd] |
| 707.1 | Function Enable Valve and Platform Rotator Manifold | 244 | [hyd] |
| 708.1 | Platform Manifold | 246 | [hyd] |
| 709.1 | Hydraulic Hoses and Fittings, Drive System | 248 | [hyd] |
| 710.1 | Hydraulic Hoses and Fittings, Steering System | 252 | [hyd] |
| 711.1 | Hydraulic Hoses and Fittings, Turntable Components | 254 | [hyd] |
| 712.1 | Hydraulic Hoses and Fittings, Boom Components | 260 | [hyd] |
| 713.1 | Hydraulic Hoses and Fittings, Platform Components | 264 | [hyd] |
| 714.1 | Pumps | 268 | [hyd] |
| 800 | Accessories | 270 | |
| 801.1 | Platform Accessories | 270 | [here] |
| 802.1 | Hostile Enviroment Option - Secondary Boom Wipers | 276 | [here] |
| 802.2 | Hostile Enviroment Option - Primary and Jib Boom Wipers, Cable Track Covers | 278 | [here] |
| 803.1 | Hostile Enviroment Option - Bellows Installation | 280 | [here] |
| 804.1 | Load Sense | 282 | [here] (structure) |
| 805.1 | Belt Driven Generator, Deutz Models | 284 | [here] |
| 806.1 | Belt Driven Generator, Cummins Models | 288 | [here] |
| 807.1 | Belt Driven Generator,Perkins Models | 292 | [here] |
| 808.1 | Air Line to Platform | 296 | [here] |
| 809.1 | Circuit Board Heater Option | 298 | [elec] |
| 810.1 | Hostile Environment Option - Engine Air Cleaners (to SN 952) | 300 | [here] |
| 810.2 | Hostile Environment Option - Engine Air Cleaners (from SN 953) | 302 | [here] |
| 811.1 | Cold Start Package | 304 | [here] |
| 812.1 | Welder Option - Chassis Components | 306 | [here] |
| 813.1 | Welder Option - Platform Components | 312 | [here] |
| 814.1 | Welder Option - Hydraulic Hoses and Fittings | 316 | [hyd] |
| 815.1 | Welder Option - Generator Components | 318 | [here] |
| 816.1 | Hydraulic Generator Option | 320 | [here] |
| 817.1 | Hydraulic Hoses and Fittings, Hydraulic Generator Option | 322 | [hyd] |
| 818.1 | Boom Latch Kit | 324 | [here] |
| 819.1 | Aircraft Protection Package (from 1071) | 326 | [here] |
| 820.1 | Operator Protection Structure | 330 | [here] |
| 821.1 | Fall Arrest Bar | 332 | [here] |
| 822.1 | Platform Mesh-Side Swing Gate 8' and 6' | 334 | [here] |
| 822.2 | Platform Mesh-Front Swing Gate 8' and 6' | 338 | [here] |
| — | Part Number Index | 342 | (p. 342–356; p. 357 Notes; p. 358 back cover) |

### How to read the tables (manual conventions, observed)

* Each section is an exploded-view drawing on the even page followed by a table on the
  odd page(s) with columns **Item · Part No. · Description · Qty.**
* A plain item number (`5`) is a callout on the drawing. An item with a trailing dash
  (`5-`) is a **sub-component or service part of the item above it** (seal kit, bearing,
  connector, alternative for another serial range) and is not called out separately.
  Lettered items (`4A`, `5B-`, `A-`) are alternatives (different serial range, region,
  engine or option) or kit headers. `-` alone is a part shown but not numbered.
* Rows that read `Ref. … (refer to nnn.n)` point to the section where that part is
  actually listed.
* A blank quantity means common hardware ("as required"); `as needed` is printed for
  shims. For wire cable and hose the quantity is a **length in inches** (the unit is
  printed only once, in 511.2, and as wrapped text on pp. 45, 57, 93, 297).
* Serial-range notes (`to SN 950`, `from SN 951`) sit in the description's second line.
  All of them are reproduced in the Notes column below and set in **bold**.
* `P` before `GT` = painted part (e.g. 102044PGT); `-SGT` = service part number;
  `T` prefix = Terex-sourced part number.
* "no longer available" / "component no longer available" is printed by Genie; the
  replacement, when one exists, is in the same note.

## 4. Quick-find tables (curated from the sections below)

### 4.1 Engine options and serial breaks

| Engine | Serial range (as printed) | Sections | Engine-spec decal |
|---|---|---|---|
| Cummins B4.5L | to SN 950 | 401.1 (p.80), 402.1 (p.92) | 102188GT DECAL,CUMMINS ENG SPECS |
| Cummins B3.3T (Tier 3) | from SN 951 | 401.2 (p.86), 402.2 (p.96) | 102188GT |
| Deutz BF4L 2011 | to SN 777 (belt, dipstick, air box, decal breaks) | 403.1 (p.100), 404.1 (p.104) | 97576GT DECAL,EXPLOSION HAZARD (Deutz, to SN 777) |
| Deutz TD2011L04i | from SN 778 | 403.1, 404.1 | 128953GT DECAL,ENGINE SPEC,DEUTZ,TD2011 (from SN 778) |
| Perkins 1104C-44 | to SN 952 | 405.1 (p.110), 406.1 (p.120) | 97603GT DECAL,NOTICE,PERKINS ENGINE,T2 |
| Perkins 804D-33T | from SN 953 | 405.2 (p.114), 406.2 (p.124) | 128974GT DECAL,ENGINE SPEC,PERKINS,804T |

The Deutz section has no "to/from SN" in its title; the 777/778 break is visible in the
belt, dipstick, air-box and decal rows. Throttle arm/solenoid mount on Deutz change at
SN 891/892. Flywheel coupler on Deutz changes at SN 534/535 (upgrade kit 128023GT).

### 4.2 Filters, belts, starters, alternators, cooling, exhaust, mounts, throttle — by engine

| Part | Cummins B4.5L (to SN 950) | Cummins B3.3T (from SN 951) | Deutz BF4L2011 / TD2011L04i | Perkins 1104C-44 (to SN 952) | Perkins 804D-33T (from SN 953) |
|---|---|---|---|---|---|
| Engine oil filter | 102288GT (p.95) | 122708GT (p.99) | 49924GT genuine / 1255653GT aftermarket (p.107–109) | 102632GT (p.111) | 101613GT ELEMENT,OIL FILTER (p.127) |
| Fuel filter / separator | 102287GT SEPARATOR-FUEL/WTR (p.81, 95) | 122709GT FUEL FILTER (p.99) | 108543GT FILTER/FUEL/SPIN-ON, head 58566GT (p.107) | 102639GT FILTER,FUEL + 75020GT separator w/ element 62433GT; adapter 102638GT (p.113, 121–123) | 101644GT FUEL LIFT PUMP/FILTER ASSY (p.117) |
| Air cleaner / element | 81467GT NELSON, element 62425GT, cover 75451GT, clips 75450GT, evacuator 52866GT, band 81468GT; precleaner 101662GT (p.81) | 122466GT, primary 146044GT, secondary 146045GT, clamp 122467GT (p.87–89) | 81467GT / 62425GT etc.; precleaner kit 70515GT (p.105) | 81467GT / 62425GT; precleaner 98012GT (p.121) | 81467GT / 62425GT (p.125); precleaner 139291GT (p.303) |
| Belt | 102203GT SERPENTINE (p.85, 95); tensioner 102303GT (p.93) | 146047GT (p.97) | 102589GT V-belt to SN 777 / 58630GT from SN 778 (p.105) | 102598GT V-belt, qty 2 (p.111) | 102534GT V-belt (for alternator) (p.115) |
| Starter | 89837GT 12V B3.9/B4.5 (p.95) | 139798GT (p.89) | 139709GT; heat guard kit 139621GT (p.103) | 226627GT (p.111) | 107546GT (p.115) |
| Alternator | 75102GT 95A to SN 219 / 111119GT from SN 220 (p.95) | 146046GT (p.97) | 58249GT; pulley 1280590GT, spacer 1280591GT (p.105) | 102646GT (p.111) | "ALTERNATOR — no longer available" (p.115) |
| Radiator / cap | 70518GT, cap 65473GT (p.85, 93) | 122404GT ASSY RAD/CAC, cap 65473GT (p.97) | air-cooled (air box 102218PGT to SN 777 / 122266GT from SN 778) | 70518GT, cap 65473GT (p.111) | 110304GT, cap 65473GT (p.117) |
| Radiator hoses | upper 60586GT, lower 102031GT (p.93) | upper 122407GT, lower 122408GT (p.87) | n/a | upper 60576GT, lower 75555GT (p.121–123) | upper 101601GT, lower 101602GT (p.125–127) |
| Fan / shroud | 75171GT puller fan, shroud 60649GT (p.93) | 122438GT 19.0" BREEZA (p.97) | n/a | 75328GT fan, guard 70540GT, shroud 60649GT (p.111) | 75328GT fan, shroud 101603PGT (p.115–117) |
| Water pump / thermostat | – | – | n/a | 102643GT pump, gasket 102644GT (p.123) | 226060GT pump, gasket 226061GT; thermostat 226127GT 180 °F, gasket 226128GT (p.127–129) |
| Muffler / exhaust | 60550GT NELSON 3.9L (no longer available), gasket 75151GT; scrubber option 61024GT (p.81) | 70444GT muffler; exhaust tube 122615GT (T3); bracket 122605GT; clamp 122470GT (p.87–91) | 70444GT (catalytic 101634GT), tail pipe 70447GT, flex pipe 70445GT, gasket 139983GT, brace 106280GT (p.101–103) | 70444GT (catalytic 101634GT), header 70553GT, heat shield 70554GT (p.113) | 70444GT, tail pipe 101619GT, exhaust weldment 128198GT, support 128280GT (p.115) |
| Engine mounts / isolators | brackets 102044PGT, weldment 102043GT, isolators 102045GT, flex-bolt 75260GT, centre-bonded 75259GT (p.81–83, 93–95) | mounts 122409GT front / 122410GT rear, isolators 102045GT, 122428GT flex-bolt (p.99) | rear mount 70440GT, front forming 70438GT, isolators 102045GT (p.103, 107) | brackets 60564GT, mounts 101931PGT, isolators 102045GT, 75259GT (p.111–113, 123) | mounts 128243GT RF / 128242GT RR / 128244GT LR / 128245GT LF, isolators 102045GT (p.119–127) |
| Engine tray | 106785GT (p.83) | 128314GT (p.99) | 128314GT (p.103) | 89511GT (p.121) | 128314GT (p.127) |
| Throttle actuator | 101957GT SOLENOID,THROTTLE,ASSY.TROMB; service kit 89998GT; cable 102048GT (p.83) | 101957GT; service kit 146307GT (link 146306GT, mount 146352GT) (p.89–91) | 101957GT; link 88512GT to SN 891 / 139322GT from SN 892; clevis 21130GT (p.107–109) | 101957GT; linkage 101219GT; plate 101217PGT (p.121–123) | 101957GT; linkage 128555GT; plate 128554GT (p.127) |
| Dipstick | 102301GT (p.81) | – | 49922GT to SN 777 / 52352GT from SN 778 (p.107) | 102631GT (p.111) | 128424GT tube assy (p.125) |
| Oil pressure / temp senders | 75153GT oil press sensor (p.95) | – | 139624GT 1.5 bar switch (kit 139666GT, replaces 65765); 111445GT oil temp; 58299GT oil press (p.105–107) | 102348GT oil press; 34058GT temp (p.121–123) | 128638GT temp sender; 1281249GT cold-start advance sensor (p.115) |
| Shutdown / fuel solenoid | – | – | T114678GT 12 V; cable 58256GT; connector 72255GT; diode 56445GT (p.109) | – | – |
| Fuel lift pump | – | – | 111668GT; primer bulb kit 119344GT (p.107) | – | 101644GT (p.117) |
| Flywheel coupler | – | 122472GT 15-tooth FBA (p.87) | 33024GT flex plate + 37003GT hub to SN 534; 128004GT FBA from SN 535; kit 128023GT (p.101) | – | 128004GT (p.125) |
| Cold start package | – | 122771GT (p.305) | 1287847GT (oil pan heater 128274GT) (p.305) | – | 122772GT (freeze plug heater 101632GT) (p.305) |

**Glow plugs:** the parts manual does **not** list engine glow plugs for any engine
(engine-internal parts are not broken down; only the "Glow Plug Switch" toggle
128200GT appears in the platform control box section 605.1, p.215). Order glow plugs
from the engine manufacturer using the engine serial number.

### 4.3 Hydraulic-tank-side filters and swing drive (section 304.1, p.50–59)

| Part | P/N | Notes |
|---|---|---|
| Medium-pressure filter assy (SAE 12, no indicator) | 87070GT | element 131323GT genuine / 1259055GT aftermarket |
| High-pressure filter assy SAE-12 | 60334GT | element 60857GT, o-ring 58222GT, seal 58223GT |
| Medium-pressure filter on engine (77139) | component no longer available | replacement assy 1267807GT with element 1268229GT (5 µm paper w/ bypass); old element 60857GT |
| Return filter 10 µm paper | 101959GT | element 101960GT genuine / 1254825GT aftermarket; gauge 52768GT; 228824GT element for fire-resistant fluid |
| Hydraulic tank 65 gal | 101483GT | magnetic plug 94612GT, sight gauge 21141GT, breather 60559GT, filler neck/cap 75113GT |
| Oil cooler with fan 12 VDC | 71259GT | fan 75854GT, thermostat 75855GT |
| Swing drive, current | 1255768GT | direct replacement for 139189 (from SN 1140) and 88921 (to SN 1139); bearing/seal kit 1315824GT; motor 139308GT |

### 4.4 Chassis, axles, steering, wheels

| Part | P/N | Notes | Page |
|---|---|---|---|
| Tire & wheel, LH (LF-LR) foam-filled RT | 50032GT to SN 1640; T111702GT (445D50/710) from SN 1641 | RNU (non-marking) versions 227796GT to SN 1640 / 233565GT from SN 1641 | 21–23 |
| Tire & wheel, RH (RF-RR) | 50188GT to SN 1640; T111703GT from SN 1641 | RNU 227797GT / 233566GT | 23 |
| Lug nut 3/4-16 x 7/8 radius | 34127GT | lug bolt 62478GT 3/4-16 x 3" | 23, 25 |
| Solid tire decal 445/65D22.5 | 230977GT | from SN 1610 | 15 |
| Tire spec decal | 97715GT to SN 1640 / 229356GT from SN 1641 | qty 4 | 13 |
| Axle extension cylinder | 98147GT | seal kit 106742GT; actuator block T107366GT (block 110481GT, seal kit 110482GT); CB valve 33428GT; bearing 18722GT; bellows 106007GT (hostile env.) | 21 |
| Steer cylinder | 98148GT (qty 4) | seal kit 65793GT; bearing 106849GT | 23 |
| Axle castings w/ bearing | (no P/N) | "component no longer available" both sides | 21 |
| Axle pivot pins | 94941GT 2.25 x 5.63 (2); 94940GT 2.25 x 12.50 (4); 101150GT 2.50 x 7.88 (4) | bearings 106042GT (4), 27698GT (4) | 21–23, 37 |
| Timing link | 94853GT (2) | rod end 1256267GT | 21 |
| Tie rods / rod ends | 1256267GT .5 x 3.75; 1255452GT .375 x 2.25; 825019GT .375 x 3.69 | with pins 60980GT, 42016GT, 30194GT (+ thrust washer 60555GT) | 29–31 |
| Steer yoke assembly (narrow) | 75452-SGT | bearings 119620GT, 119619GT; yoke shim 106064GT; king pin 75087GT; M16 screws 102064GT (16) + washers 76390GT (16) | 25, 29 |
| Wheel drive motors / hubs | see 202.1 note | seal kit motor 106098GT; hub seal kit 106873GT, bearing kit 106874GT, brake kit 106875GT; manual disengage cap 102449GT | 25–27 |
| Axle limit switch guard | 106070PGT | switch assy 110934GT | 21 |
| Axle position sensor | 94985GT (calibrate) | activator 60618GT; cover 60609GT; pin weldment 107536GT; thrust washer 101499GT | 33–35 |
| Steer sensor sub-assy | 106187GT (calibrate) | activator 60618GT; cover 60609GT | 29 |
| Axle covers w/ decals | RR (no P/N printed), LR 106446GT, LF 106449GT, RF 106448GT; painted 101039PGT (RF,LR) / 101558PGT (LF,RR) | | 21–23, 33 |
| Manifold box + cover | 101032PGT; cover 107728GT (word) / 106450GT (symbol); hinge 36415GT; latch 45363GT; keeper 75076GT | | 33–35 |

### 4.5 Turntable, rotation bearing, rotation lock, counterweight

| Part | P/N | Notes | Page |
|---|---|---|---|
| Turntable bearing | 101572GT | seal 227785GT | 33 |
| Bearing bolts (chassis side) | 88212GT SHC 3/4-10 x 3.00 A574 (28) + 33278GT washers (28); 21175GT SHC 5/8-11 x 4 A574 (34) + 13064GT washers (34) | | 33 |
| Bearing bolts (turntable side) | 88212GT (16) + 33278GT (16) | pinion guard 106171GT | 55 |
| Swing drive | 1255768GT (current) | see 4.3 | 51–55 |
| Transport / rotation storage lock pin | 61222GT | handle 61223GT; service kit 146343GT | 73 |
| Counterweight cast 775 lb | 101444GT LH; 101445GT RH | 34350GT screw 1-8 x 6, 38859GT washer, 29764GT nut | 41 |
| Secondary (riser) lift cylinder | 61812GT | seal kit 106376GT; CB valves 106846GT, 76069GT; bearing 27697GT; pins 107654GT, 94818GT | 73 |
| Hydraulic/electric swivel | 1253702GT complete | hydraulic 1253699GT (seal kit 1276830GT); electric 1253696GT | 69–71 |
| Turntable covers | 106871GT tank side w/ word decals (106872GT symbol); 106881GT engine side (106882GT symbol); 60485GT LH, 50082GT RH turntable covers; 60966GT access cover w/ latch 60964GT | gas strut 122272GT; latches 45363GT; keeper 75076GT; grab handle 60884GT | 39–45 |
| Fuel tank 40 gal | 1272872GT | cap 1316635GT (replaces 101726GT); straps 60938GT (2); sender 60890GT | 45 |
| Coolant recovery bottle 4 qt | 60721GT | Cummins and Perkins | 47 |

### 4.6 Boom pivot pins, bushings, wear pads, cable tracks (summary)

| Location | Pin | Bearings / bushings | Wear pads | Page |
|---|---|---|---|---|
| Riser #1 pivot | (via 307.1) 94818GT 2.50 x 25.00 | 27697GT 2.50 x 2.75 x 1.50 (2) | 34124GT 5x3x.625 (2), 88022GT 7x3x1 (2), 106796GT 7x3x.5 w/insert (8), 50245GT 7x3x.75 (4), shim 60304GT | 133–141 |
| Riser #2 | – | – | 50245GT (8), 88648GT (4), 106797GT (4), 88022GT (2), 106796GT (4); roller 107823GT | 143 |
| Riser #3 | – | – | 50245GT (2), 88648GT (4), 106797GT (4), 88022GT (2), 106539GT 7x2x.75 (4), 106796GT (4); shims 60304GT/60840GT | 145 |
| Riser #4 | – | 27698GT 2.50 x 2.75 x 2.00 (2) | 50245GT (2), 88648GT (4), 106797GT (4) | 147 |
| Primary lift cylinder 61814GT | 94810GT 3.00 x 11.50; 94811GT 3.25 x 19.00 (snap rings 1253814GT) | 88279GT, 101562GT | – | 159–163 |
| Primary link / lever | 94813GT 2.50 x 19.00 (to SN 359) / 119108GT 2.50 x 18.68 (from SN 360); 94809GT 2.50 x 19.56 | 101566GT, 101567GT | – | 159–165 |
| Primary boom | 94806GT 2.00 x 8.77; 88345GT 1.25 x 8.26 | 101561GT, 101559GT, 101560GT | 34125GT 5x1.5x.75 (6), 50245GT (2), 88648GT (2), 107586GT 7x3x.5 (4), 60239GT (4, on extend cyl) | 177–181 |
| Bellcrank | 94804GT 2.00 x 17.06; 94803GT 1.50 x 17.06; 47666GT 1.50 x 9.13 | 42014GT, 88280GT | – | 183–189 |
| Jib | T108075GT 1.25 x 5.25; T108079GT 1.25 x 8.30; 50546GT 1.25 x 6.36 (2); T107883GT 1.25 x 7.88 | 47377GT, 30370GT | 30138GT (2), 34125GT (8), 30137GT (6), 71858GT (1); shims 29080GT, 42502GT | 195–199 |
| Cable tracks | secondary 61853GT 57 links to SN 1853 / 236168GT from SN 1854; primary 61852GT 27 links; jib 94775GT 15 links; primary-to-secondary 106574GT 11 links | repair: 4-link 107717GT (secondary) / 77896GT (primary); pin & ring kits 107719GT / 106154GT; covers 106161GT (15), 106162GT (27), 106733GT (11) | | 153, 159, 173, 193, 279 |

### 4.7 Platform, foot switch, rotator mounting, gates

| Part | P/N | Notes | Page |
|---|---|---|---|
| Complete 8' platform w/ side gate, from SN 779 to 2000 | 1296933GT ANSI word; 1296934GT AUS; 1296935GT ANSI symbol; 1296936GT CE | | 203 |
| 8' tri-entry platform assemblies (older) | 229359GT–229362GT to SN 778; 229363GT–229366GT from SN 779 | by decal type | 273 |
| Blank platform assemblies | 1272304GT 8 ft tri; 1272303GT 6 ft dual; 160809GT 6 ft single entry; weldments 1274859GT (8'), 73900GT (6') | | 203 |
| Foot switch assembly | 227617GT | switch 227564GT 20A IP65; connector 119058GT; cover 147121GT | 205 |
| Flooring | 1267746GT 72x30 (6' side gate); 73477GT 6'; 73478PGT 8' | | 205 |
| Platform support weldment (service) | 60370-SGT | CE (load sense) 61997GT | 201, 283 |
| Platform pivot bolt | 73928GT 1-8 x 11 GR5 (826792GT ZAG) | washers 122079GT (2) / 824116GT; nut 29764GT / 826794GT / 824031GT | 201, 207 |
| Rotator to support screws | 49857GT 3/8-16 x .88 GR8 (8) + 57201GT washers; 826791GT + 826793GT | | 201, 207 |
| Platform rotator | 88576GT | seal kit 122944GT | 199 |
| Side swing gate | 1272307GT; latch 1267747GT; hinges 104804GT | | 207 |
| Front half gate | 128368GT kit (to SN 382) / 128374GT aluminium weldment (from SN 383); latch casting 1487GT; catch 1488GT; pin 33674GT; spring 42104GT | | 273, 339–341 |
| Manual storage box | 44743GT w/ decals (USA/Can/Aus); 24514GT (Europe/Asia/S.America) | | 205 |
| Sliding midrail kit | 102992GT | | 205–207 |
| Work tray kit | 1289552GT | | 205 |

### 4.8 Decal kits and manuals

| Item | P/N | Page |
|---|---|---|
| Word decal kit, Z-135 (does not include items 12, 17, 24, 42, 47 or 48) | 107692GT | 11 |
| Word decal kit, platform only | 822971GT | 11 |
| Symbol decal kit, Z-135 (includes items 1-6, 9, 12-18, 21, 23-25 and 27-30) | 107693GT | 17 |
| Symbol decal kit, platform only | 822975GT | 17 |
| EMI Safety Manual | 27581 | 5 |
| Manual of Responsibilities ANSI A92.5 | 31779 | 5 |
| Manual box w/ decals | 44743GT | 205 |
| Genie paint: blue 1 gal 32150, blue aerosol 1484, gray 1 gal 32151, gray aerosol 1268 | | 5 |

## 5. Full section tables

Columns: Item · Part number · Description · Qty · Notes (serial-number breaks in bold) · Manual page.

---

### Group: Decals

#### 101.1 Word Decals  (p. 10)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 107692GT | DECAL KIT - WORD, Z135 |  | does not include items 12, 17, 24, 42, 47 or 48 | 11 |
| B- | 822971GT | DECAL KIT,Z-135 PLAT,WRD |  | platform only | 11 |
| 1 | 25994GT | DECAL,NOTICE,SHUTOFF VALVES | 1 |  | 11 |
| 2 | 27204GT | DECAL,ARROW BLUE | 2 |  | 11 |
| 3 | 27205GT | DECAL,ARROW YELLOW LRG 9" | 2 |  | 11 |
| 4 | 27206GT | DECAL,TRIANGLE,BLUE | 2 |  | 11 |
| 5 | 27207GT | DECAL,TRIANGLE,YELLOW | 2 |  | 11 |
| 6 | 27564GT | DECAL,DANGER,ELEC.HAZ.STAY CLR | 2 |  | 11 |
| 7 | 28159GT | DECAL,DIESEL | 1 |  | 11 |
| 8 | 28161GT | DECAL,WARN,CRUSH HAZARD HAND | 2 |  | 11 |
| 9 | 28164GT | DECAL,NOTICE,HAZARDOUS MAT'LS\* | 1 |  | 11 |
| 10 | 28165GT | DECAL,INSTRUCT,FOOTSWITCH OPER | 1 |  | 11 |
| 11 | 28171GT | DECAL,DANGER,NO SMOKING \*\*\* | 1 |  | 11 |
| 12 | 28174GT | DECAL,POWER TO PLATFORM 230V | 2 |  | 11 |
| 13 | 28175GT | DECAL,WARNING-COMPART ACCESS | 2 |  | 11 |
| 14 | 28176GT | DECAL,LABEL,MANUAL NOT HERE | 1 |  | 11 |
| 15 | 28177GT | DECAL,WARN,CRUSH HAZARD PLAT | 2 |  | 11 |
| 16 | 28181GT | DECAL,WARN,FALL HAZARD | 1 |  | 11 |
| 17 | 28235GT | DECAL,POWER TO PLATFORM 115V | 2 |  | 11 |
| 18 | 28236GT | DECAL,WARN,IMPROPER OPERATION | 1 |  | 11 |
| 19 | 31060GT | DECAL,DANGER DO NOT ALTER SWTC | 2 |  | 11 |
| 20 | 32998GT | DECAL,NOTICE,MAX LOAD 600 LBS | 1 |  | 11 |
| 21 | 33952GT | DECAL,DANGER,TILT ALARM | 1 |  | 11 |
| 22 | 40434GT | DECAL,LANYARD ANCHORAGE POINT | 3 |  | 11 |
| 23 | 44981GT | DECAL,LABEL,AIRLINE 110 PSI | 2 |  | 11 |
| 24 | 44986GT | DECAL,INSTR,SIDE FRC/WIND,AUS | 1 | Australia | 11 |
| 25 | 65278GT | DECAL,CAUTION,NO STEP | 2 |  | 11 |
| 26 | 82314GT | DECAL,DANGER,TIP-OVER | 1 |  | 11 |
| 27 | 82422GT | SCREW, BHC, 1/4-20 X 1, ZAG | 1 |  | 13 |
| 28 | 82840GT | DECAL,GROUND CONTROL PANEL | 1 |  | 13 |
| 29 | 82841GT | DECAL,PLATFORM CONTROL PANEL | 1 |  | 13 |
| 29- | 82308GT | DECAL,CONTROL PANEL PROT 82281 |  | top clear protection for the platform box decal 82841 | 13 |
| 30 | 97576GT | DECAL,EXPLOSION HAZARD | 1 | **Deutz; to SN 777** | 13 |
| 30- | 128953GT | DECAL,ENGINE SPEC,DEUTZ,TD2011 |  | **Deutz; from SN 778** | 13 |
| 31 | 97602GT | DECAL,EXPLOSION HAZARD | 1 |  | 13 |
| 32 | 97603GT | DECAL,NOTICE,PERKINS ENGINE,T2 | 1 | Perkins 1104C | 13 |
| 32A | 128974GT | DECAL,ENGINE SPEC,PERKINS,804T | 1 | Perkins 804D | 13 |
| 33 | 97705GT | DECAL,COSMETIC,GENIE Z-135/70 | 1 |  | 13 |
| 34 | 97708GT | DECAL,LABEL,FUSE RELAY PANEL | 1 |  | 13 |
| 35 | 97715GT | DECAL,DANGER/NOTICE,TIRE SPECS | 4 | **to SN 1640** | 13 |
| 35- | 229356GT | DECAL,DANGER/NOTICE,TIRE SPECS |  | **from SN 1641** | 13 |
| 36 | 97716GT | DECAL,LABEL,WHEEL LOAD Z135 | 4 |  | 13 |
| 37 | 97757GT | DECAL,LABEL,OIL LEVEL IND | 1 |  | 13 |
| 38 | 97864GT | DECAL,CAUTION,COLLISION HAZ | 1 |  | 13 |
| 39 | 97865GT | DECAL,WARN,ELECTRO HAZARD | 2 |  | 13 |
| 40 | 97875GT | DECAL,WARN.WELD LINE INST.WORD | 2 | welder ready option | 13 |
| 41 | 97885GT | DECAL,NOTICE,OPERATING INST. | 2 |  | 13 |
| 42 | 97887GT | DECAL,INSTR,MAX SIDE FRC,ANSI | 1 | ANSI & CSA | 13 |
| 43 | 97890GT | DECAL,DANGER,GEN SAFETY RULES | 2 |  | 13 |
| 44 | 97889GT | DECAL,COSMETIC,Z-135 CHASSIS | 2 |  | 13 |
| 45 | 97891GT | DECAL,COSMETIC,GENIE Z-135 | 1 |  | 13 |
| 46 | 102188GT | DECAL,CUMMINS ENG SPECS | 1 |  | 13 |
| 47 | 1000083GT | DECAL,NOTICE,START/CONTRL BATT | 1 |  | 13 |
| 48 | 1000084GT | DECAL,CAUTION,AUX BATTERIES | 1 |  | 13 |
| 49 | 133278GT | DECAL,LOW/ULTRA LOW SULFR FUEL | 1 |  | 13 |
| 50 | T112773GT | TAPE, PROTECTIVE MASK | 2 | **from SN 1414** | 13 |
| 51 | 226520GT | DECAL,INST,OPER,INST,Z135,AUS |  | Australia | 15 |
| 52 | 230977GT | DECAL,SOLID TIRE,445/65D22.5 |  | **from SN 1610** | 15 |
| 53 | 230985GT | DECAL,GROUND CONTROL,Z135 |  |  | 15 |
| 54 | 230987GT | DECAL, SERVICE RECOVERY SWITCH |  |  | 15 |
| 55 | 233130GT | DECAL, PCON, TOG SW, Z135 |  |  | 15 |
| 55- | 161522GT | DECAL, PROTECTIVE COVER, Z135 PBOX |  | top clear protection for the platform box decal 233130 | 15 |
| 56 | 219160GT | DECAL, INSTRUCTION, OPS | 1 | option | 15 |
| 57 | 97579GT | DECAL,DANGER,TIP-OVER,WELDER\*\* |  | welder option | 15 |
| 58 | 82862GT | DECAL,FIRE EXTINGUISHER |  | welder option | 15 |

#### 102.1 Symbol Decals  (p. 16)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 107693GT | DECAL KIT - SYMBOL,Z135 |  | includes items 1-6, 9, 12-18, 21, 23-25 and 27-30 | 17 |
| B- | 822975GT | DECAL KIT,Z-135 PLAT,SYM |  | platform only | 17 |
| 1 | 27204GT | DECAL,ARROW BLUE | 2 |  | 17 |
| 2 | 27205GT | DECAL,ARROW YELLOW LRG 9" | 2 |  | 17 |
| 3 | 27206GT | DECAL,TRIANGLE,BLUE | 2 |  | 17 |
| 4 | 27207GT | DECAL,TRIANGLE,YELLOW | 2 |  | 17 |
| 5 | 28159GT | DECAL,DIESEL | 1 |  | 17 |
| 6 | 28171GT | DECAL,DANGER,NO SMOKING \*\*\* | 1 |  | 17 |
| 7 | 28174GT | DECAL,POWER TO PLATFORM 230V | 2 |  | 17 |
| 8 | 28235GT | DECAL,POWER TO PLATFORM 115V | 2 |  | 17 |
| 9 | 40434GT | DECAL,LANYARD ANCHORAGE POINT | 3 |  | 17 |
| 10 | 44981GT | DECAL,LABEL,AIRLINE 110 PSI | 2 |  | 17 |
| 11 | 82422GT | SCREW, BHC, 1/4-20 X 1, ZAG | 1 |  | 17 |
| 12 | 82472GT | DECAL,WARNING,CRUSHING HAZARD | 2 |  | 17 |
| 13 | 82473GT | DECAL,SYMBOL-COMP ACCESS | 1 |  | 17 |
| 14 | 82487GT | DECAL,SYMBOL-READ THE MANUAL | 2 |  | 17 |
| 15 | 82544GT | DECAL,DANGER,ELEC.HAZ.STAY CLR | 2 |  | 17 |
| 16 | 82546GT | DECAL,DANGER,MAX LOAD 600 LBS. | 1 |  | 17 |
| 17 | 82548GT | DECAL,WARN,CRUSH HAZARD PLAT | 2 |  | 17 |
| 18 | 1000054GT | DECAL,DRIVE ENABLE PATCH | 1 |  | 17 |
| 19 | 82602GT | DECAL,DANGER,MAX SIDE FRC,667N | 1 |  | 17 |
| 20 | 82604GT | DECAL,DANGER,SIDE FRC 400N | 1 |  | 17 |
| 21 | 82607GT | DECAL,CAUTION,NO STEP\*\*\* | 2 |  | 17 |
| 22 | 82671GT | DECAL,LABEL,WELD LINE INST,SYM | 2 |  | 17 |
| 23 | 82840GT | DECAL,GROUND CONTROL PANEL | 1 |  | 17 |
| 24 | 82841GT | DECAL,PLATFORM CONTROL PANEL | 1 |  | 17 |
| 24- | 82308GT | DECAL,CONTROL PANEL PROT 82281 |  | top clear protection for the platform box decal 82841 | 17 |
| 25 | 82924GT | DECAL,CAUTION,SHUTOFF VALVES\*\* | 1 |  | 17 |
| 26 | 97705GT | DECAL,COSMETIC,GENIE Z-135/70 | 1 |  | 19 |
| 27 | 97716GT | DECAL,LABEL,WHEEL LOAD Z135 | 4 |  | 19 |
| 28 | 97757GT | DECAL,LABEL,OIL LEVEL IND | 1 |  | 19 |
| 29 | 97815GT | DECAL,LABEL,LOWER MIDRAIL | 1 |  | 19 |
| 30 | 97889GT | DECAL,COSMETIC,Z-135 CHASSIS | 2 |  | 19 |
| 31 | 97891GT | DECAL,COSMETIC,GENIE Z-135 | 1 |  | 19 |
| 32 | 33550GT | TAPE,WARNING,BLK/YEL, 50'\*\*\* | 1 roll |  | 19 |
| 33 | T112773GT | TAPE, PROTECTIVE MASK | 2 | **from SN 1414** | 19 |
| 34 | 233130GT | DECAL, PCON, TOG SW, Z135 |  |  | 19 |
| 34- | 161522GT | DECAL, PROTECTIVE COVER, Z135 PBOX |  | top clear protection for the platform box decal 233130 | 19 |
| 35 | 219160GT | DECAL, INSTRUCTION, OPS | 1 | option | 19 |

---

### Group: Drive chassis

#### 201.1 Top View  (p. 20)

Item 1 (AXLE CVR W/DECALS,RR) is printed **without a part number** on p.21 (confirmed on the page image); items 2 and 11 (axle castings) are "component no longer available". Wire-cable quantities (e.g. 39 for 43960GT) are lengths in inches (unit is printed only in section 511.2).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 61283GT | SLEAVING,PARKER TEK,2.00" |  |  | 21 |
| 1 |  | AXLE CVR W/DECALS,RR | 1 |  | 21 |
| 2 |  | AXLE CASTING, W/BEARING, LF,RR | 2 | component no longer available | 21 |
| 3 | 94941GT | PIN,2.25DIAX5.63LG,1HOLE | 2 |  | 21 |
| 4 | 106042GT | BEARING,2.25IDX2.50ODX2.00L | 4 |  | 21 |
| 5 | 10597GT | SCREW,HHC,1/2-13 X 1.25 GR5 |  |  | 21 |
| 6 | 1256267GT | ROD END,.5 X 3.75,ZAG |  |  | 21 |
| 7 | 94853GT | TIMING LINK,MACHINED | 2 |  | 21 |
| 8 | 110934GT | SWITCH ASSY,LIMIT LSFA1ES,LSRA | 2 |  | 21 |
| 8- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 39 |  | 21 |
| 8- | 119761GT | CONN PLUG 2 WAY EXTEND DT |  |  | 21 |
| 8- | 60425GT | CONN, PLUG, 2 WAY, DEUTSCH, DT, LOCK |  |  | 21 |
| 8- | 73714GT | TERMINAL, SOCKET, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 21 |
| 8- | 110771-465R3GT | SWITCH LIMIT W/ROLLER NO/NC |  |  | 21 |
| 9 | 106070PGT | FORMING,LIMIT SWITCH GUARD PNT | 2 |  | 21 |
| 9- | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 |  |  | 21 |
| 10 | 98147GT | CYLINDER,AXLE EXTENSION Z135 | 2 |  | 21 |
| 10- | 106742GT | SEAL KIT,CYL (98147)\*\*\* |  |  | 21 |
| 10- | T107366GT | ASSY,LIM.SW.ACTUATOR BLOCK\*\*\* |  | includes actuator part 110481 and seal kit part 110482 | 21 |
| 10- | 110481GT | LIMIT SWITCH ACTUATOR BLOCK |  | (block only) | 21 |
| 10- | 110482GT | LS ACTUATOR BLOCK SEAL KIT |  | (seal kit for part 110481) | 21 |
| 10- | 33428GT | VALVE,COUNTERBALANCE |  |  | 21 |
| 10- | 18722GT | BEARING,2.25IDX2.50ODX1.50L\*\*\* |  |  | 21 |
| 10- | 106007GT | BELLOWS,AXLE EXTEND CYLINDER\*\* |  | FOR HOSTILE ENV. PACKAGE ONLY | 21 |
| 11 |  | AXLE CASTING, W/BEARING, RF,LR | 2 | component no longer available | 21 |
| 12 | 106446GT | AXLE CVR W/DECALS,LR | 1 |  | 21 |
| 13 | 50032GT | TIRE & WHEEL ASSY LF-LR |  | **RT, Foam-filled, left; to SN 1640** | 21 |
| 13- | T111702GT | ASSY,TIRE,445D50/710,LH |  | **RT, Foam-filled, left; from SN 1641** | 21 |
| 13- | 227796GT | TIRE & WHEEL ASSY LF-LR | 2 | **RT, Foam-filled RNU, left; to SN 1640** | 23 |
| 13- | 233565GT | TIRE & WHEEL ASSY, LH |  | **RT, Foam-filled RNU, left; from SN 1641** | 23 |
| 13- | 34127GT | NUT,LUG,3/4-16 X 7/8 RADIUS |  |  | 23 |
| 14 | 98148GT | CYLINDER,STEER Z135 | 4 |  | 23 |
| 14- | 65793GT | SEAL KIT CYL\*\*\* |  |  | 23 |
| 14- | 106849GT | BEARING,1.5"ID X 1.75OD X1.75L |  |  | 23 |
| 15 | 94940GT | PIN,2.25DIAX12.50LG,1HOLE | 4 |  | 23 |
| 16 | 106449GT | AXLE CVR W/DECALS, LF | 1 |  | 23 |
| 17 | 106448GT | AXLE CVR W/DECALS,RF | 1 |  | 23 |
| 18 | 50188GT | TIRE & WHEEL ASSY RF-RR |  | **RT, Foam-filled, right; to SN 1640** | 23 |
| 18- | T111703GT | ASSY,TIRE,445D50/710,RH |  | **RT, Foam-filled, right; from SN 1641** | 23 |
| 18- | 227797GT | TIRE & WHEEL ASSY RF-RR |  | **RT, Foam-filled, RNU, right; to SN 1640** | 23 |
| 18- | 233566GT | TIRE & WHEEL ASSY, RH |  | **RT, Foam-filled, RNU, right; from SN 1641** | 23 |
| 18- | 34127GT | NUT,LUG,3/4-16 X 7/8 RADIUS |  |  | 23 |

#### 202.1 Steer Yoke, Wheel Drive and Motor  (p. 24)

Two drive configurations: to SN 179 four identical 45 cc motors 101070GT with 76:1 wheel drives 106756GT; from SN 180 two "square end" positions (45 cc motor 101070GT + 113:1 drive 107722GT) and two "circle end" positions (25 cc motor 107723GT + 76:1 drive 106756GT). Lug nut 34127GT and lug bolt 62478GT are listed under each drive.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 102064GT | SCREW,SHC,M16 X 50MM,BLACK | 16 |  | 25 |
| 2 | 76390GT | WASHER,FLAT, M16 HARDENED | 16 |  | 25 |
| 3 | 75452-SGT | YOKE ASSEMBLY,SUPERBOOM,NRRW | 1 |  | 25 |
| 3- | 119620GT | BEARING,1.75IDX2.00ODX1.50L |  |  | 25 |
| 3- | 119619GT | BEARING,1.5 ID X 1.75 ODX1.5L |  |  | 25 |
| 4 | 101070GT | MOTOR,PISTON,2 SPEED,45CC | 4 | **to SN 179** | 25 |
| 4- | 106098GT | SEAL KIT,MOTOR,LC/KC\*\*\* |  |  | 25 |
| 4A | 101070GT | MOTOR,PISTON,2 SPEED,45CC | 2 | **square end; from SN 180** | 25 |
| 4A- | 106098GT | SEAL KIT,MOTOR,LC/KC\*\*\* |  |  | 25 |
| 4B | 107723GT | MOTOR,PISTON,2 SPEED,25CC | 2 | **circle end; from SN 180** | 25 |
| 4B- | 106098GT | SEAL KIT,MOTOR,LC/KC\*\*\* |  |  | 25 |
| 5 | 106756GT | WHEEL DRIVE W/BRAKE,76:1 | 4 | **to SN 179** | 25 |
| 5- | 106873GT | SEAL KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5- | 106874GT | BEARING KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5- | 106875GT | BRAKE KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5- | 62478GT | LUG BOLT,3/4-16 X 3"\*\*\* |  |  | 25 |
| 5- | 34127GT | NUT,LUG,3/4-16 X 7/8 RADIUS |  |  | 25 |
| 5- | 237233GT | HUB, WHEEL COVER,Z135 (106756) |  |  | 25 |
| 5- | 237232GT | HUB, WHEEL COVER, O-RING (FOR 237233GT) |  |  | 25 |
| 5- | 102449GT | CAP,MANUAL DISENGAGE (89212) |  |  | 25 |
| 5- | 7339GT | SCREW,HHC,1/4-20 X .5 |  | use 2 each on cap 102449 | 25 |
| 5A | 106756GT | WHEEL DRIVE W/BRAKE,76:1 | 2 | **circle end; from SN 180** | 25 |
| 5A- | 106873GT | SEAL KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5A- | 106874GT | BEARING KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5A- | 106875GT | BRAKE KIT,RWD 1700TB\*\*\* |  |  | 25 |
| 5A- | 62478GT | LUG BOLT,3/4-16 X 3"\*\*\* |  |  | 25 |
| 5A- | 34127GT | NUT,LUG,3/4-16 X 7/8 RADIUS |  |  | 25 |
| 5A- | 237233GT | HUB, WHEEL COVER,Z135 (106756) |  |  | 25 |
| 5A- | 9990080GT | C034060, SCREW FOR 106756 | 2 | secures gear cover over wheel stud mount | 27 |
| 5A- | 237232GT | HUB, WHEEL COVER, O-RING (FOR 237233GT) |  |  | 27 |
| 5A- | 102449GT | CAP,MANUAL DISENGAGE (89212) |  |  | 27 |
| 5A- | 7339GT | SCREW,HHC,1/4-20 X .5 |  | use 2 each on cap 102449 | 27 |
| 5B | 107722GT | WHEEL DRIVE W/BRAKE,113:1 | 2 | **square end; from SN 180** | 27 |
| 5B- | 106873GT | SEAL KIT,RWD 1700TB\*\*\* |  |  | 27 |
| 5B- | 106874GT | BEARING KIT,RWD 1700TB\*\*\* |  |  | 27 |
| 5B- | 106875GT | BRAKE KIT,RWD 1700TB\*\*\* |  |  | 27 |
| 5B- | 62478GT | LUG BOLT,3/4-16 X 3"\*\*\* |  |  | 27 |
| 5B- | 34127GT | NUT,LUG,3/4-16 X 7/8 RADIUS |  |  | 27 |
| 5B- | 1280068GT | HUB SUPPORT,WHEEL DRIVE(107722) |  | for 107722 | 27 |
| 5B- | 1280069GT | RING,WHEEL DRIVE(107722) |  | for 107722 | 27 |
| 5B- | 1280070GT | COLUMN,WHEEL DRIVE(107722) |  | for 107722 | 27 |
| 6 | 94747GT | SCREW,HHC,1/2-13 X 1.75 GRD 8 | 2 |  | 27 |
| 7 | 13066GT | WASHER,FLAT,.5 HARDENED | 2 |  | 27 |

#### 203.1 Steer Sensor and Steer Cylinder  (p. 28)

Steer sensor sub-assembly 106187GT "includes items 12 and 17 (calibration required after replacement)". Security screws 106859GT/106860GT need bit 106861GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 |  | Ref. Axle Cover with Decal (refer to 201.1) |  |  | 29 |
| 2 | 106860GT | SCREW,SECURITY,1/4-20 X 1.00LG |  |  | 29 |
| 3 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 29 |
| 4 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 29 |
| 5 | 106859GT | SCREW,SECURITY,1/4-20 X 2.75LG |  |  | 29 |
| 5- | 106861GT | BIT,5/32,HEX SOCKET,SECURITY |  |  | 29 |
| 6 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 29 |
| 7 | 1255452GT | ROD END,.375 X 2.25,ZAG |  |  | 29 |
| 8 | 60980GT | PIN,1.50DIAX4.13LG,THREADED | 1 |  | 29 |
| 9 | 119839GT | FORMING,GUIDE BRACKET,LEFT | 1 |  | 29 |
| 9- | 119840GT | FORMING,GUIDE BRACKET,RIGHT |  |  | 29 |
| 10 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 29 |
| 11 | 106696GT | BAR,GUIDE BRACKET | 2 |  | 29 |
| 12 | 60609GT | COVER,STEERING SENSOR | 1 |  | 29 |
| 13 | 8914GT | SCREW, HHC, 1/4-20 X .625 |  |  | 29 |
| 14 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 29 |
| 15 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 29 |
| 16 | 106187GT | SUBASSY,STEER SENSOR |  | includes items 12 and 17 (calibration required after replacement) | 29 |
| 16- | 119066GT | CONN, RECEP, 3 WAY, DEUTSCH, DT, ENDCAP |  |  | 29 |
| 16- | 60441GT | CONN, RECEP, 3 WAY, DEUTSCH, DT, LOCK |  |  | 29 |
| 16- | 75633GT | TERM,GOLD PIN,14/16 GA,BULK |  |  | 29 |
| 17 | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 |  |  | 29 |
| 18 | 60618GT | ACTIVATOR,STEER SENSOR | 1 |  | 29 |
| 19 | 75087GT | PIN,AXLE KING | 1 |  | 29 |
| 20 |  | Ref. Steer Yoke (refer to 202.1) |  |  | 29 |
| 21 | 106064GT | SHIM,STEER YOKE | as needed |  | 29 |
| 22 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 29 |
| 23 | 30194GT | PIN,1.75DIAX5.25LG,1HOLE | 1 |  | 31 |
| 23- | 60555GT | WASHER,THRUST 5 X 1.81 BRON | 1 | not shown | 31 |
| 24 | 10597GT | SCREW,HHC,1/2-13 X 1.25 GR5 |  |  | 31 |
| 25 | 1256267GT | ROD END,.5 X 3.75,ZAG | 1 |  | 31 |
| 26 | 106682PGT | FORMING,COVER MOUNT,AXLE PAINT | 1 |  | 31 |
| 27 | 42016GT | PIN,1.50DIAX11.00LG,1HOLE | 1 |  | 31 |
| 28 | 825019GT | ROD END, .375X3.69, ZAG | 1 |  | 31 |

#### 204.1 Chassis Components, Yellow Triangle Side  (p. 32)

Turntable (rotation) bearing 101572GT with seal 227785GT; bearing bolts are listed here: 28 x 88212GT (SHC 3/4-10 x 3.00, A574) with 28 x 33278GT hardened washers, plus 34 x 21175GT (SHC 5/8-11 x 4, A574) with 34 x 13064GT washers. Section 304.1 lists a further 16 x 88212GT / 16 x 33278GT at the pinion/swing-drive side. Torque values are NOT in the parts manual; use the Service Manual.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6145GT | SCREW, HHC, 1/4-20 X 1.5 |  |  | 33 |
| 2 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 33 |
| 3 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 33 |
| 4 | 101032PGT | FORMING,BOX,MANIFOLD PAINTED | 2 |  | 33 |
| 5 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 33 |
| 6 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 33 |
| 7 | 14033GT | SCREW, HHC, 3/8-16 X 2.75 |  |  | 33 |
| 8 | 101504GT | SHIM,AXLE,2.56 |  |  | 33 |
| 9 | 107728GT | CVR,MANIFOLD BOX W/WORD DECALS | 2 | includes items 21-22 | 33 |
| 9- | 106450GT | CVR,MANIFOLD BOX W/SYM DECALS |  | includes items 21-22 | 33 |
| 9- | 36415GT | HINGE,WELD,COVER,CTRLS GRY/BLU |  | (female hinge, mounts to chassis) | 33 |
| 10 |  | Ref. Hydraulic Swivel (refer to 306.1) |  |  | 33 |
| 11 | 101572GT | BEARING,TURNTABLE | 1 |  | 33 |
| 11- | 227785GT | BEARING TURNTABLE SEAL\*\*\* |  |  | 33 |
| 11- | 88212GT | SCREW,SHC,3/4-10 X 3.00,A574 | 28 |  | 33 |
| 11- | 33278GT | WASHER, FLAT, .75 HARDENED | 28 |  | 33 |
| 11- | 21175GT | SCREW,SHC,5/8-11 X 4,A574 | 34 |  | 33 |
| 11- | 13064GT | WASHER,FLAT,.625 HARDENED | 34 |  | 33 |
| 12 | 7339GT | SCREW,HHC,1/4-20 X .5 |  |  | 33 |
| 13 | 6356GT | WASHER, LOCK, .25 |  |  | 33 |
| 14 | 101039PGT | COVER,AXLE,RF,LR PAINTED | 2 |  | 33 |
| 14- | 101558PGT | COVER,AXLE,LF,RR PAINTED | 2 |  | 33 |
| 15 | 6021GT | WASHER, LOCK, .375 |  |  | 33 |
| 16 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 33 |
| 17 | 107536GT | WELDMENT,PIN,AXLE SENSOR | 2 |  | 33 |
| 17- | 101499GT | WASHER,THRUST,2.5 X 5.5 X .250 | 2 | not shown | 33 |
| 18 | 60609GT | COVER,STEERING SENSOR | 2 |  | 33 |
| 19 | 94985GT | SENSOR,AXLE POSITION | 2 | (calibration required after replacement) | 33 |
| 19- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 35 |
| 19- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 35 |
| 19- | 60757GT | PLUG, SEAL, 12-18GA |  |  | 35 |
| 19- | 75633GT | TERM,GOLD PIN,14/16 GA,BULK |  |  | 35 |
| 20 | 60618GT | ACTIVATOR,STEER SENSOR | 2 |  | 35 |
| 21 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 35 |
| 22 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 35 |
| 23 | 30973GT | BUMPER,RUBBER-1 X 1.25 | 4 |  | 35 |
| 24 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 35 |
| 25 | 45363GT | LATCH,FLEXIBLE | 2 |  | 35 |
| 26 | 8178GT | SCREW, HHC, 3/8-16 X 2.5 |  |  | 35 |
| 27 | 101038GT | FORMING,MANIFOLD MOUNT | 2 |  | 35 |
| 28 |  | Ref. Steer Manifold (refer to 703.1) |  |  | 35 |
| 29 | 75076GT | KEEPER,LATCH (45363) | 1 |  | 35 |
| 30 | 6708GT | SCREW,HHC,3/8-16 X 2.25 |  |  | 35 |
| 31 | 36415GT | HINGE,WELD,COVER,CTRLS GRY/BLU | 2 |  | 35 |
| 32 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 35 |
| 33 | 106680GT | FORMING,DOOR STOP | 4 |  | 35 |
| 34 | 106768GT | TUBE,UHMW,SPACER | 4 |  | 35 |
| 35 | 101704GT | FORMING,BRACKET,SENSOR | 4 |  | 35 |

#### 205.1 Chassis Components, Blue Triangle Side  (p. 36)

Blue-triangle side of the chassis; includes the DCON module mount and the #4 riser-to-link banjo service kit 119151GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 42360GT | SCREW,SHC,1/2-13 X 4 ZINC |  |  | 37 |
| 2 | 6086GT | NUT,LP NYLOCK,1/2-13 |  |  | 37 |
| 3 | 107676PGT | PLATE, PIN RETAINER, PAINTED | 4 |  | 37 |
| 3- | 119151GT | SERV KIT,#4RISER-TO-LINK BANJO |  | includes retainer plate and items 1 and 2 | 37 |
| 4 | 10597GT | SCREW,HHC,1/2-13 X 1.25 GR5 |  |  | 37 |
| 5 | 6095GT | WASHER,FLAT,USS,1/2",Y |  |  | 37 |
| 6 | 101150GT | PIN,2.50DIAX7.88LG,1HOLE | 4 |  | 37 |
| 7 | 14033GT | SCREW, HHC, 3/8-16 X 2.75 |  |  | 37 |
| 8 | 101504GT | SHIM,AXLE,2.56 | 4 |  | 37 |
| 9 | 101597GT | CLAMP,DRIVE CHASSIS HOSE | 8 |  | 37 |
| 10 | 11808GT | SCREW,HHC,1/4-20 X .375 |  |  | 37 |
| 11 | 6356GT | WASHER, LOCK, .25 |  |  | 37 |
| 12 | 101039PGT | COVER,AXLE,RF,LR PAINTED | 1 |  | 37 |
| 13 | 27698GT | BEARING,2.50IDX2.75ODX2.00L | 4 | (placed as shown on both sides of chassis) | 37 |
| 14 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 37 |
| 15 | 6021GT | WASHER, LOCK, .375 |  |  | 37 |
| 16 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG |  |  | 37 |
| 17 | 101927GT | FORMING,DCON MOUNT | 1 |  | 37 |
| 18 | 101004GT | MODULE,DCON | 1 |  | 37 |
| 19 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 37 |
| 20 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 37 |
| 21 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 37 |
| 22 |  | Ref Traction Manifold (refer to 701.1) |  |  | 37 |
| 23 | 101038GT | FORMING,MANIFOLD MOUNT | 1 |  | 37 |
| 24 | 6708GT | SCREW,HHC,3/8-16 X 2.25 |  |  | 37 |
| 25 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 37 |
| 26 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 37 |

---

### Group: Turntable

#### 301.1 Tank Side Covers  (p. 38)

Counterweights are here: 101444GT (775 lb LH) and 101445GT (775 lb RH), mounted with 1-8 x 6 GR5 screws 34350GT, washers 38859GT and nylock nuts 29764GT. Gas strut 122272GT (202 lb) with ball stud 33555GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 39 |
| 2 | 12906GT | WASHER,FENDER,.25 X 1.25 X.062 |  |  | 39 |
| 3 | 106871GT | COVER ASSY W/WRD DEC,TANK SIDE | 1 | USA, Canada, Australia; includes items 1, 2, 4, 21, 26 and 28 | 39 |
| 3- | 106872GT | COVER ASSY W/SYM DEC,TANK SIDE |  | Europe, Asia, South America; includes items 1, 2, 4, 21, 26 and 28 | 39 |
| 3- |  | Ref. LATCH Keeper (refer to 302.1) |  |  | 39 |
| 4 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 39 |
| 5 | 6356GT | WASHER, LOCK, .25 |  |  | 39 |
| 6 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 39 |
| 7 | 60485GT | COVER,TURNTABLE,LEFT SIDE | 1 |  | 39 |
| 8 | 106021PGT | FORMING,SWING COVER,TOP PAINTD | 1 |  | 39 |
| 9 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 39 |
| 10 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 39 |
| 11 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG |  |  | 39 |
| 12 | 106022PGT | FORMING,SWING COVER,LOWER PNTD | 1 |  | 39 |
| 13 | 89539PGT | MOUNT,PANEL,PAINTED | 1 |  | 39 |
| 14 | 60496-SGT | FORMING,INNER COVER | 1 |  | 39 |
| 15 | 6096GT | SCREW,HHC,1/2-13 X 2 GR5 |  |  | 39 |
| 16 | 6095GT | WASHER,FLAT,USS,1/2",Y |  |  | 39 |
| 17 | 6198GT | NUT, NYLOCK, 1/2-13 |  |  | 39 |
| 18 | 45363GT | LATCH,FLEXIBLE | 2 |  | 39 |
| 19 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 39 |
| 20 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 39 |
| 21 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 39 |
| 22 | 60655-SGT | STRUT SUPPORT,TANK SIDE | 1 |  | 39 |
| 23 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 39 |
| 24 | 60509-SGT | FORMING,REAR COVER | 1 |  | 39 |
| 25 | 60670-SGT | STRUT SUPPORT | 1 |  | 39 |
| 26 | 60872GT | SUPPORT,COVER (61112,61117) | 1 |  | 39 |
| 27 | 122272GT | GAS STRUT,202 LBS FORCE |  |  | 41 |
| 27B | 33555GT | BALL STUD\*\* |  |  | 41 |
| 28 | 60578GT | COVER SUPPORT,WELDMENT | 1 |  | 41 |
| 29 |  | Ref. Grab Handle (refer to 302.1) |  |  | 41 |
| 30 | 60966GT | COVER,TURNTABLE COVER ACCESS | 1 |  | 41 |
| 30- | 60964GT | LATCH,PANEL |  |  | 41 |
| 30- | 5094GT | SCREW,RHM,10-32 X .5 |  |  | 41 |
| 30- | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 41 |
| 30- | 6178GT | NUT, NYLOCK, 10-32 |  |  | 41 |
| 30- | 60893GT | HINGE,SWING CONTROL BOX |  |  | 41 |
| 31 | 34350GT | SCREW,HHC,1-8 X 6 GRD.5 |  |  | 41 |
| 32 | 38859GT | WASHER,FLAT,USS,1",Y |  |  | 41 |
| 33 | 29764GT | NUT,NYLOCK,1-8 |  |  | 41 |
| 34 | 101444GT | COUNTERWEIGHT,CAST,775 LBS LH | 1 |  | 41 |
| 34- | 101445GT | COUNTERWEIGHT,CAST,775 LBS RH |  |  | 41 |

#### 302.1 Engine Side Covers  (p. 42)

Fuel tank 1272872GT (40 gal) with straps 60938GT (52"); the original green-vent cap 101726GT is "no longer available, (replaced by 1316635)" (black, 0.08 in hole); the tank tube assembly (20.75" LG) is no longer available; low-fuel sender 60890GT. Exhaust tube weldment 101964GT and cover latches/keepers are here.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 43 |
| 2 | 12906GT | WASHER,FENDER,.25 X 1.25 X.062 |  |  | 43 |
| 3 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 43 |
| 4 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 43 |
| 5 | 60595-SGT | SUPPORT,ENGINE COVER GRAY | 1 |  | 43 |
| 6 | 101964GT | WELDMENT,EXHAUST TUBE | 1 |  | 43 |
| 7 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 43 |
| 8 | 106881GT | COVER ASSY W/WRD DEC,ENG SIDE | 1 | USA, Canada, Australia; includes items 1-7, 9-15, and 44 | 43 |
| 8- | 106882GT | COVER ASSY W/SYM DEC,ENG SIDE |  | Europe, Asia, South America; includes items 1-7, 9-15 and 22 | 43 |
| 9 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 43 |
| 10 | 50790GT | PLATE,COVER LATCH BACKING | 2 |  | 43 |
| 11 | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 43 |
| 12 | 60578GT | COVER SUPPORT,WELDMENT | 1 |  | 43 |
| 13 | 60884GT | HANDLE,GRAB | 1 |  | 43 |
| 14 | 75076GT | KEEPER,LATCH (45363) | 2 |  | 43 |
| 15 | 6606GT | SCREW,RHM,10-32 X .75 |  |  | 43 |
| 16 | 122272GT | GAS STRUT,202 LBS FORCE |  | order item 18 separately | 43 |
| 17 | 75073GT | HINGE,.375X.120THK.,SLOTTED | 2 |  | 43 |
| 18 | 33555GT | BALL STUD\*\* |  |  | 43 |
| 19 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 43 |
| 20 | 6021GT | WASHER, LOCK, .375 |  |  | 43 |
| 21 | 50974GT | BUMPER,RUBBER,COVERS | 3 |  | 43 |
| 22 | 75411GT | FORMING,GAS STRUT MOUNT,REAR\*\* | 1 |  | 43 |
| 22- | 75410GT | FORMING,GAS STRUT MOUNT,FRNT\*\* |  |  | 43 |
| 23 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 43 |
| 24 | 825019GT | ROD END, .375X3.69, ZAG | 1 |  | 43 |
| 25 | 60625GT | PIN,1.25DIAX15.63LG,CHAMFER | 1 | used on engine tray | 43 |
| 26 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 43 |
| 27 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 45 |
| 28 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 45 |
| 29 | 60778-SGT | FORMING,COVER STOP | 1 | Deutz and Perkins models | 45 |
| 30 | 51131GT | SCREW,HHC,5/8-11 X 2.5 |  |  | 45 |
| 31 | 6036GT | WASHER,LOCK,.625 PLTD |  |  | 45 |
| 32 | 6035GT | WASHER,FLAT,USS,5/8",Y |  |  | 45 |
| 33 | 61189GT | GROMMET,RUBBER .75 X .38 X1.13 |  |  | 45 |
| 34 | 6145GT | SCREW, HHC, 1/4-20 X 1.5 |  |  | 45 |
| 35 | 70289GT | CLAMP,LINK,LH WELD WIRE | 1 |  | 45 |
| 36 | 70535PGT | BRACKET,BATTERY CABLE PAINTED | 1 |  | 45 |
| 37 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 45 |
| 38 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 45 |
| 39 | 45363GT | LATCH,FLEXIBLE | 2 |  | 45 |
| 40 | 60727GT | FORMING,COVER STOP\*\*\* | 1 |  | 45 |
| 41 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 45 |
| 42 | 60938GT | STRAP ASSY,FUEL TANK 52" | 2 |  | 45 |
| 42- | 31658GT | EXTRUSION,RUBBER BUMPER STRIP | 100 inches |  | 45 |
| 43 | 1272872GT | ASSEMBLY, FUEL TANK, 40 GAL | 1 |  | 45 |
| 43- | 101726GT | CAP,FUEL,DIESEL,1/8"VENT(GRN) | 1 | no longer available, (replaced by 1316635) | 45 |
| 43- | 1316635GT | CAP, FUEL, DIESEL, 0.08 IN HOLE (BLACK) | 1 |  | 45 |
| 43- |  | TUBE ASSY,FUEL TANK,20.75"LG |  | no longer available | 45 |
| 43- | 60890GT | SENDER,LOW FUEL INDICATOR |  |  | 45 |
| 44 | 60872GT | SUPPORT,COVER (61112,61117) | 1 |  | 45 |
| 45 | 6356GT | WASHER, LOCK, .25 |  |  | 45 |
| 46 | 50082GT | COVER,TURNTABLE,RIGHT SIDE | 1 |  | 45 |

#### 303.1 Engine Compartment Components  (p. 46)

Mostly electrical (battery, relays, fuses, horn) - repeated here only for the mechanical items (coolant recovery bottle 60721GT for Cummins/Perkins, battery tray 107512PGT, hold-down 60940GT/45708GT, relay plate 107525PGT, cover bumpers/stops). See the electrical parts file for the rest.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 71508GT | SCREW, HHC, 3/8-16X .50 GR5 (YELLOW ZINC) |  |  | 47 |
| 2 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 47 |
| 3 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG |  |  | 47 |
| 4 | 17650GT | 10-32 X .5 FILLISTER HD.SCREW |  |  | 47 |
| 5 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 47 |
| 6 | 107525PGT | PLATE,RELAY MOUNT | 1 |  | 47 |
| 7 | 60721GT | COOLANT,RECOVERY BOTTLE, 4 QT\* | 1 | Cummins and Perkins models | 47 |
| 8 | 88266GT | COVER,RELAY | 1 |  | 47 |
| 9 | 237068GT | SEPARATOR,DUAL BATTERY,100A | 1 |  | 47 |
| 9- | 214393GT | KIT, BATT SEPARATOR, ANSI/CSA |  | includes part 237068 | 47 |
| 9- | 215209GT | KIT, BATT SEPARATOR, CE |  | includes part 237068 | 47 |
| 9- | 215210GT | KIT, BATT SEPARATOR, AS |  | includes part 237068 | 47 |
| 10 | 53967GT | SOLENOID,12V CONTINOUS | 1 | Cummins models | 47 |
| 11 | 107543GT | FORMING,FUSE COVER | 1 | Cummins models | 47 |
| 12 | 60940GT | HOLD DOWN,BATTERY,SMALL | 1 |  | 47 |
| 13 | 45708GT | HOOK,BATT HOLD DOWN,10" | 1 |  | 47 |
| 14 | 107512PGT | BATTERY TRAY FORMING,PAINTED | 1 |  | 47 |
| 15 | 61225GT | RELAY,12VDC,70AMP,SEALED | 2 | Perkins and Deutz models | 47 |
| 15- | 61225GT | RELAY,12VDC,70AMP,SEALED | 1 | Cummins models | 47 |
| 16 | 60536GT | FUSE,20 AMP,MAXI | 2 |  | 47 |
| 17 | 94327GT | FUSE,30 AMP | 1 |  | 47 |
| 18 | 101340GT | FUSE,60 AMP,MAXI | 1 | Perkins and Deutz models | 47 |
| 19 | 34052GT | RELAY,SPDT,12V(AUTO) PLUG IN\*\* | 3 |  | 47 |
| 20 | 50974GT | BUMPER,RUBBER,COVERS | 3 |  | 47 |
| 21 | 60727GT | FORMING,COVER STOP\*\*\* | 2 |  | 47 |
| 22 | 1303581GT | BATTERY, 12V, 950CCA, FLA | 1 |  | 47 |
| 23 | 81578GT | HORN,12VDC,SPADE TERMINALS\*\*\* | 1 |  | 47 |
| 24 | 89997GT | RELAY MODULE(89996,89998) | 1 |  | 47 |
| 25 |  | Ref. Function Enable Manifold (refer to 707.1) |  |  | 49 |
| 26 | 4266GT | SCREW,HHC,1/4-20 X 2 |  |  | 49 |
| 27 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 49 |
| 28 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 49 |

#### 304.1 Hydraulic Tank Side Components  (p. 50)

Contains the swing (turntable rotation) drive with all three generations, the hydraulic tank, oil cooler and filters. Current swing drive 1255768GT is "a direct replacement of previous swing drives 139189 or 88921" (139189 from SN 1140; 88921 to SN 1139). Return filter bracket: 60936GT to SN 320, 119171PGT from SN 321. SCON module: 139647-SGT to SN 1711, 1258463GT from SN 1712 (recalibration required).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 87070GT | FILTER ASSY,SAE 12 NO INDICAT\* | 1 |  | 51 |
| 1- | 131323GT | FILTER ELEMENT,10 MICRON |  | Genie genuine part | 51 |
| 1- | 1259055GT | FILTER ELEMENT, 10 MICRON |  | Genie aftermarket | 51 |
| 2 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 51 |
| 3 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 51 |
| 4 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 51 |
| 5 | 70516PGT | BRKT,MED & RETURN FILTER,PTD | 1 |  | 51 |
| 6 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 51 |
| 7 | 6021GT | WASHER, LOCK, .375 |  |  | 51 |
| 8 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 51 |
| 9 | 6356GT | WASHER, LOCK, .25 |  |  | 51 |
| 10 | 60334GT | FILTER ASSY,HIGH PRESS SAE-12\* | 1 |  | 51 |
| 10- | 60857GT | FILTER,ELEMENT,BETA(5)=1000 |  |  | 51 |
| 10- | 58222GT | O-RING,FILTER ASSY (60334)\*\*\* |  |  | 51 |
| 10- | 58223GT | SEAL,FILTER ASSY (60334)\*\*\* |  |  | 51 |
| 11A | 1255768GT | SWING DRIVE ASSEMBLY |  | (Complete) swing drive 1255768 can be installed as a direct replacement of previous swing; drives 139189 or 88921 | 51 |
| 11A- | 1315824GT | BEARING/SEAL KIT (1255768) |  |  | 51 |
| 11A- | 139308GT | SWING MOTOR COMPLETE\*\*\* |  | (Used on swing drive 1255768) | 51 |
| 11A- | 139309GT | CBV ASSEMBLY\*\*\* |  | (Used on swing drive 1255768) | 51 |
| 11A- | 139323GT | VALVE,COUNTERBAL,CBCA-LIN\*\*\* |  | (Used on swing drive 1255768) | 51 |
| 11A- | 139315GT | O-RING,MOTOR/BRAKE\*\*\* |  | (Used on swing drive 1255768) | 51 |
| 11A- | 58304GT | SHAFT,OUTPUT |  | (Used on swing drive 1255768) | 51 |
| 11A- | 1255769GT | SEAL KIT, SWING BRAKE |  | (Used on swing drive 1255768) | 51 |
| 11A- | 1255770GT | KIT, FRICTION DISC |  | (Used on swing drive 1255768) | 51 |
| 11A- | 1255771GT | KIT, BRAKE SPRING |  | (Used on swing drive 1255768) | 51 |
| 11A- | 1255772GT | KIT, SWING BRAKE REBUILD |  | (Used on swing drive 1255768) | 51 |
| 11A- | 1255773GT | BRAKE TUBING |  | (Used on swing drive 1255768) | 51 |
| 11A- | 41489GT | SCREW,SHC,5/16-18 X 2,PLATED |  | manifold to motor, | 51 |
| 11A- | 6886GT | WASHER,LOCK,.313 |  | manifold to motor | 53 |
| 11B |  | Ref. SWING DRIVE ASSEMBLY |  | **Previous SWING DRIVE ASSEMBLY 139189 is no longer available, order complete; assembly 1255768 for first time replacement; from SN 1140** | 53 |
| 11B- | 139308GT | SWING MOTOR COMPLETE\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139309GT | CBV ASSEMBLY\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139323GT | VALVE,COUNTERBAL,CBCA-LIN\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139315GT | O-RING,MOTOR/BRAKE\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 58304GT | SHAFT,OUTPUT |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139310GT | BRAKE TUBING\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139311GT | KIT,FRICTION DISC\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139312GT | KIT,BRAKE SPRING\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139313GT | SEAL KIT,SWING BRAKE\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 139314GT | KIT,SWING BRAKE REBUILD\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 94620GT | SEAL KIT,SWING TORQ HUB\*\*\* |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 58596GT | BEARING KIT,OUTER (88921) |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 58597GT | BEARING KIT,INNER (88921) |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 83124GT | DRAIN PLUG |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 21148GT | WASHER,THRUST,TORQUE HUB |  | **use with swing drive 139189; from SN 1140** | 53 |
| 11B- | 29290GT | SEAL KIT,FAIRFIELD (S1A2)\*\*\* |  | **does not include thrust washer part 21148 (used on swing drive 139189); from SN 1140** | 53 |
| 11B- | 41489GT | SCREW,SHC,5/16-18 X 2,PLATED |  | manifold to motor, | 53 |
| 11B- | 6886GT | WASHER,LOCK,.313 |  | manifold to motor | 53 |
| 11C |  | Ref. SWING DRIVE ASSEMBLY |  | **Previous SWING DRIVE ASSEMBLY 88921 is no longer available, order complete; assembly 1255768 for first time replacement; to SN 1139** | 53 |
| 11C- | 58387GT | O-RING,MOTOR/BRAKE (88921)\*\*\* |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 58596GT | BEARING KIT,OUTER (88921) |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 58597GT | BEARING KIT,INNER (88921) |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 94622GT | BRAKE PORT HARDLINE |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 94623GT | KIT,FRICTION DISC |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 94624GT | KIT,BRAKE SPRING |  | **use with swing drive 88921; to SN 1139** | 53 |
| 11C- | 94625GT | SEAL KIT,SWING BRAKE |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 94626GT | KIT,SWING BRAKE REBUILD |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 94621GT | SWING MOTOR,COMPLETE\*\*\* |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 65616GT | SEAL KIT PWR WHL MOTOR |  | **use with swing motor 94621 on swing drive 88921; to SN 1139** | 55 |
| 11C- | 29290GT | SEAL KIT,FAIRFIELD (S1A2)\*\*\* |  | **does not include thrust washer part 21148 (used with swing drive 88921); to SN 1139** | 55 |
| 11C- | 21148GT | WASHER,THRUST,TORQUE HUB |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 81366GT | MANIFOLD,SWING CB & BRAKE |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 83009GT | VALVE,COUNTERBALANCE(81366)\*\*\* |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 45483GT | VALVE,SHUTTLE\*\*\* |  | **use with swing drive 88921; to SN 1139** | 55 |
| 11C- | 41489GT | SCREW,SHC,5/16-18 X 2,PLATED |  | manifold to motor, | 55 |
| 11C- | 6886GT | WASHER,LOCK,.313 |  | manifold to motor | 55 |
| 12 | 54177GT | SCREW,HHC,1/2-13 X 1.5 GRD 8 | 18 |  | 55 |
| 13 | 13066GT | WASHER,FLAT,.5 HARDENED | 18 |  | 55 |
| 14 |  | Ref. Power to Platform Harness, Secondary (refer to section 308.1) | 1 |  | 55 |
| 15 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 |  | 55 |
| 16 | 71259GT | OIL COOLER W/FAN, 12VDC | 1 |  | 55 |
| 16- | 75854GT | FAN - VENTED |  |  | 55 |
| 16- | 75855GT | THERMOSTAT -OIL COOLER (71259) |  |  | 55 |
| 17 | 50974GT | BUMPER,RUBBER,COVERS | 3 |  | 55 |
| 18 | 60729PGT | FORMING,COVER STOP\*\* | 1 |  | 55 |
| 19 | 106020PGT | FORMING,HOSE TRAY,SWING PAINTD | 1 |  | 55 |
| 20 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 55 |
| 21 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 55 |
| 22 | 139647-SGT | MODULE,SCON,V2.00,SERVICE | 1 | **to SN 1711, machine needs to be recalibrated after installing a new module** | 55 |
| 22- | 1258463GT | MODULE,SCON,PROGRAMMED |  | **from SN 1712, machine needs to be recalibrated after installing a new module** | 55 |
| 23 | 106171GT | FORMING,PINION GUARD | 1 |  | 55 |
| 24 | 88212GT | SCREW,SHC,3/4-10 X 3.00,A574 | 16 |  | 55 |
| 25 | 33278GT | WASHER, FLAT, .75 HARDENED | 16 |  | 55 |
| 26 | 101361GT | POWER UNIT,AUX PUMP 12 VDC | 2 |  | 57 |
| 26- | 58489GT | PUMP ASSY,AUX.POWER UNIT 89617 |  |  | 57 |
| 26- | 62412GT | SOLENOID,MOTOR START,60511,APU |  |  | 57 |
| 26- | 101682GT | CABLE ASSY NEG 2GA BLACK AUX#1 | 31 inches |  | 57 |
| 26- | 101683GT | CABLE ASSY NEG 2GA BLACK AUX#2 | 34 inches |  | 57 |
| 26- | 101180GT | CABLE ASSY,GND,BAT1 TO BAT2 |  |  | 57 |
| 26- | 101181GT | BATTERY CABLE,2GA RED,AUX | 162 inches |  | 57 |
| 26- | 101182GT | BATTERY CABLE 2GA RED AUX#2 | 63 inches |  | 57 |
| 26- | 101185GT | CABLE ASSY,AUX BATT JUMPER,RED | 5 inches |  | 57 |
| 27 |  | Ref. Function Manifold (refer to 705 or 706) |  |  | 57 |
| 28 | 107511GT | FORMING,BATTERY BOX,MOUNT | 2 |  | 57 |
| 29 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 57 |
| 30 | 107510PGT | COVER,BATTERY BOX\*\*\* | 1 |  | 57 |
| 30- | 36424GT | THUMB SCREW W/SHOULDER 3/8-16 | 2 |  | 57 |
| 31 | 56462GT | BATTERY, J 305GH, 315AH | 2 |  | 57 |
| 31- | 57162GT | BATTERY TERMINAL PROTECTORS | 6 |  | 57 |
| 32 | 107509GT | WELDMENT,BATTERY BOX | 1 |  | 57 |
| 32- | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG | 2 |  | 57 |
| 33 | 60727GT | FORMING,COVER STOP\*\*\* | 2 |  | 57 |
| 34 |  | Ref. Ground Controls (refer to 305.1) |  |  | 57 |
| 35 | 101483GT | TANK,HYDRAULIC,65 GALLON | 1 |  | 57 |
| 35- | 94612GT | PLUG,MAGNETIC,SAE-6\*\*\* |  |  | 57 |
| 35- | 21141GT | GAUGE-SIGHT,LHA-LGTB\*\*\* |  |  | 57 |
| 36 | 60559GT | BREATHER,RESERVOIR 3 MICRON\*\*\* |  |  | 57 |
| 37 | 75113GT | FILLER NECK/CAP ASSY.HYD TANK\* |  |  | 57 |
| 38 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG | 2 |  | 59 |
| 39 | 13002GT | SCREW,HHC,5/16-18 X 1 GR5 |  |  | 59 |
| 40 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 59 |
| 41 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 59 |
| 42 | 106037GT | FORMING,SWING CHASSIS BULKHEAD |  |  | 59 |
| 43 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 59 |
| 44 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 59 |
| 45 | 101959GT | FILTER,RETURN,10 MICRON,PAPER | 1 |  | 59 |
| 45- | 101960GT | FILTER ELEMENT,10 MICRON |  | Genie Genuine Part.  See PN 1254825 for compatible aftermarket replacement | 59 |
| 45- | 1254825GT | FILTER ELEMENT,10 MICRON | 1 | Genie Aftermarket Part.  Compatible with Genie Genuine Part 101960 | 59 |
| 45- | 52768GT | GAUGE,MED.PRESSUR FILTER,50530 |  |  | 59 |
| 45- | 228824GT | FILTER,ELEMENT,BETA(10)=1000 |  | use with hydraulic fluid fire resistant option | 59 |
| 46 | 6886GT | WASHER,LOCK,.313 |  |  | 59 |
| 47 | 60936GT | BRACKET,RETURN FILTER | 1 | **to SN 320** | 59 |
| 47- | 119171PGT | FORMING,RETURN FILTER,PAINTED |  | **from SN 321** | 59 |

#### 306.1 Turntable Center Components  (p. 66)

Turntable centre: drive-rotate limit switches and the hydraulic/electric swivel. Complete swivel 1253702GT replaces the discontinued 122918, 89437 and 107533 assemblies. Wear pads 34124GT x4.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 67 |
| 2 | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 67 |
| 3 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 67 |
| 4 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 67 |
| 5 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 67 |
| 6 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 67 |
| 7 | 110915GT | SWITCH ASSY,LIMIT LST10 | 1 |  | 67 |
| 7- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC |  |  | 67 |
| 7- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 79 |  | 67 |
| 7- | 119065GT | CONN, RECEP, 2 WAY, DEUTSCH, DT |  |  | 67 |
| 7- | 60439GT | CONN, RECEP, 2 WAY, DEUTSCH, DT, LOCK |  |  | 67 |
| 7- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 67 |
| 8 | 110917GT | SWITCH ASSY,LIMIT LST1S | 1 |  | 67 |
| 8- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC |  |  | 67 |
| 8- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 76 |  | 67 |
| 8- | 119762GT | CONN PLUG 4 WAY EXTEND DT |  |  | 67 |
| 8- | 60429GT | LOCK, PLUG 4WAY, 14-18GA |  |  | 67 |
| 8- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 67 |
| 9 | 10598GT | SCREW,HHC,1/2-13 X 3 |  |  | 67 |
| 10 | 6095GT | WASHER,FLAT,USS,1/2",Y |  |  | 67 |
| 11 | 6198GT | NUT, NYLOCK, 1/2-13 |  |  | 67 |
| 12 | 110916GT | SWITCH ASSY,LIMIT LST1O | 1 |  | 67 |
| 12- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC |  |  | 67 |
| 12- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 79 |  | 67 |
| 12- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 67 |
| 12- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 67 |
| 12- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 67 |
| 13 | 217689GT | BRACKET, LS, DRIVE ROT. | 1 |  | 67 |
| 14 | 60575PGT | BRACKET,HYD.ROTATOR MOUNT MNT | 2 |  | 69 |
| 15 | 106830GT | PLATE,HOSE CLAMP | 2 |  | 69 |
| 16 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 69 |
| 17 | 106012GT | CLAMP,HOSE,TANK SIDE | 1 |  | 69 |
| 18 | 106014GT | CLAMP,HOSE,ELEVATE | 1 |  | 69 |
| 19 | 7684GT | THREADED ROD,(3/8-16),4.25" |  |  | 69 |
| 20 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG |  |  | 69 |
| 21 | 31723GT | BRACKET,SEQ.CABLE -NOVON & TUV |  |  | 69 |
| 22 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 69 |
| 23 | 6021GT | WASHER, LOCK, .375 |  |  | 69 |
| 24 | 34124GT | WEAR PAD,5 X 3 X .625 W/NUTS | 4 |  | 69 |
| 25 | 107755GT | THREADED ROD, 3/8-16,6.50 LG |  |  | 69 |
| 26 | 106013GT | CLAMP,HOSE,CENTER | 1 |  | 69 |
| 27 | 106684PGT | FORMING,CLAMP HOLD DOWN PAINTD | 1 |  | 69 |
| 28 | 106498GT | HYDRAULIC SWIVEL SUPPORT | 1 |  | 69 |
| 29A | 1253702GT | ASSY, HYD/ELEC 5 PORT/10 CONT | 1 | (complete) previous swivels 122918, 89437 and 107533 are no longer available, for a; complete replacement order swivel assembly 1253702 | 69 |
| 29A- | 1253699GT | ASSY., HYDRAULIC SWIVEL, 5 POR |  | part of swivel assemblies 1253702 | 69 |
| 29A- | 1276830GT | SEAL KIT,HYDRAULIC SWIVEL(1253699) |  | for 1253699 | 69 |
| 29A- | 1253696GT | ASSY., ELECTRIC SWIVEL, 10 CON |  | part of swivel assemblies 1253702 | 69 |
| 29A- | 1253698GT | MACHINED, SWIVEL ANTI-ROTATION |  | part of swivel assemblies 1253702 | 69 |
| 29A- | 10107GT | SCREW,HHC,5/16-18 X .75 |  | part of swivel assemblies 1253702 | 69 |
| 29A- | 1253709GT | SCREW,SHC,7/16-14X1.25,A574,YZ |  | part of swivel assemblies 1253702 | 69 |
| 29A- | 1253697GT | MACHINED, SWIVEL MOUNTING |  | part of swivel assemblies 1253702 | 69 |
| 29B |  | previous swivels 122918, 89437 and 107533 are no longer available, for a complete |  | replacement order swivel assembly 1253702 | 69 |
| 29B- | 122919GT | SWIVEL,ELECTRIC 10 CONTACT\*\*\* |  | part of swivel assembly 122918 | 69 |
| 29B- | 75126GT | SWIVEL,HYDRAULIC,5 PORT |  | part of swivel assemblies 89437 and 107533 | 69 |
| 29B- | T106954GT | SEAL, O-RING LIP |  | part of swivel assemblies 89437 and 107533 | 69 |
| 29B- | T106955GT | SEAL, POLY, CHAMFER |  | part of swivel assemblies 89437 and 107533 | 71 |
| 29B- | T106956GT | SEAL,O-RING,SQUARE |  | part of swivel assemblies 89437 and 107533 | 71 |
| 29B- | T106960GT | SEAL, CAP |  | part of swivel assemblies 89437 and 107533 | 71 |
| 29B- | 75128GT | SPACER,SWIVEL MOUNT |  | part of swivel assembly 89437 | 71 |
| 29B- | 102279GT | ROTATOR,ELECT,10 CONT\*\*\* |  | part of swivel assemblies 89437 and 107533 | 71 |
| 29B- | 106914GT | CHANNEL, MOUNTING |  | part of swivel assemblies 107533 and 122918 | 71 |
| 29B- | 62321GT | SEAL KIT,HYD SWIVEL (75126)\*\*\* |  |  | 71 |
| 29B- | 75129GT | ARM,ANTI-ROTATION,SWIVEL\*\*\* |  |  | 71 |
| 29B- | 10107GT | SCREW,HHC,5/16-18 X .75 |  |  | 71 |
| 29B- | 75130GT | SCREW,SHC,7/16-14 X .75,61342 |  |  | 71 |

#### 307.1 Secondary Boom Lift Cylinder  (p. 72)

Secondary (riser) lift cylinder 61812GT and the **transport storage lock (rotation lock) pin 61222GT** with handle 61223GT and service kit 146343GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6096GT | SCREW,HHC,1/2-13 X 2 GR5 | 1 |  | 73 |
| 2 | 6033GT | WASHER,LOCK,0.5" |  |  | 73 |
| 3 | 101716GT | WELDMENT,RISER ROTARY SNSR PIN | 1 |  | 73 |
| 3- |  | Ref. ASSY,ANGLE SEN.,Z135 SECONDARY |  | (Refer to 502.1 or 502.2) | 73 |
| 4 | 61222GT | PIN,TRANSPORT STORAGE LOCK | 1 |  | 73 |
| 4- | 146343GT | SERVICE KIT,TRANSPORT PIN Z135 |  |  | 73 |
| 5 | 61223GT | PIN,TRANSPORT STORAGE HANDLE | 1 |  | 73 |
| 6 | 107654GT | PIN,SECONDARY LIFT | 1 |  | 73 |
| 7 | 107653GT | PLATE,RETAINER PIN | 1 |  | 73 |
| 8 | 117491GT | SCREW,HHC,1/2-13X2.00 GR8 | 1 |  | 73 |
| 9 | 1256267GT | ROD END,.5 X 3.75,ZAG | 2 |  | 73 |
| 10 | 61812GT | CYLINDER,SECONDARY LIFT\*\*\* | 1 |  | 73 |
| 10- | 106376GT | SEAL KIT,CYL\*\*\* |  |  | 73 |
| 10- | 106846GT | VALVE,CB.CWCL-LGN@4000 PSI\*\*\* |  |  | 73 |
| 10- | 76069GT | VALVE,COUNTERBALANCE 4000 PSI |  |  | 73 |
| 10- | 27697GT | BEARING,2.50IDX2.75ODX1.50L |  |  | 73 |
| 11 | 94818GT | PIN,2.50DIAX25.00LG,1HOLE | 1 |  | 73 |
| 12 | 54177GT | SCREW,HHC,1/2-13 X 1.5 GRD 8 | 1 |  | 73 |

---

### Group: Engine

#### 401.1 Cummins B4. 5L Engine, View 1 (to SN 950)  (p. 80)

Cummins B4.5L (to SN 950), view 1: air cleaner, muffler (60550GT no longer available), engine mounts/isolators, throttle solenoid, radiator, serpentine belt.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 70537PGT | BAFFLE,ENGINE AIR,PAINTED | 1 |  | 81 |
| 2 | 22672GT | CLAMP,HOSE,1.75 | 2 |  | 81 |
| 3 | 60586GT | RADIATOR HOSE,UPPER-CUMMINS | 1 |  | 81 |
| 4 | 60550GT | MUFFLER,NELSON 3.9L | 1 | no longer available | 81 |
| 4- | 75151GT | GASKET,MUFFLER,CUMMINS, B3.9L |  |  | 81 |
| 4- | 61024GT | OPT,DIESEL SCRUBBER CUMMINS |  |  | 81 |
| 5 | 30489GT | CLAMP,HOSE,3.50 | 6 |  | 81 |
| 6 | 61270GT | ELBOW,45 DEG,INLET | 2 |  | 81 |
| 6- | 106211-300GT | HOSE,RUBBER 3"ID X .25 BLACK |  |  | 81 |
| 7 | 102301GT | DIPSTICK,CUMMINS, B4.5 | 1 |  | 81 |
| 8 | 81468GT | MOUNTING BAND,AIR CLEANER | 1 |  | 81 |
| 9 | 81467GT | AIR CLEANER,NELSON | 1 |  | 81 |
| 9- | 75450GT | AIR CLEANER CLIPS, SUPERBOOM |  | for 81467 | 81 |
| 9- | 75451GT | AIR CLEANER COVER, SUPERBOOM\* |  | for 81467 | 81 |
| 9- | 52866GT | EVACUATOR VALVE-AIR CLEANER |  | for 81467 | 81 |
| 9- | 62425GT | FILTER,AIR CLEANER, SUPERBOOM |  | for 81467 | 81 |
| 9- | 101662GT | OPTION,PRECLEANER CUMMINS |  |  | 81 |
| 10 |  | Ref. Function Pump (refer to 714.1) |  |  | 81 |
| 11 |  | Ref. Drive Pump (refer to 714.1) |  |  | 81 |
| 12 | 44064GT | SCREW,HHC,M10 X 30MM, |  |  | 81 |
| 13 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 81 |
| 14 | 102287GT | SEPARATOR-FUEL/WTR CUMIN B4.5 | 1 |  | 81 |
| 15 | 102044PGT | BRACKET,ENGINE MOUNT,CUMMINS | 2 |  | 81 |
| 16 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 | 2 |  | 81 |
| 17 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 81 |
| 18 | 102045GT | ISOLATOR,ENGINE VIBRATION | 2 |  | 81 |
| 19 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 81 |
| 20 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 81 |
| 21 | 27584GT | SCREW,HHC,M12 X 35MM |  |  | 83 |
| 22 | 49410GT | WASHER, FLAT, M12 |  |  | 83 |
| 23 | 81738-2200GT | TUBE,RD,STL 3 X 18GA ALUMINIZD |  |  | 83 |
| 24 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 |  | 83 |
| 24- | 89998GT | KIT,SERVICE,SOLENOID MODULE |  |  | 83 |
| 24- | 102048GT | CABLE ASSY,THROTTLE |  |  | 83 |
| 24- | 60525GT | CONN,RECEP 4 WAY,12-14GA |  |  | 83 |
| 24- | 60526GT | LOCK,RECEP 4 WAY,12-14GA |  |  | 83 |
| 24- | 60757GT | PLUG, SEAL, 12-18GA |  |  | 83 |
| 24- | 73711GT | TERMINAL, PIN, DTP, 12-14 AWG, NICKEL,  , DEUTSCH, LOOSE |  |  | 83 |
| 24- |  | Ref. Module Relay (refer to 303.1) |  |  | 83 |
| 25 | 106785GT | ENGINE TRAY ASSEMBLY | 1 |  | 83 |
| 25- | 35675GT | BEARING,FL,1.25IDX1.5ODX1.25L |  |  | 83 |
| 26 | 70556GT | BRACKET,CUMMINS INTAKE TUBE | 1 |  | 83 |
| 27 | 61273GT | CLAMP-HEAVY DUTY | 1 |  | 83 |
| 28 | 81738-2700GT | TUBE,RD,STL 3 X 18GA ALUMINIZD |  |  | 83 |
| 29 | 102043GT | WELDMENT,ENGINE MOUNT,RT,FRONT | 1 |  | 83 |
| 30 | 60637GT | WEAR PAD, ENGINE SUPPORT | 1 |  | 83 |
| 31 | 60826GT | SHIM, WEAR PAD ENG TRAY | as needed |  | 83 |
| 32 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 83 |
| 33 | 6021GT | WASHER, LOCK, .375 |  |  | 83 |
| 34 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 83 |
| 35 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 83 |
| 36 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 83 |
| 37 | 70257GT | CLAMP,3.0,#48 X 1/4,RUB CUSH |  |  | 83 |
| 38 | 75262GT | RADIATOR STRUT,LEFT |  |  | 83 |
| 39 | 75260GT | ISOLATOR,FLEX-BOLT SANDWICH\*\*\* | 1 |  | 83 |
| 40 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 85 |
| 41 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 85 |
| 42 | 102203GT | BELT,SERPENTINE, CUMMINS B4.5 | 1 |  | 85 |
| 43 | 70518GT | RADIATOR | 1 |  | 85 |
| 44 | 65473GT | CAP,RADIATOR,PERKINS/FORD | 1 |  | 85 |
| 45 | 29883GT | SCREW,HHC,5/8-11 X 1.75 GRD.8 | 2 |  | 85 |

#### 402.1 Cummins B4.5L Engine, View 2 (to SN 950)  (p. 92)

Cummins B4.5L (to SN 950), view 2: radiator hoses, fan, belt tensioner, oil filter, starter, alternator (75102GT to SN 219, 111119GT from SN 220), fuel/water separator.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 60586GT | RADIATOR HOSE,UPPER-CUMMINS | 1 |  | 93 |
| 1- | 102031GT | RADIATOR HOSE,LOWER-CUMMINS |  |  | 93 |
| 2 | 60649GT | SHROUD,FAN (FIBERGLASS) | 1 |  | 93 |
| 3 | 70518GT | RADIATOR | 1 |  | 93 |
| 3- | 65473GT | CAP,RADIATOR,PERKINS/FORD |  |  | 93 |
| 4 | 60875GT | TRIM MOLDING | 85 inches |  | 93 |
| 5 | 70537PGT | BAFFLE,ENGINE AIR,PAINTED | 1 |  | 93 |
| 6 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 93 |
| 7 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 93 |
| 8 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 93 |
| 9 | 75171GT | FAN,PULLER,CUMMINS,4B3.9,60213 | 1 |  | 93 |
| 10 | 75297GT | WELDMENT,RADIATOR MOUNT\*\* | 1 |  | 93 |
| 11 | 13918GT | SCREW,HHC,3/8-16 X 1.75,GRD.8 | 2 |  | 93 |
| 12 | 44714GT | WASHER,.375X1.25X.100 |  |  | 93 |
| 13 | 102303GT | BELT TENSIONER CUMMINS B4.5 | 1 |  | 93 |
| 14 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 93 |
| 15 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 93 |
| 16 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 93 |
| 17 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 93 |
| 18 | 50974GT | BUMPER,RUBBER,COVERS | 1 |  | 93 |
| 19 | 60729GT | FORMING,COVER STOP\*\*\* | 1 |  | 93 |
| 20 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 93 |
| 21 | 122026PGT | RADIATOR STRUT,RIGHT | 1 |  | 93 |
| 22 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 93 |
| 23 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 93 |
| 24 | 102045GT | ISOLATOR,ENGINE VIBRATION | 4 |  | 93 |
| 25 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 93 |
| 26 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 | 4 |  | 95 |
| 27 | 49381GT | SCREW,HHC,M12 X 30 |  |  | 95 |
| 28 | 102287GT | SEPARATOR-FUEL/WTR CUMIN B4.5 | 1 |  | 95 |
| 29 | 13000GT | SCREW,HHC,5/16-18 X 1.25 |  |  | 95 |
| 30 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 95 |
| 31 | 27584GT | SCREW,HHC,M12 X 35MM |  |  | 95 |
| 32 | 49410GT | WASHER, FLAT, M12 |  |  | 95 |
| 33 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 95 |
| 34 | 102044PGT | BRACKET,ENGINE MOUNT,CUMMINS | 1 |  | 95 |
| 35 |  | FILTER ASY,M PRESS,SAE8,WOIND\* (77139) | 1 | component no longer available | 95 |
| 35- | 60857GT | FILTER,ELEMENT,BETA(5)=1000 |  | for 77139 | 95 |
| 35A | 1267807GT | ASSEMBLY, MED. PRESS. FILTER, SAE8 |  |  | 95 |
| 35A- | 1268229GT | ELEMENT-5 MIC, PAPER, W/ BYPASS |  | for 1267807 | 95 |
| 36 | 8914GT | SCREW, HHC, 1/4-20 X .625 |  |  | 95 |
| 37 | 6356GT | WASHER, LOCK, .25 |  |  | 95 |
| 38 | 70517GT | BRACKET,FILTER/TEST PORT | 1 |  | 95 |
| 39 | 102288GT | FILTER,OIL,CUMMINS B4.5\*\*\* | 1 |  | 95 |
| 40 | 89837GT | STARTER,12V,CUMMINS, B3.9/B4.5 | 1 |  | 95 |
| 41 | 75153GT | SENSOR,0IL PRESS,VDO360-004\*\*\* |  |  | 95 |
| 42 | 75102GT | ALTERNATOR,CUMMINS 4B3.9, 95A | 1 | **to SN 219** | 95 |
| 42- | 111119GT | ALTERNATOR,CUMMINS B4.5 |  | **from SN 220** | 95 |
| 43 | 102203GT | BELT,SERPENTINE, CUMMINS B4.5 | 1 |  | 95 |
| 44 | 75259GT | ISOLATOR,CENTER BONDED | 2 |  | 95 |
| 45 | 102101PGT | FORMING,FUEL FILTER MOUNT,PNTD | 1 |  | 95 |

#### 401.2 Cummins B3.3T Engine, View 1 (from SN 951)  (p. 86)

Cummins B3.3T (from SN 951), view 1: charge-air-cooler plumbing, air cleaner 122466GT with primary/secondary elements 146044GT/146045GT, starter 139798GT, throttle service kit 146307GT (replaces discontinued air-cleaner forming, solenoid mount and throttle cable).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 87 |
| 2 | 6021GT | WASHER, LOCK, .375 |  |  | 87 |
| 3 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 87 |
| 4 | 122411GT | RADIATOR STRUT,LEFT | 1 |  | 87 |
| 5 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 87 |
| 6 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 87 |
| 7 | 70257GT | CLAMP,3.0,#48 X 1/4,RUB CUSH |  |  | 87 |
| 8 | 122413GT | BRACKET,INTAKE TUBE SUPPORT | 1 |  | 87 |
| 9 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 87 |
| 10 | 122434GT | HOSE,CAC,2.5"ID X 4.0" | 1 |  | 87 |
| 11 | 122427GT | TUBE,CAC 1 CUM.B3.3T | 1 |  | 87 |
| 12 | 122591GT | CLAMP,CONST TRQ 2.25"-3.13"OD |  |  | 87 |
| 13 | 122408GT | HOSE,LOWER RADIATOR,CUMMINS | 1 |  | 87 |
| 14 | 122425GT | TUBE,AIR INTAKE,UPPER | 1 |  | 87 |
| 15 | 122435GT | REDUCER,90 DEG,CAC, 3.0"-2.5" | 1 |  | 87 |
| 16 | 122592GT | CLAMP,CONST TRQ 2.75"-3.63"OD |  |  | 87 |
| 17 | 122407GT | HOSE,UPPER RADIATOR,CUMMINS | 1 |  | 87 |
| 18 | 70381GT | COVER,FLYWHEEL CASTING | 1 |  | 87 |
| 18A | 122472GT | COUPLER,15 TOOTH,FBA,CUM B3.3T |  |  | 87 |
| 19 |  | TUBE, EXHAUST CUMMINS B3.3T | 1 | No longer available (contact customer services) | 87 |
| 20 | 122615GT | TUBE,EXHAUST CUMMINS T3 | 1 |  | 87 |
| 21 | 122605GT | WLDT, MUFFLER BRKT, CUMMINS T3 | 1 |  | 87 |
| 22 | 122470GT | CLAMP,MUFFLER,CUM B3.3T |  |  | 87 |
| 23 | 60561GT | ELBOW,INLET,CUMMINS | 1 |  | 87 |
| 24 | 122614GT | TUBE,INTAKE,CUMMINS T3 | 1 |  | 87 |
| 25 | 122613GT | TUBE,INTAKE,CUMMINS T3 | 1 |  | 87 |
| 26 | 122432GT | REDUCER,RUBBER,4.0 X 3.0 | 1 |  | 87 |
| 27 | 122466GT | AIR CLEANER,CUMMINS B3.3T | 1 |  | 87 |
| 27- | 146044GT | AIR FILTER, PRIMARY ELEMENT | 1 |  | 89 |
| 27- | 146045GT | AIR FILTER, SECONDARY ELEMENT | 1 |  | 89 |
| 28 | 122467GT | AIR CLEANER,CLAMP,CUM B3.3T | 1 |  | 89 |
| 29 | 122603GT | REDUCER,45 DEG, 3.75"-3.00" | 1 |  | 89 |
| 30 | 122602GT | TUBE,AIR INTAKE 1,CUM.B3.3T | 1 |  | 89 |
| 31 | 22697GT | SCREW,HHC,M10 X 65MM,GR8.8 |  |  | 89 |
| 32 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 89 |
| 33 | 99747GT | NUT,NYLOCK,5/8-11 |  |  | 89 |
| 34 | 13066GT | WASHER,FLAT,.5 HARDENED |  |  | 89 |
| 35 | 60596GT | HOSE INLET | 1 |  | 89 |
| 36 | 35675GT | BEARING,FL,1.25IDX1.5ODX1.25L |  |  | 89 |
| 37 | 61110GT | SCREW,SHC,M10X1.5X30 GR 12.9 |  |  | 89 |
| 38 | 139798GT | STARTER, 12V, CUMMINS B3.3T |  |  | 89 |
| 39 | 122433GT | ELBOW,45 DEG, CAC,2.5" | 1 |  | 89 |
| 40 | 122423GT | BRACKET,INTAKE MOUNT,CUM | 1 |  | 89 |
| 41 | 122414GT | U-BOLT,GUILLOTINE,3" |  |  | 89 |
| 42 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 89 |
| 43 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 89 |
| 44 | 122428GT | MOUNT,1"FLEX-BOLT SANDWICH | 1 |  | 89 |
| 45 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 89 |
| 46 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 89 |
| 47 |  | FORMING,AIR CLEANER | 1 | shown component no longer available, must install kit 146307 for first time replacement | 89 |
| 47- | 146307GT | SERVICE KIT, THROTTLE, B3.3T |  | Includes parts 146352 and 146306 | 89 |
| 48 | 27034GT | SCREW,HHC,M10 X 25MM,GR 8.8 |  |  | 89 |
| 49 |  | FORMING,SOLENOID MOUNT | 1 | shown component no longer available, must install kit 146307 for first time replacement | 89 |
| 49- | 146352GT | WLDT, AIR CLEANER/SOLENOID MNT |  | Can be ordered sparely if kit 146307 was previously installed | 89 |
| 50 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 |  | 89 |
| 51 |  | CABLE ASSY,THROTTLE,CUM B3.3T | 1 | shown component no longer available, must install kit 146307 for first time replacement | 89 |
| 51- | 146306GT | THROTTLE LINK, STEEL |  | Can be ordered sparely if kit 146307 was previously installed | 91 |
| 52 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 91 |
| 53 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 91 |
| 54 | 70444GT | MUFFLER,2.5"INLET/OUTLET | 1 |  | 91 |

#### 402.2 Cummins B3.3T Engine, View 2 (fromSN 951)  (p. 96)

Cummins B3.3T (from SN 951), view 2: engine kit 122402GT, alternator 146046GT, belt 146047GT, radiator/CAC 122404GT, fan 122438GT, oil filter 122708GT, fuel filter 122709GT, engine mounts 122409GT/122410GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 13000GT | SCREW,HHC,5/16-18 X 1.25 |  |  | 97 |
| 2 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 97 |
| 3 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 97 |
| 4 | 122402GT | ENGINE KIT, CUMMINS B3.3T | 1 |  | 97 |
| 5 | 146046GT | ALTERNATOR | 1 |  | 97 |
| 6 | 146047GT | BELT | 1 |  | 97 |
| 7 | 122625GT | BRACKET, SUPPORT, EXH. CUM T3 | 1 |  | 97 |
| 8 | 122424GT | BRACKET,CAC 2 TUBING MOUNT | 1 |  | 97 |
| 9 | 122335GT | BRACKET, CAC INTAKE TUBE MOUNT | 1 |  | 97 |
| 10 | 71911GT | CLAMP,MUFFLER, 2.50 INCH | 1 |  | 97 |
| 11 | 122438GT | FAN, 19.0", BREEZA | 1 |  | 97 |
| 12 | 65473GT | CAP,RADIATOR,PERKINS/FORD | 1 |  | 97 |
| 13 | 122404GT | ASSY, RAD/CAC, CUMMINS B3.3T | 1 |  | 97 |
| 14 | 122413GT | BRACKET,INTAKE TUBE SUPPORT | 1 |  | 97 |
| 15 | 122594GT | FORMING,BAFFLE BOX | 1 |  | 97 |
| 16 | 128505GT | FORMING,ENGINE BAFFLE | 1 |  | 97 |
| 17 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 97 |
| 18 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 97 |
| 19 | 13002GT | SCREW,HHC,5/16-18 X 1 GR5 |  |  | 97 |
| 20 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 97 |
| 21 | 122415GT | WELDMENT,RADIATOR MOUNT,CUM | 1 |  | 97 |
| 22 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 97 |
| 23 | 6021GT | WASHER, LOCK, .375 |  |  | 97 |
| 24 | 44714GT | WASHER,.375X1.25X.100 |  |  | 97 |
| 25 | 75259GT | ISOLATOR,CENTER BONDED |  |  | 97 |
| 26 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 97 |
| 27 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 97 |
| 28 | 50974GT | BUMPER,RUBBER,COVERS |  |  | 97 |
| 29 | 60729GT | FORMING,COVER STOP\*\*\* |  |  | 99 |
| 30 | 122412GT | RADIATOR STRUT,RIGHT | 1 |  | 99 |
| 31 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 99 |
| 32 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 99 |
| 33 | 29883GT | SCREW,HHC,5/8-11 X 1.75 GRD.8 |  |  | 99 |
| 34 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 99 |
| 35 | 122428GT | MOUNT,1"FLEX-BOLT SANDWICH | 1 |  | 99 |
| 36 | 128314GT | WELDMENT, ENGINE TRAY | 1 |  | 99 |
| 37 | 128525GT | BRCKT,MED.FILTER,TEST PORT | 1 |  | 99 |
| 38 |  | FILTER ASY,M PRESS,SAE8,WOIND\* (77139) | 1 | component no longer available | 99 |
| 38- | 60857GT | FILTER,ELEMENT,BETA(5)=1000 |  | for 77139 | 99 |
| 38A | 1267807GT | ASSEMBLY, MED. PRESS. FILTER, SAE8 |  |  | 99 |
| 38A- | 1268229GT | ELEMENT-5 MIC, PAPER, W/ BYPASS |  | for 1267807 | 99 |
| 39 | 8914GT | SCREW, HHC, 1/4-20 X .625 |  |  | 99 |
| 40 | 6356GT | WASHER, LOCK, .25 |  |  | 99 |
| 41 | 102045GT | ISOLATOR,ENGINE VIBRATION |  |  | 99 |
| 42 | 122409GT | FORMING,MOUNT,ENGINE,FRONT | 2 |  | 99 |
| 43 | 122410GT | FORMING,MOUNT,ENGINE,REAR | 2 |  | 99 |
| 44 | 27584GT | SCREW,HHC,M12 X 35MM |  |  | 99 |
| 45 | 49410GT | WASHER, FLAT, M12 |  |  | 99 |
| 46 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 99 |
| 47 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 99 |
| 48 | 13004GT | SCREW,HHC,5/8-11 X 3 GRD.8 |  |  | 99 |
| 49 | 122708GT | OIL FILTER | 1 |  | 99 |
| 50 | 27034GT | SCREW,HHC,M10 X 25MM,GR 8.8 |  |  | 99 |
| 51 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 99 |
| 52 | 111639GT | FORMING,FUEL FILTER MOUNT | 1 |  | 99 |
| 53 | 122709GT | FUEL FILTER | 1 |  | 99 |

#### 403.1 Deutz BF4L 2011 / TD2011L04i Engine, View 1  (p. 100)

Deutz BF4L 2011 (to SN 777) / TD2011L04i (from SN 778), view 1: fuel-injection pumps by class A-D (give engine SN), exhaust, flywheel coupler (flex plate 33024GT/coupler 37003GT to SN 534; FBA coupler 128004GT from SN 535; upgrade kit 128023GT), starter 139709GT with heat guard kit 139621GT, rear engine mount, air intake.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 102581GT | PUMP,FUEL INJ,DEUTZ BF4L20 |  | class A injection pump; provide SN of engine to service to get correct injection pump (A, B,; C, D) | 101 |
| B- | T108732GT | PUMP,FUEL INJ,DEUTZ BF4L20 |  | class B injection pump; provide SN of engine to service to get correct injection pump (A, B,; C, D) | 101 |
| C- | T108733GT | PUMP,FUEL INJ,DEUTZ BF4L20 |  | class C injection pump; provide SN of engine to service to get correct injection pump (A, B,; C, D) | 101 |
| D- | T108734GT | PUMP,FUEL INJ,DEUTZ BF4L20 |  | class D injection pump; provide SN of engine to service to get correct injection pump (A, B,; C, D) | 101 |
| 1 | 70449GT | U-BOLT,1/2-13 X 8.5 |  |  | 101 |
| 2 | 70444GT | MUFFLER,2.5"INLET/OUTLET | 1 |  | 101 |
| 2- | 101634GT | MUFFLER,CATALYTIC,2.5 I/O |  |  | 101 |
| 3 | 70447GT | TAIL PIPE,DEUTZ | 1 |  | 101 |
| 3- | 71911GT | CLAMP,MUFFLER, 2.50 INCH |  |  | 101 |
| 4 | 70483GT | FORMING,8.5' MUFFLER MOUNT | 2 |  | 101 |
| 5 | 102237PGT | FORMING,HEAT SHIELD,MUFFLER | 1 |  | 101 |
| 6 | 70448PGT | FORMING,MUFFLER MOUNT | 1 |  | 101 |
| 7 | 85053GT | SCREW,HHC,M10 X 1.5 X70,GR 8.8 |  |  | 101 |
| 8 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 101 |
| 9 | 60838GT | CLAMP, 1.00, #16 x 1/4, RUB CUSH | 1 |  | 101 |
| 10 | 70381GT | COVER,FLYWHEEL CASTING | 1 |  | 101 |
| 10- | 33024GT | FLYWHEEL FLANGE,GREEN PLASTIC | 1 | **to SN 534** | 101 |
| 10- | 37003GT | COUPLER,HUB,15 TOOTH 7/16BOLT\* | 1 | **to SN 534** | 101 |
| 10- | 128023GT | KIT,FBA STYLE COUPLER,SAE8 |  | upgrade kit; replaces flex plate and coupler | 101 |
| 10- | 128004GT | COUPLER,15 TOOTH,FBA,SAE8\*\*\* |  | **from SN 535** | 101 |
| 10- | 49388GT | SCREW,HHC,M10 X 1.5 X 16 |  | **from SN 535** | 101 |
| 11 | 61110GT | SCREW,SHC,M10X1.5X30 GR 12.9 |  |  | 101 |
| 12 |  | Ref. Lift Pump (refer to 714.1) |  |  | 101 |
| 13 |  | Ref. Drive Pump (refer to 714.1) |  |  | 101 |
| 14 | 66777GT | NUT,TOP LOCK,1/2-13 |  |  | 101 |
| 15 | 106280GT | BRACE,MUFFLER,DEUTZ\*\*\* | 1 |  | 101 |
| 16 | 22558GT | SCREW,HHC,M14 X 40MM,GR 8.8 |  |  | 101 |
| 17 | 49411GT | WASHER,FLAT,M14 |  |  | 103 |
| 18 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 103 |
| 19 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 103 |
| 20 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 103 |
| 21 | 70440GT | WELDMENT,REAR ENGINE MOUNT | 1 |  | 103 |
| 22 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 |  |  | 103 |
| 23 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 103 |
| 24 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 103 |
| 25 | 102045GT | ISOLATOR,ENGINE VIBRATION | 2 |  | 103 |
| 26 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 103 |
| 27 | 71911GT | CLAMP,MUFFLER, 2.50 INCH |  |  | 103 |
| 28 | 139709GT | STARTER, 12V |  |  | 103 |
| 28- | 139621GT | KIT, HEAT GUARD, DEUTZ STARTER |  |  | 103 |
| 29 | 70445GT | FLEX PIPE,EXHAUST,2.5" DIA | 1 |  | 103 |
| 29B | 71911GT | CLAMP,MUFFLER, 2.50 INCH |  |  | 103 |
| 29B | 139983GT | EXHAUST PIPE GASKET |  |  | 103 |
| 30 | 128314GT | WELDMENT, ENGINE TRAY |  |  | 103 |
| 31 | 70438GT | FORMING,ENGINE MOUNT\*\*\* | 1 |  | 103 |
| 32 | 102209PGT | FORMING,AIR CLEANER MOUNT PNTD | 1 |  | 103 |
| 33 | 102593GT | CLAMP, 3 INCH |  |  | 103 |
| 34 | 139455GT | ELBOW,AIR INTAKE,RUBBER | 1 |  | 103 |
| 35 | 226106GT | RUBBER SLEEVES, TD 2011L041 |  |  | 103 |
| 36 | 226103GT | INLET REDUCER,TD 2011L04I |  |  | 103 |
| 37 | 102208GT | TUBE,AIR INTAKE,DEUTZ | 1 |  | 103 |
| 38 | 30489GT | CLAMP,HOSE,3.50 | 2 |  | 103 |
| 39 | 226104GT | BREATHER PIPE, TD 2011L04I |  |  | 103 |
| 39- | 226105GT | GASKET,BREATHER PIPE (226104) |  |  | 103 |

#### 404.1 Deutz BF4L 2011 / TD2011L04i Engine, View 2  (p. 104)

Deutz view 2: alternator 58249GT with pulley/spacer, V-belt 102589GT to SN 777 / 58630GT from SN 778, air box, air cleaner 81467GT with element 62425GT, throttle arm/linkage (to SN 891 / from SN 892), fuel lift pump 111668GT, fuel filter 108543GT, oil filter 49924GT (aftermarket 1255653GT), shutdown solenoid T114678GT, oil pressure switch 139624GT / kit 139666GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| (no item no.) | 139624GT | SWITCH, OIL PRESSURE 1.5 BAR |  | (replaced 65765) | 105 |
| (no item no.) | 139666GT | KIT,OP SWITCH,DEUTZ |  | (oil pressure kit for models with ALC-500 control system. replaces 65765. includes item; 139624 and instructions) | 105 |
| 1 | 58249GT | ALTERNATOR, DEUTZ,BF4L2011\*\*\* | 1 |  | 105 |
| 1- | 1280590GT | PULLEY,ALTERNATOR,DEUTZ BF4L2011 |  | for 58249 | 105 |
| 1- | 1280591GT | SPACER,ALT PULLEY,DEUTZ BF4L2011 |  | for 58249 | 105 |
| 1- | 102589GT | V-BELT, DEUTZ F4L2011 |  | **to SN 777** | 105 |
| 1- | 58630GT | V-BELT, DEUTZ TD2011LOAI |  | **from SN 778** | 105 |
| 2 | 102218PGT | WELDMENT,AIR BOX,DEUTZ PAINTED | 1 | **to SN 777** | 105 |
| 2- | 122266GT | WELDMENT, AIR BOX, DEUTZ |  | **from SN 778** | 105 |
| 3 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 105 |
| 4 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 105 |
| 5 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 105 |
| 6 | 81468GT | MOUNTING BAND,AIR CLEANER | 1 | includes hardware | 105 |
| 7 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 105 |
| 8 | 81467GT | AIR CLEANER,NELSON | 1 |  | 105 |
| 8- | 75450GT | AIR CLEANER CLIPS, SUPERBOOM |  | for 81467 | 105 |
| 8- | 75451GT | AIR CLEANER COVER, SUPERBOOM\* |  | for 81467 | 105 |
| 8- | 52866GT | EVACUATOR VALVE-AIR CLEANER |  | for 81467 | 105 |
| 8- | 62425GT | FILTER,AIR CLEANER, SUPERBOOM |  | for 81467 | 105 |
| 8- | 70515GT | KIT,PRECLEANER DEUTZ\*\*\* |  |  | 105 |
| 9 | 13002GT | SCREW,HHC,5/16-18 X 1 GR5 | 2 |  | 105 |
| 10 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 105 |
| 11 | 60778-SGT | FORMING,COVER STOP | 1 |  | 105 |
| 12 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 105 |
| 13 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 105 |
| 14 | 50974GT | BUMPER,RUBBER,COVERS | 3 |  | 105 |
| 15 | 70479PGT | FORMING,THROTTLE ARM PAINTED |  | **to SN 891** | 105 |
| 15- | 50787-SGT | LEVER, GOVERNOR ACTUATOR |  | **from SN 892** | 105 |
| 16 | 22578GT | SCREW,HHC,M6 X 20MM,GR8.8 |  |  | 107 |
| 17 | 49407GT | WASHER,LOCK,M6 |  |  | 107 |
| 18 | 111668GT | PUMP,FUEL 2011 DEUTZ \*\*\* | 1 |  | 107 |
| 18- | 119344GT | KIT,PRIMER BULB |  |  | 107 |
| 19 | 49922GT | DIPSTICK - DEUTZ F4L1011F |  | **to SN 777** | 107 |
| 19- | 52352GT | DIPSTICK-F3L1011F (DEUTZ) | 1 | **from SN 778** | 107 |
| 20 | 88512GT | THROTTLE LINK,DSL\*\*\* | 1 | **to SN 891** | 107 |
| 20- | 139322GT | THROTTLE LINKAGE, DSL |  | **from SN 892** | 107 |
| 21 | 108543GT | FILTER / FUEL / SPIN-ON | 1 |  | 107 |
| 21- | 58566GT | FILTER HEAD (29560) |  | plastic | 107 |
| 22 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 |  | 107 |
| 22- | 89998GT | KIT,SERVICE,SOLENOID MODULE |  |  | 107 |
| 22- | 60525GT | CONN,RECEP 4 WAY,12-14GA |  |  | 107 |
| 22- | 60526GT | LOCK,RECEP 4 WAY,12-14GA |  |  | 107 |
| 22- | 60757GT | PLUG, SEAL, 12-18GA |  |  | 107 |
| 22- | 73711GT | TERMINAL, PIN, DTP, 12-14 AWG, NICKEL,  , DEUTSCH, LOOSE |  |  | 107 |
| 22- |  | Ref. Relay Module (refer to 303.1) |  |  | 107 |
| 22A | 21130GT | CLEVIS YOKE-1/4-28,PLTD W/PIN |  | includes clevis pin and cotter pin | 107 |
| 23 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 | 2 |  | 107 |
| 24 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 107 |
| 25 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 107 |
| 26 | 102045GT | ISOLATOR,ENGINE VIBRATION | 2 |  | 107 |
| 27 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 107 |
| 28 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 107 |
| 29 | 70440GT | WELDMENT,REAR ENGINE MOUNT | 1 |  | 107 |
| 30 | 111445GT | SENDING UNIT,OIL TEMP SWCH,DTZ | 1 |  | 107 |
| 30- | 58299GT | SENDING UNIT,OIL PRESS.,DEUTZ\* |  | not shown | 107 |
| 31 | 49924GT | FILTER,OIL,DEUTZ | 1 | Genie Genuine Part.  See PN 1255653 for compatible aftermarket replacement | 107 |
| 31- | 1255653GT | FILTER,OIL,DEUTZ,REPLACEMENT | 1 | Genie Aftermarket Part.  Compatible with Genie Genuine Part 49924 | 109 |
| 32 |  | FILTER ASY,M PRESS,SAE8,WOIND\* (77139) | 1 | component no longer available | 109 |
| 32- | 60857GT | FILTER,ELEMENT,BETA(5)=1000 |  | for 77139 | 109 |
| 32A | 1267807GT | ASSEMBLY, MED. PRESS. FILTER, SAE8 |  |  | 109 |
| 32A- | 1268229GT | ELEMENT-5 MIC, PAPER, W/ BYPASS |  | for 1267807 | 109 |
| 33 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 109 |
| 34 | 6356GT | WASHER, LOCK, .25 |  |  | 109 |
| 35 | 128525GT | BRCKT,MED.FILTER,TEST PORT | 1 |  | 109 |
| 36A | 70478PGT | FORMING,SOLENOID MOUNT PAINTED |  | **to SN 891** | 109 |
| 36B | 139321GT | FORMING, SOLENOID MOUNT\*\*\* |  | **from SN 892** | 109 |
| 37 | 70557PGT | BAFFLE,ENGINE AIR,PAINTED |  |  | 109 |
| 38 | T114678GT | SHUTDOWN SOLENOID,12V, DEUTZ | 1 | (includes o-ring) | 109 |
| 38- | 58256GT | SOLENOID CABLE ASSY\*\*\* |  |  | 109 |
| 38- | 72255GT | CONNECTOR, DEUTZ FUEL SHUTOFF\* |  | Does not include 45782 DIODE | 109 |
| 38- | 56445GT | DIODE,6 AMP 200 PIV,REEL |  |  | 109 |

#### 405.1 Perkins 1104C-44 Engine, View 1 (to SN 952)  (p. 110)

Perkins 1104C-44 (to SN 952), view 1: radiator 70518GT, fan 75328GT, V-belts 102598GT (2), alternator 102646GT, oil filter 102632GT, starter 226627GT, fuel separator 75020GT with element 62433GT, exhaust and muffler. Item numbers 29/29A are printed as "29" and "39A" in the manual.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 70540GT | FAN GUARD,PERKINS | 1 |  | 111 |
| 2 | 60649GT | SHROUD,FAN (FIBERGLASS) | 1 |  | 111 |
| 3 | 70518GT | RADIATOR | 1 |  | 111 |
| 3- | 65473GT | CAP,RADIATOR,PERKINS/FORD |  |  | 111 |
| 4 | 75328GT | FAN,PULLER,PERKINS,1004-42 | 1 |  | 111 |
| 5 | 75297GT | WELDMENT,RADIATOR MOUNT\*\* | 1 |  | 111 |
| 6 | 13918GT | SCREW,HHC,3/8-16 X 1.75,GRD.8 | 2 |  | 111 |
| 7 | 6021GT | WASHER, LOCK, .375 |  |  | 111 |
| 8 | 44714GT | WASHER,.375X1.25X.100 |  |  | 111 |
| 9 | 75259GT | ISOLATOR,CENTER BONDED | 2 |  | 111 |
| 10 | 102598GT | BELT,V,(2) PERKINS 1104C-44 | 2 |  | 111 |
| 11 | 102646GT | ALTERNATOR,PERKINS 1104C-44 | 1 |  | 111 |
| 12 | 60564GT | BRACKET,ENG.MOUNT,FRT.PERKINS | 2 |  | 111 |
| 13 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 | 4 |  | 111 |
| 14 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 111 |
| 15 | 102045GT | ISOLATOR,ENGINE VIBRATION | 4 |  | 111 |
| 16 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 111 |
| 17 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 111 |
| 18 | 102631GT | DIPSTICK,PERKINS 1104C-44 | 1 |  | 111 |
| 19 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 111 |
| 20 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 111 |
| 21 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 111 |
| 22 | 60778-SGT | FORMING,COVER STOP | 1 |  | 111 |
| 23 | 50974GT | BUMPER,RUBBER,COVERS | 1 |  | 111 |
| 24 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 111 |
| 25 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 111 |
| 26 | 102632GT | FILTER,OIL,PERKINS 1104C-44 | 1 |  | 111 |
| 27 | 226627GT | STARTER,ENG,PERK T3 6/8/10K | 1 |  | 111 |
| 28 | 101931PGT | MOUNT,PERKINS 1104 RH PAINTED | 2 |  | 113 |
| 29 |  | FILTER ASY,M PRESS,SAE8,WOIND\* (77139) | 1 | component no longer available | 113 |
| 29- | 60857GT | FILTER,ELEMENT,BETA(5)=1000 |  | for 77139 | 113 |
| 39A | 1267807GT | ASSEMBLY, MED. PRESS. FILTER, SAE8 |  |  | 113 |
| 39A- | 1268229GT | ELEMENT-5 MIC, PAPER, W/ BYPASS |  | for 1267807 | 113 |
| 30 | 75020GT | SEPRTR/FLTR,FUEL DSL,15GPH,.30 | 1 |  | 113 |
| 30- | 62433GT | FILTER,ELEMENT,30 MIC,75020 |  |  | 113 |
| 31 | 70553GT | WELDMENT,EXHAUST HEADER | 1 |  | 113 |
| 32 | 71911GT | CLAMP,MUFFLER, 2.50 INCH | 2 |  | 113 |
| 33 | 70444GT | MUFFLER,2.5"INLET/OUTLET | 1 |  | 113 |
| 33- | 101634GT | MUFFLER,CATALYTIC,2.5 I/O |  |  | 113 |
| 34 | 70449GT | U-BOLT,1/2-13 X 8.5 | 2 |  | 113 |
| 35 | 70554GT | HEAT SHIELD,PERKINS MUFFLER | 1 |  | 113 |
| 36 | 94324GT | TUBE,RD,STL,ALUMIZD,2.5 X .065 | 1 |  | 113 |

#### 406.1 Perkins 1104C-44 Engine, View 2 (to SN 952)  (p. 120)

Perkins 1104C-44 (to SN 952), view 2: radiator hoses, air cleaner, throttle solenoid/linkage 101219GT, fuel filter 102639GT with adapter 102638GT, water pump 102643GT and gasket, oil pressure sender, temperature sender.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 102638GT | ADAPTER-FUEL FILTER, PERK 1104 |  |  | 121 |
| 1 | 60576GT | RADIATOR HOSE,UPPER-PERKINS | 1 |  | 121 |
| 2 | 81468GT | MOUNTING BAND,AIR CLEANER | 1 |  | 121 |
| 3 | 81467GT | AIR CLEANER,NELSON | 1 |  | 121 |
| 3- | 75450GT | AIR CLEANER CLIPS, SUPERBOOM |  | for 81467 | 121 |
| 3- | 75451GT | AIR CLEANER COVER, SUPERBOOM\* |  | for 81467 | 121 |
| 3- | 52866GT | EVACUATOR VALVE-AIR CLEANER |  | for 81467 | 121 |
| 3- | 62425GT | FILTER,AIR CLEANER, SUPERBOOM |  | for 81467 | 121 |
| 3- | 98012GT | OPTION,PRECLEANER PERKINS |  |  | 121 |
| 4 | 29883GT | SCREW,HHC,5/8-11 X 1.75 GRD.8 | 2 |  | 121 |
| 5 | 13064GT | WASHER,FLAT,.625 HARDENED | 2 |  | 121 |
| 6 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 121 |
| 7 |  | Ref. Drive Pump (refer to 714.1) |  |  | 121 |
| 8 |  | Ref. Lift Pump (refer to 714.1) |  |  | 121 |
| 9 | 44064GT | SCREW,HHC,M10 X 30MM, |  |  | 121 |
| 10 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 121 |
| 11 | 60322-SGT | PLATE,PUMP MOUNT | 1 |  | 121 |
| 12 | 60561GT | ELBOW,INLET,CUMMINS | 2 |  | 121 |
| 13 | 81738GT | TUBE,RD,STL 3 X 18GA ALUMINIZD | 1 |  | 121 |
| 14 | 49381GT | SCREW,HHC,M12 X 30 |  |  | 121 |
| 15 | 49410GT | WASHER, FLAT, M12 |  |  | 121 |
| 16 | 101217PGT | PLATE,THROTTLE ACTUATOR MOUNT | 1 |  | 121 |
| 17 | 102348GT | SENDING UNIT,OIL PRESS PERKINS | 1 |  | 121 |
| 18 | 89511GT | WELDMENT,ENGINE TRAY | 1 |  | 121 |
| 19 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 |  | 121 |
| 19- | 89998GT | KIT,SERVICE,SOLENOID MODULE |  |  | 121 |
| 19- | 60525GT | CONN,RECEP 4 WAY,12-14GA |  |  | 121 |
| 19- | 60526GT | LOCK,RECEP 4 WAY,12-14GA |  |  | 121 |
| 19- | 60757GT | PLUG, SEAL, 12-18GA |  |  | 123 |
| 19- | 73711GT | TERMINAL, PIN, DTP, 12-14 AWG, NICKEL,  , DEUTSCH, LOOSE |  |  | 123 |
| 19- |  | Ref. Relay Module (refer to 303.1) |  |  | 123 |
| 20 | 60564GT | BRACKET,ENG.MOUNT,FRT.PERKINS | 1 |  | 123 |
| 21 | 102639GT | FILTER,FUEL, PERKINS 1104C | 1 |  | 123 |
| 22 | 81738GT | TUBE,RD,STL 3 X 18GA ALUMINIZD | 1 |  | 123 |
| 23 | 70257GT | CLAMP,3.0,#48 X 1/4,RUB CUSH | 2 |  | 123 |
| 24 | 101219GT | THROTTLE LINKAGE,PERKINS 1104C | 1 |  | 123 |
| 25 | 75555GT | RADIATOR HOSE,LOWER-PERKINS | 1 |  | 123 |
| 26 | 102643GT | PUMP, WATER,PERKINS 1104C-44 | 1 |  | 123 |
| 26- | 102644GT | GASKET-PUMP WATE,PERK 1104C-44 |  |  | 123 |
| 27 | 101655PGT | BRACKET,RADIATOR SUPP,LH PAINT | 2 |  | 123 |
| 28 | 75260GT | ISOLATOR,FLEX-BOLT SANDWICH\*\*\* | 2 |  | 123 |
| 29 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 123 |
| 30 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 123 |
| 31 | 34058GT | SENDING UNIT,TMP,FRD,GM,PRK704 | 1 |  | 123 |

#### 405.2 Perkins 804D-33T Engine, View 1 (from SN 953)  (p. 114)

Perkins 804D-33T (from SN 953), view 1: engine harness 128802GT, starter 107546GT, exhaust, cold-start advance sensor, fan/shroud, radiator 110304GT, fuel lift pump/filter 101644GT, engine mounts. The alternator for this engine is printed as "no longer available" (V-belt 102534GT is listed).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 128802GT | HARNESS, PERKINS ENGINE | 1 |  | 115 |
| B | 107546GT | STARTER MOTOR,PERKINS(804C-33) | 1 |  | 115 |
| 1 | 70444GT | MUFFLER,2.5"INLET/OUTLET | 1 |  | 115 |
| 2 | 70449GT | U-BOLT,1/2-13 X 8.5 |  |  | 115 |
| 3 | 70483GT | FORMING,8.5' MUFFLER MOUNT |  |  | 115 |
| 4 | 13066GT | WASHER,FLAT,.5 HARDENED |  |  | 115 |
| 5 | 66777GT | NUT,TOP LOCK,1/2-13 |  |  | 115 |
| 6 | 101619GT | PIPE,TAIL |  |  | 115 |
| 7 | 30438GT | CLAMP,MUFFLER,2 1/4" ID. |  |  | 115 |
| 8 |  | WELDMENT, MUFFLER SUPPORT | 1 | no longer available | 115 |
| 9 | 128198GT | WELDMENT, EXHAUST, 804T | 1 |  | 115 |
| 10 | 85064GT | SCREW,SHC,M8 X 1.25 X 16 MM |  |  | 115 |
| 11 | 49408GT | WASHER, LOCK, M8 |  |  | 115 |
| 12 | 106104GT | O-RING,SEAL RING,1" NPT (PKG) |  |  | 115 |
| 13 | 23057GT | SCREW,HHC,M8 X 20MM |  |  | 115 |
| 14 | 128280GT | WELDMENT, EXHAUST SUPPORT | 1 |  | 115 |
| 15 | 71911GT | CLAMP,MUFFLER, 2.50 INCH |  |  | 115 |
| 16 | 128661GT | HOSE, CRANKCASE BREATHER | 1 |  | 115 |
| 17 |  | ALTERNATOR |  | no longer available | 115 |
| 17- | 102534GT | V-BELT, PERKINS 804C-33 |  | (for alternator) | 115 |
| 18A | 128638GT | SENSOR, TEMP. SENDER, M16X1.5 | 1 |  | 115 |
| 18A- | 128801GT | O-RING, M16, ISO |  |  | 115 |
| 18A- | 128858GT | WASHER, RETAINING,  M16 |  |  | 115 |
| 18B | 1281249GT | SWITCH,COLD START ADVANCE WATER SENSOR | 1 |  | 115 |
| 19 | 75328GT | FAN,PULLER,PERKINS,1004-42 | 1 |  | 115 |
| 20 | 22571GT | NUT,HEX,M8 X 1.25 |  |  | 115 |
| 21 | 60585GT | ISOLATOR,VIBRATION,M8 MALE/FEM |  |  | 115 |
| 22 | 33277GT | WASHER,FLAT,M8,YELLOW ZINC |  |  | 115 |
| 23 | 101629GT | SCREW,HHC,M8 X 10MM |  |  | 117 |
| 24 | 101603PGT | SHROUD,FAN,PERKINS PAINTED | 1 |  | 117 |
| 24A | 101604PGT | BRACKET,FAN SHROUD,RH,PAINTED | 1 | refer to 406.2 for left bracket | 117 |
| 25 | 65473GT | CAP,RADIATOR,PERKINS/FORD | 1 |  | 117 |
| 26 | 110304GT | RADIATOR,FORD/PERKINS\*\*\* | 1 |  | 117 |
| 27 | 128247GT | FORMING, FAN BAFFLE | 1 |  | 117 |
| 28 | 101606PGT | BRACKET,RADIATOR SUPPORT PNTD | 1 |  | 117 |
| 29 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 117 |
| 30 | 24038GT | SHOCK MOUNT,SMALL |  |  | 117 |
| 31 | 24037GT | SHOCK MOUNT,LARGE\*\* |  |  | 117 |
| 32 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 117 |
| 33 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 117 |
| 34 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 117 |
| 35 | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 117 |
| 36 | 139066GT | FORMING, BELT GUARD |  |  | 117 |
| 37 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG | 6 |  | 117 |
| 38 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 117 |
| 39 | 50974GT | BUMPER,RUBBER,COVERS |  |  | 117 |
| 40 | 54363GT | BRACKET,RUBBER BUMPER,ENGCOVER |  |  | 117 |
| 41 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 117 |
| 42 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 117 |
| 43 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 117 |
| 44 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 117 |
| 45 | 102045GT | ISOLATOR,ENGINE VIBRATION |  |  | 117 |
| 46 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 117 |
| 47 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 |  |  | 117 |
| 48 | 128660GT | FORMING, FILTER SUPPORT | 1 |  | 117 |
| 49 | 101644GT | FUEL LIFT PUMP/FILTER ASSY | 1 |  | 117 |
| 50 | 38922GT | ELBOW,90DEG.1/8MPT-5/16 BARB |  |  | 119 |
| 51 | 41468GT | TEE,BRASS STREET,.12 NPT |  |  | 119 |
| 52 | 31817GT | ELBOW,90DEG.1/4MPT-3/8 BARB |  |  | 119 |
| 53 | 101628GT | ADAPTER,1/4 FNPT X 1/2-20 UNF |  |  | 119 |
| 54 | 54205GT | HOSE END,BARB,1/4 MNPTX5/16,90 |  |  | 119 |
| 55 | 49381GT | SCREW,HHC,M12 X 30 |  |  | 119 |
| 56 | 49410GT | WASHER, FLAT, M12 |  |  | 119 |
| 57 | 128243GT | WELDMENT, ENGINE MNT, RF | 1 |  | 119 |
| 58 | 128242GT | ENGINE MOUNT, RR | 1 |  | 119 |
| 59 | 27584GT | SCREW,HHC,M12 X 35MM |  |  | 119 |

#### 406.2 Perkins 804D-33T Engine, View 2 (from SN 953)  (p. 124)

Perkins 804D-33T (from SN 953), view 2: air cleaner, dipstick tube, FBA coupler, pump mount, throttle solenoid/linkage 128555GT, oil filter element 101613GT, water pump 226060GT, thermostat 226127GT (180 F) with gasket 226128GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 23057GT | SCREW,HHC,M8 X 20MM |  |  | 125 |
| 2 | 49408GT | WASHER, LOCK, M8 |  |  | 125 |
| 3 | 81738-3300GT | TUBE,RD,STL 3 X 18GA ALUMINIZD | 1 |  | 125 |
| 4 | 101601GT | HOSE,RADIATOR,UPPER,PERKINS | 1 |  | 125 |
| 5 | 35434GT | CLAMP,HOSE,2.00\*\*\* |  |  | 125 |
| 6 | 30489GT | CLAMP,HOSE,3.50 |  |  | 125 |
| 7 | 60561GT | ELBOW,INLET,CUMMINS | 1 |  | 125 |
| 8 | 128207GT | HOSE, AIR INTAKE, 804T | 1 |  | 125 |
| 9 | 81467GT | AIR CLEANER,NELSON | 1 |  | 125 |
| 9- | 75450GT | AIR CLEANER CLIPS, SUPERBOOM |  | for 81467 | 125 |
| 9- | 75451GT | AIR CLEANER COVER, SUPERBOOM\* |  | for 81467 | 125 |
| 9- | 52866GT | EVACUATOR VALVE-AIR CLEANER |  | for 81467 | 125 |
| 9- | 62425GT | FILTER,AIR CLEANER, SUPERBOOM |  | for 81467 | 125 |
| 10 | 81468GT | MOUNTING BAND,AIR CLEANER | 1 |  | 125 |
| 11 | 49378GT | SCREW,HHC,M8 X 16 |  |  | 125 |
| 12 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 125 |
| 13 | 128248GT | FORMING, FILTER SUPPORT | 1 |  | 125 |
| 14 | 49379GT | SCREW,HHC,M8 X 1.25 X 25 |  |  | 125 |
| 15 | 128424GT | ASSEMBLY, DIPSTICK TUBE | 1 |  | 125 |
| 16 | 128004GT | COUPLER,15 TOOTH,FBA,SAE8\*\*\* | 1 |  | 125 |
| 17 | 27034GT | SCREW,HHC,M10 X 25MM,GR 8.8 |  |  | 125 |
| 18 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 125 |
| 19 | 61781GT | CASTING,SAE 4 PUMP MOUNT,MACHI | 1 |  | 125 |
| 20 | 62476GT | SCREW,SHC,M10X1.5X20MM (75090) |  |  | 125 |
| 21 | 128244GT | ENGINE MOUNT,  LR | 1 |  | 125 |
| 22 | 6024GT | NUT,NYLOCK,5/8-11 |  |  | 125 |
| 23 | 13064GT | WASHER,FLAT,.625 HARDENED |  |  | 125 |
| 24 | 33418GT | WASHER,FLAT,.625 X 2.25 X.15 |  |  | 125 |
| 25 | 102045GT | ISOLATOR,ENGINE VIBRATION |  |  | 127 |
| 26 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 127 |
| 27 | 13003GT | SCREW,HHC,5/8-11 X 3.5 GRD.8 |  |  | 127 |
| 28 | 128314GT | WELDMENT, ENGINE TRAY | 1 |  | 127 |
| 29 | 60868GT | SCREW,HHC,M12 X 45 |  |  | 127 |
| 30 | 49410GT | WASHER, FLAT, M12 |  |  | 127 |
| 31 | 128554GT | PLATE, SOLENOID MOUNT | 1 |  | 127 |
| 32 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 |  | 127 |
| 32- | 89998GT | KIT,SERVICE,SOLENOID MODULE |  |  | 127 |
| 32- | 73711GT | TERMINAL, PIN, DTP, 12-14 AWG, NICKEL,  , DEUTSCH, LOOSE |  |  | 127 |
| 32- | 6578GT | CABLE TIE,7 3/8" |  |  | 127 |
| 32- | 60757GT | PLUG, SEAL, 12-18GA |  |  | 127 |
| 32- | 60526GT | LOCK,RECEP 4 WAY,12-14GA |  |  | 127 |
| 32- | 60525GT | CONN,RECEP 4 WAY,12-14GA |  |  | 127 |
| 32- | 53471GT | WIRE LOOM,3/8 NYLON,HI TEMP |  |  | 127 |
| 32A | 128555GT | THROTTLE, LINKAGE | 1 |  | 127 |
| 32A | 21130GT | CLEVIS YOKE-1/4-28,PLTD W/PIN |  |  | 127 |
| 33 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 127 |
| 34 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 127 |
| 35 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 127 |
| 36 | 27584GT | SCREW,HHC,M12 X 35MM |  |  | 127 |
| 37 | 128245GT | ENGINE MOUNT, LF | 1 |  | 127 |
| 38 | 101613GT | ELEMENT,OIL FILTER,PERKINS\*\*\* | 1 |  | 127 |
| 39 | 101602GT | HOSE,RADIATOR,LOWER,PERKINS | 1 |  | 127 |
| 40 | 128250GT | FORMING, ENGINE BAFFLE | 1 |  | 127 |
| 41 | 106226-4000GT | TUBING, VINYL, 1/2" CLEAR | 1 |  | 127 |
| 42 | 226060GT | PUMP,WATER,PERKINS 804D-33T |  |  | 127 |
| 42- | 226061GT | GASKET-PUMP WATE,PERK 804D-33T |  |  | 127 |
| 43 | 226127GT | THERMOSTAT, 180 DEG.F |  |  | 129 |
| 43- | 226128GT | GASKET, (226127) |  |  | 129 |
| 44 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 129 |
| 45 | 6356GT | WASHER, LOCK, .25 |  |  | 129 |
| 46 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 129 |
| 47 | 128249GT | FORMING, INTAKE DUCT | 1 |  | 129 |
| 48 | 128246GT | BRACKET, FAN SHROUD, LH | 1 | refer to 405.2 for right bracket | 129 |
| 49 | 101629GT | SCREW,HHC,M8 X 10MM |  |  | 129 |
| 50 | 33277GT | WASHER,FLAT,M8,YELLOW ZINC |  |  | 129 |
| 51 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 129 |
| 52 | 128421GT | FORMING, INTAKE TUBE MNT | 1 |  | 129 |
| 53 | 70257GT | CLAMP,3.0,#48 X 1/4,RUB CUSH |  |  | 129 |

---

### Group: Boom

#### 501.1 Secondary Boom Tube Reference  (p. 130)

Reference list of the four riser (secondary boom) tubes; each has a to-SN-161 / from-SN-162 break except #1.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 227780GT | ASSY,RISER BOOM #4 |  | **to SN 161; REFER TO SECTION 505.1** | 131 |
| 1- | 119849GT | ASSEMBLY,RISER BOOM #4\*\*\* |  | **from SN 162; REFER TO SECTION 505.1** | 131 |
| 2 | 61821GT | WELDMENT,RISER BOOM #3 |  | **to SN 161; REFER TO SECTION 504.1** | 131 |
| 2- | 107851GT | WELDMENT,RISE BOOM #3\*\*\* |  | **from SN 162; REFER TO SECTION 504.1** | 131 |
| 3 | 119848GT | ASSEMBLY,RISER BOOM #1\*\*\* |  | REFER TO SECTION 502.1 | 131 |
| 4 | 94601GT | WELDMENT,RISER BOOM #2 |  | **to SN 161; REFER TO SECTION 503.1** | 131 |
| 4- | 107850GT | WELDMENT,RISER BOOM #2\*\*\* |  | **from SN 162; REFER TO SECTION 503.1** | 131 |

#### 502.1 Secondary Boom Tube 1 (to SN 1853)  (p. 132)

Riser tube #1 to SN 1853 (original rotary angle sensor 94980 no longer available - order kit 217238GT from SN 652 incl. SN 640/650, or 824587GT to SN 651). Note the alternating hardware/bracket breaks at SN 639/640/641-649/650/651/652 exactly as printed.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 119848GT | ASSEMBLY,RISER BOOM #1\*\*\* | 1 | includes item 19 | 133 |
| 2 | 34124GT | WEAR PAD,5 X 3 X .625 W/NUTS | 2 |  | 133 |
| 3 | 35714GT | SCREW,FHS,3/8-16 X 2.25 |  |  | 133 |
| 4 | 106810GT | REST PAD,RISER #1 | 1 |  | 133 |
| 5 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 133 |
| 6 | 6021GT | WASHER, LOCK, .375 |  |  | 133 |
| 7 | 6605GT | SCREW,HHC,3/8-16 X 3.5,GR5 |  |  | 133 |
| 8 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 133 |
| 9 | 106281PGT | BRACKET,RISER CYL MOUNT PAINTD | 2 |  | 133 |
| 10 | 49775GT | SCREW,PHILLIPS,PHM,10-32X 1.75 |  |  | 133 |
| 11 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 133 |
| 12 | 110909GT | SWITCH ASSY,LIMIT LSS1RO | 1 |  | 133 |
| 12- | 110771-64463GT | SWITCH,LIMIT W/ROLLER NO/NO |  |  | 133 |
| 12- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 76 |  | 133 |
| 12- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 133 |
| 12- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 133 |
| 12- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 133 |
| 13 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 133 |
| 14 | 119247PGT | BRACKET, RISER EXT L/S, PTD | 1 | **Units before SN 333 must also purchase part 119248P for first time replacement (refer to; 505.1)** | 133 |
| 15 | 110910GT | SWITCH ASSY,LIMIT LSS1RS | 1 |  | 133 |
| 15- | 110771-44463GT | SWITCH,LIMIT W/ROLLER NO/NC |  |  | 133 |
| 15- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 88 |  | 133 |
| 15- | 119762GT | CONN PLUG 4 WAY EXTEND DT |  |  | 133 |
| 15- | 60429GT | LOCK, PLUG 4WAY, 14-18GA |  |  | 133 |
| 15- | 73714GT | TERMINAL, SOCKET, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 133 |
| 16 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 133 |
| 17 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  | **to SN 639** | 133 |
| 17- | 6097GT | WASHER, FLAT, USS, 3/8", Y |  | **SN 640** | 133 |
| 17- | 6638GT | WASHER, FLAT, USS, 1/4"Y |  | **from SN 641 to 649** | 135 |
| 17- | 6097GT | WASHER, FLAT, USS, 3/8", Y |  | **from SN 650** | 135 |
| 17- | 6638GT | WASHER, FLAT, USS, 1/4"Y |  | **SN 651** | 135 |
| 17- | 6097GT | WASHER, FLAT, USS, 3/8", Y |  | **from SN 652** | 135 |
| 18 | 6091GT | NUT,NYLOCK,1/4-20 |  | **to SN 639** | 135 |
| 18- | 4828GT | NUT, NYLOCK, 3/8-16 |  | **SN 640** | 135 |
| 18- | 6091GT | NUT,NYLOCK,1/4-20 |  | **from SN 641 to 649** | 135 |
| 18- | 4828GT | NUT, NYLOCK, 3/8-16 |  | **SN 650** | 135 |
| 18- | 6091GT | NUT,NYLOCK,1/4-20 |  | **SN 651** | 135 |
| 18- | 4828GT | NUT, NYLOCK, 3/8-16 |  | **from SN 652** | 135 |
| 19 | 27697GT | BEARING,2.50IDX2.75ODX1.50L | 2 |  | 135 |
| 20 | 101599GT | KEY,BALL POINT HEX | 1 |  | 135 |
| 21 |  | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | (calibration required after replacement). Older sensor part 94980 is no longer available. For; first time replacement, order kit 217238 or 824587 (refer to 502.2) | 135 |
| 21- | 217238GT | KIT,Z135 SECONDARY ANGLE SEN. |  | **from SN 652 (including SN 640 and 650)** | 135 |
| 21- | 824587GT | KIT,Z135 SECONDARY ANGLE SEN |  | **to SN 651 (excluding SN 640 and 650)** | 135 |
| 22 | 22541GT | SCREW,RHM,10-32 X 1.5 |  |  | 135 |
| 23 | 101708GT | MACH,RISER ROTARY SENSOR BRKT | 1 | **to SN 639** | 135 |
| 23- | 128357GT | MACH,RISER ROTARY SENSOR BRKT | 1 | **SN 640** | 135 |
| 23- | 101708GT | MACH,RISER ROTARY SENSOR BRKT |  | **from SN 641 to 649** | 135 |
| 23- | 128357GT | MACH,RISER ROTARY SENSOR BRKT |  | **SN 650** | 135 |
| 23- | 101708GT | MACH,RISER ROTARY SENSOR BRKT |  | **SN 651** | 135 |
| 23- | 128357GT | MACH,RISER ROTARY SENSOR BRKT |  | **from SN 652** | 135 |
| 24 | 50160GT | SCREW,HHC,1/4-20 X 3.75 |  | **to SN 639** | 135 |
| 24- | 5387GT | SCREW,HHC,3/8-16 X 4 |  | **SN 640** | 135 |
| 24- | 50160GT | SCREW,HHC,1/4-20 X 3.75 |  | **from SN 641 to 649** | 135 |
| 24- | 5387GT | SCREW,HHC,3/8-16 X 4 |  | **SN 650** | 135 |
| 24- | 50160GT | SCREW,HHC,1/4-20 X 3.75 |  | **SN 651** | 135 |
| 24- | 5387GT | SCREW,HHC,3/8-16 X 4 |  | **from SN 652** | 135 |
| 25- | 60177GT | COVER,BOOM SIDE\*\*\* | 4 |  | 137 |
| 26 | 101718GT | BOLT,CARRIAGE,3/8-16 X .75,G2 |  |  | 137 |
| 27 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 137 |
| 28 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 137 |
| 29 | 88022GT | WEAR PAD,7 X 3 X 1 W/NUTS | 2 |  | 137 |
| 30 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA | as needed |  | 137 |
| 31 | 106796GT | WEAR PAD,7 X 3 X 0.5 W/INSERT | 8 |  | 137 |
| 32 | 107661GT | SCREW,FHS,3/8-16 X .625,ZINC |  |  | 137 |
| 33 | 107503GT | PLATE,WEARPAD MOUNT | 2 |  | 137 |
| 34 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 4 |  | 137 |
| 35 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 137 |

#### 502.2 Secondary Boom Tube 1 (from SN 1854)  (p. 138)

Riser tube #1 from SN 1854 with the new magnet-type angle sensor 216061GT (sensor and magnet matched; calibrate after install); complete sensor assembly 217224GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 119848GT | ASSEMBLY,RISER BOOM #1\*\*\* | 1 |  | 139 |
| 2 | 34124GT | WEAR PAD,5 X 3 X .625 W/NUTS | 2 |  | 139 |
| 3 | 35714GT | SCREW,FHS,3/8-16 X 2.25 |  |  | 139 |
| 4 | 106810GT | REST PAD,RISER #1 | 1 |  | 139 |
| 5 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 139 |
| 6 | 6021GT | WASHER, LOCK, .375 |  |  | 139 |
| 7 | 6605GT | SCREW,HHC,3/8-16 X 3.5,GR5 |  |  | 139 |
| 8 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 139 |
| 9 | 106281PGT | BRACKET,RISER CYL MOUNT PAINTD | 2 |  | 139 |
| 10 | 49775GT | SCREW,PHILLIPS,PHM,10-32X 1.75 |  |  | 139 |
| 11 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 139 |
| 12 | 110909GT | SWITCH ASSY,LIMIT LSS1RO | 1 |  | 139 |
| 12- | 110771-64463GT | SWITCH,LIMIT W/ROLLER NO/NO |  |  | 139 |
| 12- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 76 |  | 139 |
| 12- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 139 |
| 12- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 139 |
| 12- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 139 |
| 13 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 139 |
| 14 | 119247PGT | BRACKET, RISER EXT L/S, PTD | 1 |  | 139 |
| 15 | 110910GT | SWITCH ASSY,LIMIT LSS1RS | 1 |  | 139 |
| 15- | 110771-44463GT | SWITCH,LIMIT W/ROLLER NO/NC |  |  | 139 |
| 15- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 88 |  | 139 |
| 15- | 119762GT | CONN PLUG 4 WAY EXTEND DT |  |  | 139 |
| 15- | 60429GT | LOCK, PLUG 4WAY, 14-18GA |  |  | 139 |
| 15- | 73714GT | TERMINAL, SOCKET, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 139 |
| 16 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 139 |
| 17 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 139 |
| 18 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 139 |
| 19 | 27697GT | BEARING,2.50IDX2.75ODX1.50L | 2 |  | 141 |
| 20 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 |  |  | 141 |
| 21 | 226493GT | MACHINED, SECONDARY SEN. BASE |  |  | 141 |
| 22 | 226491GT | MACHINED, ANGLE SENSOR RACE |  |  | 141 |
| 23 | 216061GT | SENSOR, ANGLE, 180 DEG, CW |  | Sensor and magnet are matched and must be replaced at the same time. Machine; calibration is required after installation | 141 |
| 24 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB |  |  | 141 |
| 25 | 226492GT | MACHINED, ANGLE SENSOR HOLDER |  |  | 141 |
| 26 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 |  |  | 141 |
| 27 | 233116GT | MACHINED, SENSOR ARM |  |  | 141 |
| 28 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB |  |  | 141 |
| 29 | 217224GT | ASSY,ANGLE SEN.,Z135 SECONDARY |  | (Complete) Includes items 20 to 28; calibration required after replacement, (included in kits; 217238 and 824587, refer to 502.1) | 141 |
| 30 | 217236GT | SCREW,SHS,3/4X2.25X5/8-11,ZAG |  |  | 141 |
| 31 | 5387GT | SCREW,HHC,3/8-16 X 4 |  |  | 141 |
| 32 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 141 |
| 33 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 141 |
| 34 | 233117GT | WLDT, SENSOR ROTATOR #1 |  |  | 141 |
| 35 | 60177GT | COVER,BOOM SIDE\*\*\* | 4 |  | 141 |
| 36 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 141 |
| 37 | 101718GT | BOLT,CARRIAGE,3/8-16 X .75,G2 |  |  | 141 |
| 38 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 141 |
| 39 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 141 |
| 40 | 88022GT | WEAR PAD,7 X 3 X 1 W/NUTS | 2 |  | 141 |
| 41 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA |  |  | 141 |
| 42 | 106796GT | WEAR PAD,7 X 3 X 0.5 W/INSERT | 8 |  | 141 |
| 43 | 107661GT | SCREW,FHS,3/8-16 X .625,ZINC |  |  | 141 |
| 44 | 107503GT | PLATE,WEARPAD MOUNT | 2 |  | 141 |
| 45 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 4 |  | 141 |

#### 503.1 Secondary Boom Tube 2  (p. 142)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 94601GT | WELDMENT,RISER BOOM #2 | 1 | **to SN 161** | 143 |
| 1- | 107850GT | WELDMENT,RISER BOOM #2\*\*\* |  | **from SN 162** | 143 |
| 2 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 8 |  | 143 |
| 3 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA | as needed |  | 143 |
| 4 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 143 |
| 5 | 6021GT | WASHER, LOCK, .375 |  |  | 143 |
| 6 | 101920GT | GUIDE,ALUMINUM EXTRUSION | 1 |  | 143 |
| 6- | 106729GT | WELDMENT, GUIDE BRKT |  | not shown, order separately (refer to 504.1) | 143 |
| 7 | 6605GT | SCREW,HHC,3/8-16 X 3.5,GR5 |  |  | 143 |
| 8 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 143 |
| 9 | 106281PGT | BRACKET,RISER CYL MOUNT PAINTD | 4 |  | 143 |
| 10 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 143 |
| 11 | 49857GT | SCREW,HHC,3/8-16 X .88,GRD 8 |  |  | 143 |
| 12 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 143 |
| 13 | 88648GT | WEAR PAD,7X3X.625 W/NUTS | 4 |  | 143 |
| 14 | 107661GT | SCREW,FHS,3/8-16 X .625,ZINC |  |  | 143 |
| 15 | 107501GT | PLATE,WEARPAD MOUNT,LH | 2 |  | 143 |
| 16 | 106797GT | WEAR PAD,7X3X.75 W/INSERT | 4 |  | 143 |
| 17 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 143 |
| 18 | 88022GT | WEAR PAD,7 X 3 X 1 W/NUTS | 2 |  | 143 |
| 19 | 106796GT | WEAR PAD,7 X 3 X 0.5 W/INSERT | 4 |  | 143 |
| 20 | 107503GT | PLATE,WEARPAD MOUNT | 2 |  | 143 |
| 21 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 143 |
| 22 | 107823GT | ROLLER, NYLON | 1 |  | 143 |
| 23 | 107833PGT | FORMING, ROLLER #2, PAINTED | 1 |  | 143 |

#### 504.1 Secondary Boom Tube 3  (p. 144)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 145 |
| 2 | 6021GT | WASHER, LOCK, .375 |  |  | 145 |
| 3 | 61821GT | WELDMENT,RISER BOOM #3 | 1 | **to SN 161** | 145 |
| 3- | 107851GT | WELDMENT,RISE BOOM #3\*\*\* |  | **from SN 162** | 145 |
| 4 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 2 |  | 145 |
| 5 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA | as needed |  | 145 |
| 5- | 60840GT | SHIM,WEAR PAD,7 X 3,16GA | as needed |  | 145 |
| 6 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 145 |
| 7 | 101921GT | GUIDE,ALUMINUM EXTRUSION | 1 |  | 145 |
| 8 | 49857GT | SCREW,HHC,3/8-16 X .88,GRD 8 |  |  | 145 |
| 9 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 145 |
| 10 | 6605GT | SCREW,HHC,3/8-16 X 3.5,GR5 |  |  | 145 |
| 11 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 145 |
| 12 | 106281PGT | BRACKET,RISER CYL MOUNT PAINTD | 4 |  | 145 |
| 13 | 88648GT | WEAR PAD,7X3X.625 W/NUTS | 4 |  | 145 |
| 14 | 107501GT | PLATE,WEARPAD MOUNT,LH | 2 |  | 145 |
| 15 | 106797GT | WEAR PAD,7X3X.75 W/INSERT | 4 |  | 145 |
| 16 | 88022GT | WEAR PAD,7 X 3 X 1 W/NUTS | 2 |  | 145 |
| 17 | 106539GT | WEAR PAD,7 X 2 X.75 W/NUTS | 4 |  | 145 |
| 18 | 107661GT | SCREW,FHS,3/8-16 X .625,ZINC |  |  | 145 |
| 19 | 107503GT | PLATE,WEARPAD MOUNT | 2 |  | 145 |
| 20 | 106796GT | WEAR PAD,7 X 3 X 0.5 W/INSERT | 4 |  | 145 |
| 21 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 145 |
| 22 | 107823GT | ROLLER, NYLON | 1 |  | 145 |
| 23 | 110756PGT | FORMING, ROLLER #3, PAINTED | 1 |  | 145 |
| 24 | 106729GT | WELDMENT, GUIDE BRKT | 1 |  | 145 |

#### 505.1 Secondary Boom Tube 4  (p. 146)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 227780GT | ASSY,RISER BOOM #4 | 1 | **includes item 18; to SN 161** | 147 |
| 1- | 119849GT | ASSEMBLY,RISER BOOM #4\*\*\* | 1 | **includes item 18; from SN 162** | 147 |
| 2 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 2 |  | 147 |
| 3 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA | as needed |  | 147 |
| 4 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 147 |
| 5 | 6021GT | WASHER, LOCK, .375 |  |  | 147 |
| 6 | 6605GT | SCREW,HHC,3/8-16 X 3.5,GR5 |  |  | 147 |
| 7 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 147 |
| 8 | 106281PGT | BRACKET,RISER CYL MOUNT PAINTD | 2 |  | 147 |
| 9 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 147 |
| 10 | 28487GT | SCREW,BHHS,3/8-16 X 1 |  |  | 147 |
| 11 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 147 |
| 12 | 119248PGT | FORMING,RISER EXT L/S RAMP,PTD | 1 | **Units before SN 333 must also purchase part 119247P for first time replacement (refer to; 502.1)** | 147 |
| 13 | 88648GT | WEAR PAD,7X3X.625 W/NUTS | 4 |  | 147 |
| 14 | 106797GT | WEAR PAD,7X3X.75 W/INSERT | 4 |  | 147 |
| 15 | 107501GT | PLATE,WEARPAD MOUNT,LH | 2 |  | 147 |
| 16 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 147 |
| 17 | 61952PGT | COVER,SECONDARY RISER | 1 |  | 147 |
| 18 | 27698GT | BEARING,2.50IDX2.75ODX2.00L | 2 |  | 147 |
| 19 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 147 |
| 20 | 107818GT | WELDMENT, ROLLER #4 | 1 |  | 147 |
| 21 | 107823GT | ROLLER, NYLON | 1 |  | 147 |
| 22 | 107832GT | SPACER, ROLLER | 1 |  | 147 |
| 23 | 107835GT | SCREW,HHC,3/8-16X7.5 |  |  | 147 |
| 24 | 29868GT | SPRING CLIP,3/8-16,.05-.20X.73,ZAG |  |  | 147 |
| 25 | 106571GT | WELDMENT,CABLE STAY | 1 |  | 147 |

#### 506.1 Secondary Boom Extension Cylinders  (p. 148)

Secondary extension cylinders #1/#2/#3 (101507GT/101508GT/101509GT) with seal kit 101510GT; hose-guard kit 236284GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 236284GT | ASSY,HOSE GUARD,RISER PULLTUBE |  | hose guard kit includes items 8 and 14 with fastners | 149 |
| 1 |  | Ref. Secondary Pull Tube Assembly |  | (refer to 509.1) | 149 |
| 2 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 149 |
| 3 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 149 |
| 4 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 149 |
| 5 | 106843GT | U-BOLT,1/4-20,SQUARE 3.5X3.5 |  |  | 149 |
| 6 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 149 |
| 7 | 106772GT | PLATE,HOSE GUIDE | 1 |  | 149 |
| 8 | 236283GT | PLATE,HOSE GUARD CLAMP | 1 | part of hose guard kit 236284 | 149 |
| 9 | 61961GT | WELDMNT,RISER CABLE TRACK TRAY | 1 | **to SN 161** | 149 |
| 9- | 107847GT | WELDMENT,TRAY CABLETRACK\*\*\* |  | **from SN 162** | 149 |
| 10 | 101507GT | CYLINDER,SECONDARY EXTEND #1 | 1 |  | 149 |
| 10- | 101510GT | SEAL KIT |  |  | 149 |
| 10- | 106848GT | VALVE,CB.CBGA-LHN@2500 PSI\*\*\* |  |  | 149 |
| 10- | 106847GT | VALVE,CB.CAGK-LHN@2500 PSI\*\*\* |  |  | 149 |
| 10- | 74872GT | VALVE,COUNTERBALANCE 3000 PSI\* |  |  | 149 |
| 10- | 107716GT | SEAL KIT,CB VALVE\*\*\* |  | for 106847 and 106848 | 149 |
| 10- | 43018GT | SEAL KIT (39345) |  | for 74872 | 149 |
| 11 | 101508GT | CYLINDER,SECONDARY EXTEND #2 | 1 |  | 149 |
| 11- | 101510GT | SEAL KIT |  |  | 149 |
| 11- | 106848GT | VALVE,CB.CBGA-LHN@2500 PSI\*\*\* |  |  | 149 |
| 11- | 106847GT | VALVE,CB.CAGK-LHN@2500 PSI\*\*\* |  |  | 149 |
| 11- | 107716GT | SEAL KIT,CB VALVE\*\*\* |  | for 106847 and 106848 | 149 |
| 12 | 101509GT | CYLINDER,SECONDARY EXTEND #3 | 1 |  | 149 |
| 12- | 101510GT | SEAL KIT |  |  | 149 |
| 12- | 106848GT | VALVE,CB.CBGA-LHN@2500 PSI\*\*\* |  |  | 149 |
| 12- | 107716GT | SEAL KIT,CB VALVE\*\*\* |  | for 106848 | 149 |
| 13 | 6878GT | BOLT,CARRIAGE,1/4-20 X .75,G2 | 2 |  | 149 |
| 14 | 236282GT | FORMING,HOSE GUARD | 1 | part of hose guard kit 236284 | 151 |
| 15 | 101919GT | WEAR PAD,RISER EXTENSION CYL. | 1 |  | 151 |
| 16 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 151 |
| 17 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 151 |
| 18 | 5224GT | SCREW,HHC,3/8-16 X 2 |  |  | 151 |
| 19 | 101918GT | WEAR PAD,RISER EXTENSION CYL. | 2 |  | 151 |

#### 507.1 Secondary Boom Cable Track and Pull Tube  (p. 152)

Secondary cable track 61853GT (57 links) to SN 1853, 236168GT from SN 1854 with different end-bracket kits; four-link repair section 107717GT, pin & ring kit 107719GT, carrier service kit 107802GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 61960GT | WELDMENT,LONG GUIDE TUBE | 1 | **to SN 161** | 153 |
| 1- | 107848GT | WELDMENT,TRAY CABLETRACK\*\*\* |  | **from SN 162 to 1853** | 153 |
| 1- | 217431GT | WELDMENT,TRAY CABLETRACK\*\*\* |  | **from SN 1854** | 153 |
| 2 | 61961GT | WELDMNT,RISER CABLE TRACK TRAY | 1 | **to SN 161** | 153 |
| 2- | 107847GT | WELDMENT,TRAY CABLETRACK\*\*\* |  | **from SN 162** | 153 |
| 3 | 61853GT | CABLE TRACK,STEEL 57 LINKS | 1 | **to SN 1853** | 153 |
| 3A- | 236168GT | CABLE TRACK,STEEL 57 LINKS\*\*\* |  | **from SN 1854** | 153 |
| 3B- | 107718GT | KIT,END MOUNTING BRACKET |  | used with cable track 61853 only | 153 |
| 3C- | 237229GT | MOVING END, BRACKET KIT |  | used with cable track 236168 only | 153 |
| 3D- | 237230GT | FIXED END, BRACKET KIT |  | used with cable track 236168 only | 153 |
| 3E- | 107717GT | ASSY,FOUR LINK CABLE TRACK\*\*\* |  |  | 153 |
| 3F- | 107719GT | KIT,PIN & RING\*\*\* |  |  | 153 |
| 3G- | 146019GT | CROSS BAR,ALUM,WITH PEM NUTS |  |  | 153 |
| 3H- | 146020GT | CROSS BAR,ALUM,WITH HOLES |  |  | 153 |
| 3I- | 107802GT | KIT,SERVICE PART RISER CARRIER |  |  | 153 |
| 4 | 119106GT | GUIDE,RISER LINK | 2 |  | 153 |
| 4- | 75041GT | SCREW,PHILLIPS,PHM,10-32 X 1 |  |  | 153 |
| 4- | 6178GT | NUT, NYLOCK, 10-32 |  |  | 153 |
| 4- | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 153 |

#### 508.1 Secondary Boom Cable and Hose Clamps, Front View  (p. 154)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 155 |
| 2 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 155 |
| 3 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 155 |
| 4 | 101106GT | CLAMP ASSY.OPTIONS BLOCK W/NUT | 1 |  | 155 |
| 5 | 101788GT | CABLE STAY | 2 |  | 155 |
| 6 | 101787GT | CABLE STAY,TOP | 2 |  | 155 |
| 7 | 101786GT | CABLE STAY,TOP | 2 |  | 155 |
| 8 | 77036GT | SCREW,HHC,1/4-20 X 5.50,G5,CLZ |  |  | 155 |
| 9 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 155 |
| 10 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 155 |
| 11 | 106853GT | CLAMP,RISER CABLE,OUTSIDE | 1 |  | 155 |
| 12 |  | Ref. Cable Track (refer to 507.1) |  |  | 155 |

#### 509.1 Secondary Boom Cable and Hose Clamps, Rear View  (p. 156)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 77036GT | SCREW,HHC,1/4-20 X 5.50,G5,CLZ |  |  | 157 |
| 2 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 157 |
| 3 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 157 |
| 4 | 101786GT | CABLE STAY,TOP | 1 |  | 157 |
| 5 | 101787GT | CABLE STAY,TOP | 1 |  | 157 |
| 6 | 101788GT | CABLE STAY | 1 |  | 157 |
| 7 | 101106GT | CLAMP ASSY.OPTIONS BLOCK W/NUT | 1 |  | 157 |
| 8 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 157 |
| 9 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 157 |
| 10 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 157 |
| 11 | 106862GT | CLAMP,RISER CABLE TRACK,INSIDE | 1 |  | 157 |
| 12 | 106853GT | CLAMP,RISER CABLE,OUTSIDE | 1 |  | 157 |
| 13 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 157 |
| 14 | 12011GT | SCREW,BHHS,1/4-20 X .5,Y/ZINC |  |  | 157 |
| 15 | 56093GT | WEAR PAD ROUND | 1 |  | 157 |

#### 510.1 Primary Boom Link, Lever and Lift Cylinder (to SN 359)  (p. 158)

Primary lift cylinder 61814GT with seal kit 106378GT; primary link 106552GT and levers 106553GT; pins listed by diameter x length. Hose/cable cover 107521GT (100 inch).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 107521GT | COVER,HOSE & CABLE, 100 INCH |  | protects hoses between the primary and secondary booms | 159 |
| 1 | 33557GT | SCREW,HHC,3/4-10 X 2.00,GR5 |  |  | 159 |
| 2 | 61341GT | ROD END,.75 X 5.00 | 1 |  | 159 |
| 3 | 94810GT | PIN,3.00DIAX11.50LG,1HOLE | 1 |  | 159 |
| 4 | 106574GT | CABLE TRACK,STEEL 11 LINKS | 1 |  | 159 |
| 5 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 159 |
| 6 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 159 |
| 7 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 159 |
| 8 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 159 |
| 9 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 159 |
| 10 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 159 |
| 11 | 106580PGT | BRACKET,RISER CYL MOUNT PAINTD | 1 |  | 159 |
| 12 | 61814GT | CYLINDER,PRIMARY BOOM LIFT | 1 |  | 159 |
| 12- | 88279GT | BEARING,3.00IDX3.50ODX1.50L |  |  | 159 |
| 12- | 101562GT | BEARING,3.25IDX3.75ODX2.00L |  |  | 159 |
| 12- | 33428GT | VALVE,COUNTERBALANCE |  |  | 159 |
| 12- | 106378GT | SEAL KIT, Z135 LIFT (61814) |  |  | 159 |
| 13 |  | Ref. Cable Track Support (refer to 512.1) |  |  | 159 |
| 14 | 94811GT | PIN,3.25DIAX19.00LG,2RING | 1 |  | 159 |
| 15 | 1253814GT | SNAP RING,EXTERNAL,3.25,ZAG | 2 |  | 159 |
| 16 | 36294GT | SCREW,HHC,1/4-20 X 2.75 |  |  | 159 |
| 17 | 106552GT | LINK ASSEMBLY,PRIMARY BOOM | 1 |  | 159 |
| 17- | 101566GT | BEARING,FL,2.50IDX2.75ODX1.36L |  |  | 159 |
| 17- | 101567GT | BEARING,3.25IDX3.5ODX1.50L |  |  | 159 |
| 18 | 94813GT | PIN,2.50DIAX19.00LG,1HOLE | 1 |  | 159 |
| 19 | 8177GT | SCREW,HHC,1/2-13 X 1.5 |  |  | 159 |
| 20 | 107676PGT | PLATE, PIN RETAINER, PAINTED | 1 |  | 159 |
| 20- | 119151GT | SERV KIT,#4RISER-TO-LINK BANJO |  | includes retainer plate and Items 29 and 30 | 159 |
| 21 | 101110GT | CABLE STAY | 1 |  | 161 |
| 22 | 101315GT | CABLE STAY | 1 |  | 161 |
| 23 | 101106GT | CLAMP ASSY.OPTIONS BLOCK W/NUT | 1 |  | 161 |
| 24 | 106553GT | LEVER ASSEMBLY,PRIMARY BOOM | 2 |  | 161 |
| 24- | 101566GT | BEARING,FL,2.50IDX2.75ODX1.36L |  |  | 161 |
| 25 |  | Ref. Angle Sensor Pivot Pin (refer to 511.1) |  |  | 161 |
| 26 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 161 |
| 27 | 825019GT | ROD END, .375X3.69, ZAG |  |  | 161 |
| 28 | 94809GT | PIN,2.50DIAX19.56LG,2HOLE | 1 |  | 161 |
| 29 | 42360GT | SCREW,SHC,1/2-13 X 4 ZINC |  |  | 161 |
| 30 | 6198GT | NUT, NYLOCK, 1/2-13 |  |  | 161 |

#### 510.2 Primary Boom Link, Lever and Lift Cylinder (from SN 360)  (p. 162)

From SN 360 the link pin changes to 119108GT (2.50 x 18.68, 2-ring) with washers 29746GT and snap rings 825760GT (the retainer plate/banjo kit of 510.1 is dropped).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 107521GT | COVER,HOSE & CABLE, 100 INCH |  | protects hoses between the primary and secondary booms | 163 |
| 1 | 33557GT | SCREW,HHC,3/4-10 X 2.00,GR5 |  |  | 163 |
| 2 | 61341GT | ROD END,.75 X 5.00 | 1 |  | 163 |
| 3 | 94810GT | PIN,3.00DIAX11.50LG,1HOLE | 1 |  | 163 |
| 4 | 106574GT | CABLE TRACK,STEEL 11 LINKS | 1 |  | 163 |
| 5 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 163 |
| 6 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 163 |
| 7 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 163 |
| 8 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 163 |
| 9 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 163 |
| 10 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 163 |
| 11 | 106580PGT | BRACKET,RISER CYL MOUNT PAINTD | 1 |  | 163 |
| 12 | 61814GT | CYLINDER,PRIMARY BOOM LIFT | 1 |  | 163 |
| 12- | 88279GT | BEARING,3.00IDX3.50ODX1.50L |  |  | 163 |
| 12- | 101562GT | BEARING,3.25IDX3.75ODX2.00L |  |  | 163 |
| 12- | 33428GT | VALVE,COUNTERBALANCE | 2 |  | 163 |
| 12- | 106378GT | SEAL KIT, Z135 LIFT (61814) |  |  | 163 |
| 13 |  | Ref. Cable Track Support (refer to 512.1) |  |  | 163 |
| 14 | 94811GT | PIN,3.25DIAX19.00LG,2RING | 1 |  | 163 |
| 15 | 1253814GT | SNAP RING,EXTERNAL,3.25,ZAG | 2 |  | 163 |
| 16 | 36294GT | SCREW,HHC,1/4-20 X 2.75 |  |  | 163 |
| 17 | 106552GT | LINK ASSEMBLY,PRIMARY BOOM | 1 |  | 163 |
| 17- | 101566GT | BEARING,FL,2.50IDX2.75ODX1.36L |  |  | 163 |
| 17- | 101567GT | BEARING,3.25IDX3.5ODX1.50L |  |  | 163 |
| 18 | 119108GT | PIN,2.50DIAX18.68LG,2RING | 1 |  | 163 |
| 19 | 29746GT | WASHER,FLAT,2.5 X 4 X .062 | 2 |  | 163 |
| 20 | 825760GT | SNAP RING,EXTERNAL,2.50,ZAG | 2 |  | 163 |
| 21 | 101110GT | CABLE STAY | 1 |  | 163 |
| 22 | 101315GT | CABLE STAY | 1 |  | 165 |
| 23 | 101106GT | CLAMP ASSY.OPTIONS BLOCK W/NUT | 1 |  | 165 |
| 24 | 106553GT | LEVER ASSEMBLY,PRIMARY BOOM | 2 |  | 165 |
| 24- | 101566GT | BEARING,FL,2.50IDX2.75ODX1.36L |  |  | 165 |
| 25 |  | Ref. Angle Sensor Pivot Pin (refer to 511.1) |  |  | 165 |
| 26 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 165 |
| 27 | 825019GT | ROD END, .375X3.69, ZAG |  |  | 165 |
| 28 | 94809GT | PIN,2.50DIAX19.56LG,2HOLE | 1 |  | 165 |

#### 511.1 Primary Boom Angle Sensor and Retract Limit Switch (to SN 1853)  (p. 166)

Primary boom angle sensor to SN 1853: original 94980 not available; first replacement is kit 217246GT (refer to 511.2).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 167 |
| 2 | 6889GT | NUT,LP NYLOCK,1/4-20 |  |  | 167 |
| 3 | 107838GT | PRIMARY BOOM COVER W/DECAL | 1 | USA, Canada, Australia | 167 |
| 3- | 106277PGT | COVER,PRIMARY BOOM,PAINTED |  | Europe, Asia, South America | 167 |
| 4 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 167 |
| 5 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 167 |
| 6 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 167 |
| 7 | 101715GT | WELDMENT,PRI.ROTARY SENSOR PIN | 1 |  | 167 |
| 8 | 101599GT | KEY,BALL POINT HEX | 1 |  | 167 |
| 9 | 22541GT | SCREW,RHM,10-32 X 1.5 |  |  | 167 |
| 10 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 167 |
| 11 | 10597GT | SCREW,HHC,1/2-13 X 1.25 GR5 |  |  | 167 |
| 12 | 6033GT | WASHER,LOCK,0.5" |  |  | 167 |
| 13 | 13066GT | WASHER,FLAT,.5 HARDENED |  |  | 167 |
| 14 |  | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | (calibration required after replacement). Older sensor part 94980 is no longer available at; this location. For first time replacement, order kit 217246 (refer to 511.2) | 167 |
| 14- | 217246GT | KIT,Z135 PRIMARY ANGLE SEN. |  | (refer to 511.2) | 167 |
| 15 | 101710GT | MACH,PRI.ROTARY SENSOR | 1 |  | 167 |
| 16 | 94814GT | PIN,2.25 DIA X 5.10LG,THREADED | 1 |  | 167 |
| 16- | 1256267GT | ROD END,.5 X 3.75,ZAG |  |  | 167 |
| 16- | 1256843GT | SCREW,HHC,1/2-13X1.25,8,ZAG |  |  | 167 |
| 17 | 1257080GT | WASHER,FLAT,2.27X3.5X.06,ZAG | 2 |  | 167 |
| 18 | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 |  |  | 167 |
| 19 | 110913GT | SWITCH ASSY,LIMIT LSP1RO | 1 |  | 167 |
| 19- | 110771-42163GT | SWITCH,LIMIT W/ROLLER NO/NC |  |  | 167 |
| 19- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 29 |  | 167 |
| 19- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 167 |
| 19- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 167 |
| 19- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 167 |

#### 511.2 Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854)  (p. 168)

Primary boom angle sensor from SN 1854: complete assembly 215728GT, sensor 216061GT (matched with magnet, calibrate after install).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 |  |  | 169 |
| 2 | 110913GT | SWITCH ASSY,LIMIT LSP1RO | 1 |  | 169 |
| 2- | 110771-42163GT | SWITCH,LIMIT W/ROLLER NO/NC |  |  | 169 |
| 2- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 29 | inches | 169 |
| 2- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 169 |
| 2- | 60443GT | LOCK, RECEP 4WAY, 14-18GA |  |  | 169 |
| 2- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 169 |
| 3 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 169 |
| 4 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 169 |
| 5 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 169 |
| 6 | 106277PGT | COVER,PRIMARY BOOM,PAINTED |  |  | 169 |
| 7 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 169 |
| 8 | 233118GT | WLDT, SENSOR ROTATOR #2 |  |  | 169 |
| 9 | 218757GT | WLDT., PRIMARY SENSOR PIN |  |  | 169 |
| 10 | 215728GT | ASSY,ANGLE SEN.,Z135 PRIMARY |  | (Complete) Includes items 14 to 22; Calibration required after replacement | 169 |
| 11 | 10597GT | SCREW,HHC,1/2-13 X 1.25 GR5 |  |  | 169 |
| 12 | 6033GT | WASHER,LOCK,0.5" |  |  | 169 |
| 13 | 217235GT | SCREW,SHS,3/4X1.5X5/8-11,ZAG |  |  | 169 |
| 14 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 |  |  | 169 |
| 15 | 226489GT | MACHINED, PRIMARY SENSOR BASE |  |  | 169 |
| 16 | 226491GT | MACHINED, ANGLE SENSOR RACE |  |  | 169 |
| 17 | 216061GT | SENSOR, ANGLE, 180 DEG, CW |  | Sensor and magnet are matched and must be replaced at the same time. Machine; calibration is required after installation | 169 |
| 18 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB |  |  | 169 |
| 19 | 226492GT | MACHINED, ANGLE SENSOR HOLDER |  |  | 169 |
| 20 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 |  |  | 169 |
| 21 | 233116GT | MACHINED, SENSOR ARM |  |  | 169 |
| 22 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB |  |  | 169 |
| 23 | 94814GT | PIN,2.25 DIA X 5.10LG,THREADED | 1 |  | 169 |
| 24 | 1257080GT | WASHER,FLAT,2.27X3.5X.06,ZAG | 2 |  | 171 |

#### 512.1 Primary Boom Cable Track  (p. 172)

Primary cable track 61852GT (27 links) with four-link repair section 77896GT, moving-end bracket 102216GT, pin & ring kit 106154GT, rollers 58308GT/58309GT; extra clamp stack from SN 379.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 61852GT | CABLE TRACK,STEEL 27 LINKS | 1 |  | 173 |
| 1- | 77896GT | ASSY,FOUR LINK CABLE TRACK\*\*\* |  |  | 173 |
| 1- | 102216GT | BRACKET,CABLE TRACK,MOVING END |  |  | 173 |
| 1- | 106154GT | KIT,PIN & RING\*\*\* |  |  | 173 |
| 1- | 58308GT | ROLLER,ALUM TUBE,ST.TRK\*\*\* |  |  | 173 |
| 1- | 58309GT | ROLLER,POLY,STEEL TRACK\*\*\* |  |  | 173 |
| 2 | 101098GT | WELDMENT,PRIMARY PULL TUBE | 1 |  | 173 |
| 3 | 33681GT | SCREW,HHC,3/8-16 X .625 |  |  | 173 |
| 4 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 173 |
| 5 | 88019PGT | FORMING,LIMIT SWITCH MOUNT | 1 |  | 173 |
| 6 | 110914GT | SWITCH ASSY,LIMIT LSS1EO | 1 |  | 173 |
| 6- | 110771-44163GT | SWITCH LIMIT W/RLLR NO/NC GOLD |  |  | 173 |
| 6- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 340 |  | 173 |
| 6- | 119065GT | CONN, RECEP, 2 WAY, DEUTSCH, DT |  |  | 173 |
| 6- | 60439GT | CONN, RECEP, 2 WAY, DEUTSCH, DT, LOCK |  |  | 173 |
| 6- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 173 |
| 7 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 173 |
| 8 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 173 |
| 9 | 81342GT | WEAR PAD,5.5 X 1.75 X .5 | 1 |  | 173 |
| 10 | 81777GT | SCREW,HHC,3/8-16 X 7 |  |  | 173 |
| 11 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 173 |
| 12 | 107868PGT | PLATE,REINF.CLAMP STACK,PTD | 4 |  | 173 |
| 13 | 101110GT | CABLE STAY | 4 |  | 173 |
| 14 | 101315GT | CABLE STAY | 4 |  | 173 |
| 15 | 36294GT | SCREW,HHC,1/4-20 X 2.75 |  |  | 173 |
| 16 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 173 |
| 17 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 173 |
| 18 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 173 |
| 19 | 42079GT | PIN,COTTER,.156 X 2.5 |  |  | 175 |
| 20 | 81341GT | WEAR PAD,CABLE TRACK PULL TUBE | 1 |  | 175 |
| 21 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 175 |
| 22 | 94592GT | WELDMENT,CABLE TRACK SUPPORT | 1 |  | 175 |
| 23 | 42571GT | SCREW,HHC,1/4-20 X 3.25 |  |  | 175 |
| 24 | 11413GT | SCREW,HHC,1/4-20 X 4 |  |  | 175 |
| 25 | 70264GT | CABLE TRACK GUIDE TRIANGLE | 4 |  | 175 |
| 25- | 39317GT | STOP PLATFORM ROLLER |  |  | 175 |
| 25- | 87085GT | RIVET,ALUM,P,.188 X .25 |  |  | 175 |
| 26 | 12343GT | SCREW,HHC,1/4-20 X 3 |  |  | 175 |
| 27 | 101315GT | CABLE STAY | 1 | **from SN 379** | 175 |
| 28 | 101110GT | CABLE STAY | 1 | **from SN 379** | 175 |
| 29 | 107868PGT | PLATE,REINF.CLAMP STACK,PTD | 1 | **from SN 379** | 175 |

#### 513.1 Primary Boom Bearings and Wear Pads  (p. 176)

Primary boom assembly 107762GT (includes items 7, 8, 13) and primary extend cylinder 61815GT with seal kit 106538GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 34125GT | WEAR PAD,5 X 1.5 X .75 W/NUTS | 6 |  | 177 |
| 2 | 107762GT | ASSY,PRIMARY BOOM W/DECAL\*\*\* | 1 | includes items 7, 8, and 13 | 177 |
| 3 | 101880PGT | PLATE,BLOCK SADDLE CAP PNTD | 2 |  | 177 |
| 4 | 6326GT | SCREW,HHC,3/8-16 X 3 |  |  | 177 |
| 5 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 177 |
| 6 | 61815GT | CYLINDER,PRIMARY BOOM EXTEND | 1 |  | 177 |
| 6- | 106538GT | SEAL KIT,Z135 PEXT (61815)\*\*\* |  |  | 177 |
| 6- | 88667GT | VALVE,CB.CBCA-LHN@1500PSI\*\*\* |  |  | 177 |
| 6- | 74872GT | VALVE,COUNTERBALANCE 3000 PSI\* |  |  | 177 |
| 6- | 60239GT | WEAR PAD,7 X 3 X.625 W/INSERT | 4 |  | 177 |
| 7 | 101561GT | BEARING,2.25IDX2.50ODX2.25L | 2 |  | 177 |
| 8 | 101559GT | BEARING,FL,2.50IDX2.75ODX1.61L | 2 |  | 177 |
| 9 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 177 |
| 10 | 6021GT | WASHER, LOCK, .375 |  |  | 177 |
| 11 | 50245GT | WEAR PAD,7 X 3 X.75 W/NUTS | 2 |  | 177 |
| 12 | 49857GT | SCREW,HHC,3/8-16 X .88,GRD 8 |  |  | 177 |
| 13 | 39640GT | PLUG,NYLON 2.50 BLACK DOMED | 1 |  | 177 |

#### 514.1 Primary Extension Boom  (p. 178)

Primary extension boom assembly 119847GT; jib filtration field kit 1268830GT (recommended; includes items 11, 12, 16-18).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 179 |
| 2 | 6356GT | WASHER, LOCK, .25 |  |  | 179 |
| 3 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 179 |
| 4 | 106081PGT | COVER,TOP,PRIMARY EXT. PAINTED | 1 |  | 179 |
| 5 | 101560GT | BEARING,2.00IDX2.25ODX1.63L | 2 |  | 179 |
| 6 | 106165GT | FORMING,CABLE GUIDE,PRIMARY | 1 |  | 179 |
| 7 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 179 |
| 8 | 74254GT | SCREW,HHC,1/4-20 X 4.5 |  |  | 179 |
| 9 | 4266GT | SCREW,HHC,1/4-20 X 2 |  |  | 179 |
| 10 | 106135GT | CLAMP,PRIMARY | 1 |  | 179 |
| 11 | 60334GT | FILTER ASSY,HIGH PRESS SAE-12\* |  | (Part of kit 1268830) | 179 |
| 12 | 1268499GT | FORMING, FILTER BRACKET |  | (Part of kit 1268830) | 179 |
| 13 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 | 2 |  | 179 |
| 14 | 81347GT | WELDMENT,TRACK PULL TUBE PIVOT | 1 |  | 179 |
| 15 | 42079GT | PIN,COTTER,.156 X 2.5 | 2 |  | 179 |
| 16 | 824092GT | SCREW, HHF, 3/8-16 X 1.5, 8, ZAG |  | (before instaling kit 1268830) | 179 |
| 16- | 824029GT | NUT, TL FLG, 3/8-16, G, ZAG |  | (Part of kit 1268830) | 179 |
| 17 | 4828GT | NUT, NYLOCK, 3/8-16 |  | (before instaling kit 1268830) | 179 |
| 17- | 824093GT | SCREW, HHF, 3/8-16 X 1.75, 8, ZAG |  | (Part of kit 1268830) | 179 |
| 18 | 1256857GT | SCREW,HHF,3/8-16X.625,8,ZAG |  | (Part of kit 1268830) | 179 |
| 19 | 94806GT | PIN,2.00DIAX8.77LG,2RING | 1 |  | 179 |
| 20 | 1253815GT | SNAP RING,EXTERNAL,2.00,ZAG | 2 |  | 179 |
| 21 | 88345GT | PIN,1.25DIAX8.26LG,2RING | 1 |  | 179 |
| 22 | 824164GT | SNAP RING, EXTERNAL,1.25, ZAG | 1 |  | 179 |
| 23 | 88648GT | WEAR PAD,7X3X.625 W/NUTS | 2 |  | 179 |
| 24 | 60304GT | SHIM,WEAR PAD,7 X 3,12GA |  | as-needed | 179 |
| 25 | 107586GT | WEAR PAD,7X3X.50 W/NUTS | 4 |  | 179 |
| 26 | 824068GT | SCREW,HHC,3/8-16X1.25,8,ZAG |  |  | 179 |
| 27 | 48425GT | NUT,FLG-LRG,3/8-16,YZ |  |  | 181 |
| 28 | 1256109GT | SCREW,HHC,3/8-16X.75,8,ZAG |  |  | 181 |
| 29 | 60840GT | SHIM,WEAR PAD,7 X 3,16GA |  | as-needed | 181 |
| 30 | 824067GT | SCREW, HHC, 3/8-16 X 1, 8, ZAG |  |  | 181 |
| 31 | 119847GT | ASSEMBLY,PRIMARY EXT.BOOM\*\*\* | 1 | Includes item 5 | 181 |
| 32 | 1268830GT | KIT, JIB FILTRATION | 1 | Recommended field kit (including items 11, 12, and 16-18). Refer to 713.1 for an extra; added hose | 181 |

#### 515.1 Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (to SN 1853)  (p. 182)

Bellcrank (to SN 1853): bellcrank level cylinder 106519GT, jib lift cylinder 61817GT, angle sensor kits 217313GT (from SN 659) / 824589GT (SN 327-658) / 824692GT (to SN 326). Hose/cable cover 107522GT (70 inch).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 107522GT | COVER,HOSE & CABLE, 70 INCH |  | protects hoses between the primary and jib booms | 183 |
| 1 |  | Ref. Jib Boom Cable Track (refer to 516.1) |  |  | 183 |
| 2 | 61920PGT | Jib Boom Bellcrank | 2 |  | 183 |
| 3 | 106923GT | GROMMET,RUBBER .38X1.38X1.0 | 2 |  | 183 |
| 4 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 183 |
| 5 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 183 |
| 6 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 183 |
| 7 | 106519GT | CYLINDER,BELLCRANK LEVELING | 1 |  | 183 |
| 7- | 106532GT | SEAL KIT,CYL.106519 |  |  | 183 |
| 7- | 33428GT | VALVE,COUNTERBALANCE |  |  | 183 |
| 7- | 42014GT | BEARING,2.00IDX2.25ODX2.00L |  |  | 183 |
| 8 | 101713GT | WELD.BCRANK ROTARY SENSOR PIN | 1 |  | 183 |
| 8B | 1256864GT | WASHER,FLAT,2.01X3.5X.06,ZAG |  | (not shown) install between primary to jib | 183 |
| 9 | 101599GT | KEY,BALL POINT HEX | 1 |  | 183 |
| 10 | 101709GT | MACH,BELLCRANK ROT SENSOR BRKT | 1 |  | 183 |
| 10- | 128358GT | MACH,BELLCRANK ROT SENSOR BRKT |  |  | 183 |
| 11 | 22541GT | SCREW,RHM,10-32 X 1.5 |  |  | 183 |
| 12 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 183 |
| 13 | 106688GT | WELDMENT,PROTECTION BAR | 1 |  | 183 |
| 14 |  | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | (calibration required after replacement). Older sensor part 94980 is no longer available. For; first time replacement order kit 217313, 824589, or 824692 (refer to 515.2) | 183 |
| 14- | 217313GT | KIT,Z135 BELL CR ANGLE SEN. |  | **from SN 659** | 183 |
| 14- | 824589GT | KIT,Z135 BELL CR. ANGLE SEN |  | **from SN 327 to 658** | 183 |
| 14- | 824692GT | KIT,Z135 BELL CR. ANGLE SEN. |  | **to SN 326** | 183 |
| 15 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 183 |
| 16 | 6021GT | WASHER, LOCK, .375 |  |  | 183 |
| 17 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 183 |
| 18 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 183 |
| 19 | 94804GT | PIN,2.00DIAX17.06LG,2HOLE | 1 |  | 183 |
| 20 | 94803GT | PIN,1.50DIAX17.06LG,2HOLE | 1 |  | 185 |
| 21 |  | Ref. Jib Boom Manifold (refer to 704.1) |  |  | 185 |
| 22 | 106074GT | BRACKET,MANIFOLD,EXT.BOOM | 1 |  | 185 |
| 23 | 94195GT | SCREW,HHC,3/8-16 X .75,GR 8 |  |  | 185 |
| 24 | 61817GT | CYLINDER,LIFT,JIB BOOM | 1 |  | 185 |
| 24- | 94203GT | SEAL KIT,CYL |  |  | 185 |
| 24- | 61602GT | VALVE,COUNTERBAL.CBBB-LHN@3500 |  |  | 185 |
| 24- | 88280GT | BEARING,1.5IDX1.75ODX0.75L |  |  | 185 |
| 25 | 47666GT | PIN,1.50DIAX9.13LG,1HOLE | 1 |  | 185 |
| 26 |  | Ref. Jib Cable Track Pull Tube (refer to 516.1) |  |  | 185 |
| 27 | 106674GT | JIB PRIMARY TUBE ASSEMBLY\*\*\* | 1 | includes bearings | 185 |
| 28 | 119527GT | FORMING,BCRANK ROTATE SW CVR | 1 |  | 185 |
| 28- | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 185 |
| 28- | 6356GT | WASHER, LOCK, .25 |  |  | 185 |
| 28- | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 185 |
| 29 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 185 |
| 29- | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 185 |
| 30 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 185 |
| 30- | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 185 |
| 31 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 185 |
| 31- | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 185 |
| 32 | 825019GT | ROD END, .375X3.69, ZAG |  |  | 185 |

#### 515.2 Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (from SN 1854)  (p. 186)

Bellcrank from SN 1854 with sensor assembly 217293GT / sensor 216061GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 107522GT | COVER,HOSE & CABLE, 70 INCH |  | Protects hoses between the primary and jib booms | 187 |
| 1 |  | Ref. Jib Boom Cable Track |  | (Refer to 516.1) | 187 |
| 2 | 61920PGT | Jib Boom Bellcrank | 2 |  | 187 |
| 3 | 106923GT | GROMMET,RUBBER .38X1.38X1.0 | 2 |  | 187 |
| 4 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 187 |
| 5 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 187 |
| 6 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 187 |
| 7 | 106519GT | CYLINDER,BELLCRANK LEVELING | 1 |  | 187 |
| 7- | 106532GT | SEAL KIT,CYL.106519 |  |  | 187 |
| 7- | 33428GT | VALVE,COUNTERBALANCE |  |  | 187 |
| 7- | 42014GT | BEARING,2.00IDX2.25ODX2.00L |  |  | 187 |
| 8 | 101713GT | WELD.BCRANK ROTARY SENSOR PIN | 1 |  | 187 |
| 8B | 1256864GT | WASHER,FLAT,2.01X3.5X.06,ZAG |  | (not shown) install between primary to jib | 187 |
| 9 | 233118GT | WLDT, SENSOR ROTATOR #2 |  |  | 187 |
| 10 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 187 |
| 11 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 187 |
| 12 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 187 |
| 13 | 217293GT | ASSY,ANGLE SEN.,Z135 BELL CR |  | (Complete) Includes items 25 to 33; calibration required after replacement, (included in kits; 217313, 824589 and 824692, refer to 515.1) | 187 |
| 14 | 217234GT | SCREW,SHS,3/4X1.25X5/8-11,ZAG |  |  | 187 |
| 15 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 187 |
| 16 | 6021GT | WASHER, LOCK, .375 |  |  | 187 |
| 17 | 106688GT | WELDMENT,PROTECTION BAR | 1 |  | 187 |
| 18 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 187 |
| 19 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 187 |
| 20 | 94804GT | PIN,2.00DIAX17.06LG,2HOLE | 1 |  | 187 |
| 21 | 94803GT | PIN,1.50DIAX17.06LG,2HOLE | 1 |  | 187 |
| 22 |  | Ref. Jib Boom Manifold |  | (Refer to 704.1) | 187 |
| 23 | 106074GT | BRACKET,MANIFOLD,EXT.BOOM | 1 |  | 187 |
| 24 | 94195GT | SCREW,HHC,3/8-16 X .75,GR 8 |  |  | 189 |
| 25 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 |  |  | 189 |
| 26 | 226487GT | MACHINED, BELL CR SEN. BASE |  |  | 189 |
| 27 | 226491GT | MACHINED, ANGLE SENSOR RACE |  |  | 189 |
| 28 | 216061GT | SENSOR, ANGLE, 180 DEG, CW |  | Sensor and magnet are matched and must be replaced at the same time. Machine; calibration is required after installation | 189 |
| 29 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB |  |  | 189 |
| 30 | 226492GT | MACHINED, ANGLE SENSOR HOLDER |  |  | 189 |
| 31 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 |  |  | 189 |
| 32 | 233116GT | MACHINED, SENSOR ARM |  |  | 189 |
| 33 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB |  |  | 189 |
| 34 | 61817GT | CYLINDER,LIFT,JIB BOOM | 1 |  | 189 |
| 34- | 94203GT | SEAL KIT,CYL |  |  | 189 |
| 34- | 61602GT | VALVE,COUNTERBAL.CBBB-LHN@3500 |  |  | 189 |
| 34- | 88280GT | BEARING,1.5IDX1.75ODX0.75L |  |  | 189 |
| 35 | 47666GT | PIN,1.50DIAX9.13LG,1HOLE | 1 |  | 189 |
| 36 |  | Ref. Jib Cable Track Pull Tube |  | (Refer to 516.1) | 189 |
| 37 | 106674GT | JIB PRIMARY TUBE ASSEMBLY\*\*\* | 1 | Includes bearings | 189 |
| 38 | 825019GT | ROD END, .375X3.69, ZAG |  |  | 189 |

#### 516.1 Jib Boom Cable Track  (p. 190)

Jib cable track 94775GT (15 links); jib pull tube 101112GT; extra clamp stack from SN 379.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 191 |
| 2 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 191 |
| 3 | 81777GT | SCREW,HHC,3/8-16 X 7 |  |  | 191 |
| 4 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 191 |
| 5 | 81342GT | WEAR PAD,5.5 X 1.75 X .5 | 1 |  | 191 |
| 5- | 81341GT | WEAR PAD,CABLE TRACK PULL TUBE | 1 |  | 191 |
| 6 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 191 |
| 7 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 191 |
| 8 | 42079GT | PIN,COTTER,.156 X 2.5 |  |  | 191 |
| 9 | 81347GT | WELDMENT,TRACK PULL TUBE PIVOT |  |  | 191 |
| 10 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 191 |
| 11 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 191 |
| 12 | 101106GT | CLAMP ASSY.OPTIONS BLOCK W/NUT | 4 |  | 191 |
| 13 | 101108GT | CABLE STAY,BOTTOM | 4 |  | 191 |
| 14 | 101109GT | CABLE STAY,TOP | 4 |  | 191 |
| 15 | 36294GT | SCREW,HHC,1/4-20 X 2.75 |  |  | 191 |
| 16 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 191 |
| 17 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 191 |
| 18 | 110911GT | SWITCH ASSY,LIMIT LSJ1RO | 1 |  | 191 |
| 18- | 110771-42223GT | SWITCH,LIMIT, W/ROLLER NO/NC |  |  | 191 |
| 18- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 40 |  | 191 |
| 18- | 119065GT | CONN, RECEP, 2 WAY, DEUTSCH, DT |  |  | 191 |
| 18- | 60439GT | CONN, RECEP, 2 WAY, DEUTSCH, DT, LOCK |  |  | 191 |
| 18- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP |  |  | 191 |
| 19 | 18596GT | WASHER,FLAT,1.56 X 2.5 X .061 |  |  | 191 |
| 20 | 107868PGT | PLATE,REINF.CLAMP STACK,PTD | 2 | **from SN 379** | 191 |
| 21 | 101108GT | CABLE STAY,BOTTOM | 2 | **from SN 379** | 191 |
| 22 | 101109GT | CABLE STAY,TOP | 2 | **from SN 379** | 191 |
| 23 | 101099GT | WELDMENT,CABLE TRACK SUPPORT | 1 |  | 193 |
| 24 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 193 |
| 25 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 193 |
| 26 | 101772GT | PLATE,CABLE TRACK COVER | 1 |  | 193 |
| 27 | 101104GT | PLATE,CABLE TRACK MOUNT | 2 |  | 193 |
| 27- | 60790GT | BOLT,CARRIAGE,3/8-16 X1.50,G5 |  |  | 193 |
| 28 | 101112GT | WELDMENT,JIB PULL TUBE | 1 |  | 193 |
| 29 | 94775GT | CABLE TRACK,STEEL 15 LINKS | 1 |  | 193 |
| 30 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 193 |

#### 517.1 Jib Boom Extension and Platform Level Cylinders  (p. 194)

Jib extension cylinder 94653GT (seal kit 94194GT); platform level cylinder 61816GT to SN 458, 110580GT from SN 459 (seal kit 94193GT).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | T108075GT | PIN,1.25DIAX5.25LG,1HOLE | 1 |  | 195 |
| 2 | 1255452GT | ROD END,.375 X 2.25,ZAG | 1 |  | 195 |
| 3 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 195 |
| 4 | 7713GT | NUT, LP NYLOCK, 3/8-16 |  |  | 195 |
| 5 | 94653GT | CYLINDER,JIB EXTENSION | 1 |  | 195 |
| 5- | 94194GT | SEAL KIT,Z135 JEXT (94653) |  |  | 195 |
| 5- | 54063GT | VALVE,CB.CBBC-LHN@1000\*\*\* |  |  | 195 |
| 5- | 50701GT | VALVE,COUNTERBALANCE,2:1 3000 |  | units with previous CB valves 89872 or 128119 (shorter in length) can use this valve | 195 |
| 6 | 824164GT | SNAP RING, EXTERNAL,1.25, ZAG |  |  | 195 |
| 7 | 30255GT | WASHER,SHIM,1.27 X 2.13 X .062 |  |  | 195 |
| 8 | T108079GT | PIN,1.25DIAX8.30LG,2RING | 1 |  | 195 |
| 9 | 74085GT | REST PAD,UPPER PIVOT Z30N | 1 |  | 195 |
| 10 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 195 |
| 11 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 195 |
| 12 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 195 |
| 13 | 5224GT | SCREW,HHC,3/8-16 X 2 |  |  | 195 |
| 14 | 71858GT | WEAR PAD,4.25 X 1.5 X 1 | 1 |  | 195 |
| 15 | 50546GT | PIN,1.25DIAX6.36LG,2RING | 2 |  | 195 |
| 16 | 61816GT | CYLINDER,PLATFORM LEVELING | 1 | **to SN 458** | 195 |
| 16- | 110580GT | CYLINDER,PLATFORM LEVELING\*\*\* | 1 | **from SN 459** | 195 |
| 16- | 94193GT | SEAL KIT,CYL | 2 |  | 195 |
| 16- | 61602GT | VALVE,COUNTERBAL.CBBB-LHN@3500 |  |  | 195 |
| 16- | 47377GT | BEARING,1.25 ID X 1.5 OD X .75 | 4 |  | 195 |

#### 518.1 Jib Boom Tubes and Wear Pads  (p. 196)

Jib tubes and wear pads; jib extension tube by region and SN 458/459 break.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 29080GT | SHIM,WEAR PAD,5X 1.5 16GA | as needed |  | 197 |
| 1- | 42502GT | SHIM,SIDE PAD 22GA. | as needed |  | 197 |
| 2 | 30138GT | WEAR PAD,5 X 1.5 X .625 W/NUTS | 2 |  | 197 |
| 3 | 34125GT | WEAR PAD,5 X 1.5 X .75 W/NUTS | 8 |  | 197 |
| 4 | 8255GT | SCREW,HHC,3/8-16 X .75 |  |  | 197 |
| 5 | 6021GT | WASHER, LOCK, .375 |  |  | 197 |
| 6 | 106674GT | JIB PRIMARY TUBE ASSEMBLY\*\*\* |  | includes bearings | 197 |
| 6- | 42014GT | BEARING,2.00IDX2.25ODX2.00L |  |  | 197 |
| 7 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 197 |
| 8 | 30137GT | WEAR PAD,5 X 1.5 X .50 W/NUTS | 6 |  | 197 |
| 9 | 106673GT | JIB EXT TUBE W/DECAL | 1 | **USA, Canada, Australia; to SN 458** | 197 |
| 9A | 110627GT | JIB EXT.TUBE W/DECAL |  | **USA, Canada, Australia; from SN 459** | 197 |
| 9B | 94555GT | WELDMENT,JIB EXTENSION\*\*\* |  | **Europe, Asia, South America; to SN 458** | 197 |
| 9C | 106675GT | JIB EXTENSION TUBE ASSEMBLY |  | **Europe, Asia, South America; from SN 459** | 197 |

#### 519.1 Platform Rotator  (p. 198)

Platform rotator 88576GT ("88576 is the correct rotator for the Z-135"), seal kit 122944GT, bleeder screw 88516GT, PCON tilt sensor 50813GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 88576GT | ROTATOR,NON-JIB | 1 | 88576 is the correct rotator for the Z-135 | 199 |
| 1- | 30370GT | BEARING,1.25IDX1.5ODX1.00L | 2 |  | 199 |
| 1- | 88516GT | SCREW,BLEEDER,M5X0.8 | 2 | or | 199 |
| 1- | 122944GT | SEAL KIT,8K ROTATOR\*\*\* |  |  | 199 |
| 2 |  | Ref. Counterbalance Manifold (refer to 707.1) |  |  | 199 |
| 3 | 6637GT | SCREW,HHC,1/4-20 X 1.75 |  |  | 199 |
| 4 | 6175GT | SCREW,HHC,3/8-16 X 1 |  |  | 199 |
| 5 | 1255452GT | ROD END,.375 X 2.25,ZAG |  |  | 199 |
| 6 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 199 |
| 7 | T108075GT | PIN,1.25DIAX5.25LG,1HOLE | 1 |  | 199 |
| 8 | 50813GT | SENSOR,TILT,PCON (PLASTIC)\*\*\*\* | 1 |  | 199 |
| 9 | 8914GT | SCREW, HHC, 1/4-20 X .625 |  |  | 199 |
| 10 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 199 |
| 11 |  | Ref. Platform Level Cylinder (refer to 517.1) |  |  | 199 |
| 12 | T107883GT | PIN,1.25DIAX7.88LG,1HOLE | 1 |  | 199 |
| 13 | 39478GT | SCREW,HHC,3/8-16 X 2 FULL THRD |  |  | 199 |
| 14 | 825019GT | ROD END, .375X3.69, ZAG |  |  | 199 |

---

### Group: Platform

#### 601.1 Platform Mount  (p. 200)

Platform mount: support weldment 60370-SGT (service), 1-8 x 11 pivot screw 73928GT with hardened washers 122079GT and nut 29764GT; cable guide kit 110531GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 824082GT | SCREW, HHF, 1/4-20 X 1.75, 8, ZAG |  |  | 201 |
| 2 | 824027GT | NUT, TL FLG, 1/4-20, G, ZAG |  |  | 201 |
| 3 | 1261078GT | ASSY,.5 GPM PRESSURE COMP VALV | 1 |  | 201 |
| 4 | 1260641GT | WELDMENT,MANIFOLD MOUNT | 1 |  | 201 |
| 5 | 824084GT | SCREW,HHF,1/4-20X3,8,ZAG |  |  | 201 |
| 6 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 201 |
| 7 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 201 |
| 8 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 201 |
| 9 | 106857GT | CLAMP,CABLE STRAIN RELIEF | 1 |  | 201 |
| 10 | 77993GT | BRACKET, CABLE STRAIN RELEIF | 1 |  | 201 |
| 11 | 13002GT | SCREW,HHC,5/16-18 X 1 GR5 |  |  | 201 |
| 12 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 201 |
| 13 | 6037GT | NUT,HEX,5/16-18,GR5 |  |  | 201 |
| 14 | 4266GT | SCREW,HHC,1/4-20 X 2 |  |  | 201 |
| 15 | 110531GT | KIT, CABLE GUIDE | 1 |  | 201 |
| 15- | 55067GT | GROMMET,RUBBER 3 X .19 X 3.5 |  |  | 201 |
| 16 | 73928GT | SCREW,HHC,1-8 X 11,GRD 5\*\*\* | 1 |  | 201 |
| 17 | 122079GT | WASHER,FLAT,1.000,HARDENED | 2 |  | 201 |
| 18 | 49857GT | SCREW,HHC,3/8-16 X .88,GRD 8 | 8 |  | 201 |
| 19 | 57201GT | WASHER,FLAT,313, HARDENED | 8 |  | 201 |
| 20 | 60370-SGT | PLATFORM SUPPORT WELDMNT-SERV\* | 1 |  | 201 |
| 20- |  | Ref. WELDMENT,PLATFORM SUPPORT,CE |  | CE models (refer to 804.1 ) | 201 |
| 21 | 29764GT | NUT,NYLOCK,1-8 |  |  | 201 |
| 22 |  | Ref. Platform Manifold |  | (Refer to 708.1) | 201 |

#### 602.1 Platform configurtion  (p. 202)

Complete platform assemblies with decals (from SN 779 to 2000) and blank weldments.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - |  | Complete Platform Assemblies with Decals |  |  | 203 |
| A | 1296933GT | PLAT ASSY,8' W/SIDE GATE,Z-135 ANSI WRD |  | **from SN 779 to 2000** | 203 |
| B | 1296934GT | PLAT ASSY,8' W/SIDE GATE,Z-135 AUS |  | **from SN 779 to 2000** | 203 |
| C | 1296935GT | PLAT ASSY,8' W/SIDE GATE,Z-135 ANSI SYM |  | **from SN 779 to 2000** | 203 |
| D | 1296936GT | PLAT ASSY,8' W/SIDE GATE,Z-135 CE |  | **from SN 779 to 2000** | 203 |
| - |  | Complete Platform Assemblies and Platform Weldments without Decals (refer to section |  | 100 for decals) | 203 |
| 1A | 1272304GT | ASSY,8FT PLAT TRI LG,BLANK |  | front and side entry | 203 |
| - | 1274859GT | ASSY,8' PLAT WELDMENT W/SIDE GATE |  | flooring and decal plate not included | 203 |
| 1B | 1272303GT | ASSY,6FT PLAT DUAL LG,BLANK |  | front and side entry | 203 |
| 2 | 160809GT | ASSY,6FT PLATFORM,NO DECALS |  | Single entry | 203 |
| - | 73900GT | WELDMNT,6 FT PLATFORM |  | flooring and decal plate not included | 203 |

#### 602.2 Platform Components  (p. 204)

Platform components incl. foot switch assembly 227617GT (switch 227564GT, 20 A IP65), foot switch cover 147121GT, flooring, manual box 44743GT, side swing gate 1272307GT, gate latch 1267747GT, spring hinges 104804GT. The "to SN Z62H-3664 / from SN Z62H-3665" notes on items 25/26/26B are printed exactly so in the manual (they refer to a shared-platform serial series, not a Z-135 serial).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 824029GT | NUT, TL FLG, 3/8-16, G, ZAG | 10 |  | 205 |
| 2 | 824091GT | SCREW, HHF, 3/8-16 X 1.25, 8, ZAG | 6 |  | 205 |
| 3 | 227617GT | ASSEMBLY,FOOT SWITCH | 1 |  | 205 |
| 3- | 119058GT | CONN, PLUG, 4 WAY, DEUTSCH, DT, ENDCAP |  |  | 205 |
| 3- | 1257248GT | SCREW, SHC, M4-0.7X8, DIN912, |  |  | 205 |
| 3- | 1257249GT | WASHER, LOCK, M4, SS |  |  | 205 |
| 3- | 227564GT | FOOT SWITCH,20A IP65 |  |  | 205 |
| 3- | 33576GT | CONN,SQZ,1/2NPT,.170-.450 |  |  | 205 |
| 4 | 1256460GT | SCREW,PHPM,10-24X1,ZAG | 2 |  | 205 |
| 5 | 73575GT | SPRING CLIP,10-24,.025-.125X.468,ZAG | 2 |  | 205 |
| 6 | 824079GT | SCREW,HHF,1/4-20X1,8,ZAG | 2 |  | 205 |
| 7 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG | 23 |  | 205 |
| 8 | 147121GT | COVER, FOOT SWITCH, LARGE | 1 | (decals not included, refer to section 100) | 205 |
| 9 | 824078GT | SCREW,HHF,1/4-20X.75,8,ZAG | 23 |  | 205 |
| 10 | 1267746GT | FLOORING, 72X30 PLATFORM | 1 | 6ft Platform (with side swing gate) | 205 |
| 10B | 73477GT | FLOORING, 6 FT PLATFORM | 1 | 6 ft Platform (with single entry) | 205 |
| 10C | 73478PGT | FLOORING, 8 FT PLATFORM\*\*\* | 1 | all 8 ft Platform | 205 |
| 11 |  | Ref. Platform Weldment |  | (refer to 601.1) | 205 |
| 12 | 1251600GT | U-BOLT, FLATTENED, 1.5DIA. X 3/8 UNC,ZAG | 2 | (single entry) | 205 |
| 13 | 44743GT | MANUAL BOX W/DECALS\*\*\* | 1 | USA/Canada/Australia | 205 |
| 13B | 24514GT | BOX, INSTRUCTION STORAGE\*\* |  | Europe/Asia/South America (decal required; refer to Section100) | 205 |
| 14 | 1275088GT | FORMING, ALUM. DECAL PLATE | 1 |  | 205 |
| 14B | 89337GT | PLATFORM ASSY 8FT W/DECALS ANS | 1 | (Painted, Steel) | 205 |
| 15 | 56424GT | CLAMP,1.25X.5 RUBBER-CUSHION | 2 |  | 205 |
| 16 | 1289552GT | KIT, PLATFORM WORK TRAY | 1 |  | 205 |
| 17 | 1256855GT | SCREW,HHF,1/4-20X.625,8,ZAG | 14 |  | 205 |
| 18 | 824027GT | NUT, TL FLG, 1/4-20, G, ZAG | 14 |  | 205 |
| 19 | 102992GT | SLIDING MIDRAIL KIT,PTD | 1 |  | 205 |
| 19- | 102992GT | SLIDING MIDRAIL KIT,PTD |  |  | 207 |
| 20 | 60370-SGT | PLATFORM SUPPORT WELDMNT-SERV\* | 1 |  | 207 |
| 20B |  | Ref. PLAT LOAD SENSE S60\*\* | 1 | (refer to 810.1) | 207 |
| 21 |  | Ref. ROTATOR,PLAT JIB |  | (refer to 507.1) | 207 |
| 22 | 826791GT | SCREW,HHC,3/8-16X.875,8,ZAG | 8 |  | 207 |
| 23 | 826793GT | WASHER,FLAT,3/8,SAE,HRD,ZAG | 8 |  | 207 |
| 24 | 826792GT | SCREW,HHC,1-8X11,5,ZAG |  |  | 207 |
| 25 | 824116GT | WASHER,FLAT,1.0,F436,HRD,ZAG |  | **to SN Z62H-3664** | 207 |
| 26 | 826794GT | NUT,TL,1-8,C,ZAGRING |  | **to SN Z62H-3664** | 207 |
| 26B | 824031GT | NUT,TL FLG,1-8,G,ZAG |  | **from SN Z62H-3665** | 207 |
| 27 |  | Ref. PLATE,JIB,ROTATE MANIFOLD |  | (refer to 705.1) | 207 |
| 28 | 110671GT | PLATE,JIB,ROTATE MANIFOLD | 1 |  | 207 |
| 29 | 824077GT | SCREW, HHF, 1/4-20 X .5, 8, ZAG | 2 |  | 207 |
| 30 | 106163GT | FORMING,CABLE GUIDE | 1 | order 55067 grommet separately | 207 |
| 31 | 55067GT | GROMMET,RUBBER 3 X .19 X 3.5 | 2 |  | 207 |
| 32 | 824028GT | NUT,TL FLG,5/16-18,G,ZAG | 4 |  | 207 |
| 33 | 824086GT | SCREW, HHF, 5/16-18 X 1, 8, ZAG | 4 |  | 207 |
| 34 | 55753GT | BUMPER, PLASTIC, 1.25 O.D. | 2 |  | 207 |
| 35 | 1267747GT | LATCH, SWING GATE | 1 |  | 207 |
| 36 | 43392GT | BUMPER,BATTERY BOX & RAILS | 2 |  | 207 |
| 37 | 1272307GT | ASSY,SIDE SWING GATE | 1 |  | 207 |
| 38 | 104804GT | HINGE, SPRING, LONG LEG | 2 |  | 207 |
| 39 |  | Ref. PLATFORM CONTROL BOX |  | (refer to 603.1) | 207 |

---

### Group: Accessories

#### 801.1 Platform Accessories  (p. 270)

Platform accessories: aux top rails, work lights 107857GT (replaces 34321GT; bracket 35956GT) and 110 V lights 98027GT, tool tray 9599-SGT, control-box cover (to SN 1021 / from SN 1022), pinch guard, toeboards, complete tri-entry platform assemblies by decal type (to SN 778 / from SN 779), swing gate kit 128368GT (to SN 382) / aluminium gate 128374GT (from SN 383), panel cradle (bracket 89724 no longer available - install 2 x kit 233992GT ANSI or 233993GT CE), pipe cradle 85300GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 53808-SGT | AUX TOP RAIL,6'(1.25")SERVICE |  | includes items 1, 13 and 16-17 | 271 |
| B- | 53807-SGT | AUX TOP RAIL,8'(1.25")SERVICE |  | includes items 1, 13 and 16-17 | 271 |
| D- | 102721PGT | TOEBOARD,8'TRI ENTRY |  | includes items 12, 13, and 19-21 | 271 |
| E- | 88609-SGT | CONTROL BOX COVER ASSY\*\*\* |  | **includes items 8,9, 11-13, 15; to SN 1021** | 271 |
| F- | T109328GT | ACC,PLAT CONTROL COVER, SERV |  | **includes items 7-15; from SN 1022** | 271 |
| G- | 77683GT | ACCESSORY,PANEL CRADLE,ANSI |  | Includes items 18, 24 and 28 (ANSI models) | 271 |
| H- | 94493-SGT | KIT,PANEL CRADLE,CE |  | Includes items 18, 24 and 28 (CE models) | 271 |
| 1 | 139958GT | KIT, AUX TOP RAIL SUPPORT | 10 | **to SN 593** | 271 |
| 1- | 122073GT | SUPPORT, RAILING |  | **from SN 594** | 271 |
| 2 | 6145GT | SCREW, HHC, 1/4-20 X 1.5 |  |  | 271 |
| 3 | 6356GT | WASHER, LOCK, .25 |  |  | 271 |
| 4 | 35956GT | WORK LIGHT MOUNTING BRACKET | 2 |  | 271 |
| 5 | 107857GT | LIGHT, 12 VOLT | 2 | replaces 34321GT, customers may need to buy a mounting bracket (35956GT) and other; hardware for complete install | 271 |
| 5- | 35960GT | BULB,WORKLIGHT,12V 35W |  |  | 271 |
| 5A | 98027GT | PLATFORM WORKLIGHTS,110V,150W | 1 |  | 271 |
| 6 | 9599-SGT | TOOL TRAY ACCESSORY\*\*\* | 1 |  | 271 |
| 7 | 43392GT | BUMPER,BATTERY BOX & RAILS |  |  | 271 |
| 8 | 111526GT | HINGE,PLAT CONTROL BOX COVER | 1 |  | 271 |
| 9 | 89915GT | COVER,CONTROL BOX LID | 1 | **(no latch); to SN 1021** | 271 |
| 9- | 102785PGT | CONTROL BOX COVER,LID,PTD |  | **(with latch); from SN 1022** | 271 |
| 10 | 102786PGT | FORMING,LATCH,CTRL BOX LID PTD |  | **from SN 1022** | 271 |
| 10- | 6888GT | SCREW, HHC, 1/4-20 X 1 | 4 | not shown (bolts latch 102786 to the cover) | 271 |
| 11 | 6090GT | SCREW, HHC, 1/4-20 X .75 | 4 |  | 271 |
| 12 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 271 |
| 13 | 6889GT | NUT,LP NYLOCK,1/4-20 |  |  | 271 |
| 14 | 30468GT | LATCH,SLIDE, FLUSH MOUNT STYLE |  | **from SN 1022** | 271 |
| 15 | 88606PGT | COVER,CONTROL BOX RIGHT SIDE\*\* | 1 |  | 271 |
| 15- | 88607PGT | COVER,CONTROL BOX LEFT SIDE\*\*\* |  |  | 271 |
| 16 | 52661GT | PINCH GUARD RAIL,8' PLATFORM\*\* | 1 |  | 273 |
| 16- | 31120GT | PLUG,NYLON 1.187 BLACK DOMED |  |  | 273 |
| 17 | 4266GT | SCREW,HHC,1/4-20 X 2 |  |  | 273 |
| 18 | 56934GT | PAD,REST,1"THICK,FLANGED | 4 |  | 273 |
| 19 | 102721PGT | TOEBOARD,8'TRI ENTRY | 2 |  | 273 |
| 19- | 139438GT | TOEBOARD, TRI ENTRY 6', EURO |  |  | 273 |
| 20 | 94745PGT | TOEBOARD,ENTRY EUROPEAN PNTD\*\* | 1 |  | 273 |
| 21 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 273 |
| 22 | 229359GT | PLAT ASSY, 8'TRI, ANSI W/WORD |  | **(complete) with ANSI word decal; to SN 778** | 273 |
| 22A- | 229360GT | PLAT ASSY, 8'TRI, AUS W/WORD |  | **(complete) with Australia word decal; to SN 778** | 273 |
| 22B- | 229361GT | PLAT ASSY, 8'TRI, ANSI W/SYM |  | **(complete) with ANSI symbol decal; to SN 778** | 273 |
| 22C- | 229362GT | PLAT ASSY, 8'TRI, CE W/SYM |  | **(complete) with CE symbol decal; to SN 778** | 273 |
| 22D- | 229363GT | PLAT ASSY, 8'TRI, ANSI W/WORD |  | **(complete) with ANSI word decal; from SN 779** | 273 |
| 22E- | 229364GT | PLAT ASSY, 8'TRI, AUS W/WORD |  | **(complete) with Australia word decal; from SN 779** | 273 |
| 22F- | 229365GT | PLAT ASSY, 8'TRI, ANSI W/SYM |  | **(complete) with ANSI symbol decal; from SN 779** | 273 |
| 22G- | 229366GT | PLAT ASSY, 8'TRI, CE W/SYM |  | **(complete) with CE symbol decal; from SN 779** | 273 |
| 23 | 128368GT | KIT,SWING GATE W/SPRING | 1 | **to SN 382** | 273 |
| 23A- | 1290135GT | KIT,HALF FRONT,SWING GATE |  |  | 273 |
| 23- | 9596GT | HINGE CASTING |  | Special welding requirements for installation of this component. Strongly suggest ordering; 128368 OR contact Genie Service for welding requirements | 273 |
| 23B- | 128374GT | WELDMENT,SWING GATE,ALUMINUM |  | **from SN 383** | 273 |
| 23C- | 1488GT | RAILING CATCH CASTING--DRILLED |  |  | 273 |
| 23D- | 1487GT | GATE LATCH CASTING--DRILLED |  |  | 273 |
| 23E- | 33674GT | PIN,LOCK,SHORT\*\*\* |  |  | 273 |
| 23F- | 42104GT | SPRING,SHORT PLATFORM GATE |  |  | 273 |
| 23G- | 43392GT | BUMPER,BATTERY BOX & RAILS |  |  | 273 |
| 24 |  | BRACKET BASE ASSEMBLY |  | 89724 is no longer available. Must install 2 each (two) of service kit 233992 (ANSI) or; 233993 (CE) for initial replacement | 273 |
| 24- | 233992GT | KIT,PANEL CRADEL BRACKET,WORD | 1 | (ANSI models) | 273 |
| 24- | 233993GT | KIT,PANEL CRADLE BRACKET,SYMBL | 1 | (CE models) | 275 |
| 25 | 73501GT | HALF MESH,8'PLATFORM,LH | 1 |  | 275 |
| 25- | 73500GT | HALF MESH,8'PLATFORM,RH\*\*\* |  |  | 275 |
| 25- | 54457GT | MESH,HALF,SWING GATE\*\*\* |  |  | 275 |
| 26 | 1487GT | GATE LATCH CASTING--DRILLED | 1 |  | 275 |
| 26- | 63311GT | SNAP PIN |  |  | 275 |
| 27 | 56424GT | CLAMP,1.25X.5 RUBBER-CUSHION | 14 |  | 275 |
| 28 | 88377GT | FOAM PAD, 3" OD X 1.25" ID,STR | 2 |  | 275 |
| 29 | 85300GT | PIPE CRADLE ASSY. SERV (ONE)\*\* | 2 |  | 275 |

#### 802.1 Hostile Enviroment Option - Secondary Boom Wipers  (p. 276)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 277 |
| 2 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 277 |
| 3 | 6708GT | SCREW,HHC,3/8-16 X 2.25 |  |  | 277 |
| 4 | 6021GT | WASHER, LOCK, .375 |  |  | 277 |
| 5 | 101932GT | TUBE, RD., STL., DOM .75 X .437 X .78 | 12 |  | 277 |
| 6 | 101733GT | BRACKET,WIPER #1 TO #2 | 2 |  | 277 |
| 7 | 106145GT | WIPER,#1 TO #2 | 1 |  | 277 |
| 8 | 101734GT | PLATE,WIPER BACKING #1 TO #2 | 2 |  | 277 |
| 9 | 106105GT | COVER,RISER SIDE HOLES | 46 |  | 277 |
| 9- | 53189GT | RIVET,ALUM,ALUM,P,.25X.375 | 276 | Sold separately (6 each per cover, holds cover 106105 in place) | 277 |
| 9- | 106106GT | CLIP, RISER SIDE HOLE | 276 | Sold separately (6 each per cover, holds cover 106105 in place) | 277 |
| 10 | 101740PGT | PLATE,WIPER BACKING #3TO#4 PTD | 2 |  | 277 |
| 11 | 101738GT | WIPER,#3 TO #4 | 1 |  | 277 |
| 12 | 101739PGT | BRACKET,WIPER #3 TO #4 PAINTED | 2 |  | 277 |
| 13 | 101737GT | PLATE,WIPER BACKING #2 TO #3 | 2 |  | 277 |
| 14 | 101735GT | WIPER,#2 TO #3 | 1 |  | 277 |
| 15 | 101736GT | BRACKET,WIPER #2 TO #3 | 2 |  | 277 |

#### 802.2 Hostile Enviroment Option - Primary and Jib Boom Wipers, Cable Track Covers  (p. 278)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 106161GT | COVER,CABLE TRACK,15 LINK |  |  | 279 |
| B- | 106162GT | COVER,CABLE TRACK,27 LINK |  |  | 279 |
| C- | 106733GT | COVER,CABLE TRACK,11 LINK |  |  | 279 |
| 1 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 279 |
| 2 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 279 |
| 3 | 101743PGT | PLATE,WIPER BACKING PRI.EXT.P | 2 |  | 279 |
| 4 | 101741GT | WIPER,PRI.-PRI EXT. | 1 |  | 279 |
| 5 | 101742PGT | BRACKET,WIPER PRI-PRI EXT.PTD | 2 |  | 279 |
| 6 | 5224GT | SCREW,HHC,3/8-16 X 2 |  |  | 279 |
| 7 | 6021GT | WASHER, LOCK, .375 |  |  | 279 |
| 8 | 101932GT | TUBE, RD., STL., DOM .75 X .437 X .78 | 8 |  | 279 |
| 9 | 13918GT | SCREW,HHC,3/8-16 X 1.75,GRD.8 |  |  | 279 |
| 10 | 101745GT | BRACKET,WIPER JIB-JIB EXT. | 2 |  | 279 |
| 11 | 101744GT | WIPER, JIB-JIB EXTENSION | 1 |  | 279 |
| 12 | 101746GT | BRACKET,WIPER BACKING JIB EXT. | 2 |  | 279 |

#### 803.1 Hostile Enviroment Option - Bellows Installation  (p. 280)

Hostile-environment bellows for each cylinder with their hose clamps.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 101810GT | BELLOWS,CYL,PLATFORM LEVEL\*\*\* | 1 |  | 281 |
| 1- | 30971GT | CLAMP,HOSE,3.00" |  |  | 281 |
| 1- | 36208GT | CLAMP,HOSE,1.25\*\*\* |  |  | 281 |
| 2 | 101846GT | BELLOWS,JIB LIFT CYLINDER\*\*\* | 1 |  | 281 |
| 2- | 34955GT | CLAMP, HOSE, 5.00 |  |  | 281 |
| 2- | 34955GT | CLAMP, HOSE, 5.00 |  |  | 281 |
| 3 | 106732GT | BELLOWS,BELLCRANK LEVEL CYL\*\*\* | 1 |  | 281 |
| 3- | 35432GT | CLAMP,HOSE,6.50 |  |  | 281 |
| 3- | 30971GT | CLAMP,HOSE,3.00" |  |  | 281 |
| 4 | 101847GT | BELLOWS,PRIMARY LIFT CYLINDER | 1 |  | 281 |
| 4- | 31523GT | CLAMP,HOSE,8.50 DIA\*\*\* |  |  | 281 |
| 4- | 30489GT | CLAMP,HOSE,3.50 |  |  | 281 |
| 5 | 106182GT | BELLOWS,RISER LIFT CYLINDER\*\*\* | 1 |  | 281 |
| 5- | 31523GT | CLAMP,HOSE,8.50 DIA\*\*\* |  |  | 281 |
| 5- | 35432GT | CLAMP,HOSE,6.50 |  |  | 281 |
| 6 | 60627GT | COVER,PROTECTIVE,STEER CYL\*\*\* | 4 |  | 281 |
| 6- | 22672GT | CLAMP,HOSE,1.75 |  |  | 281 |
| 6- | 30489GT | CLAMP,HOSE,3.50 |  |  | 281 |
| 7 | 106007GT | BELLOWS,AXLE EXTEND CYLINDER\*\* | 2 |  | 281 |
| 7- | 35432GT | CLAMP,HOSE,6.50 |  |  | 281 |
| 7- | 35434GT | CLAMP,HOSE,2.00\*\*\* |  |  | 281 |

#### 804.1 Load Sense  (p. 282)

Load sense (CE) platform support and load cell hardware; harness 101441GT to SN 1711, 146399GT from SN 1712. Listed here because it carries the CE platform support weldment 61997GT and rotator support 61804GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 61997GT | WELDMENT,PLATFORM SUPPORT,CE | 1 | CE models | 283 |
| 2 | 61726GT | PIN,0.75DIAX5.75LG,CHAMFER | 4 |  | 283 |
| 2- | 94643GT | ZERK,GREASE,5/16-24,STRAIT |  |  | 283 |
| 3 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 283 |
| 4 | 825020GT | ROD END, .25 X 2.75, ZAG |  |  | 283 |
| 5 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 283 |
| 6 | 25685GT | BEARING,GARLOCK,12FDU12 | 8 |  | 283 |
| 7 | 73634GT | SCREW,PHIL,PHM,10-24X1.5 ZINC |  |  | 283 |
| 8 | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 283 |
| 9 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 283 |
| 10 | 61977GT | RETAINER,SPRING,1.46 X .375 | 1 |  | 283 |
| 11 | 61976GT | SPRING,COMP,1-1/4"OD 352 LB/IN | 1 |  | 283 |
| 12 | 89755GT | LOAD SUPPORT W/BEARINGS | 2 | includes items 6 & 15 | 283 |
| 13 | 101441GT | HARN,LS,PLUNGER,LOAD LIMIT | 1 | **to SN 1711** | 283 |
| 13- | 146399GT | ASSY, LS, LOAD SENSE, ALC1000 |  | **from SN 1712** | 283 |
| 14 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 283 |
| 15 | 110789GT | WASHER,SHIM .0151 THK. | as needed |  | 283 |
| 16 | 61972GT | MOUNT,SWITCH | 1 |  | 283 |
| 17 | 34619GT | BUMPER,RUBBER\*\*\* | 2 |  | 283 |
| 18 | 21604GT | SCREW,HHC,3/8-16 X 3.25 |  |  | 283 |
| 19 | 61804GT | WELDMENT,ROTATOR SUPPORT | 1 |  | 283 |
| 20 | 45470GT | CLAMP,0.31,#5 X 1/4,RUB CUSH | 1 |  | 283 |
| 21 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 283 |
| 22 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 |  |  | 283 |
| 23 | 5365GT | NUT,NYLOCK,10-24 |  |  | 283 |

#### 805.1 Belt Driven Generator, Deutz Models  (p. 284)

Belt-driven generator, Deutz: 3500 W 120 V 60 Hz 60707GT or 3000 W 220 V 50 Hz 89908GT, belt 70397GT (AX34).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 98016-SGT | GENERATOR,3500W W/REG-DEUTZ |  |  | 285 |
| B- | 98013-SGT | GENERATOR,3000W 220/50-DEUTZ |  |  | 285 |
| C- | 101189GT | HARNESS,BD GEN.110V/60HZ, Z135 |  | includes items 7-14 | 285 |
| D- | 101190GT | HARNESS,BD GEN.220V/50HZ, Z135 |  | includes items 7-14 | 285 |
| 1 | 75069GT | T-BOX 2.75 X 4.5 X 2.5 | 1 |  | 285 |
| 2 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 |  | 285 |
| 3 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 285 |
| 4 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 285 |
| 5 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 285 |
| 6 | 69776GT | TERMINAL,STRIP,4-POLE,600V\*\*\* | 1 |  | 285 |
| 7 | 60887GT | CIRCUIT BREAKER, 30 AMP | 1 |  | 285 |
| 8 | 8425GT | ENCLOSURE,FG ELEC.,STOCK,7X5X4 | 1 |  | 285 |
| 9 | 60521GT | RELAY,SEALED 30/40 AMP | 1 |  | 285 |
| 10 | 75041GT | SCREW,PHILLIPS,PHM,10-32 X 1 |  |  | 285 |
| 11 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 285 |
| 12 | 61195GT | CIRCUIT BREAKER, 12.5 AMP | 1 |  | 285 |
| 13 | 7056GT | CONN,SQUEEZE,1/2NPT .38-.50,SM | 1 |  | 285 |
| 14 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 285 |
| 15 | 107528PGT | BRACKET,GENERATOR BOX MOUNT | 1 |  | 285 |
| 16 | 60738GT | VOLTAGE REGULATOR,110V | 1 |  | 285 |
| 16- | 60739GT | VOLTAGE REGULATOR,220V |  |  | 285 |
| 17 | 60790GT | BOLT,CARRIAGE,3/8-16 X1.50,G5 |  |  | 285 |
| 18 | 60528GT | LOCK,PLUG 4 WAY,12-14GA\*\*\* | 1 |  | 285 |
| 19 | 60527GT | CONN, PLUG, 4 WAY, DEUTSCH, DTP | 1 |  | 285 |
| 20 | 73712GT | CONN,RECEP 4 WAY,12-14GA FL\*\*\* | 3 |  | 285 |
| 21 | 60757GT | PLUG, SEAL, 12-18GA | 1 |  | 285 |
| 22A | 60707GT | GENERATOR,3500W,120V,60HZ\*\* | 1 |  | 285 |
| 22A- | 146062GT | PULLY,GNRTR,120V,60HZ(60707) |  | for 60707 generator | 285 |
| 22B | 89908GT | GENERATOR,3000W,220V,50HZ\*\*\* |  |  | 287 |
| 22B- | 102681GT | PULLY, GNRTR,220V,50HZ(89908) |  | for 89908 generator | 287 |
| 23 | 81852GT | SCREW,HHC,7/16-14 X 1.75 |  |  | 287 |
| 24 | 45400GT | SPACER TUBE,.50 LG | 1 |  | 287 |
| 25 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 287 |
| 26 | 20912GT | WASHER,LOCK,.437,PLTD |  |  | 287 |
| 27 | 6083GT | NUT,HEX,7/16-14 |  |  | 287 |
| 28 | 70397GT | BELT,AX34\*\*\* | 1 |  | 287 |
| 29 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 287 |
| 30 | 119533PGT | FORMING,GENERATOR MOUNT,PTD | 1 |  | 287 |
| 31 | 63375GT | SCREW, FHM, 6-32 X .75 |  |  | 287 |
| 32 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 |  | 287 |
| 33 | 74052GT | GASKET,COVER,GFCI,WEATHERPROOF | 1 |  | 287 |
| 34 | 13585GT | OUTLET, 110V | 1 |  | 287 |
| 35 | 10777GT | COVER,BLANK | 1 |  | 287 |
| 36 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 287 |
| 37 | 6021GT | WASHER, LOCK, .375 |  |  | 287 |
| 38 |  | Ref. Power to Platform Harness, Secondary (refer to section 308.1) | 1 |  | 287 |
| 39 | 119403GT | CONN,PLUG 120 AC/15A DOMESTIC | 1 |  | 287 |
| 39- | 119404GT | CONN,RECEP 120AC/15A DOMESTIC |  |  | 287 |
| 39- | 144161GT | PLUG,PWR,UK,16AMP,3PIN,BLK |  |  | 287 |
| 39- | 1280665GT | PLUG, TYPE F, 230A, 50HZ, 16A, IP44 |  |  | 287 |
| 39- | 25388GT | PLUG,FUSED,250V,13AMP,U.K.\*\* |  |  | 287 |
| 39- |  | FUSE,13 AMP,220V PLUG | 1 | (component no longer available) refer to BS1362 BUSS TDC180-13A | 287 |

#### 806.1 Belt Driven Generator, Cummins Models  (p. 288)

Belt-driven generator, Cummins: belt 107547GT (AX40), generator weldment 101667GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 98018GT | GENERATOR,3500W W/REG-CUMMINS |  |  | 289 |
| B- | 99015GT | CUTTING DISC-3" |  |  | 289 |
| C- | 101189GT | HARNESS,BD GEN.110V/60HZ, Z135 |  | includes items 7-14 | 289 |
| D- | 101190GT | HARNESS,BD GEN.220V/50HZ, Z135 |  | includes items 7-14 | 289 |
| 1 | 75069GT | T-BOX 2.75 X 4.5 X 2.5 | 1 |  | 289 |
| 2 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 |  | 289 |
| 3 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 289 |
| 4 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 289 |
| 5 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 289 |
| 6 | 69776GT | TERMINAL,STRIP,4-POLE,600V\*\*\* | 1 |  | 289 |
| 7 | 60887GT | CIRCUIT BREAKER, 30 AMP | 1 |  | 289 |
| 8 | 8425GT | ENCLOSURE,FG ELEC.,STOCK,7X5X4 | 1 |  | 289 |
| 9 | 60521GT | RELAY,SEALED 30/40 AMP | 1 |  | 289 |
| 10 | 75041GT | SCREW,PHILLIPS,PHM,10-32 X 1 |  |  | 289 |
| 11 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 289 |
| 12 | 61195GT | CIRCUIT BREAKER, 12.5 AMP | 1 |  | 289 |
| 13 | 7056GT | CONN,SQUEEZE,1/2NPT .38-.50,SM | 1 |  | 289 |
| 14 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 289 |
| 15 | 107528PGT | BRACKET,GENERATOR BOX MOUNT | 1 |  | 289 |
| 16 | 60738GT | VOLTAGE REGULATOR,110V | 1 |  | 289 |
| 16- | 60739GT | VOLTAGE REGULATOR,220V |  |  | 289 |
| 17A | 60707GT | GENERATOR,3500W,120V,60HZ\*\* | 1 |  | 289 |
| 17A- | 146062GT | PULLY,GNRTR,120V,60HZ(60707) |  | for 60707 generator | 289 |
| 17B | 89908GT | GENERATOR,3000W,220V,50HZ\*\*\* |  |  | 289 |
| 17B- | 102681GT | PULLY, GNRTR,220V,50HZ(89908) |  | for 89908 generator | 289 |
| 18 | 60528GT | LOCK,PLUG 4 WAY,12-14GA\*\*\* | 1 |  | 289 |
| 19 | 60527GT | CONN, PLUG, 4 WAY, DEUTSCH, DTP | 1 |  | 289 |
| 20 | 73712GT | CONN,RECEP 4 WAY,12-14GA FL\*\*\* | 3 |  | 289 |
| 21 | 60757GT | PLUG, SEAL, 12-18GA | 1 |  | 291 |
| 22 | 88296GT | SCREW,HHC,7/16-14 X 1.25 |  |  | 291 |
| 23 | 20912GT | WASHER,LOCK,.437,PLTD |  |  | 291 |
| 24 | 101667GT | WELDMENT,GENERATOR | 1 |  | 291 |
| 25 | 44064GT | SCREW,HHC,M10 X 30MM, |  |  | 291 |
| 26 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 291 |
| 27 | 13000GT | SCREW,HHC,5/16-18 X 1.25 |  |  | 291 |
| 28 | 101668GT | BRACKET,GENERATOR ADJUSTER | 1 |  | 291 |
| 29 | 107547GT | BELT,AX40 | 1 |  | 291 |
| 30 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 291 |
| 31 | 63375GT | SCREW, FHM, 6-32 X .75 |  |  | 291 |
| 32 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 |  | 291 |
| 33 | 74052GT | GASKET,COVER,GFCI,WEATHERPROOF | 1 |  | 291 |
| 34 | 13585GT | OUTLET, 110V | 1 |  | 291 |
| 35 | 10777GT | COVER,BLANK | 1 |  | 291 |
| 36 |  | Ref. Power to Platform Harness, Secondary (refer to section 303.1) | 1 |  | 291 |
| 37 | 119403GT | CONN,PLUG 120 AC/15A DOMESTIC | 1 |  | 291 |
| 37- | 119404GT | CONN,RECEP 120AC/15A DOMESTIC |  |  | 291 |
| 37- | 144161GT | PLUG,PWR,UK,16AMP,3PIN,BLK |  |  | 291 |
| 37- | 1280665GT | PLUG, TYPE F, 230A, 50HZ, 16A, IP44 |  |  | 291 |
| 37- | 25388GT | PLUG,FUSED,250V,13AMP,U.K.\*\* |  |  | 291 |
| 37- |  | FUSE,13 AMP,220V PLUG | 1 | (component no longer available) refer to BS1362 BUSS TDC180-13A | 291 |

#### 807.1 Belt Driven Generator,Perkins Models  (p. 292)

Belt-driven generator, Perkins: belt 70545GT (AX42), mount 101653GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 98017GT | GENERATOR,3500W W/REG-PERKINS |  |  | 293 |
| B- | 98014GT | GENERATOR,3000W 220/50-PERKINS |  |  | 293 |
| C- | 101189GT | HARNESS,BD GEN.110V/60HZ, Z135 |  | includes items 7-14 | 293 |
| D- | 101190GT | HARNESS,BD GEN.220V/50HZ, Z135 |  | includes items 7-14 | 293 |
| 1 | 75069GT | T-BOX 2.75 X 4.5 X 2.5 | 1 |  | 293 |
| 2 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 |  | 293 |
| 3 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 293 |
| 4 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 293 |
| 5 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 293 |
| 6 | 69776GT | TERMINAL,STRIP,4-POLE,600V\*\*\* | 1 |  | 293 |
| 7 | 60887GT | CIRCUIT BREAKER, 30 AMP | 1 |  | 293 |
| 8 | 8425GT | ENCLOSURE,FG ELEC.,STOCK,7X5X4 | 1 |  | 293 |
| 9 | 60521GT | RELAY,SEALED 30/40 AMP | 1 |  | 293 |
| 10 | 75041GT | SCREW,PHILLIPS,PHM,10-32 X 1 |  |  | 293 |
| 11 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 293 |
| 12 | 61195GT | CIRCUIT BREAKER, 12.5 AMP | 1 |  | 293 |
| 13 | 7056GT | CONN,SQUEEZE,1/2NPT .38-.50,SM | 1 |  | 293 |
| 14 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 |  |  | 293 |
| 15 | 107528PGT | BRACKET,GENERATOR BOX MOUNT | 1 |  | 293 |
| 16 | 60738GT | VOLTAGE REGULATOR,110V | 1 |  | 293 |
| 16- | 60739GT | VOLTAGE REGULATOR,220V |  |  | 293 |
| 17 | 85053GT | SCREW,HHC,M10 X 1.5 X70,GR 8.8 |  |  | 293 |
| 18 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 293 |
| 19 | 22700GT | WASHER,LOCK,M10 |  |  | 293 |
| 20 | 59680GT | NUT,HEX M10-1.5 |  |  | 293 |
| 21 | 70545GT | BELT,AX42 | 1 |  | 293 |
| 22 | 13000GT | SCREW,HHC,5/16-18 X 1.25 |  |  | 293 |
| 23 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 293 |
| 24 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 295 |
| 25 | 81852GT | SCREW,HHC,7/16-14 X 1.75 |  |  | 295 |
| 26 | 20912GT | WASHER,LOCK,.437,PLTD |  |  | 295 |
| 27 | 11209GT | WASHER,FLAT,USS,7/16",Y |  |  | 295 |
| 28 | 101653GT | WELDMENT,GENERATOR MOUNT | 1 |  | 295 |
| 29 | 101654PGT | BRACKET,GENERATOR ADJUSTER PNT | 1 |  | 295 |
| 30A | 60707GT | GENERATOR,3500W,120V,60HZ\*\* | 1 |  | 295 |
| 30A- | 146062GT | PULLY,GNRTR,120V,60HZ(60707) |  | for 60707 generator | 295 |
| 30B | 89908GT | GENERATOR,3000W,220V,50HZ\*\*\* |  |  | 295 |
| 30B- | 102681GT | PULLY, GNRTR,220V,50HZ(89908) |  | for 89908 generator | 295 |
| 31 | 60757GT | PLUG, SEAL, 12-18GA | 1 |  | 295 |
| 32 | 73712GT | CONN,RECEP 4 WAY,12-14GA FL\*\*\* | 3 |  | 295 |
| 33 | 60527GT | CONN, PLUG, 4 WAY, DEUTSCH, DTP | 1 |  | 295 |
| 34 | 60528GT | LOCK,PLUG 4 WAY,12-14GA\*\*\* | 1 |  | 295 |
| 35 | 63375GT | SCREW, FHM, 6-32 X .75 |  |  | 295 |
| 36 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 |  | 295 |
| 37 | 74052GT | GASKET,COVER,GFCI,WEATHERPROOF | 1 |  | 295 |
| 38 | 13585GT | OUTLET, 110V | 1 |  | 295 |
| 39 | 10777GT | COVER,BLANK | 1 |  | 295 |
| 40 |  | Ref. Power to Platform Harness, Secondary (refer to section 303.1) | 1 |  | 295 |
| 41 | 119403GT | CONN,PLUG 120 AC/15A DOMESTIC | 1 |  | 295 |
| 41- | 119404GT | CONN,RECEP 120AC/15A DOMESTIC |  |  | 295 |
| 41- | 144161GT | PLUG,PWR,UK,16AMP,3PIN,BLK |  |  | 295 |
| 41- | 1280665GT | PLUG, TYPE F, 230A, 50HZ, 16A, IP44 |  |  | 295 |
| 41- | 25388GT | PLUG,FUSED,250V,13AMP,U.K.\*\* |  |  | 295 |
| 41- |  | FUSE,13 AMP,220V PLUG | 1 | (component no longer available) refer to BS1362 BUSS TDC180-13A | 295 |

#### 808.1 Air Line to Platform  (p. 296)

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 824029GT | NUT, TL FLG, 3/8-16, G, ZAG |  |  | 297 |
| 2 | 1269759GT | HOSE ASSEMBLY, 1/2" AIR,BARB,S | 1 |  | 297 |
| - | 39888GT | HOSE,1/2,LOW PRESSURE,801-8\*\*\* | 100 inches |  | 297 |
| - | 49213GT | HOSE END,BARBED,SWIVEL,JIC,8-8 | 1 |  | 297 |
| 3 | 1256863GT | WASHER,FLAT,.75,F436,HRD,ZAG | 1 |  | 297 |
| 4 | 1275332GT | FORMING, BRACKET, AIR HOSE | 1 |  | 297 |
| 5 | 49212GT | FEMALE BULKHEAD CONNECTOR-8 |  |  | 297 |
| 6 | 49215GT | MPT,CPLR,1/4"SER,3/8"X18 |  |  | 297 |
| 7 | 49214GT | MALE PIPE THD,1/4" SER,3/8"X18 | 1 |  | 297 |
| 8 | 1251600GT | U-BOLT, FLATTENED, 1.5DIA. X 3/8 UNC,ZAG |  |  | 297 |
| 9 | 1275087GT | FORMING, AIR TO PLAT |  |  | 297 |

#### 810.1 Hostile Environment Option - Engine Air Cleaners (to SN 952)  (p. 300)

Hostile-environment engine air pre-cleaners to SN 952 (Deutz kit 70515GT, Perkins 98012GT).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 70515GT | KIT,PRECLEANER DEUTZ\*\*\* |  | Deutz models | 301 |
| B- | 98012GT | OPTION,PRECLEANER PERKINS |  | Perkins models | 301 |
| 1 | 106211-400GT | HOSE,RUBBER 3"ID X .25 BLACK | 1 |  | 301 |
| 2 | 30489GT | CLAMP,HOSE,3.50 | 6 |  | 301 |
| 3 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 301 |
| 4 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 301 |
| 5 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 301 |
| 6 | 102220GT | WELDMENT,PRECLEANER,DEUTZ | 1 |  | 301 |
| 7 | 30971GT | CLAMP,HOSE,3.00" | 2 |  | 301 |
| 8 | 89959GT | PRECLEANER,INLINE 3" | 2 |  | 301 |
| 9 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 301 |
| 10 | 70546PGT | BRACKET,PRE-CLEANER MOUNT PNTD | 1 |  | 301 |
| 11 | 23057GT | SCREW,HHC,M8 X 20MM |  |  | 301 |
| 12 | 33277GT | WASHER,FLAT,M8,YELLOW ZINC |  |  | 301 |
| 13 | 101639GT | CLAMP,5.38,#86 X 3/8,RUB CUSH |  |  | 301 |
| 14 | 88492GT | HOSE,HUMP 3" TO 4" | 2 |  | 301 |
| 15 | 101657GT | TUBE,AIR INTAKE,UPPER | 1 |  | 301 |
| 16 | 88493GT | PRECLEANER,AIR INTAKE | 1 |  | 301 |
| 17 | 101658GT | TUBE,AIR INTAKE,LOWER | 1 |  | 301 |

#### 810.2 Hostile Environment Option - Engine Air Cleaners (from SN 953)  (p. 302)

Hostile-environment engine air pre-cleaners from SN 953 (Deutz 70515GT, Perkins 804T 139291GT, Cummins B3.3T 122910GT).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 70515GT | KIT,PRECLEANER DEUTZ\*\*\* |  |  | 303 |
| B- | 139291GT | OPT,PRECLEANER PERKINS 804T |  |  | 303 |
| C- | 122910GT | OPT,PRECLEANER CUMMINS B3.3T |  |  | 303 |
| 1 | 106211-400GT | HOSE,RUBBER 3"ID X .25 BLACK | 1 |  | 303 |
| 2 | 30489GT | CLAMP,HOSE,3.50 | 4 |  | 303 |
| 3 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 303 |
| 4 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 303 |
| 5 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 303 |
| 6 | 102220GT | WELDMENT,PRECLEANER,DEUTZ | 1 |  | 303 |
| 7 | 30971GT | CLAMP,HOSE,3.00" | 3 |  | 303 |
| 8 | 89959GT | PRECLEANER,INLINE 3" | 2 |  | 303 |
| 9 | 34955GT | CLAMP, HOSE, 5.00 |  |  | 303 |
| 10 | 122432GT | REDUCER,RUBBER,4.0 X 3.0 |  |  | 303 |
| 11 | 122929GT | TUBE,INTAKE,PRECLEANER,804T |  |  | 303 |
| 12 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 303 |
| 13 | 27034GT | SCREW,HHC,M10 X 25MM,GR 8.8 |  |  | 303 |
| 14 | 22699GT | WASHER, FLAT, M10, ZINC PLTD. |  |  | 303 |
| 15 | 122914GT | BRACKET,PRECLEANER MNT B3.3T |  |  | 303 |
| 16 | 122912GT | TUBE,INTAKE,PRECLEANER B3.3T |  |  | 303 |
| 17 | 122913GT | REDUCER,90DEG,4.0 X 3.0 |  |  | 303 |
| 18 | 101639GT | CLAMP,5.38,#86 X 3/8,RUB CUSH | 2 |  | 303 |
| 19 | 88493GT | PRECLEANER,AIR INTAKE |  |  | 303 |
| 20 | 122911GT | TUBE,INTAKE,PRECLEANER B3.3T |  |  | 303 |
| 21 | 128421GT | FORMING, INTAKE TUBE MNT |  |  | 303 |
| 22 | 122928GT | TUBE,INTAKE,PRECLEANER,804T |  |  | 303 |

#### 811.1 Cold Start Package  (p. 304)

Cold start packages: 122771GT Cummins B3.3T, 122772GT Perkins 804T, 1287847GT Deutz ("use 5.8 qt 5W-40s synthetic engine oil"); oil pan heater 128274GT, freeze plug heaters 122768GT / 101632GT, battery blankets.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 122771GT | COLD START PKG,110V,CUM.B3.3T |  |  | 305 |
| B- | 122772GT | COLD START PKG,110V,PERK.804T |  |  | 305 |
| C- | 1287847GT | ACCESSORY,COLD START PKG, 110V, DEUTZ |  | (NOTE: use 5.8 qt 5W-40s synthetic engine oil) | 305 |
| 1 | 128274GT | OIL PAN HEATER,DEUTZ,120V,150W | 1 |  | 305 |
| 2 | 61245GT | BLANKET,BATTERY | 3 |  | 305 |
| 2- | 75048GT | CABLE TIE,BLACK,36" |  |  | 305 |
| 3 | 28853GT | BLANKET,BATTERY | 2 |  | 305 |
| 3- | 23877GT | CABLE TIE,28" |  |  | 305 |
| 4 | 122768GT | FREEZE PLUG HEATER | 1 |  | 305 |
| 5 | 101632GT | FREEZE PLUG HEATER,PERKINS 804 | 1 |  | 305 |

#### 812.1 Welder Option - Chassis Components  (p. 306)

Welder option chassis side: hydraulic generator 139367GT (Harrison) or 106113GT (Fabco) - "Consult Factory prior to ordering"; drive-oil diverter manifold 101516GT; pressure switch 146284GT (first replacement: kit 1273916GT); breaker/J-box parts.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- | 226512GT | HARNESS,HYDRAULIC WELDER |  |  | 307 |
| B- | 1278369GT | COVER, JBOX, BREAKER RETRO, W/O 110V GFI |  | ONLY FOR USE ON UNITS THAT HAVE BEEN RETROFITTED WITH PANEL MOUNTED; CIRCUIT BREAKER KIT 1278371GT | 307 |
| C- | 1278371GT | KIT, RETROFIT, WELDGEN, MAGBREAKER Z135 |  | FOR WELDER GENERATOR EQUIPPED UNITS THAT HAVE NO CUTOUTS ON THE; FRONT FACE OF JBOX. | 307 |
| 1 | 139367GT | GENERATOR,HYDRA,25CC,208V\*\*\* | 1 | Harrison Generator; includes item 2; Consult Factory prior to ordering | 307 |
| 1A- | 1273323GT | ALTERNATOR |  | for 139367 | 307 |
| 1A- | 58631GT | COUPLER,INSERT |  | for 139367 | 307 |
| 1A- | 139919GT | FITTING,ORIFICE,.047 |  | for 139367 | 307 |
| 1B | 106113GT | GENERATOR,HYDRO-12KEP-21-3 |  | Fabco Generator; includes item 2; Consult Factory prior to ordering | 307 |
| 1B- | T113655GT | COUPLING, 28MM (106113) |  | for 106113 | 307 |
| 1B- | T114022GT | SPIDER (106113) |  | for 106113 | 307 |
| 1B- | T114023GT | COUPLING (106113) |  | for 106113 | 307 |
| 2 | 33432GT | MOTOR,HYD,25CC FIXED\*\*\* | 1 | Sauer Motor for Harrison Generator; Consult Factory | 307 |
| 2- | 32675GT | SEAL KIT,SUNSTRAND |  | for 33432 | 307 |
| 2- | 106184GT | MOTOR,HYD 12.5KW GEN,21CC\*\*\* |  | Fabco Motor; Consult Factory | 307 |
| 2- | 162006GT | SEAL KIT,HYD MOTOR(106184) |  | for 106184 | 307 |
| 3 |  | SPRING WASHER (85166) |  | (component no longer available) | 307 |
| 4 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 307 |
| 5 | 105666PGT | TAP BLOCK,WELD GENERATOR PAINT | 1 |  | 307 |
| 6 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 307 |
| 7 | 106354PGT | FORMING,WELD GEN.MOUNT PAINTED | 1 |  | 307 |
| 8 | 9145GT | SCREW,HHC,1/2-13 X 2.5,GR5 |  |  | 307 |
| 9 | 6095GT | WASHER,FLAT,USS,1/2",Y |  |  | 307 |
| 10 | 6198GT | NUT, NYLOCK, 1/2-13 |  |  | 307 |
| 11 | 13002GT | SCREW,HHC,5/16-18 X 1 GR5 |  |  | 307 |
| 12 | 6886GT | WASHER,LOCK,.313 |  |  | 307 |
| 13 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 307 |
| 14 | 106649PGT | FORMING,MANIFOLD MOUNT PAINTED | 1 |  | 307 |
| 15 | 13000GT | SCREW,HHC,5/16-18 X 1.25 |  |  | 309 |
| 16 | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 309 |
| 17 | 101516GT | MANIFOLD,DRIVE OIL DIVERTER | 1 |  | 309 |
| 17- | 94757GT | VALVE,CHECK,3 PSI\*\*\* |  |  | 309 |
| 17- | 94760GT | VALVE,SOLENOID,10V,W/OUT COIL\* |  |  | 309 |
| 17- | 94765GT | COIL-10V DC\*\*\* |  |  | 309 |
| 17- | 94759GT | NUT,SOLENOID |  |  | 309 |
| 17- | 101446GT | VALVE,RELIEF 280 PSI |  |  | 309 |
| 17- | 102746GT | VALVE,PILOT OPER DIRECTIONAL |  |  | 309 |
| 17- | 106394GT | ORIFICE DISC,.030,CONE | 1 |  | 309 |
| 18 | 146285GT | CONN, SAE#4-1/4" NPT |  |  | 309 |
| 19A | 146284GT | SWITCH,PRESS,#4NPT,200PSIF | 1 | for first time replacement, order service kit 1273916GT | 309 |
| 19B | 1273916GT | KIT, PRESSURE SWITCH, GENERATOR |  | includes pressure switch, hose, fittings and installation instructions | 309 |
| 20 | 73730GT | CONN, RECEP, 12 WAY, DEUTSCH, DT, GRAY/FLANGE | 1 |  | 309 |
| 21 | 49820GT | SCREW,PHILLIPS,PHM,6-32 X .5 |  |  | 309 |
| 22 | 12344GT | NUT,NYLOCK,6-32 |  |  | 309 |
| 23 | 20776GT | CABLE SQUEEZE CONN | 2 |  | 309 |
| 24 | 18665GT | LOCKNUT,ELECTRIC,1" NPT | 2 |  | 309 |
| 25 | 80543GT | RECEPTACLE, 120VAC, 20A, GFCI | 1 |  | 309 |
| 26 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 |  | 309 |
| 27 | 82237GT | DECAL,DANGER,HIGH VOLTAGE | 2 |  | 309 |
| 28 | 107657GT | J-BOX,CIRCUIT BREAKERS, 10X8 | 1 |  | 309 |
| 29 | 102314GT | PANEL, ENCLOSURE, LINCO WELDER | 1 |  | 309 |
| 29- | 226513GT | HARNESS,HYD WELDER J-BOX |  |  | 309 |
| 30 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 |  | 309 |
| 31 | 6935GT | CONN, SQZ, 1/2NPT, LOCKNUT | 1 |  | 309 |
| 32 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 309 |
| 33 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 309 |
| 34 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 311 |
| 35 | 107681PGT | FORMING,J-BOX MOUNT, PAINTED | 1 |  | 311 |
| 36 | 49818GT | SCREW,PHILLIPS,PHM,10-32 X .38 |  |  | 311 |
| 37 | 33608GT | RELAY,SOCKET,OMRON | 1 |  | 311 |
| 38 | 33607GT | RELAY,OMRON,DPDT,12V | 1 |  | 311 |
| 39 | 6037GT | NUT,HEX,5/16-18,GR5 |  |  | 311 |
| 40 | 106072GT | CIRCUIT BREAKER,50A,3P,240V\*\*\* | 1 |  | 311 |
| 41 | 106637GT | MODULE,TIME DELAY ON BREAK 4S | 1 |  | 311 |
| 42 | 51063GT | SCREW,PHILLIPS,RHM,10-32 X 1.5 |  |  | 311 |
| 43 | 6146GT | WASHER,FLAT,MS,#10,Y |  |  | 311 |
| 44 | 6178GT | NUT, NYLOCK, 10-32 |  |  | 311 |
| 44- | 106477GT | GFI/CIRCUIT BREAKER ASSEMBLY | 1 |  | 311 |
| 44- | 227425GT | CIRCUIT BREAKER, 35A 3PH | 1 |  | 311 |
| 45 | 106375GT | GFCI,50A, 3PH | 1 |  | 311 |
| 46 | 102357GT | POTENTIOMETER ASSY, WELDER | 1 |  | 311 |
| 47 | 106140PGT | BRACKET,1K OHM 10-TURN POT,PNT | 1 |  | 311 |
| 48 | 106658GT | MODULE,SX CONTROLLER,LOW AMP | 1 |  | 311 |
| 49 | 101700GT | CONNECTOR,MATING,SX MODULE | 1 |  | 311 |
| 50 | 6884GT | SCREW,HHC,1/4-20 X 2.5 |  |  | 311 |
| 51 | 6889GT | NUT,LP NYLOCK,1/4-20 |  |  | 311 |

#### 813.1 Welder Option - Platform Components  (p. 312)

Welder option platform side: Lincoln Invertec V275-S welder 101525GT with leads kit 106275GT, fuse 106183GT, adapter 229925GT; mounting brackets and security fasteners.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 119907GT | CARTRIDGE,VALVE HOUSING |  |  | 313 |
| - | 119908GT | VALVE,SOLENOID,NOR |  | mounts on cartridge 119907 | 313 |
| 1 | 101525GT | WELDER,INVERTEC V275-S | 1 |  | 313 |
| 1- | 106275GT | KIT,WELD LEADS ASSY,V275S |  |  | 313 |
| 1- | 106183GT | FUSE,.6AMP,250V,WELDER,V275S |  |  | 313 |
| 1- | 229925GT | ADAPTER,WELDER,208-220 |  |  | 313 |
| 2 | 101547PGT | BRACKET,WELDER SUPPORT,PNT | 1 |  | 313 |
| 3 | 122755GT | UBOLT,FLATTENED,1.5DIAX3/8 UNC | 2 |  | 313 |
| 4 | 5397GT | WASHER, FLAT, USS, 5/16-18 | 4 |  | 313 |
| 5 | 4828GT | NUT, NYLOCK, 3/8-16 | 4 |  | 313 |
| 6 | 106112GT | PLUG,4-WIRE,3-PHASE,50A,MALE | 1 |  | 313 |
| 7 | 106111GT | RECEPTCL,LOCK 3-PH,50A,4 WIRE | 1 |  | 313 |
| 7- | 106110GT | T-BOX,2.75X4.5X2.63,3PH |  |  | 313 |
| 7- | 101732GT | COVER,WEATHERPROOF 3-PHASE |  |  | 313 |
| 8 | 82237GT | DECAL,DANGER,HIGH VOLTAGE | 2 |  | 313 |
| 9 | 101731PGT | BRACKET,POWER TO PLAT TBOX,PNT | 1 |  | 313 |
| 9- | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 313 |
| 9- | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 313 |
| 9- | 106044GT | U-BOLT,3/8-16X4X4.63X3.00 |  |  | 313 |
| 10 | 18666GT | CLAMP,1.00,#16 X 1/4,RUB CUSH | 3 |  | 313 |
| 11 | 106141GT | SCREW,SECURITY,1/4-20 X 1.75LG |  |  | 313 |
| 11- | 106272GT | BIT,3/16,HEX SOCKET,SECURITY |  |  | 313 |
| 12 | 101701GT | BRACKET,WELDER MOUNT SUPPORT\*\* |  |  | 313 |
| 13 | 106109PGT | BRACKET,WELDER COVER,PNTD | 1 |  | 313 |
| 13- | 106044GT | U-BOLT,3/8-16X4X4.63X3.00 |  |  | 313 |
| 13- | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 313 |
| 13- | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 313 |
| 14 | 128322GT | SCREW,5/16-18X1.00,SECURITY TO |  |  | 313 |
| 14- | 6782GT | NUT, NYLOCK, 5/16-18 |  |  | 315 |
| 14- | 128323GT | BIT,TORX SOCKET,SECURITY |  |  | 315 |
| 15 | 106204PGT | BRACKET,V275S WELD LEADS | 1 |  | 315 |

#### 815.1 Welder Option - Generator Components  (p. 318)

Welder generator drive couplings; several items are "consult factory".

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| A- |  | GENERATOR,HYDRA,25CC,208V | 1 | refer to section 812.1 | 319 |
| 1 |  | MOTOR MOUNT | 1 | consult factory | 319 |
| 2 |  | MOTOR,HYD,25CC FIXED\*\*\* | 1 | refer to section 812.1 | 319 |
| 3 |  | ALTERNATOR | 1 | refer to section 812.1 | 319 |
| 4 | 6036GT | WASHER,LOCK,.625 PLTD | 2 |  | 319 |
| 5 | 22788GT | SCREW,HHC,1/2-13 X 1.75 | 2 |  | 319 |
| 6 | 44064GT | SCREW,HHC,M10 X 30MM, | 4 |  | 319 |
| 7 | 22700GT | WASHER,LOCK,M10 | 4 |  | 319 |
| 8 | 58631GT | COUPLER,INSERT | 1 |  | 319 |
| 9 | 147404GT | DRIVE COUPLING,KEYED | 1 |  | 319 |
| 10 | 147405GT | DRIVE COUPLING, 13 TOOTH | 1 |  | 319 |
| 11 | 13921GT | ELBOW,070220-4-4 | 1 |  | 319 |
| 12 | 39879GT | CONNECTOR,070120-4-8 | 1 |  | 319 |
| 13 | 87246GT | ELBOW,SWIVEL NUT 90DEG,-4 | 1 |  | 319 |
| 14 | 139919GT | FITTING,ORIFICE,.047 | 1 |  | 319 |
| 15 |  | MOUNT COVER | 2 | consult factory | 319 |
| 16 | 147418GT | ASSY,BLEED LINE (139367) | 1 |  | 319 |
| 17 | 48914GT | CONN,520120-4-8 | 1 |  | 319 |
| 18 | 48975GT | CONN,520120-12-10 | 2 |  | 319 |

#### 816.1 Hydraulic Generator Option  (p. 320)

Hydraulic generator option 111381GT (3000 W 110 V 60 Hz) with internal spares; generator manifold 53976GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 111381GT | GEN,HYD,3000W,110V,60HZ | 1 |  | 321 |
| 1- | 58944GT | BRUSH 3/8 X 1/4 X 15/16(36928) |  |  | 321 |
| 1- | T111608GT | SEAL,RETAINING RING |  |  | 321 |
| 1- | T111609GT | SEAL,SHAFT |  |  | 321 |
| 1- | T111610GT | SPACER |  |  | 321 |
| 1- | T111611GT | BEARING,MOTOR |  |  | 321 |
| 1- | T111612GT | RETAINING RING |  |  | 321 |
| 1- | T111613GT | SHAFT,MOTOR |  |  | 321 |
| 1- | 58954GT | O-RING,SPACER #115\*\*\* |  |  | 321 |
| 1- | 147836GT | SEAL, GASKET, .00075" \*GOLD\* |  |  | 321 |
| 1- | 147837GT | SEAL, GASKET, .0005" \*SILVER\* |  |  | 321 |
| 1- | 147838GT | SEAL, GASKET, .0010" |  |  | 321 |
| 1- | 147839GT | ASSM, GEN. ONLY, 110V, 60HZ |  |  | 321 |
| 2 | 77780GT | SCREW,SHC,3/4-10 X 3.75,A574 |  |  | 321 |
| 3 | 8516GT | SCREW, HCC, 3/8-16 X 1.50 |  |  | 321 |
| 4 | 6097GT | WASHER, FLAT, USS, 3/8", Y |  |  | 321 |
| 5 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 321 |
| 6 | 128560GT | FORMING, HYD. GEN. MOUNT | 1 |  | 321 |
| 7 | 8178GT | SCREW, HHC, 3/8-16 X 2.5 |  |  | 321 |
| 8 | 53976GT | MANIFOLD,GENERATOR | 1 |  | 321 |
| 9 | 139691GT | FORMING, GEN MANIFOLD MOUNT | 1 |  | 321 |
| 10 | 6019GT | SCREW,HHC,3/8-16 X 1.25 GRD 5 |  |  | 321 |
| 11 | 9145GT | SCREW,HHC,1/2-13 X 2.5,GR5 |  |  | 321 |
| 12 | 13066GT | WASHER,FLAT,.5 HARDENED |  |  | 321 |
| 13 | 6198GT | NUT, NYLOCK, 1/2-13 |  |  | 321 |

#### 818.1 Boom Latch Kit  (p. 324)

Boom latch kit 229400GT (complete, items 1-22) - the mechanical latch between riser #4 and riser #1.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 229400GT | Z135 LATCH KIT | 1 | (complete) includes items 1 - 22 | 325 |
| 1 |  | Ref. ASSY,RISER BOOM #4 |  | (refer to 505.1) | 325 |
| 2 |  | Ref. ASSEMBLY,RISER BOOM #1 |  | (refer to 502.1) | 325 |
| 3 | 231048GT | Z135 LATCH,THREADED PRIMARY | 1 |  | 325 |
| 4 | 231047GT | Z135 LATCH SPACER | 1 |  | 325 |
| 5 | 229395GT | Z135 LATCH,BREAK LINK | 1 |  | 325 |
| 6 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 325 |
| 7 | 19934GT | WASHER,3/8 HARD.STEEL-FLAT,USS |  |  | 325 |
| 8 | 6-5206-18GT | SCREW,HHC,3/8-16X2.25,GR8 |  |  | 325 |
| 9 | 229393GT | Z135 LATCH, GUIDE MOUNT | 1 |  | 325 |
| 10 | 229394GT | Z135 LATCH,GUIDE LINK | 2 |  | 325 |
| 11 | 229388GT | Z135 LATCH HOOK | 1 |  | 325 |
| 12 | 229399GT | CLEVIS PIN 0.5" X 1.5" | 2 |  | 325 |
| 13 | 6095GT | WASHER,FLAT,USS,1/2",Y |  |  | 325 |
| 14 | 230971GT | PIN,COTTER,.156 X 1 Z | 2 |  | 325 |
| 15 | 230975GT | SCREW,HHC,3/8-16 X 4.5,GR8 | 2 |  | 325 |
| 16 | 229397GT | Z135 LATCH,HOOK MOUNT | 1 |  | 325 |
| 17 | 826379GT | PIN,CLEVIS,1X2.250,ZAG | 1 |  | 325 |
| 18 | 13635-10GT | PIN,COTTER,.156 X 1.75 | 1 |  | 325 |
| 19 | 231046GT | Z135 LATCH SHIM | 1 |  | 325 |
| 20 | 6-5206-12GT | SCREW,HHC,3/8-16X1.5,GR8 |  |  | 325 |
| 21 | 6021GT | WASHER, LOCK, .375 |  |  | 325 |
| 22 | 229396GT | Z135 LATCH,PRIMARY LINK | 1 |  | 325 |

#### 819.1 Aircraft Protection Package (from 1071)  (p. 326)

Aircraft protection package (from SN 1071): bumpers, skid plate 139904GT, springs, foam padding by length, sensor bumper weldment 139181GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 46188GT | WELDMENT, AIRCRAFT TOP BUMPER | 1 |  | 327 |
| 2 | 55753GT | BUMPER, PLASTIC, 1.25 O.D. | 4 |  | 327 |
| 3 | 122231GT | SCREW,BHSC,1/4-20 X 1 |  |  | 327 |
| 4 | 122073GT | SUPPORT, RAILING | 20 |  | 327 |
| 5 | 6889GT | NUT,LP NYLOCK,1/4-20 |  |  | 327 |
| 6 | 106044GT | U-BOLT,3/8-16X4X4.63X3.00 | 1 |  | 327 |
| 7 | 66472GT | U-BOLT, SQR, 3/8-16X2X5, PLTD | 2 |  | 327 |
| 8 | 139904GT | WELDMENT, SKIDPLATE\*\* | 1 |  | 327 |
| 9 | 88384GT | SPRING, SS, 3/4-EO750-69-4500 | 4 |  | 327 |
| 10 | 88385GT | SPRING, SS, 1/2-EO500-49-4500 | 4 |  | 327 |
| 11 | 4828GT | NUT, NYLOCK, 3/8-16 |  |  | 327 |
| 12 | 5397GT | WASHER, FLAT, USS, 5/16-18 |  |  | 327 |
| 13 | 6888GT | SCREW, HHC, 1/4-20 X 1 |  |  | 327 |
| 14 | 6638GT | WASHER, FLAT, USS, 1/4"Y |  |  | 327 |
| 15 | 6833GT | CLAMP,0.50,#8 X 1/4,RUB CUSH | 1 |  | 327 |
| 16 | 6091GT | NUT,NYLOCK,1/4-20 |  |  | 327 |
| 17 | 75617-1675GT | PADDING,FOAM 3.5"OD X 1.50"ID | 2 |  | 327 |
| 18 | 75636GT | PADDING,FOAM,3.0"X1.50ID 90DEG | 8 |  | 327 |
| 19 | 21618GT | CLAMP,1.13,#18 X 1/4,RUB CUSH | 16 |  | 327 |
| 20 | 6090GT | SCREW, HHC, 1/4-20 X .75 |  |  | 327 |
| 21 | 56426-700GT | CHAIN,NO.2 (11 LINKS) | 8 |  | 327 |
| 22 | 75617-2275GT | PADDING,FOAM 3.5"OD X 1.50"ID | 4 |  | 327 |
| 23 | 139181GT | WELDMENT,AIRCRAFT SENSOR BUMPR | 1 |  | 327 |
| 24 | 75617-6475GT | PADDING,FOAM 3.5"OD X 1.50"ID | 1 | use until exhausted | 327 |
| 24B | 75617-3238GT | PADDING, FOAM 3.0" OD X 1.50" ID | 2 |  | 327 |
| 25 | 77797GT | WELDMENT, SENSOR MOUNT | 1 |  | 327 |
| 26 | 88390GT | NUT,HEX,M8,PLASTIC |  |  | 327 |
| 27 | 75617-4788GT | PADDING,FOAM 3.5"OD X 1.50"ID | 4 |  | 327 |
| 28 | 75617-3138GT | PADDING, FOAM 3.0" OD X 1.50" ID | 2 |  | 329 |
| 29 | 75617-1538GT | PADDING,FOAM 3.5"OD X 1.50"ID | 2 |  | 329 |

#### 820.1 Operator Protection Structure  (p. 330)

Operator protection structure 219158GT (complete, fits all 6 ft and 8 ft platforms).

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| (note) |  | Fits all 6' and 8' Booms |  |  | 331 |
| 1 | 219158GT | ACCESSORY,OPERATOR PROT STRUCT | 1 | (Complete) includes all fasteners | 331 |
| 2 | 1256468GT | NUT,3/8-16,8,ZAG | 8 |  | 331 |
| 3 | 1255758GT | WASHER,FLAT,3/8,USS,ZAG | 12 |  | 331 |
| 4 | 824069GT | SCREW, HHC, 3/8-16 X 2.5, 8, ZAG | 4 |  | 331 |
| 5 | 1251600GT | U-BOLT, FLATTENED, 1.5DIA. X 3/8 UNC,ZAG | 4 |  | 331 |
| 6 | 1261184GT | NUT,1/4-20,8,ZAG | 4 |  | 331 |
| 7 | 824120GT | WASHER, FLAT, .375 X 1.50 X .125, ZAG | 2 | Use only with the platform control box cover option | 331 |
| 8 | 824113GT | WASHER,FLAT,USS,1/4,ZAG | 6 |  | 331 |
| 9 | 824060GT | SCREW, HHC, 1/4-20 X 1, 8, ZAG | 4 |  | 331 |
| 10 |  | Ref. DECAL, INSTRUCTION, OPS | 1 | refer to Section 1 | 331 |

#### 821.1 Fall Arrest Bar  (p. 332)

Fall arrest bar (TFAAS track) accessories by platform length and decal language; trolley 1256439GT.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| 1 | 1256856GT | SCREW,HHF,3/8-16X2.5,8,ZAG | 4 |  | 333 |
| 2 | 1256389GT | FORMING,INNER HANGER | 2 |  | 333 |
| 3 | 1251997GT | NUT,TL FLG,1/2-13,G,ZAG | 2 |  | 333 |
| 4 | 1256851GT | SCREW,HHF,1/2-13X3.5,8,ZAG | 2 |  | 333 |
| 5 | 1260892GT | END STOP. TFAAS TRACK | 2 |  | 333 |
| 6 | 36388GT | BUMPER,RUBBER,.75 X .50H,STUD | 2 |  | 333 |
| 7 | 1274322GT | NUT,NYLOCK FLG,3/8-16,F,ZAG | 8 |  | 333 |
| 8 | 1256481GT | SPACER, HANGER BRACKET | 8 |  | 333 |
| 9A | 1256400GT | DECAL,TFAAS TRACK,WORD | 1 |  | 333 |
| 9B | 1260910GT | DECAL,TFAAS TRACK,SYMBOL | 1 |  | 333 |
| 9C | 1256400FRGT | DECAL,TFAAS TRACK,WORD FR | 1 |  | 333 |
| 10A | 1256377GT | ACC,TFAAS FALL ARREST,8FT WORD | 1 | includes instructions and decals | 333 |
| 10A- | 1256379GT | ASSY,TFAAS TRACK,8FT WORD |  | includes decals | 333 |
| 10B | 1261022GT | ACC,TFAAS FALL ARREST,8FT SYM | 1 | includes instructions and decals | 333 |
| 10B- | 1261024GT | ASSY,TFAAS TRACK,8FT SYM |  | includes decals | 333 |
| 10C | 1261018GT | ACC,TFAAS FALL ARREST,8FT FR | 1 | includes instructions and decals | 333 |
| 10C- | 1261020GT | ASSY,TFAAS TRACK,8FT FR |  | includes decals | 333 |
| 10D | 1256378GT | ACC,TFAAS FALL ARREST,6FT WORD | 1 | includes instructions and decals | 333 |
| 10D- | 1256380GT | ASSY,TFAAS TRACK,6FT WORD |  | includes decals | 333 |
| 10E | 1261023GT | ACC,TFAAS FALL ARREST,6FT SYM | 1 | includes instructions and decals | 333 |
| 10E- | 1261025GT | ASSY,TFAAS TRACK,6FT SYM |  | includes decals | 333 |
| 10F | 1261019GT | ACC,TFAAS FALL ARREST,6FT FR | 1 | includes instructions and decals | 333 |
| 10F- | 1261021GT | ASSY,TFAAS TRACK,6FT FR |  | includes decals | 333 |
| 11 | 40434GT | DECAL,LANYARD ANCHORAGE POINT | 1 |  | 333 |
| 12 | 1256439GT | TROLLEY, TFAAS TRACK | 1 |  | 333 |

#### 822.1 Platform Mesh-Side Swing Gate 8' and 6'  (p. 334)

Platform mesh kits, side swing gate, 6 ft and 8 ft.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 1286622GT | KIT, 6' FULL MESH,SIDE GATE |  |  | 335 |
| - | 1275282GT | KIT, 6' HALF MESH,SIDE GATE |  |  | 335 |
| - | 1283049GT | KIT, 8' FULL MESH,SIDE GATE |  |  | 335 |
| - | 1275281GT | KIT, 8' HALF MESH,SIDE GATE |  |  | 335 |
| 1 | 1278793GT | WELDMENT,PLATFORM MESH GATE | 1 |  | 335 |
| 2 | 56424GT | CLAMP,1.25X.5 RUBBER-CUSHION |  |  | 335 |
| 3 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 335 |
| 4 | 824079GT | SCREW,HHF,1/4-20X1,8,ZAG |  |  | 335 |
| 5 | 824078GT | SCREW,HHF,1/4-20X.75,8,ZAG |  |  | 335 |
| 6 | 824113GT | WASHER,FLAT,USS,1/4,ZAG |  |  | 335 |
| 7 | 1277924GT | NUT,NYLOCK FLG,1/4-20,F,ZAG |  |  | 335 |
| 8 | 1282390GT | LABEL, LIFT GUARD, PLATFORM MESH | 1 |  | 335 |
| (heading) |  | FULL MESH |  |  | 335 |
| 9 | 1282204GT | MESH, 6' FULL,BACK LEFT | 1 | 6 feet platform | 335 |
| 10 | 1278790GT | MESH, 8' FULL,BACK LEFT | 1 | 8 feet platform | 335 |
| 11 | 1282205GT | MESH, 6' FULL,BACK RIGHT | 1 | 6 feet platform | 335 |
| 12 | 1279243GT | MESH, 8' FULL,BACK RIGHT | 1 | 8 feet platform | 335 |
| 13 | 1278792GT | MESH, FULL HEIGHT,ENTRY | 1 | 6 feet platform (front only) | 335 |
| 13- | 1278792GT | MESH, FULL HEIGHT,ENTRY | 2 | 8 feet platform (side & front) | 335 |
| 14 | 1282206GT | MESH, 6' FULL,FRONT RIGHT | 1 | 6 feet platform | 335 |
| 15 | 1278791GT | MESH, 8' FULL,FRONT RIGHT | 1 | 8 feet platform | 335 |
| 16 | 1282207GT | MESH, 6' FULL,FRONT LEFT | 1 | 6 feet platform | 335 |
| 17 | 1279244GT | MESH, 8' FULL,FRONT LEFT | 1 | 8 feet platform | 335 |
| (heading) |  | HALF MESH |  |  | 335 |
| 18 | 1270314GT | PANEL, HALF MESH | 1 | 6 feet platform | 335 |
| 19 | 1270994GT | PANEL, HALF MESH | 1 | 8 feet platform | 335 |
| 20 | 1270313GT | PANEL, HALF MESH | 1 | 6 feet platform | 335 |
| 21 | 1271019GT | PANEL, HALF MESH | 1 | 8 feet platform | 335 |
| 22 | 1271061GT | PANEL, HALF MESH | 1 | 6 feet platform (front only) | 337 |
| 22- | 1271061GT | PANEL, HALF MESH | 2 | 8 feet platform (side & front) | 337 |
| 23 | 1271018GT | PANEL, HALF MESH | 1 | 8 feet platform | 337 |
| 24 | 1270316GT | PANEL, HALF MESH | 1 | 6 feet platform | 337 |
| 25 | 1271040GT | PANEL, HALF MESH | 1 | 8 feet platform | 337 |

#### 822.2 Platform Mesh-Front Swing Gate 8' and 6'  (p. 338)

Platform mesh kits with front half gate, 6 ft and 8 ft.

| Item | Part number | Description | Qty | Notes (serial-number breaks in **bold**) | Page |
|---|---|---|---|---|---|
| - | 1290895GT | KIT, 6' FULL MESH W/FRONT HALF GATE |  |  | 339 |
| - | 1290893GT | KIT, 6' HALF MESH W/FRONT HALF GATE |  |  | 339 |
| - | 1290896GT | KIT, 8' FULL MESH W/FRONT HALF GATE |  |  | 339 |
| - | 1290894GT | KIT, 8' HALF MESH W/FRONT HALF GATE |  |  | 339 |
| - | 1290135GT | KIT,HALF FRONT,SWING GATE |  | includes items 9-16 | 339 |
| - | 128368GT | KIT,SWING GATE W/SPRING | 1 | (Includes items 31) (doesn't include 63311, 1487, and 1488) | 339 |
| 1 | 1278793GT | WELDMENT,PLATFORM MESH GATE | 1 |  | 339 |
| 2 | 56424GT | CLAMP,1.25X.5 RUBBER-CUSHION |  |  | 339 |
| 3 | 56912GT | SPRING CLIP,1/4-20,.025-.15X.54,ZAG |  |  | 339 |
| 4 | 824079GT | SCREW,HHF,1/4-20X1,8,ZAG |  |  | 339 |
| 5 | 824078GT | SCREW,HHF,1/4-20X.75,8,ZAG |  |  | 339 |
| 6 | 824113GT | WASHER,FLAT,USS,1/4,ZAG |  |  | 339 |
| 7 | 1277924GT | NUT,NYLOCK FLG,1/4-20,F,ZAG |  |  | 339 |
| 8 | 1282390GT | LABEL, LIFT GUARD, PLATFORM MESH | 1 |  | 339 |
| 9 | 1283880GT | WELDMENT,ALUM HALF GATE | 1 |  | 339 |
| 10 | 1487GT | GATE LATCH CASTING--DRILLED | 1 |  | 339 |
| 11 | 1488GT | RAILING CATCH CASTING--DRILLED | 1 |  | 339 |
| 12 | 33674GT | PIN,LOCK,SHORT\*\*\* | 1 |  | 339 |
| 13 | 43392GT | BUMPER,BATTERY BOX & RAILS | 1 |  | 339 |
| 14 | 55753GT | BUMPER, PLASTIC, 1.25 O.D. | 3 |  | 339 |
| 15 | 824207GT | RIVET, STL, STL, DOME, 1/4 X .375, ZAG | 14 |  | 339 |
| 16 | 42104GT | SPRING,SHORT PLATFORM GATE | 1 |  | 339 |
| (heading) |  | FULL MESH |  |  | 339 |
| 17 | 1291429GT | MESH, FULL 6',BACK PANEL | 2 | 6 feet platform | 339 |
| 18 | 1290891GT | 8' FULL MESH W/FRONT HALF GATE | 2 | 8 feet platform | 339 |
| 19 | 1291430GT | MESH, FULL 6',FRONT PANEL | 2 | 6 feet platform | 339 |
| 20 | 1290892GT | 8' HALF MESH W/FRONT HALF GATE | 2 | 8 feet platform | 339 |
| 21 | 1291428GT | MESH, FULL 6',SIDE PANEL | 2 | 6 feet platform | 339 |
| 22 | 1278790GT | MESH, 8' FULL,BACK LEFT | 2 | 8 feet platform | 341 |
| (heading) |  | HALF MESH |  |  | 341 |
| 23 | 54458GT | MESH,HALF,LH,6'PLATFORM | 1 | 6 feet platform | 341 |
| 24 | 1270994GT | PANEL, HALF MESH | 1 | 8 feet platform | 341 |
| 25 | 1270313GT | PANEL, HALF MESH | 1 | 6 feet platform | 341 |
| 26 | 1271019GT | PANEL, HALF MESH | 1 | 8 feet platform | 341 |
| 27 | 1271018GT | PANEL, HALF MESH | 1 | 8 feet platform | 341 |
| 28 | 1271040GT | PANEL, HALF MESH | 1 | 8 feet platform | 341 |
| 29 | 1291427GT | MESH, 8' HALF,SIDE PANEL | 2 | 8 feet platform | 341 |
| (heading) |  | FULL GATE |  |  | 341 |
| 30 | 54457GT | MESH,HALF,SWING GATE\*\*\* | 1 |  | 341 |
| 31 | 128374GT | WELDMENT,SWING GATE,ALUMINUM |  |  | 341 |
| 31- | 42104GT | SPRING,SHORT PLATFORM GATE |  |  | 341 |
| 31- | 43392GT | BUMPER,BATTERY BOX & RAILS |  |  | 341 |
| 32 | 824207GT | RIVET, STL, STL, DOME, 1/4 X .375, ZAG |  |  | 341 |
| 33 | 63311GT | SNAP PIN |  |  | 341 |
| 34 | 1487GT | GATE LATCH CASTING--DRILLED |  |  | 341 |
| 35 | 1488GT | RAILING CATCH CASTING--DRILLED |  |  | 341 |


---

## 6. Coverage note

**Pages read in full (text layer, one row per part, then spot-checked against page
images):** pp. 1, 7–9 (cover/TOC), 10–59 (decals, chassis, turntable covers, engine
compartment, tank side), 66–73 (turntable centre, secondary lift cylinder), 80–129 (all
engine sections), 130–207 (all boom and platform sections), 270–283 (platform
accessories, hostile environment, load sense), 284–297 (belt-driven generators, air
line), 300–315 (air cleaners, cold start, welder chassis/platform), 318–341 (welder
generator, hydraulic generator, boom latch, aircraft package, OPS, fall arrest, mesh
kits) and 342–358 (part-number index start, notes, back cover — index not
reproduced). Pages 2–6 (introduction) have no text layer and were read from rendered
images with PyMuPDF; quoted in §2. The drawing pages (even pages) carry only the
header and were not needed for the tables; pp. 21 and 115 were rendered to resolve
two ambiguous rows.

**Deliberately not reproduced here (other files):** 305.1 Ground controls (pp. 60–65),
308.1 Wire harness diagram (pp. 74–79), 603.1–606.1 platform control box, toggle lid,
joysticks (pp. 208–219), 700–714.1 hydraulic manifolds, hoses and pumps (pp. 220–269),
809.1 circuit board heater (p. 298), 814.1 and 817.1 welder/generator hoses (pp. 316–317,
322–323).

**Things I could not parse or that are printed oddly:**

* p. 21 item 1 `AXLE CVR W/DECALS,RR` has no part number printed (the LR/LF/RF covers
  do: 106446GT, 106449GT, 106448GT). The RR cover is probably 106447GT (inferred from
  the sequence only — verify with Genie).
* p. 21 items 2 and 11 axle castings, p. 45 fuel tank tube, p. 81 muffler 60550GT, p. 87
  B3.3T exhaust tube, p. 95/99/109/113 medium-pressure filter 77139, p. 115 muffler
  support weldment and 804D-33T alternator, p. 273 panel-cradle bracket 89724, p. 307
  spring washer 85166: all printed "no longer available" by Genie; replacements are in
  the Notes column where Genie gives one.
* p. 105: the first two rows (139624GT oil pressure switch and 139666GT kit) are printed
  without an item number ahead of item 1.
* p. 113: Perkins 1104C-44 medium-pressure filter rows are numbered "29" / "29-" and
  then "39A" / "39A-" in the manual (should read 29A).
* p. 135: the alternating washer/nut/bracket/screw breaks at SN 639 / 640 / 641–649 /
  650 / 651 / 652 are reproduced exactly as printed (they look odd but are Genie's).
* p. 207: platform pivot hardware items 25/26/26B carry "to SN Z62H-3664 / from SN
  Z62H-3665" — a serial series from another model's shared platform, printed as-is.
* Quantities printed as wrapped text ("100 inches", "31-inches", "162-inches",
  "as needed") were re-joined; every such case is on pp. 45, 57, 83, 93, 169, 297.
* The manual prints `*`, `**`, `***` after some descriptions with no legend anywhere in
  the 358 pages; they are kept verbatim (escaped as `\*`).
* Torque values, pressures and procedures are not in this manual — use Service Manual
  1268557GT.

**Completeness check (2026-09-10):** a script compared, page by page, every part-number
token in the extracted text of the 252 included pages against the tokens in the tables
above (after subtracting the "Part No. 106877GT" footer on each page). Result: 0
missing — every printed part number on those pages, including `-SGT`, `P…GT`, `T…GT`
and `6-5206-…GT` forms, appears in this file, on the page number printed in the manual.
