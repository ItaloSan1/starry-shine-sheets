# Boom angle sensor calibration — step by step

Source: Service and Repair Manual 1268557GT. All steps `[V]`.

| Procedure | Page |
|---|---|
| How to Calibrate the **Primary** Boom Angle Sensor | **p.82–87** |
| How to Calibrate the **Secondary** Boom Angle Sensor | **p.89–94** |
| Full Machine Calibration sequence | **p.105** |

---

## 0. Which procedure — check this first

The software version is displayed on the LCD when the red Emergency Stop button
is pulled out to on.

| Version | Procedure | Digital level |
|---|---|---|
| **4.01 and higher** | **2-point** (below) | Not required |
| Below 4.01 | 6-point (p.82–87 / p.89–94) | Required — kit **`58351`** |

## Prerequisites

- Firm, level surface
- Booms **fully stowed**, in the **drive enable zone**
- **Axles fully extended**
- Calibration values are **not saved** unless the bypass key position **and** the
  calibration toggle switch are both active

## Order (SM p.105) — mandatory

Engine config → joysticks → **turntable level sensor** → **platform level
sensor** → **axle angle sensors** → **steer sensors** → **secondary boom angle
sensor** → **primary boom angle sensor** → jib bellcrank → option config.

> *"Tip-over hazard. Failure to calibrate the machine in the proper sequence
> could cause the machine to tip over resulting in death or serious injury."*

---

## Entering calibration mode

1. Push the ground controls red Emergency Stop button **in** (off). **Do not turn
   the key switch off.**
2. Turn the main key switch to **ground controls**.
3. Open the ground control box.
4. **Calibration toggle switch** at the top of the box → move **left**.
5. Temporarily fit a door retaining fastener between door and box so the door
   cannot move the toggle.
6. Remove the key from the main key switch, insert into the **bypass/recovery**
   key switch, turn to **Bypass**.
7. Press and **hold enter** while pulling the red Emergency Stop button **out**
   to on. Hold enter ~5 seconds, release.
8. Press **(plus)(enter)(enter)(plus)**.

> *"If the system exits out of calibration mode when the engine is started,
> repeat step 8."*

---

## SECONDARY boom angle sensor — 2-point (SM p.89, steps 43–56)

Do this one **before** the primary.

1. Press **enter** or **previous** until `DELETE SECONDARY BOOM ANGLE SENSOR
   CALIBRATION` is displayed.
2. **plus** = YES, then **enter** to accept.
3. Lower the secondary boom to the **stowed** position.
4. Scroll until `SECONDARY BOOM FULLY LOWERED` is displayed.
5. **plus** = YES, then **enter**.
6. **Fully raise** the secondary boom until it stops at the end of the cylinder
   stroke.
7. Scroll until `SECONDARY BOOM FULLY RAISED` is displayed.
8. **plus** = YES, then **enter**.
9. **Press and hold the ENGINE START button ~5 seconds** to shut the engine off
   and save.
10. Scroll until `EXIT` is displayed. **plus** = YES, then **enter**.

---

## PRIMARY boom angle sensor — 2-point (SM p.82, steps 46–57)

1. Press **enter** or **previous** until `DELETE PRIMARY BOOM ANGLE SENSOR
   CALIBRATION` is displayed.
2. **plus** = YES, then **enter** to accept.
3. Lower the primary boom to the **stowed** position.
4. Scroll until `PRIMARY BOOM FULLY LOWERED` is displayed.
5. **plus** = YES, then **enter**.
6. **Fully raise the SECONDARY boom** until it stops at the end of the cylinder
   stroke.
7. **Fully raise the PRIMARY boom** until it stops at the end of the cylinder
   stroke.
8. Scroll until `PRIMARY BOOM FULLY RAISED` is displayed.
9. **plus** = YES, then **enter**.
10. **Press and hold the ENGINE START button ~5 seconds** to shut the engine off
    and save.
11. Scroll until `EXIT` is displayed. **plus** = YES, then **enter**.

---

## The step that loses the whole job

> *"**Do not turn the engine off with the key switch or red Emergency Stop
> button or all calibration points or values will not be saved.**"*

The engine is shut off by **holding the engine start button for about five
seconds**. Every time. Killing it on the key or the E-stop discards everything
entered.

---

## Finishing up

1. Turn the bypass/recovery key back to **Run** and remove the key. Insert it
   into the **main key switch** and turn to **ground controls**.
   *"Be sure that the bypass/recovery key switch is in the run position before
   attempting to operate the machine."*
2. Wait ~20 seconds, then press the red Emergency Stop button **in**.
3. Remove the temporary fastener and close the control box door.
   *"When the control box door is closed, the calibration toggle switch is
   automatically activated to exit out of calibration mode."*
4. Pull out the red Emergency Stop button, start the engine, lower the boom to
   the stowed position, and **confirm there are no calibration faults on the
   display**.
5. Perform the **primary boom angle test** (Maintenance Procedure, *Test the
   Primary Boom Angle Sensor*).

---

## If `TCON/SCON CALIBRATION INCONSISTENT` does not clear

That fault generally means more than the boom sensors need doing. Work the full
p.105 sequence: turntable level sensor, platform level sensor, axle angle
sensors, steer sensors, then secondary boom, then primary boom, then jib.

## 6-point procedure notes (software below 4.01)

Uses a digital level on the boom and records five or six angle points
(−50°, −20°, +10°, +40°, fully raised ≈ 70° for the primary), adjusting the
displayed value with **plus**/**minus** to match the level at each point.

> *"If the measured angle already matches the angle shown on the display at the
> ground controls, press the plus button or minus button to change the angle and
> then change back to the measured value. The system must detect a change in
> displayed value to record the calibrated value."*
