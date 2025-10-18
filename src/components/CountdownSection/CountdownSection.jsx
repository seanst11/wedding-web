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

      {/* Add-to-calendar actions */}
      <AddToCalendar language={language} />
    </section>
  )
}

export default CountdownSection

// Lightweight Add to Calendar below the countdown
const AddToCalendar = ({ language }) => {
  const event = {
    title: 'S & H Wedding',
    start: '2025-12-07T11:30:00',
    end: '2025-12-07T14:30:00',
    location:
      'COZZI Blu Taoyuan · COZZI Blu 和逸飯店 桃園館, 32056 桃園市中壢區春德路101號',
    details: "We can't wait to see you there."
  }

  const labels = {
    en: { add: 'Add to Calendar', google: 'Google', ics: 'Apple / Outlook / Teams' },
    'zh-TW': { add: '加入行事曆', google: 'Google', ics: 'Apple / Outlook / Teams' },
    vi: { add: 'Add to Calendar', google: 'Google', ics: 'Apple / Outlook / Teams' },
    ja: { add: 'Add to Calendar', google: 'Google', ics: 'Apple / Outlook / Teams' }
  }

  const t = labels[language] || labels['zh-TW']

  const fmtLocal = (iso) => iso.replace(/[-:]/g, '').slice(0, 15) // YYYYMMDDTHHMMSS

  const googleUrl = () => {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    const params = new URLSearchParams({
      text: event.title,
      dates: `${fmtLocal(event.start)}/${fmtLocal(event.end)}`,
      location: event.location,
      details: event.details,
      ctz: 'Asia/Taipei'
    })
    return `${base}&${params.toString()}`
  }

  const buildICS = () => {
    const uid = `sh-wedding-${Date.now()}@example`
    const dtStamp = fmtLocal(new Date().toISOString())
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//S&H Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART;TZID=Asia/Taipei:${fmtLocal(event.start)}`,
      `DTEND;TZID=Asia/Taipei:${fmtLocal(event.end)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.details}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')
    return new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  }

  const downloadICS = () => {
    const blob = buildICS()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 's-and-h-wedding.ics'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="atc-container">
      <div className="atc-group" role="group" aria-label={t.add}>
        <a
          className="atc-btn primary"
          href={googleUrl()}
          target="_blank"
          rel="noreferrer"
        >
          {t.add} · {t.google}
        </a>
        <button className="atc-btn" onClick={downloadICS}>
          {t.add} · {t.ics}
        </button>
      </div>
      <div className="atc-hint">Compatible with Google, Apple, Outlook, Teams</div>
    </div>
  )
}
