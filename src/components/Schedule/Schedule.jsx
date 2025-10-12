import './Schedule.css'

const Schedule = ({ language }) => {
  const content = {
    en: {
      title: 'Event Schedule',
      subtitle: 'Join us as we celebrate our special day',
      events: [
        {
          icon: '💒',
          title: 'Wedding Ceremony',
          time: '2:00 PM',
          location: 'St. Mary\'s Church',
          address: '123 Main Street, City',
          description: 'Join us for our wedding ceremony as we exchange vows and begin our journey together.'
        },
        {
          icon: '🥂',
          title: 'Cocktail Hour',
          time: '4:00 PM',
          location: 'Garden Terrace',
          address: 'Same Venue',
          description: 'Enjoy refreshments and mingle with other guests while we take photos.'
        },
        {
          icon: '🍽️',
          title: 'Reception Dinner',
          time: '5:30 PM',
          location: 'Grand Ballroom',
          address: 'Same Venue',
          description: 'Celebrate with us over a delicious dinner, speeches, and our first dance.'
        },
        {
          icon: '💃',
          title: 'Dancing & Celebration',
          time: '8:00 PM',
          location: 'Dance Floor',
          address: 'Same Venue',
          description: 'Let\'s dance the night away and celebrate our new beginning!'
        }
      ]
    },
    vi: {
      title: 'Lịch Trình Sự Kiện',
      subtitle: 'Hãy tham gia cùng chúng tôi trong ngày đặc biệt',
      events: [
        {
          icon: '💒',
          title: 'Lễ Cưới',
          time: '2:00 chiều',
          location: 'Nhà thờ St. Mary',
          address: '123 Phố Chính, Thành phố',
          description: 'Tham gia cùng chúng tôi trong lễ cưới khi chúng tôi trao lời thề và bắt đầu hành trình cùng nhau.'
        },
        {
          icon: '🥂',
          title: 'Tiệc Cocktail',
          time: '4:00 chiều',
          location: 'Sân Vườn',
          address: 'Cùng địa điểm',
          description: 'Thưởng thức đồ uống và trò chuyện với các khách mời khác trong khi chúng tôi chụp ảnh.'
        },
        {
          icon: '🍽️',
          title: 'Tiệc Tối',
          time: '5:30 chiều',
          location: 'Phòng Tiệc Lớn',
          address: 'Cùng địa điểm',
          description: 'Ăn mừng cùng chúng tôi với bữa tối ngon, bài phát biểu và điệu nhảy đầu tiên.'
        },
        {
          icon: '💃',
          title: 'Khiêu Vũ & Ăn Mừng',
          time: '8:00 tối',
          location: 'Sàn Nhảy',
          address: 'Cùng địa điểm',
          description: 'Hãy cùng nhảy múa cả đêm và ăn mừng khởi đầu mới của chúng tôi!'
        }
      ]
    }
  }

  const t = content[language]

  return (
    <section className="schedule" id="schedule">
      <h2 className="section-title">{t.title}</h2>
      <p className="schedule-subtitle">{t.subtitle}</p>
      <div className="schedule-grid">
        {t.events.map((event, index) => (
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
