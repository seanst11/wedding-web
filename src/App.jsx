import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import VideoSection from './components/VideoSection/VideoSection'
import Schedule from './components/Schedule/Schedule'
import Album from './components/Album/Album'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Story language={language} />
      {/* Video section intentionally not a <section> to keep nav anchors aligned */}
      <VideoSection language={language} />
      <Schedule language={language} />
      <Album language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App
