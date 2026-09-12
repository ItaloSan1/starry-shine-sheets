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
