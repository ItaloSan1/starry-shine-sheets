# Case: Z13513-1861 (2013 Genie Z-135/70, 2162.4 h)

- `diagnosis-walkthrough.md` — manual-cited, adversarially verified step-by-step electrical diagnosis for the fault set: front/rear axle sensor 0 V, SCON CAN no response, primary boom angle zone fault, primary and secondary boom angle sensor not calibrated, secondary boom switch fault, four steer sensors 0 V. Built 2026-09-10 from Service Manual 1268557GT Rev A4, Parts Manual 106877GT Rev H.04 and Operator's Manual 114474; 12-agent workflow with three verification lenses and two revision rounds.
- `photos/` — serial plate (ES0366, 45,264 lb, 62 kW), ground display (2162.4 h), machine photos.
- Key finding: the six chassis sensors are fed by a 5 V output generated inside the DCON (J32-20), which does not cross the electrical swivel; the boom angle sensors are fed by the TCON's 5 V (J12-26).

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
