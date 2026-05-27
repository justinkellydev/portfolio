import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'

export default function Nav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 clamp(1.5rem, 5vw, 6rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px',
    }}>
      <span style={{
        fontSize: '14px', letterSpacing: '0.12em', color: '#a3e635',
        textTransform: 'uppercase', fontWeight: 500,
      }}>
        justinkelly.dev
      </span>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {NAV_LINKS.map(link => (
          <li
            key={link}
            onClick={() => onNav(link)}
            style={{
              fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', userSelect: 'none',
              color: active === link ? '#a3e635' : '#737373',
              borderBottom: active === link ? '1px solid #a3e635' : '1px solid transparent',
              paddingBottom: '2px', transition: 'color 0.2s',
            }}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  )
}
