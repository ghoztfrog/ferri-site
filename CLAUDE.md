# Ferri Landing Page

## What this is
Landing page for Ferri — authorization infrastructure that compiles fine-grained permissions into SQL functions inside your existing Postgres database. Built on Melange, an open-source OpenFGA-to-SQL compiler.

## Tech stack
- Vite + React (JavaScript, not TypeScript)
- React Router DOM for routing
- No UI libraries, no Tailwind — custom CSS using CSS variables defined in src/index.css
- Deployed to Vercel from GitHub, auto-deploys on push to main

## Routes
- `/` — Landing page (src/pages/LandingPage.jsx + LandingPage.css)
- `/demo` — Interactive product demo (src/pages/Demo.jsx)

## Design system
- Dark theme, infrastructure aesthetic (think Resend, Linear, Vercel marketing)
- Fonts: JetBrains Mono (headings, code), Outfit (body text) — loaded via Google Fonts in index.html
- All colors, spacing, and typography tokens defined as CSS custom properties in src/index.css
- Green accent color (#22c55e) — nods to Postgres/terminal
- No images or external assets — everything is text, code, and CSS

## Key URLs
- Production: ferri.sh (not yet pointed here)
- Demo: demo.ferri.sh
- Form backend: https://formspree.io/f/xreanybq
- Melange repo: https://github.com/pthm/melange
- Melange docs: https://melange.sh/docs

## Copy rules
- Do not reference time_bound conditions or time-based permissions — this is not a real Melange feature yet
- Do not claim Python SDK exists — TypeScript only for now
- Do not fabricate testimonials or customer logos
- Audience: engineering leads, CTOs, CPOs at B2B SaaS companies (seed to Series B, 10-200 engineers)
