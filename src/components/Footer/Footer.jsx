import './Footer.css'

const Footer = ({ language }) => {
  const content = {
    en: {
      thankYou: 'Thank You',
      message: "We can't wait to celebrate with you!",
      contact: 'For any questions, please contact:',
      madeWith: 'Made with love',
      rights: '2025 Sean & Ha. All rights reserved.',
      email: 'sungtaowu@gmail.com'
    },
    vi: {
      thankYou: 'Cảm ơn',
      message: 'Chúng tôi rất mong được ăn mừng cùng bạn!',
      contact: 'Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ:',
      madeWith: 'Được tạo với tình yêu',
      rights: '2025 Sean & Ha. Đã đăng ký bản quyền.',
      email: 'sungtaowu@gmail.com'
    },
    'zh-TW': {
      thankYou: '感謝您',
      message: '期待與您一同見證與慶祝！',
      contact: '如有任何問題，請聯絡：',
      madeWith: '以愛製作',
      rights: '2025 Sean & Ha. 版權所有。',
      email: 'sungtaowu@gmail.com'
    },
    ja: {
      thankYou: 'ありがとうございます',
      message: '皆さまとお祝いできる日を楽しみにしています！',
      contact: 'ご不明点があればこちらへ：',
      madeWith: '愛を込めて制作',
      rights: '2025 Sean & Ha. All rights reserved.',
      email: 'sungtaowu@gmail.com'
    }
  }

  const t = content[language] || content['zh-TW']

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h2 className="footer-title">{t.thankYou}</h2>
        <p className="footer-message">{t.message}</p>

        <div className="footer-contact">
          <p>{t.contact}</p>
          <div className="contact-info">
            <a href={`mailto:${t.email}`}>{t.email}</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Instagram">IG</a>
          <a href="#" className="social-link" aria-label="Facebook">FB</a>
          <a href={`mailto:${t.email}`} className="social-link" aria-label="Email">Mail</a>
        </div>

        <div className="footer-bottom">
          <p>{t.madeWith} ❤</p>
          <p className="copyright">{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

