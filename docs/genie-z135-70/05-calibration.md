# 05 — Calibration procedures (Service Manual 1268557GT) `[V]`

## Full machine calibration order (SM p.105) — after TCON (ALC-1000) or SCON replacement
Qualified technicians with Genie factory service training only. Tip-over
hazard if done out of sequence. Start with booms fully stowed and axles
retracted. Digital level kit **58351** (digital level, magnetic base, harnesses).
1. Select engine configuration (Display Module → Unit of Measure and Language → Set engine).
2. Joysticks.
3. Turntable level sensor.
4. Platform level sensor.
5. Axle angle sensors.
6. Steer sensors (all).
7. Secondary boom angle sensor.
8. Primary boom angle sensor.
9. Jib boom bellcrank angle sensor.
10. Select option configuration (Display Module → Options).

Rules that appear in every sensor procedure:
- Before SN 321: jumper across the 2-pin connector, lower-left of the ground box, and **remove it afterwards** (tip-over hazard). After SN 320: calibration toggle switch at top of box moved left, door fastener fitted so the door cannot move it; closing the door exits calibration mode.
- Key in the **bypass** position; hold **Enter ~5 s while pulling the ground E-stop out**; enter sensor calibration with **(plus)(enter)(enter)(plus)**.
- The display must see a change: if the measured value already matches, change it and change it back.
- Save by **holding engine start ~5 s until the engine shuts off**; a key or E-stop shutdown loses all points.
- Afterwards: EXIT → YES → Enter; key back to run, key back to the main switch (ground); wait ~20 s; E-stop in; remove jumper/fastener; start and stow; confirm no calibration faults; perform the related test from the Maintenance Manual.
- Software **4.01 and higher**: use the **2-point** procedures (no digital level). Before 4.01: **6-point** procedures with the digital level. Version shows on the LCD when the E-stop is pulled out.

## Joysticks (SM pp.30–33)
Engine off. For each: key off → hold Enter while turning key to **platform** (~5 s) → **Minus ×2, Enter ×2** (valve calibration menu) → scroll to DELETE … JOYSTICK DEFAULTS (drive; steer; secondary boom; primary boom extend/retract; primary boom up/down; RESET jib boom up/down; turntable rotate) → Plus YES, Enter → do not start engine → move that control full stroke one way, hold 5 s, centre; full stroke the other way, hold 5 s, centre. Ground alarm sounds on success. Check display for calibration faults. A joystick must be calibrated before threshold, max-out or ramping can be set.

## Proportional valve coil defaults, thresholds, speeds, ramps (SM pp.34–38)
- **Reset a valve coil default** (only after replacing a proportional valve): same menu, Previous to the valve, Plus YES, Enter, EXIT YES. Then thresholds and default speeds must be set.
- **Thresholds**: engine on from platform, foot switch, foot-switch high idle. Ease the joystick until the function just moves, back off until just before it stops, hold, press **engine start** to store; other direction; repeat for primary up/down, turntable rotate, primary ext/ret, secondary up/down & ext/ret, drive fwd/rev. Hold engine start until engine stops; alarm ~3 s later confirms save. Key off/on to platform; check for faults.
- **Function speeds** (stowed, between circle-end tires, level ground; enter the valve calibration menu unless the LCD shows NOT CALIBRATED): primary up/down and ext/ret: full stroke until alarm, opposite until alarm; secondary: from stowed up until alarm, down until alarm; turntable rotate retracted; turntable rotate with primary extended ~4 ft; turntable rotate with primary 4 ft and jib 1 ft. Save with engine start.
- **Adjust speeds**: hold Enter → platform, **Plus ×2, Minus ×2**, Previous to function, Plus/Minus, Enter, EXIT YES; target the Section 2 function-time specs.
- **Ramp rate**: hold Enter → platform, **Plus ×2, Previous ×2**, Previous to function, Plus/Minus, Enter, EXIT YES.

## Turntable level sensor (SM pp.154–157)
Booms fully stowed, **axles fully extended**, firm level surface. E-stop in; open box; jumper/toggle; key to ground; key into bypass; hold Enter while pulling E-stop; (plus)(enter)(enter)(plus). **SET UNIT X AXIS LEVEL TO GRAVITY**: place a digital level calibrated to gravity on the turntable X axis (positive = side slope one way, negative the other; illustration is at the platform end); Plus/Minus to the exact reading, Enter. **SET UNIT Y AXIS LEVEL TO GRAVITY**: level on the Y axis (positive = downhill, negative = uphill); enter, Enter. EXIT YES. Key to run, back to main switch, wait 20 s, E-stop in, remove jumper/fastener. Start, confirm no faults, then **Test the Level Sensor** (Maintenance Manual).

## Platform level sensor (SM p.42)
Level surface, boom stowed. Digital level on a platform side rail; start and level platform to gravity; off. Jumper/toggle; key in bypass; hold Enter ~5 s while turning key to ground; (plus)(enter)(enter)(plus); **SET PLATFORM LEVEL SENSOR TO GRAVITY** → Plus YES, Enter; EXIT YES. Remove jumper/fastener.

## Axle angle sensors (SM pp.165–169)
Install: axles retracted, boom stowed; activator pin parallel with the chassis side plate; sensor over the pin, rotate housing clockwise until the cable is parallel with the side plate; cover screws loose.
Calibrate (two people): key to platform, both E-stops out. Loosen cover screws, probe connector **pins 2 and 3** with a DC voltmeter (or WebGPI), rotate the cover until **4.2 to 4.4 V DC**, tighten; repeat other sensor. Ground E-stop in; open box; jumper/toggle; key in bypass; hold Enter while pulling E-stop; (plus)(enter)(enter)(plus); **DELETE AXLE ANGLE SENSORS CALIBRATION** (before sw 3.0: RESET AXLE ANGLE SENSORS) → YES; at **AXLE ANGLES FULLY RETRACTED** → YES, Enter; when **AXLE ANGLES FULLY EXTENDED** shows, start engine and fully extend the axles (if calibration mode exits on start, repeat the Enter-hold step); YES, Enter; EXIT YES; hold engine start ~5 s to save; wait 20 s; E-stop in; remove jumper/fastener; key to run and back to main switch.

## Steer sensors (SM pp.158–163)
Sensor and **magnet must be replaced as a set**. Each sensor sits on top of its steer yoke upper pivot pin. Lead sensor: square-end ground-controls side (LF) in front steer; circle-end ground-controls side (LR) in rear steer.
Replacement: axles retracted, boom stowed, wheels visually parallel. LF (square-end blue side) and RR (circle-end yellow side): fit with the cable angled toward the tire, rotate clockwise until the cable points away from the machine. RF (square-end yellow side) and LR (circle-end blue side): fit with the cable angled away from the tire, rotate clockwise until the cable points away from the machine. Cover screws loose; connect; ensure the yoke pivot pin retaining plate is fully engaged.
**Calibrate a replacement steer sensor** (two people, axles retracted, tires straight): start from platform; select **rear** steer if a front sensor was replaced, **front** steer if a rear sensor was replaced; second person on foot switch; loosen the cover, rotate it until that tire is straight relative to the others; tighten; E-stop in. WebGPI can also be used.
**Calibrate all steer sensors** (only after TCON replacement; axles retracted, tires straight): jumper/toggle; key to ground, E-stop out; loosen covers; voltmeter on connector **pins B and C**: LF and RR set to **1.4–1.6 V DC**; RF and LR set to **3.4–3.6 V DC**; tighten. Key in bypass; E-stop in; hold Enter while pulling E-stop; (plus)(enter)(enter)(plus); **DELETE ALL STEER SENSORS CALIBRATION** (before sw 3.0: RESET ALL STEER SENSORS) → YES; EXIT YES. Single sensor: DELETE BLUE END BLUE SIDE STEER SENSORS CALIBRATION (FL) etc. E-stop in; remove jumper/fastener; key to run.

## Secondary boom angle sensor (SM pp.88–94)
Location: turntable riser bulkhead, ground-controls side. Replacement uses two springs and a hex key like the primary sensor; align the sensor flat with the pivot pin flat, rotate the bracket clockwise into the machined pocket.
Prerequisite: axle sensors and turntable level sensor calibrated first. Booms stowed, in the drive enable zone, **axles fully extended**.
**6-point (before 4.01)**: E-stop in (key on), key to ground, jumper/toggle, key in bypass, Enter-hold, (plus)(enter)(enter)(plus), **DELETE SECONDARY BOOM ANGLE SENSOR CALIBRATION** YES. Digital level calibrated to the turntable Y axis on top of the secondary boom; at SECONDARY BOOM ANGLE TO GRAVITY **−3.5 DEG** enter the reading (negative). Start engine. Raise to **20°**, enter; **35°**; **50°**; **65°**; fully raised (cylinder at end of stroke) = **76°**, enter. Engine start ~5 s to save; EXIT YES; key run/main; 20 s; E-stop in; jumper/fastener out; start, stow, no faults; **Test the Secondary Boom Angle Sensor**.
**2-point (4.01+)**: same entry; DELETE … YES; secondary stowed → **SECONDARY BOOM FULLY LOWERED** YES; raise until cylinder stops → **SECONDARY BOOM FULLY RAISED** YES; engine start ~5 s; EXIT YES; key run/main; 20 s; E-stop in; fastener out; test.

## Primary boom angle sensor (SM pp.81–87)
Location: inside the primary boom at the pivot end (remove pivot-end cover). Limits primary angle relative to secondary and gravity: 0° slope → 68° max; 5° downhill (positive Y) → 43° max.
Prerequisite: axle sensors, secondary angle sensor and turntable level sensor calibrated first. Booms stowed, drive enable zone, axles fully extended.
**6-point (before 4.01)**: entry as above; **DELETE PRIMARY BOOM ANGLE SENSOR CALIBRATION** YES; digital level on top of the primary boom; at PRIMARY BOOM ANGLE TO GRAVITY **0.0 DEG** enter the reading; start engine; **fully raise the secondary boom**; lower primary to **−50°**, enter (negative); raise to **−20°**, enter; **10°**; **40°**; fully raised (cylinder end of stroke) = **70°**, enter. Engine start ~5 s; EXIT YES; key run/main; 20 s; E-stop in; jumper/fastener out; stow, no faults; **Test the Primary Boom Angle Sensor**.
**2-point (4.01+)**: DELETE … YES; primary stowed → **PRIMARY BOOM FULLY LOWERED** YES; fully raise the secondary, then fully raise the primary → **PRIMARY BOOM FULLY RAISED** YES; engine start ~5 s; EXIT YES; finish as above.

## Jib boom bellcrank angle sensor (SM pp.56–63)
Location: bellcrank pivot pin, engine side. Prerequisite: primary, secondary and turntable level sensors first. Stowed, **axles extended**, level ground. Digital level zeroed vertically (or subtract from 90°). Jib slightly below horizontal; ground E-stop in (key on); open box; jumper/toggle; key in bypass; Enter-hold while pulling E-stop; (plus)(enter)(enter)(plus); **DELETE JIB LEVEL ANGLE SENSOR CALIBRATION** YES; at "jib level calibration deg 60.0deg" start engine; function enable + **platform level up** to fully extend the jib level cylinder (in bypass the platform level buttons drive the jib level cylinder) → bellcrank ≈ **60 ± 2°**, level on the bellcrank face, enter exact value. Platform level down to ≈ **34 ± 2°**, enter; ≈ **8 ± 2°**, enter; raise jib above horizontal for clearance; ≈ **18 ± 2°** enter as **negative**; ≈ **44 ± 2°** negative; ≈ **70 ± 2°** (level cylinder fully retracted) negative. Engine start ~5 s; EXIT YES; key run/main; 20 s; E-stop in; jumper/fastener out; start, stow, no faults. Software 4.01+ menu offers "Jib level cylinder fully extended / fully retracted" 2-point entries (SM p.113).

## Platform overload system, if equipped (SM pp.43–45)
Mechanical load-spring adjustment with a test weight equal to the serial-plate capacity at platform centre: bounce 1–2 in, settle; tighten spring nut clockwise just until alarm/light go off (or loosen just until they come on); 2 s delay. Confirm: lift and replace weight → no alarm; add **15 lb / 6.8 kg** → alarm, light flashing, "platform overload" on LCD, all platform and ground functions inhibited.

## Steer sensor and axle sensor pin references
Steer sensor connector: pins B and C measured (1.4–1.6 V or 3.4–3.6 V). Axle sensor connector: pins 2 and 3 (4.2–4.4 V). DCON supplies steer sensor 5 V on J32-20 (P109ANG) and ground on J32-19 (P110RT); signals on J32-10…13 (C111RRS, LRS, RFS, LFS).
