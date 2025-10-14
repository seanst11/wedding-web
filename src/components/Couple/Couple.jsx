import './Couple.css'
import groomImg from '../../assets/profile/新郎.jpeg'
import brideImg from '../../assets/profile/新娘.jpeg'

const Couple = ({ language }) => {
  const content = {
    en: {
      title: 'Us',
      groomName: 'Sean',
      brideName: 'Ha',
      groomNote: "Cat's dad",
      brideNote: "Cat's mom"
    },
    'zh-TW': {
      title: '我們',
      groomName: '新郎',
      brideName: '新娘',
      groomNote: '貓貓的把拔',
      brideNote: '貓貓的馬麻'
    },
    vi: {
      title: 'Chúng tôi',
      groomName: 'Sơn',
      brideName: 'Hà',
      groomNote: 'Bố của mèo',
      brideNote: 'Mẹ của mèo'
    },
    ja: {
      title: '私たち',
      groomName: '新郎',
      brideName: '新婦',
      groomNote: 'ネコのパパ',
      brideNote: 'ネコのママ'
    }
  }

  const t = content[language] || content['zh-TW']

  return (
    // Not a <section> to keep Navigation anchors aligned
    <div className="couple" aria-label={t.title}>
      <h2 className="section-title" style={{ color: 'var(--white)' }}>{t.title}</h2>
      <div className="couple-grid">
        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={groomImg} alt={t.groomName} />
          </div>
          <div className="card">
            <h3 className="name">{t.groomName}</h3>
            <p className="note">{t.groomNote}</p>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={brideImg} alt={t.brideName} />
          </div>
          <div className="card">
            <h3 className="name">{t.brideName}</h3>
            <p className="note">{t.brideNote}</p>
          </div>
        </div>
      </div>
      <div className="heart-decor" aria-hidden="true">❤︎</div>
    </div>
  )
}

export default Couple

