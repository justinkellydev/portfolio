# Justin Kelly — Portfolio

Minimal portfolio website with a GitHub Actions workflow that builds and deploys automatically on every push.

https://justinkellydev.github.io/justin-kelly-portfolio/

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast dev server and bundling
- No CSS frameworks — all styling via inline styles and a single `index.css`

## Project Structure

```
portfolio/
├── index.html              # HTML entry point
├── vite.config.js          # Vite + React plugin config
├── package.json
└── src/
    ├── main.jsx            # React DOM entry point
    ├── App.jsx             # Root component, nav state
    ├── index.css           # Global resets + font imports + keyframes
    ├── data.js             # All content: stack, projects, tag colors
    ├── hooks/
    │   └── useInView.js    # IntersectionObserver hook for scroll animations
    ├── components/
    │   ├── Nav.jsx         # Fixed navbar with scroll-aware styling
    │   └── FadeIn.jsx      # Scroll-triggered fade-up wrapper
    └── sections/
        ├── Hero.jsx        # Landing screen with CTA buttons
        ├── Stack.jsx       # Tech stack grid
        ├── Projects.jsx    # Project cards with tags + links
        └── Contact.jsx     # Email copy + social links
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

## Customising

All content lives in `src/data.js` — update your name, projects, stack, and links there.
For social links and email, edit `src/sections/Contact.jsx`.
Your name in the nav is in `src/components/Nav.jsx`.
