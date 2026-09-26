#!/usr/bin/env bash
# Rebuilds the English (*-en.png) masters in src/assets/hero/ from the Portuguese ones:
# each script finds the baked-in labels, inpaints them away (OpenCV) and re-sets the
# English copy in Noto Sans at the measured position, size, colour and tilt.
# Needs: python3 with opencv-python-headless, numpy, pillow; Noto Sans in /usr/share/fonts/noto.
# Then run `npm run assets` to export the WebP copies.
set -euo pipefail
cd "$(dirname "$0")/../.."
PY=${PYTHON:-python3}
D=scripts/translate-images
H=src/assets/hero
$PY $D/en_world2.py $H/world2.png                 $H/world2-en.png
$PY $D/en_swide.py  $H/software-hero-wide.png     $H/software-hero-wide-en.png
$PY $D/en_hub.py    $H/software-hub.png           $H/software-hub-en.png
$PY $D/en_aflow.py  $H/automacao-hero-flow.png    $H/automacao-hero-flow-en.png
$PY $D/en_laptop.py $H/mocklaptop.png             $H/mocklaptop-en.png

# homepage project thumbnails
P=src/assets/imagesdeprojetos
$PY $D/en_projeto1.py $P/projeto1.png $P/projeto1-en.png
$PY $D/en_projeto2.py $P/projeto2.png $P/projeto2-en.png
$PY $D/en_projeto3.py $P/projeto3.png $P/projeto3-en.png
