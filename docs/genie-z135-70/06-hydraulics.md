# 06 — Hydraulic system, manifolds, adjustments (Service Manual 1268557GT) `[V]`

Pressures, pump displacements, filters and coil resistances are tabulated in
[02-specifications.md](02-specifications.md). Hydraulic schematics: before SN 180
(except 102) p.223; SN 102 and 180–534 p.225; from SN 535 p.227.

## Pumps (SM pp.115–119)
- **Function pump**: pressure-compensated variable piston (Sauer-Danfoss; internal service at an authorized centre). Two hydraulic tank shut-off valves; **never start the engine with the tank valves closed** (tag the machine). After installing, open both valves and **prime**: remove the case-drain hose (smaller hose on top, closest to the drive pump), open only the function-pump tank valve, refit the hose when oil appears, start from ground, check leaks.
- **Standby pressure**: gauge 0–5000 psi on the function-manifold test port, engine at low idle, no function → **250 psi / 17 bar**; adjust via the standby screw (loosen set screw, CW increases).
- **Pressure compensator** (two people): confirm system relief first; high idle; hold high-speed function enable (rabbit) with no function → **2900 psi / 200 bar**; adjust compensator screw; never higher than spec.
- **Drive pump**: bi-directional variable piston with **EDC** (electronic displacement controller) on the pump; only the neutral/null adjustment is possible; dealer service recommended. Removal: unplug EDC, close tank valves, disconnect hoses, support pumps, two mounting fasteners, pull until coupler separates from the flex plate.
- **Prime the drive pump**: open both tank valves; 0–600 psi gauge on "A" or "B" test port; Perkins: disconnect the fuel shutoff solenoid at the injection pump; Deutz: hold the manual fuel shutoff closed; crank 15 s, wait 15 s, crank 15 s more until ~**250 psi / 17 bar**; reconnect; start; check leaks.
- **Flex plate** (SM pp.95–98): Type A (separate coupler) or Type B (combined). Type A bolt torque in sequence: Ford 14 then 20 ft-lb; Deutz 28 then 40; Perkins 49 then 70. Type B: Deutz/Perkins 28 then 40 (isolators toward pump); Cummins 14 then 20 (isolators toward flywheel). Coupler gap: Deutz 0.188 in / 4.8 mm; Cummins and Perkins 0.25 in / 6.4 mm. Coupler set screw with Loctite: Cummins/Perkins 22 ft-lb; Deutz 61 ft-lb. Spline grease Genie **128025** (Shell Alvania CG NLGI 0/1).

## Function manifold (turntable, next to ground controls)
**Before SN 440, view 1 (p.120):** W check valve (holds oil in jib/platform manifolds) · C primary up · G primary retract · J secondary extend (50–55 ft-lb) · H secondary up (50–55) · 16 SAE plug (130–140) · **L system relief 3100 psi** · I secondary down · K secondary retract · F primary extend · B turntable rotate L/R (3-pos 4-way) · D primary down. Cartridge torque 30–35 ft-lb unless noted.
**Before SN 440, view 2 (p.122):** DB, DC check valves (auxiliary pumps #1, #2) · M differential sensing 150 psi (turntable) · O diff. sensing (primary up/down) · **E primary extend relief 2600 psi** (20–25 ft-lb) · Q diff. sensing (primary ext/ret) · U diff. sensing (secondary ext/ret, 50–55) · S diff. sensing (secondary up/down, 50–55) · T proportional secondary up/down (50–55) · DD check valve (function pump, 130–140) · V proportional secondary ext/ret · R proportional primary ext/ret · P proportional primary up/down · N proportional turntable rotate.
**After SN 439, view 1 (p.124):** D primary up/down · C primary up · G primary retract · F primary extend · K secondary retract · J secondary extend · I secondary down · H secondary up · DF tank return check (130–140) · B turntable rotate · L system relief 3100 psi · S, U, Q differential sensing 150 psi.
**After SN 439, view 2 (p.126):** DB · W · O · E 2600 psi · P · R · V · T · N · M · DD · DC.

## Valve adjustments — function manifold (pp.128–130)
- **System relief** (stowed, **auxiliary power, engine off**): back the relief out several turns (before 440: cap and internal hex; after 439: lock nut and stem); gauge on the function-manifold test port; hold auxiliary + primary retract with primary fully retracted; adjust CW to raise to 3100 psi; never above spec (tip-over hazard).
- **Primary boom extend relief** (axles extended): remove pivot-end cover; disconnect the primary extend limit switch 2-pin connector (yellow marker); start and fully extend the primary; gauge on the "ptest" port; high idle; hold function enable/high speed + primary extend with boom fully extended; adjust to 2600 psi; reconnect switch; retract.

## Platform manifold (p.131, on the platform mounting weldment)
AH platform rotate L/R (3-pos 4-way) · AI proportional platform level up/down · AG flow control 0.2 gpm (platform rotate). Torque 20–25 ft-lb.

## Jib boom manifold (p.132, inside the primary extension boom at the platform end)
X pressure compensator 150 psi (jib up/down) 30–35 ft-lb · AE jib retract · AD jib extend · AC flow regulator 2 gpm (jib ext/ret) · AB orifice 0.040 in · AA check 25 psi (holds oil in manifold) · Z shuttle (jib up/down) 10–12 ft-lb · Y proportional jib up/down · AF proportional jib bellcrank level up/down. Torque 20–25 ft-lb unless noted.

## Flow control manifold (p.134, at platform next to jib manifold)
AC flow regulator 0.5 gpm — jib and platform manifold recirculation circuit (20 ft-lb).

## Function enable valve (p.135, behind the medium-pressure filter)
A solenoid 2-pos 2-way: enables the lift pump to supply all boom and steer/axle functions (20–25 ft-lb).

## Turntable rotation manifolds (p.136, on the rotate drive hub motors)
CA counterbalance rotate right · CB counterbalance rotate left (25–30 ft-lb) · CC shuttle 2-pos 3-way brake release (8–10 ft-lb) · CD orifice plug 0.030 in brake release.

## Steer and axle manifold (pp.138–140, manifold box, yellow-triangle side)
BI flow control 1.5 gpm RF retract · BC, BB check valves (RF, LF hold) · BL flow regulator 2.1 gpm RR extend · BQ 3-pos 4-way steer RR · BE, BD checks (RR hold) · BP steer LR · BJ 2.1 gpm LR extend · **BS flow regulator 7 gpm axle ext/ret** · **BU axle retract**, **BT axle extend** (30–35 ft-lb) · **BR pressure reducing valve** axle circuit (30–35) · BK 1.5 gpm LR retract · BM 1.5 gpm RR retract · BG 1.5 gpm LF retract · BF 2.1 gpm LF extend · BH 2.1 gpm RF extend · BN steer LF · BO steer RF. Torque 20–25 ft-lb unless noted.
**Axle relief adjustment** (p.142, stowed, axles extended, two people): gauge 0–5000 psi on the steer/axle manifold test port; hold axle extend from platform with foot switch; adjust internal hex to **2400 psi**; never above spec.

## Traction manifold (pp.144–146, manifold box, blue-triangle side)
View 1: BA, AZ, AJ, AT check valves 5 psi (drive motor anti-cavitation) · AW check 5 psi (brake circuit) · AO shuttle 3-pos 3-way (hot oil out of low-pressure side) 50–55 ft-lb · **AN relief 250 psi charge/hot oil** 30–35 ft-lb · **AY brake release solenoid** · **AX two-speed motor shift solenoid** · AR, AM, AP flow divider/combiner valves (square-end motors, circle-end motors, master) 90–100 ft-lb.
View 2: AL orifice 0.063 in (before SN 180 except 102) or 0.039 in (SN 102 and after 179) · AQ orifice 0.052 · AS orifice 0.063 · AV orifice 0.030 (brake and two-speed) · AU, AK checks 5 psi.
**Hot oil relief adjustment** (p.148; oil at 100–150°F): 0–600 psi gauge on drive pump A or B port; screw the hot-oil relief fully in; engine on, hold rabbit; note pump pressure; move gauge to the traction-manifold test port; adjust relief to **40 psi / 2.8 bar less than the pump reading**.

## Drive oil diverter manifold — welder option (p.149, on the hydraulic generator)
BV directional (diverter) 80–90 ft-lb · BW orifice 0.030 (delays shift to drive) · BX pilot solenoid 35–40 · **BZ relief 270 psi charge circuit** · BY check (prevents oil to generator).

## Valve coils (pp.150–151)
Resistance spec ±30 %, at 68°F; changes ≈4 % per 18°F. Table in 02. **Diode test**: 9 V battery, 10 Ω resistor (Genie 27287), meter on DC mA (up to 800 mA): both polarities > 0 mA and differing by ≥ 20 % = good; 0 mA or < 20 % difference = replace coil.

## Turntable rotation (pp.152–153)
Two rotation drive hub assemblies. Remove with the rotation lock pin installed (tip-over hazard) and a crane on the lifting eye; after install adjust **backlash**: loosen backlash pivot plate bolts, push plate toward turntable, adjustment bolt to contact then back off 1/2–3/4 turn, lock, pull plate to the bolt, lubricate and torque plate bolts (320 ft-lb), rotate a full turn checking for binding.

## Brakes and free-wheel (OM p.58; SM specs)
Spring-applied, hydraulically released wheel brakes via charge pressure through solenoid AY (brake relief 190 psi). For winching: chock, turn over all four drive hub disconnect caps, reverse to re-engage. **The pump free-wheel valve should always remain closed.**

## Cylinders (SM Section 3)
Primary lift (counterbalance valve), primary extension (counterbalance; note cylinder length before removal and reinstall at the same length), secondary lift (removal needs 7-ton crane, tank and battery box out), three secondary extension cylinders (#1 upper, #2 middle, #3 bottom; reinstall in the same order; grooved wear pads aligned with channels; two secondary extend limit switches are different and must be labelled), jib lift, jib level, jib extension, platform leveling (counterbalance valves), platform rotator (helical gear, 160°; mark weldment position; bleed by rotating full right then full left on auxiliary power), steer cylinders (axles extended), axle extension cylinders (needs a portable power unit; pressure to "R" port, return to "E" port; remove the axle extension limit switch first).

## Hydraulic tank
Two shut-off valves (function pump side and drive pump side); drain plug; two suction hoses; two auxiliary power unit supply hoses; drive motor case drain filter and return filter on the tank.
