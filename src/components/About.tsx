import { Handshake, Layers, Lightbulb, ShieldCheck } from 'lucide-react'
import { about } from '../content/copy'
import './About.css'

const icons = { lightbulb: Lightbulb, layers: Layers, shield: ShieldCheck, handshake: Handshake }

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <header className="sect-head">
          <div className="sect-head__intro">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {about.eyebrow}
            </p>
            <h2 className="sect-head__title">{about.title}</h2>
          </div>
        </header>

        <div className="about__grid">
          <img className="about__photo" src={about.photo} alt="Retrato de Fernando Araújo" width={795} height={402} />

          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="about__more">
            <h3 className="about__more-title">{about.featuresTitle}</h3>
            <ul className="about__features">
              {about.features.map((f) => {
                const Icon = icons[f.icon]
                return (
                  <li key={f.title} className="feature">
                    <span className="feature__icon">
                      <Icon size={30} strokeWidth={1.7} />
                    </span>
                    <span>
                      <h3 className="feature__title">{f.title}</h3>
                      <p className="feature__text">{f.text}</p>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
