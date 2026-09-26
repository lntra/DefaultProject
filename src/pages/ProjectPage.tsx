import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  CodeXml,
  Database,
  FileText,
  Info,
  LayoutGrid,
  Link2,
  Lock,
  MessageCircle,
  Settings,
  ShieldCheck,
  User,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { RisingBubbles } from '../components/Aero'
import { CtaCard } from '../components/CtaCard'
import { useStableHeight } from '../hooks/useStableHeight'
import { useCopy } from '../i18n/lang'
// Generic artwork reused at the start of every project page — swap only the
// per-project copy in `copy.ts`, not these images. Masters live in
// src/assets/hero/; `npm run assets` rebuilds these WebP copies. The laptop mockup
// has UI text on its screen, so it comes per language from `art.mockLaptop`.
import defaultProjectHero from '../assets/desktop/default-project-hero.webp'
import './ProjectPage.css'

// Single icon set shared by badges, overview meta, feature cards and the
// "ideal for" strip — every one of those is just an { icon, label/text } pair.
const iconMap = {
  shield: ShieldCheck,
  code: CodeXml,
  file: FileText,
  calendar: Calendar,
  grid: LayoutGrid,
  users: Users,
  user: User,
  database: Database,
  chart: BarChart3,
  lock: Lock,
  link: Link2,
  clock: Clock,
  workflow: Workflow,
  message: MessageCircle,
  bell: Bell,
  check: CheckCircle2,
  gear: Settings,
  zap: Zap,
}
const severityIcons = { high: AlertCircle, medium: AlertTriangle, low: Info }

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const { projectPages, art } = useCopy()
  const stripRef = useStableHeight<HTMLUListElement>()
  const project = slug ? projectPages[slug] : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="project-page">
      <section className="pp-hero page-hero">
        {/* Desktop art: the shared .page-hero frame, same size as the homepage hero */}
        <div className="pp-stage__art page-hero__art" style={{ backgroundImage: `url(${defaultProjectHero})` }} aria-hidden="true" />
        <RisingBubbles />

        <div className="pp-hero__inner page-hero__inner">
          <Link className="pp-back page-hero__back" to="/#projetos">
            <ArrowLeft size={15} strokeWidth={2.2} />
            {project.back}
          </Link>

          <div className="pp-hero__copy page-hero__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {project.eyebrow}
            </p>
            <h1 className="pp-hero__title page-hero__title">{project.title}</h1>
            <p className="pp-hero__lead page-hero__lead">{project.lead}</p>

            <div className="pp-hero__actions page-hero__actions">
              <a className="btn btn--primary btn--cta btn--attract" href="/#contato">
                {project.primary}
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
              <a className="btn btn--glass" href="/#contato">
                {project.secondary}
              </a>
            </div>
          </div>

          {/* Mobile scene: same contained, edge-to-edge photo card as the homepage's .scene */}
          <figure className="pp-scene">
            <img className="pp-scene__img" src={defaultProjectHero} alt="" width={1400} height={788} />
          </figure>

          <ul className="pp-badges hero-strip" ref={stripRef}>
            {project.badges.map((b) => {
              const Icon = iconMap[b.icon as keyof typeof iconMap]
              return (
                <li key={b.title} className="pp-badge">
                  <span className="pp-badge__icon hero-strip__icon">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <span className="pp-badge__label">
                    <strong>{b.title}</strong>
                    <small>{b.sub}</small>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="pp-section">
        <div className="container pp-overview">
          <div className="pp-overview__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {project.overview.eyebrow}
            </p>
            <h2 className="pp-section__title">{project.overview.title}</h2>
            <p className="pp-section__lead">{project.overview.text}</p>

            <ul className="pp-meta glass">
              {project.overview.meta.map((m) => {
                const Icon = iconMap[m.icon as keyof typeof iconMap]
                return (
                  <li key={m.label} className="pp-meta__item">
                    <span className="pp-meta__icon">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <span>
                      <strong>{m.label}</strong>
                      <small>{m.value}</small>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <img className="pp-laptop" src={art.mockLaptop} alt="" width={1100} height={825} />

        </div>
      </section>

      <section className="pp-section pp-section--tint">
        <div className="container">
          <p className="eyebrow eyebrow--sm">
            <span className="eyebrow__dot" />
            {project.methodology.eyebrow}
          </p>
          <h2 className="pp-section__title">{project.methodology.title}</h2>
          <p className="pp-section__lead">{project.methodology.lead}</p>

          <ol className="pp-steps">
            {project.methodology.steps.map((step, i) => (
              <li key={step.title} className="pp-step">
                <span className="pp-step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="pp-step__title">{step.title}</h3>
                  <p className="pp-step__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {project.findings && (
        <section className="pp-section">
          <div className="container">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {project.findings.eyebrow}
            </p>
            <h2 className="pp-section__title">{project.findings.title}</h2>
            <p className="pp-section__lead">{project.findings.lead}</p>

            <ul className="pp-findings">
              {project.findings.items.map((f) => {
                const Icon = severityIcons[f.level]
                return (
                  <li key={f.title} className={`pp-finding pp-finding--${f.level} glass card-glow`}>
                    <span className="pp-finding__icon card-icon">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                    <h3 className="pp-finding__title">{f.title}</h3>
                    <p className="pp-finding__text">{f.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      {project.features && (
        <section className="pp-section">
          <div className="container">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {project.features.eyebrow}
            </p>
            <h2 className="pp-section__title">{project.features.title}</h2>
            <p className="pp-section__lead">{project.features.lead}</p>

            <ul className="pp-findings pp-features">
              {project.features.items.map((f) => {
                const Icon = iconMap[f.icon as keyof typeof iconMap]
                return (
                  <li key={f.title} className="pp-finding pp-feature glass card-glow">
                    <span className="pp-finding__icon pp-feature__icon card-icon">
                      <Icon size={20} strokeWidth={1.9} />
                    </span>
                    <h3 className="pp-finding__title">{f.title}</h3>
                    <p className="pp-finding__text">{f.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="pp-section pp-section--tint">
        <div className="container pp-results">
          <div className="pp-results__copy">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {project.results.eyebrow}
            </p>
            <h2 className="pp-section__title">{project.results.title}</h2>
            <p className="pp-section__lead">{project.results.text}</p>
          </div>

          <ul className="pp-checklist glass">
            {project.results.checklist.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.idealFor && (
        <section className="pp-section">
          <div className="container">
            <h2 className="pp-idealfor__title">{project.idealFor.title}</h2>
            <ul className="pp-idealfor">
              {project.idealFor.items.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <li key={item.text} className="pp-idealfor__item">
                    <span className="pp-idealfor__icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      <CtaCard
        eyebrow={project.cta.eyebrow}
        title={project.cta.title}
        text={project.cta.text}
        button={project.cta.button}
        secondary={project.cta.secondary}
      />
    </main>
  )
}
