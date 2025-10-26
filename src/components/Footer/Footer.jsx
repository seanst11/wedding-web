import './Footer.css'
import { useCsvI18n } from '../../i18n/csvI18n'

const Footer = ({ language }) => {
  const { t } = useCsvI18n()
  const FILE = 'src/components/Footer/Footer.jsx'
  const data = {
    thankYou: t(FILE, 'thankYou', language, 'Thank You'),
    message: t(
      FILE,
      'message',
      language,
      "We can't wait to celebrate with you!"
    ),
    contact: t(FILE, 'contact', language, 'For any questions, please contact:'),
    madeWith: t(FILE, 'madeWith', language, 'Made with love'),
    rights: t(FILE, 'rights', language, '2025 Sean & Ha. All rights reserved.'),
    email: t(FILE, 'email', language, 'sungtaowu@gmail.com')
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h2 className="footer-title">{data.thankYou}</h2>
        <p className="footer-message">{data.message}</p>

        <div className="footer-contact">
          <p>{data.contact}</p>
          <div className="contact-info">
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link" aria-label="Instagram">IG</a>
          <a href="#" className="social-link" aria-label="Facebook">FB</a>
          <a href={`mailto:${data.email}`} className="social-link" aria-label="Email">Mail</a>
        </div>

        <div className="footer-bottom">
          <p>{data.madeWith} ❤️</p>
          <p className="copyright">{data.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

