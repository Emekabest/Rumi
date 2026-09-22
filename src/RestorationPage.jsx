import React from 'react'
import atticImg1 from './assets/attic-restoration.jpg'
import atticImg2 from './assets/attic-restoration-2.jpg'
import waterImg1 from './assets/water-immigration.jpg'
import waterImg2 from './assets/watter-immigration-2.jpg'
import './RestorationPage.css'

export default function RestorationPage({ onNavigateHome, onRequestConsultation }) {
  return (
    <div className="restoration-page">
      {/* Hero / Intro Header */}
      <section className="resto-hero">
        <div className="resto-hero-container">
          <div className="resto-badge">
            <span className="resto-badge-dot" />
            Specialized Property Mitigation & Restoration
          </div>

          <h1 className="resto-hero-title">
            Property Mitigation Water &amp; Fire Damage Recovery
          </h1>

          <p className="resto-hero-tagline">
            Fast Response. Clean Recovery. Trusted Restoration.
          </p>

          <p className="resto-hero-description">
            Special Cleanup • Hoarding &amp; Odor Removal • Drying • Remediation &amp; Reconstruction — One team from emergency response through recovery, full turnkey in-house.
          </p>

          {/* Contact / Leadership Card */}
          <div className="resto-contact-card">
            <div className="resto-contact-leader">
              <span className="resto-contact-name">Jordan Aviles</span>
              <span className="resto-contact-divider">|</span>
              <span className="resto-contact-role">President</span>
            </div>

            <div className="resto-contact-company">
              RUMi Construction Group LLC.
            </div>

            <div className="resto-contact-channels">
              <a href="tel:3127999202" className="resto-channel-item">
                <span className="resto-channel-icon" aria-hidden="true">📞</span>
                <span>312.799.9202</span>
              </a>
              <span className="resto-channel-dot">•</span>
              <a href="mailto:Servic@rumiconstructiongroup.com" className="resto-channel-item">
                <span className="resto-channel-icon" aria-hidden="true">✉️</span>
                <span>Servic@rumiconstructiongroup.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Attic Restoration */}
      <section className="resto-service-section">
        <div className="resto-service-container">
          <div className="resto-service-content">
            <div className="resto-service-eyebrow">Attic Services</div>
            <h2 className="resto-service-title">A Cleaner, Safer Attic.</h2>
            <p className="resto-service-intro">
              We restore neglected attics by removing old insulation, cleaning the space, and addressing moisture, mold, and ventilation issues.
            </p>

            <div className="resto-pillars-grid">
              <div className="resto-pillar-card">
                <h3 className="resto-pillar-heading">
                  <span className="resto-pillar-icon">🛠️</span>
                  WHAT WE DO
                </h3>
                <ul className="resto-checklist">
                  <li>Insulation removal &amp; replacement</li>
                  <li>Attic cleaning &amp; sanitization</li>
                  <li>Mold &amp; mildew treatment</li>
                  <li>Air sealing</li>
                  <li>Moisture control</li>
                  <li>Ventilation improvements</li>
                </ul>
              </div>

              <div className="resto-pillar-card resto-pillar-card-highlight">
                <h3 className="resto-pillar-heading">
                  <span className="resto-pillar-icon">✨</span>
                  WHY IT MATTERS
                </h3>
                <p className="resto-pillar-text">
                  A properly restored attic can help improve your home's comfort, air quality, and energy efficiency while protecting the space from moisture and damage.
                </p>
                <div className="resto-motto-pill">
                  Protect. Restore. Improve.
                </div>
              </div>
            </div>

            <div className="resto-action-wrap">
              <button
                type="button"
                className="resto-cta-btn"
                onClick={onRequestConsultation}
              >
                Start Your Restoration →
              </button>
            </div>
          </div>

          <div className="resto-service-gallery">
            <div className="resto-image-frame resto-image-main">
              <img
                src={atticImg1}
                alt="Professional Attic Restoration"
                className="resto-img"
              />
              <span className="resto-img-caption">Inspection &amp; Sanitization</span>
            </div>
            <div className="resto-image-frame resto-image-secondary">
              <img
                src={atticImg2}
                alt="Clean and insulated attic space"
                className="resto-img"
              />
              <span className="resto-img-caption">Insulated &amp; Sealed Space</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Water Mitigation */}
      <section className="resto-service-section resto-service-alt">
        <div className="resto-service-container resto-service-reverse">
          <div className="resto-service-content">
            <div className="resto-service-eyebrow">Emergency Response</div>
            <span className="resto-category-tag">WATER MITIGATION</span>
            <h2 className="resto-service-title">Restore Your Home. Stop the Damage.</h2>
            <p className="resto-service-intro">
              Water damage can spread quickly. We help remove standing water, dry affected areas, and restore your space before further damage occurs.
            </p>

            <div className="resto-pillars-grid">
              <div className="resto-pillar-card">
                <h3 className="resto-pillar-heading">
                  <span className="resto-pillar-icon">💧</span>
                  WHAT WE DO
                </h3>
                <ul className="resto-checklist">
                  <li>Water extraction</li>
                  <li>Moisture detection</li>
                  <li>Structural drying</li>
                  <li>Dehumidification</li>
                  <li>Damaged material removal</li>
                  <li>Water damage cleanup</li>
                </ul>
              </div>

              <div className="resto-pillar-card resto-pillar-card-highlight">
                <h3 className="resto-pillar-heading">
                  <span className="resto-pillar-icon">🛡️</span>
                  WHY IT MATTERS
                </h3>
                <p className="resto-pillar-text">
                  Fast action can help prevent further damage, reduce moisture, and protect your home from ongoing issues.
                </p>
                <div className="resto-motto-pill">
                  Respond. Restore. Protect.
                </div>
              </div>
            </div>

            <div className="resto-action-wrap">
              <button
                type="button"
                className="resto-cta-btn"
                onClick={onRequestConsultation}
              >
                Start Your Restoration →
              </button>
            </div>
          </div>

          <div className="resto-service-gallery">
            <div className="resto-image-frame resto-image-main">
              <img
                src={waterImg1}
                alt="Water mitigation and containment"
                className="resto-img"
              />
              <span className="resto-img-caption">Extraction &amp; Moisture Control</span>
            </div>
            <div className="resto-image-frame resto-image-secondary">
              <img
                src={waterImg2}
                alt="Structural drying and restoration in progress"
                className="resto-img"
              />
              <span className="resto-img-caption">Structural Drying &amp; Recovery</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>

      {/* Back to Home / Consultation banner */}
      <section className="resto-bottom-banner">
        <div className="resto-bottom-container">
          <h2 className="resto-bottom-title">Need Immediate Restoration Services?</h2>
          <p className="resto-bottom-desc">
            Our turnkey emergency response team is ready to inspect, protect, and restore your property.
          </p>
          <div className="resto-bottom-actions">
            <button
              type="button"
              className="resto-cta-btn"
              onClick={onRequestConsultation}
            >
              Request a Consultation →
            </button>
            <button
              type="button"
              className="resto-outline-btn"
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
