import './Hero.css'
import HeroSlider from './HeroSlider'
import { loadMainImages } from '../../utils/loadImages'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/Hero/Hero.jsx'

const Hero = ({ language }) => {
  const { t } = useCsvI18n()

  const content = {
    saveTheDate: t(FILE, 'saveTheDate', language, 'Save The Date'),
    date: t(FILE, 'date', language, 'Dec 07, 2025 11:30'),
    couple: t(FILE, 'couple', language, 'Sean & Ha'),
    tagline: t(
      FILE,
      'tagline',
      language,
      'Together with our families, we invite you to celebrate our wedding'
    ),
    rsvp: t(FILE, 'rsvp', language, 'RSVP')
  }

  const localMain = loadMainImages()
  const heroImages = localMain.length
    ? localMain
    : [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600'
      ]

  return (
    <section className="hero" id="hero">
      <HeroSlider images={heroImages} />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="couple-names">{content.couple}</h1>
        <div className="date-divider">
          <span className="divider-line"></span>
          <span className="date-text">{content.date}</span>
          <span className="divider-line"></span>
        </div>
        <p className="tagline">{content.tagline}</p>
        <button className="rsvp-button">{content.rsvp}</button>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

