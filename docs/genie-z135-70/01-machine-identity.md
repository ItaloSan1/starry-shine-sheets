# 01 — Machine identity, serial ranges, manuals, standards

## Model
- **Genie Z-135/70** self-propelled articulating boom lift (diesel, 4WD, 4-wheel steer, extendable axles, self-levelling platform, jib boom). `[V]`
- Later production was renamed **ZX-135/70**. ZX manuals (218700, 1279835) describe the same control system and are used only as `[S]` support here.

## Serial number format `[V]`
- Format: `Z135` + two-digit build year + `-` + sequence. Service manual coverage is written as **Z13505-101 to Z13513-2000**, i.e. 2005 unit #101 through 2013 unit #2000.
- Owner's machine on file: **Z13513-1861**, built 2013, 2,162 hours at time of the Drive flowchart (see 08).
- Serial plate: on the chassis/turntable; the Operator's Manual says "See the serial label for the machine weight" and the decal map shows the serial label next to decal 52865 (Annual Inspection) on the turntable. `[V]`

## The three manufacturer documents

| Doc | Part no. | Edition | Coverage | Ingested |
|-----|----------|---------|----------|----------|
| Operator's Manual | 114474 | Second Edition, Fifth Printing, Sept 2015, © 2005 Terex | ANSI/CSA machines SN 779 to 2000 | **Fully** (67 PDF pages, text in `extracted/114474.txt`) |
| Parts Manual | 106877 (106877GT) | Rev G6, Jan 2013, 358 pp | SN 100/101 to 2000 | **Not yet**: 149 MB image PDF, over the Drive connector's 10 MB limit, no text layer returned |
| Service and Repair Manual | 1268557 (1268557GT) | **Rev A4, October 2018** | Z13505-101 to Z13513-2000 | **Pages 1–66 verified** (specs, torque, platform controls, platform, jib boom). Pages 67–243 pending full PDF |

Service manual 1268557GT Rev A4 states it includes repair procedures, fault
codes, and electrical and hydraulic schematics, and that **detailed maintenance
procedures are in a separate Maintenance Manual**. `[V]`

## Service manual table of contents (Rev A4) `[V]`
- Section 1 Safety Rules (v)
- Section 2 Specifications (1): Machine Specifications, Performance, Hydraulic Oil, Hydraulic Component, Manifold Component, Engines (Deutz BF4L 2011, Deutz TD2011L04i, Cummins B4.5L, Cummins B3.3T, Perkins 1104C-44, Perkins 804D-33T), Machine Torque Specifications (19), Hydraulic Hose and Fitting Torque (20)
- Section 3 Repair Procedures (24): Platform Controls (1-1 circuit board, 1-2 membrane decal, 1-3 joysticks); Platform Components (2-1 leveling cylinder, 2-2 rotator, 2-3 platform level sensor, 2-4 platform overload system); Jib Boom Components (3-1 cable track, 3-2 jib boom, 3-3 lift cylinder, 3-4 level cylinder, 3-5 extension cylinder, 3-6 bellcrank angle sensor, calibrate p.58); Boom Components (4-1 primary boom cable track …, How to Calibrate the Primary Boom Angle Sensor p.82, Secondary Boom Angle Sensor p.89); … Axle Components (10-1 Steer Sensors p.158, Calibrate a Replacement Steer Sensor p.160, Calibrate All Steer Sensors p.161, Calibrate the Axle Angle Sensors p.167)
- Section 4 Fault Codes (171): Control System Fault Codes (172) … (fault matrix around p.185–189)
- Section 5 Schematics (191): Hydraulic Schematic before SN 180 except SN 102 (224); SN 102 and SN 180–534 (225); from SN 535 (227); Electrical Schematic (229 onward)

## Serial-number breaks found so far `[V]`
| Break | What changes |
|-------|--------------|
| Before SN 180 (except SN 102) vs after SN 179 | Drive motors (SN 102 has the later motors). Hydraulic schematic sheet differs |
| SN 180–534 vs from SN 535 | Hydraulic schematic sheet differs |
| Before SN 321 vs after SN 320 | Calibration mode entry: **jumper across 2-pin connector** in lower-left of ground control box (before 321) vs **calibration toggle switch** at top of ground control box (after 320) |
| To SN 1711 vs from SN 1712 | TCON board part number: 217570GT vs 1258461GT (from the Drive flowchart citing parts manual) `[V]` |
| After SN 1853 | Old boom angle sensor 94980GT no longer available; first replacement needs kit 217246GT; sensor 216061GT and magnet are matched (Drive flowchart citing parts manual) `[V]` |
| SN 779 to 2000 | Operator's manual 114474 applies |

## Standards `[V]`
- Complies with ANSI/SIA 92.5 and CAN B.354.4 (operator's manual cover).
- Annual inspection decal 52865 is on the machine; a CSA B354.4 annual inspection by a qualified person is required before return to service after control-system repair (Drive flowchart, owner's jurisdiction Alberta).

## Genie service bulletins known to apply to Z-135 `[S]`
| Bulletin | Subject |
|----------|---------|
| 120007 | Z-135 CONTROL SYSTEM UPDATE (install the most current software version) |
| 140019 | PLATFORM LEVELING |
| 150002 | SECONDARY BOOM ANGLE SENSOR |
| 2014 | SmartLink Proportional Lift control-system upgrade kits offered for these machines; some units were upgraded |

Genie Service phone (US): 800-536-1800. Tech pubs e-mail: awp.techpub@terex.com. `[V]`

## Two ground-control panel styles and two platform-panel styles `[V]`
The Operator's Manual states Z-135 machines have one of two ground control
panel styles and one of two platform control panel styles; descriptions and
tests apply to both unless noted. The later ground panel has separate primary
boom up / down buttons (items 22, 23) and the bypass/recovery key switch marked
Run / Bypass / Recovery.
