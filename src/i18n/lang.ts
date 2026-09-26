import { createContext, useContext } from 'react'
import { pt, type Copy } from '../content/copy'
import { en } from '../content/copy.en'

export type Lang = 'pt' | 'en'

export const copies: Record<Lang, Copy> = { pt, en }

// Portuguese for browsers whose preferred language is Portuguese (pt, pt-BR, pt-PT...),
// English everywhere else.
export function detectLang(): Lang {
  const preferred = navigator.languages?.[0] ?? navigator.language ?? ''
  return preferred.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

type LangState = { lang: Lang; setLang: (lang: Lang) => void }

export const LangContext = createContext<LangState>({ lang: 'pt', setLang: () => {} })

export const useLang = () => useContext(LangContext)

export const useCopy = (): Copy => copies[useLang().lang]
