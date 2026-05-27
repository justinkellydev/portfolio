import FadeIn from '../components/FadeIn'
import { PROJECTS, TAG_COLORS } from '../data'

function ProjectCard({ project }) {
  return (
    <div
      style={{ background: '#0d0d0d', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'background 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.background = '#111111'}
      onMouseLeave={e => e.currentTarget.style.background = '#0d0d0d'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#fafafa' }}>{project.name}</span>
        <span style={{ fontSize: '11px', color: '#525252' }}>{project.year}</span>
      </div>
      <p style={{ fontSize: '13px', color: '#737373', lineHeight: 1.7, flex: 1 }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map(tag => {
          const color = TAG_COLORS[tag] || '#737373'
          return (
            <span key={tag} style={{
              fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '3px 8px', border: `1px solid ${color}33`,
              color, background: `${color}11`,
            }}>
              {tag}
            </span>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href={project.github}
          style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#525252', textDecoration: 'none', borderBottom: '1px solid #525252', paddingBottom: '1px' }}
          onMouseEnter={e => e.target.style.color = '#a3e635'}
          onMouseLeave={e => e.target.style.color = '#525252'}
        >
          GitHub ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#525252', textDecoration: 'none', borderBottom: '1px solid #525252', paddingBottom: '1px' }}
            onMouseEnter={e => e.target.style.color = '#a3e635'}
            onMouseLeave={e => e.target.style.color = '#525252'}
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 6rem)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <FadeIn>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#a3e635', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          03 / Work
        </p>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 500, color: '#fafafa', margin: '0 0 3rem', fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Projects
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px', background: 'rgba(255,255,255,0.06)',
        }}>
          {PROJECTS.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </FadeIn>
    </section>
  )
}
