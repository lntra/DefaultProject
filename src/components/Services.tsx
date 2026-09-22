import { ArrowRight } from 'lucide-react'
import { services } from '../content/copy'
import './Services.css'

export function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <header className="services__head">
          <div className="services__intro">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {services.eyebrow}
            </p>
            <h2 className="services__title">
              {services.title[0]} <br />
              {services.title[1]}
            </h2>
            <p className="services__lead">{services.lead}</p>
          </div>
          <a className="link-more" href="#contato">
            {services.more}
            <ArrowRight size={17} strokeWidth={2.2} />
          </a>
        </header>

        <ul className="services__list">
          {services.items.map((item) => {
            return (
              <li key={item.title}>
                <a className="service glass" href="#contato">
                  <span className="service__art">
                    <img className="service__3d" src={item.image} alt="" width={240} height={276} />
                  </span>
                  <span className="service__body">
                    <h3 className="service__title">{item.title}</h3>
                    <p className="service__text">{item.text}</p>
                  </span>
                  <span className="service__go" aria-hidden="true">
                    <ArrowRight size={16} strokeWidth={2.2} />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
