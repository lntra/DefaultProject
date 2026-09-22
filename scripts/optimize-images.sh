#!/usr/bin/env bash
# Builds web-sized WebP copies of the PNG masters in src/assets/hero/ into
# src/assets/web/ (mobile-atmosphere assets) and src/assets/desktop/ (full photos).
# Re-run after replacing a master:  npm run assets
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=src/assets/hero
OUT=src/assets/web
mkdir -p "$OUT"

conv() { # master  output-name  width  quality
  magick "$SRC/$1" -resize "$3x>" -strip -quality "$4" -define webp:method=6 "$OUT/$2.webp"
  printf '  %-22s %s\n' "$2.webp" "$(du -h "$OUT/$2.webp" | cut -f1)"
}

conv icon-cube.png   icon-cube   512  90
conv icon-gear.png   icon-gear   512  90
conv icon-shield.png icon-shield 512  90
conv cta.png         cta         1000 86
conv globe.png       globe       1200 86
conv skyline.png     skyline     440  86
# desktop hero scene: world2.png untouched (its panel text stays), only cropped to the right part of the frame, at native size and near-lossless so the panel text stays sharp
magick "$SRC/world2.png" -crop 1276x776+640+20 +repage -strip -quality 98 -define webp:method=6 "$OUT/hero-scene.webp"
printf '  %-22s %s\n' "hero-scene.webp" "$(du -h "$OUT/hero-scene.webp" | cut -f1)"

# calm water strip (left part of the scene, below the shoreline) used behind the desktop CTA
magick "$SRC/world.png" -crop 1000x261+0+560 +repage -resize 1400x -strip -quality 80 -define webp:method=6 "$OUT/water.webp"
printf '  %-22s %s\n' "water.webp" "$(du -h "$OUT/water.webp" | cut -f1)"

# project-page artwork (photographic, no baked panel text) -> src/assets/desktop/, same as about.webp
DESKTOP=src/assets/desktop
magick "$SRC/defaultprojecthero.png" -resize "1400x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/default-project-hero.webp"
printf '  %-22s %s\n' "default-project-hero.webp" "$(du -h "$DESKTOP/default-project-hero.webp" | cut -f1)"

# laptop mockup keeps its alpha channel and a higher quality so the on-screen UI text stays legible
magick "$SRC/mocklaptop.png" -resize "1100x>" -strip -quality 92 -define webp:method=6 "$DESKTOP/mock-laptop.webp"
printf '  %-22s %s\n' "mock-laptop.webp" "$(du -h "$DESKTOP/mock-laptop.webp" | cut -f1)"
