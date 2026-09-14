# 04 — Fault codes (Service Manual 1268557GT Section 4, pp.171–189) `[V]`

Before troubleshooting: trained person; machine on firm level ground, key off,
E-stops in, wheels chocked, AC disconnected, boom stowed, turntable lock in,
welder disconnected. Two people for some procedures.

Common error types: **Value at 5.0 V** (open ground / open signal), **Value Too
High**, **Value Too Low**, **Value at 0 V** (no 5 V supply, damaged wiring; check
the **5.0 VDC LED on the TCON board**), **Out of Tolerance** (recalibrate),
**Not calibrated**, **Just calibrated** (one-second beep, self-clearing),
**Fault Check**, **Calibration check**, **Range check**.

## Joysticks (pp.172, 178, 181, 183–185)
| Source | Value at 5.0 V / too high / too low / 0 V | Not calibrated | Just calibrated |
|--------|------|------|------|
| Primary ext/ret, primary up/down, steer, turntable rotate, jib up/down, jib ext/ret, platform rotate, propel joysticks | Limited speed, direction frozen at zero/neutral, alarm. Check joystick wiring and that connector terminals have not backed out; substitute a known good joystick; replace and recalibrate | Speed/direction frozen at zero. Calibrate joystick (propel: calibrate thresholds) | 1 s beep, self-clearing |
| Secondary boom joystick | Primary up, secondary up/down and extend disabled, alarm; same checks | frozen at zero | self-clearing |

## Membrane buttons on TCON (pp.173, 176, 178, 181, 183)
Both buttons pressed (primary up/down, primary ext/ret, secondary up/ext/down/ret, turntable rotate, axle extend/retract, platform rotate) → that function disabled, LCD message. Check ribbon and connector from the membrane switch; replace membrane if needed.

## Boom length and speed calibration (p.173)
- **Primary Boom Length, Fault Check (unknown length)**: all boom functions stop; only retract allowed, then boom down once fully retracted. Check primary retracted and extended switches for proper contact with the boom; readjust or shim.
- Primary up/down speed, primary ext/ret speed, secondary up/down speed, turntable rotate speed **Not calibrated**: message, operation at default speed; perform the auto-calibrate (function speed) procedure.

## Valve faults (pp.173, 177, 179, 181–185)
- **Fault Check** on primary extend / retract / up / down valves, primary lock-out valves #1 and #2, secondary extend / retract / up / down / extend-sequence / down-sequence valves, turntable rotate CW / CCW valves, platform rotate CW / CCW, jib extend/retract, steer valves LF/RF/LR/RR, axle valve, motor valve speed, brake valve: limited speed, direction frozen, alarm. Check wiring; check for open or shorted coil; repair or replace.
- Flow (proportional) valves: primary up/down, primary ext/ret, secondary up/down/ext/ret, turntable rotate, jib up/down, jib level (bellcrank), platform level up/down: **Not calibrated** = normal function but threshold for one direction is zero → calibrate thresholds; **Value Too High** = opens in wiring or bad ground, replace coil; **Value Too Low** = shorts to ground, replace coil.
- Propel valves fwd/rev and Propel EDC: not calibrated → calibrate thresholds; too high/low as above.

## Safety switch faults (pp.174–175)
| LCD message | Recovery |
|-------------|----------|
| P3 SAFETY SWITCH FAULT | Internal fault, not on Z135 |
| P6R1 | Check circuit **P53LS (white/black)** for shorts/opens. Repair wiring or replace TCON |
| P6R2 | Check circuit **P54ENG (black/white)**. Repair wiring or replace TCON |
| P7 | Check circuit **S56PRV (red)**. Repair wiring or replace TCON |
| P7R | Function enable button was held during start-up. Recycle power with the button released |
| DCON P7R | Check S56PRV (red). Repair wiring or replace DCON |
| P9A | Check P53LS (white/black). Repair wiring or replace TCON |
| P9B | **Boom violated the safety limits and the engine was shut off as a safety feature.** Use auxiliary power to bring the boom back inside limits. Check P54ENG and P58LS between SCON and TCON. Check the SCON chart |
| P10 | Recycle power |
| P11 | Recycle power; check circuit **S140ENL (orange/black; pin legend says OR/RD)** between SCON and TCON; check SCON chart |
| P12, P14, P18 | Recycle power |
| P22 | Re-level platform. Check wiring on circuit **P56PRV (red/white)** |
| P22R | Re-level platform. Repair or replace PCON |
| P30 | Recycle power; check S140ENL between SCON and TCON; SCON chart |
| P38 | Recycle power; check **S137PLL (red/white)** between SCON and TCON; SCON chart |
| P39 | Recycle power; check **S139TRF (white/red)** between SCON and TCON; SCON chart |

## SCON Fault Matrix (p.189) — which safety relays turn OFF
Relays: P_38 propel · P_39 turntable rotate · P_10 primary extend · P_11 primary/secondary up · P_30 secondary extend/down · P_9B ignition/fuel.

| Condition | P_38 | P_39 | P_10 | P_11 | P_30 | P_9B |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|
| Turntable tilt Y axis (+5°, secondary not stowed) | OFF | OFF | | OFF | OFF | |
| Primary boom angle crosscheck | OFF | OFF | OFF | OFF | OFF | |
| Secondary boom angle crosscheck | OFF | OFF | | OFF | OFF | |
| Secondary boom safety (not retracted and not raised) | | | | OFF | OFF | OFF |
| Axle safety not stowed (not faulted, primary and secondary stowed) | | OFF | OFF | OFF | OFF | |
| Axle crosscheck angle sensor vs safety switch | | OFF | OFF | OFF | OFF | |
| Axle not fully extended and turntable rotate (stowed, in drive disable zone) | OFF | OFF | | | | |
| Turntable tilt angle crosscheck (3 SCON internal sensors in delta) | OFF | OFF | OFF | OFF | OFF | |
| Primary boom safety (max angle) | OFF | OFF | | OFF | OFF | OFF |
| **Loss of CAN** | **OFF** | **OFF** | **OFF** | **OFF** | **OFF** | **OFF** |
| LSS1RS disconnected (SCON pin #2) | | | | OFF | OFF | |
| Platform overload (SCON pin #1) | | | | | | OFF |
| Secondary boom length crosscheck LSS1RS vs LSS1RO | | | | OFF | OFF | OFF |

Reading the matrix: all six P-faults at once = loss of CAN. P_9B alone = platform overload. P_11 + P_30 only = LSS1RS disconnected. P_11 + P_30 + P_9B = secondary boom not retracted and not raised, or secondary length crosscheck.

## Platform overload and engine (p.176)
- **Platform Overload, Fault Check**: LCD message; all PCON functions disabled; TCON limited to auxiliary power; FUEL POWER P9B FAULT. Check for overload; check the overload switch on the platform support.
- Footswitch Timeout (calibration check): recycle power.
- Engine speed range check (underspeed): engine below 50 rpm; check fuel system.
- Oil pressure range check (low): check sender and oil level.
- Water/oil temperature range check (high): overheating; check sender, water/oil level, radiator or heat exchanger.
- Oil pressure sender / water-oil temp sender fault check: check sender wiring for opens/shorts.

## CAN faults (p.176)
- **DCON CAN Bus, Fault Check**: LCD message, **propel disabled**. Check CAN wiring from TCON to DCON **through rotator**; repair or replace wiring or DCON.
- **CAN Bus, Fault Check**: LCD message. Check CAN wiring from TCON to SCON/PCON; repair or replace wiring or SCON/PCON.

## Angle sensors (pp.177–185)
Operational and safety **primary** boom angle sensors, operational and safety **secondary** boom angle sensors, **front / rear axle** angle sensors:
| Error | Effect | Recovery |
|-------|--------|----------|
| Value at 5.0 V | Primary up, secondary up/down and extend disabled, alarm | Check for an open ground circuit to the sensor |
| Value Too High | same | Sensor out of range; check sensor and actuating pin installation; repair/replace and recalibrate |
| Value Too Low / Value at 0 V | same | Check for 5.0 VDC at the sensor; check wiring; check the 5.0 VDC LED on the TCON board |
| Out of Tolerance | same | Recalibrate sensor |
| Not calibrated | Primary (or secondary) up only active from TCON, alarm | Perform calibration procedure |
| Just calibrated | 1 s beep | self-clearing |

**Steer angle sensors LF / RF / LR / RR** (pp.186–187): Value at 5.0 V → open ground to sensor; Too High → out of range, check sensor and actuating pin, recalibrate; Too Low / 0 V → check 5 V at sensor, wiring, TCON 5.0 VDC LED. Effect: primary up, secondary up/down and extend disabled, alarm.

**Turntable level sensor X (operational and safety)** (p.180): Value at 5.0 V → flash unit-out-of-level icon and LED, alarm; **check that SCON is grounded**. Too High / Too Low / 0 V / Out of Tolerance → **replace SCON**.
**Turntable level sensor Y (operational and safety)** (pp.181–182): Value at 5.0 V → primary up and extend disabled, alarm; check SCON grounded. Others → replace SCON.
**Platform level sensor Y direction** (p.182): value faults → primary up and extend disabled, alarm; check that SCON is grounded.
**Jib angle sensor RSJ1AO** (p.188): value faults → limited speed, frozen, alarm; power up controller with the problem corrected.
**SCON tilt sensor calibration check** (p.188): "X direction and Y direction not calibrated" → re-power after entering tilt X and Y matrix information.

## Secondary boom switch faults (p.188)
- **Secondary Boom Switch Timeout**: too much time between LSS1RO releasing and LSS1RS releasing on extend (or engaging on retract), or the joystick engaged three times in the interval. Effect: secondary extend inhibited. Recovery: on extend, retract until LSS1RO engages and retry; check LSS1RS and LSS1RO for damage and operation.
- **Secondary Boom Switches Intermittence (LSS1RS Fault)**: LSS1RS or LSS1RO changed state without a command or while the secondary was not fully raised. Effect: secondary down inhibited until cleared. Check switches; clear with the TCON display menu or laptop with WebGPI.
- **LSS1RO Fault**: LSS1RO did not switch within the specified time after the secondary was raised. Effect: secondary extend inhibited, alarm. Check switch; clear via display menu or WebGPI.

## Clearing faults (pp.107–108)
- Software ≤ 3.11 / 4.01: Default Reset menu (minus)(minus)(previous)(previous) → **Delete Faults** (active latching faults only).
- Software 3.12 / 4.02+: Clear Faults menu (minus)(previous)(previous)(minus) → **Clear all safety switch faults**.
- Fault history is not cleared by these; WebGPI can also clear faults.
