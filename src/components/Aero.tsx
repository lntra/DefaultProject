import type { CSSProperties } from 'react'
import './Aero.css'

// Decorative Frutiger Aero motion, desktop only (Aero.css hides it below 1024px
// and freezes it for reduced motion). Everything here is aria-hidden and ignores
// the pointer.

type Bubble = { x: string; size: number; dur: number; delay: number; drift: number }

const heroBubbles: Bubble[] = [
  { x: '38%', size: 14, dur: 11, delay: 0, drift: 10 },
  { x: '47%', size: 9, dur: 9, delay: -4, drift: -8 },
  { x: '63%', size: 18, dur: 13, delay: -7, drift: 12 },
  { x: '71%', size: 8, dur: 8, delay: -2, drift: -6 },
  { x: '82%', size: 12, dur: 12, delay: -9, drift: 9 },
  { x: '90%', size: 22, dur: 15, delay: -5, drift: -12 },
  { x: '55%', size: 6, dur: 7, delay: -1, drift: 5 },
]

// Small bubbles rising out of a hero's water line and popping near the top.
export function RisingBubbles() {
  return (
    <div className="aero-rise" aria-hidden="true">
      {heroBubbles.map((b) => (
        <span
          key={b.x}
          className="aero-rise__bubble"
          style={
            {
              left: b.x,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              '--drift': `${b.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

// Page-wide layer for the pale sections under the hero. Positions sit in the side
// margins (outside the 1250px container) so the glass never crosses the copy.
const floaters = [
  { side: 'left', x: '1.5%', y: '24%', size: 64, dur: 10, delay: 0 },
  { side: 'right', x: '2%', y: '31%', size: 38, dur: 8, delay: -3 },
  { side: 'left', x: '3.5%', y: '43%', size: 26, dur: 7, delay: -5 },
  { side: 'right', x: '1%', y: '52%', size: 84, dur: 12, delay: -2 },
  { side: 'left', x: '1%', y: '64%', size: 46, dur: 9, delay: -6 },
  { side: 'right', x: '3%', y: '74%', size: 30, dur: 8, delay: -1 },
  { side: 'left', x: '2.5%', y: '84%', size: 58, dur: 11, delay: -4 },
]

const risers = [
  { side: 'left', x: '4%', y: '36%', size: 10, dur: 14, delay: 0 },
  { side: 'right', x: '4.5%', y: '46%', size: 8, dur: 12, delay: -6 },
  { side: 'left', x: '5%', y: '58%', size: 12, dur: 16, delay: -3 },
  { side: 'right', x: '3.5%', y: '66%', size: 7, dur: 11, delay: -8 },
  { side: 'left', x: '4.5%', y: '78%', size: 9, dur: 13, delay: -10 },
  { side: 'right', x: '5%', y: '88%', size: 11, dur: 15, delay: -5 },
]

const orbs = [
  { side: 'left', x: '-6%', y: '28%', size: 340, delay: 0 },
  { side: 'right', x: '-8%', y: '47%', size: 420, delay: -9 },
  { side: 'left', x: '-7%', y: '70%', size: 380, delay: -16 },
]

export function AeroAmbience() {
  return (
    <div className="aero-ambience" aria-hidden="true">
      {orbs.map((o) => (
        <span
          key={o.side + o.y}
          className="aero-orb"
          style={{ [o.side]: o.x, top: o.y, width: o.size, height: o.size, animationDelay: `${o.delay}s` }}
        />
      ))}
      {floaters.map((b) => (
        <span
          key={b.side + b.y}
          className="aero-bubble"
          style={{ [b.side]: b.x, top: b.y, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        />
      ))}
      {risers.map((b) => (
        <span
          key={b.side + b.y}
          className="aero-bubble aero-bubble--rise"
          style={{ [b.side]: b.x, top: b.y, width: b.size, height: b.size, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        />
      ))}
    </div>
  )
}
