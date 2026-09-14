# 09a — Electrical and control-system parts (Parts Manual 106877GT)

Source: Genie **Parts Manual 106877GT, Rev H.04, July 2024**, "Z-135/70, From
SN100 to 2000", 358 pages, read from `source/106877.pdf` /
`extracted/106877.txt`. (The README/00-source-status describe this manual as
"Rev G6, Jan 2013"; the PDF actually on disk is the later **Rev H.04** — part
numbers below are from that revision.)

Every row in this file is **`[V]` verified** — copied from the printed parts
tables. Part numbers are quoted exactly as printed (Genie prints most numbers
with a `GT` suffix; a `-S` suffix means a service-only part, `P` a painted
part, `T` a Terex-sourced number, `H` an aftermarket alternative). Quantities
are as printed; "—" means the manual leaves the quantity column blank
(typical for hardware and sub-components). "Manual page" is the page number
printed in the footer (which equals the PDF page index); the exploded diagram
is always on the even page before the table.

Serial numbers are Genie sequence numbers within the Z13505/Z13513-xxxx
format (e.g. "to SN 1711" = up to Z135xx-1711).

---

## Table of contents of 106877GT (pp. 7–9)

| Section | Title | Page |
|---|---|---|
| 100 | Decals | 10 |
| 101.1 | Word Decals | 10 |
| 102.1 | Symbol Decals | 16 |
| 200 | Drive Chassis | 20 |
| 201.1 | Top View | 20 |
| 202.1 | Steer Yoke, Wheel Drive and Motor | 24 |
| 203.1 | Steer Sensor and Steer Cylinder | 28 |
| 204.1 | Chassis Components, Yellow Triangle Side | 32 |
| 205.1 | Chassis Components, Blue Triangle Side | 36 |
| 300 | Turntable Components | 38 |
| 301.1 | Tank Side Covers | 38 |
| 302.1 | Engine Side Covers | 42 |
| 303.1 | Engine Compartment Components | 46 |
| 304.1 | Hydraulic Tank Side Components | 50 |
| 305.1 | Ground controls | 60 |
| 306.1 | Turntable Center Components | 66 |
| 307.1 | Secondary Boom Lift Cylinder | 72 |
| 308.1 | Wire Harness Diagram | 74 |
| 400 | Engine Components | 80 |
| 401.1 | Cummins B4.5L Engine, View 1 (to SN 950) | 80 |
| 401.2 | Cummins B3.3T Engine, View 1 (from SN 951) | 86 |
| 402.1 | Cummins B4.5L Engine, View 2 (to SN 950) | 92 |
| 402.2 | Cummins B3.3T Engine, View 2 (from SN 951) | 96 |
| 403.1 | Deutz BF4L 2011 / TD2011L04i Engine, View 1 | 100 |
| 404.1 | Deutz BF4L 2011 / TD2011L04i Engine, View 2 | 104 |
| 405.1 | Perkins 1104C-44 Engine, View 1 (to SN 952) | 110 |
| 405.2 | Perkins 804D-33T Engine, View 1 (from SN 953) | 114 |
| 406.1 | Perkins 1104C-44 Engine, View 2 (to SN 952) | 120 |
| 406.2 | Perkins 804D-33T Engine, View 2 (from SN 953) | 124 |
| 500 | Boom Components | 130 |
| 501.1 | Secondary Boom Tube Reference | 130 |
| 502.1 | Secondary Boom Tube 1 (to SN 1853) | 132 |
| 502.2 | Secondary Boom Tube 1 (from SN 1854) | 138 |
| 503.1 | Secondary Boom Tube 2 | 142 |
| 504.1 | Secondary Boom Tube 3 | 144 |
| 505.1 | Secondary Boom Tube 4 | 146 |
| 506.1 | Secondary Boom Extension Cylinders | 148 |
| 507.1 | Secondary Boom Cable Track and Pull Tube | 152 |
| 508.1 | Secondary Boom Cable and Hose Clamps, Front View | 154 |
| 509.1 | Secondary Boom Cable and Hose Clamps, Rear View | 156 |
| 510.1 | Primary Boom Link, Lever and Lift Cylinder (to SN 359) | 158 |
| 510.2 | Primary Boom Link, Lever and Lift Cylinder (from SN 360) | 162 |
| 511.1 | Primary Boom Angle Sensor and Retract Limit Switch (to SN 1853) | 166 |
| 511.2 | Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854) | 168 |
| 512.1 | Primary Boom Cable Track | 172 |
| 513.1 | Primary Boom Bearings and Wear Pads | 176 |
| 514.1 | Primary Extension Boom | 178 |
| 515.1 | Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (to SN 1853) | 182 |
| 515.2 | Bellcrank, Bellcrank Level Cylinder and Jib Boom Lift Cylinder (from SN 1854) | 186 |
| 516.1 | Jib Boom Cable Track | 190 |
| 517.1 | Jib Boom Extension and Platform Level Cylinders | 194 |
| 518.1 | Jib Boom Tubes and Wear Pads | 196 |
| 519.1 | Platform Rotator | 198 |
| 600 | Platform Components | 200 |
| 601.1 | Platform Mount | 200 |
| 602.1 | Platform configuration | 202 |
| 602.2 | Platform Components | 204 |
| 603.1 | Platform Control Box, View 1 | 208 |
| 604.1 | Platform Control Box, View 2 | 212 |
| 605.1 | Toggle Switch Lid Option | 214 |
| 606.1 | Joysticks | 218 |
| 700 | Hydraulic Components | 220 |
| 701.1 | Traction Manifold, View 1 | 220 |
| 702.1 | Traction Manifold, View 2 | 222 |
| 703.1 | Steer/Axle Manifold | 224 |
| 704.1 | Jib Manifold | 228 |
| 705.1 | Function Manifold, View 1 (to SN 439) | 230 |
| 705.2 | Function Manifold, View 1 (from SN 440) | 232 |
| 706.1 | Function Manifold, View 2 (to SN 439) | 236 |
| 706.2 | Function Manifold, View 2 (from SN 440) | 240 |
| 707.1 | Function Enable Valve and Platform Rotator Manifold | 244 |
| 708.1 | Platform Manifold | 246 |
| 709.1 | Hydraulic Hoses and Fittings, Drive System | 248 |
| 710.1 | Hydraulic Hoses and Fittings, Steering System | 252 |
| 711.1 | Hydraulic Hoses and Fittings, Turntable Components | 254 |
| 712.1 | Hydraulic Hoses and Fittings, Boom Components | 260 |
| 713.1 | Hydraulic Hoses and Fittings, Platform Components | 264 |
| 714.1 | Pumps | 268 |
| 800 | Accessories | 270 |
| 801.1 | Platform Accessories | 270 |
| 802.1 | Hostile Environment Option – Secondary Boom Wipers | 276 |
| 802.2 | Hostile Environment Option – Primary and Jib Boom Wipers, Cable Track Covers | 278 |
| 803.1 | Hostile Environment Option – Bellows Installation | 280 |
| 804.1 | Load Sense | 282 |
| 805.1 | Belt Driven Generator, Deutz Models | 284 |
| 806.1 | Belt Driven Generator, Cummins Models | 288 |
| 807.1 | Belt Driven Generator, Perkins Models | 292 |
| 808.1 | Air Line to Platform | 296 |
| 809.1 | Circuit Board Heater Option | 298 |
| 810.1 | Hostile Environment Option – Engine Air Cleaners (to SN 952) | 300 |
| 810.2 | Hostile Environment Option – Engine Air Cleaners (from SN 953) | 302 |
| 811.1 | Cold Start Package | 304 |
| 812.1 | Welder Option – Chassis Components | 306 |
| 813.1 | Welder Option – Platform Components | 312 |
| 814.1 | Welder Option – Hydraulic Hoses and Fittings | 316 |
| 815.1 | Welder Option – Generator Components | 318 |
| 816.1 | Hydraulic Generator Option | 320 |
| 817.1 | Hydraulic Hoses and Fittings, Hydraulic Generator Option | 322 |
| 818.1 | Boom Latch Kit | 324 |
| 819.1 | Aircraft Protection Package (from 1071) | 326 |
| 820.1 | Operator Protection Structure | 330 |
| 821.1 | Fall Arrest Bar | 332 |
| 822.1 | Platform Mesh – Side Swing Gate 8' and 6' | 334 |
| 822.2 | Platform Mesh – Front Swing Gate 8' and 6' | 338 |
| — | Part Number Index | 342 |

(The TOC prints 822.2 at p.334 and the index at p.338; in the PDF on disk
822.2 actually occupies pp.338–341 and the index starts at p.342.)

---

## 1. Ground control box — section 305.1 (diagram p.60/62/64, tables pp.61, 63, 65)

The ground control box is Genie's **TCON** (turntable controller). The
diagram (p.60) shows the box with the ECM board (item 23) and LCD board (27)
mounted inside the lid, four Deutsch bulkhead connectors on the left side,
and the key switch (9), E-stop (8), LCD lens (10), 20 A breaker (11), alarm
(12), membrane decal (13) and recovery key switch (14) on the face.

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| — | T108692GT | ASSY,RESISTOR, P6R2 | — | (resistor assembly; see harness 308.1 item 6-, from SN 1225 to 1418) | 61 |
| — | T108693GT | ASSY, RESISTOR, P7R/P6R1 | — | (see harness 308.1 item 1-, from SN 1225 to 1418) | 61 |
| 1 | 81551GT | SCREW,PHIL,PHM,6-32 X 1/4 SS | — | | 61 |
| 2 | 6888GT | SCREW, HHC, 1/4-20 X 1 | — | | 61 |
| 3 | 6356GT | WASHER, LOCK, .25 | — | | 61 |
| 4 | 6638GT | WASHER, FLAT, USS, 1/4"Y | — | | 61 |
| 5 | 88315GT | SCREW,SHS,1/4-20 X .25 ZINC | — | SUPERSEDE; USE UNTIL EXHAUSTED | 61 |
| 5A | 1263233GT | BOLT,SHS,5/16X.25X1/4-20,8,ZAG | — | REPLACES 88315 | 61 |
| 6 | 106512GT | CONTROL BOX ASSY,TCON | 1 | does not include item 22; **to SN 1711**; to order provide model, serial number and software revision | 61 |
| 6- | 237069GT | ASSY,CONTROL BOX,TCON,Z135 | — | does not include item 22; **from SN 1712**; to order provide model, serial number and software revision | 61 |
| 7 | 107714GT | GBOX LID W/DECAL,Z135 | 1 | includes item 13 (membrane decal) | 61 |
| 8 | 122519GT | KIT,ESTOP SVC LARGE BOOM | 1 | E-stop service kit | 61 |
| 8- | 66812GT | BUTTON,PUSH,RED MUSHROOM HEAD | 1 | | 61 |
| 8- | 66817GT | E-STOP W/ NC CONTACT | — | | 61 |
| 8- | 66818GT | CONTACT,NC | — | | 61 |
| 8- | 146478GT | BOOT(BELLOWS),E-STOP,BLACK | — | | 61 |
| 9 | 122515GT | KIT,KEYSWITCH SVC LARGE BOOM | 1 | main (platform/off/ground) key switch service kit | 61 |
| 9- | 66811GT | KEYSWITCH,3POS.MNTND.DR WKEY** | 1 | includes keyswitch and two keys; base and contacts not included | 61 |
| 9- | 66821GT | BASE,WITHOUT CONTACTS | 1 | | 61 |
| 9- | 66816GT | CONTACT,N.O.*** | 5 | | 61 |
| 9- | 122367GT | KEYSWITCH,DUMMY BLOCK | 1 | | 61 |
| 9- | 122366GT | KEYSWITCH,CONTACTS LOCK | — | | 61 |
| 9- | 83093GT | KEY SINGLE*** | — | | 61 |
| 10 | 62374GT | LENS,LCD,GRND.CONTROL | 1 | | 61 |
| 11 | 147095GT | ASSY, CIRCUIT BREAKER 20A | 1 | ground-box 20 A breaker | 61 |
| 12 | 62379GT | ALARM,AUDIO,SUPERBOOM* | 1 | ground-station alarm | 61 |
| 12- | 72326GT | NUT - PLASTIC, RING FOR ALARMS | — | | 61 |
| 13 | 106510GT | DECAL,MEMBRANE,GROUND CONTROL | 1 | membrane overlay | 63 |
| 14 | 122516GT | KIT,RECOVERY SVC LARGE BOOMS | 1 | **recovery / bypass key switch** service kit | 63 |
| 14- | 88150GT | KEYSWITCH,3 POS.MOM.DR,W/KEY** | 1 | 3-position momentary key switch | 63 |
| 14- | 66821GT | BASE,WITHOUT CONTACTS | 1 | | 63 |
| 14- | 66816GT | CONTACT,N.O.*** | 3 | | 63 |
| 14- | 66818GT | CONTACT,NC | 3 | | 63 |
| 14- | 122366GT | KEYSWITCH,CONTACTS LOCK | 1 | | 63 |
| 15 | 215590GT | WELDMENT,KEYSWITCH COVER | — | cover over recovery key switch | 63 |
| 16 | 73717GT | CONN, RECEP, 4 WAY, DEUTSCH, DTP, FLANGE | 1 | bulkhead receptacle (power) | 63 |
| 17 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 | — | | 63 |
| 18 | 6146GT | WASHER,FLAT,MS,#10,Y | — | | 63 |
| 19 | 6178GT | NUT, NYLOCK, 10-32 | — | | 63 |
| 20 | 94981GT | STUD,POWER 3/8" RED | 1 | +12 V power stud | 63 |
| 21 | 94982GT | STANDOFF, 3/8" BLACK | 1 | ground stud | 63 |
| 22 | 60571-SGT | BRACKET,CNTL BOX MOUNTING*** | 1 | not included in box assemblies 106512 / 237069 | 63 |
| 23 | 217570GT | ASSY,SRV,PCB ASSY,ECM,GRD,V202 | 1 | **TCON ECM board, to SN 1711.** "Machine model and serial number and software revision required when ordering. Please contact Genie Service Parts for assistance" | 63 |
| 23- | 1258461GT | PCB,ASSY,ECM,GROUND,PGMD | — | **TCON ECM board, programmed, from SN 1712.** Same ordering note | 63 |
| 24 | 12344GT | NUT,NYLOCK,6-32 | — | ECM board mounting | 63 |
| 25 | 49820GT | SCREW,PHILLIPS,PHM,6-32 X .5 | — | ECM board mounting | 63 |
| 26 | 62375GT | CLIP,LCD,GRND.CONTROL | 1 | | 63 |
| 27 | 88056GT | PCB.ASSY,LCD,GROUND | 1 | ground-station LCD display board | 63 |
| 27- | 122258GT | FIELD KIT,LCD HEATER | — | LCD heater option | 63 |
| 27- | 122406GT | ASSEMBLY,LCD HEATER ALC1000 | — | LCD heater option (transparent heater) | 63 |
| 27- | 122792GT | ASSY,BRACKET,KS CONTACT BLOCK | — | LCD heater option (includes thermostat switch 122793) | 63 |
| 27- | 122793GT | SWITCH,THERMOSTAT 60F OPEN | — | LCD heater option | 63 |
| 28 | 82812GT | DECAL,LABEL,READ THE SERV MAN* | 1 | | 63 |
| 29 | 56457-SGT | SWITCH,TOGGLE,SPDT,2 POS MAINT | 1 | maintained 2-position toggle inside box (shown on lid interior, p.60) | 63 |
| 30 | 88177GT | GASKET,GROUND CONTROL BOX | 1 | | 65 |

Notes printed in this section: control-box assemblies and ECM boards must be
ordered with **model, serial number and software revision**; there is no
"calibration required" note on the TCON board itself (the calibration notes
are on the SCON, sensors and joysticks — see below).

---

## 2. Engine-compartment electrical — section 303.1 (diagram p.46/48, tables pp.47, 49)

Relay/fuse plate, engine battery, horn.

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 6 | 107525PGT | PLATE,RELAY MOUNT | 1 | | 47 |
| 8 | 88266GT | COVER,RELAY | 1 | | 47 |
| 9 | 237068GT | SEPARATOR,DUAL BATTERY,100A | 1 | battery separator (engine battery ↔ aux batteries) | 47 |
| 9- | 214393GT | KIT, BATT SEPARATOR, ANSI/CSA | — | includes part 237068 | 47 |
| 9- | 215209GT | KIT, BATT SEPARATOR, CE | — | includes part 237068 | 47 |
| 9- | 215210GT | KIT, BATT SEPARATOR, AS | — | includes part 237068 | 47 |
| 10 | 53967GT | SOLENOID,12V CONTINOUS | 1 | Cummins models | 47 |
| 11 | 107543GT | FORMING,FUSE COVER | 1 | Cummins models | 47 |
| 12 | 60940GT | HOLD DOWN,BATTERY,SMALL | 1 | | 47 |
| 13 | 45708GT | HOOK,BATT HOLD DOWN,10" | 1 | | 47 |
| 14 | 107512PGT | BATTERY TRAY FORMING,PAINTED | 1 | | 47 |
| 15 | 61225GT | RELAY,12VDC,70AMP,SEALED | 2 | Perkins and Deutz models | 47 |
| 15- | 61225GT | RELAY,12VDC,70AMP,SEALED | 1 | Cummins models | 47 |
| 16 | 60536GT | FUSE,20 AMP,MAXI | 2 | | 47 |
| 17 | 94327GT | FUSE,30 AMP | 1 | | 47 |
| 18 | 101340GT | FUSE,60 AMP,MAXI | 1 | Perkins and Deutz models | 47 |
| 19 | 34052GT | RELAY,SPDT,12V(AUTO) PLUG IN** | 3 | automotive plug-in relays | 47 |
| 22 | 1303581GT | BATTERY, 12V, 950CCA, FLA | 1 | engine (start/controls) battery | 47 |
| 23 | 81578GT | HORN,12VDC,SPADE TERMINALS*** | 1 | | 47 |
| 24 | 89997GT | RELAY MODULE(89996,89998) | 1 | relay module referenced by the throttle-solenoid sections ("Ref. Relay Module (refer to 303.1)") | 47 |

Related items in section 302.1 (Engine Side Covers, p.45): 70535PGT
BRACKET,BATTERY CABLE PAINTED (qty 1); 60890GT SENDER,LOW FUEL INDICATOR
(fuel tank sender, item 43-).

---

## 3. Hydraulic-tank side — SCON, auxiliary power units, aux batteries, oil-cooler fan — section 304.1 (tables pp.51–59)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 14 | (ref.) | Ref. Power to Platform Harness, Secondary (refer to section 308.1) | 1 | | 55 |
| 15 | 7057GT | CONN. SQZ,1/2NPT .39-.56 MED. | 1 | squeeze connector for power-to-platform cable | 55 |
| 16 | 71259GT | OIL COOLER W/FAN, 12VDC | 1 | | 55 |
| 16- | 75854GT | FAN - VENTED | — | | 55 |
| 16- | 75855GT | THERMOSTAT -OIL COOLER (71259) | — | | 55 |
| 22 | 139647-SGT | MODULE,SCON,V2.00,SERVICE | 1 | **SCON safety controller, to SN 1711** — "machine needs to be recalibrated after installing a new module" | 55 |
| 22- | 1258463GT | MODULE,SCON,PROGRAMMED | — | **SCON, from SN 1712** — "machine needs to be recalibrated after installing a new module" | 55 |
| 26 | 101361GT | POWER UNIT,AUX PUMP 12 VDC | 2 | auxiliary power units (two) | 57 |
| 26- | 58489GT | PUMP ASSY,AUX.POWER UNIT 89617 | — | | 57 |
| 26- | 62412GT | SOLENOID,MOTOR START,60511,APU | — | APU start solenoid | 57 |
| 26- | 101682GT | CABLE ASSY NEG 2GA BLACK AUX#1 | (31") | qty column prints "31-" (length in inches) | 57 |
| 26- | 101683GT | CABLE ASSY NEG 2GA BLACK AUX#2 | (34") | qty column prints "34-" | 57 |
| 26- | 101180GT | CABLE ASSY,GND,BAT1 TO BAT2 | — | aux battery 1 ↔ 2 link | 57 |
| 26- | 101181GT | BATTERY CABLE,2GA RED,AUX | 16 | (printed "16") | 57 |
| 26- | 101182GT | BATTERY CABLE 2GA RED AUX#2 | (63") | qty column prints "63-" | 57 |
| 26- | 101185GT | CABLE ASSY,AUX BATT JUMPER,RED | (5") | qty column prints "5-i" | 57 |
| 28 | 107511GT | FORMING,BATTERY BOX,MOUNT | 2 | | 57 |
| 30 | 107510PGT | COVER,BATTERY BOX*** | 1 | | 57 |
| 30- | 36424GT | THUMB SCREW W/SHOULDER 3/8-16 | 2 | | 57 |
| 31 | 56462GT | BATTERY, J 305GH, 315AH | 2 | **auxiliary batteries** (two 6 V deep-cycle, shown as "6V" on the harness diagram feeding the APUs) | 57 |
| 31- | 57162GT | BATTERY TERMINAL PROTECTORS | 6 | | 57 |
| 32 | 107509GT | WELDMENT,BATTERY BOX | 1 | | 57 |

---

## 4. Drive chassis controller DCON — section 205.1 (diagram p.36, table p.37)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 17 | 101927GT | FORMING,DCON MOUNT | 1 | | 37 |
| 18 | 101004GT | MODULE,DCON | 1 | drive chassis controller; no SN break, no calibration note printed | 37 |
| 19 | 8915GT | SCREW, HHC, 1/4-20 X 1.25 | — | | 37 |
| 20 | 6638GT | WASHER, FLAT, USS, 1/4"Y | — | | 37 |
| 21 | 6091GT | NUT,NYLOCK,1/4-20 | — | | 37 |

---

## 5. Turntable center — limit switches and hydraulic/electrical swivel (rotator) — section 306.1 (tables pp.67–71)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 7 | 110915GT | SWITCH ASSY,LIMIT LST10 | 1 | turntable limit switch (printed "LST10"; diagram p.74 labels item 25 as LST1O) | 67 |
| 7- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC | — | switch body | 67 |
| 7- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 79 | (inches) | 67 |
| 7- | 119065GT | CONN, RECEP, 2 WAY, DEUTSCH, DT | — | | 67 |
| 7- | 60439GT | CONN, RECEP, 2 WAY, DEUTSCH, DT, LOCK | — | | 67 |
| 7- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP | — | | 67 |
| 8 | 110917GT | SWITCH ASSY,LIMIT LST1S | 1 | turntable limit switch | 67 |
| 8- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC | — | | 67 |
| 8- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 76 | | 67 |
| 8- | 119762GT | CONN PLUG 4 WAY EXTEND DT | — | | 67 |
| 8- | 60429GT | LOCK, PLUG 4WAY, 14-18GA | — | | 67 |
| 8- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG … DEUTSCH, STRIP | — | | 67 |
| 12 | 110916GT | SWITCH ASSY,LIMIT LST1O | 1 | turntable limit switch | 67 |
| 12- | 110771-43103GT | SWITCH LIMIT W/ROLLER NO/NC | — | | 67 |
| 12- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 79 | | 67 |
| 12- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP | — | | 67 |
| 12- | 60443GT | LOCK, RECEP 4WAY, 14-18GA | — | | 67 |
| 12- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG … DEUTSCH, STRIP | — | | 67 |
| 13 | 217689GT | BRACKET, LS, DRIVE ROT. | 1 | limit-switch bracket, drive/rotate | 67 |
| 14 | 60575PGT | BRACKET,HYD.ROTATOR MOUNT MNT | 2 | | 69 |
| 28 | 106498GT | HYDRAULIC SWIVEL SUPPORT | 1 | | 69 |
| 29A | 1253702GT | ASSY, HYD/ELEC 5 PORT/10 CONT | 1 | **complete hydraulic + electrical swivel.** "previous swivels 122918, 89437 and 107533 are no longer available, for a complete replacement order swivel assembly 1253702" | 69 |
| 29A- | 1253699GT | ASSY., HYDRAULIC SWIVEL, 5 POR | — | part of 1253702 | 69 |
| 29A- | 1276830GT | SEAL KIT,HYDRAULIC SWIVEL(1253699) | — | for 1253699 | 69 |
| 29A- | 1253696GT | ASSY., ELECTRIC SWIVEL, 10 CON | — | **10-contact electrical rotator**, part of 1253702 | 69 |
| 29A- | 1253698GT | MACHINED, SWIVEL ANTI-ROTATION | — | part of 1253702 | 69 |
| 29A- | 10107GT | SCREW,HHC,5/16-18 X .75 | — | part of 1253702 | 69 |
| 29A- | 1253709GT | SCREW,SHC,7/16-14X1.25,A574,YZ | — | part of 1253702 | 69 |
| 29A- | 1253697GT | MACHINED, SWIVEL MOUNTING | — | part of 1253702 | 69 |
| 29B | — | (previous swivels) | — | "previous swivels 122918, 89437 and 107533 are no longer available, for a complete replacement order swivel assembly 1253702" | 69 |
| 29B- | 122919GT | SWIVEL,ELECTRIC 10 CONTACT*** | — | part of swivel assembly 122918 | 69 |
| 29B- | 75126GT | SWIVEL,HYDRAULIC,5 PORT | — | part of swivel assemblies 89437 and 107533 | 69 |
| 29B- | T106954GT | SEAL, O-RING LIP | — | part of 89437 / 107533 | 69 |
| 29B- | T106955GT | SEAL, POLY, CHAMFER | — | part of 89437 / 107533 | 71 |
| 29B- | T106956GT | SEAL,O-RING,SQUARE | — | part of 89437 / 107533 | 71 |
| 29B- | T106960GT | SEAL, CAP | — | part of 89437 / 107533 | 71 |
| 29B- | 75128GT | SPACER,SWIVEL MOUNT | — | part of swivel assembly 89437 | 71 |
| 29B- | 102279GT | ROTATOR,ELECT,10 CONT*** | — | **older 10-contact electrical rotator**, part of swivel assemblies 89437 and 107533 | 71 |
| 29B- | 106914GT | CHANNEL, MOUNTING | — | part of 107533 and 122918 | 71 |
| 29B- | 62321GT | SEAL KIT,HYD SWIVEL (75126)*** | — | | 71 |
| 29B- | 75129GT | ARM,ANTI-ROTATION,SWIVEL*** | — | | 71 |
| 29B- | 10107GT | SCREW,HHC,5/16-18 X .75 | — | | 71 |
| 29B- | 75130GT | SCREW,SHC,7/16-14 X .75,61342 | — | | 71 |

---

## 6. Sensors

### 6a. Steer angle sensors — section 203.1 (diagram p.28/30, tables pp.29, 31)

One steer sensor per wheel (harness diagram shows RSLF1SO, RSRF1SO, RSLR1SO,
RSRR1SO; section 308.1 lists qty 4).

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 12 | 60609GT | COVER,STEERING SENSOR | 1 | | 29 |
| 13 | 8914GT | SCREW, HHC, 1/4-20 X .625 | — | | 29 |
| 14 | 6090GT | SCREW, HHC, 1/4-20 X .75 | — | | 29 |
| 15 | 6638GT | WASHER, FLAT, USS, 1/4"Y | — | | 29 |
| 16 | 106187GT | SUBASSY,STEER SENSOR | — | includes items 12 and 17 — **"(calibration required after replacement)"** | 29 |
| 16- | 119066GT | CONN, RECEP, 3 WAY, DEUTSCH, DT, ENDCAP | — | 3-way DT receptacle on sensor | 29 |
| 16- | 60441GT | CONN, RECEP, 3 WAY, DEUTSCH, DT, LOCK | — | | 29 |
| 16- | 75633GT | TERM,GOLD PIN,14/16 GA,BULK | — | | 29 |
| 17 | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 | — | sensor screws | 29 |
| 18 | 60618GT | ACTIVATOR,STEER SENSOR | 1 | sensor actuator (drive tab) | 29 |
| 19 | 75087GT | PIN,AXLE KING | 1 | | 29 |

### 6b. Axle position sensors — section 204.1 (diagram p.32/34, tables pp.33, 35)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 17 | 107536GT | WELDMENT,PIN,AXLE SENSOR | 2 | | 33 |
| 17- | 101499GT | WASHER,THRUST,2.5 X 5.5 X .250 | 2 | not shown | 33 |
| 18 | 60609GT | COVER,STEERING SENSOR | 2 | same cover as steer sensor | 33 |
| 19 | 94985GT | SENSOR,AXLE POSITION | 2 | **"(calibration required after replacement)"** (diagram labels RSFA1O / RSRA1O) | 33 |
| 19- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP | — | 4-way DT receptacle on sensor | 35 |
| 19- | 60443GT | LOCK, RECEP 4WAY, 14-18GA | — | | 35 |
| 19- | 60757GT | PLUG, SEAL, 12-18GA | — | | 35 |
| 19- | 75633GT | TERM,GOLD PIN,14/16 GA,BULK | — | | 35 |
| 20 | 60618GT | ACTIVATOR,STEER SENSOR | 2 | actuator used on axle sensor too | 35 |
| 21 | 49816GT | SCREW,PHILLIPS,PHM,10-32 X .75 | — | | 35 |
| 22 | 6178GT | NUT, NYLOCK, 10-32 | — | | 35 |
| 35 | 101704GT | FORMING,BRACKET,SENSOR | 4 | | 35 |

Axle-extend limit switches (LSFA1ES / LSRA1ES) are in section 201.1 — see §7.

### 6c. Boom angle sensors (secondary/riser, primary, bellcrank/jib)

Three rotary angle sensors. Up to SN 1853 all three used the same dual-output
sensor **94980GT**, which is **no longer available**; first-time replacement
is by a kit that converts to the SN 1854-style matched sensor/magnet assembly.
Every entry carries **"calibration required after replacement"**.

**Secondary (riser) boom angle sensor — 502.1 (to SN 1853, table p.135) and 502.2 (from SN 1854, table p.141); pivot pin in 307.1 (p.73)**

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 307.1-3 | 101716GT | WELDMENT,RISER ROTARY SNSR PIN | 1 | riser rotary sensor pin (secondary lift cylinder section) | 73 |
| 307.1-3- | (ref.) | Ref. ASSY,ANGLE SEN.,Z135 SECONDARY | — | refer to 502.1 or 502.2 | 73 |
| 502.1-20 | 101599GT | KEY,BALL POINT HEX | 1 | | 135 |
| 502.1-21 | (ref. 94980) | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | "(calibration required after replacement). Older sensor part 94980 is no longer available. For first time replacement, order kit 217238 or 824587 (refer to 502.2)" | 135 |
| 502.1-21- | 217238GT | KIT,Z135 SECONDARY ANGLE SEN. | — | **from SN 652 (including SN 640 and 650)** | 135 |
| 502.1-21- | 824587GT | KIT,Z135 SECONDARY ANGLE SEN | — | **to SN 651 (excluding SN 640 and 650)** | 135 |
| 502.1-23 | 101708GT | MACH,RISER ROTARY SENSOR BRKT | 1 | to SN 639; also from SN 641 to 649; also SN 651 | 135 |
| 502.1-23- | 128357GT | MACH,RISER ROTARY SENSOR BRKT | 1 | SN 640; SN 650; from SN 652 | 135 |
| 502.2-20 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 | — | | 141 |
| 502.2-21 | 226493GT | MACHINED, SECONDARY SEN. BASE | — | | 141 |
| 502.2-22 | 226491GT | MACHINED, ANGLE SENSOR RACE | — | | 141 |
| 502.2-23 | 216061GT | SENSOR, ANGLE, 180 DEG, CW | — | **"Sensor and magnet are matched and must be replaced at the same time. Machine calibration is required after installation."** | 141 |
| 502.2-24 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB | — | | 141 |
| 502.2-25 | 226492GT | MACHINED, ANGLE SENSOR HOLDER | — | | 141 |
| 502.2-26 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 | — | | 141 |
| 502.2-27 | 233116GT | MACHINED, SENSOR ARM | — | | 141 |
| 502.2-28 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB | — | | 141 |
| 502.2-29 | 217224GT | ASSY,ANGLE SEN.,Z135 SECONDARY | — | (Complete) includes items 20 to 28; **calibration required after replacement**; included in kits 217238 and 824587 | 141 |
| 502.2-30 | 217236GT | SCREW,SHS,3/4X2.25X5/8-11,ZAG | — | | 141 |
| 502.2-34 | 233117GT | WLDT, SENSOR ROTATOR #1 | — | | 141 |

**Primary boom angle sensor and retract limit switch — 511.1 (to SN 1853, table p.167) and 511.2 (from SN 1854, tables pp.169, 171)**

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 511.1-7 | 101715GT | WELDMENT,PRI.ROTARY SENSOR PIN | 1 | | 167 |
| 511.1-8 | 101599GT | KEY,BALL POINT HEX | 1 | | 167 |
| 511.1-14 | (ref. 94980) | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | "(calibration required after replacement). Older sensor part 94980 is no longer available at this location. For first time replacement, order kit 217246 (refer to 511.2)" | 167 |
| 511.1-14- | 217246GT | KIT,Z135 PRIMARY ANGLE SEN. | — | (refer to 511.2) | 167 |
| 511.1-15 | 101710GT | MACH,PRI.ROTARY SENSOR | 1 | sensor bracket | 167 |
| 511.1-16 | 94814GT | PIN,2.25 DIA X 5.10LG,THREADED | 1 | | 167 |
| 511.1-18 | 49817GT | SCREW,PHILLIPS,PHM,10-32 X1.25 | — | | 167 |
| 511.1-19 | 110913GT | SWITCH ASSY,LIMIT LSP1RO | 1 | primary boom retract limit switch | 167 |
| 511.1-19- | 110771-42163GT | SWITCH,LIMIT W/ROLLER NO/NC | — | | 167 |
| 511.1-19- | 43960GT | WIRE CABLE,16/4 CON.TPE JKT | 29 | inches | 167 |
| 511.1-19- | 119067GT | CONN, RECEP, 4 WAY, DEUTSCH, DT, ENDCAP | — | | 167 |
| 511.1-19- | 60443GT | LOCK, RECEP 4WAY, 14-18GA | — | | 167 |
| 511.1-19- | 73713GT | TERMINAL, PIN, DT, 14-18 AWG … DEUTSCH, STRIP | — | | 167 |
| 511.2-2 | 110913GT | SWITCH ASSY,LIMIT LSP1RO | 1 | same switch, from SN 1854 (sub-items identical, cable "29 inches") | 169 |
| 511.2-8 | 233118GT | WLDT, SENSOR ROTATOR #2 | — | | 169 |
| 511.2-9 | 218757GT | WLDT., PRIMARY SENSOR PIN | — | | 169 |
| 511.2-10 | 215728GT | ASSY,ANGLE SEN.,Z135 PRIMARY | — | (Complete) includes items 14 to 22; **Calibration required after replacement** | 169 |
| 511.2-13 | 217235GT | SCREW,SHS,3/4X1.5X5/8-11,ZAG | — | | 169 |
| 511.2-14 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 | — | | 169 |
| 511.2-15 | 226489GT | MACHINED, PRIMARY SENSOR BASE | — | | 169 |
| 511.2-16 | 226491GT | MACHINED, ANGLE SENSOR RACE | — | | 169 |
| 511.2-17 | 216061GT | SENSOR, ANGLE, 180 DEG, CW | — | **matched sensor/magnet; machine calibration required after installation** | 169 |
| 511.2-18 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB | — | | 169 |
| 511.2-19 | 226492GT | MACHINED, ANGLE SENSOR HOLDER | — | | 169 |
| 511.2-20 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 | — | | 169 |
| 511.2-21 | 233116GT | MACHINED, SENSOR ARM | — | | 169 |
| 511.2-22 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB | — | | 169 |
| 511.2-23 | 94814GT | PIN,2.25 DIA X 5.10LG,THREADED | 1 | | 169 |

**Bellcrank (jib) angle sensor — 515.1 (to SN 1853, table p.183) and 515.2 (from SN 1854, tables pp.187, 189)**

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 515.1-8 | 101713GT | WELD.BCRANK ROTARY SENSOR PIN | 1 | | 183 |
| 515.1-9 | 101599GT | KEY,BALL POINT HEX | 1 | | 183 |
| 515.1-10 | 101709GT | MACH,BELLCRANK ROT SENSOR BRKT | 1 | | 183 |
| 515.1-10- | 128358GT | MACH,BELLCRANK ROT SENSOR BRKT | — | alternate bracket | 183 |
| 515.1-14 | (ref. 94980) | Ref. SENSOR,DUAL OUTPUT,ANGLE | 1 | "(calibration required after replacement). Older sensor part 94980 is no longer available. For first time replacement order kit 217313, 824589, or 824692 (refer to 515.2)" | 183 |
| 515.1-14- | 217313GT | KIT,Z135 BELL CR ANGLE SEN. | — | **from SN 659** | 183 |
| 515.1-14- | 824589GT | KIT,Z135 BELL CR. ANGLE SEN | — | **from SN 327 to 658** | 183 |
| 515.1-14- | 824692GT | KIT,Z135 BELL CR. ANGLE SEN. | — | **to SN 326** | 183 |
| 515.1-28 | 119527GT | FORMING,BCRANK ROTATE SW CVR | 1 | sensor/switch cover | 185 |
| 515.2-9 | 233118GT | WLDT, SENSOR ROTATOR #2 | — | | 187 |
| 515.2-13 | 217293GT | ASSY,ANGLE SEN.,Z135 BELL CR | — | (Complete) includes items 25 to 33; **calibration required after replacement**; included in kits 217313, 824589 and 824692 | 187 |
| 515.2-14 | 217234GT | SCREW,SHS,3/4X1.25X5/8-11,ZAG | — | | 187 |
| 515.2-25 | 217217GT | SCREW,FHSCS,M4-0.7X14 CL10.9 | — | | 189 |
| 515.2-26 | 226487GT | MACHINED, BELL CR SEN. BASE | — | | 189 |
| 515.2-27 | 226491GT | MACHINED, ANGLE SENSOR RACE | — | | 189 |
| 515.2-28 | 216061GT | SENSOR, ANGLE, 180 DEG, CW | — | **matched sensor/magnet; machine calibration required after installation** | 189 |
| 515.2-29 | 237242GT | SCREW,FHS,M3-0.5X8,DIN7991,10.9,ZAB | — | | 189 |
| 515.2-30 | 226492GT | MACHINED, ANGLE SENSOR HOLDER | — | | 189 |
| 515.2-31 | 237241GT | SCREW,FHS,M3-0.5X14,DIN7991,10 | — | | 189 |
| 515.2-32 | 233116GT | MACHINED, SENSOR ARM | — | | 189 |
| 515.2-33 | 217219GT | SCREW,SHC,M4-0.7X14 DIN912,12.9,ZAB | — | | 189 |

Harness-diagram entry (308.1 item 30, p.77): **94980GT SENSOR,DUAL OUTPUT,
ANGLE***, qty 3 — "(calibration required after replacement). Older sensor
part 94980 is no longer available for Boom Angle Sensor after SN 12853. For
first time replacement order kit 217246 (refer to 511.2)". The "SN 12853" is
as printed and is almost certainly a typo for SN 1853 (the break used by
sections 502/511/515).

### 6d. Platform level (tilt) sensor — section 519.1 Platform Rotator (diagram p.198, table p.199)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 1 | 88576GT | ROTATOR,NON-JIB | 1 | "88576 is the correct rotator for the Z-135." (hydraulic platform rotator) | 199 |
| 7 | T108075GT | PIN,1.25DIAX5.25LG,1HOLE | 1 | | 199 |
| 8 | 50813GT | SENSOR,TILT,PCON (PLASTIC)**** | 1 | **platform level sensor**, mounted at the platform rotator (harness diagram "PLATFORM LEVEL SENSOR" on harness 13) | 199 |
| 9 | 8914GT | SCREW, HHC, 1/4-20 X .625 | — | | 199 |
| 10 | 6638GT | WASHER, FLAT, USS, 1/4"Y | — | | 199 |

### 6e. Turntable level / tilt sensor

**Not listed as a separate part anywhere in 106877GT.** No "SENSOR,TILT" other
than 50813GT (platform) appears in the manual; the chassis tilt function is
inside the SCON module (139647-S / 1258463) and is not separately orderable
from this manual. (Decal 33952GT DECAL,DANGER,TILT ALARM, p.11, is the only
other "tilt" item.)

### 6f. Length / extend sensing

There are **no boom-length or extension potentiometers/encoders** in this
manual. Boom extension state is sensed only by limit switches (LSS1RO,
LSS1RS, LSS1EO, LSP1RO, LSJ1RO — §7).

### 6g. Load sense / overload — section 804.1 (diagram p.282, table p.283) and harness 308.1

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 1 | 61997GT | WELDMENT,PLATFORM SUPPORT,CE | 1 | CE models (spring-loaded load-sense platform support) | 283 |
| 6 | 25685GT | BEARING,GARLOCK,12FDU12 | 8 | | 283 |
| 10 | 61977GT | RETAINER,SPRING,1.46 X .375 | 1 | | 283 |
| 11 | 61976GT | SPRING,COMP,1-1/4"OD 352 LB/IN | 1 | load-sense spring | 283 |
| 12 | 89755GT | LOAD SUPPORT W/BEARINGS | 2 | includes items 6 & 15 | 283 |
| 13 | 101441GT | HARN,LS,PLUNGER,LOAD LIMIT | 1 | **to SN 1711** — plunger limit switch with harness (LSPL1S) | 283 |
| 13- | 146399GT | ASSY, LS, LOAD SENSE, ALC1000 | — | **from SN 1712** | 283 |
| 15 | 110789GT | WASHER,SHIM .0151 THK. | as req'd | | 283 |
| 16 | 61972GT | MOUNT,SWITCH | 1 | | 283 |
| 17 | 34619GT | BUMPER,RUBBER*** | 2 | | 283 |
| 19 | 61804GT | WELDMENT,ROTATOR SUPPORT | 1 | | 283 |
| 20 | 45470GT | CLAMP,0.31,#5 X 1/4,RUB CUSH | 1 | | 283 |
| 308.1-20 | 94549GT | SWITCH,LOAD LIMIT | 1 | load-limit switch (diagram label LSPL1S, next to platform control box) | 77 |

There is **no platform load cell** (strain-gauge type) in 106877GT — the load
sense on this machine is a spring/plunger limit-switch system.

---

## 7. Limit switches — consolidated

All switch assemblies use the 110771-xxxx roller limit switch body, 43960GT
16/4 cable (length in inches printed in the Qty column) and a Deutsch DT
connector. Diagram labels are from the 308.1 wire-harness drawing (p.74).

| Diagram label | Part number (assembly) | Switch body | Cable (in) | Connector | Location / section | Page |
|---|---|---|---|---|---|---|
| LSFA1ES / LSRA1ES (front / rear axle extend) | 110934GT SWITCH ASSY,LIMIT LSFA1ES,LSRA (qty 2 in 201.1; listed twice, items 28 & 29, in 308.1) | 110771-465R3GT SWITCH LIMIT W/ROLLER NO/NC | 39 | 119761GT CONN PLUG 2 WAY EXTEND DT + 60425GT lock + 73714GT socket terminals | 201.1 Top View item 8; guarded by 106070PGT FORMING,LIMIT SWITCH GUARD (qty 2); actuated by T107366GT ASSY,LIM.SW.ACTUATOR BLOCK (110481GT block + 110482GT seal kit) on axle-extend cylinder 98147GT | 21, 77 |
| LST1O / "LST10" (turntable) | 110915GT SWITCH ASSY,LIMIT LST10 | 110771-43103GT NO/NC | 79 | 119065GT 2-way DT recep + 60439GT lock + 73713GT pins | 306.1 item 7 (turntable center) | 67, 77 |
| LST1S (turntable) | 110917GT SWITCH ASSY,LIMIT LST1S | 110771-43103GT NO/NC | 76 | 119762GT 4-way DT plug + 60429GT lock + 73713GT | 306.1 item 8 | 67, 77 |
| LST1O / LST2O (turntable) | 110916GT SWITCH ASSY,LIMIT LST1O | 110771-43103GT NO/NC | 79 | 119067GT 4-way DT recep endcap + 60443GT lock + 73713GT | 306.1 item 12 | 67, 77 |
| LSS1RO (secondary boom retracted) | 110909GT SWITCH ASSY,LIMIT LSS1RO | 110771-64463GT NO/NO | 76 | 119067GT 4-way DT recep + 60443GT + 73713GT | 502.1 / 502.2 item 12, riser boom tube 1 | 133, 139, 77 |
| LSS1RS (secondary boom retracted, safety) | 110910GT SWITCH ASSY,LIMIT LSS1RS | 110771-44463GT NO/NC | 88 | 119762GT 4-way DT plug + 60429GT + 73714GT sockets | 502.1 / 502.2 item 15; bracket 119247PGT BRACKET, RISER EXT L/S ("Units before SN 333 must also purchase part 119248P" ramp, 505.1 item 12) | 133, 139, 77 |
| LSP1EO on the drawing / printed "LSS1EO" (boom extended switch) | 110914GT SWITCH ASSY,LIMIT LSS1EO | 110771-44163GT NO/NC GOLD | 340 | 119065GT 2-way DT recep + 60439GT + 73713GT | 512.1 item 6 — mounted on the **primary** boom cable track (mount 88019PGT FORMING,LIMIT SWITCH MOUNT); the 308.1 drawing labels this position (item 22) LSP1EO while the parts list prints LSS1EO — order by part number | 173, 77 |
| LSP1RO (primary boom retracted) | 110913GT SWITCH ASSY,LIMIT LSP1RO | 110771-42163GT NO/NC | 29 | 119067GT 4-way DT recep + 60443GT + 73713GT | 511.1 item 19 / 511.2 item 2 | 167, 169, 77 |
| LSJ1RO (jib retracted) | 110911GT SWITCH ASSY,LIMIT LSJ1RO | 110771-42223GT NO/NC | 40 | 119065GT 2-way DT recep + 60439GT + 73713GT | 516.1 item 18 (jib cable track) | 191, 77 |
| LSPL1S (load limit) | 94549GT SWITCH,LOAD LIMIT (308.1 item 20); harness 101441GT to SN 1711 / 146399GT from SN 1712 | — | — | — | 804.1 | 77, 283 |

(Note on 308.1 p.77: items 23, 24, 25 are printed as 110916GT "LST1O",
110917GT "LST1S", 110915GT "LST10"; the drawing labels the same three
positions LST2O, LST1S, LST1O. Treat "LST10" as a printing of "LST1O/LST2O"
and order by part number, not by label.)

---

## 8. Wire harnesses and cables — section 308.1 (diagram pp.74/76/78, tables pp.75, 77, 79)

What each harness connects is read from the 308.1 drawing (p.74): the ground
control box (TCON) is at lower-left with harness 1 inside; harness 2 goes to
the 12 V battery/ground; 4 to the function manifold; 5 to the engine; 6 to
SCON, the turntable/secondary limit switches, the secondary angle sensor and
through the rotator to harness 8 (drive chassis: DCON, traction manifold,
steer sensors, axle sensors, axle limit switches); 3 → 9 → 10 is the
composite (CAN/power) run secondary → primary → jib into the platform control
box; 13 (platform J2) feeds the platform level sensor, foot switch, platform
level/rotate switches, LSJ1RO and the jib manifold (18); 7 feeds the primary
angle sensor and LSP1RO/LSP1EO; 11/12 are DC power runs; 15/16/17 are the AC
power-to-platform cables; 33–38 are the welder option cables.

| Item | Part number | Description | Qty | Serial-number / notes | Connects (per diagram) | Page |
|---|---|---|---|---|---|---|
| — | 101178GT | BATT.CABLE,2/0,POS.,RED,56" | — | Deutz models (from battery to starter) | battery + → starter | 75 |
| — | 101184GT | BATT.CABLE,2/0,NEG.,BLACK,53" | — | Deutz models | battery – → ground | 75 |
| — | 77103GT | SLEEVE,NYLON,3.13 ID | 29 | (inches) | | 75 |
| 1 | 94967GT | HARNESS,TCON | 1 | **to SN 320** | inside ground control box | 75 |
| 1- | 119244GT | HARNESS,TCON | — | **from SN 321 to 1418** | | 75 |
| 1- | 226497GT | HARNESS,TCON Z135 | — | **from SN 1419** | | 75 |
| 1- | T111582GT | KIT,Z135 RESISTOR UPGRADE | — | harness upgrade kit, includes resistor assembly T108693 and resistor T108691; **to SN 1224** | | 75 |
| 1- | T108693GT | ASSY, RESISTOR, P7R/P6R1 | — | **from SN 1225 to 1418** | | 75 |
| 1- | 110769GT | KIT,Z135 KEYSWITCH REWIRE*** | — | retrofit kit; **to SN 226** | | 75 |
| 2 | 94968GT | HARNESS,POWER,TCON,J5 | 1 | | ground box J5 → 12 V battery / ground | 75 |
| 3 | 94960GT | HARNESS,SEC.COMPOSITE J1 | 1 | | ground box J1 → up secondary boom → harness 9; branches to AUX POWER UNIT 1 & 2 | 75 |
| 4 | 94958GT | HARNESS,FUNCTION MANIFOLD J14* | 1 | | ground box J14 → function manifold | 75 |
| 5 | 94954GT | HARNESS,ENGINE,CUMMINS | 1 | Cummins models; **to SN 219** | ground box → engine | 75 |
| 5- | 110692GT | HARNESS,ENGINE,CUMMINS 2005*** | 1 | Cummins models; **from SN 220 to 1003** | | 75 |
| 5- | 139253GT | HARNESS, CUMMINS B3.3T | — | Cummins models; **from SN 1004** | | 75 |
| 5- | 94953GT | HARNESS,ENGINE,DEUTZ J3 | 1 | Deutz models; **to SN 409** | | 75 |
| 5- | 122054GT | HARNESS,ENGINE,DEUTZ J3 | 1 | Deutz models; **from SN 410** | | 75 |
| 5- | 94955GT | HARNESS,ENGINE,PERKINS J3 | 1 | Perkins models | | 75 |
| 5- | 128829GT | CIRCUIT BRKR 15A TYPE 2 METAL | — | **from SN 1004** (engine harness breaker) | | 75 |
| 6 | 94959GT | HARNESS,LOWER LIMIT SWTCH,SCON | 1 | **to SN 1418** | ground box → SCON, LST2O/LST1S/LST1O, LSS1RO/LSS1RS, RSS1AO (secondary angle sensor), rotator → harness 8 | 75 |
| 6- | T108692GT | ASSY,RESISTOR, P6R2 | — | **from SN 1225 to 1418** | | 75 |
| 6- | 226496GT | HARNESS,LOWER LIMIT SWITCH | — | **from SN 1419 to 2000** | | 75 |
| 7 | 119792GT | HARNESS UPPER LIMIT SWITCH | 1 | | off harness 9 → RSP1AO (primary angle sensor), LSP1RO, LSP1EO | 75 |
| 8 | 94956GT | HARNESS,DRIVE CHASSIS | 1 | | rotator → DCON, traction manifold, RSRA1O/RSFA1O axle sensors, LSFA1ES/LSRA1ES, RSLR1SO/RSLF1SO/RSRF1SO/RSRR1SO steer sensors | 75 |
| 9 | 94961GT | HARNESS,PRIMARY COMPOSITE*** | 1 | | secondary → primary boom composite | 75 |
| 10 | 94962GT | HARNESS,JIB COMPOSITE | 1 | | primary → jib → platform control box | 75 |
| 11 | 94972GT | HARNESS,DC POWER,SECONDARY | 1 | | DC power run, secondary boom | 77 |
| 12 | 94973GT | HARNESS,DC POWER,PRIMARY | 1 | | DC power run, primary boom | 77 |
| 13 | 94963GT | HARNESS,PLAT J2 | 1 | | platform box J2 → platform level sensor, foot switch, platform level & rotate (4×), LSJ1RO (19), jib manifold harness (18) | 77 |
| 14 | 94966GT | HARNESS,PCON | 1 | **to SN 439** | inside platform control box (switch panel) | 77 |
| 14- | 119674GT | HARNESS,FUNCTION MANIFOLD J14* | — | **from SN 440** (as printed — description reads "FUNCTION MANIFOLD J14" although listed under the PCON harness item) | | 77 |
| 15 | 94971GT | HARNESS,POWER TO PLAT,JIB | 1 | | AC power to platform, jib section | 77 |
| 16 | 94970GT | HARNESS,POWER TO PLAT,PRI. | 1 | | AC power to platform, primary section | 77 |
| 17 | 94969GT | HARNESS,POWER TO PLAT,SEC. | 1 | | AC power to platform, secondary section (referenced from 304.1 item 14 and generator sections) | 77 |
| 18 | 94976GT | HARNESS,JIB MANIFOLD | 1 | | harness 13 → jib manifold | 77 |
| 19 | 110911GT | SWITCH ASSY,LIMIT LSJ1RO | 1 | | jib | 77 |
| 20 | 94549GT | SWITCH,LOAD LIMIT | 1 | | LSPL1S at platform | 77 |
| 21 | 110913GT | SWITCH ASSY,LIMIT LSP1RO | 1 | | primary | 77 |
| 22 | 110914GT | SWITCH ASSY,LIMIT LSS1EO | 1 | | drawing label LSP1EO (primary boom extended), fed by harness 7 | 77 |
| 23 | 110916GT | SWITCH ASSY,LIMIT LST1O | 1 | | turntable | 77 |
| 24 | 110917GT | SWITCH ASSY,LIMIT LST1S | 1 | | turntable | 77 |
| 25 | 110915GT | SWITCH ASSY,LIMIT LST10 | 1 | | turntable | 77 |
| 26 | 110909GT | SWITCH ASSY,LIMIT LSS1RO | 1 | | secondary | 77 |
| 27 | 110910GT | SWITCH ASSY,LIMIT LSS1RS | 1 | | secondary | 77 |
| 28 | 110934GT | SWITCH ASSY,LIMIT LSFA1ES,LSRA | 1 | | axle (rear, LSRA1ES) | 77 |
| 29 | 110934GT | SWITCH ASSY,LIMIT LSFA1ES,LSRA | 1 | | axle (front, LSFA1ES) | 77 |
| 30 | 94980GT | SENSOR,DUAL OUTPUT,ANGLE*** | 3 | "(calibration required after replacement). Older sensor part 94980 is no longer available for Boom Angle Sensor after SN 12853 [sic]. For first time replacement order kit 217246 (refer to 511.2)" | RSS1AO, RSP1AO, RSJ1AO | 77 |
| 31 | 94985GT | SENSOR,AXLE POSITION | 1 | | RSRA1O / RSFA1O | 77 |
| 32 | 106187GT | SUBASSY,STEER SENSOR | 4 | | RSLR1SO, RSLF1SO, RSRF1SO, RSRR1SO | 77 |
| 33 | 106482GT | HARNESS,AC/3P PWR TO PLAT,SEC | 1 | (1046 inches long)(welder option) | 3-phase welder power, secondary | 77 |
| 34 | 106483GT | HARNESS,AC/3P PWR TO PLAT,PRI | 1 | (710 inches long)(welder option) | | 77 |
| 34B | 1294297GT | INSTRUCTION,SPLICE PROCEDURE | — | | | 77 |
| 34B | 101186GT | JOINT COMPOUND | — | | | 77 |
| 35 | 106484GT | HARNESS,AC/3P PWR TO PLAT,JIB | 1 | (351 inches long)(welder option) | | 79 |
| 36 | 101001GT | WELD CABLE,POSITIVE,JIB | 1 | (345 inches long)(welder cable option) | | 79 |
| 36- | 94998GT | WELD CABLE,NEGATIVE,JIB | 1 | (345 inches long) | | 79 |
| 37 | 101000GT | WELD CABLE,POSITIVE,PRIMARY | 1 | (672 inches long) | | 79 |
| 37- | 94997GT | WELD CABLE,NEGATIVE,PRIMARY | 1 | (672 inches long) | | 79 |
| 38 | 94999GT | WELD CABLE,POSITIVE,SECONDARY | 1 | (956 inches long) | | 79 |
| 38- | 94996GT | WELD CABLE,NEGATIVE,SECONDARY | 1 | (956 inches long) | | 79 |

Other cable-related items: 107521GT COVER,HOSE & CABLE, 100 INCH (protects
hoses/cables between primary and secondary booms, 510.1/510.2 p.159/163);
107522GT COVER,HOSE & CABLE, 70 INCH (primary to jib, 515.1/515.2 p.183/187);
cable tracks 61853GT (57 links, to SN 1853) / 236168GT (from SN 1854) on the
secondary boom (507.1 p.153), 61852GT 27-link on the primary (512.1 p.173),
94775GT 15-link on the jib (516.1 p.193), 106574GT 11-link at the primary
link (510.x); 106857GT CLAMP,CABLE STRAIN RELIEF and 77993GT BRACKET at the
platform mount (601.1 p.201); 110531GT KIT, CABLE GUIDE (601.1).

---

## 9. Platform control box (PCON)

### 9a. Platform control box, View 1 — section 603.1 (diagram p.208/210, tables pp.209, 211)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| A- | 119613GT | HARN JOYSTICK ADAPTOR JS100 | — | 6-pin to 7-pin adapter (for 101174, 101175, 101005) | 209 |
| 1 | 101173GT | JOYSTICK,2 AXIS,ROCKER,DEUTSCH | 2 | OEM joystick **(calibration required after replacement)** — drive/steer joysticks | 209 |
| 1A | 101173HGT | JOYSTICK, DUAL AXIS W/STEER | — | aftermarket joystick (calibration required after replacement) | 209 |
| 5 | 107798GT | LID,PLAT CONTROL BOX W/DECAL | 1 | | 209 |
| 5A- | 106509GT | DECAL,MEMBRANE,PLATFORM CONTRO | — | membrane overlay | 209 |
| 5B- | 82841GT | DECAL,PLATFORM CONTROL PANEL | — | required when replacing membrane 106509 | 209 |
| 5C- | (ref.) | Refer to 605.1 | — | Optional kit for Toggle Switch Lid replacement | 209 |
| 6 | 101175GT | JOYSTICK,1 AXIS,DEUTSCH | 1 | OEM joystick (calibration required after replacement) | 209 |
| 6A | 101175HGT | JOYSTICK,SINGLE AXIS W/KNOB | — | aftermarket (calibration required after replacement) | 209 |
| 7 | 101174GT | JOYSTICK,2 AXIS,DEUTSCH | 1 | OEM joystick, dual axis (calibration required after replacement) | 209 |
| 7 | 101174HGT | JOYSTICK,DUAL AXIS W/KNOB | — | aftermarket, dual axis (calibration required after replacement) | 209 |
| 7B | 101005GT | JOYSTICK,1 AXIS ROCKER,DEUTSCH | — | OEM, single axis with rocker switch (calibration required after replacement) | 209 |
| 7B | 101005HGT | JOYSTICK, SINGLE AXIS W/STEER | — | aftermarket, single axis with rocker switch (calibration required after replacement) | 209 |
| 8 | 122519GT | KIT,ESTOP SVC LARGE BOOM | — | platform E-stop kit (same as ground) | 209 |
| 8A- | 66812GT | BUTTON,PUSH,RED MUSHROOM HEAD | 1 | | 209 |
| 8B- | 66817GT | E-STOP W/ NC CONTACT | — | | 209 |
| 8C- | 66818GT | CONTACT,NC | — | | 209 |
| 8D- | 146478GT | BOOT(BELLOWS),E-STOP,BLACK | — | | 209 |
| 9 | 62379GT | ALARM,AUDIO,SUPERBOOM* | 1 | platform alarm | 209 |
| 9- | 72326GT | NUT - PLASTIC, RING FOR ALARMS | — | | 209 |
| 10 | 106513GT | CONTROL BOX ASSY,PCON | — | complete platform control box | 209 |
| 11 | 81551GT | SCREW,PHIL,PHM,6-32 X 1/4 SS | — | | 209 |
| 12 | 62385GT | SCREW,PHM,M5X.8X10MM SELF TAP | — | **to SN 841** | 209 |
| 12- | 139338GT | SCREW PH M5-0.8X20 DIN 7500CE | — | **from SN 842** | 209 |
| 13 | 45384GT | PLUG,NYLON .50 BLACK DOMED | 2 | | 209 |
| 14 | 128200GT | SWITCH TOGGLE ASSY SPDT 3P MOM | 1 | (Platform Level; includes boot and hardware) | 211 |
| 14A- | 128580-SGT | SWITCH TOGGLE SPDT 3P MOM SHDR | — | switch only | 211 |
| 14B- | 27246GT | BOOT,TOGGLE SWITCH,SHORT* | — | | 211 |
| 14C- | 128578GT | SCREW T-SWITCH PH/PH 6-32X1/4 | — | | 211 |

### 9b. Platform control box, View 2 — section 604.1 (diagram p.212, table p.213)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| A- | 94966GT | HARNESS,PCON | — | internal harness | 213 |
| 1 | 81551GT | SCREW,PHIL,PHM,6-32 X 1/4 SS | — | | 213 |
| 2 | 110229GT | STANDOFF,6-32X1/2LX1/4 HEX NYL | — | nylon standoffs for LED board | 213 |
| 3 | 62399GT | PCB,MEMBRANE/LED,SB/Z80 | 1 | **membrane / LED board** | 213 |
| 4 | 62389GT | NUT,HEX,6/32 W/STAR WASHER | — | | 213 |
| 5 | 81488GT | GASKET,PLATFORM CONTROL BOX | 1 | | 213 |
| 6 | 23404GT | NUTSERT,1/4-20,STEEL CAD PLTD | — | | 213 |
| 9 | 6833GT | CLAMP,0.50,#8 X 1/4,RUB CUSH | 2 | | 213 |
| 10 | 217571GT | ASSY,SRV,PCB ASSY,ECM,PLT,V201 | 1 | **PCON ECM board, to SN 1711.** "Machine model, serial number and software revision required when ordering. Please contact Genie Service Parts for assistance" | 213 |
| 10- | 237072GT | PCB,ASSY,ECM,PLATFORM,V307 | — | **PCON ECM board, from SN 1712.** Same ordering note | 213 |

### 9c. Toggle-switch lid option — section 605.1 (diagram p.214/216, tables pp.215, 217)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| — | 237224GT | KIT,TOGL SW PL BOX LID | — | **to SN 778** | 215 |
| — | 237225GT | KIT,TOGL SW PL BOX LID,ANSI | — | **from SN 779 to 2000** | 215 |
| — | 237226GT | KIT,TOGL SW PL BOX LID,CE | — | **from SN 779 to 2000** | 215 |
| — | 237227GT | KIT,TOGL SW PL BOX LID,AUS | — | **from SN 1512 to 2000** | 215 |
| 1 | 128200GT | SWITCH TOGGLE ASSY SPDT 3P MOM | — | Platform Rotate toggle | 215 |
| 2 | 27246GT | BOOT,TOGGLE SWITCH,SHORT* | 1 | part of 128200 | 215 |
| 3 | 229567GT | PLUG,SANTOPRENE .5 BLACK DOME | 2 | | 215 |
| 4 | 66813GT | BUTTON,PUSH,BLACK W/SEAL*** | 1 | (horn button) | 215 |
| 5 | 128200GT | SWITCH TOGGLE ASSY SPDT 3P MOM | — | Optional equipment | 215 |
| 6 | 128200GT | same | — | Generator ON/OFF toggle | 215 |
| 7 | 128200GT | same | — | Drive Enable toggle | 215 |
| 8 | 128200GT | same | — | Emergency Power switch | 215 |
| 9 | 128200GT | same | — | Axle Extend/Retract toggle | 215 |
| 10 | 128200GT | same | — | Glow Plug switch | 215 |
| 11 | 128200GT | same | — | Engine Start toggle | 215 |
| 12 | 128200GT | same | — | Hi/Low RPM toggle | 215 |
| 13 | 128200GT | same | — | Drive Speed toggle | 215 |
| 14 | 128200GT | same | — | Steer Mode toggle | 215 |
| 15 | 128200GT | same | — | Steer Mode toggle | 215 |
| 16 | 66812GT | BUTTON,PUSH,RED MUSHROOM HEAD | 1 | E-stop | 215 |
| 17 | 146478GT | BOOT(BELLOWS),E-STOP,BLACK | 1 | | 215 |
| 19 | 229386GT | LID, PCON, TOG SW, Z135 | 1 | (No Toggle Switches) | 215 |
| 20 | 13268GT | CLAMP,0.75,#12 X 1/4,RUB CUSH | 2 | | 215 |
| 22 | 232975GT | PCB, LED/TOGGLE SWITCH, ALC100 | 1 | **LED / toggle-switch board** for the toggle lid | 215 |
| 25 | 81488GT | GASKET,PLATFORM CONTROL BOX | 1 | | 217 |

### 9d. Joysticks — section 606.1 (diagram p.218, table p.219)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| A- | 101173GT | JOYSTICK,2 AXIS,ROCKER,DEUTSCH | — | (calibration required after replacement), OEM | 219 |
| B- | 101173HGT | JOYSTICK, DUAL AXIS W/STEER | — | (calibration required), aftermarket | 219 |
| C- | 101174GT | JOYSTICK,2 AXIS,DEUTSCH | — | (calibration required), OEM | 219 |
| D- | 101174HGT | JOYSTICK,DUAL AXIS W/KNOB | — | (calibration required), aftermarket | 219 |
| E- | 101175GT | JOYSTICK,1 AXIS,DEUTSCH | — | (calibration required), OEM | 219 |
| F- | 101175HGT | JOYSTICK,SINGLE AXIS W/KNOB | — | (calibration required), aftermarket | 219 |
| G- | 101005GT | JOYSTICK,1 AXIS ROCKER,DEUTSCH | — | (calibration required), OEM | 219 |
| H- | 101005HGT | JOYSTICK, SINGLE AXIS W/STEER | — | (calibration required), aftermarket | 219 |
| I- | 83098GT | TERM,AMP MTE,SOC,22-26 GA BULK | — | joystick terminal | 219 |
| J- | 119613GT | HARN JOYSTICK ADAPTOR JS100 | — | 6-pin to 7-pin adapter (for 101174, 101175, 101005) | 219 |
| Z | 1269502GT | KIT, ISOLATION, 4 JOYSTICK | — | | 219 |
| 1 | 62392GT | KNOB,JOYSTICK, 62390/62391 | 1 | | 219 |
| 2 | T112626GT | SCREW, PHM, #6-32 X .625 ZINC | 1 | | 219 |
| 3 | 139598GT | BOOT,JOYSTICK | 1 | | 219 |
| 4 | — | SPRING,JOYSTK CENTR,62390/91 | 1 | no longer available from supplier | 219 |
| 5 | 119915GT | COLLAR,JOYSTICK,CENTER | 1 | | 219 |
| 6 | 128000GT | SEAL, CONNECTOR (DT JOYSTICKS) | 1 | | 219 |
| 7 | 128001GT | SLEEVE,CONNECTOR,DT JOYSTICKS | 1 | | 219 |
| 8 | 75449GT | KNOB,ROCKER JOYSTICK 75565 | 1 | | 219 |
| 9 | 75448GT | SUPPORT,SENSOR,JOYSTICK | 1 | | 219 |
| 10 | 75447GT | SWITCH SHIELD,ROCK JOYSTK75565 | 1 | | 219 |
| 11 | 75446GT | SPRING,SWITCH CENTERING,75565 | 1 | | 219 |
| 12 | 75445GT | ROCKER ASSY.,MAGNETIC 75565 | 1 | rocker (steer) switch | 219 |
| 13 | 75444GT | ROCKER,RETAINER, 75565 | 1 | | 219 |
| 14 | 75443GT | BOOT, ROCKER JOYSTICK 75565 | 1 | | 219 |

### 9e. Foot switch — section 602.2 Platform Components (table p.205)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 3 | 227617GT | ASSEMBLY,FOOT SWITCH | 1 | | 205 |
| 3- | 119058GT | CONN, PLUG, 4 WAY, DEUTSCH, DT, ENDCAP | — | | 205 |
| 3- | 1257248GT | SCREW, SHC, M4-0.7X8, DIN912, | — | | 205 |
| 3- | 1257249GT | WASHER, LOCK, M4, SS | — | | 205 |
| 3- | 227564GT | FOOT SWITCH,20A IP65 | — | switch itself | 205 |
| 3- | 33576GT | CONN,SQZ,1/2NPT,.170-.450 | — | | 205 |
| 8 | 147121GT | COVER, FOOT SWITCH, LARGE | 1 | decals not included | 205 |

Platform accessories (801.1, p.271): 88609-SGT CONTROL BOX COVER ASSY (to
SN 1021) / T109328GT ACC,PLAT CONTROL COVER, SERV (from SN 1022); 89915GT
COVER,CONTROL BOX LID (no latch, to SN 1021) / 102785PGT (with latch, from
SN 1022); 111526GT HINGE,PLAT CONTROL BOX COVER.

---

## 10. Engine electrical — alternators, starters, senders, throttle/shutdown solenoids (sections 401–406)

| Engine | Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|---|
| Cummins B4.5 (to SN 950) | 402.1-40 | 89837GT | STARTER,12V,CUMMINS, B3.9/B4.5 | 1 | | 95 |
| Cummins B4.5 | 402.1-41 | 75153GT | SENSOR,0IL PRESS,VDO360-004*** | — | oil-pressure sender | 95 |
| Cummins B4.5 | 402.1-42 | 75102GT | ALTERNATOR,CUMMINS 4B3.9, 95A | 1 | **to SN 219** | 95 |
| Cummins B4.5 | 402.1-42- | 111119GT | ALTERNATOR,CUMMINS B4.5 | — | **from SN 220** | 95 |
| Cummins B4.5 | 401.1-24 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 | throttle actuator | 83 |
| Cummins B4.5 | 401.1-24- | 89998GT | KIT,SERVICE,SOLENOID MODULE | — | | 83 |
| Cummins B4.5 | 401.1-24- | 102048GT | CABLE ASSY,THROTTLE | — | | 83 |
| Cummins B4.5 | 401.1-24- | 60525GT / 60526GT / 60757GT / 73711GT | CONN,RECEP 4 WAY,12-14GA / LOCK / PLUG,SEAL / TERMINAL,PIN,DTP | — | DTP connector kit for throttle solenoid; "Ref. Module Relay (refer to 303.1)" | 83 |
| Cummins B3.3T (from SN 951) | 401.2-38 | 139798GT | STARTER, 12V, CUMMINS B3.3T | — | | 89 |
| Cummins B3.3T | 402.2-5 | 146046GT | ALTERNATOR | 1 | | 97 |
| Cummins B3.3T | 401.2-50 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 | | 89 |
| Cummins B3.3T | 401.2-47- | 146307GT | SERVICE KIT, THROTTLE, B3.3T | — | includes 146352 (air cleaner/solenoid mount) and 146306 (throttle link); original mount/cable no longer available | 89 |
| Cummins B3.3T | 308.1-5- | 128829GT | CIRCUIT BRKR 15A TYPE 2 METAL | — | from SN 1004 (engine harness) | 75 |
| Deutz BF4L2011 / TD2011L04i | 404.1-— | 139624GT | SWITCH, OIL PRESSURE 1.5 BAR | 1 | (replaced 65765) | 105 |
| Deutz | 404.1-— | 139666GT | KIT,OP SWITCH,DEUTZ | — | "oil pressure kit for models with ALC-500 control system. replaces 65765. includes item 139624 and instructions" | 105 |
| Deutz | 404.1-1 | 58249GT | ALTERNATOR, DEUTZ,BF4L2011*** | 1 | | 105 |
| Deutz | 404.1-1- | 1280590GT | PULLEY,ALTERNATOR,DEUTZ BF4L2011 | — | for 58249 | 105 |
| Deutz | 404.1-1- | 1280591GT | SPACER,ALT PULLEY,DEUTZ BF4L2011 | — | for 58249 | 105 |
| Deutz | 403.1-28 | 139709GT | STARTER, 12V | — | | 103 |
| Deutz | 403.1-28- | 139621GT | KIT, HEAT GUARD, DEUTZ STARTER | — | | 103 |
| Deutz | 404.1-22 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 | with 89998GT service kit and 60525/60526/60757/73711 connector parts; "Ref. Relay Module (refer to 303.1)" | 107 |
| Deutz | 404.1-30 | 111445GT | SENDING UNIT,OIL TEMP SWCH,DTZ | 1 | | 107 |
| Deutz | 404.1-30- | 58299GT | SENDING UNIT,OIL PRESS.,DEUTZ* | — | not shown | 107 |
| Deutz | 404.1-36A/36B | 70478PGT / 139321GT | FORMING,SOLENOID MOUNT | — | to SN 891 / from SN 892 | 109 |
| Deutz | 404.1-38 | T114678GT | SHUTDOWN SOLENOID,12V, DEUTZ | 1 | (includes o-ring) | 109 |
| Deutz | 404.1-38- | 58256GT | SOLENOID CABLE ASSY*** | — | | 109 |
| Deutz | 404.1-38- | 72255GT | CONNECTOR, DEUTZ FUEL SHUTOFF* | — | Does not include 45782 DIODE | 109 |
| Deutz | 404.1-38- | 56445GT | DIODE,6 AMP 200 PIV,REEL | — | | 109 |
| Deutz | 308.1 | 101178GT / 101184GT | BATT.CABLE,2/0,POS.,RED,56" / NEG.,BLACK,53" | — | Deutz models, battery to starter | 75 |
| Perkins 1104C-44 (to SN 952) | 405.1-11 | 102646GT | ALTERNATOR,PERKINS 1104C-44 | 1 | | 111 |
| Perkins 1104C-44 | 405.1-27 | 226627GT | STARTER,ENG,PERK T3 6/8/10K | 1 | | 111 |
| Perkins 1104C-44 | 406.1-17 | 102348GT | SENDING UNIT,OIL PRESS PERKINS | 1 | | 121 |
| Perkins 1104C-44 | 406.1-19 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 | with 89998GT kit and DTP connector parts | 121–123 |
| Perkins 1104C-44 | 406.1-31 | 34058GT | SENDING UNIT,TMP,FRD,GM,PRK704 | 1 | coolant temp sender | 123 |
| Perkins 804D-33T (from SN 953) | 405.2-— | 128802GT | HARNESS, PERKINS ENGINE | 1 | engine-mounted harness | 115 |
| Perkins 804D-33T | 405.2-B | 107546GT | STARTER MOTOR,PERKINS(804C-33) | 1 | | 115 |
| Perkins 804D-33T | 405.2-17 | — | ALTERNATOR | — | **no longer available** (belt 102534GT still listed) | 115 |
| Perkins 804D-33T | 405.2-18A | 128638GT | SENSOR, TEMP. SENDER, M16X1.5 | 1 | | 115 |
| Perkins 804D-33T | 405.2-18B | 1281249GT | SWITCH,COLD START ADVANCE WATER SENSOR | 1 | | 115 |
| Perkins 804D-33T | 406.2-32 | 101957GT | SOLENOID,THROTTLE,ASSY.TROMB | 1 | with 89998GT kit, 73711GT, 6578GT cable tie, 60757GT, 60526GT, 60525GT, 53471GT WIRE LOOM | 127 |

Glow plugs are not listed as separate parts (only the "Glow Plug Switch"
toggle position in 605.1).

---

## 11. Alarms, horn, lights, beacon

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| 305.1-12 | 62379GT | ALARM,AUDIO,SUPERBOOM* | 1 | ground control box alarm | 61 |
| 603.1-9 | 62379GT | ALARM,AUDIO,SUPERBOOM* | 1 | platform control box alarm | 209 |
| — | 72326GT | NUT - PLASTIC, RING FOR ALARMS | — | | 61, 209 |
| 303.1-23 | 81578GT | HORN,12VDC,SPADE TERMINALS*** | 1 | engine-compartment horn | 47 |
| 605.1-4 | 66813GT | BUTTON,PUSH,BLACK W/SEAL*** | 1 | horn button, toggle lid | 215 |
| 801.1-4 | 35956GT | WORK LIGHT MOUNTING BRACKET | 2 | | 271 |
| 801.1-5 | 107857GT | LIGHT, 12 VOLT | 2 | replaces 34321GT; may need bracket 35956GT and hardware | 271 |
| 801.1-5- | 35960GT | BULB,WORKLIGHT,12V 35W | — | | 271 |
| 801.1-5A | 98027GT | PLATFORM WORKLIGHTS,110V,150W | 1 | | 271 |

**No flashing beacon / strobe is listed anywhere in 106877GT** (searched
"BEACON", "STROBE", "FLASH", "LIGHT").

---

## 12. Generator, welder, power-to-platform and cold-weather options

### 12a. Belt-driven generator — 805.1 Deutz (pp.285, 287), 806.1 Cummins (pp.289, 291), 807.1 Perkins (pp.293, 295)

Electrical content is identical across the three engine sections; only the
mounts/belts differ.

| Item (805.1 / 806.1 / 807.1) | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| A- | 98016-SGT / 98018GT / 98017GT | GENERATOR,3500W W/REG (Deutz / Cummins / Perkins) | — | complete option | 285 / 289 / 293 |
| B- | 98013-SGT / — / 98014GT | GENERATOR,3000W 220/50 (Deutz / Perkins) | — | | 285 / 293 |
| C- | 101189GT | HARNESS,BD GEN.110V/60HZ, Z135 | — | includes items 7–14 | 285 |
| D- | 101190GT | HARNESS,BD GEN.220V/50HZ, Z135 | — | includes items 7–14 | 285 |
| 1 | 75069GT | T-BOX 2.75 X 4.5 X 2.5 | 1 | | 285 |
| 6 | 69776GT | TERMINAL,STRIP,4-POLE,600V*** | 1 | | 285 |
| 7 | 60887GT | CIRCUIT BREAKER, 30 AMP | 1 | | 285 |
| 8 | 8425GT | ENCLOSURE,FG ELEC.,STOCK,7X5X4 | 1 | | 285 |
| 9 | 60521GT | RELAY,SEALED 30/40 AMP | 1 | | 285 |
| 12 | 61195GT | CIRCUIT BREAKER, 12.5 AMP | 1 | | 285 |
| 16 | 60738GT | VOLTAGE REGULATOR,110V | 1 | | 285 |
| 16- | 60739GT | VOLTAGE REGULATOR,220V | — | | 285 |
| 18 / 19 / 20 / 21 | 60528GT / 60527GT / 73712GT / 60757GT | LOCK,PLUG 4 WAY / CONN, PLUG, 4 WAY, DEUTSCH, DTP / CONN,RECEP 4 WAY,12-14GA FL (qty 3) / PLUG, SEAL | 1/1/3/1 | | 285 |
| 22A (17A / 30A) | 60707GT | GENERATOR,3500W,120V,60HZ** | 1 | | 285 / 289 / 295 |
| 22A- | 146062GT | PULLY,GNRTR,120V,60HZ(60707) | — | for 60707 | 285 |
| 22B (17B / 30B) | 89908GT | GENERATOR,3000W,220V,50HZ*** | — | | 287 / 289 / 295 |
| 22B- | 102681GT | PULLY, GNRTR,220V,50HZ(89908) | — | for 89908 | 287 |
| 28 (29 / 21) | 70397GT / 107547GT / 70545GT | BELT,AX34 (Deutz) / BELT,AX40 (Cummins) / BELT,AX42 (Perkins) | 1 | | 287 / 291 / 293 |
| 32 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 | platform outlet cover | 287 |
| 33 | 74052GT | GASKET,COVER,GFCI,WEATHERPROOF | 1 | | 287 |
| 34 | 13585GT | OUTLET, 110V | 1 | **power-to-platform outlet** | 287 |
| 35 | 10777GT | COVER,BLANK | 1 | | 287 |
| 38 (36 / 40) | (ref.) | Ref. Power to Platform Harness, Secondary (refer to section 308.1 / 303.1) | 1 | | 287 |
| 39 (37 / 41) | 119403GT | CONN,PLUG 120 AC/15A DOMESTIC | 1 | power-to-platform inlet plug | 287 |
| 39- | 119404GT | CONN,RECEP 120AC/15A DOMESTIC | — | | 287 |
| 39- | 144161GT | PLUG,PWR,UK,16AMP,3PIN,BLK | — | | 287 |
| 39- | 1280665GT | PLUG, TYPE F, 230A, 50HZ, 16A, IP44 | — | | 287 |
| 39- | 25388GT | PLUG,FUSED,250V,13AMP,U.K.** | — | | 287 |
| 39- | — | FUSE,13 AMP,220V PLUG | 1 | (component no longer available) refer to BS1362 BUSS TDC180-13A | 287 |

### 12b. Hydraulic generator option — 816.1 (table p.321)

| Item | Part number | Description | Qty | Notes | Page |
|---|---|---|---|---|---|
| 1 | 111381GT | GEN,HYD,3000W,110V,60HZ | 1 | | 321 |
| 1- | 58944GT | BRUSH 3/8 X 1/4 X 15/16(36928) | — | generator brush | 321 |
| 1- | T111608GT–T111613GT, 58954GT, 147836GT–147838GT | seal/retaining ring/spacer/bearing/shaft/gasket service parts | — | | 321 |
| 1- | 147839GT | ASSM, GEN. ONLY, 110V, 60HZ | — | | 321 |
| 8 | 53976GT | MANIFOLD,GENERATOR | 1 | | 321 |

### 12c. Welder option — 812.1 chassis (pp.307–311), 813.1 platform (pp.313–315), 815.1 generator (p.319)

| Item | Part number | Description | Qty | Serial-number / notes | Page |
|---|---|---|---|---|---|
| A- | 226512GT | HARNESS,HYDRAULIC WELDER | — | | 307 |
| B- | 1278369GT | COVER, JBOX, BREAKER RETRO, W/O 110V GFI | — | only for units retrofitted with panel-mounted breaker kit 1278371GT | 307 |
| C- | 1278371GT | KIT, RETROFIT, WELDGEN, MAGBREAKER Z135 | — | for welder-generator units with no cut-outs on the J-box front face | 307 |
| 1 | 139367GT | GENERATOR,HYDRA,25CC,208V*** | 1 | Harrison generator; includes item 2; consult factory | 307 |
| 1A- | 1273323GT | ALTERNATOR | — | for 139367 | 307 |
| 1B | 106113GT | GENERATOR,HYDRO-12KEP-21-3 | — | Fabco generator; consult factory | 307 |
| 2 | 33432GT | MOTOR,HYD,25CC FIXED*** | 1 | Sauer motor for Harrison generator | 307 |
| 2- | 106184GT | MOTOR,HYD 12.5KW GEN,21CC*** | — | Fabco motor | 307 |
| 17- | 94760GT / 94765GT / 94759GT | VALVE,SOLENOID,10V,W/OUT COIL / COIL-10V DC*** / NUT,SOLENOID | — | on 101516GT drive-oil diverter manifold | 309 |
| 19A | 146284GT | SWITCH,PRESS,#4NPT,200PSIF | 1 | "for first time replacement, order service kit 1273916GT" | 309 |
| 19B | 1273916GT | KIT, PRESSURE SWITCH, GENERATOR | — | includes pressure switch, hose, fittings, instructions | 309 |
| 20 | 73730GT | CONN, RECEP, 12 WAY, DEUTSCH, DT, GRAY/FLANGE | 1 | | 309 |
| 25 | 80543GT | RECEPTACLE, 120VAC, 20A, GFCI | 1 | | 309 |
| 26 | 74006GT | COVER,GFCI,HORIZONTAL,WEATHER | 1 | | 309 |
| 27 | 82237GT | DECAL,DANGER,HIGH VOLTAGE | 2 | | 309 |
| 28 | 107657GT | J-BOX,CIRCUIT BREAKERS, 10X8 | 1 | | 309 |
| 29 | 102314GT | PANEL, ENCLOSURE, LINCO WELDER | 1 | | 309 |
| 29- | 226513GT | HARNESS,HYD WELDER J-BOX | — | | 309 |
| 37 | 33608GT | RELAY,SOCKET,OMRON | 1 | | 311 |
| 38 | 33607GT | RELAY,OMRON,DPDT,12V | 1 | | 311 |
| 40 | 106072GT | CIRCUIT BREAKER,50A,3P,240V*** | 1 | | 311 |
| 41 | 106637GT | MODULE,TIME DELAY ON BREAK 4S | 1 | | 311 |
| 44- | 106477GT | GFI/CIRCUIT BREAKER ASSEMBLY | 1 | | 311 |
| 44- | 227425GT | CIRCUIT BREAKER, 35A 3PH | 1 | | 311 |
| 45 | 106375GT | GFCI,50A, 3PH | 1 | | 311 |
| 46 | 102357GT | POTENTIOMETER ASSY, WELDER | 1 | | 311 |
| 47 | 106140PGT | BRACKET,1K OHM 10-TURN POT,PNT | 1 | | 311 |
| 48 | 106658GT | MODULE,SX CONTROLLER,LOW AMP | 1 | | 311 |
| 49 | 101700GT | CONNECTOR,MATING,SX MODULE | 1 | | 311 |
| 813.1-— | 119907GT / 119908GT | CARTRIDGE,VALVE HOUSING / VALVE,SOLENOID,NOR | — | | 313 |
| 813.1-1 | 101525GT | WELDER,INVERTEC V275-S | 1 | | 313 |
| 813.1-1- | 106275GT | KIT,WELD LEADS ASSY,V275S | — | | 313 |
| 813.1-1- | 106183GT | FUSE,.6AMP,250V,WELDER,V275S | — | | 313 |
| 813.1-1- | 229925GT | ADAPTER,WELDER,208-220 | — | | 313 |
| 813.1-6 | 106112GT | PLUG,4-WIRE,3-PHASE,50A,MALE | 1 | | 313 |
| 813.1-7 | 106111GT | RECEPTCL,LOCK 3-PH,50A,4 WIRE | 1 | 3-phase platform receptacle | 313 |
| 813.1-7- | 106110GT | T-BOX,2.75X4.5X2.63,3PH | — | | 313 |
| 813.1-7- | 101732GT | COVER,WEATHERPROOF 3-PHASE | — | | 313 |
| 813.1-8 | 82237GT | DECAL,DANGER,HIGH VOLTAGE | 2 | | 313 |
| 813.1-9 | 101731PGT | BRACKET,POWER TO PLAT TBOX,PNT | 1 | | 313 |
| 814.1-14- | 49167-7229GT | HOSE ASSEMBLY 1/2 100R1 | — | use with welder ready option; **from SN 858** | 317 |

### 12d. Cold start package — 811.1 (table p.305)

| Item | Part number | Description | Qty | Notes | Page |
|---|---|---|---|---|---|
| A- | 122771GT | COLD START PKG,110V,CUM.B3.3T | — | | 305 |
| B- | 122772GT | COLD START PKG,110V,PERK.804T | — | | 305 |
| C- | 1287847GT | ACCESSORY,COLD START PKG, 110V, DEUTZ | — | (NOTE: use 5.8 qt 5W-40 synthetic engine oil) | 305 |
| 1 | 128274GT | OIL PAN HEATER,DEUTZ,120V,150W | 1 | | 305 |
| 2 | 61245GT | BLANKET,BATTERY | 3 | | 305 |
| 3 | 28853GT | BLANKET,BATTERY | 2 | | 305 |
| 4 | 122768GT | FREEZE PLUG HEATER | 1 | | 305 |
| 5 | 101632GT | FREEZE PLUG HEATER,PERKINS 804 | 1 | | 305 |

### 12e. Circuit board heater option (platform) — 809.1 (table p.299)

| Item | Part number | Description | Qty | Notes | Page |
|---|---|---|---|---|---|
| 1 | (ref.) | Ref. PCB Assembly, PCON (refer to 604.1) | — | | 299 |
| 2 | 119250GT | BRACKET,PLATFORM HEATER OPT | 1 | | 299 |
| 3 | 27287GT | RESISTOR,10 OHM,25 WATT | 2 | heater resistors | 299 |
| 4 | 119641GT | SWITCH,THERMOSTAT 85F OPEN | 1 | | 299 |
| 7 | 119534GT | STANDOFF,1/4X1/4 M-F 6-32 S/S | — | | 299 |
| 8 | 128204GT | SWITCH TOGGLE ASSY SPDT 2P MNT | 1 | | 299 |

(Ground-box LCD heater option is in §1: 122258GT, 122406GT, 122792GT,
122793GT.)

### 12f. Aircraft protection package (from SN 1071) — 819.1 (table p.327)

Mechanical bumpers plus **139181GT WELDMENT,AIRCRAFT SENSOR BUMPR** (qty 1)
and **77797GT WELDMENT, SENSOR MOUNT** (qty 1) — the sensor itself is not
listed as a separate part in this manual.

---

## 13. Valve coils (electrical side of the hydraulic manifolds) — cross-reference

Not part of this file's core scope but listed here because they are the
electrical loads driven by TCON/PCON outputs:

| Coil part | Description | Used on | Pages |
|---|---|---|---|
| 89850GT | COIL,12V (D08, 16 WATT) | steer valves 77492GT (BN/BO/BP/BQ) on steer/axle manifold 703.1 | 225, 227 |
| 89849GT | COIL,12V (D10, 16 WATT) | 89853GT 2-pos 3-way valves: axle extend/retract (BT/BU, 703.1); primary up/down/retract, secondary retract/down (705.x) | 225–235 |
| 119112GT | COIL, 12V, DEUTSCH | 107745GT (primary extend F) and 107746GT (turntable rotate B) | 231–235 |
| 119113GT | COIL,12V DEUTSCH | 107743GT proportional (secondary extend J, secondary up H) | 231–235 |
| 58303GT | COIL,VALVE,PROPORTIONAL*** | function manifold view 2 (706.1 / 706.2) | 237, 241 |
| 104759GT / 104760GT | COIL,12VDC #8 / #10 DTSCH IP69 ECOIL | jib manifold 704.1 and platform manifold 708.1 | 229, 247 |
| 107768GT | COIL,12VDC #8 DTSCH W/O DIODE | jib manifold 704.1, platform manifold 708.1 | 229, 247 |
| 94765GT | COIL-10V DC*** | welder drive-oil diverter manifold 101516GT (812.1) | 309 |

---

## 14. Serial-number breaks seen in the electrical sections (summary)

| Break | What changes | Section / page |
|---|---|---|
| to SN 219 / from SN 220 | Cummins engine harness 94954GT → 110692GT; Cummins alternator 75102GT → 111119GT | 308.1 p.75; 402.1 p.95 |
| to SN 226 | 110769GT keyswitch rewire retrofit kit applies | 308.1 p.75 |
| to SN 320 / from SN 321 | TCON harness 94967GT → 119244GT | 308.1 p.75 |
| to SN 326 / 327–658 / from SN 659 | bellcrank angle-sensor first-replacement kit 824692GT / 824589GT / 217313GT | 515.1 p.183 |
| before SN 333 | riser-extend limit-switch bracket 119247PGT needs ramp 119248PGT | 502.1 p.133, 505.1 p.147 |
| to SN 409 / from SN 410 | Deutz engine harness 94953GT → 122054GT | 308.1 p.75 |
| to SN 439 / from SN 440 | PCON harness 94966GT → 119674GT (as printed) | 308.1 p.77 |
| to SN 639 / 640 / 641–649 / 650 / 651 / from SN 652 | riser rotary sensor bracket alternates 101708GT / 128357GT | 502.1 p.135 |
| to SN 651 (excl. 640, 650) / from SN 652 (incl. 640, 650) | secondary angle-sensor kit 824587GT / 217238GT | 502.1 p.135 |
| to SN 778 / from SN 779 | toggle-switch lid kit 237224GT → 237225GT (ANSI) / 237226GT (CE) | 605.1 p.215 |
| to SN 841 / from SN 842 | platform box screw 62385GT → 139338GT | 603.1 p.209 |
| from SN 858 | welder-ready hose 49167-7229GT | 814.1 p.317 |
| to SN 891 / from SN 892 | Deutz solenoid mount 70478PGT → 139321GT; throttle linkage 88512GT → 139322GT | 404.1 pp.107, 109 |
| to SN 950 / from SN 951 | Cummins B4.5 → B3.3T (starter 89837GT → 139798GT; alternator → 146046GT) | 401–402 |
| to SN 952 / from SN 953 | Perkins 1104C-44 → 804D-33T (alternator 102646GT → n/a; starter 226627GT → 107546GT) | 405–406 |
| to SN 1003 / from SN 1004 | Cummins harness 110692GT → 139253GT; 15 A breaker 128829GT added | 308.1 p.75 |
| to SN 1021 / from SN 1022 | platform control box cover 88609-S → T109328GT; lid with latch | 801.1 p.271 |
| from SN 1071 | aircraft protection package | 819.1 |
| to SN 1224 / 1225–1418 | resistor upgrade kit T111582GT / resistor assemblies T108693GT & T108692GT | 308.1 p.75 |
| to SN 1418 / from SN 1419 | TCON harness 119244GT → 226497GT; lower limit-switch/SCON harness 94959GT → 226496GT (to 2000) | 308.1 p.75 |
| from SN 1512 | toggle lid kit AUS 237227GT | 605.1 p.215 |
| **to SN 1711 / from SN 1712** | **TCON box 106512GT → 237069GT; TCON ECM 217570GT → 1258461GT; PCON ECM 217571GT → 237072GT; SCON 139647-SGT → 1258463GT; load-sense switch harness 101441GT → 146399GT** | 305.1 p.61/63; 604.1 p.213; 304.1 p.55; 804.1 p.283 |
| **to SN 1853 / from SN 1854** | angle sensors change from 94980GT dual-output to matched 216061GT sensor/magnet assemblies (217224GT secondary, 215728GT primary, 217293GT bellcrank); secondary cable track 61853GT → 236168GT | 502, 511, 515, 507.1 |

---

## 15. "Calibration required after replacement" notes printed in the manual

- 106187GT SUBASSY,STEER SENSOR — "(calibration required after replacement)" (p.29).
- 94985GT SENSOR,AXLE POSITION — "(calibration required after replacement)" (p.33).
- 94980GT SENSOR,DUAL OUTPUT,ANGLE and all three replacement kits/assemblies
  (217224GT, 215728GT, 217293GT) — "calibration required after replacement"
  (pp.77, 135, 141, 167, 169, 183, 187).
- 216061GT SENSOR, ANGLE, 180 DEG, CW — "Sensor and magnet are matched and
  must be replaced at the same time. Machine calibration is required after
  installation." (pp.141, 169, 189).
- 139647-SGT / 1258463GT SCON module — "machine needs to be recalibrated
  after installing a new module" (p.55).
- All joysticks 101173GT/101173HGT, 101174GT/101174HGT, 101175GT/101175HGT,
  101005GT/101005HGT — "(calibration required after replacement)" (pp.209, 219).
- TCON/PCON ECM boards and TCON box assemblies: no calibration note, but
  "Machine model and serial number and software revision required when
  ordering" (pp.61, 63, 213).

---

## Coverage

Pages read in full (parts tables reconstructed from the PDF text layer with
column positions, so quantities and notes are as printed): 7–9 (TOC), 21, 23
(201.1), 25–27 (202.1), 29–31 (203.1), 33–35 (204.1), 37 (205.1), 39–41
(301.1), 43–45 (302.1), 47–49 (303.1), 51–59 (304.1), 61–65 (305.1), 67–71
(306.1), 73 (307.1), 75–79 (308.1, plus the drawing on p.74 rendered and
read), 81–129 (all engine sections, screened for electrical items), 131–199
(all boom sections, screened with hardware rows filtered; sensor and switch
pages 133–141, 167–171, 183–189, 199 read unfiltered), 201–219 (all platform
sections), 221–247 (hydraulic manifolds, grepped for coils/switches/sensors
only), 271–275 (801.1), 283 (804.1), 285–295 (805–807), 299 (809.1), 305
(811.1), 307–319 (812–815), 321 (816.1), 327 (819.1). Diagram pages 60, 74,
76, 78 and 212 were rendered as images to confirm item placement and harness
topology.

Not parsed / not covered: decal sections (pp.11–19) except the tilt-alarm
decal; hydraulic hose sections 709–714 (pp.249–269); mechanical accessory
sections 802–803, 808, 810, 818, 820–822; the Part Number Index (pp.342–356).
A few rows in the text layer have no part number printed (e.g. 201.1 item 1
"AXLE CVR W/DECALS,RR", 405.2 item 17 "ALTERNATOR — no longer available",
606.1 item 4 joystick centring spring); these are noted where relevant.
Quantities printed as "31-", "34-", "63-", "5-i" for the aux battery cables
(p.57) are cable lengths in inches that overflowed the Qty column.
