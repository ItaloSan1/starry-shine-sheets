# 03 — Control system, controls, display, connectors

## Controllers `[V]` (Service Manual p.26; Drive flowchart citing schematics)
| Node | Location / role |
|------|-----------------|
| **PCON** | Platform controls ECM circuit board (ALC-1000) inside the platform control box. Receives operator input from the **LED circuit board** (mounted under the lid, carries the LEDs and connects to the membrane decal by ribbon cables) and sends data to TCON. Joysticks are Hall-effect, no adjustment, parameters stored in TCON memory; a disconnected or replaced joystick must be calibrated before that function works |
| **TCON** | Turntable (ground) control box ECM. Processes everything, drives the LCD, stores serial, options, hour meter, joystick parameters and calibration. Board 217570GT to SN 1711, **1258461GT from SN 1712** (ordering needs model, serial and software revision) |
| **DCON** | Drive chassis controller. Reads the 4 steer angle sensors and 2 axle position sensors. CAN and power reach it **through the electrical rotator (swivel)** |
| **SCON** | Safety controller. Monitors the turntable level (tilt) sensor and provides safety-switch logic; alarms at ±4.5° tilt `[S]`. Holds six safety relays. **Cannot be calibrated in the field**; a replacement ships pre-programmed and then the whole machine must be calibrated in a specific order |

Fault display: faults show on the ground LCD and set the platform Fault
indicator light; faults are cleared from the TCON display menu or with a laptop
running WebGPI (kit 215336GT plus SCON tee harness 107647GT). `[V]`

Platform circuit board replaced → recalibrate jib bellcrank and platform level.
`[V]`

## Ground control panel (Operator's Manual pp.22–23) `[V]`
1 LCD readout (low fuel, engine oil pressure, water temperature, auxiliary power, high rpm indicators, hour meter). 2 Red E-stop. 3 Glow plug button (hold 3–5 s). 4 Key switch off / ground / platform. 5 Engine start. 6 Jib up/down. 7 Platform level up/down. 8 Primary extend/retract. 9 **20 A circuit breaker** for system circuit. 10 Alarm. 11 **Bypass/recovery key switch** (Run / Bypass / Recovery). 12 Platform rotate L/R. 13 Jib extend/retract. 14 High-speed function enable. 15 Low-speed function enable. 16 Emergency/auxiliary power (hold together with a function). 17 Turntable rotate L/R. 18 Secondary boom up/extend and down/retract (raises then extends; retracts then lowers). 19 Primary boom up/down. 20 LCD screen control buttons (Plus, Minus, Previous, Enter). 21 Engine speed select (rabbit high idle / turtle low idle). 22–23 Primary down / up on later panel.

Ground controls: a function enable/speed select button must be held while
pressing a function button. Drive, steer and axle functions are not available
from the ground controls.

## Platform control panel (Operator's Manual pp.26–28) `[V]`
1 Horn. 2 Platform not level light. 3 Machine on incline light (all functions stopped). 4 Lower primary boom light. 5 Lower/retract secondary boom light. 7 Generator. 8 Emergency/auxiliary power (light on while used). 9 Glow plug. 10 Engine start. 11 Engine idle select. 13 Power light. 14 **Check engine light** (light on and engine stopped: tag out; light on and running: service within 24 h). 15 Low fuel. 16 **Fault indicator light** (system fault). 17 Red E-stop. 18 Drive/steer joystick (blue arrow forward, yellow reverse, triangles steer) or drive joystick with steer thumb rocker. 19 Steer mode (square-end, circle-end, crab, coordinated). 20 Secondary boom up/extend, down/retract joystick. 21 Drive setting select (incl. machine-on-incline setting). 22 Jib extend/retract thumb rocker. 23 Jib up/down + platform rotate joystick. 24 Axle extend/retract switch with lights (flash while moving, steady when fully extended/retracted). 25 Drive enable (light on = primary boom past a circle-end wheel; press then move joystick within 2 s). 26 Primary extend/retract thumb rocker. 27 Primary up/down + turntable rotate joystick. 28 Platform level switch. 30/31 Axle extend / retract buttons (later panel). Foot switch must be pressed for any platform function; engine will not start with foot switch pressed.

## Interlocks and envelope behaviour `[V]` (Operator's Manual function tests and operating instructions)
- Boom functions will not raise/extend and turntable rotates only ±15° **until the axles are fully extended** (LCD flashes arrow next to the extend-axle symbol).
- Axles extend only while driving (foot switch + drive joystick + axle extend). Axles retract only with both booms fully lowered and retracted and the platform between the circle-end wheels; axles cannot retract while the drive enable light is on.
- Secondary boom: raises fully, then extends; will not extend until fully raised; will not lower until fully retracted.
- Drive speed limits: primary or secondary raised 5° or primary extended 4 ft or jib extended 1 ft → max 1 ft/s (40 ft in 40 s). Jib and primary both extended → max 6 in/s. Exceeding these = tag out.
- Drive enable: when primary boom is past either circle-end wheel, drive is off until drive enable is pressed and joystick moved within 2 s; machine may move opposite to joystick direction.
- Tilt alarm sounds only on a severe slope. Machine Not Level light flashing = tilt alarm sounding; recovery sequences: platform uphill → lower primary, retract/lower secondary, retract primary. Platform downhill → retract primary, retract/lower secondary, lower primary. Do not rotate while lowering.
- Platform Not Level light: platform level switch only works in the direction that levels the platform.
- Operating envelope lights: Lower/Retract Secondary Boom flashing → lower/retract secondary until off; Lower Primary Boom flashing → lower primary until off.
- **PLATFORM LEVEL > 15 DEGREES FAULT** on the ground display with platform level controls dead → machine must be recovered by trained personnel or a qualified technician.
- Aircraft protection package: bumper contact shuts everything down; function override switch allows moving away.
- Ground controls override the platform E-stop.

## Bypass / recovery key switch `[V]`
**Bypass** (Operator's Manual p.53, for P22 "platform out of level" when level controls do not work):
1. Engine off. 2. Main key to ground control; remove key; insert in bypass/recovery switch. 3. Turn to **bypass**. 4. Using auxiliary/emergency power, operate platform level buttons to level the platform. 5. Return to run. 6. Key back to main switch. 7. Push in and pull out E-stop. 8. If P22 still shows, tag out for a qualified technician.

Bypass is also **required for every sensor calibration**: "The angle sensor calibration values will not be saved correctly unless the key switch is in the bypass position and the calibration toggle switch is activated." In service/bypass mode the platform level buttons drive the jib boom level cylinder. `[V]`

**Recovery** (trained and authorized personnel only, last resort): search-index text of the manual says turn and hold the switch in the recovery position; the auxiliary power units turn on and the primary boom retracts and then lowers. `[V-index]` Full step list is on service manual p.99 (pending).

## Calibration mode entry `[V]` (Service Manual pp.42, 59)
- **Before SN 321:** remove the plug from the 2-pin connector in the lower-left of the ground control box and fit a jumper wire across the two pins. **Remove it afterwards** or the machine is in an unsafe, tip-over configuration.
- **After SN 320:** move the **calibration toggle switch at the top of the ground control box** to the left. Temporarily install a door fastener between door and box so the door cannot move the switch. Closing the door automatically exits calibration mode.
- Then: key in bypass position; press and hold **Enter** for ~5 s while pulling out the ground E-stop (or while turning key to ground); then press **(plus)(enter)(enter)(plus)** to enter sensor calibration mode; scroll with Enter/Previous; Plus = YES; save by holding **engine start ~5 s until the engine shuts off** (never key or E-stop, or values are lost); EXIT → YES → Enter; wait ~20 s before E-stop.

## Display menu sequences `[V]` (Service Manual pp.30–38)
| Purpose | Sequence |
|---------|----------|
| Joystick defaults / valve coil defaults menu | Key off → hold Enter while turning key to **platform**, ~5 s → Minus ×2 → Enter ×2 → scroll to item → Plus (YES) → Enter |
| Function speed adjust | E-stops out → hold Enter while turning key to platform ~5 s → Plus ×2 → Minus ×2 → Previous to function → Plus/Minus → Enter → EXIT YES |
| Ramp rate adjust | same but Plus ×2 → **Previous ×2** |
| Sensor calibration | key in bypass, calibration toggle/jumper → hold Enter ~5 s while E-stop out → (plus)(enter)(enter)(plus) |
| Software version | key to ground, E-stop out, read scroll message e.g. VER 2_10 = 2.10 `[S]` |
| Status readouts (function test) | press LCD buttons until TURNTABLE LEVEL SENSOR X-DIRECTION / Y-DIRECTION, PLATFORM LEVEL SENSOR DEGREES, PRI BOOM ANGLE TO GRAVITY, SEC BOOM ANGLE (status mode = press the 2 LCD buttons together) |
| Clear safety-switch faults (field video, Z80/Z135/S125) `[F]` | hold Enter while pulling E-stop → Minus, Minus → RESET DRIVE FUNCTION NO → Down → EXIT NO → Down → CLEAR ALL SAFETY SWITCH FAULT NO → Plus (YES) → Enter → EXIT YES → Enter; then full function test |

## Power and CAN wiring reference `[V]` (Drive flowchart citing schematics in 1268557GT / 106877GT — verify on the sheet before condemning parts)
| Circuit | Where | Expect |
|---------|-------|--------|
| TCON battery feed B1BAT (red) | J15-1 to chassis ground | 12.4–12.8 V key off |
| TCON ground GND (brown) | J15-2, J15-3 to battery negative | < 0.5 Ω |
| 5 V sensor reference P109ANG (green/white) | TCON J12-26 (+) to J12-25 SNSR GND (brown); also DCON J32-20 | 5.0 V ± 0.25; TCON has a **5.0 VDC LED** |
| CAN+ D82CAN (yellow) / CAN− D81CAN (green) | TCON J11-18 / J11-17; SCON J121-6 / J121-7 (12-pin grey); DCON J31-18 / J31-17 (23-pin black AMP); PCON J21-18 / J21-17 | ≈60 Ω between CAN+ and CAN− with battery off (generic CAN, `[F]`); ≈2.5 V each at rest |
| SCON power P21DCON (white) | J122-1; traces to TCON J12-2 | ≈12 V key on |
| SCON ground GNDSCON (brown) | J121-12; traces to TCON J12-1 | < 0.5 Ω |
| DCON power P21DCON (white) / ground GND-DCON (brown) | J31-2 / J31-1 (both cross the rotator) | ≈12 V / < 0.5 Ω |
| Steer sensors C111LFS / RFS / LRS / RRS (orange) | DCON J32-13 / -12 / -11 / -10 | ~0.5–4.5 V varying with wheel angle, never hard 0 or 5 V |
| Axle sensors C60FAP / C60RAP (green/white) | DCON J31-20 / J31-21 | as above |
| Safety relay circuits SCON↔TCON | S140ENL (OR/RD, manual fault table says OR/BK) J122-8 ↔ J12-9 & J12-34 (drives **P11, P30**); S137PLL (RD/WH) J121-10 ↔ J13-17 (**P38**); S139TRF (WH/RD) J121-11 ↔ J13-19 (**P39**); P54ENG (BK/WH) J122-9 ↔ J12-4 (P6R2, P9B); P53LS (WH/BK) J122-7 ↔ J12-3 & J12-6 (P6R1, P9A); P58LS (RD/BK) J122-10 ↔ J12-7 (P9B); S56PRV (RD) J121-9 / J122-11 ↔ J11-6, J12-5 (P7) | < 1 Ω end to end, no continuity to ground |
| Protection | 20 A breaker 147095GT in ground box; F23 30 A fuse; B1PBAT / B3PBAT at engine fuse panel |
| Harness | 226496GT lower limit switch / SCON harness between ground box and SCON |
| Electrical rotator | only 10 contacts pass turntable↔chassis; old swivels 122918, 89437, 107533 discontinued, replacement assembly **1253702GT** |

TCON board mounting screws 49820GT (6-32 × 0.5) with nylocks 12344GT are the board's ground path. `[V]`
