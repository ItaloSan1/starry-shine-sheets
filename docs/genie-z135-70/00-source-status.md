# 00 — Source ingestion status

## Final status (2026-09-10, later)
The owner uploaded compressed copies of all three PDFs to Google Drive
(114474_compressed.pdf 2.3 MB, 1268557 (1)_compressed.pdf 6.0 MB,
106877 (1)_compressed.pdf 6.2 MB). All three downloaded through the Drive
connector and were extracted with PyMuPDF: every page has a text layer
(2 blank pages in the service manual, 1 in the parts manual). Coverage:

| Manual | Pages | Read by Claude | Knowledge-base files rewritten |
|--------|-------|----------------|-------------------------------|
| Operator's 114474 | 67 | all | 01, 02, 03, 07 |
| Service 1268557GT Rev A4 | 244 | all (schematic sheets are drawings; their text labels are in the extract) | 02, 03, 04, 05, 06, 08 |
| Parts 106877GT Rev G6 | 358 | digested by three agents into 09a/09b/09c | 09a, 09b, 09c |

Remaining limits: the electrical and hydraulic schematic sheets (SM pp.215–228)
are drawings; render them with PyMuPDF from `source/1268557.pdf` when a wire
path must be traced. The separate Genie Maintenance Manual (checklists A–E) is
still not part of the source set.

## What happened on the first build (2026-09-10)

| Source | Result |
|--------|--------|
| `manuals.genielift.com` (all three PDFs) | **Blocked** by the session's egress proxy (HTTP 403 on CONNECT) via curl and via the WebFetch tool |
| Mirrors (ManualsLib, Yumpu, Scribd, manualzz, vdocuments, dokumen.tips, usw.org) | **Blocked** |
| Genie spec sheets on `genielift.com`, forum threads, JustAnswer | **Blocked** |
| Web search index (returns quoted excerpts of the manuals) | Working. Used to verify facts sentence by sentence |
| Owner's Google Drive doc "z135-diagnostic-flowchart" | Read in full. It was written from manuals 1268557GT and 106877GT and carries connector/pin data |
| YouTube transcripts (vidIQ) | Working for videos that have captions |

So this knowledge base is a **verified digest**, not a page-by-page copy. The
`[V]` tag means the sentence was matched to indexed text of the manuals.

## Update 2026-09-10 (later the same day)
The owner uploaded all three PDFs to Google Drive. Results through the Drive
connector:

| File | Size | Result |
|------|------|--------|
| 114474.pdf (operator's) | 3.1 MB | **Downloaded and fully extracted** (67 pages) |
| 1268557 (1).pdf (service, Rev A4 Oct 2018) | 7.1 MB | Download fails every time ("session expired"); Drive text conversion returned only pages 1–66 |
| 106877 (1).pdf (parts) | 149 MB | Over the connector's 10 MB download limit; text conversion returned empty |

Direct Google download hosts (drive.google.com, docs.google.com,
drive.usercontent.google.com, googleapis.com) are blocked by the egress policy,
so the connector is the only channel and **~3 MB per file is the working
limit**.

## What the owner should do to finish (recommended)
1. **Service manual 1268557**: split the PDF into three files of about
   80 pages each (for example pages 1–85, 86–170, 171–243). Any free splitter
   works (macOS Preview, Adobe Acrobat, ilovepdf.com "Split PDF"). Name them
   `1268557-part1.pdf`, `1268557-part2.pdf`, `1268557-part3.pdf` and upload to
   Google Drive. Each will be about 2.5 MB.
2. **Parts manual 106877** (149 MB, image-heavy): first run "Compress PDF"
   (Acrobat "Reduce File Size" or ilovepdf "Extreme compression"), then split
   the result into files **under 3 MB each** and upload them as
   `106877-part1.pdf`, `106877-part2.pdf`, … If the compressed file still has
   no selectable text, run OCR first (Acrobat "Recognize Text" or ilovepdf
   "OCR PDF") so the part-number tables are extractable.
3. Tell Claude the files are up. Claude downloads each part through the Drive
   connector, extracts the text with PyMuPDF, saves it under
   `docs/genie-z135-70/extracted/`, and rewrites the affected knowledge-base
   files with `[V]` content.

Alternative: allow `manuals.genielift.com` in the Claude Code environment's
network policy, then run `scripts/genie/ingest-manuals.sh`, which downloads and
extracts all three originals in one step.

## How to finish ingestion (three options, any one works)

1. **Commit the PDFs to the repo.** Save them as
   `docs/genie-z135-70/source/114474.pdf`, `106877.pdf`, `1268557.pdf`, then
   run `scripts/genie/ingest-manuals.sh`. It writes searchable text to
   `docs/genie-z135-70/extracted/`. Claude reads those files directly.
2. **Upload the PDFs to Google Drive.** Claude can read Drive PDFs through the
   Google Drive connector even when the web is blocked. Name them with the
   part number so they are easy to find.
3. **Allow the domain in the environment's network policy.** Add
   `manuals.genielift.com` to the allowed hosts for this Claude Code
   environment, then run the script; it downloads and extracts in one step.

After any of these, Claude must: read every extracted page, replace `[M]` and
`[S]` entries with `[V]` where confirmed, correct anything wrong, and add the
full fault-code table, hydraulic schematic legend, electrical schematic legend,
torque tables and every repair-procedure title.

## Known gaps to close once the PDFs are readable

- Service manual pages 67–243: boom, turntable, engine, hydraulic, axle procedures; primary/secondary angle sensor calibration (pp.82, 89); steer/axle sensor calibration (pp.160–167); recovery procedure (p.99); turntable level sensor calibration
- Complete Control System Fault Code table (every code, LCD text, effect, recovery)
- Complete SCON Fault Matrix (which relays drop for which condition)
- Hydraulic Relief Valve table for every circuit (steer, turntable rotate, platform rotate, jib, axle, riser)
- Machine Torque Specifications table (turntable bearing bolts, wheel lugs, hydraulic fittings)
- Full calibration procedures step by step (primary, secondary, jib bellcrank, platform level, steer ×4, axle ×2, turntable level X/Y, load cell zero/full)
- Electrical schematic sheet index and wire-colour legend
- Parts manual exploded-view part numbers by section
- Operator's Manual pre-operation inspection list, function test list, decal list
