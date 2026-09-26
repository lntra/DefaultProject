import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DESKTOP_MOTION = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

// Everything below the hero that "surfaces" as it scrolls into view: section
// headings and the glass cards/steps. Hero content is excluded (it's on screen at
// load and has its own motion).
const TARGETS = [
  'main section:not(.hero):not(.page-hero) .sect-head',
  'main section:not(.hero):not(.page-hero) h2',
  'main section:not(.hero):not(.page-hero) .glass',
  'main section:not(.hero):not(.page-hero) .step',
  'main section:not(.hero):not(.page-hero) .feature',
  'main section:not(.hero):not(.page-hero) .pp-step',
  '.about__frame',
  '.about__text',
  '.pp-laptop',
].join(',')

// Marks targets with data-reveal (a data attribute, so React re-renders never
// clobber it) and flips each to "in" the first time it enters the viewport.
// Siblings get a short stagger so a row of cards rises one after another.
export function useSurfaceReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!window.matchMedia(DESKTOP_MOTION).matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      // a card inside another revealed card rides along with its parent
      (el, _, all) => !all.some((other) => other !== el && other.contains(el)),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.dataset.reveal = 'in'
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    for (const el of els) {
      // re-observe anything still waiting (StrictMode runs this effect twice)
      if (el.dataset.reveal === 'in') continue
      const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
      el.style.setProperty('--reveal-delay', `${(index % 6) * 80}ms`)
      el.dataset.reveal = 'wait'
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [pathname])
}
