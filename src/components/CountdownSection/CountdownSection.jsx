import './CountdownSection.css'
import Countdown from '../Countdown/Countdown'

const CountdownSection = ({ language }) => {
  const content = {
    en: {
      title: 'Save The Date',
      date: 'Dec 07, 2025 • 11:30',
      message: "We can't wait to see you there."
    },
    'zh-TW': {
      title: '婚禮倒數',
      date: '2025/12/07 11:30',
      message: '我們很期待看到您。'
    },
    vi: {
      title: 'Ngày Cưới',
      date: '07/12/2025 • 11:30',
      message: 'Chúng tôi rất mong được gặp bạn.'
    },
    ja: {
      title: 'カウントダウン',
      date: '2025年12月7日 11:30',
      message: '皆さまにお会いできるのを楽しみにしています。'
    }
  }

  const t = content[language] || content['zh-TW']

  return (
    <section className="countdown-section" id="countdown">
      <h2 className="section-title">{t.title}</h2>
      <div className="count-date">{t.date}</div>
      <Countdown target="2025-12-07T11:30:00" />
      <p className="count-message">{t.message}</p>
    </section>
  )
}

export default CountdownSection
