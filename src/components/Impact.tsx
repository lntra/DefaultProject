import { Layers, ShieldCheck, TrendingUp, Zap } from 'lucide-react'
import { useCopy } from '../i18n/lang'
import './Impact.css'

const icons = { trending: TrendingUp, zap: Zap, layers: Layers, shield: ShieldCheck }

export function Impact() {
  const { impact } = useCopy()

  return (
    <section className="impact" id="impacto">
      <div className="container">
        <header className="sect-head">
          <div className="sect-head__intro">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {impact.eyebrow}
            </p>
            <h2 className="sect-head__title">{impact.title}</h2>
          </div>
        </header>

        <ul className="impact__list">
          {impact.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <li key={item.title} className="impact__card glass">
                <span className="impact__icon">
                  <Icon size={24} strokeWidth={1.9} />
                </span>
                <h3 className="impact__title">{item.title}</h3>
                <p className="impact__text">{item.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
