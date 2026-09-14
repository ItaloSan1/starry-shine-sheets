# Safety system architecture, angle sensor installation, and expected values

Source: Service and Repair Manual 1268557GT (October 2018). Confidence tags:
`[V]` verified from the manuals, `[S]` other Genie publication, `[F]` field,
`[M]` unverified memory.

---

## 1. How the safety system works

### Two independent chains through one sensor body

Every boom angle sensor contains **two sensing elements**:

| Element | Read by | Purpose |
|---|---|---|
| Operational | **TCON** (turntable controller) | Normal function control, displayed angles |
| Safety | **SCON** (safety controller) | Independent envelope enforcement |

The two are compared continuously. Disagreement beyond tolerance raises a
**crosscheck fault**. The point of the design is that no single element failure
can silently misreport machine position.

### The SCON removes power — it does not send messages

The SCON has six power outputs. When a safety condition trips, the SCON drops
the relevant outputs. Nothing the TCON does can restore them.

| Output | Powers |
|---|---|
| `P_38` | Propel |
| `P_39` | Turntable rotate |
| `P_10` | Primary boom extend |
| `P_11` | Primary / secondary boom up |
| `P_30` | Secondary boom extend / down |
| `P_9B` | Ignition / fuel |

Fault-to-output matrix (SM p.189) [V], selected rows:

| Condition | P_38 | P_39 | P_10 | P_11 | P_30 |
|---|---|---|---|---|---|
| **Primary boom angle (crosscheck)** | OFF | OFF | OFF | OFF | OFF |
| Secondary boom angle (crosscheck) | OFF | OFF | — | OFF | OFF |
| Turntable tilt angle (crosscheck, SCON internal sensors, 3 in a delta) | OFF | OFF | OFF | OFF | OFF |
| Primary boom safety (max angle) | OFF | OFF | — | OFF | OFF |
| Loss of CAN | OFF | OFF | OFF | OFF | OFF |
| Axle safety not stowed | — | OFF | OFF | OFF | OFF |

**Primary boom angle crosscheck is the only sensor fault that kills all five
motion outputs.** A machine with no drive, no turntable rotate and no boom in
any direction matches that row and no other.

### The envelope is dynamic, not a fixed limit

The primary boom maximum angle is reduced as downhill slope increases [V]:

| Slope (positive Y axis) | Max primary boom angle |
|---|---|
| 0° (level) | **68°** |
| 5° downhill | **43°** |

So chassis attitude feeds the boom limit. The turntable tilt sensor lives
*inside* the SCON and uses three internal sensors in a delta configuration so it
can crosscheck itself.

### The platform has its own lockout

SM p.100 [V]:

> *"In the event that the platform angle is greater than 10° from level, the
> boom angle and platform level functions are disabled. Use of the Bypass mode
> will allow the platform to be manually adjusted to within the normal operating
> envelope, ±4.5°. Only auxiliary power can be used to correct an out of level
> platform fault."*

Above ±15°, all auxiliary-power functions are disabled and
`PLATFORM LEVEL > 15 DEGREES` is displayed; recovery mode is then the only way
down.

### Normal operating ranges (Machine Status menu, SM p.106–107) [V]

| Reading | Range |
|---|---|
| Primary boom to secondary boom angle | +22° to +136° |
| Secondary boom angle (referenced to chassis tilt angle) | −3.5° to 76° |
| Jib bellcrank angle | −10° to +10° |
| Primary boom length | =0 ft, >0 ft, >22 ft |
| Hydraulic pressure | 0–4500 PSI / 0–31000 kPa |

---

## 2. Expected electrical values at an angle sensor

### Supply

**5.0 VDC.** Every angle-sensor fault entry in the manual uses the same phrase:
*"Check for 5.0 VDC at the sensor."* [V] The TCON carries a **5.0 VDC LED** that
must be lit — the manual directs you to check it whenever a sensor reads 0 V.

### Signal

The signal must sit strictly between 0 and 5 V. The manual's fault taxonomy is
the specification, and it separates wiring faults from mechanical faults:

| Measured | Manual's fault name | Recovery action per SM p.178–179 [V] |
|---|---|---|
| 5.0 V | **Value at 5.0 V** | *"Check for an open ground circuit going to the sensor"* |
| 0 V | **Value at 0 V** | *"Check for 5.0 VDC at the sensor. Check for damaged wiring going to the sensor. Check that the 5.0 VDC LED is lit on the TCON board."* |
| High, not 5 | **Value Too High** | *"Sensor is out of range. Check sensor and actuating pin for proper installation. Repair or replace sensor and recalibrate."* |
| Low, not 0 | **Value Too Low** | same as Value Too High |
| Plausible but wrong | **Out of Tolerance** | *"Recalibrate sensor"* |
| — | **Not calibrated** | *"Perform calibration procedure per service manual"* |

**This is the most useful table in the manual.** Genie routes *no signal* to the
wiring and *wrong signal* to the sensor and its actuating pin. A machine
reporting **Value Too Low** is being told to look at the mechanical
installation, not the harness.

There is **no published millivolt-per-degree figure for the boom angle
sensors** — only the platform level sensor has an adjustable
millivolts/degree entry in the calibration menu. Judge a boom sensor by whether
its displayed angle tracks a digital level, not by an absolute voltage.

### How to measure

Back-probe with the connector **mated** and the machine powered:

- supply pin to sensor ground pin → **5.0 V**
- signal pin to sensor ground pin → a value between the rails that changes
  **smoothly and monotonically** as the boom moves

For resistance checks, unplug **both** ends — the sensor connector *and* the
controller connector. Disconnecting the batteries removes power but leaves the
controller's input networks in the circuit.

---

## 3. Angle sensor installation — the parts that are easy to get wrong

Primary boom angle sensor: SM p.81. Secondary boom angle sensor: SM p.88.
The two procedures are mechanically identical.

**Locations** [V]:
- **Primary** — inside the primary boom at the boom pivot pin, behind the boom
  end cover at the pivot end.
- **Secondary** — on the turntable riser bulkhead, ground controls side.

### The coupling

The sensor is driven off the boom pivot pin through a **hex-shaped key** held by
**two springs** — one in the hex-shaped hole in the sensor, one in the
hex-shaped hole in the centre of the boom pivot pin. The manual warns at removal:
*"Do not lose the two springs or the hex-shaped key."* [V]

### Installation steps 7–13 [V]

7. Install the sensor onto the mounting bracket.
   > *"Note the sensor orientation on the bracket during removal so the new
   > sensor will be installed in the same position."*
8. One spring into the hex-shaped hole **in the angle sensor**; the other spring
   into the hex-shaped hole **in the centre of the boom pivot pin**.
9. Insert the hex-shaped key into the angle sensor.
10. **Align the side of the sensor with the flat area of the boom pivot pin.**
    Primary: hold the bracket away from key insertion.
    Secondary: hold the bracket out to clear the turntable side plate.
11. **"While holding the hex-shaped key in position, rotate the angle sensor
    mounting bracket clockwise until it aligns with the machined pocket. Do not
    allow the key to rotate while holding it."**
12. Insert the key into the boom pivot pin and the bracket into the machined
    pocket. *"Be sure the hex-shaped key remains engaged in the sensor."*
13. Install the bracket retaining fasteners, cover, and connector, then
    **calibrate**.

### Why a misinstall produces exactly a "Value Too Low" + crosscheck fault

The coupling is a **hex — six flats**. Nothing mechanically prevents assembling
it one flat off:

| Error | Angular offset |
|---|---|
| One flat off | **60°** |
| Two flats off | **120°** |

Against a secondary boom working range of −3.5° to 76°, a 60° offset drives the
sensor hard against an end of travel. That reads as **Value Too Low** (or Too
High), and if the two elements inside the sensor land differently it also raises
a **crosscheck fault** — with a perfectly sound harness.

The manual's instruction *"do not allow the key to rotate"* exists precisely
because this is easy to get wrong.

### Inspection checklist for a sensor you suspect

- [ ] Both springs present and seated (they preload the key so it cannot back out)
- [ ] Sensor flat aligned with the flat area on the boom pivot pin
- [ ] Bracket fully seated in the machined pocket, not cocked or bridging
- [ ] Sensor orientation on the bracket matches the opposite/reference sensor
- [ ] Hex key fully engaged at both ends, no end float
- [ ] Displayed angle tracks smoothly and in the right direction as the boom moves
- [ ] Displayed angle agrees with a digital level on the boom

---

## 4. The calibration toggle switch — factory, not aftermarket

SM p.83 step 6 and p.90 step 40, for machines **after serial number 320** [V]:

> *"Locate the **calibration toggle switch at the top of the ground control
> box**. Activate calibration mode by moving the toggle switch in the **left**
> direction."*
>
> *"Temporarily install a control box door retaining fastener between the door
> and the box to **prevent the control box door from moving the toggle switch**
> while calibrating the machine."*
>
> *"**When the control box door is closed, the calibration toggle switch is
> automatically activated to exit out of calibration mode.**"*

The door is designed to push this switch back on closing. A toggle at the top of
the ground control box on a post-SN-320 machine is therefore most likely this
factory switch, not a modification.

**Check its position.** If the door is not reaching it, or it is stuck in the
left position, the machine can sit in or near calibration mode.

---

## 5. Calibration prerequisites and entry [V]

Values are **not saved** unless the bypass key position *and* the calibration
toggle are both active.

**Machine state required:** firm level surface, booms fully stowed, in the drive
enable zone, **axles fully extended**.

**Order:** axle angle sensors, secondary boom angle sensor and turntable level
sensor must be calibrated **before** the primary boom angle sensor.

**Software:** 4.01 and higher → 2-point procedure. Below 4.01 → 6-point
procedure, which needs a digital level; kit **`58351`** from Genie Product
Support includes a digital level with magnetic base and cable harnesses. The
software version is shown on the LCD when the red Emergency Stop button is
pulled out.

**Entry sequence:** key switch off → press and hold **enter** → turn key to on →
hold ~5 seconds → release → press **(plus)(enter)(enter)(plus)**.

**Note:** *"If the system exits out of calibration mode when the engine is
started, repeat step 8."*

**Sensor Calibration menu** (key OFF, hold enter, key on, release, then
(plus)(enter)(enter)(plus)) also exposes: set unit X-axis to gravity, set unit
Y-axis to gravity, set platform level to gravity, platform level sensor
millivolts/degree, and delete-calibration entries for the axle and steer sensors.

---

## 6. Safety

Never defeat a safety circuit, limit switch, angle sensor, tilt sensor or load
cell. The crosscheck architecture exists so that a single failure cannot hide;
bridging two sensor circuits to make them agree removes that protection
entirely. Bypass and Recovery modes are the manufacturer's sanctioned overrides
and both require trained personnel.
