import React from 'react'
import atticImg1 from './assets/attic-restoration.jpg'
import atticImg2 from './assets/attic-restoration-2.jpg'
import waterImg1 from './assets/water-immigration.jpg'
import waterImg2 from './assets/watter-immigration-2.jpg'
import floorImage from './assets/floor.jpg'
import bathroomImage from './assets/bathroom.jpg'
import dryingImage from './assets/drying.jpg'
import bathroom2Image from './assets/bathroom2.jpg'
import waterImBg from './assets/water-im-background.jpg'
import './RestorationPage.css'

export default function RestorationPage({ onNavigateHome, onRequestConsultation, onPreviewImage }) {
  return (
    <div className="restoration-page">
      {/* Hero / Intro Header */}
      <section
        className="resto-hero"
        style={{ backgroundImage: `url(${waterImBg})` }}
      >
        <div className="resto-hero-overlay" />
        <div className="resto-hero-container">
          <span className="resto-badge">
            Property Mitigation &amp; Restoration
          </span>

          <h1 className="resto-hero-title">
            Property Mitigation, Water &amp; Fire Damage Recovery
          </h1>

          <p className="resto-hero-tagline">
            Fast Response. Clean Recovery. Trusted Restoration.
          </p>

          <p className="resto-hero-description">
            Special cleanup, drying, odor removal, remediation, and reconstruction — one dedicated in-house team from emergency response to complete recovery.
          </p>

          {/* Clean Contact Bar */}
          <div className="resto-contact-bar">
            <span className="resto-contact-name">Jordan Aviles · President</span>
            <span className="resto-contact-sep" aria-hidden="true">•</span>
            <a href="tel:3127999202" className="resto-contact-link">
              312.799.9202
            </a>
            <span className="resto-contact-sep" aria-hidden="true">•</span>
            <a href="mailto:Servic@rumiconstructiongroup.com" className="resto-contact-link">
              Servic@rumiconstructiongroup.com
            </a>
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
            <div
              className="resto-image-frame resto-image-main image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: atticImg1,
                  alt: 'Professional Attic Restoration',
                  tag: 'Attic Services',
                  title: 'Inspection & Sanitization',
                  description:
                    'Detailed assessment, old insulation removal, and sanitization to eliminate contamination, pests, and moisture.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: atticImg1,
                    alt: 'Professional Attic Restoration',
                    tag: 'Attic Services',
                    title: 'Inspection & Sanitization',
                    description:
                      'Detailed assessment, old insulation removal, and sanitization to eliminate contamination, pests, and moisture.',
                  })
                }
              }}
            >
              <img
                src={atticImg1}
                alt="Professional Attic Restoration"
                className="resto-img"
              />
              <span className="resto-img-caption">Inspection &amp; Sanitization</span>
            </div>
            <div
              className="resto-image-frame resto-image-secondary image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: atticImg2,
                  alt: 'Clean and insulated attic space',
                  tag: 'Attic Services',
                  title: 'Insulated & Sealed Space',
                  description:
                    'Properly sealed and re-insulated attic structure designed to improve home comfort and prevent air leakage.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: atticImg2,
                    alt: 'Clean and insulated attic space',
                    tag: 'Attic Services',
                    title: 'Insulated & Sealed Space',
                    description:
                      'Properly sealed and re-insulated attic structure designed to improve home comfort and prevent air leakage.',
                  })
                }
              }}
            >
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
            <div
              className="resto-image-frame resto-image-main image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: waterImg1,
                  alt: 'Water mitigation and containment',
                  tag: 'Emergency Mitigation',
                  title: 'Extraction & Moisture Control',
                  description:
                    'Rapid water extraction, containment barriers, and precise moisture profiling to halt water migration immediately.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: waterImg1,
                    alt: 'Water mitigation and containment',
                    tag: 'Emergency Mitigation',
                    title: 'Extraction & Moisture Control',
                    description:
                      'Rapid water extraction, containment barriers, and precise moisture profiling to halt water migration immediately.',
                  })
                }
              }}
            >
              <img
                src={waterImg1}
                alt="Water mitigation and containment"
                className="resto-img"
              />
              <span className="resto-img-caption">Extraction &amp; Moisture Control</span>
            </div>
            <div
              className="resto-image-frame resto-image-secondary image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: waterImg2,
                  alt: 'Structural drying and restoration in progress',
                  tag: 'Emergency Mitigation',
                  title: 'Structural Drying & Recovery',
                  description:
                    'Deploying commercial air movers and dehumidifiers to thoroughly eliminate moisture trapped inside wall cavities and subflooring.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: waterImg2,
                    alt: 'Structural drying and restoration in progress',
                    tag: 'Emergency Mitigation',
                    title: 'Structural Drying & Recovery',
                    description:
                      'Deploying commercial air movers and dehumidifiers to thoroughly eliminate moisture trapped inside wall cavities and subflooring.',
                  })
                }
              }}
            >
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

<section className="process-section" id="restoration-process" aria-label="Our Restoration Process">
        <div className="process-container">
          <div className="process-header">
            <span className="process-eyebrow">How We Work</span>
            <h2 className="process-title">OUR RESTORATION PROCESS</h2>
            <p className="process-subtitle">
              A proven, step-by-step methodology built with precision and care to restore your property thoroughly.
            </p>
          </div>

          <div className="process-grid">
            <div
              className="process-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: floorImage,
                  alt: 'Containment and floor protection',
                  tag: 'Restoration Step 01',
                  title: '01 PROTECT',
                  description:
                    'We protect your home by establishing containment, covering floors, and sealing doorways.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: floorImage,
                    alt: 'Containment and floor protection',
                    tag: 'Restoration Step 01',
                    title: '01 PROTECT',
                    description:
                      'We protect your home by establishing containment, covering floors, and sealing doorways.',
                  })
                }
              }}
            >
              <div className="process-card-image-wrapper">
                <img src={floorImage} alt="Containment and floor protection" className="process-card-image" />
                <span className="process-step-badge">01</span>
              </div>
              <div className="process-card-body">
                <h3 className="process-step-title">PROTECT</h3>
                <p className="process-step-description">
                  We protect your home by establishing containment, covering floors, and sealing doorways.
                </p>
              </div>
            </div>

            <div
              className="process-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: bathroomImage,
                  alt: 'Demolition and removal of damaged materials',
                  tag: 'Restoration Step 02',
                  title: '02 REMOVE',
                  description:
                    'We remove water-damaged materials and safely demo affected areas.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: bathroomImage,
                    alt: 'Demolition and removal of damaged materials',
                    tag: 'Restoration Step 02',
                    title: '02 REMOVE',
                    description:
                      'We remove water-damaged materials and safely demo affected areas.',
                  })
                }
              }}
            >
              <div className="process-card-image-wrapper">
                <img src={bathroomImage} alt="Demolition and removal of damaged materials" className="process-card-image" />
                <span className="process-step-badge">02</span>
              </div>
              <div className="process-card-body">
                <h3 className="process-step-title">REMOVE</h3>
                <p className="process-step-description">
                  We remove water-damaged materials and safely demo affected areas.
                </p>
              </div>
            </div>

            <div
              className="process-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: dryingImage,
                  alt: 'Exposing framing and drying',
                  tag: 'Restoration Step 03',
                  title: '03 DRY',
                  description:
                    'We expose framing and affected areas to remove moisture and promote proper drying.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: dryingImage,
                    alt: 'Exposing framing and drying',
                    tag: 'Restoration Step 03',
                    title: '03 DRY',
                    description:
                      'We expose framing and affected areas to remove moisture and promote proper drying.',
                  })
                }
              }}
            >
              <div className="process-card-image-wrapper">
                <img src={dryingImage} alt="Exposing framing and drying" className="process-card-image" />
                <span className="process-step-badge">03</span>
              </div>
              <div className="process-card-body">
                <h3 className="process-step-title">DRY</h3>
                <p className="process-step-description">
                  We expose framing and affected areas to remove moisture and promote proper drying.
                </p>
              </div>
            </div>

            <div
              className="process-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: bathroom2Image,
                  alt: 'Restored space ready for repair',
                  tag: 'Restoration Step 04',
                  title: '04 RESTORE',
                  description:
                    'We prepare the space for repairs and restore your home the right way.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: bathroom2Image,
                    alt: 'Restored space ready for repair',
                    tag: 'Restoration Step 04',
                    title: '04 RESTORE',
                    description:
                      'We prepare the space for repairs and restore your home the right way.',
                  })
                }
              }}
            >
              <div className="process-card-image-wrapper">
                <img src={bathroom2Image} alt="Restored space ready for repair" className="process-card-image" />
                <span className="process-step-badge">04</span>
              </div>
              <div className="process-card-body">
                <h3 className="process-step-title">RESTORE</h3>
                <p className="process-step-description">
                  We prepare the space for repairs and restore your home the right way.
                </p>
              </div>
            </div>
          </div>
        </div>
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
