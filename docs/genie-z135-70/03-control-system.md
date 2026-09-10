# 03 — Control system, controls, display menus, connectors and pinouts

All content `[V]` from Service Manual 1268557GT Rev A4 (page numbers are the
printed page numbers) and Operator's Manual 114474 unless tagged.

## Controllers (SM pp.26, 99–105, 201–204)
| Node | Role |
|------|------|
| **TCON** (turntable/ground control box, ALC-1000 ECM board) | Communication and operations centre. Stores all operating parameters and option configuration. Contains the **LCD circuit board** (inside the lid), the **ECM circuit board**, a replaceable **membrane decal**, the main key switch (top) and the **Bypass/Recovery key switch** (bottom; on the lower right side of the box from **SN Z13512-1712**). ECM replaced → full machine calibration in the specified order |
| **PCON** (platform controls, ALC-1000 board) | Receives operator input from the LED circuit board under the lid (membrane decal via ribbon cables) and sends it to TCON. Joysticks are Hall-effect, no adjustment; parameters stored in TCON. Disconnected or replaced joystick must be calibrated. PCON board replaced → recalibrate jib bellcrank and platform level |
| **DCON** (drive chassis controller) | Reads 4 steer sensors, 2 axle position sensors, axle limit switches; drives steer, axle, brake, two-speed and motor-speed valves. CAN and power come from TCON through the slip ring / electrical rotator |
| **SCON** (safety controller, turntable) | Redundant dual-axis tilt sensors (X, Y) measuring turntable tilt (three internal sensors in a delta configuration cross-check each other). Provides safety-switch logic and holds the six safety power relays P_38, P_39, P_10, P_11, P_30, P_9B. **Alarm at ±4.5°**. Replaced → full machine calibration |

## Ground control panel (OM pp.22–23) and platform panel (OM pp.26–28)
See the itemised lists retained from the Operator's Manual:
- Ground: LCD (low fuel, oil pressure, water temperature, auxiliary power, high rpm, hour meter); E-stop; glow plug (3–5 s); key off/ground/platform; engine start; jib up/down; platform level up/down; primary extend/retract; **20 A system circuit breaker**; alarm; bypass/recovery key switch; platform rotate; jib extend/retract; high-speed and low-speed function enable; emergency/auxiliary power; turntable rotate; secondary up/extend & down/retract; primary up/down; **LCD buttons Plus / Minus / Previous / Enter**; engine speed select (rabbit/turtle).
- Platform: horn; platform not level light; machine on incline light; lower primary light; lower/retract secondary light; generator; auxiliary power; glow plug; start; idle select; power light; **check engine light**; low fuel; **fault light**; E-stop; drive/steer joystick or drive joystick + steer rocker; steer mode (front, rear, crab, coordinated); secondary joystick; drive setting; jib extend/retract rocker; jib up/down + platform rotate joystick; axle extend/retract; drive enable; primary extend/retract rocker; primary up/down + turntable rotate joystick; platform level switch; foot switch.

## Interlocks and envelope behaviour (OM function tests; SM pp.203–204)
- Boom up/extend and turntable rotation beyond ±15° require the axles fully extended (LSFA1ES and LSRA1ES close when fully extended; LST1S stops rotation past either rear tire with axles retracted).
- Axles extend only while driving; retract only with booms stowed and platform between circle-end wheels; not while drive enable light is on.
- Secondary boom: raises then extends (RSS1AO sequences it); will not extend until fully raised; will not lower until fully retracted (LSS1RO). LSS1RS is the safety backup and cuts P9B, P_11, P_30. RSS1AS cuts P9B, P_11, P_30 if the secondary drifts down while extended.
- Primary boom max angle is limited relative to secondary angle and gravity: on 0° slope max 68°; on a 5° downhill (positive Y) slope max 43° (SM p.82).
- Platform angle sensor range ±20°; safety cutout at ±10° from gravity disables primary/secondary up/down and platform level. Bypass mode allows manual levelling back to within ±4.5°. >15° out of level disables all auxiliary-power functions and displays PLATFORM LEVEL > 15 DEGREES; recovery mode needed.
- Drive enable: LST1O / LST2O define the zone when the boom is past a circle-end tire; press drive enable then move joystick within 2 s.
- Drive speed limits with boom raised/extended: 1 ft/s; jib and primary extended: 6 in/s.
- Tilt alarm sequences (uphill: lower primary, retract/lower secondary, retract primary; downhill: retract primary, retract/lower secondary, lower primary).
- Engine stop as safety: P9B (ignition/fuel) is cut when the boom violates safety limits; use auxiliary power to bring the boom back inside limits.

## Bypass / Recovery key switch (SM pp.99–101)
Positions: 1 Run, 2 Bypass, 3 Recovery. Both modes indicate faults; contact trained personnel. Bypass = platform out-of-level correction and calibration. Recovery = last resort to lower the platform.

**Bypass mode** (platform angle > 10° disables boom angle and platform level functions):
1. Engine off. 2. Main key to **ground controls**; remove key; insert in bypass/recovery switch (main key must stay in ground position). 3. Turn to bypass. 4. **Using auxiliary power**, operate the ground platform level buttons to level the platform (only the auxiliary power unit can correct this fault). 5. Back to run. 6. Key back to main switch. Check LCD for faults afterwards. (Operator's Manual version adds: push in / pull out E-stop; if P22 persists, tag out.)

**Recovery mode** (software 1.11 and later; for 1.01 contact Genie Product Support). Platform levelling is NOT active in recovery; platform may not reach the ground; operator must be secured.
1. Main key to ground controls (if done with the main key off, an active latched safety fault is set and must be cleared). Remove key, insert in bypass/recovery switch.
2. Turn and **hold** in recovery. The auxiliary power unit runs and the sequence is automatic: primary boom retracts → secondary boom retracts → primary boom lowers. Hold until complete or until the operator can exit.
3. If any boom safety limit switch is faulty the boom only retracts and does not lower. If the platform goes > ±15° out of level, all auxiliary functions stop and PLATFORM LEVEL > 15 DEGREES is displayed; recover by Recovery Mode. Tag and remove from service afterwards.

## Circuit boards in the ground box (SM pp.102–104)
LCD board on the lid (ribbon to ECM); ECM (ALC-1000 / TCON) with two membrane ribbons, wire connectors J11–J15 and the key-switch Molex J17; ESD precautions, grounded wrist strap to the ground screw. Membrane decal replacement: disconnect two ribbons at the ECM, peel, clean with mild solvent (not on the LCD), fit new, reconnect.

## Display module menus (SM pp.106–114) — key OFF before entering programming mode
Buttons: Enter/Previous scroll screens; Plus increases/scrolls forward, Minus decreases/back; Enter saves (beep). Scroll to EXIT, Plus to YES, Enter to leave. Holding +/- auto-scrolls at 0.2/min steps.

| Menu | Entry (all: key OFF, hold Enter while turning key ON, release, then press…) | Contents |
|------|------|------|
| Power-up / operator screens | none | Hour meter, engine speed, oil pressure (psi/kPa), engine temperature (shows only > 100°F / 38°C), primary boom angle to gravity, turntable level sensor X° and Y°, platform level sensor °, battery volts |
| **Machine Status** | key ON, press **(plus)(minus) together** | Hydraulic pressure 0–4500 psi; primary-to-secondary boom angle +22° to +136°; primary boom length =0', >0', >22'; secondary boom angle −3.5° to 76° (referenced to chassis tilt); secondary length =0 FT / >0 FT; jib bellcrank angle −10° to +10°; DPF regeneration mode (Auto/Force/Inhibit) |
| **Unit of Measure and Language** | (plus)(minus)(minus)(plus) | Metric/English; English, German, French, Spanish, Portuguese, Italian, Dutch, Swedish; **Set engine** (Deutz TD2011L04i "DL04i", Perkins 1104D-44T "P1104"); **Overload Recovery** (sw V3.07+): Clear Overload Recovery YES/NO, passcode required |
| **Default Reset** (sw ≤3.11 and 4.01) | (minus)(minus)(previous)(previous) | Delete drive functions; delete boom function speed; delete lift function ramps; **Delete all (contact Genie Product Support before using)**; **Delete Faults** (resets active latching faults, does not clear history) |
| **Default Reset** (sw 3.12 and 4.02+) | (minus)(minus)(previous)(previous) | Same without Delete Faults |
| **Clear Faults** (sw 3.12 and 4.02+) | (minus)(previous)(previous)(minus) | Clear all safety switch faults (resets active latching faults, not history) |
| **Drive Functions** | (plus)(plus)(enter)(enter) | Forward/reverse extended, not-stowed, low, high drive speed % (50–120, default 100); drive acceleration/deceleration % (25–125, default 100); speed limit on steer angle (0–100, default 50) |
| **Boom Function Speeds** | (plus)(plus)(minus)(minus) | Primary up/down stowed & not stowed, extend, retract; secondary up/down stowed & not stowed, extend, retract; turntable rotate retracted / not retracted / extended; jib up/down retracted / not retracted (50–120 %, default 100) |
| **Lift Function Ramps** | (plus)(plus)(previous)(previous) | Accel/decel % for primary up/down, primary extend/retract, secondary up/down, secondary extend/retract, turntable rotate (50–150, default 100, 5 % steps); jib up/down (50–120) |
| **Valve Calibration** | (minus)(minus)(enter)(enter) | Delete drive / primary up-down / primary extend-retract / secondary / turntable rotate **valve** calibration; allow primary up/down, primary extend/retract, secondary up/down, turntable rotate **speed** calibration; delete drive / primary up-down / primary ext-ret / secondary / turntable / steer / jib up-down **joystick** calibration |
| **Sensor Calibration** | (plus)(enter)(enter)(plus) | Set unit X-axis / Y-axis to gravity; set platform level to gravity; platform level sensor mV/degree; delete axle angle sensors calibration → axle fully retracted / fully extended; delete all steer sensors / single steer sensor (FL = blue end blue side, RL = yellow end blue side, FR = blue end yellow side, RR = yellow end yellow side); secondary boom angle: **before 4.01** six points −3.5°, 20°, 35°, 50°, 65°, 76°; **4.01+** fully lowered / fully raised; primary boom angle: **before 4.01** 0°, −50°, −20°, 10°, 40°, 70°; **4.01+** fully lowered / fully raised; jib level angle: **before 4.01** 60°, 34°, 8°, −18°, −44°, −70°; **4.01+** jib level cylinder fully extended / fully retracted |
| **Options** | (minus)(minus)(plus)(plus) | Boom Function Limit (NO LT / EXT LT = secondary extend inhibited); AC generator (NONE/BELT/HILO/HYDRL/GHG10); alarm (NO AL / MO AL motion / TR AL travel / DE AL descent / TD AL both); Lift/Drive cutout (NO CO / DCONS drive cut out while not stowed / LORDR lifting or driving); proximity kill switch (NONE/PROX); platform overload (NONE/WARN/CUTPT/CUTAL/PLFTS); work lights; flashing beacon; drive lights; disable steer mode change while driving; rocker switch; chassis tilt cutout (NONE / COALL cutout all / CODRV cutout drive); foot switch lockout 0–30 min (default 10); platform always level to gravity; axle motion only while driving |

Software version shows on the LCD when the E-stop is pulled out (e.g. VER 2_10). Calibration and parameter changes are for trained, qualified persons only (tip-over hazard).

## Calibration-mode hardware (SM p.42 and every sensor procedure)
- Before SN 321: jumper across the 2-pin connector, lower-left of ground box; remove afterwards (tip-over hazard).
- After SN 320: calibration toggle switch at top of ground box, move left; fit a door fastener so the door cannot move it; closing the door exits calibration mode automatically.
- Key must be in **bypass**; hold Enter ~5 s while pulling the E-stop out (or turning key to ground); then (plus)(enter)(enter)(plus). Values saved only by holding **engine start ~5 s until the engine stops**.

## Connector legend (SM pp.205–207)
| Connector | Description |
|-----------|-------------|
| J9, J10 | Ribbons TCON → membrane #1, #2 |
| **J11** | Black 23-pin AMP on TCON |
| **J12** | Black 35-pin AMP on TCON |
| **J13** | White 23-pin AMP on TCON |
| **J14** | White 35-pin AMP on TCON |
| **J15** | Black 4-pin DTP (battery/ground) on TCON (legend text says PCON; pin table lists it under Turntable Controller) |
| J17 | 16-pin Molex to key switch |
| J20 | 12-pin Deutsch lower/upper limit switch harness |
| **J21** | Black 23-pin AMP on PCON |
| **J22** | White 35-pin AMP on PCON |
| J23 | 10-pin ribbon PCON → LED driver board; J24 20-pin Molex LED driver board |
| J25 | 6-pin Deutsch drive/steer joystick; J28 secondary boom joystick; J127 primary/turntable joystick; J128 jib/platform rotate joystick; J29, J169 Molex on PCON |
| **J31** | Black 23-pin AMP on DCON |
| **J32** | White 23-pin AMP on DCON |
| J46 | LSS1RS (4-pin); J49 LSS1RO |
| J55 | Platform tilt sensor (6-pin) |
| J57 | RPM solenoid; J58–J71 boom/turntable valve coils (see pin legend); J76/J77 platform rotate CW/CCW; J78/J79 jib up/down; J80/J81 platform level up/down; J82 prox kill; J84 foot switch; J87 two-speed motor stroke; J91–J98 steer valves; J99/J100 axle extend/retract; J106 brake release |
| J107–J110 | Steer sensors RR, LR, RF, LF (3-pin Deutsch) |
| J114 | Primary boom angle sensor (6-pin); J154 secondary boom angle sensor (6-pin); J162 / J166 jib bellcrank sensor; J160 / J161 front / rear axle angle sensor (4-pin) |
| J119 | Jib not retracted; J120 4-pin Weatherpack EDC |
| **J121** | 12-pin Deutsch **grey** SCON; **J122** 12-pin Deutsch **black** SCON |
| J124 / J125 / J126 | Drive enable right LST1O / left LST2O / safety LST1S |
| J129, J149, J150 | Boom composite / lower limit switch harness; J151 CAN jib/primary; J152 3-pin SAE Deutsch tee |
| J135 / J136 | Jib bellcrank up / down valves; J140 / J141 jib extend / retract |
| J137 / J138 | Front / rear axle safety switch |
| J163 / J164 | Secondary up/down and extend/retract flow control |
| J165 | 12-pin Deutsch at PCON |
| J223, J224, J228, J231–J233 | CAN gateway, telematics, gateway-TCON, Tier IV ECU connectors |

## Pin legends (SM pp.208–210)
**TCON J15 (4-pin):** 1 B1BAT RD (battery), 2 GND BR, 3 GND BR, 4 unused.

**TCON J11 (23-pin black):** 1 GNDPCON BR · 2 P52PCON WH · 3 C46HN WH · 4 C47OUT WH/BK · 5 P23PCON BK · 6 S56PRV RD · 7 P56PRV RD/WH · 9 R117FB RD (beacon) · 11 C145CAL RD/WH (calibrate) · 17 D81CAN(−) GR · 18 D82CAN(+) YL.

**TCON J12 (35-pin black):** 1 GNDSCON BR · 2 P21DCON WH · 3 P53LS WH/BK · 4 P54ENG BK/WH · 5 S56PRV RD · 6 P53LS WH/BK · 7 P58LS RD/BK · 8 S59CNK GR/WH · 9 S140ENL OR/RD · 10 C61AXR GR · 13 C64LS OR/BK · 14 C65LOF BL/WH (low fuel) · 15 C144DER BL/WH (drive enable R) · 16 C73SBR BL/RD (secondary retracted) · 17 C67SBD BL (secondary not stowed) · 18 C64LS OR/BK · 19 C70PBR BL/WH (primary #2 retracted) · 20 C71PBE BL/BK (primary #2 extended) · 25 SNSR GND BR · **26 P109ANG GR/WH (5 V sensor power)** · 28 C143DEL BL/RD (drive enable L) · 32 C123PBS RD/BK (primary angle operational) · 33 C124SBS OR/BK (secondary angle operational) · 34 S140ENL OR/RD · 35 GND16 BR.

**TCON J13 (23-pin white):** 2 C35RPM BK/RD (high speed) · 3 C21IGN WH · 4 C34SA BK/WH (start aid) · 7 C46HRN WH · 9 C33STR BK (start) · 10 C30EDC WH · 11 C31EDC WH/BK · 12 C25PSR WH/BK (oil pressure sender) · 13 C26TSR WH/RD (temp sender) · 17 S137PLL RD/WH · 18 C41RPM OR/BK · 19 S139TRF WH/RD · 22 C45GEN GR/WH.

**TCON J14 (35-pin white, valve outputs):** 1 VLVRET4 BR · 2 V03PUD RD/WH (primary up/down FC) · 3 V09PER BK/RD (primary ext/ret FC) · 4 V06TRF WH/RD (turntable FC) · 5 V12SUD BL/WH (secondary up/down FC) · 6 V176SER GR/WH (secondary ext/ret FC) · 7 V01PBU RD · 8 V02PBD RD/BK · 9 V07PBE BK · 10 V08PBR BK/WH · 12 V11SBD BL/BK · 14/17/18 VLVRET5 BR · 19 V10SBU BL · 20 V73SBR GR/BK · 21 V72SBE GR · 25 V04TRL WH · 26 V05TRR WH/BK · 27 VLVRET7 · 30 VLVRET6 · 32 C27AUX RD · 34 V155PCE OR/RD (pressure comp enable) · 35 V150HG GR/BK (hydraulic generator).

**PCON J21 (23-pin):** 1 GNDPCON BR · 2 P52PCON WH · 4 S56PRV RD · 7 P56PRV RD/WH · 15 C47OUT WH/BK · 16 C46HN WH · 17 D81CAN(−) GR · 18 D82CAN(+) YL · 23 P23PCON BK.

**PCON J22 (35-pin):** 1 VLVRET1 · 2 V153JBE BK · 3 V18PRR GR/BK · 4 V17PRL GR · 5 V43JU GR · 6 V44JD GR/BK · 7 V14PLU OR · 8 V15PLD OR/BK · 9 V154JBR BK/WH · 11 C90PXS RD/BK · 15 C88PTS RD/BK · 16 C64LS OR/BK · 17 C56FTS RD (foot switch) · 18 C154JBR · 19 P85RET BR · 20 C84TAY GR/BK · 21 P85PTS GR · 22 P87RET BR · 23 P87PTS RD · 28 V146JBU BL · 29 V147JBD BL/BK · 30 P109JBS GR/WH · 31 P110JBS BK · 32 C148JBS BL/WH · 34 VLVRET2.

**DCON J31 (23-pin black):** 1 GND-DCON BR · 2 P21DCON WH · 3 P53LS WH/BK · 5 S56PRV RD · 6 C61AXRT GR · 17 D81CAN(−) GR · 18 D82CAN(+) YL · 20 C60FAP GR/WH · 21 C60RAP GR/WH · 23 P61LSA GR.

**DCON J32 (23-pin white):** 1 VLVRET1 · 2 V61AXRT GR · 3 V60AXEX GR/WH · 4 V29MS RD/WH · 8 V36RRS BL · 9 V37RRS BL/BK · **10 C111RRS OR · 11 C111LRS OR · 12 C111RFS OR · 13 C111LFS OR** · 14 VLVRET2 · 15 V32BRK WH/RD · 16 V36LRS · 17 V37LRS · 18 V36RFS · **19 P110RT BK (steer sensor ground) · 20 P109ANG GR/WH (steer sensor 5 V)** · 21 V37RFS · 22 V36LFS · 23 V37LFS.

**SCON J121 (grey):** 1 S132LDS BL/WH (load sensor) · 2 S73SLE BL/RD (secondary lockout extend) · 4 C145CAL RD/WH · 6 D82CAN(+) YL · 7 D81CAN(−) GR · 8 S59CNK GR/WH · 9 S56PRV RD · 10 S137PLL RD/WH · 11 S139TRF WH/RD · 12 GNDSCON BR.
**SCON J122 (black):** 1 P21DCON WH · 2 C142SBS OR (secondary angle safety) · 3 C141PBS RD (primary angle safety) · 4 C60AXE GR/WH · 5 S12SB BL/WH · 6 S13DE BL/RD · 7 P53LS WH/BK · 8 S140ENL OR/RD · 9 P54ENG BK/WH · 10 P58LS RD/BK · 11 S56PRV RD · 12 C61AXR GR.

## Engine relay and fuse panel (SM pp.211–212)
CR28 engine/fuel relay (Cummins: engine run/alternator) · CR17 hydraulic oil cooler fan relay · CR41 flashing beacon relay · CR5 horn relay · **CB10 20 A breaker, RPM solenoid** · **F23 30 A engine/start/alternator** · **F22 60 A glow plug** · **F7 20 A cooler fan/horn** · B1PBAT power from battery · B3PBAT fused power from B1 · R21PIGN ignition fuse 20 A RPM solenoid · 02PGND ground · CR1 start relay · CR15 glow plug relay (Deutz/Perkins).

## Wire circuit legend (SM pp.192–200)
Prefix: C control, D data, E engine, G gauges, N neutral, P power, R relay output, S safety, V valve. Example C74PL = control circuit 74 primary lockout. Wire rules: extend = solid, retract = striped black; left/CW solid, right/CCW striped; proportional valve wiring striped; BR = ground/return.

Safety power circuits: **P9A** primary boom down valve · **P9B** engine ignition/fuel · **P10** primary extend valve · **P11** primary up valve · **P30** secondary down and extend valves · **P38** propel valves · **P39** turntable rotate flow control valve.

Selected circuit numbers: 20 RD 12 V battery supply · 21 WH ignition supply · 27 RD auxiliary power · 30/31 EDC fwd/rev · 32 brake · 33 start · 34 start aid · 35 high engine speed · 53 boom envelope safety cutoff · 54 power to safety interlock switches (engine) · 56 foot switch/TCON E-stop power · 57 boom down safety interlock · 58 safety interlock to engine · 60/61 axle extend/retract · 62 boom stowed · 63 power to envelope safety switch · 64 power for operational switches · 66 drive enable · 67 secondary not stowed · 68 primary lowered · 69–76 boom length switches and lockouts · 77/78 lower/upper angle operational · 79 power from TCON E-stop · 80/81/82 CAN shield/low (GR)/high (YL) · 83/84 tilt X/Y · 85 tilt sensor power · 87–89 platform level safety power/output/ground · 94 load sensor · 109 GR/WH sensor power · 110 BK sensor return · 111 OR steer signal · 123/124 primary/secondary angle operational · 125/126 secondary lockout extend / riser-down enable · 136 power to safety module · 137 drive power (P_38) · 138 primary up / secondary down-extend (P_11/30) · 139 turntable rotate FC safety (P_39) · 140 boom envelope safety · 141/142 primary/secondary angle safety · 143/144 drive enable L/R · 145 calibrate · 146/147 jib bellcrank up/down FC · 148 jib bellcrank sensor · 153/154 jib extend/retract · 155 pressure comp enable · 158–165 joystick signals (162 OR joystick 5 V) · 166/167 boom length safety/operational · 176 secondary ext/ret FC · 196 YL 2.5 V sensor power · 198 RD +12 V sensor power · 227/228 engine CAN low/high.

## Limit switches and rotary sensors (SM pp.201–204)
Two kinds: mechanical operational/safety switches (each operational switch is backed by an independent safety switch) and Hall-effect rotary/angle sensors (must be calibrated when replaced).

| Code | Function |
|------|----------|
| LSP1RO / LSP1EO | Primary boom retracted / fully extended, operational (NOHC) |
| LSS1RO | Secondary fully retracted operational: reduces turntable speed when extended, disables secondary down until retracted |
| LSS1RS | Secondary retracted **safety**, backup for LSS1RO; cuts P9B, P_11, P_30 |
| LSJ1RO | Jib retracted; limits turntable and drive speed when jib extended |
| LST1O / LST2O | Drive enable zone left / right |
| LST1S | Drive enable safety: stops turntable rotating past either rear tire with axles retracted |
| LSFA1ES / LSRA1ES | Front / rear axle extended safety; close when fully extended; prevent boom functions with axles retracted |
| RSP1AO / RSP1AS | Primary boom angle operational / safety (relative to secondary) |
| RSS1AO / RSS1AS | Secondary angle operational (drive speed, sequencing) / safety (cuts P9B, P_11, P_30 on drift) |
| RSJ1AO | Jib bellcrank angle (+60 / −70° range) |
| RSFA1O / RSRA1O | Front / rear axle position, used for steering neutral during axle extension |
| RSLF1SO / RSRF1SO / RSLR1SO / RSRR1SO | Wheel steer sensors; LF is master in all modes except rear steer, LR master in rear steer |
| Platform angle sensor | ±20° range, ±10° safety cutout |
| SCON | dual-axis tilt, ±4.5° alarm |

## Two separate 5 V sensor supplies and what crosses the slip ring `[V]` (sheet ES0366J, SM p.229 / PDF 243; pin legends pp.208–210)
- **TCON 5 V** (J12-26 P109ANG GR/WH, return J12-25 SNSR GND BR): printed beside the boom angle sensor circuits C123PBS / C124SBS / C141PBS / C142SBS. This is the supply the "5.0 VDC LED on the TCON board" belongs to.
- **DCON 5 V** (J32-20 P109ANG GR/WH labelled "STEER SNSR PWR (5.0 VDC)", return J32-19 P110RT BK "STEER SNSR GND"): generated inside the DCON (the sheet draws "5 VOLT" sources in the DCON block); feeds the four steer sensors J107–J110 (drawn) and, by inference, the two axle sensors J160/J161. The two supplies share the circuit number 109 but are physically separate.
- **Slip ring** contact labels on the sheet: P18, P6R1, C60AXE, DCON PWR, P9A, P12, DCON GND, P7R, CAN HIGH, CAN LOW. Plug pairing read off the sheet: **J36↔J33** CAN (A = YL CAN HIGH = D82CAN+, B = GR CAN LOW = D81CAN−, C = shield); **J37↔J34** (1 = WH S56PRV = P7R, 2 = BK GNDDCON = DCON GND); **J38↔J35** (1 = RD P21DCON = DCON PWR, 2 = OR P9A, 3 = BR C61AXR = P12, 4 = BL P18, 5 = YL C60AXE, 6 = GR P53LS = P6R1). No sensor 5 V and no boom-angle circuit crosses the swivel.
- **Chassis sensor connector pinouts (drawn on ES0366J):** steer plugs J107 (RR), J108 (LR), J109 (RF), J110 (LF) 3-pin — **A = RD 5 V supply, B = BL signal, C = BK ground**; axle plugs J160 (front, RSFA1O), J161 (rear, RSRA1O) — **1 = RD supply, 2 = BL signal, 3 = BK ground**. One bus from J32-20 feeds all six.

## Reference from the owner's Drive flowchart (cross-checked against these pin legends) `[V]`
TCON board screws 49820GT / nylocks 12344GT are the board ground path; 20 A ground-box breaker 147095GT; SCON harness 226496GT; electrical rotator 1253702GT (10 contacts) replaces 122918 / 89437 / 107533; TCON board 1258461GT from SN 1712 (217570GT before). Field-standard CAN checks (≈60 Ω across CAN H/L with battery off, ≈2.5 V idle) are `[F]`, not Genie values. The flowchart's statement that the chassis sensor 5 V comes from TCON through the rotator is **wrong** per the sheet (see the section above).
