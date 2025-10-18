import './Schedule.css'

import imgHotel from '../../assets/others/和逸飯店.webp'
import imgCeremony from '../../assets/others/婚宴桌面擺設參考.jpg'
import imgFallback from '../../assets/others/PAL_744.jpg'

const Schedule = ({ language }) => {
  const mapLinkCozziBlu =
    'https://www.google.com/maps/place/COZZI+Blu+Taoyuan/@25.0178434,121.211204,17z/data=!3m1!5s0x346821008206abb5:0x40e59f47301057a9!4m9!3m8!1s0x346821a7e4fcb1a3:0xe926522744c32b32!5m2!4m1!1i2!8m2!3d25.0178386!4d121.2137789!16s%2Fg%2F11fs_8w616?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'

  const enEvents = {
    title: 'Event Schedule',
    subtitle: 'A simple flow for a joyful day',
    events: [
      {
        icon: '🕦',
        title: 'Guest Arrival',
        time: '11:30',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address:
          'COZZI Blu Hotel, Zhongli District, 101 Chunde Rd, Taoyuan 32056',
        link: mapLinkCozziBlu,
        image: imgHotel,
        description: 'Arrive, relax, and say hello. Make yourself at home.'
      },
      {
        icon: '💍',
        title: 'Wedding Ceremony',
        time: '12:00',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address: 'Indoor ceremony and rings exchange',
        image: imgCeremony,
        description: 'A short, heartfelt ceremony to mark the beginning.'
      },
      {
        icon: '🏁',
        title: 'Reception Ends',
        time: '14:30',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address: 'Thank you for celebrating with us!',
        image: imgFallback,
        description: 'Warm farewells and safe travels.'
      }
    ]
  }

  const zhTWEvents = {
    title: '行程安排',
    subtitle: '簡潔、溫馨，一起度過美好的一天',
    events: [
      {
        icon: '🕦',
        title: '賓客入場',
        time: '11:30',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address: '32056 桃園市中壢區春德路101號',
        link: mapLinkCozziBlu,
        image: imgHotel,
        description: '提早抵達，輕鬆入席，現場備有人員引導。'
      },
      {
        icon: '💍',
        title: 'Wedding Ceremony',
        time: '12:00',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address: '室內證婚，敬請入席',
        image: imgCeremony,
        description: '見證誓言，共同迎接嶄新的開始。'
      },
      {
        icon: '🏁',
        title: '宴會結束（預計）',
        time: '14:30',
        location: 'Pearl Hall · 3F · COZZI Blu Taoyuan',
        address: '感謝蒞臨，一路平安',
        image: imgFallback,
        description: '溫馨道別，敬祝賓客平安順心。'
      }
    ]
  }

  // Vietnamese and Japanese use English content as requested
  const content = {
    en: enEvents,
    vi: enEvents,
    ja: enEvents,
    'zh-TW': zhTWEvents
  }

  const t = content[language] || enEvents

  return (
    <section className="schedule" id="schedule">
      <h2 className="section-title">{t.title}</h2>
      <p className="schedule-subtitle">{t.subtitle}</p>
      <div className="schedule-venue-label">
        {language === 'zh-TW' ? '典禮會場：COZZI Blu Taoyuan' : 'Ceremony Venue: COZZI Blu Taoyuan'}
      </div>
      <div className="schedule-actions">
        <a
          className="map-button"
          href={mapLinkCozziBlu}
          target="_blank"
          rel="noreferrer"
          aria-label="Open COZZI Blu on Google Maps"
        >
          {language === 'zh-TW' ? '開啟 Google 地圖' : 'Open in Google Maps'}
        </a>
      </div>
      <div className="schedule-grid">
        {t.events.map((event, index) => (
          <div
            key={index}
            className="schedule-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="schedule-image"
                loading="lazy"
              />
            )}
            <div className="schedule-icon">{event.icon}</div>
            <h3 className="schedule-event-title">{event.title}</h3>
            <div className="schedule-time">{event.time}</div>
            <div className="schedule-location">
              {event.link ? (
                <a href={event.link} target="_blank" rel="noreferrer">
                  <strong>{event.location}</strong>
                </a>
              ) : (
                <strong>{event.location}</strong>
              )}
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
