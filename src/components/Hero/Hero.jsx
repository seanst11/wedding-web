import './Hero.css'
import HeroSlider from './HeroSlider'

const Hero = ({ language }) => {
  const content = {
    en: {
      saveTheDate: 'Save The Date',
      date: 'July 12, 2025',
      couple: 'Sean & Ha',
      tagline:
        'Together with our families, we invite you to celebrate our wedding',
      rsvp: 'RSVP'
    },
    vi: {
      saveTheDate: 'Lưu Ngày',
      date: '12 Tháng 7, 2025',
      couple: 'Sơn & Hà',
      tagline:
        'Cùng với gia đình, chúng tôi xin mời bạn đến dự lễ cưới của chúng tôi',
      rsvp: 'Xác nhận tham dự'
    },
    'zh-TW': {
      saveTheDate: '婚禮邀請',
      date: '2025/12/07',
      couple: 'Wu, Sung Tao (Sean) & Phan Thu Ha (Ha)',
      tagline:
        '若是你收到這封精心製作的電子喜帖，代表你是松濤或哈醬生命中舉足輕重的至親好友，謝謝你在過去某個時刻陪我們度過了某些值得紀念的時刻：可能是小時候的淘氣，爛醉的夜晚，互相加油打氣的熬夜準備等等。此刻，想和你分享我們這一特別的時刻 我們要結婚了！誠摯邀請你參加我們的婚禮，期待能在重要的日子見到重要的你！',
      rsvp: '回覆出席'
    },
    ja: {
      saveTheDate: '結婚式のご案内',
      date: '2025年12月7日',
      couple: 'Wu, Sung Tao (Sean) & Phan Thu Ha (Ha)',
      tagline:
        '家族とともに、私たちの結婚式へのご参列を心よりお待ちしております。',
      rsvp: '出欠連絡'
    }
  }

  const t = content[language] || content['zh-TW']

  const heroImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600'
  ]

  return (
    <section className="hero" id="hero">
      <HeroSlider images={heroImages} />
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

