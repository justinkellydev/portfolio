import FadeIn from '../components/FadeIn'
import { STACK } from '../data'

export default function Stack() {
  return (
    <section id="stack" style={{
      padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 6rem)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <FadeIn>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#a3e635', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          02 / Tools
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: '#fafafa', margin: '0 0 3rem', fontFamily: "'DM Serif Display', Georgia, serif" }}>
          My Stack
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px', background: 'rgba(255,255,255,0.06)',
        }}>
          {STACK.map(group => (
            <div key={group.category} style={{ background: '#0d0d0d', padding: '2rem' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#525252', marginBottom: '1.25rem' }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {group.items.map(item => (
                  <span key={item} style={{ fontSize: '14px', color: '#d4d4d4', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#a3e635', flexShrink: 0 }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
