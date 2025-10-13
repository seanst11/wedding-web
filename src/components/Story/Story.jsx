import './Story.css'

const Story = ({ language }) => {
  const content = {
    en: {
      title: 'Our Story',
      timeline: [
        {
          year: '2018',
          title: 'First Meeting',
          description:
            'We met at a coffee shop on a rainy afternoon. It was love at first sight, though neither of us knew it then.'
        },
        {
          year: '2019',
          title: 'First Date',
          description:
            'Our first official date was at a small Italian restaurant. We talked for hours and knew this was something special.'
        },
        {
          year: '2021',
          title: 'Moving In Together',
          description:
            'We decided to take the next step and find our first home together. Every moment has been an adventure.'
        },
        {
          year: '2024',
          title: 'The Proposal',
          description:
            'On a beautiful sunset at the beach, the question was asked and answered with tears of joy.'
        },
        {
          year: '2025',
          title: 'Our Wedding',
          description:
            'And now, we invite you to celebrate this next chapter of our journey together.'
        }
      ]
    },
    vi: {
      title: 'Câu Chuyện Của Chúng Tôi',
      timeline: [
        {
          year: '2018',
          title: 'Lần đầu gặp gỡ',
          description:
            'Chúng tôi gặp nhau tại một quán cà phê vào một buổi chiều mưa.'
        }
      ]
    }
  }

  const t = content[language] || content.en

  return (
    <section className="story" id="story">
      <h2 className="section-title">{t.title}</h2>
      <div className="timeline">
        {t.timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Story

