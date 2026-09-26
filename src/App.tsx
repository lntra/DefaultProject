import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AeroAmbience } from './components/Aero'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AutomacaoPage } from './pages/AutomacaoPage'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { SoftwarePage } from './pages/SoftwarePage'
import { useSurfaceReveal } from './hooks/useSurfaceReveal'

const bubbles = [
  { size: 74, left: '3%', top: '70%', delay: '0s' },
  { size: 46, left: '90%', top: '82%', delay: '-3s' },
  { size: 28, left: '8%', top: '38%', delay: '-5s' },
  { size: 110, left: '86%', top: '58%', delay: '-2s' },
]

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  useSurfaceReveal()

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        {bubbles.map((b) => (
          <span
            key={b.left + b.top}
            className="bubble"
            style={{ width: b.size, height: b.size, left: b.left, top: b.top, animationDelay: b.delay }}
          />
        ))}
      </div>

      <div className="page">
        <ScrollManager />
        <AeroAmbience />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos/automacao-de-processos" element={<AutomacaoPage />} />
          <Route path="/projetos/sistema-de-gestao-operacional" element={<SoftwarePage />} />
          <Route path="/projetos/:slug" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
