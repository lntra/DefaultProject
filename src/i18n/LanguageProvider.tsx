import { type ReactNode, useEffect, useState } from 'react'
import { LangContext, type Lang, copies, detectLang } from './lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  // Keep the document in step with the rendered language (screen readers, hyphenation,
  // browser translate prompts, tab title).
  useEffect(() => {
    const { meta } = copies[lang]
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
