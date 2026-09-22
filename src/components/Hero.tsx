import { ArrowRight, CodeXml, ShieldCheck, Workflow } from 'lucide-react'
import { hero, trust } from '../content/copy'
import globe from '../assets/web/globe.webp'
import skyline from '../assets/web/skyline.webp'
import './Hero.css'

// Same glyph on both layouts: mobile sets it in a glass ring, desktop lets it stand alone.
const trustIcons = { code: CodeXml, workflow: Workflow, shield: ShieldCheck }

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* Mobile atmosphere: clouds, skyline and water sit behind the copy */}
      <div className="hero__sky" aria-hidden="true">
        <span className="hero__cloud hero__cloud--a" />
        <span className="hero__cloud hero__cloud--b" />
        <img className="hero__skyline" src={skyline} alt="" width={285} height={666} />
        <span className="hero__water" />
      </div>

      {/* Desktop stage: the glass-globe artwork as delivered (its panel text is part of the image) */}
      <div className="stage" aria-hidden="true">
        <div className="stage__scene">
          <div className="stage__art" />
        </div>
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
            <a className="btn btn--primary" href="#contato">
              {hero.primary}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
            <a className="btn btn--glass" href="#servicos">
              {hero.secondary}
            </a>
          </div>
        </div>

        <figure className="scene">
          <img className="scene__img" src={globe} alt="Globo terrestre translúcido sobre uma cidade à beira da água" />
          <figcaption className="scene__caption">
            <span className="eyebrow__dot" aria-hidden="true" />
            <span>
              {hero.sceneCaption[0]}
              <br />
              {hero.sceneCaption[1]}
            </span>
          </figcaption>
        </figure>

        <ul className="trust">
          {trust.map((item) => {
            const Icon = trustIcons[item.icon]
            return (
              <li key={item.icon} className="trust__item">
                <span className="trust__icon">
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
