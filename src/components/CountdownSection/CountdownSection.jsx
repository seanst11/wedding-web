import './CountdownSection.css'
import Countdown from '../Countdown/Countdown'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/CountdownSection/CountdownSection.jsx'

const CountdownSection = ({ language }) => {
  const { t } = useCsvI18n()
  const title = t(FILE, 'title', language, 'Save The Date')
  const date = t(FILE, 'date', language, 'Dec 07, 2025 11:30')
  const message = t(
    FILE,
    'message',
    language,
    "We can't wait to see you there."
  )

  return (
    <section className="countdown-section" id="countdown">
      <h2 className="section-title">{title}</h2>
      <div className="count-date">{date}</div>
      <Countdown target="2025-12-07T11:30:00" />
      <p className="count-message">{message}</p>

      <AddToCalendar language={language} />
    </section>
  )
}

export default CountdownSection

const AddToCalendar = ({ language }) => {
  const { t } = useCsvI18n()
  const labels = {
    add: t(FILE, 'atc.add', language, 'Add to Calendar'),
    google: t(FILE, 'atc.google', language, 'Google'),
    ics: t(FILE, 'atc.ics', language, 'Apple / Outlook / Teams'),
    hint: t(
      FILE,
      'atc.hint',
      language,
      'Compatible with Google, Apple, Outlook, Teams'
    )
  }

  const event = {
    title: 'S & H Wedding',
    start: '2025-12-07T11:30:00',
    end: '2025-12-07T14:30:00',
    location: 'COZZI Blu Taoyuan, Pearl Hall · 3F',
    details: labels.hint
  }

  const fmtLocal = (iso) => iso.replace(/[-:]/g, '').slice(0, 15)

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
      <div className="atc-group" role="group" aria-label={labels.add}>
        <a className="atc-btn primary" href={googleUrl()} target="_blank" rel="noreferrer">
          {labels.add} · {labels.google}
        </a>
        <button className="atc-btn" onClick={downloadICS}>
          {labels.add} · {labels.ics}
        </button>
      </div>
      <div className="atc-hint">{labels.hint}</div>
    </div>
  )
}

