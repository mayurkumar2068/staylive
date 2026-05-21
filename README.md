# Mayur Bobade — Portfolio

Premium, production-ready portfolio website built with **Angular 21**, standalone components, Signals, SSR, and Tailwind CSS.

## Features

- **Multi-page routing** — separate URLs for each section (not single-page tabs)
- Standalone components with feature-based architecture
- Angular Signals for reactive state
- SSR-ready (Angular Universal) — 7 prerendered routes
- Dark/light theme toggle
- Clean, modern UI with professional layout
- Project filtering & modal preview
- SEO meta tags & structured data
- PWA manifest

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, stats, featured projects |
| `/about` | About — bio, timeline, achievements |
| `/skills` | Skills — tech stack & progress |
| `/experience` | Experience — career timeline |
| `/projects` | Projects — full portfolio with filters |
| `/services` | Services — offerings |
| `/contact` | Contact — form & testimonials |

## Tech Stack

- Angular 21 + TypeScript
- Tailwind CSS v4 + SCSS
- Angular Animations
- GSAP (available for extensions)

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200)

## Build

```bash
# Production build with SSR
npm run build

# Serve SSR locally
npm run serve:ssr:mayur-portfolio
```

## Project Structure

```
src/app/
├── core/           # App providers & config
├── shared/         # Reusable components & directives
├── features/       # Feature modules (home sections)
├── layouts/        # Header, footer, main layout
├── services/       # Theme, scroll, portfolio, loading
├── models/         # TypeScript interfaces
├── animations/     # Angular animation triggers
└── data/           # Portfolio content (easy to update)
```

## Customization

Edit `src/app/data/portfolio.data.ts` to update:

- Profile info, bio, stats
- Skills, experience, projects
- Services, testimonials, achievements
- Social links & contact details

Add your resume PDF to `src/assets/resume/mayur-bobade-resume.pdf`.

## Design System

| Token | Value |
|-------|-------|
| Background | `#050816` |
| Surface | `#0f172a` |
| Accent | `#00f5ff` |
| Secondary | `#7c3aed` |

Fonts: Inter, Space Grotesk, Poppins (Google Fonts)

## License

Private — © Mayur Bobade
