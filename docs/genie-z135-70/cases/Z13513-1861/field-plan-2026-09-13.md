# Field plan for 2026-09-13 — Z13513-1861

This machine will not drive, and its ground control screen is showing seven faults, all of them
on the two boom angle sensors and the calibration that goes with them. Somebody has already been
inside it: there are home-made splices at the primary boom angle sensor plug, a long green wire
bolted to bare steel, and a mains-rated toggle switch fitted into the platform control box with a
white wire running down the boom. Today is not a repair day. Today we find out what every one of
those added wires is joined to, whether the factory wiring behind them is sound, and which of the
seven faults is cause and which is consequence — so that the calibration technician arrives to a
machine whose wiring is understood rather than guessed at.

**The one rule: nobody gets into the platform, and nobody operates this machine from the platform,
until the toggle switch in that box has been identified and removed.** Until we know which circuit
it taps, it must be treated as a live bypass of a safety circuit.

---

## How to read this plan

Every statement in this plan carries a confidence tag:

- **[V] — verified.** Read out of one of the three manufacturer documents: Operator's Manual
  114474 (OM), Parts Manual 106877GT (PM), Service and Repair Manual 1268557GT (SM). Page numbers
  are the **printed** page numbers on the page itself, not PDF page numbers.
- **[F] — field observation.** Read off this machine's display, or off a photograph taken at the
  yard. True of this machine on this date; not a manufacturer statement.
- **[M] — our inference.** Engineering judgement, general trade practice, or a working number we
  chose. Never quote an [M] item to a customer or to Genie as if it were in the manual.

Where the manuals contradict each other, the conflict is stated rather than silently resolved.
Where a number is ours rather than Genie's, it says so on the line. Anything tagged [F] or [M] is
not manufacturer fact, and must not be presented as one.

---

## 0. Setup for every test

**(from card `setup` — "Setting the machine up for every test")**

### Where it is

**Component.** Ground control box (it holds the TCON = turntable controller, the machine's main
computer, built on a circuit board Genie calls the ALC-1000), plus the SCON (safety controller,
which is also the turntable tilt sensor), the two battery sets, and the engine relay-and-fuse panel.

**Where on the machine.** GROUND CONTROL BOX: on the turntable, hydraulic-tank side — the side with
the 65-gallon hydraulic tank, NOT the engine side. The Parts Manual draws it as item 34, "Ref.
Ground Controls", in figure 304.1 "Hydraulic Tank Side Components"; the Service Manual calls that
side "the ground controls side of the machine". SCON: same tank side, item 22 in that same figure
304.1, bolted to the turntable near the middle. ENGINE STARTING/CONTROLS BATTERY (one 12 V, 950 CCA
battery — CCA = cold cranking amps, a measure of starting punch): engine side, under the engine-side
turntable cover, Parts figure 303.1 item 22, next to the relay plate. AUXILIARY POWER UNIT BATTERIES
(two, 315 Ah — Ah = amp-hours, a measure of stored energy): in a steel battery box with a thumb-screw
lid on the hydraulic-tank side, Parts figure 304.1 items 28-32. ENGINE RELAY AND FUSE PANEL: on the
relay mount plate in the engine compartment under a relay cover, Parts figure 303.1 items 6, 8, 15-19.

**How to find it.** Stand at the turntable on the side where you can see the hydraulic tank filler
cap and its sight gauge (the little window that shows the oil level). The control box on that side,
with the LCD window, the big red mushroom STOP button, a key switch below it and a second small key
switch at the lower right, is the ground control box. Walk round to the other side (engine side) and
open that turntable cover: you will find the single starting battery on its tray under a hold-down
bar, and beside it a plate carrying the relays, a row of fuses and four bolt-head terminals under a
cover. The Service Manual's panel drawing names six relay positions on that plate — CR28, CR17, CR41,
CR5, CR1 and CR15 — and four marked terminals: B1PBAT (power from battery), B3PBAT (fused power from
B1), R21PIGN (the 20 A ignition fuse) and 02PGND (ground). Back on the tank side, the low steel box
with two thumb screws in its lid holds the two big auxiliary batteries. The SCON is a sealed module
with two 12-pin Deutsch plugs (Deutsch is the connector brand — grey plug J121, black plug J122)
bolted to the turntable near the centre on the tank side. **Do not loosen it: it is the tilt sensor.**

**What it looks like.** Ground control box lid: an LCD display behind a lens at the top left, a
membrane decal (the printed flat keypad), a large red mushroom STOP button at the top right, a
3-position key switch under it (off / ground / platform), a small 20 A circuit breaker button and an
audible alarm, and at the lower right a second, smaller key switch marked Run / Bypass / Recovery.
Its decal shows the code P22 next to Bypass — P22 is the platform-out-of-level fault code. A key
switch cover weldment (part 215590GT) is drawn beside that switch in the parts figure, so it may or
may not be fitted here. Inside the lid: the LCD circuit board on a ribbon cable. Inside the box: the
ECM/ALC-1000 circuit board — ECM is Genie's label for this engine-and-machine control board, and it
is the TCON — with four large rectangular AMP plugs (AMP is the connector brand) entering through the
side wall: J11 black 23-pin, J12 black 35-pin, J13 white 23-pin, J14 white 35-pin. There is also a
4-way flange-mount Deutsch DTP power receptacle, a ground screw for a wrist strap, and a small toggle
switch at the top of the box — that is the calibration toggle. **Leave it alone.** The board carries
a "5.0 VDC" indicator light (LED) that the fault table tells you to check.

**Cite.** SM p.99 and fig sm099-bypass-key.png; SM p.103 and fig sm103-alc-board.png; SM p.75; SM
p.152; SM p.201 fig sm201-limitswitch-legend.png; SM pp.205-206, p.211 and fig sm211-fuse-panel.png;
PM p.46 fig pm046-engine-compartment.png; PM pp.47, 55, 57, 60-63; OM p.21 fig key-om-gc-panel.png;
OM p.22; SM p.24; SM p.42.

### Set the machine to

Two states are used by every card in this plan.

**STATE A — "key ON, volts".** Main key switch in the GROUND position; the small bypass/recovery key
switch left in RUN with no key in it. Both E-stops (the red emergency stop button on the ground
control box and the one in the platform box) pulled OUT. Both battery sets connected. Engine OFF.

**STATE B — "dead machine, ohms".** Main key switch OFF and the key removed; bypass/recovery key
switch in RUN, no key in it. Both E-stops pushed IN. Cables tagged and disconnected at BOTH battery
sets. Engine OFF.

Never use PLATFORM unless a later card says so, and NEVER turn the bypass/recovery switch to Bypass
or Recovery anywhere in this plan. Always go to STATE B before unplugging or plugging any connector.

The Operator's Manual says "Before performing service on this machine, disconnect the batteries under
both turntable covers." Follow the Service Manual's own order: first the two auxiliary power unit
batteries in the battery box on the hydraulic-tank side (take the box cover off, then tag and
disconnect), then the engine starting/controls battery under the engine-side turntable cover. Likely
good practice [M]: take the negative (ground) cable off first and put it back on last, so a slipped
spanner on the positive post cannot short to the frame.

**Engine.** OFF in both states. The engine is never needed for any test on this card. Do not press
the engine start button, the glow plug button (glow plugs are the diesel's cold-start heaters) or the
auxiliary power button while probing — auxiliary power can move the boom with the engine off.

**Other.** Firm level ground, wheels chocked, boom fully lowered and retracted (stowed), axles
RETRACTED (machine at its narrow 8 ft 1 in width) so the two axle safety limit switches LSFA1ES
(front) and LSRA1ES (rear) hold the boom functions off by design, turntable rotation lock pin fitted.
Turntable rotate is still allowed up to 15 degrees with the axles retracted, which is exactly why the
rotation lock pin goes in and why your hands stay off the membrane buttons the whole time the key is
on. Propel is already dead on this machine because the SCON has switched off its P_38 propel output.

### Connector and wires

TCON AMP connectors J11, J12, J13, J14 sit on the ALC-1000 board in the ground control box. J12, the
black 35-pin, is the one carrying the boom angle sensor 5 V supply, the sensor ground and both boom
angle signals. Its body is three rows: pins 1-12 along the top, 13-23 in the middle, 24-35 along the
bottom (pin-numbering drawing on SM p.210).

Note for the boom cards: the six boom-angle wires do NOT run straight from the board to the sensor.
They pass through a 12-pin Deutsch harness plug called **J20** (the Service Manual names it "the
lower/upper limit switch harness" connector), and the conductor colours CHANGE at J20. A continuity
check that ignores J20 will point you at the wrong length of harness.

| Pin | Wire name | Harness colour | What it is | Goes to | Cite |
|---|---|---|---|---|---|
| J12-26 | P109ANG - GR/WH | green/white | 5 V supply for the boom angle sensors, shared by J114 and J154 | via J20 pins 11 and 10 to J114 pins 1 and 6; and to J154 pins 1 and 6 | SM p.210; SM p.205; SM p.177 |
| J12-25 | SNSR GND - BR | brown | sensor ground — the return path for both boom angle sensors | via J20 pins 12 and 7 to J114 pins 2 and 5; and to J154 pins 2 and 5 | SM p.210 |
| J12-32 | C123PBS - RD/BK | red/black | primary boom angle sensor, **operational** signal | via J20 pin 6 to J114 pin 4 | SM p.210 |
| J12-33 | C124SBS - OR/BK | orange/black | secondary boom angle sensor, **operational** signal | J154 pin 4 | SM p.210 |
| J12-2 | P21DCON - WH | white | battery-level feed shared with the DCON (drive chassis controller) and SCON. Likely [M] that it leaves the TCON — the manuals give only the wire name at each end. What matters here is that a battery-level wire shares one plug body with the delicate 5 V sensor wires. | DCON supply and SCON J122 pin 1 | SM p.210; SM p.209 |
| J122-3 (SCON) | C141PBS - RD | red | primary boom angle sensor, **safety** signal — the independent copy the safety controller reads. When this copy and the TCON's copy disagree, you get the "crosscheck" fault. | via J20 pin 2 to J114 pin 3 | SM p.209 |
| J122-2 (SCON) | C142SBS - OR | orange | secondary boom angle sensor, **safety** signal | J154 pin 3 | SM p.209 |
| J137-2 / J137-1 (front axle) | P61LSA - GR / J2 - GR/BK | green / green-black | front axle safety limit switch LSFA1ES. Do not touch, jumper or adjust. | axle-extended safety circuit; P61LSA-GR to DCON J31 pin 23 | SM p.206; SM p.229 sheet ES0366J; SM p.208 |
| J138-2 / J138-1 (rear axle) | C60AXE - GR/WH / J2 - GR/BK | green-white / green-black | rear axle safety limit switch LSRA1ES. Do not touch, jumper or adjust. Note: P53LS-WH/BK is **not** on either axle switch — it is a limit-switch supply at the controllers. | axle-extended safety circuit; C60AXE-GR/WH to SCON J122 pin 4 | SM p.206; SM p.229; SM p.209; SM p.210 |
| B1PBAT / 02PGND | (panel terminals, not wires) | n/a | your meter reference pair on the engine side: "Power from Battery" and "Ground" | battery positive via the main feed; machine ground | SM p.211 |

**Why we never unplug an AMP connector with the key on.** (1) The Service Manual's own procedure for
working on this board starts with "Push in the red Emergency Stop button to the off position at both
the ground and platform controls", and every repair procedure assumes "Key switch in the off position
with the key removed" before you "Tag and disconnect the harnesses". (2) The boards are damaged by
static electricity — the manual requires a grounded wrist strap clipped to the ground screw inside
the box. (3) [M, likely] breaking the 5 V, ground and CAN lines while the computers are running can
set NEW safety faults, which would bury the seven codes we are chasing under fresh ones. (4) [M,
likely] a 35-pin plug wiggled out under power can bridge a battery-voltage pin onto a 5 V sensor pin
for an instant. So: key OFF, key out, both E-stops IN, both battery sets disconnected, wrist strap
on — then and only then touch an AMP plug.

### Do this

1. **Park and secure.** Firm, level surface, boom fully lowered and retracted, turntable turned so
   the boom sits between the non-steer wheels, wheels chocked. Fit the turntable rotation lock pin.
2. **Confirm the axles are retracted** — the machine is at its narrow 8 ft 1 in width. With the axles
   in, LSFA1ES and LSRA1ES hold the boom functions off: the Service Manual says these switches
   "Prevent boom functions with the axles retracted", and the Operator's Manual function test confirms
   "The boom should not raise unless the axles are extended." Judgement call, not a manufacturer
   permission [M, likely]: that lock-out is why we are willing to turn the key on at all for voltage
   readings. It is not a complete guarantee. Two things are still live with the axles in — turntable
   rotate works up to 15 degrees, and auxiliary power can move functions with the engine off.
3. **Find the ground control box.** Stand on the hydraulic-tank side of the turntable — the side with
   the tank filler cap and the sight gauge. The TCON lives inside it.
4. **Learn the two key switches.** TOP = main key switch: OFF / GROUND / PLATFORM. BOTTOM-RIGHT small
   key switch = bypass/recovery: Run / Bypass / Recovery. The same single key is used for both. FOR
   THIS PLAN: the main key is used only in OFF and GROUND; the bypass/recovery switch stays in RUN
   with the key OUT of it. If you arrive and find the key sitting in the bypass/recovery switch, or
   the switch not in Run, photograph it, put it back to Run, remove the key and write it down.
5. **Learn the two E-stops.** Ground box: red mushroom at the top right of the lid — push IN = off
   (stops all functions and turns the engine off); pull OUT = on. Platform box: same button, same
   action. The Operator's Manual notes that "Selecting and operating the ground controls will override
   the platform red Emergency Stop button", so a pushed-in platform E-stop protects nobody once the
   ground controls are selected.
6. **Find both battery sets.** (a) Hydraulic-tank side: low steel battery box, lid held by two thumb
   screws, two 315 Ah auxiliary power unit batteries inside. (b) Engine side: open the engine-side
   turntable cover; on a tray under a hold-down bar sits ONE 12 V, 950 CCA starting/controls battery.
   The Operator's Manual warns that jump leads go on "the starter and controls battery, not the
   auxiliary power batteries". The two sets are joined through a 100 A dual battery separator, so
   treat them as one system.
7. **Find the engine relay and fuse panel.** Engine side, on the relay mount plate next to the
   starting battery, under a cover. Match what you see to the SM p.211 panel drawing (Deutz and
   Perkins) or SM p.212 (Cummins). p.211 names: CR28 engine/fuel relay, CR17 hydraulic oil cooler fan
   relay, CR41 flashing beacon relay, CR5 horn relay, CB10 20 A circuit breaker, F23 30 A fuse, F22
   60 A glow plug fuse, F7 20 A fuse, B1PBAT, B3PBAT, R21PIGN 20 A ignition fuse, 02PGND, CR1 start
   relay, CR15 glow plug relay. The parts list shows three plug-in SPDT relays and two sealed 70 A
   relays, so the physical count of relay bodies is not the same as the count of names. Look for a
   blown fuse or a burnt relay socket and note what you see. Pull nothing.
8. **Find the SCON.** Tank side, Parts figure 304.1 item 22: a sealed module bolted to the turntable
   near the centre, with grey plug J121 and black plug J122. The manual describes it as "Redundant
   dual axis tilt sensors measuring the X and Y tilt angles of the turntable" that "also provides
   safety switch logic for function cut-off". Do not loosen its bolts and do not unplug it.
9. **Set up the meter.** Any digital multimeter. The manual's wording for a voltage test is "a
   voltmeter set to DC voltage". Likely settings, ordinary practice rather than manual instruction
   [M]: 20 V DC range for 5 V and 12 V readings, 200 ohm range for resistance. Note what the manual
   DOES specify for resistance work: "Tag and disconnect the wiring from the coil to be tested",
   readings "within specification, plus or minus 30%", at 68 °F / 20 °C, valve coil table 3.5 to 10
   ohm. Prove the meter first: red on B1PBAT, black on 02PGND with the key OFF; then touch the two
   leads together on ohms — close to 0 ohm and a beep.
10. **STATE A — "key ON, volts".** Everything plugged in, both battery sets connected, both E-stops
    OUT, bypass/recovery in RUN with key out, main key to GROUND, engine OFF. Do not press any
    membrane button, glow plug, engine start or auxiliary power button. Stand clear of the boom and
    out of the turntable swing path. Read the LCD, write down every fault word for word, photograph it.
11. **STATE B — "dead machine, ohms".** Main key OFF and removed. Bypass/recovery in RUN, no key.
    Both E-stops IN. Remove rings and watches — the manual repeats "Electrocution/burn hazard...
    Remove all rings, watches and other jewelry" at every battery step — and wear eye protection. Open
    both turntable covers. Take the cover off the auxiliary battery box, tag and disconnect those
    cables, then tag and disconnect the engine starting/controls battery. Likely good practice [M]:
    negative first, ends tied back. Confirm the machine is dead: LCD blank, B1PBAT to 02PGND = 0 V.
12. **The rule for moving between states:** go A to B BEFORE you touch any connector; go B back to A
    only after every plug you opened is back on and latched. Never pull a plug in State A. Never take
    an ohm reading in State A.
13. **Opening the ground control box** (only when a later card sends you inside): be in State B.
    Remove the lid fasteners and open the lid; the LCD board hangs on the lid by a ribbon cable, so
    support it. Clip a grounded wrist strap to the ground screw inside the box — "Electrostatic
    discharge (ESD) can damage printed circuit board components." Look but do not pull: the four AMP
    plugs, the DTP power receptacle, the two membrane ribbon cables, and the small toggle switch at
    the top of the box — that is the calibration toggle. Do not move it. If you find it already moved
    to the left, photograph it and write it down: it means someone left the machine in calibration mode.
14. **Before leaving this card**, have a written record of: chocks and rotation lock pin fitted; axle
    width 8 ft 1 in; the position of both key switches and where the key was found; which E-stops were
    in or out on arrival; the calibration toggle position if you were inside; which battery cables you
    disconnected and where you tagged them; the condition of the fuse and relay panel; and the exact
    LCD fault text plus a photograph from State A.

### You should see

| Measurement | Expected | If OK it means | If not it means | Cite |
|---|---|---|---|---|
| ARRIVAL CHECK (not State A and not State B): key OFF and out, both E-stops IN, batteries still connected. DC volts, red on B1PBAT, black on 02PGND. | Roughly 12 to 13 V. [M for the number — the manuals give no resting battery voltage.] The manual gives only the naming: B1PBAT = "Power from Battery", 02PGND = "Ground". | Battery and main feed alive, meter works. Go to State A. | Below about 12 V: charge or replace the starting/controls battery before trusting any electrical reading. 0 V: check the battery cables, the F23 30 A fuse and the main feed first. | SM p.211 |
| STATE A: main key to GROUND, both E-stops out, engine off, hands off the keypad — watch the LCD. | Display wakes and lists the live faults. On this machine, from the last field reading [F]: primary boom angle sensor crosscheck; secondary boom angle sensor crosscheck; primary boom angle zone fault; primary boom angle sensor not calibrated; secondary boom switches fault; secondary boom angle sensor shorted / 0 V; TCON-SCON calibration inconsistent. | Write them down word for word and photograph the screen. This is the baseline. | Display dead: check the 20 A circuit breaker button on the ground panel, that both E-stops are truly out, and the battery voltage above. A different fault list: record it exactly — a change in the list matters as much as the list. | OM p.22; case README (field reading); SM p.189 |
| STATE A arrival record (look only): position of the main key switch, the bypass/recovery key switch, and — if a later card has the box open in State B — the calibration toggle. | Main key in OFF or GROUND only. Bypass/recovery in Run with no key in it. Calibration toggle NOT moved left. | Note it and carry on. Normal operating configuration. | Key left in the bypass/recovery switch, switch in Bypass or Recovery, or the calibration toggle moved left: photograph exactly as found, then return the switch to Run and remove the key. Leave the toggle for the calibration technician. Genie's own wording is the point: "If either the Bypass or the Recovery function is required, this indicates there may be faults with the machine." | SM p.99; SM p.42; OM p.22 |
| STATE B confirmation after both battery sets are off: LCD, then B1PBAT to 02PGND on DC volts. | LCD blank; 0 V. | Machine is dead. Plugs may be opened and resistance readings taken. | Voltage still present: a battery cable is still connected somewhere. Two sets joined through a 100 A separator — find and clear it before touching any plug. | OM p.12; SM p.76; PM p.47 |

### Why we are doing this

Every reading in this plan only means something if it was taken in the right state. A volt reading
with the key off is meaningless. An ohm reading with the battery still connected can be wrong and can
damage a cheap meter. A plug pulled with the key on can set new fault codes on top of the seven we
are trying to explain. Getting the setup right once means every later number can be trusted and
compared against the next machine. This card also walks you round the machine and shows you where
every box, key, battery, fuse and plug you will touch actually is.

### Safety

- Never bypass, jumper or defeat any safety circuit, limit switch (including the axle safety switches
  LSFA1ES at J137 and LSRA1ES at J138), angle sensor, tilt sensor (the SCON) or load cell. This plan
  removes the bypasses already found on this machine; it never adds one.
- Key OFF, key removed, both E-stops pushed IN before unplugging or plugging any connector. Both
  battery sets disconnected — under both turntable covers — for every resistance or continuity reading.
- Do not use the Bypass or Recovery positions, and do not move the calibration toggle switch inside
  the ground control box. Those belong to the calibration technician.
- Firm level ground, wheels chocked, boom stowed, turntable rotation lock pin fitted. Turntable rotate
  is still enabled up to 15 degrees with the axles retracted, so keep your hands off the membrane
  keypad while the key is on and keep out of the swing path.
- Electrocution and burn hazard at the batteries and inside the boxes: "Remove all rings, watches and
  other jewelry." Batteries hold acid and give off explosive gas: eye protection, protective clothing,
  no sparks, no flames, no smoking; neutralise spills with baking soda and water.
- Static electricity can destroy the control boards. Clip a grounded wrist strap to the ground screw
  inside the ground control box, or keep one hand in firm contact with bare grounded metal, whenever
  the lid is open.
- Do not lift, loosen or unplug the SCON module — it is the machine's tilt sensor. The manuals require
  full machine calibration after the SCON is REPLACED; a module merely loosened is likely [M] to read
  wrong too, so treat it as untouchable.
- The engine is never needed on this card. Do not press engine start, glow plug or auxiliary power
  while probing. Auxiliary power can move the boom with the engine off.
- Any sensor that gets replaced must be recalibrated, in the manufacturer's fixed order, by a
  technician with Genie factory service training, after this plan's wiring repairs.

### Sources

- [V] "Before performing service on this machine, disconnect the batteries under both turntable covers." — OM p.12 (114474.txt 796-798)
- [V] "Apply jumper cables to the starter and controls battery, not the auxiliary power batteries." — OM p.17 (1108-1110)
- [V] "16 Remove the cover from the auxiliary power unit batteries. 17 Tag and disconnect the cables... 18 Tag and disconnect the cables from the engine starting/controls battery located on the engine side of the machine." — SM p.76 (6013-6025)
- [V] "Electrocution/burn hazard... Remove all rings, watches and other jewelry." — SM p.76 (6018-6022)
- [V] "Batteries contain acid... Neutralize battery acid spills with baking soda and water. Explosion Hazard. Keep sparks, flames and lighted tobacco away." — OM p.17 (1114-1131)
- [V] "22 1303581GT BATTERY, 12V, 950CCA, FLA" with tray, hold-down bar and hook — PM p.47 (2270-2322), fig 303.1 at PM p.46
- [V] "31 56462GT BATTERY, J 305GH, 315AH ... 2" in battery box 107509GT with thumb-screw cover — PM p.57 (2872-2898)
- [V] "9 237068GT SEPARATOR,DUAL BATTERY,100A" — PM p.47 (2239-2240)
- [V] "34 Ref. Ground Controls (refer to 305.1)" — PM p.57 (2907-2908); drawing figs/pm054-scon.png
- [V] "Remove the retaining fasteners from the fixed turntable cover at the ground controls side of the machine." — SM p.75 (5946-5949); shorter form SM p.152 (10883-10884)
- [V] "7 60485GT COVER,TURNTABLE,LEFT SIDE" (tank side) / "46 50082GT COVER,TURNTABLE,RIGHT SIDE" (engine side) — PM p.39 (1806-1807), PM p.45 (2184-2185)
- [V] "22- 1258463GT MODULE,SCON,PROGRAMMED from SN 1712, machine needs to be recalibrated after installing a new module" — PM p.55 (2778-2787)
- [V] "Safety Controller (SCON): Redundant dual axis tilt sensors measuring the X and Y tilt angles of the turntable. Also provides safety switch logic for function cut-off. Alarm sounds at ±4.5 degrees." — SM p.203 (15317-15320)
- [V] "J121 12 pin Deutsch gray SCON connector / J122 12 pin Deutsch black SCON connector" — SM p.206 (15608-15611)
- [V] Limit Switch Legend lettering "16 SCON ... 18 LSRA1ES ... 24 LSFA1ES" — SM p.201, figs/sm201-limitswitch-legend.png
- [V] "LSFA1ES: ... Prevents boom functions with the axles retracted. Switch closes when axles are fully extended." (same for LSRA1ES) — SM p.203 (15322-15329)
- [V] "J137 2 pin Deutsch connector for front axle safety switch / J138 2 pin Deutsch connector for rear axle safety switch" — SM p.206 (15636-15641)
- [V] CORRECTED from the drawn schematic: J137 pin 2 = P61LSA-GR, pin 1 = J2-GR/BK; J138 pin 2 = C60AXE-GR/WH, pin 1 = J2-GR/BK — SM p.229 sheet ES0366J (PDF p.243, detail x 600-800, y 1100-1330)
- [V] "J12 Turntable Controller ... 3 P53LS - WH/BK ... 6 P53LS - WH/BK"; "J122 ... 7 P53LS - WH/BK" — SM p.210 (16132, 16138), SM p.209 (16022): P53LS is a controller-side limit-switch supply, not an axle-switch wire
- [V] "J122 Safety Controller ... 4 C60AXE - GR/WH" — SM p.209 (16008)
- [V] "J31 Drive Chassis ... 23 P61LSA - GR" — SM p.208 (15969)
- [V] "The primary boom should not raise... The boom should not raise unless the axles are extended." / "The turntable should rotate 15° and then stop." — OM p.31 (1851-1854), OM p.32 (1893-1896)
- [V] "Width, axles retracted 8 ft 1 in 2.5 m" — OM specifications (3967-3969)
- [V] "The axles can only be retracted if the primary and secondary booms are fully lowered and retracted..." — OM p.48 (3186-3188)
- [V] Lockout/parking routine, five steps incl. chock the wheels — OM p.19 (1206-1215)
- [V] Standard machine configuration for every repair procedure (seven bullets) — SM p.24 (2395-2409)
- [V] "Always use the turntable rotation lock pin each time the machine is transported." — OM p.59 (3726-3727); service use SM p.152 (10880-10881)
- [V] "The turntable control box (TCON) is the communication and operations center for the machine... contains two key switches... If either the Bypass or the Recovery function is required, this indicates there may be faults with the machine." — SM p.99 (7567-7581), fig sm099-bypass-key.png
- [V] "Bypass is used for a platform out-of-level condition and calibrating certain machine parameters. Recovery is only to be used as a last attempt to lower the platform... 1 Run 2 Bypass 3 Recovery... located on the lower right side of the control box from serial number Z13512-1712." — SM p.99 (7582-7596)
- [V] "Turn the main key switch to ground controls. Remove the key from the main key switch and insert the key into the bypass/recovery key switch." — SM p.100 (7638-7642)
- [V] "If this procedure is performed with the main key switch in the off position an active latched safety fault will be set and will have to be cleared." — SM p.101 (7721-7723)
- [V] "Key switch for off/ground/platform selection..." — OM p.22 (1376-1381), panel drawing figs/key-om-gc-panel.png
- [V] "Push in red Emergency Stop button to the off position to stop all functions and turn the engine off." — OM p.22 (1367-1371); platform E-stop OM p.26 (1573-1578)
- [V] "9 20A circuit breaker for system circuit 10 Alarm 11 Bypass/recovery key switch... (P22)... Recovery key position should only be used by trained and authorized personnel." — OM p.22 (1401-1411)
- [V] "Selecting and operating the ground controls will override the platform red Emergency Stop button." — OM p.47 (3127-3128)
- [V] "Use emergency/auxiliary power if the primary power source (engine) fails." — OM p.47 (3129-3135)
- [V] ALC-1000 board procedure: E-stops in, lid off, harnesses tagged and disconnected, grounded wrist strap on the ground screw, ESD warning — SM p.103 (7833-7876), fig sm103-alc-board.png
- [V] Membrane decal connects to the ECM board by two ribbon cables; procedure begins key off, both E-stops in — SM p.104 (7909-7921)
- [V] "Full machine calibration must be completed in the proper sequence when the ALC-1000 circuit board (TCON)... has been replaced or the turntable level sensor (SCON) has been replaced... only by qualified technicians that have Genie factory service training." — SM p.105 (7973-7983)
- [M] A SCON merely loosened or moved (not replaced) also needs recalibration — not stated anywhere; both sources condition recalibration on replacement only. Worded "likely"; the card simply forbids touching the module.
- [V] "Locate the calibration toggle switch at the top of the ground control box. Activate calibration mode by moving the toggle switch in the left direction." — SM p.42 (3700-3703)
- [V] Ground control box parts: membrane decal 106510GT, recovery kit 122516GT with key switch 88150GT, key switch cover weldment 215590GT, 4-way flange DTP receptacle 73717GT, ECM ground board 1258461GT from SN 1712, LCD board 88056GT, toggle switch 56457-SGT — PM p.63 (3155-3205)
- [V] Lid parts: control box assembly 237069GT from SN 1712, lid 107714GT, E-stop kit 122519GT / button 66812GT, key switch kit 122515GT / switch 66811GT, LCD lens 62374GT, 20 A breaker 147095GT, alarm 62379GT — PM p.61 (3056-3132)
- [V] "J11 Black 23 pin AMP connector on TCON / J12 Black 35 pin AMP... / J13 White 23 pin... / J14 White 35 pin..." plus J9/J10 membrane ribbons — SM p.205 (15428-15442)
- [V] "J20 12 pin Deutsch connector lower/upper limit switch harness" — SM p.205 (15448-15450)
- [V] J20 pins 11, 12, 2, 10, 7, 6 feed J114 pins 1, 2, 3, 6, 5, 4; colours change across J20 — figs/es-j114-primary-sensor.png, es-boom-sensors-wide.png (ES0366J, SM p.229)
- [V] "J114 6 pin Deutsch connector for primary boom angle sensor (PBAS)" / "J154 6 pin Deutsch connector for secondary boom angle sensor" — SM p.206 (15597-15599), SM p.207 (15685-15687)
- [V] J154 pin assignments 1/6 P109ANG, 2/5 SNSR GND, 3 C142SBS-OR, 4 C124SBS-OR/BK — figs/es-j154-secondary-sensor.png
- [V] J12 pin list used here: 1 GNDSCON-BR, 2 P21DCON-WH, 3 and 6 P53LS-WH/BK, 5 S56PRV-RD, 25 SNSR GND-BR, 26 P109ANG-GR/WH, 32 C123PBS-RD/BK, 33 C124SBS-OR/BK, 35 GND16-BR — SM p.210 (16124-16196), fig sm210-tcon-pins.png
- [V] "J122 Safety Controller 1 P21DCON - WH 2 C142SBS - OR 3 C141PBS - RD" — SM p.209 (15996-16004), fig sm209-scon-pins.png
- [V] CORRECTED: "PRV Proportional Valve" — S56PRV is a proportional-valve circuit, not a battery-level feed — SM p.194 (14118-14119); S56PRV-RD at SCON J121-9 and J122-11 (16028, 16038)
- [M] Which box sources the P21DCON circuit, and at what voltage, is not stated anywhere — only the wire name at each end.
- [V] "Value at 0 V ... Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board." — SM p.177 (12591-12598); "% .0" is an extraction artefact of "5.0"
- [V] Engine relay and fuse panel legend, 14 items CR28 … CR15 — SM p.211 (16324-16378), fig sm211-fuse-panel.png; Cummins version SM p.212
- [V] CORRECTED relay count: "15 61225GT RELAY,12VDC,70AMP,SEALED ... 2 ... 19 34052GT RELAY,SPDT,12V(AUTO) PLUG IN** 3" — PM p.47 (2280-2311)
- [V] "6 107525PGT PLATE,RELAY MOUNT ... 8 88266GT COVER,RELAY" — PM p.47 (2226-2245), fig pm046-engine-compartment.png
- [V] "Using a voltmeter set to DC voltage, probe the back of the electrical connector at pins B and C." — SM p.161 (11463-11465)
- [V] CORRECTED spec: coil resistance tested with the wiring disconnected, "within specification, plus or minus 30%", at 68 °F / 20 °C, table runs 3.5 to 10 ohm — SM p.150 (10717-10778)
- [M] Meter ranges (20 V DC, 200 ohm, continuity beep) and "a good wire reads under 1 ohm" — not in the manuals; ordinary practice
- [M] A rested, charged 12 V battery reads roughly 12 to 13 V between B1PBAT and 02PGND — not in the manuals
- [M] Disconnect the negative (ground) battery cable first — no polarity order is given in the manuals
- [M] Pulling a live AMP plug can latch new faults and momentarily bridge battery voltage onto a 5 V pin — reasoning, supported only indirectly by SM p.103, SM p.24, SM p.210 and SM p.101
- [M] Turning the key on for voltage readings is acceptable because the retracted axles lock out the boom — not a manufacturer permission; the lock-out is real but incomplete
- [V] "The circuit board (PCON) sends the data to the turntable control box (TCON) for processing." — SM p.26 (2478-2504)
- [V] "J31 Black 23 pin AMP connector on DCON / J32 White 23 pin AMP connector on DCON" — SM p.205 (15468-15472), SM p.208 (15742)
- [F] The seven live fault codes are a field reading off the LCD — case README lines 154-161 (2026-09-10)
- [V] Propel is off because the boom angle crosscheck faults switch off P_38, and P_38 is propel — SCON fault matrix, SM p.189, figs/scon-fault-matrix.png
- [F] Machine is now at retracted width; all six chassis sensor codes are gone — case README lines 149-152

---

## What a crosscheck fault is

**(from card `crosscheck` — "What a crosscheck fault is, in plain words")**

Nothing is measured on this card. You stand at the ground control panel, read the display, sort the
faults, and understand the wiring before the next cards send you to the plugs with a meter.

### Where it is

**Component.** The ground control box display is what you read on this card. The two boom angle
sensors and the safety controller (SCON) are the parts the faults are talking about.

**Where on the machine.** The ground controls sit on the turntable (OM p.20 legend item 2). The
turntable controller (TCON), the machine's main computer, lives inside that same box. On this
machine, serial Z13513-1861, the parts manual calls that box 237069GT "ASSY,CONTROL BOX,TCON,Z135",
the "from SN 1712" version; the older 106512GT is "to SN 1711" and does not apply. The SCON is a
separate module on the hydraulic-tank side of the turntable, item 22 of parts figure 304.1 (drawing
PM p.54, list PM p.55); for this serial the part is 1258463GT "MODULE,SCON,PROGRAMMED". The primary
boom angle sensor sits inside the primary boom at the boom pivot pin, behind the boom end cover at
the pivot end (SM p.81). The secondary boom angle sensor sits on the turntable riser bulkhead on the
ground-controls side, under its own small cover (SM p.88).

**How to find it.** Stand on the ground at the ground control panel on the turntable. Turn the key to
ground, pull the red E-stop out, read the screen. You open nothing on this card. For later cards: to
reach the primary sensor, walk to the pivot end of the primary boom — the end nearest the turntable —
take the retaining fasteners out of the boom end cover and lift the cover off. The secondary sensor
is on the riser bulkhead right next to where you are standing at the ground controls; its cover is
held by one retaining fastener.

**What it looks like.** Each boom angle sensor is a small rotary angle sensor on a bracket. When you
take the bracket off there are two springs and a hex-shaped key that must not be lost. The sensors
use Hall-effect technology — they sense the position of a magnet rather than rubbing a contact — and
the manual says they must be calibrated whenever they are replaced. Each sensor has ONE 6-pin Deutsch
plug: J114 primary, J154 secondary. On this machine the primary sensor hardware is bright new Genie
blue (PM fig 511.2 items 8 and 9). Its plug half is moulded DEUTSCH IPD USA DT04-6P and has been
interfered with: five wires seated, one gold pin terminal hanging loose outside the plug, two blue
Scotchlok taps (Scotchlok = a squeeze-on connector that cuts through wire insulation, also called IDC)
joined by a green jumper, and a separate green wire running outside the loom to a pink butt splice on
a pivot-bracket bolt. **Important:** the five wire colours visible in that photo (blue, red, yellow,
green, white) do NOT match the factory sensor lead colours on the schematic (red, black, blue, orange,
brown, yellow), so the sensor side has been re-terminated. Do not use wire colour alone to work out
which cavity is which.

**Cite.** OM p.20; PM p.61, p.54, p.55 (fig pm054-scon.png); SM p.81, p.88, p.202, pp.206-207, p.205;
OM p.64; SM p.203; PM p.169.

### Set the machine to

- **Key:** GROUND only while you read the display. Key OFF and pulled out before anyone touches a
  plug. No plug work happens on this card. Do not touch the bypass/recovery key switch.
- **E-stops:** ground E-stop pulled OUT so the display comes on; platform E-stop left pushed IN. The
  software version appears on the screen when the red E-stop is pulled out (SM p.83) — find it and
  write it down. Push the ground E-stop back IN before you walk away.
- **Engine:** OFF. The fact that the engine runs at all is used as evidence further down, but you do
  not need it running to read the fault list.
- **Battery:** connected, so the display can light up.
- **Other:** firm level ground, wheels chocked, boom stowed, axles left retracted at 8 ft 1 in. Do
  NOT press Delete Faults or Clear Faults. Do NOT use the bypass or recovery key positions. Do NOT fit
  the calibration jumper or toggle.

### Connector and wires

Each 6-pin sensor plug carries TWO complete, separate sensor circuits in one plug. Pins 1, 2 and 3
are the SAFETY half (S18 primary, S20 secondary on schematic sheet ES0366J): 5 volts in, ground, and
a signal wire that goes only to the SCON. Pins 6, 5 and 4 are the OPERATIONAL half (S17 primary, S19
secondary): 5 volts in, ground, and a signal wire that goes only to the TCON. The 5 volt feed
(P109ANG-GR/WH, out of TCON J12-26) and the sensor ground (SNSR GND-BR, out of TCON J12-25) are shared
by both halves AND by both plugs — which is why damage at one plug can make the other sensor fault.
One difference matters when you look at colours: at J114 the schematic shows an extra short jumper
block between harness plug J20 and J114, marked "UNIT #130 OR HIGHER", so the harness-side colours
change through that block. There is no such block at J154.

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| J114-1 | P109ANG - GR/WH (circuit 109, "Sensor Power") | RD on the J20→J114 jumper (UNIT #130+); GR/WH upstream of J20 | RD | 5 V supply, SAFETY half S18 | J20-11, then TCON J12-26 |
| J114-2 | SNSR GND - BR | WH/BK on the jumper from J20-12 | BK | ground, SAFETY half | J20-12, then TCON J12-25 |
| J114-3 | C141PBS - RD (circuit 141, "Primary Boom Angle Signal Safety") | BL from J20-2 | BL | SAFETY signal — read by the SCON only. Schematic input label RSP1AS. | J20-2, then SCON J122-3 |
| J114-6 | P109ANG - GR/WH | OR from J20-10 | OR | 5 V supply, OPERATIONAL half S17 | J20-10, then TCON J12-26 (same pin as J114-1) |
| J114-5 | SNSR GND - BR | GR from J20-7 | BR | ground, OPERATIONAL half | J20-7, then TCON J12-25 |
| J114-4 | C123PBS - RD/BK (circuit 123, "Primary Boom Angle Signal Operational") | WH from J20-6 | YL | OPERATIONAL signal — read by the TCON only | J20-6, then TCON J12-32 |
| J154-1 | P109ANG - GR/WH | GR/WH (no jumper block at J154) | RD | 5 V supply, SAFETY half S20 | TCON J12-26, shared with J114 |
| J154-2 | SNSR GND - BR | BR | BK | ground, SAFETY half | TCON J12-25, shared with J114 |
| J154-3 | C142SBS - OR (circuit 142, "Secondary Boom Angle Signal Safety") | OR | BL | SAFETY signal — read by the SCON only. Schematic input label RSS1AS. | SCON J122-2 |
| J154-6 | P109ANG - GR/WH | GR/WH | OR | 5 V supply, OPERATIONAL half S19 | TCON J12-26 |
| J154-5 | SNSR GND - BR | BR | BR | ground, OPERATIONAL half | TCON J12-25 |
| J154-4 | C124SBS - OR/BK (circuit 124, "Secondary Boom Angle Signal Operational"). **The manual disagrees with itself on this colour:** the wire legend on SM p.199 says RD/WH; the TCON pin list on SM p.210 and the schematic both print OR/BK. Identify by printed name, not colour. | OR/BK (pin list and schematic); RD/WH (p.199 legend) | YL | OPERATIONAL signal — read by the TCON | TCON J12-33 |
| SCON J121-10 | S137PLL - RD/WH (circuit 137, "Drive Power (P_38)"; PLL = Propel Lockout) | RD/WH | — | **P_38 = propel power.** Switched OFF by BOTH crosscheck rows. | TCON J13-17 |
| SCON J121-11 | S139TRF - WH/RD (circuit 139) | WH/RD | — | P_39 = turntable rotate. OFF on both crosscheck rows. | TCON J13-19 |
| SCON J121-8 | S59CNK - GR/WH (circuit 59, "Chain break circuit") | GR/WH | — | P_10 = primary boom extend. Only the PRIMARY crosscheck row switches it off — but four other chart rows also switch P_10 off, so P_10 being off does not by itself point at the primary sensor. | TCON J12-8 |
| SCON J122-8 | S140ENL - OR/RD (circuit 140, "Boom Envelope Safety"). **Colour conflict:** SM p.175 calls the same wire "orange/black". Identify by printed name. | OR/RD | — | P_11 = primary/secondary boom up AND P_30 = secondary extend/down, both on this one wire ("P11+P30" on the schematic). OFF on both crosscheck rows. | TCON J12-9 and J12-34 |
| SCON J122-10 | P58LS - RD/BK — this is **circuit 58**, "Safety interlock to engine", NOT circuit 138 (a different red/black circuit; no wire named S138/P138/C138 exists anywhere) | RD/BK | — | P_9B = ignition/fuel. Blank on BOTH crosscheck rows, so a crosscheck fault does not shut the engine off. | TCON J12-7 |
| SCON J121-9 and J122-11 | S56PRV - RD (circuit 56, "Foot switch/TCON estop power"; PRV = Proportional Valve) | RD | — | P_7R — foot-switch and E-stop power for the proportional valves. Not one of the six crosscheck columns. | TCON J12-5 |
| SCON J122-1 and J121-12 | P21DCON - WH (power in) and GNDSCON - BR (ground; the schematic spells it SCONGND-BR — same wire) | WH and BR | — | power into the safety controller ("ECU PWR") and its ground | TCON J12-2 and J12-1 |

### Do this

1. Park on firm level ground, chock the wheels, boom stowed, axles left retracted, engine off. You
   will not touch a plug or a meter on this card.
2. Walk to the ground controls (OM p.20 legend item 2). Turn the key to ground and pull the red E-stop
   OUT. The software version appears on the screen — write it down. It decides which calibration the
   calibration tech uses later: version 4.01 and higher use the 2 Point Calibration, earlier versions
   the 6 Point. The manual does not say the version is the first screen or that it disappears, so if
   you do not see it straight away, keep looking.
3. Read every fault shown on the display. Copy each line word for word, in the order shown, and
   photograph the screen. The Service Manual has no separate "how to read the fault list" procedure;
   the one sentence naming the display as the place to read machine faults is on SM p.100, inside the
   bypass/recovery-key procedure. The faults reported on this machine are: primary boom angle sensor
   crosscheck; secondary boom angle sensor crosscheck; primary boom angle zone fault; primary boom
   angle sensor not calibrated; secondary boom switches fault; secondary boom angle sensor shorted /
   0 V; TCON-SCON calibration inconsistent.
4. Understand the design in one sentence from the manual (SM p.202): "As in aircraft, which features
   redundant safety systems, each mechanical operational switch is backed up with a separate,
   independently functioning safety switch." Redundant just means doubled up on purpose. The angle
   sensors are Hall-effect and "must be calibrated when replaced". For each boom there are two sensor
   names on the schematic: RSP1AO and RSS1AO are the OPERATIONAL copy read by the TCON, and RSP1AS and
   RSS1AS are the SAFETY copy read by the SCON. The SCON "provides safety switch logic for function
   cut-off" — it is the box that switches machine functions off when something is wrong.
5. Sort each fault line into one of three kinds. (a) CROSSCHECK: the safety controller compared the
   safety copy against the operational copy of the same sensor and the two numbers do not agree.
   (b) ELECTRICAL: one copy is reading a wrong voltage — "Value at 0 V", "Value at 5.0 V", "Value Too
   High", "Value Too Low", "Out of Tolerance" (SM pp.177-180). (c) NOT CALIBRATED: that controller has
   no stored calibration for that channel. The line "secondary boom switches fault" is NOT unknown:
   SM p.188 carries "Secondary Boom Switch Timeout" and "Secondary Boom Switches Intermittence Fault
   (LSS1RS Fault)" for the secondary boom limit switches LSS1RS and LSS1RO, and SM p.189 has a chart
   row "Secondary Boom length (crosscheck LSS1RS and LSS1RO)". Only two of the seven display lines —
   "primary boom angle zone fault" and "TCON-SCON calibration inconsistent" — have no counterpart
   anywhere in the October 2018 manual. Note them and do not guess at them.
6. Write down, from the SM p.189 chart, which safety controller outputs are being held OFF right now.
   Primary crosscheck row: P_38 OFF, P_39 OFF, P_10 OFF, P_11 OFF, P_30 OFF, P_9B blank. Secondary
   crosscheck row: P_38 OFF, P_39 OFF, P_11 OFF, P_30 OFF, with P_10 and P_9B blank. **CAREFUL when
   reading this page:** the descriptive title boxes across the top run P_38, P_39, P_10, P_11, P_9B,
   P_30, but the narrow data columns underneath run P_38, P_39, P_10, P_11, P_30, P_9B. The last two
   are swapped between the two rows of headings. Score the OFF marks against the narrow data columns.
   The titles say: P_38 Propel; P_39 Turntable Rotate; P_10 Primary Boom Extend; P_11 Primary /
   Secondary Up; P_9B Ignition/Fuel; P_30 Secondary Extend/Down. The wire legend calls circuit 137
   (S137PLL, red/white) "Drive Power (P_38)". That is why propel is dead. Nothing on the drive side
   needs chasing until the crosscheck faults are gone.
7. Note what is NOT switched off. P_9B, ignition and fuel, carried on P58LS red/black, is blank on
   both crosscheck rows, and the engine runs. The chart's "Loss of CAN" row switches all six outputs
   off including P_9B. CAN (Controller Area Network) is the two-wire data link the controllers use to
   talk to each other. So a running engine tells you the SCON is powered up and talking on that link,
   which rules out the Loss of CAN row and the other rows that cut P_9B. Do not buy a safety
   controller or a turntable controller on the strength of these faults. It does not on its own prove
   every ground wire is perfect — it only shows the module is running well enough to hold its outputs on.
8. Read the manual's own recovery lines and keep them for the next cards. For "Value at 0 V" on any of
   the four channels: "Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor.
   Check that the 5.0 VDC LED is lit on the TCON board. Repair or replace as necessary." For "Not
   calibrated": effect is "Primary up only active from TCON, activate alarm" (or "Secondary up only
   active from TCON"), recovery "Perform calibration procedure per service manual". For "Out of
   Tolerance": "Recalibrate sensor". For "Value at 5.0 V": "Check for an open ground circuit going to
   the sensor".
9. Understand why the secondary sensor can report "0 V" when the damage is at the primary plug. The
   schematic feeds BOTH J114 and J154 from the same 5 volt wire and the same ground wire, tapping the
   same two horizontal lines at junction dots. So a short, or a pin pushed into the wrong cavity, at
   J114 can pull that shared supply down and upset the secondary sensor too.
10. Understand why the tap-and-jumper work at J114 cannot satisfy the check. **This paragraph is
    engineering reasoning, tagged [M], not manual text.** The check exists to prove that two
    independent sensors agree. Each controller keeps its own stored calibration for its own channel —
    the fault table lists "Not calibrated" separately for the operational copy and the safety copy, and
    every replaced angle sensor must be calibrated. So if two signal wires are tied together, the two
    controllers receive the same raw voltage but each converts it using its own stored calibration —
    and one of them is reporting "not calibrated" right now — so the two angle numbers still disagree
    and the crosscheck fault stays. (One caution on a weaker argument: the schematic draws each sensor
    half as a variable resistor with a wiper, not as a driven electronic output, so two of them tied
    together would not necessarily "fight" each other and drag the shared 5 volt line down. Treat that
    particular mechanism as unproven; the shared 5 volt and ground lines are still a real path for one
    plug's damage to affect the other sensor.) And even if a tie ever made the two numbers match, the
    machine would then have one sensor watching the boom instead of two — exactly the condition the
    check exists to detect. The only route out is six clean, separate pins at J114 and J154 with the
    correct Deutsch pin terminals, the loose pin back in its correct cavity, every tap and jumper
    removed, and then calibration by the calibration tech in the SM p.105 order, in which the secondary
    boom angle sensor is calibrated before the primary.
11. Push the red E-stop IN and turn the key OFF. Do not press Delete Faults or Clear Faults — the fault
    list is your evidence. Do not turn the bypass or recovery key. Do not fit any calibration jumper or
    toggle. Go to the J114 card.

### You should see

| Measurement | Expected | If OK it means | If not it means | Cite |
|---|---|---|---|---|
| The fault list on the ground display, copied word for word | Both crosscheck lines present: primary and secondary boom angle sensor crosscheck. Per the SM p.189 chart that means P_38 (propel), P_39, P_10, P_11 and P_30 are being held OFF. | Dead propel is fully explained by P_38 "Drive Power" being held off. Skip all drive-system diagnosis and go to the J114 card. | If propel is dead but NO crosscheck line shows, look for a "P38 SAFETY SWITCH FAULT" message. SM p.175 says recycle power and check the wiring on circuit S137PLL (red/white) "between SCON and TCON"; p.175 names no pins, but the pin lists give those ends as SCON J121-10 and TCON J13-17. Then check the other p.189 rows that also switch P_38 off: turntable tilt Y axis, turntable tilt angle crosscheck, primary boom safety max angle, loss of CAN, and the axle-not-fully-extended plus turntable-rotate row. | SM p.189 + fig scon-fault-matrix.png; SM p.175; SM p.199; SM p.209; SM p.210 |
| Does the engine start and run? | Yes — it does on this machine. P_9B is blank on both crosscheck rows, so it should be on. | The SCON is powered (P21DCON-WH into J122-1), grounded (GNDSCON-BR on J121-12) and talking on CAN, because the "Loss of CAN" row would switch all six outputs off including P_9B. It also rules out the two boom-safety rows that cut P_9B and the platform overload row. Do not replace the SCON or the TCON. This does not by itself prove the ground wire is perfect. | If the engine shuts off with a "P9B SAFETY SWITCH FAULT", SM p.174 says the boom has violated the safety limits and the engine was shut off as a safety feature; use auxiliary power to bring the boom back inside its limits, and check circuits P54ENG and P58LS between the SCON and the TCON. That is a different, additional problem. | SM p.189; SM p.174; SM p.209 |
| The line "primary boom angle sensor not calibrated" | Present now, and it will STAY present after the wiring repair until the calibration tech runs the primary boom angle sensor calibration in the SM p.105 order. Effect listed: "Primary up only active from TCON, activate alarm". | If the wiring repair is done and only "not calibrated" remains, hand the machine to the calibration tech. Do not attempt calibration on this plan. | If it clears by itself after the wiring work, the display was showing a stale fault; record that and carry on. If "Out of Tolerance" appears instead, the recovery is "Recalibrate sensor". | SM p.177; SM p.178; SM p.105; SM p.202 |
| The line "secondary boom angle sensor shorted / 0 V" | The manual's "Value at 0 V" entry points at the 5 volt supply and the wiring. Because the 5 V line and the ground line are shared between J114 and J154, expect this code to be caused by, or at least affected by, the splice work at the primary plug. | If the secondary "0 V" code disappears when J114 is unplugged on the J114 card, the primary splice work is dragging the shared supply down. Repair J114 first. | If it stays with J114 unplugged, the J154 card must test the secondary sensor and its own six pins. | SM p.179; SM p.180; figs es-j154-secondary-sensor.png, es-scon-boomsensors.png |
| The lines "primary boom angle zone fault" and "TCON-SCON calibration inconsistent" | Neither is listed anywhere in SM 1268557GT (October 2018). Searching for "zone" returns only "drive enable zone" / "drive disable zone"; searching all three manuals for "inconsistent" returns nothing. These are likely [M] newer-software messages from the same family — the two controllers holding different calibration data for the same sensor — but the manuals do not say so. | Treat them as companions of the crosscheck and not-calibrated faults. Expect them to clear only after a proper calibration, not after wiring work alone. | If they remain after both the wiring repair and a full calibration, contact Genie Product Support with the software version from step 2. The manual has no recovery text for them. | grep of 1268557.txt / 106877.txt / 114474.txt |

### Why we are doing this

The SCON fault chart on SM p.189 says a primary boom angle crosscheck fault switches OFF five safety
outputs, and the first one, P_38, is named "Propel". So the dead drive is not a separate drive
problem. It is the expected result of the crosscheck faults. That decides the whole plan: fix the two
sensor circuits (six clean pins at each plug, no taps, no jumpers), then hand the machine to the
calibration tech. Do not chase the drive motors, pumps or valves. Do not buy a new TCON or SCON. And
never try to trick the check.

### Safety

- Firm level ground, wheels chocked, boom stowed, axles left retracted. Do not raise, extend or rotate
  anything while the safety envelope is faulted.
- Key OFF and the red E-stop pushed IN before anyone unplugs any connector. This card is read-only.
- Battery disconnected for any resistance (ohms) test on later cards.
- Never jumper, tie, tap or bridge an angle sensor signal, a limit switch, the tilt sensor or the load
  cell. This plan REMOVES the Scotchlok taps, the green jumper and the external green wire at J114. It
  never adds one.
- Do not use the bypass or recovery key positions and do not fit the calibration jumper or toggle.
  Replacing an angle sensor requires recalibration (SM p.202); replacing the SCON requires the entire
  machine to be calibrated in a specific order (SM p.154); the order itself is on SM p.105, secondary
  boom angle sensor before primary.
- Do not press Delete Faults or Clear Faults before the wiring is repaired. The fault list is evidence.
- The generic AC-rated toggle switch in the platform box and its white wire running down the boom are
  not Genie parts. Until that wire is identified, treat it as a possible safety-circuit bypass and do
  not operate the machine from the platform.

### Sources

- [V] "As in aircraft, which features redundant safety systems, each mechanical operational switch is backed up with a separate, independently functioning safety switch." — SM p.202 (15126-15129)
- [V] "The rotation or angle sensors utilize Hall Effect technology and must be calibrated when replaced." — SM p.202 (15134-15136)
- [V] "RSP1AO Primary boom angle sensor / RSP1AS Primary boom angle sensor, safety / RSS1AO ... / RSS1AS ..." — SM p.203 (15284-15293)
- [V] "RSP1AO: ... Provides operational primary boom angle positioning relative to secondary boom angle. RSP1AS: Rotary Sensor, Primary #1 Angle Safety." — SM p.204 (15373-15378)
- [V] "RSS1AS: ... Cuts power to circuits P9B, P_11 and P_30 if the secondary boom drifts down while still extended." — SM p.204 (15387-15390)
- [V] "Safety Controller (SCON): Redundant dual axis tilt sensors ... Also provides safety switch logic for function cut-off." — SM p.203 (15317-15320)
- [V] SM p.189 chart: descriptive title boxes run P_38, P_39, P_10, P_11, P_9B, P_30 but the narrow data columns run P_38, P_39, P_10, P_11, P_30, P_9B — figs/scon-fault-matrix.png; text 13630-13646
- [V] "Primary Boom angle (crosscheck) / OFF / OFF / OFF / OFF / OFF / (blank)" — SM p.189 (13654-13660)
- [V] "Secondary Boom angle (crosscheck) / OFF / OFF / (blank) / OFF / OFF" — SM p.189 (13661-13667)
- [V] P_10 is also switched off by "Axle safety not stowed", "Axle crosscheck angle sensor versus safety switch", "Turntable tilt angle (crosscheck...)" and "Loss of CAN" — figs/scon-fault-matrix.png, P_10 column
- [V] "Loss of CAN / OFF / OFF / OFF / OFF / OFF / OFF" — SM p.189 (13712-13718)
- [V] "Secondary Boom length (crosscheck LSS1RS and LSS1RO) / OFF (P_11) / OFF (P_30) / OFF (P_9B)" — SM p.189 (13733)
- [V] "Secondary Boom Switch Timeout ... Secondary Boom Switches Intermittence Fault (LSS1RS Fault)" — SM p.188 (13540-13572)
- [V] "RD/WH / 137 / Drive Power (P_38)" — SM p.199 (14825-14827)
- [V] "WH/RD / 139 / Turntable Rotate Flow Control Safety (P_39)" — SM p.199 (14832-14835)
- [V] "OR/RD / 140 / Boom Envelope Safety" — SM p.199 (14836-14838)
- [V] CORRECTED: "RD/BK / 58 / Safety interlock to engine" vs "RD/BK / 138 / Primary Boom Up/Secondary Boom Down-Extend (P_11/30)" — SM p.198 (14556-14558), SM p.199 (14828-14831); grep for S138/P138/C138 returns nothing
- [V] Wire names encode their own circuit number (S137PLL=137, S56PRV=56, C141PBS=141, …) — SM pp.198-199 cross-read with the pin lists SM pp.209-210
- [V] "RD / 56 / Foot switch/TCON estop power ... GR/WH / 59 / Chain break circuit" — SM p.198 (14550-14561)
- [V] "GR/WH / 109 / Sensor Power / BK / 110 / Sensor Return" — SM p.198 (14718-14723)
- [V] "RD/BK / 123 / Primary Boom Angle Signal Operational / RD/WH / 124 / Secondary Boom Angle Signal Operational ... RD / 141 / Primary Boom Angle Signal Safety / OR / 142 / Secondary Boom Angle Signal Safety" — SM p.199 (14779-14786, 14844-14851)
- [V] Colour conflict on circuit 124: RD/WH in the p.199 legend vs C124SBS-OR/BK in the SM p.210 pin list and on ES0366J
- [V] "PLL Propel Lockout / PRV Proportional Valve / PBS Primary Boom Angle Sensor" — SM p.194 (14080-14119)
- [V] "TRF Turntable Rotate Flow Control / SBS Sec Boom Angle Sensor" — SM p.195 (14192-14235)
- [V] "ENL Envelope Lockout / CNK Chain Break / ANG Angle" — SM p.193 (13904-13951)
- [V] SCON J121 pins 8, 9, 10, 11, 12 and J122 pins 1, 2, 3, 8, 9, 10, 11 — SM p.209 (15995-16040), figs scon-pinlegend.png, sm209-scon-pins.png
- [V] Schematic labels at the SCON: J121-08 "P10", -09 "P7R", -10 "P38", -11 "P39", -12 "GND"; J122-01 "ECU PWR", -02 "RSS1AS", -03 "RSP1AS", -08 "P11+P30", -10 "P9B", -11 "P7R" — figs/es-scon-boomsensors.png
- [V] "P_38 PWR TO PROPEL / S139TRF-WH/RD / P_39 POWER TO TTROT FC" — SM p.229 (18760-18762)
- [V] TCON J12 pins 1, 2, 5, 7, 8, 9, 25, 26, 32, 33, 34 — SM p.210 (16127-16194), fig sm210-tcon-pins.png
- [V] "17 S137PLL - RD/WH ... 19 S139TRF - WH/RD" at TCON J13 — SM p.210 (16232-16237)
- [V] J114 wiring incl. the "UNIT #130 OR HIGHER" jumper block and devices S18/S17 — figs/es-j114-primary-sensor.png (ES0366J, SM p.229)
- [V] J154 has NO intermediate jumper block; harness-side colours are GR/WH, BR, OR, GR/WH, BR, OR/BK — figs/es-j154-secondary-sensor.png
- [V] The same 5 V net and ground net feed both J114 and J154 (junction dots), and J12 carries exactly one P109ANG pin and one SNSR GND pin — figs/es-boom-sensors-wide.png with fig sm210-tcon-pins.png
- [V] Each sensor half is drawn as a variable resistor with a wiper (potentiometer symbol), not a driven output — figs/es-j114-primary-sensor.png
- [V] Fault table, Operational Primary Boom Angle Sensor, "Value at 0 V" and "Not calibrated" — SM p.177 (12576-12607)
- [V] Safety Primary Boom Angle Sensor: same entries, plus "Out of Tolerance / Recalibrate sensor" and "Value at 5.0 V / Check for an open ground circuit going to the sensor" — SM p.178 (12632-12663)
- [V] Operational and Safety Secondary Boom Angle Sensor "Value at 0 V" and "Not calibrated" — SM p.179 (12775-12806), SM p.180 (12830-12862)
- [V] "Safety Switch P38 ... Recycle power and check wiring on circuit S137PLL (red/white) between SCON and TCON." — SM p.175 (12418-12425)
- [V] "Safety Switch P11 ... circuit S140ENL (orange/black) ..." vs the pin lists' OR/RD — SM p.175 (12375-12417) vs SM pp.209-210
- [V] "Safety Switch P9B ... Use aux to get the boom back into operational limits. Check P54ENG and P58LS between SCON and TCON for damage." — SM p.174 (12338-12349)
- [V] "Safety Switch P7 ... Check wiring for circuit S56PRV (red wire)..." — SM p.174 (12309-12322)
- [V] "zone" appears in the Service Manual only as "drive enable zone" / "drive disable zone" — grep, lines 6516, 6999, 13690, 15331, 15334
- [V] "inconsistent" does not appear anywhere in any of the three manuals — grep, no match
- [M] "primary boom angle zone fault" and "TCON-SCON calibration inconsistent" are likely newer-software messages about a calibration mismatch between the two controllers — no manual support
- [V] Primary boom angle sensor is inside the primary boom at the boom pivot pin, behind the end cover — SM p.81 (6365-6379), SM p.72 (5694-5695)
- [V] Secondary boom angle sensor is on the turntable riser bulkhead at the ground-controls side, under a cover held by a retaining fastener — SM p.88 (6893-6902)
- [V] "Remove the angle sensor and bracket assembly. Do not lose the two springs or the hex-shaped key." — SM p.81 (6387-6389), SM p.88 (6907-6909)
- [V] Full machine calibration sequence puts the secondary boom angle sensor before the primary — SM p.105 (8011-8037)
- [V] "If the Safety Controller (SCON) has been replaced, the entire machine must be calibrated in a specific order." — SM p.154 (11000-11003)
- [V] "The software version is displayed on the LCD screen when the red Emergency Stop button is pulled out to the on position." (2 Point for 4.01+, 6 Point before) — SM p.83 (6491-6496)
- [V] "Check the LCD screen on the ground control box for machine faults, then contact trained service personnel." — SM p.100 (7650-7664), inside the bypass/recovery-key procedure
- [V] "2 Ground controls" — OM p.20 (1254)
- [V] "Width, axles retracted / 8 ft 1 in / 2.5 m" — OM p.64 (3966-3969)
- [V] LSFA1ES / LSRA1ES prevent boom functions with the axles retracted — SM p.203 (15322-15329)
- [V] TCON box for SN 1861 is 237069GT "from SN 1712"; 106512GT is "to SN 1711" — PM p.61 (3054-3066)
- [V] SCON module for SN 1861 is 1258463GT — PM p.55 (2778-2788), drawing PM p.54
- [V] Original sensor 94980GT "SENSOR, DUAL OUTPUT, ANGLE" is no longer available after SN 12853; first-time replacement is kit 217246 — PM p.77 (3954-3958), PM p.167 (8549-8557)
- [V] Fig 511.2 "(from SN 1854)" applies: item 10 assembly 215728GT, item 17 sensor 216061GT (sensor and magnet matched, calibration required), items 8/9 rotator 233118GT and pin weldment 218757GT — PM pp.168-169 (8611, 8665-8696)
- [V] The 511.2 drawing prints callout 17 twice — figs/pm168-pri-boom-sensor.png
- [M] That the 217246GT kit keeps two separate sensing elements is inference from the duplicate callout only; the parts list never says two
- [V] Terminal 73713GT is listed on PM p.169 only as a sub-item of limit switch assembly 110913GT whose connector is the 4-way 119067GT; no page names a terminal for the 6-way J114 or J154 — PM p.169 (8626-8646)
- [M] The correct 6-way terminal is likely the same size-class Deutsch DT pin 73713GT — confirm with Genie Product Support before ordering
- [F] Photo: primary sensor connector half moulded DEUTSCH IPD USA DT04-6P, five wires seated (BL, RD, YL, GN, WH), one gold pin hanging loose, a separate green wire leaving the loom — photos/2026-09-12-j114-dt04-6p-loose-pin.jpg
- [F] Those five colours do not match the factory sensor lead colours on the schematic, so the sensor side has been re-terminated — same photo vs fig es-j114-primary-sensor.png
- [F] Field findings at J114: new blue sensor hardware, two blue Scotchlok taps joined by a green jumper, long green wire outside the loom to a pink butt splice on a pivot-bracket bolt — case README 210-215
- [F] Live fault list as reported — case README 155-161
- [M] Tying the operational and safety signal wires together cannot satisfy the crosscheck (separate stored calibrations; lost redundancy) — engineering inference, not manual text
- [M] The "tied outputs fight each other" mechanism is weak: the schematic draws the halves as potentiometers, not driven outputs
- [M] A running engine shows the SCON is powered, grounded and on the CAN link — inference from the Loss of CAN row; it does not prove GNDSCON-BR is intact

---

## A. Stand down

Two short items, both before any measurement:

1. **Tag out the toggle.** The generic AC-rated toggle switch in the platform control box, and the
   white wire running from it down the boom, are to be treated as a live bypass of an unidentified
   circuit until card B proves otherwise. Hang a "do not operate" tag on the ground controls, write on
   it that the platform controls must not be used, and tell everyone on site in plain words. The
   Service Manual's own instruction covers this: "Immediately tag and remove from service a damaged or
   malfunctioning machine" and "Repair any machine damage or malfunction before operating the machine"
   [V, SM p.171]. The tag stays on for the whole of today — every card in this plan measures and
   records; none of them returns the machine to service.

2. **Photograph every splice before touching it.** Before anything is unplugged, opened, lifted or
   even wiped clean, photograph — from two angles each, with something in frame that proves where on
   the machine you were standing: the J114 connector half and its loose gold pin terminal; both blue
   Scotchlok taps and the green jumper looped between them; the bare frayed copper strands at the loom
   mouth beside the lower tap; the long green wire and the pink crimp under its bolt; the aftermarket
   toggle switch in the platform box, its terminal face and all three white wires; the blue butt
   splice inside the platform box; and the blue tap at the turntable with the two-pin plug beside it.
   These are evidence of what a previous person did to this machine, and once a tap is opened or a pin
   is reseated that evidence is gone. Nothing is cut, unclipped, reseated or tidied today.

---

## B. Identify the toggle switch

### B1-B2 — Work out what kind of switch the non-Genie toggle is, and where its three white wires go

**(from card `b1-toggle`)**

#### Where it is

**Component.** A non-Genie (aftermarket) toggle switch and its three white 16 GA wires (16 GA = 16
American Wire Gauge, a size code; a smaller number means a thicker wire). Plus the single white wire
that leaves the platform control box and runs along the boom toward the turntable. Reported to have
been found in the platform control box, also called the PCON box (PCON = platform controller, the
small computer in the basket control box). **No photograph shows the switch actually mounted in the
box** — both switch photos show it already loose in the technician's hand — so treat "it was in the
box" as a field report, not as photographed fact [M].

**Where on the machine.** The platform control box is the blue box on the platform (basket) railing
that carries the joysticks, the membrane push-button panel and a red E-stop button (OM p.20 item 7;
OM p.26 item 17). The description "blue box on the railing" comes from the field photographs, not
from the manual. The far end of the white wire is down at the turntable end of the machine, at a blue
Scotchlok tap, close to where a cardboard carton printed TILT SENSOR is sitting.

**How to find it.** Stand on the platform floor with the boom stowed. Undo the platform control box
lid retaining fasteners and lift the lid (SM p.28 step 2) — these are steps 1 and 2 of "How to Remove
the LED Circuit Board"; **stop after step 2**, do not carry on into the later steps and do not pull
any ribbon cables. Inside you will see: two round joystick bases with black rubber boots and grey plug
bodies, a green printed circuit board with two blue ribbon-cable sockets along one edge, and in one
corner a small black contact block moulded "NC 1" with a red push-piece (NC = normally closed: the
contact conducts until the E-stop button is pushed in). At that block a white wire arrives, ending in
a blue insulated female push-on spade terminal, and that blue spade is stacked on the same block
terminal as the red wire's own red spade. Follow the white wire out of the box and along the machine
to the turntable end, where a blue Scotchlok tap joins it to an orange wire with a black stripe; a red
wire runs alongside, and the red and orange/black wires go into a grey two-pin plug.

**What it looks like.** Black rectangular body. Threaded metal bushing with a bare metal lever and a
hex nut, and no rubber boot. Moulded into the body: "10A 250VAC 15A 125VAC 3/4HP 125-250VAC MEXICO
9614", with RU and CSA approval marks. **IMPORTANT and corrected:** the terminal face carries SIX
terminals in two rows of three, not three in a row. Each terminal is a small screw with a square brass
pressure plate, and a flat brass blade tab beside it. Only three of the six are wired; the other three
are bare. The three white wires are printed "16 GAU" and end in insulated female quick-disconnects —
one lavender/violet and two clear. The lavender one matters: a genuinely blue crimp is what you will
find on the E-stop contact block inside the box, so do not confuse the two. For contrast, Genie's own
toggle for this box is 128200GT "SWITCH TOGGLE ASSY SPDT 3P MOM" and it comes with a short rubber boot
27246GT as part of the assembly. (Note: Genie DOES fit toggle switches in this box — PM p.211 item 14
is a 128200GT toggle in the platform control box figure — so the point is not "no toggle belongs
here", it is "this particular switch is not a Genie part".)

**Cite.** OM p.20, p.26; SM p.24, p.27, p.28, p.76; PM p.209, p.211, p.213, p.215; photos
2026-09-12-aftermarket-toggle-terminals.jpg, -aftermarket-toggle-ac-rating.jpg,
-platform-box-interior-pcb.jpg, -white-wire-to-toggle-in-box.jpg, -white-wire-scotchlok-boom.jpg,
-white-wire-turntable-tilt-sensor-box.jpg.

#### Set the machine to

- **Key:** ground control key switch OFF and the key pulled out (SM p.24). Do NOT use the bypass or
  recovery key positions.
- **E-stops:** red E-stop pushed IN at BOTH the ground control box and the platform control box,
  before any lid is opened (SM p.28 step 1).
- **Battery:** DISCONNECTED, all of them. OM p.12: disconnect the batteries under both turntable
  covers; decal 97865 repeats it. SM p.76 steps 16-18: auxiliary power unit batteries first, then the
  engine starting/controls battery. Tag each cable. **Check: the ground control display must be dark
  before you put a meter on anything.**
- **Engine:** OFF, and it cannot start with the batteries off.
- **Other:** firm level ground, wheels chocked, boom stowed, turntable rotation lock engaged, all
  external AC power supply unplugged (this machine has a generator/AC option — check for a shore-power
  lead). Axles stay retracted. Work from the platform standing on the ground-level platform floor with
  the boom stowed; do not raise the platform. Dry the membrane panel and the inside of the box before
  you probe — the box was found wet.

#### Connector and wires

The aftermarket switch has no plug or connector at all. Three of its six terminals carry push-on
female spade crimps on white 16 GA wire; the remaining three are bare and unused. A six-terminal body
is normally a double-pole switch — two separate switches in one body, three terminals each — so do NOT
assume "the centre terminal is the common" the way you would on a three-terminal switch. The test
below settles it by measuring, not by assuming.

Hold the switch with the lever pointing up and the terminal face toward you, then label the terminals
T-L, T-C, T-R (top row) and B-L, B-C, B-R (bottom row).

For reference, Genie's own toggle-switch lid kit for this machine is 237225GT "KIT,TOGL SW PL BOX
LID,ANSI", from SN 779 to 2000, on PM figure 605.1. It uses 128200GT switches on lid 229386GT with
LED/toggle switch interface board 232975GT. The Service Manual's connector legend calls that same
board the "LED driver board": J23 is "10 pin ribbon connector PCON to LED driver board" and J24 is
"20 pin Molex connector LED driver board" (SM p.205 — p.205, not p.206; p.206 starts at J87).
Schematic sheet ES0366J (SM p.229) carries a drawing captioned "TOGGLE SWITCH AFTERMARKET KIT
SCHEMATIC". Two dashed outlines are drawn: an inner one captioned "LED/TOGGLE SWITCH INTERFACE PCB"
around J24 and J23, and an outer one captioned "TOGGLE SWITCH AFTERMARKET KIT SCHEMATIC". Neither is
labelled "platform box" — call it the kit boundary. **No conductor crosses that outer boundary, so the
Genie kit has no wire running to the turntable. And the only plain WHITE wire anywhere in the Genie
kit is J24-18 SPARE-WH.** A white wire running out of the box to the turntable is therefore
definitively not the Genie kit.

| Pin / terminal | Wire | Colour | What it is | Goes to |
|---|---|---|---|---|
| Aftermarket toggle, six terminals (T-L, T-C, T-R / B-L, B-C, B-R) | three white 16 GA wires on insulated female spades (one lavender, two clear); three terminals bare | WH | Unknown until measured. Likely a double-pole body [M] — do not assume any terminal is "the common". | UNKNOWN — the ring-out in steps 12-13 finds out |
| In-box joint: blue insulated female spade stacked on the E-stop "NC 1" contact block terminal | white 16 GA in a BLUE spade, piggybacked on the terminal already carrying the red wire's red spade; a black wire leaves the other end | RD / BK machine side, WH added | **Not a Scotchlok — corrected.** There is no insulation-displacement tap inside the box; the test point is the stacked blue spade itself, and pulling it off is how you isolate the white conductor. The block is Genie 66818GT "CONTACT,NC", part of E-stop 66817GT under kit 122519GT. ES0366J labels the platform E-stop wires ESTOP PWR-RD and ESTOP RET-BK at "PCON E-STOP (P2)". | platform E-stop circuit — the specific wire to be proved by the ring-out, not assumed |
| Scotchlok tap on the white wire, turntable end (harness side) | orange with a black stripe (OR/BK); a red wire (RD) alongside; red and OR/BK go into a grey two-pin plug; the white wire carries on PAST the tap | OR/BK + RD | Likely Genie circuit 64 "Power for operational switches", because OR/BK appears once in the Wire Color Legend — but ES0366J also carries REAR STR-OR/BK inside the toggle kit, so colour alone does not name the circuit [M]. Prove it by ringing through to a named connector pin. | grey two-pin environmental plug near the TILT SENSOR carton; which switch or sensor it serves has not been identified. The plug is GREY, not black, and nothing proves it is a Deutsch. |
| Genie kit J24-1 … J24-20 (reference only) | 1 HORN PWR-RD, 2 HORN RET-GR, 3 GEN ON/OFF-GR/WH, 4 AUX PUMP-RD, 5 START ASST-BK/WH, 6 ENG START-BK, 7 DRV ENBL-BL/WH, 8 NOT USED, 9 AXLE RET-GR, 10 GND1-BR, 11 ENG SPEED-BK/RD, 12 AXLE EXT-GR/WH, 13 DRV SPEED-RD/WH, 14 FRONT STR-OR, 15 REAR STR-OR/BK, 16 CRAB STR-BL, 17 CORD STR-BL/BK, **18 SPARE-WH**, 19 FUEL SEL-BL/RD, 20 GND2-BR | as listed | the factory toggle kit's own wiring. Note pin 15 is a SECOND OR/BK wire on the same sheet, so an orange/black wire is not automatically circuit 64. Pin 18 is the only plain white wire in the whole kit. | LED/toggle switch interface PCB, 20-pin J24 block; J23 10-pin ribbon back to the PCON |

#### Do this

1. **Stand the machine down.** Firm level ground, wheels chocked, boom stowed, turntable rotation lock
   engaged, external AC lead unplugged. Ground key OFF and the key out. Red E-stop IN at the ground
   control box AND at the platform control box. Do not touch the bypass or recovery key positions and
   do not fit the calibration jumper or toggle.
2. **Disconnect every battery.** Open both turntable covers. Auxiliary power unit battery cover off,
   tag and disconnect those cables; then tag and disconnect the engine starting/controls battery on
   the engine side. Tape a flag round each cable as it comes off. Take off all rings, watches and other
   jewellery first. CHECK: the ground control display must be completely dark.
3. **Climb into the platform**, boom stowed, platform at ground level. Undo the lid fasteners and open
   the lid — steps 1-2 of SM p.28's LED-board procedure. **STOP after opening the lid.** Clip a
   grounded wrist strap to the ground screw inside the control box (SM p.27 step 7). ESD
   (electrostatic discharge — the static spark you get off a carpet) damages the green boards. Keep the
   meter probes off the circuit boards altogether.
4. **Photograph before you touch anything:** the switch where it sits, all six of its terminals, the
   three white wires and where each one goes, the blue spade stacked on the E-stop "NC 1" block, and
   the Scotchlok tap at the turntable. Then tape-flag the switch terminals T-L, T-C, T-R / B-L, B-C,
   B-R. Write down which three of the six carry a wire and which three are bare. Flag each white wire's
   crimp with the same code as the terminal it came off. Note which way the lever points against a
   fixed landmark, e.g. "lever toward the E-stop button = position 1".
5. **Pull the three spade crimps off the switch.** Grip the plastic crimp body, not the wire, and pull
   straight off. Slide a short piece of insulating sleeve or a wire nut over each bare crimp, or bag
   them and tie the bag clear of metal — tape alone is not enough in a box that was found wet. The
   switch is now electrically alone in your hand.
6. **Set the meter** to ohms / continuity — the setting that beeps. Touch the probes together: it must
   beep and read close to 0 ohms. Write that number down and subtract it from every later reading.
7. **Plain-words glossary before you read the switch.** POLE = one independent switch inside the body.
   THROW = one position a pole can connect to. SPST = plain on/off, two terminals. SPDT = three
   terminals, one common that connects to either of the other two. DPST / DPDT = two of the above in
   one body, six terminals, the halves working together but electrically separate. MOMENTARY = the
   lever springs back. MAINTAINED = the lever stays put. OL on the meter (sometimes "1" or a blank) =
   open line, no connection, no beep. This switch has six terminals, so it is very likely a double-pole
   body [M] — which is exactly why you probe every pair rather than assuming which terminal is common.
   Genie's own switch is described in the Parts Manual only as "SWITCH TOGGLE ASSY SPDT 3P MOM"; the
   manual never says what "3P" stands for, so do not assume it means three positions or a centre-off [M].
8. **Lever in position 1.** Probe EVERY pair of the six terminals — all 15: T-L/T-C, T-L/T-R, T-C/T-R,
   B-L/B-C, B-L/B-R, B-C/B-R, T-L/B-L, T-C/B-C, T-R/B-R, T-L/B-C, T-L/B-R, T-C/B-L, T-C/B-R, T-R/B-L,
   T-R/B-C. Probe bare metal — the blade or the screw plate — not plastic. Write each pair down as
   "beep + ohm reading" or "OL". Draw it as a grid so nothing is missed.
9. **Lever in position 2.** Repeat all 15 pairs. Write them all down again.
10. **Let the lever go from each side in turn.** Does it spring back (momentary) or stay put
    (maintained)? If it springs back from one side only, note which. If it has a middle rest position,
    put it there and probe all 15 pairs a third time.
11. **Decode** using the Expected table. The pattern of which pairs beep in which position tells you
    how many poles and throws; the spring tells you momentary or maintained. Write the verdict on a
    tape flag, e.g. "double pole, double throw, maintained, 2 positions; only 3 of 6 terminals wired,
    on T-L, T-C, B-R".
12. **Ring out the three white wires.** The run from the platform box to the turntable is far longer
    than your meter leads, so make a long test lead: insulated wire with an alligator clip at each end.
    Prove the test lead itself and note its own resistance. Clip one end to the first tagged white
    crimp; carry the meter and the free end to each candidate far point. A beep means it is the same
    conductor. Candidates: (a) the blue insulated spade stacked on the E-stop "NC 1" contact block —
    pull that spade off its terminal and probe the spade's own metal; (b) the point where the white
    wire leaves the box, so you know which conductor goes outbound; (c) the blue Scotchlok tap at the
    turntable end, on the orange/black wire beside the red wire — probe the exposed metal blade of the
    Scotchlok, or a bared strand at the crimp. **NOTE, corrected:** earlier notes listed a "mid-boom
    Scotchlok" and a separate "turntable end" as two different places. Both photographs show the same
    blue Scotchlok, the same white + orange/black + red trio, the same grey two-pin plug and the same
    rusty-tube and blue-plate background, with the TILT SENSOR carton in frame in one of them. They are
    very likely one splice in one place [M]. Trace the wire physically with your hand before you treat
    any "OL" as a broken wire. Also note that in the photo the white wire carries on PAST the Scotchlok
    — so its own far end is somewhere further along and has not been seen yet; find it. **Never pierce
    a wire's insulation to make a test point.**
13. For each white conductor write one line: "Terminal <code> -> <where it lands>". Then check each
    white conductor against bare machine steel: clip the long lead to the conductor, scrape a clean
    spot on a bolt head on the platform weldment (the welded steel frame of the platform) and touch the
    probe there. Expect OL.
14. **Name the machine wires that were tapped, and be careful about it.** The Wire Color Legend is SM
    p.198. Orange with a black stripe = circuit 64 "Power for operational switches" — BUT sheet ES0366J
    also carries REAR STR-OR/BK in the toggle kit, so an orange/black wire is not automatically circuit
    64. Red is worse: red serves circuits 56, 87, 96 and others. Green/white is used twice: circuit 83
    "Tilt signal X axis" and circuit 109 "Sensor Power". And white is used for circuit 77 "Lower Angle
    #1 operational", circuit 94 "Load Sensor" AND circuit 98 "J1708 + (high)" (J1708 is a data link).
    So colour is a starting hint only. Ring each tapped conductor through to a named connector pin
    before you write a circuit number down. Compare against the stop-list. Record the outcome. **Do not
    cut, unsplice, untap or reconnect anything on this card.**
15. **Finish and hand over.** Leave the three crimps OFF the switch, sleeved or bagged, not just taped.
    Leave every Scotchlok and the stacked blue spade exactly where they are — they are evidence for the
    removal card. Close the lid loosely to keep water out. Leave all batteries disconnected. Photograph
    the tagged crimps and the tagged switch. Write on the machine tag and tell the next person: THIS
    MACHINE MUST NOT BE RE-POWERED OR OPERATED until the next card has decided what the switch was
    doing and the harness has been put right.

#### You should see

| Measurement | Expected | If OK it means | If not it means | Cite |
|---|---|---|---|---|
| Probes touched together, meter on ohms / continuity | Beep, roughly 0 to 0.5 ohms | Meter and leads are good. Carry on. | Change the meter battery or the leads before you trust any reading. | General practice; no Genie spec exists [M] |
| How many of the six terminals carry a wire | Three wired, three bare (what the photo shows) | Record which three. A wire on a terminal that never connects does nothing, but you still need to know it is there. | If more or fewer are wired than the photo showed, somebody has been at it since — photograph it again and say so. | photo 2026-09-12-aftermarket-toggle-terminals.jpg |
| All 15 terminal pairs, lever in position 1 | On a double-pole body: two separate groups — one pair beeping within the top row, one within the bottom row, nothing beeping between the rows. On a single-pole body only one pair beeps at all. | Write down which pairs beep and their ohm readings. Go to position 2. | If nothing beeps in either position the switch is dead or corroded — recheck every pair with firm probe pressure before calling it dead. | Standard switch behaviour; six-terminal body from the photo [M] for the double-pole reading |
| All 15 terminal pairs, lever in position 2 | The beeping partner within each row changes to the other end terminal. The two rows still never beep to each other. | Two throws per pole. Write the verdict. | If the same pair beeps in both positions and nothing else changes, that pole behaves as a plain on/off (or its other throw contact is dead). Record which terminals never connect to anything. | Standard switch behaviour |
| Any pair that beeps between the TOP row and the BOTTOM row, in any lever position | OL — the two poles of a double-pole switch are electrically separate by design | Normal for a double-pole switch. | A beep between the rows means either the body is not double-pole, or someone has bridged two terminals outside the switch with a jumper, solder or a second tap. Look for it, photograph it, **do not remove it** — record it. | Standard switch behaviour |
| Lever released from each side; readings in any middle rest position | Springs back = momentary. Stays put = maintained. In a middle rest position, expect every pair OL. | Record "momentary" or "maintained", and "2-position" or "3-position". | A maintained switch wired into a circuit meant to receive a brief command can hold that command on permanently. Flag it clearly. Note: which Genie functions require a momentary command is not stated in the manuals [M] — flag the concern, do not state it as fact. | PM p.215 lists Genie's switch as "SWITCH TOGGLE ASSY SPDT 3P MOM"; "3P" is not expanded [M] |
| Ohm reading of any pair that beeps (contact resistance) | Under about 1 ohm once you subtract the probe-to-probe reading | Contacts are clean. | Several ohms, or a reading that jumps when you waggle the lever, means a worn, corroded or water-damaged contact. The switch has no boot and the box was wet. Either way this switch is not going back in. | General practice threshold, not a Genie spec [M]; boot 27246GT is "part of toggle switch 128200" PM p.215 |
| Continuity from each tagged white crimp to each candidate far point, through the long test lead | Each white conductor beeps at exactly one far point, under about 1 ohm plus the long lead's own resistance | Write "Terminal <code> -> <point>" for all three. Likely destinations from the photos: one white wire to the blue spade on the E-stop "NC 1" block; one white wire out of the box, along the machine, to the blue Scotchlok on the orange/black wire at the turntable end [M]. | OL at every candidate means either you have not found the far end yet, or the conductor is broken. Follow the wire physically before calling it broken. Remember the two Scotchlok photos are probably ONE place. | photos -white-wire-to-toggle-in-box.jpg, -white-wire-scotchlok-boom.jpg, -white-wire-turntable-tilt-sensor-box.jpg |
| Each white conductor against bare machine steel | OL | Nothing is tied to the frame. | A beep means the wire is rubbed through to the frame or deliberately grounded. Record it. A grounded conductor on a power circuit explains blown fuses or a sagging supply. | General practice [M] |
| Identity of the machine wires that were tapped — traced to a named connector pin, not guessed from colour | See the stop-list in card B3-B4 below | If any white conductor lands on a stop-list circuit, the toggle is spliced into a control or safety circuit and it is a bypass. Record it. The next card removes it and repairs the harness with Genie-method splices. Do not reconnect it. Do not operate the machine with it in place. | If a far end proves to be J24-18 SPARE-WH on a Genie interface board, somebody was reaching for the Genie kit's spare input — but the Genie kit has no wire leaving the kit boundary, so a run to the turntable is still not the kit. If a far end is dead-ended and joined to nothing, that terminal currently does nothing; the other two still decide the verdict. Either way the switch does not go back in. | SM p.198; SM p.229; fig es-toggle-switch-aftermarket-kit.png |

#### Why we are doing this

The machine has seven live boom-angle and calibration faults and propel is dead. A home-made toggle
switch wired into the platform control box, with plain white wire running away to the turntable area,
is either a bypass of a control or safety circuit or a botched attempt at Genie's own toggle-switch
kit. Which machine wires it touches decides whether the next card is "remove a bypass and repair the
harness" or "harmless add-on, leave it". Nothing on the boom-angle circuit can be trusted until this
is known, and the machine must not go back to work with an unidentified switch spliced into it.

#### Safety

- Key OFF and the key removed; red E-stop pushed IN at both the ground and the platform controls before
  the lid comes off; external AC power supply unplugged from the machine (SM p.24; SM p.28 step 1).
- All batteries disconnected before any ohms test — the auxiliary power unit batteries AND the engine
  starting/controls battery, under both turntable covers (OM p.12; decal 97865 OM p.5; SM p.76).
- Remove all rings, watches and other jewellery — the Service Manual prints an electrocution/burn
  hazard warning at this point in the procedure (SM p.28).
- Wear a grounded wrist strap clipped to the ground screw inside the control box (SM p.27 step 7) and
  keep the meter probes off the printed circuit boards (SM p.28).
- **Never pierce a wire's insulation to make a test point. Never add a jumper. Never reconnect the
  aftermarket switch. Never bridge any pair of its wires.** This plan REMOVES bypasses; it never adds one.
- Never bypass, jumper or defeat a safety circuit, limit switch, angle sensor, tilt sensor or load cell
  — not to get a reading, not to get the machine to move.
- Do not use the bypass or recovery key positions and do not fit the calibration jumper or toggle.
- Machine on firm level ground, wheels chocked, boom stowed, turntable rotation lock engaged. Work from
  the platform only at ground level. Do not raise it on a machine with live boom-angle faults.
- Dry the membrane panel and the inside of the box before probing, and do not do this test in rain. A
  wet membrane panel is already suspected in the "both axle buttons pressed" fault, whose recovery
  action is "Check ribbon and connector from membrane switch. If necessary replace membrane switch."
  (SM p.176).
- The white wire, the Scotchlok tap and the stacked blue spade are evidence. Photograph before and
  after, tag every end, leave them in place for the removal card.
- **Hand-off:** the three crimps are left disconnected and sleeved or bagged inside a box found wet.
  Tag the machine and tell the next person in plain words: do not re-power or operate this machine
  until the next card is done.

#### Sources

- [V] Photo: six terminals in two rows of three, only three wired — photos/2026-09-12-aftermarket-toggle-terminals.jpg (verified by enlargement)
- [V] Photo: white wires printed "16 GAU"; one lavender/violet crimp, two clear — same photo
- [V] Photo: body moulded "10A 250VAC / 15A 125VAC / 3/4HP 125-250VAC / MEXICO / 9614", bare bushing, no boot — photos/2026-09-12-aftermarket-toggle-ac-rating.jpg
- [V] Photo: in the box the white wire ends in a BLUE insulated female spade stacked on the E-stop "NC 1" contact block beside the red wire's red spade — NOT a Scotchlok — photos/2026-09-12-white-wire-to-toggle-in-box.jpg
- [V] Photo: box interior — two joystick bases with grey plugs, green PCB with two blue ribbon headers, black contact block moulded "NC 1" — photos/2026-09-12-platform-box-interior-pcb.jpg
- [V] Photo: blue Scotchlok joins the white wire to an orange/black wire; a red wire alongside; red and OR/BK into a GREY two-pin plug; the white wire continues past the tap — photos/2026-09-12-white-wire-scotchlok-boom.jpg
- [V] Photo: the same tap, trio, plug and background appear again with a "TILT SENSOR" carton in frame — photos/2026-09-12-white-wire-turntable-tilt-sensor-box.jpg
- [V] "1 128200GT SWITCH TOGGLE ASSY SPDT 3P MOM / Platform Rotate Toggle Switch" — PM p.215 (10802-10805)
- [V] Lid-kit toggles are fig 605.1 items 5-15, each 128200GT — PM p.215 (10821-10875)
- [V] "2 27246GT BOOT,TOGGLE SWITCH,SHORT* / Part of toggle switch 128200" — PM p.215 (10807-10810)
- [V] "237225GT KIT,TOGL SW PL BOX LID,ANSI / from SN 779 to 2000" — PM p.215 (10788-10790)
- [V] Kit lid 229386GT and interface board 232975GT — PM p.215 (10888-10903)
- [V] Genie DOES fit a toggle in the platform control box figure: PM p.211 item 14 128200GT "(Platform Level; includes boot and hardware)" with 128580-SGT and 27246GT as sub-items — PM p.211 (10677-10689)
- [V] The Parts Manual never expands "3P"; "three position", "on-off-on" and "center off" appear nowhere for any switch — PM p.215 (10804) plus negative search of both manuals
- [V] E-stop contact block 66818GT "CONTACT,NC", sub-item of E-stop 66817GT under kit 122519GT; box 106513GT; lid 107798GT — PM p.209 (10612-10637, 10565-10566)
- [V] PCON harness 94966GT and membrane/LED PCB 62399GT — PM p.213 (10715-10725)
- [V] "J23 10 pin ribbon connector PCON to LED driver board / J24 20 pin Molex connector LED driver board" — SM p.205 (15455-15459); that legend page is SM p.205 (PDF 219), not p.206, which starts at J87
- [V] Sheet ES0366J is SM p.229 (PDF 243) and carries the LED/TOGGLE SWITCH INTERFACE PCB with J23 10PIN and J24 20PIN — SM p.229 (19698-19706)
- [V] "TOGGLE SWITCH AFTERMARKET KIT SCHEMATIC" caption — SM p.229 (19800)
- [V] Kit toggles and designators: SERVICE HORN (BN5), GENERATOR ON/OFF (TS17), AUXILIARY PUMP (TS1), START ASSIST (TS6), ENGINE START (TS2), DRIVE ENABLE (TS15), AXLE EXT/RET (TS23), ENGINE SPEED (TS4), DRIVE SPEED (TS5), STEER MODE SELECT (TS22) x2, SPARE #1 (TSx) — SM p.229 (19707-19738)
- [V] Full J24 pin map 1-20 — figs/es-toggle-switch-aftermarket-kit.png (read pin by pin, incl. the easily swapped 9/10/11 order)
- [V] The same wire names appear in the extracted schematic text — SM p.229 (19771-19792)
- [V] SPARE-WH at J24-18 is the only plain WHITE wire anywhere in the Genie kit — figs/es-toggle-switch-aftermarket-kit.png
- [V] Two dashed outlines; neither is labelled "platform box"; no conductor crosses the outer boundary, so the kit has no wire to the turntable — same figure
- [V] Only PCON PWR and HRN RLY CNTRL are labelled at the J23 block, on the mating block below it; no pin numbers are printed on J23 — SM p.229 (19798-19800)
- [V] Platform E-stop wires ESTOP PWR-RD and ESTOP RET-BK at "PCON E-STOP (P2)" — SM p.229 (17282-17292)
- [V] "C64LS-OR/BK" is a wire on ES0366J — SM p.229 (18389)
- [V] Wire Color Legend is SM p.198 (PDF 212) (14532-14538)
- [V] Circuit 56 RD "Foot switch/TCON estop power" — SM p.198 (14550-14552)
- [V] Circuit 64 OR/BK "Power for operational switches" — SM p.198 (14575-14577)
- [V] Circuit 77 WH "Lower Angle #1 operational" — SM p.198 (14615-14617)
- [V] Circuits 83 GR/WH, 84 GR/BK, 85 GR (tilt) — SM p.198 (14633-14641)
- [V] Circuit 94 WH "Load Sensor" — SM p.198 (14671-14673)
- [V] Circuit 98 WH "J1708 + (high)" — SM p.198 (14683-14685)
- [V] Circuit 109 GR/WH "Sensor Power" / 110 BK "Sensor Return" — SM p.198 (14718-14723); GR/WH is used twice (83 and 109)
- [V] RD also serves circuits 87 "Platform Level Safety Power" and 96 "Tether Power" — SM p.198 (14651-14679)
- [V] "Push in the red Emergency Stop button ... at both the ground and platform controls. 2 Remove the platform control box lid retaining fasteners. Open the control box lid." — SM p.28 (2607-2616), steps 1-2 of "How to Remove the LED Circuit Board"
- [V] Jewellery and ESD warnings — SM p.28 (2621-2635)
- [V] "Attach a grounded wrist strap to the ground screw inside the control box." — SM p.27 (2566-2568)
- [V] SM p.24 repair configuration has SEVEN bullets, including "All external AC power supply disconnected from the machine" — SM p.24 (2398-2409)
- [V] SM p.76 steps 16-18 treat the auxiliary power unit batteries as present, not optional — SM p.76 (6013-6025)
- [V] "Before performing service on this machine, disconnect the batteries under both turntable covers." — OM p.12 (796-798); decal 97865 OM p.5 (324-328)
- [V] "7 Platform controls" — OM p.20 (1262-1263); the blue-box description comes from the photos, not the manual
- [V] "17 Red Emergency Stop button ..." — OM p.26 (1573-1576)
- [V] "Axle Extend/Retract Buttons Fault Check (both buttons pressed) ... Check ribbon and connector from membrane switch. If necessary replace membrane switch." — SM p.176 (12493-12499)
- [V] Turntable tilt sensing is inside the SCON; alarm at ±4.5 degrees — SM p.203 (15317-15320)
- [V] "J55 6 pin Deutsch connector on platform tilt sensor" — the only connector in the legend described with the word "tilt" — SM p.205 (15477-15479)
- [M] The six-terminal body means the switch is likely double-pole — inference from the photo; no nameplate or manual entry identifies the type
- [M] The two Scotchlok photographs are likely one splice in one place, near the TILT SENSOR carton
- [M] The toggle was likely fitted in the platform control box; no photograph shows it mounted there
- [M] A closed contact should read under about 1 ohm, probe-to-probe roughly 0 to 0.5 ohm — general practice, no Genie spec
- [M] The red wire tapped in the box is likely ESTOP PWR-RD and the orange/black wire at the Scotchlok likely C64LS-OR/BK — both to be proved by the ring-out
- [M] The grey two-pin plug is likely a sealed environmental connector, possibly a Deutsch; its make is not readable
- [M] Genie functions such as axle extend/retract, engine start and auxiliary pump are expected to receive a momentary command — not stated in the manuals

---

### B3-B4 — Read the printed name on the factory wire under each tap, then check it against the stop-list

**(from card `b3-host-wire`)**

#### Where it is

**Component.** The white 16 gauge wire added to the aftermarket toggle switch, and every improvised
joint on it. **CONFIRMED IN PHOTOGRAPHS:** (a) one blue butt splice inside the control box, where the
white wire joins a red wire; (b) one blue Scotchlok clip-on tap out on the machine, on a pair made up
of one plain red wire and one orange wire with a black stripe, next to an unplugged grey 2-pin Deutsch
connector whose far end is cut and frayed, with a "TILT SENSOR … PCON" carton lying on the casting
below. **NOT YET CONFIRMED:** a separate second tap partway along the boom. The field note records
"one Scotchlok tap en route" down the boom [F], and two photographs exist — one close-up, one wider —
but they show the same red + orange/black pair, the same single blue Scotchlok and the same grey 2-pin
connector against the same background, so they are most likely one tap shot twice, not two taps.

**Where on the machine.** *Control box site:* the platform control box, the box on the platform rail
the operator drives from [F]. PM figure 603.1 "Platform Control Box, View 1" covers it on PM pp.208-211
— lid 107798GT with its decal, membrane decal 106509GT, and the panel overlay 82841GT that must be
ordered with the membrane. Figure 604.1 covers the inside on PM pp.212-213 — the green membrane/LED
circuit board 62399GT (item 3), the box gasket 81488GT (item 5) and the PCON harness 94966GT (item A).
*Boom route:* from the platform box the wiring runs as three harness sections joined end to end — jib
composite harness 94962GT (item 10) along the jib, primary composite harness 94961GT (item 9) the
length of the primary boom, then secondary composite harness 94960GT (item 3, marked "J1") down the
secondary/riser boom into the ground control box (PM figure 308.1, pp.74-77). Those harnesses most
likely run inside the steel cable tracks [M]: jib boom cable track (PM fig 516.1, p.190), primary boom
cable track 61852GT, 27 links (PM fig 512.1, pp.172-173) and secondary boom cable track 236168GT, 57
links, in tray 217431GT for serial 1854 and up (PM fig 507.1, pp.152-153). Open the tray covers to
look for taps. The primary boom angle sensor connector J114 is at the primary boom pivot — parts
figure 511.2 "(from SN 1854)", PM pp.168-171, which is the right serial group for this machine; figure
511.1 on PM pp.166-167 is the older "to SN 1853" version and does not apply. *Turntable site:* the
turntable is the rotating deck the boom is bolted to. The SCON sits on the hydraulic tank side: part
1258463GT, item 22 of PM figure 304.1, PM pp.54-55; the Limit Switch Legend drawing on SM p.201 also
shows the SCON (item 16) on the turntable. A separate lower limit switch harness 226496GT (item 6,
fitted from serial 1419 to 2000) runs from the ground control box to the SCON and on to switches
LSS1RO, LSS1RS and sensor RSS1AO.

**How to find it.** *Control box:* stand in the platform with the machine stowed on the ground — you
do not need to raise anything. Undo the lid fasteners, lift the lid with its rubber membrane keypad,
and look inside for a small black toggle switch that is obviously not Genie: white wires on flat
push-on blade terminals, no rubber boot. Follow each white wire and write down where it ends. The
field photograph shows one white wire running to a blue butt splice, then on as a red wire to a small
black block with a red bar on its face near the green circuit board; a joystick with a rubber boot and
a grey multi-pin Deutsch plug is alongside. Another white wire leaves the box and heads down the boom.
*Turntable:* stand on the ground at the turntable, under the stowed boom, beside the hydraulic hoses
and the grey corrugated plastic loom. Look for the red + orange/black pair crossing a horizontal blue
frame member with a blue Scotchlok clamped on it and a white wire running into it. Follow that pair to
a grey 2-pin Deutsch connector that is unplugged, wires beyond it cut off and frayed. A cardboard
carton printed "TILT SENSOR", "DEGREES" and "PCON" lies on the casting below. *Boom:* walk the stowed
boom from the platform end back to the primary pivot, open the cable-track tray covers and look along
the whole length for any further white wire, Scotchlok, butt splice or tape.

**What it looks like.** A blue Scotchlok is a small blue plastic clip with a fold-over lid and a metal
blade inside. The factory wire runs straight through one channel and the added wire dead-ends in the
other; closing the lid drives the blade through both insulations. Genie's own repair parts for these
harnesses are crimped Deutsch pin terminals, part 73713GT — the manuals nowhere list a clip-on tap, so
a Scotchlok here is very likely not factory work [M]. The factory wire under each joint carries
printing along its jacket in the form PREFIX-NUMBER-SUFFIX-COLOUR, for example P109ANG-GR/WH or
C64LS-OR/BK. The added wire's own jacket is printed "16 GAUGE".

**Cite.** PM figs 308.1 (pp.74-77), 507.1, 511.2, 512.1, 516.1, 603.1, 604.1, 605.1, 304.1; SM p.27,
p.99, p.201, p.203; OM p.64; photos 2026-09-12-*.jpg.

#### Set the machine to

- **Key:** both keys OFF and pulled out. The turntable control box has two key switches — the main one
  at the top for ground/platform, and the Bypass/Recovery one at the bottom (on the lower right from
  serial Z13512-1712). Take out both keys. **Do not turn the Bypass or Recovery key at all.** SM p.99:
  "Bypass and Recovery modes are only intended for certain circumstances and are not part of normal
  machine operation… Contact trained personnel immediately." Bypass is for an out-of-level platform and
  for calibrating certain parameters; Recovery is a last-resort way to lower a platform in an
  emergency. Neither belongs in this card.
- **E-stops:** both red E-stops pushed IN before you touch any connector, tap or splice (SM p.27).
- **Engine:** OFF. Do not start it at any point.
- **Battery:** leave the battery connected while you only look at wires, read printing and photograph.
  **Disconnect the battery negative (-) cable before any resistance (ohms) test** between a tap and a
  connector pin. Reconnect only after both meter leads are off the machine.
- **Other:** firm level ground, wheels chocked, boom stowed, axles still RETRACTED at 8 ft 1 in (OM
  p.64). With the axles retracted the boom functions are locked out by design — "Prevents boom
  functions with the axles retracted" (SM p.203) — so nothing should move, but still treat every wire
  as live until both E-stops are in. Take off rings and watches (SM p.27 electrocution/burn warning).

#### Connector and wires

**HOW TO READ A GENIE WIRE NAME (SM p.192).** "Circuit numbers consist of three parts: the circuit
prefix, circuit number and circuit suffix." The first letter is the type: C = Control, D = Data, E =
Engine, G = Gauges, N = Neutral, P = Power, R = Relay Output, S = Safety, V = Valve. The number is the
circuit — the manual warns "The circuit number may be used more than once in a circuit". The letters
after the number are a mnemonic: ANG = Angle, PBS = Primary Boom Angle Sensor, SBS = Sec Boom Angle
Sensor, CAL = Calibrate, LDS = Load Sensor, PTS = Platform Tilt Sensor, TTS = Turntable Tilt Sensor,
TAY = Tilt Alarm Y axis, FTS = Foot switch Signal, HRN = Horn, LS = Limit Switch, GND = Ground, SP =
Spare, PLL = Propel Lockout, AXE = Axle Extend Valve, AXR = Axle Retract Valve, DCN = Drive Chassis
Controller, EDC = Electrical Displacement Control, PSE = Program Setup Enable, PCE = Pressure Comp
Enable. After the dash comes the colour: WH White, BK Black, RD Red, GR Green, BL Blue, OR Orange, BR
Brown, YL Yellow; a slash means a stripe. Worked example from the manual: "V61AXR — V stands for valve
power. Number 61 stands for axle retracted circuit; AXR stands for Axle retracted."

**NOTE ON THE STOP-LIST TABLE BELOW:** the first column is the CIRCUIT NUMBER off the wire print, not
a connector cavity number. The two are different things and this card uses both. "Harness colour" is
the colour the generic Wire Color Legend (SM pp.196-200) gives for that circuit number; "pin-legend
colour" is the colour actually printed in this machine's own pin legends or on ES0366J. **Where the
two disagree, the print on the wire and the pin legend win.** Known disagreements on this machine:
circuit 23 (table WH, legend P23PCON-BK), circuit 52 (table BL/RD, legend P52PCON-WH), circuit 124
(table RD/WH, legend C124SBS-OR/BK) and circuit 132 (table GR, legend S132LDS-BL/WH).

**THE STOP-LIST.**

| Circuit | Wire name | Harness colour | Pin-legend colour | What it is | Goes to | Verdict |
|---|---|---|---|---|---|---|
| 56 | S56PRV-RD / P56PRV-RD/WH / C56FTS-RD | RD | RD (S56PRV); RD/WH (P56PRV); RD (C56FTS, foot switch signal) | "Foot switch/TCON estop power" — the E-stop and foot-switch power chain every controller watches | TCON J11-6, J12-5; SCON J121-9, J122-11; PCON J21-4, J21-7, J22-17; DCON J31-5 | **STOP** — a tap here defeats the E-stop or foot-switch chain |
| 64 | C64LS-OR/BK | OR/BK | OR/BK | "Power for operational switches" — the SUPPLY fed OUT to the limit switches. Not a return path, and the foot switch is not on it. Each switch answers on its own wire (C70PBR-BL/WH, C71PBE-BL/BK, C143DEL-BL/RD, C144DER-BL/WH). | TCON J12-13, J12-18; PCON J22-16 ("LIMIT SWITCH PWR"); out to LSP1RO J44, LSP1EO J45, LST1O J124, LST2O J125 and the low fuel switch | **STOP** — a tap can put power where a switch should be deciding |
| 60 | C60AXE-GR/WH (also C60FAP, C60RAP) | GR/WH | GR/WH | "Axle extend"; suffix AXE = Axle Extend Valve. Lands on the SCON, so the safety computer watches it. | SCON J122-4 ("AXLE EXTENDED"); DCON J31-20, J31-21 | **STOP** |
| 61 | C61AXR-GR (C61AXRT-GR at the DCON) | GR | GR | "Axle retract"; suffix AXR = Axle Retract Valve. Lands on both the SCON and the main computer. | SCON J122-12; TCON J12-10; DCON J31-6 | **STOP** |
| 77 | no wire numbered 77 exists on this machine | WH | n/a | "Lower Angle #1 operational" — in the generic table but likely not used on the Z-135/70 [M] | not present in the SM pp.208-210 pin legends | **STOP** if ever found |
| 83 | no wire numbered 83 exists on this machine | GR/WH | n/a | "Tilt signal X axis" — likely not used [M]; turntable tilt sensing is inside the SCON, and the only separate tilt sensor is the platform one (circuits 84, 85, 87) | not present | **STOP** if ever found |
| 84 | C84TAY-GR/BK | GR/BK | GR/BK | "Tilt signal Y axis"; TAY = Tilt Alarm Y axis. The platform tilt sensor's Y signal. The platform tilt sensor cuts boom and platform-level functions at ±10 degrees. | PCON J22-20 | **STOP** |
| 85 (with its safety twin 87) | P85PTS-GR power, P85RET-BR return; safety half P87PTS-RD and P87RET-BR | GR | GR / BR / RD / BR | "Tilt sensor power"; PTS = Platform Tilt Sensor. Circuit 87 is the second, independent safety supply and return. Sheet labels: "PL TILT SNSR PWR", "PL TILT SNSR GND", "SAFE PL TILT PWR", "SAFE PL TILT GND". | PCON J22-21 and J22-19; J22-23 and J22-22 | **STOP** |
| 94 (and 132, the load wire actually used) | no wire numbered 94; the load wire is S132LDS-BL/WH | WH for 94; table says GR for 132 | BL/WH for S132LDS ("LOAD SENSE") | 94 = "Load Sensor"; 132 = "Platform Load Input" — the load cell circuit, which decides whether the platform is overloaded | SCON J121-1 | **STOP** |
| 109 | P109ANG-GR/WH (P109JBS-GR/WH at the jib sensor) | GR/WH | GR/WH | "Sensor Power" — the 5 V supply feeding BOTH boom angle sensors from one pair of computer pins | TCON J12-26; DCON J32-20; PCON J22-30; on to J114 pins 1/6 and J154 pins 1/6 | **STOP** — a tap here loads or shorts the shared 5 V and can produce exactly the "shorted / 0 V" and crosscheck faults now showing |
| 110 | P110RT-BK / P110JBS-BK; the boom angle sensors' own ground is printed SNSR GND-BR | BK | BK; SNSR GND-BR | "Sensor Return" — the sensor ground. One ground is shared between both boom angle sensors. | DCON J32-19; PCON J22-31; TCON J12-25 | **STOP.** Related field finding: a long green wire outside the loom from J114 to a pink butt splice at a bolt on the pivot bracket [F]. Why someone added it is not known [M] — do not assume it was a ground repair. |
| 123 | C123PBS-RD/BK | RD/BK | RD/BK | "Primary Boom Angle Signal Operational" — the working copy of the primary boom angle read by the TCON | TCON J12-32, from J114 pin 4 | **STOP** |
| 124 | C124SBS-OR/BK | RD/WH (generic table) | OR/BK (pin legend and schematic) | "Secondary Boom Angle Signal Operational" | TCON J12-33, from J154 pin 4 | **STOP** |
| 141 | C141PBS-RD | RD | RD | "Primary Boom Angle Signal Safety" — the SECOND, independent copy read by the safety controller. If 141 were ever bridged to 123 the two computers would read one signal instead of two, destroying the crosscheck. | SCON J122-3, from J114 pin 3 | **STOP** |
| 142 | C142SBS-OR | OR | OR | "Secondary Boom Angle Signal Safety" | SCON J122-2, from J154 pin 3 | **STOP** |
| 145 | C145CAL-RD/WH | RD/WH | RD/WH ("CALIBRATION IN") | "Calibrate" — the line that puts the machine into calibration | TCON J11-11; SCON J121-4 | **STOP** — a toggle here is a home-made calibration switch |
| 137 | S137PLL-RD/WH | RD/WH | RD/WH | "Drive Power (P_38)"; PLL = Propel Lockout. The SCON's switched drive power output — the very output the crosscheck faults are switching off. | SCON J121-10; TCON J13-17 | **STOP** — a tap here is an attempt to get drive back around the safety controller |
| 30 | C30EDC-WH | WH | WH | "Forward/EDC-A". EDC = Electrical Displacement Control — the electrical command telling the drive pump how hard and which way to push oil. | TCON J13-10 | **STOP** — a switch here could stroke the drive pump |
| 4 | V04TRL-WH | WH | WH | "Turntable rotate left valve driver" | TCON J14-25 | **STOP** — a switch here could swing the turntable |
| 21 | C21IGN-WH (engine side); P21DCON-WH (controller supply) | WH | WH | "12V DC ignition supply". Two different wires carry this number. C21IGN is the engine ignition feed; **P21DCON is the 12 V supply that runs the DCON AND the SCON** — so a white wire printed P21DCON found at the turntable is a module power feed, not an ignition wire. | C21IGN: TCON J13-3. P21DCON: TCON J12-2, SCON J122-1, DCON J31-2 | **STOP** for either |
| 46 | C46HN-WH / C46HRN-WH | WH | WH | "Horn" — the only harmless answer a white wire can give | TCON J11-3, J13-7; PCON J21-16 | **Harmless.** Still remove the tap and repair the wire properly, but the diagnosis can carry on. |
| 23 | P23PCON-BK | WH (generic table) | BK (pin legend) | "Power to platform" — the platform controller's supply | TCON J11-5; PCON J21-23 | Stolen power — remove and repair before operating |
| 52 | P52PCON-WH | BL/RD ("Auxiliary Platform") | WH | a platform controller supply | TCON J11-2; PCON J21-2 | Stolen power — remove and repair before operating |
| 98 / 174 / 184 / 185 / 197 | remaining plain-white rows | WH | none of these appear in this machine's pin legends | 98 "J1708 + (high)" is a data line; 174 "Key Switch Power, Ground Position"; **184 "Program setup Enable"**; 185 "Encode A"; 197 "Hour Meter" | see the colour legend | 184 = **STOP**. The others: remove and repair before operating. |
| J24-18 | SPARE-WH | WH | WH | The Genie kit's own white "SPARE #1" wire — it stays inside the platform box and lands on the toggle board. It never runs down the boom, so it cannot explain a white wire reaching the turntable. | J24 cavity 18 on board 232975GT, part of kit 237225GT | Useful only to rule that idea out |

If the cut 2-pin stub at the turntable turns out to be a harness-to-harness joint, the candidates in
the legend are J146 (lower limit switch harness to engine harness), J149 (boom composite), J153
(engine and manifold harness) and J157 (PCON manifold to boom composite harness) — J153 is an
engine/manifold joint, not a boom one, so do not assume.

#### Do this

1. **Shut the machine down.** Both key switches off, both keys out — the main one at the top of the
   ground control box and the Bypass/Recovery one at the bottom. Both red E-stops IN, one at the ground
   control box and one in the platform. Engine off. Wheels chocked, boom stowed. Take off rings and
   watches.
2. **Before touching anything, photograph** every tap, splice and cut wire end from two angles with a
   tape measure or ruler in the shot, and photograph enough of the surroundings in each frame to prove
   WHERE on the machine you were standing. This is evidence of what a previous person did. Do not cut
   or pull anything yet.
3. **Control box:** stand in the platform with the machine stowed at ground level. Undo the lid
   fasteners and lift the lid with its rubber keypad. Find the black mains-rated toggle. Look at its
   terminal end: two rows of three flat blades, three white wires on one row, three bare blades on the
   other. Note which row is wired, and note that a six-terminal switch can be switching two circuits at
   once. Count and trace each white wire to its end and write down what each one lands on.
4. **At each joint, get at the printing on the FACTORY wire.** At a Scotchlok, the factory wire is the
   one running straight through; the added white wire dead-ends in the other channel. At the butt
   splice in the box, it is the wire on the far side of the splice. Wipe the jacket, slide the loom
   back, and turn the wire until you can read the print. Read it as PREFIX - NUMBER - SUFFIX - COLOUR.
5. **Decode the name.** First letter = type. The number = the circuit. The letters after it = the
   mnemonic. The part after the dash = the colour, "/" meaning a stripe. Then check the colour you read
   against the colour of the jacket in your hand.
6. **Compare the circuit number against the stop-list above.** Any of 56, 64, 60, 61, 77, 83, 84, 85,
   87, 94, 132, 109, 110, 123, 124, 141, 142, 145, 137, 30, 4, 21 or 184 = **STOP**. 46 (horn) =
   harmless. 23 or 52 = stolen power; remove before operating.
7. **If the print is unreadable, identify the wire by its plug instead.** Follow the tapped wire to the
   nearest Deutsch connector, read the connector number if it is tagged, count the cavity position, and
   look it up in the Circuit Connector Legend (SM pp.205-207) and the pin legends (SM pp.208-210).
   Deutsch connectors usually carry small moulded cavity numbers on the face [M], but on small shells
   only one or two may be marked, so count from the keyway rather than trusting the numbers.
8. **Confirm with the meter.** Disconnect the battery negative (-) cable first. Meter on ohms, or
   continuity with the beeper. One probe on the metal blade of the Scotchlok (or on bare conductor
   right beside the joint), the other on the connector cavity you suspect, with that connector
   unplugged. Less than 1 ohm, or a steady beep, means it is the same wire. Anything higher, or "OL"
   (over limit — no connection at all), means you guessed wrong; try the next candidate. Reconnect the
   battery only once both probes are off the machine.
9. **Turntable joint:** stand on the ground at the turntable, under the stowed boom. Find the red +
   orange/black pair with the blue Scotchlok and the white wire, running to the unplugged grey 2-pin
   Deutsch connector whose far end is cut and frayed. Read the print on BOTH the red and the
   orange/black wire. Write down which of the two the Scotchlok blade actually bites into — the
   photograph suggests the orange/black one, but confirm it by eye. Write down the full label on the
   tilt-sensor carton, including any part number. **Do not fit anything out of that carton.**
10. **Boom:** walk the stowed boom from the platform end to the primary pivot. Open the cable-track
    tray covers and look along the whole length for any further white wire, Scotchlok, butt splice or
    tape. Be aware that the two existing photographs of "the boom tap" and "the turntable tap" look like
    the same joint shot twice, so a separate boom tap has NOT yet been proved — you are looking to
    either find it or rule it out. Check especially around J114 at the primary pivot, where two more
    Scotchloks with a green jumper and a loose pin terminal were already found — those are card C's job;
    only photograph them here.
11. **In the control box**, read the print on the red wire that joins the white wire at the blue butt
    splice, and on the wires at the small black block with the red bar. A red wire printed with 56
    (S56PRV, P56PRV or C56FTS) is the E-stop and foot-switch chain: **STOP**. What that black block
    actually is has not been established [M] — identify it by the wire print or by the parts list for
    figures 603.1 and 604.1 before drawing any conclusion.
12. **Write a table:** site, tapped wire name exactly as printed, colour you saw, circuit number,
    decoded function, verdict (STOP / harmless / stolen power). Photograph the table page.
13. **Verdict:** if ANY joint is on a stop-list circuit, tag the machine out of service, keep both keys
    out, and do not operate it until the tap is removed and the wire repaired with a proper sealed joint
    — never another Scotchlok. That removal and repair is the next card; do not start it here without
    the photographs and table from steps 2 and 12.
14. If every joint turns out to be on the horn circuit only, note it, still plan the removal, and carry
    on to card C (the J114 circuit).

#### You should see

| Measurement | Expected | If OK it means | If not it means | Cite |
|---|---|---|---|---|
| The printing on the factory wire under each joint, read by eye | A readable name PREFIX-NUMBER-SUFFIX-COLOUR, e.g. C64LS-OR/BK, P109ANG-GR/WH, S56PRV-RD, C145CAL-RD/WH or C46HN-WH. The colour letters should match the jacket in your hand. | Decode it, place it on the stop-list, write it in the table. | If unreadable, identify by plug and cavity (step 7) and confirm by resistance (step 8). If the printed colour does not match the jacket, that is a known error in the generic colour table — confirmed disagreements on this machine are circuits 23, 52, 124 and 132. Trust the print on the wire and the pin legend. | SM p.192; SM pp.196-200; SM pp.208-210 |
| Resistance, battery negative disconnected, between the Scotchlok blade (or bare conductor beside it) and the suspected connector cavity, that connector unplugged | Less than 1 ohm with the beeper sounding, to exactly ONE cavity; open circuit (OL) to every other cavity | The tap is confirmed on that circuit. Apply the stop-list verdict. | More than a few ohms or OL everywhere: wrong candidate. Try the other wires in the same plug, then the plug at the other end of that harness section. **If you get continuity to TWO cavities, the tap or a splice is bridging two circuits — STOP;** that is either a short or a defeat of the two-computer crosscheck. | SM p.210 J12 cavities 25, 26, 32, 33; SM p.209; SM p.208 |
| Stop-list comparison of the decoded circuit number | Circuit 46 (horn) is the only harmless answer. | Horn: note it, plan the removal, carry on to card C. | Any stop-list number: **STOP.** Tag the machine out of service. Removal and a proper repair must come before any function test. If the number is 109 or 110, or 123/124/141/142, the toggle is very likely part of the cause of the boom-angle crosscheck and "shorted / 0 V" faults, because the 5 V supply and the sensor ground are shared between J114 and J154. | SM p.198; SM p.199; SM p.189; SM p.177; figs es-j114-primary-sensor.png, es-j154-secondary-sensor.png |
| How far the Wire Color Legend runs — does it reach circuit 155? | Yes. The table runs 1 to 199, then 226 to 228, then a brown "Ground or Return" row. Row 155 reads OR/RD, "Pressure Comp. Enable". The TCON pin legend calls the same wire V155PCE-OR/RD at J14-34; ES0366J prints V155PSE-OR/RD beside "Y74 FUNCTION ENABLE VALVE (J166)". | If a white wire is found spliced near the function enable valve, use 155 = OR/RD. "The function enable valve is mounted behind the medium pressure filter" (SM p.135). | n/a | SM p.199; SM p.200; SM p.210; SM p.135; SM p.229 |
| Where the turntable tilt sensing actually lives, so you can judge the "TILT SENSOR" carton | On this machine the turntable tilt sensing is built INSIDE the safety controller module (SM p.203). The only separate tilt sensor in the whole parts book is the platform one, 50813GT "SENSOR,TILT,PCON (PLASTIC)", wired on circuits 84, 85 and 87 into the platform controller. | A carton marked "TILT SENSOR … PCON" lying at the turntable is most likely a PLATFORM tilt sensor bought for the platform [M], not a turntable part. It does not belong at the safety controller. | Write down the carton's printed part number before concluding anything and check it against the parts manual. If the number is not 50813GT, do not assume what it is. | SM p.203; PM p.199 item 8; SM p.208 J22 cavities 19-23 |

#### Why we are doing this

The printed name tells you exactly what the home-made toggle switch was doing. If it sits on the horn
circuit it is only a nuisance to remove. If it sits on any safety or sensor circuit — the E-stop and
foot-switch power, the power feed to the limit switches, the 5 volt sensor supply, a boom angle
signal, a tilt sensor, the load sensor, an axle input, the calibrate line or the drive power — then the
machine must not be operated until the tap is removed and the wire repaired, and the finding changes
what you measure next at J114. This card is where you learn whether the toggle is part of the cause of
the seven live fault codes or a separate piece of bad work.

#### Safety

- Both keys OFF and out, and both red E-stops pushed IN, before you unplug any connector or touch any
  tap or splice (SM p.27).
- Disconnect the battery negative (-) cable before every resistance reading. Reconnect only after both
  meter leads are off the machine.
- "Contact with electrically charged circuits could result in death or serious injury. Remove all
  rings, watches and other jewelry." (SM p.27).
- Machine on firm level ground, wheels chocked, boom stowed. Do not raise or operate a machine carrying
  boom angle crosscheck faults.
- **Never add, jumper or defeat a safety circuit, limit switch, angle sensor, tilt sensor or load cell.
  This card only finds and records the existing bad work; it exists to REMOVE a bypass, never to add
  one. Do not re-make any joint with a Scotchlok.**
- Do not turn the Bypass or Recovery key, and do not fit any calibration jumper or toggle. Bypass is
  for an out-of-level platform and for calibrating certain parameters; Recovery is a last-resort
  emergency lowering. Neither belongs in this card.
- **Do not cut the white wire or the factory wire yet.** Cutting before the circuit is identified
  destroys the evidence of what was bridged.
- Do not swap the platform circuit board while you are in the box: "When the platform circuit board is
  replaced, jib bellcrank and platform level will need to be calibrated." (SM p.27).
- If any joint lands on a stop-list circuit, tag the machine out of service and keep both keys out
  until the repair card is finished.

#### Sources

- [V] "Circuit numbers consist of three parts: the circuit prefix, circuit number and circuit suffix." — SM p.192 (13825-13826); prefix meanings (13859-13877); worked example V61AXR (13852-13854); "The circuit number may be used more than once in a circuit." (13835-13836)
- [V] Suffix meanings ANG, AXE, AXR, CAL, DE, EDC, FTS, GND, HRN, LDS, LS, PBS, PCE, PLL, PSE, PTS, SBS, SP, TAY, TTS — SM pp.193-195
- [V] "DCN Drive Chassis Controller" — SM p.193 (13936-13937)
- [V] "The turntable control box (TCON) is the communication and operations center for the machine." — SM p.99 (7569-7571)
- [V] Pin-legend page titles confirm the plain-words names: "Plat Controller", "Drive Chassis", "Safety Controller Pin Legend", "Turntable Controller Pin Legend" — SM pp.208-210
- [V] Colour abbreviations, slash = stripe — SM p.196 (14275-14318)
- [V] "P38 / Propel (drive) valves" — SM p.196 (14332-14333)
- [V] Wire Color Legend occupies SM pp.196-200 (14252-14931)
- [V] Stop-list colour/function rows for circuits 4, 21, 23, 30, 46, 52, 56, 60, 61, 64, 77, 83, 84, 85, 94, 98, 109, 110 — SM pp.197-198
- [V] Rows 123, 124, 132, 137, 141, 142, 145, 155, 174, 184, 185, 197 — SM pp.199-200
- [V] Legend ends with rows 226-228 and a brown "Ground or Return" row, so it does cover circuit 155 — SM p.200 (15049-15062)
- [V] All plain-white rows are circuits 4, 21, 23, 30, 46, 77, 94, 98, 174, 184, 185, 197 — twelve rows, no others — SM pp.197-200
- [V] No wire named with circuit 77, 83 or 94 exists anywhere in the Service Manual — whole-file regex search, zero matches
- [V] TCON J12 cavities 2, 5, 10, 13, 15, 18, 25, 26, 28, 32, 33 — SM p.210 (16129-16192)
- [V] TCON J11 cavities 2, 3, 5, 6, 7, 11; J13 cavities 3, 7, 10, 17; J14 cavities 25, 34 — SM p.210 (16064-16315)
- [V] SCON J121 cavities 1, 4, 9, 10, 12; J122 cavities 1, 2, 3, 4, 11, 12 — SM p.209 (15987-16042)
- [V] PCON J21 cavities 2, 4, 7, 16, 23; J22 cavities 16, 17, 19, 20, 21, 22, 23, 30, 31 — SM p.208 (15754-15865)
- [V] DCON J31 cavities 2, 5, 6, 20, 21; J32 cavities 19, 20 — SM p.208 (15912-15965)
- [V] The foot switch signal is on circuit 56 (C56FTS-RD at PCON J22-17), not circuit 64 — SM p.208 (15836-15837)
- [V] Circuit 64 is a power FEED: ES0366J labels PCON cavity 22-16 "LIMIT SWITCH PWR" — SM p.229 (17075)
- [V] Limit switches answer on their own wires; the drive-enable pairing is LST1O (right, J124) with C144DER-BL/WH and LST2O (left, J125) with C143DEL-BL/RD — figs/es-scon-boomsensors.png cross-checked with SM p.210 (16155-16156, 16181-16182)
- [V] Circuit 21 also carries P21DCON-WH, the 12 V module supply, at TCON J12-2, SCON J122-1 and DCON J31-2 — SM pp.209-210
- [V] Connector descriptions J20, J21, J22, J23, J24, J46, J49, J55, J114, J121, J122, J124, J125, J126, J154 — SM pp.205-207
- [V] 2-pin harness-to-harness candidates J146, J149, J153, J157 — SM p.207 (15646-15689)
- [V] Turntable tilt sensing is inside the SCON; the platform tilt sensor cuts out at ±10 degrees — SM p.203 (15308-15320)
- [V] LSFA1ES / LSRA1ES prevent boom functions with the axles retracted — SM p.203 (15322-15329)
- [V] "Width, axles retracted / 8 ft 1 in / 2.5 m" — OM p.64 (3967-3970)
- [V] ES0366J shows a "PLATFORM TILT SENSOR ASSEMBLY" on C84TAY-GR/BK, P85PTS-GR, P85RET-BR, P87PTS-RD, P87RET-BR — SM p.229 (17117-17127, 17444-17446)
- [V] SCON fault matrix: primary crosscheck OFF on P_38, P_39, P_10, P_11, P_30; secondary OFF on P_38, P_39, P_11, P_30; P_38 is propel — SM p.189 (13630, 13654-13667)
- [V] "Safety Switch P22 … Check for wiring damage on circuit P56PRV (red/white)." — SM p.175 (12398-12403)
- [V] "Value at 0 V … Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board." — SM p.177 (12591-12598)
- [V] The turntable control box has TWO key switches; Recovery is an emergency-lowering mode, NOT a calibration mode — SM p.99 (7569-7590)
- [V] "The bypass/recovery key switch is located on the lower right side of the control box from serial number Z13512-1712." — SM p.99 (7593-7597)
- [V] E-stops IN at both stations; jewellery off; "When the platform circuit board is replaced, jib bellcrank and platform level will need to be calibrated." — SM p.27 (2533-2547)
- [V] "The function enable valve is mounted behind the medium pressure filter." — SM p.135 (10018)
- [V] Manual conflict: J166 is listed as the 6-pin jib bellcrank sensor connector while ES0366J labels the function enable valve coil "Y74 FUNCTION ENABLE VALVE (J166)" — SM p.207 (15708-15710); SM p.229 (18598-18599)
- [V] SM p.201 Limit Switch Legend places SCON (16) on the turntable, LSS1RS/LSS1RO/RSS1AO/RSS1AS (7-10) at the secondary boom pivot area, RSP1AO/RSP1AS (1-2) at the primary boom, Plat Angle Sensor (14) and PCON (15) at the platform — figs/sm201-limitswitch-legend.png
- [V] J114 wiring on ES0366J, UNIT #130+ variant — figs/es-j114-primary-sensor.png
- [V] J154 wiring — figs/es-j154-secondary-sensor.png
- [V] 5 V supply and sensor ground are shared between J114 and J154 from one pair of TCON cavities — figs/es-boom-sensors-wide.png with SM p.210 (16175-16178)
- [V] The Genie toggle kit's SPARE-WH sits at J24 cavity 18 and stays inside the kit boundary — figs/es-toggle-switch-aftermarket-kit.png
- [V] PM fig 308.1 harness routing and part numbers 94960GT, 226496GT, 119792GT, 94961GT, 94962GT, 94963GT — PM pp.74-77 (3767-3881)
- [V] PM fig 308.1 item 14 is 94966GT only "to SN 439"; from SN 440 it is 119674GT. (94966GT still applies, unrestricted, as item A of fig 604.1 inside the platform box.) — PM p.77 (3882-3893); PM p.213 (10714-10716)
- [V] Fig 511.2 "(from SN 1854)" runs PM pp.168-171; 511.1 "(to SN 1853)" is pp.166-167 — PM (8494-8750)
- [V] Cable tracks: secondary 236168GT 57 links in tray 217431GT (fig 507.1, pp.152-153); primary 61852GT 27 links (fig 512.1, pp.172-173); jib (fig 516.1, p.190) — PM (7902-9635)
- [M] That the boom wiring physically runs INSIDE those cable tracks is inference from the figure titles and the harness diagram; the manuals never say it
- [V] Platform control box figures: 603.1 runs PM pp.208-211; 604.1 pp.212-213; 605.1 pp.214-216 — PM (10525-10771)
- [V] Fig 603.1 (PM p.209) carries lid 107798GT, membrane decal 106509GT, panel overlay 82841GT "required when replacing membrane 106509"; fig 604.1 (PM p.213) carries PCON harness 94966GT, membrane/LED board 62399GT, gasket 81488GT — PM (10564-10732)
- [V] Genie's platform-level toggle is 128200GT, listed as including a boot; the boot 27246GT is a separate line "Part of toggle switch 128200". The manual never calls it "sealed". — PM p.211 (10677-10680), PM p.215 (10805-10808)
- [V] Toggle Switch Lid Option kit 237225GT is the ANSI kit for SN 779 to 2000 — PM p.215 (10787-10903)
- [V] Genie's harness repair terminal is a crimped Deutsch pin, 73713GT — PM p.169 (3350-3351)
- [M] That factory joints are Deutsch pins and NEVER clip-on taps is inference from the parts book; no manual sentence says Genie does not use Scotchloks
- [V] SCON on this machine is 1258463GT (from SN 1712), item 22 of fig 304.1; the machine must be fully recalibrated if it is replaced — PM p.55 (2784-2787)
- [V] The only separate tilt sensor in the whole parts book is the platform one, 50813GT — PM p.199 (10053-10055)
- [V] Original dual-output sensor 94980GT no longer available; first replacement kit 217246GT; fig 511.2 lists 216061GT with a matched magnet and calibration required — PM p.77 (3954-3958), PM p.169 (8691-8695)
- [F] PHOTO, CORRECTED: the toggle has TWO ROWS OF THREE spade terminals, six in all, only three wired, on white wire printed "16 GAU" — photos/2026-09-12-aftermarket-toggle-terminals.jpg
- [F] PHOTO: body stamped "10A 250VAC / 15A 125VAC / 3/4HP 125-250VAC / MEXICO / 9614" with a UL mark — photos/2026-09-12-aftermarket-toggle-ac-rating.jpg
- [F] PHOTO: inside the box the white wire joins a BLUE BUTT SPLICE — not a Scotchlok — then continues as a red wire to a small black block with a red bar — photos/2026-09-12-white-wire-to-toggle-in-box.jpg
- [F] PHOTOS, CORRECTED: the "boom tap" and "turntable tap" photographs show one red + orange/black pair, ONE blue Scotchlok, one white wire and one GREY 2-pin Deutsch connector with frayed cut wires beyond it, against the same background. Nothing in either frame shows a boom section, cable track or tray. — photos/2026-09-12-white-wire-scotchlok-boom.jpg and -white-wire-turntable-tilt-sensor-box.jpg
- [F] "one Scotchlok tap en route" down the boom — case README (field observation, not independently confirmed by the photographs)
- [M] The black block with the red bar in the control box is most likely a push-button contact block, but nothing identifies it
- [M] The carton at the turntable is likely a platform (PCON) tilt sensor 50813GT, not a turntable part; whether it was ever fitted is unknown
- [M] If the Scotchlok is on the orange/black wire and its print reads C64LS, the toggle taps circuit 64 — the print has not been read, so this is still a guess
- [F] Machine: Z13513-1861, 2013, 2162.4 hours, parts group from SN 1854; seven live codes; propel dead; axles retracted — case README
- [F] At the J114 pivot: two blue Scotchloks with a green jumper, a loose pin terminal outside a DT04-6P half, and a long green wire to a pink butt splice — case README
- [M] Why the green wire was added is unknown — the case file lists three competing hypotheses
- [M] Deutsch cavity numbers are usually moulded into the connector face, but on small shells only one or two may be marked — general connector practice, not in the manuals

---

### B5 — Find and test the function enable valve (Y74)

**(from card `b5-y74`)**

#### Where it is

**Component.** The function enable valve — the one small electric valve (solenoid valve) that lets the
lift pump build oil pressure for every boom, steer and axle function. Its electric coil is called Y74
on the wiring sheet; on the hydraulic drawings the valve is schematic item A. Parts: the whole block is
106454GT VALVE,FUNCTION ENABLE (item 2 of PM figure 707.1); the screw-in cartridge with its coil is
107742GT VALVE,SOLENOID 2 POS 2 WAY (item 1), and 106454GT includes it.

**Where on the machine.** On the turntable, inside the engine compartment, behind the medium pressure
filter. The Parts Manual files figure 303.1 "Engine Compartment Components" inside its section "300
Turntable Components", which is why the engine compartment counts as part of the turntable.

**How to find it.** Walk around the turntable until you find the compartment door with the battery
behind it. That compartment also holds the horn, the plate carrying the fuses and relays, and on
Cummins and Perkins machines the plastic coolant recovery bottle. **Which side of the turntable this
door is on is not stated in the manuals; find it by the battery, not by a side (field guidance).** Only
trained maintenance staff may open it. Inside, look for the medium pressure filter: an upright
cylindrical hydraulic filter canister on a steel bracket that also carries a hydraulic pressure test
point. ("Medium pressure" is just the manual's name for this filter; do not confuse it with the engine
oil filter, which is a different canister.) The Service Manual says the function enable valve is
mounted behind that filter. If you cannot find the filter, use the parts drawing instead: in PM figure
303.1 the valve (item 25) is drawn low in the compartment on its own small flat bracket plate, below
and to the right of the battery box and near the battery tray, held by a 1/4-20 x 2 inch hex-head screw
(4266GT), a flat washer (6638GT) and a nylock nut (6091GT — a nut with a nylon insert that stops it
working loose). The parts list does not print how many of each, so do not expect exactly one. Confirm
you have the right valve by two things: it is a single valve with only one coil, and its coil reads 3.5
to 5.5 ohms. **Do not identify it by a J-number on the sheet, and do not identify it by wire colour
alone: orange-with-a-red-stripe is used for two different circuits on this machine.**

**What it looks like.** A square aluminium block with one hydraulic port face showing, one cylindrical
screw-in cartridge standing up out of it, a finned coil slid over that cartridge, a hex nut on top
holding the coil down, and a moulded plastic plug on the side of the coil. The SM p.135 drawing and the
PM p.244 drawing both show the plug as a plain hollow shell with no pins drawn, so the number of pins
cannot be read from either drawing; the wiring sheet ES0366J is what shows the coil has two terminals,
numbered 1 and 2. No size or weight is printed anywhere, so judge it by shape, not by size. It is a
single small valve, not the big multi-valve function manifold.

**Cite.** SM p.135 section 8-7 and fig func-enable-valve.png; PM fig 303.1 (drawing p.46, list p.49);
PM fig 707.1 (drawing p.244, list p.245); medium pressure filter parts PM pp.95, 99, 109, 113 and
drawing pm112-perkins-1104c-engine-fig.png.

#### Set the machine to

- **Battery:** negative (minus) cable disconnected and taped back for the ohms readings (steps 1-9) and
  for the white-wire check (steps 13-14). Reconnect it only for the volts readings (steps 10-12). The
  battery is item 22 in the same engine compartment as the valve.
- **Engine:** OFF for this whole card. Do not start it. With the engine off the pumps cannot turn, so
  no hydraulic pressure can build and nothing can move.
- **E-stops:** both red E-stops pushed IN whenever a plug is pulled off or pushed on, and for every
  ohms reading. Pull both OUT only for the volts readings, with nobody at the platform controls, no
  button pressed, and nobody touching the added toggle switch.
- **Key:** OFF and pulled out for the ohms readings and the white-wire check. Key to the
  ground-controls position for the first volts reading, then to the platform position for the repeat.
  **Do not touch the bypass/recovery key switch at any point.**
- **Other:** firm level ground, wheels chocked, boom stowed, axles left exactly as found (retracted).
  The coil plug stays OFF the coil for both the ohms and the volts readings, and goes back on at the
  end. Photograph the plug and both wires before touching anything. **Do not operate the added toggle
  switch in the basket at any point in this card.**

#### Connector and wires

A two-terminal moulded plug on the side of the coil body. The wiring sheet numbers the coil terminals 1
and 2; terminal 1 is the feed side (wire V155PSE, orange with a red stripe) and terminal 2 is the
return side. The sheet draws only a plain two-terminal coil symbol, so it does not say what brand or
family of connector this is — do not assume it is a Deutsch.

**Warning about the number:** the sheet tags this plug "(J166)", but the connector legend says J166 is
the 6-pin Deutsch connector for the jib bellcrank sensor, and says J162 is the 3-pin Deutsch connector
for the jib bellcrank angle sensor. The same sheet also draws a second, 3-pin J166 (terminals 1 RD, 2
BK, 3 BL) over at the jib bellcrank sensor. **The manual uses J166 twice and contradicts its own
legend. Identify this plug by where it is — on the coil of the single valve behind the medium pressure
filter — not by the number.**

| Pin | Wire | Colour | What it is | Goes to | Cite |
|---|---|---|---|---|---|
| 1 | V155PSE-OR/RD on the schematic = V155PCE-OR/RD in the TCON pin legend | orange with a red stripe | Feed. Battery-level voltage here switches the coil on and lets the lift pump build pressure for all boom and steer/axle functions. Circuit 155, "Pressure Comp. Enable". The letters after the number are printed PSE on the sheet and PCE in the pin legend; the code legend makes PCE "Pressure Comp Enable" and PSE "Program Setup Enable". Same orange/red circuit-155 wire either way; treat PSE as a misprint on the sheet. | TCON connector J14 pin 34 — "White 35 pin AMP connector on TCON" (AMP, not Deutsch). Labelled "PRESS COMP ENABLE VLV / P14-34" on the sheet. On its way there the wire crosses J153, a 2-pin Deutsch joining the engine harness to the manifold harness. | ES0366J figs es-y74-coil.png, es-y74-coil-diode.png; SM p.210; SM p.199; SM p.194; SM p.207 |
| 2 | VLVRTN6-BR on the sheet at the valve = VLVRET6-BR in the pin legend at the controller | brown | Return side of the coil — the path the coil current takes back to the controller. | TCON J14 pin 30, labelled "VALVE_RTN6". On the sheet this return is shared with the Y75 welder/generator bypass valve coil, and lower down with the Y52 and Y53 turntable rotate valve coils. It is **NOT** shared with the bank of boom and secondary-boom valve coils: those return on a separate line, VLVRTN7-BR, to TCON J14 pin 27. | figs es-y74-return-vlvrtn6.png, es-return-bus-split.png, es-tcon-p14-27-30-valve-rtn.png; SM p.210 (16307) |
| J153 (a join; its own pin numbers are not printed) | V155PSE-OR/RD | orange/red on both sides | Pass-through. The feed crosses this two-pin join on its way from the TCON to the valve. If the feed is missing at the valve plug, this join is the first place to look. Its two pins carry the Y74 feed and the Y75 feed (V150HG-GR/BK). | TCON J14-34 on one side, Y74 coil terminal 1 on the other | SM p.207 (15682-15684); fig es-y74-coil.png |

#### Do this

1. **Set up.** Machine on firm, level ground, wheels chocked, boom stowed. Push both red E-stops IN,
   ground and basket. Turn the key OFF and pull it out. The engine stays off for this whole card.
2. **Open the engine compartment on the turntable** — the compartment with the battery, the horn, the
   fuse and relay plate and (on Cummins and Perkins machines) the plastic coolant recovery bottle. Only
   trained maintenance staff may open it.
3. **Disconnect the battery negative (minus) cable.** The battery is item 22 in that compartment. Tape
   the cable end so it cannot spring back onto the post.
4. **Find the medium pressure filter:** an upright cylindrical hydraulic filter canister on a steel
   bracket that also carries a hydraulic pressure test point. Look behind it for the function enable
   valve: a square aluminium block with one screw-in cartridge standing up, a finned coil with a hex
   nut on top, and a moulded plug on the side of the coil. It is a single valve with one coil, not the
   large multi-valve function manifold. If you cannot find the filter, use PM figure 303.1 and look low
   in the compartment, below and to the right of the battery box, for a small valve on its own flat
   bracket plate.
5. **Before touching anything, photograph the plug and the two wires going into it.** One wire should
   be orange with a red stripe. Follow both wires by eye as far as you can and note any added wire, any
   blue insulation-piercing tap (a Scotchlok), any butt splice, and any tape.
6. **Unplug the two-terminal plug from the coil:** press the latch and pull it straight off. Tag it so
   it goes back the same way round. The Service Manual's own coil test starts the same way: "Tag and
   disconnect the wiring from the coil to be tested."
7. **Measure the coil.** Meter on ohms, 200 ohm range or auto-range. One probe on each of the two metal
   terminals on the coil itself, not on the harness half of the plug. Hold the probes still and read.
   Then swap the probes over and read again, and **write down the higher of the two readings.** Reason:
   the sheet shows a small diode (a one-way electrical valve) wired across this coil, which can make one
   probe direction read low. This probe-swap step is practical advice, not a manual instruction — the
   manual just says to test the coil resistance. Note that not every coil on the sheet has a diode; the
   five proportional coils marked "P" are drawn without one.
8. **Compare with the specification:** 3.5 to 5.5 ohms at 68 °F / 20 °C. The manual allows plus or
   minus 30 percent, which gives a pass band of about 2.5 to 7.2 ohms (2.45 to 7.15 exactly — if you
   land between 7.15 and 7.2, call it a fail). Coil resistance moves about 4 percent for every 18 °F /
   10 °C the air is above or below 68 °F, so write down the air temperature next to the reading.
9. **Look into the harness half of the plug.** The socket the orange/red wire feeds is the feed socket;
   the other is the return socket. Mark which is which in your notes. **Identify them by tracing the
   wire, not by the colour alone:** orange/red is used for two different circuits on this machine.
10. **Reconnect the battery negative cable.** Leave the coil plug OFF the coil.
11. **Volts with nothing commanded, ground controls.** Key to the ground-controls position. Pull the
    ground E-stop OUT and the basket E-stop OUT. **Do not start the engine. Do not press any button.**
    Nobody stands at the platform controls, and nobody touches the added toggle switch. Meter on DC
    volts, 20 V range. Red probe into the feed (orange/red) socket of the harness plug, black probe into
    the return socket — read. Then move the black probe to the battery negative post and read again.
12. **Volts with nothing commanded, platform controls.** Key to the platform position, both E-stops
    still OUT, foot switch NOT pressed, no button pressed, toggle switch untouched. Take the same two
    readings as in step 11.
13. **Key OFF and out, both E-stops IN.** Disconnect the battery negative cable again and tape it.
14. **White-wire tie-in check.** Meter on ohms or continuity. One probe on the white wire. In the field
    photo the white wire is not a loose bare end: it is spliced into the harness through a blue
    insulation-piercing tap on the turntable, and its other end runs to the toggle switch in the basket.
    So probe whichever of these you can reach safely **without cutting anything:** the metal of the tap
    itself, a stripped point you were going to repair anyway, or the spade terminal in the basket that
    the white wire lands on. Put the other probe into the feed (orange/red) socket of the Y74 harness
    plug and read. Then move that probe to the return socket and read. A reading of a few ohms or less
    means the white wire is joined to that circuit.
15. **Push the coil plug back onto the coil until it clicks.** Reconnect the battery negative cable.
    Close and secure the compartment unless the next card needs it open.
16. **Write down:** coil ohms and the air temperature; volts at the ground-controls position
    (plug-to-plug and feed-to-battery-negative); volts at the platform position (same two); white-wire
    ohms to the feed socket and to the return socket; and what your photographs show, including how many
    terminals the basket toggle switch has and how many of them are wired.

#### You should see

| Measurement | Expected | If OK it means | If not it means | Cite |
|---|---|---|---|---|
| Coil resistance across the two coil terminals, plug off, battery negative disconnected | 3.5 to 5.5 ohms at 68 °F / 20 °C. Pass band about 2.5 to 7.2 ohms (3.5 × 0.7 = 2.45; 5.5 × 1.3 = 7.15 — this arithmetic is the card's, not printed in the manual). | The coil is electrically sound. This does not prove the valve actually moves oil; proving that needs the engine running and is not part of this card. | OL ("over limit" — no reading at all, the path is broken) or well above 7.15 ohms means the coil is open; replace solenoid valve 107742GT, or the whole 106454GT assembly. Near zero (0 to about 2 ohms) means the windings are shorted; replace it too. Before removing anything, note which socket the orange/red wire sits in so the new coil goes back the same way round. Do not loosen the cartridge just to test the coil. | SM p.150 (10773-10776, 10723-10728, 10731-10737); PM p.245 |
| DC volts at the harness half of the plug: feed socket to return socket, then feed socket to battery negative. Key at ground controls, both E-stops out, engine off, nothing pressed. | Likely 0 V — in practice anything under about 0.5 V — on both readings. **[M]: no manual states what this circuit should read with the engine off.** | Nothing on the ground-controls side is holding the master hydraulic enable on. | Near battery voltage (about 12 to 13 V) means the feed is live with nothing commanded. Either an added wire is feeding this circuit — go to the white-wire readings — or the TCON output at J14 pin 34 is stuck on. **Do not run any hydraulic function until the source is found.** The added wire is the first suspect; the TCON is the last. | Feed comes from TCON P14-34 on ES0366J; the manual only ever drives this path with the engine running and a function enable button held (SM p.117). The 0 V figure is the card's own expectation [M]. |
| Same two readings, key at platform controls, foot switch off, engine off, nothing pressed | Likely 0 V [M, same reason] | Nothing on the platform side is holding the master hydraulic enable on while the toggle switch is left alone. **Do not flip the toggle switch to see what happens.** The field photo shows a switch with six spade terminals in two rows of three, so it can switch two separate circuits, and only one of them has been looked at. Operating an unidentified added switch on a machine whose safety wiring is already suspect is not a test this card allows. | Same as above. If it read 0 V at ground controls but battery voltage at platform controls, the source is on the platform side: the basket control box, the added toggle switch, or the white wire. | as above |
| Ohms from the white wire (at its tap on the turntable, or at its spade terminal on the toggle) to the feed (orange/red) socket of the Y74 harness plug, battery disconnected | OL — open circuit, no continuity, no beep | The white wire does not feed the function enable valve. It still has to be traced and identified (card B2). In the field photo the white wire is tapped with a blue insulation-piercing clip onto one of two wires — they read as plain red and plain orange in the photo, with no stripe that can be made out — which run into a small dark two-way connector. A carton marked "…LT SENSOR" is lying nearby, but that is a spare-part box on the machine, not the sensor itself. Photo colours are not proof of a circuit either way; only this ohms reading settles whether the white wire touches Y74. | Continuity (a few ohms or less) means the toggle switch in the basket is a hand-operated master hydraulic enable: whoever flips it forces the lift pump to build pressure for every boom, steer and axle function no matter what the TCON has decided, which defeats the controller's hydraulic lock-out. **Remove the white wire and the toggle switch completely — both ends, every insulation-piercing tap — repair the insulation on the orange/red wire, then repeat the two volts readings.** | photo -white-wire-turntable-tilt-sensor-box.jpg [F]; colour trap: SM p.199 circuit 155 OR/RD vs SM p.198 circuit 63 OR/RD |
| Ohms from the white wire to the return socket of the Y74 harness plug, battery disconnected | OL — open circuit | The white wire is not on the return side either. | The white wire is sitting on the valve return line VLVRTN6-BR. That is still an added wire on a controller circuit, and that same return is shared by Y75 and by Y52/Y53, all landing on TCON J14 pin 30. Remove it and repeat the two volts readings. | figs es-y74-return-vlvrtn6.png, es-return-bus-split.png; SM p.210 (16307) |

#### Why we are doing this

If the coil is broken open, no boom, steer or axle function can get oil, no matter what the computers
command. If the coil's feed wire shows battery voltage when nothing is pressed, then something is
holding the master hydraulic enable switched on — either the added white wire or a stuck output from
the TCON. Either way it takes away the controller's decision about when hydraulic pressure is allowed.
These readings decide whether the white wire and toggle switch must come out before anything else is
done, and whether a new valve or a new TCON belongs on the parts list.

#### Safety

- **Never bypass, jumper, hold on, or feed this valve or any other safety circuit, limit switch, angle
  sensor, tilt sensor or load cell. This card exists to take an added wire out; it never puts one in.**
- Key OFF and both E-stops IN before pulling or pushing any plug. Battery negative disconnected for
  every ohms reading.
- The engine stays off for the whole card. Do not press a function enable button or any function button
  during the volts readings — the whole point is to see the circuit with nothing commanded.
- **Do not operate the added toggle switch in the basket.** Six spade terminals in two rows of three,
  only three wired: it can switch a second circuit that nobody has traced.
- Manual warning with coil testing: electrocution and burn hazard; contact with electrically charged
  circuits could result in death or serious injury; remove all rings, watches and other jewelry.
- Manual warning with opening covers: improper contact with components under any cover will cause
  serious injury; only trained maintenance personnel should access compartments; all compartments must
  remain closed and secured during operation.
- Do not loosen the valve cartridge, the coil nut, the hoses or the filter. If a cartridge is ever
  refitted, the manual's torque is 20-25 ft-lbs / 27-34 Nm, but that is a different job with the system
  depressurised.
- Do not use the bypass or recovery key switch, and do not fit any calibration jumper or toggle.
- Firm level ground, wheels chocked, boom stowed. The axles are retracted, so boom functions are locked
  out by design. Do not try to work around that.
- Measure at the valve plug, not at the TCON. J14 is a 35-pin connector with the pins close together,
  and probing it risks shorting an output (practical advice, not from the manual).

#### Sources

- [V] "The function enable valve is mounted behind the medium pressure filter." — SM p.135 (10018)
- [V] "1 | Solenoid valve, 2 position 2 way | A | Enables lift pump to provide hydraulic pressure for all boom and steer/axle functions | 20-25 ft-lbs / 27-34 Nm" — SM p.135 (10025-10032)
- [V] The SM p.135 drawing shows a single valve, callout 1 / letter A, connector drawn as an empty moulded shroud with no terminals — figs/func-enable-valve.png
- [V] Coil resistance for schematic item A is 3.5 to 5.5 ohms, last row of the Valve Coil Resistance table — SM p.150 (10773-10776)
- [V] Coil resistance alone cannot identify this valve: three other rows read 3.5-5.5 or overlap the 2.5-7.2 band (items N/P/R/T/V; item B 4-6; items H/J 3.5-5.5; items F/AD 5.5-7.5) — SM p.150 (10739-10768)
- [V] "The resistance should be within specification, plus or minus 30%… otherwise replace the coil." — SM p.150 (10723-10728)
- [V] "…specifications are at an ambient temperature of 68°F / 20°C… resistance will typically increase or decrease by 4% for each 18°F / 10°C…" — SM p.150 (10731-10737)
- [V] "1 Tag and disconnect the wiring from the coil to be tested. 2 Test the coil resistance." — SM p.150 (10717-10721)
- [M] Taking the higher of the two probe directions is the card's practical advice, not a manual step — justified only because Y74's coil has a diode across it
- [V] Y74's coil is drawn with a suppression diode across it, bar end at terminal 1; the five proportional coils marked "P" are drawn without one — figs/es-y74-coil-diode.png, es-return-bus-split.png
- [V] "How to Test a Coil Diode…" — SM p.151 (10791-10793)
- [V] "Electrocution/burn hazard… Remove all rings, watches and other jewelry." — SM p.150 (10712-10716)
- [V] "V155PSE OR/RD | Y74 FUNCTION ENABLE VALVE (J166)" — SM p.229 (18598-18599)
- [V] On the sheet the feed leaves TCON pin P14-34 ("PRESS COMP ENABLE VLV"), crosses J153 between "MANIFOLD HARNESS" and "ENGINE HARNESS", and enters coil terminal 1; terminal 2 leaves downward to a return line — figs/es-y74-coil.png (text positions read with PyMuPDF)
- [V] J153 is a two-pin connector and both pins are identifiable: "J153" appears twice on the page, once on the V155PSE OR/RD line and once on the V150HG GR/BK line — SM p.207 (15682-15684) plus sheet positions
- [V] P14-34 has its own output driver fed from "uP"; its neighbour P14-35 is "HYD WELDER PROPEL BYPASS" carrying V150HG GR/BK — figs/es-tcon-p14-34-press-comp-enable.png
- [V] **CORRECTED:** Y74 terminal 2 does NOT share a return with the boom valve coil bank. The sheet draws two separate return lines at y=1248.7 with a gap; the left one ends on VLVRTN7-BR, the right one is tapped by VLVRTN6-BR and collects Y74 and Y75, then continues down to Y52 and Y53 — figs/es-y74-return-vlvrtn6.png, es-return-bus-split.png (vector geometry read from PDF p.243)
- [V] **CORRECTED:** the Y74 return wire IS named and coloured — VLVRTN6-BR, brown, landing on TCON J14 pin 30 (VLVRET6-BR / VALVE_RTN6). The boom coil bank's return VLVRTN7-BR lands on J14 pin 27. — SM p.210 (16301, 16307); fig es-tcon-p14-27-30-valve-rtn.png
- [V] Y74's return is shared with Y75 WELDER GEN BYPASS VLV (J167), and lower down with Y53 TT ROT CCW VLV (J71) and Y52 TT ROT CW VLV (J70). Y77 is a turntable rotate flow control, not a boom valve. — figs/es-y74-return-vlvrtn6.png
- [V] "34 | V155PCE - OR/RD"; "J14 | White 35 pin AMP connector on TCON" — SM p.210 (16315), SM p.205 (15441-15442)
- [V] "OR/RD | 155 | Pressure Comp. Enable" — SM p.199 (14888-14890)
- [V] **COLOUR TRAP:** orange/red serves TWO circuits — 63 "Power to boom envelope safety switch" and 155 "Pressure Comp. Enable"; circuit 64 is orange/black — SM p.198 (14572-14577), SM p.199 (14888-14890)
- [V] "PCE Pressure Comp Enable / PSE Program Setup Enable" — SM p.194 (14085, 14123)
- [V] "J166 6 pin Deutsch connector for jib bellcrank sensor / J162 3 pin Deutsch connector for jib bellcrank angle sensor" — SM p.207 (15697-15710)
- [V] ES0366J also draws a second, 3-pin J166 (1 RD, 2 BK, 3 BL) at the jib bellcrank sensor — figs/es-j166-jib-bellcrank.png; "J166" occurs twice in the page text
- [V] "1 | 107742GT | VALVE,SOLENOID 2 POS 2 WAY … 2 | 106454GT | VALVE,FUNCTION ENABLE | includes item 1" — PM p.245 (12216-12225)
- [V] PM fig 707.1 (p.244) shows the function enable valve as a square block with one cartridge and coil; the connector is drawn as a plain shroud — figs/pm244-func-enable-manifold.png
- [V] PM fig 303.1 list: item 25 "Ref. Function Enable Manifold (refer to 707.1)", 26 4266GT screw, 27 6638GT washer, 28 6091GT nylock nut — **no quantities printed** — PM p.49 (2353-2363)
- [V] In the 303.1 drawing item 25 is a small valve low in the compartment on its own flat bracket plate, below and right of the battery box, near the battery tray — figs/pm046-engine-compartment.png
- [V] The engine compartment is part of the turntable: PM files fig 303.1 inside section "300 Turntable Components" — PM p.49 (2366-2367)
- [M] **CORRECTED:** neither manual says the engine compartment is behind a turntable cover on the engine side — the sentences previously quoted are about a jib pivot pin and about the ground-controls-side cover. Which side to stand on is field guidance.
- [V] Landmarks in the same compartment: battery 1303581GT (item 22), horn 81578GT (23), coolant recovery bottle 60721GT (7, Cummins and Perkins), relay mount plate 107525PGT (6), battery tray 107512PGT (14), maxi fuses and plug-in relays (16-19) — PM p.47
- [V] Medium pressure filter parts: 1267807GT assembly, bracket 70517GT / 128525GT "BRCKT,MED.FILTER,TEST PORT" — PM pp.95, 99, 109, 113
- [V] PM fig 405.1 (p.112) shows the medium pressure filter as an upright canister on a bracket below the air cleaner; the engine oil filter is a different canister (item 26) — figs/pm112-perkins-1104c-engine-fig.png
- [V] **CORRECTED:** the Perkins 804D-33T pages are PM pp.114-119 and 124-129; pp.120-123 are a different engine. Those lists carry fuel, air AND engine oil filters but no hydraulic medium pressure filter — PM (5923-6666)
- [V] **CORRECTED:** 62 kW does not single out one engine — the Perkins 1104C-44 is 83 hp / 62 kW net and the 804D-33T is 83 hp / 62 kW. The serial break does discriminate: 1104C-44 "to SN 952", 804D-33T "from SN 953". This machine is 1861. Deutz and Cummins are also listed. — SM (1766-1913); PM figure captions
- [V] OM ground control panel items 14 and 15 are the high and low speed function enable buttons — OM pp.22-23 (1421-1443)
- [V] The only way the manual energises this path is with the engine running from the ground controls and a function enable button held (pressure compensator adjustment) — SM p.117 (8986-8998); "Y74" occurs exactly once in the whole extracted Service Manual, on the schematic
- [V] "Safety Switch P7R … Function enable button was held down during startup. Recycle power with the function button released." — SM p.174 (12316-12322)
- [V] "Improper contact with components under any cover will cause serious injury… All compartments must remain closed and secured during operation." — OM p.16 (1064-1069)
- [V] The TCON is its own control box assembly at the ground controls — PM fig 305.1 items 6 (106512GT to SN 1711 / 237069GT from SN 1712) and 7 (lid 107714GT) — PM (3055-3069)
- [F] **CORRECTED, field photo:** the basket toggle has SIX brass spade terminals in two rows of three, only three wired (one lilac crimp, two clear) on white wire printed "16 GAU". The six-terminal body is itself what rules out the Genie three-terminal SPDT part. — photos/2026-09-12-aftermarket-toggle-terminals.jpg
- [F] **CORRECTED, field photo:** at the turntable the white wire is joined by a blue insulation-piercing tap onto one of a pair of wires running into a small dark two-way connector. Enlarged, the pair reads plain red and plain orange — no stripe can be made out, and nothing identifies the connector's brand. The white wire is spliced at the tap, not terminated. A carton marked "…LT SENSOR" lies nearby, which locates a spare-part box, not the turntable tilt sensor. — photos/2026-09-12-white-wire-turntable-tilt-sensor-box.jpg
- [M] Repository house rule (not a manufacturer statement): key OFF and E-stop IN before unplugging any connector; battery disconnected for resistance tests. The manufacturer-backed half is SM p.150's "tag and disconnect the wiring before testing a coil".
- [M] Case-file conclusion (knowledge-base document, not a manual): the function enable valve is why energising one axle valve coil on its own moves nothing, and the valve should be identified by location and coil resistance rather than by the connector number. (The case file's own page citation "SM p.206" for the J166/J162 legend is wrong; the legend is on SM p.207.)
- [V] Sheet identity caveat: the ES0366J title block reads "Genie Z-135 / Electrical Schematic / w/ Deutz Engine / ES0366J", and a separate Perkins engine schematic exists on SM p.216. The serial plate names schematic ES0366, so this is the right sheet family, but the engine-harness side of J153 may be drawn for the Deutz. The Y74 coil, its feed from P14-34 and its return to P14-30 are on the main sheet and are unaffected. — SM p.229 (19695-19698), SM p.216 (16642)
## C. The J114 boom angle sensor circuit

C1 and C2 together are the highest-value twenty minutes of the day: they tell you whether the fault is in the harness the previous tech patched, or past the plug in the new sensor.


### C1: J114 primary boom angle sensor - is the 5 volt supply there?

**What this finds out.** The primary boom angle sensor tells the computers how high the primary boom is lifted. It plugs into the machine through a six-hole grey plug called J114. This card pulls that plug apart and measures whether the 5 volt sensor supply and the sensor ground actually arrive at the machine (harness) side of the plug. Measuring only - nothing is repaired, cut or moved on this card. The manual's own first action for a boom angle sensor reading 0 volts is "Check for 5.0 VDC at the sensor" (SM p.177), and this reading decides which way the job goes: upstream toward the harness, connector J20 and the TCON (turntable controller - the main computer in the ground control box), or downstream toward the replaced sensor, its short lead and the home-made splices found at the pivot.

**Where it is**

- *What it is:* Connector J114 - "6 pin Deutsch connector for primary boom angle sensor (PBAS)" (SM p.206; PBAS = Primary Boom Angle Sensor, SM p.194 gives PBS = Primary Boom Angle Sensor). It lives at the primary boom angle sensor assembly shown on Parts Manual figure 511.2 (PM p.168). Note: the connector itself is NOT a numbered part on that figure - the figure shows the sensor assembly (items 8, 9, 10 and 14 to 22) that the connector hangs off.
- *Where on the machine:* The machine has two booms. The secondary boom (Operator's Manual p.20 legend item 3) and the primary boom (item 4), which carries the jib boom and the platform. The sensor is "located inside the primary boom at the pivot end" (SM p.72), "at the boom pivot pin" (SM p.81). With the boom stowed, the pivot end of the primary boom is the end AWAY from the platform. SM p.72 step 6, in the primary boom removal procedure, refers to "the limit switch on the ground controls side of the primary boom" - the ground controls are the control panel on the turntable (OM p.20 legend item 2), so the sensor end of the boom is the end near the ground control box, and the sensor work is on that side. How you reach it is NOT in any manual [M]: the site photos of this exact machine were taken looking DOWN onto the pivot hardware from above, so the work point is up on top of the machine, not at ground level. Arrange safe elevated access to site rules before starting, and do not climb on the boom structure.
- *How to find it:* 1) Go to the ground control box side of the turntable and find the rear (pivot) end of the stowed primary boom - the end away from the platform. 2) That end carries a curved sheet-metal end cover: PM figure 511.2 item 6, "COVER,PRIMARY BOOM,PAINTED" 106277PGT, held by 1/4-20 x 1.25 hex head screws (item 5, 8915GT), 1/4 inch flat washers (item 4, 6638GT), 1/4-20 nylock nuts (item 3, 6091GT) and 1/4-20 spring clips (item 7, 56912GT) - the figure shows the fastener groups as 5-4-3 and 7-5-4. 3) The manual's own access wording is: "Remove the retaining fasteners from the boom end cover at the pivot end of the primary boom. Remove the cover from the machine. Locate the primary boom angle sensor inside the primary boom at the boom pivot pin. Disconnect the electrical connector from the sensor" (SM p.81). 4) On this machine somebody has already been in here: bright new Genie-blue sensor hardware, a J114 half with a loose pin terminal, two blue Scotchlok taps and a long green wire are visible (site photos, 2026-09-12). If the cover is already off, leave it off.
- *What it looks like:* Parts figure 511.2 (PM p.168, figs/pm168-pri-boom-sensor.png) shows, at the boom side plate: a sensor pin weldment (item 9, 218757GT - drawn as a short cylinder on a flanged base), a sensor rotator weldment (item 8, 233118GT - drawn as a short sleeve or tube with a tab on it; the manual gives no shape, this is read off the figure), and the angle sensor assembly (item 10, 215728GT, "Includes items 14 to 22"). That assembly is a small round stack: a machined sensor base (15, 226489GT), an angle sensor race ring (16, 226491GT), the sensor itself (17, 216061GT "SENSOR, ANGLE, 180 DEG, CW" - the manual says only that the sensor and its magnet are matched and must be replaced together), a sensor holder (19, 226492GT), a sensor arm (21, 233116GT) and small M3 and M4 screws (14, 18, 20, 22). Item 23, 94814GT "PIN,2.25 DIA X 5.10LG,THREADED", is NOT the big boom pivot pin - on the figure its leader runs to a small pin boss on the boom side plate, and on the earlier figure 511.1 the same pin carries a rod end (1256267GT) - it is sensor linkage hardware. From the sensor comes a short lead ending in a six-hole Deutsch connector - that is J114. What was photographed on site is a dark grey/black housing moulded DEUTSCH / IPD USA / DT04-6P, with five wires seated (blue, red, yellow, green, white) running into black split loom, and one gold pin terminal hanging loose outside the housing. Which HALF of J114 that is has NOT been established - do not assume it is the sensor half. Nearby: two blue Scotchlok taps with a green loop between them, and a long green wire ending in a PINK INSULATED RING TERMINAL clamped under a hex bolt head on a bare steel plate (confirmed by enlarging the site photo - it is a ring terminal on a bolt, not a butt splice, and the plate is not identified in any manual).
- *Source:* SM p.72 lines 5687-5695; SM p.81 lines 6374-6382; SM p.194 lines 14080-14081; SM p.206 lines 15597-15599; OM p.20 lines 1254-1261; PM p.167 lines 8560-8572; PM p.169 lines 8647-8714; figs/pm168-pri-boom-sensor.png; photos/2026-09-12-j114-dt04-6p-loose-pin.jpg, -scotchlok-taps-1.jpg, -green-wire-to-pivot-splice.jpg, -pivot-hardware.jpg

**Set the machine to**

- **Key:** Key OFF and removed while unplugging, setting up the probes, and plugging back together. Turn the key to the GROUND position only for the readings (OM p.22: "Turn the key switch to the ground position and the ground controls will operate"). The ground control box has a SECOND key switch, the Bypass/Recovery key switch (SM p.99). Do not touch it on this card. Bypass and Recovery are not normal operation, and this card is not calibration work.
- **E-stops:** Both red emergency stop buttons (E-stops) pushed IN while the cover comes off and while J114 is unplugged or plugged back together (SM p.171 default configuration). Pull the GROUND E-stop OUT only for the few seconds of each voltage reading, then push it back IN. Leave the platform E-stop pushed in the whole time - but be aware that the ground controls override the platform E-stop (OM p.47), so a pushed-in platform E-stop protects nobody. Keep everyone out of the platform and away from every function button.
- **Battery:** Battery CONNECTED and charged. This is a live-voltage test. Do not disconnect the battery for this card. (Only resistance tests, measured in ohms, need the battery off, and there are none on this card.)
- **Engine:** Engine OFF. Do not start it. The ground display screen and the TCON power up with the key at the ground position and the ground E-stop (red emergency stop button) pulled out - OM p.31 function test: "The LCD screen will come on". Nothing on this card needs the engine running.
- **Also:** Machine parked on a firm, level surface. Wheels chocked. Boom in the stowed position. Turntable secured with the turntable rotation lock. All external AC power supply disconnected from the machine. Welder disconnected, if the machine has the weld-cable-to-platform option (all seven bullets, SM p.171). The axles are retracted at 8 ft 1 in, which locks out boom functions by design - leave them retracted; this card moves nothing. Leave every splice, the loose pin terminal, the two Scotchlok taps (Scotchlok = a squeeze-on tap-in splice that cuts through insulation, also called an IDC or insulation-displacement connector) and the long green wire exactly as found. Photograph them. Do not cut, move or tidy anything. Do not fit any calibration jumper or toggle switch - that belongs to the calibration technician later.

**Connector — J114 - six-hole Deutsch connector, primary boom angle sensor**

Two plastic halves that latch together. Six numbered holes (cavities) in each. The half photographed on this machine is moulded DEUTSCH / IPD USA / DT04-6P and is dark grey, almost black. In general Deutsch practice DT04-6P is the half that holds six PIN (male) contacts and its mate DT06-6S holds six SOCKET (female) contacts - that naming rule is NOT in any of the three Genie manuals [M], so treat it as likely, not fact. What the manuals do show is that Genie builds a device lead on this same parts figure as a Deutsch DT receptacle fitted with PIN terminals (PM p.169, the limit switch lead), so a device end with pins is normal Genie practice. On THIS machine the wiring has been altered, so DO NOT decide which half is which from the moulding. Follow the loom instead: the half whose wires run back into the boom toward the turntable and connector J20 (the 12-pin Deutsch connector on the lower/upper limit switch harness, SM p.205) is the HARNESS half, and that is the half you measure. The half whose short lead comes out of the sensor stack is the SENSOR half. Cavity numbers 1 to 6 are moulded into the plastic beside each hole - read them with a torch held at a shallow angle, do not count positions. Where exactly those numbers are moulded, and the rule that harness cavity 1 mates with sensor cavity 1, are general connector practice [M]: the schematic prints only ONE row of cavity numbers at J114, it does not number two halves. Now cross-check the colours. The schematic sheet ES0366J (the machine's electrical wiring diagram, printed at SM p.229) shows TWO different factory colour sets for the short jumper wires between J20 and J114: for machines boxed "UNIT #130 OR HIGHER" the colours are cavity 1 RD (red), 2 WH/BK (white with black), 3 BL (blue), 6 OR (orange), 5 GR (green), 4 WH (white); for machines boxed "UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)" the SAME J20 pins 11, 12, 2, 10, 7, 6 instead carry OR, GR, RD, RD/BK, BK, GR/BK. Nothing in the manuals or the case file ties serial Z13513-1861 to a unit number, so you do not yet know which set is factory for this machine [M] - write down what you find against BOTH sets and do not call a colour wrong until the unit number is settled. The half photographed here carries blue, red, yellow, green and white plus a loose terminal, which matches neither set. To unplug: key OFF and E-stop IN, squeeze the latch and pull the two halves straight apart. Never pull on the wires.

*Source:* SM p.205 lines 15448-15450 (J20); SM p.206 lines 15597-15599 (J114); PM p.169 lines 8639-8646 (Deutsch receptacle with pin terminals); figs/es-j114-primary-sensor.png and figs/es-boom-sensors-wide.png (ES0366J, SM p.229, both unit-number colour sets); photos/2026-09-12-j114-dt04-6p-loose-pin.jpg

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| 1 | P109ANG-GR/WH ("Sensor Power", circuit 109, green with white stripe at the computer end) | RD (red) on the J20-to-J114 jumper, "UNIT #130 OR HIGHER" version; OR (orange) on the "UNIT #129 OR LOWER" version | RD (red) as drawn on ES0366J. The sheet does not name a part number for the sensor it draws, and the wire colours of the 216061GT kit sensor are not in any manual [M] | 5 volt supply to S18, the primary boom angle SAFETY sensor element (called RSP1AS - rotary sensor, primary #1 angle safety). TEST POINT: red meter probe here. | J20 pin 11, then along P109ANG-GR/WH to TCON connector J12 pin 26, "P109ANG - GR/WH". The same TCON pin also feeds J114 pin 6 and both 5 volt pins of J154 (the secondary boom angle sensor connector). |
| 2 | SNSR GND-BR (sensor ground, brown at the computer end) | WH/BK (white with black stripe), "UNIT #130 OR HIGHER"; GR (green) on the "UNIT #129 OR LOWER" version | BK (black) as drawn on ES0366J | Sensor ground for S18, the safety element. TEST POINT: black meter probe here for the pin 1 reading. | J20 pin 12, then along SNSR GND-BR to TCON J12 pin 25, "SNSR GND - BR". Shared with J114 pin 5 and with both ground pins of J154. |
| 3 | C141PBS-RD (circuit 141, "Primary Boom Angle Signal Safety") | BL (blue), "UNIT #130 OR HIGHER"; RD (red) on the "UNIT #129 OR LOWER" version | BL (blue) as drawn on ES0366J | The safety signal - the moving contact (wiper) of sensor element S18, going to the SCON (safety controller). NOT measured on this card. Never bridge it to anything. | J20 pin 2, then along C141PBS-RD to SCON connector J122 pin 3, "C141PBS - RD" (J122 is the 12-pin black Deutsch connector on the SCON). |
| 6 | P109ANG-GR/WH ("Sensor Power", circuit 109) | OR (orange), "UNIT #130 OR HIGHER"; RD/BK (red with black) on the "UNIT #129 OR LOWER" version | OR (orange) as drawn on ES0366J | 5 volt supply to S17, the primary boom angle OPERATIONAL sensor element (RSP1AO). TEST POINT: red meter probe here for the second reading. | J20 pin 10, then along P109ANG-GR/WH to TCON J12 pin 26 - the same TCON pin as J114 pin 1. |
| 5 | SNSR GND-BR (sensor ground) | GR (green), "UNIT #130 OR HIGHER"; BK (black) on the "UNIT #129 OR LOWER" version | BR (brown) as drawn on ES0366J | Sensor ground for S17, the operational element. TEST POINT: black meter probe here for the pin 6 reading. | J20 pin 7, then along SNSR GND-BR to TCON J12 pin 25 - the same TCON pin as J114 pin 2. |
| 4 | C123PBS-RD/BK (circuit 123, "Primary Boom Angle Signal Operational") | WH (white), "UNIT #130 OR HIGHER"; GR/BK (green with black) on the "UNIT #129 OR LOWER" version | YL (yellow) as drawn on ES0366J | The operational signal - the wiper of sensor element S17, going to the TCON. NOT measured on this card. Never bridge it to pin 3 or to anything else. | J20 pin 6, then along C123PBS-RD/BK to TCON J12 pin 32, "C123PBS - RD/BK" (J12 is the black 35-pin AMP connector on the TCON; AMP is the connector brand name used in the manual). |

**Do this**

1. Set the machine up exactly as SM p.171 requires: parked on a firm, level surface; key switch off with the key removed; red E-stop in the off (pushed in) position at BOTH the ground and platform controls; wheels chocked; boom stowed; turntable secured with the turntable rotation lock; all external AC power supply disconnected; welder disconnected if fitted. Nobody in the platform. Tell everyone nearby that you will be turning the key to GROUND for short periods.
2. Arrange safe access to the pivot end of the stowed primary boom, on the ground control box side of the machine - the end away from the platform. The site photos show this work point is above head height, looking down. Follow your site's rules for elevated work; do not climb on the boom structure.
3. Find the curved sheet-metal boom end cover (PM figure 511.2 item 6, 106277PGT). If it is still fitted, take out its 1/4-20 hex screws, flat washers, nylock nuts and spring clips (items 5, 4, 3, 7) and lift the cover off. Bag the fasteners. If the cover is already off, leave it off.
4. Before touching anything, photograph the whole area from two angles: the blue sensor pin weldment and rotator (items 9 and 8), the round sensor stack (item 10), the J114 connector, the two blue Scotchlok taps with their green loop, the loose gold pin terminal, and the long green wire that ends in the pink ring terminal under a bolt. Nothing is cut, moved or repaired on this card.
5. Work out which half of J114 is which. Read the moulding on each housing (the one already photographed reads DEUTSCH / IPD USA / DT04-6P). Then FOLLOW THE LOOM: the half whose wires run back into the boom toward the turntable is the HARNESS half; the half whose short lead comes out of the sensor stack is the SENSOR half. Write down which moulding is on which half. Do not trust the photo or earlier notes for this.
6. If J114 is still plugged together: key OFF, both E-stops IN, then squeeze the latch and pull the two halves straight apart. Do not pull on wires. Write down whether you found it plugged or unplugged, and whether any wire is out of its hole.
7. On the HARNESS half, read the cavity numbers moulded beside each hole (torch at a shallow angle) and write down the wire colour you see in each numbered hole, 1 to 6. Compare against BOTH factory colour sets from ES0366J: unit #130 or higher = 1 red, 2 white/black, 3 blue, 6 orange, 5 green, 4 white; unit #129 or lower = 1 orange, 2 green, 3 red, 6 red/black, 5 black, 4 green/black. Record which set it resembles and record every difference and every empty hole. The loose gold terminal belongs in one of these holes - note WHICH hole is empty, but do NOT push the terminal back in on this card.
8. Do the same colour list for the SENSOR half, so the two lists can be compared later. The schematic's sensor-side colours are red, black, blue, orange, brown, yellow for cavities 1, 2, 3, 6, 5, 4.
9. Set the multimeter to DC volts - the V with a straight line over dashes, or the 20 V range on a manual meter. Use fine-tip probes or a thin Deutsch-size test pin. On a half with PINS (male), touch the tip of the pin. On a half with SOCKETS (female), back-probe at the wire-entry face against the metal terminal, or use a thin test pin. Never force a fat probe into a socket - it spreads the contact and ruins it. Genie uses this same method on its steer sensor: "Using a voltmeter set to DC voltage, probe the back of the electrical connector" (SM p.161).
10. Put the key in, turn it to GROUND, then pull the GROUND red E-stop OUT. The ground display screen should light up (OM p.31). Leave the platform E-stop pushed in. Do not start the engine. Do not press any function button.
11. Reading A: black probe on harness cavity 2, red probe on harness cavity 1. Hold steady for three seconds and write the number down.
12. Reading B: black probe on harness cavity 5, red probe on harness cavity 6. Write it down.
13. Reading C: black probe on clean bare metal on the machine (an unpainted bolt head on the turntable, or the battery negative post), red probe on harness cavity 1. Reading D: same black probe position, red probe on harness cavity 6. These two separate "no 5 volts arriving" from "no ground arriving".
14. Reading E (only if A or B was not about 5 volts): black probe on bare metal, red probe on harness cavity 2, then on cavity 5. A healthy sensor ground reads close to 0 volts against bare metal. A volt or more means the ground path has resistance or is broken.
15. Push the ground E-stop IN, turn the key OFF and take the key out.
16. Turn the key to GROUND for about ten seconds and read the fault list on the ground display with J114 still unplugged. Note which of the seven live codes are still shown - the "secondary boom angle sensor shorted / 0 V" code is the one to watch, because the two sensors share the same supply and ground. Then key OFF, E-stop IN.
17. If the next card follows straight on, leave J114 apart. If the day ends here, plug it back together exactly as found and hang a "do not operate" tag on the ground controls.
18. Write all readings A to E with the time, the display codes, the cavity-colour tables from steps 7 and 8, and the photo numbers into the worklist. Then use the table below to decide what comes next.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Reading A (cavity 1 to cavity 2) and Reading B (cavity 6 to cavity 5) on the harness half of J114, key at GROUND, ground E-stop out, engine off | **About 5.0 volts DC on both. The manual's recovery action for a boom angle sensor reading 0 V is "Check for 5.0 VDC at the sensor" (SM p.177 operational entry, SM p.178 safety entry). The manual gives no tolerance band at all, so treating a reading within a couple of tenths of 5.0 V as good is a working assumption, not manual fact [M].** | The TCON's 5 volt supply, TCON pins J12-26 and J12-25, the turntable harness, J20 pins 11, 12, 10 and 7 and the four short jumpers to J114 are all proven good, and the sensor ground is present. The problem is on the far side of this plug: the replaced 216061GT sensor and its lead, the loose pin terminal, the two Scotchlok taps and the long green wire to the pink ring terminal. Next card: signal voltages on cavities 3 and 4 with J114 plugged and back-probed, and finding out which two conductors the Scotchlok loop joins by measuring resistance with the battery disconnected. Do not order a TCON or a SCON. | Use the rows below, according to the numbers. In every case also unplug J154 (the secondary boom angle sensor connector - same six-cavity layout, cavities 1 and 6 are 5 volts, cavities 2 and 5 are ground, on the same two TCON wires) and repeat readings A and B, because the two sensors share P109ANG-GR/WH and SNSR GND-BR. |
| Readings A and B both near 0 volts, but Readings C and D (cavity 1 or 6 against bare metal) about 5 volts | **The 5 volts is arriving, but the SENSOR GROUND (SNSR GND-BR, from TCON pin J12-25 through J20 pins 12 and 7) is broken or is not reaching this plug.** | n/a | The manual's action for the matching "Value at 5.0 V" fault is "Check for an open ground circuit going to the sensor" (SM p.177 and p.178). Next: take Reading E (cavity 2 and cavity 5 against bare metal - expect near 0 volts; more than a volt confirms a bad ground path). Then inspect J20 pins 12 and 7 and TCON pin J12-25. Note that the long green wire ending in a pink ring terminal bolted to a bare steel plate suggests somebody already suspected this ground. It is evidence, not a fix: a bolt on the structure is NOT the TCON's sensor-ground return, and it must not be treated as one. |
| Readings A and B both near 0 volts AND Readings C and D (cavity 1 or 6 against bare metal) also near 0 volts | **No 5 volts is arriving at J114 at all.** | n/a | Follow the manual's recovery action in order: "Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board. Repair or replace as necessary" (SM p.177 and p.178; the extracted text prints the figure as "% .0 VDC"). In practice: (a) unplug J154 and take A and B again - if 5 volts comes back, something on the secondary sensor side is pulling the shared supply down and the primary supply is fine; (b) if it is still 0 volts, push both E-stops in, key off, remove the ground control box lid fasteners and open the ground control box (SM p.103), find the ALC-1000 circuit board - that board IS the TCON - and look for the 5.0 volt indicator light. The manual names that light but never shows where it is on the board [M]; (c) if the light is lit, measure at J20 pin 11 and pin 10 against J20 pin 12 with the key at ground, then at TCON J12-26 against J12-25. The break lies between the last point that still shows 5 volts and J114; (d) if the light is NOT lit with both J114 and J154 unplugged, the TCON's own 5 volt output is down - that is a TCON-level finding, not a sensor finding. |
| Readings A and/or B about 2 to 3 volts - well below 5 but not zero | **The 5 volts is present but is being dragged down, either by a partial short somewhere on the shared 5 volt supply or by a ground path with resistance in it. This reading of the numbers is engineering reasoning from the schematic, not manual text - the manual only ever states the 5.0 V target [M].** | n/a | (a) Compare Reading C (cavity to bare metal) with Reading A (cavity to cavity). If C is about 5 volts and A is 2 to 3 volts, the sensor ground has resistance - treat it as the broken-ground row above ("Check for an open ground circuit going to the sensor", SM p.177). (b) If C is also 2 to 3 volts, the supply itself is loaded: unplug J154 and read again. If it recovers to 5 volts, the secondary sensor or its wiring is the load - which fits the live "secondary boom angle sensor shorted / 0 V" code. If it does not recover, look for chafed or damaged harness between J20 and the TCON ("Check for damaged wiring going to the sensor", SM p.177) or a failing TCON supply. (c) Never load-test by jumpering anything. This card measures only. |
| One pair reads about 5 volts and the other reads 0 volts (for example A = 5 V, B = 0 V) | **Both pairs start at the same two TCON pins (J12-26 and J12-25) but reach J114 through DIFFERENT J20 pins and different short jumper wires: cavity 1 via J20-11, cavity 6 via J20-10, cavity 2 via J20-12, cavity 5 via J20-7. So a difference between the two pairs points at a break in ONE of those four short jumpers, or a terminal that has backed out of its hole at J114 or J20. This localisation is reasoning from the schematic, not manual text [M].** | n/a | Record which pair failed. Check whether the empty cavity you found in step 7 - the one the loose gold terminal came out of - is one of the dead cavities. That alone would explain it. Repair belongs on a later card, with a correctly crimped Deutsch pin terminal, never with a tap-in splice. Do not simply order 73713GT: the manual lists that terminal as part of the FOUR-way limit switch lead on the same page, rated 14-18 AWG, and nothing in the manuals says it is the terminal used in this six-way connector - confirm the correct part and the wire gauge before ordering. Then inspect the matching pin at the J20 12-pin connector and measure there. |

**Why we are doing this.** Every fault code still live on this machine sits on the boom angle sensor circuit. The primary boom angle crosscheck fault switches off P_38, and P_38 is Propel - that is why the machine will not drive (SCON fault matrix, SM p.189; SCON = safety controller). The two angle sensors - primary at J114 and secondary at J154 - are fed by the SAME 5 volt wire and the SAME ground wire from the TCON, so one fault in that pair of wires can make both sensors fault at once. If you read about 5.0 volts here, the TCON, the boom harness and connector J20 are proven good and the work moves to the sensor and the splices. If you read 0 volts, or a sagging 2 to 3 volts, the work moves upstream to J20, to the TCON 5 volt indicator light and to the shared supply. Nobody should buy a sensor, a TCON or a SCON until this one reading is taken.

**Safety**

- Default configuration for all fault-code work (SM p.171): machine parked on a firm, level surface; key switch off with the key removed; red E-stop in the off (pushed in) position at both the ground and platform controls; wheels chocked; all external AC power supply disconnected; boom stowed; turntable secured with the turntable rotation lock; welder disconnected if the machine has the weld-cable-to-platform option. Only leave that state for the seconds a meter reading takes, then return to it.
- Electrocution and burn hazard (SM p.171): "Contact with electrically charged circuits could result in death or serious injury. Remove all rings, watches and other jewelry." Use insulated fine-tip probes. Keep your other hand off the frame while probing.
- The ground controls override the platform red E-stop (OM p.47). With the key at GROUND and the ground E-stop pulled out, the machine is live from the ground station. Keep everyone out of the platform and away from the ground control panel buttons, and keep your own hands clear of the boom pivot, the hoses and the sensor rotator.
- Engine stays OFF. The display screen and the TCON power up without it (OM p.31). No hydraulic function is to be operated. The axles are retracted, which locks out boom functions by design, and this card must not try to change that.
- Never bypass, jumper, bridge or defeat any safety circuit, limit switch, angle sensor, tilt sensor or load cell. On this card that means specifically: do not connect cavity 3 to cavity 4, do not disturb the Scotchlok loop, do not add or remove any wire, and do not push the loose terminal into a cavity. This plan exists to REMOVE bypasses. It never adds one.
- Do not use the Bypass or Recovery positions of the second key switch in the ground control box, and do not fit any calibration jumper or toggle switch. Bypass and Recovery "are not part of normal machine operation" (SM p.99), and calibration belongs to the calibration technician after the wiring is proven.
- Key OFF and both E-stops IN before unplugging or plugging back together J114 (or J154). The battery stays connected for this voltage test. Any resistance (ohms) test on a later card needs the battery disconnected first.
- If the primary boom angle sensor is ever replaced, it must be calibrated afterwards: "Calibrate the primary boom angle sensor" (SM p.82). A FULL machine calibration in a fixed sequence is required specifically when the ALC-1000 board (TCON) or the turntable level sensor (SCON) has been replaced (SM p.105). Nothing on this card is a repair, so this card triggers no calibration.
- Hang a "do not operate" tag on the ground controls if J114 is left unplugged or the cover is left off at the end of the session.

**Open questions on this card**

- Which half of J114 is the harness half on THIS machine. The photographed DT04-6P half carries blue, red, yellow, green and white plus a loose terminal, which matches neither factory colour set. The technician must trace the loom on site (step 5) before probing. The DT04 = pins / DT06 = sockets explanation is likely, from general Deutsch practice, not from the Genie manuals [M].
- This machine's ES0366J unit number is not recorded anywhere, so it is not known whether the "UNIT #130 OR HIGHER" or the "UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)" jumper colour set is factory for serial Z13513-1861 [M]. Both sets are given in the card. Until this is settled, an unexpected colour is not by itself evidence of tampering.
- The wire colours and cavity order of the 216061GT kit sensor's own pigtail are not in the three manuals [M]. If the kit's order differs from the layout ES0366J draws, that alone could explain the splices found. Record the sensor-side cavity colours in step 8 as well.
- Exactly where the "5.0 VDC LED" sits on the TCON (ALC-1000) board, and how it is marked. The fault tables name it (SM pp.177-178, printed as "% .0 VDC" in the extraction) but no manual page or figure shows its position [M].
- The brown sensor-ground wire (SNSR GND-BR at TCON J12-25 and on ES0366J) has no confirmed circuit number. The wire colour legend on SM p.198 gives circuit 110 "Sensor Return" as BK, and gives BR to circuit 89 "Platform Level Safety Ground". The card therefore no longer calls the brown wire "circuit 110". The same legend also shows RD/WH beside circuit 124 while the TCON pin legend and ES0366J give C124SBS - OR/BK, so there is more than one colour disagreement in that legend; circuits 109, 123 and 141 do agree across legend, pin legend and schematic.
- Where cavity numbers sit on a six-way Deutsch housing, and the rule that harness cavity 1 mates with sensor cavity 1, are stated from general connector practice [M]. The schematic prints only one row of cavity numbers at J114.
- The manual gives "5.0 VDC" with no tolerance. The card's "within a couple of tenths" is a working assumption [M].
- Which cover part this machine carries: fig 511.2 (from SN 1854) lists only 106277PGT painted, while fig 511.1 lists 107838GT with decal for USA/Canada/Australia. Same position either way; the part number only matters if the cover is to be replaced.
- The physical location of connector J20 (the 12-pin lower/upper limit switch harness connector) is known only from the connector legend (SM p.205). Its position on the boom or turntable must be found on site if the fault moves upstream.
- Which cavity the loose gold pin terminal came out of, and which two conductors the Scotchlok loop joins - recorded on this card (step 7) and to be resolved on a later card with the battery disconnected, by measuring resistance.
- The correct crimp terminal for a J114 repair is not established. 73713GT is listed on PM p.169 only as part of the FOUR-way limit switch lead, rated 14-18 AWG. The right terminal and the sensor wire gauge must be confirmed before ordering [M].
- How the pivot area is safely reached is not in any manual [M]. The site photos show the work point above ground level; access must be planned to site rules.
- The bare steel plate that the pink ring terminal is bolted to is not identified in any manual figure. Calling it "the pivot bracket" was not supportable and has been dropped.
- The blue railed structure in the background of the green-wire photo cannot be confirmed as this machine's own platform rather than another unit in the yard, so it is no longer used as an orientation cue.

<details><summary>Sources for this card (66 checked statements)</summary>

- `[V]` J114 is the 6-pin Deutsch connector for the primary boom angle sensor (PBAS). — *1268557.txt 15597-15599 (PDF 220, SM p.206)*
- `[V]` J154 is the 6-pin Deutsch connector for the secondary boom angle sensor. — *1268557.txt 15685-15687 (PDF 221, SM p.207)*
- `[V]` J20 is a 12-pin Deutsch connector on the lower/upper limit switch harness. Its role as the junction between the turntable wiring and the short J114 jumpers is read off ES0366J. — *1268557.txt 15448-15450 (PDF 219, SM p.205); junction role from figs/es-j114-primary-sensor.png*
- `[V]` J12 is the black 35-pin AMP connector on the TCON. — *1268557.txt 15437-15438 (SM p.205)*
- `[V]` J121 is the 12-pin grey and J122 the 12-pin black Deutsch connector on the SCON. — *1268557.txt 15608-15611 (PDF 220, SM p.206)*
- `[V]` TCON J12-25 is SNSR GND - BR (sensor ground). — *1268557.txt 16175-16176 (PDF 224, SM p.210); also figs/sm210-tcon-pins.png*
- `[V]` TCON J12-26 is P109ANG - GR/WH, the 5 volt sensor supply. — *1268557.txt 16177-16178 (SM p.210); also figs/sm210-tcon-pins.png*
- `[V]` TCON J12-32 is C123PBS - RD/BK, the primary boom angle operational signal. — *1268557.txt 16189-16190 (SM p.210)*
- `[V]` TCON J12-33 is C124SBS - OR/BK, the secondary boom angle operational signal. — *1268557.txt 16191-16192 (SM p.210)*
- `[V]` SCON J122-3 is C141PBS - RD, the primary boom angle safety signal. — *1268557.txt 16003-16004 (PDF 223, SM p.209); also figs/sm209-scon-pins.png*
- `[V]` SCON J122-2 is C142SBS - OR, the secondary boom angle safety signal. — *1268557.txt 15999-16000 (SM p.209); also figs/sm209-scon-pins.png*
- `[V]` J114 pin map on ES0366J, "UNIT #130 OR HIGHER" version: J20-11 P109ANG-GR/WH via RD to J114-1 (sensor RD); J20-12 SNSR GND-BR via WH/BK to J114-2 (sensor BK); J20-2 C141PBS-RD via BL to J114-3 (sensor BL, S18 wiper); J20-10 P109ANG-GR/WH via OR to J114-6 (sensor OR); J20-7 SNSR GND-BR via GR to J114-5 (sensor BR); J20-6 C123PBS-RD/BK via WH to J114-4 (sensor YL, S17 wiper). I re-read this crop myself pin by pin. — *es-j114-primary-sensor.png figure (ES0366J, SM p.229)*
- `[V]` ES0366J carries a SECOND factory jumper colour set for the same J20 pins, boxed "UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)": J20 pins 11, 12, 2, 10, 7, 6 carry OR, GR, RD, RD/BK, BK, GR/BK to J114 cavities 1, 2, 3, 6, 5, 4. Verified by enlarging the lower-right block of both crops. — *es-boom-sensors-wide.png figure lower right; caption fully legible in figs/es-scon-boomsensors.png (ES0366J, SM p.229)*
- `[V]` S18 (safety) and S17 (operational) are each drawn as a three-terminal variable resistance element with the wiper feeding the signal cavity; cavities 1 and 2 supply S18, cavities 6 and 5 supply S17. The schematic draws them as potentiometer symbols, not as a Hall device. — *es-j114-primary-sensor.png figure (ES0366J, SM p.229)*
- `[V]` J154 uses the same layout: cavities 1 and 6 P109ANG-GR/WH, cavities 2 and 5 SNSR GND-BR, cavity 3 C142SBS-OR, cavity 4 C124SBS-OR/BK; elements S20-SEC BM ANG SAFETY and S19-SEC BM ANG OPER. The 5 volt and ground conductors are the same ones that feed J114 (tie dots on the trunk lines, and a single TCON pin each). — *es-j154-secondary-sensor.png figure; shared trunk visible in figs/es-boom-sensors-wide.png*
- `[V]` On the SCON's J122 black 12-pin module the primary safety signal lands on P122-03 C141PBS-RD and the secondary on P122-02 C142SBS-OR. — *es-scon-boomsensors.png figure (ES0366J, SM p.229)*
- `[V]` Fault table, Operational Primary Boom Angle Sensor, Value at 0 V: effect "Primary up, Secondary up/down and Extend disabled, Alarm sounds"; recovery "Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board. Repair or replace as necessary" (the extracted text prints the LED figure as "% .0 VDC"). — *1268557.txt 12576-12598 (PDF 191, SM p.177)*
- `[V]` The Safety Primary Boom Angle Sensor entry carries the identical 0 V recovery action. — *1268557.txt 12632-12654 (PDF 192, SM p.178)*
- `[V]` For a boom angle sensor reading "Value at 5.0 V" the recovery action is to check for an open ground circuit to the sensor. — *1268557.txt 12578-12582 (SM p.177) and 12634-12638 (SM p.178)*
- `[V]` A "Not calibrated" primary boom angle sensor leaves only primary up active from the TCON and requires the service-manual calibration procedure. — *1268557.txt 12603-12607 (SM p.177)*
- `[V]` In the wire colour legend, circuit 109 is "Sensor Power" with colour GR/WH, and circuit 110 is "Sensor Return" with colour BK. I re-read the legend block and the colour is printed on the line BEFORE its circuit number, which parses consistently for the neighbouring entries (107 BL/WH, 108 GR/WH, 111 OR, 112 RD). — *1268557.txt 14716-14726 (PDF 212, SM p.198)*
- `[V]` The legend's colour for circuit 110 (BK) does NOT match the brown sensor-ground wire the card measures (SNSR GND-BR at TCON J12-25 and on ES0366J). In that same legend BR is assigned to circuit 89, "Platform Level Safety Ground". So the brown sensor-ground wire has no established circuit number, and this card no longer gives it one. — *1268557.txt 14721-14723 and legend entry for 89 (SM p.198); conflicting name at 16176 "SNSR GND - BR" (SM p.210)*
- `[V]` Circuit 123 is "Primary Boom Angle Signal Operational" (RD/BK) and circuit 141 is "Primary Boom Angle Signal Safety" (RD). Both agree with the TCON and SCON pin legends. — *1268557.txt 14779-14782 and 14844-14847 (PDF 213, SM p.199)*
- `[V]` RSP1AO = primary boom angle sensor (operational); RSP1AS = primary boom angle sensor, safety, which "Provides safety primary boom angle positioning relative to secondary boom angle". — *1268557.txt 15284-15287 (SM p.203) and 15373-15378 (SM p.204)*
- `[V]` Abbreviation PBS = Primary Boom Angle Sensor. — *1268557.txt 14080-14081 (PDF 208, SM p.194)*
- `[V]` SCON fault matrix column names and rows: P_38 Propel, P_39 Turntable Rotate, P_10 Primary Boom Extend, P_11 Primary/Secondary Up, P_9B Ignition/Fuel, P_30 Secondary Extend/Down. "Primary Boom angle (crosscheck)" switches OFF P_38, P_39, P_10, P_11, P_30. "Secondary Boom angle (crosscheck)" switches OFF P_38, P_39, P_11, P_30. — *1268557.txt 13620-13666 (PDF 203, SM p.189); also figs/scon-fault-matrix.png*
- `[V]` The primary boom angle sensor is located inside the primary boom at the pivot end. — *1268557.txt 5694-5695 (PDF 86, SM p.72)*
- `[V]` SM p.72 step 6 of the primary boom removal procedure refers to "the limit switch on the ground controls side of the primary boom", and step 7 immediately after it disconnects the primary boom angle sensor connector - so the sensor work is on the ground-controls side. The manual does NOT name that switch as the retract limit switch on this page. — *1268557.txt 5685-5693 (SM p.72)*
- `[V]` Access procedure: remove the boom end cover at the pivot end of the primary boom, locate the sensor inside the boom at the boom pivot pin, disconnect the electrical connector from the sensor. — *1268557.txt 6374-6382 (PDF 95, SM p.81)*
- `[V]` The primary boom angle sensor limits the primary boom angle relative to the secondary boom and gravity; the replacement procedure is done with the boom stowed on a firm, level surface. — *1268557.txt 6365-6372 (SM p.81)*
- `[V]` After the primary boom angle sensor is replaced it must be calibrated. — *1268557.txt 6444-6446 (PDF 96, SM p.82)*
- `[V]` Full machine calibration is required when the ALC-1000 board (TCON) or the turntable level sensor (SCON) has been replaced, and its full sequence is: engine configuration, joysticks, turntable level sensor, platform level sensor, axle angle sensors, steer sensors, secondary boom angle sensor, primary boom angle sensor, jib boom bellcrank angle sensor, option configuration. — *1268557.txt 7974-7978 and 8012-8039 (PDF 119, SM p.105)*
- `[V]` Parts figure 511.2 "Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854)" is on PM p.168 with its item list on p.169 (item 24 continuing on p.171). Reading 1861 as the unit sequence number, this machine falls in that group. — *106877.txt 8611 (PM p.168); item list 8618-8715 (PM p.169); item 24 at 8738-8740 (PM p.171); serial from cases/Z13513-1861/README.md line 1*
- `[V]` Boom end cover hardware on fig 511.2: item 6 106277PGT COVER,PRIMARY BOOM,PAINTED; item 5 8915GT SCREW, HHC, 1/4-20 X 1.25; item 4 6638GT WASHER, FLAT, USS, 1/4; item 3 6091GT NUT,NYLOCK,1/4-20; item 7 56912GT SPRING CLIP,1/4-20. The figure's cover callouts are grouped 5-4-3 and 7-5-4, so the nylock nut is part of the cover fastener set. — *106877.txt 8647-8661 (PM p.169); callout groups read off figs/pm168-pri-boom-sensor.png*
- `[V]` Fig 511.2 item 8 is 233118GT WLDT, SENSOR ROTATOR #2 and item 9 is 218757GT WLDT., PRIMARY SENSOR PIN. The parts text gives no shapes; the shapes quoted in this card are read off the figure - item 9 a short cylinder on a flanged base, item 8 a short sleeve or tube with a tab. — *106877.txt 8662-8667 (PM p.169); shapes from figs/pm168-pri-boom-sensor.png*
- `[V]` Fig 511.2 item 10 is 215728GT ASSY,ANGLE SEN.,Z135 PRIMARY (Complete), which includes items 14 to 22, calibration required after replacement. — *106877.txt 8668-8672 (PM p.169)*
- `[V]` Fig 511.2 items 14-22: 14 217217GT screw FHSCS M4-0.7x14; 15 226489GT MACHINED, PRIMARY SENSOR BASE; 16 226491GT MACHINED, ANGLE SENSOR RACE; 17 216061GT SENSOR, ANGLE, 180 DEG, CW (sensor and magnet matched, machine calibration required after installation); 18 237242GT screw M3-0.5x8; 19 226492GT MACHINED, ANGLE SENSOR HOLDER; 20 237241GT screw M3-0.5x14; 21 233116GT MACHINED, SENSOR ARM; 22 217219GT screw SHC M4-0.7x14. The manual nowhere states the sensing technology of item 17. — *106877.txt 8682-8711 (PM p.169)*
- `[V]` Fig 511.2 item 23, 94814GT PIN,2.25 DIA X 5.10LG,THREADED, is NOT the primary boom pivot pin. On the figure the 23/24 leader runs to a small pin boss on the boom side plate, well clear of the large pivot bore, and item 24 is a 2.27 inch bore washer sized to that pin. On the earlier figure 511.1 the identical 94814GT is item 16 and carries a rod end (1256267GT ROD END,.5 X 3.75) and a 1/2-13 screw - i.e. angle-sensor linkage hardware. I checked the figure leader and both parts lists myself. — *106877.txt 8712-8714 (PM p.169), 8738-8740 (PM p.171), 8560-8572 (PM p.167); leader position from figs/pm168-pri-boom-sensor.png*
- `[V]` The original 94980 dual-output angle sensor is no longer available; first replacement is kit 217246GT, calibration required. — *106877.txt 8548-8558 (PM p.167)*
- `[V]` On the earlier figure 511.1 the primary boom cover exists in two regional versions: 107838GT PRIMARY BOOM COVER W/DECAL (USA, Canada, Australia) and 106277PGT COVER,PRIMARY BOOM,PAINTED (Europe, Asia, South America). Fig 511.2 lists only 106277PGT. — *106877.txt 8506-8515 (PM p.167)*
- `[V]` Genie builds a device lead on this same parts figure as a Deutsch DT receptacle fitted with pin terminals (119067GT 4-way receptacle, 60443GT 4-way lock, 73713GT pin terminal 14-18 AWG). These are sub-items of item 2, 110913GT SWITCH ASSY,LIMIT LSP1RO - a FOUR-way connector, not the six-way J114. — *106877.txt 8626-8646 (PM p.169)*
- `[V]` LSP1RO is defined as Limit Switch, Primary Boom #1 Retract Operational. — *1268557.txt 15355-15357 (SM p.203)*
- `[V]` TCON = turntable control box, the communication and operations centre of the machine, and it contains two key switches: the main ground/platform key switch and a Bypass/Recovery key switch. Bypass and Recovery "are not part of normal machine operation". — *1268557.txt 7566-7580 (PDF 113, SM p.99)*
- `[V]` The TCON is the ALC-1000 circuit board inside the ground control box; the box is opened by removing its lid fasteners. — *1268557.txt 7833-7846 (PDF 117, SM p.103); also figs/sm103-alc-board.png*
- `[V]` PCON = platform controls circuit board, which sends data to the TCON. — *1268557.txt 2482-2485 (PDF 40, SM p.26)*
- `[V]` The abbreviation list on SM p.193 spells the drive chassis controller "DCN", not "DCON". The spelling "DCON" appears in the connector legend on SM p.205. — *1268557.txt 13936-13937 (PDF 207, SM p.193) and 15468-15471 (SM p.205)*
- `[V]` SCON = Safety Controller: redundant dual axis tilt sensors measuring turntable X and Y tilt, and it provides safety switch logic for function cut-off. Its pin legend is on SM p.209. — *1268557.txt 15317-15320 (SM p.203); pin legend heading at 15979 (PDF 223, SM p.209) and figs/sm209-scon-pins.png*
- `[V]` Operator's Manual legend: item 2 Ground controls, item 3 Secondary boom, item 4 Primary boom, item 5 Jib boom, item 6 Platform. (The legend names the parts only; it does not describe how the booms stack, and this card no longer claims that.) — *114474.txt 1254-1261 (PDF 22, OM p.20)*
- `[V]` Ground control panel: the red E-stop pushed in stops all functions and turns the engine off, pulled out is the on position; the key switch selects off/ground/platform and the ground position makes the ground controls operate. — *114474.txt 1367-1381 (PDF 24, OM p.22)*
- `[V]` With the key at ground control and the ground E-stop pulled out, the display screen comes on - so the TCON is powered without starting the engine (engine start is the next step of that test). — *114474.txt 1828-1834 (PDF 33, OM p.31)*
- `[V]` Operating from the ground controls overrides the platform red Emergency Stop button. — *114474.txt 3127-3128 (PDF 49, OM p.47)*
- `[V]` Fault-code section default configuration, all seven bullets: firm level surface; key off with key removed; red E-stop off at both ground and platform controls; wheels chocked; all external AC power supply disconnected; boom stowed; turntable secured with the turntable rotation lock; plus welder disconnected if the weld-cable-to-platform option is fitted. The manual carries no "if fitted" qualifier on the rotation lock. — *1268557.txt 12056-12070 (PDF 185, SM p.171)*
- `[V]` Electrocution and burn hazard warning: remove all rings, watches and other jewellery. — *1268557.txt 12084-12088 (SM p.171)*
- `[V]` Genie's own sensor voltage check is done with the key at ground controls, the ground E-stop pulled out, and a voltmeter set to DC voltage back-probing the electrical connector - precedent for the method and the engine-off, battery-connected state used on this card. — *1268557.txt 11455-11465 (PDF 175, SM p.161, steer angle sensor procedure)*
- `[F]` Site photo: a dark grey/black Deutsch housing moulded DEUTSCH / IPD USA / DT04-6P, five wires seated (blue, red, yellow, green, white) running into black split loom, and one gold pin terminal hanging loose outside the housing. Which half of J114 this is cannot be told from the photo. — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo, read directly*
- `[F]` Site photo, enlarged by me at the bolt: the long green wire ends in a PINK INSULATED RING TERMINAL - the green wire enters the pink barrel and the barrel flares into a flat ring clamped under a hex bolt head with a washer, on a bare unpainted steel plate. It is not a butt splice (a butt splice joins two wires end to end and cannot land on a bolt), and the plate is not identified in any manual. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg photo, enlarged 4x at the bolt*
- `[F]` Site photos: two blue Scotchlok insulation-displacement taps on the J114 loom joining a green and a yellow conductor, with a free green loop between them; a freshly blue-painted cylindrical weldment on a bolted flanged base with bright zinc hardware and a rusty threaded pin standing in it, at the sensor position. — *2026-09-12-j114-scotchlok-taps-1.jpg photos -scotchlok-taps-1.jpg, -scotchlok-taps-2.jpg, -pivot-hardware.jpg*
- `[F]` Site photos are taken looking DOWN onto the pivot hardware, with the ground, gravel and a tyre well below the camera - so this work point is above ground level and needs planned access. The blue railed structure in the background sits at ground level and cannot be confirmed to be this machine's own platform. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg photo, background enlarged*
- `[F]` Machine identity and live fault list: Z13513-1861, 2013 Genie Z-135/70, 2162.4 hours; remaining codes primary and secondary boom angle crosscheck, primary boom angle zone, primary boom angle not calibrated, secondary boom switches, secondary boom angle sensor shorted / 0 V, TCON-SCON calibration inconsistent; axles brought in to retracted width; propel dead because P_38 is switched off. — *README.md 1, 150-161, 187-190 (case file, not a manufacturer document)*
- `[M]` Deutsch naming: DT04-nP is likely the receptacle housing holding pin (male) contacts and DT06-nS the plug holding socket (female) contacts; cavity numbers are likely moulded beside each hole on the wire-entry face. None of this is in the three Genie manuals - a grep for DT04 and DT06 across all three returns nothing. Worded as "likely" in the card and never used to decide which half is the harness. — *106877.txt 8639-8646 (partial support only)*
- `[M]` That harness cavity 1 mates with sensor cavity 1 is likely but not shown by the source: ES0366J prints only ONE row of cavity numbers at J114 and does not number the two mating halves. — *es-j114-primary-sensor.png figure*
- `[M]` The wire colours of the 216061GT kit sensor's own pigtail are not in the three manuals; the sensor-side colours in the pin table are simply the colours ES0366J draws. The sheet carries no part number for the sensor it draws, so attributing those colours to a specific sensor part is inference. — *106877.txt 7268, 8692, 9574, 20265 (PM); figure figs/es-j114-primary-sensor.png*
- `[M]` Nothing in the manuals or the case file establishes this machine's ES0366J "unit number", so it is not known which of the two factory jumper colour sets applies to serial Z13513-1861. The card therefore gives both sets and treats neither as proof of tampering. — *README.md whole file; grep for "unit #" returns only the schematic reference*
- `[M]` Reading a 2-3 volt result as a loaded supply or a resistive ground, reading a pin-to-metal versus pin-to-pin difference as a ground fault, and reading one-pair-good/one-pair-dead as a break in one short jumper, are engineering reasoning from the schematic. The manual gives only the 5.0 V target, the open-ground action, and the damaged-wiring / TCON LED action. — *1268557.txt 12578-12598 (SM p.177)*
- `[M]` A tolerance band around 5.0 V ("within a couple of tenths") is not in the manual; the bare sentence "Check for 5.0 VDC at the sensor." recurs ten times in the fault tables with no band ever given. — *1268557.txt 12594 and nine further occurrences (SM pp.177-186)*
- `[M]` How a technician safely reaches the primary boom pivot area is not described in any of the three manuals. The site photos show the work point is above ground level, so access must be planned to site rules. — *1268557.txt 5687-5689 (SM p.72)*

</details>


### C2: J154 secondary boom angle sensor - measure its 5 volt supply while J114 is unplugged

**What this finds out.** Find out whether the secondary boom angle sensor is really faulty, or whether it only looks faulty because the modified primary boom angle sensor plug (J114) is dragging down the 5 volt supply wire and the sensor ground wire that both sensors share. You do it by measuring the 5 volts at the secondary sensor plug (J154) and reading the fault list on the ground control screen twice: once with J114 unplugged, once with J114 plugged back in exactly as you found it.

**Where it is**

- *What it is:* J154 - the 6-pin Deutsch plug at the secondary boom angle sensor (Deutsch = the brand of round sealed plastic connector used all over this machine). Genie's own sensor names are RSS1AO for the operational half and RSS1AS for the safety half; on wiring sheet ES0366J the two halves are drawn as S19 SEC BM ANG OPER and S20 SEC BM ANG SAFETY.
- *Where on the machine:* On the turntable (the part that swings round on top of the tracks/chassis), on the ground-controls side - the side carrying the steel ground control box with the LCD screen, the red E-stop and the key switch. SM p.88, word for word: 'Locate the secondary boom angle sensor on the turntable riser bulkhead at the ground controls side of the machine.' The riser bulkhead is likely the upright plate of the turntable that carries the big pivot pin at the bottom of the secondary (riser) boom - the manual gives the term but never defines it, so treat that picture as likely, not certain [M]. It is NOT the primary boom angle sensor: SM p.81 puts that one 'inside the primary boom at the boom pivot pin', reached by removing the end cover at the pivot end of the primary boom. The primary sensor's plug, J114, is the one with the bright new blue hardware, the Scotchlok taps and the green wires.
- *How to find it:* 1) Main key OFF, ground E-stop pushed IN. 2) Stand on the ground until you are square in front of the ground control box, then look at the base of the riser (secondary) boom right beside you, where it pins to the turntable. 3) Find the short cable coming out at that pivot, or the small bolted cover at the pivot. 4) Follow the cable a few inches to the 6-way Deutsch plug - that is J154. 5) You should be able to reach and unplug the connector without taking the cover off: SM p.88 disconnects the electrical connector at step 2 and only removes the cover at step 3. If the plug really is tucked out of reach, undo the cover retaining fastener and lift the cover off. 6) Do not disturb the sensor, its arm or the rotator - their position IS the calibration reference. 7) Double-check you are not at J114: J114 is at the primary boom pivot, inside the primary boom behind an end cover, and it is the one that has been modified.
- *What it looks like:* An angle sensor at the pivot, reached under a cover held by a retaining fastener (SM p.88 step 3: 'Remove the angle sensor cover retaining fastener. Remove the cover'). SM p.202: 'The rotation or angle sensors utilize Hall Effect technology and must be calibrated when replaced' - Hall effect means it reads a magnet turning past it, so its position is its calibration. CAUTION on parts: SM section 4-9 describes a sensor on a mounting bracket with two springs and a hex-shaped key (the older build), while the Parts Manual group that covers this serial, PM fig 502.2 'Secondary Boom Tube 1 (from SN 1854)', shows a different stack: screw 217217GT (item 20), machined secondary sensor base 226493GT (21), angle sensor race 226491GT (22), the 180-degree clockwise angle sensor 216061GT (23), angle sensor holder 226492GT (25), sensor arm 233116GT (27). Items 20 to 28 together are sold as assembly 217224GT (item 29). The sensor rotator weldment #1, 233117GT (item 34), is a SEPARATE part - it is NOT included in 217224GT. The rotator likely turns the sensor arm as the boom pivots, but no manual text says so [M]. No 'angle sensor cover' part is listed in fig 502.2 (its only cover is item 35, 60177GT COVER,BOOM SIDE), so on this serial the sensor may or may not sit under the small cover the manual's older procedure describes - look for both [M]. A short cable (pigtail) leaves the sensor and ends in a 6-way Deutsch connector; that mated pair is J154. Identify the HARNESS half by its six wires: two green/white (P109ANG), two brown (SNSR GND), one orange (C142SBS) and one orange/black (C124SBS). On the schematic the sensor side has red, black, blue, orange, brown and yellow wires, but the replacement kit sensor's own colours are not in the manuals - always identify by the HARNESS colours, never by the sensor's.
- *Source:* SM p.88 (1268557.txt lines 6884-6902); SM p.81 (lines 6363-6379) and lines 5694-5695 for the primary sensor being inside the primary boom; SM p.202 (lines 15134-15135) for Hall Effect; SM p.207 (lines 15685-15687) for J154; PM p.138 fig 502.2 (106877.txt line 7128) and PM p.141 items 19-35 (lines 7254-7311); figs pm138-sec-boom-switches.png, es-j154-secondary-sensor.png

**Set the machine to**

- **Key:** Main key OFF for every plug and unplug. Main key in the GROUND position for measurements. Do not turn the separate bypass/recovery key switch, and do not move the calibration toggle switch at the top of the ground control box. Those are calibration-technician actions; calibration also needs the axles fully extended, which they are not.
- **E-stops:** Ground control box red E-stop pushed IN every single time you plug or unplug a connector. Pull it OUT only while you read volts or read the screen. Leave the platform (basket) red E-stop pushed IN for the whole card, so nobody can operate the machine from the basket.
- **Battery:** Connected. This card measures volts only; there are no resistance (ohm) tests. If you decide to measure resistance on a sensor or a wire later, disconnect the battery first (knowledge-base safety rule).
- **Engine:** OFF for the whole card. The 5 volt sensor supply and the LCD screen (LCD = the liquid-crystal display screen on the ground control panel) are alive with the key on and the red Emergency Stop button (E-stop) pulled out; the engine is not needed. SM p.89: the software version appears on the LCD when the E-stop is pulled out to the on position. SM p.91: during calibration the boom angle is read on the screen at step 14, and the engine is only started at step 15.
- **Also:** Axles RETRACTED (8 ft 1 in) as found, so boom functions are locked out by design - do not press any boom button. Booms stowed, firm level ground, wheels chocked. J114 (the primary sensor plug) is UNPLUGGED at the start of this card (done in card C1). Its loose pin terminal, the two blue Scotchlok taps (Scotchlok = a small blue plastic clip that bites through insulation to join two wires) and the green wires must be taped or capped so nothing can touch bare metal or each other while the plug hangs open. Live faults as the owner read them off the ground screen: primary boom angle sensor crosscheck; secondary boom angle sensor crosscheck; primary boom angle zone; primary boom angle sensor not calibrated; secondary boom switches fault; secondary boom angle sensor shorted / 0 V; TCON-SCON calibration inconsistent. These are the owner's words off the display, not text printed in the Service Manual - the manual's own wording for the last-but-one is Error Source 'Operational (or Safety) Secondary Boom Angle Sensor', Error Type 'Value at 0 V'.

**Connector — J154**

Circuit Connector Legend, SM p.207: 'J154 / 6 pin Deutsch connector for secondary boom angle sensor'. On wiring sheet ES0366J the six harness wires reach J154 in the drawn left-to-right order 1-2-3-6-5-4: pin 1 P109ANG-GR/WH (5 volt supply), pin 2 SNSR GND-BR (sensor ground), pin 3 C142SBS-OR (safety signal out to the SCON, the safety controller), pin 6 P109ANG-GR/WH (5 volt supply), pin 5 SNSR GND-BR (sensor ground), pin 4 C124SBS-OR/BK (operational signal out to the TCON, the turntable controller). Pins 1-2-3 feed the safety half S20; pins 6-5-4 feed the operational half S19. Just above the plug the two 5 volt wires are joined to each other at a solid junction dot, and the two ground wires are joined at a second junction dot - so on the harness side pin 1 and pin 6 are the same wire, and pin 2 and pin 5 are the same wire. That one 5 volt wire runs back to the TCON black 35-pin AMP connector J12 pin 26; that one ground runs back to J12 pin 25. J12 has only one P109ANG pin and only one SNSR GND pin in all 35 pins, and the primary sensor plug J114 is fed from those same two pins - that shared feed is exactly what this card tests. The harness half at J114 in the field photo is a Deutsch DT04-6P receptacle carrying pin (male) terminals; J154's half is likely the same style, but no manual states it, so identify the harness half by its wire colours, not by the housing [M]. Deutsch cavity numbers are likely moulded into the housing beside each cavity, but they are not legible in the field photo and the manuals do not mention them; note also that on this machine's 12-pin Deutsch drawing the numbering runs right to left, so never assume left-to-right [M].

*Source:* SM p.207 (1268557.txt lines 15685-15687); SM p.210 (lines 16175-16178, 16191-16192); SM p.209 (lines 15999-16000); figs es-j154-secondary-sensor.png, es-boom-sensors-wide.png, sm210-tcon-pins.png, sm209-scon-pins.png; photo 2026-09-12-j114-dt04-6p-loose-pin.jpg

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| 1 | P109ANG-GR/WH | green with a white stripe | red (RD) on the schematic's sensor pigtail; the replacement kit sensor's colour is not in the manuals | +5 volts DC sensor supply for the SAFETY half (S20 SEC BM ANG SAFETY) | TCON J12 pin 26 (P109ANG - GR/WH), via the junction dot just above the plug that it shares with pin 6. The same J12 pin 26 also feeds J114 pins 1 and 6. |
| 2 | SNSR GND-BR | brown | black (BK) on the schematic; kit sensor colour not in the manuals | Sensor ground (the 0 volt return) for the SAFETY half | TCON J12 pin 25 (SNSR GND - BR), via the junction dot just above the plug that it shares with pin 5. The same J12 pin 25 also feeds J114 pins 2 and 5. |
| 3 | C142SBS-OR | orange | blue (BL) on the schematic; kit sensor colour not in the manuals | SAFETY angle signal out of the sensor - the copy the SCON (safety controller) reads. Not measured for pass or fail in this card; write it down if you back-probe. | SCON black 12-pin Deutsch connector J122 pin 2 (C142SBS - OR) |
| 6 | P109ANG-GR/WH | green with a white stripe | orange (OR) on the schematic; kit sensor colour not in the manuals | +5 volts DC sensor supply for the OPERATIONAL half (S19 SEC BM ANG OPER) | The same wire as pin 1: the two branches meet at a junction dot above the plug and run on as one wire to TCON J12 pin 26. There is no separate TCON pin for pin 6. |
| 5 | SNSR GND-BR | brown | brown (BR) on the schematic; kit sensor colour not in the manuals | Sensor ground (the 0 volt return) for the OPERATIONAL half | The same wire as pin 2: the two branches meet at a junction dot above the plug and run on as one wire to TCON J12 pin 25. There is no separate TCON pin for pin 5. |
| 4 | C124SBS-OR/BK | orange with a black stripe | yellow (YL) on the schematic; kit sensor colour not in the manuals | OPERATIONAL angle signal out of the sensor - the copy the TCON reads and shows on the Machine Status screen. Not measured for pass or fail in this card; write it down if you back-probe. | TCON J12 pin 33 (C124SBS - OR/BK) |

**Do this**

1. Confirm the starting state left by card C1: J114 (the primary sensor plug, at the primary boom pivot) is unplugged, and its loose pin terminal, its two blue Scotchlok taps and its green wires are taped or capped so they cannot touch anything. Add no wire, no jumper and no bridge anywhere on this machine. Wheels chocked, booms stowed, axles left retracted.
2. At the ground control box: main key OFF, red E-stop pushed IN. Check that the platform (basket) E-stop is pushed IN as well, and tell anyone near the basket to stay off the controls.
3. Walk to the riser (secondary) boom pivot on the ground-controls side of the turntable and find J154 as described under Location. Try to reach the plug without removing the cover; only if you cannot, undo the cover retaining fastener and lift the cover off. Do not move the sensor, the sensor arm or the rotator.
4. Before you unplug, identify the two halves. The HARNESS half is the one with two green/white wires, two brown wires, one orange and one orange/black. The sensor half has different colours. Write down which half holds pins (little posts) and which holds sockets (little holes) - at J114 the harness-side half was a Deutsch DT04-6P carrying pins.
5. Unplug J154. Shine a torch into both halves and look for green or white corrosion, water, a bent pin, a terminal that has been pushed back out of its hole, or a missing wedge lock (the small orange or grey plastic comb that snaps into the front of a Deutsch connector and locks the terminals in). Write down what you see. Do not spread, pry or poke any terminal.
6. Set your multimeter to DC volts, 20 volt range (or auto-ranging DC V). Black lead in the COM socket, red lead in the volts socket.
7. Main key to GROUND. Pull the ground E-stop OUT. The LCD screen lights up. Do not start the engine.
8. Reading A1 (safety-half supply, J114 unplugged): put the BLACK probe on HARNESS pin 2 (brown, SNSR GND) and the RED probe on HARNESS pin 1 (green/white, P109ANG). Touch the flat face of the terminal squarely - do not push a probe down into a socket. Write the number down.
9. Reading A2 (operational-half supply, J114 unplugged): black probe on harness pin 5 (brown), red probe on harness pin 6 (green/white). Write it down.
10. Reading A3 (cross-check that both supply branches and both ground branches reach the plug): red on pin 1 with black on pin 5, then red on pin 6 with black on pin 2. Both should match A1 and A2. Write them down.
11. Ground E-stop pushed IN, main key OFF. Plug J154 back in, with J114 still unplugged. Push until the connector clicks fully home.
12. Main key to GROUND, E-stop OUT. Wait about 20 seconds so the controllers can power up and check their sensors, then read the LCD and copy down EVERY fault message word for word (scroll if the screen scrolls). You are looking in particular for the owner's two messages 'secondary boom angle sensor shorted / 0 V' and 'secondary boom angle sensor crosscheck'. Expect the primary faults to still be there - J114 is open on purpose.
13. Optional readout: with the key on, press the plus and minus buttons at the same time to open the Machine Status screen (SM p.107) and write down the 'Secondary boom angle' figure. The screen's stated range for that line is -3.5 to 76 degrees, and the manual footnotes it '(referenced to chassis tilt angle)'.
14. Optional, and only if you have a proper back-probe pin - a thin pin that slides in alongside the wire through the rubber seal at the back of the connector without piercing any insulation: with J154 plugged in and the key on, repeat A1 and A2 from the back of the harness half. This shows the supply while the sensor is actually drawing current. Note pin 4 to pin 5 and pin 3 to pin 2 as well (the two signal outputs). If you have any doubt, skip this step - damaged seals let water in and cause the next fault.
15. E-stop IN, key OFF. Now plug J114 back in EXACTLY as you found it. This is an as-found comparison only: add nothing, change nothing, and do not tidy the Scotchloks or the green wire (those come off in a later card). Leave J154 plugged in. While J114 is connected, do not press any boom, drive, rotate or platform button at all.
16. Key to GROUND, E-stop OUT, wait about 20 seconds, and copy down the full fault list again (call it Reading B-faults). Repeat the Machine Status secondary boom angle readout if you took it at step 13.
17. E-stop IN, key OFF. Unplug J154 again. Key to GROUND, E-stop OUT. Repeat readings A1 and A2 with J114 still connected; call these B1 and B2. Write them next to A1 and A2.
18. E-stop IN, key OFF. Plug J154 back in and refit its cover if you removed it. Then UNPLUG J114 again and re-tape or re-cap its loose pin terminal, its Scotchlok taps and its green wires - that is the end state this card leaves the machine in, so the modified splice is not sitting live on a safety input. Hand the five voltage numbers (A1, A2, A3, B1, B2) and the two fault lists to the person running the plan.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| A1: J154 harness pin 1 (green/white) to pin 2 (brown), key on, J114 UNPLUGGED, J154 unplugged | **5.0 volts DC. That is the figure the manual's recovery action names: 'Check for 5.0 VDC at the sensor.' The manual gives no tolerance band. A reading a few tenths under 5.0 V is likely still acceptable, and anything clearly pulled down - say below about 4.75 V - is likely suspect; both of those judgements are the author's, not Genie's [M]. A reading of 0 V is a clear fail.** | The TCON's 5 volts and its sensor ground both reach the secondary plug once the primary side is off the shared wire. Carry on to the fault-list step; the secondary supply is not the problem. | 0 V or a low reading WITH J114 already unplugged means the trouble is not the J114 splice job. It is upstream in the shared feed: TCON J12 pin 26 (P109ANG) and pin 25 (SNSR GND), the harness between the ground control box and the boom, or the TCON's own 5 volt output. The manual's own next check is 'Check that the 5.0 VDC LED is lit on the TCON board' (LED = the little indicator lamp on the controller circuit board inside the ground control box). The next card then goes to the TCON, not to the sensor. |
| A2: J154 harness pin 6 (green/white) to pin 5 (brown), same conditions | **5.0 volts DC, the same as A1.** | Both halves of the secondary sensor are being fed. Continue. | If A1 is good and A2 is not, or the other way round, the break is local: one of the two short branches between the junction dots above J154 and the plug, or a bad crimp at the plug itself. Repair that wire or terminal with the proper Deutsch terminal - never with a Scotchlok - and measure again. |
| A3: cross pairs - pin 1 to pin 5, then pin 6 to pin 2 | **The same as A1 and A2, about 5.0 volts.** | Both 5 volt branches and both ground branches are continuous all the way to the plug. | One branch is open even though the straight pairs read correctly. Find and repair it before you read the faults, or the fault list will mislead you. |
| A-faults: the LCD fault list with J154 PLUGGED IN and J114 UNPLUGGED, after a fresh power-up | **The owner's message 'secondary boom angle sensor shorted / 0 V' is GONE and, in the best case, 'secondary boom angle sensor crosscheck' is gone too. The primary faults stay - J114 is open on purpose. 'Secondary boom switches fault' should not change: it belongs to the two limit switches LSS1RO (limit switch, secondary boom #1 retracted, operational) and LSS1RS (the same, safety) - a completely different circuit from the angle sensor. 'Primary boom angle sensor not calibrated' and 'TCON-SCON calibration inconsistent' should not change either: those need calibration, which is not this card's job.** | The secondary sensor recovers as soon as the primary is off the shared wire. That means the J114 splice job is loading - shorting or dragging down - the shared 5 volt or ground wire. Repair the J114 wiring first and expect the secondary faults to clear with it. Do not buy a secondary sensor and do not buy a SCON. | If A1 and A2 were 5.0 V but the secondary 0 V message is still on the screen, either the fault is latched and needs a power cycle with the problem actually fixed (the manual's recovery action for other analogue sensor inputs is 'Power up controller with problem corrected'), or the trouble is inside the secondary circuit itself - the sensor 216061GT, its pigtail, or the signal wires: pin 4 C124SBS-OR/BK to TCON J12 pin 33, and pin 3 C142SBS-OR to SCON J122 pin 2. That becomes the next card. Do not use the Delete Faults menu in this card - it would throw away the evidence you came for. |
| B1, B2 and B-faults: the same two voltages and the same fault list with J114 PLUGGED BACK IN as found | **The comparison is the whole result. Healthy shared feed: B1 and B2 stay at 5.0 V and the secondary fault stays away. Loaded feed: B1 and B2 fall below A1 and A2, or drop to 0 V, and/or the 'secondary boom angle sensor shorted / 0 V' message comes back.** | If B stays at 5.0 V and the secondary fault stays away with J114 connected, the primary side is NOT pulling the secondary down. The earlier secondary fault was intermittent or latched - go back over the J154 terminals, seals and pigtail and treat the secondary sensor as its own separate job. | If the voltage drops, or the secondary fault returns the moment J114 is connected, that is your proof: the primary side - the loose pin terminal, the Scotchlok bridge, the green wire out to the pivot bolt, or a wrongly pinned kit sensor - is loading the shared supply or the shared ground. Put J114 right with proper Deutsch terminals and the factory pinout, then run this card once more. |
| Optional: the Machine Status 'Secondary boom angle' readout (press plus and minus together) | **A steady number somewhere inside the screen's stated range of -3.5 to 76 degrees. Do NOT treat -3.5 degrees as a pass/fail figure for a stowed boom: -3.5DEG is only the name printed on the calibration screen, and SM p.91 has the technician type in whatever a digital level actually measures on the boom. The manual also footnotes this line '(referenced to chassis tilt angle)', so the number moves with how the machine is sitting.** | The TCON is receiving a sensible operational signal on pin 4. | A blank, frozen or wildly out-of-range value while A1 and A2 are good points at the operational half of the sensor, or at pin 4's wire C124SBS-OR/BK. Note it for the next card. Because this machine's calibration state is unknown, treat the displayed number as a hint only, never as a verdict. |

**Why we are doing this.** The two crosscheck faults (primary and secondary boom angle) each switch off P_38, which is propel power, so the machine will not drive until they clear (Service and Repair Manual, SM p.189). J114 (primary) and J154 (secondary) are fed by the same pin for 5 volts on TCON (TCON = turntable controller, the main computer in the ground control box): J12 pin 26, wire P109ANG-GR/WH. They share the same sensor ground pin too: J12 pin 25, wire SNSR GND-BR. If the secondary sensor's 5 volts and its "0 volt" fault both come good when J114 is unplugged, the secondary side is healthy and the repair is the J114 wiring - do not buy a secondary sensor, a harness or a SCON (SCON = safety controller). If the secondary stays dead with J114 unplugged, the trouble is upstream in the shared feed (the TCON output or the harness) or in the secondary sensor circuit itself, and the next card goes there instead.

**Safety**

- Main key OFF and the ground red E-stop pushed IN before every single plug or unplug of J154 or J114. Pull the E-stop out only while you are actually taking a reading.
- Machine on firm, level ground, wheels chocked, booms stowed. The axles are retracted, and limit switches LSFA1ES and LSRA1ES (front and rear axle #1 extended safety switches) prevent boom functions with the axles retracted - that lockout is there on purpose. Do not press any boom, rotate or platform button, and do not try to raise a machine that is carrying these faults.
- Do not turn the bypass/recovery key switch, and do not move the calibration toggle switch at the top of the ground control box. The Operator's Manual says the recovery key position is for trained and authorized personnel only. Calibration is a separate trained-person job: the Service Manual puts a tip-over warning on it, it needs the bypass key position plus the calibration toggle before any value is saved, and it needs the axles fully extended.
- Never bridge, jumper, tap or bypass any pin of J114 or J154, and never add a wire to a sensor, a limit switch, a tilt sensor or a load cell. This card adds nothing: J114 goes back in only as found, only for the before-and-after comparison, and it comes back out again at step 18. Its splices are removed properly in a later card.
- While J114 hangs unplugged, keep its loose pin terminal, its Scotchlok taps and its green wires taped or capped so they cannot touch bare metal or each other and create a new short.
- While J114 is temporarily reconnected at steps 15 to 17, do not command any machine function at all. A field-modified safety angle-sensor circuit is live during that window; the engine stays off, the booms stay stowed and the platform E-stop stays pushed in.
- Engine OFF for the whole card. No hydraulic function is needed to check 5 volts.
- Volts only. Do not switch the meter to ohms (resistance) with the key on. If you go on to measure resistance on anything, disconnect the battery first (knowledge-base safety rule).
- Probe gently: touch the face of the terminal, do not push a probe into a socket, do not pierce wire insulation, and do not disturb the Deutsch wedge lock or the rubber rear seals.
- Do not move the sensor, its arm or the sensor rotator. Their position is the calibration reference; move them and you have created a new fault.
- Keep your hands clear of the boom pivot and do not stand anywhere the boom or riser could reach if someone commanded a function. Keep the platform E-stop pushed in so nobody can operate from the basket.

**Open questions on this card**

- Which half of J154 holds pins and which holds sockets? Inferred from the J114 photo (loom side is a DT04-6P with pin terminals) and tagged M. On the machine, identify the harness half by its two green/white wires, never by the housing type.
- Sensor-side pigtail colours at J154: the schematic's RD/BK/BL/OR/BR/YL set is drawn for the sensor of the original build. This serial is in the 'from SN 1854' group whose sensor is 216061GT (PM fig 502.2), and that sensor's own pigtail colours are not in any of the three manuals. Do not rely on sensor-side colours.
- Build mismatch, unresolved: the Service Manual's replacement procedure (SM 4-9, pp.88-89) describes a bracket with two springs and a hex-shaped key seating into the boom pivot pin, while PM fig 502.2 for this serial shows a base / race / holder / arm / rotator stack with no angle sensor cover listed. The 'remove the angle sensor cover retaining fastener' step may therefore not describe this machine. Tagged M in Location; look for both arrangements and photograph what you actually find.
- Is 'secondary boom angle sensor shorted / 0 V' self-clearing on power-up, or latched? The manual gives 'Power up controller with problem corrected' for other analogue inputs and describes a Delete Faults menu for latching faults, but says nothing explicit for this sensor. If the fault persists while 5.0 V is present, consider latching before condemning the sensor. This card does not use the fault-clearing menus.
- No manufacturer tolerance exists for the 5.0 VDC figure. The 'below about 4.75 V is suspect' line is the author's judgement and is tagged M.
- Two of the display strings used in this card are the owner's readings, not Service Manual text: 'secondary boom angle sensor shorted / 0 V' (the manual's wording is Error Source 'Operational/Safety Secondary Boom Angle Sensor', Error Type 'Value at 0 V') and 'TCON-SCON calibration inconsistent' (no match anywhere in 1268557.txt). Record the exact on-screen wording rather than matching it to these labels.
- The Machine Status 'Secondary boom angle' readout is footnoted '(referenced to chassis tilt angle)' and depends on calibration state, which is unknown on this machine. Treat the number as a hint only.
- Where the P109ANG and SNSR GND branches for J154 are physically spliced is not in the manuals - the schematic shows junction dots but gives no location in the harness.
- Side note carried forward to card C1: the J114 loom-side half in the photo shows a yellow wire, but the schematic's harness jumper set at J114 (RD, WH/BK, BL, OR, GR, WH) has no yellow - yellow is a sensor-pigtail colour there. Either that half is the kit sensor's own adapter, or the harness has been re-terminated. C1 must settle which half is which, otherwise this card's before-and-after comparison cannot be read safely.
- Parts figure 502.2 is drawn on PM p.138 and again on PM p.140, with its item list split across p.139 (items 1-18) and p.141 (items 19-45). Only the p.138 view has been read; the p.140 view may show the sensor stack installed, which would settle the physical picture.
- The 'Test the Secondary Boom Angle Sensor' procedure is not in this Service Manual's text. SM p.93 step 35 says to refer to the Maintenance Procedure 'in the appropriate Service or Maintenance Manual' - it leaves both books open, and neither is in the knowledge base.

<details><summary>Sources for this card (68 checked statements)</summary>

- `[V]` The secondary boom angle sensor is on the turntable riser bulkhead at the ground controls side of the machine. — *1268557.txt 6893-6895 (SM p.88, PDF 102)*
- `[V]` Purpose of the secondary boom angle sensor. — *1268557.txt 6884-6886 (SM p.88)*
- `[V]` The sensor's electrical connector is disconnected at step 2, BEFORE the cover is removed at step 3 - so the plug is normally reachable without removing the cover. — *1268557.txt 6896-6902 (SM p.88)*
- `[V]` The primary boom angle sensor is inside the primary boom at the pivot end, behind a boom end cover - NOT on the riser. — *1268557.txt 6373-6379 (SM p.81, PDF 95); corroborated at 5694-5695 'The primary boom angle sensor is located inside the primary boom at the pivot end.'*
- `[V]` Rotation and angle sensors on this machine use Hall Effect technology and must be calibrated when replaced. — *1268557.txt 15134-15135 (SM p.202, PDF 216)*
- `[V]` J154 is the 6 pin Deutsch connector for the secondary boom angle sensor. — *1268557.txt 15685-15687 (SM p.207, PDF 221)*
- `[V]` J114 is the 6 pin Deutsch connector for the primary boom angle sensor (PBAS = primary boom angle sensor). — *1268557.txt 15597-15599 (SM p.206, PDF 220)*
- `[V]` J12 is the black 35-pin AMP connector on the TCON. — *1268557.txt 15437-15438 (SM p.205, PDF 219)*
- `[V]` J122 is the 12-pin Deutsch black SCON connector. — *1268557.txt 15610-15611 (SM p.206)*
- `[V]` TCON J12 pin 25 is SNSR GND - BR (sensor ground, brown). — *1268557.txt 16175-16176 (SM p.210, PDF 224); read again in fig sm210-tcon-pins.png, J12 column*
- `[V]` TCON J12 pin 26 is P109ANG - GR/WH (5 volt sensor supply, green/white). — *1268557.txt 16177-16178 (SM p.210); fig sm210-tcon-pins.png*
- `[V]` TCON J12 pin 32 is C123PBS - RD/BK (primary boom angle, operational signal). — *1268557.txt 16189-16190 (SM p.210); fig sm210-tcon-pins.png*
- `[V]` TCON J12 pin 33 is C124SBS - OR/BK (secondary boom angle, operational signal). — *1268557.txt 16191-16192 (SM p.210); fig sm210-tcon-pins.png*
- `[V]` In all 35 pins of J12 there is exactly one P109ANG pin and exactly one SNSR GND pin, so both boom angle sensors are fed from the same two TCON pins. — *sm210-tcon-pins.png figure sm210-tcon-pins.png (SM p.210); same list in 1268557.txt lines 16124-16197*
- `[V]` SCON J122 pin 2 is C142SBS - OR (secondary boom angle, safety signal). — *1268557.txt 15999-16000 (SM p.209, PDF 223); read again in fig sm209-scon-pins.png, J122 column*
- `[V]` SCON J122 pin 3 is C141PBS - RD (primary boom angle, safety signal). — *1268557.txt 16003-16004 (SM p.209); fig sm209-scon-pins.png*
- `[V]` J154 harness-side wires by pin: 1 P109ANG-GR/WH, 2 SNSR GND-BR, 3 C142SBS-OR, 6 P109ANG-GR/WH, 5 SNSR GND-BR, 4 C124SBS-OR/BK, drawn in the left-to-right order 1-2-3-6-5-4. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png (ES0366J, SM p.229); same arrangement visible in es-boom-sensors-wide.png*
- `[V]` J154 sensor-side pigtail colours as drawn on the schematic: pin 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png*
- `[V]` Pins 1-2-3 feed the safety half S20 SEC BM ANG SAFETY; pins 6-5-4 feed the operational half S19 SEC BM ANG OPER. Both are drawn with the generic resistor-and-wiper (potentiometer) symbol. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png; schematic text 1268557.txt lines 18937-18938 (S19-SEC BM ANG OPER) and 19317-19318 (S20-SEC BM ANG SAFETY)*
- `[V]` At J154 the two P109ANG branches are joined to each other at a solid junction dot above the plug, and the two SNSR GND branches are joined at a second junction dot. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png*
- `[V]` J114 harness-side wiring (Unit #130 or higher): J20 pins 11, 12, 2, 10, 7, 6 carry P109ANG-GR/WH, SNSR GND-BR, C141PBS-RD, P109ANG-GR/WH, SNSR GND-BR, C123PBS-RD/BK; between J20 and J114 the jumper wires are RD, WH/BK, BL, OR, GR, WH into J114 pins 1, 2, 3, 6, 5, 4; sensor side RD, BK, BL, OR, BR, YL; devices S18 PRI BM ANG SAFETY and S17 PRI BM ANG OPER. (J20 is the connector between the turntable harness and the boom harness.) — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229); same group readable in es-boom-sensors-wide.png*
- `[V]` J114 and J154 are drawn on wires carrying the same two net names, P109ANG-GR/WH (5 volts) and SNSR GND-BR (sensor ground) - so the supply and ground are shared between the two boom angle sensors. — *es-boom-sensors-wide.png figure es-boom-sensors-wide.png plus figure sm210-tcon-pins.png. NOTE: the verticals leave the top of the crop, so no common bus bar is actually visible in the figure - the shared-net conclusion rests on the identical net names and the single pair of TCON pins.*
- `[V]` Wire suffix SBS means Secondary Boom Angle Sensor; PBS means Primary Boom Angle Sensor. — *1268557.txt 14192-14193 (SM p.195) and 14080-14081 (SM p.194)*
- `[V]` Genie sensor designators: RSS1AO = Secondary boom angle sensor; RSS1AS = Secondary boom angle sensor, safety. — *1268557.txt 15290-15293 (SM p.203, PDF 217)*
- `[V]` Fault table, Operational Secondary Boom Angle Sensor, Error Type 'Value at 0 V': effects are 'Primary up, Secondary up/down and Extend disabled, Alarm sounds'; recovery is to check for 5.0 VDC at the sensor, check the wiring, and check the 5.0 VDC LED on the TCON board. — *1268557.txt 12775-12776 and 12790-12797 (SM p.179, PDF 193)*
- `[V]` Fault table, Safety Secondary Boom Angle Sensor, 'Value at 0 V': the same recovery action. — *1268557.txt 12829-12853 (SM p.180, PDF 194)*
- `[V]` Secondary boom angle sensor 'Value at 5.0 V' means an open ground circuit to the sensor. — *1268557.txt 12777-12781 (SM p.179)*
- `[V]` Secondary sensor 'Not calibrated' leaves secondary up active only from the TCON and requires the calibration procedure. — *1268557.txt 12802-12806 (SM p.179)*
- `[V]` SCON fault matrix: Primary Boom angle (crosscheck) switches OFF P_38, P_39, P_10, P_11, P_30. — *1268557.txt 13654-13660 (SM p.189, PDF 203), under the column order set at 13641-13646; fig scon-fault-matrix.png*
- `[V]` SCON fault matrix: Secondary Boom angle (crosscheck) switches OFF P_38, P_39, P_11, P_30 (P_10 and P_9B blank). — *1268557.txt 13661-13667 (SM p.189); fig scon-fault-matrix.png*
- `[V]` P_38 is propel (drive) power. — *1268557.txt 13630 (SM p.189)*
- `[V]` The 'Secondary Boom Switches' fault belongs to limit switches LSS1RS and LSS1RO, not to the angle sensor, so this card will not change it. — *1268557.txt 13564-13580 (SM p.188, PDF 202); switch names at 15251-15254 (SM p.202): 'LSS1RO / Secondary boom fully retracted / LSS1RS / Secondary boom fully retracted, safety'*
- `[V]` Machine Status screen: with the key on, press plus and minus together; it lists 'Secondary boom angle' with range -3.5 to 76 degrees, footnoted as referenced to chassis tilt angle. — *1268557.txt 8128-8147 (SM p.107, PDF 121); footnote at 8146-8147*
- `[V]` -3.5DEG is the name on the calibration screen, not a stowed pass/fail value: the technician types in whatever a digital level measures on the boom. — *1268557.txt 7097-7105 (SM p.91, PDF 105)*
- `[V]` The LCD and the controllers are live with the E-stop pulled out and the engine not running. — *1268557.txt 6988-6990 (SM p.89, PDF 103)*
- `[V]` The secondary boom angle is readable on the display before the engine is started: calibration reads the -3.5DEG screen at step 14 and only starts the engine at step 15. — *1268557.txt 7101-7114 (SM p.91) - step 15 is at line 7114*
- `[V]` Calibration values are saved only with the key switch in the bypass position and the calibration toggle switch activated, so calibration is a separate trained-person job, not part of this card. — *1268557.txt 7291-7294 (SM p.93, PDF 107); the same note also appears at 7063-7066 (SM p.90)*
- `[V]` The calibration toggle switch is at the top of the ground control box. — *1268557.txt 7280-7283 (SM p.93, PDF 107); same wording at 7049-7052 (SM p.90)*
- `[V]` Secondary boom angle sensor calibration requires the axles fully extended (they are retracted now). — *1268557.txt 6997-7000 (SM p.89, PDF 103)*
- `[V]` Calibration carries a tip-over hazard warning. — *1268557.txt 6980-6984 (SM p.89)*
- `[V]` Ground control panel has an LCD readout screen, a red Emergency Stop button (push in = off, pull out = on), and a key switch with off / ground / platform positions. — *114474.txt 1354, 1367-1371, 1375-1381 (OM p.22, PDF 24)*
- `[V]` The bypass/recovery key switch is a separate switch on the ground control panel, and the recovery position is for trained and authorized personnel only. — *114474.txt 1404 and 1410-1411 (OM p.22)*
- `[V]` Parts figure 502.2 'Secondary Boom Tube 1 (from SN 1854)' is on PM p.138; its secondary angle sensor items are listed on PM p.141. — *106877.txt 7128 (PM p.138 heading) and 7254-7292 (PM p.141); fig pm138-sec-boom-switches.png carries the same title and the page-138 footer*
- `[V]` Item 23 216061GT is a 180-degree clockwise angle sensor; sensor and magnet are matched and calibration is required after installation. — *106877.txt 7268-7271 (PM p.141)*
- `[V]` Item 29 217224GT is the complete secondary angle sensor assembly and includes items 20 to 28 ONLY - it does not include the sensor rotator weldment, item 34. — *106877.txt 7289-7292 (PM p.141)*
- `[V]` Item 34 is 233117GT, WLDT, SENSOR ROTATOR #1 - a separately listed part. — *106877.txt 7305-7307 (PM p.141)*
- `[V]` The only cover listed in parts figure 502.2 is item 35, 60177GT COVER,BOOM SIDE - there is no 'angle sensor cover' part in this from-SN-1854 group. — *106877.txt 7308-7311 (PM p.141)*
- `[V]` Parts figure 502.2 explodes the sensor stack as a row of callouts (28, 27, 23, 26, 25, 24, 23, 22, 21, 20) beneath a heavy arrow, and item 23 is drawn as a small sensor body on a short cable ending in a connector. The figure does NOT label which pivot the stack belongs to. — *pm138-sec-boom-switches.png figure pm138-sec-boom-switches.png (PM p.138); item 1 is 119848GT ASSEMBLY,RISER BOOM #1 at 106877.txt lines 7139-7141. The physical location of the sensor comes from SM p.88, not from this drawing.*
- `[V]` This machine, serial Z13513-1861, falls in the 'from SN 1854' parts group, so figure 502.2 (not 502.1, 'to SN 1853') applies. — *README.md README line 1; 106877.txt lines 7128 and 6780. The serial-to-group match is arithmetic (1861 > 1854) from the case file, not a Genie statement about this unit.*
- `[V]` Service Manual section 4-9 describes the secondary sensor as being on a mounting bracket with two springs and a hex-shaped key engaging the boom pivot pin - a build that does not match the base/race/holder/arm/rotator stack of PM fig 502.2 for this serial. — *1268557.txt 6903-6956 (SM pp.88-89)*
- `[V]` The manual's recovery wording for other analogue sensor inputs is 'Power up controller with problem corrected' - the basis for cycling power before re-reading the fault list. — *1268557.txt 13224-13225 (SM p.184, PDF 198, Platform Rotate Joystick) and 13588-13589 (SM p.188, PDF 202, Jib Angle Sensor Operational). Note: PDF 198 prints page number 184 at line 13186, so this is SM p.184.*
- `[V]` Some faults latch; the Delete Faults menu resets active latching faults (not used in this card). — *1268557.txt 8197-8201 (SM p.107)*
- `[V]` TCON is the turntable control box and it is the communication and operations centre for the machine. — *1268557.txt 7569-7570*
- `[V]` The TCON (ALC-1000 circuit board) is in the ground control box. — *1268557.txt 7974-7976 (quoted separately from the TCON definition above - the two sentences are on different pages and must not be spliced)*
- `[V]` SCON is the Safety Controller: redundant dual-axis tilt sensors plus the safety switch logic for function cut-off. — *1268557.txt 15317-15320 (SM p.203); the SCON abbreviation also appears at 11000 'Note: If the Safety Controller (SCON) has been'*
- `[V]` LSFA1ES and LSRA1ES are the front and rear axle #1 extended safety limit switches, and they prevent boom functions with the axles retracted - which is why no boom button may be pressed in this card. — *1268557.txt 15322-15329 (SM p.203, PDF 217); the bare name list is at 15263-15266 (SM p.202)*
- `[V]` Envelope limit switches are the group that senses extended length and angle of the booms and rotational position of the turntable - the plain meaning behind 'envelope faults'. — *1268557.txt 15136-15139 (SM p.202)*
- `[V]` Knowledge-base safety rule: key OFF and E-stop IN before unplugging any connector; battery disconnected for resistance tests. — *README.md README lines 59-60 (under 'Non-negotiable safety rules'); this is a knowledge-base rule, not manufacturer text*
- `[V]` The axle retraction lockout applies to boom functions only; the limit switches do not prevent retraction itself. — *README.md README lines 18-19*
- `[F]` Live fault list as found - the owner's reading of the ground display, in the owner's words. — *README.md README lines 154-161. None of these display strings appears verbatim in 1268557.txt.*
- `[F]` At J114 the loom-side half is a Deutsch DT04-6P receptacle carrying pin terminals, with five wires seated (red, blue, yellow, green, white visible) and one pin terminal hanging loose. — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo 2026-09-12-j114-dt04-6p-loose-pin.jpg*
- `[M]` J154's harness half is likely the same DT04-6P (pin) style as J114's - identify it on the machine by wire colours instead.
- `[M]` Deutsch cavity numbers are likely moulded into the connector housing beside each cavity; numbering is not necessarily left to right (on this machine's 12-pin Deutsch drawing the top row runs 6 down to 1 left to right), so use wire colours, not position.
- `[M]` The manual states 5.0 VDC with no tolerance. Treating a reading a few tenths under 5.0 V as likely acceptable, and anything clearly pulled down (say below about 4.75 V) as likely suspect, is the author's judgement.
- `[M]` Waiting about 20 seconds after power-up before reading the fault list is likely a reasonable settle time. The manual's only 20-second wait is in the calibration exit sequence, not a fault-evaluation specification. — *1268557.txt 7219-7221 (SM p.92, PDF 106) - calibration shutdown context only*
- `[M]` The sensor rotator weldment 233117GT likely turns the sensor arm as the boom pivots.
- `[M]` On this serial the sensor may not sit under the small bolted 'angle sensor cover' that SM section 4-9 describes, because that procedure matches the older bracket/springs/hex-key build and no such cover is listed in PM fig 502.2.
- `[M]` The 'turntable riser bulkhead' is likely the upright plate of the turntable carrying the pivot pin at the bottom of the secondary (riser) boom.

</details>


### C3-C4: Which pins does the Scotchlok loop join, and which pin is loose?

**What this finds out.** This card is a read-only map of a modification somebody made to the primary boom angle sensor wiring. With the battery disconnected, you measure resistance (ohms) between every pair of the six cavities at J114 - the 6-cavity plug for the primary boom angle sensor. Those readings tell you which two wires the two blue Scotchlok tap-splices and their green jumper have joined together, and which circuit the one loose gold terminal belongs to. (Scotchlok is a brand of IDC tap-splice. IDC = insulation-displacement connector: a small plastic clamp with a metal blade inside that cuts through a wire's insulation to touch the copper, so the wire is never cut or stripped.) Nothing is cut, moved or reconnected on this card. You write down numbers and hand them on, so the repair card knows exactly what to undo and which terminal to order.

**Where it is**

- *What it is:* J114, the 6-cavity Deutsch connector for the primary boom angle sensor (PBAS), and the sensor itself, at the pivot end of the PRIMARY boom. (Deutsch is the connector brand; DT is its sealed automotive series.)
- *Where on the machine:* IMPORTANT - GET THE RIGHT BOOM. On this machine the boom sections run outward from the turntable in this order: secondary boom first, then primary boom, then jib boom, then the platform. That is the Operator's Manual legend. So the SECONDARY boom is the big lower riser that comes off the turntable, and the PRIMARY boom is the section beyond it. The primary boom's pivot end - where J114 lives - is therefore up where the primary boom hinges onto the top end of the secondary boom riser, not down at the turntable. The field photos confirm this: they look steeply down onto the ground from well above it.

DO NOT CONFUSE IT WITH THE OTHER SENSOR. The boom angle sensor that really does sit on the turntable is the SECONDARY boom angle sensor - the Service Manual puts it 'on the turntable riser bulkhead at the ground controls side of the machine'. That is a different sensor on a different card. If you find yourself working at the turntable, you are at the wrong one.

The Service Manual says the primary boom angle sensor is 'located inside the primary boom at the pivot end', behind the boom end cover at that pivot end. Parts Manual figure 511.2, 'Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854)', is the figure that applies to this machine (serial Z13513-1861) and draws the sensor, its rotator weldment and its pin weldment at that pivot, with the cover as item 6.
- *How to find it:* Get up to the primary boom pivot - the joint between the secondary boom riser and the primary boom - with the boom stowed. Look for a freshly blue-painted square block bracket held down by two bright plated hex bolts, with a rusty knurled-cap pin standing up out of it through two flat grey plates or collars. A black corrugated (ribbed) plastic loom runs past that bracket and down. The connector you want is on that loom. (Photo 2026-09-12-j114-pivot-hardware.jpg shows exactly this. Do NOT look for a visible rotator arm - the sensor and its rotator sit inside the boom behind the cover and are not in that photo.)

The boom end cover (Parts Manual figure 511.2 item 6, part 106277PGT, 'COVER,PRIMARY BOOM,PAINTED') normally hides the sensor. In the field photos the connector was already hanging outside, so the cover may already be off. If it is still on, remove its retaining fasteners and lift it off, exactly as the Service Manual's own procedure step says.

Which side of the boom: the manuals do not state a side for the primary boom angle SENSOR. They only say the retract LIMIT SWITCH is 'on the ground controls side of the primary boom'. So the sensor is likely on the ground-controls side, but treat that as unconfirmed and look at both sides.
- *What it looks like:* A grey-black Deutsch DT connector about the size of your thumb, moulded on its side with three lines of text: DEUTSCH / IPD USA / DT04-6P. Six wire cavities. One gold male pin terminal is hanging outside the housing on its own wire - that is the loose terminal. At the housing's wire end a black corrugated loom starts; the conductors visible entering it read blue, red, yellow, green and white.

Roughly 8 to 12 inches back along that loom sit two bright-blue Scotchlok IDC tap-splices, with a short green jumper wire looped from one to the other. The lower tap is clamped over a yellow conductor. The conductor under the upper tap cannot be identified from the photographs - the ohm test, not the colour, decides it.

Also visible in photo 2026-09-12-j114-scotchlok-taps-2.jpg: a conductor beside the lower tap has exposed, frayed bare copper strands sticking out. Photograph that and note it; it bears directly on whether a tap has actually bitten through and on whether a conductor is broken.

Separately, a long teal-green wire leaves the loom and runs away to a pink insulated crimp connector at a bolt on a large bare grey machined plate at the pivot (not on the small blue sensor bracket). Whether that pink crimp is a ring terminal clamped under the bolt or a butt splice joining a short lead that goes under the bolt cannot be told from the photo. Record which it is when you get there.
- *Source:* OM p.20 boom legend (114474.txt lines 1252-1261); SM p.81 (1268557.txt lines 6373-6379); SM p.72 (lines 5687-5689, 5694-5695); SM p.88 (lines 6892-6895); PM p.168 fig 511.2 title (106877.txt line 8611) and figure pm168-pri-boom-sensor.png; PM p.169 (lines 8656-8658, 8662-8667); photos 2026-09-12-j114-pivot-hardware.jpg, 2026-09-12-j114-dt04-6p-loose-pin.jpg, 2026-09-12-j114-scotchlok-taps-1.jpg, 2026-09-12-j114-scotchlok-taps-2.jpg, 2026-09-12-j114-green-wire-to-pivot-splice.jpg

**Set the machine to**

- **Key:** Key switch OFF and the key removed. Do not use the bypass or recovery key positions on this card - the Service Manual has a separate bypass/recovery key switch section (6-1, p.99) and those positions belong to the calibration technician.
- **E-stops:** Red Emergency Stop (E-stop) buttons pushed IN (off position) at BOTH the ground controls and the platform controls, before any connector is touched. This is the Service Manual's standard first step before electrical work.
- **Battery:** Negative (-) battery cable disconnected at the battery, folded back and taped so it cannot spring back onto the post. Required for every reading on this card: a resistance (ohm) reading taken on a live circuit is wrong, and it can damage the meter. Leave the battery off until every ohm test in the plan is finished. The Service Manual's own resistance test starts the same way - disconnect the wiring first.
- **Engine:** OFF. Do not start it at any point during this card.
- **Also:** Machine on firm level ground, wheels chocked, boom fully stowed. The axles stay exactly where they are - they are currently retracted (the case file records the owner brought them in and the machine is now at retracted width). Retracted width for this model is 8 ft 1 in (2.5 m) per the Operator's Manual specification table. Leave them retracted: the manual states the axle-extended safety limit switches LSFA1ES and LSRA1ES prevent boom functions with the axles retracted, which is one more reason nothing can move while you work. Photograph everything before touching it. Do not cut, unclip, reseat or move the Scotchloks, the green jumper, the loose terminal or the long green wire on this card. ACCESS: the primary boom pivot is NOT at ground level (see location). Reach it from a stable ladder, a scaffold or another machine's platform. Do not climb on the boom structure. (Access method is general good practice, not a manual instruction.)

**Connector — J114 - primary boom angle sensor (PBAS). It is a two-part connector: the DT04-6P receptacle half (the half that holds male PIN terminals - this is the half in the photographs), and its mating plug half (which holds female SOCKET terminals).**

Service Manual connector legend: 'J114 / 6 pin Deutsch connector for primary boom / angle sensor (PBAS)'.

On electrical schematic sheet ES0366J the six J114 wires arrive through connector J20, which the legend calls a '12 pin Deutsch connector lower/upper limit switch harness'. The schematic draws J20 cavities 11, 12, 2, 10, 7 and 6 feeding J114 cavities 1, 2, 3, 6, 5 and 4 in that order. Those cavity numbers 1 to 6 are the numbers used throughout this card.

What is joined upstream: cavity 1 and cavity 6 are both the sensor supply wire P109ANG-GR/WH, and the schematic joins them with a filled junction dot. Cavity 2 and cavity 5 are both the sensor ground wire SNSR GND-BR, joined by a second junction dot. Read this carefully - BOTH dots are drawn ABOVE the J20 boundary, that is, on the controller side of J20. So the path from J114 cavity 1 to cavity 6 runs out through J20-11, across the junction, and back in through J20-10; likewise 2 to 5 runs out through J20-12 and back through J20-7. That continuity exists only while J20 is mated and its terminals are seated.

Cavity 3 (C141PBS-RD) and cavity 4 (C123PBS-RD/BK) are the two separate signal wires and the schematic shows no connection between them anywhere.

The sensor side is drawn as two completely separate elements with no node in common: S18-PRI BM ANG SAFETY across cavities 1 and 2 with its wiper on cavity 3, and S17-PRI BM ANG OPER across cavities 6 and 5 with its wiper on cavity 4. (A wiper is the moving contact that slides along a resistive track inside a potentiometer-type sensor and produces the varying signal.) Because the two elements are separate, any measurement that crosses from one element to the other must read open on the sensor side.

TWO DIFFERENT HARNESS COLOUR SETS EXIST. ES0366J carries two J20-to-J114 blocks with completely different wire colours: one marked 'UNIT #130 OR HIGHER' (cavities 1,2,3,6,5,4 = RD, WH/BK, BL, OR, GR, WH) and another marked 'UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)' (cavities 1,2,3,6,5,4 = OR, GR, RD, RD/BK, BK, GR/BK). The manuals do not say which unit number this machine is, so colour alone cannot identify a cavity. Use the moulded cavity numbers.

The 5 volt figure: the schematic itself puts no voltage on the P109ANG net. The 5.0 volts comes from the fault-table recovery text, which says to 'Check for 5.0 VDC at the sensor' and to check that the 5.0 VDC LED is lit on the TCON board.

J154, the secondary boom angle sensor connector, uses the same cavity-to-wire pattern (1 and 6 P109ANG-GR/WH, 2 and 5 SNSR GND-BR, 3 C142SBS-OR, 4 C124SBS-OR/BK) and therefore shares the same supply and ground wires as J114. One difference worth knowing before you go looking: J154 is drawn straight onto the sheet with no J20 pass-through, so J154 has no J20 cavity numbers of its own.

*Source:* SM p.206 (1268557.txt lines 15597-15599); SM p.205 (lines 15448-15450); SM p.177 (lines 12594-12597); figures es-j114-primary-sensor.png, es-boom-sensors-wide.png, es-scon-boomsensors.png, es-j154-secondary-sensor.png (crops of ES0366J, SM p.229 = PDF 243)

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| 1 | P109ANG - GR/WH (green/white) - sensor supply, about 5 volts when live | UNIT #130 OR HIGHER variant: RD (red). UNIT #129 OR LOWER variant: OR (orange). Which variant this machine is, is not stated in the manuals - use cavity numbers, not colour. | RD (red) on the two-potentiometer sensor drawn on ES0366J. The colours of the current replacement sensor (kit part 216061GT) are published nowhere in the three manuals. | Sensor supply feeding the safety element S18-PRI BM ANG SAFETY. Same circuit as cavity 6 - the two are joined by a junction dot on the controller side of J20. | J20 cavity 11, then on to TCON J12 pin 26, listed as 'P109ANG - GR/WH'. J12 is the black 35 pin AMP connector on the TCON. (AMP is the brand of that multi-way plug on the controller board.) |
| 2 | SNSR GND - BR (brown) - sensor ground | UNIT #130 OR HIGHER: WH/BK (white/black). UNIT #129 OR LOWER: GR (green). | BK (black) on the sensor drawn on ES0366J | Ground return for the safety element S18. Same circuit as cavity 5 - joined by a junction dot on the controller side of J20. | J20 cavity 12, then TCON J12 pin 25, listed as 'SNSR GND - BR' |
| 3 | C141PBS - RD (red) | UNIT #130 OR HIGHER: BL (blue). UNIT #129 OR LOWER: RD (red). On the #129-or-lower variant there is no blue conductor at J114 at all, so blue is not a safe identifier. | BL (blue) on the sensor drawn on ES0366J | SAFETY signal - the wiper of S18-PRI BM ANG SAFETY. This is the SCON's (safety controller's) copy of the primary boom angle. | J20 cavity 2, then SCON J122 pin 3, listed as 'C141PBS - RD'. J122 is the 12 pin Deutsch black SCON connector. |
| 4 | C123PBS - RD/BK (red/black) | UNIT #130 OR HIGHER: WH (white). UNIT #129 OR LOWER: GR/BK (green/black). | YL (yellow) on the sensor drawn on ES0366J | OPERATIONAL signal - the wiper of S17-PRI BM ANG OPER. This is the TCON's (turntable controller's) copy of the primary boom angle. It must never be tied to cavity 3; that is exactly what the two controllers compare. | J20 cavity 6, then TCON J12 pin 32, listed as 'C123PBS - RD/BK' |
| 5 | SNSR GND - BR (brown) - sensor ground | UNIT #130 OR HIGHER: GR (green). UNIT #129 OR LOWER: BK (black). | BR (brown) on the sensor drawn on ES0366J | Ground return for the operational element S17. Same circuit as cavity 2 - joined on the controller side of J20. | J20 cavity 7, then TCON J12 pin 25, 'SNSR GND - BR' |
| 6 | P109ANG - GR/WH (green/white) - sensor supply | UNIT #130 OR HIGHER: OR (orange). UNIT #129 OR LOWER: RD/BK (red/black). | OR (orange) on the sensor drawn on ES0366J | Sensor supply feeding the operational element S17-PRI BM ANG OPER. Same circuit as cavity 1 - joined on the controller side of J20. | J20 cavity 10, then TCON J12 pin 26, 'P109ANG - GR/WH' |

**Do this**

1. Shut the machine down. At the ground controls turn the key switch OFF and take the key out. Push the red Emergency Stop (E-stop) button IN at the ground controls, then go to the platform and push the platform E-stop IN as well. Engine off. Wheels chocked. Boom stays stowed; axles stay retracted. Do not use the bypass or recovery key positions.
2. Disconnect the battery. Take the negative (-) cable off the battery post, fold it back and tape it so it cannot swing onto the post. Every reading on this card is a resistance (ohm) reading and must be taken with the battery off. Take off rings, watches and other jewelry first - the Service Manual warns of an electrocution and burn hazard.
3. Go to the RIGHT joint. The boom sections run outward from the turntable as: secondary boom, then primary boom, then jib boom. You want the pivot where the PRIMARY boom hinges onto the top of the SECONDARY boom riser - not the turntable. (The sensor on the turntable riser bulkhead is the SECONDARY boom angle sensor and is not this card.) That pivot is above ground level, so reach it from a stable ladder, a scaffold, or another machine's platform. Do not climb on the boom structure.
4. Find the hardware. Look for the freshly blue-painted block bracket held by two bright plated hex bolts, with a rusty knurled-cap pin standing out of it through two flat grey plates (photo 2026-09-12-j114-pivot-hardware.jpg). A black corrugated loom runs past that bracket. The connector is on that loom. If the boom end cover (Parts Manual figure 511.2 item 6, part 106277PGT) is still fitted, remove its retaining fasteners and lift it off; in the photos it was already open.
5. Photograph everything exactly as found, before you touch anything: the connector face, the loose gold terminal and the wire it is on, both blue Scotchlok taps, the green jumper between them, the frayed bare copper strands visible beside the lower tap, and the long green wire running to the pink crimp at the bolt. Do not cut, unclip, reseat or move anything on this card.
6. Identify the two halves. Half A is the grey Deutsch housing moulded DEUTSCH / IPD USA / DT04-6P, with five wires seated, one gold male pin terminal hanging loose, and the two blue Scotchloks on its wires. Half B is whatever mates to it. Follow Half A's loom by hand: if it runs into the boom and away toward the turntable and the ground control box, it is the MACHINE HARNESS half; if it ends at the sensor on the pivot pin, it is the SENSOR PIGTAIL half. (A pigtail is the short lead moulded onto the sensor itself.) Write down which it is. Every reading in this card means something different depending on the answer.
7. If the two halves are still plugged together, press the latch tab on the plug and pull them straight apart. Pull on the connector bodies, never on the wires.
8. Also check J20. Find the 12-cavity Deutsch connector J20 on the limit switch harness and confirm it is still plugged in and latched. This matters: the schematic joins J114 cavities 1-to-6 and 2-to-5 on the far side of J20, so if J20 is unplugged those pairs read open on the harness half and prove nothing. Do not unplug J20.
9. Read the cavity numbers on Half A. Deutsch DT housings normally carry the numbers 1 to 6 moulded into the plastic beside each hole - check both the mating face and the wire-entry end. Cavity numbers are your identification. Do NOT fall back on wire colour: the schematic carries two different colour sets for this connector ('UNIT #130 or higher' and 'UNIT #129 or lower'), the manuals do not say which one this machine uses, and the colours visible in the field photos match neither set cleanly. Find the EMPTY cavity - the hole the loose gold terminal came out of - and write down its number. That number is the loose terminal's identity.
10. Set the multimeter to ohms, lowest range or auto-range. Touch the two probe tips together and note the reading (normally 0.1 to 0.5 ohm). That is your lead resistance, your zero. Any pair that reads within about 1 ohm of it is almost certainly one and the same conductor. Treat that as a working rule of thumb only - the manuals publish no resistance value for this circuit.
11. Make a 15-line table: 1-2, 1-3, 1-4, 1-5, 1-6, 2-3, 2-4, 2-5, 2-6, 3-4, 3-5, 3-6, 4-5, 4-6, 5-6. Work on Half A only, with nothing plugged into it. Use fine probe tips and touch the metal terminal inside each cavity from the front. Never force a fat probe into a socket cavity - you will spread it and create a new intermittent fault. For the empty cavity, put the probe on the loose gold terminal itself. Record every pair in ohms, or OL for open (OL = over limit, the meter's way of saying no connection; some meters show 1 or a blank instead).
12. Read your table against the expected-values list below, using the harness-or-pigtail answer from step 6. Name each low pair from the pin table: 3-4 = safety signal tied to operational signal, a crosscheck defeat; 1-6 = the two supply wires; 2-5 = the two ground wires; 1-2 or 6-5 = supply to ground within one element; 3-1 or 4-6 = a signal pulled to its own supply; 3-2 or 4-5 = a signal pulled to its own ground. Any pair that crosses between the two sensor elements (1-5, 6-2, 3-6, 4-1, 3-5, 4-2) should read OPEN on the sensor pigtail half - if one of those reads low there, something is joining the two halves of the sensor.
13. Now find the Scotchloks physically. Follow the green jumper: it enters one blue tap clamped on one wire, and its other end enters the second blue tap clamped on a different wire. Without opening the taps, trace those two wires back to their cavity numbers on Half A. The pair you trace must be one that read low in step 11. If it did not, the tap has not bitten through the insulation and the loop is doing nothing electrically - it still comes off on the repair card. While you are there, look again at the frayed bare copper strands beside the lower tap: write down which conductor they belong to and whether that conductor is cut through.
14. Ring out the loose terminal. Measure from the loose gold terminal to each of the other five terminals on Half A. On the MACHINE HARNESS half: low to cavity 1 or 6 means the loose wire is the other supply wire (P109ANG); low to cavity 2 or 5 means it is the other ground wire (SNSR GND); open to all five means it is a signal wire, either cavity 3 (C141PBS, the safety signal to the SCON) or cavity 4 (C123PBS, the operational signal to the TCON), and the empty cavity number from step 9 tells you which. On the SENSOR PIGTAIL half the sensor may read open to everything, so there the empty cavity number is your only answer.
15. Optional second proof, on the harness half only, and only under a different card: the far end of the cavity 3 wire C141PBS-RD is SCON J122 pin 3; the far end of the cavity 4 wire C123PBS-RD/BK is TCON J12 pin 32. Ringing to those means opening the ground control box and unplugging J12 or J122. Do that only under the ground-control-box card, key off, E-stop in, battery off. Do not do it here.
16. Write down, one line each: (a) Half A is harness or sensor pigtail; (b) J20 was mated / not mated; (c) the Scotchlok pair is cavities __ and __ , which are (names from the pin table); (d) the loose terminal came out of cavity __ , which is (wire name); (e) which conductor has the frayed strands and whether it is cut; (f) what the pink crimp at the pivot bolt actually is - ring terminal or butt splice.
17. Terminals to order - read the caveat before ordering anything. Half A holds male PIN terminals (the loose one is a gold male pin), so the mating half holds female SOCKET terminals. The Parts Manual does NOT list any terminal, housing or lock for J114 - angle sensor figure 511.2 contains no connector parts for the sensor at all. The Genie numbers 73713GT 'TERMINAL, PIN, DT, 14-18 AWG' and 73714GT 'TERMINAL, SOCKET, DT, 14-18 AWG' appear in the Parts Manual only as parts of OTHER connectors; 73713GT is a sub-item of the retract limit switch assembly (item 2, 110913GT), whose housing is a 4-way. They are candidates only because the size class matches (AWG = American Wire Gauge, the wire-size number; OD = outside diameter, here 0.095-0.150 in). Confirm the correct 6-way terminal with the supplier before ordering; do not present these numbers as the manual's answer for J114.
18. Leave everything exactly as found. Do not plug the halves back together and do not reconnect the battery until every ohm test in the whole plan is finished. Hand the table and the photographs to the repair card.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Probe tips touched together, meter set to ohms | **0.1 to 0.5 ohm - this is your lead resistance** | Use it as your zero. A pin pair within about 1 ohm of it is almost certainly one conductor. | Reads OL, or jumps around: bad leads or a flat meter battery. Fix the meter before you test the machine. |
| Pair 3-4 on Half A - safety signal to operational signal | **OL / open, on either half. The schematic shows no connection anywhere between C141PBS-RD and C123PBS-RD/BK, and on the sensor side the two elements S18 and S17 share no node at all.** | The Scotchlok loop is not a crosscheck defeat. Carry on through the rest of the table. | A low reading means the safety and operational signals are tied together, so the SCON and TCON are being fed one signal. That is a defeat of the crosscheck and it is the single most important finding on this card. Record it, photograph it, and hand it to the repair card, which removes it. It is never re-fitted. Expect propel to be dead while the fault is posted - the SCON fault matrix turns P_38 (Propel) OFF for a primary boom angle crosscheck fault - and expect that removing the bridge alone will NOT bring drive back: the stored fault has to be cleared afterwards using the TCON display menu or a laptop with WebGPI. |
| Pair 1-6 on Half A - the two supply wires | **MACHINE HARNESS half: low (a few ohms or less) is NORMAL, provided J20 is still plugged in - the schematic joins the two P109ANG-GR/WH wires with a junction dot on the controller side of J20. SENSOR PIGTAIL half: open, on the two-potentiometer sensor drawn on the schematic.** | Harness half with J20 mated: this pair tells you nothing about the Scotchloks - rely on steps 13 and 14 instead. Sensor half: open means there is no bridge here. | Harness half reading OPEN: check J20 is mated and its terminals seated before calling anything a fault - with J20 unplugged this pair is open normally. Sensor half reading LOW: either a Scotchlok has tied the two supply wires together, or the current replacement sensor links them internally. The replacement sensor's internals are not published, so record it as an open question rather than declaring a fault. |
| Pair 2-5 on Half A - the two ground wires | **MACHINE HARNESS half: low is NORMAL while J20 is mated - the two SNSR GND-BR wires are joined by a junction dot on the controller side of J20. SENSOR PIGTAIL half: open.** | Same as 1-6: on the harness half it proves nothing; on the sensor half, open means no bridge here. | Harness half open: check J20 is mated first. Sensor half low: either a bridge across the two ground wires, or an internal link in the replacement sensor - flag it, do not call it. |
| Pairs 1-2 and 6-5 on Half A - supply to ground WITHIN one sensor element | **MACHINE HARNESS half: not near zero. This is the TCON's supply output measured against sensor ground with the battery off; the manual gives no ohm value, so write down whatever you get and do not judge it. SENSOR PIGTAIL half: on the two-potentiometer sensor drawn on the schematic, 1-2 is across element S18 and 6-5 is across element S17, so each reads that element's own resistance - a real number, neither zero nor open. The element resistance itself is not published.** | No dead short of the sensor supply. | Within about 1 ohm of your lead zero = the supply is shorted to ground. That fits the manual's 'Value at 0 V' and 'Value Too Low' entries, whose recovery text is 'Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board.' And because J154 shares the same P109ANG supply and SNSR GND wires, one short here would drag the secondary boom angle sensor to zero volts too - which is exactly the second sensor fault on the display. The manual never uses 'shorted' as a fault name; look for 'Value at 0 V' or 'Value Too Low'. |
| Pairs 1-5 and 6-2 on Half A - supply of ONE element to the ground of the OTHER element | **MACHINE HARNESS half: low while J20 is mated (because 1-6 and 2-5 are each joined upstream, so all four of these collapse into the same measurement as 1-2). SENSOR PIGTAIL half: OPEN. The schematic draws S18-PRI BM ANG SAFETY and S17-PRI BM ANG OPER as two entirely separate elements with no node in common, so nothing can conduct from one element to the other.** | Sensor half open: the two sensor elements are properly isolated from each other, as drawn. | Sensor half reading anything other than open = something is joining the two sensor elements. That is not how the schematic draws it. Record the value and hand it on; do not fit anything to 'fix' it. |
| Pairs 3-1 and 4-6 on Half A - each signal to ITS OWN element's supply | **MACHINE HARNESS half: OL / open. SENSOR PIGTAIL half: a real resistance that changes as the boom angle changes (that is the wiper sliding along the track), neither zero nor open - on the two-potentiometer sensor drawn on the schematic.** | No signal pinned to supply. | Low on the harness half = that signal wire is tied to the supply. The controller would report 'Value at 5.0 V' or 'Value Too High' for that sensor half; the manual's recovery text for 'Value at 5.0 V' is 'Check for an open ground circuit going to the sensor'. |
| Pairs 3-6 and 4-1 on Half A - each signal to the OTHER element's supply | **MACHINE HARNESS half: OL / open. SENSOR PIGTAIL half: OPEN. Cavity 3's wiper belongs to S18 only and cavity 6 belongs to S17 only; cavity 4's wiper belongs to S17 only and cavity 1 belongs to S18 only. Nothing crosses between them.** | Correct isolation between the safety and operational halves of the sensor. | Any low reading here means the two sensor halves are linked. Record it. This is exactly the kind of link that can feed both controllers from one source, and it is what this card exists to find. |
| Pairs 3-2 and 4-5 on Half A - each signal to ITS OWN element's ground | **MACHINE HARNESS half: OL / open. SENSOR PIGTAIL half: a real resistance that changes with boom angle, not zero.** | No signal pinned to ground. | Low on the harness half = that signal is tied to ground. The controller would report 'Value at 0 V' or 'Value Too Low' for that sensor half. |
| Pairs 3-5 and 4-2 on Half A - each signal to the OTHER element's ground | **MACHINE HARNESS half: OL / open (or the same reading as 3-2 and 4-5 respectively, since cavities 2 and 5 are joined upstream while J20 is mated). SENSOR PIGTAIL half: OPEN - these cross between the two separate elements.** | Correct isolation. | Sensor half low = the two sensor halves are linked. Record it; do not modify anything. |
| The loose terminal: which cavity is empty on Half A, then ohms from the loose terminal to each of the other five | **Exactly one empty cavity. On the harness half: low to cavity 1 or 6 = a supply wire; low to 2 or 5 = a ground wire; open to all five = a signal wire, which the empty cavity number identifies as cavity 3 (safety, to SCON J122 pin 3) or cavity 4 (operational, to TCON J12 pin 32). On the sensor pigtail half: open to all is possible and normal - the current replacement sensor is likely a magnetic, non-contact type with no resistive track (unconfirmed) - so there the cavity number is your answer.** | You now know the loose wire's name. Write it down as cavity number first, wire name second. Do NOT identify it by wire colour: there are two published colour sets for this connector, the manuals do not say which applies here, and the photographs do not establish which conductor the loose terminal is on. | Two empty cavities, or none: the connector has been re-pinned. Stop, record every cavity's wire colour and position, photograph the face, and compare against BOTH colour sets in the pin table before going further. The manual's own advice for this family of faults includes checking 'that the connector terminals have not backed out'. |

**Why we are doing this.** Every live fault on the ground display sits on this one six-wire circuit, so what these six wires are actually doing decides the whole job.

Pin 3 carries the safety copy of the boom angle, which goes to the SCON (safety controller). Pin 4 carries the operational copy, which goes to the TCON (turntable controller - the ALC-1000 circuit board in the ground control box, the machine's main computer). The two controllers compare their copies against each other; that comparison is called a crosscheck. If the Scotchlok loop joins pin 3 to pin 4, both controllers are being fed one signal and the crosscheck has been defeated. The Service Manual's SCON fault matrix shows a primary boom angle crosscheck fault turning OFF P_38, P_39, P_10, P_11 and P_30, and P_38 is propel - drive power. So with that fault posted the machine will not drive. Note carefully: removing the bridge does not on its own restore drive. The manual requires the stored fault to be cleared afterwards ("Use TCON display menu or laptop with WebGPI to clear faults"), and this machine has other faults posted too.

If instead the loop joins the 5 volt supply to ground, that would explain the zero-volt readings on BOTH boom angle sensors, because the primary sensor at J114 and the secondary sensor at J154 are fed by the same supply wire (P109ANG-GR/WH) and the same ground wire (SNSR GND-BR). The Service Manual's own fault names for that condition are "Value at 0 V" and "Value Too Low" - it never uses the word "shorted", so do not expect that word on the display.

The pair you find decides what the repair card removes, and the empty cavity tells you which circuit is hanging open.

**Safety**

- Key switch OFF, key out, and the red Emergency Stop (E-stop) button pushed IN at BOTH the ground controls and the platform controls before touching any connector. This is the Service Manual's own standard first step (SM p.104).
- Battery negative cable disconnected for every ohm reading on this card. A resistance reading taken on a live circuit is wrong and can damage the meter. The Service Manual's own resistance test begins by disconnecting the wiring (SM p.150).
- Electrocution and burn hazard: remove all rings, watches and other jewelry before working on electrical circuits (SM p.27).
- This card NEVER adds a jumper, bridge or bypass. The Scotchlok loop is a fault to be documented and then removed by the repair card. Do not energise the machine with it in place, and do not move it to a different pair 'to see what happens'.
- Do not use the bypass or recovery key positions, and do not fit the calibration jumper or toggle. Those belong to the calibration technician. The Service Manual states calibration 'shall only be completed by qualified technicians that have Genie factory service training', and warns of a tip-over hazard if the machine is not calibrated in the proper sequence (SM p.105).
- Do not open the ground control box or probe TCON J12 or SCON J122 on this card; those plugs are handled under their own card.
- The primary boom pivot is above ground level. Use a stable ladder, scaffold or another machine's platform to reach it. Do not climb on the boom structure, and do not work from it while anyone could operate the machine. (Access method is general good practice, not manual text.)
- Machine on firm level ground, wheels chocked, boom stowed, axles left retracted. Do not raise or drive a machine that has active boom angle crosscheck faults.
- Fine probe tips only. A spread Deutsch socket becomes a new intermittent fault that will cost you the next three days.
- The safety signal (cavity 3) and the operational signal (cavity 4) exist so that the SCON and the TCON can check each other. Any repair that feeds them from one wire defeats a safety circuit and is forbidden - here and on every later card.

**Open questions on this card**

- Is the DT04-6P half that carries the Scotchloks and the loose terminal the machine harness or the sensor pigtail? It cannot be inferred - Genie uses both pin-receptacle and socket-plug halves on pigtails. Step 6 makes the technician follow the loom by hand. The answer changes how the 1-6, 2-5 and every cross-element reading is interpreted, so it must be settled first.
- Which ES0366J harness variant is this machine? The sheet carries two complete J20-to-J114 blocks: 'UNIT #130 OR HIGHER' (cavity colours RD, WH/BK, BL, OR, GR, WH) and 'UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)' (OR, GR, RD, RD/BK, BK, GR/BK). The manuals nowhere say what unit number serial Z13513-1861 is, and the colours visible in the field photos (blue, red, yellow, green, white) match neither set cleanly. Until that is settled, colour is NOT a valid cavity identifier on this machine - use the moulded cavity numbers. [M]
- The replacement sensor fitted under kit 217246GT / part 216061GT is described only as 'SENSOR, ANGLE, 180 DEG, CW' with a matched magnet. It is likely a magnetic, non-contact type with no resistive track [M], which would read open where the schematic's two-potentiometer sensor reads a resistance. Its pigtail colours and internal impedance are published nowhere in the three manuals. Every sensor-half expectation on this card is taken from the older two-potentiometer sensor drawn on ES0366J. Record what you actually get and do not call a sensor-half reading a fault until the sensor type is known.
- Whether the loose gold terminal is on a blue conductor is NOT established. The photographs show a blue conductor in the bundle, but the loose terminal's own lead is hidden behind the technician's thumb in every frame. The earlier draft of this card leaned on 'blue = cavity 3 = safety signal'; that inference is withdrawn. The empty cavity number and the ohm test decide it. [M]
- Whether an open safety signal on its own produces a 'primary boom angle crosscheck' fault is NOT stated anywhere in the manuals. SM pp.177-178 assign an open or high signal to 'Value at 5.0 V' or 'Value Too High'; SM p.189 lists what the crosscheck fault switches off but never what triggers it. Treat any such link as a hypothesis to test, not as an explanation. [M]
- Whether the two Scotchlok taps have actually cut through the insulation. A tap that has not bitten reads open even though it looks like a bridge. Related and newly noted: a conductor beside the lower tap has frayed bare copper strands showing - determine whether that conductor is merely damaged or actually cut through, because a cut conductor bypassed by an external wire is a different fault from a deliberate bridge.
- What the pink insulated crimp at the pivot bolt actually is - a ring terminal under the bolt, or a butt splice joining a short lead that goes under the bolt - and what the long green wire connects to at its other end. Not covered by this card; it needs its own ohm test from that crimp to each of the six cavities and to chassis ground.
- Complete-connector parts. The Parts Manual lists NO 6-way Deutsch DT housing, lock or wedge anywhere (only 2-, 3-, 4- and 12-way), and figure 511.2 lists no connector parts for the angle sensor at all. 73713GT (pin) and 73714GT (socket) are the right size class (14-18 AWG, 0.095-0.150 in OD) but the Parts Manual attaches 73713GT to the retract limit switch's 4-way connector and does not list 73714GT on figure 511.2 at all. DT04-6P is read off the moulding on the part; the mating DT06-6S plug and the W6P/W6S wedges are industry Deutsch numbers from memory [M]. Confirm all of it with the supplier before ordering.
- The harness-side resistance from the sensor supply to sensor ground with the battery off - measured through the TCON's output stage - is not published. This card asks for that reading to be recorded, not judged, unless it is a dead short.
- Whether cavity numbers are legible on this particular housing. Moulded cavity numbering is general Deutsch practice, not manual text [M], and the usual colour fallback is unsafe here because of the two-variant problem above. If the numbers are unreadable, stop and get the connector's cavity map settled before naming any pin.
- Which side of the primary boom the angle sensor is on. The manuals give a side only for the retract limit switch (ground-controls side). Likely the same side for the sensor, but unconfirmed [M] - look at both.

<details><summary>Sources for this card (67 checked statements)</summary>

- `[V]` The boom sections run outward from the turntable as secondary boom, then primary boom, then jib boom, then platform - so the primary boom is NOT the lower boom off the turntable. — *114474.txt 1252-1261 (PAGE 22 marker at 1245, footer '20' at 1248 = OM p.20)*
- `[V]` The secondary boom is the riser off the turntable - the Service Manual calls it the 'secondary boom riser'. — *1268557.txt 5273-5275 (PAGE 80 marker at 5213, footer '66' at 5218 = SM p.66)*
- `[V]` The SECONDARY boom angle sensor - not the primary - is the one located on the turntable riser bulkhead at the ground controls side. — *1268557.txt 6892-6895 (PAGE 102 = SM p.88)*
- `[V]` The primary boom angle sensor is inside the primary boom at the boom pivot pin, behind the boom end cover at the pivot end. — *1268557.txt 6373-6379 (PAGE 95 = SM p.81, section 4-8)*
- `[V]` The Service Manual repeats that the primary boom angle sensor is inside the primary boom at the pivot end. — *1268557.txt 5694-5695 (PAGE 86 = SM p.72)*
- `[V]` The manuals state a 'ground controls side' location for the retract LIMIT SWITCH on the primary boom, not for the angle sensor. — *1268557.txt 5687-5689 (SM p.72)*
- `[V]` J114 is the 6 pin Deutsch connector for the primary boom angle sensor (PBAS). — *1268557.txt 15597-15599 (PDF 220 = SM p.206)*
- `[V]` J154 is the 6 pin Deutsch connector for the secondary boom angle sensor. — *1268557.txt 15685-15687 (PDF 221 = SM p.207)*
- `[V]` J20 is a 12 pin Deutsch connector on the lower/upper limit switch harness. — *1268557.txt 15448-15450 (PDF 219 = SM p.205)*
- `[V]` J12 is the black 35 pin AMP connector on the TCON. — *1268557.txt 15437-15438 (PDF 219 = SM p.205)*
- `[V]` J122 is the 12 pin Deutsch black SCON connector; J121 is the gray one. Line range corrected this session from the original card's 'approx. 15610-15613'. — *1268557.txt 15608-15611 (PDF 220 = SM p.206); 15612-15613 is the J124 entry*
- `[V]` TCON J12 pin 25 is SNSR GND - BR (sensor ground). — *1268557.txt 16175-16176 (PDF 224 = SM p.210); also figure sm210-tcon-pins.png*
- `[V]` TCON J12 pin 26 is P109ANG - GR/WH. — *1268557.txt 16177-16178 (SM p.210); also sm210-tcon-pins.png*
- `[V]` TCON J12 pin 32 is C123PBS - RD/BK (primary boom angle, operational signal). — *1268557.txt 16189-16190 (SM p.210)*
- `[V]` TCON J12 pin 33 is C124SBS - OR/BK (secondary boom angle, operational signal). — *1268557.txt 16191-16192 (SM p.210)*
- `[V]` SCON J122 pin 2 is C142SBS - OR and pin 3 is C141PBS - RD. Read from the rendered page this session because the text extract interleaves the J121 and J122 columns. — *sm209-scon-pins.png figure (SM p.209); text at 1268557.txt lines 15999-16000 and 16003-16004*
- `[V]` The J122 pin list is headed 'Safety Controller' and the J12 list 'Turntable Controller' (SCON = safety controller, TCON = turntable controller). — *1268557.txt PDF 223-224 = SM pp.209-210; figures sm209-scon-pins.png, sm210-tcon-pins.png*
- `[V]` The TCON is the ALC-1000 circuit board in the ground control box. Line range corrected this session from the original card's 'approx. 7966-7971', which is page-header text. — *1268557.txt 7974-7978 (PDF 119 = SM p.105, section 6-4)*
- `[V]` On ES0366J the 'UNIT #130 OR HIGHER' J20-to-J114 block gives harness colours cavity 1 RD, 2 WH/BK, 3 BL, 6 OR, 5 GR, 4 WH. — *es-j114-primary-sensor.png figure (crop of ES0366J, SM p.229 = PDF 243)*
- `[V]` ES0366J carries a SECOND J20-to-J114 block marked 'UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)' with a completely different harness colour set: J20 cavities 11, 12, 2, 10, 7, 6 to cavities 1, 2, 3, 6, 5, 4 with colours OR, GR, RD, RD/BK, BK, GR/BK. Verified by enlarging the crop this session. There is no blue conductor at all in this variant. — *es-scon-boomsensors.png figure lower-right block (crop of ES0366J, SM p.229); same block at bottom right of es-boom-sensors-wide.png*
- `[V]` On ES0366J the sensor-side colours drawn below J114 are cavity 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL. — *es-j114-primary-sensor.png figure (crop of ES0366J, SM p.229)*
- `[V]` J114 wire names by cavity: 1 P109ANG-GR/WH, 2 SNSR GND-BR, 3 C141PBS-RD, 6 P109ANG-GR/WH, 5 SNSR GND-BR, 4 C123PBS-RD/BK, arriving through J20 cavities 11, 12, 2, 10, 7, 6. — *es-j114-primary-sensor.png figure (crop of ES0366J, SM p.229)*
- `[V]` The schematic text on the ES0366J page carries the same wire names next to J114 and J154. — *1268557.txt 18351-18360 (PDF 243 = SM p.229); 'J114' at 18764, 'J154' at 18765, 'ES0366J' at 19698*
- `[V]` On the sensor side S18-PRI BM ANG SAFETY is drawn across cavities 1 and 2 with its wiper on cavity 3, and S17-PRI BM ANG OPER across cavities 6 and 5 with its wiper on cavity 4. The two elements share NO node, so any measurement crossing between them must read open on the sensor side. — *es-j114-primary-sensor.png figure (crop of ES0366J, SM p.229)*
- `[V]` The two P109ANG-GR/WH wires (cavities 1 and 6) are joined by a filled junction dot, and the two SNSR GND-BR wires (cavities 2 and 5) by a second dot. BOTH dots are drawn ABOVE the J20 dashed boundary, i.e. on the controller side, so that continuity exists only while J20 is mated. — *es-j114-primary-sensor.png figure; same two dots at top of es-boom-sensors-wide.png*
- `[V]` J154 uses the same cavity-to-wire pattern (1 and 6 P109ANG-GR/WH, 2 and 5 SNSR GND-BR, 3 C142SBS-OR, 4 C124SBS-OR/BK, elements S20-SEC BM ANG SAFETY and S19-SEC BM ANG OPER), so it shares the same supply and ground nets as J114. Unlike J114 it is drawn directly on the sheet with no J20 pass-through, so it has no J20 cavity numbers of its own. — *es-j154-secondary-sensor.png figure (crop of ES0366J, SM p.229); confirmed in es-boom-sensors-wide.png*
- `[V]` Wire colour abbreviations: BL Blue, BK Black, BR Brown, GR Green, GR/WH Green/White, RD Red, RD/BK Red/Black, OR Orange, OR/BK Orange/Black, WH White, WH/BK White/Black, YL Yellow. — *1268557.txt 14274-14318 (PDF 210 = SM p.196, Wire Color Legend)*
- `[V]` The fault table has separate entries for the Operational Primary Boom Angle Sensor and the Safety Primary Boom Angle Sensor. — *1268557.txt 12576-12577 (PDF 191 = SM p.177) and 12632-12633 (PDF 192 = SM p.178)*
- `[V]` The Service Manual's error types for each boom angle sensor are 'Value at 5.0 V', 'Value Too High', 'Value Too Low', 'Value at 0 V', 'Out of Tolerance', 'Not calibrated' and 'Just calibrated'. The word 'shorted' is not used as a fault name anywhere. — *1268557.txt 12578-12611 (SM p.177); 'Value Too Low' at 12590; repeated for the safety half 12634-12667 (SM p.178)*
- `[V]` For 'Value at 5.0 V' the recovery action is to check for an open ground circuit to the sensor. — *1268557.txt 12578-12582 (SM p.177); repeated 12634-12638 (SM p.178)*
- `[V]` For 'Value Too High' the manual says the sensor is out of range; check sensor and actuating pin, repair or replace and recalibrate. — *1268557.txt 12583-12589 (SM p.177)*
- `[V]` For 'Value at 0 V' the recovery action is to check for 5.0 VDC at the sensor, check for damaged wiring, and check the 5.0 VDC LED on the TCON board. This is also the only place the manuals attach a 5 volt value to this sensor supply - the schematic itself carries no voltage on the P109ANG net. — *1268557.txt 12591-12598 (SM p.177); repeated 12647-12654 (SM p.178). The '% .0' is an extraction glitch for '5.0'.*
- `[V]` The manual's recovery advice for this family of faults includes checking that connector terminals have not backed out. Context: this sentence belongs to the Secondary Boom Joystick entry, not to a boom angle sensor entry. — *1268557.txt 12672-12676 (PDF 192 = SM p.178, Secondary Boom Joystick entry beginning at 12668)*
- `[V]` A primary boom angle crosscheck fault switches OFF P_38, P_39, P_10, P_11 and P_30 in the SCON fault matrix. Column-order line range corrected this session from the original card's 13637-13642, which is legend text. — *1268557.txt 13654-13659 (PDF 203 = SM p.189); header row 'P_38 / P_39 / P_10 / P_11 / P_30 / P_9B' at 13641-13646; also scon-fault-matrix.png*
- `[V]` P_38 is propel (drive power). — *1268557.txt 13630 (PDF 203 = SM p.189); also scon-fault-matrix.png legend cell*
- `[V]` A secondary boom angle crosscheck fault switches OFF P_38, P_39, P_11 and P_30. — *1268557.txt 13661-13666 (SM p.189)*
- `[V]` Removing a fault condition is not enough on its own - the manual requires stored faults to be cleared through the TCON display menu or a laptop running WebGPI, and gives a key-switch button sequence for Clear Faults. — *1268557.txt 13580-13582 and 13610-13612 (SM p.188); 'Clear Faults' menu entry at 8241 (PAGE 122 marker at 8205 = SM p.108)*
- `[V]` 73713GT is the Deutsch DT pin terminal, 14-18 AWG, but in the Parts Manual it is a dash sub-item of the retract LIMIT SWITCH assembly (item 2, 110913GT), sitting beside 4-way housing parts - it is not listed as a part of the angle sensor connector. — *106877.txt 8626-8646 (PM p.169); same grouping at 8580-8599 (PM p.167)*
- `[V]` 73714GT is the Deutsch DT socket terminal, 14-18 AWG, and it does not appear on figure 511.2 at all - the index lists it only on pages 21, 133 and 139. — *106877.txt 7221-7222 (PM p.139); also 905-906 (p.21), 6878-6879 (p.133); index entry 18248-18249*
- `[V]` 60443GT is a 4-way receptacle lock and 119067GT a 4-way DT receptacle - neither fits a 6-way housing. — *106877.txt 8639-8643 (PM p.169); 8592-8596 (PM p.167)*
- `[V]` The Parts Manual lists no 6-way Deutsch DT housing and no part described as a wedge; the DT housings it lists are 2-, 3-, 4- and 12-way only. The figure 511.2 parts list contains no connector housing or terminal for the angle sensor itself. — *106877.txt grep over the whole file, re-run this session*
- `[V]` 217246GT is the Z135 primary angle sensor kit (refer to figure 511.2); the original dual-output sensor 94980 is no longer available and calibration is required after replacement. Quote start corrected from 8548 (a bare item number) to 8549. — *106877.txt 8549-8551 (PM p.167); kit entry '14- / 217246GT / KIT,Z135 PRIMARY ANGLE SEN. / (refer to 511.2)' at 8554-8557*
- `[V]` 216061GT is the kit's sensor, described only as 'SENSOR, ANGLE, 180 DEG, CW'; sensor and magnet are matched and must be replaced together, and machine calibration is required after installation. The manual does NOT call it a Hall sensor and gives no wire colours or resistance. — *106877.txt 8691-8695 (PM p.169)*
- `[V]` 215728GT is the complete primary angle sensor assembly (includes items 14 to 22); 233118GT is the sensor rotator weldment (item 8); 218757GT the primary sensor pin weldment (item 9); 106277PGT the painted primary boom cover (item 6). Quote start for 215728GT corrected from 8669 to 8668. — *106877.txt 8668-8671, 8662-8667, 8656-8658 (PM p.169)*
- `[V]` Parts figure 511.2 covers machines from SN 1854 (its predecessor 511.1 covers to SN 1853), so 511.2 is the figure for a machine whose serial sequence is 1861. The step from 'from SN 1854' to this unit is an inference - the manuals do not map the Genie sequence number to this serial. — *106877.txt 8611 (PM p.168); 511.1 '(to SN 1853)' at 8602; figure pm168-pri-boom-sensor.png*
- `[V]` Key OFF and E-stop IN at both stations is the Service Manual's standard first step before electrical work. — *1268557.txt 7911-7914 (PDF 118 = SM p.104)*
- `[V]` Electrocution/burn hazard warning: remove all rings, watches and other jewelry. — *1268557.txt 2533-2537 (PDF 41 = SM p.27)*
- `[V]` The Service Manual's own resistance test is done with the wiring disconnected first, and the only resistance tolerance it publishes anywhere is for valve coils. — *1268557.txt 10717-10721 (PDF 164 = SM p.150); tolerance 'plus or minus 30%' at 10723*
- `[V]` Calibration is restricted to Genie-factory-trained technicians, with a tip-over hazard warning for out-of-sequence calibration; the Service Manual also has a separate bypass/recovery key switch section (6-1, p.99). — *1268557.txt 7981-7983 (SM p.105); tip-over warning 7985-7989; TOC entry '6-1 Bypass/Recovery Key Switch ... 99' at line 466*
- `[V]` Retracted axle width for this model is 8 ft 1 in (2.5 m) - this is the Operator's Manual SPECIFICATION, not a field measurement. Corrected this session: the original card tagged it F against a case-file line. — *114474.txt 3967-3971 (PAGE 66 marker at 3947 = OM p.64)*
- `[V]` The axle-extended safety limit switches prevent boom functions while the axles are retracted, which is why boom functions are locked out in the present state. — *1268557.txt 15322-15325 (PAGE 217 marker at 15270 = SM p.203); LSRA1ES identical at 15326-15329*
- `[F]` The axles on this machine are currently retracted. Corrected this session: the original card cited README lines 8-9, which describe the procedure and its target width, not the present state. — *README.md 149-151*
- `[F]` The connector half in the field photos is a grey Deutsch housing moulded 'DEUTSCH / IPD USA / DT04-6P', with a black corrugated loom at its wire end and one gold MALE PIN terminal hanging outside on its own wire. The conductors I can resolve entering the loom are blue, red, yellow, green and white. — *2026-09-12-j114-dt04-6p-loose-pin.jpg field photo 2026-09-12. 'Five seated' is arithmetic (six cavities minus one empty), not something the photo shows - count them on the machine.*
- `[F]` Two bright-blue Scotchlok IDC tap-splices sit on the loom roughly 8 to 12 inches behind the connector, joined by a short green jumper. The LOWER tap is clamped over a yellow conductor. The conductor under the UPPER tap cannot be identified from the photographs. Corrected this session: the original card's 'green/white striped conductor' is refuted - no such conductor is visible, and neither ES0366J colour set puts a GR/WH conductor at J114; GR/WH is the upstream net name P109ANG-GR/WH on the far side of J20, not a J114 pigtail colour. — *2026-09-12-j114-scotchlok-taps-2.jpg field photo 2026-09-12 (also -scotchlok-taps-1.jpg). Colour read from a photograph is not an identification; the ohm test is.*
- `[F]` A conductor beside the lower Scotchlok tap has exposed, frayed bare copper strands sticking out. New finding added this session; it was missing from the original card even though the card's own open question asks whether a tap has bitten through. — *2026-09-12-j114-scotchlok-taps-2.jpg field photo 2026-09-12*
- `[F]` A long teal-green wire runs from the connector loom to a pink insulated crimp connector at a bolt on a large bare grey machined plate at the pivot. Whether that crimp is a ring terminal under the bolt or a butt splice joining a short lead is not readable from the photograph, and the plate is the large grey pivot weldment, not the small blue sensor bracket. Corrected this session from the original card's flat 'pink butt splice on a bolt at the pivot bracket'. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg field photo 2026-09-12*
- `[F]` The pivot hardware visible in the field photo is a freshly blue-painted square block bracket held by two bright plated hex bolts, with a rusty knurled-cap pin standing through two flat grey plates or collars, and a black corrugated loom running past. NO rotator arm is visible in that photograph. Corrected this session: the original card told the technician to look for a rotator arm that is not in frame - the rotator sits inside the boom behind the cover. — *2026-09-12-j114-pivot-hardware.jpg field photo 2026-09-12*
- `[F]` The field photographs were taken from well above ground level, which is consistent with the primary boom pivot being an elevated joint rather than a turntable-level one. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg field photo 2026-09-12*
- `[M]` The conductor colours visible in the field photos (blue, red, yellow, green, white) do not cleanly match either published ES0366J colour set for J114, so wire colour is likely unreliable for identifying cavities on this machine and cavity numbers should be used instead. — *2026-09-12-j114-dt04-6p-loose-pin.jpg field photo compared with es-j114-primary-sensor.png and es-scon-boomsensors.png this session; this is a comparison, not a manufacturer statement*
- `[M]` The loose gold terminal's wire colour is NOT established. Corrected this session: the original card's 'appears to be on a blue wire' is unverifiable - the terminal's own lead disappears behind the technician's thumb before it reaches any conductor, in both photographs that show it. — *2026-09-12-j114-dt04-6p-loose-pin.jpg field photo 2026-09-12; also 2026-09-12-j114-pivot-hardware.jpg*
- `[M]` The current replacement sensor (216061GT) is likely a magnetic, non-contact type with no resistive track, which would make it read open between supply and ground - but this is inference from the matched-magnet wording, not published. The manuals never say 'Hall'. — *106877.txt 8691-8695; all three manuals searched this session for a sensor type, colours or impedance - none found*
- `[M]` The two potentiometer symbols drawn at J114 on ES0366J are likely the superseded 94980 dual-output sensor. The schematic itself names them only S18-PRI BM ANG SAFETY and S17-PRI BM ANG OPER and carries no part number. — *es-j114-primary-sensor.png figure; cross-referenced to PM p.167*
- `[M]` Deutsch DT housings normally carry cavity numbers moulded on the plastic beside each hole. — *none none - memory; worded as 'normally' in step 9*
- `[M]` The likely industry numbers for the mating half and the terminal locks are a DT06-6S plug with W6S wedge, and a W6P wedge for the DT04-6P receptacle. Only 'DT04-6P' is evidenced, from the moulding on the part. — *none none - memory; must be confirmed with a Deutsch/TE supplier before ordering*
- `[M]` A pin pair reading within about 1 ohm of the lead zero is likely one conductor. This is a working rule of thumb only. — *none none*
- `[M]` The primary boom angle sensor is likely on the ground-controls side of the primary boom. The manuals state a side only for the retract limit switch, not for the sensor. — *1268557.txt 5687-5689 compared with 6373-6379 and 5694-5695 - inference, not a manual statement*
- `[M]` Reaching the primary boom pivot likely needs a ladder, scaffold or another machine's platform, and the technician should not climb the boom structure. — *none none - memory; worded as guidance, not as a manual step*

</details>


### C5: Sensor ground resistance from J114 and J154 back to TCON cavity J12-25

**What this finds out.** This test finds out whether the shared sensor ground wire (Genie name SNSR GND-BR, a brown wire) really carries from each boom angle sensor plug all the way back to the one cavity on the main computer it belongs to, cavity 25 of plug J12, with almost no resistance. Resistance is measured in ohms; the symbol is the Greek letter omega. It also shows whether the green wire somebody added at the primary boom, bolted to bare metal, was covering up a broken ground.

**Where it is**

- *What it is:* Three points on one shared wire: (1) the J12 harness plug where it plugs into the TCON board inside the ground control box, (2) the J114 plug at the primary boom angle sensor, (3) the J154 plug at the secondary boom angle sensor.
- *Where on the machine:* Ground control box on the turntable (OM p.20 item 2). Primary boom angle sensor at the primary boom pivot (PM p.168). Secondary boom angle sensor on secondary boom tube 1 (PM p.138). Between the ground control box and J114 the ground passes through J20, described in the connector legend as a '12 pin Deutsch connector lower/upper limit switch harness' (SM p.205). Where J20 physically sits is not given in any of the three manuals; you may have to follow the loom to find it. J154 does not pass through J20 - the schematic runs it straight to the trunk.
- *How to find it:* GROUND CONTROL BOX. Stand on the ground beside the turntable (the part that swings, carrying the engine and the boom). Item 2 in the Operator's Manual machine drawing is the ground controls (OM p.20). The box is the one with a screen, a red Emergency Stop button, a key switch near the top, and a second key switch at the bottom (SM p.99; OM p.21 drawing, OM p.22 legend items 2, 4 and 11). Undo the lid fasteners and open the lid (SM p.103 steps 2-3). Inside the lid is the LCD board (LCD = liquid crystal display, the screen). On the back wall is the ECM board (ECM = the electronic control module; SM p.102 calls it 'the main circuit board for the machine'). That board is the TCON. Its parts name is PCB, ASSY, ECM, GROUND, PGMD, part 1258461GT from serial number 1712, item 23 on PM p.63; the whole box is 237069GT (PM p.61). Four rectangular AMP plugs push onto headers on that board (AMP is the connector brand). The legend on SM p.205 names them: J11 black 23 pin, J12 black 35 pin, J13 white 23 pin, J14 white 35 pin. You want the BLACK one with 35 cavities. A cavity is one hole in the plug that holds one wire terminal. PRIMARY SENSOR J114. Walk to the primary boom pivot, where the boom is hinged to the turntable. Parts figure 511.2 (PM p.168) shows the sensor hardware exploded off the pivot bracket: item 8 sensor rotator 233118GT, item 9 primary sensor pin weldment 218757GT, item 17 sensor 216061GT. On this machine that hardware is new and bright. If the primary boom cover is fitted (item 6, 106277PGT), take it off. Beside the sensor hangs a 6-way connector pair with two blue tap connectors and a light green wire on it (field photos). SECONDARY SENSOR J154. On secondary boom tube 1. Parts figure 502.2 (PM p.138) draws the sensor assembly; the sensor is item 23, 216061GT, listed on PM p.141. Note: that figure draws no connector and the parts list on PM p.141 contains no connector part - J154 is identified as a 6-pin Deutsch connector only in the Service Manual connector legend, SM p.207.
- *What it looks like:* J12: a black rectangular plastic plug with a latch and 35 small round cavities in THREE rows. The drawing on SM p.210 shows a top row of 12 (a circled 1 at the left end, a circled 6 at the sixth position, a circled 12 at the right end), a middle row of 11 with no numbers on it (those are cavities 13 to 23), and a bottom row of 12 (a circled 24 at the left end, a circled 29 at the sixth position, a circled 35 at the right end). Do not mistake the middle row for the bottom row. J114 / J154: a grey-black six-way Deutsch connector pair about the size of your thumb (Deutsch is the connector brand; its DT series is the common sealed round-cavity type on this machine). The half in the field photo is moulded DEUTSCH / IPD USA / DT04-6P. In Deutsch's naming a DT04 body is the half that holds male pins, and it mates with a DT06 body holding female sockets. Which of those two is the machine harness and which is the sensor's own tail is not stated in any of the three manuals, so trace the black corrugated loom to be sure [M]. On this machine's J114 the photo shows five wires seated (blue, red, yellow, white and a dark green) and one loose brass pin terminal hanging outside the housing on a sixth wire.
- *Source:* SM p.99 (TCON and the two key switches); SM p.102 (boards inside the ground control box); SM p.103 (how to open the box); SM p.205 (connector legend: J12, J20, J114 on p.206, J154 on p.207); SM p.210 (Turntable Controller Pin Legend, cavity 25); OM p.20 item 2 (ground controls on the machine); OM p.21 drawing with OM p.22 legend (the panel items); PM p.60 figure 305.1 and PM p.61/p.63 (control box and board part numbers); PM p.168 figure 511.2 (primary sensor hardware); PM p.138 figure 502.2 with the list on PM p.141 (secondary sensor)

**Set the machine to**

- **Key:** Main key switch OFF and the key removed (SM p.171). Do not touch the second key switch, the Bypass/Recovery key switch, at the bottom of the ground control box (on the lower right side of the box from serial number Z13512-1712, SM p.99). Bypass and Recovery are not part of this test.
- **E-stops:** The red Emergency Stop button (E-stop) pushed IN, to the off position, at BOTH the ground controls and the platform controls, before anything is unplugged (SM p.171).
- **Battery:** DISCONNECTED. The negative (-) cable is taken off the negative post of the engine-compartment battery and tied back so it cannot spring onto the post. That battery is item 22 on Parts Manual figure 303.1 Engine Compartment Components, part number 1303581GT, listed as BATTERY, 12V, 950CCA, FLA (CCA = cold cranking amps, a rating of starting power; FLA = flooded lead acid, the ordinary wet-cell type with filler caps). The Parts Manual does not label it the starter battery; the Operator's Manual separately warns you to jump-start from the starter and controls battery and not the auxiliary power batteries (OM p.17), so if you find more than one battery box, disconnect every negative cable you find. Ohm readings are meaningless with any battery still connected.
- **Engine:** OFF. It must stay off for the whole test. Do not crank it.
- **Also:** Machine parked on a firm, level surface; wheels chocked; boom in the stowed position; turntable secured with the turntable rotation lock; ALL external AC power supply disconnected from the machine; welder disconnected if the machine has the weld-cable-to-platform option (all seven from SM p.171). The AC and welder bullets matter here: either one can put a second path through the frame and spoil an ohm reading. The machine should already be tagged and out of service - SM p.171 opens with 'Immediately tag and remove from service a damaged or malfunctioning machine' and 'Repair any machine damage or malfunction before operating the machine'. Leave the tag on at the end of this card; this card measures, it does not repair. Working state: J12 unplugged from the TCON board; the sensor plugs separated at J114 and J154; the added green wire lifted off its bolt. Nothing is jumpered, bridged or bypassed at any point in this card.

**Connector — J12 (TCON, black 35-pin AMP; drawn as P12 on the schematic) with J114 and J154 (six-way Deutsch), and J20 (12-pin Deutsch) in the J114 leg**

J12 is the black 35-pin AMP connector on the TCON; the limit switch harness plugs into it. Cavity 25 carries SNSR GND-BR, the shared sensor ground, and the schematic names that pin's job inside the controller 'SNSR GND'. Cavity 26 next door carries P109ANG-GR/WH, named 'SNSR PWR' inside the controller - the sensor supply, which the fault table tells you to check for 5.0 volts DC at the sensor. WARNING about brown wires: cavity 1 is GNDSCON-BR and cavity 35 is GND16-BR, and both are brown. They are different circuits, not spare sensor grounds - the schematic names cavity 1's job 'SCON ECU GND' (the safety controller's own module ground) and cavity 35's job 'VLV RET' (valve return, the return path for valve coils). Never pick a brown wire by colour alone. One more naming trap: the schematic sheet labels this connector P12 and its cavities P12-01, P12-25 and so on, while the connector legend calls it J12. Same plug. J114 and J154 are the two six-way Deutsch sensor connectors. On each one, cavities 2 and 5 are the two ground legs, and both run back to J12 cavity 25. PBAS in the legend line is simply the abbreviation for primary boom angle sensor.

*Source:* SM p.205 legend 'J12 / Black 35 pin AMP connector on TCON' and 'J20 / 12 pin Deutsch connector lower/upper limit switch harness'; SM p.206 'J114 / 6 pin Deutsch connector for primary boom angle sensor (PBAS)'; SM p.207 'J154 / 6 pin Deutsch connector for secondary boom angle sensor'; SM p.210 Turntable Controller Pin Legend, J12 cavity 25 'SNSR GND - BR'; schematic ES0366J (SM p.229) crops es-j12-snsr-pwr-gnd.png, es-j114-primary-sensor.png, es-j154-secondary-sensor.png, es-boom-sensors-wide.png

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| J12-25 | SNSR GND - BR | BR (brown) | n/a - this is the controller end | The shared sensor ground (the return path) for both boom angle sensors. The schematic names this pin's job inside the controller SNSR GND. It is NOT a chassis or frame ground, and it is not the same net as the tilt, steer or load sensor grounds, which the schematic names separately (PL TILT SNSR GND, STEER SNSR GND, LOAD SNSR GND). | J114 cavities 2 and 5 (by way of J20 cavities 12 and 7) and J154 cavities 2 and 5 |
| J12-26 | P109ANG - GR/WH | GR/WH (green with a white stripe) | n/a | The sensor supply, about 5 volts DC. Not measured in this card. It is listed only so you do not confuse it with cavity 25 right next to it. | J114 cavities 1 and 6, J154 cavities 1 and 6 |
| J12-1 | GNDSCON - BR | BR (brown) | n/a | A DIFFERENT brown wire in the same plug. This is the safety controller's own module ground; the schematic names the pin's job SCON ECU GND. It is not the sensor ground and must never be used as a substitute for it. | the SCON module ground, not the sensors |
| J12-35 | GND16 - BR | BR (brown) | n/a | A THIRD brown wire in the same plug. The schematic names this pin's job VLV RET - valve return, the return path for hydraulic valve coils. Correction to an earlier version of this card: it is not a spare or generic harness ground, and it carries coil current in normal operation. It is not the sensor ground. | the valve return bus, not the sensors |
| J114-2 | SNSR GND - BR | Between J114 and J20 the colour depends on the build. On the block marked UNIT #130 OR HIGHER it is WH/BK (white with a black stripe). On the block marked UNIT #129 OR LOWER the same cavity is GR (green). Beyond J20 the trunk wire is brown. Check both before you conclude anything from colour. | BK (black) on the sensor drawn on the schematic. That drawn sensor is the older 94980 type, which the Parts Manual says is no longer available [M]; the replacement kit sensor's own wire colours are not published. | Ground for the primary SAFETY half, the potentiometer marked S18, the copy the SCON reads. | J20 cavity 12, then along SNSR GND-BR to TCON J12-25 |
| J114-5 | SNSR GND - BR | On the UNIT #130 OR HIGHER block, GR (green) between J114 and J20. On the UNIT #129 OR LOWER block the same cavity is BK (black). Beyond J20 the trunk wire is brown. | BR (brown) on the 94980-type sensor drawn on the schematic [M] - see the note on cavity 2. | Ground for the primary OPERATIONAL half, the potentiometer marked S17, the copy the TCON reads. | J20 cavity 7, then along SNSR GND-BR to TCON J12-25 |
| J154-2 | SNSR GND - BR | BR (brown) - this leg is drawn running straight to the trunk, with no J20 in between | BK (black) on the 94980-type sensor drawn on the schematic [M] | Ground for the secondary SAFETY half, the potentiometer marked S20. | SNSR GND-BR direct to TCON J12-25 |
| J154-5 | SNSR GND - BR | BR (brown), straight to the trunk with no J20 in between | BR (brown) on the 94980-type sensor drawn on the schematic [M] | Ground for the secondary OPERATIONAL half, the potentiometer marked S19. | SNSR GND-BR direct to TCON J12-25 |

**Do this**

1. Confirm the machine is tagged and out of service. SM p.171 requires it: 'Immediately tag and remove from service a damaged or malfunctioning machine.' Leave the tag on when you finish this card - measuring is not repairing.
2. Set the machine up exactly as the manual's troubleshooting configuration, all seven bullets from SM p.171: parked on a firm, level surface; key switch off with the key removed; the red Emergency Stop button in the off position at BOTH the ground and platform controls; wheels chocked; all external AC power supply disconnected from the machine; boom in the stowed position; turntable secured with the turntable rotation lock; and the welder disconnected if this machine has the weld-cable-to-platform option. Take off rings, watches and all other jewellery (SM p.171). The AC and welder bullets are not optional here - either can put a second path through the frame and give you a falsely low ohm reading later.
3. Disconnect the battery. Open the engine compartment on the turntable. The battery is item 22 on Parts Manual figure 303.1 Engine Compartment Components (PM p.46), part 1303581GT. Loosen the clamp on the NEGATIVE (-) post, lift the cable clear, and tie it back so it cannot spring onto the post. If you find more than one battery box, disconnect every negative cable - the Operator's Manual (OM p.17) says this machine may carry auxiliary power batteries as well as the starter and controls battery. Ohm readings are only valid with every battery out of the circuit.
4. Open the ground control box. It is the box on the turntable with the screen, the red Emergency Stop button, the key switch near the top and the Bypass/Recovery key switch at the bottom (SM p.99; OM p.21 drawing with the legend on OM p.22). Undo the lid fasteners and open the lid (SM p.103 steps 2-3). Before you touch anything on the board, deal with static: SM p.103 warns that electrostatic discharge (ESD - the small spark you can build up just by moving about) can damage circuit board components, and says to keep firm contact with a grounded metal part of the machine at all times OR use a grounded wrist strap. Use the wrist strap, clipped to the ground screw inside the control box (SM p.103 step 6); it is the safer of the two.
5. Find J12 on the TCON board. It is the BLACK plug with 35 cavities. The other black plug, J11, has only 23, and the two white ones are J13 (23) and J14 (35) (SM p.205). Write a tag marked 'J12' and put it on the plug before you move it - SM p.103 step 4 says to tag and disconnect the harnesses. Release the latch and pull the plug straight off the board header, pulling on the plastic body and never on the wires. Do not probe the plug while it is still on the board: the TCON would sit alongside your meter and could give a falsely low reading, and the small cavity seals are easy to damage. Everything in this card is measured on the unplugged harness plug only.
6. Find cavity 25 in the unplugged J12 plug. Hold it the way SM p.210 draws it. There are THREE rows, not two: a top row of 12 cavities (numbered 1 at one end, 6 at the sixth position, 12 at the other end), a middle row of 11 with no numbers printed on the drawing (those are 13 to 23), and a bottom row of 12 (24 at one end, 29 at the sixth position, 35 at the other end). Cavity 25 is in the BOTTOM row, the second cavity in from the '24' end. Count it twice. The wire in it is brown. Be careful: cavity 1 and cavity 35 are brown as well, and they sit at the ends of the top and bottom rows. Cavity 1 is the safety controller's module ground and cavity 35 is the valve return - neither is the sensor ground. If cavity numbers are moulded into the plastic housing, read them and use them; if they are not legible, rely on counting from the '24' end plus the cross-check in step 13 [M - the manuals show only the drawing and do not say whether the housing itself is numbered, nor which face of the plug the drawing represents].
7. Set the meter to ohms (the omega symbol), on its lowest range or on autorange. Touch the two probe tips together and write down the reading. That is your 'lead zero' and you subtract it from every measurement. On a typical hand meter it lands somewhere around a few tenths of an ohm [M - this is a general expectation, not a manual figure]. One probe has to stay at the ground control box while the other goes out to the boom, so make a test extension: one length of stranded wire long enough to reach, thick enough not to add resistance of its own (16 AWG or heavier is a sensible choice; AWG is American Wire Gauge, where a smaller number means a thicker wire) [M - the gauge is this plan's choice, not a manual figure], with a clip at each end. Measure the extension end to end and add that to your lead zero. Clip the extension to the terminal sitting in J12 cavity 25, using a fine pin-probe or a small clip that grips the terminal without spreading it open.
8. Walk to the primary boom pivot. If the primary boom cover is still fitted (item 6, 106277PGT, PM p.168 figure 511.2), take it off. Find the six-way Deutsch connector pair beside the new sensor hardware. Photograph everything before you touch it, including close-ups of the two blue tap connectors and of the wire colours entering each half. Separate the two halves - key already off, E-stop already in, battery already disconnected.
9. Lift the added green wire off the metal. Follow the light green wire from the connector area along the top of the boom. In the field photo it ends in a pink butt splice held under a bolt head on a bare, unpainted grey machined plate on top of the boom, beside a short blue-painted pin boss, with hydraulic hoses running across it. It is not on a blue-painted bracket. Undo that bolt just enough to free the splice ring, then retighten the bolt. Keep the wire and the splice as evidence. Do not cut anything on the machine harness. Leave the two blue tap connectors alone for now - a separate card deals with them - but be aware of what they may do to this test (see step 11).
10. Work out which cavities on the sensor connector are 2 and 5. The schematic lists the six conductors of J114 in the order 1, 2, 3, 6, 5, 4 reading across, because cavities 1-2-3 feed the safety half S18 and cavities 6-5-4 feed the operational half S17. That is a list of conductors, not a picture of the plug: ES0366J does not show how the six cavities are physically arranged in the housing, and this card cannot tell you [M]. If cavity numbers are moulded into the Deutsch housing, read them. Otherwise identify the legs by the cross-check in step 13 before you trust any reading.
11. Check the wire colours against BOTH schematic versions, and write down what you actually find. ES0366J draws two different colour sets for the J20-to-J114 jumper. On the block marked UNIT #130 OR HIGHER the colours at J20 cavities 11, 12, 2, 10, 7, 6 are RD, WH/BK, BL, OR, GR, WH, landing on J114 cavities 1, 2, 3, 6, 5, 4 - so cavity 2 white/black and cavity 5 green. On the block marked UNIT #129 OR LOWER the same cavities are OR, GR, RD, RD/BK, BK, GR/BK - so cavity 2 green and cavity 5 black. That is the opposite-looking arrangement, and nothing in this card establishes which build this machine is [M]. Two further warnings. First, the field photo of this connector shows blue, red, yellow, white and a dark green seated, plus one loose brass pin - that set matches neither published colour list exactly, which is itself a finding worth recording. Second, there are two greens in play: a dark green seated in the connector and the lighter green wire that was added; do not confuse them. Record every colour against every cavity you can identify, and treat any mismatch as evidence that the connector was re-pinned, not as a reason to abandon the test.
12. Measure and record, subtracting your lead zero from each: (a) J114 cavity 2 to J12-25; (b) J114 cavity 5 to J12-25; (c) J114 cavity 2 to J114 cavity 5, which the schematic says should also read near zero because the two legs join at a junction inside the harness before the TCON. Hold each reading a few seconds and watch for numbers that jump. Note: if the two blue tap connectors happen to join these same two ground wires, readings (a) and (b) will be identical and this test cannot tell the two legs apart - which conductors those taps bite has not been established, so flag it if (a) and (b) match exactly.
13. Wiggle test. With the meter still reading (a), and again on (b), gently flex the loom where it enters the connector, at the tap connectors, and along the boom. A reading that jumps or goes open means a broken strand inside the insulation or a terminal that is not properly seated.
14. Cross-check that you were on the right J12 cavity. Leave the meter on J12-25 and go to the secondary sensor J154 on secondary boom tube 1 (PM p.138). Separate that connector and measure (d) J154 cavity 2 to J12-25 and (e) J154 cavity 5 to J12-25. This connector has not been modified, so a near-zero reading here is your proof that you are on the real SNSR GND-BR wire and that the trunk is good. If both read open, re-confirm the cavity by counting again from the '24' end and by the brown wire, then suspect the trunk itself. Do NOT try to identify the cavity by looking for continuity to J12 cavity 1 or cavity 35 - those are the safety controller ground and the valve return, they are separate circuits, and a near-zero reading to either of them would be a short to be hunted down, not proof you picked the wrong hole.
15. Measure (f) J12-25 to bare frame metal - a clean bolt head or a spot scraped clean on the turntable - with the green wire still lifted and J12 still unplugged. Expect an open circuit. On a digital meter an open circuit usually shows as OL, meaning over-limit: the resistance is higher than the meter can display. Also, as a deliberate check for hidden shorts, measure J12 cavity 25 to cavity 1 and cavity 25 to cavity 35; both should read open too.
16. Write down all the readings - (a) through (f), the two extra checks from step 15, your lead zero, the extension resistance - plus the wire colour you found in every J114 cavity, which schematic colour set (if either) it matched, and which cavity the loose brass pin belongs to if you can tell.
17. Put it back. Do NOT reconnect the green wire. Reconnect the sensor halves at J114 and J154 only if the next card does not need them apart. Push J12 straight back onto its TCON header until the latch clicks, remove your tag, and close the ground control box lid. Reconnect the battery negative cable LAST, after every plug is back on. Leave the out-of-service tag on the machine.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Ohms, J114 harness-side cavity 2 to the terminal in J12 cavity 25 | **(a) J114 cavity 2 to J12-25: near zero ohms. Treat under about 1 ohm after subtracting lead zero as good [M]. The path is J114 cavity 2, up to J20 cavity 12, then along SNSR GND-BR to J12 cavity 25.** | The ground leg for the primary safety half, the copy the SCON reads, is intact all the way through J20. | Open, or clearly more than a fraction of an ohm: the primary SAFETY half (S18) has no clean ground. Look at the J114 cavity 2 terminal - is it backed out of the housing, is it the loose one? - then at J20 cavity 12, then at any place the wire has been cut into. Repair with proper Deutsch terminals. Never repair it with a tap connector or by bonding it to the frame. |
| Ohms, J114 harness-side cavity 5 to the terminal in J12 cavity 25 | **(b) J114 cavity 5 to J12-25: near zero ohms, same standard as (a) [M]. The path is J114 cavity 5, up to J20 cavity 7, then along SNSR GND-BR to J12 cavity 25.** | The ground leg for the primary operational half, the copy the TCON reads, is intact. | Open or resistive: the primary OPERATIONAL half (S17) has no clean ground. This is the leg to watch, because if (b) is bad while (a) is good, the likely story is that somebody found this leg broken and bonded around it with the green wire instead of repairing it. That is a finding to record, not a repair to copy. |
| Ohms, J114 harness-side cavity 2 to J114 harness-side cavity 5 | **(c) J114 cavity 2 to J114 cavity 5: near zero ohms, because the schematic shows the two legs joining at a junction in the harness before they reach the TCON [M].** | The two primary ground legs meet as the schematic draws them. But if (a) and (b) also came out numerically identical, note that the two blue tap connectors might be joining these wires artificially - flag it for the connector card. | Open: one of the two legs is broken somewhere between J114 and that junction. Compare against (a) and (b) to see which one. |
| Ohms, J154 cavities 2 and 5 to the terminal in J12 cavity 25 | **(d) J154 cavity 2 to J12-25 and (e) J154 cavity 5 to J12-25: each near zero ohms [M].** | Two things at once: you are on the real sensor ground wire, and the secondary sensor's grounds are sound. The secondary 'shorted / 0 V' complaint is then not a ground problem, and the search moves to the supply and the signal wires. | Both open: either you are not on cavity 25 (recount from the '24' end, confirm the brown wire) or the SNSR GND-BR trunk is open between the TCON and both sensors - which would explain faults on both sensors at once. One open and one good: a bad terminal in that J154 cavity. |
| Ohms, J12 cavity 25 to turntable frame metal, and to J12 cavities 1 and 35 | **(f) J12-25 to bare frame, with the green wire lifted and J12 unplugged: OPEN (the meter shows OL). Likewise J12-25 to J12-1 and J12-25 to J12-35 should both read open. The sensor ground is a wire to its own controller cavity; nothing on it should be touching the frame or either of the other two brown circuits [M - the manuals do not describe what the TCON does with this pin internally, so this expectation covers only the harness side, which is all you can see with the plug off].** | No hidden bonds or shorts remain, and with the added green wire gone the sensor ground is back to the arrangement the schematic shows. | A low reading to the frame means something else on the sensor ground is still bonded or chafed to metal: a second bond somewhere, a rubbed-through spot, or a tap connector bridging onto a frame-referenced wire. A low reading to cavity 1 or cavity 35 means the sensor ground is shorted to the safety controller's ground or to the valve return. Find and fix the actual fault. Do not leave a sensor return bonded to the frame - that is not the factory circuit. |
| Interpretation of readings (a) through (f) | **How to read the numbers. The manuals publish no ohm figure for this wire at all, so there are only three honest categories [M]: near zero after subtracting lead zero - the wire and its terminals are good; OPEN (OL) - this is the open ground circuit the manual's recovery action tells you to look for; anything measurable in between - treat it as a terminal that is corroded or not fully seated, clean it, reseat it, and measure again. Do not try to read a fault size off the middle of the range. An earlier version of this card offered bands (1-5, 5-50, 50-500 ohms) with meanings attached; those are withdrawn. Each sensor half is drawn as a potentiometer, a resistive track of some thousands of ohms with a wiper, and its output is a ratio of the supply. A few tens of ohms added in the return leg shifts that ratio by a fraction of a percent - far too little to make the TCON and SCON copies disagree, and nowhere near enough to push a reading toward 5 volts. The bands were not just unverified; they would mislead you.** | All legs near zero: the ground is sound, the added green wire was solving a problem that does not exist on this wire, and the fault lies elsewhere - the 5 volt supply, the signal wires, the loose brass pin, or whatever the two tap connectors are doing. Those are the next cards. | Any reading that is not near zero and does not drop to near zero after the terminal is cleaned and reseated is a harness or terminal repair, done with proper Deutsch terminals. Never substitute a tap connector, a splice into another circuit, or a bond to the frame. |

**Why we are doing this.** The machine has two boom angle sensors: the primary one at the primary boom pivot (its plug is called J114) and the secondary one on secondary boom tube 1 (plug J154). Both share one ground wire back to the TCON (turntable controller - the main computer, on a circuit board inside the ground control box on the turntable). Each sensor holds two separate halves inside one body: an operational half read by the TCON, and a safety half read by the SCON (safety controller, a separate module). Each half has its own ground leg. If one leg is open or has resistance in it, that half can read wrong, the two halves stop agreeing, and the crosscheck faults stay on. Those crosscheck faults are what shut off propel power: the Service Manual fault matrix on SM p.189 shows "Primary Boom angle (crosscheck)" and "Secondary Boom angle (crosscheck)" both turning P_38 - Propel OFF. What the manual actually says about grounds is narrower than a cause: for the error type "Value at 5.0 V" on any of the four sensor halves, the listed recovery action is "Check for an open ground circuit going to the sensor" (SM pp.177-180). It does not state that an open ground causes a 5.0 V reading; it just tells you to check the ground when you see that error. Near-zero ohms on every leg means the ground is good and the hunt moves to the 5 volt supply and the signal wires. A high or open reading means the harness or a terminal is the fault, and repairing it properly (and leaving the green wire off) is the next job.

**Safety**

- Key switch OFF with the key removed, and the red Emergency Stop button pushed IN at BOTH the ground and platform controls, before any connector is touched (SM p.171).
- The machine must already be tagged and removed from service, per SM p.171: 'Immediately tag and remove from service a damaged or malfunctioning machine' and 'Repair any machine damage or malfunction before operating the machine.' Leave the tag on at the end of this card. Nothing here repairs the fault.
- Full SM p.171 setup, all seven bullets: firm level surface; key off, key removed; E-stop in at both control stations; wheels chocked; all external AC power supply disconnected; boom stowed; turntable rotation lock engaged; welder disconnected if the weld-cable-to-platform option is fitted.
- Battery negative cable disconnected and tied back for every ohm reading in this card, and reconnected last, after all plugs are back on. Disconnect every battery you find, including auxiliary power batteries if this machine has them (OM p.17).
- Electrocution and burn hazard: remove all rings, watches and other jewellery before working in the ground control box (SM p.171 and SM p.103).
- Static electricity (electrostatic discharge, ESD) can destroy the TCON board. SM p.103 says to keep firm contact with a grounded metal part of the machine at all times when handling circuit boards, or use a grounded wrist strap. Use the wrist strap, clipped to the ground screw inside the control box.
- Never force a probe into an AMP or Deutsch cavity and never back-probe a live plug. A spread terminal becomes a new intermittent fault. Use a fine pin-probe or a small clip on the exposed terminal of an unplugged connector.
- This card REMOVES a non-factory bond - the added green wire bolted to bare metal. It never adds a jumper, tap or bridge. Do not reconnect the green wire. Do not bridge cavity 3 to cavity 4. Do not bond anything to the frame 'just to see if the code clears'.
- Do not use the Bypass or Recovery key positions, and do not fit a calibration jumper or calibration switch. Those belong to the calibration technician, after the wiring is proved right.
- Never bypass, jumper or defeat an angle sensor, limit switch, tilt sensor or load cell. The crosscheck faults must be cleared by repairing the wiring and then recalibrating - never by defeating a safety input. The Parts Manual notes that these sensors are matched to their magnets and that machine calibration is required after installation (PM p.141, PM p.169).
- Two people are safer for the long-lead measurement, one at the ground control box and one at the boom pivot. SM p.171 notes that two persons will be required to safely perform some troubleshooting procedures.

**Open questions on this card**

- No resistance figure for SNSR GND-BR exists in any of the three manuals. The 'near zero, under about 1 ohm after lead zero' pass mark, the expected lead-zero range, and the 16 AWG test-lead gauge are this plan's working values [M] and cannot be verified against Genie text.
- The previous version's ohm bands (1-5, 5-50, 50-500) have been REMOVED, not just re-tagged. They implied that a few tens of ohms in the return leg could cause a crosscheck disagreement. Since each sensor half is a potentiometer whose output is a ratio of its supply, that is physically wrong for a multi-kilohm element, and acting on it could send a technician chasing a harness that is actually fine. Only three categories are defensible: near zero, open, or 'reseat the terminal and measure again'.
- ES0366J draws TWO different colour sets for the J20-to-J114 jumper - UNIT #130 OR HIGHER (cavity 2 white/black, cavity 5 green) and UNIT #129 OR LOWER (cavity 2 green, cavity 5 black) - split further by software version S0675100 and S0675110 (Phase 2). Nothing in this card establishes which build serial Z13513-1861 is [M]. Step 11 therefore lists both sets. Confirming the machine's unit number and software version would settle it and should be done before any conclusion is drawn from wire colour.
- The field photo of the J114 connector shows blue, red, yellow, white and a dark green seated, which matches neither published colour set exactly [F]. That is itself evidence the connector has been re-pinned or a non-Genie sensor fitted. It also means step 11's colour check will flag mismatches on more than the two ground cavities - record them all and pass them to the connector card rather than treating any single mismatch as the answer.
- Which half of J114 is the machine harness and which is the sensor's own tail is not stated in the manuals [M]. The photo shows a body moulded DT04-6P, which in Deutsch's naming is the pin half, but that does not by itself say which side of the circuit it belongs to. Trace the black loom before relying on it.
- The manuals do not say whether cavity numbers are moulded into the Deutsch or AMP housings, nor which face of the plug the SM p.210 drawing represents [M]. The card therefore tells the technician to count from the '24' end and to confirm the cavity by the unmodified J154 connector rather than by any single cue.
- The manuals do not say whether the TCON ties J12-25 SNSR GND to battery negative inside the board [M]. Reading (f) is a harness-side test only, made with the plug off; a low reading means find the bond, it does not tell you anything about the board.
- J20, the 12-pin Deutsch connector for the lower/upper limit switch harness, lies in the primary sensor's ground path, but its physical location is not given in any of the three manuals. If the J114 readings are bad and the J154 readings are good, the fault is in the J20-to-J114 jumper harness or at J20 cavities 12 and 7 - and someone will have to follow the loom to find J20.
- The wire colours on the 216061GT kit sensor's own pigtail are not published [M]. The sensor-side colours quoted in this card (black on cavity 2, brown on cavity 5) are the ones ES0366J draws for the older 94980-type sensor.
- It is still not known which two conductors the two blue tap connectors bite. The field photo shows yellow/tan conductors in the taps with a green jumper between them, so the earlier assumption that a tap sits on the cavity-5 ground wire is withdrawn. If the taps do happen to join the cavity 2 and cavity 5 ground wires, readings (a) and (b) will be identical and this card cannot separate the two legs - the connector card must open the taps first, or this card must be repeated afterwards.
- The loose brass terminal at J114 appears in the photo to be on a blue conductor. On the UNIT #130 OR HIGHER block, blue at J114 is cavity 3, C141PBS-RD, the safety signal to the SCON - but on the UNIT #129 OR LOWER block blue does not appear at all at J114, so even that reading depends on the unsettled build question. This belongs to the connector card; it is flagged here because a disconnected safety signal alone could explain the primary crosscheck fault.
- Whether this machine actually has auxiliary power batteries is not confirmed; OM p.17 shows the machine may have them. Disconnect every battery negative you find.
- The schematic extraction is jumbled, so other users of SNSR GND-BR on parts of ES0366J outside the rendered crops cannot be ruled out from text alone [M]. The crops show only the two boom sensor plugs on this net, and the tilt, steer and load sensors use separately named grounds.
- The Service Manual contradicts itself about J15: SM p.205 calls it a 4-pin DTP connector on the PCON, SM p.210 heads it 'J15 Turntable Controller'. Per the knowledge base's rule on conflicting sources the conflict is stated rather than resolved. This card does not depend on J15, but anyone tracing TCON power should know.

<details><summary>Sources for this card (52 checked statements)</summary>

- `[V]` J12 is the black 35-pin AMP connector on the TCON. — *1268557.txt 15437-15438 (PDF 219 = SM p.205)*
- `[V]` The TCON also carries J11 black 23-pin, J13 white 23-pin and J14 white 35-pin AMP connectors, so J12 is uniquely the black plug with 35 cavities. — *1268557.txt 15435-15442 (SM p.205)*
- `[V]` The harness that plugs into J12 is the limit switch harness. — *1268557.txt 18308-18309 (PDF 243 = SM p.229, ES0366J); also figure es-tcon.png*
- `[V]` J12 cavity 25 carries SNSR GND - BR (sensor ground, brown). — *1268557.txt 16175-16176 (PDF 224 = SM p.210); figure sm210-tcon-pins.png*
- `[V]` On the schematic the TCON connector is drawn as P12, and the function of cavity 25 is named SNSR GND, cavity 26 SNSR PWR. — *es-j12-snsr-pwr-gnd.png figure es-j12-snsr-pwr-gnd.png (ES0366J, SM p.229); text 1268557.txt:17563 'SNSR GND-BR' and 17565 'P12-25'*
- `[V]` J12 cavity 26 carries P109ANG - GR/WH, the sensor supply. — *1268557.txt 16177-16178 (SM p.210)*
- `[V]` The sensor supply is about 5.0 volts DC: the fault table's recovery action for a sensor reading at 0 V is to check for 5.0 VDC at the sensor. — *1268557.txt 12594 (SM p.177)*
- `[V]` J12 cavity 1 is GNDSCON - BR, and the schematic names that pin's function SCON ECU GND - the safety controller's own module ground, not the sensor ground. — *1268557.txt 16127-16128 (SM p.210) and 17504, 17513, 17514 (SM p.229, ES0366J)*
- `[V]` J12 cavity 35 is GND16 - BR, and the schematic names that pin's function VLV RET (valve return) - it is a valve return bus, not a generic harness ground. This corrects the previous version of this card. — *es-j12-snsr-pwr-gnd.png figure es-j12-snsr-pwr-gnd.png; text 1268557.txt:16195-16196 (SM p.210) and 17604 'P12-35' / 17607 'VLV RET' (SM p.229)*
- `[V]` J12 cavity 32 is C123PBS - RD/BK, named PRI ANG INPUT on the schematic, and cavity 33 is C124SBS - OR/BK, named SEC ANG INPUT - the two operational angle signals into the TCON. — *1268557.txt 16189-16192 (SM p.210); figure es-j12-snsr-pwr-gnd.png*
- `[V]` The 35-pin connector drawing on SM p.210 shows THREE rows: a top row of 12 numbered 1, 6, 12; an unnumbered middle row of 11 (cavities 13-23); and a bottom row of 12 numbered 24, 29, 35. Cavity 25 is therefore in the bottom row, second in from the 24 end, and the numbers 6 and 29 mark the sixth position of their rows, not the exact centre. — *sm210-tcon-pins.png figure sm210-tcon-pins.png (SM p.210); caption text at 1268557.txt:16060 (the earlier citation to line 15753 was wrong - that line is on PDF 222 = SM p.208, the Drive Chassis and Platform Controller Pin Legend)*
- `[V]` J114 is the 6-pin Deutsch connector for the primary boom angle sensor, abbreviated PBAS in the legend. — *1268557.txt 15597-15599 (PDF 220 = SM p.206)*
- `[V]` J154 is the 6-pin Deutsch connector for the secondary boom angle sensor. — *1268557.txt 15685-15687 (PDF 221 = SM p.207)*
- `[V]` J20 is a 12-pin Deutsch connector for the lower/upper limit switch harness, and it sits in the primary sensor's ground path between J114 and the TCON. — *1268557.txt 15448-15450 (SM p.205); routing shown in figure es-j114-primary-sensor.png*
- `[V]` J114 cavity 2 runs WH/BK to J20 cavity 12, which carries SNSR GND-BR; on the sensor side the wire is BK and it goes to the potentiometer marked S18-PRI BM ANG SAFETY. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` J114 cavity 5 runs GR to J20 cavity 7, which carries SNSR GND-BR; on the sensor side the wire is BR and it goes to the potentiometer marked S17-PRI BM ANG OPER. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` Those J114 harness colours belong to the block annotated UNIT #130 OR HIGHER: J20 cavities 11, 12, 2, 10, 7, 6 carry RD, WH/BK, BL, OR, GR, WH into J114 cavities 1, 2, 3, 6, 5, 4, with wire names P109ANG-GR/WH, SNSR GND-BR, C141PBS-RD, P109ANG-GR/WH, SNSR GND-BR, C123PBS-RD/BK. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` ES0366J also draws a SECOND, different colour set for the same J20-to-J114 jumper, on a block annotated UNIT #129 OR LOWER: J20 cavities 11, 12, 2, 10, 7, 6 carry OR, GR, RD, RD/BK, BK, GR/BK into J114 cavities 1, 2, 3, 6, 5, 4. On that build J114 cavity 2 is GREEN and cavity 5 is BLACK - the reverse-looking arrangement. The sheet carries four variant blocks in all, split by unit number and software version. — *es-boom-sensors-wide.png figure es-boom-sensors-wide.png (ES0366J, SM p.229); annotation text at 1268557.txt:19200-19204 and 19255-19273*
- `[V]` J114 sensor-side colours drawn on ES0366J are 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` J154 cavities: 1 P109ANG-GR/WH (RD), 2 SNSR GND-BR (BK), 3 C142SBS-OR (BL), 6 P109ANG-GR/WH (OR), 5 SNSR GND-BR (BR), 4 C124SBS-OR/BK (YL), feeding the potentiometers S20-SEC BM ANG SAFETY and S19-SEC BM ANG OPER. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png (ES0366J, SM p.229)*
- `[V]` The secondary sensor's ground legs do not pass through J20: no J20 row is drawn above J154 on the schematic, unlike at J114. — *es-boom-sensors-wide.png figure es-boom-sensors-wide.png and figure es-j154-secondary-sensor.png (ES0366J, SM p.229)*
- `[V]` The two SNSR GND-BR legs of each sensor connector join at filled junction dots in the harness, so the ground is shared between cavities 2 and 5 and between J114 and J154. — *es-boom-sensors-wide.png figure es-boom-sensors-wide.png (ES0366J, SM p.229); text 1268557.txt:18358-18360 lists SNSR GND-BR three times*
- `[V]` The schematic lists the six J114 conductors in the order 1, 2, 3, 6, 5, 4 in a single line, because cavities 1-2-3 feed the safety half and 6-5-4 the operational half. It does NOT show the physical row layout of the connector housing. This corrects the previous version of this card, which described '1-2-3 in one row and 6-5-4 in the other'. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` Each sensor half is drawn as a potentiometer - a resistive element with a wiper - not as a simple switch or a digital device. — *es-j114-primary-sensor.png figures es-j114-primary-sensor.png and es-j154-secondary-sensor.png (ES0366J, SM p.229)*
- `[V]` The boom angle sensor ground is a distinct named net: the schematic uses separate names for other sensor grounds (PL TILT SNSR GND, STEER SNSR GND, LOAD SNSR GND). — *1268557.txt 17127, 17381, 17914 (SM p.229, ES0366J)*
- `[V]` Fault table, Operational Primary Boom Angle Sensor, error type 'Value at 5.0 V': the recovery action is to check for an open ground circuit going to the sensor; the effect is primary up, secondary up/down and extend disabled, alarm sounds. The table pairs the error with the check; it does not state that an open ground causes the 5.0 V reading. — *1268557.txt 12576-12582 (PDF 191 = SM p.177)*
- `[V]` The Safety Primary, Operational Secondary and Safety Secondary Boom Angle Sensor rows carry the same 'Value at 5.0 V' error type with the same open-ground recovery action. — *1268557.txt 12632-12638 (SM p.178); 12775-12781 (SM p.179); 12830-12836 (SM p.180)*
- `[V]` Fault table, error type 'Value at 0 V': check for 5.0 VDC at the sensor, check for damaged wiring going to the sensor, check that the 5.0 VDC LED is lit on the TCON board. — *1268557.txt 12591-12598 (SM p.177); the '%' is an extraction artefact for '5'*
- `[V]` The SCON fault matrix shows that both 'Primary Boom angle (crosscheck)' and 'Secondary Boom angle (crosscheck)' turn P_38 - Propel OFF. This supports the card's statement that the crosscheck faults kill propel power. — *1268557.txt 13630, 13654, 13661 (PDF 203 = SM p.189); figure scon-fault-matrix.png*
- `[V]` The TCON is the communication and operations centre of the machine; the ground control box holds two key switches, the main one near the top and the Bypass/Recovery key switch at the bottom - and from serial number Z13512-1712 that second switch is on the lower right side of the box. — *1268557.txt 7569-7598 (PDF 113 = SM p.99); figure sm099-bypass-key.png*
- `[V]` The ground control box holds the LCD circuit board inside the lid and the ECM circuit board, which is the main circuit board for the machine. — *1268557.txt 7767-7774 (PDF 116 = SM p.102)*
- `[V]` Manual procedure for working on the TCON board: E-stop in at both controls, remove the lid fasteners, open the box, tag and disconnect the harnesses, attach a grounded wrist strap to the ground screw inside the box. The ESD caution offers two options - firm contact with grounded machine metal OR a grounded wrist strap. The same page repeats the jewellery warning. — *1268557.txt 7833-7871 (PDF 117 = SM p.103); figure sm103-alc-board.png. The previous version cited only 7854-7855, which covers just the wrist-strap line.*
- `[V]` SM p.171 requires tagging and removing a malfunctioning machine from service, and its troubleshooting configuration has SEVEN bullets including two the previous version of this card omitted: all external AC power supply disconnected, and welder disconnected if the weld-cable-to-platform option is fitted. — *1268557.txt 12047-12091 (PDF 185 = SM p.171)*
- `[V]` Ground control panel legend: item 2 red Emergency Stop button, item 4 key switch for off/ground/platform selection, item 11 Bypass/recovery key switch. The numbered drawing is on OM p.21; the wording of the legend is on OM p.22. — *114474.txt 1367-1404 (PDF 24 = OM p.22); drawing at 1272-1344 (PDF 23 = OM p.21), figure key-om-gc-panel.png*
- `[V]` The machine component legend lists item 2 as Ground controls. — *114474.txt 1251-1254 (PDF 22 = OM p.20)*
- `[V]` The machine has a starter and controls battery and may also have auxiliary power batteries. — *114474.txt 1107-1110 (PDF 19 = OM p.17)*
- `[V]` The engine-compartment battery is item 22, 1303581GT, BATTERY, 12V, 950CCA, FLA, on parts figure 303.1 Engine Compartment Components. Note that the Parts Manual does not itself call it the starter battery - that distinction comes from OM p.17. — *106877.txt 2319-2321 (PM p.47); figure title 2198 (PM p.46); figure pm046-engine-compartment.png*
- `[V]` The TCON control box assembly from serial number 1712 is 237069GT and the TCON board from serial number 1712 is 1258461GT, PCB, ASSY, ECM, GROUND, PGMD, on parts figure 305.1 Ground controls. — *106877.txt 3061-3066 (PM p.61) and 3218-3222 (PM p.63); figure title 3017 (PM p.60); figures pm060-ground-controls.png, pm062-gc-box.png, pm063-gc-box-list.png*
- `[V]` Parts figure 511.2 Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854) shows the primary sensor at the boom pivot: item 6 primary boom cover 106277PGT, item 8 sensor rotator 233118GT, item 9 primary sensor pin weldment 218757GT, item 17 sensor 216061GT. — *106877.txt figure title 8611 (PM p.168); items 8656-8667 and 8691-8693 (PM p.169); figure pm168-pri-boom-sensor.png*
- `[V]` The original primary sensor 94980 is no longer available; the first-time replacement is kit 217246GT, and calibration is required after replacement. — *106877.txt 8549-8557 (PM p.167)*
- `[V]` The secondary boom angle sensor appears on parts figure 502.2 Secondary Boom Tube 1 (from SN 1854), sensor item 23, 216061GT, with a note that sensor and magnet are matched and machine calibration is required after installation. IMPORTANT CORRECTION: that figure draws no identified connector, and the parts list on PM p.141 (items 19-29) contains no connector part. J154 is identified as a six-pin Deutsch connector only in the Service Manual connector legend on SM p.207. — *106877.txt figure title 7128 (PM p.138; the previous version cited 7234, which is the PM p.139 repeat); item 7267-7272 (PM p.141); figure pm138-sec-boom-switches.png*
- `[F]` The half of J114 visible in the field photo is a Deutsch DT04-6P body holding male pins, with five wires seated (blue, red, yellow, white and a dark green) and one brass pin terminal hanging loose outside the housing. The five visible colours match neither ES0366J colour set exactly - not the UNIT #130+ harness set (RD, WH/BK, BL, OR, GR, WH), not the UNIT #129-or-lower set (OR, GR, RD, RD/BK, BK, GR/BK), and not the drawn sensor set (RD, BK, BL, OR, BR, YL). — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo 2026-09-12-j114-dt04-6p-loose-pin.jpg*
- `[F]` A light green wire runs from the J114 area along the top of the boom and ends in a pink butt splice bolted under a bolt head on a bare, unpainted grey machined plate beside a short blue-painted pin boss, with hydraulic hoses running over it. CORRECTION to the previous version: it is not bolted to a blue-painted bracket, and the photo does not by itself establish that this plate is the primary boom pivot bracket. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg photo 2026-09-12-j114-green-wire-to-pivot-splice.jpg*
- `[F]` Two blue insulation-displacement tap connectors (the Scotchlok type, which bite through a wire's insulation) sit on the wires leaving the J114 connector, with a green conductor looped between them. In the photo the conductors actually clamped in the taps read YELLOW/tan, and the green is the added jumper, not a tapped harness wire. CORRECTION to the previous version, which said the tap sat on the green cavity-5 wire. Which two conductors the taps bite cannot be determined from the photo. — *2026-09-12-j114-scotchlok-taps-1.jpg photo 2026-09-12-j114-scotchlok-taps-1.jpg; also 2026-09-12-j114-scotchlok-taps-2.jpg and 2026-09-12-j114-pivot-hardware.jpg*
- `[M]` The requirement to disconnect the battery for resistance tests, and to have key off and E-stop in before unplugging, is a knowledge-base safety rule, not a manual instruction. No battery-disconnect step appears in the SM p.171 troubleshooting configuration. — *README.md 59-60 (the previous version cited 62-63, which is the ground-level-testing rule)*
- `[M]` The pass mark of 'near zero, under about 1 ohm after lead zero', the expected lead-zero range, and the 16 AWG test-lead choice are all this plan's working values. The three manuals publish no resistance figure for SNSR GND-BR or for any harness ground: a search of the Service Manual returns only component values (a 10 ohm resistor, 82 and 100 ohm pull-ups, a 330 ohm part). — *1268557.txt 12581-12582 (SM p.177) for context only; the values themselves are unsourced*
- `[M]` The previous version's diagnostic bands (1-5, 5-50, 50-500 ohms with assigned meanings) are withdrawn. They are not merely unverified, they are misleading: each sensor half is drawn as a potentiometer, so its output is a ratio of the supply, and tens of ohms added in the return leg of a multi-kilohm divider shifts that ratio by a fraction of a percent - far too little to cause a TCON/SCON disagreement, and nowhere near enough to float a half toward 5 volts. — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[M]` Whether cavity numbers are physically moulded into the Deutsch DT04-6P housing or the 35-pin AMP housing is not stated in any of the three manuals, and is not legible in the field photo. The SM p.210 drawing also does not say which face of the plug it represents. — *sm210-tcon-pins.png figure sm210-tcon-pins.png (SM p.210)*
- `[M]` Which half of J114 is the machine harness and which is the sensor's own tail is not stated in any of the three manuals; the DT04-6P body in the photo is identified only by its moulding. — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo 2026-09-12-j114-dt04-6p-loose-pin.jpg*
- `[M]` Whether the TCON connects SNSR GND (J12-25) to battery negative inside the board is not stated in the manuals, and no frame bond on the sensor ground is drawn on ES0366J. The schematic text also carries SNSR GND-BR at points outside the rendered crops, so further users of that net on parts of the sheet not shown cannot be ruled out from text alone. — *1268557.txt 17563, 18358-18360, 18441, 19024, 19033 (SM p.229); figure es-boom-sensors-wide.png*
- `[V]` The connector legend and the pin legend contradict each other about J15: SM p.205 calls it 'Black 4 pin DTP connector on PCON', while SM p.210 heads the same connector 'J15 Turntable Controller' and lists 1 B1BAT-RD, 2 GND-BR, 3 GND-BR, 4 unused. The manual is internally inconsistent; this card does not rely on J15 either way. — *1268557.txt 15443-15444 (SM p.205) and 16113-16123 (SM p.210)*
- `[M]` The wire colours the kit sensor 216061GT carries on its own pigtail are not given anywhere in the three manuals; the sensor-side colours on ES0366J belong to the older 94980-type sensor. — *README.md 235; independently checked - 216061GT appears only at 106877.txt:7267-7272 and 8691-8693, with no colour data, and not at all in 1268557.txt or 114474.txt*

</details>


### C6: Is the 5.0 volt LED lit on the TCON board?

**What this finds out.** Open the ground control box on the turntable and look at the big circuit board inside. That board is the TCON (turntable controller = the machine's main computer). Somewhere on it there is a small indicator light — an LED (light-emitting diode) — that the Service Manual calls the "5.0 VDC LED". You are only going to look at it and write down whether it is lit or dark. Nothing gets unplugged, jumpered or changed to make it light.

**Where it is**

- *What it is:* The ALC-1000 circuit board, also called the ECM circuit board and also called the TCON (turntable controller). It is the main circuit board of the machine (SM p.102), and the Service Manual confirms ALC-1000 = TCON (SM p.103). What you are looking for on it is one small indicator light labelled, in the manual's words, the "5.0 VDC LED". For this machine (serial Z13513-1861, i.e. in the "from SN 1712" group) the board part number is 1258461GT, PCB,ASSY,ECM,GROUND,PGMD (PM p.63 item 23-).
- *Where on the machine:* The ground control box, mounted on the turntable — the rotating upper deck the booms sit on (OM p.20 legend item 2: "Ground controls"). It is the steel box carrying the LCD screen, the red E-stop mushroom, the main key switch, and a second key switch at the lower right which is the Bypass/Recovery key switch (SM p.99). Stand on the ground at the turntable, facing the panel.
- *How to find it:* Key OFF, both E-stops pushed IN. Take out the ground control box lid fasteners and swing the box open (SM p.103 steps 2-3). Inside, the big flat board that the ribbon cables plug into is the TCON: one flat ribbon cable comes from the LCD board in the lid, and two more come from the membrane decal (the printed plastic button overlay on the front of the panel) — SM p.103 steps 8-9. That board is item 23 in Parts Manual figure 305.1. Its harness plugs are the big rectangular AMP-brand connector housings along one edge: J11 black 23-pin, J12 black 35-pin, J13 white 23-pin, J14 white 35-pin (colours and types from SM p.205; pin counts also on SM p.210). The 5 volt supply for the two boom angle sensors leaves the board on J12 pin 26 (SM p.210). The battery feed comes in on J15, described in the manual as a black 4-pin DTP connector (DTP is a Deutsch connector series — a sealed round-pin plug with a locking wedge). In the Parts Manual the only 4-way DTP flange receptacle listed for this box is item 16, 73717GT, and its leader line on figure 305.1 points at the connector cluster mounted through the side wall of the box — so item 16 is likely J15, though the Parts Manual prints no J-numbers anywhere and never says so [M]. The 20 amp circuit breaker is on the FRONT face of the box, right-hand side, a small round button below the key switch and above the round alarm (OM p.21 figure, item 9; PM figure 305.1 item 11).
- *What it looks like:* A flat rectangular circuit board that fills most of the box interior, held down by small Phillips screws and nylock nuts (nuts with a nylon insert that stops them shaking loose) — PM p.63 items 25 (49820GT, 6-32 x .5) and 24 (12344GT, 6-32); the exploded view on PM p.62 figure 305.1 shows callouts 24 and 25 running to the board's mounting points. Along one edge sits a row of tall ribbed connector housings, and two flat grey ribbon cables plus the LCD ribbon cable plug into it (SM p.103 steps 8-9). The manuals never print a picture of this board and never say where the 5.0 volt LED sits, what colour it is, or what it is labelled — SM p.103 is a text-only page with no illustration. So: look over the board for any small indicator light and read the silkscreen next to it (silkscreen = the white lettering printed onto the board). It is likely a single small LED near the board's power-input and voltage-regulator area, marked something like "5V" [M]. Any lit indicator with a 5 volt label is the one the manual means; a board with no lit indicator at all is the other answer.
- *Source:* SM p.99 lines 7569-7575 and 7594-7596; SM p.102 lines 7769-7775; SM p.103 lines 7835-7846, 7853-7855, 7877-7883, and figure sm103-alc-board.png; SM p.205 lines 15435-15444; SM p.210 lines 16113-16123 and 16175-16178, figure sm210-tcon-pins.png; SM p.8 lines 1304-1306; OM p.20 lines 1251-1258; OM p.21 figure key-om-gc-panel.png; OM p.22 lines 1401-1404; OM p.31 lines 1848-1855; PM p.61 lines 3054-3065 and 3122-3125; PM p.63 lines 3186-3189, 3211-3223, 3224-3229; figures pm060-ground-controls.png, pm062-gc-box.png, pm063-gc-box-list.png

**Set the machine to**

- **Key:** Main key switch (the round key near the top of the panel, item 4 on OM p.21) to GROUND for the observation, OFF for opening the box and for every unplug. The second key switch at the lower right of the box is the Bypass/Recovery key switch (SM p.99) — leave it in RUN and do not turn it.
- **E-stops:** Opening the box: push IN the red E-stop (emergency stop) mushroom button at the ground controls AND the red E-stop in the platform, per SM p.103 step 1. For the look-at-the-LED step you must put power on, so pull the ground E-stop OUT and leave the platform E-stop pushed IN. Before unplugging anything again: key OFF and ground E-stop pushed IN.
- **Battery:** Connected and charged. The board is fed on the red wire B1BAT-RD into plug J15 pin 1 (SM p.210), so the battery has to be in for the LED to light. The machine's starting and control battery is 12 volts DC, Group 31 (SM p.8). Disconnect the battery only if you later decide to do a resistance (ohms) test — this card does not ask for one.
- **Engine:** OFF. The engine does not need to run. Do not press the engine start button while the lid is open.
- **Also:** Firm level ground, wheels chocked, nobody in the platform, nobody touching the panel buttons while the lid is open. The axles are retracted, and with the axles retracted the machine blocks boom functions on purpose — the Operator's Manual function test says the primary boom "should not raise unless the axles are extended" (OM p.31). Do NOT move the small calibration toggle switch at the top of the box and do NOT wedge a door fastener against it — that is the calibration technician's job. No jumper wires, no bypass key, no bridging of any pin. Note before you start: write down every fault code already on the display, because step 8 of this card will add more.

**Connector — J15 — the black 4-pin DTP (Deutsch sealed connector series) plug that brings battery power into the TCON; and J12 — the black 35-pin AMP connector on the TCON, whose pins 25 and 26 are the sensor ground and the 5 volt sensor supply that leave the board for the two boom angle sensors.**

J15 carries battery positive on pin 1 (red wire B1BAT-RD, named SYS_BAT_PWR on the schematic) and two brown ground wires on pins 2 and 3 (both GND-BR, named SYS BAT GND and BATECU GND); pin 4 is unused (SM p.210; schematic sheet ES0366J, which is the machine's electrical schematic printed on SM p.229). On that sheet the SYS_BAT_PWR line runs from J15 pin 1 up through a breaker symbol marked "CB 20A" before it reaches the board, and the TCON block also contains a three-terminal regulator symbol marked "5V 12V GND" and a net named "5 VOLT". On the same sheet, J12 pin 26 is labelled SNSR PWR and carries wire P109ANG-GR/WH (green/white), J12 pin 25 is labelled SNSR GND and carries SNSR GND-BR (brown). Those two are the boom angle sensors' supply and return; the sheet's own convention is that a "SNSR PWR" net is 5.0 volts (it prints "STEER SNSR PWR (5.0 VDC)" on the steering sensors), and the fault table independently says to "Check for 5.0 VDC at the sensor". J12 pins 32 and 33 are the two angle signals coming back in: PRI ANG INPUT (C123PBS-RD/BK, red/black) and SEC ANG INPUT (C124SBS-OR/BK, orange/black). Pins 27 to 31 sit between 26 and 32, so 26 and 32 are not neighbours in the connector. Note a conflict inside the Service Manual: the connector legend on SM p.205 prints "J15 / Black 4 pin DTP connector on PCON" (PCON = platform controller, the computer in the basket control box), but the pin legend on SM p.210 lists J15 under "Turntable Controller" and the schematic draws it feeding the TCON block. Treat it as the TCON power plug; the p.205 line is a typo.

*Source:* SM p.205 lines 15435-15444; SM p.210 lines 16113-16123 and 16175-16192; SM p.229 sheet ES0366J — text lines 17501-17507, 17562-17563, 17600-17610, 17380, 18308-18309, 19521-19522; figures es-j15-tcon-power-cb20a.png, es-j12-snsr-pwr-gnd.png, sm210-tcon-pins.png; SM p.177 lines 12594-12598

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| J15-1 | B1BAT-RD (schematic net name: SYS_BAT_PWR) | red | not applicable — this is a battery feed, not a sensor wire | Battery positive into the TCON. On schematic sheet ES0366J this line passes through a breaker drawn "CB 20A" before it reaches the board, and the board block also contains a regulator symbol marked "5V 12V GND". | Back through the machine harness to the battery. The schematic names the two batteries B1 "ELECTRONICS BATTERY" and B2 "START BAT", and this wire is named B1BAT, so it likely originates at the B1 battery [M]. The manuals do not draw or state the end-to-end route, so do not expect a named terminal post. Forward from J15: through the 20 amp breaker to the board. |
| J15-2 | GND-BR (schematic net name: SYS BAT GND) | brown | not applicable | Battery negative (ground) for the TCON. | Not traced. On the schematic crop the two brown wires from pins 2 and 3 are joined by a junction dot just below the connector and then run off the bottom of the drawing; the sheet's separate battery-ground wire has a different name (BAT GND-BR), so do not assume they are the same conductor. |
| J15-3 | GND-BR (schematic net name: BATECU GND) | brown | not applicable | Second ground for the TCON, named BATECU GND on the sheet. Joined to pin 2 on the harness side by a junction dot. | Not traced — same as pin 2 above. |
| J15-4 | (UNUSED) | no wire fitted | not applicable | Not used. | Nothing. |
| J12-26 | P109ANG-GR/WH (schematic label: SNSR PWR) | green with a white stripe | covered in the sensor-plug card | The 5 volt sensor supply leaving the TCON for the two boom angle sensors. The sheet labels the equivalent steering supply "STEER SNSR PWR (5.0 VDC)" and the fault table says to check for 5.0 VDC at the sensor, so this line is 5 volts. Whether the manual's "5.0 VDC LED" watches this exact line or the board's internal 5 VOLT net is not stated anywhere [M]. | Out through the boom harness to the primary boom angle sensor plug J114 and the secondary boom angle sensor plug J154. Both plugs share this one supply, which is why a short at the primary can show up as a secondary fault. The pin numbers at those plugs are verified in the sensor-plug card, not here. |
| J12-25 | SNSR GND-BR (schematic label: SNSR GND) | brown | covered in the sensor-plug card | Sensor ground return for the boom angle sensors. | Out through the boom harness to J114 and J154 — see the sensor-plug card. |
| J12-32 and J12-33 | C123PBS-RD/BK (PRI ANG INPUT) and C124SBS-OR/BK (SEC ANG INPUT) | red with black stripe; orange with black stripe | covered in the sensor-plug card | The two boom angle signals coming back INTO the TCON from the primary and secondary sensors. Listed only so you can recognise the group; nothing is probed at these pins in this card. | J114 (primary boom angle sensor) and J154 (secondary boom angle sensor). |

**Do this**

1. Set up. Machine on firm level ground, wheels chocked, nobody in the platform. Photograph or write down every fault message already on the ground display before you touch anything — step 8 can add new ones and you need to know which were there first. Push the platform E-stop IN and the ground E-stop IN, and turn the main key switch OFF. (SM p.103 step 1: "Push in the red Emergency Stop button to the off position at both the ground and platform controls.")
2. Open the box. Take off your rings, watch and any other jewellery — the manual warns of electrocution and burn risk from live circuits (SM p.103 WARNING). Remove the ground control box lid fasteners and open the box (SM p.103 steps 2-3). Clip a grounded anti-static wrist strap to the ground screw inside the control box (SM p.103 step 6); static electricity from your body can kill a circuit board without any visible sign (SM p.103 NOTICE). Do not unplug anything yet.
3. Hands off the calibration switch. At the top edge of the ground control box there is a small two-position toggle switch (PM p.63 item 29, 56457-SGT, a single-pole double-throw maintained toggle — it stays where you put it). Flicking it to the left puts the machine into calibration mode (SM p.42 step 6). Do not touch it, and do not wedge a door fastener against it. Calibration is the trained calibration technician's job, not this card's.
4. Identify the TCON board. It is the large flat board that the LCD ribbon cable from the lid and the two membrane-decal ribbon cables plug into (SM p.103 steps 8-9; PM figure 305.1 item 23). Leave every cable connected. Scan the whole board for small indicator lights and read the white printed lettering beside each one. The one the manual wants is the "5.0 VDC LED". Note where it is and photograph the board so the next person does not have to hunt for it.
5. Power up and look. Note first: energising the box with the lid open is NOT a manual procedure — SM p.103 keeps both E-stops pushed in for all work inside the box. This card does it only because an indicator light cannot be read with the power off. So: keep both hands clear of the board, touch nothing inside, and have a second person stand clear. Turn the main key switch to GROUND and pull the ground E-stop OUT. The LCD screen should come on (OM p.31 function test step 2-3: "Turn the key switch to ground control... Pull out the red Emergency Stop button to the on position. Result: The LCD screen will come on"). Now look at the LED. Lit or dark? Write down lit/dark, its colour, and exactly what the board says next to it. Photograph it.
6. If the LED is LIT: write "TCON 5 V present". Push the ground E-stop IN, key OFF, close the lid, refit all fasteners. Go to the sensor-plug voltage card, which measures the 5 volts out at the J114 and J154 harness plugs. The 0 volt fault is somewhere downstream of the board.
7. If the LED is DARK and the LCD is also dark and the alarm is silent: the box is not getting its battery feed. (a) Look at the 20 amp circuit breaker on the front face of the box — right-hand side, the small round button below the key switch and above the round alarm (OM p.22 item 9, "20A circuit breaker for system circuit"; PM p.61 item 11, 147095GT). Neither manual says what style of breaker it is; it is likely a push-to-reset type whose button stands proud when it has tripped [M]. If the button is standing out, push it in once. If it pops again, do NOT hold it in and do NOT fit a bigger one — there is a short to find. (b) Check the feed into the box at J15: key OFF, ground E-stop pushed IN first. Unplug the 4-pin harness plug from the black Deutsch DTP flange receptacle on the side wall of the box. Set your meter to DC volts, 20 volt range or auto. Before you probe, look at the plug face: the pin-numbering diagram on SM p.210 is drawn as seen on the connector face, with 4 top-left, 1 top-right, 3 bottom-left, 2 bottom-right — when you look into the MATING plug that layout is mirrored left-to-right, so check the moulded numbers on the plug and the wire colours (pin 1 red, pins 2 and 3 brown) before you decide which cavity is which. Put the red probe into the pin 1 cavity (red wire, B1BAT-RD) and the black probe into the pin 2 cavity (brown wire, GND-BR). (c) Compare what you read with what you measure directly across the battery posts. The starting and control battery is 12 volts DC, Group 31 (SM p.8), so expect roughly 12 to 13 volts on a healthy resting battery — and, more importantly, expect the J15 reading to match the battery-post reading. If J15 reads nothing while the battery posts read normal, the break is in the feed wiring between the battery and this plug; the manuals do not draw that route, so trace the red B1BAT-RD wire physically. Push J15 back on until the latch clicks.
8. If the LED is DARK but the LCD is lit: the board has its battery feed but is not producing 5 volts. Two likely reasons: the board's own 5 volt regulator has failed, or the 5 volt sensor line leaving the board on J12 pin 26 (P109ANG-GR/WH) is shorted to ground somewhere out in the boom harness and is dragging the supply down. The spliced, Scotchlok-tapped J114 primary sensor plug is the prime suspect — Scotchlok taps are the small blue squeeze-on connectors that cut through insulation to join two wires (insulation-displacement taps); the case file records two of them with a green jumper looped between them at J114, which means two conductors are bridged there. This short-pulls-down-the-rail reasoning is field logic, not a manual statement [M]. Test it by removing load, never by adding a bridge. Ground E-stop IN, key OFF. Unplug J114 at the primary boom pivot. Key to GROUND, ground E-stop OUT, look at the LED again. Still dark? Key OFF, E-stop IN, then also unplug J154 (the secondary sensor plug), power up and look again. Expect the display to throw extra sensor faults while the plugs are out — that is the disconnection, not a new failure; compare against the list you wrote in step 1. If the LED comes back with one plug out, the short is in that plug, its splices, or that sensor: remove the taps and splices and restore the factory wiring with proper Deutsch pins. Never bridge, jumper or re-tap anything to make the light come on. If it stays dark with both sensor plugs out, suspect the board itself (1258461GT for this serial). Stop there and escalate — replacing the TCON forces a full machine calibration in a set order, which only a Genie factory-trained technician may do (SM p.103 note, SM p.105).
9. Finish. Key OFF, ground E-stop pushed IN. Refit J114, J154 and J15 if you unplugged them, pushing each home until it locks. Remove the wrist strap. Close the lid and refit every fastener — and note that closing the door automatically flicks the calibration toggle back out of calibration mode (SM p.43 note), which is another reason not to have touched it. Record on the sheet: LED lit or dark, its label and colour, LCD lit or dark, breaker state, the J15 voltage and the battery-post voltage if you measured them, which plugs were unplugged, and any fault codes that appeared during the test.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| The 5.0 volt LED on the TCON board, looked at with the key in GROUND, the ground E-stop pulled OUT and the LCD lit | **LED lit** | The board has battery power and its 5 volt supply is up. The secondary sensor 0 volt fault is out in the boom harness, the sensor plugs (J114 is already known to be modified), the splices, or a sensor. Close the box and go to the sensor-plug voltage card. | Use the two rows below — which one applies depends on whether the LCD screen is lit. |
| LED dark AND LCD dark AND alarm silent, with key in GROUND and ground E-stop OUT | **The box is not powered — treat this as a feed problem, not a 5 volt problem** | Work the feed: reset the 20 amp breaker on the box face once (never hold it in if it re-trips), then measure at the unplugged J15 harness plug, pin 1 (red) to pin 2 (brown). Note: the manuals do not state that a dark LCD proves the battery feed is missing — this is the card's own reasoning from the fact that the LCD comes on when the key goes to ground and the E-stop comes out [M]. | If J15 reads the same as the battery posts and the breaker is set but the box is still dead, the fault is inside the box: the breaker assembly, the wiring from J15 to the board, or the board. Escalate. |
| LED dark BUT LCD lit | **The board has its battery feed but is not making 5 volts — either the board's 5 volt regulator has failed, or the 5 volt sensor line out of J12 pin 26 (P109ANG-GR/WH) is shorted and pulling it down** | Unplug J114, then J154, with the key OFF and the ground E-stop IN between every change. If the LED comes back with a plug out, the short is in that plug, its splices or that sensor — repair back to factory wiring with proper Deutsch pins. No bridges, no jumpers. | LED still dark with both sensor plugs out: suspect the TCON board (1258461GT, from SN 1712). Stop — replacing it forces a full machine calibration in a set order by a Genie factory-trained technician (SM p.105). |
| J15 harness plug unplugged, key OFF: meter on DC volts, red probe in the pin 1 cavity (red wire B1BAT-RD), black probe in the pin 2 cavity (brown wire GND-BR). Then repeat directly across the battery posts. | **The J15 reading should match the battery-post reading. The starting and control battery is 12 volts DC (SM p.8), so a healthy resting battery gives roughly 12 to 13 volts; what matters is that the two readings agree.** | The feed reaches the box. If the box is still dead, the problem is the breaker, the wiring inside the box, or the board. | You have a break or a bad connection between the battery and J15. The manuals do not draw the route of B1BAT-RD end to end, so trace the red wire physically and check the battery terminals and cables. Do not go looking for a named terminal post on the engine fuse panel — the manuals put no TCON feed there. The only overcurrent device drawn on this line is the 20 amp breaker between J15 pin 1 and the board; whether anything protects it further upstream is not stated [M]. |

**Why we are doing this.** The ground display is showing a secondary boom angle sensor fault at 0 volts. For that fault the Service Manual gives a four-part recovery action: "Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the [5].0 VDC LED is lit on the TCON board. Repair or replace as necessary" (SM pp.177-180). The LED check is the third of those four sentences, not the last word — the first sentence, measuring 5 volts out at the sensor, is a separate card. This card answers the board end. If the LED is lit, the computer is making its 5 volts and you go look further out: the boom harness, the modified J114 plug, the splices, or a sensor. If the LED is dark, stop chasing boom wiring and work on the box: no battery feed into the box, or a short out in the sensor wiring dragging the 5 volts down, or a failed board. One look decides which of those three paths you take.

**Safety**

- Never bypass, jumper or defeat any safety circuit, limit switch, angle sensor, tilt sensor or load cell. This card only looks and measures. Do not bridge any pins to make the LED light, and if you find bridges already fitted (the Scotchlok taps at J114) the job is to remove them and restore factory wiring, not to add more.
- Key OFF and ground E-stop pushed IN before you unplug or plug in any connector — J15, J114, J154. Leave the platform E-stop pushed IN for the whole test (SM p.103 step 1).
- Electrocution and burn hazard (SM p.103 WARNING): remove all rings, watches and other jewellery before you reach into the box. Keep hands clear of the board whenever the key is on.
- Static electricity can destroy the circuit board (SM p.103 NOTICE). Wear a grounded wrist strap clipped to the ground screw inside the control box, or keep firm contact with a grounded metal part of the machine, whenever you are near the board.
- Step 5 puts power on the box with the lid open. That is this card's own arrangement, not a manual procedure — SM p.103 keeps both E-stops pushed in for all work inside the box. Touch nothing inside while it is live, and put the E-stop back in before doing anything else.
- Do not use the Bypass or Recovery positions of the lower key switch, do not move the calibration toggle at the top of the box, and do not wedge a door fastener against it. Those belong to the calibration technician (SM p.42, SM p.99). Bypass and Recovery are not part of normal operation and their use means the machine has faults (SM p.99).
- Do not press any membrane button while the lid is open. The axles are retracted, which blocks boom functions on purpose (OM p.31), but treat every button as live.
- If the 20 amp breaker trips again after one reset, do not hold it in and do not fit a larger one. Find the short.
- Unplugging J114 and J154 in step 8 will raise extra sensor fault codes. Record the pre-existing codes first so you can tell them apart, and clear the machine properly afterwards.
- Machine on firm level ground, wheels chocked, nobody in the platform. Do not raise or drive the machine — the safety envelope is faulted.
- Replacing the TCON board is not a field fix on this job. It forces a full machine calibration in a specific order, and calibration may only be done by technicians with Genie factory service training (SM p.103 note, SM p.105). Tag the machine out of service if the board is condemned.

**Open questions on this card**

- Where exactly is the 5.0 volt LED on the ALC-1000 / TCON board, what colour is it, and what does the printed label beside it say? No manual figure or sentence shows it — a full text search finds only the one recovery sentence, repeated ten times, and SM p.103 has no illustration. Tagged M. The technician should photograph the board and add the answer to the case file so the next person does not have to hunt.
- Does the LED watch the board's internal 5 VOLT rail, the J12-26 SNSR PWR output specifically, or something else? The schematic draws no LED symbol and no visible link between the internal 5 VOLT net and P12-26. Tagged M. If the LED is lit but the sensor plugs read 0 volts, this distinction is what decides whether the board or the harness is at fault, and the sensor-plug card resolves it.
- Is the breaker drawn 'CB 20A' on schematic sheet ES0366J the same physical device as the 20 amp breaker on the box face? Both are 20 amp and both sit on the control supply, but no document says so. Tagged M.
- Is Parts Manual item 16 (73717GT) the receptacle the Service Manual calls J15? The Parts Manual prints no J-numbers at all. Tagged M — treated here as likely because it is the only 4-way DTP flange receptacle in the box.
- Where does the red B1BAT-RD wire actually originate, and what protects it upstream of the 20 amp breaker? The original version of this card sent the technician to a 'B1PBAT Power from Battery stud on the engine relay/fuse panel'; that is wrong and has been removed — B1PBAT appears only in the SM p.211 and p.212 fuse-panel legends and is never linked to B1BAT-RD. The schematic labels the batteries B1 'ELECTRONICS BATTERY' and B2 'START BAT', so B1 is the likely origin (tagged M), but the route is not drawn. Trace the wire physically if the J15 reading is dead.
- Where do the two brown J15 ground wires (pins 2 and 3) terminate? The schematic crop shows them joined by a junction dot and then leaving the drawing. The sheet's battery-ground wire carries a different name (BAT GND-BR), so they should not be assumed to be the same conductor.
- The engine relay and fuse panel legend (SM p.211) lists no fuse for the TCON at all, and that legend is engine-specific (Deutz/Perkins, with Cummins on p.212). The only overcurrent protection the manuals show for the TCON feed is the 20 amp breaker. If anyone expects a numbered fuse for the TCON, these documents do not contain one.
- Is the ground-box breaker a push-to-reset button type? Not stated in any manual (tagged M). If it turns out to be a different style, adapt step 7(a) — the rule stands either way: reset once, never hold it in.
- Is the TCON's 5 volt rail alive with the key OFF? Unknown — the feed at J15 is battery-side of the key switch, but the manuals do not say what the key switch gates. This card observes with the key at GROUND and the E-stop out, which is the state the Operator's Manual confirms the LCD lights in (OM p.31).
- Does the machine's on-screen wording 'shorted / 0 V' map exactly to the fault table row 'Value at 0 V'? The manuals print no table of display strings, so this is an inference (tagged M).
- Energising the box with the lid open (step 5) and powering up with the boom angle sensor plugs disconnected (step 8) are this card's own constructions, not manual procedures — SM p.103 keeps both E-stops pushed in throughout. Nothing is bridged and no motion is commanded, but expect extra sensor faults during step 8 and record the pre-existing codes first.
- The SM p.99 serial break is printed as Z13512-1712 while this machine is Z13513-1861 — a different prefix. Treated here as applying (the Parts Manual uses bare serial numbers for the same split), but flagged as an assumption.
- The J114 and J154 sensor-plug pin numbers — which plug cavity carries the J12-26 5 volts and which the J12-25 ground — are deliberately not restated here. They belong to the sensor-plug card and must be verified there against es-j114-primary-sensor.png and es-j154-secondary-sensor.png.

<details><summary>Sources for this card (58 checked statements)</summary>

- `[V]` The recovery action for a boom angle sensor reading 0 V is four sentences; the LED check is the third, and the first is to check for 5.0 VDC at the sensor. Operational Primary Boom Angle Sensor, SM p.177. (The OCR renders '5.0' as '% .0'.) — *1268557.txt 12594-12598 (PDF 191 = SM p.177)*
- `[V]` Same four-sentence recovery action for the Safety Primary Boom Angle Sensor, Value at 0 V, SM p.178. — *1268557.txt 12632-12654 (PDF 192 = SM p.178)*
- `[V]` Same recovery action for the Operational Secondary Boom Angle Sensor, Value at 0 V, SM p.179 — the row that matches this machine's displayed fault. — *1268557.txt 12775-12797 (PDF 193 = SM p.179)*
- `[V]` Same recovery action for the Safety Secondary Boom Angle Sensor, Value at 0 V, SM p.180. — *1268557.txt 12830-12853 (PDF 194 = SM p.180)*
- `[V]` The error type is Value Too Low / Value at 0 V; its effect is primary up, secondary up/down and extend disabled with the alarm sounding. — *1268557.txt 12590-12593 (SM p.177)*
- `[V]` The fault table columns are Error Source, Error Type, Effects, Recovery Actions. — *1268557.txt 12628-12631 (SM p.178)*
- `[V]` TCON = turntable control box, the communication and operations centre; the main key switch is towards the top of the box and the Bypass/Recovery key switch at the bottom. — *1268557.txt 7569-7575 (PDF 113 = SM p.99)*
- `[V]` Bypass and Recovery are not part of normal machine operation and indicate faults; contact trained personnel. — *1268557.txt 7576-7583 (SM p.99)*
- `[V]` The bypass/recovery key switch is on the lower right side of the control box from serial number Z13512-1712. — *1268557.txt 7594-7596 (SM p.99)*
- `[V]` The ground control box holds two circuit boards: the LCD board on the lid, and the ECM board, which is the main circuit board of the machine. — *1268557.txt 7769-7775 (PDF 116 = SM p.102)*
- `[V]` ALC-1000 circuit board = TCON; replacing it requires calibrating the entire machine in a specific order. — *1268557.txt 7835-7838 (PDF 117 = SM p.103)*
- `[V]` Opening procedure: push both E-stops in, remove the lid fasteners, open the box. — *1268557.txt 7839-7846 (SM p.103)*
- `[V]` Attach a grounded wrist strap to the ground screw inside the control box. — *1268557.txt 7853-7855 (SM p.103)*
- `[V]` Remove rings, watches and jewellery (electrocution/burn hazard); static discharge can damage the board, so keep contact with grounded machine metal or use a grounded wrist strap. — *1268557.txt 7857-7871 (SM p.103); also visible in figure sm103-alc-board.png*
- `[V]` The TCON board is the one the LCD ribbon cable and the two membrane-decal ribbon cables plug into. (Line range corrected from the original card's 7871-7876, which is the end of the static-discharge notice plus step 7.) — *1268557.txt 7877-7883 (SM p.103)*
- `[V]` SM p.103 is a text-only page: 'How to Remove the ALC-1000 Circuit Board', steps 1-11, one WARNING and one NOTICE, with no illustration at all — so the manual shows no picture of the board or its LED. — *sm103-alc-board.png figure (SM p.103), read directly*
- `[V]` Full machine calibration must be done in the proper sequence when the ALC-1000 board (TCON) is replaced, and only by technicians with Genie factory service training. — *1268557.txt 7974-7983 (PDF 119 = SM p.105)*
- `[V]` TCON J15 pinout: 1 B1BAT-RD, 2 GND-BR, 3 GND-BR, 4 unused. (Range corrected to end at 16123; line 16124 is the J12 heading.) — *1268557.txt 16113-16123 (PDF 224 = SM p.210); confirmed visually in figure sm210-tcon-pins.png*
- `[V]` TCON J12-25 = SNSR GND-BR (brown) and J12-26 = P109ANG-GR/WH (green/white). — *1268557.txt 16175-16178 (SM p.210); confirmed visually in figure sm210-tcon-pins.png*
- `[V]` TCON J12-32 = C123PBS-RD/BK and J12-33 = C124SBS-OR/BK; pins 27-31 lie between J12-26 and J12-32, so 26 and 32 are not adjacent. — *sm210-tcon-pins.png figure (SM p.210), read directly; same rows in 1268557.txt lines 16178-16192*
- `[V]` The SM p.210 pin-legend page gives pin counts and wire names only. Its 4-pin connector diagram is drawn with 4 top-left, 1 top-right, 3 bottom-left, 2 bottom-right — the layout a technician must check against the plug before probing. J11 lists 23 pins, J12 35, J13 23, J14 35, J15 4. The page prints NO connector colours. — *sm210-tcon-pins.png figure (SM p.210), read directly*
- `[V]` The connector colours and types come from the Circuit Connector Legend on SM p.205, not from SM p.210: J11 black 23-pin AMP, J12 black 35-pin AMP, J13 white 23-pin AMP, J14 white 35-pin AMP. — *1268557.txt 15435-15442 (PDF 219 = SM p.205)*
- `[V]` The connector legend on SM p.205 calls J15 a black 4-pin DTP connector but prints 'on PCON', which conflicts with the pin legend (SM p.210, J15 under Turntable Controller) and with the schematic, which draws J15 feeding the TCON. Treated here as a typo. — *1268557.txt 15443-15444 (SM p.205)*
- `[V]` On schematic sheet ES0366J (SM p.229) the TCON's J15 is drawn as 'J15 BLACK 4 PIN POWER HARN' with P1-01 SYS_BAT_PWR fed by B1BAT-RD, P1-02 SYS BAT GND and P1-03 BATECU GND both fed by GND-BR (joined by a junction dot below the connector), and P1-04 with no wire. The SYS_BAT_PWR line passes a breaker symbol marked 'CB 20A'. The TCON block also contains a three-terminal regulator symbol marked '5V 12V GND' and a net named '5 VOLT' running to 74HC08 pin 14. No LED symbol appears anywhere in the block, and the two brown ground wires leave the bottom of the crop with no destination drawn. — *es-j15-tcon-power-cb20a.png figure rendered from PDF page 243 (SM p.229, sheet ES0366J), read directly*
- `[V]` The same labels appear in the sheet's extracted text. — *1268557.txt 17600-17610 and 19521-19522 (PDF 243 = SM p.229)*
- `[V]` On ES0366J, J12-25 is labelled SNSR GND (wire SNSR GND-BR), J12-26 SNSR PWR (wire P109ANG-GR/WH), J12-32 PRI ANG INPUT (C123PBS-RD/BK) and J12-33 SEC ANG INPUT (C124SBS-OR/BK). — *es-j12-snsr-pwr-gnd.png figure (SM p.229), read directly; text echoes at 1268557.txt lines 17501-17507 and 17562-17563*
- `[V]` On the same schematic sheet, a 'SNSR PWR' net is explicitly 5.0 volts — the steering sensor supply is labelled 'STEER SNSR PWR (5.0 VDC)'. Combined with the fault table's 'Check for 5.0 VDC at the sensor', this establishes that the boom angle sensor supply on J12-26 is the 5 volt supply. — *1268557.txt 17380 (PDF 243 = SM p.229)*
- `[V]` J12 is the limit switch harness connector on the TCON (J14 is the manifold harness, J11 the boom harness, J13 the engine harness). — *1268557.txt 18306-18311 (SM p.229); J13 WHITE 23 PIN ENGINE HARN visible in figure es-j15-tcon-power-cb20a.png*
- `[V]` The machine's engine-starting and control-system battery is 12 volts DC, Group 31, quantity 1 — the reference figure for the J15 voltage check. — *1268557.txt 1304-1308 (PDF 22 = SM p.8)*
- `[V]` In the Service Manual's wire colour legend, a red wire on circuit 20 is the 12 volt DC battery supply. — *1268557.txt 14418-14420 (PDF 211 = SM p.197)*
- `[V]` The ground control panel has a 20 A circuit breaker for the system circuit as item 9, with the alarm as item 10 and the Bypass/recovery key switch as item 11. — *114474.txt 1401-1404 (PDF 24 = OM p.22)*
- `[V]` On the OM p.21 ground control panel drawing, item 9 is a small circle with a breaker arch symbol on the right-hand side of the panel, below the key switch (item 4) and above the larger round alarm (item 10); item 2 is the red STOP mushroom and item 11 leads off the panel to the Run / Bypass / Recovery key switch. The page also notes that Z-135 machines have one of two styles of ground control panel. — *key-om-gc-panel.png figure (OM p.21), read directly*
- `[V]` The LCD screen comes on when the key switch is turned to ground control and the red E-stop is pulled out — the basis for the lit-LCD branch of this card. — *114474.txt 1829-1833 (PDF 33 = OM p.31)*
- `[V]` With the axles retracted the primary boom is blocked from raising by design — verified in the manufacturer's own function test, replacing the case file's second-hand citation. — *114474.txt 1847-1855 (PDF 33 = OM p.31)*
- `[V]` The ground controls are on the turntable (Operator's Manual machine legend item 2). — *114474.txt 1251-1258 (PDF 22 = OM p.20)*
- `[V]` Parts Manual figure 305.1 item 11 = 147095GT ASSY, CIRCUIT BREAKER 20A, qty 1. — *106877.txt 3122-3125 (PM p.61)*
- `[V]` TCON control box assembly for this serial: 237069GT from SN 1712 (106512GT to SN 1711). — *106877.txt 3054-3066 (PM p.61)*
- `[V]` TCON circuit board for this serial (from SN 1712): 1258461GT PCB,ASSY,ECM,GROUND,PGMD; 217570GT to SN 1711; machine model, serial number and software revision required when ordering. — *106877.txt 3211-3223 (PM p.63); figure pm063-gc-box-list.png*
- `[V]` PM p.63 item 16 is 73717GT, CONN, RECEP, 4 WAY, DEUTSCH, DTP, FLANGE, qty 1 — the only 4-way DTP flange receptacle listed for the ground control box. — *106877.txt 3186-3189 (PM p.63)*
- `[V]` The calibration toggle switch in the ground control box is PM item 29, 56457-SGT, SWITCH,TOGGLE,SPDT,2 POS MAINT (single-pole double-throw, two-position maintained). — *106877.txt 3262-3265 (PM p.63)*
- `[V]` The board is held by 6-32 nylock nuts (12344GT, item 24) and 6-32 x .5 Phillips screws (49820GT, item 25); the exploded view — not the parts list — is what shows them fastening board item 23. — *106877.txt 3224-3229 (PM p.63); fastening relationship from figure pm062-gc-box.png (fig 305.1, bottom callout row 24-26-25-25-24 running to board item 23)*
- `[V]` Parts Manual figure 305.1: item 23 is the large flat board inside the opened box with tall ribbed connector housings along one edge; item 11 is a small round item on the front face between the key switch (9) and the round alarm (12); item 16's leader runs to the connector cluster mounted through the side wall of the box; item 29's leader runs to the top edge of the opened box. — *pm062-gc-box.png figure (PM p.62; identical drawing at PM p.60, figure pm060-ground-controls.png), read directly*
- `[V]` The calibration toggle switch is at the top of the ground control box and moving it left activates calibration mode; a door fastener is temporarily fitted to stop the door moving it. This instruction is on SM p.42. — *1268557.txt 3700-3708 (PDF 56 = SM p.42)*
- `[V]` Closing the control box door automatically takes the machine out of calibration mode. This note is on SM p.43, not p.42 as the original card cited (PDF 57 marker at line 3727, printed page number 43 at line 3736). — *1268557.txt 3772-3774 (PDF 57 = SM p.43)*
- `[V]` The engine relay and fuse panel legend on SM p.211 contains no TCON feed: its fourteen items are CR28 engine/fuel relay, CR17 hydraulic oil cooler fan relay, CR41 flashing beacon relay, CR5 horn relay, CB10 20A RPM solenoid breaker, F23 30A engine/start/alternator fuse, F22 60A glow plug fuse, F7 20A cooler fan/horn fuse, B1PBAT power from battery, B3PBAT fused power from B1, R21PIGN 20A ignition fuse (RPM solenoid), 02PGND ground, CR1 start relay, CR15 glow plug relay. This legend is engine-specific (Deutz BF4L 2011, TD2011L04i, Perkins 1104C-44 and 804D-33T); a separate Cummins legend follows on SM p.212. — *1268557.txt 16324-16378 (PDF 225 = SM p.211); figure sm211-fuse-panel.png*
- `[V]` The designator B1PBAT appears in only two places in the whole Service Manual, both of them fuse-panel legends, and is never linked to the wire B1BAT-RD. The original card's routing of J15-1 'back to the battery via the B1PBAT stud on the engine relay/fuse panel' has no support and has been removed. — *1268557.txt 16362, 16424 vs 16117 and 19345/19504/19561-19568*
- `[V]` The 5 volt supply and sensor ground are shared between the primary sensor plug J114 and the secondary sensor plug J154, which is why a short at the primary can produce a secondary 'shorted / 0 V' code. Case file, built from ES0366J. — *README.md 232-233*
- `[F]` The primary sensor plug J114 has been modified in the field: a loose pin terminal, two blue Scotchlok insulation-displacement taps with a green jumper between them, and a long green wire outside the loom to a butt splice. — *README.md 210-214*
- `[M]` The physical position, colour and silkscreen label of the 5.0 volt LED are not shown or described anywhere in the three manuals. The only mentions of it are the identical recovery sentence repeated ten times in the fault tables; no figure of the ALC-1000 board exists in any of the three documents. It is likely a single small LED near the board's power-input and regulator area, found by reading the board's own printed labels. — *1268557.txt 12596 and nine identical repeats*
- `[M]` The 5.0 volt LED likely watches the board's internal 5 VOLT rail from the '5V 12V GND' regulator, which is likely the same supply that leaves on J12-26 as SNSR PWR. No LED symbol is drawn on the schematic and no connection between the internal 5 VOLT net and P12-26 is visible on the available crops. — *es-j15-tcon-power-cb20a.png figure; and figure es-j12-snsr-pwr-gnd.png*
- `[M]` The breaker drawn 'CB 20A' on schematic sheet ES0366J is likely the same device as the 20 amp circuit breaker on the front face of the ground control box (OM p.22 item 9, PM p.61 item 11). Both are 20 amp and both sit on the control-system supply, but no document states they are the same part. — *es-j15-tcon-power-cb20a.png figure; with 114474.txt line 1402 and 106877.txt line 3124*
- `[M]` Parts Manual item 16 (73717GT) is likely the physical receptacle the Service Manual calls J15. The Parts Manual prints no J-numbers anywhere, so the identification rests on it being the only 4-way DTP flange receptacle in the ground control box list and on SM p.205 describing J15 as the only black 4-pin DTP connector. — *106877.txt 3186-3189 (PM p.63), cross-read with 1268557.txt line 15443-15444*
- `[M]` A dead short on the shared 5 volt sensor bus (for example at the spliced J114 plug) would likely pull the board's 5 volt supply down and put the LED out. The manual only says to check the LED; it does not describe this mechanism. — *README.md 210-214 and 232-233*
- `[M]` A dark LCD with a dark LED and a silent alarm likely means the box is not getting its battery feed. The manuals confirm only that the LCD comes on with the key at ground and the E-stop out; they do not state that a dark LCD proves the feed is missing. — *114474.txt 1829-1833 (OM p.31)*
- `[M]` The 20 amp breaker on the box face is likely a push-to-reset button type whose button stands out when tripped. The manuals describe it only as 'ASSY, CIRCUIT BREAKER 20A' and '20A circuit breaker for system circuit'. — *106877.txt 3124 (PM p.61); and 114474.txt line 1402 (OM p.22)*
- `[M]` The live display message 'secondary boom angle sensor shorted / 0 V' likely corresponds to the fault table row 'Value at 0 V' for the secondary boom angle sensor. The word 'shorted' appears nowhere in the fault table, and the manuals print no table of on-screen message strings. — *1268557.txt 12789-12790 (SM p.179)*
- `[M]` The red wire B1BAT-RD likely originates at the B1 battery. Schematic sheet ES0366J labels the two batteries 'ELECTRONICS BATTERY / B1' and 'START BAT / B2', and the wire name B1BAT matches B1, but no drawing traces the wire end to end and the extracted sheet text is jumbled. — *1268557.txt 19381-19389 (PDF 243 = SM p.229)*
- `[M]` The SM p.99 serial break for the bypass/recovery key switch is printed as 'Z13512-1712' while this machine is Z13513-1861 - a different prefix. Applying the break across prefixes is likely correct because the Parts Manual uses bare 'to SN 1711 / from SN 1712' for the same components, but the Service Manual does not say so. — *1268557.txt 7594-7596 (SM p.99), cross-read with 106877.txt lines 3057, 3064, 3215, 3222*

</details>


### C7: What the added green bonding wire is actually doing

**What this finds out.** Find out what the non-factory green wire at the primary boom pivot is connected to at each end: whether it ties the boom angle sensor ground (or another sensor pin) to the machine frame, or whether it only joins two pieces of steel together. The factory sensor ground is a wire that runs to the turntable controller, not to the frame, so anything that ties it to the frame was added by somebody.

**Where it is**

- *What it is:* Primary boom angle sensor J114 wiring and the added green bonding wire at the primary boom pivot
- *Where on the machine:* Pivot end of the primary boom, at the primary boom pivot pin, turntable rear, ground level with the boom stowed.
- *How to find it:* With the boom stowed, walk to the rear of the turntable where the primary boom (the long telescoping boom) pivots on the top of the secondary boom (the riser). The factory cover over the sensor (parts item 6, 106277PGT, 'COVER, PRIMARY BOOM, PAINTED') is already off on this machine, so the sensor hardware is exposed; you can reach it standing on the ground beside the rear tyre (photo). If a cover is back on, remove its retaining fasteners at the pivot end of the primary boom (SM p.81 step 1).
- *What it looks like:* A bright Genie-blue tube (the new primary sensor pin weldment, 218757GT) stands up from a blue base block bolted down with two hex bolts (sensor rotator weldment 233118GT); its threaded top is rusty. A black corrugated wire loom runs up and over the pin. Hanging from the loom is a grey Deutsch DT04-6P connector half with five wires seated and one gold pin terminal dangling loose on its wire. Beside it are two blue Scotchlok tap connectors bridged by a short green loop, one tap on a yellow wire and one on a green wire. A longer solid-green wire leaves the loom, loops outside everything, and ends at a pink insulated butt splice; a short lead from that splice is trapped under a bolt head on a grey machined block at the corner of a welded bracket next to the hydraulic hoses at the pivot.
- *Source:* SM p.72 line 5694-5695 'The primary boom angle sensor is located inside the primary boom at the pivot end.'; SM p.81 lines 6374-6379 (boom end cover at the pivot end, sensor at the boom pivot pin); PM p.169 fig 511.2 line 8718; photos 2026-09-12-j114-pivot-hardware.jpg and 2026-09-12-j114-green-wire-to-pivot-splice.jpg

**Set the machine to**

- **Key:** Key switch OFF and the key removed from the switch and in your pocket (SM p.24). Do not use the bypass or recovery key positions.
- **E-stops:** Both red Emergency Stop buttons pushed IN (off position) at the ground controls and at the platform controls (SM p.24).
- **Battery:** OFF. Tag and disconnect the cables from the engine starting/controls battery (it is on the engine side of the machine; SM p.76). Take the negative cable off first and tape its end clear of the post (general practice). The auxiliary power unit batteries are a separate set (OM p.17) and stay untouched. Before any ohms reading, put the meter on DC volts and confirm J114 harness pin 1 to pin 2 reads 0 V.
- **Engine:** OFF and cool. It must not be started during this card.
- **Also:** Machine on firm level ground, wheels chocked, boom stowed, turntable rotation lock engaged if fitted (SM p.24). Axles are retracted (8 ft 1 in) so boom functions are locked out anyway. J114 (primary boom angle sensor connector) must be fully unplugged, both halves apart, for the whole card. No calibration jumper, no toggle, no key tricks. Nothing gets cut on this card; the green wire is only unbolted at its bracket end and tagged.

**Connector — J114**

6-pin Deutsch DT connector for the primary boom angle sensor (PBAS). On this machine the half you will find loose is marked 'DEUTSCH IPD USA DT04-6P' (the receptacle half with pin contacts); five wires (red, blue, yellow, green, white) are seated and one gold pin terminal hangs outside the housing. The harness half is the one whose wires go into the black loom toward the turntable. Its factory harness colours (Unit #130 or higher jumper) are: 1 RD, 2 WH/BK, 3 BL, 6 OR, 5 GR, 4 WH. The sensor pigtail colours drawn for the original 94980-type sensor are 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL. The kit sensor (216061GT) pigtail colours are not in the three manuals. The connector cavity numbers are moulded into the Deutsch housing; use the numbers, not the colours, to identify pins. The secondary sensor J154 uses the same layout and shares the same 5 V and sensor-ground wires.

*Source:* SM p.206 lines 15597-15599 'J114 6 pin Deutsch connector for primary boom angle sensor (PBAS)'; SM p.207 lines 15685-15687 'J154 6 pin Deutsch connector for secondary boom angle sensor'; ES0366J crop es-j114-primary-sensor.png; photo 2026-09-12-j114-dt04-6p-loose-pin.jpg

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| 1 | P109ANG-GR/WH | RD (Unit #130+ jumper) | RD (94980-type) | 5 V sensor supply to the safety half of the sensor (S18) | P109ANG-GR/WH to TCON J12-26 (shared with pin 6 and with J154 pins 1 and 6) |
| 2 | SNSR GND-BR | WH/BK (Unit #130+ jumper) | BK (94980-type) | Sensor ground for the safety half of the sensor (S18). This is the pin the green wire is most likely tied to. | SNSR GND-BR to TCON J12-25 (shared with pin 5 and with J154 pins 2 and 5). It is a wire to the controller, not a frame ground. |
| 3 | C141PBS-RD | BL | BL | Safety angle signal from S18 to the SCON (safety controller) | C141PBS-RD to SCON J122-3 |
| 4 | C123PBS-RD/BK | WH | YL | Operational angle signal from S17 to the TCON (turntable controller) | C123PBS-RD/BK to TCON J12-32 |
| 5 | SNSR GND-BR | GR | BR | Sensor ground for the operational half of the sensor (S17). Same circuit as pin 2. | SNSR GND-BR to TCON J12-25 (joined to pin 2 upstream of J20 on the schematic) |
| 6 | P109ANG-GR/WH | OR | OR | 5 V sensor supply to the operational half of the sensor (S17). Same circuit as pin 1. | P109ANG-GR/WH to TCON J12-26 (joined to pin 1 upstream of J20 on the schematic) |

**Do this**

1. Stand-down. Machine on firm level ground, wheels chocked, boom stowed. Key switch OFF, key removed. Push IN both red Emergency Stop buttons (ground and platform). Engage the turntable rotation lock if fitted. (SM p.24 machine configuration.)
2. Battery off. Go to the engine side of the machine, tag and disconnect the cables from the engine starting/controls battery (SM p.76); negative cable first, tape the end clear. Leave the separate auxiliary power unit batteries alone (OM p.17). Ohms tests are only valid with the battery off.
3. Go to the primary boom pivot at the rear of the turntable (SM p.72: the sensor is inside the primary boom at the pivot end). The cover is already off. Photograph the whole area from three sides before touching anything. Do not cut anything on this card.
4. Make sure J114 is fully apart: the DT04-6P half with the loose pin must not be mated to anything, so the sensor is out of the circuit. Identify the harness half: its wires go into the black loom toward the turntable. Read the cavity numbers 1 to 6 moulded on the housing with a torch. Note which cavity is empty (the loose pin's home) and write it down.
5. Trace the long green wire by hand from the pink butt splice at the bracket bolt back to its other end. Write down exactly where it lands: into one of the two blue Scotchlok taps (which one, and what colour wire that tap is biting), into a connector cavity, or into the loom. Do not pull it loose yet.
6. Meter to ohms (Omega), lowest range or auto. Touch the two probe tips together and note the reading (lead resistance, usually under 0.5 ohm); subtract it from every reading below. Also switch to DC volts once and confirm J114 harness pin 1 to pin 2 reads 0 V before continuing.
7. Reading A, bond still fitted: probe 1 on the bolt head where the green wire's lead is trapped; probe 2 on bare metal of the turntable (an unpainted bolt head or machined face). Record. Then probe 2 on bare metal of the primary boom itself (an unpainted bolt head on the boom). Record. This tells you whether the bracket is electrically the same steel as the turntable and as the boom.
8. Undo the bolt just enough to lift the green wire's lead (ring terminal or bare strands, note which) off it, then retighten the bolt. The green wire's bracket end is now free. Do not let the free end touch the frame during the next readings; hold it in an insulated clip.
9. Reading B, free green end to each J114 harness pin: probe 1 on the free green end (the metal ring or strands), probe 2 gently on the pin in cavity 1, then 2, 3, 4, 5, 6 of the harness half, then on the loose pin terminal. Use a fine probe or back-probe; do not spread the contacts. Record all seven numbers.
10. Reading C, free green end to bare turntable metal, then to bare primary boom metal. Record both.
11. Reading D, green wire end-to-end: free green end to the far end where it lands (the wire exiting the Scotchlok, or the wire in the cavity). Record. Near zero means the wire is intact; OL means it is broken and currently doing nothing.
12. Reading E, factory pairs on the harness half with the green wire still free: pin 2 to pin 5, and pin 1 to pin 6. Record. These two pairs are the same wire each on the schematic and should read near zero.
13. Reading F, record only: harness pin 2 to bare turntable metal with the green wire free. Write the number down but do not act on it; the manuals give no chassis-to-sensor-ground value.
14. Match the pattern to the table in Expected. Tape and tag the free green end ('non-factory bond, removed for test, date'). Leave it disconnected. Do not put it back. Leave the Scotchloks and the loose pin exactly as found for the harness continuity card that follows (SNSR GND from J114 pin 2 to TCON J12-25, and the 5 V from J12-26).
15. Reconnect the battery only after every ohms card in the plan is finished. Write the numbers and the pattern letter on the worksheet.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| A: bolt head to turntable bare metal; bolt head to primary boom bare metal (ohms) | **Reading A (bolt head to bare turntable metal, and to bare primary boom metal), bond still fitted: both near 0 ohm (1 ohm or less after subtracting lead resistance).** | The bracket is the same steel as both the turntable and the boom, so the green wire is not bridging an isolated joint. Its purpose is then whatever Reading B shows. | If either leg reads several ohms or OL, that bracket is electrically isolated from that piece of structure (paint, grease, a bushed or greased pivot joint). A bonding strap across that joint is what somebody added, and the frame ground path needs cleaning and proper fastening, not a loose wire. Record which leg is high. |
| B: free green end to J114 harness pins 1-6 and the loose pin (ohms) | **Reading B, Pattern A: near 0 ohm to pin 2 and to pin 5, OL to pins 1, 3, 4, 6. The green wire ties the sensor ground (SNSR GND-BR, the wire that should run only to TCON J12-25) to the frame.** | This is a non-factory frame bond of the sensor ground. Somebody most likely saw the 'Value at 5.0 V' fault whose recovery action is 'Check for an open ground circuit going to the sensor' and grounded the sensor to the frame instead of repairing the SNSR GND-BR / WH-BK conductor. Next: run the harness continuity card J114 pin 2 to TCON J12-25 and find the open or high-resistance spot; repair it with the proper Deutsch pin (73713GT) or harness repair; then remove the green wire and both Scotchloks for good. | See the other patterns below. |
| B: free green end to J114 harness pins 1 and 6 (ohms) | **Reading B, Pattern C: near 0 ohm to pin 1 and/or pin 6, OL to the rest.** | The green wire is shorting the shared 5 V sensor supply (P109ANG-GR/WH from TCON J12-26) to the frame whenever the bracket is grounded. Because J154 (secondary sensor) shares that same 5 V wire, this alone can produce the 'secondary boom angle sensor shorted / 0 V' code. Leave the wire off, then re-check 5 V at J114 pin 1 to pin 2 with the battery reconnected on the powered card. Still find out why it was added; the shared supply or its return may also be damaged. | Not this pattern. |
| B: free green end to J114 harness pins 3 and 4 (ohms) | **Reading B, Pattern D: near 0 ohm to pin 3 or pin 4, OL to the rest.** | The green wire is grounding an angle signal wire (pin 3 = safety signal to the SCON, pin 4 = operational signal to the TCON). A grounded signal reads 0 V at the controller and the two controllers then disagree (crosscheck fault). This is a defeated or damaged safety signal path. Leave the wire off, record which pin, and run the signal continuity card. Never leave a grounded or bridged safety signal on the machine. | Not this pattern. |
| B plus D: free green end to all J114 pins (ohms), and end-to-end (ohms) | **Reading B, Pattern B: OL to every J114 pin and to the loose pin, but Reading D (end-to-end) near 0 ohm and the far end lands on structure or on a Scotchlok biting a wire that is not part of J114.** | The green wire is not on the sensor circuit. It is a bonding strap between two pieces of steel (or to some other harness wire, which you must then identify by colour and circuit number on the wire colour legend, SM p.198). If Reading A showed a high joint, someone was compensating for that joint. Fix the joint or the real ground cable, then remove the strap. If Reading A was fine, the strap is doing nothing useful; remove it once the far end is understood. | Not this pattern. |
| D: free green end to the far end of the same green wire (ohms) | **Reading D, Pattern E: OL end-to-end.** | The green wire is broken and currently doing nothing, which means the bond it once provided is already gone and the live faults exist without it. Remove it. The underlying harness problem still has to be found on the continuity cards. | Not this pattern. |
| E: J114 harness pin 2 to pin 5; pin 1 to pin 6 (ohms) | **Reading E: harness pin 2 to pin 5 near 0 ohm; harness pin 1 to pin 6 near 0 ohm.** | The pairs are intact at the connector; the fault, if any, is further up the harness toward the TCON. | If a pair reads high or OL, one leg of that pair is open in the jumper harness between J114 and J20, which by itself would kill one half of the dual sensor and is exactly the kind of fault a bond wire was covering. Record which pair and go to the harness continuity card. |
| F: J114 harness pin 2 to bare turntable metal with the green wire free (ohms) | **Reading F: any value. Record only.** | Recorded for the report. | Do not act on this number alone. Whether the TCON internally references its sensor ground to its own ground pins (J15-2/3 GND-BR, J12-35 GND16-BR) is not stated in the manuals, so a low reading here does not prove another bond exists. |

**Why we are doing this.** If the green wire joins a sensor pin to the frame, a previous technician was covering up a broken or corroded conductor in the sensor harness (the fault table's "open ground circuit" recovery action) instead of repairing it. That broken conductor is the real cause to chase, and the added bond must come off once it is repaired. If the wire only joins steel to steel, it was added because someone measured a poor ground path across a bolted or greased joint, and that is a separate problem to fix properly. The reading pattern decides which harness card to run next and what gets removed.

**Safety**

- Key switch OFF with the key removed, and both red Emergency Stop buttons pushed IN at the ground and platform controls before touching any connector (SM p.24).
- Engine starting/controls battery cables tagged and disconnected for every ohms reading (SM p.76 wording; knowledge-base rule 2). Confirm 0 V DC across J114 pins 1 and 2 before switching the meter to ohms.
- Remove rings, watches and other jewellery before working on electrical circuits (SM p.76 electrocution/burn hazard warning).
- Machine parked on a firm level surface, wheels chocked, boom stowed, turntable rotation lock engaged if fitted (SM p.24).
- This card only unbolts and tags the added green wire. Never add a jumper, never bridge or ground a sensor pin, never reconnect the bond to 'see if it helps'. The plan removes bypasses; it never adds one.
- Do not use the bypass or recovery key positions and do not fit the calibration jumper or toggle; those are for the calibration technician.
- Do not lift or move the boom for any reason during this card; the safety envelope is faulted and the axles are retracted.
- Probe Deutsch cavities with a fine tip only; spreading a contact creates a new open circuit that will look like the fault you are chasing.
- Any repair afterwards uses Genie approved parts (SM p.24), e.g. Deutsch pin terminal 73713GT, not Scotchlok taps or butt splices.

**Open questions on this card**

- Which piece of steel the bracket bolt is on (the primary boom side of the pivot or the secondary boom/turntable side) is not clear from the photos; Reading A settles whether the bracket is electrically continuous with each, and the technician should note which structure it belongs to. SM p.72 step 9 mentions a 'hose and cable guide' at the primary boom pivot pin that may be this bracket, but that is unconfirmed [M].
- Whether the TCON internally references SNSR GND (J12-25) to its own ground pins (J15-2/3, J12-35) is not in the manuals, so Reading F (pin 2 to chassis) has no manufacturer expected value and must be recorded only.
- The 216061GT kit sensor pigtail colours are not in the three manuals; the red/blue/yellow/green/white wires seen on the DT04-6P match neither the factory harness colours nor the 94980-type sensor colours, so identification must be by cavity number. Deutsch cavity numbers being moulded on the housing is general product knowledge, tagged [M].
- Where the long green wire ends at the connector side (which Scotchlok, on which wire) is not determinable from the photos; step 5 traces it on site.
- Whether the lead from the pink butt splice ends in a ring terminal or is bare strands trapped under the bolt head is not visible; note it in step 8.
- The short green loop between the two Scotchloks is a separate modification and is not resolved by this card; it needs its own identification (which two J114 wires it bridges) before removal.
- The manuals do not give a chassis-bond or bonding-strap part anywhere in the primary boom pivot parts list (PM fig 511.2), which supports 'non-factory', but a factory ground strap elsewhere on the machine was not searched exhaustively.

<details><summary>Sources for this card (41 checked statements)</summary>

- `[V]` J114 is the 6-pin Deutsch connector for the primary boom angle sensor (PBAS). — *1268557.txt 15597-15599 (PDF 220 = SM p.206)*
- `[V]` J154 is the 6-pin Deutsch connector for the secondary boom angle sensor. — *1268557.txt 15685-15687 (PDF 221 = SM p.207)*
- `[V]` The TCON pin legend is on SM p.210 and lists TCON connector J12 pin 25 as SNSR GND - BR (brown sensor ground). — *1268557.txt 16049, 16052, 16124-16126, 16175-16176 (PDF 224 = SM p.210)*
- `[V]` TCON J12 pin 26 is P109ANG - GR/WH, the 5 V sensor supply. — *1268557.txt 16177-16178 (SM p.210)*
- `[V]` TCON J12 pin 32 is C123PBS - RD/BK (primary boom angle operational signal) and pin 33 is C124SBS - OR/BK (secondary boom angle operational signal). — *1268557.txt 16189-16192 (SM p.210)*
- `[V]` The TCON's own ground pins are separate from the sensor ground: J15 pins 2 and 3 are GND - BR, J15 pin 1 is B1BAT - RD, J12 pin 35 is GND16 - BR, J12 pin 1 is GNDSCON - BR. — *1268557.txt 16113-16121, 16127-16128, 16195-16196 (SM p.210)*
- `[V]` J12 is the black 35-pin TCON connector for the limit switch harness. — *1268557.txt 18308-18309 (PDF 243 = SM p.229, sheet ES0366J); also figure sm210-tcon-pins.png 'Pin Numbering - 35 pin connector'*
- `[V]` On sheet ES0366J the wires SNSR GND-BR and P109ANG-GR/WH are drawn at the TCON J12 block next to the P12-25 and P12-26 labels. — *1268557.txt 17562-17567 (PDF 243 = SM p.229); sheet name at line 19698 'ES0366J'*
- `[V]` In the wire colour legend, circuit 109 GR/WH is Sensor Power and circuit 110 BK is Sensor Return. — *1268557.txt 14718-14723 (PDF 212 = SM p.198, 'Wire Color Legend')*
- `[V]` J114 pin assignments on ES0366J: pin 1 harness RD = P109ANG-GR/WH, pin 2 harness WH/BK = SNSR GND-BR, pin 3 harness BL = C141PBS-RD, pin 6 harness OR = P109ANG-GR/WH, pin 5 harness GR = SNSR GND-BR, pin 4 harness WH = C123PBS-RD/BK; the jumper block is labelled 'UNIT #130 OR HIGHER'; sensor side colours RD, BK, BL, OR, BR, YL; sensor halves S18-PRI BM ANG SAFETY (pins 1,2,3) and S17-PRI BM ANG OPER (pins 6,5,4). — *es-j114-primary-sensor.png figure es-j114-primary-sensor.png (crop of ES0366J, SM p.229)*
- `[V]` On ES0366J the two SNSR GND-BR wires (J114 pins 2 and 5) are joined together at a dot above J20 and the two P109ANG-GR/WH wires (pins 1 and 6) are joined at another dot; both then run away toward the TCON with no chassis-ground symbol drawn on them. — *es-boom-sensors-wide.png figure es-boom-sensors-wide.png and es-j114-primary-sensor.png (ES0366J, SM p.229)*
- `[V]` J154 uses the same layout: pin 1 P109ANG-GR/WH (RD), pin 2 SNSR GND-BR (BK), pin 3 C142SBS-OR (BL), pin 6 P109ANG-GR/WH (OR), pin 5 SNSR GND-BR (BR), pin 4 C124SBS-OR/BK (YL), sensor halves S20-SEC BM ANG SAFETY and S19-SEC BM ANG OPER, so the 5 V supply and sensor ground are shared between J114 and J154. — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png; text also at 1268557.txt lines 18439-18442 (SM p.229)*
- `[V]` J114 pin 3 (C141PBS-RD) lands on SCON J122 pin 3 and J154 pin 3 (C142SBS-OR) on SCON J122 pin 2; the SCON's ground is SCONGND-BR on J121 pin 12; SNSR GND-BR does not go to the SCON. — *es-scon-boomsensors.png figure es-scon-boomsensors.png (ES0366J, SM p.229)*
- `[V]` Fault table, Operational Primary Boom Angle Sensor, Value at 5.0 V: recovery action is to check for an open ground circuit going to the sensor. — *1268557.txt 12576-12582 (PDF 191 = SM p.177)*
- `[V]` Fault table, Value at 0 V: check for 5.0 VDC at the sensor, check for damaged wiring going to the sensor, check that the 5.0 VDC LED is lit on the TCON board, repair or replace as necessary. — *1268557.txt 12591-12598 (SM p.177); same wording for the Safety sensor at 12647-12654 (SM p.178)*
- `[V]` The Safety Primary Boom Angle Sensor has its own fault entries with the same 'open ground circuit' and '5.0 VDC' recovery actions. — *1268557.txt 12632-12638 (PDF 192 = SM p.178)*
- `[V]` The primary boom angle sensor is located inside the primary boom at the pivot end. — *1268557.txt 5694-5695 (PDF 86 = SM p.72)*
- `[V]` To reach the sensor you remove the retaining fasteners from the boom end cover at the pivot end of the primary boom, then find the sensor inside the primary boom at the boom pivot pin, then disconnect its electrical connector; the procedure is done on a firm level surface with the boom stowed. — *1268557.txt 6370-6382 (PDF 95 = SM p.81)*
- `[V]` The primary boom angle sensor must be calibrated after it is replaced. — *1268557.txt 6444-6446 (PDF 96 = SM p.82)*
- `[V]` Repair procedures are performed with the machine parked on a firm level surface, key switch off with the key removed, red Emergency Stop button in the off position at both ground and platform controls, wheels chocked, boom stowed, turntable secured with the rotation lock. — *1268557.txt 2398-2409 (PDF 38 = SM p.24)*
- `[V]` Use only Genie approved replacement parts; attempting shortcuts may produce hazardous conditions. — *1268557.txt 2389-2392 (SM p.24)*
- `[V]` The engine starting/controls battery is on the engine side of the machine and the manual's method is to tag and disconnect its cables; the adjacent warning says to remove rings, watches and other jewellery. — *1268557.txt 6023-6032 (PDF 90 = SM p.76)*
- `[V]` The machine has a separate starter/controls battery and separate auxiliary power batteries. — *114474.txt 1108-1110 (PDF 19 = OM p.17)*
- `[V]` The operator's manual forbids using the machine as a ground for welding unless the weld-line-to-platform option is fitted and connected (relevant if the bond turns out to be a welding ground). — *114474.txt 1111-1113 (OM p.17)*
- `[V]` Parts figure 511.2 'Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854)' is on PM p.168-169 and applies to this machine (SN 1861). — *106877.txt 8718 (PM p.169); figure pm168-pri-boom-sensor.png (PM p.168)*
- `[V]` Figure 511.2 item 8 is 233118GT WLDT, SENSOR ROTATOR #2 and item 9 is 218757GT WLDT., PRIMARY SENSOR PIN. — *106877.txt 8662-8667 (PM p.169)*
- `[V]` Figure 511.2 item 17 is 216061GT SENSOR, ANGLE, 180 DEG, CW; sensor and magnet are matched and machine calibration is required after installation. — *106877.txt 8692-8695 (PM p.169)*
- `[V]` Figure 511.2 item 6 is 106277PGT COVER, PRIMARY BOOM, PAINTED (the cover over the sensor). — *106877.txt 8657-8658 (PM p.169)*
- `[V]` The Genie Deutsch DT pin terminal is 73713GT, TERMINAL, PIN, DT, 14-18 AWG (the approved repair part instead of Scotchlok taps). — *106877.txt 8645-8646 (PM p.169)*
- `[V]` The original 94980 dual-output sensor is no longer available; first-time replacement is kit 217246 (217246GT KIT, Z135 PRIMARY ANGLE SEN.), calibration required after replacement. — *106877.txt 8549-8556 (PM p.167)*
- `[F]` Field photo: a long solid-green wire runs outside the loom from the J114 area to a pink insulated butt splice; a short lead from the splice is trapped under a bolt head on a grey machined block at the corner of a welded bracket beside the hydraulic hoses at the primary boom pivot; the area is reachable by hand from the ground. — *2026-09-12-j114-green-wire-to-pivot-splice.jpg photo 2026-09-12-j114-green-wire-to-pivot-splice.jpg*
- `[F]` Field photo: a bright blue sensor pin weldment with a rusty threaded top stands up from a blue base block held by two hex bolts; a black corrugated loom runs up and over it; a grey Deutsch connector half with one loose gold pin, two blue Scotchlok taps, and green/yellow wires hang beside it. — *2026-09-12-j114-pivot-hardware.jpg photo 2026-09-12-j114-pivot-hardware.jpg*
- `[F]` Field photo: the loose connector half is moulded 'DEUTSCH IPD USA DT04-6P'; wires entering it are red, blue, yellow, green and white, plus one gold pin terminal hanging outside on its own wire. — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo 2026-09-12-j114-dt04-6p-loose-pin.jpg*
- `[F]` Field photo: two blue Scotchlok IDC taps are bridged by a short green loop; the upper tap bites a green wire coming from the loom and the lower tap bites a yellow wire; a separate long green wire heads away to the left. — *2026-09-12-j114-scotchlok-taps-2.jpg photos 2026-09-12-j114-scotchlok-taps-1.jpg and -2.jpg*
- `[F]` The case file records the same field findings: DT04-6P half with five wires seated and one pin terminal hanging loose, two blue Scotchlok taps with a green jumper, and a long green wire outside the loom to a pink butt splice at a bolt on the pivot bracket. — *README.md 210-215*
- `[V]` The knowledge-base safety rule requires key OFF and E-stop IN before unplugging any connector and the battery disconnected for resistance tests. — *README.md 59-60*
- `[M]` The kit sensor 216061GT pigtail wire colours are not given in the three manuals; the red/blue/yellow/green/white set seen in the photo matches neither the harness list (RD, WH/BK, BL, OR, GR, WH) nor the 94980-type sensor list (RD, BK, BL, OR, BR, YL), so pins must be identified by cavity number. — *README.md 235*
- `[M]` Deutsch DT connector cavity numbers are moulded into the housing next to each cavity (general Deutsch product knowledge, not from the three manuals).
- `[M]` Disconnecting the negative battery cable first, and zeroing the meter by touching the probes together before ohms readings, are general workshop practice, not manual steps.
- `[M]` Whether the TCON internally connects SNSR GND (J12-25) to its own GND-BR pins is not stated in the manuals, so no expected value exists for J114 pin 2 to chassis.
- `[M]` Likely explanation for the bond: a previous technician chased the 'open ground circuit' or '0 V' recovery actions and grounded the sensor to the frame instead of repairing the harness conductor; this is inference, not manufacturer fact. — *README.md 298-299*

</details>


---

## D. Survey while you are in there

### D1: Which joystick is new, and what that implies

**What this finds out.** Find out which of the four platform joysticks was replaced, which connector it sits on (J25, J28, J127 or J128), whether it is a Genie part or an aftermarket one, and whether it has ever been calibrated. A replaced joystick that was never calibrated is a second, separate reason for a dead function on this machine, on top of the boom angle sensor faults.

**Where it is**

- *What it is:* The four proportional joysticks mounted through the lid of the platform control box (the box that holds the PCON = platform controller circuit board).
- *Where on the machine:* In the platform (basket). Stand in the platform at the control panel, facing the panel, with the red mushroom E-stop button at the right-hand end of the panel.
- *How to find it:* Facing the panel, the four joysticks sit in one row. Left to right: (1) primary boom up/down and turntable rotate joystick, with a thumb rocker on top for primary boom extend/retract; (2) jib boom up/down and platform rotate joystick, with a thumb rocker on top for jib extend/retract; (3) secondary boom up/extend and down/retract joystick, a single-axis stick with a plain ball knob; (4) drive/steer joystick, nearest the E-stop, marked by the blue and yellow drive arrows and blue/yellow steer triangles on the decal (SM p.26 figure; OM pp.27-28). To see the wiring, push both E-stops in, key off, remove the lid retaining fasteners and open the lid (SM p.27). The LED circuit board is on the underside of the lid; the PCON board is inside the box (SM p.26).
- *What it looks like:* From above: a black rubber boot, a black grip; two of the four have a thumb rocker on the top of the grip. Each is held to the lid by four 1/4-20 screws on a square flange (PM p.209 items 2-4). From under the lid (photo 2026-09-12-platform-box-interior-pcb.jpg): a round black body about the size of a hockey puck with a square metal flange and a short pigtail ending in a grey 6-way Deutsch DT plug with an orange wedge. In the site photos the body next to the E-stop contact block is visibly cleaner than its neighbour, and from the top the drive/steer grip with the rocker top looks newest; the ball-knob secondary boom joystick next to it has chipped paint.
- *Source:* SM p.26 (1268557.txt lines 2478-2513, figure sm026-platform-controls.png); SM p.27 lines 2537-2551; OM pp.27-28 (114474.txt lines 1596-1676); PM pp.208-209 (106877.txt lines 10527-10611, figure pm208-platform-box-view1.png); photos 2026-09-12-platform-panel-membrane.jpg and 2026-09-12-platform-box-interior-pcb.jpg

**Set the machine to**

- **Key:** OFF for the visual inspection and while the lid is open. ON in the PLATFORM position only for the optional 5 V back-probe check and to read the ground display; then OFF again. Never use the bypass or recovery key positions on this card.
- **E-stops:** Both red E-stop buttons (ground and platform) pushed IN while the lid is opened and while looking at wiring. Pulled OUT only for the optional 5 V check and the display read, with nobody touching any joystick.
- **Battery:** Connected. This card has no resistance (ohm) tests, so the battery stays connected; the battery must be disconnected only if the calibration tech later ohms anything.
- **Engine:** OFF throughout. Do not start the engine.
- **Also:** Machine on firm level ground, wheels chocked, boom fully stowed. Axles left RETRACTED as found; with the axles retracted the limit switches LSFA1ES / LSRA1ES prevent boom functions anyway (SM p.203). Platform control box lid opened; NO joystick connector is unplugged on this card, because the manual says a joystick that is disconnected must be recalibrated (SM p.30). Do not operate the aftermarket toggle switch in the box (that is another card).

**Connector — J25 drive/steer joystick (most likely the new one) - or J28 / J127 / J128 if a different joystick turns out to be the new one**

Each joystick has its own 6-pin Deutsch DT connector: J25 = drive/steer joystick, J28 = secondary boom up/extend and down/retract joystick (SM p.205); J127 = primary boom up/down, ext/ret and turntable joystick, J128 = jib boom up/down, ext/ret and platform rotate joystick (SM p.206). On the schematic they are labelled JC3 (J25), JC5 (J28), JC7 (J127) and JC6 (J128). Pin 2 of every joystick is the orange 5 V supply P162JPW-OR, pins 1 and 6 are brown grounds, and the signal wires sit on pins 3, 4 and 5. All four run to J29, the 16-pin Molex connector on the PCON circuit board (SM p.205). Genie sells a 6-pin to 7-pin adapter harness 119613GT for the aftermarket (H-suffix) joysticks 101174, 101175 and 101005 (PM p.209); an adapter in line is a sign of an aftermarket replacement.

*Source:* 1268557.txt lines 15460-15467 (SM p.205), 15621-15626 (SM p.206); figure es-joysticks-j25-j28-j127-j128.png (ES0366J, SM p.229); 106877.txt lines 10538-10542 (PM p.209)

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| J25-1 | JSGND1-BR | brown | joystick pigtail colours are not given in the manuals | joystick signal ground | PCON J29-16 |
| J25-2 | P162JPW-OR | orange | not in manuals | Joystick 5V DC power (circuit 162) | PCON J29-13/14 (shared with the other joysticks) |
| J25-3 | C159STC-BL/WH | blue/white | not in manuals | Steer Joystick Signal (circuit 159); STC = Steer Control Signal | PCON J29-7 |
| J25-4 | C160JPL-WH/RD | white/red | not in manuals | Propel Joystick Signal (circuit 160); JPL = Propel Signal | PCON J29-8 |
| J25-5 | C158STC-BL/RD | blue/red | not in manuals | Steer Signal Rocker (circuit 158) - the thumb rocker steer input | PCON J29-6 |
| J25-6 | GND1-BR | brown | not in manuals | ground | ground bus on ES0366J |
| J28-1 | JSGND2-BR | brown | not in manuals | joystick signal ground | PCON J29-1 |
| J28-2 | P162JPW-OR | orange | not in manuals | Joystick 5V DC power | PCON J29-3/4 |
| J28-3 | (empty on the schematic) | none | none | not used | nothing |
| J28-4 | C161SB-WH/BK | white/black | not in manuals | Secondary Boom Joystick Signal (circuit 161); SB = Secondary Boom | PCON J29-9 |
| J28-5 | (empty on the schematic) | none | none | not used | nothing |
| J28-6 | GND2-BR | brown | not in manuals | ground | ground bus on ES0366J |
| J127-1 | JSGND4-BR | brown | not in manuals | joystick signal ground | PCON J29-15 |
| J127-2 | P162JPW-OR | orange | not in manuals | Joystick 5V DC power | PCON J29-13/14 |
| J127-3 | C164PLS-RD/WH | red/white | not in manuals | circuit 164: wire legend says Primary Up/Down Signal; suffix legend says PLS = Primary Boom Extend/Retract Signal (manual conflict, see open questions) | PCON J29-11 |
| J127-4 | C165TRS-WH/RD | white/red | not in manuals | TT Rotate Signal (circuit 165) - turntable rotate | PCON J29-12 |
| J127-5 | C163PES-BL/WH | blue/white | not in manuals | circuit 163: wire legend says Primary Extend/Retract Signal; suffix legend says PES = Primary Boom Up/Down Signal (manual conflict, see open questions) | PCON J29-10 |
| J127-6 | GND4-BR | brown | not in manuals | ground | ground bus on ES0366J |
| J128-1 | JSGND3-BR | brown | not in manuals | joystick signal ground | PCON J29-2 |
| J128-2 | P162JPW-OR | orange | not in manuals | Joystick 5V DC power | PCON J29-3/4 |
| J128-3 | C156JUD-GR/WH | green/white | not in manuals | Jib Up/Down (circuit 156); JUD = Jib Up/Down Control | jib circuit on ES0366J (not through J29) |
| J128-4 | C16PRL-OR/RD (as printed on the sheet) | orange/red | not in manuals | PRL = Platform Rotate Left (CCW) | platform rotate circuit on ES0366J |
| J128-5 | C157JER-BK/RD | black/red | not in manuals | Jib Extend/Retract (circuit 157); JER = Jib Extend/Retract Control | jib circuit on ES0366J |
| J128-6 | GND3-BR | brown | not in manuals | ground | ground bus on ES0366J |

**Do this**

1. Set up. Machine on firm level ground, wheels chocked, boom stowed, axles left retracted as found. Engine OFF, key OFF, both red E-stop buttons pushed IN (ground and platform).
2. Stand in the platform at the control panel, facing it, E-stop at your right. Name the four joysticks left to right from the decal icons: primary boom/turntable (rocker on top), jib/platform rotate (rocker on top), secondary boom (single-axis ball knob), drive/steer (blue/yellow arrows and triangles, next to the E-stop). Write the four names on the record sheet in that order.
3. Look at each joystick from above. Compare boots (cracked vs supple), grips (chipped vs clean), flange screws (rusty vs bright), and lid paint around the flange (fresh scratches). Circle the one that is clearly newer. From the site photos the drive/steer joystick looks newest, but confirm it with your own eyes. Photograph all four from the same angle.
4. Write down which connector the new joystick is on: drive/steer = J25; secondary boom = J28; primary boom/turntable = J127; jib/platform rotate = J128.
5. Open the box: with both E-stops still IN and the key OFF, remove the lid retaining fasteners and swing the lid open. Clip a grounded wrist strap to the ground screw inside the box before touching anything near the circuit boards (static can damage them).
6. DO NOT unplug any joystick. The manual says a joystick that is disconnected must be recalibrated before that function will work, so unplugging one here would add another uncalibrated part. Do all checks with the plugs mated.
7. Under the lid, find the body of the new joystick (the one directly below the grip you circled; it is the cleanest body, and if it is the drive/steer joystick it sits next to the E-stop contact block). Read and photograph any label on it. Write the part number exactly. Genie numbers are 101173GT (2-axis with rocker, used for the primary and jib positions), 101175GT (1-axis, secondary position), 101174GT (2-axis) or 101005GT (1-axis with rocker) for the drive/steer position; an H on the end (for example 101005HGT) means Genie's aftermarket version.
8. Follow the new joystick's pigtail to its 6-way Deutsch plug. Note: is there a short adapter harness (6-pin to 7-pin, Genie 119613GT) spliced in? Is the orange wedge fitted? Are all wires seated flush at the back of the plug, none pulled back? Any Scotchlok taps, butt splices or added wires on this pigtail? Photograph the plug from the wire side.
9. Without unplugging, read the wire colours entering the back of the harness-side plug and compare with the pin table for that connector. For J25 (drive/steer) you should see: 1 brown, 2 orange, 3 blue/white, 4 white/red, 5 blue/red, 6 brown. Write what you actually see next to each cavity.
10. Optional 5 V check (only if you have a fine back-probe pin; do not pierce insulation). Everybody clear of the joysticks. Turn the key to the PLATFORM position and pull both E-stops OUT; engine stays OFF. Meter on DC volts, 20 V range. Red lead back-probed on cavity 2 (orange wire) of the new joystick's plug, black lead on cavity 1 (brown wire). Expect about 5 V. Write the number. Then push both E-stops IN and turn the key OFF.
11. Read the faults. Turn the key to the GROUND position, pull the ground E-stop OUT (engine OFF), and go to the ground control box display. Scroll through every fault message and copy each one word for word, especially anything containing JOYSTICK, NOT CALIBRATED or CALIBRATE THRESHOLDS. Then turn the key to PLATFORM and read the display again (the joystick calibration procedure itself checks this display with the key in the platform position). Push the E-stop IN and turn the key OFF.
12. Close the lid and refit its fasteners. Leave the machine key OFF, both E-stops IN.
13. Record on the sheet: which joystick is new and its connector number; the part number and whether it is OEM, H-suffix aftermarket, or unlisted; adapter harness yes/no; wire colour per cavity; splices yes/no; the 5 V reading if taken; the full fault list from both key positions; photo numbers. Hand this to the calibration tech: that joystick's defaults must be deleted and re-learned as step 2 of the full calibration sequence, with the engine off, before any threshold or speed settings are made.
14. Do not run the joystick calibration on this card, and do not swap joysticks between positions to test them: both make more uncalibrated parts. The calibration procedure in plain words, for reference only: key off; hold Enter on the ground panel while turning the key to platform, keep holding about 5 s; press Minus twice then Enter twice; scroll to DELETE <function> JOYSTICK DEFAULTS; press Plus for YES then Enter; do not start the engine; push that joystick full stroke one way and hold 5 s, back to centre; full stroke the other way and hold 5 s, back to centre; the ground alarm beeps once when it takes. One pass per function: drive, steer, secondary boom, primary extend/retract (rocker), primary up/down, jib up/down, turntable rotate. Then check the ground display shows no calibration fault.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Visual: which of the four joysticks is new, by position on the panel | **Exactly one joystick looks newer than the other three; you can name its function and connector (drive/steer = J25, secondary = J28, primary/turntable = J127, jib/platform rotate = J128).** | That joystick goes on the calibration list as a replaced part. If it is the drive/steer joystick, note that an uncalibrated propel joystick freezes propel at zero on its own (SM p.185), separate from the SCON P_38 cut. | If none looks new, or two do, record it and photograph all four; the calibration tech deletes and re-learns every joystick's defaults anyway (joysticks are step 2 of the full sequence). |
| Label on the new joystick body (read, do not unplug) | **A Genie number: 101173GT, 101174GT, 101175GT or 101005GT (OEM), or the same number with an H suffix (Genie aftermarket). H-suffix 101174/101175/101005 types need the 119613GT 6-pin to 7-pin adapter harness.** | A listed part that can be calibrated with the normal procedure; note whether the adapter is present when it should be. | An unlisted brand or no label: treat the joystick as unknown; it may not calibrate. Report it and price the correct Genie part for that position before the calibration visit. |
| Wire colours at the back of the harness-side plug, cavity by cavity, with the plug mated | **Colours match the pin table for that connector. J25: 1 BR, 2 OR, 3 BL/WH, 4 WH/RD, 5 BL/RD, 6 BR. J28: 1 BR, 2 OR, 3 empty, 4 WH/BK, 5 empty, 6 BR. J127: 1 BR, 2 OR, 3 RD/WH, 4 WH/RD, 5 BL/WH, 6 BR. J128: 1 BR, 2 OR, 3 GR/WH, 4 OR/RD, 5 BK/RD, 6 BR. No taps, splices or added wires on the pigtail.** | Factory pin-out intact; the joystick can be calibrated as is. | A wire in the wrong cavity, a backed-out terminal, a Scotchlok tap or a missing wedge: record it and photograph it. The fault table's first recovery action for a joystick fault is exactly this check ('connector terminals have not backed out'). The calibration tech must correct the wiring (key OFF, E-stop IN before unplugging) before calibrating. |
| Optional: DC volts, cavity 2 (orange P162JPW) to cavity 1 (brown JSGND), key in PLATFORM, E-stops out, engine off | **About 5 V DC (the wire legend calls circuit 162 'Joystick 5V DC power'; the manual gives no tolerance).** | The PCON is feeding the joystick; any remaining joystick problem is the joystick, its wiring, or calibration. | 0 V or well under 5 V: the joystick has no supply and cannot be blamed yet. The orange P162JPW wire is shared by all four joysticks and lands on PCON J29 pins 3, 4, 13 and 14; report it for the electrical cards. Expect the fault table's 'Value at 0 V' entry for that joystick. |
| Ground display fault list, key in GROUND and again in PLATFORM, engine off | **Every message copied word for word. Look for any joystick 'Not calibrated' message or 'Calibrate Thresholds'.** | If a joystick 'Not calibrated' message is present, that function is 'frozen at zero and neutral' regardless of the sensor faults; it confirms the replaced joystick was never calibrated and it goes on the calibration list. | If no joystick message appears, someone may already have run the joystick procedure, or the controller cannot tell. The calibration tech re-runs it anyway (it is required before thresholds, max-out or ramping can be set). Either way the boom angle crosscheck faults still switch off propel and boom power until they are cleared. |

**Why we are doing this.** The calibration tech needs to know which joystick defaults to delete and re-learn; joysticks are step 2 of the full machine calibration sequence (SM p.105). It also explains the history: with the primary boom angle crosscheck fault live, the SCON switches off propel, turntable rotate, primary extend, and primary/secondary up (SM p.189), so a previous tech testing the controls would have found several joysticks "dead" and may have replaced one that was never faulty. If the new joystick is the drive/steer one (J25) and it was not calibrated, the TCON freezes propel at zero by itself (SM p.185), so propel cannot come back until both the crosscheck faults are cleared and the joystick is calibrated.

**Safety**

- Engine OFF, key OFF and both E-stops IN before the lid is opened and whenever hands are near wiring (SM p.27 step 1).
- Clip a grounded wrist strap to the ground screw inside the box before touching the circuit boards; static discharge can destroy them (SM p.27). Remove rings and watches.
- Do not unplug any joystick on this card. The manual says a disconnected joystick must be recalibrated before that function will operate (SM p.30). If the calibration tech later unplugs one, key OFF and E-stop IN first.
- Do not move any joystick with the key on except during the actual calibration procedure run by the calibration tech, and even then only with the engine off as the procedure requires.
- Do not use the bypass or recovery key positions and do not fit the calibration jumper or move the calibration toggle. Those steps belong to the calibration tech.
- Never bridge, jumper or defeat any safety circuit, limit switch, angle sensor, tilt sensor or load cell. This plan removes bypasses; it never adds one. Do not operate the aftermarket toggle switch in this box.
- Machine on firm level ground, wheels chocked, boom stowed. With the axles retracted the LSFA1ES / LSRA1ES limit switches prevent boom functions by design (SM p.203); do not try to work around that.
- Tip-over hazard: full machine calibration must be done in the manufacturer's sequence by Genie factory-trained technicians (SM p.105). This card only gathers the facts they need.

**Open questions on this card**

- Which joystick is new is a photo inference (drive/steer, J25, looks cleanest and sits next to the E-stop); it must be confirmed on site by eye and by the label. Tagged M.
- The brief said J25/J28 were on SM p.206; in the extracted text they are on printed p.205 (PDF 219). J127/J128 are on p.206 (PDF 220). Cite p.205 for J25 and J28.
- Manual conflict on circuits 163/164: the Wire Color Legend (SM p.199) lists 163 as Primary Extend/Retract Signal and 164 as Primary Up/Down Signal, but the suffix legend (SM p.194) defines PES (used in C163PES) as Primary Boom Up/Down Signal and PLS (C164PLS) as Primary Boom Extend/Retract Signal. The card lists both; the calibration tech should not rely on either until checked on the sheet.
- J128 pin 4 is printed 'C16PRL-OR/RD' on ES0366J; the circuit number looks truncated (likely 166). Colour orange/red and PRL = Platform Rotate Left are as printed.
- The Wire Color Legend text extracts with its colour column one row offset (each colour printed after description N belongs to circuit N+1). Colours in this card were taken from the schematic wire names (e.g. P162JPW-OR), not from that column.
- Deutsch DT cavity numbering on the wire-entry face is general knowledge, not from the manuals (M). If unsure, follow the row order 1-6 on the schematic and photograph both faces for the calibration tech.
- The manual says a disconnected joystick must be recalibrated, but does not say how the TCON detects a like-for-like swap; a missing 'Not calibrated' message therefore does not prove the new joystick was calibrated.
- The manual gives no tolerance for the joystick 5 V supply (circuit 162); 'about 5 V' is the only statement available.
- Whether the joystick calibration should be run before the calibration visit: it needs no bypass key, no jumper and no engine, and it is step 2 of the sequence, but SM p.105 restricts calibration to Genie factory-trained technicians. Left to the calibration lead; this card only records.
- The parts list allows either a 2-axis (101174GT) or a 1-axis-with-rocker (101005GT) drive/steer joystick; the photo suggests a rocker-top grip. Read the label to know which type is fitted and whether an H-suffix aftermarket unit with the 119613GT adapter is present.
- The joystick's own pigtail wire colours are not given in any of the three manuals; only the harness-side names are.

<details><summary>Sources for this card (59 checked statements)</summary>

- `[V]` J25 is the 6 pin Deutsch connector on the drive/steer joystick — *1268557.txt 15460-15462 (SM p.205, PDF 219)*
- `[V]` J28 is the 6 pin Deutsch connector on the secondary boom up/extend and down/retract joystick — *1268557.txt 15463-15465 (SM p.205)*
- `[V]` J29 is the 16 pin Molex connector on the PCON PCB — *1268557.txt 15466-15467 (SM p.205)*
- `[V]` J127 is the 6 pin Deutsch connector for the primary boom up/down, ext/ret and turntable joystick — *1268557.txt 15621-15623 (SM p.206, PDF 220)*
- `[V]` J128 is the 6 pin Deutsch connector for the jib boom up/down, ext/ret and platform rotate joystick — *1268557.txt 15624-15626 (SM p.206)*
- `[V]` Printed page 205 of the SM is PDF page 219 (the connector legend page carrying J25 and J28); printed 206 is PDF 220 — *1268557.txt 15416-15426 and 15538-15546*
- `[V]` Schematic labels: J127 = PRIMARY BOOM UP/DOWN, EXT/RET AND TURNTABLE ROTATE JOYSTICK (JC7); J128 = JIB EXT/RET, UP/DOWN PLAT ROT JOYSTICK (JC6); J28 = SEC BM UP/DWN EXT/RET JOYSTICK (JC5); J25 = DRIVE & STEERING JOYSTICK (JC3) — *es-joysticks-upper.png figure (rendered from ES0366J, SM p.229, PDF page 243); text also at 1268557.txt lines 18282-18291*
- `[V]` J25 pin-out: 1 JSGND1-BR, 2 P162JPW-OR, 3 C159STC-BL/WH, 4 C160JPL-WH/RD, 5 C158STC-BL/RD, 6 GND1-BR — *es-joysticks-j25-j28-j127-j128.png figure; wire names also at 1268557.txt lines 17179-17183*
- `[V]` J28 pin-out: 1 JSGND2-BR, 2 P162JPW-OR, 3 empty, 4 C161SB-WH/BK, 5 empty, 6 GND2-BR — *es-joysticks-j25-j28-j127-j128.png figure; wire names also at 1268557.txt lines 17176-17178, 17183*
- `[V]` J127 pin-out: 1 JSGND4-BR, 2 P162JPW-OR, 3 C164PLS-RD/WH, 4 C165TRS-WH/RD, 5 C163PES-BL/WH, 6 GND4-BR — *es-joysticks-j25-j28-j127-j128.png figure; wire names also at 1268557.txt lines 17160-17165 and 17837-17839*
- `[V]` J128 pin-out: 1 JSGND3-BR, 2 P162JPW-OR, 3 C156JUD-GR/WH, 4 C16PRL-OR/RD (as printed), 5 C157JER-BK/RD, 6 GND3-BR — *es-joysticks-j25-j28-j127-j128.png figure; wire names also at 1268557.txt lines 17173-17175, 18497-18498*
- `[V]` PCON J29 pin-out: 1 JSGND2-BR, 2 JSGND3-BR, 3 P162JPW-OR, 4 P162JPW-OR, 5 empty, 6 C158STC-BL/RD, 7 C159STC-BL/WH, 8 C160JPL-WH/RD, 9 C161SB-WH/BK, 10 C163PES-BL/WH, 11 C164PLS-RD/WH, 12 C165TRS-WH/RD, 13 P162JPW-OR, 14 P162JPW-OR, 15 JSGND4-BR, 16 JSGND1-BR — *es-joysticks-lower.png figure; wire names also at 1268557.txt lines 17833-17847*
- `[V]` Circuit 162 is Joystick 5V DC power; 158 Steer Signal Rocker; 159 Steer Joystick Signal; 160 Propel Joystick Signal; 161 Secondary Boom Joystick Signal; 163 Primary Extend/Retract Signal; 164 Primary Up/Down Signal; 165 TT Rotate Signal; 156 Jib Up/Down; 157 Jib Extend/Retract (SM p.199) — *1268557.txt 14900-14921 (SM p.199, PDF 213)*
- `[V]` Suffix legend: JPW = Joystick 5V DC Power; JPL = Propel Signal; JER = Jib Extend/Retract Control; JUD = Jib Up/Down Control; PES = Primary Boom Up/Down Signal; PLS = Primary Boom Extend/Retract Signal; PRL = Platform Rotate Left (CCW); SB = Secondary Boom; STC = Steer Control Signal (SM pp.193-194) — *1268557.txt 14010-14017, 14043-14044, 14092-14093, 14106-14107, 14114-14115, 14182-14183, 14214-14215 (SM p.193 = PDF 207 and following page)*
- `[V]` The platform controls contain two circuit boards; the LED board is on the underside of the lid; the PCON sends data to the turntable control box (TCON) — *1268557.txt 2478-2485 (SM p.26, PDF 40)*
- `[V]` Joysticks are Hall Effect, their operating parameters are stored in memory at the turntable controls, and a replaced joystick must be calibrated before that function will operate — *1268557.txt 2488-2496 (SM p.26)*
- `[V]` SM p.26 figure: item 2 jib boom up/down, jib boom extend/retract and platform rotate joystick; 3 secondary boom up/extend and down/retract joystick; 4 drive/steer joystick controller; 6 primary boom up/down, primary boom extend/retract and turntable rotate joystick; drawn left to right 6, 2, 3, 4 with the E-stop at the right end — *sm026-platform-controls.png figure (SM p.26); text at 1268557.txt lines 2503-2513*
- `[V]` Before opening the platform box: push in the red E-stop at both ground and platform controls; remove the lid retaining fasteners and open the lid; attach a grounded wrist strap to the ground screw inside the box — *1268557.txt 2537-2558 (SM p.27, PDF 41)*
- `[V]` ESD warning and remove rings, watches and other jewelry (SM p.27) — *1268557.txt 2526-2532 and 2562-2570 (SM p.27)*
- `[V]` A joystick that is disconnected or replaced must be calibrated before that function will operate (SM p.30) — *1268557.txt 2742-2746 (SM p.30, PDF 44)*
- `[V]` The joystick must be calibrated before threshold, max-out or ramping can be set — *1268557.txt 2747-2748 (SM p.30)*
- `[V]` After each joystick is calibrated, check the ground control box display for calibration faults; repeat if any — *1268557.txt 2749-2753 (SM p.30)*
- `[V]` Joystick calibration is done with the engine off — *1268557.txt 2754 (SM p.30)*
- `[V]` Drive joystick calibration steps: key off; hold Enter on the ground panel while turning the key to platform, about 5 s; Minus twice, Enter twice; scroll to DELETE DRIVE JOYSTICK DEFAULTS; Plus for YES, Enter; do not start the engine; full stroke forward hold 5 s, centre; full stroke reverse hold 5 s, centre; the ground alarm sounds on success — *1268557.txt 2765-2800 (SM p.30)*
- `[V]` Steer calibration uses DELETE STEER JOYSTICK DEFAULTS and the joystick or thumb rocker switch (if equipped) full stroke left then right, 5 s each — *1268557.txt 2826-2846 (SM p.31, PDF 45)*
- `[V]` Secondary boom joystick calibration uses DELETE SECONDARY BOOM JOYSTICK DEFAULTS, full stroke up/extend then down/retract, 5 s each — *1268557.txt 2864-2884 (SM p.31)*
- `[V]` Primary extend/retract calibration uses DELETE PRIMARY BOOM EXTEND/RETRACT JOYSTICK DEFAULTS and the thumb rocker on top of the primary boom/turntable rotate joystick — *1268557.txt 2914-2934 (SM p.32, PDF 46)*
- `[V]` Primary up/down calibration uses DELETE PRIMARY BOOM UP/DOWN JOYSTICK DEFAULTS; jib uses RESET JIB BOOM UP/DOWN JOYSTICK DEFAULTS; turntable uses DELETE TURNTABLE ROTATE JOYSTICK DEFAULTS — *1268557.txt 2952-2955, 3004-3006, 3038-3040 (SM pp.32-33)*
- `[V]` Full machine calibration is required after TCON (ALC-1000 in the ground control box) or SCON replacement; it shall only be done by Genie factory-trained technicians; tip-over hazard if out of sequence; start with booms stowed and axles retracted — *1268557.txt 7967-8005 (SM p.105, PDF 119)*
- `[V]` Joysticks are the second item in the full machine calibration sequence, after engine configuration — *1268557.txt 8006-8020 (SM p.105)*
- `[V]` SCON fault matrix columns: P_38 Propel, P_39 Turntable Rotate, P_10 Primary Boom Extend, P_11 Primary/Secondary Up, P_9B Ignition/Fuel, P_30 Secondary Extend/Down — *1268557.txt 13629-13640 (SM p.189, PDF 203); figure scon-fault-matrix.png*
- `[V]` Primary Boom angle (crosscheck) switches OFF P_38, P_39, P_10, P_11 and P_30 — *scon-fault-matrix.png figure (SM p.189); text at 1268557.txt lines 13654-13660*
- `[V]` Secondary Boom angle (crosscheck) switches OFF P_38, P_39, P_11 and P_30 — *scon-fault-matrix.png figure (SM p.189); text at 1268557.txt lines 13661-13666*
- `[V]` Fault table SM p.172: Primary Ext/Ret, Primary Up/Down and Steer joysticks - Value at 5.0 V gives limited speed, direction frozen at zero and neutral, alarm; recovery is check wiring, check terminals have not backed out, substitute a known good joystick, replace and recalibrate — *1268557.txt 12109-12118 (SM p.172, PDF 186)*
- `[V]` Fault table SM p.172: joystick Not calibrated -> Joystick Speed and Direction frozen at zero and neutral -> Calibrate Joystick; Just calibrated -> one second beep, self-clearing — *1268557.txt 12119-12128 (SM p.172)*
- `[V]` Fault table SM p.178: Secondary Boom Joystick Value at 5.0 V disables primary up, secondary up/down and extend with alarm; Not calibrated freezes speed and direction at zero — *1268557.txt 12668-12684 (SM p.178, PDF 192)*
- `[V]` Fault table SM p.185: Propel Joystick Not calibrated -> Joystick Speed and Direction frozen at zero and neutral -> Calibrate Thresholds — *1268557.txt 13330-13347 (SM p.185, PDF 199)*
- `[V]` Turntable Rotate Joystick faults are on SM p.181 and Jib Up/Down Joystick faults on SM p.183 with the same recovery wording — *1268557.txt 12923-12940 (SM p.181, PDF 195); 13156-13170 (SM p.183, PDF 197)*
- `[V]` LSFA1ES and LSRA1ES prevent boom functions with the axles retracted (SM p.203) — *1268557.txt 15322-15329 (SM p.203, PDF 217)*
- `[V]` SCON = Safety Controller: redundant dual axis tilt sensors for the turntable plus safety switch logic for function cut-off — *1268557.txt 15317-15320 (SM p.203)*
- `[V]` PM fig 603.1 Platform Control Box, View 1 is on PM p.208 and its parts list on PM p.209 — *106877.txt 10525-10531 and 10534-10537*
- `[V]` 119613GT HARN JOYSTICK ADAPTOR JS100 is a 6-pin to 7-pin adapter for 101174, 101175, 101005 — *106877.txt 10538-10542 (PM p.209)*
- `[V]` Item 1 101173GT JOYSTICK,2 AXIS,ROCKER,DEUTSCH, OEM, calibration required after replacement, qty 2; 1A 101173HGT JOYSTICK, DUAL AXIS W/STEER aftermarket — *106877.txt 10543-10554 (PM p.209)*
- `[V]` Item 6 101175GT JOYSTICK,1 AXIS,DEUTSCH OEM qty 1; 6A 101175HGT JOYSTICK,SINGLE AXIS W/KNOB aftermarket — *106877.txt 10579-10590 (PM p.209)*
- `[V]` Item 7 101174GT JOYSTICK,2 AXIS,DEUTSCH OEM qty 1; 7 101174HGT aftermarket; 7B 101005GT JOYSTICK,1 AXIS ROCKER,DEUTSCH OEM; 7B 101005HGT JOYSTICK, SINGLE AXIS W/STEER aftermarket — *106877.txt 10591-10611 (PM p.209)*
- `[V]` Joystick mounting hardware: item 2 8914GT SCREW, HHC, 1/4-20 X .625; 3 6356GT lock washer; 4 6638GT flat washer (PM p.209) — *106877.txt 10555-10563 (PM p.209)*
- `[V]` PM fig 603.1 drawing shows two item-1 (rocker) joysticks, then item 6, then item 7, then item 8 (E-stop) in a row on the lid — *pm208-platform-box-view1.png figure (PM p.208)*
- `[V]` Item 8 122519GT KIT,ESTOP SVC LARGE BOOM with 66812GT red mushroom head; item 10 106513GT CONTROL BOX ASSY,PCON; item 5 107798GT LID; 5A 106509GT membrane decal; 5B 82841GT DECAL,PLATFORM CONTROL PANEL — *106877.txt 10564-10578 and 10612-10640 (PM p.209)*
- `[V]` PM fig 606.1 Joysticks (PM pp.218-219) lists the same eight joystick numbers A-H plus 128000GT SEAL, CONNECTOR (DT JOYSTICKS), 128001GT SLEEVE,CONNECTOR,DT JOYSTICKS, 139598GT BOOT,JOYSTICK and 1269502GT KIT, ISOLATION, 4 JOYSTICK — *106877.txt 10949-10958 and 10960-11044 (PM pp.218-219)*
- `[V]` OM item 18: the drive/steer control is either a dual axis handle for drive and steer OR a drive handle with a thumb rocker for steer; blue arrow = forward, yellow arrow = backward, blue triangle = steer left, yellow triangle = steer right — *114474.txt 1618-1646 (OM p.27, PDF 29)*
- `[V]` OM item 20: single axis handle for secondary boom up/extend and down/retract; item 23: dual axis handle for jib boom up/down and platform rotate; item 22: thumb rocker for jib extend/retract — *114474.txt 1590-1602 and 1647-1653 (OM p.27)*
- `[V]` OM items 26 and 27: thumb rocker for primary boom extend/retract; dual axis handle for primary boom up/down and turntable rotate — *114474.txt 1660-1676 (OM p.28, PDF 30)*
- `[V]` OM PDF page 29 is printed page 27 and PDF 30 is printed page 28 — *114474.txt 1581-1586 and 1657-1661*
- `[F]` Site photo from above: red E-stop at the top right of the panel; the right-hand joystick has a rocker-top grip under blue/yellow steer triangles and blue/yellow up/down arrows; the ball-knob joystick beside it has chipped paint and secondary boom icons; the panel decal reads 82841 C — *2026-09-12-platform-panel-membrane.jpg photo*
- `[F]` Site photo under the lid: two round black joystick bodies on square flanges with grey Deutsch plugs and orange wedges; the body next to the E-stop contact block (marked NC) is visibly cleaner than its neighbour; green LED circuit board with ribbon connectors on the lid — *2026-09-12-platform-box-interior-pcb.jpg photo*
- `[F]` The aftermarket toggle switch in the platform box is wired with white wire and a blue Scotchlok tap near the joystick bodies — *2026-09-12-white-wire-to-toggle-in-box.jpg photo*
- `[M]` The joystick that is new is most likely the drive/steer joystick on J25 — *2026-09-12-platform-box-interior-pcb.jpg inference from the two photos above; owner reported 'one joystick visibly newer'*
- `[M]` Deutsch DT plugs carry cavity numbers moulded on the wire-entry face, so colours can be read per cavity without unplugging — *none general connector knowledge, not in the three manuals*
- `[V]` Case file records J25/J28 and the joystick connectors, the SCON P_38 propel cut, and the observation that one joystick is visibly newer — *README.md Field observation 2026-09-12 (later) section*

</details>


### D2: Which tilt sensor is in that carton, and does it matter?

**What this finds out.** Two different things on this machine get called "the tilt sensor": the small plastic PLATFORM tilt sensor bolted to the side of the platform rotator at the basket end, and the TURNTABLE level sensor, which on a Z-135/70 is not a separate part at all - it is built into the SCON safety-controller module on the turntable. This card identifies which one the carton at the turntable holds, checks whether either one on the machine has been changed, and records what that adds to the calibration list. It is a look, read and write-down card; nothing gets unplugged.

**Where it is**

- *What it is:* (A) PLATFORM tilt sensor: Genie 50813GT, described in the Parts Manual as SENSOR,TILT,PCON (PLASTIC), item 8 on figure 519.1 Platform Rotator. PCON = platform controller, the computer in the basket control box; this sensor reports to it. (B) TURNTABLE level sensor: not a separate part. The Service Manual calls it 'the turntable level sensor (SCON)' and says the SCON (safety controller) contains 'redundant dual axis tilt sensors measuring the X and Y tilt angles of the turntable'. SCON module part: 1258463GT MODULE,SCON,PROGRAMMED from SN 1712 (this machine is SN 1861); 139647-SGT was the part up to SN 1711. Item 22 on figure 304.1 Hydraulic Tank Side Components.
- *Where on the machine:* (A) At the basket end: the platform hangs from a round hydraulic rotator body between the jib and the basket. The sensor is on the side of that rotator body, held by two 1/4-20 x 5/8 hex screws with flat washers (PM p.199 items 9 and 10). Its plug is J55, a 6-pin Deutsch. (B) At the turntable: the module is in the hydraulic-tank side of the turntable (the side that carries the hydraulic tank and filters, opposite the engine). It has two 12-pin Deutsch plugs, J121 grey and J122 black.
- *How to find it:* (A) Stand at the basket with the boom stowed. Follow the round rotator body the platform is bolted to. Look on its side for a small rectangular sensor box with a short cable and a 6-way plug (see figure pm198-platform-rotator.png: item 8 is the boxed sensor drawn on the rotator side, items 9/10 its screws and washers). (B) Open the turntable cover on the hydraulic-tank side. Look for a sealed electronic module with two 12-way Deutsch plugs side by side (figure pm054-scon.png, item 22 near items 20/21 at the right of the drawing). It carries a Genie part-number label. It has NO tilt-sensor plug on it, because the tilt sensors are inside.
- *What it looks like:* (A) Plastic-bodied sensor ('(PLASTIC)' in the Parts Manual name), six harness wires at its plug: brown, green/black, green, brown, red, red/black. The schematic draws it as PLATFORM TILT SENSOR ASSEMBLY with a '0-20 DEG Y AXIS' signal and two '10 DEG' safety-cutout channels. (B) The SCON: a box with two 12-pin plugs; the Service Manual's pin legends for J121 and J122 list power, ground, CAN bus, boom-angle safety signals and the six switched safety-power outputs - no tilt wires.
- *Source:* SM p.42 (platform level sensor location); PM pp.198-199 fig 519.1 items 8-10; SM p.205 (J55); SM p.105 ('turntable level sensor (SCON)'); SM p.203 (SCON internal tilt sensors); PM pp.54-55 fig 304.1 item 22; SM p.206 (J121/J122); SM p.209 (SCON pin legend)

**Set the machine to**

- **Key:** Main key switch OFF and key removed while handling the carton, the platform sensor and the SCON. For the LCD read in step 9 only: main key to GROUND controls. Never turn the bypass/recovery key switch - it stays in RUN.
- **E-stops:** Both red E-stop (emergency stop) buttons pushed IN while handling parts. Ground E-stop pulled OUT only for the LCD read in step 9, then pushed IN again.
- **Battery:** Connected. This card takes no resistance (ohm) readings. If you decide to unplug any connector for a later card: key OFF and E-stop IN first; battery disconnected before any ohm test.
- **Engine:** OFF for the whole card. The LCD read does not need the engine running.
- **Also:** Firm level ground, boom stowed, wheels chocked. Axles stay RETRACTED as found (8 ft 1 in); boom functions are locked out by the axle switches and must stay that way. Do not fit the calibration jumper, do not move the calibration toggle at the top of the ground box, do not enter any calibration menu - that is the calibration technician's job.

**Connector — J55 (platform tilt sensor) - and, for the turntable side, SCON plugs J121/J122 which carry no tilt wires**

J55 is listed as '6 pin Deutsch connector on platform tilt sensor' (SM p.205). Its six harness wires come from the PCON's white 35-pin connector J22 (pins 15, 19, 20, 21, 22, 23). Three wires are the 'operational' channel (power, ground, tilt signal to the PCON) and three are the 'safety' channel (safety power in, safety ground, safety cutout output). The turntable level sensor has no connector of its own: J121 (grey 12-pin) and J122 (black 12-pin) on the SCON carry power, ground, CAN, boom-angle safety signals and safety-power outputs only.

*Source:* SM p.205 line 15477-15479; SM p.208 PCON pin legend (figure sm208-dcon-pcon-pins.png); ES0366J SM p.229 (figure es-j55-platform-tilt.png); SM p.206 lines 15608-15611; SM p.209 (figure sm209-scon-pins.png)

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| J55-1 | P85RET-BR | BR (brown) | not printed in the manuals | PL TILT SNSR GND - operational sensor ground (circuit 85 return) | PCON J22-19 (white 35-pin on the platform controller) |
| J55-2 | C84TAY-GR/BK | GR/BK (green with black stripe) | not printed in the manuals | PL TILT SNSR - operational tilt signal, drawn as '0-20 DEG Y AXIS' (circuit 84 Tilt signal Y axis; suffix TAY = Tilt Alarm Y axis) | PCON J22-20 |
| J55-3 | P85PTS-GR | GR (green) | not printed in the manuals | PL TILT SNSR PWR - operational sensor power (circuit 85 Tilt sensor power; suffix PTS = Platform Tilt Sensor) | PCON J22-21 |
| J55-4 | P87RET-BR | BR (brown) | not printed in the manuals | SAFE PL TILT GND - safety-channel ground (circuit 87 return) | PCON J22-22 |
| J55-5 | P87PTS-RD | RD (red) | not printed in the manuals | SAFE PL TILT PWR - Platform Level Safety Power (circuit 87) | PCON J22-23 |
| J55-6 | C88PTS-RD/BK | RD/BK (red with black stripe) | not printed in the manuals | SAFE PL TILT OUT - Platform Level Safety Output (circuit 88); the '10 DEG' safety cutout channels drive this line | PCON J22-15 |
| SCON J121 (grey) and J122 (black), all 24 pins | none is a tilt-sensor wire | - | - | The turntable tilt sensors are inside the SCON module. There is no external turntable tilt sensor plug on this machine. | - |

**Do this**

1. Stand down. Main key OFF and out, both E-stops IN, wheels chocked, boom stowed, axles left retracted. Do not touch the bypass/recovery key switch (leave it in RUN) and do not open the ground box to move the calibration toggle.
2. The carton. Photograph all six faces of the carton at the turntable. Write down, exactly as printed: the Genie part number (you are looking for 50813 / 50813GT), the description line, any date or batch code, whether the seal is broken, and whether a sensor is inside or the box is empty. In the field photo the dirty label reads '...TILT SENSOR', '+/-10 DEGREE...' and '(PCON)', which matches the Parts Manual name SENSOR,TILT,PCON (PLASTIC) = the PLATFORM tilt sensor - but read the printed number yourself; do not rely on that photo reading.
3. If a part is inside the carton: do not fit it. Count the pins on its plug (the platform sensor uses a 6-way Deutsch plug, J55), note that the body is plastic, photograph the plug face and the wire colours on its pigtail, and put it back in the carton.
4. The platform sensor on the machine. From the ground, at the basket end, find the rectangular sensor on the side of the round rotator body (PM fig 519.1 item 8). Photograph it. Record: (a) does it look new (clean plastic, bright zinc screws) or original (faded, dirty like the rest of the machine); (b) is the 6-way plug J55 pushed fully home and latched; (c) any Scotchlok taps, butt splices, tape or extra wires within arm's reach of it; (d) which of the six harness colours you can see - brown, green/black, green, brown, red, red/black. Do not unplug it for this card.
5. The SCON. Open the turntable cover on the hydraulic-tank side. Find the sealed module with two 12-way plugs (PM fig 304.1 item 22). Photograph its label and write the part number: expect 1258463GT (from SN 1712; this machine is SN 1861). Record: new or original appearance; J121 (grey) and J122 (black) both seated and latched; any splices or added wires; any loose or corroded ground/bond wire at the module. Note for the record: there is no tilt-sensor plug on the SCON, so a boxed 'turntable tilt sensor' could not be fitted anywhere on this machine - if anyone says they replaced the turntable tilt sensor, ask whether they mean the SCON module.
6. The white wire. The white wire from the platform toggle ends near the turntable at a small Deutsch plug carrying red and orange wires, joined with a blue Scotchlok tap (photo 2026-09-12-white-wire-turntable-tilt-sensor-box.jpg). That plug is NOT a tilt-sensor plug - there is no turntable tilt sensor plug. Photograph it, count its pins and list its wire colours; compare with the secondary boom angle sensor J154 pigtail (1 red, 2 black, 3 blue, 6 orange, 5 brown, 4 yellow). Leave it for the J154/toggle cards; cut nothing yet.
7. Ask the owner and, if reachable, the previous technician: was the part in the carton fitted, where, when, and was any calibration attempted afterwards? Write the answers down word for word.
8. Software version. At the ground control box, main key to GROUND. Watch the LCD and pull the ground E-stop OUT: the software version is displayed as the screen powers up. Write it down. It decides which calibration procedures the shop will use: 4.01 and higher = 2-point procedures; before 4.01 = 6-point procedures with the digital level.
9. LCD read (Operator's Manual 'Test the Tilt Sensor', OM p.33; engine not needed). Push the LCD screen control buttons until TURNTABLE LEVEL SENSOR X-DIRECTION shows and write the degrees. Do the same for TURNTABLE LEVEL SENSOR Y-DIRECTION and PLATFORM LEVEL SENSOR DEGREES. Then place a digital level (or a good bubble level) on the flat top of the turntable in both directions, and on a platform side rail, and write those readings next to the LCD values. Also scroll the fault list and note whether any line mentions TURNTABLE LEVEL SENSOR or PLATFORM LEVEL SENSOR.
10. Push the ground E-stop IN, key OFF, key out, close the cover.
11. Fill in the record: carton part number and whether it is full or empty; fitted or spare; platform sensor new/original and J55 seated; SCON part number and new/original; software version; the three LCD level values and the physical level readings; the answers from step 7.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Part number printed on the carton | **50813GT SENSOR,TILT,PCON (PLASTIC) - the PLATFORM tilt sensor** | It is the platform sensor. If it was fitted, the shop adds calibration step 4 'Platform level sensor' (SM p.42: firm level surface, boom stowed, digital level on a side rail, SET PLATFORM LEVEL SENSOR TO GRAVITY). That step has no axle-extended requirement. If it is a spare that was never fitted, it changes nothing. Either way it does not explain the seven live boom-angle faults. | If the carton says MODULE,SCON (1258463GT or 139647-SGT), the safety controller was replaced: the manual requires full machine calibration in order (SM p.105), and step 3 turntable level sensor (SM p.154) needs the axles fully extended - that is a shop job, not a yard job. Any other part number: photograph and look it up before deciding. |
| Appearance of the sensor on the side of the platform rotator and seating of J55 | **Original-looking sensor, J55 latched, no splices** | No platform-sensor calibration step is added by this item. | New-looking sensor = it was replaced and 'must be calibrated prior to machine operation' (SM p.42): add step 4. Unlatched plug or splices: photograph and record; the calibration tech must see this before calibrating. |
| Part number on the SCON label and its appearance | **1258463GT, original appearance, J121 grey and J122 black seated** | Treat the SCON as original. Full-machine calibration is then only forced if the TCON (ALC-1000 board) was replaced or the shop chooses to run it. | A visibly new module, or a module of a different number, means the turntable level sensor (SCON) has been replaced: full machine calibration in the manufacturer's order is mandatory, and it cannot be started until the axles can be fully extended. |
| LCD: TURNTABLE LEVEL SENSOR X-DIRECTION and Y-DIRECTION, in degrees | **A degree value that agrees with the digital level on the turntable to within about a degree; on level ground, close to 0 degrees** | The SCON's internal tilt sensors are alive and reading; the turntable level sensor is not the cause of the live faults. | No value, a frozen value, or a value far from the physical level: record it. The manual's recovery for turntable level sensor faults is 'Check that SCON is grounded' (value at 5.0 V) or 'Replace SCON' (too high / too low / 0 V / out of tolerance). Do not buy a SCON on this alone - hand the reading to the calibration tech. |
| LCD: PLATFORM LEVEL SENSOR DEGREES, in degrees | **A degree value that agrees with the level on the platform side rail to within about a degree** | The platform tilt sensor and its J55 wiring are alive; whatever is in the carton, the fitted sensor is reading. | No value or a wild value: the fault-table entry for Platform Level Sensor Y Direction says 'Primary up and extend disabled, Alarm sounds' and 'Check that SCON is grounded'. Record it and photograph J55; that becomes a probe job for a later card (key OFF, E-stop IN before unplugging). |
| Fault list on the ground display | **No line naming TURNTABLE LEVEL SENSOR or PLATFORM LEVEL SENSOR (the seven live faults are all boom-angle, boom-switch and calibration items)** | Confirms the carton is a side issue: the tilt sensors are not generating faults. | Write the exact wording down; SM pp.180-182 give the recovery actions, and a 'SCON Tilt Sensor calibration check' (SM p.188) means the X and Y tilt matrix was never entered - a calibration-tech item. |

**Why we are doing this.** If the carton is the platform tilt sensor (Genie 50813GT) and it was fitted, that adds only step 4 of the calibration order (SM p.42): boom stowed, level ground, no axle requirement. If instead someone changed "the turntable level sensor", they changed the SCON module, and the manual then requires the WHOLE machine to be calibrated in a fixed order, with step 3 (turntable level sensor, SM pp.154-157) needing the axles fully extended - which cannot be done in this yard with the axles at 8 ft 1 in. That decides yard-versus-shop. It also settles whether the carton has anything to do with the seven live faults: none of them is a level-sensor fault, so the carton is a side issue, not the cause.

**Safety**

- Key OFF, key out, both E-stops IN before touching any plug. This card does not unplug J55 or the SCON plugs; if a later card does, key OFF and E-stop IN first, and battery disconnected before any ohm test.
- Do not turn the bypass/recovery key switch and do not fit the calibration jumper or move the calibration toggle. The Service Manual restricts calibration to 'qualified technicians that have Genie factory service training' and warns of tip-over if the machine is calibrated out of sequence.
- Never bridge, jumper, tap or defeat the platform tilt sensor, the SCON, or any of their wires. The SCON's +/-4.5 degree alarm and the platform sensor's +/-10 degree cutout are safety functions. This plan removes bypasses; it never adds one.
- Do not raise, extend or rotate the boom. The machine has live envelope faults and the axles are retracted; the axle safety switches are doing their job by locking boom functions.
- Do not enter the platform of this machine. Do the platform-sensor inspection from the ground with the boom stowed.
- Wheels chocked, firm level ground, engine off. The LCD read needs only the key and the E-stop.
- Do not replace the SCON on a hunch. Fitting a new SCON forces a full machine calibration in the manufacturer's order, which needs the axles fully extended - impossible in this yard - and the fault-table recovery actions for level-sensor faults start with 'check that SCON is grounded', not with replacement.

**Open questions on this card**

- The carton's part number has not been read directly. My reading of the dirty label in the photo ('TILT SENSOR', '+/-10 DEGREE', '(PCON)') points to 50813GT, the platform sensor, but the printed number must be read on site (step 2).
- Was the carton part fitted, and where? If it was fitted at the platform rotator, step 4 (platform level sensor, SM p.42) is owed; if it is a spare, nothing changes.
- Is the SCON on this machine original? Its label (expect 1258463GT) and appearance decide whether a full in-order calibration is mandatory (SM p.105/154).
- The Parts Manual marks 50813GT with '****' but the footnote text is not in the extracted text (it is probably a graphic or a notes page); read PM p.199 in the PDF to see what the four stars mean.
- Step 25 of the turntable level sensor procedure calls for 'Maintenance Procedure, Test the Level Sensor', which lives in the Maintenance Manual - not one of the three documents in this knowledge base. The Operator's Manual 'Test the Tilt Sensor' (OM p.33) is the closest available check.
- The live fault worded 'TCON-SCON calibration inconsistent' does not appear verbatim in the Service Manual fault tables. The nearest entry is 'SCON Tilt Sensor - Calibration check - Display X direction and Y direction not calibrated' (SM p.188). Record the exact on-screen wording.
- The TCON block on ES0366J carries internal labels TT_TILT_SNSR_PWR/GND and TT_TILT_X/Y_AXIS on a P1 header, but the external J12 legend has no tilt wire. How the TCON receives turntable tilt values on this model (likely over CAN from the SCON) is not stated in the manuals; it does not change the field work.
- The small Deutsch plug with red and orange wires that the white wire is tapped into near the turntable is unidentified. It is not a tilt-sensor plug (there is none on the turntable). Compare its colours and pin count with the J154 secondary boom angle sensor pigtail (RD, BK, BL, OR, BR, YL) in the J154/toggle cards.
- The sensor-side pigtail colours of 50813GT are not printed in the manuals; only the harness colours at J55 are. Note the colours on the carton part if one is inside.
- Does the carton part's plug physically match J55 (6-way Deutsch)? Expected yes since it is the Parts Manual item, but confirm by counting pins before anyone fits it.

<details><summary>Sources for this card (51 checked statements)</summary>

- `[V]` The platform level sensor is mounted to the side of the platform rotator and must be calibrated if replaced. — *1268557.txt 3658-3663 (SM p.42)*
- `[V]` Platform tilt sensor part number 50813GT, SENSOR,TILT,PCON (PLASTIC), item 8, qty 1, PM p.199. — *106877.txt 10053-10056 (PM p.199)*
- `[V]` The platform tilt sensor is fixed with 8914GT SCREW, HHC, 1/4-20 X .625 (item 9) and 6638GT WASHER, FLAT, USS, 1/4"Y (item 10). — *106877.txt 10057-10060 (PM p.199)*
- `[V]` The platform tilt sensor is on Parts Manual figure 519.1 Platform Rotator, PM p.198; item 8 is drawn as a boxed sensor with a cable on the side of the rotator body. — *pm198-platform-rotator.png figure pm198-platform-rotator.png (PM p.198); text 106877.txt lines 10003-10008*
- `[V]` J55 is the 6-pin Deutsch connector on the platform tilt sensor. — *1268557.txt 15477-15479 (SM p.205)*
- `[V]` J55 pinout on ES0366J: 1 P85RET-BR, 2 C84TAY-GR/BK, 3 P85PTS-GR, 4 P87RET-BR, 5 P87PTS-RD, 6 C88PTS-RD/BK, drawn into the PLATFORM TILT SENSOR ASSEMBLY block. — *es-j55-platform-tilt.png figure es-j55-platform-tilt.png (ES0366J, SM p.229); text 1268557.txt lines 17108-17131, 17445-17447, 19320-19325*
- `[V]` Schematic pin names at the PCON for the platform tilt sensor: SAFE PL TILT OUT, PL TILT SNSR, PL TILT SNSR PWR, PL TILT SNSR GND, SAFE PL TILT PWR, SAFE PL TILT GND on P22-15 and P22-19 to P22-23. — *1268557.txt 17108-17129 (SM p.229)*
- `[V]` PCON J22 (white 35-pin) pins: 15 C88PTS-RD/BK, 19 P85RET-BR, 20 C84TAY-GR/BK, 21 P85PTS-GR, 22 P87RET-BR, 23 P87PTS-RD. — *sm208-dcon-pcon-pins.png figure sm208-dcon-pcon-pins.png (SM p.208); text 1268557.txt lines 15841-15849*
- `[V]` J22 is the white 35-pin AMP connector on the PCON. — *1268557.txt 15458-15459 (SM p.205)*
- `[V]` Wire circuit 84 = GR/BK Tilt signal Y axis; 85 = GR Tilt sensor power; 83 = GR/WH Tilt signal X axis. — *1268557.txt 14633-14641 (SM p.198)*
- `[V]` Wire circuit 87 = RD Platform Level Safety Power; 88 = RD/BK Platform Level Safety Output; 89 = BR Platform Level Safety Ground. — *1268557.txt 14648-14656 (SM p.198)*
- `[V]` Wire-name suffix PTS = Platform Tilt Sensor, PTA = Platform Tilt Alarm. — *1268557.txt 14129-14132 (SM p.194)*
- `[V]` Wire-name suffix TAY = Tilt Alarm Y axis, TAX = Tilt Alarm X axis, TTS = Turntable Tilt Sensor, TTA = Turntable Tilt Alarm. — *1268557.txt 14225-14247 (SM p.195)*
- `[V]` The platform angle sensor measures +/-20 degrees; its safety cutout is +/-10 degrees from gravity and disables primary and secondary boom up/down and platform level up/down. — *1268557.txt 15313-15317 (SM p.203)*
- `[V]` The SCON contains redundant dual-axis tilt sensors measuring turntable X and Y tilt, provides safety-switch logic, and its alarm sounds at +/-4.5 degrees. — *1268557.txt 15318-15320 (SM p.203)*
- `[V]` The Service Manual identifies the turntable level sensor with the SCON: full machine calibration is required when the TCON board or 'the turntable level sensor (SCON)' has been replaced. — *1268557.txt 7973-7978 (SM p.105)*
- `[V]` Calibration is restricted to Genie-trained technicians and out-of-sequence calibration is a tip-over hazard. — *1268557.txt 7981-7989 (SM p.105)*
- `[V]` Full machine calibration order: engine configuration, joysticks, turntable level sensor (3rd), platform level sensor (4th), axle angle sensors, steer sensors, secondary boom angle sensor, primary boom angle sensor, jib boom bellcrank angle sensor, option configuration. — *1268557.txt 8008-8040 (SM p.105)*
- `[V]` Full machine calibration starts with booms fully stowed and the axles retracted, and needs a digital level (kit 58351). — *1268557.txt 7992-8006 (SM p.105)*
- `[V]` Turntable level sensor calibration (SM 9-2, p.154): if the SCON has been replaced the whole machine must be calibrated in order; the procedure needs firm level ground, booms fully stowed and axles FULLY EXTENDED. — *1268557.txt PDF page 168 block (SM p.154)*
- `[V]` Turntable level sensor procedure: E-stop in, open ground box, jumper (before SN 321) or calibration toggle left plus door fastener (after SN 320), key to ground, key into bypass position, hold Enter while pulling E-stop, (plus)(enter)(enter)(plus). — *1268557.txt PDF pages 168-169 (SM pp.154-155)*
- `[V]` Turntable level sensor procedure: SET UNIT X AXIS LEVEL TO GRAVITY with a digital level on the turntable X axis, then SET UNIT Y AXIS LEVEL TO GRAVITY on the Y axis; the display must see a change to record the value. — *1268557.txt PDF pages 169-171 (SM pp.155-157)*
- `[V]` Turntable level sensor procedure ends: EXIT YES, key back to run, wait 20 s, E-stop in, remove jumper/fastener (tip-over warning), start engine, confirm no calibration faults, perform the level sensor test from the Maintenance Manual. — *1268557.txt PDF page 171 (SM p.157), lines 11180-11214*
- `[V]` Platform level sensor calibration (SM p.42): firm level surface, boom stowed, digital level on a platform side railing, start and level the platform to gravity, turn off, then jumper/toggle, key in bypass, hold Enter while turning key to ground, (plus)(enter)(enter)(plus). — *1268557.txt PDF page 56 block (SM p.42)*
- `[V]` Platform level sensor calibration continues: SET PLATFORM LEVEL SENSOR TO GRAVITY, plus for YES, enter; EXIT YES; remove jumper/fastener. No axle position is required by this procedure. — *1268557.txt PDF page 57 block (SM p.43)*
- `[V]` SCON module part numbers: 139647-SGT MODULE,SCON,V2.00,SERVICE to SN 1711; 1258463GT MODULE,SCON,PROGRAMMED from SN 1712; both say the machine needs recalibration after a new module. Item 22 on figure 304.1, PM p.55. — *106877.txt 2778-2787 (PM p.55); figure scon-pm55-list.png*
- `[V]` Figure 304.1 is titled Hydraulic Tank Side Components (PM p.54) and item 22 (the SCON) is drawn at the right of the turntable near items 20/21. — *pm054-scon.png figure pm054-scon.png (PM p.54)*
- `[V]` This machine is SN Z13513-1861, so the from-SN-1712 SCON part 1258463GT applies. — *106877.txt 2786-2787 (PM p.55)*
- `[V]` J121 is the 12-pin Deutsch grey SCON connector; J122 is the 12-pin Deutsch black SCON connector. — *1268557.txt 15608-15611 (SM p.206)*
- `[V]` The Safety Controller Pin Legend for J121 and J122 lists no tilt-sensor wire: J121 carries S132LDS, S73SLE, C145CAL, CAN, S59CNK, S56PRV, S137PLL, S139TRF, GNDSCON; J122 carries P21DCON, C142SBS, C141PBS, C60AXE, S12SB, S13DE, P53LS, S140ENL, P54ENG, P58LS, S56PRV, C61AXR. — *sm209-scon-pins.png figure sm209-scon-pins.png (SM p.209)*
- `[V]` The TCON J12 (black 35-pin) legend has no tilt-sensor wire: pins 25 SNSR GND-BR, 26 P109ANG-GR/WH, 27-31 unused, 32 C123PBS-RD/BK, 33 C124SBS-OR/BK, 34 S140ENL-OR/RD, 35 GND16-BR. — *sm210-tcon-pins.png figure sm210-tcon-pins.png (SM p.210)*
- `[V]` Inside the TCON block on ES0366J there are board-internal labels TT_TILT_SNSR_GND, TT_TILT_SNSR_PWR, TT_TILT_X_AXIS and TT_TILT_Y_AXIS on an internal P1-xx header, next to OIL_PRESSURE, ALTERNATOR RPM and AC GENERATOR; they are not on the external J12 legend. — *1268557.txt 17612-17620 (SM p.229); figure es-tcon-tt-tilt-labels.png*
- `[V]` Fault table, turntable level sensor X direction (operational and safety): value at 5.0 V flashes the out-of-level icon and LED and sounds the alarm, recovery 'Check that SCON is grounded'; too high / too low / 0 V / out of tolerance: 'Replace SCON'. — *1268557.txt 12867-12890 (SM p.180)*
- `[V]` Fault table, turntable level sensor Y direction (operational and safety): primary up and extend disabled, alarm; 'Check that SCON is grounded' / 'Replace SCON'. — *1268557.txt 12986-13000 and 13023-13040 (SM pp.181-182)*
- `[V]` Fault table, Platform Level Sensor Y Direction: value at 5.0 V / too high / too low / 0 V -> primary up and extend disabled, alarm; recovery 'Check that SCON is grounded'. — *1268557.txt 13041-13056 (SM p.182)*
- `[V]` Fault table, SCON Tilt Sensor calibration check: X and Y direction not calibrated; recovery is to re-power after entering the tilt X and Y axis matrix information. — *1268557.txt 13595-13600 (SM p.188)*
- `[V]` SCON fault matrix includes 'Turntable tilt angle (crosscheck SCON internal sensors 3 in a delta configuration)' and 'Turntable tilt Y axis (+5°, secondary boom not stowed)'. — *1268557.txt 13647 and 13697-13698 (SM p.189)*
- `[V]` The ground-display operator screens include Turntable level sensor X° direction, Turntable level sensor Y° direction and Platform level sensor degree. — *1268557.txt 8097-8106 (SM p.106)*
- `[V]` Operator's Manual 'Test the Tilt Sensor': push an LCD screen control button until TURNTABLE LEVEL SENSOR X-DIRECTION, then Y-DIRECTION, then PLATFORM LEVEL SENSOR DEGREES appears; each should display the angle in degrees. — *114474.txt 1968-1985 (OM p.33)*
- `[V]` The software version is displayed on the LCD when the red E-stop is pulled out; 4.01 and higher use 2-point calibration, earlier versions use 6-point calibration. — *1268557.txt 6491-6496 (SM p.83)*
- `[V]` The ground-controls ECM levels the platform by comparing the platform angle sensor with the turntable level sensor - so the two sensors work as a pair. — *1268557.txt 3418-3424 (SM p.39)*
- `[V]` If the platform angle is more than 10° from level, boom angle and platform level functions are disabled; the normal envelope is +/-4.5°. — *1268557.txt 7631-7636 (SM p.100)*
- `[V]` Secondary boom angle sensor calibration requires the turntable level sensor to be calibrated first if it was replaced. — *1268557.txt 6972-6977 (SM p.89)*
- `[V]` Jib boom bellcrank sensor calibration also requires the turntable level sensor first if it was replaced. — *1268557.txt 4758-4762 (SM p.58)*
- `[V]` Operator's Manual: do not depend on the tilt alarm as a level indicator; it sounds only on a severe slope. — *114474.txt 826-832 (OM p.13)*
- `[V]` The Parts Manual lists no turntable tilt/level sensor as a separate part; the only SENSOR,TILT entry is the platform one (50813GT), and the only other 'tilt' item is decal 33952GT DECAL,DANGER,TILT ALARM. — *106877.txt 394 and 10055 (whole-file search)*
- `[F]` Field photo: the carton at the turntable carries a label that, read upside-down and enlarged, shows '...TILT SENSOR', '+/-10 DEGREE...' and '(PCON)', plus a barcode. — *2026-09-12-white-wire-turntable-tilt-sensor-box.jpg photo, lower-right corner (enlarged crop)*
- `[F]` Field photo: the white wire from the platform is joined by a blue Scotchlok tap to an orange/red wire pair entering a small Deutsch plug on the turntable, near the carton. — *2026-09-12-white-wire-turntable-tilt-sensor-box.jpg photo, centre-right*
- `[V]` For comparison with that plug: the secondary boom angle sensor J154 pigtail colours are 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL (S20 SEC BM ANG SAFETY / S19 SEC BM ANG OPER). — *es-j154-secondary-sensor.png figure es-j154-secondary-sensor.png (ES0366J, SM p.229)*
- `[V]` None of the seven live faults on the ground display is a turntable level sensor or platform level sensor fault. — *README.md section 'Field update 2026-09-10 (later): axles retracted, chassis codes cleared' - remaining codes list*
- `[M]` The kit-fitted 50813GT sensor pigtail colours are likely different from the harness colours; the manuals do not print the sensor-side colours for J55. — *es-j55-platform-tilt.png figure es-j55-platform-tilt.png*

</details>


### D4: Read the software version and decide 2-point or 6-point calibration

**What this finds out.** Find out which version of operating software is loaded in the ground control computer (TCON = turntable controller, the main computer in the ground control box). The number appears on the little LCD screen the moment the ground red Emergency Stop button is pulled out. That one number tells the calibration technician which boom-angle-sensor calibration method this machine uses and which tools to bring.

**Where it is**

- *What it is:* LCD readout screen on the ground control panel (the membrane-button face of the ground control box). The Parts Manual calls the window the LCD lens, item 10, 62374GT, and the button face the membrane decal, item 13, 106510GT, which comes with the lid 107714GT.
- *Where on the machine:* On the turntable, on the side Genie calls the ground controls side of the machine (the Service Manual names a fixed turntable cover on that side). Stand on the ground at the turntable, facing the box; no cover needs to be opened and the box lid stays closed.
- *How to find it:* Look for the metal control box on the turntable with a blue lid. The lid face is a black membrane panel with white symbol buttons (boom up/down, rabbit/turtle, glow plug, etc.) and a grey rectangular LCD window near the top. Above the screen is a white decal 1263541 A that ends '...Improper calibration can result in death or serious injury.' The four LCD control buttons sit below-left of the screen: plus, minus, a return-arrow (enter) and an arrow button. The Service Manual names them Plus, Minus, Previous and Enter. The red mushroom-head Emergency Stop button and the 3-position main key switch are on the same lid face.
- *What it looks like:* In the existing photo of this machine (ground-display-hours.jpg) the LCD is a pale grey window showing a black hourglass symbol and the hour meter 2162.4. The Operator's Manual says the LCD readout screen carries the low fuel, engine oil pressure, water temperature, auxiliary power, high engine rpm indicators and the hour meter. Fault messages and the software version appear as text/numbers in this same window.
- *Source:* SM p.75 (PDF 89) line 5947-5949 'fixed turntable cover at the ground controls side of the machine'; OM p.22 (PDF 24) lines 1353-1360; PM p.61 lines 3119-3120 and p.63 lines 3156-3157; SM p.83 lines 6510-6513; photo ground-display-hours.jpg; figure pm060-ground-controls.png

**Set the machine to**

- **Key:** Main key switch (the 3-position off / ground / platform switch on the ground control box) turned to the GROUND position for the reading; OFF and key removed at the end. Bypass/recovery key switch: leave it in RUN and do not put a key in it.
- **E-stops:** Start with the ground red Emergency Stop button pushed IN (off). It is pulled OUT (on) only for the reading, then pushed back IN at the end. Platform red Emergency Stop: leave it as found (pushed in); nobody is in the platform.
- **Battery:** Connected (the display needs battery power). Nothing is unplugged on this card, so no resistance test and no battery disconnect are needed.
- **Engine:** OFF the whole time. Do not press the engine start button. The version shows with the engine off.
- **Also:** Machine on firm level ground, boom fully stowed, wheels chocked. Axles are currently retracted (8 ft 1 in); that is fine for this card because no boom function is used. Do not press any boom, drive or axle button. Nobody in the platform.

**Connector — None. No connector is unplugged or probed on this card.**

The reading is taken from the LCD screen with the box closed. For reference only: the ground control box contains a replaceable membrane decal with touch-sensitive buttons, an LCD circuit board mounted inside the lid that drives the screen, and the ECM circuit board (TCON, ALC-1000) which stores all operating parameters and option configuration. If the screen never lights, that is a job for the TCON power/ground card, not this one.

*Source:* SM p.102 (PDF 116) lines 7766-7777

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| none | none | n/a | n/a | No pin is probed on this card. The software version is read from the LCD; the LCD circuit board is inside the lid and the ECM board holds the software and parameters. | n/a |

**Do this**

1. Preparation. Machine on firm level ground, boom stowed, wheels chocked, nobody in the platform. Have a phone ready to video the LCD screen: the manual does not say how long the version stays on screen, so film it rather than trust your eyes.
2. Go to the ground control box on the turntable (ground controls side). Confirm the ground red Emergency Stop button is pushed IN (off). Confirm the bypass/recovery key switch has no key in it and points to RUN; do not touch it.
3. Put the key in the main 3-position key switch and turn it to the GROUND position (Operator's Manual: 'Turn the key switch to the ground position and the ground controls will operate').
4. Start filming the LCD window. Pull the red Emergency Stop button OUT to the on position. Watch the screen immediately: Genie says 'The software version is displayed on the LCD screen when the red Emergency Stop button is pulled out to the on position.' In cold weather the LCD needs a moment to warm up before anything appears (Operator's Manual p.31).
5. Write down the version exactly as shown, all digits (for example 3.12 or 4.02), plus any prefix text the screen shows. If you missed it: push the Emergency Stop IN, wait about five seconds, pull it OUT again and film it again. These are the normal operating controls; repeating this is safe. Do NOT press engine start. Do NOT press any function button.
6. Leave the key on and let the screen run through its messages. Write down every fault message word for word, in the order shown, and the hour meter reading (this machine last showed 2162.4 h). Do not try to clear anything.
7. Optional read-only record: with the key still on, press the Plus and Minus buttons at the same time. This opens the Machine Status screen (Service Manual p.107), which only displays values. Write down what it shows for 'Primary boom to secondary boom angle', 'Secondary boom angle', 'Primary boom length', 'Secondary boom length' and 'Jib bellcrank angle'. Do not press Enter on anything. Do not use the Plus-Enter-Enter-Plus, Minus-Minus-Previous-Previous or Minus-Previous-Previous-Minus sequences: those enter setting menus and are for the calibration technician.
8. Push the red Emergency Stop button IN. Turn the key switch OFF and remove the key.
9. Decide, using Genie's rule: version 4.01 or higher = 2 Point Calibration procedures for the primary and secondary boom angle sensors (no digital level needed for them). Version before 4.01 = 6 Point Calibration procedures, and the calibration technician must bring the digital level kit, Genie part number 58351 ('a digital level with a magnetic base and cable harnesses'). Note on the record that the turntable level sensor and jib boom bellcrank sensor calibrations need the digital level whatever the version.
10. Record also which fault-clearing menu this software has (3.11 or lower and 4.01: 'Delete Faults' in the Default Reset menu; 3.12 and 4.02 or higher: 'Clear Faults' menu). Do not use either menu on this card; this is information for the person who clears faults after the repairs.
11. Hand the calibration technician: the version number, the video, the full fault list, the hour meter reading, the Machine Status values, and the reminder that every boom-angle-sensor calibration procedure requires the machine 'in the drive enable zone and the axles fully extended' with the engine running, so the propel and axle problems must be fixed before the calibration visit.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| LCD screen when the ground red Emergency Stop button is pulled out (key in GROUND, engine off) | **The screen lights and shows the software version number, then normal screens and any fault messages. Genie: 'The software version is displayed on the LCD screen when the red Emergency Stop button is pulled out to the on position.' Operator's Manual: 'The LCD screen will come on'.** | Record the number exactly. Go to the next expected item to make the 2-point / 6-point decision. | If the screen stays blank after a warm-up wait (cold weather note, OM p.31), or shows nothing but the hour meter with no version text, the reading has been missed or the LCD/TCON is not powering correctly. Repeat once with the video running. If still blank, stop this card and go to the TCON power/ground card; do not make a calibration decision. |
| Software version number compared with 4.01 | **A number either 4.01 or higher, or lower than 4.01.** | 4.01 or higher: write '2 Point Calibration' on the record. The technician will set PRIMARY BOOM FULLY LOWERED / FULLY RAISED and SECONDARY BOOM FULLY LOWERED / FULLY RAISED on screen; no digital level is needed for the boom angle sensors. | Lower than 4.01: write '6 Point Calibration, bring kit 58351' on the record. The technician must read a digital level on top of the boom at six angles per sensor and needs the kit ('digital level with a magnetic base and cable harnesses'). Either way the turntable level and jib sensors need the digital level. |
| Fault messages shown after the version | **The messages already seen on this machine come back (primary and secondary boom angle sensor crosscheck faults, primary boom angle zone fault, primary boom angle sensor not calibrated, secondary boom switches fault, secondary boom angle sensor shorted / 0 V, TCON-SCON calibration inconsistent). This is the field observation from the owner's display, not a manual value.** | Write them down word for word and in order. Nothing to fix on this card. | If different or extra messages appear, record them too; a message that does not return after the Emergency Stop is cycled was a stored (latched) fault rather than a live one. Do not clear anything here. |
| Hour meter on the LCD | **About 2162.4 h, the value photographed on this machine (hourglass symbol next to the number).** | Record it; it confirms you are reading the right machine and the ECM memory is intact. | A wildly different reading suggests the TCON control box has been swapped; note it, because Genie needs the model, serial number and software revision to supply a TCON box and the version you just read is the only way to know what is fitted. |
| Which fault-clearing menu the software has (record only, do not use) | **Software 3.11 or lower and 4.01: Default Reset menu containing 'Delete Faults' ('Delete faults will reset active latching faults. Delete faults will not clear fault history'). Software 3.12 and 4.02 or higher: separate 'Clear Faults' menu, 'Clear all safety switch faults'.** | Write the applicable menu name on the record for the person who clears faults after repair. | If the version is not one of the ranges the manual lists, write it down and ask Genie Product Support which menu applies. |

**Why we are doing this.** Genie's rule (Service Manual p.83 and p.89): software 4.01 and higher uses the 2 Point Calibration procedure; software before 4.01 uses the 6 Point Calibration procedure. The 2-point method needs no measuring tool: the boom is simply put fully lowered and fully raised and the screen is answered YES. The 6-point method needs a digital level laid on top of the boom and read at six angles (primary boom 0, -50, -20, 10, 40 and 70 degrees; secondary boom -3.5, 20, 35, 50, 65 and 76 degrees), which means bringing Genie kit 58351 (digital level with magnetic base and cable harnesses) and planning a longer visit. Either way, the turntable level sensor and jib bellcrank sensor calibrations always need the digital level. The version also decides which fault-clearing menu exists on this machine (3.11-or-lower / 4.01 = "Delete Faults" menu; 3.12 / 4.02-or-higher = "Clear Faults" menu), and Genie requires the software revision when ordering a replacement TCON control box. This card only reads the screen. It does not start the engine, does not touch the bypass/recovery key switch, does not fit any calibration jumper or toggle, and does not enter any menu that changes settings.

**Safety**

- Pulling the red Emergency Stop button out powers the machine. Keep your hands off every function button; the Operator's Manual says the Emergency Stop 'to the on position' is what lets the machine operate.
- Engine stays OFF. Do not press engine start. Nobody in the platform. Machine on firm level ground, boom stowed, wheels chocked.
- Do not turn the bypass/recovery key switch and do not put a key in it. Leave it in RUN. Bypass and recovery are for the calibration technician and emergency recovery only.
- Do not fit the calibration toggle switch, door fastener or any jumper, and do not enter the Sensor Calibration, Default Reset or Clear Faults menus on this card. Genie: 'The key switch must be in the off position before entering the programming mode' and calibration 'must be completed by a person trained and qualified on the repair of this machine' (tip-over hazard).
- Never bypass, jumper or defeat any safety circuit, limit switch, angle sensor, tilt sensor or load cell. This card only reads a screen.
- Key OFF and Emergency Stop IN before anyone opens the ground control box or unplugs anything on a later card. This card keeps the box closed.
- Cold weather: the LCD needs to warm up before the display appears; wait rather than assuming the screen is dead.

**Open questions on this card**

- Display format and timing [M]: the manuals say only that the version 'is displayed on the LCD screen when the red Emergency Stop button is pulled out'. They do not say what prefix it carries or how many seconds it stays. That is why the card says to film the screen and repeat the E-stop cycle if it is missed.
- Platform Emergency Stop [M]: the pages read do not say whether the platform E-stop must be pulled out for the ground LCD to power up. The Operator's Manual step only requires key to ground and the ground E-stop out. If the LCD stays dark, note the platform E-stop position before calling the LCD dead.
- Which software this 2013 SN 1861 machine actually carries is unknown [M]. Genie requires the software revision when ordering a TCON box (PM p.61), so a replaced box could carry any version; the reading is the only reliable answer. A version below 3.0 would also change some menu wording (SM p.161/167 notes 'Models before software version 3.0').
- Kit 58351 is not in the Parts Manual text; the only source is the Service Manual note 'available through Genie Product Support'. Confirm availability and lead time with Genie before scheduling a 6-point visit.
- The 'Previous' button identity [M]: the photo shows an arrow button beside Plus, Minus and Enter; the manual names the fourth button 'Previous'. The pairing is inferred.
- Whether the 'TCON-SCON calibration inconsistent' fault will require the turntable level sensor to be recalibrated (which always needs the digital level, SM p.154) is not decided by this card. If it does, kit 58351 is needed regardless of the 2-point / 6-point result.
- All boom-angle calibration procedures require the axles fully extended, the drive enable zone and the engine running (SM p.83). Propel is dead and the axles are retracted, so those repairs must be complete before the calibration visit; this card does not cover how the axles are extended.

<details><summary>Sources for this card (48 checked statements)</summary>

- `[V]` For software 4.01 and higher use the 2 Point Calibration procedure; before 4.01 use the 6 Point procedure; the version is displayed on the LCD when the red Emergency Stop button is pulled out to the on position (primary boom angle sensor procedure, SM p.83). — *1268557.txt 6491-6496 (PDF page 97 = SM p.83)*
- `[V]` The same version rule is repeated in the secondary boom angle sensor calibration procedure (SM p.89). — *1268557.txt 6985-6990 (PDF page 103 = SM p.89)*
- `[V]` A digital level is only required for the 6 Point procedure. — *1268557.txt 6497-6498 (SM p.83)*
- `[V]` Kit 58351 is available through Genie Product Support and contains a digital level with a magnetic base and cable harnesses (jib bellcrank procedure, SM p.58). — *1268557.txt 4771-4774 (PDF page 72 = SM p.58)*
- `[V]` The same kit 58351 note appears in the primary boom angle sensor procedure (SM p.83). — *1268557.txt 6499-6502 (SM p.83)*
- `[V]` The jib boom bellcrank angle sensor calibration always requires a digital level. — *1268557.txt 4769-4770 (SM p.58)*
- `[V]` The turntable level sensor calibration always requires a digital level and cites kit 58351. — *1268557.txt 11010-11015 (PDF page 168 = SM p.154)*
- `[V]` Full machine calibration (SM p.105) requires a digital level and cites kit 58351. — *1268557.txt 7990-7995 (PDF page 119 = SM p.105)*
- `[V]` Kit 58351 is not listed in the Parts Manual text. — *106877.txt no match*
- `[V]` The LCD control buttons used in the calibration procedures are named Plus, Minus, Previous and Enter. — *1268557.txt 6503-6513 (SM p.83)*
- `[V]` The boom angle sensor calibration procedures must be performed on a firm level surface, booms fully stowed, in the drive enable zone and with the axles fully extended. — *1268557.txt 6514-6517 (SM p.83)*
- `[V]` Axle sensors, secondary boom angle sensor and turntable level sensor must be calibrated before the primary boom angle sensor if they were removed or replaced. — *1268557.txt 6478-6481 (SM p.83)*
- `[V]` The 6-point primary procedure places a digital level calibrated to gravity on top of the primary boom. — *1268557.txt 6587-6594 (PDF page 98 = SM p.84)*
- `[V]` The 6-point primary procedure starts the engine and fully raises the secondary boom, then reads the level at -50, -20, 10, 40 and 70 degrees. — *1268557.txt 6601-6687 (PDF pages 98-99 = SM pp.84-85)*
- `[V]` The 2 Point primary procedure is for software 4.01 and higher. — *1268557.txt 6767-6769 (PDF page 100 = SM p.86)*
- `[V]` The 2-point primary procedure uses the boom stowed (PRIMARY BOOM FULLY LOWERED) and fully raised at end of cylinder stroke (PRIMARY BOOM FULLY RAISED) with the secondary boom fully raised first; no level reading. — *1268557.txt 6817-6830 (PDF page 101 = SM p.87)*
- `[V]` The bypass/recovery key switch must be in the run position for normal operation. — *1268557.txt 6849-6850 (SM p.87)*
- `[V]` The Sensor Calibration menu for software before 4.01 lists six secondary boom angles (-3.5, 20, 35, 50, 65, 76 degrees) and primary angles starting 0, -50, -20 degrees. — *1268557.txt 8521-8600 (PDF page 126 = SM p.112)*
- `[V]` The Sensor Calibration menu for software 4.01 and higher lists only fully lowered / fully raised entries for the boom sensors and fully extended / retracted for the jib level cylinder. — *1268557.txt 8651-8721 (PDF page 127 = SM p.113)*
- `[V]` The Sensor Calibration menu is entered with key OFF, hold Enter, key on, then (plus)(enter)(enter)(plus); this card tells the technician not to use it. — *1268557.txt 8521-8527 (SM p.112)*
- `[V]` The key switch must be off before entering programming mode; calibration and parameter settings are for trained qualified persons (tip-over hazard). — *1268557.txt 8055-8060 (PDF page 120 = SM p.106)*
- `[V]` Machine Status screen: with key on, press plus and minus at the same time; it shows hydraulic pressure, primary-to-secondary boom angle, primary boom length, secondary boom angle, secondary boom length, jib bellcrank angle. — *1268557.txt 8128-8146 (PDF page 121 = SM p.107)*
- `[V]` Software 3.11 or lower and 4.01 have a Default Reset menu (minus)(minus)(previous)(previous) containing Delete Faults, which resets active latching faults but not fault history. — *1268557.txt 8177-8201 (SM p.107)*
- `[V]` Software 3.12 and 4.02 or higher have a separate Clear Faults menu (minus)(previous)(previous)(minus) for all safety switch faults. — *1268557.txt 8220-8251 (PDF page 122 = SM p.108)*
- `[V]` Overload Recovery menu exists only from software V3.07. — *1268557.txt 8171-8172 (SM p.107)*
- `[V]` Recovery mode procedure applies to software 1.11 and later; for 1.01 contact Genie Product Support (shows software versions on this model go back to 1.01). — *1268557.txt 7712-7715 (PDF page 115 = SM p.101)*
- `[V]` The ground control box contains a membrane decal with touch-sensitive buttons, an LCD circuit board inside the lid that controls the LCD display screen, and the ECM circuit board which stores all operating parameters and option configuration; ECM replacement requires full calibration. — *1268557.txt 7766-7780 (PDF page 116 = SM p.102)*
- `[V]` Full machine calibration starts with booms fully stowed and axles retracted, and lists the ten-item sequence ending with the primary boom angle sensor then the jib bellcrank sensor. — *1268557.txt 8008-8041 (PDF page 119 = SM p.105)*
- `[V]` The ground control box side of the machine is called the ground controls side and has a fixed turntable cover. — *1268557.txt 5947-5950 (PDF page 89 = SM p.75)*
- `[V]` Operator's Manual ground control panel legend: item 1 LCD readout screen with low fuel, engine oil pressure, water temperature, auxiliary power, high engine rpm indicators and hour meter. — *114474.txt 1353-1365 (PDF page 24 = OM p.22)*
- `[V]` Red Emergency Stop button: push in = off, stops all functions and engine; pull out = on to operate. — *114474.txt 1367-1371 (OM p.22)*
- `[V]` Main key switch has off / ground / platform positions; ground position makes the ground controls operate. — *114474.txt 1376-1381 (OM p.22)*
- `[V]` Bypass/recovery key switch is item 11 on the ground control panel; bypass is for platform-out-of-level (P22) only and recovery only for emergency recovery. — *114474.txt 1404-1410 (OM p.22)*
- `[V]` Item 20 on the ground control panel is the LCD screen control buttons. — *114474.txt 1465 (PDF page 25 = OM p.23)*
- `[V]` With key to ground and the Emergency Stop pulled out, the LCD screen comes on; in cold climates the LCD needs to warm up first. — *114474.txt 1829-1836 (PDF page 33 = OM p.31)*
- `[V]` Replacement TCON control box: 106512GT to SN 1711, 237069GT from SN 1712 (this machine is SN 1861); Genie requires model, serial number and software revision when ordering. — *106877.txt 3054-3065 (PM p.61, section 305.1)*
- `[V]` Ground control box lid 107714GT includes the membrane decal item 13. — *106877.txt 3067-3070 (PM p.61)*
- `[V]` The ground Emergency Stop is a red mushroom-head push button (66812GT). — *106877.txt 3077-3079 (PM p.61)*
- `[V]` The main key switch is a 3-position maintained key switch (66811GT). — *106877.txt 3094-3097 (PM p.61)*
- `[V]` The LCD window on the ground control box is the LCD lens, item 10, 62374GT. — *106877.txt 3118-3120 (PM p.61)*
- `[V]` The membrane decal (button face) of the ground control box is item 13, 106510GT. — *106877.txt 3155-3157 (PM p.63)*
- `[V]` On this machine the LCD is a pale grey window in a blue lid, showing an hourglass symbol and 2162.4; Plus, Minus, Enter (return arrow) and an arrow button sit below-left of the screen; decal 1263541 A above the screen reads '...Improper calibration can result in death or serious injury.' — *ground-display-hours.jpg figure ground-display-hours.jpg*
- `[V]` This machine's recorded hour reading is 2162.4 h. — *README.md 1-4*
- `[V]` Parts Manual figure 305.1 shows the ground control box as a metal box with a hinged lid carrying the E-stop, key switches and LCD window, mounted on a bracket. — *pm060-ground-controls.png figure pm060-ground-controls.png*
- `[V]` The bypass/recovery key switch decal shows three positions: Run, Bypass (P22) and Recovery. — *key-switch-decal.png figure key-switch-decal.png*
- `[M]` The arrow button below the LCD in the photo is likely the 'Previous' button named in the manual. — *ground-display-hours.jpg figure ground-display-hours.jpg; 1268557.txt 6510-6513*
- `[F]` The live fault list expected to reappear (boom angle crosscheck faults, zone fault, not calibrated, secondary boom switches fault, secondary sensor shorted / 0 V, TCON-SCON calibration inconsistent) is the owner's field observation on this machine's display. — *README.md case brief (field observation, not manual text)*
- `[M]` The exact on-screen format of the version (for example 'VER 4.01') and how long it stays visible are not stated in the manuals; the case walkthrough only expects 'Version such as VER x.xx'. — *diagnosis-walkthrough.md 85*

</details>


---

## E. Parts — every number checked

### E: Parts list, every number checked

**What this finds out.** Confirms what each part number on the shopping list really is, on which printed page of Parts Manual 106877 (PM) it appears, and whether this machine (serial Z13513-1861, parts group "from SN 1854") should get it. It also settles whether a whole new 6-way Deutsch connector for J114 can be ordered from the PM (it cannot; the PM lists no 6-way housing or wedge) and where the platform control box membrane and circuit board are drawn (PM figures 603.1 and 604.1).

**Where it is**

- *What it is:* Two areas. (1) Primary boom angle sensor with its 6-pin connector J114, inside the pivot end of the primary boom, behind the painted boom end cover. (2) Platform control box on the platform rail: the membrane lid, the membrane/LED circuit board and gasket under it, and the toggle switch position.
- *Where on the machine:* (1) Stand at the turntable beside the primary boom pivot (the large pin where the primary boom hinges). The painted cover on the pivot end of the primary boom (PM fig 511.2 item 6 = 106277PGT) comes off. (2) The platform control box is the steel box on the platform (basket) rail carrying four joysticks, the red mushroom E-stop and the membrane panel (PM fig 603.1, p.208).
- *How to find it:* (1) SM p.81 steps 1-2: "Remove the retaining fasteners from the boom end cover at the pivot end of the primary boom. Remove the cover from the machine." then "Locate the primary boom angle sensor inside the primary boom at the boom pivot pin." The connector is on the sensor pigtail. (2) SM p.29 step 2: "Remove the platform control box lid retaining fasteners. Open the control box lid." The two membrane ribbon cables plug into the circuit board on the underside of the lid (SM p.29 step 3).
- *What it looks like:* At the pivot: bright Genie-blue machined sensor base, holder and arm on a bracket at the pivot pin; a black Deutsch connector half moulded "DEUTSCH IPD USA DT04-6P" on a black corrugated loom; one loose gold pin contact; two blue Scotchlok taps joined by a green jumper (photos 2026-09-12-j114-dt04-6p-loose-pin.jpg, 2026-09-12-j114-pivot-hardware.jpg). Inside the platform box: green circuit board(s) with blue ribbon-cable connectors, two round joystick bases with grey Deutsch plugs, a black E-stop contact block marked NC, a blue Scotchlok on a white wire, and a generic black toggle switch marked "10A 250VAC" with three spade terminals on white wire (photos 2026-09-12-platform-box-interior-pcb.jpg, 2026-09-12-aftermarket-toggle-ac-rating.jpg).
- *Source:* SM p.81 (1268557.txt 6374-6382); SM p.29 (1268557.txt 2679-2683); PM p.168 fig 511.2 (pm168-pri-boom-sensor.png); PM p.208 fig 603.1 (pm208-platform-box-view1.png); field photos named above.

**Set the machine to**

- **Key:** OFF and removed. Do not use the bypass or recovery key positions (calibration tech only).
- **E-stops:** Both red Emergency Stop (E-stop) buttons pushed IN, at the ground controls and at the platform controls, before J114 is unplugged or the platform box lid is opened (SM p.29 step 1, SM p.81 step 3).
- **Battery:** Connected is fine for looking and photographing. Disconnect the battery before any ohm (resistance) check used to confirm a part.
- **Engine:** OFF. Nothing on this card needs the engine or hydraulics.
- **Also:** Axles stay retracted (8 ft 1 in) as found; boom stowed; machine on firm level ground; wheels chocked. Do not elevate. The plan removes the Scotchlok taps, green jumper, pink butt splice and the generic AC toggle switch; it never adds a bridge, tap or switch.

**Connector — J114 (primary boom angle sensor). J154 is the secondary boom angle sensor's twin.**

SM connector legend: J114 = "6 pin Deutsch connector for primary boom angle sensor (PBAS)" (SM p.206); J154 = "6 pin Deutsch connector for secondary boom angle sensor" (SM p.207). The half photographed on site is a Deutsch DT04-6P: a 6-cavity receptacle that carries PIN contacts. The Parts Manual lists no 6-way Deutsch DT housing, wedge (lock) or seal as a line item. Grep of 106877.txt for "6 WAY", "6-WAY", "DT06", "DT04" and "WEDGE" returns nothing; the only "6-pin" hit is 119613GT, a joystick adapter harness. The PM sells DT parts only in 2-way (60439GT lock), 3-way, 4-way (119067GT receptacle, 60443GT lock, 60429GT plug lock) and DTP sizes, and the loose pin contact 73713GT (pin, 14-18 AWG, strip form).

*Source:* SM p.206 (1268557.txt 15597-15599); SM p.207 (1268557.txt 15685-15687); photo 2026-09-12-j114-dt04-6p-loose-pin.jpg; 106877.txt grep = 0 hits; 106877.txt 10540-10542, 8639-8646, 8812-8813, 1341, 3365-3368, 3188.

| Pin | Wire name | Harness colour | Sensor colour | What it is | Goes to |
|---|---|---|---|---|---|
| 1 | P109ANG-GR/WH (5 V sensor supply, safety element S18) | RD (harness jumper, "UNIT #130 OR HIGHER") | RD (94980-type sensor drawn on ES0366J) | 5 V supply to the safety half of the sensor (S18-PRI BM ANG SAFETY) | J20 pin 11 on the schematic, wire P109ANG-GR/WH |
| 2 | SNSR GND-BR (sensor ground) | WH/BK | BK | Ground return for the safety half (S18) | J20 pin 12, wire SNSR GND-BR |
| 3 | C141PBS-RD (primary boom safety signal) | BL | BL | Safety signal (wiper of S18) to the SCON = safety controller | J20 pin 2, wire C141PBS-RD |
| 4 | C123PBS-RD/BK (primary boom operational signal) | WH | YL | Operational signal (wiper of S17-PRI BM ANG OPER) to the TCON = turntable controller, the main computer in the ground control box | J20 pin 6, wire C123PBS-RD/BK |
| 5 | SNSR GND-BR (sensor ground) | GR | BR | Ground return for the operational half (S17) | J20 pin 7, wire SNSR GND-BR |
| 6 | P109ANG-GR/WH (5 V sensor supply, operational element S17) | OR | OR | 5 V supply to the operational half of the sensor (S17) | J20 pin 10, wire P109ANG-GR/WH |

**Do this**

1. Read the serial plate: Z13513-1861. This puts the machine in PM figure 511.2 "Primary Boom Angle Sensor and Retract Limit Switch (from SN 1854)" (figure p.168, list p.169). Figure 511.1 (to SN 1853, p.167) does NOT apply. Order sensor parts from the 511.2 list.
2. Key OFF, both E-stops IN. At the primary boom pivot, with the boom end cover off (SM p.81), photograph both halves of J114. Count the cavities (6) and read the moulding ("DT04-6P" = receptacle that carries pin contacts). Note which half holds the loose pin and which wire colour it belongs to. Do not cut, tap, bridge or re-crimp anything on this card; Card B maps the wires first.
3. 216061GT = "SENSOR, ANGLE, 180 DEG, CW" (PM p.169, fig 511.2 item 17; also p.141 item 23 and p.189 item 28). PM note: "Sensor and magnet are matched and must be replaced at the same time. Machine calibration is required after installation." BUY THIS IF Card B proves the primary sensor itself is bad (shorted / 0 V with correct wiring) and the blue base, race, holder and arm are undamaged. Same sensor fits the secondary and jib bellcrank positions.
4. 215728GT = "ASSY,ANGLE SEN.,Z135 PRIMARY (Complete) Includes items 14 to 22; Calibration required after replacement" (PM p.169 item 10). Items 14-22 are: 217217GT screw, 226489GT primary sensor base, 226491GT angle sensor race, 216061GT sensor, 237242GT screw, 226492GT sensor holder, 237241GT screw, 233116GT sensor arm, 217219GT screw. BUY THIS IF the sensor AND its blue mounting parts are damaged, bent or loose, or the sensor-to-magnet alignment is in doubt.
5. 217246GT = "KIT,Z135 PRIMARY ANGLE SEN. (refer to 511.2)" (PM p.167, fig 511.1 item 14-; index lists p.167 only). It is the first-time replacement kit for to-SN-1853 machines whose original 94980GT sensor is no longer available. BUY THIS IF you are converting an older (to SN 1853) machine. Do NOT re-order it for SN 1861 unless Genie Service Parts says so; this serial group lists 215728GT / 216061GT instead.
6. 94980GT = "SENSOR,DUAL OUTPUT,ANGLE***" qty 3 (PM p.77, fig 308.1 item 30). PM note: "Older sensor part 94980 is no longer available for Boom Angle Sensor after SN 12853. For first time replacement order kit 217246 (refer to 511.2)". BUY THIS: never. It is listed only so nobody orders it and so its pigtail colours (RD, BK, BL, OR, BR, YL on ES0366J) can be recognised.
7. 73713GT = "TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP" (PM p.169 item 2-, also pp.67, 133, 139, 167, 173, 191). In the PM it is listed only as the pin contact of the 2-way and 4-way Deutsch DT limit-switch connectors. BUY THIS IF the loose pin at J114 (or its wire) is damaged and Card B shows that half is the pin-contact (DT04) half. Order a few; it is strip form. If the half is a DT06 plug, it takes a SOCKET contact instead (PM "TERMINAL, SOCKET, DT, 14-18 AWG", pp.67, 133, 139; number not on this card).
8. 60443GT = "LOCK, RECEP 4WAY, 14-18GA" (PM p.169 item 2-, also pp.35, 67, 133, 139, 167). This is the orange wedge lock for a 4-cavity DT receptacle (119067GT), used on the primary boom retract limit switch 110913GT at the same pivot. BUY THIS IF that 4-way limit-switch connector's wedge is missing or broken. Do NOT buy it for J114: J114 has 6 cavities and a 4-way wedge cannot fit.
9. Whole 6-way connector for J114: the PM has no line item for a 6-way DT housing, wedge or seal (grep "6 WAY", "DT06", "DT04", "WEDGE" = 0 hits). If the DT04-6P housing or its wedge is broken, ask Genie Service Parts (with the serial number) which assembly carries the J114 half: the harness half belongs to a harness in PM fig 308.1 (p.75-77; candidates 94961GT "HARNESS,PRIMARY COMPOSITE" or 226497GT "HARNESS,TCON Z135 from SN 1419"), the sensor half to 216061GT. A generic Deutsch DT04-6P / DT06-6S housing with W6P / W6S wedge from a Deutsch distributor is the likely field answer, but that is not manual-backed (see open questions).
10. 106277PGT = "COVER,PRIMARY BOOM,PAINTED" (PM p.169 fig 511.2 item 6; on p.167 fig 511.1 item 3- for "Europe, Asia, South America", alongside 107838GT "PRIMARY BOOM COVER W/DECAL" for "USA, Canada, Australia"). BUY THIS IF the boom end cover at the pivot is missing, cracked, or was cut to pass the improvised wiring. For the 511.2 group only 106277PGT is listed.
11. Platform box, key OFF and E-stops IN: open the lid (SM p.29). Figure pages: 603.1 "Platform Control Box, View 1" figure p.208, lists p.209 and p.211 (lid, membrane decal, joysticks, E-stop, box, platform level toggle). 604.1 "Platform Control Box, View 2" figure p.212, list p.213 (PCON harness, membrane/LED PCB 62399GT, gasket 81488GT, PCON circuit board 237072GT from SN 1712). 605.1 "Toggle Switch Lid Option" figures p.214 and p.216, lists p.215 and p.217.
12. 106509GT = "DECAL,MEMBRANE,PLATFORM CONTRO" (PM p.209 item 5A-). This is the pushbutton overlay with the electronic membrane on its back (SM p.29). BUY THIS IF the membrane is lifted, wet, cracked, or the display reports both buttons of a pair pressed (SM p.183 recovery action: "Check ribbon and connector from membrane switch. If necessary replace membrane switch."). Always buy 82841GT with it.
13. 82841GT = "DECAL,PLATFORM CONTROL PANEL" (PM p.209 item 5B-, note "required when replacing membrane 106509"; also decal lists p.13 item 29 and p.17 item 24). BUY THIS IF you buy 106509GT (mandatory pair) or the panel legend is unreadable. Optional clear protector over it: 82308GT "top clear protection for the platform box decal 82841".
14. 62399GT = "PCB,MEMBRANE/LED,SB/Z80" qty 1 (PM p.213 fig 604.1 item 3). This is the green board under the lid that the two membrane ribbon cables plug into and that carries the panel LEDs; it is held on nylon standoffs 110229GT with 6-32 nuts 62389GT. BUY THIS IF the board is corroded, a ribbon socket is damaged, or the both-buttons-pressed fault stays after a new membrane. Handle with ESD care (SM p.29).
15. 81488GT = "GASKET,PLATFORM CONTROL BOX" qty 1 (PM p.213 item 5; p.217 item 25). BUY THIS IF the lid seal is hardened, torn or missing; the box interior was found wet, so buy it whenever the lid comes off for membrane work.
16. 128200GT = "SWITCH TOGGLE ASSY SPDT 3P MOM". Standard lid: PM p.211 fig 603.1 item 14 "(Platform Level; includes boot and hardware)", sub-parts 128580-SGT switch, 27246GT boot, 128578GT screw. Toggle lid option: PM p.215 items 1, 5-15 (platform rotate, generator, drive enable, emergency power, axle extend/retract, glow plug, engine start, hi/low RPM, drive speed, steer mode x2). BUY THIS IF the OEM platform level toggle at the left end of the lid is damaged or was removed, or a toggle-lid position needs a switch. The generic "10A 250VAC" 3-spade switch is NOT this part and is removed, not replaced.
17. 27246GT = "BOOT,TOGGLE SWITCH,SHORT*" (PM p.211 item 14B-; p.215 item 2 "Part of toggle switch 128200"). BUY THIS IF only the rubber boot on an OEM toggle is torn or missing; 128200GT already includes it.
18. 237225GT = "KIT,TOGL SW PL BOX LID,ANSI / from SN 779 to 2000" (PM p.215 fig 605.1; siblings 237224GT to SN 778, 237226GT CE, 237227GT AUS). The kit is the factory toggle-switch lid: 229386GT "LID, PCON, TOG SW, Z135 (No Toggle Switches)", 232975GT "PCB, LED/TOGGLE SWITCH, ALC100" and 128200GT switches, wired per the ES0366J "TOGGLE SWITCH AFTERMARKET KIT SCHEMATIC" (J24 20-pin, J23 10-pin). BUY THIS IF the owner chooses to replace the membrane lid with the factory toggle lid. Not needed just to remove the aftermarket switch; for a drilled standard lid buy 107798GT "LID,PLAT CONTROL BOX W/DECAL" (PM p.209 item 5) instead.
19. 58351 = digital level kit. SM only: "Note: A kit is available through Genie Product Support (Genie part number 58351). This kit includes a digital level with a magnetic base and cable harnesses." (SM pp.58, 83, 89, 105, 154). Not in the PM (grep 58351 and "digital" = 0 hits). BUY THIS IF the calibration technician does not already own a digital level: the SM requires one for full machine calibration (p.105) and for the 6-point boom sensor calibration used on software before 4.01 (p.83, p.89). Ordering is through Genie Product Support, not the parts counter.
20. Write every number ordered, with its PM page and the card (B, C or D) that justified it, into the changelog. Any number Genie reports as superseded goes into open questions with the replacement.

**You should see**

| Measurement | Expected | If that is what you get | If not |
|---|---|---|---|
| Serial plate number against the PM section headings | **Z13513-1861 is at or above SN 1854, so fig 511.2 (p.168-169) applies** | Order sensor parts as 215728GT or 216061GT from p.169 | If the plate reads 1853 or lower, fig 511.1 (p.167) applies and 217246GT is the first-time kit |
| Cavity count and moulding on the J114 half with the loose pin | **6 cavities, moulded DT04-6P (receptacle, pin contacts)** | Loose or damaged contact is a pin: 73713GT type (14-18 AWG) | If the half is a DT06 plug it takes a socket contact, a different PM number ("TERMINAL, SOCKET, DT, 14-18 AWG"); confirm before ordering |
| Visual check of the blue sensor mounting parts at the pivot (base 226489GT, race 226491GT, holder 226492GT, arm 233116GT) | **Straight, tight, undamaged** | If Card B condemns the sensor, order 216061GT only (sensor and matched magnet) | Order 215728GT complete assembly (items 14-22) |
| Platform box membrane and gasket inspection with lid open | **Membrane flat and dry, gasket pliable and continuous, no corrosion on the green PCB** | No platform-box parts needed beyond removing the aftermarket switch | Membrane: 106509GT plus 82841GT. Gasket: 81488GT. Board corroded or fault persists after new membrane: 62399GT |
| PM index lookup for each of the 14 PM numbers | **Each number appears on the printed page quoted on this card** | Number confirmed | Flag it; do not order |
| PM text search for a 6-way Deutsch DT housing or wedge | **Zero hits for "6 WAY", "6-WAY", "DT06", "DT04", "WEDGE"** | No OEM line item exists; ask Genie Service Parts which assembly carries the J114 half | If a later PM revision adds one, use that number and update this card |
| Software version on the ground LCD when the E-stop is pulled out (read only; no calibration on this card) | **4.01 or higher** | 2-point boom sensor calibration; digital level 58351 needed only for full machine calibration | 6-point procedure; digital level required |

**Why we are doing this.** One wrong number costs a week and the money. 60443GT is a 4-way wedge and will not fit the 6-pin J114; 94980GT cannot be bought at all; 217246GT is the retrofit kit for older machines, not this serial group. This card tells the buyer which numbers to order once Cards A to D have proved what is broken, which numbers to leave alone, and what to ask Genie Service Parts when the manual has no answer.

**Safety**

- Key OFF and both E-stops IN before unplugging J114 or opening the platform control box lid (SM p.29 step 1; SM p.81 step 3). Battery disconnected before any ohm (resistance) check.
- This card removes bypasses; it never adds one. Do not re-tap, bridge, jumper or splice any J114 wire, and do not fit any switch that defeats a tilt sensor, angle sensor, limit switch or load cell.
- Do not use the bypass or recovery key positions and do not fit the calibration jumper or toggle. Calibration is for the calibration technician: "Calibration procedures shall only be completed by qualified technicians that have Genie factory service training" (SM p.105).
- Every sensor part on this list (216061GT, 215728GT) carries the PM note "Machine calibration is required after installation". Tip-over hazard: the machine must not return to service after a sensor change until calibrated in the manufacturer's order (SM p.105).
- Electrostatic discharge (ESD): keep firm contact with a grounded metal part of the machine or wear a grounded wrist strap when handling the platform circuit boards; remove rings and watches (SM p.29).
- Machine on firm level ground, boom stowed, wheels chocked (SM p.81 note). Do not elevate a machine whose safety envelope is faulted.
- Only 128200GT-type switches belong in the platform box. The generic AC-rated toggle with no boot and no OEM circuit is a foreign part; it is removed (Card D), never re-terminated.

**Open questions on this card**

- Which half of J114 is the DT04-6P with the loose pin: the harness side or the sensor pigtail? The photo shows red, blue, yellow, green and white wires plus the loose one; that set matches neither the ES0366J harness column (RD, WH/BK, BL, OR, GR, WH) nor the 94980-type sensor column (RD, BK, BL, OR, BR, YL). Card B must map it before any 73713GT pin is crimped.
- The PM sells no 6-way Deutsch DT housing, wedge or seal. If the DT04-6P housing or wedge is broken, the manual-backed route is the assembly that carries it (harness per fig 308.1, or the sensor 216061GT); ask Genie Service Parts with SN Z13513-1861. A generic Deutsch DT04-6P / DT06-6S housing with W6P / W6S wedge from a distributor is the likely field answer [M], not a manual fact.
- Is 73713GT (listed only for 2-way and 4-way DT limit-switch connectors) the contact used in the 6-way J114? Likely yes (Deutsch DT size-16 contact) [M]; the manuals do not say.
- Was the bright blue hardware at the pivot fitted as kit 217246GT (listed only under fig 511.1, to SN 1853) or as a 215728GT assembly (fig 511.2, this machine's group)? The PM cannot tell them apart. The buy decision does not depend on it, but do not re-order 217246GT for SN 1861 without Genie confirming.
- PM p.77 says "after SN 12853"; Z-135/70 serials run to 2000, so this is likely a misprint for 1853 [M].
- The "SPDT 3P MOM" expansion for 128200GT is a reading of the abbreviation [M]. Confirm the switch's function with Genie before using it anywhere other than the OEM positions on figs 603.1 and 605.1.
- The 216061GT pigtail colours are not in the manuals [M]; Card B must identify the sensor's wires by ohm test with the battery disconnected, not by colour.
- If Card C proves the secondary sensor itself bad, its parts are in fig 502.2 (PM p.141, 216061GT item 23) with first-time kit 217238GT or 824587 (p.135); those numbers are not on this list and were not fully checked here.
- 58351 is "available through Genie Product Support", not a PM line item; confirm current availability, and read the software version on the LCD (4.01 or higher uses the 2-point boom sensor calibration that needs no level) before buying.
- The PCON circuit board (237072GT from SN 1712) needs "Machine model, serial number and software revision" to order; only relevant if Card D proves the PCON bad. Not on this list.
- The case file cites the membrane recovery text as SM p.176; the extracted text places it on SM p.183 (PDF 197). The J154 legend entry is on SM p.207 (PDF 221), not p.206.

<details><summary>Sources for this card (75 checked statements)</summary>

- `[V]` 73713GT is "TERMINAL, PIN, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP", PM p.169 fig 511.2 item 2- (component of limit switch 110913GT) — *106877.txt 8644-8646 (page marker 8617 = PAGE 169)*
- `[V]` 73713GT index pages 67, 133, 139, 167, 169, 173 and more — *106877.txt 18245-18247*
- `[V]` 60443GT is "LOCK, RECEP 4WAY, 14-18GA", PM p.169 item 2- — *106877.txt 8641-8643*
- `[V]` 60443GT index pages 35, 67, 133, 139, 167, 169 — *106877.txt 17873-17875*
- `[V]` 60443GT is paired with the 4-way DT receptacle 119067GT and pin 73713GT under limit switch 110913GT LSP1RO on p.169 — *106877.txt 8626-8646*
- `[V]` 237225GT is "KIT,TOGL SW PL BOX LID,ANSI from SN 779 to 2000", PM p.215 — *106877.txt 10788-10790 (page marker 10777 = PAGE 215)*
- `[V]` Sibling kits: 237224GT to SN 778; 237226GT CE from SN 779 to 2000; 237227GT AUS from SN 1512 to 2000 — *106877.txt 10783-10800*
- `[V]` Fig 605.1 "Toggle Switch Lid Option" figure pages 214 and 216, lists pages 215 and 217 — *106877.txt 10771-10774, 10913-10916, 10922-10925, 10943-10946*
- `[V]` 237225GT index page 215 — *106877.txt 20457-20458*
- `[V]` 128200GT is "SWITCH TOGGLE ASSY SPDT 3P MOM (Platform Level; includes boot and hardware)" qty 1, PM p.211 fig 603.1 item 14 — *106877.txt 10677-10682 (page marker 10672 = PAGE 211)*
- `[V]` Sub-parts of the platform level toggle: 14A- 128580-SGT "SWITCH TOGGLE SPDT 3P MOM SHDR", 14B- 27246GT boot, 14C- 128578GT "SCREW T-SWITCH PH/PH 6-32X1/4" — *106877.txt 10683-10691*
- `[V]` 128200GT is every toggle in the lid-option kit: item 1 Platform Rotate, 5 Optional equipment, 6 Generator ON/OFF, 7 Drive Enable, 8 Emergency Power, 9 Axle Extend/Retract, 10 Glow Plug, 11 Engine Start, 12 Hi/Low RPM, 13 Drive Speed, 14 and 15 Steer Mode (PM p.215) — *106877.txt 10802-10874*
- `[V]` 128200GT index pages 211, 215 — *106877.txt 20039-20040*
- `[V]` 27246GT is "BOOT,TOGGLE SWITCH,SHORT*", PM p.211 item 14B- — *106877.txt 10686-10688*
- `[V]` 27246GT on PM p.215 item 2 qty 1, "Part of toggle switch 128200" — *106877.txt 10807-10812*
- `[V]` 27246GT index pages 211, 215 — *106877.txt 17187-17188*
- `[V]` 106509GT is "DECAL,MEMBRANE,PLATFORM CONTRO", PM p.209 item 5A- — *106877.txt 10568-10570 (page marker 10534 = PAGE 209)*
- `[V]` 106509GT index page 209 — *106877.txt 19407-19408*
- `[V]` 82841GT is "DECAL,PLATFORM CONTROL PANEL", "required when replacing membrane 106509", PM p.209 item 5B- — *106877.txt 10571-10574*
- `[V]` 82841GT also on decal pages PM p.13 item 29 and p.17 item 24, qty 1, with clear protector 82308GT "top clear protection for the platform box decal 82841" — *106877.txt 448-455 (PAGE 13) and 755-762 (PAGE 17)*
- `[V]` 82841GT index pages 13, 17, 209 — *106877.txt 18499-18500*
- `[V]` 62399GT is "PCB,MEMBRANE/LED,SB/Z80" qty 1, PM p.213 fig 604.1 item 3, mounted on standoffs 110229GT with nuts 62389GT — *106877.txt 10720-10729 (page marker 10709 = PAGE 213)*
- `[V]` 62399GT index page 213 — *106877.txt 18101-18102*
- `[V]` Fig 604.1 "Platform Control Box, View 2" figure PM p.212, list p.213 — *106877.txt 10703-10706 and 10762-10765*
- `[V]` 81488GT is "GASKET,PLATFORM CONTROL BOX" qty 1, PM p.213 item 5 and p.217 item 25 — *106877.txt 10730-10733 and 10933-10936*
- `[V]` 81488GT index pages 213, 217 — *106877.txt 18441-18442*
- `[V]` 217246GT is "KIT,Z135 PRIMARY ANGLE SEN. (refer to 511.2)", PM p.167 fig 511.1 item 14- — *106877.txt 8554-8557 (page marker 8494 = PAGE 167)*
- `[V]` PM p.167 item 14 reference note: older sensor 94980 no longer available at this location; first-time replacement is kit 217246 — *106877.txt 8549-8551*
- `[V]` 217246GT index lists only page 167 — *106877.txt 20281-20282*
- `[V]` Fig 511.1 is "Primary Boom Angle Sensor and Retract Limit Switch (to SN 1853)" p.167; fig 511.2 is "(from SN 1854)", figure p.168, list p.169 — *106877.txt 8602-8605, 8611-8614, 8718-8721*
- `[V]` 216061GT is "SENSOR, ANGLE, 180 DEG, CW"; "Sensor and magnet are matched and must be replaced at the same time. Machine calibration is required after installation." PM p.169 item 17 — *106877.txt 8691-8695*
- `[V]` 216061GT is also the secondary boom sensor (PM p.141 item 23) and jib bellcrank sensor (PM p.189 item 28); index 141, 169, 189 — *106877.txt 7267-7271 (PAGE 141), 9573-9577 (PAGE 189), 20265-20266*
- `[V]` 215728GT is "ASSY,ANGLE SEN.,Z135 PRIMARY (Complete) Includes items 14 to 22; Calibration required after replacement", PM p.169 item 10 — *106877.txt 8668-8672*
- `[V]` Items 14-22 of fig 511.2: 217217GT screw M4, 226489GT primary sensor base, 226491GT angle sensor race, 216061GT sensor, 237242GT screw M3x8, 226492GT angle sensor holder, 237241GT screw M3x14, 233116GT sensor arm, 217219GT screw M4 — *106877.txt 8682-8711*
- `[V]` 215728GT index page 169 — *106877.txt 20263-20264*
- `[V]` Fig 511.2 also lists 233118GT "WLDT, SENSOR ROTATOR #2" item 8 and 218757GT "WLDT., PRIMARY SENSOR PIN" item 9 (the bright blue hardware seen on site) — *106877.txt 8662-8667*
- `[V]` 94980GT is "SENSOR,DUAL OUTPUT,ANGLE***" qty 3, PM p.77 fig 308.1 item 30, no longer available; first-time replacement kit 217246 — *106877.txt 3953-3960 (page marker 3865 = PAGE 77)*
- `[V]` 94980GT index page 77 only — *106877.txt 18784-18785*
- `[V]` Secondary and bellcrank positions carry the same no-longer-available note with their own kits (217238 or 824587 for the secondary; 217313, 824589 or 824692 for the bellcrank) — *106877.txt 6974-6976 (PAGE 135), 9288-9290 (PAGE 183)*
- `[V]` 106277PGT is "COVER,PRIMARY BOOM,PAINTED", PM p.169 fig 511.2 item 6 — *106877.txt 8656-8658*
- `[V]` On PM p.167 fig 511.1, 107838GT "PRIMARY BOOM COVER W/DECAL" is for USA, Canada, Australia and 106277PGT (item 3-) for Europe, Asia, South America — *106877.txt 8505-8515*
- `[V]` 106277PGT index pages 167, 169 — *106877.txt 19366-19367*
- `[V]` 58351 is the Genie digital level kit with magnetic base and cable harnesses, available through Genie Product Support (SM p.58, p.83, p.89, p.105, p.154) — *1268557.txt 4771-4774 (PAGE 72 = p.58), 6499-6502 (PAGE 97 = p.83), 6993-6996 (PAGE 103 = p.89), 7992-7995 (PAGE 119 = p.105), 11012-11015 (PAGE 168 = p.154)*
- `[V]` 58351 does not appear in the Parts Manual; neither does the word "digital" — *106877.txt grep, 0 hits*
- `[V]` SM p.83: software 4.01 and higher uses the 2-point boom sensor calibration; a digital level is only needed for the 6-point procedure; the software version shows on the LCD when the E-stop is pulled out — *1268557.txt 6491-6498 (PAGE 97 = p.83)*
- `[V]` SM p.105 6-4 Full Machine Calibration requires a digital level and is required after TCON or SCON replacement; calibration only by Genie factory-trained technicians; tip-over hazard — *1268557.txt 7972-7991 (PAGE 119 = p.105)*
- `[V]` The PM contains no 6-way Deutsch DT housing, wedge or seal line item — *106877.txt grep, 0 hits*
- `[V]` The only "6-pin" hit in the PM is the joystick adapter harness 119613GT, not a Deutsch housing — *106877.txt 10540-10542 (PAGE 209) and 11007-11009 (PAGE 219)*
- `[V]` Deutsch DT parts the PM does list: 2-way 60439GT "CONN, RECEP, 2 WAY, DEUTSCH, DT, LOCK", 3-way "CONN, RECEP, 3 WAY, DEUTSCH, DT, ENDCAP", 4-way 119067GT receptacle, "CONN PLUG 4 WAY EXTEND DT" with 60429GT "LOCK, PLUG 4WAY, 14-18GA", and DTP "CONN, RECEP, 4 WAY, DEUTSCH, DTP, FLANGE" — *106877.txt 8812-8813, 1341, 3365-3368, 3188*
- `[V]` The PM lists a DT socket contact "TERMINAL, SOCKET, DT, 14-18 AWG, NICKEL, 0.095-0.150 OD, DEUTSCH, STRIP" (for plug halves); its part number is not captured on this card — *106877.txt 906, 6879, 7222*
- `[V]` PM fig 308.1 harness candidates: item 9 94961GT "HARNESS,PRIMARY COMPOSITE***" (p.75); item 1- 226497GT "HARNESS,TCON Z135 from SN 1419" (p.75); 94966GT "HARNESS,PCON" (p.77 item 14, p.213 item A-) — *106877.txt 3840-3842, 3742-3745, 10714-10716*
- `[V]` SM connector legend: J114 = 6 pin Deutsch connector for primary boom angle sensor (PBAS), SM p.206 — *1268557.txt 15597-15599 (PAGE 220 = p.206; header lines 15538-15544 print "206")*
- `[V]` SM connector legend: J154 = 6 pin Deutsch connector for secondary boom angle sensor, SM p.207 — *1268557.txt 15685-15687 (PAGE 221 = p.207)*
- `[V]` J114 harness jumper colours (Unit #130 or higher) pin 1 RD, 2 WH/BK, 3 BL, 6 OR, 5 GR, 4 WH; sensor pigtail 1 RD, 2 BK, 3 BL, 6 OR, 5 BR, 4 YL; wires P109ANG-GR/WH, SNSR GND-BR, C141PBS-RD, C123PBS-RD/BK; from J20 pins 11, 12, 2, 10, 7, 6; elements S18-PRI BM ANG SAFETY and S17-PRI BM ANG OPER — *es-j114-primary-sensor.png figure (ES0366J crop, SM p.229)*
- `[V]` SM p.81 4-8 Primary Boom Angle Sensor: machine on firm level surface, boom stowed; remove the boom end cover at the pivot end of the primary boom; sensor is inside the primary boom at the boom pivot pin; disconnect the electrical connector from the sensor — *1268557.txt 6363-6382 (PAGE 95 = p.81)*
- `[V]` SM p.82: after fitting the sensor, install the primary boom end cover and calibrate the primary boom angle sensor — *1268557.txt 6443-6446 (PAGE 96 = p.82)*
- `[V]` SM p.29 1-2 Membrane Decal: the membrane decal is a decal with an electronic membrane on its back; E-stops in at both controls; remove the lid fasteners and open the lid; tag and disconnect the two ribbon cables from the membrane circuit board — *1268557.txt 2664-2683 (PAGE 43 = p.29)*
- `[V]` SM p.29: ESD warning and the LED circuit board on the platform control box lid with plastic spacers — *1268557.txt 2691-2699 and 2642-2647*
- `[V]` SM fault table p.183 recovery action for a membrane switch pair reading both closed: check ribbon and connector from membrane switch; replace membrane switch if necessary — *1268557.txt 13148-13155 (PAGE 197 = p.183)*
- `[V]` Fig 603.1 "Platform Control Box, View 1" figure PM p.208, lists p.209 and p.211; figure shows item 14 toggle at the left end of the lid, item 5 lid, item 8 E-stop, item 10 box, item 1 joysticks — *pm208-platform-box-view1.png figure; text 106877.txt 10528-10531, 10657-10660, 10694-10697*
- `[V]` 107798GT is "LID,PLAT CONTROL BOX W/DECAL" qty 1, PM p.209 item 5; item 5C- "Refer to 605.1 Optional kit for Toggle Switch Lid replacement" — *106877.txt 10564-10579*
- `[V]` 106513GT is "CONTROL BOX ASSY,PCON", PM p.209 item 10 — *106877.txt 10635-10637*
- `[V]` PCON circuit board: 217571GT to SN 1711; 237072GT "PCB,ASSY,ECM,PLATFORM,V307" from SN 1712, machine model, serial number and software revision required when ordering (PM p.213 item 10/10-) — *106877.txt 10747-10758*
- `[V]` Toggle lid kit contents include 229386GT "LID, PCON, TOG SW, Z135 (No Toggle Switches)" item 19 and 232975GT "PCB, LED/TOGGLE SWITCH, ALC100" item 22 (PM p.215) — *106877.txt 10888-10904*
- `[V]` ES0366J carries a "TOGGLE SWITCH AFTERMARKET KIT SCHEMATIC" with toggles TS17 generator on/off, TS1 auxiliary pump, TS6 start assist, TS2 engine start, TS15 drive enable, TS23 axle ext/ret, TS4 engine speed, TS5 drive speed, TS22 steer mode select x2, TSx spare, landing on J24 20-pin of the LED/TOGGLE SWITCH INTERFACE PCB, with J23 10-pin to the PCON — *es-toggle-switch-aftermarket-kit.png figure (ES0366J crop, SM p.229)*
- `[V]` PM fig 511.2 drawing: cover item 6 over the pivot end of the primary boom; retract limit switch items 1-2 on top of the boom; sensor assembly items 14-22 exploded at the bottom; pin items 23-24 — *pm168-pri-boom-sensor.png figure (PM p.168)*
- `[V]` Field: J114 half is moulded "DEUTSCH IPD USA DT04-6P"; one gold pin contact hangs loose; red, blue, yellow, green and white wires enter the housing from a black corrugated loom; a green jumper wire runs past — *2026-09-12-j114-dt04-6p-loose-pin.jpg photo*
- `[V]` Field: two blue Scotchlok IDC taps on yellow and green wires next to the bright-blue painted pivot bracket and Deutsch plug — *2026-09-12-j114-pivot-hardware.jpg photo*
- `[V]` Field: the aftermarket toggle is marked "10A 250VAC 15A 125VAC 3/4HP 125-250VAC MEXICO 9614", three spade terminals with insulated crimps, white wires, no boot — *2026-09-12-aftermarket-toggle-ac-rating.jpg photo*
- `[V]` Field: platform box interior shows green circuit board(s) with blue ribbon-cable connectors, two round joystick bases with grey Deutsch plugs, a black E-stop contact block marked NC, a blue Scotchlok on a white wire and a red butt splice — *2026-09-12-platform-box-interior-pcb.jpg photo*
- `[M]` "SPDT 3P MOM" read as single-pole double-throw, three-position, momentary; the manuals do not expand the abbreviation — *106877.txt 10679*
- `[M]` A DT04-6P receptacle takes pin contacts and a W6P wedge; a DT06-6S plug takes socket contacts and a W6S wedge; Deutsch DT uses the same size-16 contact in every cavity count, so 73713GT likely fits J114. Not stated in any of the three manuals — *106877.txt 8645-8646, 3350-3351, 8815-8816*
- `[M]` Which harness assembly carries the J114 harness half (the jumper marked "UNIT #130 OR HIGHER" between J20 and J114) is likely the primary composite harness 94961GT or the TCON harness 226497GT; the PM does not say — *106877.txt 3732-3846*
- `[M]` The 216061GT sensor's own pigtail wire colours are not given in the three manuals; ES0366J shows the 94980-type colours — *es-j114-primary-sensor.png figure*
- `[M]` "after SN 12853" on PM p.77 is likely a misprint for SN 1853, matching fig 511.1 "to SN 1853" and 511.2 "from SN 1854" — *106877.txt 3956-3957*

</details>


---
## F. The decision that ends this job

Nothing today makes the machine drive. Propel stays off until the crosscheck faults clear, and they clear only when the wiring is right **and** a calibration has been run.

1. **Restore J114 to factory before anyone calibrates.** Scotchloks out, proper Deutsch terminals in, every pin in its correct cavity, the bonding wire replaced by a repaired ground conductor. A calibration run over improvised splices will fail or store bad data — which is very likely how the *TCON–SCON calibration inconsistent* fault got there in the first place.
2. **Book the Genie-trained tech somewhere with room to extend the axles.** The full machine calibration runs in a fixed order and the boom angle steps need the axles **fully extended** — you cannot do it on a narrow track. Firm, level ground and about 13 ft of width, or the visit is wasted. `[V]` SM p.105
3. **Book the annual inspection for after the repair.** A CSA B354.4 annual inspection by a qualified person is required before this machine goes back in service after control-system work.


---
## Everything still unresolved

- **crosscheck** — 'Primary boom angle zone fault' and 'TCON-SCON calibration inconsistent' are not in the October 2018 Service Manual. There is no 'zone fault' entry (the word 'zone' appears only as 'drive enable zone' and 'drive disable zone'), and 'inconsistent' has no hits in any of the three manuals. Their meaning here is inference, tagged M: likely newer-software wording for a calibration mismatch between the two controllers. Record the exact display wording and the software version from the E-stop-out screen and ask Genie Product Support for the definition.
- **crosscheck** — The sensor ground wire SNSR GND - BR carries no circuit number anywhere in the schematic or the pin lists. The wire legend does list a circuit 110 'Sensor Return', but gives its colour as BK (black), not brown. So calling the brown sensor ground 'circuit 110' is likely correct in function but is NOT confirmed by the manual, and this card does not state it as fact. Identify that wire by its printed name SNSR GND, not by a circuit number.
- **crosscheck** — Colour conflict inside the manual for S140ENL: the pin lists on SM pp.209 and 210 say OR/RD, while the P11 and P30 fault entries on SM p.175 say 'orange/black'. Identify the wire by its printed circuit name, not colour alone.
- **crosscheck** — Colour conflict inside the manual for circuit 124: the wire legend on SM p.199 says RD/WH, while the TCON pin list on SM p.210 and schematic ES0366J both say C124SBS - OR/BK. Same remedy: identify by printed name C124SBS.
- **crosscheck** — The SM p.189 chart has no P_7R column, so the manual does not say whether a crosscheck fault touches P_7R (wire S56PRV, the foot-switch and E-stop power for the proportional valves). This card assumes it does not. Verify on the machine by whether the P7 or P7R messages appear.
- **crosscheck** — Whether the 217246GT kit fitted on this machine truly carries two independent sensing elements like the original 'DUAL OUTPUT' 94980GT is unresolved. The figure 511.2 drawing prints callout 17 (216061GT) twice, but the quantity column was lost in text extraction and the parts list never says two elements or two outputs. Confirm on the J114 card by counting the sensor leads and which cavity each occupies.
- **crosscheck** — The manuals assign no pin terminal part number to the 6-way J114 or J154 connectors. 73713GT is listed on PM p.169 only as a sub-part of the LSP1RO limit-switch assembly's 4-way Deutsch connector. Confirm the correct 6-way DT terminal with Genie Product Support before ordering.
- **crosscheck** — Which cavity the loose gold pin belongs to, and which two conductors the Scotchlok and green-jumper loop actually bridges, are unknown until the J114 card measures them. Do not assume it is pins 3 and 4. Wire colour is no help here: the photo colours do not match the factory sensor lead colours, so the sensor side has been re-terminated at some point.
- **crosscheck** — The manual prints the fault-table wording (the SM p.189 chart rows and the SM pp.177-180 entries) but not the exact strings the display shows. The display's 'crosscheck fault' text is being matched to the p.189 chart rows by name, not by a documented one-to-one list.
- **crosscheck** — The display line 'secondary boom switches fault' has more than one possible manual counterpart: the two LSS1RS / LSS1RO entries on SM p.188, or the SM p.189 chart row 'Secondary Boom length (crosscheck LSS1RS and LSS1RO)'. Those are different faults with different consequences - the p.189 chart row also cuts P_9B (ignition/fuel), which would stop the engine, and the engine runs. Get the exact display wording before deciding which it is.
- **crosscheck** — Whether calibration must be repeated on both controllers after simply re-pinning J114, with no sensor change, is not stated in so many words. The live 'not calibrated' fault implies yes for the primary at least, and the SM p.105 order puts the secondary boom angle sensor first.
- **setup** — The original card had the technician read the TCON '5.0 VDC' LED with the ground control box lid open in STATE A (key ON). That has been REMOVED from this card. It contradicted this card's own rule that the box is only opened in State B, and it contradicts the Service Manual, whose only procedure for opening this box begins 'Push in the red Emergency Stop button to the off position at both the ground and platform controls' (SM p.103) with the standard configuration 'Key switch in the off position with the key removed' (SM p.24). The fault table names the LED check but gives no key state at all (SM p.177). Unresolved: the LED cannot light with the machine dead, so whoever writes the card that needs this reading must decide how to take it and say plainly that it departs from SM p.103. This setup card does not authorise it.
- **setup** — Meter ranges (20 V DC, 200 ohm, continuity beep), the 12-13 V resting battery figure and 'negative cable first' are ordinary practice, not manual statements - all tagged [M]. The manuals say only 'a voltmeter set to DC voltage' and 'tag and disconnect the cables'.
- **setup** — The reasoning for never pulling an AMP plug live (latching new faults, momentarily bridging a battery-voltage pin onto a 5 V pin) is tagged [M]. The manual supports the RULE - E-stops in, key off, wrist strap - but never spells out the mechanism.
- **setup** — The claim that turning the key on is acceptable because the retracted axles lock out the boom is judgement, tagged [M], not a manufacturer permission. Turntable rotate to 15 degrees and auxiliary power remain live.
- **setup** — Whether merely loosening or moving the SCON (as opposed to replacing it) forces a full machine calibration is NOT stated in the manuals - they condition it on replacement only. This card words it as likely [M] and simply forbids touching the module.
- **setup** — Which engine is fitted (Deutz/Perkins vs Cummins) decides whether the SM p.211 or the SM p.212 fuse legend applies. The serial-plate photo shows 62 kW but not the make. Confirm from the engine decal; the two layouts differ in CR28's name and in whether CR15 exists.
- **setup** — Manual conflict, unresolved: the connector legend (SM p.205) says 'J15 Black 4 pin DTP connector on PCON', but the Turntable Controller Pin Legend (SM p.210) lists J15 as a Turntable Controller plug carrying B1BAT-RD and two GND-BR, and the ground-box parts list includes a 4-way flange-mount Deutsch DTP receptacle (73717GT). Treat the 4-way receptacle on the ground box as the TCON battery feed until proven otherwise.
- **setup** — Whether the auxiliary batteries can back-feed the control circuit through the 100 A dual battery separator when only the starting battery is disconnected is not stated anywhere. That uncertainty is exactly why this card follows the Operator's Manual and disconnects both sets.
- **setup** — The key switch cover weldment (215590GT, item 15) is drawn beside the bypass/recovery switch in the parts figure. Whether it is fitted on this machine, and whether it is meant to lock the switch, is unknown - photograph it.
- **setup** — The calibration toggle switch inside the ground box (56457-SGT) may be found already in the left/calibration position, given the 'not calibrated' and 'TCON-SCON calibration inconsistent' codes. This card only records its position; it does not move it.
- **setup** — The seven live fault codes are a field reading off the LCD (tagged [F], not [V]); only the P_38 propel lock-out half is manual-verified from the SCON fault matrix on SM p.189. Re-read the display in State A and record what is actually there.
- **setup** — The colour and material of the ground control box and of the relay cover are not given in any of the three manuals, so no colour or material is asserted here. The Cummins-only fuse cover is listed as a 'FORMING', which in this parts manual denotes sheet metal.
- **b1-toggle** — The switch type is unknown until measured. It has six terminals in two rows of three (verified from the photo), which makes a double-pole body likely [M] - but no nameplate, part number or manual entry names the type. All 15 terminal pairs must be probed in every lever position before anyone writes 'SPDT' or 'DPDT' on the card.
- **b1-toggle** — Why three of the six terminals are bare is unknown. It may be a double-pole switch with only one pole used, or a three-position body wired on one side only. Do not guess - report the measured pattern.
- **b1-toggle** — Which exact machine wires the three white conductors land on is unknown until the ring-out is done. The photo-based guesses (a red wire at the E-stop NC contact block; an orange/black wire at the Scotchlok) are 'likely' only [M] and must be replaced by measured results traced to a named connector pin.
- **b1-toggle** — The 'mid-boom Scotchlok' and the 'turntable white wire end' are likely one and the same splice [M]. The two photographs show the same tap, the same white + orange/black + red trio, the same grey two-pin plug and the same background, with the TILT SENSOR carton in frame in one of them. Confirm physically in the field, and note that the white wire's own far end has not been seen in any photo - it continues past the tap.
- **b1-toggle** — The grey two-pin plug that the red and orange/black wires enter has not been identified. It is grey, not black, and nothing in the photo proves it is a Deutsch connector [M]. It does not match any connector-legend entry on description alone. Identify it physically.
- **b1-toggle** — Whether the aftermarket toggle was actually mounted inside the platform control box is a field report, not photographed [M]. Both switch photos show it loose in the hand. Photograph it in place if it is ever found in situ.
- **b1-toggle** — The 'TILT SENSOR' carton lying at the turntable: the turntable's own tilt sensing is inside the SCON (safety controller) - redundant dual-axis tilt sensors plus safety switch logic for function cut-off, alarm at plus/minus 4.5 degrees (SM p.203) - and the only tilt-sensor connector in the legend is J55, the 6-pin Deutsch on the PLATFORM tilt sensor (SM p.205). Whether the carton is a spare, a part already fitted, or unrelated is unknown.
- **b1-toggle** — Contact-resistance threshold (under about 1 ohm) and the probe-to-probe value are general meter practice, not Genie specifications [M]. Never quote them to a customer as a Genie limit.
- **b1-toggle** — The Parts Manual never expands '3P' in 'SWITCH TOGGLE ASSY SPDT 3P MOM'. Earlier notes read it as 'three positions, on-off-on with a centre off'; that expansion appears nowhere in either manual and has been removed. Treat any expansion as unverified [M].
- **b1-toggle** — Whether Genie functions like axle extend/retract, engine start and auxiliary pump require a momentary command is not stated in the manuals [M]. A stay-put switch on such a circuit is still worth flagging, but as a concern, not as manufacturer fact.
- **b1-toggle** — Colour alone cannot name a circuit on this machine. GR/WH serves both circuit 83 (Tilt signal X axis) and circuit 109 (Sensor Power); WH serves 77, 94 and 98; RD serves 56, 87, 96 and more; and OR/BK appears both as circuit 64 and as REAR STR-OR/BK inside the toggle kit. Every identification must be traced to a named connector pin.
- **b1-toggle** — The Genie kit drawing shows the toggle commons joined by a bus and two brown ground wires (GND1-BR at J24-10, GND2-BR at J24-20). Whether every kit toggle simply pulls its J24 input to ground is read off the drawing, not stated in any text [M].
- **b1-toggle** — The Service Manual abbreviation legend defines 'TS' as 'Temp Switches' while ES0366J uses TSnn for the kit toggles. This card uses the schematic designators.
- **b1-toggle** — The aftermarket switch's DC rating is not printed on it - only AC ratings are visible. No claim is made here about its electrical suitability, only that it carries no Genie part number and no Genie boot.
- **b1-toggle** — Previous notes cited the J23/J24 connector legend as SM p.206; the extracted text puts it on SM p.205 (PDF 219). Corrected. SM p.206 holds J87 through J147.
- **b3-host-wire** — Which of the two factory wires the Scotchlok blade actually bites into - the photograph suggests the orange/black one, which would be C64LS-OR/BK, but the print has not been read. What the red wire beside it is printed as is also unknown. The 2-pin stub they end in is unplugged with a cut, frayed far end; its connector number (J146, J149, J153, J157 or another) cannot be settled until the print is read.
- **b3-host-wire** — Whether a SECOND, separate Scotchlok tap exists partway along the boom. The field note records 'one Scotchlok tap en route' [F], but the two existing photographs appear to show a single joint from two distances (same red + orange/black pair, same single blue Scotchlok, same grey 2-pin Deutsch, same background). Step 10 exists to settle this. Photograph any new find with enough surroundings in frame to prove the location.
- **b3-host-wire** — What the small black block with the red bar inside the control box is, and what the red wire reaching it through the blue butt splice is printed as. It looks like a push-button contact block (emergency stop or horn) but nothing confirms it [M]. If the red wire is printed with 56 it is the E-stop and foot-switch chain.
- **b3-host-wire** — Where the third white wire from the toggle's third wired terminal goes - not photographed. Also worth settling: the toggle has six terminals in two rows, only one row wired, so check whether the unused row is truly dead or is bridged to something.
- **b3-host-wire** — The 'TILT SENSOR ... DEGREES ... PCON' carton: likely a platform tilt sensor 50813GT [M]. Its printed part number is not legible in the photograph. Whether it was ever fitted, and why it is lying at the turntable when the turntable tilt sensing is inside the SCON module, is unknown.
- **b3-host-wire** — Circuits 77 (Lower Angle #1 operational), 83 (Tilt signal X axis) and 94 (Load Sensor) exist in the manual's generic colour table but no wire carrying those numbers appears anywhere in this machine's pin legends or on sheet ES0366J. They are likely not used on the Z-135/70 [M]. They stay on the stop-list only in case a wire so printed is ever found; their 'goes to' is honestly blank.
- **b3-host-wire** — Disagreements inside the manual between the generic colour table and this machine's pin legends: circuit 124 is RD/WH in the table but C124SBS-OR/BK in the legend and on ES0366J; circuit 23 is WH in the table but P23PCON-BK in the legend; circuit 52 is BL/RD 'Auxiliary Platform' in the table but P52PCON-WH in the legend; circuit 132 is GR in the table but S132LDS-BL/WH in the legend. The wire print and the pin legend are treated as authoritative. (Circuit 132 was missing from the previous card's list.)
- **b3-host-wire** — V155PSE versus V155PCE: sheet ES0366J prints the function enable valve feed as V155PSE-OR/RD; the TCON pin legend at J14-34 says V155PCE-OR/RD; the suffix table has both PSE (Program Setup Enable) and PCE (Pressure Comp Enable), and colour row 155 reads 'Pressure Comp. Enable', so PCE is likely intended [M]. Separately, J166 is listed as the jib bellcrank sensor plug while ES0366J labels the function enable coil Y74 '(J166)' - an unresolved conflict inside the manual. Identify that valve by its location (behind the medium pressure filter, SM p.135) and by coil resistance, not by connector number.
- **b3-host-wire** — Whether the boom harness physically runs inside the cable tracks of PM figures 507.1, 512.1 and 516.1 is inferred from the figure titles and the harness diagram [M]; the manuals never say it in words. Step 10's instruction to open the tray covers is therefore a reasonable place to search, not a manual-backed routing statement.
- **b3-host-wire** — The 216061GT kit sensor's own pigtail wire colours are not in the three manuals [M]. The RD BK BL OR BR YL tails drawn on ES0366J are for the original 94980-type sensor.
- **b3-host-wire** — The Operator's Manual note placing the bypass/recovery key switch on the lower right applies 'from serial number Z13512-1712'; this machine's serial reads Z13513-1861, a different prefix. Whether the note's serial range is meant to cover it is not certain [M] - so just check the box for a second key switch and remove whatever keys are there.
- **b5-y74** — Which engine is fitted is still not proven. The 62 kW on the serial plate does not decide it - the Perkins 1104C-44 is also 62 kW net - and Deutz and Cummins engines are listed for this model too. What the parts figures do say is that the 1104C-44 break is 'to SN 952' and the 804D-33T break is 'from SN 953', so if this machine (Z13513-1861) has a Perkins it is the 804D-33T. That matters only because the Parts Manual draws the hydraulic medium pressure filter on the Cummins, Deutz and 1104C-44 engine figures but lists none on the 804D-33T pages (PM pp.114-119 and 124-129). If you cannot find the filter, find the valve from parts figure 303.1 item 25 instead: low in the engine compartment, on its own flat bracket plate near the battery tray.
- **b5-y74** — Whether the TCON energises Y74 at all when a function enable button is held with the engine OFF, the axles retracted and the current fault set, is not stated anywhere in the manuals. The manual only exercises this path with the engine running (SM p.117). So a 0 V reading while holding the button would prove nothing, while battery voltage with the button held would confirm the TCON drives the valve. Treat that as an optional extra observation, never as a pass or fail.
- **b5-y74** — The 0 V expectation for the volts readings, and the 0.5 V allowance, are the card's own reasoning (tag M). No manual prints a voltage for this circuit with the engine off. A reading between about 0.5 V and battery voltage needs a second opinion rather than an immediate conclusion.
- **b5-y74** — J166 numbering is contradictory in the manual: the sheet tags the Y74 coil plug '(J166)', the connector legend says J166 is the 6-pin jib bellcrank sensor connector and J162 the 3-pin jib bellcrank angle sensor connector, and the same sheet also draws a 3-pin J166 at the jib bellcrank sensor. Which printing is the error is unknown. Nothing in this card depends on the number.
- **b5-y74** — The letters after circuit 155 are printed PSE on the sheet at the valve and PCE on the TCON pin legend; the code legend makes PSE mean 'Program Setup Enable' and PCE 'Pressure Comp Enable'. Same orange/red wire on the same two pins, so this is treated as a print inconsistency, but it has not been resolved with the manufacturer.
- **b5-y74** — Orange-with-a-red-stripe is not unique on this machine: it is circuit 155 (the Y74 feed) and also circuit 63, 'Power to boom envelope safety switch'. The card therefore identifies the feed socket by tracing the wire at the coil plug and across J153, not by colour. If in doubt, do not guess from colour.
- **b5-y74** — Where the white wire's turntable end actually goes has not been traced. The photo shows it tapped onto one of a red-and-orange pair at a small dark two-way connector; the colours in the photo are not proof of a circuit, and the nearby 'TILT SENSOR' carton is a spare-part box, not the sensor. The ohms readings in step 14 only tell you whether it touches Y74; card B2 still has to identify the other end.
- **b5-y74** — The basket toggle switch has six spade terminals in two rows of three and only three are wired, so it can switch a second circuit that nobody has traced. This card deliberately does not flip it. That second pole must be identified before the switch is touched, and the switch and its wire are to be removed, not tested in service.
- **b5-y74** — The moulded terminal numbers on the Y74 coil plug itself were not readable: both the Service Manual and the Parts Manual draw the connector as a plain hollow shell. The terminal numbers 1 and 2 come only from the wiring sheet. Identify the feed socket by tracing the wire, not by a moulded number.
- **b5-y74** — The title block of sheet ES0366J reads 'w/ Deutz Engine', and the Service Manual carries a separate Perkins engine schematic on SM p.216. The machine's serial plate names ES0366, so the sheet is right for this machine, but if the engine turns out to be a Perkins then the engine-harness side of J153 may be drawn for a different engine. The Y74 coil, its feed and its return are on the main sheet and are unaffected.
- **c1-j114** — Which half of J114 is the harness half on THIS machine. The photographed DT04-6P half carries blue, red, yellow, green and white plus a loose terminal, which matches neither factory colour set. The technician must trace the loom on site (step 5) before probing. The DT04 = pins / DT06 = sockets explanation is likely, from general Deutsch practice, not from the Genie manuals [M].
- **c1-j114** — This machine's ES0366J unit number is not recorded anywhere, so it is not known whether the "UNIT #130 OR HIGHER" or the "UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)" jumper colour set is factory for serial Z13513-1861 [M]. Both sets are given in the card. Until this is settled, an unexpected colour is not by itself evidence of tampering.
- **c1-j114** — The wire colours and cavity order of the 216061GT kit sensor's own pigtail are not in the three manuals [M]. If the kit's order differs from the layout ES0366J draws, that alone could explain the splices found. Record the sensor-side cavity colours in step 8 as well.
- **c1-j114** — Exactly where the "5.0 VDC LED" sits on the TCON (ALC-1000) board, and how it is marked. The fault tables name it (SM pp.177-178, printed as "% .0 VDC" in the extraction) but no manual page or figure shows its position [M].
- **c1-j114** — The brown sensor-ground wire (SNSR GND-BR at TCON J12-25 and on ES0366J) has no confirmed circuit number. The wire colour legend on SM p.198 gives circuit 110 "Sensor Return" as BK, and gives BR to circuit 89 "Platform Level Safety Ground". The card therefore no longer calls the brown wire "circuit 110". The same legend also shows RD/WH beside circuit 124 while the TCON pin legend and ES0366J give C124SBS - OR/BK, so there is more than one colour disagreement in that legend; circuits 109, 123 and 141 do agree across legend, pin legend and schematic.
- **c1-j114** — Where cavity numbers sit on a six-way Deutsch housing, and the rule that harness cavity 1 mates with sensor cavity 1, are stated from general connector practice [M]. The schematic prints only one row of cavity numbers at J114.
- **c1-j114** — The manual gives "5.0 VDC" with no tolerance. The card's "within a couple of tenths" is a working assumption [M].
- **c1-j114** — Which cover part this machine carries: fig 511.2 (from SN 1854) lists only 106277PGT painted, while fig 511.1 lists 107838GT with decal for USA/Canada/Australia. Same position either way; the part number only matters if the cover is to be replaced.
- **c1-j114** — The physical location of connector J20 (the 12-pin lower/upper limit switch harness connector) is known only from the connector legend (SM p.205). Its position on the boom or turntable must be found on site if the fault moves upstream.
- **c1-j114** — Which cavity the loose gold pin terminal came out of, and which two conductors the Scotchlok loop joins - recorded on this card (step 7) and to be resolved on a later card with the battery disconnected, by measuring resistance.
- **c1-j114** — The correct crimp terminal for a J114 repair is not established. 73713GT is listed on PM p.169 only as part of the FOUR-way limit switch lead, rated 14-18 AWG. The right terminal and the sensor wire gauge must be confirmed before ordering [M].
- **c1-j114** — How the pivot area is safely reached is not in any manual [M]. The site photos show the work point above ground level; access must be planned to site rules.
- **c1-j114** — The bare steel plate that the pink ring terminal is bolted to is not identified in any manual figure. Calling it "the pivot bracket" was not supportable and has been dropped.
- **c1-j114** — The blue railed structure in the background of the green-wire photo cannot be confirmed as this machine's own platform rather than another unit in the yard, so it is no longer used as an orientation cue.
- **c2-j154** — Which half of J154 holds pins and which holds sockets? Inferred from the J114 photo (loom side is a DT04-6P with pin terminals) and tagged M. On the machine, identify the harness half by its two green/white wires, never by the housing type.
- **c2-j154** — Sensor-side pigtail colours at J154: the schematic's RD/BK/BL/OR/BR/YL set is drawn for the sensor of the original build. This serial is in the 'from SN 1854' group whose sensor is 216061GT (PM fig 502.2), and that sensor's own pigtail colours are not in any of the three manuals. Do not rely on sensor-side colours.
- **c2-j154** — Build mismatch, unresolved: the Service Manual's replacement procedure (SM 4-9, pp.88-89) describes a bracket with two springs and a hex-shaped key seating into the boom pivot pin, while PM fig 502.2 for this serial shows a base / race / holder / arm / rotator stack with no angle sensor cover listed. The 'remove the angle sensor cover retaining fastener' step may therefore not describe this machine. Tagged M in Location; look for both arrangements and photograph what you actually find.
- **c2-j154** — Is 'secondary boom angle sensor shorted / 0 V' self-clearing on power-up, or latched? The manual gives 'Power up controller with problem corrected' for other analogue inputs and describes a Delete Faults menu for latching faults, but says nothing explicit for this sensor. If the fault persists while 5.0 V is present, consider latching before condemning the sensor. This card does not use the fault-clearing menus.
- **c2-j154** — No manufacturer tolerance exists for the 5.0 VDC figure. The 'below about 4.75 V is suspect' line is the author's judgement and is tagged M.
- **c2-j154** — Two of the display strings used in this card are the owner's readings, not Service Manual text: 'secondary boom angle sensor shorted / 0 V' (the manual's wording is Error Source 'Operational/Safety Secondary Boom Angle Sensor', Error Type 'Value at 0 V') and 'TCON-SCON calibration inconsistent' (no match anywhere in 1268557.txt). Record the exact on-screen wording rather than matching it to these labels.
- **c2-j154** — The Machine Status 'Secondary boom angle' readout is footnoted '(referenced to chassis tilt angle)' and depends on calibration state, which is unknown on this machine. Treat the number as a hint only.
- **c2-j154** — Where the P109ANG and SNSR GND branches for J154 are physically spliced is not in the manuals - the schematic shows junction dots but gives no location in the harness.
- **c2-j154** — Side note carried forward to card C1: the J114 loom-side half in the photo shows a yellow wire, but the schematic's harness jumper set at J114 (RD, WH/BK, BL, OR, GR, WH) has no yellow - yellow is a sensor-pigtail colour there. Either that half is the kit sensor's own adapter, or the harness has been re-terminated. C1 must settle which half is which, otherwise this card's before-and-after comparison cannot be read safely.
- **c2-j154** — Parts figure 502.2 is drawn on PM p.138 and again on PM p.140, with its item list split across p.139 (items 1-18) and p.141 (items 19-45). Only the p.138 view has been read; the p.140 view may show the sensor stack installed, which would settle the physical picture.
- **c2-j154** — The 'Test the Secondary Boom Angle Sensor' procedure is not in this Service Manual's text. SM p.93 step 35 says to refer to the Maintenance Procedure 'in the appropriate Service or Maintenance Manual' - it leaves both books open, and neither is in the knowledge base.
- **c3c4-bridge** — Is the DT04-6P half that carries the Scotchloks and the loose terminal the machine harness or the sensor pigtail? It cannot be inferred - Genie uses both pin-receptacle and socket-plug halves on pigtails. Step 6 makes the technician follow the loom by hand. The answer changes how the 1-6, 2-5 and every cross-element reading is interpreted, so it must be settled first.
- **c3c4-bridge** — Which ES0366J harness variant is this machine? The sheet carries two complete J20-to-J114 blocks: 'UNIT #130 OR HIGHER' (cavity colours RD, WH/BK, BL, OR, GR, WH) and 'UNIT #129 OR LOWER VERSION S0675110 SOFTWARE (PHASE 2)' (OR, GR, RD, RD/BK, BK, GR/BK). The manuals nowhere say what unit number serial Z13513-1861 is, and the colours visible in the field photos (blue, red, yellow, green, white) match neither set cleanly. Until that is settled, colour is NOT a valid cavity identifier on this machine - use the moulded cavity numbers. [M]
- **c3c4-bridge** — The replacement sensor fitted under kit 217246GT / part 216061GT is described only as 'SENSOR, ANGLE, 180 DEG, CW' with a matched magnet. It is likely a magnetic, non-contact type with no resistive track [M], which would read open where the schematic's two-potentiometer sensor reads a resistance. Its pigtail colours and internal impedance are published nowhere in the three manuals. Every sensor-half expectation on this card is taken from the older two-potentiometer sensor drawn on ES0366J. Record what you actually get and do not call a sensor-half reading a fault until the sensor type is known.
- **c3c4-bridge** — Whether the loose gold terminal is on a blue conductor is NOT established. The photographs show a blue conductor in the bundle, but the loose terminal's own lead is hidden behind the technician's thumb in every frame. The earlier draft of this card leaned on 'blue = cavity 3 = safety signal'; that inference is withdrawn. The empty cavity number and the ohm test decide it. [M]
- **c3c4-bridge** — Whether an open safety signal on its own produces a 'primary boom angle crosscheck' fault is NOT stated anywhere in the manuals. SM pp.177-178 assign an open or high signal to 'Value at 5.0 V' or 'Value Too High'; SM p.189 lists what the crosscheck fault switches off but never what triggers it. Treat any such link as a hypothesis to test, not as an explanation. [M]
- **c3c4-bridge** — Whether the two Scotchlok taps have actually cut through the insulation. A tap that has not bitten reads open even though it looks like a bridge. Related and newly noted: a conductor beside the lower tap has frayed bare copper strands showing - determine whether that conductor is merely damaged or actually cut through, because a cut conductor bypassed by an external wire is a different fault from a deliberate bridge.
- **c3c4-bridge** — What the pink insulated crimp at the pivot bolt actually is - a ring terminal under the bolt, or a butt splice joining a short lead that goes under the bolt - and what the long green wire connects to at its other end. Not covered by this card; it needs its own ohm test from that crimp to each of the six cavities and to chassis ground.
- **c3c4-bridge** — Complete-connector parts. The Parts Manual lists NO 6-way Deutsch DT housing, lock or wedge anywhere (only 2-, 3-, 4- and 12-way), and figure 511.2 lists no connector parts for the angle sensor at all. 73713GT (pin) and 73714GT (socket) are the right size class (14-18 AWG, 0.095-0.150 in OD) but the Parts Manual attaches 73713GT to the retract limit switch's 4-way connector and does not list 73714GT on figure 511.2 at all. DT04-6P is read off the moulding on the part; the mating DT06-6S plug and the W6P/W6S wedges are industry Deutsch numbers from memory [M]. Confirm all of it with the supplier before ordering.
- **c3c4-bridge** — The harness-side resistance from the sensor supply to sensor ground with the battery off - measured through the TCON's output stage - is not published. This card asks for that reading to be recorded, not judged, unless it is a dead short.
- **c3c4-bridge** — Whether cavity numbers are legible on this particular housing. Moulded cavity numbering is general Deutsch practice, not manual text [M], and the usual colour fallback is unsafe here because of the two-variant problem above. If the numbers are unreadable, stop and get the connector's cavity map settled before naming any pin.
- **c3c4-bridge** — Which side of the primary boom the angle sensor is on. The manuals give a side only for the retract limit switch (ground-controls side). Likely the same side for the sensor, but unconfirmed [M] - look at both.
- **c5-ground** — No resistance figure for SNSR GND-BR exists in any of the three manuals. The 'near zero, under about 1 ohm after lead zero' pass mark, the expected lead-zero range, and the 16 AWG test-lead gauge are this plan's working values [M] and cannot be verified against Genie text.
- **c5-ground** — The previous version's ohm bands (1-5, 5-50, 50-500) have been REMOVED, not just re-tagged. They implied that a few tens of ohms in the return leg could cause a crosscheck disagreement. Since each sensor half is a potentiometer whose output is a ratio of its supply, that is physically wrong for a multi-kilohm element, and acting on it could send a technician chasing a harness that is actually fine. Only three categories are defensible: near zero, open, or 'reseat the terminal and measure again'.
- **c5-ground** — ES0366J draws TWO different colour sets for the J20-to-J114 jumper - UNIT #130 OR HIGHER (cavity 2 white/black, cavity 5 green) and UNIT #129 OR LOWER (cavity 2 green, cavity 5 black) - split further by software version S0675100 and S0675110 (Phase 2). Nothing in this card establishes which build serial Z13513-1861 is [M]. Step 11 therefore lists both sets. Confirming the machine's unit number and software version would settle it and should be done before any conclusion is drawn from wire colour.
- **c5-ground** — The field photo of the J114 connector shows blue, red, yellow, white and a dark green seated, which matches neither published colour set exactly [F]. That is itself evidence the connector has been re-pinned or a non-Genie sensor fitted. It also means step 11's colour check will flag mismatches on more than the two ground cavities - record them all and pass them to the connector card rather than treating any single mismatch as the answer.
- **c5-ground** — Which half of J114 is the machine harness and which is the sensor's own tail is not stated in the manuals [M]. The photo shows a body moulded DT04-6P, which in Deutsch's naming is the pin half, but that does not by itself say which side of the circuit it belongs to. Trace the black loom before relying on it.
- **c5-ground** — The manuals do not say whether cavity numbers are moulded into the Deutsch or AMP housings, nor which face of the plug the SM p.210 drawing represents [M]. The card therefore tells the technician to count from the '24' end and to confirm the cavity by the unmodified J154 connector rather than by any single cue.
- **c5-ground** — The manuals do not say whether the TCON ties J12-25 SNSR GND to battery negative inside the board [M]. Reading (f) is a harness-side test only, made with the plug off; a low reading means find the bond, it does not tell you anything about the board.
- **c5-ground** — J20, the 12-pin Deutsch connector for the lower/upper limit switch harness, lies in the primary sensor's ground path, but its physical location is not given in any of the three manuals. If the J114 readings are bad and the J154 readings are good, the fault is in the J20-to-J114 jumper harness or at J20 cavities 12 and 7 - and someone will have to follow the loom to find J20.
- **c5-ground** — The wire colours on the 216061GT kit sensor's own pigtail are not published [M]. The sensor-side colours quoted in this card (black on cavity 2, brown on cavity 5) are the ones ES0366J draws for the older 94980-type sensor.
- **c5-ground** — It is still not known which two conductors the two blue tap connectors bite. The field photo shows yellow/tan conductors in the taps with a green jumper between them, so the earlier assumption that a tap sits on the cavity-5 ground wire is withdrawn. If the taps do happen to join the cavity 2 and cavity 5 ground wires, readings (a) and (b) will be identical and this card cannot separate the two legs - the connector card must open the taps first, or this card must be repeated afterwards.
- **c5-ground** — The loose brass terminal at J114 appears in the photo to be on a blue conductor. On the UNIT #130 OR HIGHER block, blue at J114 is cavity 3, C141PBS-RD, the safety signal to the SCON - but on the UNIT #129 OR LOWER block blue does not appear at all at J114, so even that reading depends on the unsettled build question. This belongs to the connector card; it is flagged here because a disconnected safety signal alone could explain the primary crosscheck fault.
- **c5-ground** — Whether this machine actually has auxiliary power batteries is not confirmed; OM p.17 shows the machine may have them. Disconnect every battery negative you find.
- **c5-ground** — The schematic extraction is jumbled, so other users of SNSR GND-BR on parts of ES0366J outside the rendered crops cannot be ruled out from text alone [M]. The crops show only the two boom sensor plugs on this net, and the tilt, steer and load sensors use separately named grounds.
- **c5-ground** — The Service Manual contradicts itself about J15: SM p.205 calls it a 4-pin DTP connector on the PCON, SM p.210 heads it 'J15 Turntable Controller'. Per the knowledge base's rule on conflicting sources the conflict is stated rather than resolved. This card does not depend on J15, but anyone tracing TCON power should know.
- **c6-led** — Where exactly is the 5.0 volt LED on the ALC-1000 / TCON board, what colour is it, and what does the printed label beside it say? No manual figure or sentence shows it — a full text search finds only the one recovery sentence, repeated ten times, and SM p.103 has no illustration. Tagged M. The technician should photograph the board and add the answer to the case file so the next person does not have to hunt.
- **c6-led** — Does the LED watch the board's internal 5 VOLT rail, the J12-26 SNSR PWR output specifically, or something else? The schematic draws no LED symbol and no visible link between the internal 5 VOLT net and P12-26. Tagged M. If the LED is lit but the sensor plugs read 0 volts, this distinction is what decides whether the board or the harness is at fault, and the sensor-plug card resolves it.
- **c6-led** — Is the breaker drawn 'CB 20A' on schematic sheet ES0366J the same physical device as the 20 amp breaker on the box face? Both are 20 amp and both sit on the control supply, but no document says so. Tagged M.
- **c6-led** — Is Parts Manual item 16 (73717GT) the receptacle the Service Manual calls J15? The Parts Manual prints no J-numbers at all. Tagged M — treated here as likely because it is the only 4-way DTP flange receptacle in the box.
- **c6-led** — Where does the red B1BAT-RD wire actually originate, and what protects it upstream of the 20 amp breaker? The original version of this card sent the technician to a 'B1PBAT Power from Battery stud on the engine relay/fuse panel'; that is wrong and has been removed — B1PBAT appears only in the SM p.211 and p.212 fuse-panel legends and is never linked to B1BAT-RD. The schematic labels the batteries B1 'ELECTRONICS BATTERY' and B2 'START BAT', so B1 is the likely origin (tagged M), but the route is not drawn. Trace the wire physically if the J15 reading is dead.
- **c6-led** — Where do the two brown J15 ground wires (pins 2 and 3) terminate? The schematic crop shows them joined by a junction dot and then leaving the drawing. The sheet's battery-ground wire carries a different name (BAT GND-BR), so they should not be assumed to be the same conductor.
- **c6-led** — The engine relay and fuse panel legend (SM p.211) lists no fuse for the TCON at all, and that legend is engine-specific (Deutz/Perkins, with Cummins on p.212). The only overcurrent protection the manuals show for the TCON feed is the 20 amp breaker. If anyone expects a numbered fuse for the TCON, these documents do not contain one.
- **c6-led** — Is the ground-box breaker a push-to-reset button type? Not stated in any manual (tagged M). If it turns out to be a different style, adapt step 7(a) — the rule stands either way: reset once, never hold it in.
- **c6-led** — Is the TCON's 5 volt rail alive with the key OFF? Unknown — the feed at J15 is battery-side of the key switch, but the manuals do not say what the key switch gates. This card observes with the key at GROUND and the E-stop out, which is the state the Operator's Manual confirms the LCD lights in (OM p.31).
- **c6-led** — Does the machine's on-screen wording 'shorted / 0 V' map exactly to the fault table row 'Value at 0 V'? The manuals print no table of display strings, so this is an inference (tagged M).
- **c6-led** — Energising the box with the lid open (step 5) and powering up with the boom angle sensor plugs disconnected (step 8) are this card's own constructions, not manual procedures — SM p.103 keeps both E-stops pushed in throughout. Nothing is bridged and no motion is commanded, but expect extra sensor faults during step 8 and record the pre-existing codes first.
- **c6-led** — The SM p.99 serial break is printed as Z13512-1712 while this machine is Z13513-1861 — a different prefix. Treated here as applying (the Parts Manual uses bare serial numbers for the same split), but flagged as an assumption.
- **c6-led** — The J114 and J154 sensor-plug pin numbers — which plug cavity carries the J12-26 5 volts and which the J12-25 ground — are deliberately not restated here. They belong to the sensor-plug card and must be verified there against es-j114-primary-sensor.png and es-j154-secondary-sensor.png.
- **c7-bond** — Which piece of steel the bracket bolt is on (the primary boom side of the pivot or the secondary boom/turntable side) is not clear from the photos; Reading A settles whether the bracket is electrically continuous with each, and the technician should note which structure it belongs to. SM p.72 step 9 mentions a 'hose and cable guide' at the primary boom pivot pin that may be this bracket, but that is unconfirmed [M].
- **c7-bond** — Whether the TCON internally references SNSR GND (J12-25) to its own ground pins (J15-2/3, J12-35) is not in the manuals, so Reading F (pin 2 to chassis) has no manufacturer expected value and must be recorded only.
- **c7-bond** — The 216061GT kit sensor pigtail colours are not in the three manuals; the red/blue/yellow/green/white wires seen on the DT04-6P match neither the factory harness colours nor the 94980-type sensor colours, so identification must be by cavity number. Deutsch cavity numbers being moulded on the housing is general product knowledge, tagged [M].
- **c7-bond** — Where the long green wire ends at the connector side (which Scotchlok, on which wire) is not determinable from the photos; step 5 traces it on site.
- **c7-bond** — Whether the lead from the pink butt splice ends in a ring terminal or is bare strands trapped under the bolt head is not visible; note it in step 8.
- **c7-bond** — The short green loop between the two Scotchloks is a separate modification and is not resolved by this card; it needs its own identification (which two J114 wires it bridges) before removal.
- **c7-bond** — The manuals do not give a chassis-bond or bonding-strap part anywhere in the primary boom pivot parts list (PM fig 511.2), which supports 'non-factory', but a factory ground strap elsewhere on the machine was not searched exhaustively.
- **d1-joystick** — Which joystick is new is a photo inference (drive/steer, J25, looks cleanest and sits next to the E-stop); it must be confirmed on site by eye and by the label. Tagged M.
- **d1-joystick** — The brief said J25/J28 were on SM p.206; in the extracted text they are on printed p.205 (PDF 219). J127/J128 are on p.206 (PDF 220). Cite p.205 for J25 and J28.
- **d1-joystick** — Manual conflict on circuits 163/164: the Wire Color Legend (SM p.199) lists 163 as Primary Extend/Retract Signal and 164 as Primary Up/Down Signal, but the suffix legend (SM p.194) defines PES (used in C163PES) as Primary Boom Up/Down Signal and PLS (C164PLS) as Primary Boom Extend/Retract Signal. The card lists both; the calibration tech should not rely on either until checked on the sheet.
- **d1-joystick** — J128 pin 4 is printed 'C16PRL-OR/RD' on ES0366J; the circuit number looks truncated (likely 166). Colour orange/red and PRL = Platform Rotate Left are as printed.
- **d1-joystick** — The Wire Color Legend text extracts with its colour column one row offset (each colour printed after description N belongs to circuit N+1). Colours in this card were taken from the schematic wire names (e.g. P162JPW-OR), not from that column.
- **d1-joystick** — Deutsch DT cavity numbering on the wire-entry face is general knowledge, not from the manuals (M). If unsure, follow the row order 1-6 on the schematic and photograph both faces for the calibration tech.
- **d1-joystick** — The manual says a disconnected joystick must be recalibrated, but does not say how the TCON detects a like-for-like swap; a missing 'Not calibrated' message therefore does not prove the new joystick was calibrated.
- **d1-joystick** — The manual gives no tolerance for the joystick 5 V supply (circuit 162); 'about 5 V' is the only statement available.
- **d1-joystick** — Whether the joystick calibration should be run before the calibration visit: it needs no bypass key, no jumper and no engine, and it is step 2 of the sequence, but SM p.105 restricts calibration to Genie factory-trained technicians. Left to the calibration lead; this card only records.
- **d1-joystick** — The parts list allows either a 2-axis (101174GT) or a 1-axis-with-rocker (101005GT) drive/steer joystick; the photo suggests a rocker-top grip. Read the label to know which type is fitted and whether an H-suffix aftermarket unit with the 119613GT adapter is present.
- **d1-joystick** — The joystick's own pigtail wire colours are not given in any of the three manuals; only the harness-side names are.
- **d2-tilt** — The carton's part number has not been read directly. My reading of the dirty label in the photo ('TILT SENSOR', '+/-10 DEGREE', '(PCON)') points to 50813GT, the platform sensor, but the printed number must be read on site (step 2).
- **d2-tilt** — Was the carton part fitted, and where? If it was fitted at the platform rotator, step 4 (platform level sensor, SM p.42) is owed; if it is a spare, nothing changes.
- **d2-tilt** — Is the SCON on this machine original? Its label (expect 1258463GT) and appearance decide whether a full in-order calibration is mandatory (SM p.105/154).
- **d2-tilt** — The Parts Manual marks 50813GT with '****' but the footnote text is not in the extracted text (it is probably a graphic or a notes page); read PM p.199 in the PDF to see what the four stars mean.
- **d2-tilt** — Step 25 of the turntable level sensor procedure calls for 'Maintenance Procedure, Test the Level Sensor', which lives in the Maintenance Manual - not one of the three documents in this knowledge base. The Operator's Manual 'Test the Tilt Sensor' (OM p.33) is the closest available check.
- **d2-tilt** — The live fault worded 'TCON-SCON calibration inconsistent' does not appear verbatim in the Service Manual fault tables. The nearest entry is 'SCON Tilt Sensor - Calibration check - Display X direction and Y direction not calibrated' (SM p.188). Record the exact on-screen wording.
- **d2-tilt** — The TCON block on ES0366J carries internal labels TT_TILT_SNSR_PWR/GND and TT_TILT_X/Y_AXIS on a P1 header, but the external J12 legend has no tilt wire. How the TCON receives turntable tilt values on this model (likely over CAN from the SCON) is not stated in the manuals; it does not change the field work.
- **d2-tilt** — The small Deutsch plug with red and orange wires that the white wire is tapped into near the turntable is unidentified. It is not a tilt-sensor plug (there is none on the turntable). Compare its colours and pin count with the J154 secondary boom angle sensor pigtail (RD, BK, BL, OR, BR, YL) in the J154/toggle cards.
- **d2-tilt** — The sensor-side pigtail colours of 50813GT are not printed in the manuals; only the harness colours at J55 are. Note the colours on the carton part if one is inside.
- **d2-tilt** — Does the carton part's plug physically match J55 (6-way Deutsch)? Expected yes since it is the Parts Manual item, but confirm by counting pins before anyone fits it.
- **d4-software** — Display format and timing [M]: the manuals say only that the version 'is displayed on the LCD screen when the red Emergency Stop button is pulled out'. They do not say what prefix it carries or how many seconds it stays. That is why the card says to film the screen and repeat the E-stop cycle if it is missed.
- **d4-software** — Platform Emergency Stop [M]: the pages read do not say whether the platform E-stop must be pulled out for the ground LCD to power up. The Operator's Manual step only requires key to ground and the ground E-stop out. If the LCD stays dark, note the platform E-stop position before calling the LCD dead.
- **d4-software** — Which software this 2013 SN 1861 machine actually carries is unknown [M]. Genie requires the software revision when ordering a TCON box (PM p.61), so a replaced box could carry any version; the reading is the only reliable answer. A version below 3.0 would also change some menu wording (SM p.161/167 notes 'Models before software version 3.0').
- **d4-software** — Kit 58351 is not in the Parts Manual text; the only source is the Service Manual note 'available through Genie Product Support'. Confirm availability and lead time with Genie before scheduling a 6-point visit.
- **d4-software** — The 'Previous' button identity [M]: the photo shows an arrow button beside Plus, Minus and Enter; the manual names the fourth button 'Previous'. The pairing is inferred.
- **d4-software** — Whether the 'TCON-SCON calibration inconsistent' fault will require the turntable level sensor to be recalibrated (which always needs the digital level, SM p.154) is not decided by this card. If it does, kit 58351 is needed regardless of the 2-point / 6-point result.
- **d4-software** — All boom-angle calibration procedures require the axles fully extended, the drive enable zone and the engine running (SM p.83). Propel is dead and the axles are retracted, so those repairs must be complete before the calibration visit; this card does not cover how the axles are extended.
- **parts** — Which half of J114 is the DT04-6P with the loose pin: the harness side or the sensor pigtail? The photo shows red, blue, yellow, green and white wires plus the loose one; that set matches neither the ES0366J harness column (RD, WH/BK, BL, OR, GR, WH) nor the 94980-type sensor column (RD, BK, BL, OR, BR, YL). Card B must map it before any 73713GT pin is crimped.
- **parts** — The PM sells no 6-way Deutsch DT housing, wedge or seal. If the DT04-6P housing or wedge is broken, the manual-backed route is the assembly that carries it (harness per fig 308.1, or the sensor 216061GT); ask Genie Service Parts with SN Z13513-1861. A generic Deutsch DT04-6P / DT06-6S housing with W6P / W6S wedge from a distributor is the likely field answer [M], not a manual fact.
- **parts** — Is 73713GT (listed only for 2-way and 4-way DT limit-switch connectors) the contact used in the 6-way J114? Likely yes (Deutsch DT size-16 contact) [M]; the manuals do not say.
- **parts** — Was the bright blue hardware at the pivot fitted as kit 217246GT (listed only under fig 511.1, to SN 1853) or as a 215728GT assembly (fig 511.2, this machine's group)? The PM cannot tell them apart. The buy decision does not depend on it, but do not re-order 217246GT for SN 1861 without Genie confirming.
- **parts** — PM p.77 says "after SN 12853"; Z-135/70 serials run to 2000, so this is likely a misprint for 1853 [M].
- **parts** — The "SPDT 3P MOM" expansion for 128200GT is a reading of the abbreviation [M]. Confirm the switch's function with Genie before using it anywhere other than the OEM positions on figs 603.1 and 605.1.
- **parts** — The 216061GT pigtail colours are not in the manuals [M]; Card B must identify the sensor's wires by ohm test with the battery disconnected, not by colour.
- **parts** — If Card C proves the secondary sensor itself bad, its parts are in fig 502.2 (PM p.141, 216061GT item 23) with first-time kit 217238GT or 824587 (p.135); those numbers are not on this list and were not fully checked here.
- **parts** — 58351 is "available through Genie Product Support", not a PM line item; confirm current availability, and read the software version on the LCD (4.01 or higher uses the 2-point boom sensor calibration that needs no level) before buying.
- **parts** — The PCON circuit board (237072GT from SN 1712) needs "Machine model, serial number and software revision" to order; only relevant if Card D proves the PCON bad. Not on this list.
- **parts** — The case file cites the membrane recovery text as SM p.176; the extracted text places it on SM p.183 (PDF 197). The J154 legend entry is on SM p.207 (PDF 221), not p.206.

---

*Built from Operator's Manual 114474, Parts Manual 106877GT Rev H.04 and Service and Repair Manual 1268557GT. Each card was drafted, then fact-checked by three independent reviewers against the manual text and the schematic sheet ES0366J, then corrected. Statements that survived are tagged [V]; statements the reviewers could not support are tagged [M] and worded as likely. Never bridge a safety crosscheck, and never return this machine to service on improvised wiring.*



---

# ⚠ Read this before you use the plan above

An independent reviewer read all fifteen cards against the manuals and found **structural holes**. The cards are well sourced — but the plan as a set is incomplete in ways that matter. Fix these in your head before you start.

## The three big holes

**1. The plan never measures the thing the fault is actually about.** Every card stops at the 5 volt supply and the ground. *No card measures either angle signal* — `J114` cavity 3 (safety, to the SCON) or cavity 4 (operational, to the TCON), or the same two at `J154`. The whole fault set is those two copies disagreeing. You can prove supply and ground are perfect and still know nothing about why they disagree. **Add this:** with `J114` plugged, back-probe cavity 3 and cavity 4 to sensor ground and write down both voltages, boom stowed. They should be close to each other. How far apart they are *is* the fault.

**2. There is no repair card.** Eight cards say "the repair card decides removal" — and that card does not exist. As written, a machine can pass through all fifteen cards with the Scotchlok bridge, the loose pin, the bonding wire and the toggle switch all still fitted. **Nothing in this plan removes a bypass or verifies it is gone.** Removal is a separate job, after the measurements, and it is not optional.

**3. Nobody has followed the white wire to its actual end.** The card notes the wire *carries on past* the Scotchlok at the turntable — so its far end has still not been seen. Finding it is part of B, not an afterthought.

## The hard stop nobody wrote down

> **If the empty cavity at `J114` turns out to be cavity 3** — `C141PBS-RD`, the safety angle signal to SCON `J122-3` — **that is a defeated safety input.** Do not operate the machine, do not energise it further, photograph it and stop. Same if the Scotchlok loop joins cavity 3 to cavity 4.

## Safety problems inside the cards themselves

These are steps in the plan above that the reviewer judged unsafe as written. **Do not follow them as printed:**

- The plan never removes the bypasses. Every card that finds one defers removal to a repair card that is not in the set, and the plan ends at a parts list. A machine can pass through all fifteen cards with the Scotchlok bridge (case-file hypothesis 3 is a deliberate pins 3-4 crosscheck defeat), the frame-bonded green wire, the butt splice and the aftermarket toggle still fitted, and with nothing having verified that factory terminations were restored. No card gates the calibration handoff on the bypasses being provably gone.
- c2-j154 step 15 deliberately re-connects the modified J114 "exactly as found" and re-energises the machine to compare fault lists. That is putting a suspected safety-signal bridge back on under power. The card mitigates it (engine off, no function commands, platform E-stop in) but it does not make the step conditional on c3c4-bridge having first shown that pins 3 and 4 are NOT bridged, which is the one result that would make it unacceptable.
- c6-led step 5 energises the ground control box with the lid open — a live board, four live AMP plugs and the calibration toggle all exposed — against SM p.103, which keeps both E-stops pushed in for all work inside that box, and against the setup card's explicit refusal to authorise it. Step 8 then power-cycles repeatedly with the sensor plugs pulled, deliberately generating new latched faults on a machine already carrying seven.
- d1-joystick step 10 back-probes with the key at PLATFORM and BOTH E-stops OUT while the technician is standing in the basket with the control box open, inches from the joysticks. The platform controls are live at the operator's own position with the lid off. "Everybody clear of the handles" does not cover the person whose hands are in the box.
- c7-bond works from superseded information about the machine's state — it tells the technician the axles are extended and that no axle boom-lockout can be relied on. The compensating controls it names (key off, E-stops in, battery disconnected) are correct, but a card that misstates the machine's configuration is one a technician may try to verify by moving something.
- Battery isolation is inconsistent across cards that all take resistance readings. The setup card and b1-toggle disconnect BOTH battery sets and the setup card flags the 100 A dual battery separator as an unresolved back-feed path; c3c4-bridge and c7-bond disconnect a single negative cable. An ohm reading taken with the auxiliary set still on the separator can be wrong, and the Operator's Manual instruction is to disconnect the batteries under both turntable covers.
- Work at height is required at the primary boom pivot — c1-j114, c3c4-bridge and c7-bond all establish that the work point is 8 to 10 ft up and call for a ladder, scaffold or second platform with fall protection. b3-host-wire step 10, c5-ground step 8 and the parts card step 2 send the technician to the same place with no access instruction at all.
- Out-of-service tagging is inconsistent. c3c4-bridge and c5-ground require the machine tagged and the tag left on; the setup card, crosscheck, c1, c2, c6 and the d-cards do not. Between cards the machine can sit untagged with a connector open and possibly a safety signal disconnected.
- No card states the hard stop plainly: if the empty cavity at J114 proves to be cavity 3 (C141PBS-RD, the safety angle signal to SCON J122-3), that is a defeated safety input and the machine must not be operated or energised for convenience until it is re-terminated. c3c4-bridge flags it to a supervisor; c1, c2, c6 and d4 continue to instruct power-ups regardless of what was found.
- Nothing makes the platform control box safe before it is re-energised. b1-toggle leaves three live-capable conductors sleeved inside a box it has itself described as found wet, closes the lid "loosely to keep water out", and no later card dries it, replaces the gasket 81488GT, or checks the wet membrane before power is restored to that box.
- No card carries the return-to-service gate. The knowledge base requires a full Operator's Manual function test and an annual inspection by a qualified person after control-system repair; the plan hands off to a calibration technician and stops. Nothing states that calibration alone is not a release to work.

## Tests the fault list calls for that no card covers

- **No card tests the secondary boom retract switches LSS1RS / LSS1RO at J46 and J49** — "Secondary boom switches fault" is one of the seven live display messages and it is the only one with a complete, dedicated recovery procedure in the manual — yet no card in the set touches it. The crosscheck card merely names the candidates, and c2-j154 says it "should not change", handing it to nobody. It also matters for propel: the p.189 matrix row "Secondary Boom length (crosscheck LSS1RS and LSS1RO)" cuts P_11, P_30 and P_9B (engine), and "LSS1RS disconnected" cuts P_11 and P_30, so this fault has its own lockout independent of the angle sensors. The manual's own recovery also requires clearing through the TCON display menu or WebGPI, which no card does. *(SM p.188 (1268557.txt 13540-13610: Secondary Boom Switch Timeout, Secondary Boom Switches Intermittence (LSS1RS Fault), LSS1RO Fault); SM p.205 lines 15472-15476 "J46 4 pin Deutsch connector on LSS1RS / J49 4 pin Deutsch connector on sec boom retract (LSS1RO)"; SM p.189 matrix rows at 13719 and 13733; SM p.202 lines 15251-15254; 04-fault-codes.md "Secondary boom switch faults (p.188)")*
- **No card ever measures the boom angle signals themselves (J114-3, J114-4, J154-3, J154-4) live** — The whole fault set is a crosscheck disagreement between the two angle copies, and no card measures either copy. c1-j114 stops at the 5 V supply and its own if_ok promises "Next card: signal voltages on cavities 3 and 4 with J114 plugged and back-probed" — that card does not exist. c3c4-bridge measures resistance with the battery off; c5-ground measures only the ground legs; c7-bond measures the added wire. So the plan can prove supply and ground are good and still have nothing to say about why the two controllers disagree, and no way to distinguish the manual's "Value at 5.0 V", "Value Too High", "Value Too Low", "Value at 0 V" and "Out of Tolerance" error types, each of which has a different recovery action. *(SM pp.177-180 error-type rows (1268557.txt 12576-12862); SM pp.106-107 Machine Status readouts (primary-to-secondary boom angle, secondary boom angle) at 8097-8149; c1-j114 expected[0].if_ok, which names the missing card)*
- **No harness continuity test from the sensor connectors back to the controller pins** — Case-file hypothesis 2 is "broken conductor in the boom harness bypassed with the external green wire", and nothing in the plan tests it. Nobody rings J114-3 through to SCON J122-3, or J114-4 through to TCON J12-32, or the J154 equivalents to J122-2 and J12-33. c3c4-bridge step 15 explicitly defers this to "the ground control box card", which is not in the set; c6-led opens that box but only looks at an indicator lamp. c5-ground rings only the two ground legs, so a broken or high-resistance SIGNAL conductor — the single most likely cause of a crosscheck fault — is never measured. *(SM p.209 Safety Controller Pin Legend (J122-2 C142SBS-OR, J122-3 C141PBS-RD); SM p.210 Turntable Controller Pin Legend (J12-32 C123PBS-RD/BK, J12-33 C124SBS-OR/BK); cases/Z13513-1861/README.md "Hypotheses for the modification" item 2; c3c4-bridge steps[15])*
- **No card locates, opens or measures at J20, the 12-pin connector in the primary sensor's path** — All six primary-sensor conductors pass through J20 and the conductor colours change across it, so every J114 reading is really a reading through two J20 contacts. The setup card warns that "a continuity check that ignores J20 will point you at the wrong length of harness", c1-j114 puts J20 in three if_not branches, and c3c4-bridge makes the 1-6 and 2-5 continuity results depend on J20 being mated — yet no card sends anyone to find it. Every card that mentions J20 also records that its physical location is not given in any of the three manuals, and none resolves that. *(SM p.205 line 15448 "J20 12 pin Deutsch connector lower/upper limit switch harness"; figs/es-j114-primary-sensor.png (J20 pins 11, 12, 2, 10, 7, 6); setup card connector.description; c1-j114 open_questions)*
- **No card follows the white wire to its actual far end, or identifies the cut 2-pin stub at the turntable** — b1-toggle step 12 records that the white wire "carries on PAST the Scotchlok — so its own far end is somewhere further along and has not been seen yet; find it", and b3-host-wire records an unplugged 2-pin connector whose far end is cut and frayed. Neither card has a step that reaches the end of the wire or ohms the stub, and no other card covers it. An unidentified conductor that runs the length of the boom to a safety-sensor area, and a cut harness stub, are both left in place with no owner. The connector legend offers named candidates for a 2-pin harness-to-harness joint that nobody checks. *(SM p.207 lines 15646-15689 (J146 lower limit switch harness/engine harness, J149 boom composite, J153 engine and manifold harness, J157 PCON manifold/boom composite); b1-toggle steps[12] and open_questions; b3-host-wire what_it_looks_like and steps[9])*
- **No card tests the CAN bus between TCON and SCON** — "TCON-SCON calibration inconsistent" is a live message and the case file also carries an earlier "SCON CAN no response". Several cards reason FROM the CAN bus being healthy (a running engine means the SCON is on the bus, because Loss of CAN drops P_9B) but nothing verifies it, and the manual carries its own fault entry with a specific recovery action. No card reads D82CAN(+)-YL and D81CAN(-)-GR at SCON J121-6 and J121-7 or checks that wiring back to the TCON. *(SM p.176 "CAN Bus, Fault Check ... Check CAN wiring from TCON to SCON/PCON"; SM p.209 SCON pin legend, D82CAN(+)-YL and D81CAN(-)-GR (1268557.txt 16014, 16019); SM p.189 Loss of CAN row (13712-13718))*
- **No card checks the physical installation of the new sensor — arm, rotator, magnet engagement, travel** — The manual's own recovery for "Value Too High" is "Sensor is out of range. Check sensor and actuating pin for proper installation. Repair or replace sensor and recalibrate", and the Parts Manual notes the 216061GT sensor and its magnet are matched. This machine has a visibly new sensor kit at the primary pivot and a live "primary boom angle zone fault" — exactly the picture a mis-clocked rotator or an arm not engaging the pivot pin would give. Every card instead says do not disturb the sensor, so the one manual-listed mechanical recovery action is never performed, and nothing measures the sensor's own output across its travel. *(SM p.177 lines 12583-12589 (Value Too High recovery); PM p.169 item 17 216061GT "Sensor and magnet are matched and must be replaced at the same time. Machine calibration is required after installation."; PM fig 511.2 items 8 233118GT rotator, 9 218757GT sensor pin weldment, 21 233116GT sensor arm)*
- **No card clears the stored faults and re-reads the display after the work** — The crosscheck card is explicit that removing the bridge does not on its own restore propel — the latched fault has to be cleared — and the manual gives two different menus depending on software version plus the WebGPI route. d4-software records WHICH menu this machine has and then stops. Nothing in the set power-cycles with the fault corrected, clears, re-reads and confirms which messages actually go away, so the plan has no way to prove any repair worked. *(SM pp.107-108 Delete Faults / Clear Faults menus (1268557.txt 8177-8254); SM p.188 lines 13580-13582 and 13610-13612 "Use TCON display menu or laptop with WebGPI to clear faults"; 04-fault-codes.md "Clearing faults (pp.107-108)"; crosscheck card why_it_matters)*
- **There is no removal / repair card at all, and no verification that the bypasses are gone** — Eight of the fifteen cards defer the actual work to a card that is not in the set: "the repair card", "the removal card", "the next card decides removal and Genie-method harness repair", "that removal and repair is the next card", "a separate card deals with them". So the plan identifies two Scotchlok taps, a green jumper, an external frame-bonded green wire, a butt splice, a loose pin terminal and a non-Genie toggle switch — and removes none of them, re-terminates nothing with Deutsch pins, and never confirms the factory arrangement has been restored before the machine is handed to calibration. The worklist's own section F, the calibration decision, has no card either. *(b1-toggle steps[15]; b3-host-wire steps[13]; crosscheck safety[3]; c1-j114 expected[0].if_ok; c3c4-bridge plain_purpose; c5-ground steps[15]; parts card steps[2]; cases/Z13513-1861/README.md worklist sections A-F)*
- **No card inspects or tests the platform membrane panel and its two ribbon cables** — The case file's 2026-09-10 finding — both axle indicators lit at once, panel visibly wet, decal corner lifted — maps to a specific fault-table row whose recovery is "Check ribbon and connector from membrane switch. If necessary replace membrane switch." d1-joystick opens that same box and looks only at joysticks; the parts card prices 106509GT, 82841GT, 62399GT and 81488GT. Nobody checks the ribbons, the board or the wet overlay, so parts may be bought on a hunch and the same wet box will be re-energised. *(SM p.176 (1268557.txt 12493-12499) Axle Extend/Retract Buttons, both buttons pressed; SM p.29 steps 2-3 (ribbon cables at the membrane circuit board); PM p.209 and p.213 items; cases/Z13513-1861/README.md "Field observation 2026-09-10: both axle indicators lit")*
- **No card looks at the primary boom retract / extend limit switches LSP1RO and LSP1EO** — They sit on the same pivot bracket the technician is already at — the parts card quotes their assembly 110913GT, its 4-way connector 119067GT, lock 60443GT and pin terminal 73713GT — and the manual ties them to "Primary Boom Length, Fault Check (unknown length)", which stops all boom functions. The live "primary boom angle zone fault" has no entry anywhere in the manual, and these envelope-length switches are the nearest documented input to a zone/envelope complaint. No card so much as photographs them. *(SM p.173 Primary Boom Length Fault Check (04-fault-codes.md "Boom length and speed calibration (p.173)"); SM p.203 line 15355 LSP1RO definition; PM p.169 items 2, 2- (110913GT, 119067GT, 60443GT, 73713GT); parts card steps[8])*
- **No loaded test of the TCON supply or the 20 A system breaker** — The setup card describes the relay and fuse panel and says "just look for a blown fuse or a burnt relay socket" with no reading; c6-led measures at J15 only as a branch taken when the LCD is dead. Nothing measures battery voltage under load, the R21PIGN 20 A ignition fuse or the ground-panel 20 A breaker, and nothing compares the 5 V rail with the sensor plugs connected versus disconnected — which is the one measurement that would separate "TCON cannot make 5 V" from "something on the shared bus is pulling it down". The setup card's own arrival check offers 12-13 V as [M] with no follow-up. *(SM p.211 fuse panel legend (1268557.txt 16324-16378); SM p.177 recovery "Check that the 5.0 VDC LED is lit on the TCON board"; setup card steps[7] and expected[0]; c6-led steps[7])*
- **No systematic survey for further non-factory wiring** — Three separate unauthorised modifications have already been found in three different places (primary pivot, boom loom, platform box), plus a possible fourth at the turntable. d1-joystick and d2-tilt each survey one item. No card walks the machine end to end — turntable covers off, cable-track trays open, ground control box, chassis manifold boxes — looking for more taps, splices or added switches. The worklist's "D survey" section is only half covered, and the missing d3 card is where this most likely belonged. *(cases/Z13513-1861/README.md field observations 2026-09-12 (J114 splices; aftermarket toggle and white wire); b3-host-wire steps[10]; PM figs 507.1, 512.1, 516.1 cable tracks)*

## Places the sources contradict each other or the cards contradict each other

Read these before you trust a colour, a page number or a pin in the cards above.

- J114 seated wire colours and the identity of the loose pin — three cards read the same photograph three ways. c5-ground: the five seated conductors are RED, BLACK, YELLOW, GREEN, WHITE and "the BLUE wire does NOT enter the housing". c3c4-bridge agrees blue is the loose one and therefore infers the empty cavity is 3, i.e. C141PBS-RD, the safety signal to SCON J122-3. c1-j114 lists the five seated as blue, red, yellow, green, white (no black) and states the loose pin's conductor "is NOT established" because the lead is hidden behind the technician's thumb. This is the single most consequential disagreement in the set: it decides whether a safety angle signal is currently hanging disconnected.
- The Scotchlok taps — b3-host-wire and c3c4-bridge read one conductor per tap (the lower tap plainly on a yellow conductor, the upper tap's conductor not callable) with a green jumper looped between them. c5-ground and c7-bond both state that EACH tap engages a yellow conductor AND a green conductor. Two bridged conductors versus four, from the same two photographs.
- The pink crimp at the pivot bolt — c1-j114 states flatly it is a ring terminal under a bolt head and "not a butt splice"; c3c4-bridge says which of the two it is "cannot be told from the photo"; c5-ground and c7-bond and the case file all call it a butt splice. c1's own reasoning (a butt splice joins two wires end to end and cannot land on a bolt) is sound but is contradicted without being addressed by the later cards.
- What the green wire is bolted to — c1-j114 "a bare steel plate ... not identified in any manual"; c3c4-bridge "a large bare grey machined plate at the pivot (not on the small blue sensor bracket)"; c7-bond "a grey machined pad welded at the corner of a plate"; b3-host-wire and the case file "a bolt on the pivot bracket". No card settles whether that plate is even electrically continuous with the boom or the turntable, which is the whole point of c7's Reading A.
- The turntable tap pair — b1-toggle and b3-host-wire read the white wire tapped onto an ORANGE conductor with a BLACK stripe, which would make it circuit 64 "Power for operational switches" and put it straight on the stop-list. b5-y74 and d2-tilt read the same photo as a tap across a WHITE wire and a RED wire with a plain orange alongside and "no stripe can be made out". The stripe decides whether this is a safety-circuit bypass or something harmless.
- The 2-pin plug at that tap — b1-toggle and b3-host-wire call it grey and explicitly say it is grey not black; d2-tilt calls it "a small black sealed two-way plug". b3 adds that nothing proves it is a Deutsch at all.
- Axle position — c7-bond's machine_state instructs "CHECK THE AXLE POSITION ON SITE AND WRITE IT DOWN; do not assume. The case record says it measured 12.8 ft at the yard, which means the axles are extended, not retracted ... do not rely on any axle-out boom lockout". Every other card, the brief, and the case file's later update say the axles are retracted at 8 ft 1 in. c7 is citing a superseded line (README lines 8-9) over the 2026-09-10 update at lines 149-152.
- Opening the ground control box under power — the setup card removes the lid-open 5 V LED reading from State A, records the conflict with SM p.103 ("Push in the red Emergency Stop button ... at both the ground and platform controls") and states "This setup card does not authorise it." c6-led then does exactly that in step 5, acknowledging it is "NOT a manual procedure" but proceeding. The two cards are in open disagreement about whether the reading may be taken.
- E-stop state — the setup card's State A requires BOTH E-stops pulled OUT, and every later card claims to start from that setup; c1-j114, c2-j154, c6-led and d4-software all instruct that the PLATFORM E-stop stays pushed IN. The base card and its dependents give different instructions for the same state.
- J15 — SM p.205 calls it "Black 4 pin DTP connector on PCON" while SM p.210 lists J15 under "Turntable Controller" and the schematic draws it feeding the TCON. The setup card says treat the ground-box receptacle as the TCON battery feed "until proven otherwise"; c6-led declares the p.205 line "a typo". Manual self-contradiction, resolved differently by two cards and never referred to Genie.
- J166 — schematic ES0366J labels the function enable valve coil "Y74 FUNCTION ENABLE VALVE (J166)", the connector legend gives J166 as the 6-pin jib bellcrank sensor and J162 as the 3-pin jib bellcrank angle sensor, and the same sheet draws a SECOND, 3-pin J166 at the jib bellcrank. b5-y74 and the case file both flag it; no one has asked Genie.
- V155PSE versus V155PCE — the schematic prints PSE at the valve, the TCON pin legend prints PCE at J14-34 for the same orange/red circuit-155 wire, and the suffix table defines PSE as Program Setup Enable and PCE as Pressure Comp Enable. Unresolved.
- Wire-colour contradictions inside the manual, carried by several cards and never referred upward: circuit 124 is RD/WH in the SM p.199 wire legend but OR/BK in the SM p.210 pin legend and on the schematic; S140ENL is OR/RD in the pin legends but "orange/black" in the SM p.175 fault text; circuit 23 is WH in the table but P23PCON-BK in the legend; circuit 52 is BL/RD "Auxiliary Platform" but P52PCON-WH; circuit 132 is GR but S132LDS-BL/WH. Worst of all, the brown sensor ground SNSR GND-BR has NO circuit number anywhere — circuit 110 "Sensor Return" is listed as BK and BR is assigned to circuit 89.
- SM p.189 matrix layout — the descriptive title boxes run P_38, P_39, P_10, P_11, P_9B, P_30 while the narrow data columns underneath run P_38, P_39, P_10, P_11, P_30, P_9B. Scoring the crosscheck row against the titles reverses P_9B and P_30 and would wrongly predict the engine should be dead. The crosscheck card caught it; nothing in the manual resolves it.
- The two ES0366J harness colour variants — the sheet carries a "UNIT #130 OR HIGHER" J20-to-J114 block (RD, WH/BK, BL, OR, GR, WH) and a "UNIT #129 OR LOWER / VERSION S0675110 SOFTWARE (PHASE 2)" block (OR, GR, RD, RD/BK, BK, GR/BK). Nothing ties serial Z13513-1861 to either, and the conductors actually photographed at this machine's J114 match NEITHER set. Until the unit number is established, no colour on any pin table in this plan can be used.
- Secondary sensor build mismatch — SM section 4-9 describes a bracket with two springs and a hex-shaped key, while PM figure 502.2 for the from-SN-1854 group (which is this machine) shows a base / race / holder / arm / rotator stack and lists no angle-sensor cover at all. c2-j154 flags it; the manual does not resolve which arrangement a SN 1861 machine has.
- Parts availability questions never put to Genie — kit 217246GT is indexed only under the superseded figure 511.1 and this machine's figure 511.2 lists 215728GT and 216061GT instead; the PM p.77 note reads "no longer available ... after SN 12853" which is probably a misprint for 1853; and the Parts Manual contains NO 6-way Deutsch connector body, lock, seal or terminal anywhere, so 73713GT is an inference from 2-way and 4-way listings. The parts card states all three honestly and none is settled.

## Reviewer's overall verdict

> The set is unusually disciplined on sourcing — nearly every statement is tagged, cited to a printed page, and several cards visibly caught their own earlier errors. The weaknesses are structural rather than factual. Three holes stand out. First, the plan never measures the quantity the fault set is about: no card reads the operational and safety angle signals live, so it can prove supply and ground are healthy and still say nothing about why the two controllers disagree. Second, there is no repair card — eight cards defer removal of the Scotchlok bridge, the frame bond, the butt splice and the aftermarket toggle to a card that does not exist, and nothing verifies the bypasses are gone or clears the latched faults afterwards, so the plan cannot close its own loop. Third, one of the seven live faults, the secondary boom switches, has no card at all even though it is the fault with the most complete recovery procedure in the manual. Add J20 (routed through by three cards, located by none), the harness continuity from connector to controller pin, and the CAN link that several cards reason from but none tests. The most urgent single item is the disagreement over the loose pin at J114: c5 and c3c4 read the blue conductor as the one hanging out, which makes it cavity 3, the safety signal to SCON J122-3, while c1 says the conductor cannot be identified. If c3c4 is right, a safety input is currently disconnected and several cards are still instructing power-ups and one is instructing a deliberate reconnection of the modified connector. Settle that photograph first, then write the missing signal-measurement, LSS1RS/LSS1RO, harness-continuity and removal/verification cards.

