import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCopy } from '../i18n/lang'
import './Projects.css'

export function Projects() {
  const { projects } = useCopy()

  return (
    <section className="projects" id="projetos">
      <div className="container">
        <header className="sect-head">
          <div className="sect-head__intro">
            <p className="eyebrow eyebrow--sm">
              <span className="eyebrow__dot" />
              {projects.eyebrow}
            </p>
            <h2 className="sect-head__title">{projects.title}</h2>
          </div>
          <a className="link-more" href="#contato">
            {projects.more}
            <ArrowRight size={17} strokeWidth={2.2} />
          </a>
        </header>

        <ul className="projects__list">
          {projects.items.map((p) => {
            const isInternal = p.href.startsWith('/')
            const body = (
              <>
                <img className="project__thumb" src={p.image} alt="" width={570} height={324} />
                <span className="project__body">
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__text">{p.text}</p>
                </span>
                <span className="project__go" aria-hidden="true">
                  <ArrowRight size={16} strokeWidth={2.2} />
                </span>
              </>
            )
            return (
              <li key={p.title}>
                {isInternal ? (
                  <Link className="project glass card-lift" to={p.href}>
                    {body}
                  </Link>
                ) : (
                  <a className="project glass card-lift" href={p.href}>
                    {body}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
