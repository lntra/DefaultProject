import type { CSSProperties } from 'react'
import { ArrowRight, CodeXml, ShieldCheck, Workflow } from 'lucide-react'
import { useStableHeight } from '../hooks/useStableHeight'
import { useCopy } from '../i18n/lang'
import { RisingBubbles } from './Aero'
import globe from '../assets/web/globe.webp'
import skyline from '../assets/web/skyline.webp'
import './Hero.css'

// Same glyph on both layouts: mobile sets it in a glass ring, desktop lets it stand alone.
const trustIcons = { code: CodeXml, workflow: Workflow, shield: ShieldCheck }

export function Hero() {
  const { hero, trust, ui, art } = useCopy()
  const stripRef = useStableHeight<HTMLUListElement>()

  return (
    <section className="hero" id="top">
      {/* Mobile atmosphere: clouds, skyline and water sit behind the copy */}
      <div className="hero__sky" aria-hidden="true">
        <span className="hero__cloud hero__cloud--a" />
        <span className="hero__cloud hero__cloud--b" />
        <img className="hero__skyline" src={skyline} alt="" width={285} height={666} />
        <span className="hero__water" />
      </div>

      {/* Desktop stage: the glass-globe artwork as delivered (its panel text is part of the image,
          so each language has its own copy) */}
      <div className="stage" aria-hidden="true">
        <div className="stage__scene" style={{ '--scene': `url(${art.heroScene})` } as CSSProperties}>
          <div className="stage__art" />
          {/* Living layers over the same artwork: the water band ripples (SVG
              displacement), and a feathered cut-out of the globe floats and breathes
              over the original — it only ever grows past it, so no double edge shows */}
          <div className="stage__water" />
          <div className="stage__halo" />
          <div className="stage__globe" />
          <span className="stage__glint" />
        </div>
        <RisingBubbles />
        <svg className="stage__filters" width="0" height="0">
          <filter id="aero-ripple" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.045" numOctaves="2" seed="4">
              <animate
                attributeName="baseFrequency"
                dur="16s"
                values="0.006 0.045;0.009 0.06;0.006 0.045"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__dot" />
            <span>
              {hero.eyebrow[0]} <br />
              {hero.eyebrow[1]}
            </span>
          </p>

          <h1 className="hero__title">
            {hero.title.before}
            <em>{hero.title.accent}</em>
            <span className="hero__title-rest">{hero.title.after}</span>
          </h1>

          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--cta btn--attract" href="#contato">
              {hero.primary}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <a className="btn btn--glass" href="#servicos">
              {hero.secondary}
            </a>
          </div>
        </div>

        <figure className="scene">
          <img className="scene__img" src={globe} alt={ui.heroGlobeAlt} />
          <figcaption className="scene__caption">
            <span className="eyebrow__dot" aria-hidden="true" />
            <span>
              {hero.sceneCaption[0]}
              <br />
              {hero.sceneCaption[1]}
            </span>
          </figcaption>
        </figure>

        <ul className="trust hero-strip" ref={stripRef}>
          {trust.map((item) => {
            const Icon = trustIcons[item.icon as keyof typeof trustIcons]
            return (
              <li key={item.icon} className="trust__item">
                <span className="trust__icon hero-strip__icon">
                  <Icon strokeWidth={1.9} />
                </span>
                <span className="trust__label trust__label--m">
                  {item.mobile[0]}
                  <br />
                  {item.mobile[1]}
                </span>
                <span className="trust__label trust__label--d">
                  <strong>{item.title}</strong>
                  <small>{item.sub}</small>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
