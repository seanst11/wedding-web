import { useState } from 'react'
import './VideoSection.css'
import bgImage from '../../assets/others/PAL_744.jpg'

const VideoSection = ({ language }) => {
  const content = {
    en: { title: 'Our Wedding Video in Vietnam' },
    vi: { title: 'Video Đám Cưới Của Chúng Tôi tại Việt Nam' },
    'zh-TW': { title: '我們在越南的婚禮影片' },
    ja: { title: 'ベトナムでの私たちの結婚式動画' }
  }
  const t = content[language] || content['zh-TW']

  const [open, setOpen] = useState(false)
  const videoId = 'b6-FZMvERkw'
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`

  return (
    <div className="video-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="video-overlay" />
      <div className="video-content">
        <h2 className="video-title">{t.title}</h2>
        <button className="video-play" onClick={() => setOpen(true)} aria-label="Play wedding video">
          ▶
        </button>
      </div>

      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="video-close" onClick={() => setOpen(false)} aria-label="Close video">×</button>
            <div className="video-responsive">
              <iframe
                src={embedUrl}
                title="Wedding Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoSection

