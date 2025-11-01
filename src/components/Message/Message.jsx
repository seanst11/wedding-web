import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Message.css'
import { useCsvI18n } from '../../i18n/csvI18n'

const FILE = 'src/components/Message/Message.jsx'

const Message = ({ language }) => {
  const { t } = useCsvI18n()
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error', ''
  const [errorMessage, setErrorMessage] = useState('')

  const content = {
    title: t(FILE, 'title', language, 'Leave us a message'),
    subtitle: t(
      FILE,
      'subtitle',
      language,
      'We would love to hear from you! Share your blessings or ask us anything.'
    ),
    namePlaceholder: t(FILE, 'namePlaceholder', language, 'How should we call you?'),
    messageLabel: t(FILE, 'messageLabel', language, 'Your Message'),
    messagePlaceholder: t(
      FILE,
      'messagePlaceholder',
      language,
      'Share your thoughts, blessings, or questions...'
    ),
    sendButton: t(FILE, 'sendButton', language, 'Send Message'),
    sendingButton: t(FILE, 'sendingButton', language, 'Sending...'),
    successMessage: t(
      FILE,
      'successMessage',
      language,
      'Thank you! Your message has been sent successfully!'
    ),
    errorMessage: t(
      FILE,
      'errorMessage',
      language,
      'Oops! Something went wrong. Please try again or contact us directly.'
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage(
        language === 'zh-TW'
          ? '請填寫所有欄位'
          : 'Please fill in all fields'
      )
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS environment variables are not set')
        setStatus('error')
        setErrorMessage(
          language === 'zh-TW'
            ? 'Email 服務尚未設定，請直接聯絡我們'
            : 'Email service not configured. Please contact us directly.'
        )
        return
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        message: formData.message,
        to_name: 'Sean & Ha',
        reply_to: 'noreply@wedding.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      // Success
      setStatus('success')
      setFormData({ name: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('')
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMessage(content.errorMessage)
    }
  }

  return (
    <section className="message-section" id="message">
      <div className="message-container">
        <div className="message-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="message-subtitle">{content.subtitle}</p>
          <div className="message-decorations">
            <span className="decoration-icon">💌</span>
            <span className="decoration-icon">✨</span>
            <span className="decoration-icon">💕</span>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="message-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {content.namePlaceholder}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              className="form-input"
              disabled={status === 'sending'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              {content.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              className="form-textarea"
              rows="6"
              disabled={status === 'sending'}
            />
          </div>

          <button
            type="submit"
            className={`submit-button ${status === 'sending' ? 'sending' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? content.sendingButton : content.sendButton}
          </button>
        </form>

        {status === 'success' && (
          <div className="status-message success-message">
            <span className="status-icon">✓</span>
            {content.successMessage}
          </div>
        )}

        {status === 'error' && (
          <div className="status-message error-message">
            <span className="status-icon">✕</span>
            {errorMessage || content.errorMessage}
          </div>
        )}
      </div>
    </section>
  )
}

export default Message
