import { useState, useEffect } from 'react'
import logoImage from './assets/logo-image.png'
import logoText from './assets/logo-text.png'
import toiletImage from './assets/toilet.jpg'
import workersBackgroundImage from './assets/workers-background.jpg'
import hero3Image from './assets/hero-3.jpg'
import dinningImage from './assets/dinning.png'
import kitchenImage from './assets/kitchen.png'
import './App.css'

const heroSlides = [
  {
    id: 1,
    src: toiletImage,
    alt: 'Professional toilet restoration by Rumi',
    title: 'BUILT TO LAST.',
    description: 'From vision to finished structure, we deliver construction built with purpose, precision, and lasting value.',
    ctaText: 'Explore Our Work →',
    ctaHref: '#services',
  },
  {
    id: 2,
    src: workersBackgroundImage,
    alt: 'Rumi Restoration workers at work',
    title: 'BUILT BY PEOPLE WHO KNOW HOW.',
    description: 'Great projects start with great collaboration. Our team brings experience, precision, and purpose to every stage of the build.',
    ctaText: 'Meet Our Team →',
    ctaHref: '#about',
  },
  {
    id: 3,
    src: hero3Image,
    alt: 'Stunning completed restoration project',
    title: 'TURNING VISION INTO REALITY.',
    description: 'From the ground up, we create spaces designed to serve communities, stand the test of time, and become part of something bigger.',
    ctaText: 'Start a Project →',
    ctaHref: '#consultation',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 11000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Rumi Restoration', href: '#rumi-restoration' },
    { label: 'About', href: '#about' },
  ]

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Rumi Restoration home">
          <img className="brand-image" src={logoImage} alt="" aria-hidden="true" />
          <img className="brand-text-logo" src={logoText} alt="Rumi Restoration" />
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-login">
              <a href="#login" onClick={closeMenu}>
                Login
              </a>
            </li>
            <li className="nav-cta">
              <a href="#consultation" onClick={closeMenu}>
                Request a Consultation
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" aria-label="Hero Image Slider">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
              aria-hidden={index !== currentSlide}
            >
              <img src={slide.src} alt={slide.alt} className="hero-image" />
              <div className="hero-overlay" />
              <div className="hero-content-wrapper">
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <a href={slide.ctaHref} className="hero-cta-button" onClick={closeMenu}>
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-dots" role="tablist" aria-label="Slide navigation">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot ${index === currentSlide ? 'is-active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </section>

      <section className="about-intro-section" id="about" aria-label="About Rumi Construction Group">
        <div className="about-intro-container">
          <span className="about-intro-eyebrow">Our Story</span>
          <h2 className="about-intro-title">
            BUILT ON EXPERIENCE. <span className="text-highlight">DRIVEN BY FAMILY.</span>
          </h2>
          <p className="about-intro-text">
            RUMi Construction Group was built by Ruben and Michelle Aviles with a simple vision: bring experience, integrity, and personal attention to every project.
          </p>
        </div>
      </section>


      <section className="stats-section" aria-label="Company Statistics">
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">300<span className="stat-accent">+</span></span>
            <span className="stat-label">Units</span>
            <p className="stat-subtext">Restored and delivered with excellence</p>
          </div>

          <div className="stat-divider" aria-hidden="true" />

          <div className="stat-card">
            <span className="stat-number">X<span className="stat-accent">+</span></span>
            <span className="stat-label">Years</span>
            <p className="stat-subtext">Industry experience and trusted service</p>
          </div>

          <div className="stat-divider" aria-hidden="true" />

          <div className="stat-card">
            <span className="stat-number">4</span>
            <span className="stat-label">States</span>
            <p className="stat-subtext">IOWA • WEST VIRGINIA • INDIANA • KENTUCKY</p>
          </div>
        </div>
      </section>


      <section className="featured-projects-section" id="services" aria-label="Featured Projects">
        <div className="featured-projects-container">
          <div className="featured-header">
            <span className="featured-eyebrow">Portfolio</span>
            <h2 className="featured-title">Featured Projects</h2>
          </div>

          <div className="featured-gallery">
            <div className="featured-gallery-top">
              <div className="featured-card featured-card-large">
                <div className="featured-image-wrapper">
                  <img src={dinningImage} alt="Dining space craftsmanship" className="featured-image" />
                </div>
              </div>
            </div>

            <div className="featured-gallery-bottom">
              <div className="featured-card">
                <div className="featured-image-wrapper">
                  <img src={toiletImage} alt="Bathroom and toilet renovation" className="featured-image" />
                </div>
              </div>
              <div className="featured-card">
                <div className="featured-image-wrapper">
                  <img src={kitchenImage} alt="Modern kitchen build" className="featured-image" />
                </div>
              </div>
            </div>
          </div>

          <div className="featured-captions">
            <div className="featured-caption-item">
              <span className="featured-caption-number">01</span>
              <span className="featured-caption-divider">—</span>
              <span className="featured-caption-text">DETAIL & CRAFTSMANSHIP</span>
            </div>
            <div className="featured-caption-item">
              <span className="featured-caption-number">02</span>
              <span className="featured-caption-divider">—</span>
              <span className="featured-caption-text">FORM & FUNCTION</span>
            </div>
            <div className="featured-caption-item">
              <span className="featured-caption-number">03</span>
              <span className="featured-caption-divider">—</span>
              <span className="featured-caption-text">QUALITY IN EVERY SPACE</span>
            </div>
          </div>

          <div className="featured-cta-container">
            <a href="#services" className="featured-cta-button" onClick={closeMenu}>
              Explore Our Work →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
