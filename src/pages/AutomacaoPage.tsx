import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Copy,
  Database,
  FileText,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Target,
  User,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { RisingBubbles } from '../components/Aero'
import { CtaCard } from '../components/CtaCard'
import { useStableHeight } from '../hooks/useStableHeight'
import { useCopy } from '../i18n/lang'
// Hero art is per language (labels baked in): `art.automacaoHeroFlow` on desktop,
// its tight crop `art.automacaoHeroCard` on mobile — same pattern as the software page.
// Final reliability-section backdrop, "Um fluxo..." glass bubble and puddle.
import reliabilityBg from '../assets/desktop/automacao-reliability-bg.webp'
import bubbleArt from '../assets/desktop/automacao-bubble.webp'
import puddleArt from '../assets/desktop/automacao-puddle.webp'
import './AutomacaoPage.css'

const iconMap = {
  search: Search,
  workflow: Workflow,
  code: Code2,
  chart: BarChart3,
  zap: Zap,
  clock: Clock,
  check: CheckCircle2,
  users: Users,
  file: FileText,
  target: Target,
  message: MessageCircle,
  database: Database,
  bell: Bell,
  mail: Mail,
  link: Link2,
  shield: Shield,
  shop: ShoppingBag,
  calendar: Calendar,
  copy: Copy,
  user: User,
  pin: MapPin,
  shieldCheck: ShieldCheck,
}

export function AutomacaoPage() {
  const { automacaoPage: copy, ui, art } = useCopy()
  const stripRef = useStableHeight<HTMLUListElement>()

  return (
    <main className="automacao-page">
      <section className="ap-hero page-hero">
        <div className="ap-hero__art page-hero__art" style={{ backgroundImage: `url(${art.automacaoHeroFlow})` }} aria-hidden="true" />
        <RisingBubbles />

        <div className="ap-hero__inner page-hero__inner">
          <Link className="ap-back page-hero__back" to="/#projetos">
            <ArrowLeft size={15} strokeWidth={2.2} />
            {ui.backToProjects}
          </Link>

          <div className="ap-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {copy.eyebrow}
            </p>
            <h1 className="ap-hero__title page-hero__title">{copy.hero.title}</h1>
            <p className="ap-hero__lead page-hero__lead">{copy.hero.lead}</p>

            <div className="ap-hero__actions page-hero__actions">
              <a className="btn btn--primary btn--cta btn--attract" href="/#contato">
                {copy.hero.primary}
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a className="btn btn--glass" href="https://wa.me/5521968678177">
                <MessageCircle size={17} strokeWidth={1.9} />
                {copy.hero.secondary}
              </a>
            </div>
          </div>

        </div>

        {/* Mobile: the flow cards as a contained photo card, like the software page's .sp-flow */}
        <img
          className="ap-scene"
          src={art.automacaoHeroCard}
          alt={copy.hero.flow.map((step) => step.label).join(' → ')}
          width={900}
          height={537}
        />

        <ul className="ap-trust glass page-hero__trust hero-strip" ref={stripRef}>
          {copy.hero.trust.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <li key={item.title} className="ap-trust__item">
                <span className="ap-trust__icon hero-strip__icon">
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.sub}</small>
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="ap-section">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {copy.methodology.eyebrow}
          </p>
          <h2 className="ap-section__title">{copy.methodology.title}</h2>
          <p className="ap-section__lead">{copy.methodology.lead}</p>

          <ol className="ap-steps">
            {copy.methodology.steps.map((step) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap]
              return (
                <li key={step.title} className="ap-step glass card-glow">
                  <div className="ap-step__head">
                    <span className="ap-step__num">{step.num}</span>
                    <span className="ap-step__icon card-icon">
                      <Icon size={17} strokeWidth={1.9} />
                    </span>
                  </div>
                  <h3 className="ap-step__title">{step.title}</h3>
                  <p className="ap-step__text">{step.text}</p>
                  <span className="ap-step__pill">{step.delivery}</span>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="ap-section ap-section--tint">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {copy.beforeAfter.eyebrow}
          </p>
          <h2 className="ap-section__title">{copy.beforeAfter.title}</h2>
          <p className="ap-section__lead">{copy.beforeAfter.lead}</p>

          <div className="ap-compare">
            <div className="ap-compare__col ap-compare__col--before glass">
              <h3>
                <MapPin size={18} strokeWidth={2} />
                {copy.beforeAfter.before.title}
              </h3>
              <ul>
                {copy.beforeAfter.before.items.map((item) => {
                  const ItemIcon = iconMap[item.icon as keyof typeof iconMap]
                  return (
                    <li key={item.text}>
                      <ItemIcon size={14} strokeWidth={2.2} />
                      {item.text}
                    </li>
                  )
                })}
              </ul>
              <p className="ap-compare__tag ap-compare__tag--bad">{copy.beforeAfter.before.tagline}</p>
            </div>

            <div className="ap-compare__arrow" aria-hidden="true">
              <ArrowRight size={22} strokeWidth={2.2} />
            </div>

            <div className="ap-compare__col ap-compare__col--after glass">
              <h3>
                <ShieldCheck size={18} strokeWidth={2} />
                {copy.beforeAfter.after.title}
              </h3>
              <ul>
                {copy.beforeAfter.after.items.map((item) => (
                  <li key={item.text}>
                    <CheckCircle2 size={14} strokeWidth={2.2} />
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="ap-compare__tag ap-compare__tag--good">{copy.beforeAfter.after.tagline}</p>
            </div>

            <div className="ap-compare__result">
              <h3>{copy.beforeAfter.resultTitle}</h3>
              <p>{copy.beforeAfter.resultText}</p>
              <img className="ap-compare__water" src={puddleArt} alt="" aria-hidden="true" />
              <img className="ap-compare__bubble-bg" src={bubbleArt} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="ap-section">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {copy.features.eyebrow}
          </p>
          <h2 className="ap-section__title">{copy.features.title}</h2>
          <p className="ap-section__lead">{copy.features.lead}</p>

          <ul className="ap-features">
            {copy.features.items.map((f) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap]
              return (
                <li key={f.title} className="ap-feature glass card-glow">
                  <span className="ap-feature__icon card-icon">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="ap-section ap-section--reliability">
        <img className="ap-reliability__bg" src={reliabilityBg} alt="" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {copy.reliability.eyebrow}
          </p>
          <h2 className="ap-section__title">{copy.reliability.title}</h2>
          <p className="ap-section__lead">{copy.reliability.lead}</p>

          <ul className="ap-reliability">
            {copy.reliability.items.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <li key={item.title} className="ap-reliability__item card-glow">
                  <span className="ap-reliability__icon card-icon">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="ap-section">
        <div className="container">
          <header className="ap-featured__head">
            <div>
              <p className="eyebrow eyebrow--sm">
                <span className="eyebrow__dot" />
                {copy.featured.eyebrow}
              </p>
              <h2 className="ap-section__title">{copy.featured.title}</h2>
              <p className="ap-section__lead">{copy.featured.lead}</p>
            </div>
            <a className="link-more" href="/#projetos">
              {copy.featured.more}
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
          </header>

          <ul className="ap-featured">
            {copy.featured.items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const tagVariant = ['green', 'blue', 'purple'][i % 3]
              return (
                <li key={item.title}>
                  <a className="ap-featured__card glass card-lift" href="/#contato">
                    <span className={`ap-featured__tag ap-featured__tag--${tagVariant}`}>
                      <Icon size={14} strokeWidth={2} />
                      {item.tag}
                    </span>
                    <span className="ap-featured__go" aria-hidden="true">
                      <ArrowRight size={16} strokeWidth={2.2} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaCard
        eyebrow={copy.cta.eyebrow}
        title={copy.cta.title}
        text={copy.cta.text}
        button={copy.cta.button}
        secondary={copy.cta.secondary}
        note={copy.cta.note}
      />
    </main>
  )
}
