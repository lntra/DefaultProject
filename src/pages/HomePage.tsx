import { About } from '../components/About'
import { CtaCard } from '../components/CtaCard'
import { Hero } from '../components/Hero'
import { Process } from '../components/Process'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <CtaCard />
    </main>
  )
}
