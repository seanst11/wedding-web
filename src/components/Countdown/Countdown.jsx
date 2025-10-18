import { useEffect, useMemo, useState } from 'react'
import './Countdown.css'

const pad2 = (n) => String(Math.max(0, Math.floor(n))).padStart(2, '0')

const getRemaining = (targetMs) => {
  const now = Date.now()
  let diff = Math.max(0, targetMs - now)
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))
  diff -= days * 24 * 60 * 60 * 1000
  const hours = Math.floor(diff / (60 * 60 * 1000))
  diff -= hours * 60 * 60 * 1000
  const minutes = Math.floor(diff / (60 * 1000))
  diff -= minutes * 60 * 1000
  const seconds = Math.floor(diff / 1000)
  return { days, hours, minutes, seconds }
}

const Countdown = ({ target = '2025-12-07T11:30:00' }) => {
  const targetMs = useMemo(() => new Date(target).getTime(), [target])
  const [remain, setRemain] = useState(() => getRemaining(targetMs))

  useEffect(() => {
    const i = setInterval(() => setRemain(getRemaining(targetMs)), 1000)
    return () => clearInterval(i)
  }, [targetMs])

  return (
    <div className="countdown" role="timer" aria-live="polite">
      {[
        { label: 'Days', value: pad2(remain.days) },
        { label: 'Hours', value: pad2(remain.hours) },
        { label: 'Minutes', value: pad2(remain.minutes) },
        { label: 'Seconds', value: pad2(remain.seconds) }
      ].map((item) => (
        <div className="count-box" key={item.label}>
          <div className="count-value">{item.value}</div>
          <div className="count-label">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
