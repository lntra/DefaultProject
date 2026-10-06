import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCopy } from '../i18n/lang'
import './Header.css'

// Nav items are in-page anchors on the home route; prefixing with "/" lets them
// work from any project page too (full navigation there, plain scroll on "/").
const toHome = (hash: string) => `/${hash}`

export function Header() {
  const { brand, nav, navCta, ui } = useCopy()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header">
      <a className="header__brand" href={toHome('#top')}>
        <span className="header__name">{brand.name}</span>
        <span className="header__tag">{brand.taglineShort}</span>
      </a>

      {/* mobile: dropdown sheet · desktop: inline navigation */}
      <nav id="site-menu" className="header__menu" data-open={open} aria-label={ui.mainNav}>
        {nav.map((item) => {
          const children = 'children' in item ? item.children : undefined
          if (!children) {
            return (
              <a key={item.href} href={toHome(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            )
          }
          return (
            <div key={item.href} className="header__item">
              <a href={toHome(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
              <div className="header__dropdown">
                {children.map((child) => (
                  <a key={child.href} href={child.href} onClick={() => setOpen(false)}>
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </nav>

      <a className="btn btn--primary btn--cta header__cta" href={toHome('#contato')}>
        {navCta}
        <ArrowRight size={16} strokeWidth={2.4} />
      </a>

      <button
        type="button"
        className="header__toggle"
        aria-label={open ? ui.closeMenu : ui.openMenu}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={18} strokeWidth={2.4} /> : <Menu size={18} strokeWidth={2.4} />}
      </button>
    </header>
  )
}
