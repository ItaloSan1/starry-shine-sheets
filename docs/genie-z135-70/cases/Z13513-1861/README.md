# Case: Z13513-1861 (2013 Genie Z-135/70, 2162.4 h)

- `diagnosis-walkthrough.md` — manual-cited, adversarially verified step-by-step electrical diagnosis for the fault set: front/rear axle sensor 0 V, SCON CAN no response, primary boom angle zone fault, primary and secondary boom angle sensor not calibrated, secondary boom switch fault, four steer sensors 0 V. Built 2026-09-10 from Service Manual 1268557GT Rev A4, Parts Manual 106877GT Rev H.04 and Operator's Manual 114474; 12-agent workflow with three verification lenses and two revision rounds.
- `photos/` — serial plate (ES0366, 45,264 lb, 62 kW), ground display (2162.4 h), machine photos.
- Key finding: the six chassis sensors are fed by a 5 V output generated inside the DCON (J32-20), which does not cross the electrical swivel; the boom angle sensors are fed by the TCON's 5 V (J12-26).

## Axle retraction for transport
`axle-retract-for-transport.md` — the machine measured 12.8 ft at the yard and would
not load. Manual-cited procedure for bringing the axles in (12 ft 11 in → 8 ft 1 in),
covering the normal platform-control route, what the eleven faults do and do not
block, Genie's own portable-hydraulic-power-unit method at the cylinder `R`/`E` ports
when the controls are dead, and the move-it-wide fallbacks.
`axle-retract-guide.html` — the illustrated version, 15 figures rendered from the
three PDFs. Published artifact:
https://claude.ai/code/artifact/d164976f-6532-4f6f-9deb-5de8a5e512d4

Key facts established for it:
- `LSFA1ES`/`LSRA1ES` prevent **boom** functions with the axles retracted; they do not
  prevent retraction (SM p.203).
- Each axle extension cylinder is held by two cross-piloted counterbalance valves
  (`DB`/`DC` front, `DD`/`DE` rear, 3:1, 3000 psi — SM p.227), so the axles cannot be
  pushed in or bled in.
- All six 0 V sensor faults disable only "Primary up, Secondary up/down and Extend"
  (SM pp.184–187) — none blocks axle retract. The one fault that can is the primary
  boom angle crosscheck, which switches off `P_38` propel power (SM p.189).
- Bypass mode is platform out-of-level and calibration only; Recovery mode is booms
  only (SM pp.100–101). Neither moves an axle.

## Illustrated field guide
`field-guide.html` — the same diagnosis as an illustrated page: 18 figures rendered
from the manual PDFs (parts diagrams, connector pin legends, located crops of
schematic sheet ES0366J), deep links that open Genie's public PDFs at the cited
page, and step checkboxes that save on the device.
Published artifact: https://claude.ai/code/artifact/b2e1c9c1-41bb-4666-9053-24fb2ea19fa2
`figs/` — the rendered figures (PNG, 150–200 dpi) used by that page.

### Facts upgraded from inference to drawn, by reading ES0366J
- The DCON 5 V output at J32-20 feeds pin A of all four steer plugs (J107–J110)
  **and** pin 1 of both axle plugs (J160, J161) on one bus. Previously inferred.
- Steer sensor plug pinout: A = red supply, B = blue signal, C = black ground.
  Axle sensor plug: 1 = red, 2 = blue, 3 = black.
- Slip ring pairing: J36↔J33 = CAN (A yellow CAN HIGH, B green CAN LOW, C shield);
  J37↔J34 = S56PRV white (P7R) and GNDDCON black (DCON GND); J38↔J35 = P21DCON red
  (DCON PWR), P9A orange, C61AXR brown (P12), P18 blue, C60AXE yellow, P53LS green (P6R1).
- The sheet's own swivel contact labels: P18, P6R1, C60AXE, DCON PWR, P9A, P12,
  DCON GND, P7R, CAN HIGH, CAN LOW.

## SCON wiring reference
`scon-wiring.html` — both SCON connectors as drawn on ES0366J, every pin decoded
against the Safety Controller Pin Legend, the six switched safety power outputs
mapped to their pins, the SCON fault matrix, and where to probe.
Published artifact: https://claude.ai/code/artifact/518be58a-4ef5-4214-b095-c75022c044a2
Figures: `figs/scon-*.png`.

- `J121` gray 12-pin, `J122` black 12-pin (SM p.209).
- `J122-1` `P21DCON-WH` is the SCON's own ECU supply — the **same circuit that feeds
  the DCON**, out of TCON `J12-2`. Losing it takes out both modules.
- `J121-12` `GNDSCON-BR` is the module ground the tilt-sensor fault entries keep
  pointing at.
- Safety outputs: `P_38` propel on `J121-10` `S137PLL`; `P_39` on `J121-11` `S139TRF`;
  `P_10` on `J121-8` `S59CNK`; `P_11`+`P_30` on `J122-8` `S140ENL`; `P_9B` ignition
  and fuel on `J122-10` `P58LS`; `P_7R` on `J121-9` and `J122-11` `S56PRV`.
- Matrix cross-check: *Loss of CAN* drops all six including `P_9B`, so a machine whose
  engine keeps running has a SCON that is powered, grounded and on the bus — the
  "SCON CAN no response" message is very likely latched history.
- Module `1258463GT` from SN 1712 (this machine); `139647-SGT` to SN 1711. Item 22 on
  parts figure 304.1, turntable hydraulic tank side (PM pp.54–55). Replacing it
  requires a **full machine calibration** (SM p.154).

## Connector J100 (axle retract valve)
Figures `figs/j100-*.png`.
- Legend: "J100 — 2 pin Deutsch connector for axle retract valve" (SM p.206). Coil
  designator on ES0366J is **Y100**; the extend partner is `J99`/`Y99`.
- Pin 1 = `V61AXRT-GR` (green), switched supply from DCON `J32-2`.
  Pin 2 = `VLVRET1-BR` (brown), valve return, common to `J99`, `J87`, `J106`,
  and back to DCON `J32-1` (SM p.229).
- The valve is **BU, index 11** on the steer and axle manifold, `89853GT` solenoid
  valve 2 position 3 way, coil `89849GT` 12 V D10 16 W, nut `45912GT`, seal kit
  `89310GT` (SM p.138, PM p.225).
- **Location:** inside the manifold box on the **yellow triangle side** of the chassis
  (SM p.138). Parts figure **204.1 Chassis Components, Yellow Triangle Side**, PM p.32:
  box `101032PGT` item 4, cover `107728GT` item 9. The blue triangle side box holds the
  **traction** manifold (SM p.152) — wrong box.
- Coil test: **7.5 to 9.5 Ω** at 68°F/20°C, ±30%; BU and BT share the spec. Tag and
  disconnect the wiring before testing (SM p.150).

## Function enable valve (why one jumper at J100 moves nothing)
`figs/func-enable-valve.png` — SM p.135. Schematic item **A**, solenoid valve
2 position 2 way, coil `Y74`, connector `J166`, mounted **behind the medium
pressure filter**: *"Enables lift pump to provide hydraulic pressure for all boom
and steer/axle functions."* Coil spec 3.5–5.5 Ω (SM p.150).

Consequence: energizing the axle retract coil `BU` at `J100` only shifts a spool —
no oil reaches the steer and axle manifold until the function enable valve is also
energized. Forcing axle retract electrically would mean latching on the master
hydraulic enable for every boom and steer function at the same time, on a machine
already carrying eleven faults. The supported paths remain Route A (platform
controls) and Route B (portable hydraulic power unit on the cylinder `R`/`E` ports,
SM p.164) in `axle-retract-for-transport.md`.

Useful field tests at `J100` with the plug off:
- Coil side, ohms: **7.5–9.5 Ω** at 20 °C, ±30% (SM p.150). Coil `89849GT`.
- Harness side, DC volts, while the platform commands retract: battery voltage means
  the command chain through the swivel and DCON is intact and the fault is
  downstream; nothing means chase it back to DCON `J32-2`.
- Plug identification: solid green `V61AXRT` = `J100` retract (DCON `J32-2`);
  green/white `V60AXEX` = `J99` extend (DCON `J32-3`); brown `VLVRET1` = shared
  return for `J99`, `J100`, `J87` and `J106`.

## Field observation 2026-09-10: both axle indicators lit, no axle motion
Owner photographed the platform control panel with the engine running. **Both axle
indicators (extend and retract) show an amber LED at the same time**, and neither
direction moves the axles. Panel is visibly wet, decal corner lifted.

Leading hypothesis, manual-backed — Control System Fault Code table, SM p.176:

| Error Source | Error Type | Effects | Recovery Actions |
|---|---|---|---|
| Axle Extend/Retract Buttons | Fault Check (**both buttons pressed**) | **Axle extend/retract disabled.** Display message on LCD | Check ribbon and connector from membrane switch. If necessary replace membrane switch. |

A wet or aged membrane bridging traces makes the controller read both buttons held,
and it then refuses both directions. Parts: `106509GT` DECAL, MEMBRANE, PLATFORM
CONTROL (plus `82841GT` overlay decal, required when replacing 106509), `62399GT`
PCB MEMBRANE/LED, `81488GT` platform control box gasket (PM p.209).

Separately, the **continuous flashing** is explained by the dead axle angle sensors:
OM p.28 defines flashing as "axles moving" and steady as "fully extended"/"fully
retracted", so with both axle angle sensors at 0 V the controller can never confirm
an end stop and the light flashes indefinitely.

Still unconfirmed: the identity of a third lit amber LED below the axle pair (machine
not level vs drive enable — drive enable on would itself block retraction, OM p.51),
and whether the foot switch was held during the attempt. Next step is to read the
ground control LCD, which is where this fault posts its message.
