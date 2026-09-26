import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'
import { useCopy } from '../i18n/lang'
import bg from '../assets/web/cta.webp'
import './CtaCard.css'

type CtaCardProps = {
  id?: string
  eyebrow?: string
  title?: string
  text?: string
  button?: string
  secondary?: string
  note?: string
  annotation?: string
}

export function CtaCard({
  id = 'contato',
  eyebrow,
  title,
  text,
  button,
  secondary,
  note,
  annotation,
}: CtaCardProps) {
  // Unset props fall back to the homepage CTA in the active language.
  const { cta } = useCopy()

  return (
    <section className="cta" id={id}>
      {/* Desktop "puddle": the water under the banner ripples, caustic light drifts
          across it and the leaves (split out of the banner art) sway */}
      <div className="cta__water" aria-hidden="true" />
      <div className="cta__caustics" aria-hidden="true">
        <i />
        <i />
      </div>
      <svg className="cta__filters" width="0" height="0" aria-hidden="true">
        <filter id="cta-ripple" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.03" numOctaves="2" seed="7">
            <animate attributeName="baseFrequency" dur="18s" values="0.004 0.03;0.006 0.042;0.004 0.03" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="container">
        <div className="cta__card">
          <img className="cta__bg" src={bg} alt="" width={822} height={684} />
          <span className="cta__leaf cta__leaf--left" aria-hidden="true" />
          <span className="cta__leaf cta__leaf--right" aria-hidden="true" />
          <div className="cta__panel">
            <div className="cta__copy">
              {eyebrow && <p className="cta__eyebrow">{eyebrow}</p>}
              <h2 className="cta__title">{title ?? cta.title}</h2>
              <p className="cta__text">{text ?? cta.text}</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary btn--cta btn--attract cta__btn" href="mailto:contato@exemplo.com">
                {button ?? cta.button}
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a className="btn btn--glass cta__btn cta__btn--alt" href="https://wa.me/5521968678177">
                <WhatsAppIcon className="cta__whatsapp" size={17} />
                {secondary ?? cta.secondary}
              </a>
            </div>
            {note && <p className="cta__note">{note}</p>}
          </div>
          {annotation && <span className="hand-note cta__annotation">{annotation}</span>}
        </div>
      </div>
    </section>
  )
}
