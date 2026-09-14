#!/usr/bin/env bash
# Extract text from the Genie Z-135/70 manuals into docs/genie-z135-70/extracted/.
# Put PDFs in docs/genie-z135-70/source/ (114474.pdf, 106877.pdf, 1268557.pdf)
# or let the script try to download them (works only if the network policy
# allows manuals.genielift.com).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$ROOT/docs/genie-z135-70/source"
OUT="$ROOT/docs/genie-z135-70/extracted"
mkdir -p "$SRC" "$OUT"

declare -A URLS=(
  [114474]="https://manuals.genielift.com/Operators/english/114474.pdf"
  [106877]="https://manuals.genielift.com/parts%20and%20service%20manuals/data/Parts/Z%20Booms/106877.pdf"
  [1268557]="https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Z%20Booms/1268557.pdf"
)

for pn in 114474 106877 1268557; do
  pdf="$SRC/$pn.pdf"
  if [ ! -s "$pdf" ]; then
    # accept split parts named 1268557-part1.pdf etc.
    if ls "$SRC/$pn"-part*.pdf >/dev/null 2>&1; then
      echo "[$pn] using split parts"
    else
      echo "[$pn] not present, trying download..."
      curl -sSL --fail -o "$pdf" "${URLS[$pn]}" || { echo "[$pn] download failed (network policy?)"; rm -f "$pdf"; continue; }
    fi
  fi
done

python3 - "$SRC" "$OUT" <<'PY'
import sys, glob, os, re
src, out = sys.argv[1], sys.argv[2]
try:
    import pymupdf
except ImportError:
    os.system(f"{sys.executable} -m pip install -q pymupdf")
    import pymupdf
for pn in ("114474", "106877", "1268557"):
    files = sorted(glob.glob(f"{src}/{pn}.pdf") + glob.glob(f"{src}/{pn}-part*.pdf"))
    if not files:
        print(f"[{pn}] nothing to extract"); continue
    txt = open(f"{out}/{pn}.txt", "w")
    page_no = 0; empty = 0
    for f in files:
        doc = pymupdf.open(f)
        for p in doc:
            page_no += 1
            t = p.get_text()
            if not t.strip(): empty += 1
            txt.write(f"\n\n===== PAGE {page_no} ({os.path.basename(f)}) =====\n{t}")
    txt.close()
    print(f"[{pn}] {page_no} pages -> {out}/{pn}.txt ({empty} pages with no text layer; OCR needed if many)")
PY
