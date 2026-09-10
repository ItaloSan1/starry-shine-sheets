# 08 — Diagnostic playbook

## A. Universal first steps `[V]`
1. Battery: 12 V Group 31, 1000 A. Low voltage causes false CAN and sensor faults (`[F]` on the threshold ≥ 12.4 V rested).
2. Key on, E-stop out, engine off. Read the software version, then let the LCD scroll a full cycle; record every message.
3. Classify: safety switch (Pxx), sensor value (5.0 V / 0 V / too high / too low / out of tolerance / not calibrated), joystick, valve, CAN, engine range check, overload.
4. Recycle power once. Faults that clear were latched history; use Delete Faults / Clear all safety switch faults (03) only after the cause is fixed.
5. Never bypass a safety circuit; never elevate a machine whose envelope is faulted.

## B. Use the SCON Fault Matrix (04) to read multiple P-faults
- All six (P38, P39, P10, P11, P30, P9B) → **Loss of CAN**.
- P38 + P39 + P10 + P11 + P30 (P9B alive) → primary boom angle crosscheck or turntable tilt crosscheck.
- P38 + P39 + P11 + P30 → secondary angle crosscheck or tilt Y > 5° with secondary not stowed.
- P39 + P10 + P11 + P30 → axle safety not stowed / axle crosscheck.
- P38 + P39 only → axles not fully extended while rotating in the drive-disable zone.
- P11 + P30 → LSS1RS disconnected (SCON J121-2 / J46).
- P11 + P30 + P9B → secondary boom not retracted and not raised, or LSS1RS/LSS1RO length crosscheck.
- P38 + P39 + P11 + P30 + P9B → primary boom safety max angle.
- P9B only → platform overload (SCON pin 1) or boom outside safety limits (engine shut off; use auxiliary to return).

## C. Owner's machine Z13513-1861 (2013, 2,162 h) — SCON CAN no response, 4 steer sensors 0 V, 2 axle sensors 0 V, primary/secondary angle zone fault + not calibrated
Manual-backed reading: the six chassis sensors share **one 5 V supply P109ANG (GR/WH)** and **one sensor ground P110RT (BK)** delivered to DCON J32-20 / J32-19 from TCON J12-26 / J12-25 through the rotator; the fault table for "Value at 0 V" says check 5 V at the sensor, wiring, and the **5.0 VDC LED on the TCON board**. DCON CAN loss shows as "DCON CAN Bus" with propel disabled. SCON off the bus drops all six safety relays. Staged plan (pins verified against SM pp.208–210):
- **Stage 0**: battery; capture faults; note software version.
- **Stage 1 TCON alive**: J15-1 B1BAT RD 12.4–12.8 V (else 20 A breaker in ground box, F23 30 A, B1PBAT/B3PBAT); J15-2/3 GND BR < 0.5 Ω; all TCON board screws 49820GT + nylocks 12344GT present (board ground path; a Z-135 with P11/P30 faults was cured this way `[F]`).
- **Stage 2 5 V reference**: TCON 5.0 VDC LED lit? Measure J12-26 to J12-25: 5.0 V. If low, unplug DCON J31/J32; 5 V returns → short in chassis harness or a sensor (reconnect one at a time); still 0 V → TCON regulator.
- **Stage 3 CAN**: D82CAN(+) YL / D81CAN(−) GR at TCON J11-18/17, SCON J121-6/7, DCON J31-18/17, PCON J21-18/17. Generic CAN checks (≈60 Ω bus, ≈2.5 V idle) `[F]`. Manual: check wiring TCON→DCON **through rotator**; TCON→SCON/PCON.
- **Stage 4 SCON**: J122-1 P21DCON WH ≈12 V; J121-12 GNDSCON BR < 0.5 Ω ("check that SCON is grounded" is the manual's own recovery for tilt-sensor faults); inspect J121 (grey) / J122 (black) pins; continuity of S140ENL, S137PLL, S139TRF, P54ENG, P53LS, P58LS, S56PRV to the TCON pins listed in 03. SCON cannot be field-calibrated; replacement = full machine calibration.
- **Stage 5 DCON / rotator**: J31-2 P21DCON ≈12 V, J31-1 GND; rotate the turntable slowly watching the display for drop-outs (rotator 1253702GT replaces discontinued swivels `[V]`); back-probe C111LFS/RFS/LRS/RRS (J32-13/12/11/10) and C60FAP/RAP (J31-20/21): smooth 0.5–4.5 V (`[F]` range; manual gives the 1.4–1.6 / 3.4–3.6 V straight-ahead and 4.2–4.4 V retracted set-points).
- **Stage 6**: clear faults from the display menu; recalibrate every disturbed sensor in the full-machine order (05); **do not use Delete all** without Genie Product Support; TCON replacement 1258461GT needs model, serial and software revision; bench repair of the existing board keeps serial and calibration `[F]`.
- Box rebuild: gasket 88177GT; heater kit 122258GT / thermostat 122793GT for cold wet climates; remove the non-OEM white 16-gauge wire after documenting both ends `[F]`.
- Bid guidance recorded by the owner `[F]`: cheap outcome CA$40–45k; rotator/SCON with dealer calibration CA$30–35k; walk away if the display is dead, several controllers suspect, or reverse-polarity/welding damage. Dealers noted: Adcock Equipment (Nisku), Polar Industrial Services (Edmonton).

## D. Symptom → manual-backed first checks
| Symptom | Checks |
|---------|--------|
| Booms will not raise/extend; turntable stops at 15° | Axles not fully extended (LSFA1ES/LSRA1ES, LCD arrow flashing). Extend axles while driving from the platform `[V]` |
| Secondary raises but will not extend | Extends only when fully raised (RSS1AO); Secondary Boom Switch Timeout / LSS1RO fault; LSS1RS intermittence; secondary angle not calibrated or crosscheck; forum case: threshold parameters wrong after calibration → redo `[F]` |
| Primary extends but every boom function stops, only retract works | "Primary Boom Length unknown" → check LSP1RO / LSP1EO contact, shim `[V]` |
| No drive, "DCON CAN Bus" | CAN through rotator; DCON power/ground `[V]` |
| No drive, drive enable light on | Boom past a circle-end tire: press drive enable, move joystick within 2 s `[V]` |
| Steering wrong or drifting, sensor faults | Steer sensor values; straight-ahead set-points 1.4–1.6 V (LF, RR) and 3.4–3.6 V (RF, LR); recalibrate `[V]` |
| Joystick dead, others work | Joystick value fault or not calibrated → calibrate (05) `[V]` |
| Function slow / no threshold | Flow valve not calibrated → thresholds; speeds; ramps `[V]` |
| Engine dies when boom moves, P9B | Boom outside safety limits; return with auxiliary power; check P54ENG / P58LS `[V]` |
| Engine shuts off, P9B, overload message | Platform overload; check overload switch on platform support `[V]` |
| P22 / platform out of level, level controls dead | Bypass mode with auxiliary power (03); >15° → recovery mode `[V]` |
| Engine will not start after cold storage with secondary raised/extended | Use emergency controls to raise the secondary until it begins extending `[V]` |
| No crank | Foot switch pressed; E-stops; 20 A ground-box breaker; F23 30 A; CR1 start relay; 3 s restart delay; 15 s crank limit `[V]` |
| Glow plugs dead | F22 60 A; CR15 glow relay (Deutz/Perkins) `[V]` |
| No high idle / rpm | CB10 20 A RPM solenoid breaker; R21PIGN 20 A `[V]` |
| Horn / cooler fan dead | F7 20 A; CR5 / CR17 `[V]` |
| Tilt alarm / machine not level | Uphill/downhill sequences (03) `[V]` |
| Unit-out-of-level icon with X-sensor 5 V fault | "Check that SCON is grounded"; other values → replace SCON `[V]` |
| Turntable rotation binding | Backlash adjustment (06) `[V]` |
| Weak or no function pressure | Standby 250 psi, compensator 2900 psi, system relief 3100 psi, function enable valve A `[V]` |
| Drive weak / hot oil | Hot-oil relief 40 psi below pump pressure; charge 315 psi; drive pump prime `[V]` |
| Hub stud damage | Lug nuts 420 ft-lb dry / 320 lubricated `[V]`; ZX-135 hub spline failure video `[F]` |
