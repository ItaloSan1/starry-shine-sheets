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
