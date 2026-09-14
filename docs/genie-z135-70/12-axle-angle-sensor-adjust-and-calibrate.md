# Axle angle sensors — adjust and calibrate

Source: Service and Repair Manual 1268557GT. All steps `[V]`.

| Procedure | Page |
|---|---|
| 10-4 Axle Angle Sensors — How to Install | **p.165–166** |
| How to Calibrate the Axle Angle Sensors (includes the adjustment) | **p.167–169** |

## What they are and where

> *"The axle angle sensors measure the axle angle and communicates that
> information to the ground controls ECM. **There are two axle angle sensors.
> They are located on opposite axle pivot pins at each end of the chassis.**"*

## Prerequisites

- **Axles fully retracted**, boom in the **stowed** position
- **Two people required**
- Voltmeter set to DC volts (or WebGPI)

---

## Part A — the adjustment

The **sensor cover is the adjuster.** You loosen it, rotate the whole housing
until the output voltage lands in spec, then tighten it.

1. Turn the key switch to **platform controls** and pull out the red Emergency
   Stop button to the on position at **both** ground and platform controls.
2. **Loosen** the axle angle sensor cover retaining fasteners.
   **Do not remove the fasteners or the sensor cover.**
3. Using a voltmeter set to DC voltage, **probe the back of the electrical
   connector at pins 2 and 3**.
   *"If available, WebGPI can also be used for this procedure."*
4. **Rotate the sensor cover clockwise or counterclockwise until the voltage
   reading is between 4.2 to 4.4 V DC.** Tighten the sensor cover retaining
   fasteners.
5. **Repeat steps 2 through 4 for the other axle angle sensor** if needed.

**4.2–4.4 V DC with the axles fully retracted.** That is the entire spec.

---

## Part B — then calibrate, or the adjustment means nothing

6. Push the ground controls red Emergency Stop button **in** to the off position.
7. Open the ground control box.
8. *(After SN 320 — this machine)* Locate the **calibration toggle switch at the
   top of the ground control box**. Activate calibration mode by moving the
   toggle **left**.
9. Temporarily install a control box door retaining fastener between the door
   and the box so the door cannot move the toggle.
10. Remove the key from the main key switch, insert into the **bypass/recovery**
    key switch, turn to **Bypass**.
    *"The angle sensor calibration values will not be saved correctly unless the
    key switch is in the bypass position and the calibration toggle switch is
    activated."*
11. Press and **hold enter** while pulling the ground controls red Emergency Stop
    button **out** to on. Hold ~5 seconds, release.
12. Press **(plus)(enter)(enter)(plus)**.
13. Scroll (**enter**/**previous**) to `DELETE AXLE ANGLE SENSORS CALIBRATION`
    → **plus** = YES → **enter**.
    *(Before software 3.0 this screen reads `RESET AXLE ANGLE SENSORS`.)*
14. At `AXLE ANGLES FULLY RETRACTED` → **plus** = YES → **enter**.
15. At `AXLE ANGLES FULLY EXTENDED` → **start the engine and fully extend the
    axles**.
    *"If the system exits out of calibration mode when the engine is started,
    repeat step 13"* (the enter-hold / E-stop pull).
16. **plus** = YES → **enter**.
17. Scroll to `EXIT` → **plus** = YES → **enter**.
18. **Press and hold the ENGINE START button ~5 seconds** to shut off the engine
    and save.
    *"Do not turn the engine off with the key switch or red Emergency Stop button
    or all calibration points or values will not be saved."*
19. Wait ~20 seconds, press the red Emergency Stop button **in**.
20. Remove the temporary fastener, close the control box door and fit the door
    fasteners. *"When the control box door is closed, the calibration toggle
    switch is automatically activated to exit out of calibration mode."*
21. Turn the bypass/recovery key back to **Run**, remove it, insert into the main
    key switch and turn to **ground controls**.
    *"Be sure that the bypass/recovery key switch is in the run position before
    attempting to operate the machine."*

---

## If a sensor has to come off (SM p.165–166)

1. Locate the sensor. Tag and disconnect its electrical connector from the
   chassis harness.
2. Remove the angle sensor cover retaining fasteners; remove the sensor assembly.
3. **Inspect the sensor activator pin — it must not be broken or twisted.**
   A replacement activator pin installs **parallel with the drive chassis side
   plate**.
4. Position the new sensor assembly over the activator pin, align, and install
   the sensor onto the pin. **"Be sure the actuator pin is engaged into the
   sensor."**
5. **Rotate the sensor housing clockwise until the sensor cable is parallel with
   the drive chassis side plate.**
6. Install the cover retaining fasteners — **do not tighten them.** They are left
   loose deliberately so the 4.2–4.4 V adjustment above can be made.
7. Connect the sensor cable to the chassis harness.
8. Do Part A, then Part B.

---

## Why this matters on this machine

Both axle extend indicators at the platform were **flashing** with the axles
physically fully retracted. Per OM p.27, flashing means *in transit* and solid
means *fully extended* or *fully retracted* — so the machine did not believe the
axles were at an end position. The 4.2–4.4 V adjustment is what defines "fully
retracted" for the machine.

The SCON also crosschecks the angle sensor **against the axle extension limit
switch** (*"Axle crosscheck angle sensor versus safety switch"*, SM p.189). If
that switch is not made with the axle fully in, the machine still will not see
"fully retracted" however well the sensor is adjusted. Check both.
