import './Story.css'
import { loadStoryImages } from '../../utils/loadImages'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/Story/Story.jsx'

const Story = ({ language }) => {
  const { t } = useCsvI18n()

  const title = t(FILE, 'title', language, 'Our Story')
  const timeline = [0, 1, 2, 3].map((i) => ({
    year: [
      'Dec 27, 2019',
      '2020–2025',
      'Apr 27, 2025',
      'Aug 2025'
    ][i],
    title: t(FILE, `timeline[${i}].title`, language, ''),
    description: t(FILE, `timeline[${i}].description`, language, '')
  }))

  const storyImages = loadStoryImages()

  return (
    <section className="story" id="story">
      <h2 className="section-title">{title}</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              {storyImages[index] && (
                <img
                  src={storyImages[index]}
                  alt={`Story ${index + 1}`}
                  style={{ width: '100%', borderRadius: 8, marginTop: 12 }}
                />
              )}
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Story

