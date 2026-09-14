# Getting Z13513-1861 narrow enough to load — how to bring the axles in

**Situation:** the trailer could not load the machine because it measured
**12.8 ft wide**. That is the axles fully extended. This document is the
step-by-step for bringing them back in, including what to do if the control
modules will not cooperate.

**Sources:** Operator's Manual 114474 (2nd Ed, 5th printing), Service and
Repair Manual 1268557GT (Oct 2018), Parts Manual 106877GT Rev H.04 (Jul 2024).
Confidence tags: `[V]` verified in the manuals, `[F]` field practice,
`[M]` engineering judgment, clearly marked.

---

## 0. The numbers

| | |
|---|---|
| Width, axles **extended** | **12 ft 11 in / 3.9 m** `[V]` OM p.64 |
| Width, axles **retracted** | **8 ft 1 in / 2.5 m** `[V]` OM p.64 |
| What you gain | **4 ft 10 in / 1.4 m** |
| Length, stowed | 42 ft 5 in / 12.9 m `[V]` OM p.64 |
| Height, stowed | 10 ft 1 in / 3.1 m `[V]` OM p.64 |
| Weight | **read the serial plate** — this machine's plate reads 45,264 lb `[V]` |

12.8 ft measured against 12 ft 11 in spec confirms the axles are fully out.
Retracted, at 8 ft 1 in, the machine sits inside a standard 8 ft 6 in deck.

---

## 1. What is holding the axles out — mechanically and electrically

### Mechanically: the axles are hydraulically locked
Two axle extension cylinders, one across the front pair of axle arms and one
across the rear (Parts Manual p.20/21, item 10, `98147GT CYLINDER,AXLE
EXTENSION Z135`, qty 2) `[V]`.

Each cylinder carries **two counterbalance valves** — front `DB`/`DC`, rear
`DD`/`DE`, cross-piloted, **3:1 pilot ratio, 3000 psi** (Hydraulic Schematic
HS0080T, SM p.227) `[V]`.

Practical meaning: **you cannot push the axles in and you cannot let them
drift in by cracking a hose.** The counterbalance valve on the far side stays
shut until it sees pilot pressure from the opposite line. The only way an axle
moves is to feed oil into the retract side under pressure.

### Electrically: three permissives
1. **Booms stowed.** "The axles can only be retracted if the primary and
   secondary booms are fully lowered and retracted and the platform is between
   the circle-end wheels." `[V]` OM p.48
2. **Drive enable light off.** "When the drive enable light is on, the axles
   cannot retract." `[V]` OM p.51
3. **Platform controls only, with the drive handle moved.** "At the platform
   controls, press down the foot switch and move the drive control handle in
   either direction. Activate the extend axle function or the retract axle
   function." `[V]` OM p.48. And: "Drive, steer and axle functions are **not**
   available from the ground controls." `[V]` OM p.48

### The safety mechanism you asked about — it points the other way
`LSFA1ES` (front) and `LSRA1ES` (rear) — "Limit switch, Front/Rear Axle #1
Extended Safety. **Prevents boom functions with the axles retracted.** Switch
closes when axles are fully extended." `[V]` SM p.203

So the interlock protects against *booming up on a narrow track*, not against
retracting. Retracting a stowed machine is the intended, normal operation.
Confirmed by the function test: with axles retracted the primary boom will not
raise, the secondary will not raise, the primary will not extend, and the
turntable stops at 15° `[V]` OM pp.31–32.

There is **no** ground-control axle button, **no** bypass-mode axle function,
and **no** recovery-mode axle function. Bypass mode is for a platform
out-of-level condition and calibration only `[V]` SM p.100. Recovery mode
retracts the primary boom, retracts the secondary boom and lowers the primary
boom — booms only `[V]` SM p.101.

---

## 2. Do this machine's eleven faults block the retract?

Checked line by line against the Control System Fault Code table.

| Fault on the display | Manual's stated effect | Blocks axle retract? |
|---|---|---|
| Front Axle Angle Sensor 0 V | "Primary up, Secondary up/down and Extend disabled, Alarm sounds" `[V]` SM p.184 | **No** |
| Rear Axle Angle Sensor 0 V | same `[V]` SM p.185 | **No** |
| LF / RF / LR / RR Steer Angle Sensor 0 V | same `[V]` SM pp.186–187 | **No** |
| Primary boom angle sensor not calibrated | "Primary up only active from TCON" `[V]` SM p.184 | Not directly |
| Secondary boom angle sensor not calibrated | boom functions `[V]` | Not directly |
| Secondary boom switch fault (LSS1RS) | "Inhibit Secondary Boom Down until the fault is cleared" `[V]` SM p.188 | Not directly |
| SCON CAN no response | "Display message on LCD" `[V]` SM p.176 | Not directly |
| Primary boom angle zone fault | SCON matrix row *Primary Boom angle (crosscheck)* switches **OFF: P_38, P_39, P_10, P_11, P_30** `[V]` SM p.189 | **Possibly — P_38 is propel power** |

**Read that last row carefully.** `P_38` is the switched safety power to
propel. If the SCON has latched the primary-boom-angle crosscheck fault, the
machine will not drive — and since axle motion is commanded with the drive
handle, no drive usually means no axle motion either.

The two SCON rows that mention axles — *Axle safety not stowed* and *Axle
crosscheck angle sensor versus safety switch* — switch off `P_39`, `P_10`,
`P_11` and `P_30`, but **not** `P_38` `[V]` SM p.189. So the axle sensors
reading 0 V, on their own, do not kill propel.

**The gate is simple: if the machine drives, the axles will almost certainly
retract.** That is the first thing to test.

---

## 3. Route A — retract from the platform (try this first)

Roughly 20 minutes. No tools. Two people.

### A-1. Before you touch a control
- Firm, level ground. Not a soft shoulder, not a slope.
- **Physically eyeball the booms.** Primary boom fully down and fully
  retracted. Secondary boom fully down and fully retracted. Jib stowed.
  Platform sitting between the two circle-end (steer-end) wheels. If any of
  that is not true, **stop** — get the booms stowed first, and do not attempt
  to narrow the machine with a boom up. That is the tip-over case the
  interlocks exist for.
- Turntable rotation lock pin **out** (it goes back in for transport, not now).
- Walk the four wheel wells. Nothing jammed in the axle slides, no frozen mud,
  bellows not shredded, no chain or strap through the arms.
- 15 to 20 ft of clear space fore and aft. **The machine rolls while the axles
  move** — that is by design, so the tires roll instead of scrubbing sideways.

### A-2. Start it and get to platform control
1. Key switch to **platform control**.
2. Pull out **both** red Emergency Stop buttons — ground box and platform box.
3. Start the engine from the platform. Do **not** stand on the foot switch
   while cranking `[V]` OM p.48.

### A-3. The propel test — this is the real diagnostic
4. Stand on the foot switch. Move the drive handle gently forward.
   - **It creeps** → propel power `P_38` is live. Go to A-4.
   - **Nothing, and the alarm sounds** → propel is cut. Go to §4.
5. If the **drive enable light** is on, the primary boom has swung past a
   circle-end wheel. The axles will not retract in that state `[V]` OM p.51.
   Rotate the turntable so the boom sits between the circle-end wheels and the
   light goes out.

### A-4. Retract
6. Foot switch down.
7. **Move and hold the drive control handle** in either direction — the
   machine will creep.
8. While holding it, **activate retract axle**: on the toggle-switch panel it
   is the axle extend/retract switch (item 24); on the button panel it is the
   axle retract button (item 31). The retract symbol is the one with the
   **arrows pointing inward** `[V]` OM pp.27–28, 48.
9. **The indicator light flashes while the axles move and goes steady when
   they are fully retracted** `[V]` OM p.48. Hold until it is steady.
10. Have your second person watch both ends. All four wheels should come in
    together. If one end moves and the other does not, stop and go to §5 for
    that end.
11. Measure. You are looking for **8 ft 1 in**.

### A-5. If it moves partway and stops
- Let it sit 30 seconds and try again — the pump may be catching up.
- Hot oil helps. Let the engine run at high idle for 5 minutes.
- Creep the machine forward and back a few feet between attempts to unload the
  tires. `[F]`

---

## 4. If the machine will not drive

Then propel power `P_38` is switched off, and the SCON is the thing doing it.
In order of what is cheap to check:

1. **Cycle the power properly.** Engine off. Both E-stops in. Key off. Wait
   60 seconds. Key on, E-stops out, restart. Many of these are latched
   history, not live faults — a full power cycle clears the ones that are
   self-clearing and leaves the real ones showing.
2. **Read the fault list again after the cycle** and note which ones came back.
   Only the ones that come back are live.
3. **Check the ground control display for a boom-angle-zone message.** If the
   primary boom angle sensor is the one holding `P_38` off, the fix is the
   sensor circuit, not the axles — that is the main diagnosis in
   `diagnosis-walkthrough.md`, and the leading suspect there is the
   `P21DCON` feed out of TCON `J12-2`.
4. If you can get the boom angle circuit healthy, propel returns and Route A
   works.

**What you must not do:** do not jumper, jump or hot-wire the axle retract
solenoid coil at `J100`, and do not tape the axle extended limit switches
closed. That chain is what stops the axles coming in with a boom in the air.
Route B below gets the same result with the same effect on the machine, but
under your direct hand at the cylinder, with the booms verified stowed first —
and it is the manufacturer's own documented method.

---

## 5. Route B — the manual's own no-controls method: portable hydraulic power unit

This is Genie's documented way to move an axle extension cylinder with no
machine control power. It appears in **SM 10-3, "How to Remove an Axle
Extension Cylinder", p.164** `[V]`. You are using steps 1–4 and 8, and
skipping the pin removal in steps 5–7 because you are not removing anything.

The manual's own words:

> "Connect the hydraulic hoses from a portable hydraulic power unit to the
> axle extension cylinder. **Note: Connect the pressure hose from the power
> unit to the "R" port of the cylinder and the return hose from the power unit
> to the "E" port on the cylinder.**" `[V]` SM p.164

`R` is the retract side. `E` is the extend side. Pressure into `R` pilots the
opposite counterbalance valve open and pulls that axle pair in.

### What you need
- Portable hydraulic power unit or hand pump able to make **2000+ psi** with
  a decent volume, plus two hoses with fittings to match the cylinder ports.
- Caps and plugs for the machine-side hoses and the cylinder fittings.
- Fresh O-rings for every fitting you break `[V]` SM p.164.
- Drip pans, rags, chocks, gloves, eye protection.
- Two people minimum.

### The steps
1. **Verify the booms are stowed.** Primary down and in, secondary down and
   in, jib stowed, platform between the circle-end wheels. Eyeball it, do not
   trust the display. If a boom is up, stop — narrowing the machine now is
   how these roll over.
2. Machine on **firm, level ground, in the stowed position** `[V]` SM p.164.
3. **Chock all four wheels.** `[V]` OM p.58
4. Engine off. Both red E-stops pushed in. Main key out and in your pocket.
5. Open the wheel-well access and find the axle extension cylinder for the end
   you are doing. Parts Manual **p.20, "201.1 Top View", item 10** shows both
   cylinders and their location `[V]`.
6. **Tag, disconnect and plug the hydraulic hoses from the cylinder. Cap the
   fittings on the cylinder.** `[V]` SM p.164
   > WARNING, from the manual: "Spraying hydraulic oil can penetrate and burn
   > skin. Loosen hydraulic connections very slowly to allow the oil pressure
   > to dissipate gradually. Do not allow oil to squirt or spray." `[V]`
7. The manual also removes the axle extension limit switch cover and the limit
   switch, leaving the wiring connected `[V]` SM p.164. Follow that if you
   want to match the manual exactly; it costs four fasteners and it protects
   the switch actuator block.
8. **Pressure hose to `R`. Return hose to `E`.** `[V]` SM p.164
9. Raise pressure **slowly**. The axle pair on that end will start in.
10. **Cap the pressure at about 2400 psi.** That is the machine's own axle
    extend relief setting, 2400 psi / 165 bar `[V]` SM p.5. If it will not
    move at that pressure, the tires are scrubbing — do not crank it up.
    Move the machine onto smooth flat pavement, or slide greased steel plates
    under the tires, and try again. `[M]`
11. Run it all the way to the stop, then release pressure.
12. **Repeat on the other end.** One cylinder per end; both must come in.
13. Reconnect the machine's hoses with **new O-rings**, torqued to spec
    `[V]` SM p.164. Reinstall the limit switch and cover if you removed them.
14. Start the engine, look for leaks, top up hydraulic oil.

### The part nobody tells you
With the machine's own controls, the axles retract **while the machine drives**
so the tires roll. With the power-unit method the machine is standing still, so
the tires have to **scrub sideways** across whatever they are parked on. On
pavement it works. On gravel or dirt it can stall. Smooth, hard, flat, and a
bit of grease is the difference between a two-hour job and a bad afternoon.
`[F]`/`[M]`

---

## 6. Route C — move it wide

If neither route gets the axles in, the machine still ships:

- **Oversize permit.** In Alberta a 12 ft 11 in load is a routine
  over-dimensional permit with pilot cars, not an exotic move. Confirm with
  the carrier before you commit.
- **Correct trailer.** 45,264 lb on the plate. A lowboy with a removable
  gooseneck, deck width to suit, and enough axles.
- **Crane it.** "There are four lifting points on the chassis" `[V]` OM p.60.
  Booms fully lowered and retracted, jib fully lowered and retracted, all loose
  items removed `[V]` OM p.60.
- **Winch it on, free-wheeling.** Chock the wheels, then "release the wheel
  brakes by turning over all four drive hub disconnect caps," secure the winch
  line to the drive chassis tie points, and reverse the procedure to re-engage.
  "The pump free-wheel valve should always remain closed." `[V]` OM p.58

---

## 7. Once the axles are in — what changes

- **The booms are locked out.** With the axles retracted the primary boom will
  not raise, the secondary will not raise, the primary will not extend, and
  the turntable rotates only 15° before it stops `[V]` OM pp.31–32. That is
  `LSFA1ES`/`LSRA1ES` doing exactly their job. Do not chase it as a new fault.
- **The machine steers differently.** Turning radius outside goes from
  18 ft 6 in extended to 25 ft 6 in retracted `[V]` OM p.64. Give yourself
  room on the ramp.
- **Load it promptly.** A Z-135 on a narrow track is far less stable than on a
  wide one. Do not leave it parked retracted on a slope, and do not boom it up.
- **Turntable rotation lock pin in** before it rolls `[V]` OM pp.58–59.
- **Secure it:** minimum 6 chains of ample capacity on the chassis; a block
  under the platform rotator, not touching the platform cylinder; a nylon strap
  through the lower platform support without excessive downward force
  `[V]` OM p.59.

---

## 8. Non-negotiables

- Never retract the axles with a boom raised or extended.
- Never jumper, jump or defeat the axle retract solenoid, the axle extended
  limit switches `LSFA1ES`/`LSRA1ES`, the axle angle sensors, the tilt sensor
  or the load cell.
- Never work under or beside a cylinder that is still under pressure. Bleed it
  slowly.
- Never adjust the axle relief above 2400 psi to force movement.
- Chock the wheels before any hydraulic work.

---

## 9. Figures in `figs/`

| File | What it is | Cite |
|---|---|---|
| `ax-om-extend-retract.png` | "To Extend and Retract Axles" — the whole procedure and the two symbols | OM p.48 |
| `ax-om-plat-panel.png` | Both platform control panel styles | OM p.25 |
| `ax-om-plat-legend2.png` / `-legend3.png` | Legend for the axle switch (24) and the axle buttons (30/31) | OM pp.27, 28 |
| `ax-om-drive-enable.png` | Drive enable light and "the axles cannot retract" | OM p.51 |
| `ax-om-freewheel.png` | Free-wheel configuration for winching | OM p.58 |
| `ax-om-transport.png` | Transport securement diagram | OM p.59 |
| `ax-pm-axle-fig.png` / `-list.png` | Drive chassis top view — axle cylinders (10) and limit switch (9) | PM pp.20–21 |
| `ax-sm-manifold.png` | Steer and axle manifold, exploded — `BT` axle extend, `BU` axle retract, `BS`, `BR` | SM p.139 |
| `ax-sm-manifold-table.png` | The same manifold as a table with functions and torques | SM p.138 |
| `ax-sm-cyl-removal.png` | SM 10-3 — the `R`/`E` port instruction | SM p.164 |
| `ax-hyd-axle-circuit.png` | Axle circuit — cylinders, `DB`/`DC`/`DD`/`DE` counterbalance valves, `FAE`/`FAR`/`RAE`/`RAR` | SM p.227 (HS0080T) |
| `ax-hyd-cbv-table.png` | Counterbalance valve table — `DB`,`DC`,`DD`,`DE` = 3:1, 3000 psi | SM p.227 |
| `ax-es-valves.png` | `Y99` axle extend / `Y100` axle retract coils, axle sensors `J160`/`J161`, front axle safety switch `J137` | SM p.229 (ES0366J) |
