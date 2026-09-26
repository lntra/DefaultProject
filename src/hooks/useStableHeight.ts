import { useEffect, useRef } from 'react'

const HOVER_DESKTOP = '(min-width: 1024px) and (hover: hover)'

// Freezes an element's height while the pointer is over it, so hover effects that
// reflow its content (wider columns, bigger text — see .hero-strip) can't push the
// rest of the page around. Read on pointerenter, the height is still the resting one:
// every layout-affecting hover property is transitioned, so it starts from rest.
export function useStableHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const lock = () => {
      if (!window.matchMedia(HOVER_DESKTOP).matches) return
      // fractional height, so rounding can't nudge the page by a sub-pixel either
      el.style.height = `${el.getBoundingClientRect().height}px`
    }
    const unlock = () => {
      el.style.height = ''
    }
    el.addEventListener('pointerenter', lock)
    el.addEventListener('pointerleave', unlock)
    return () => {
      el.removeEventListener('pointerenter', lock)
      el.removeEventListener('pointerleave', unlock)
      unlock()
    }
  }, [])

  return ref
}
