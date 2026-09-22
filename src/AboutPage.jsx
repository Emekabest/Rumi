import { useState } from 'react'
import dinningImage from './assets/dinning.png'
import kitchenImage from './assets/kitchen.png'
import ourStoryImage from './assets/our-story.jpg'
import './AboutPage.css'

export default function AboutPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    signup: false,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="about-page">
      {/* Story Hero */}
      <section className="ab-hero" style={{ backgroundImage: `url(${ourStoryImage})` }}>
        <div className="ab-hero-overlay" />
        <div className="ab-hero-container">
          <span className="ab-badge">Our Story</span>
          <h1 className="ab-hero-title">
            Built on Experience. <span className="ab-highlight">Driven by Family.</span>
          </h1>
          <blockquote className="ab-hero-quote">
            “RUMi Construction Group was built by Ruben and Michelle Aviles with a simple vision: bring experience, integrity, and personal attention to every project.”
          </blockquote>
        </div>
      </section>

      {/* Founder Story */}
      <section className="ab-story-section">
        <div className="ab-story-container">
          <div className="ab-story-content">
            <span className="ab-story-eyebrow">The Journey</span>
            <h2 className="ab-story-title">From the Ground Up.</h2>
            <p className="ab-story-paragraph">
              Ruben's construction journey began in Chicago, where his hands-on experience eventually opened the door to work directly with a multifamily developer on large-scale projects across the Midwest.
            </p>
            <p className="ab-story-paragraph">
              Since then, he has helped oversee ground-up developments of <strong>300+ units</strong> in Iowa, West Virginia, Indiana, and Kentucky — coordinating trades from site work and masonry to exteriors, drywall, carpentry, finishes, and final turnover.
            </p>
            <p className="ab-story-paragraph">
              Today, that experience comes home to RUMi Construction Group — bringing large-scale construction knowledge and attention to detail to every renovation, remodel, and refresher.
            </p>

            <div className="ab-family-badge">
              <span className="ab-family-title">Family Owned</span>
              <span className="ab-family-subtitle">Proudly Serving Chicago &amp; Surrounding Suburbs</span>
            </div>
          </div>

          <div className="ab-story-gallery">
            <div className="ab-image-frame ab-image-main">
              <img src={dinningImage} alt="Dining space craftsmanship" className="ab-img" />
            </div>
            <div className="ab-image-frame ab-image-secondary">
              <img src={kitchenImage} alt="Modern kitchen build" className="ab-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="ab-form-section" id="consultation-form">
        <div className="ab-form-container">
          <div className="ab-form-header">
            <span className="ab-form-eyebrow">Get Started</span>
            <h2 className="ab-form-title">Request a Detailed Project Consultation</h2>
            <p className="ab-form-subtitle">
              Submit the brief inquiry form to initiate a comprehensive discussion regarding customized building solutions aligned with your schedule and performance goals.
            </p>
          </div>

          {submitted ? (
            <div className="ab-form-success">
              Thank you! Your consultation request has been received. Our team will reach out shortly.
            </div>
          ) : (
            <form className="ab-form" onSubmit={handleSubmit}>
              <div className="ab-form-row">
                <div className="ab-form-field">
                  <label htmlFor="firstName">First Name<span className="ab-required">(required)</span></label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="ab-form-field">
                  <label htmlFor="lastName">Last Name<span className="ab-required">(required)</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ab-form-field">
                <label htmlFor="email">Email<span className="ab-required">(required)</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <label className="ab-checkbox-field">
                <input
                  type="checkbox"
                  name="signup"
                  checked={formData.signup}
                  onChange={handleChange}
                />
                Sign up for news and updates
              </label>

              <div className="ab-form-field">
                <label htmlFor="message">Message<span className="ab-required">(required)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="ab-submit-btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="ab-contact-banner">
        <div className="ab-contact-container">
          <h2 className="ab-contact-title">Let's Talk About Your Project.</h2>
          <div className="ab-contact-details">
            <a href="tel:3129374080" className="ab-contact-link">
              Call or Text: 312.937.4080
            </a>
            <span className="ab-contact-sep" aria-hidden="true">•</span>
            <a href="mailto:ruben@rumiconstructiongroup.com" className="ab-contact-link">
              ruben@rumiconstructiongroup.com
            </a>
          </div>
          <div className="ab-contact-actions">
            <a
              href="https://rumiconstructiongroup.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="ab-quote-btn"
            >
              Request a Free Quote
            </a>
            <button type="button" className="ab-outline-btn" onClick={onNavigateHome}>
              ← Back to Main Home
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
