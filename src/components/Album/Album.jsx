import { useState } from 'react'
import './Album.css'
import { loadAlbumImages } from '../../utils/loadImages'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/Album/Album.jsx'

const Album = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const { t } = useCsvI18n()

  const labels = {
    title: t(FILE, 'title', language, 'Our Album'),
    subtitle: t(FILE, 'subtitle', language, "Moments we've shared together")
  }

  const localAlbum = loadAlbumImages()
  const images = localAlbum.length
    ? localAlbum.map((url, i) => ({ id: i + 1, url, alt: `Album photo ${i + 1}` }))
    : [
        { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', alt: 'Couple photo 1' },
        { id: 2, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', alt: 'Couple photo 2' },
        { id: 3, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800', alt: 'Couple photo 3' },
        { id: 4, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800', alt: 'Couple photo 4' },
        { id: 5, url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', alt: 'Couple photo 5' },
        { id: 6, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', alt: 'Couple photo 6' }
      ]

  return (
    <section className="album" id="album">
      <h2 className="section-title">{labels.title}</h2>
      <p className="album-subtitle">{labels.subtitle}</p>

      <div className="album-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="album-item"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.url} alt={image.alt} loading="lazy" />
            <div className="album-overlay">
              <span className="view-icon">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close">
              ×
            </button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Album

