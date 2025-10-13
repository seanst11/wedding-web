import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = {
    en: ['Us', 'Our Story', 'Event Schedule', 'Album'],
    vi: ['Chúng tôi', 'Câu chuyện', 'Lịch trình', 'Album'],
    'zh-TW': ['我們', '故事', '行程', '相簿'],
    ja: ['私たち', 'ストーリー', 'スケジュール', 'アルバム']
  }

  const languages = [
    { value: 'zh-TW', label: '繁中' },
    { value: 'ja', label: '日本語' },
    { value: 'en', label: 'EN' },
    { value: 'vi', label: 'VI' }
  ]

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">S & H</div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems[language]?.map((item, index) => (
            <button
              key={index}
              className="nav-item"
              onClick={() => scrollToSection(index)}
            >
              {item}
            </button>
          ))}
          <select
            className="lang-toggle"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Language selector"
          >
            {languages.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

