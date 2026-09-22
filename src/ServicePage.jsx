import React from 'react'
import rumi1Img from './assets/rumi-1.webp'
import rumi6Img from './assets/rumi-6.webp'
import kitchenImg from './assets/kitchen.png'
import dinningImg from './assets/dinning.png'
import './ServicePage.css'

export default function ServicePage({ onNavigateHome, onRequestConsultation, onPreviewImage }) {
  return (
    <div className="service-page">
      {/* Service Hero */}
      <section
        className="service-hero"
        style={{ backgroundImage: `url(${rumi1Img})` }}
      >
        <div className="service-hero-overlay" />
        <div className="service-hero-container">
          <span className="service-badge">Craftsmanship &amp; Remodeling</span>
          <h1 className="service-hero-title">Spaces Built Around You.</h1>
          <p className="service-hero-subtitle">
            From kitchens and bathrooms to complete renovations and smaller refreshers, we bring experience, craftsmanship, and attention to detail to every project, large or small.
          </p>
          <div className="service-hero-actions">
            <a
              href="https://rumiconstructiongroup.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="service-cta-btn"
            >
              Request a Free Consultation →
            </a>
            <a href="#bathroom-renovations" className="service-secondary-btn">
              Explore Bathroom Renovations ↓
            </a>
          </div>
        </div>
      </section>

      {/* Featured Showcase Section */}
      <section className="service-showcase-section">
        <div className="service-showcase-container">
          <div className="service-showcase-header">
            <span className="service-eyebrow">Our Philosophy</span>
            <h2 className="service-showcase-title">Built with Purpose, Finished with Care</h2>
            <p className="service-showcase-desc">
              Every home and commercial space has unique demands. We manage the entire build lifecycle with hands-on oversight, keeping timelines tight and quality uncompromising.
            </p>
          </div>

          <div className="service-gallery-grid">
            <div
              className="service-gallery-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: rumi1Img,
                  alt: 'Custom living and kitchen renovation by RUMi Construction Group',
                  tag: 'Complete Living Spaces',
                  title: 'Living & Open Space Remodels',
                  description:
                    'Modernized open-concept floorplans with custom carpentry, updated flooring, and architectural detailing.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: rumi1Img,
                    alt: 'Custom living and kitchen renovation by RUMi Construction Group',
                    tag: 'Complete Living Spaces',
                    title: 'Living & Open Space Remodels',
                    description:
                      'Modernized open-concept floorplans with custom carpentry, updated flooring, and architectural detailing.',
                  })
                }
              }}
            >
              <div className="service-gallery-image-wrap">
                <img
                  src={rumi1Img}
                  alt="Custom living and kitchen renovation by RUMi Construction Group"
                  className="service-gallery-img"
                />
                <span className="service-gallery-badge">Complete Living Spaces</span>
              </div>
              <div className="service-gallery-info">
                <h3>Living &amp; Open Space Remodels</h3>
                <p>Modernized open-concept floorplans with custom carpentry, updated flooring, and architectural detailing.</p>
              </div>
            </div>

            <div
              className="service-gallery-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: rumi6Img,
                  alt: 'Modern bathroom renovation with sleek vanity and custom finishes',
                  tag: 'Bathrooms & Finishes',
                  title: 'Refined Bathroom Remodeling',
                  description:
                    'Thoughtful layouts, premium tile and plumbing fixtures, and custom vanities built for daily comfort.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: rumi6Img,
                    alt: 'Modern bathroom renovation with sleek vanity and custom finishes',
                    tag: 'Bathrooms & Finishes',
                    title: 'Refined Bathroom Remodeling',
                    description:
                      'Thoughtful layouts, premium tile and plumbing fixtures, and custom vanities built for daily comfort.',
                  })
                }
              }}
            >
              <div className="service-gallery-image-wrap">
                <img
                  src={rumi6Img}
                  alt="Modern bathroom renovation with sleek vanity and custom finishes"
                  className="service-gallery-img"
                />
                <span className="service-gallery-badge">Bathrooms &amp; Finishes</span>
              </div>
              <div className="service-gallery-info">
                <h3>Refined Bathroom Remodeling</h3>
                <p>Thoughtful layouts, premium tile and plumbing fixtures, and custom vanities built for daily comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Renovations Section */}
      <section className="service-bathroom-section" id="bathroom-renovations">
        <div className="service-bathroom-container">
          <div className="service-bathroom-content">
            <span className="service-eyebrow">Signature Service</span>
            <h2 className="service-bathroom-title">Bathroom Renovations.</h2>
            <blockquote className="service-bathroom-quote">
              “From outdated to refreshed, we transform bathrooms with thoughtful layouts, quality finishers, and attention to every detail.”
            </blockquote>
            <p className="service-bathroom-paragraph">
              Whether you are upgrading a primary suite, restoring a multi-unit property bath, or performing a clean aesthetic refresh, our team handles every aspect from framing and plumbing to waterproofing, tile work, vanity installation, and final clean.
            </p>

            <ul className="service-features-list">
              <li>
                <span className="service-check-icon">✓</span>
                <span><strong>Custom Layouts:</strong> Optimized space planning to maximize comfort, storage, and natural light.</span>
              </li>
              <li>
                <span className="service-check-icon">✓</span>
                <span><strong>Quality Finishers:</strong> Tile, plumbing hardware, lighting, and vanities selected and installed with precision.</span>
              </li>
              <li>
                <span className="service-check-icon">✓</span>
                <span><strong>Turnkey Coordination:</strong> Complete trade management from demolition and plumbing to final fixtures.</span>
              </li>
            </ul>

            <div className="service-bathroom-action">
              <a
                href="https://rumiconstructiongroup.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="service-cta-btn"
              >
                Request a Free Consultation →
              </a>
            </div>
          </div>

          <div className="service-bathroom-visual">
            <div
              className="service-bathroom-image-frame image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: rumi6Img,
                  alt: 'Bathroom renovation project by RUMi',
                  tag: 'Signature Service',
                  title: 'Bathroom Renovations',
                  description:
                    'Thoughtful layouts, precision tile, and modern fixtures installed with meticulous craftsmanship.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: rumi6Img,
                    alt: 'Bathroom renovation project by RUMi',
                    tag: 'Signature Service',
                    title: 'Bathroom Renovations',
                    description:
                      'Thoughtful layouts, precision tile, and modern fixtures installed with meticulous craftsmanship.',
                  })
                }
              }}
            >
              <img
                src={rumi6Img}
                alt="Bathroom renovation project by RUMi"
                className="service-bathroom-img"
              />
              <div className="service-visual-overlay">
                <span className="service-visual-tag">Precision Tile &amp; Modern Fixtures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Capabilities Grid */}
      <section className="service-capabilities-section">
        <div className="service-capabilities-container">
          <div className="service-capabilities-header">
            <span className="service-eyebrow">Comprehensive Capabilities</span>
            <h2 className="service-capabilities-title">What We Build &amp; Restore</h2>
            <p className="service-capabilities-subtitle">
              From individual rooms to full properties, we deliver dependable construction with family-owned care.
            </p>
          </div>

          <div className="service-capabilities-grid">
            <div
              className="service-capability-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: kitchenImg,
                  alt: 'Kitchen remodel by RUMi',
                  tag: 'Capabilities',
                  title: 'Kitchen Remodels',
                  description:
                    'Cabinetry, stone countertops, custom islands, and modern layouts designed for cooking and entertaining.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: kitchenImg,
                    alt: 'Kitchen remodel by RUMi',
                    tag: 'Capabilities',
                    title: 'Kitchen Remodels',
                    description:
                      'Cabinetry, stone countertops, custom islands, and modern layouts designed for cooking and entertaining.',
                  })
                }
              }}
            >
              <div className="service-cap-img-wrap">
                <img src={kitchenImg} alt="Kitchen build" className="service-cap-img" />
              </div>
              <div className="service-cap-body">
                <h3>Kitchen Remodels</h3>
                <p>Cabinetry, stone countertops, custom islands, and modern layouts designed for cooking and entertaining.</p>
              </div>
            </div>

            <div
              className="service-capability-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: rumi6Img,
                  alt: 'Bathroom transformation by RUMi',
                  tag: 'Capabilities',
                  title: 'Bathroom Transformations',
                  description:
                    'Full tear-outs, walk-in showers, high-end tiling, and energy-efficient fixtures with durable waterproofing.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: rumi6Img,
                    alt: 'Bathroom transformation by RUMi',
                    tag: 'Capabilities',
                    title: 'Bathroom Transformations',
                    description:
                      'Full tear-outs, walk-in showers, high-end tiling, and energy-efficient fixtures with durable waterproofing.',
                  })
                }
              }}
            >
              <div className="service-cap-img-wrap">
                <img src={rumi6Img} alt="Bathroom renovation" className="service-cap-img" />
              </div>
              <div className="service-cap-body">
                <h3>Bathroom Transformations</h3>
                <p>Full tear-outs, walk-in showers, high-end tiling, and energy-efficient fixtures with durable waterproofing.</p>
              </div>
            </div>

            <div
              className="service-capability-card image-clickable"
              role="button"
              tabIndex={0}
              onClick={() =>
                onPreviewImage?.({
                  src: dinningImg,
                  alt: 'Complete home renovation by RUMi',
                  tag: 'Capabilities',
                  title: 'Complete Home Renovations',
                  description:
                    'Whole-home transformations coordinating framing, drywall, electrical, plumbing, and fine finishes.',
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onPreviewImage?.({
                    src: dinningImg,
                    alt: 'Complete home renovation by RUMi',
                    tag: 'Capabilities',
                    title: 'Complete Home Renovations',
                    description:
                      'Whole-home transformations coordinating framing, drywall, electrical, plumbing, and fine finishes.',
                  })
                }
              }}
            >
              <div className="service-cap-img-wrap">
                <img src={dinningImg} alt="Complete renovation and carpentry" className="service-cap-img" />
              </div>
              <div className="service-cap-body">
                <h3>Complete Home Renovations</h3>
                <p>Whole-home transformations coordinating framing, drywall, electrical, plumbing, and fine finishes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="service-bottom-banner">
        <div className="service-bottom-container">
          <h2 className="service-bottom-title">Let's Build Spaces Around You.</h2>
          <p className="service-bottom-desc">
            Connect with our team to initiate a comprehensive consultation aligned with your schedule, budget, and design vision.
          </p>
          <div className="service-bottom-actions">
            <a
              href="https://rumiconstructiongroup.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="service-cta-btn"
            >
              Request a Free Consultation →
            </a>
            <button
              type="button"
              className="service-outline-btn"
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
