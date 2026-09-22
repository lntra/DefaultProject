import { process } from '../content/copy'
import './Process.css'

export function Process() {
  return (
    <section className="process" id="processo">
      <div className="container">
        <header className="sect-head">
          <div className="sect-head__intro">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {process.eyebrow}
            </p>
            <h2 className="sect-head__title">{process.title}</h2>
          </div>
        </header>

        <ol className="process__steps">
          {process.steps.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
