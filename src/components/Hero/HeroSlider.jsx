import { useEffect, useRef, useState } from 'react'
import './HeroSlider.css'

const HeroSlider = ({ images = [], autoPlay = true, interval = 5000 }) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    if (!autoPlay || paused || images.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [autoPlay, interval, paused, images.length])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    if (dx > threshold) prev()
    if (dx < -threshold) next()
    touchStartX.current = null
  }

  if (!images || images.length === 0) return null

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          className={`slide ${i === index ? 'active' : ''}`}
          src={src}
          alt=""
          aria-hidden={i !== index}
        />
      ))}

      {images.length > 1 && (
        <>
          <button className="slider-btn prev" onClick={prev} aria-label="Previous image">
            &lt;
          </button>
          <button className="slider-btn next" onClick={next} aria-label="Next image">
            &gt;
          </button>
          <div className="slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default HeroSlider
