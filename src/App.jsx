import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [active, setActive] = useState('About')

  const handleNav = (section) => {
    setActive(section)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Nav active={active} onNav={handleNav} />
      <main>
        <Hero onNav={handleNav} />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        padding: '2rem clamp(1.5rem, 5vw, 6rem)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span style={{ fontSize: '11px', color: '#525252', letterSpacing: '0.08em' }}>© 2026 Justin Kelly</span>
        {/* <span style={{ fontSize: '11px', color: '#525252', letterSpacing: '0.08em' }}>Designed &amp; built by hand</span> */}
      </footer>
    </>
  )
}
