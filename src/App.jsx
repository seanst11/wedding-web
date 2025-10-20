import { useEffect, useMemo, useRef, useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import VideoSection from './components/VideoSection/VideoSection'
import Schedule from './components/Schedule/Schedule'
import Album from './components/Album/Album'
import Footer from './components/Footer/Footer'
import Couple from './components/Couple/Couple'
import CountdownSection from './components/CountdownSection/CountdownSection'
import './App.css'

function App() {
  // Map between short URL paths and internal language codes
  const pathToLang = useMemo(
    () => ({ en: 'en', vn: 'vi', jp: 'ja', ch: 'zh-TW', 'zh-TW': 'zh-TW' }),
    []
  )
  const langToPath = useMemo(
    () => ({ en: 'en', vi: 'vn', ja: 'jp', 'zh-TW': 'ch' }),
    []
  )

  // Default language is English
  const [language, setLanguage] = useState('en')
  const didInitFromPath = useRef(false)

  // Initialize from current URL (supports GitHub Pages base path)
  useEffect(() => {
    if (didInitFromPath.current) return
    const base = import.meta.env.BASE_URL || '/'
    const raw = window.location.pathname
    const withoutBase = raw.startsWith(base) ? raw.slice(base.length) : raw.replace(/^\/+/, '')
    const seg = withoutBase.split('/').filter(Boolean)[0] || ''
    const lang = pathToLang[seg] || 'en'
    setLanguage(lang)
    didInitFromPath.current = true
  }, [pathToLang])

  // Reflect language changes to URL path (keep hash for section anchors)
  useEffect(() => {
    if (!didInitFromPath.current) return
    const base = import.meta.env.BASE_URL || '/'
    const code = langToPath[language] || 'en'
    const newPath = `${base}${code}`.replace(/\/+$/, '').replace(/\/\/+/, '/')
    const url = new URL(newPath, window.location.origin)
    url.hash = window.location.hash
    if (url.pathname !== window.location.pathname) {
      window.history.pushState({}, '', url)
    }
  }, [language, langToPath])

  // Keep language in sync with browser navigation
  useEffect(() => {
    const onPop = () => {
      const base = import.meta.env.BASE_URL || '/'
      const raw = window.location.pathname
      const withoutBase = raw.startsWith(base) ? raw.slice(base.length) : raw.replace(/^\/+/, '')
      const seg = withoutBase.split('/').filter(Boolean)[0] || ''
      const lang = pathToLang[seg]
      if (lang && lang !== language) setLanguage(lang)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [language, pathToLang])

  return (
    <div className="App">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      {/* Couple section intentionally not a <section> to keep nav anchors aligned */}
      <Couple language={language} />
      <CountdownSection language={language} />
      <Story language={language} />
      {/* Video section intentionally not a <section> to keep nav anchors aligned */}
      <VideoSection language={language} />
      <Schedule language={language} />
      <Album language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App

