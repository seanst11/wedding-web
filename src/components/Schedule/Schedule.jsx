import './Schedule.css'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/Schedule/Schedule.jsx'

const Schedule = ({ language }) => {
  const { t } = useCsvI18n()

  const title = t(FILE, 'title', language, 'Event Schedule')
  const subtitle = t(
    FILE,
    'subtitle',
    language,
    'A simple flow for a joyful day'
  )

  const events = [
    {
      icon: '🕒',
      title: t(FILE, 'events[0].title', language, 'Guest Arrival'),
      time: '11:30',
      location: t(
        FILE,
        'events[0].location',
        language,
        'Pearl Hall · 3F · COZZI Blu Taoyuan'
      ),
      address: t(
        FILE,
        'events[0].address',
        language,
        'COZZI Blu Hotel, Zhongli District, 101 Chunde Rd, Taoyuan 32056'
      ),
      description: t(
        FILE,
        'events[0].description',
        language,
        'Arrive, relax, and say hello. Make yourself at home.'
      )
    },
    {
      icon: '💍',
      title: t(FILE, 'events[1].title', language, 'Wedding Ceremony'),
      time: '12:00',
      location: t(
        FILE,
        'events[1].location',
        language,
        'Pearl Hall · 3F · COZZI Blu Taoyuan'
      ),
      address: t(
        FILE,
        'events[1].address',
        language,
        'Indoor ceremony and rings exchange'
      ),
      description: t(
        FILE,
        'events[1].description',
        language,
        'A short, heartfelt ceremony to mark the beginning.'
      )
    },
    {
      icon: '🎉',
      title: t(FILE, 'events[2].title', language, 'Reception Ends'),
      time: '14:30',
      location: t(
        FILE,
        'events[2].location',
        language,
        'Pearl Hall · 3F · COZZI Blu Taoyuan'
      ),
      address: t(
        FILE,
        'events[2].address',
        language,
        'Thank you for celebrating with us!'
      ),
      description: t(
        FILE,
        'events[2].description',
        language,
        'Warm farewells and safe travels.'
      )
    }
  ]

  const venueLabel = t(
    FILE,
    'ceremonyVenueLabel',
    language,
    'Ceremony Venue: COZZI Blu Taoyuan'
  )
  const mapButton = t(FILE, 'mapButton', language, 'Open in Google Maps')
  const mapLink =
    'https://www.google.com/maps/place/COZZI+Blu+Taoyuan/@25.0178434,121.211204,17z'

  return (
    <section className="schedule" id="schedule">
      <h2 className="section-title">{title}</h2>
      <p className="schedule-subtitle">{subtitle}</p>
      <div className="schedule-venue-label">{venueLabel}</div>
      <div className="schedule-actions">
        <a className="map-button" href={mapLink} target="_blank" rel="noreferrer" aria-label="Open COZZI Blu on Google Maps">
          {mapButton}
        </a>
      </div>
      <div className="schedule-grid">
        {events.map((event, index) => (
          <div key={index} className="schedule-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="schedule-icon">{event.icon}</div>
            <h3 className="schedule-event-title">{event.title}</h3>
            <div className="schedule-time">{event.time}</div>
            <div className="schedule-location">
              <strong>{event.location}</strong>
              <br />
              {event.address}
            </div>
            <p className="schedule-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Schedule
