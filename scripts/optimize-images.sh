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

# automação page: plain city/water backdrop (no baked globe/panels) behind the live
# HTML/CSS process-flow cards on the mobile hero. LOW-QUALITY PLACEHOLDER cropped
# from world2.png, kept only for the narrow mobile layout.
magick "$SRC/automacao-flow-bg.png" -resize "1400x>" -strip -quality 84 -define webp:method=6 "$DESKTOP/automacao-flow-bg.webp"
printf '  %-22s %s\n' "automacao-flow-bg.webp" "$(du -h "$DESKTOP/automacao-flow-bg.webp" | cut -f1)"

# automação page — final desktop hero art: the process-flow cards are baked into
# this photo (city/water scene), replacing the old backdrop + live-HTML-cards combo.
magick "$SRC/automacao-hero-flow.png" -resize "1600x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/automacao-hero-flow.webp"
printf '  %-22s %s\n' "automacao-hero-flow.webp" "$(du -h "$DESKTOP/automacao-hero-flow.webp" | cut -f1)"

# automação page — reliability-section backdrop (plain city/water, no baked panels)
magick "$SRC/automacao-reliability-bg.png" -resize "1600x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/automacao-reliability-bg.webp"
printf '  %-22s %s\n' "automacao-reliability-bg.webp" "$(du -h "$DESKTOP/automacao-reliability-bg.webp" | cut -f1)"

# automação page — glass/leaf bubble behind the "Um fluxo..." annotation.
# Master has its flat backdrop keyed to transparent (floodfilled from the
# corners, then re-forced opaque inside a circle matching the ring so the
# glass interior never shows leaks) so it sits directly on the page
# background with no visible box and no holes in the middle.
magick "$SRC/automacao-bubble.png" -resize "700x>" -strip -quality 90 -define webp:method=6 "$DESKTOP/automacao-bubble.webp"
printf '  %-22s %s\n' "automacao-bubble.webp" "$(du -h "$DESKTOP/automacao-bubble.webp" | cut -f1)"

# automação page — puddle the bubble sits on, cropped to just the water (sky
# removed) from the user-supplied master.
magick "$SRC/automacao-puddle.png" -resize "1800x>" -strip -quality 85 -define webp:method=6 "$DESKTOP/automacao-puddle.webp"
printf '  %-22s %s\n' "automacao-puddle.webp" "$(du -h "$DESKTOP/automacao-puddle.webp" | cut -f1)"

# software page — hero art (wide master): tools (Planilhas, WhatsApp, E-mail...) flowing
# into "Seu sistema", labels baked in. Desktop uses the full frame as the hero backdrop;
# mobile gets a tight crop around the cards + panel.
magick "$SRC/software-hero-wide.png" -resize "1600x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/software-hero-wide.webp"
printf '  %-22s %s\n' "software-hero-wide.webp" "$(du -h "$DESKTOP/software-hero-wide.webp" | cut -f1)"
magick "$SRC/software-hero-wide.png" -crop 1040x620+330+170 +repage -resize "900x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/software-hero-flow.webp"
printf '  %-22s %s\n' "software-hero-flow.webp" "$(du -h "$DESKTOP/software-hero-flow.webp" | cut -f1)"

# software page — "Sistema sob medida" hub with its six modules, labels baked in.
magick "$SRC/software-hub.png" -crop 1254x1100+0+90 +repage -resize "1100x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/software-hub.webp"
printf '  %-22s %s\n' "software-hub.webp" "$(du -h "$DESKTOP/software-hub.webp" | cut -f1)"

# English (en) variants of the art with baked-in Portuguese labels. The *-en.png masters
# are the originals with the text erased and re-set in English (scripts/translate-images/);
# each one is exported exactly like its Portuguese counterpart above.
magick "$SRC/world2-en.png" -crop 1276x776+640+20 +repage -strip -quality 98 -define webp:method=6 "$OUT/hero-scene-en.webp"
printf '  %-22s %s\n' "hero-scene-en.webp" "$(du -h "$OUT/hero-scene-en.webp" | cut -f1)"
magick "$SRC/mocklaptop-en.png" -resize "1100x>" -strip -quality 92 -define webp:method=6 "$DESKTOP/mock-laptop-en.webp"
printf '  %-22s %s\n' "mock-laptop-en.webp" "$(du -h "$DESKTOP/mock-laptop-en.webp" | cut -f1)"
magick "$SRC/automacao-hero-flow-en.png" -resize "1600x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/automacao-hero-flow-en.webp"
printf '  %-22s %s\n' "automacao-hero-flow-en.webp" "$(du -h "$DESKTOP/automacao-hero-flow-en.webp" | cut -f1)"
magick "$SRC/software-hero-wide-en.png" -resize "1600x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/software-hero-wide-en.webp"
printf '  %-22s %s\n' "software-hero-wide-en.webp" "$(du -h "$DESKTOP/software-hero-wide-en.webp" | cut -f1)"
magick "$SRC/software-hero-wide-en.png" -crop 1040x620+330+170 +repage -resize "900x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/software-hero-flow-en.webp"
printf '  %-22s %s\n' "software-hero-flow-en.webp" "$(du -h "$DESKTOP/software-hero-flow-en.webp" | cut -f1)"
magick "$SRC/software-hub-en.png" -crop 1254x1100+0+90 +repage -resize "1100x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/software-hub-en.webp"
printf '  %-22s %s\n' "software-hub-en.webp" "$(du -h "$DESKTOP/software-hub-en.webp" | cut -f1)"

# homepage project thumbnails (masters in src/assets/imagesdeprojetos/, *-en.png made by
# scripts/translate-images/run.sh). 900px wide: sharp on retina at the ~450px they're shown.
PROJ=src/assets/imagesdeprojetos
for n in 1 2 3; do
  magick "$PROJ/projeto$n.png"    -resize "900x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/project-$n.webp"
  magick "$PROJ/projeto$n-en.png" -resize "900x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/project-$n-en.webp"
  printf '  %-22s %s / %s\n' "project-$n(-en).webp" "$(du -h "$DESKTOP/project-$n.webp" | cut -f1)" "$(du -h "$DESKTOP/project-$n-en.webp" | cut -f1)"
done

# about-section portrait (square master; the frame crops it per layout via object-position)
magick "$SRC/about.png" -resize "900x>" -strip -quality 86 -define webp:method=6 "$DESKTOP/about.webp"
printf '  %-22s %s\n' "about.webp" "$(du -h "$DESKTOP/about.webp" | cut -f1)"

# automação page, mobile hero card: tight crop of the flow cards (same 1040x620 frame as software-hero-flow)
for l in "" "-en"; do
  magick "$SRC/automacao-hero-flow$l.png" -crop 1040x620+160+150 +repage -resize "900x>" -strip -quality 88 -define webp:method=6 "$DESKTOP/automacao-hero-card$l.webp"
  printf '  %-22s %s\n' "automacao-hero-card$l.webp" "$(du -h "$DESKTOP/automacao-hero-card$l.webp" | cut -f1)"
done
