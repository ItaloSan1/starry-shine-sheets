# CLAUDE.md

## Genie Z-135/70 knowledge base (always consult)

This repository carries a persistent knowledge base for diagnosing and
repairing the **Genie Z-135/70** articulating boom lift in
`docs/genie-z135-70/`. Rules for every session:

1. **Read `docs/genie-z135-70/README.md` first** whenever the user mentions
   the Genie, the Z-135, a boom lift, a fault code, a sensor, calibration, or
   any of the three manuals (114474, 106877, 1268557). Then read the topic file
   that matches the question.
2. **Source of truth = the three manufacturer documents** (Operator's Manual
   114474, Parts Manual 106877, Service and Repair Manual 1268557GT). Extracted
   text lives in `docs/genie-z135-70/extracted/`; grep it before answering
   with a number, a pin, a torque, a pressure, or a procedure step.
3. Every statement in the knowledge base carries a confidence tag (`[V]`
   verified from the manuals, `[S]` other Genie publication, `[F]` field/forum/
   video, `[M]` unverified memory). Repeat the tag's meaning to the user when
   it matters; never present `[F]` or `[M]` as manufacturer fact.
4. Forums and YouTube are supplements. When they conflict with the manuals,
   the manuals win and the conflict is stated.
5. Safety rules in the README apply to every answer: never advise defeating a
   safety circuit, limit switch, angle sensor, tilt sensor or load cell.
6. If the user supplies missing manual pages or PDFs, run
   `scripts/genie/ingest-manuals.sh`, read the extracted text, and update the
   knowledge base files (upgrade `[S]`/`[M]` to `[V]`, correct errors, fill the
   gaps listed in `00-source-status.md`).

## Project

Lovable-generated Vite + React + TypeScript + shadcn-ui app (see README.md).
Run with `npm i && npm run dev`.
