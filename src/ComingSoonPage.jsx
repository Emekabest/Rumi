import './ComingSoonPage.css'

export default function ComingSoonPage({
  badge,
  title,
  subtitle,
  message,
  highlights = [],
  primaryActionLabel,
  primaryActionOnClick,
  secondaryActionLabel,
  secondaryActionOnClick,
}) {
  return (
    <div className="coming-soon-page">
      <section className="coming-soon-hero">
        <div className="coming-soon-hero-inner">
          <span className="coming-soon-badge">{badge}</span>
          <h1 className="coming-soon-title">{title}</h1>
          <p className="coming-soon-subtitle">{subtitle}</p>
          <p className="coming-soon-message">{message}</p>

          <div className="coming-soon-actions">
            <button type="button" className="coming-soon-primary" onClick={primaryActionOnClick}>
              {primaryActionLabel}
            </button>
            <button type="button" className="coming-soon-secondary" onClick={secondaryActionOnClick}>
              {secondaryActionLabel}
            </button>
          </div>

          <div className="coming-soon-highlights" aria-label="Coming soon highlights">
            {highlights.map((item) => (
              <div key={item.title} className="coming-soon-card">
                <span className="coming-soon-card-title">{item.title}</span>
                <p className="coming-soon-card-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}