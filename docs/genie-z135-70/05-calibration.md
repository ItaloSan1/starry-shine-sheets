# 05 — Calibration procedures

Rules that apply to everything below `[V]`:
- Every replaced sensor, joystick or proportional valve must be calibrated before that function operates.
- Calibration order: if the primary or secondary boom angle sensors or the turntable level sensor were removed/replaced, calibrate them **before** the jib boom bellcrank angle sensor. SCON replaced → full machine calibration in the manufacturer's order (Repair Procedure "Full Machine Calibration").
- Sensor calibration needs: key in **bypass**, calibration **toggle switch** (after SN 320) or **jumper** (before SN 321), firm level surface, boom stowed, **axles extended** (bellcrank procedure), digital level kit **58351** (digital level with magnetic base and harnesses).
- Save with the **engine start button held ~5 s** until the engine stops. Key or E-stop shutdown loses the values.
- Display must detect a change: if the measured value already matches, change it and change it back.
- After every procedure, check the ground display for calibration faults; repeat if any.
- Do not use "Reset All" on the display: it wipes the machine profile and forces a complete recalibration `[F]`.

## Joystick calibration `[V]` (Service Manual pp.30–33)
Engine off. For each function:
1. Key off. 2. Hold **Enter** at ground panel while turning key to **platform**, ~5 s. 3. **Minus ×2, Enter ×2**. 4. Scroll to the item: DELETE DRIVE JOYSTICK DEFAULTS / DELETE STEER JOYSTICK DEFAULTS / DELETE SECONDARY BOOM JOYSTICK DEFAULTS / DELETE PRIMARY BOOM EXTEND/RETRACT JOYSTICK DEFAULTS / DELETE PRIMARY BOOM UP/DOWN JOYSTICK DEFAULTS / RESET JIB BOOM UP/DOWN JOYSTICK DEFAULTS / DELETE TURNTABLE ROTATE JOYSTICK DEFAULTS. 5. Plus (YES), Enter. 6. Do not start engine. 7–9. Move that joystick (or thumb rocker) full stroke one way, hold 5 s, centre; full stroke the other way, hold 5 s, centre. Result: ground alarm sounds for a successful calibration. Check display for calibration faults.

## Proportional valve coil defaults, thresholds, speeds, ramp `[V]` (pp.34–38)
- **Reset a proportional valve coil default** (only after a valve is replaced): same menu (Enter-hold to platform, Minus ×2, Enter ×2), Previous to the valve, Plus YES, Enter, EXIT YES. Then thresholds and default speeds must be set.
- **Function threshold**: engine running from platform, foot switch, rpm at foot-switch high idle. Move joystick just until the function moves, ease back just before it stops, hold, press **engine start** to store; repeat opposite direction; repeat for primary up/down, turntable rotate, primary extend/retract, secondary up/down & extend/retract, drive fwd/rev. Then hold engine start until the engine shuts off; ~3 s later the alarm confirms saving. Key off/on to platform; verify no calibration faults.
- **Function speeds** (stowed, between circle-end tires, level ground; enter the valve calibration menu unless the display says NOT CALIBRATED): primary up/down and extend/retract: full stroke until alarm, opposite full stroke until alarm; secondary up then down; turntable rotate stowed; turntable rotate with primary extended ~4 ft; turntable rotate with primary 4 ft and jib 1 ft extended. Save with engine start hold.
- **Adjust function speeds**: hold Enter to platform, **Plus ×2, Minus ×2**, Previous to function, Plus/Minus, Enter, EXIT YES; until speeds meet Section 2 Performance specs.
- **Ramp rate**: hold Enter to platform, **Plus ×2, Previous ×2**, Previous to function, Plus/Minus, Enter, EXIT YES.

## Platform level sensor `[V]` (p.42)
Machine level, boom stowed. Digital level on a platform side rail; start, level platform to gravity, turn off. Open ground box; jumper (before 321) or toggle left with door fastener (after 320); key in bypass; hold Enter ~5 s while turning key to ground; (plus)(enter)(enter)(plus); scroll to **SET PLATFORM LEVEL SENSOR TO GRAVITY**; Plus YES, Enter; EXIT, Plus YES, Enter. Remove jumper / fastener, close door.

## Platform overload system (if equipped) `[V]` (pp.43–45)
Mechanical load-spring adjustment: level platform; place test weight equal to the serial-plate capacity at platform centre; bounce platform 1–2 in and let settle; if alarm on, tighten load spring nut clockwise just until off; if off, loosen counter-clockwise just until on (2 s delay). Confirm: lift weight off and back on → no alarm; add **15 lb / 6.8 kg** → alarm, overload light flashing, "platform overload" on LCD, all platform and ground functions inhibited. Genie requires load-sense calibration annually or when the machine fails to lift rated load `[S]`.

## Jib boom bellcrank angle sensor `[V]` (pp.56–63)
Replacement: sensor sits on the bellcrank pivot pin, engine side; two springs (one in the pivot pin, one in the sensor) and a hex key; align the sensor flat with the pin flat; rotate bracket clockwise into the machined pocket.
Calibration (digital level zeroed vertically, or subtract readings from 90°): jib slightly below horizontal; ground E-stop in (key stays on); open box; jumper/toggle; key in bypass; hold Enter ~5 s while pulling E-stop; (plus)(enter)(enter)(plus); **DELETE JIB LEVEL ANGLE SENSOR CALIBRATION** → YES; at "jib level calibration deg 60.0deg" start engine; hold a function enable + **platform level up** to fully extend the jib level cylinder → bellcrank ≈ **60 ± 2°**; level on the bellcrank face; enter the exact reading, Enter. Then platform level down to ≈ **34 ± 2°**, enter; ≈ **8 ± 2°**, enter; raise jib above horizontal for clearance; ≈ **−18 ± 2°** (enter as negative); ≈ **−44 ± 2°** (negative); ≈ **70 ± 2°** with level cylinder fully retracted (bellcrank ≈70°), enter. Hold engine start ~5 s to save. EXIT YES. Key to run, back to main switch, ground; wait 20 s, E-stop in; remove jumper / fastener; start and stow, confirm no faults.

## Primary and secondary boom angle sensors `[V-index]` (pp.82, 89; full text pending)
- Same mode entry (bypass key + toggle/jumper + Enter-hold + (plus)(enter)(enter)(plus)); "6 Point Calibration" using the digital level kit 58351 `[S]`.
- Dual-output sensor: operational and safety channels. Field rule of thumb at stowed: operational ≈630–700 mV, safety ≈730–800 mV, safety ≈100 mV above operational, never below 600 mV, avoid ≈900 mV or calibration is refused; adjust by twisting the sensor shaft with an 8 mm wrench `[F]`.
- After SN 1853 use kit 217246GT for first replacement; sensor 216061GT + magnet are a matched pair `[V]`.
- Do not move, alter or disable an angle sensor (decal 82314): tip-over hazard `[V]`.

## Steer and axle sensors `[V-index]` (pp.158–167; full text pending)
Procedures exist for "Calibrate a Replacement Steer Sensor", "Calibrate All Steer Sensors" and "Calibrate the Axle Angle Sensors" using calibration mode, selecting the sensor, entering the measured value and storing it. Steer sensor P/N 106187GT (3-pin Deutsch DT: +5 V, signal, ground); axle sensor 94985GT `[V]`.

## Turntable level (tilt) sensor `[V-index]` (procedure "How to Calibrate the Turntable Level Sensor"; SCON alarm ±4.5°)
Display readouts TURNTABLE LEVEL SENSOR X-DIRECTION / Y-DIRECTION show degrees. If SCON has been replaced the entire machine must be calibrated in order.

## Field video notes `[F]` (other Genie models, for orientation only)
- Z-45 / S-series joystick recalibration from the platform: E-stop out, foot pedal down, hold each direction 5 s (matches the manual's 5-second rule).
- S-65 boom angle sensor: set output 3.8–4.2 V at full elevation before calibrating; calibration stores stowed and fully raised positions. Not the Z-135 procedure.
