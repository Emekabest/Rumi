import { useEffect } from 'react'
import './ImageModal.css'

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="img-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={image.title || image.alt || 'Image preview'}
      onClick={onClose}
    >
      <div
        className="img-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="img-modal-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="img-modal-figure-wrapper">
          <img
            src={image.src}
            alt={image.alt || 'Preview image'}
            className="img-modal-image"
          />
        </div>

        {(image.title || image.description) && (
          <div className="img-modal-caption">
            {image.tag && <span className="img-modal-tag">{image.tag}</span>}
            {image.title && <h3 className="img-modal-title">{image.title}</h3>}
            {image.description && <p className="img-modal-desc">{image.description}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
