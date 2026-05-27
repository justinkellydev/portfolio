import { useState } from 'react'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('justinkellydev@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{
      padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 6rem)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <FadeIn>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#a3e635', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          04 / Contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: '#fafafa', margin: '0 0 3rem', fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Let's Talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{ maxWidth: '560px' }}>
          <p style={{ fontSize: '14px', color: '#737373', lineHeight: 1.8, marginBottom: '2rem' }}>
            Open to interesting problems, freelance work, and full-time roles.
          </p>
          <div
            onClick={handleCopy}
            style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '1.25rem 1.5rem', marginBottom: '2rem', cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(163,230,53,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
          >
            <span style={{ fontSize: '16px', color: '#e5e5e5', flex: 1, fontFamily: 'inherit' }}>
              justinkellydev@gmail.com
            </span>
            <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: copied ? '#a3e635' : '#525252', transition: 'color 0.3s' }}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['GitHub', 'https://github.com/justinkellydev'], ['LinkedIn', 'https://linkedin.com/in/justinkellydev'], ['Email', 'mailto:justinkellydev@gmail.com']].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#737373', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#a3e635'}
                onMouseLeave={e => e.target.style.color = '#737373'}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
