# Case: Z13513-1861 (2013 Genie Z-135/70, 2162.4 h)

- `diagnosis-walkthrough.md` — manual-cited, adversarially verified step-by-step electrical diagnosis for the fault set: front/rear axle sensor 0 V, SCON CAN no response, primary boom angle zone fault, primary and secondary boom angle sensor not calibrated, secondary boom switch fault, four steer sensors 0 V. Built 2026-09-10 from Service Manual 1268557GT Rev A4, Parts Manual 106877GT Rev H.04 and Operator's Manual 114474; 12-agent workflow with three verification lenses and two revision rounds.
- `photos/` — serial plate (ES0366, 45,264 lb, 62 kW), ground display (2162.4 h), machine photos.
- Key finding: the six chassis sensors are fed by a 5 V output generated inside the DCON (J32-20), which does not cross the electrical swivel; the boom angle sensors are fed by the TCON's 5 V (J12-26).

## Axle retraction for transport
`axle-retract-for-transport.md` — the machine measured 12.8 ft at the yard and would
not load. Manual-cited procedure for bringing the axles in (12 ft 11 in → 8 ft 1 in),
covering the normal platform-control route, what the eleven faults do and do not
block, Genie's own portable-hydraulic-power-unit method at the cylinder `R`/`E` ports
when the controls are dead, and the move-it-wide fallbacks.
`axle-retract-guide.html` — the illustrated version, 15 figures rendered from the
three PDFs. Published artifact:
https://claude.ai/code/artifact/d164976f-6532-4f6f-9deb-5de8a5e512d4

Key facts established for it:
- `LSFA1ES`/`LSRA1ES` prevent **boom** functions with the axles retracted; they do not
  prevent retraction (SM p.203).
- Each axle extension cylinder is held by two cross-piloted counterbalance valves
  (`DB`/`DC` front, `DD`/`DE` rear, 3:1, 3000 psi — SM p.227), so the axles cannot be
  pushed in or bled in.
- All six 0 V sensor faults disable only "Primary up, Secondary up/down and Extend"
  (SM pp.184–187) — none blocks axle retract. The one fault that can is the primary
  boom angle crosscheck, which switches off `P_38` propel power (SM p.189).
- Bypass mode is platform out-of-level and calibration only; Recovery mode is booms
  only (SM pp.100–101). Neither moves an axle.

## Illustrated field guide
`field-guide.html` — the same diagnosis as an illustrated page: 18 figures rendered
from the manual PDFs (parts diagrams, connector pin legends, located crops of
schematic sheet ES0366J), deep links that open Genie's public PDFs at the cited
page, and step checkboxes that save on the device.
Published artifact: https://claude.ai/code/artifact/b2e1c9c1-41bb-4666-9053-24fb2ea19fa2
`figs/` — the rendered figures (PNG, 150–200 dpi) used by that page.

### Facts upgraded from inference to drawn, by reading ES0366J
- The DCON 5 V output at J32-20 feeds pin A of all four steer plugs (J107–J110)
  **and** pin 1 of both axle plugs (J160, J161) on one bus. Previously inferred.
- Steer sensor plug pinout: A = red supply, B = blue signal, C = black ground.
  Axle sensor plug: 1 = red, 2 = blue, 3 = black.
- Slip ring pairing: J36↔J33 = CAN (A yellow CAN HIGH, B green CAN LOW, C shield);
  J37↔J34 = S56PRV white (P7R) and GNDDCON black (DCON GND); J38↔J35 = P21DCON red
  (DCON PWR), P9A orange, C61AXR brown (P12), P18 blue, C60AXE yellow, P53LS green (P6R1).
- The sheet's own swivel contact labels: P18, P6R1, C60AXE, DCON PWR, P9A, P12,
  DCON GND, P7R, CAN HIGH, CAN LOW.

## SCON wiring reference
`scon-wiring.html` — both SCON connectors as drawn on ES0366J, every pin decoded
against the Safety Controller Pin Legend, the six switched safety power outputs
mapped to their pins, the SCON fault matrix, and where to probe.
Published artifact: https://claude.ai/code/artifact/518be58a-4ef5-4214-b095-c75022c044a2
Figures: `figs/scon-*.png`.

- `J121` gray 12-pin, `J122` black 12-pin (SM p.209).
- `J122-1` `P21DCON-WH` is the SCON's own ECU supply — the **same circuit that feeds
  the DCON**, out of TCON `J12-2`. Losing it takes out both modules.
- `J121-12` `GNDSCON-BR` is the module ground the tilt-sensor fault entries keep
  pointing at.
- Safety outputs: `P_38` propel on `J121-10` `S137PLL`; `P_39` on `J121-11` `S139TRF`;
  `P_10` on `J121-8` `S59CNK`; `P_11`+`P_30` on `J122-8` `S140ENL`; `P_9B` ignition
  and fuel on `J122-10` `P58LS`; `P_7R` on `J121-9` and `J122-11` `S56PRV`.
- Matrix cross-check: *Loss of CAN* drops all six including `P_9B`, so a machine whose
  engine keeps running has a SCON that is powered, grounded and on the bus — the
  "SCON CAN no response" message is very likely latched history.
- Module `1258463GT` from SN 1712 (this machine); `139647-SGT` to SN 1711. Item 22 on
  parts figure 304.1, turntable hydraulic tank side (PM pp.54–55). Replacing it
  requires a **full machine calibration** (SM p.154).

## Connector J100 (axle retract valve)
Figures `figs/j100-*.png`.
- Legend: "J100 — 2 pin Deutsch connector for axle retract valve" (SM p.206). Coil
  designator on ES0366J is **Y100**; the extend partner is `J99`/`Y99`.
- Pin 1 = `V61AXRT-GR` (green), switched supply from DCON `J32-2`.
  Pin 2 = `VLVRET1-BR` (brown), valve return, common to `J99`, `J87`, `J106`,
  and back to DCON `J32-1` (SM p.229).
- The valve is **BU, index 11** on the steer and axle manifold, `89853GT` solenoid
  valve 2 position 3 way, coil `89849GT` 12 V D10 16 W, nut `45912GT`, seal kit
  `89310GT` (SM p.138, PM p.225).
- **Location:** inside the manifold box on the **yellow triangle side** of the chassis
  (SM p.138). Parts figure **204.1 Chassis Components, Yellow Triangle Side**, PM p.32:
  box `101032PGT` item 4, cover `107728GT` item 9. The blue triangle side box holds the
  **traction** manifold (SM p.152) — wrong box.
- Coil test: **7.5 to 9.5 Ω** at 68°F/20°C, ±30%; BU and BT share the spec. Tag and
  disconnect the wiring before testing (SM p.150).

## Function enable valve (why one jumper at J100 moves nothing)
`figs/func-enable-valve.png` — SM p.135. Schematic item **A**, solenoid valve
2 position 2 way, mounted **behind the medium pressure filter**: *"Enables lift pump
to provide hydraulic pressure for all boom and steer/axle functions."* Torque
20–25 ft-lbs. Coil spec 3.5–5.5 Ω (SM p.150).

Coil designator **`Y74`** is confirmed on sheet ES0366J, labelled
`Y74 FUNCTION ENABLE VALVE (J166)`, with `V155PSE-OR/RD` as the adjacent feed wire
`[V]` (schematic text; the extraction is spatially jumbled, so confirm the colour on
the sheet before relying on it).

**Manual conflict, unresolved:** the schematic calls that connector `J166`, but the
Drive Chassis / Platform Controller connector legend lists `J166` as *"6 pin Deutsch
connector for jib bellcrank sensor"* (SM p.206) — and separately lists `J162` as the
3 pin jib bellcrank angle sensor. One of the two is a manual error. **Identify the
function enable valve by locating it behind the medium pressure filter and ohming the
coil at 3.5–5.5 Ω, not by trusting the connector number.** An earlier revision of this
file asserted `J166` without flagging the conflict; that was wrong.

Consequence: energizing the axle retract coil `BU` at `J100` only shifts a spool —
no oil reaches the steer and axle manifold until the function enable valve is also
energized. Forcing axle retract electrically would mean latching on the master
hydraulic enable for every boom and steer function at the same time, on a machine
already carrying eleven faults. The supported paths remain Route A (platform
controls) and Route B (portable hydraulic power unit on the cylinder `R`/`E` ports,
SM p.164) in `axle-retract-for-transport.md`.

Useful field tests at `J100` with the plug off:
- Coil side, ohms: **7.5–9.5 Ω** at 20 °C, ±30% (SM p.150). Coil `89849GT`.
- Harness side, DC volts, while the platform commands retract: battery voltage means
  the command chain through the swivel and DCON is intact and the fault is
  downstream; nothing means chase it back to DCON `J32-2`.
- Plug identification: solid green `V61AXRT` = `J100` retract (DCON `J32-2`);
  green/white `V60AXEX` = `J99` extend (DCON `J32-3`); brown `VLVRET1` = shared
  return for `J99`, `J100`, `J87` and `J106`.

## Field observation 2026-09-10: both axle indicators lit, no axle motion
Owner photographed the platform control panel with the engine running. **Both axle
indicators (extend and retract) show an amber LED at the same time**, and neither
direction moves the axles. Panel is visibly wet, decal corner lifted.

Leading hypothesis, manual-backed — Control System Fault Code table, SM p.176:

| Error Source | Error Type | Effects | Recovery Actions |
|---|---|---|---|
| Axle Extend/Retract Buttons | Fault Check (**both buttons pressed**) | **Axle extend/retract disabled.** Display message on LCD | Check ribbon and connector from membrane switch. If necessary replace membrane switch. |

A wet or aged membrane bridging traces makes the controller read both buttons held,
and it then refuses both directions. Parts: `106509GT` DECAL, MEMBRANE, PLATFORM
CONTROL (plus `82841GT` overlay decal, required when replacing 106509), `62399GT`
PCB MEMBRANE/LED, `81488GT` platform control box gasket (PM p.209).

Separately, the **continuous flashing** is explained by the dead axle angle sensors:
OM p.28 defines flashing as "axles moving" and steady as "fully extended"/"fully
retracted", so with both axle angle sensors at 0 V the controller can never confirm
an end stop and the light flashes indefinitely.

Still unconfirmed: the identity of a third lit amber LED below the axle pair (machine
not level vs drive enable — drive enable on would itself block retraction, OM p.51),
and whether the foot switch was held during the attempt. Next step is to read the
ground control LCD, which is where this fault posts its message.

## Field update 2026-09-10 (later): axles retracted, chassis codes cleared
Owner energised the axle valve coils directly and brought the axles in. Machine is
now at retracted width. **All six chassis sensor codes (four steer, two axle, all
"0 V") are gone**, which localises the remaining problem to the turntable side.

Remaining codes as read off the display:
- Primary boom angle sensor crosscheck fault
- Secondary boom angle sensor crosscheck fault
- Primary boom angle zone fault
- Primary boom angle sensor not calibrated
- Secondary boom switches fault
- Secondary boom angle sensor shorted / 0 V
- TCON–SCON calibration inconsistent

### What this rules out
The earlier leading hypothesis — `P21DCON` out of TCON `J12-2` feeding both the DCON
and the SCON — is now largely **ruled out**. `J12-2` is confirmed as `P21DCON - WH`
(SM p.194) and it also lands on SCON `J122-1`; with the chassis sensors reading again
and the engine running, that feed is healthy.

### What it points at
Every remaining code sits on the **boom angle sensor circuit on the turntable**:

| Wire | Pin | Role |
|---|---|---|
| `P109ANG - GR/WH` | TCON `J12-26` | 5 V supply, boom angle sensors |
| `SNSR GND - BR` | TCON `J12-25` | sensor ground |
| `C123PBS - RD/BK` | TCON `J12-32` | primary boom angle, **operational** |
| `C141PBS - RD` | SCON `J122-3` | primary boom angle, **safety** |
| `C124SBS - OR/BK` | TCON `J12-33` | secondary boom angle, **operational** |
| `C142SBS - OR` | SCON `J122-2` | secondary boom angle, **safety** |

"Crosscheck" = the operational copy (TCON) and the safety copy (SCON) of the same
sensor disagree. The fault table carries separate *Operational* and *Safety* entries
for each boom angle sensor (SM pp.177–178); the 0 V recovery action for both is
"Check for 5.0 VDC at the sensor... Check that the 5.0 VDC LED is lit on the TCON
board."

### Why it will not drive
SCON fault matrix, SM p.189: **Primary Boom angle (crosscheck)** switches OFF `P_38`,
`P_39`, `P_10`, `P_11`, `P_30`; **Secondary Boom angle (crosscheck)** switches OFF
`P_38`, `P_39`, `P_11`, `P_30`. `P_38` is propel. Propel cannot return until those
crosscheck faults clear. There is no legitimate way around it.

### Consequence for sequencing
Full machine calibration must run **in a fixed order** (SM p.105) and the boom angle
sensors come *after* the axle angle sensors and steer sensors — and axle sensor
calibration requires **fully extending the axles again** (SM p.168). So the machine
must be transported narrow and repaired at a shop, not calibrated in the yard.
Immediate transport option is free-wheel and winch (OM p.58).

## Field observation 2026-09-12: primary boom angle sensor J114 has been modified
Photos `photos/2026-09-12-j114-*.jpg`. Machine was moved on site (free-wheel, OM p.58).

What the owner found at the primary boom pivot:
- Bright new Genie-blue sensor hardware against a faded machine — parts figure
  **511.2 (from SN 1854)** items 8 `233118GT` sensor rotator and 9 `218757GT` primary
  sensor pin weldment (PM p.169). Consistent with the parts-manual note that the
  original `94980GT` dual-output sensor is NLA and first replacement is **kit
  `217246GT`** with `216061GT` Hall sensor, matched magnet, calibration required
  (PM pp.167, 169) `[V]`. So the sensor has been replaced with the kit at some point.
- Deutsch `DT04-6P` half with **five wires seated and one pin terminal hanging loose**
  outside the connector.
- **Two blue Scotchlok IDC taps** with a green jumper looped between them — two
  conductors bridged at the connector. Not a Genie method (Deutsch pins `73713GT`).
- A **long green wire outside the loom** from the connector to a pink butt splice at a
  bolt on the pivot bracket.

### J114 / J154 factory wiring (ES0366J, SM p.229) `[V]`
Figures `figs/es-j114-primary-sensor.png`, `figs/es-j154-secondary-sensor.png`,
`figs/es-boom-sensors-wide.png`.

| Pin | J114 harness wire (Unit #130+) | Circuit | Sensor wire (94980 type) | Half |
|---|---|---|---|---|
| 1 | RD | `P109ANG-GR/WH` 5 V, TCON J12-26 | RD | S18 safety, supply |
| 2 | WH/BK | `SNSR GND-BR`, TCON J12-25 | BK | S18 safety, ground |
| 3 | BL | `C141PBS-RD` → SCON J122-3 | BL | S18 safety **signal** |
| 6 | OR | `P109ANG-GR/WH` 5 V | OR | S17 operational, supply |
| 5 | GR | `SNSR GND-BR` | BR | S17 operational, ground |
| 4 | WH | `C123PBS-RD/BK` → TCON J12-32 | YL | S17 operational **signal** |

J154 (secondary, S19 oper / S20 safety) uses the same layout: pins 1/6 `P109ANG`,
2/5 `SNSR GND`, 3 `C142SBS-OR` → SCON J122-2, 4 `C124SBS-OR/BK` → TCON J12-33.
**The 5 V and sensor ground are shared between J114 and J154**, so a short at the
primary can produce the secondary "shorted / 0 V" code.

The 216061GT kit sensor's own pigtail colours are not in the three manuals `[M]`.

### Hypotheses for the modification (`[M]`, in order)
1. Pinout mismatch after the kit swap (or a non-Genie sensor) adapted with splices.
2. Broken conductor in the boom harness bypassed with the external green wire.
3. Deliberate crosscheck defeat — pins 3 and 4 bridged so SCON and TCON see one
   signal. Would explain crosscheck + "TCON–SCON calibration inconsistent". Must be
   undone; never leave a bridged safety signal.

### Next measurements
- J114 unplugged, harness side, key on: 5.0 V pin 1→2 and pin 6→5. If absent, check
  the TCON 5 V LED (SM pp.177–178 recovery action).
- Same at J154 with J114 still unplugged: if the secondary's 5 V and code recover,
  the primary splice job is dragging the shared supply down.
- Ohm which two pins the Scotchlok loop joins, and which pin the loose terminal is.

## Field observation 2026-09-12 (later): aftermarket toggle switch and white wire
Photos `photos/2026-09-12-platform-*.jpg`, `-white-wire-*.jpg`, `-aftermarket-toggle-*.jpg`.

- Platform control box holds a **generic AC-rated toggle switch** (`10A 250VAC / 15A 125VAC /
  3/4HP`, moulded "9614", made in Mexico), three spade terminals, no boot, wired with plain
  16 GA white wire and blue Scotchlok IDC taps. It is **not** Genie `128200GT`
  (`SWITCH TOGGLE ASSY SPDT 3P MOM`).
- The white wire leaves the platform box, runs down the boom (one Scotchlok tap en route) and
  terminates near the turntable by the tilt sensor. **Function not yet identified.**
- A tilt sensor carton is sitting at the turntable; fitted vs. spare unknown.
- One joystick is visibly newer than the others.

### The factory answer this was improvising
- Service Manual sheet ES0366J carries a **TOGGLE SWITCH AFTERMARKET KIT SCHEMATIC**
  (`figs/es-toggle-switch-aftermarket-kit.png`): individual toggles for generator, aux pump, start
  assist, engine start, drive enable, **axle ext/ret (TS23)**, engine speed, drive speed, steer
  mode ×2 and **SPARE #1** (`SPARE-WH`, pin 18), landing on `J24` 20-pin of the
  LED/toggle switch interface PCB `[V]`.
- Parts figure **605.1 Toggle Switch Lid Option** (PM p.215): `237224GT` to SN 778;
  **`237225GT` ANSI from SN 779 to 2000** (this machine); `237226GT` CE; `237227GT` AUS.
  Every switch in the kit is `128200GT` `[V]`.
- Connector legend: `J23` = 10 pin ribbon PCON to LED driver board, `J24` = 20 pin Molex LED
  driver board (SM p.206) `[V]`.
- So the *existence* of a toggle switch is explained by the failing membrane panel
  ("both axle buttons pressed", SM p.176). The kit is entirely inside the platform box, so it does
  **not** explain a white wire running to the turntable.

### Wire circuit numbers to test the white wire against (SM pp.211–213) `[V]`
Genie wire names carry the circuit number (`P109ANG` = circuit 109 sensor power, GR/WH).

| Circuit | Colour | Function |
|---|---|---|
| 56 | RD | Foot switch / TCON E-stop power |
| 64 | OR/BK | Power for operational switches |
| 60 / 61 | GR/WH / GR | Axle extend / axle retract |
| 77 | WH | Lower angle #1 operational |
| 83 / 84 / 85 | GR/WH, GR/BK, GR | Tilt signal X, tilt signal Y, tilt sensor power |
| 94 | WH | Load sensor |
| 109 / 110 | GR/WH / BK | Sensor power / sensor return |

Any of 56, 64, 77, 83–85, 94 or 109/110 means the toggle is on a safety circuit — remove it.

### Assessment: why the modifications exist `[M]`
Parts were swapped and the calibration each one requires was never run; when the faults stayed,
the repairs escalated into splices and a bypass switch. Supporting facts: "primary boom angle
sensor **not calibrated**" is a live code on a machine whose sensor is visibly new;
"TCON–SCON calibration inconsistent" is the signature of a partial/abandoned calibration; the
added bonding wire says a previous tech suspected a bad `SNSR GND-BR`, which is shared between
the primary and secondary sensors and so explains both complaining at once.

**TCON/SCON are probably healthy — do not buy one yet** `[V]` reasoning:
engine runs ⇒ SCON powered, grounded and on CAN (loss of CAN drops `P_9B` ignition+fuel,
SM p.189); all six chassis sensor codes cleared when the axles moved ⇒ TCON feed, DCON and bus
healthy; every remaining fault sits on one circuit group. Replacing the SCON forces a full
machine calibration anyway (SM p.154).

## Worklist for 2026-09-13
`worklist-2026-09-13.html` — field checklist with saving readings (db capability).
Published artifact: https://claude.ai/code/artifact/8aeb0031-1151-45da-8128-c5c05d3a4562
Sections: A stand down · B identify the toggle · C the `J114` circuit · D survey ·
E parts to price · F calibration decision.

## 2026-09-12 — Platform level DOWN inoperative at ground controls

Symptom reported at the machine: at the ground control panel (decal `106510`),
holding **high speed function enable** (circled lightning bolt + rabbit, OM item 14)
together with **platform level down** (OM item 7) produces no motion; **platform
level up** works. Ground control LCD mid-scroll showing `NSORS` (tail of a longer
message). Battery volts previously read **9.3 V** in Machine Status — see below.

### Panel identification (from owner photos, OM p.22–23) [V]

| Photo feature | Identity |
|---|---|
| Circled lightning bolt + **rabbit** | High speed function enable (OM item 14) |
| Circled lightning bolt + **turtle** | Low speed function enable (OM item 15) |
| Up/down buttons under the platform icon | Platform level up/down (OM item 7) |
| Key switch decal `1263544` marked **P22** | Bypass/recovery key switch (OM item 11) |

### P22 — what it is [V]

`P_22` is a safety-gated power rail appearing at the TCON 23-pin connector
alongside `P_7`. The PCON's `P22` connector carries the platform level and
platform tilt circuits:

| Circuit | Function | Valve / connector |
|---|---|---|
| `V14PLU-OR` | Plat level UP | Y20 / `J80` |
| `V15PLD-OR/BK` | Plat level DOWN | Y19 / `J81` |
| `C88PTS-RD/BK` | Safe platform tilt out | — |
| `C90PXS-RD/BK` | Prox kill command | — |
| `P85PTS-GR` / `P85RET-BR` | Plat tilt sensor pwr / gnd | — |
| `C56PTS-RD` / `C23PTS-WH` | Safe plat tilt gnd / pwr | — |

Fault table (SM p.190) [V]:
- **Safety Switch P22 — Fault Check** → LCD `P22 SAFETY SWITCH FAULT`.
  Recovery: *"Re-level platform. Check for wiring damage on circuit `P56PRV`
  (red/white)."*
- **Safety Switch P22R — Fault Check** → LCD `P22R SAFETY SWITCH FAULT`.
  Recovery: *"Re-level platform. Repair or replace PCON."*

OM p.23 item 11 [V]: *"Bypass key position to be used to level the platform if
ground control display shows platform out of level (P22) and platform level
controls do not work."* Full bypass procedure at OM p.53–54. The separate
`PLATFORM LEVEL > 15 DEGREES FAULT` (OM p.53) is a recovery-only condition.

### Working hypotheses (unresolved)

1. **Brownout.** Machine read 9.3 V. Solenoid pull-in current differs slightly
   between coils, so a marginal supply commonly kills one direction and not the
   other. **Resolve battery/charging before spending time here.**
2. **Safety inhibit** — SCON holding `P_22` down because the platform level
   sensor is out of range. Platform level sensor read 9.4°.
3. **Open on the down leg** — `V15PLD-OR/BK`, the Y19 coil, or the PCON driver.
   Note the PCON black 23-pin connector on this machine had heavily corroded
   `P23PCON-BK`; the platform level circuits share that connector group.

Discriminating test: unplug `J80`/`J81`, ohm both coils (3.5–10 Ω depending on
valve type, SM p.150 — and UP vs DOWN should match within a few tenths), then
measure volts at `J81` while commanding down.

**Do not use the bypass key switch as a diagnostic shortcut** — it deliberately
steps around the inhibit and would mask the condition being identified.

## 2026-09-12 (evening) — Harness stripped, no damage found. Methodology correction.

Owner stripped the loom from the front boom sensor back to the ground control
box, pulled the panel to inspect behind it, and **found no broken or corroded
conductors**. Also ran a jumper from the panel to the sensor. No improvement.

### Correction: the resistance readings were probably not measuring the harness [M]

Re-examining the two numbers this diagnosis was built on:

| Reading | Value | Problem |
|---|---|---|
| `C124SBS` (wire 33, OR/BK) end to end | **24,950 Ω** | 24.9 kΩ is a standard E96 1% resistor value. A corroded or stretched conductor does not land on a catalogue value — an analog input divider does. |
| `J154` cav 1 ↔ 6 | **5,846 Ω** | Cav 1 and 6 are the same net only because they join at TCON `J12-26`. With `J12` plugged in, that measurement runs through the board's 5 V output node, not through copper alone. |

Neither reading was taken with **both** ends free. Disconnecting the batteries
removes power but does NOT remove the board from the circuit — unpowered
semiconductors, pull-downs and protection networks still conduct.

**Correct method going forward:** unplug the sensor connector AND the controller
connector, then ohm end to end. Anything other than ~1 Ω on a supply, ground or
signal conductor is then real. Until that is redone, treat the "broken supply to
`J154` cavity 6" conclusion as **unproven**.

This also explains the null result from stripping the loom: there may be nothing
there to find.

### New findings from owner photos

**Dual battery separator** — Sure Power Industries **model 1314A**, 12 V, 100 A
continuous, ground negative. Terminals: START LAMP / START SIGNAL / GROUND /
AUX BAT / MAIN BAT. Genie part **`237068GT` SEPARATOR, DUAL BATTERY, 100A**
(Parts Manual 106877); service kits `214393GT` (ANSI/CSA), `215209GT` (CE),
`215210GT` (AS). [V]

The machine therefore has **two battery banks**. A separator that fails to close
leaves one bank uncharged — a direct candidate for the **9.3 V** Machine Status
reading. Untested.

**TCON board LEDs** — board serial `12240816`. Photos show red, yellow and green
LEDs lit along the bottom edge beside the DB9 diagnostic port (silkscreen `D65`,
`D66`, `D67` visible). The fault tables for every boom angle sensor entry
("Value at 0 V") end with: *"Check for 5.0 VDC at the sensor. Check for damaged
wiring going to the sensor. **Check that the 5.0 VDC LED is lit on the TCON
board.**"* [V] Which of the three is the 5.0 VDC indicator is not yet
established.

**Unidentified 3-pin Deutsch connector at a boom pivot** — photographed with
badly sun-bleached, cracking insulation. **This is not `J114` or `J154`** — both
boom angle sensors are 6-pin. Identity not yet established; do not assume it is
an angle sensor.

**Angle sensor actuating linkage** — photos show the rotary sensor driven by a
rusty slotted link arm. The manual's recovery for *Value Too High / Value Too
Low* on both the operational and safety boom angle sensors reads: *"Sensor is out
of range. **Check sensor and actuating pin for proper installation.** Repair or
replace sensor and recalibrate."* [V] A link that has slipped in its adjustment
slot produces an out-of-range reading and a crosscheck fault with **no wiring
damage at all** — which fits today's null result.

### Revised priority order

1. Power: battery banks, charging, and the separator.
2. Mechanical: both angle sensor actuating arms — slot position, tightness, free rotation.
3. Re-measure resistance with **both** ends unplugged.
4. Harness — only if 1–3 come back clean.

## 2026-09-12 (late) — Boom stuck raised. Platform out-of-level lockout identified.

Owner reports the boom is **stuck in the raised position and will not lower**.
Charging system exonerated: after running the engine a few minutes the system
read **13.8–14 V**, so the earlier 9.3 V was load-down during extended key-on
testing, not a charging fault. (The measurements taken at 9.3 V remain
untrustworthy, but the battery/separator is no longer a root-cause candidate.)

### The 10 degree platform lockout — likely explains the whole symptom set [V]

Service Manual p.100, *How to Use the Bypass Mode*:

> *"The Bypass mode will allow the platform to be manually leveled when an
> out-of-level condition exists. **In the event that the platform angle is
> greater than 10° from level, the boom angle and platform level functions are
> disabled.** Use of the Bypass mode will allow the platform to be manually
> adjusted to within the normal operating envelope, ±4.5°. **Only auxiliary
> power can be used to correct an out of level platform fault.**"*

Machine Status reported **platform level sensor degree = 9.4** — within 0.6° of
that threshold. This single specification accounts for:

| Symptom | Explained by |
|---|---|
| Boom will not lower / boom angle functions dead | "boom angle … functions are disabled" above 10° |
| Platform level DOWN inoperative | "platform level functions are disabled" |
| Platform level UP still works | up is the direction that returns the platform toward level |

**No wiring fault is required for any of it.** Caveat: 9.4° is below the stated
10° trip, and the safety element may read a different value than the
operational element shown on the display; the platform angle at the moment of
lockout is unknown. Treat as the leading hypothesis, not established fact.

### Recommended sequence

1. **Remove every temporary jumper** and restore the machine to stock first.
2. **Bypass mode** (SM p.100) — level the platform on auxiliary power. Main key
   switch must stay in the ground control position; engine off; only the
   auxiliary power unit will move it.
3. Retry normal boom down at the ground controls.
4. Only if that fails: **Recovery mode** (SM p.101).

### Recovery mode reference (SM p.101) [V]

Bypass/recovery key switch positions: **1 Run, 2 Bypass, 3 Recovery**. Located
on the lower right side of the control box from SN Z13512-1712 (this machine is
Z13513-1861, so lower right). Procedure requires software 1.11 or later.

Held in the Recovery position, the auxiliary power unit runs and the machine
sequences: primary boom retract → secondary boom retract → primary boom lower.
The switch must be **held**.

Critical notes from the manual:
- *"If this procedure is performed with the main key switch in the off position
  an active latched safety fault will be set and will have to be cleared."*
- *"**If any boom safety limit switches are faulty, the boom will only retract
  and not lower** and the operator will need to be recovered from that point."*
  Given this machine's fault list, plan for this outcome.
- Above ±15° platform out of level, all auxiliary-power functions are disabled
  and `PLATFORM LEVEL > 15 DEGREES` is displayed.
- Platform leveling is **not active** during recovery.

### Controller condition

No evidence of a failed TCON or SCON. The machine is disabling functions in the
specific patterns the safety matrix prescribes (SM p.189) — that is the safety
system operating correctly on bad input, not a board failing. Board replacement
would also force a full recalibration (SM: *"When the ECM circuit board is
replaced, the machine will need to be fully calibrated"*).

## 2026-09-13 — Verification plan, and why the axles will not extend

### Manual locations [V]

| Procedure | Service Manual |
|---|---|
| Primary boom angle sensor — replace | section **4-8, p.81** |
| Primary boom angle sensor — calibrate | p.82 |
| Secondary boom angle sensor — replace | section **4-9, p.88** |
| Secondary boom angle sensor — calibrate | p.89 |
| Jib boom bellcrank angle sensor | p.56 / calibrate p.58 |
| Platform level sensor — calibrate | p.42 |
| Axle angle sensors | p.165 / calibrate p.167 |
| Bypass / Recovery key switch | p.99–101 |
| Machine Status menu | p.106–107 |
| Valve coil resistance specification | p.150 |
| SCON fault-to-output matrix | p.189 |

### Verifying sensor clocking without removing anything and without WebGPI

**Machine Status** (key switch on, press **(plus)** and **(minus)** together)
displays live: primary boom angle to gravity, primary-to-secondary boom angle,
secondary boom angle, turntable level X and Y, platform level degree, battery
volts.

**Test:** place a digital level on the boom, read the true angle, compare to the
display. A sensor assembled **one hex flat off is ~60° out** — far too large to
miss and far outside any calibration offset. Agreement within a few degrees
means the clocking is right and the fault is elsewhere.

**Second test:** move the boom and watch the number. It must change smoothly,
monotonically, in the correct direction. Frozen, reversed or jumpy indicates a
coupling problem.

**Third:** the **secondary** sensor is on the turntable riser bulkhead, ground
controls side, under a small cover — reachable from the ground with the boom
raised. The **primary** sits inside the primary boom at the pivot pin behind the
boom end cover. Start with the secondary. Inspect without disassembly: bracket
seated in the machined pocket, sensor flat aligned to the flat on the pivot pin.

**WebGPI is not required** for any of this. It would help with fault history and
with identifying the TCON LEDs, but Machine Status supplies the live angles.

### Why the axles will not extend [V]

Operator's Manual p.49:

> *"Drive, steer and **axle functions are not available from the ground
> controls**."*
>
> *"**To Extend and Retract Axles** — 1 Turn the key switch to **platform
> control**. 2 At the platform controls, **press down the foot switch and move
> the drive control handle in either direction**. Activate the extend axle
> function or the retract axle function."*

Axle extend is a platform-control function requiring the foot switch **and** a
drive command. Attempting it from the ground control box cannot work.

That procedure needs the drive function live, and **`P_38` Propel is switched
off by the primary boom angle crosscheck fault** (SM p.189). The related rows
"Axle safety not stowed" and "Axle crosscheck angle sensor versus safety switch"
each drop `P_39`/`P_10`/`P_11`/`P_30`, and the machine's own function test (OM
p.30) states the boom should not raise and the primary boom should not extend
unless the axles are extended.

**The interlock loop:** invalid boom angle → no propel → no axle extend → no
calibration → invalid boom angle. **It breaks at the sensors, not at the
axles.**

Note the asymmetry: axles can only be **retracted** with both booms fully
lowered and retracted and the platform between the circle-end wheels. Extending
carries no such stated requirement, so the raised boom is not necessarily what
blocks extend.

### Order of work

1. Machine Status vs digital level on both booms; inspect the secondary sensor;
   check the calibration toggle switch position.
2. Reinstall any sensor found mis-clocked, per p.81 / p.88.
3. Bring the boom down — Bypass to level the platform, normal down, then
   Recovery if needed.
4. With the boom stowed, extend the axles **from the platform controls**.
5. Calibrate in order: axle angle sensors → turntable level sensor → secondary
   boom angle sensor → primary boom angle sensor.

## 2026-09-13 — IMPORTANT: serial break at SN 1854 changes the sensor design

Parts Manual 106877GT (July 2024) carries **two** drawings for this assembly:

- **511.1** Primary Boom Angle Sensor and Retract Limit Switch **(to SN 1853)**
- **511.2** Primary Boom Angle Sensor and Retract Limit Switch **(from SN 1854)**

**This machine is Z13513-1861 — it falls under 511.2, the newer design.**

The Service Manual (1268557GT, October 2018) replacement procedure on p.81/p.88
describes the **older** arrangement: two springs, a hex-shaped key
(`101599GT` KEY, BALL POINT HEX) and a `101715GT` primary rotary sensor pin,
with the sensor flat aligned to a flat on the boom pivot pin. Those part numbers
belong to **511.1**.

### What 511.2 actually uses [V]

| Item | Part No. | Description |
|---|---|---|
| 8 | `233118GT` | WLDT, SENSOR ROTATOR #2 |
| 9 | `218757GT` | WLDT., PRIMARY SENSOR PIN |
| 10 | `215728GT` | **ASSY, ANGLE SEN., Z135 PRIMARY (Complete)** — includes items 14–22; *"Calibration required after replacement"* |
| 13 | `217235GT` | SCREW, SHS, 3/4 X 1.5 X 5/8-11, ZAG |
| 15 | `226489GT` | MACHINED, PRIMARY SENSOR BASE |
| 16 | `226491GT` | MACHINED, ANGLE SENSOR RACE |
| 17 | `216061GT` | **SENSOR, ANGLE, 180 DEG, CW** — *"Sensor and magnet are matched and must be replaced at the same time. Machine calibration is required after installation."* |
| 19 | `226492GT` | MACHINED, ANGLE SENSOR HOLDER |
| 21 | `233116GT` | **MACHINED, SENSOR ARM** |
| 22 | `217219GT` | SCREW, SHC, M4-0.7X14 DIN912, 12.9, ZAB |
| 23 | `94814GT` | PIN, 2.25 DIA X 5.10 LG, THREADED |

Supersession note in the parts manual against the old `94980GT` SENSOR, DUAL
OUTPUT, ANGLE: *"Older sensor part 94980 is no longer available for Boom Angle
Sensor after SN 12853. For first time replacement order **kit `217246`** (refer
to 511.2)."*

### Consequences for this diagnosis

1. **The hex-key / 60°-per-flat theory applies to 511.1, not to this machine.**
   The owner's photograph of a **slotted arm with a socket-head clamp screw**
   matches 511.2 (`233116GT` sensor arm, `217235GT` screw). Correct the earlier
   note accordingly.
2. On 511.2 the adjustment is **continuous, not indexed**. The failure mode is
   the arm slipping or being clamped at the wrong position in its slot,
   producing an **arbitrary** angular offset rather than a discrete 60° step.
   That still yields *Value Too Low* and a crosscheck fault with sound wiring,
   and it fits the rusty, weathered arm in the photo better than a hex misindex.
3. **`216061GT` is a magnetic sensor with a matched magnet.** If a previous shop
   replaced the sensor without its matched magnet, or fitted a magnet from
   another assembly, the readings would be wrong by design. The parts manual
   warns about this explicitly.
4. The sensor is specified **180 DEG, CW**. A CCW part, or the assembly built
   mirrored, would read backwards.
5. `215728GT` is the complete assembly (items 14–22) — the sane replacement if
   any of the internals are suspect.

### Revised inspection for the arm

- Witness marks showing the arm has rotated in its slot
- Clamp screw `217235GT` tight, and the arm not free to move by hand
- Arm position matched against the opposite/reference assembly
- Magnet present and matched to the sensor
- Rotation direction of the assembly consistent with a CW sensor

### Figures extracted to `figs/`

- `sm81-primary-sensor-replace-p81.png`, `sm82-...-p82.png`
- `sm88-secondary-sensor-replace-p88.png`, `sm89-...-p89.png`
- `pm511-1-primary-angle-sensor-to-sn1853.png`
- `pm511-2-primary-angle-sensor-from-sn1854.png`
- `pm511-2-parts-list-from-sn1854.png`

## 2026-09-13 — Correction: the slotted arm is NOT an adjustment

Owner photographed the assembly in situ: black sensor arm, slot at the upper
end, rusty socket-head screw through the slot into a post on a small bracket,
round sensor body bolted into a circular cutout in the plate below.

**The screw through that slot is `217235GT` — "SCREW, **SHS**, 3/4 X 1.5 X
5/8-11, ZAG".** SHS is a **shoulder screw**: a 3/4 inch shoulder, 1.5 inch long,
on a 5/8-11 thread. A shoulder screw riding in a slot is a **sliding pivot**,
part of the linkage geometry — it is meant to move as the boom angle changes.
It is not a clamp and there is nothing to set there.

**This retracts the previous note's suggestion to look for witness marks where
"the arm slipped in its slot."** The slot is supposed to slide. That was wrong.

**There is no adjustment procedure for these sensors anywhere in Service Manual
1268557GT.** A search for adjustment language against sensor, arm, bracket or
angle returns nothing. Genie's method is: assemble per the parts drawing, then
**calibrate in software**. The displayed angle is corrected by calibration, not
by moving hardware.

### What the photograph does justify acting on

1. **The shoulder screw is rusty.** It must slide freely in the slot. Seized or
   dragging, the arm binds and the sensor is forced, giving a lagging or jumping
   reading. Clean, verify free movement, lubricate lightly. Do **not**
   overtighten — a shoulder screw bottoms on its shoulder and is not a clamp.
2. **A cable tie is wrapped around the arm** where it meets the sensor body.
   That is not in drawing 511.2. Establish what it is restraining.
3. **The anchor bracket** (small plate, yellow-zinc hex bolt) carrying the post
   must be tight and unmoved; if it has shifted, the whole linkage geometry
   shifts with it.

### Where clocking is actually established

Inside assembly `215728GT`: the sensor `216061GT` (17) mounts to the holder
`226492GT` (19) on M3 screws, and the arm `233116GT` (21) attaches with the M4
screw `217219GT` (22). No "set to X degrees" specification is published for
either joint — build to the drawing and calibrate.

### Practical consequence

Do not attempt to adjust. Confirm the linkage is free, tight and unbent; check
the displayed angle against a digital level; if the reading is wrong with sound
mechanics, the fault is calibration or the matched sensor/magnet pair.

### Assembly `215728GT` internal stack — TWO sensors, one shared magnet race [V]

The 511.2 exploded detail shows item **17 (`216061GT`) appearing twice**. The
stack, in assembly order:

| Position | Item | Part | Description |
|---|---|---|---|
| 1 | 14 | `217217GT` | SCREW, FHSCS, M4-0.7 X 14 |
| 2 | 15 | `226489GT` | MACHINED, PRIMARY SENSOR BASE |
| 3 | 16 | `226491GT` | MACHINED, **ANGLE SENSOR RACE** (carries the magnet) |
| 4 | **17** | `216061GT` | **SENSOR, ANGLE, 180 DEG, CW** — first element |
| 5 | 18 | `237242GT` | SCREW, FHS, **M3-0.5 X 8** |
| 6 | 19 | `226492GT` | MACHINED, ANGLE SENSOR HOLDER |
| 7 | 20 | `237241GT` | SCREW, FHS, **M3-0.5 X 14** |
| 8 | **17** | `216061GT` | **SENSOR, ANGLE, 180 DEG, CW** — second element |
| 9 | 21 | `233116GT` | MACHINED, SENSOR ARM |
| 10 | 22 | `217219GT` | SCREW, SHC, M4-0.7 X 14 |

**This is the dual-channel architecture in hardware:** two separate `216061GT`
sensors, each with its own 3-pin pigtail, reading one shared magnet race. One
feeds the TCON (operational), the other the SCON (safety).

**This identifies the previously unknown 3-pin Deutsch connector** photographed
at a boom pivot. It is one of the two angle sensor elements — not a 6-pin
`J114`/`J154` connector, and not a mystery device.

Failure modes this creates, all producing a **crosscheck fault** with sound
wiring:
- one element replaced and not the other
- the magnet race `226491GT` not replaced with the sensors (the parts manual
  warns *"Sensor and magnet are matched and must be replaced at the same time"*)
- a CCW sensor fitted where CW is specified, or the stack assembled mirrored
- the two M3 screws swapped — item 18 is **M3 x 8**, item 20 is **M3 x 14**

### Bench test — the decisive check, now that the assembly is off the machine

1. Rotate the arm through full travel by hand: smooth, no notchiness, binding or
   dead spot.
2. Check for backlash between arm and body — there should be effectively none.
3. **Electrically, on the bench:** identify each 3-pin pigtail's supply, ground
   and signal (verify, do not assume), apply **5.0 V** from a current-limited
   supply, and read the signal while sweeping the arm slowly through its range.
   Expect a smooth, monotonic sweep with no dropouts. **Test both elements and
   compare.** Divergence, opposite directions, a dead zone, or one element flat
   is the crosscheck fault reproduced on the bench with no machine interlocks in
   the way.
4. Inspect the magnet in the race: present, undamaged, seated, free of ferrous
   debris.

Do not fully disassemble unless prepared to fit `215728GT`, which is sold as a
complete assembly.

## 2026-09-13 — Boom will not lower on manual/recovery attempt

Owner attempted to bring the boom down using the bypass/recovery key switch and
reports no movement. Stated the attempt was made **"with the key on the bucket
setting"** — i.e. the main key switch in the **platform** position.

### Cause identified: main key switch in the wrong position [V]

Both procedures require the main key switch in **ground controls** before the
key is moved to the bypass/recovery switch:

- Bypass (SM p.100): *"Turn the main key switch to ground controls. Remove the
  key from the main key switch and insert the key into the bypass/recovery key
  switch. **Note: The main key switch must remain in the ground control
  position.**"*
- Recovery (SM p.101): *"Turn the main key switch to ground controls. Remove the
  key from the main key switch and insert the key into the bypass/recovery key
  switch. **Note: If this procedure is performed with the main key switch in the
  off position an active latched safety fault will be set and will have to be
  cleared.**"*

Key switch positions: **1 Run, 2 Bypass, 3 Recovery.**

### Second cause: the switch must be HELD [V]

*"Turn and **hold** the bypass/recovery key switch to the recovery position. The
switch must be held in the recovery position."* … *"The key switch must be held
in the recovery position until the recovery sequence is complete."*

The sequence is primary boom retract → secondary boom retract → primary boom
lower, driven by the **auxiliary power unit** — slow. Minutes, not seconds.

### Third: the angle sensor was removed from the machine

Assembly `215728GT` was unbolted for inspection in the previous session. With a
boom angle sensor removed or unplugged, the SCON reads a dead sensor and holds
the boom. **Reinstall and reconnect both sensor pigtails before any further
recovery attempt.**

### Fourth: the auxiliary power unit has its own batteries

The scheduled maintenance lists carry a **"Battery – Auxiliary power units"**
item, so the aux power unit is separately battery-fed. Recovery and bypass both
run on it. Given this machine's electrical history those batteries should be
checked and charged before assuming the recovery circuit is at fault.

### Manual/mechanical lowering

**No manual boom-lowering, hand-pump or manual descent valve procedure exists
anywhere in Service Manual 1268557GT or Operator's Manual 114474.** Recovery
mode on auxiliary power is the manufacturer's method. Do not improvise one.

### Manual cautions for the attempt [V]

- *"If any boom safety limit switches are faulty, the boom will only retract and
  not lower and the operator will need to be recovered from that point."*
- *"Platform leveling is not active when using recovery mode. The platform could
  reach high out-of-level conditions."*
- Above ±15° platform out of level, all auxiliary-power functions are disabled.
- *"When using recovery mode, the platform may not fully lower to the ground."*

Nobody in the platform. Area clear. Confirm axle position — a raised, extended
boom over a retracted-axle chassis is a stability concern in its own right.

## 2026-09-13 — Auxiliary power units identified; hot batteries, no movement

Owner held recovery ~90 seconds. No boom movement, and **the batteries became
hot**. Treated as a hard stop — current at that level means a stalled motor,
a short, or a shorted cell, and hot lead-acid batteries vent hydrogen.

### The two auxiliary power units [V]

Labels read `GENIE INDUSTRIES / CUSTOMER NO. 101361 / MODEL NO. S203*4962 /
DATE CODE T6`. Parts Manual 106877GT:

| Part No. | Description | Qty |
|---|---|---|
| `101361GT` | **POWER UNIT, AUX PUMP 12 VDC** | **2** |
| `58489GT` | PUMP ASSY, AUX. POWER UNIT 89617 | — |
| `62412GT` | **SOLENOID, MOTOR START, 60511, APU** | — |
| `101682GT` | CABLE ASSY NEG **2 GA** BLACK AUX#1 (31 in) | — |
| `101683GT` | CABLE ASSY NEG **2 GA** BLACK AUX#2 (34 in) | — |

These are schematic items **DB** (auxiliary pump #1) and **DC** (auxiliary
pump #2), each behind its own check valve. Pump type: fixed displacement gear,
**0.15 cu in / 2.47 cc per revolution** (SM p.—, Specifications). 2 GA cabling
means starter-motor currents.

### Hydraulic tank shut-off valves — first free check

A decal in the owner's photo warns that the hydraulic shutoff valves must be
open before starting the engine. SM confirms: *"Close the **two** hydraulic tank
shut-off valves at the hydraulic tank"* with a component damage hazard note that
the engine must not be started with them closed.

**Both must be open.** This machine has had several people working on it; a
closed suction valve starves a pump. Free to check, checks in minutes.

### Valve manifold hand-labelled by a previous technician

Blue marker on the solenoid coils: `P.U.D` (primary up/down), `P.E.R` (primary
extend/retract), `S.E.R` (secondary extend/retract), `S.U.D` (secondary
up/down), `T.L.` (turntable left). Further evidence of prior diagnostic work by
others. These are the valves the recovery sequence must operate.

### The observation that splits the diagnosis

**Did the motors make any noise?** Not yet reported.

| Observed | Reading |
|---|---|
| Silence + hot batteries | Stalled motor, seized pump, welded solenoid, or a dead short |
| Whine / grind, no boom movement | Hydraulic — starved suction, or the directional valve is not shifting |
| Click then nothing | Start solenoid pulling in, motor not turning |

A starved gear pump cavitates and draws **less** current, so heat with no noise
points at mechanical stall or a short rather than starvation alone.

**Both units failing simultaneously is unlikely**, so if neither did anything
suspect something common to both: the shut-off valves, the auxiliary battery
bank, a shared ground, or the command itself.

### Start solenoid `62412GT` — check for a welded contact

Each motor carries one. **A solenoid welded closed holds its motor energised
continuously regardless of the key**, which would cook the batteries exactly as
described. With the key released, confirm no voltage remains at the motor post
and nothing is still drawing.

### Position unchanged

Boom still raised and extended. Machine to be tagged out of service; boom weight
to be supported mechanically; Genie Product Support to be engaged. No
improvised hydraulic release — no manual descent procedure exists in either
manual.

## 2026-09-13 — Second unauthorised modification found, at the platform

Owner photographed the underside of the platform near the AC power boxes.
Visible, and none of it factory:

- A **blue Scotchlok / insulation-displacement quick-splice** clamped onto a
  Genie harness conductor
- A **white two-conductor cord of domestic type** (lamp/thermostat grade) run
  loose through the boom, coiled around a hydraulic hose, not in any loom
- A **cut, frayed, unterminated conductor end** hanging free with exposed
  copper strands

Same method as the Scotchlok tap previously found at the turntable. This is the
**second** such modification on this machine, alongside the wiring work already
recorded.

### If this is on the foot switch circuit the machine must not be operated

The foot switch (`FTS` — Foot Switch Signal; `FOOTSW (FS1)` at PCON `P22`, with
`P85RET-BR` foot switch return) is the operator-presence interlock. A jumper
across it makes every platform function live with no foot on the pedal.

**Operator's Manual p.35, Test the Foot Switch** — no tools required [V]:

> 40. Push in the platform red Emergency Stop button to the off position.
> 41. Pull out the red Emergency Stop button to the on position **but do not
>     start the engine**.
> 42. **Press down the foot switch and attempt to start the engine.**
>     *Result: The engine should not start.*
> 43. Do not press down the foot switch and restart the engine.
> 44. **Do not press down the foot switch and test each machine function.**
>     *Result: No machine functions should operate.*

Step 44 is decisive. Any function that operates with the foot off the pedal
means the interlock is defeated.

Step 42 is safe to perform now. **Defer step 44 until the boom is down** — do
not command functions with the boom raised and extended.

### The frayed end may explain the wandering faults

An unterminated conductor loose inside a boom, intermittently contacting
structure, produces exactly the come-and-go fault behaviour recorded throughout
this case, and is a candidate for the current that heated the auxiliary
batteries. **Establish what energises it before touching it.**

### Document before removing

Photograph in place, trace both ends, and record the Scotchlok's host conductor
colour and circuit number before cutting anything out. What was being defeated
matters, and on a machine with this history the modifications are evidence.

### Disposition

Between this tap, the turntable tap, the non-factory wiring and the possibility
of mismatched sensor parts, this machine has been materially modified by a
previous owner. The work in front of the owner is **restoration to factory
condition**, not a repair. Until every modification is found and reversed the
machine should be treated as unsafe and tagged out of service.

## 2026-09-13 — What disables the auxiliary power system

Owner reports the machine and platform are **physically level**, so the ±15°
lockout appears not to apply. The distinction that matters: **the machine acts
on what the sensor reports, not on what is true.**

### Causes that disable or restrict auxiliary power [V]

| Cause | Manual text | Check |
|---|---|---|
| **Platform level sensor reads beyond ±15°** | *"If the event the platform becomes out of level ± 15°, all functions using auxiliary power will be disabled, `PLATFORM LEVEL > 15 DEGREES` will be displayed on the ground control LCD screen"* (SM p.101) | Machine Status → **platform level sensor degree**. A sensor reading >15° on a physically level platform disables aux with nothing visibly wrong. |
| **Platform Overload** | *"Display message on LCD. **Disable all functions from PCON. Limit functions at TCON to AUX Power. FUEL POWER P9B FAULT**"* — recovery: *"Check for an overload in the platform. **Check the overload switch mounted on the platform support**."* (SM p.—, Fault Codes) | Overload limit switch `LSP1OLS` on the platform support |
| **Loss of CAN** | Drops all six SCON outputs including `P_9B` Ignition/Fuel (SM p.189) | |
| **Platform out of level >10°** | Boom angle and platform level functions disabled (SM p.100) | |
| E-stop pushed in at either station | | |
| Aux batteries, start solenoids `62412GT`, 2 GA cables, grounds | | Separate battery bank near the hydraulic tank |

### Platform Overload latches and needs a passcode

Display Module menu, **software V3.07 and later**:

> **Overload Recovery** → **Clear Overload Recovery (YES/NO)** —
> *"**A passcode is required to clear the message**"*

If Platform Overload has latched on this machine it cannot be cleared without
that passcode from Genie Product Support. Another reason to open a case with
them.

### Immediate checks

1. **Machine Status** (key on, press **(plus)** and **(minus)** together) →
   read **platform level sensor degree**. Physically level but reading high is
   the answer.
2. **Let the ground control LCD finish scrolling.** It was last seen mid-message
   showing `NSORS`; the full string was never recorded. If it reads
   `PLATFORM LEVEL > 15 DEGREES`, the cause is on the screen.
3. **Confirm the primary boom angle sensor is reinstalled and both pigtails
   connected.** It was removed for inspection and has not been confirmed
   refitted. A disconnected angle sensor alone can produce this state.
4. Inspect the overload switch on the platform support — noting that the
   platform area already carries one unauthorised Scotchlok modification.

## 2026-09-13 — Aux pump healthy; axles retracted with boom raised and extended

Owner reports the **auxiliary pump now runs with a steady strong hum** (healthy,
making pressure), **both angle sensors are refitted**, and **the axles are still
in transport (retracted) position**.

### The axle position is the urgent item

The machine is currently boom **raised and extended** over **retracted axles**.
Its own safety system is designed to make that impossible:

- OM p.30, function test: *"The boom should not raise unless the axles are
  extended."* … *"The primary boom should not extend unless the axles are
  extended."*
- OM p.49: *"The axles can only be retracted if the primary and secondary booms
  are fully lowered and retracted and the platform is between the circle-end
  wheels."*
- SCON matrix (SM p.189): **"Axle safety not stowed"** drops `P_39`, `P_10`,
  `P_11`, `P_30`; **"Axle (not fully extended) and Turntable rotate"** drops
  `P_38`, `P_39`.

This is the worst stability case the machine has, and it also independently
explains the SCON cutting boom outputs. Treat as a tip-over hazard: nobody in or
near the platform, nothing commanded that adds reach or height.

### System relief valve location [V]

Machine is SN 1861, so section **8-2 Function Manifold (after serial number
439), SM p.124**.

> *"The function manifold is mounted to the **turntable next to the ground
> controls**."*

| Index No. | Description | Schematic Item | Function | Torque |
|---|---|---|---|---|
| **11** | **Relief valve, 3100 psi / 214 bar** | **L** | **System relief** | 30–35 ft-lbs / 41–47 Nm |

Other reliefs: primary boom extend 2600 psi (item on the same manifold, adjust
per SM p.129); axle extend relief 2400 psi on the **steer and axle manifold**;
traction manifold hot oil relief 250 psi.

Adjustment procedures: **How to Adjust the System Relief Valve, SM p.128**;
**How to Adjust the Primary Boom Extend Relief Valve, SM p.129**.

### The aux operating method that may not have been tried

The relief adjustment procedure (SM p.128) shows the normal way to work a
function on auxiliary power, and it is **not** the recovery key:

> *"Note: **Auxiliary power will be used to perform this procedure. Do not start
> the engine.**"*
>
> *"**Simultaneously push and hold the auxiliary power button and the primary
> boom retract button**…"*

OM p.23 item 16 agrees: *"Simultaneously push the emergency/auxiliary power
button and activate the desired function."*

**Retract before lowering.** The recovery sequence itself runs primary retract →
secondary retract → primary lower, because retracting reduces the overturning
moment first. With the axles in, that order matters more, not less.

## 2026-09-13 — Aux power + any function button: no response at all

Engine off, auxiliary power applied (pump runs, steady strong hum), **no
function on the ground control pad responds — nothing at all**. LCD shows
`FAUL…` mid-scroll.

### What "nothing on any button" means

The aux pump running proves the aux power path works. If no valve energises on
any function, the **SCON has dropped its output power rails**, not just selected
ones. Given the active conditions — axle safety not stowed, axle not fully
extended, plus the boom angle faults — `P_38`, `P_39`, `P_10`, `P_11` and `P_30`
would all be off simultaneously. That is the observed behaviour.

### The single biggest unknown, still unread after days

**The ground control LCD has never been read in full.** It has been photographed
showing `NSORS` and now `FAUL…`, always mid-scroll. The machine is stating its
own fault list and it has not been recorded.

Stand at the panel, let the display cycle completely, and write down every
message word for word. Use the **down arrow** and **enter** buttons to page the
fault list rather than waiting on the scroll.

### Platform Emergency Stop — unchecked, and currently unreachable

There are **two** E-stops, ground and platform. **A platform E-stop pushed in
disables the machine from every station.** The platform is at height and its
E-stop state has never been confirmed. Check it with binoculars or a phone
zoom.

Also confirm the **ground** E-stop is fully pulled out, and that the **main key
switch is in the ground control position** — required for both bypass and
recovery, and photographs suggest keys are present in both switches.

### Field methods now exhausted

| Method | Result |
|---|---|
| Normal controls, engine running | No boom functions |
| Auxiliary power button + function button, engine off | No response, any function |
| Recovery key switch held | No movement; batteries overheated on one attempt |

All three sanctioned field routes have been tried. The remaining steps are not
yard work:

1. **WebGPI** on the DB9 port — the one diagnostic tool not yet used. Reads the
   complete fault list and live sensor data.
2. **Genie Product Support** — holds the passcode required for Clear Overload
   Recovery, can interpret the fault string, and can advise a controlled
   recovery for a machine in this configuration.
3. **A crane** to take the boom's weight for a controlled retraction and
   lowering.

Machine remains boom raised and extended over retracted axles. Tagged out of
service.

## 2026-09-13 — Filter restriction gauge, not a pressure gauge

Owner photographed a gauge on an orange filter housing, scaled **0–100 psi /
0–7 bar** with a green band at the low end, and asked why it does not rise when
hydraulics are applied.

**It is a filter condition / restriction indicator**, reading the pressure drop
**across the filter element**, not system pressure [M — from hydraulic practice;
the manuals do not describe this gauge]. It will never show system pressure, so
"it doesn't go up" is expected, not a fault in itself.

### What is worth acting on

- **The needle appears to sit well into the red**, around 5 bar. That reads as a
  blocked element — or a stuck gauge. If it does not return to green with the
  pump off, it is one or the other.
- **The housing is marked `FEB/19  1253 HR  G.A.`** The machine is at
  **2162.4 hours**. That element is roughly **six years and 900 hours** old.

### Manual specifications [V]

| Filter | Bypass pressure |
|---|---|
| High pressure filter | **102 psi / 7 bar** |
| Medium pressure filter | **51 psi / 3.5 bar** |
| Hydraulic tank return filter | 10 micron |

A 0–100 psi / 0–7 bar gauge corresponds to the **high pressure filter**, whose
bypass is at full scale.

### There is an electrical restriction switch as well [V]

Circuit **86**, **orange**, primary function *"Hydraulic Filter restricted."*
The controller is told about a blocked filter, so this can contribute to the
`FAULT` message currently on the ground control LCD — another reason the full
display text needs recording.

### Hydraulic tank

Second photo shows the tank sight gauge with integral thermometer, and the decal
**"Chevron Rando HD equivalent only — Call Genie Industries for list of
equivalent and optional oils."** Check **oil level** (a low tank starves the
auxiliary pumps) and **oil temperature** (flow has been dumping over relief
during these attempts).

### Bearing on the main fault

A restricted filter does not by itself stop the boom — filters bypass, oil still
flows. It does not change the diagnosis that the safety system is refusing to
open a valve. It is another element of the neglect picture and a possible
contributor to the active fault list.

## 2026-09-13 — Boom recovered and stowed; software version 4.01 confirmed

Boom is **down and stowed**, machine on a level surface. Ground control LCD
reports software version **4.01**.

> *"For software versions **4.01 and higher**, use the **2 Point Calibration**
> procedure. For software versions before 4.01, use the 6 Point Calibration
> procedure."* (SM p.83) [V]

**4.01 qualifies for 2-point.** No digital level is required for the boom angle
sensors.

Note: the *turntable level sensor* procedure (SM p.154) states *"A digital level
will be required to perform this procedure"* with no version split, so if the
full p.105 sequence becomes necessary, kit `58351` will still be needed.

### Outstanding prerequisite

Calibration requires *"the booms in the fully stowed position, in the drive
enable zone and the **axles fully extended**."* The axles were last recorded
**retracted**. With the boom now stowed they should extend — from the **platform
controls**, foot switch down, drive handle moved (OM p.49; axle functions are
not available from the ground controls).

### Recommended scope

Both boom angle sensor assemblies were disturbed during diagnosis, so both
require calibration. Start with **secondary**, then **primary**, and check
whether the fault list clears. If `TCON/SCON CALIBRATION INCONSISTENT` persists,
work the full p.105 sequence — which will require the digital level kit.

## 2026-09-13 — Axle indicator lights FLASHING at the platform; axles will not extend

Owner reports both axle extend indicators **flashing** at the platform controls
and no axle movement.

### What flashing means [V]

Operator's Manual p.27 item 24, *Axle extend/retract switch with indicator
lights*:

> *"The indicator light will **flash while the axles are extending** and **stay
> on when the axles are fully extended**. The indicator light will flash while
> the axles are retracting and **stay on when the axles are fully retracted**."*

Repeated at p.28 items 30 and 31 for the separate extend and retract buttons.

**Solid = at a defined end position. Flashing = in transit.**

Both indicators flashing with no movement means **the machine believes the axles
are partway — neither fully retracted nor fully extended.** The axles are
physically fully retracted, so the machine's position information is wrong.

### Why that locks everything

SCON matrix (SM p.189) — an undefined axle position trips:

| Row | Outputs dropped |
|---|---|
| Axle safety not stowed | `P_39`, `P_10`, `P_11`, `P_30` |
| Axle crosscheck angle sensor versus safety switch | `P_39`, `P_10`, `P_11`, `P_30` |
| Axle (not fully extended) and Turntable rotate | `P_38`, `P_39` |

**The machine will not move axles whose position it cannot establish.**

### Two concrete checks

1. **The 4.2–4.4 V adjustment (SM p.167 steps 2–4).** With the axles physically
   fully retracted, back-probe **pins 2 and 3** at each axle angle sensor and
   rotate the sensor cover until the reading is **4.2 to 4.4 V DC**. This is the
   step that defines "fully retracted" for the machine.
2. **The axle extension limit switch.** The SCON crosschecks the angle sensor
   *against this switch*. If the switch is not made with the axle fully in — bent
   actuator, corrosion, backed-off mounting — the machine never sees "fully
   retracted" no matter how good the sensor reading is. The switch sits under its
   own cover on the axle (SM p.164 refers to removing the *axle extension limit
   switch cover*).

### Also check drive enable — free and quick

An amber indicator is lit in the owner's photo. OM p.27 item 25, *Drive enable
control with indicator light*:

> *"**Light on indicates that the primary boom has moved past either circle-end
> wheel and the drive function is turned off.** To drive, move the drive enable
> switch or push the drive enable button and slowly move the drive/steer control
> handle off center."*

The axle extend procedure requires the **drive control handle to be moved**
(OM p.49). If drive is disabled, that cannot happen and axle extend is
unreachable.

**Is the turntable rotated so the boom sits between the circle-end wheels?** If
not, rotate it there first, then clear drive enable as above.

### Suggested order

1. Turntable between the circle-end wheels; clear drive enable (free, minutes)
2. Axle angle sensor 4.2–4.4 V adjustment
3. Axle extension limit switch inspection

## 2026-09-14 — Axle angle sensors: one in spec, one cannot reach 4 V

Readings with axles fully retracted:

| Sensor | Reading |
|---|---|
| One side | **4.2 V** — in spec (4.2–4.4 V) |
| Other side | **under 1 V**, and **never exceeds ~1 V** when the element is rotated by hand through both extremes with the cover off |

### Not yet proof of a bad sensor — output is a ratio of supply

A ratiometric angle sensor outputs a fraction of whatever supply it receives.
Fed 5 V, a full sweep covers most of 0–5 V. **Fed 1.2 V, the maximum obtainable
output is 1.2 V regardless of rotation.** A starved supply and a dead element
look identical at the signal pin.

The in-spec side proves the 4.2–4.4 V target is achievable on this machine and
that at least one supply path is healthy — a good reference.

### Measure at the suspect sensor's connector, powered

| Measurement | Expected |
|---|---|
| Supply pin → sensor ground pin | **~5.0 V** |
| Sensor ground pin → battery negative | ~0 V, millivolts |
| Signal pin → sensor ground pin | the value being read |

The manual specifies probing **pins 2 and 3** but does not label pin functions.
Identify them by comparing against the known-good sensor on the opposite corner.

### The decisive test — swap sides

Swap the two axle angle sensors end for end.

| Result | Conclusion |
|---|---|
| Fault **follows the sensor** | Sensor is bad. Part `94985GT` SENSOR, AXLE POSITION |
| Fault **stays at the same corner** | Supply, ground or harness on that corner. Sensor is fine |

Free, and definitive.

### Bench test — cleanest answer

Disconnect from the machine, feed the suspect sensor a known **5.0 V** from a
current-limited bench supply across its own supply and ground pins, and sweep it
by hand. A clean, smooth, monotonic sweep across most of 0–5 V means the sensor
is sound and the fault is upstream. Still capped near 1 V on a good 5 V supply
means the sensor is dead.

### Context

This machine has a documented history of harness interference — two Scotchlok
taps, a cut unterminated conductor in the boom, a bridged sensor circuit,
domestic-grade cord run through the structure. A loaded 5 V rail or a
high-resistance ground would produce exactly this reading with a perfectly good
sensor. Measure the supply **at the sensor, under load**, not at the controller —
the earlier resistance readings in this case were invalidated by exactly that
mistake.

### Note

Whichever sensor has had its cover off and its element turned by hand has lost
its set position and will need the **4.2–4.4 V adjustment** and the axle angle
sensor **calibration** regardless of the outcome.

### Suspect axle angle sensor — removed, photographed

Assembly in hand shows:

- **Slotted mounting holes** around the perimeter of the black cover — this is
  the adjustment mechanism the manual means by *"rotate the sensor cover
  clockwise or counterclockwise."*
- Sensor body marked **`141031`** and **`REV D 1225`**. `141031` does not appear
  anywhere in Parts Manual 106877 — it is the sensor manufacturer's own marking.
  Order by the Genie number: **`94985GT` SENSOR, AXLE POSITION**, qty **2**,
  *"(calibration required after replacement)"*.
- Two Phillips screws securing the sensor to the bracket, each carrying an
  **orange paint witness mark** extending onto the surrounding plate.
- A keyed rotary hub at the centre — the axle pivot **activator pin** drives this.

**Check the orange witness marks.** Factory paint marks run continuously from
fastener head onto the adjacent surface. Still aligned means the sensor has not
been moved on its bracket; broken or offset means someone repositioned it.

Also inspect the centre hub bore for rounding or stripping, and the activator pin
on the chassis for damage — SM p.165: *"Inspect the sensor activator pin to make
sure it is not broken or twisted"* and *"Be sure the actuator pin is engaged into
the sensor."* Note this cannot explain the low voltage, since rotating the
element by hand directly also failed to raise the output.

## 2026-09-14 — Both axle angle sensors brought into spec

Both axle angle sensors now read within **4.2–4.4 V DC** with the axles fully
retracted. The earlier low-reading side was resolved during the swap testing —
consistent with contact resistance at a connector rather than a failed sensor;
no part was replaced.

Next: the axle angle sensor **calibration** (SM p.167–169), which is also the
step that permits the axles to extend.

### Expected proof of success

Before: both axle indicators at the platform **flashing** (machine believed the
axles were between end positions).
After a successful calibration: the indicator should go **solid** with the axles
fully retracted, and solid again when fully extended (OM p.27).

## 2026-09-14 — Axle calibration reached the FULLY EXTENDED screen; axles still will not move

Progress: `DELETE AXLE ANGLE SENSORS CALIBRATION` accepted, `AXLE ANGLES FULLY
RETRACTED` accepted. At `AXLE ANGLES FULLY EXTENDED` the axles will not extend
from the platform controls.

**State warning:** the axle angle sensor calibration is now **deleted with only
the retracted point captured**. Until the extended point is recorded the axle
sensors are uncalibrated. The procedure can be re-entered and re-run.

### Check list, in order

1. **Main key switch physical position.** It must be at **platform controls**.
   This was an *inference* from the procedure — step 1 sets it to platform and
   no later step returns it to ground — not an explicit instruction. It is the
   first thing to verify, and the easiest to have lost when the key moved to the
   bypass/recovery switch.
2. **Engine running.** Step 17 reads *"start the engine and fully extend the
   axles."*
3. **Full platform sequence** (OM p.49): platform E-stop out → **foot switch
   down** → **drive control handle moved off centre** → then axle extend. The
   drive command is not optional.
4. **Drive enable.** OM p.27 item 25: the indicator on means the primary boom has
   moved past a circle-end wheel and drive is off. Turntable must be positioned
   with the boom **between the circle-end wheels**.
5. **Axle indicator lights** — record what they are doing now. They may have
   changed after the retracted point was captured.
6. **Any new fault text on the ground control LCD.**

### The decisive measurement

At the **steer and axle manifold**, axle extend valve **Y99**, connector
**`J99`**, circuit **`V60AXEX-GR/WH`**, while someone commands extend:

| Result | Meaning |
|---|---|
| **Volts at the coil, no motion** | Hydraulic or mechanical — valve coil, the **2400 psi axle extend relief**, or seized axle slides on a machine that has sat outdoors |
| **No volts** | Command still blocked — interlock, not hydraulics |

This separates the remaining possibilities in one reading and should be taken
before any further attempts.

### The `Ⓞ|` indicator is POWER, not a fault [V]

Operator's Manual p.26, Platform Control Panel item **13**:

> *"**Power indicator light.** Light on indicates the machine is on."*

The circle-with-a-bar is the standard IEC power symbol. Lit is correct.

For reference, the neighbouring indicators in that cluster:

| Item | Indicator |
|---|---|
| 13 | Power — machine is on |
| 14 | Check engine — engine fault |
| 15 | Low fuel |
| **16** | **Fault indicator — "Light on indicates a system fault"** |

**Item 16 appears dark in the owner's photographs.** Worth confirming: no system
fault reported at the platform is a meaningful data point.

### Axle indicators still flashing is expected mid-procedure

Calibration values are not committed until the procedure completes through
`EXIT` **and** the engine is shut off by holding the **engine start button**. The
retracted point entered so far is uncommitted, so the indicators have not
changed. This is not a failure of the calibration.

### Steer and Axle Manifold — location and valve identification [V]

SM p.138: *"The steer and axle manifold is mounted **inside the manifold box at
the yellow triangle side of the machine**."*

| Index | Description | Schematic | Function | Torque |
|---|---|---|---|---|
| 10 | Flow regulator valve, 7 gpm / 26.5 L/min | BS | Axle extend/retract circuit | 20–25 ft-lbs |
| 11 | Solenoid valve, 2 position 3 way | **BU** | **Axle retract** | 30–35 ft-lbs |
| 12 | Solenoid valve, 2 position 3 way | **BT** | **Axle extend** | 30–35 ft-lbs |
| 13 | Pressure reducing valve | BR | Axle extend/retract circuit | 30–35 ft-lbs |

Coil resistance for schematic items **BT** and **BU** (2 position 3 way, group
C/D/G/I/K/AX/AY/BU/BT): **7.5 to 9.5 Ω** at 68°F / 20°C (SM p.150).

### The test that must happen next

At valve **index 12 / schematic BT — axle extend**:

1. **Coil resistance**, connector off: expect **7.5–9.5 Ω**. Open or far out of
   band means a dead coil.
2. **DC volts at the coil**, connector on, engine running, extend commanded from
   the platform:

| Reading | Meaning |
|---|---|
| **~12 V** | Command is arriving. Fault is hydraulic or the axle slides are mechanically seized after years in transport width |
| **0 V** | Command still blocked — interlock |

## 2026-09-14 — Axles are NOT seized; owner manually activated the solenoids for transport

Owner reports the axles were retracted for transport by **manually activating
the solenoid valves**. This is decisive:

- The axle cylinders, slides, pump and hydraulic circuit all **work**
- The valves themselves **work**
- **The only thing missing is the electrical command**

The entire hydraulic and mechanical branch of the diagnosis is closed.

### Immediate unblock — manual override to complete the calibration

The machine at the `AXLE ANGLES FULLY EXTENDED` screen only requires the axles to
be **physically extended**; it does not care how they got there. Manually
activating the **axle extend** solenoid achieves this and lets the calibration
complete.

**Valve:** Steer and Axle Manifold, **index 12, schematic item `BT` — Axle
extend** (index 11, `BU`, is Axle retract). Solenoid valve, 2 position 3 way.
Torque 30–35 ft-lbs / 41–47 Nm. Coil resistance **7.5–9.5 Ω** (SM p.150).

**Location (SM p.138):** *"The steer and axle manifold is mounted inside the
manifold box at the **yellow triangle side of the machine**."*

Conditions: boom **stowed**, machine on level ground, **engine running** for
pump flow, nobody near the wheels as they travel outward. Extending is the
stability-increasing direction.

Then at `AXLE ANGLES FULLY EXTENDED`: **plus** = YES → **enter**, scroll to
`EXIT` → **plus** = YES → **enter**, and **hold the engine start button ~5
seconds** to save.

### Still to resolve

Why the command never reaches `BT`. Measure DC volts at the `BT` coil while
extend is commanded from the platform — **0 V confirms the interlock** is still
blocking, which remains a fault to find even once the axles are out and the
calibration is complete.

### Broken part at the axle angle sensor mounting

Owner photographed the axle sensor pocket with the sensor removed: a **broken
black splined component** lying in the recess, and the pivot boss centre bore
looking damaged. This matches the manual's warning (SM p.165):

> *"Inspect the sensor **activator pin** to make sure it is not broken or
> twisted."*
> *"If the sensor activator pin needs to be replaced, install the new activator
> pin **parallel with the drive chassis side plate**."*

### Parts — Parts Manual 106877GT, **204.1 Chassis Components, Yellow Triangle Side** (p.32–35)

| Item | Part No. | Description | Qty |
|---|---|---|---|
| 17 | **`107536GT`** | **WELDMENT, PIN, AXLE SENSOR** | 2 |
| 17- | `101499GT` | WASHER, THRUST, 2.5 × 5.5 × .250 (not shown) | 2 |
| 18 | **`60609GT`** | **COVER, STEERING SENSOR** | 2 |
| 19 | **`94985GT`** | **SENSOR, AXLE POSITION** *(calibration required after replacement)* | 2 |

Connector parts for item 19: `119067GT` CONN RECEP 4 WAY DEUTSCH DT ENDCAP,
`60443GT` LOCK RECEP 4WAY 14-18GA, `60757GT` PLUG SEAL 12-18GA, `75633GT`
TERM GOLD PIN 14/16 GA.

Note `60618GT` **ACTIVATOR, STEER SENSOR** (item 20, qty 2) is a **different
part** — it serves the steer sensors, not the axle sensors.

The mirrored assembly is **205.1 Chassis Components, Blue Triangle Side**
(p.36 onward). `107536GT` is listed once at qty 2, covering both sides.

**Unresolved:** which part the broken piece belongs to cannot be established
from the photograph alone. Match it against the 204.1 exploded drawing before
ordering.

### Correction on the activator part number

An earlier note warned against `60618GT` **ACTIVATOR, STEER SENSOR** as "a
different part." That warning was probably wrong.

Evidence that `60618GT` is the right part for the broken piece:

- The Service Manual's own term is *"sensor **activator** pin"* (SM p.165), and
  `60618GT` is the **only** part in the list named ACTIVATOR.
- At **$9.15** it is a small moulded component, matching the small black splined
  piece photographed.
- Genie demonstrably shares parts between the steer and axle sensor assemblies in
  this same drawing: item 18 is **`60609GT` COVER, STEERING SENSOR** yet it is
  the cover used on the **axle** sensor. The naming is legacy, not functional.

By contrast `107536GT` **WELDMENT**, PIN, AXLE SENSOR is fabricated steel — far
more likely the mounting pin or boss than the small broken piece.

**Still worth confirming against the 204.1 exploded drawing, or with the
supplier quoting the serial number, before ordering.**

### Commercial note on the cart

Cart contains `60618GT` ×1 ($9.15) and `94985GT` SENSOR, AXLE POSITION ×1
($408.01).

**The `94985GT` may not be needed.** Both axle angle sensors were subsequently
brought within the 4.2–4.4 V spec without a part being replaced. A **broken
activator pin** fully explains the fault — the sensor was never being turned, so
it read a fixed value regardless of axle position. Buying the sensor is
justified only as a shelf spare or if confidence in the second sensor is low.

Suggest **two** activators (one per axle sensor, and the part is trivially
cheap), and consider `101499GT` WASHER, THRUST 2.5 × 5.5 × .250 from the same
stack.
