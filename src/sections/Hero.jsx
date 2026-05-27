const s = {
  section: {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '0 clamp(1.5rem, 5vw, 6rem)',
    borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative',
    overflow: 'hidden',
  },
  eyebrow: {
    fontSize: '12px', letterSpacing: '0.15em', color: '#a3e635',
    textTransform: 'uppercase', marginBottom: '1.5rem',
    opacity: 0, animation: 'fadeUp 0.8s ease 0.1s forwards',
  },
  name: {
    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 500,
    lineHeight: 1.05, margin: '0 0 0.5rem', color: '#fafafa',
    letterSpacing: '-0.02em', fontFamily: "'DM Serif Display', Georgia, serif",
    opacity: 0, animation: 'fadeUp 0.8s ease 0.25s forwards',
  },
  sub: {
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#737373',
    maxWidth: '520px', lineHeight: 1.6, marginBottom: '3rem',
    opacity: 0, animation: 'fadeUp 0.8s ease 0.4s forwards',
  },
  actions: {
    display: 'flex', gap: '1rem', flexWrap: 'wrap',
    opacity: 0, animation: 'fadeUp 0.8s ease 0.55s forwards',
  },
}

export default function Hero({ onNav }) {
  return (
    <section id="about" style={s.section}>
      <p style={s.eyebrow}>Application Developer · 4 yrs exp</p>
      <h1 style={s.name}>Justin<br />Kelly</h1>
      <p style={s.sub}>
        I build software that connects business processes with technology, from CRM customizations
         and ERP integrations to automation scripts that save time and improve workflows.
      </p>
      <div style={s.actions}>
        <button
          onClick={() => onNav('Projects')}
          style={{
            background: '#a3e635', color: '#0d0d0d', border: 'none',
            padding: '12px 28px', fontSize: '13px', letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer', fontWeight: 600,
            fontFamily: 'inherit',
          }}
        >
          View Projects
        </button>
        <button
          onClick={() => onNav('Contact')}
          style={{
            background: 'transparent', color: '#e5e5e5',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '12px 28px', fontSize: '13px', letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Get in Touch
        </button>
      </div>
      <div style={{
        position: 'absolute', right: 'clamp(1.5rem, 5vw, 6rem)', top: '50%',
        transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column',
        gap: '6px', opacity: 0.15,
      }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ width: `${60 - i * 5}px`, height: '1px', background: '#a3e635', marginLeft: 'auto' }} />
        ))}
      </div>
    </section>
  )
}
