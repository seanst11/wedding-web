import './Story.css'

const Story = ({ language }) => {
  const content = {
    en: {
      title: 'Our Story',
      timeline: [
        {
          year: '2018',
          title: 'First Meeting',
          description: 'We met at a coffee shop on a rainy afternoon. It was love at first sight, though neither of us knew it then.'
        },
        {
          year: '2019',
          title: 'First Date',
          description: 'Our first official date was at a small Italian restaurant. We talked for hours and knew this was something special.'
        },
        {
          year: '2021',
          title: 'Moving In Together',
          description: 'We decided to take the next step and find our first home together. Every moment has been an adventure.'
        },
        {
          year: '2024',
          title: 'The Proposal',
          description: 'On a beautiful sunset at the beach, the question was asked and answered with tears of joy.'
        },
        {
          year: '2025',
          title: 'Our Wedding',
          description: 'And now, we invite you to celebrate this next chapter of our journey together.'
        }
      ]
    },
    vi: {
      title: 'Câu Chuyện Của Chúng Tôi',
      timeline: [
        {
          year: '2018',
          title: 'Lần Đầu Gặp Gỡ',
          description: 'Chúng tôi gặp nhau tại một quán cà phê vào một buổi chiều mưa. Đó là tình yêu sét đánh, mặc dù lúc đó chúng tôi chưa biết.'
        },
        {
          year: '2019',
          title: 'Buổi Hẹn Đầu Tiên',
          description: 'Buổi hẹn chính thức đầu tiên của chúng tôi là tại một nhà hàng Ý nhỏ. Chúng tôi trò chuyện hàng giờ và biết đây là điều gì đó đặc biệt.'
        },
        {
          year: '2021',
          title: 'Chuyển Đến Sống Cùng Nhau',
          description: 'Chúng tôi quyết định bước tiếp theo và tìm ngôi nhà đầu tiên của mình. Mỗi khoảnh khắc đều là một cuộc phiêu lưu.'
        },
        {
          year: '2024',
          title: 'Lời Cầu Hôn',
          description: 'Vào một hoàng hôn tuyệt đẹp trên bãi biển, câu hỏi đã được đặt ra và trả lời với nước mắt hạnh phúc.'
        },
        {
          year: '2025',
          title: 'Đám Cưới Của Chúng Tôi',
          description: 'Và bây giờ, chúng tôi xin mời bạn đến ăn mừng chương tiếp theo trong hành trình của chúng tôi.'
        }
      ]
    }
  }

  const t = content[language]

  return (
    <section className="story" id="story">
      <h2 className="section-title">{t.title}</h2>
      <div className="timeline">
        {t.timeline.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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
