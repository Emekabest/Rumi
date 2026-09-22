import { useState } from 'react'
import logoImage from './assets/logo-image.png'
import logoText from './assets/logo-text.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    </div>
  )
}

export default App
