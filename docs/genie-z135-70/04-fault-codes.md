# 04 — Fault codes

**Status:** the complete Control System Fault Code table is in Service Manual
1268557GT Section 4 (pp.171–190) which is not yet ingested. What follows is
verified from indexed text of the Z/ZX-135/70 manuals, the Operator's Manual,
and the Drive flowchart. Do not invent meanings for codes not listed here.

## How faults present `[V]`
- Ground LCD scrolls messages; platform **Fault indicator light** (16) lights for a system fault; **Check engine light** (14) for an engine fault.
- Error types in the ZX/Z-135 table: "Fault Check" (message on LCD), joystick and sensor value faults, CAN faults, calibration faults.
- After repair: recycle power (E-stop in/out or key off/on). Faults that return are live; faults that stay gone were history. Clear history from the TCON display menu or WebGPI.

## Safety switch faults (SCON) `[V]`
LCD text: `Pxx SAFETY SWITCH FAULT`. Codes documented for this machine family: **P3, P6R1, P6R2, P7, P7R, DCON P7R, P9A, P9B, P10, P11, P12, P14, P18, P22, P22R, P30, P38, P39**.

| Code | What is known |
|------|---------------|
| P11 | Primary up power (forum reading of display: "primary up power p11 fault"). Manual recovery: recycle power; check wiring **S140ENL (orange/black)** between SCON and TCON; check SCON chart |
| P30 | Secondary up / extend power ("Sec up/ext power p30 fault"). Same S140ENL circuit as P11 |
| P38 | Circuit S137PLL (red/white) SCON J121-10 ↔ TCON J13-17 (platform level related) |
| P39 | Circuit S139TRF (white/red) SCON J121-11 ↔ TCON J13-19 (turntable rotate related) |
| P6R2, P9B | Circuit P54ENG (black/white) J122-9 ↔ J12-4. Manual: check P54ENG and P58LS between SCON and TCON for damage; check SCON charts |
| P6R1, P9A | Circuit P53LS (white/black) J122-7 ↔ J12-3 & J12-6 |
| P9B | also P58LS (red/black) J122-10 ↔ J12-7 |
| P7 | Circuit S56PRV (red) J121-9 / J122-11 ↔ J11-6, J12-5 |
| P22 | **Platform out of level**; platform level controls do not work. Use the bypass key procedure (03). PLATFORM LEVEL > 15 DEGREES FAULT requires recovery by trained personnel |
| P10, P11, P30, P38, P39, P9B together | Per the SCON Fault Matrix (service manual ≈p.189), **loss of CAN** is the only single condition that turns off all six safety relays at once. Six simultaneous P-faults = a CAN failure, not six separate faults |

## Sensor and joystick value faults `[V-index]`
Fault wording used by the table: **Value at 5.0 V** (too high / open signal wire), **Value at 0 V** (too low / open ground or dead 5 V supply), **Value Too High**, **Value Too Low**, **Not calibrated**, **Just calibrated**, **cross check** (dual-output sensors disagree), **zone fault**.
- Sensors on this machine: primary boom angle (dual output: operational + safety), secondary boom angle, jib boom bellcrank angle, platform level (angle) sensor on the rotator, turntable level (tilt) sensor X/Y at SCON, 4 steer angle sensors, 2 axle position sensors, platform overload load cell (if equipped), boom extend limit switches.
- "Not calibrated" on boom sensors: primary up, secondary up/down and extend disabled with alarm; recalibrate per 05.
- "Just calibrated": one-second beep, self-clearing.
- Axle angle sensor **Value at 0 V** recovery text: "Check that the 5.0 VDC LED is lit on the TCON board"; steer sensor at 0 V: "Check for an open ground circuit going to the sensor". Value at 5 V = open signal wire between sensor and DCON.
- Joystick faults: recalibrate the joystick (05). Note the joystick must be calibrated before threshold, max-out or ramping can be set.

## CAN bus faults `[V-index]`
- **TCON CAN BUS / CAN BUS** faults. Recovery: "check CAN bus wiring from TCON to propel DCON **through rotator**; repair or replace wiring or DCON"; "check CAN bus wiring from TCON to SCON/PCON; repair or replace wiring or SCON/PCON".
- SCON "CAN no response" plus all chassis sensors at 0 V on the owner's machine was traced in the Drive flowchart to power/ground/5 V/rotator candidates (see 08).

## Load sense faults `[V-index]`
- LSS1R0 fault reported intermittently in the field; one technician traced it to the DCON main board `[F]`. LSS1RS load sense switch on SCON pin 2; platform overload sensor on SCON pin 1 (ZX manual text).
- Platform overload: alarm sounds, overload light flashes at platform, "platform overload" on the ground LCD, all platform and ground functions inhibited until weight removed (2 s delay). Reset: remove weight, release foot pedal, pull E-stop out, wait 5 s `[F]`.

## Engine faults `[S]`
Perkins engines report SPN/FMI codes readable with Perkins EST or a J1939 reader; this manual's engine fault code pages are pending. Check engine light: engine stopped → tag out; running → service within 24 h `[V]`.

## To be filled from Service Manual pp.171–190
Full table with: fault message, error type, cause, effect on functions, recovery steps; SCON Fault Matrix (relay states per condition).
