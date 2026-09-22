import { useState } from 'react'
import contactImg from './assets/contact.jpg'
import './ContactPage.css'

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-container">
          <span className="contact-badge">Get In Touch</span>
          <h1 className="contact-hero-title">Let’s Talk About Your Project.</h1>
          <p className="contact-hero-subtitle">
            Family-owned and proudly serving Chicago and surrounding suburbs. Reach out today to start planning your renovation or restoration.
          </p>

          <div className="contact-hero-pills">
            <a href="tel:3129374080" className="contact-hero-pill">
              <span className="contact-pill-icon" aria-hidden="true">📞</span>
              <span>Call or Text: 312.937.4080</span>
            </a>
            <a href="mailto:ruben@rumiconstructiongroup.com" className="contact-hero-pill">
              <span className="contact-pill-icon" aria-hidden="true">✉️</span>
              <span>ruben@rumiconstructiongroup.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Info Card / Visual */}
          <div className="contact-info-card">
            <div className="contact-image-wrapper">
              <img
                src={contactImg}
                alt="Ruben on site - RUMi Construction Group"
                className="contact-image"
              />
              <div className="contact-image-badge">
                <span className="contact-badge-title">Family Owned</span>
                <span className="contact-badge-subtitle">Proudly Serving Chicago &amp; Surrounding Suburbs</span>
              </div>
            </div>

            <div className="contact-details-box">
              <h3 className="contact-details-heading">Direct Contact</h3>
              <p className="contact-details-intro">
                Have an urgent inquiry or ready to discuss your plans? Connect directly with Ruben and our leadership team.
              </p>

              <div className="contact-methods-list">
                <div className="contact-method-item">
                  <span className="contact-method-label">Call or Text</span>
                  <a href="tel:3129374080" className="contact-method-val">
                    312.937.4080
                  </a>
                </div>

                <div className="contact-method-item">
                  <span className="contact-method-label">Email Us</span>
                  <a href="mailto:ruben@rumiconstructiongroup.com" className="contact-method-val">
                    ruben@rumiconstructiongroup.com
                  </a>
                </div>

                <div className="contact-method-item">
                  <span className="contact-method-label">Service Area</span>
                  <span className="contact-method-val static-val">
                    Chicago &amp; Surrounding Suburbs
                  </span>
                </div>
              </div>

              <div className="contact-book-action">
                <a
                  href="https://rumiconstructiongroup.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-book-btn"
                >
                  Request a Free Quote →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <span className="contact-form-eyebrow">Send a Message</span>
              <h2 className="contact-form-title">Start the Conversation</h2>
              <p className="contact-form-desc">
                Fill out the required information below and our team will get in touch with you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-card">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out. We have received your inquiry and will be in touch with you shortly.
                </p>
                <button
                  type="button"
                  className="contact-reset-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ firstName: '', lastName: '', email: '', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-first-name">
                      First Name <span className="contact-req">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-first-name"
                      name="firstName"
                      required
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-last-name">
                      Last Name <span className="contact-req">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-last-name"
                      name="lastName"
                      required
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email <span className="contact-req">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Message <span className="contact-req">(required)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project, timeline, or scope..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-send-btn">
                  SEND
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Return Banner */}
      <section className="contact-bottom-banner">
        <div className="contact-bottom-container">
          <h2 className="contact-bottom-title">Built with Experience. Driven by Family.</h2>
          <p className="contact-bottom-desc">
            We look forward to collaborating with you and delivering quality results built to last.
          </p>
          <div className="contact-bottom-actions">
            <a
              href="https://rumiconstructiongroup.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-book-btn"
            >
              Request a Free Quote →
            </a>
            <button
              type="button"
              className="contact-outline-btn"
              onClick={onNavigateHome}
            >
              ← Back to Main Home
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
