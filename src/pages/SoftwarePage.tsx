import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CircleAlert,
  CircleCheck,
  Clock,
  CodeXml,
  Database,
  FileText,
  Lightbulb,
  Link2,
  RefreshCw,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { RisingBubbles } from '../components/Aero'
import { ExcelIcon, WhatsAppIcon } from '../components/BrandIcons'
import { CtaCard } from '../components/CtaCard'
import { useStableHeight } from '../hooks/useStableHeight'
import { useCopy } from '../i18n/lang'
// The hero and hub art have their labels baked in, so they come per language from
// `art` (masters in src/assets/hero/, `npm run assets` rebuilds the WebP copies).
import './SoftwarePage.css'

const iconMap = {
  sheet: ExcelIcon,
  whatsapp: WhatsAppIcon,
  users: Users,
  database: Database,
  gear: Settings,
  chart: BarChart3,
  file: FileText,
  link: Link2,
  shield: ShieldCheck,
  workflow: Workflow,
  code: CodeXml,
  clock: Clock,
  zap: Zap,
  target: Target,
  refresh: RefreshCw,
}
type IconKey = keyof typeof iconMap

// Brand-colored badges for the tools a client recognizes at a glance.
const brandTone: Partial<Record<IconKey, string>> = { sheet: 'excel', whatsapp: 'whatsapp' }

function Icon({ name, size = 18, strokeWidth = 1.9 }: { name: string; size?: number; strokeWidth?: number }) {
  const Cmp = iconMap[name as IconKey]
  return <Cmp size={size} strokeWidth={strokeWidth} />
}

const exampleIcons = { problem: CircleAlert, solution: Lightbulb, result: CircleCheck }

export function SoftwarePage() {
  const { softwarePage, ui, art } = useCopy()
  const stripRef = useStableHeight<HTMLUListElement>()
  const { hero, transformation, methodology, capabilities, example, outcomes, idealFor, cta } = softwarePage

  return (
    <main className="software-page">
      <section className="sp-hero page-hero">
        <div className="sp-hero__inner page-hero__inner">
          <Link className="sp-back page-hero__back" to="/#projetos">
            <ArrowLeft size={15} strokeWidth={2.2} />
            {ui.backToProjects}
          </Link>

          <div className="sp-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {hero.eyebrow}
            </p>
            <h1 className="sp-hero__title page-hero__title">{hero.title}</h1>
            <p className="sp-hero__lead page-hero__lead">{hero.lead}</p>

            <div className="sp-hero__actions page-hero__actions">
              <a className="btn btn--primary btn--cta btn--attract" href="#contato">
                {hero.primary}
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a className="btn btn--glass" href="#contato">
                {hero.secondary}
              </a>
            </div>
          </div>

        </div>

        {/* Desktop: the wide frame in the shared .page-hero art box (same size as the
            homepage). Mobile: a tight crop of the cards below the copy. */}
        <div className="page-hero__art" style={{ backgroundImage: `url(${art.softwareHeroWide})` }} role="img" aria-label={hero.artAlt} />
        <RisingBubbles />
        <img className="sp-flow" src={art.softwareHeroFlow} alt={hero.artAlt} width={900} height={537} />

        <ul className="sp-trust glass page-hero__trust hero-strip" ref={stripRef}>
          {hero.trust.map((item) => (
            <li key={item.title} className="sp-trust__item">
              <span className="sp-trust__icon hero-strip__icon">
                <Icon name={item.icon} size={19} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.sub}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sp-section">
        <div className="container sp-transform">
          <div className="sp-transform__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {transformation.eyebrow}
            </p>
            <h2 className="sp-section__title">{transformation.title}</h2>
            <p className="sp-section__lead">
              {transformation.lead.before}
              <strong>{transformation.lead.accent}</strong>
              {transformation.lead.after}
            </p>

            <div className="sp-compare glass">
              <div className="sp-compare__head">
                <span className="sp-compare__label sp-compare__label--before">
                  <CircleAlert size={15} strokeWidth={2.2} />
                  {transformation.beforeTitle}
                </span>
                <span className="sp-compare__label sp-compare__label--after">
                  <CircleCheck size={15} strokeWidth={2.2} />
                  {transformation.afterTitle}
                </span>
              </div>
              <ul className="sp-compare__rows">
                {transformation.rows.map((row) => (
                  <li key={row.before.text} className="sp-compare__row">
                    <span className="sp-compare__cell sp-compare__cell--before">
                      <span className={`sp-compare__icon sp-compare__icon--${brandTone[row.before.icon as IconKey] ?? 'red'}`}>
                        <Icon name={row.before.icon} size={15} strokeWidth={2} />
                      </span>
                      {row.before.text}
                    </span>
                    <ArrowRight className="sp-compare__arrow" size={16} strokeWidth={2} aria-hidden="true" />
                    <span className="sp-compare__cell">
                      <span className="sp-compare__icon">
                        <Icon name={row.after.icon} size={15} strokeWidth={2} />
                      </span>
                      {row.after.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <img className="sp-hub" src={art.softwareHub} alt={transformation.hubAlt} width={1100} height={965} loading="lazy" />
        </div>
      </section>

      <section className="sp-section sp-section--tint">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {methodology.eyebrow}
          </p>
          <h2 className="sp-section__title">{methodology.title}</h2>
          <p className="sp-section__lead">{methodology.lead}</p>

          <ol className="sp-steps">
            {methodology.steps.map((step, i) => (
              <li key={step.title} className="sp-step">
                <div className="sp-step__head">
                  <span className="sp-step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="sp-step__title">{step.title}</h3>
                    <p className="sp-step__text">{step.text}</p>
                  </div>
                </div>
                {i < methodology.steps.length - 1 && (
                  <ArrowRight className="sp-step__arrow" size={18} strokeWidth={2} aria-hidden="true" />
                )}
                <div className="sp-deliverable glass">
                  <span className="sp-deliverable__icon">
                    <Icon name={step.delivery.icon} size={18} />
                  </span>
                  <span>
                    <small>{methodology.deliveryLabel}</small>
                    <strong>{step.delivery.text}</strong>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {capabilities.eyebrow}
          </p>
          <h2 className="sp-section__title">{capabilities.title}</h2>

          <ul className="sp-caps">
            {capabilities.items.map((item) => (
              <li key={item.title} className="sp-cap glass card-glow">
                <span className="sp-cap__icon card-icon">
                  <Icon name={item.icon} size={21} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {example.eyebrow}
          </p>
          <h2 className="sp-section__title">{example.title}</h2>

          <ol className="sp-example">
            {example.steps.map((step, i) => {
              const StepIcon = exampleIcons[step.tone as keyof typeof exampleIcons]
              return (
                <li key={step.title} className="sp-example__step">
                  <div className={`sp-example__card sp-example__card--${step.tone} glass card-glow`}>
                    <span className="sp-example__icon card-icon">
                      <StepIcon size={26} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                  {i < example.steps.length - 1 && (
                    <ArrowRight className="sp-example__arrow" size={20} strokeWidth={2.2} aria-hidden="true" />
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="sp-section sp-section--tint">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {outcomes.eyebrow}
          </p>
          <h2 className="sp-section__title">{outcomes.title}</h2>
          <p className="sp-section__lead">{outcomes.lead}</p>

          <ul className="sp-outcomes">
            {outcomes.items.map((item) => (
              <li key={item.text} className="sp-outcome glass card-glow">
                <span className="sp-outcome__icon card-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {idealFor.eyebrow}
          </p>
          <h2 className="sp-section__title">{idealFor.title}</h2>

          <ul className="sp-ideal">
            {idealFor.items.map((item) => (
              <li key={item.text} className="sp-ideal__item glass card-glow">
                <span className={`card-icon sp-ideal__icon sp-ideal__icon--${brandTone[item.icon as IconKey] ?? 'blue'}`}>
                  <Icon name={item.icon} size={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaCard
        eyebrow={cta.eyebrow}
        title={cta.title}
        text={cta.text}
        button={cta.button}
        secondary={cta.secondary}
      />
    </main>
  )
}
