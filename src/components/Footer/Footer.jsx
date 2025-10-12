import './Footer.css'

const Footer = ({ language }) => {
  const content = {
    en: {
      thankYou: 'Thank You',
      message: 'We can\'t wait to celebrate with you!',
      contact: 'For any questions, please contact:',
      madeWith: 'Made with love',
      rights: '2025 Sean & Ha. All rights reserved.'
    },
    vi: {
      thankYou: 'Cảm Ơn',
      message: 'Chúng tôi rất mong được ăn mừng cùng bạn!',
      contact: 'Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ:',
      madeWith: 'Được tạo với tình yêu',
      rights: '2025 Sơn & Hà. Đã đăng ký bản quyền.'
    }
  }

  const t = content[language]

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h2 className="footer-title">{t.thankYou}</h2>
        <p className="footer-message">{t.message}</p>

        <div className="footer-contact">
          <p>{t.contact}</p>
          <div className="contact-info">
            <a href="mailto:sean.ha@wedding.com">sean.ha@wedding.com</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Instagram">📷</a>
          <a href="#" className="social-link" aria-label="Facebook">👍</a>
          <a href="#" className="social-link" aria-label="Email">✉️</a>
        </div>

        <div className="footer-bottom">
          <p>{t.madeWith} ❤️</p>
          <p className="copyright">{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
