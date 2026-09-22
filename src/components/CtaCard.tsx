import { ArrowRight, MessageCircle } from 'lucide-react'
import { cta } from '../content/copy'
import bg from '../assets/web/cta.webp'
import './CtaCard.css'

type CtaCardProps = {
  id?: string
  eyebrow?: string
  title?: string
  text?: string
  button?: string
  secondary?: string
}

export function CtaCard({
  id = 'contato',
  eyebrow,
  title = cta.title,
  text = cta.text,
  button = cta.button,
  secondary = cta.secondary,
}: CtaCardProps) {
  return (
    <section className="cta" id={id}>
      <div className="container">
        <div className="cta__card">
          <img className="cta__bg" src={bg} alt="" width={822} height={684} />
          <div className="cta__panel">
            <div className="cta__copy">
              {eyebrow && <p className="cta__eyebrow">{eyebrow}</p>}
              <h2 className="cta__title">{title}</h2>
              <p className="cta__text">{text}</p>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary cta__btn" href="mailto:contato@exemplo.com">
                {button}
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a className="btn btn--glass cta__btn cta__btn--alt" href="https://wa.me/">
                <MessageCircle size={17} strokeWidth={1.9} />
                {secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
