# 08 — Diagnostic playbook

## A. Universal first steps `[V]`
1. Battery ≥ 12.4 V rested (Group 31, 1000 A). Low voltage creates false CAN and sensor faults. `[F]` on the threshold, `[V]` on the spec.
2. Key on, E-stop out, engine off; let the ground LCD scroll a full cycle; record every message (video it).
3. Note the software version at start-up (VER x_xx).
4. Identify the fault class: safety switch (Pxx), sensor value (0 V / 5 V / not calibrated / cross check), CAN (no response), engine, overload.
5. Recycle power once. Faults that clear were history.
6. Never bypass a safety circuit; never operate a machine whose envelope is faulted.

## B. Owner's machine case: Z13513-1861 (2013, 2,162 h) `[V]` from the Drive flowchart, pins cited to 1268557GT / 106877GT
Fault set: SCON CAN no response; 4 steer sensors 0 V; 2 axle sensors 0 V; primary and secondary boom angle zone fault + not calibrated. Ground box floor rusted through, loose bolts/screws/washers in the box, a non-OEM white 16-gauge wire present.

Staged plan:
- **Stage 0**: battery ≥ 12.4 V; capture faults; six P-faults together = CAN loss.
- **Stage 1 TCON alive**: J15-1 B1BAT 12.4–12.8 V (else 20 A breaker 147095GT, B1PBAT/B3PBAT, F23 30 A); J15-2/3 ground < 0.5 Ω (rusted ground stud suspect); **all TCON mounting screws 49820GT + nylocks 12344GT present and tight** (they are the ground path; a documented Z-135 with identical P11/P30 faults was fixed by this).
- **Stage 2 5 V reference**: 5.0 VDC LED on TCON lit? Else measure J12-26 to J12-25: 5.0 V ± 0.25. If low, unplug DCON J31 and J32; if 5 V returns → short in chassis harness or one sensor, reconnect one at a time; still 0 V → TCON regulator dead.
- **Stage 3 CAN**: battery off, J11-18 to J11-17 ≈ 60 Ω (120 Ω = one terminator missing; open = broken wire; 0 Ω = shorted). Key on: both lines ≈ 2.5 V idle, splitting with traffic. Check per node: SCON J121-6/7, DCON J31-18/17, PCON J21-18/17. DCON branch open → suspect the **rotator**; manual says "check CAN bus wiring from TCON to DCON through rotator".
- **Stage 4 SCON**: J122-1 ≈ 12 V, J121-12 ground < 0.5 Ω; inspect J121/J122 pins for corrosion (clean, dielectric grease, reseat, recycle power twice; one documented Z-135 was cured by a single high-resistance connector); continuity of the seven relay circuits (table in 03) < 1 Ω and not grounded. Good power/ground/CAN and still silent → SCON suspect; SCON replacement means dealer full-machine calibration.
- **Stage 5 DCON / chassis**: J31-2 ≈ 12 V, J31-1 ground; rotate turntable slowly through full travel watching the display: flicker/drop-outs = rotator (10 contacts; replacement 1253702GT ≈ US$4,139, lead time); each steer/axle signal 0.5–4.5 V moving smoothly (0 V = open ground / no 5 V; 5 V = open signal; erratic = sensor or connector); boom angle sensor stowed millivolt sanity check (05).
- **Stage 6**: clear fault history from the TCON menu; recalibrate every sensor disturbed; do not "Reset All"; TCON replacement 1258461GT (from SN 1712) needs model, serial, software revision; consider bench repair of the existing board; SCON cannot be field-calibrated.
- Rebuild the box: gasket 88177GT; consider heater kit 122258GT with thermostat 122793GT (60°F); trace and remove the non-OEM wire.
- Bid guidance recorded: cheap outcome (screws, corroded connector, dirty J121) bid up to CA$40–45k; expensive (rotator and/or SCON with dealer calibration) hold CA$30–35k; walk away if display dead, multiple controllers suspect, or reverse-polarity/welding damage. Local dealers noted: Adcock Equipment (Nisku), Polar Industrial Services (Edmonton). `[F]`

## C. Symptom → first checks (manual-backed)
| Symptom | Checks |
|---------|--------|
| Booms will not raise/extend, turntable only 15° | Axles not fully extended (LCD arrow flashing). Extend axles while driving from platform. `[V]` |
| Secondary boom raises but will not extend | It extends only when fully raised; cross-check or zone fault on secondary angle sensor; forum case: secondary up/down threshold parameters wrong after calibration → redo secondary calibration `[F]`; check the primary-boom limit switch and the two angle sensors `[F]` |
| Main boom vertical but no telescoping of sections | Angle sensors and limit switch series; raise the tower fully first to see whether a limit switch is the cause `[F]` |
| No drive | Drive enable light on (boom past circle-end wheel): press drive enable and move joystick within 2 s `[V]`; machine on incline light; tilt; steer/axle sensor faults through DCON |
| Joystick dead, others work | Joystick not calibrated / value fault → joystick calibration (05). One field case fixed by calibration after reseating the function wires `[F]` |
| P22 platform out of level, level controls dead | Bypass key procedure (03). > 15° fault → technician recovery `[V]` |
| Engine will not start after cold storage with secondary raised/extended | System fault; use emergency controls to raise the secondary until it starts extending `[V]` |
| Engine will not crank | Foot switch pressed at platform (blocks start) `[V]`; E-stops; 20 A breaker in ground box; restart delay 3 s; fuses F23 etc. `[V]`; on other Genie booms a failed base-panel breaker was the culprit `[F]` |
| Tilt alarm / machine not level | Move to level ground using the uphill/downhill sequences (03) `[V]` |
| Overload alarm | Remove weight; reset by releasing foot pedal, E-stop out, wait 5 s `[F]`; annual load calibration `[S]` |
| Wheel end noise / stud damage | Hub studs and splines can wear if lug nuts were ever loose; torque 420 dry / 320 lubricated ft-lb `[V]`; a documented ZX-135 hub failure showed wiped splines `[F]` |
| Multiple Pxx faults at once | CAN loss → Stage 3 |
| Sensor 0 V | 5 V reference and sensor ground first (Stage 2/5) |
