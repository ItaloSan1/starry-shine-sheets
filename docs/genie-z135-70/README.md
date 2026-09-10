# Genie Z-135/70 Diagnosis & Repair Knowledge Base

This folder is the persistent knowledge base for diagnosing and repairing the
**Genie Z-135/70** articulating boom lift. Claude must read it before answering
any question about this machine, and must treat the three manufacturer
documents below as the **source of truth** over forums, videos, or memory.

## Source-of-truth documents (manufacturer)

| # | Document | Genie part no. | Covers | URL |
|---|----------|----------------|--------|-----|
| 1 | Operator's Manual (ANSI/CSA), Second Edition, Fifth Printing, Sept 2015 | 114474 | Z-135/70 from SN 779 to 2000 | https://manuals.genielift.com/Operators/english/114474.pdf |
| 2 | Parts Manual, Rev G6, Jan 2013 (358 pp) | 106877 (106877GT) | Z-135/70 SN 100/101 to 2000 | https://manuals.genielift.com/parts%20and%20service%20manuals/data/Parts/Z%20Booms/106877.pdf |
| 3 | Service and Repair Manual | 1268557 (1268557GT) | Z-135/70 from Z13505-101 to Z13513-2000 | https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Z%20Booms/1268557.pdf |

## Ingestion status (read this first)

See [00-source-status.md](00-source-status.md). As of the first build of this
knowledge base the sandbox's network policy blocked `manuals.genielift.com`
and every mirror, so the PDFs were **not** read page-by-page. The content here
was assembled from indexed excerpts of those exact manuals, Genie-published
spec sheets and bulletins, a prior diagnostic flowchart in the owner's Google
Drive that cites pin data from manuals 1268557GT and 106877GT, technician
forums, and YouTube transcripts. Every fact carries a confidence tag.

**To finish ingestion:** put the three PDFs in `docs/genie-z135-70/source/`
(or upload them to Google Drive) and run `scripts/genie/ingest-manuals.sh`.
Then Claude must read the extracted text and upgrade or correct every entry.

## Confidence tags used in every file

| Tag | Meaning | Trust level |
|-----|---------|-------------|
| `[V]` | Verified: text quoted from one of the three manuals via the search index, or from the Drive flowchart that cites manual pin/page data | Treat as manufacturer fact, but re-check against the PDF when the exact number matters |
| `[S]` | Supported: from another Genie/Terex publication (spec sheet, service bulletin, ZX-135/70 manual, tech tip, Genie blog) | Manufacturer-sourced but not from the three primary docs |
| `[F]` | Field: technician forums, YouTube, rental-company familiarisation videos | Useful, not authoritative. Say so when repeating it |
| `[M]` | Model memory: Claude's training recollection of Genie manuals, not confirmed this session | Must be verified against the PDF before it is used for a repair decision |

## Files

| File | Contents |
|------|----------|
| [00-source-status.md](00-source-status.md) | What was ingested, what was not, how to finish |
| [01-machine-identity.md](01-machine-identity.md) | Model, serial format, manual coverage, standards, service bulletins |
| [02-specifications.md](02-specifications.md) | Dimensions, weights, capacities, speeds, engine, fluids, tires, torque |
| [03-control-system.md](03-control-system.md) | TCON / PCON / DCON / SCON architecture, CAN bus, connectors and pinouts, display menu, bypass/recovery key |
| [04-fault-codes.md](04-fault-codes.md) | Safety-switch P-codes, sensor faults, CAN faults, load-sense faults, how to clear |
| [05-calibration.md](05-calibration.md) | Angle sensors, steer/axle sensors, turntable level, load cell, joysticks, calibration order rules |
| [06-hydraulics.md](06-hydraulics.md) | Pressures, pumps, manifolds, oil spec, brakes, free-wheel/towing |
| [07-maintenance.md](07-maintenance.md) | Checklist A–E intervals and items |
| [08-diagnostic-playbook.md](08-diagnostic-playbook.md) | Staged electrical diagnosis (owner's machine Z13513-1861) plus documented field cases |
| [09-parts-reference.md](09-parts-reference.md) | Part numbers collected so far, with serial breaks |
| [10-external-sources.md](10-external-sources.md) | Forums, videos, articles consulted, with takeaways |

## Non-negotiable safety rules (apply to every answer)

1. Never advise bypassing, jumpering, or defeating a safety circuit, limit
   switch, tilt sensor, load cell, or envelope sensor to "make it work".
2. Key OFF and E-stop IN before unplugging any connector; battery disconnected
   for resistance tests.
3. Machine on firm level ground, boom stowed, wheels chocked for all
   ground-level testing. Do not elevate a machine whose safety envelope is
   faulted.
4. Any sensor replaced must be recalibrated. Replacing the SCON requires full
   machine calibration in the manufacturer's order, and the SCON cannot be
   calibrated in the field.
5. Before return to service after control-system repair: full function test per
   the Operator's Manual and an annual inspection by a qualified person.
