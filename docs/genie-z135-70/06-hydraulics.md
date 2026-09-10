# 06 — Hydraulic system

Pressures, pumps, filters and coil resistances are tabulated in
[02-specifications.md](02-specifications.md). This file covers system layout
and procedures. `[V]` unless tagged.

## Layout (Service Manual pp.5–6, 39–47)
- **Function pump** (variable piston, compensator 2900 psi, standby 250 psi) feeds the **function manifold** (system relief 3100 psi at test port; primary boom extend relief 2600 psi).
- **Drive pump** (bi-directional variable piston, 3625 psi max) with **charge pump** (gerotor, 315 psi neutral) feeds the **traction manifold** (hot-oil relief 250 psi) and the drive motors; charge pressure also releases the spring-applied wheel brakes through a solenoid valve (brake relief 190 psi).
- **Steer/axle manifold**: axle extend relief 2400 psi.
- **Jib manifold** (platform end of primary extension boom; flow regulator 2 gpm) and **platform manifold** (P and T ports; platform rotate and platform level flow regulator 0.2 gpm) plus a flow-control manifold next to the jib manifold for the recirculation circuit `[S]`.
- **Auxiliary pump** (fixed gear, 2.47 cc) driven by the two 6 V auxiliary batteries: emergency/auxiliary power for boom functions, max 3100 psi.
- Cylinders: primary boom lift (with upper/lower linkage arms), primary extension, secondary boom lift, secondary extension (4 boom tubes), jib lift, jib level, jib extension, platform leveling (counterbalance valves), platform rotator (helical gear, 160°), turntable rotate drive hub, axle extend, steer.
- Platform leveling: TCON compares platform angle sensor with turntable level sensor and drives the platform level proportional valve on the platform manifold.
- Hydraulic schematics: three sheets by serial (before 180 except 102; 102 and 180–534; from 535).

## Bleed the platform rotator
Engine off, auxiliary power only: rotate platform full right then full left until air is out. No valve bleeding needed.

## Free-wheel / winching (Operator's Manual p.58)
Chock wheels; release the wheel brakes by turning over all four **drive hub disconnect caps**; winch line to the chassis tie points; reverse to re-engage. **The pump free-wheel valve should always remain closed.**

## Hydraulic oil level (Operator's Manual p.62)
Engine off, boom stowed; sight gauge on the tank between the two decal marks.

## Hose and fitting practice
Replace the O-ring whenever a Seal-Lok seal is broken (kit 49612); torque to the tables in 02; loosen connections slowly to bleed pressure; after work, operate all functions and check for leaks.

## Temperature limits
Do not operate above 120°F / 49°C ambient; use Chevron 5606A (or heater) below 0°F; do not run Rando HD Premium MV below -20°F; oil above 200°F sustained → consider cooler.
