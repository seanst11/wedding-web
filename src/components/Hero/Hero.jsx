import './Hero.css'

const Hero = ({ language }) => {
  const content = {
    en: {
      saveTheDate: 'Save The Date',
      date: 'July 12, 2025',
      couple: 'Sean & Ha',
      tagline: 'Together with our families, we invite you to celebrate our wedding',
      rsvp: 'RSVP'
    },
    vi: {
      saveTheDate: 'Lưu Ngày',
      date: '12 Tháng 7, 2025',
      couple: 'Sơn & Hà',
      tagline: 'Cùng với gia đình, chúng tôi xin mời bạn đến dự lễ cưới của chúng tôi',
      rsvp: 'Xác Nhận Tham Dự'
    }
  }

  const t = content[language]

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="save-date">{t.saveTheDate}</p>
        <h1 className="couple-names">{t.couple}</h1>
        <div className="date-divider">
          <span className="divider-line"></span>
          <span className="date-text">{t.date}</span>
          <span className="divider-line"></span>
        </div>
        <p className="tagline">{t.tagline}</p>
        <button className="rsvp-button">{t.rsvp}</button>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
