# Portfolio (React + Vite + Tailwind) — Project Guide

This document explains the code structure, how things are organized, and how to run/build/deploy the project.

## Stack

- React (Vite)
- Tailwind CSS v4 (single import, no config file needed)
- react-icons (for social + link icons)
- @fontsource/ibm-plex-mono (IBM Plex Mono webfont)

## Prerequisites

- Node.js 20+ (recommended: the latest LTS)
- npm (comes with Node)

## Install & Run

```bash
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# production build (outputs to ./dist)
npm run build

# preview the production build (http://localhost:4173)
npm run preview
```

## Deploy

- Netlify: set Build Command to `npm run build` and Publish directory to `dist`.
- Vercel: detect Vite automatically; or set Build Command `npm run build`, Output Directory `dist`.
- Any static host: upload the `dist` folder.

## Directory Structure

```
.
├── index.html                # Root HTML (Vite entry)
├── package.json              # Scripts and dependencies
├── README.md                 # Quick commands
├── PROJECT_GUIDE.md          # This file
├── public/
│   ├── resume.pdf            # Replace with your actual resume
│   └── vite.svg              # Sample asset
├── src/
│   ├── main.jsx              # App entry, loads fonts and global CSS
│   ├── index.css             # Tailwind import, theme tokens, global utilities
│   ├── App.jsx               # Page layout (Navbar + sections + Footer)
│   ├── App.css               # Minimal (template CSS removed)
│   ├── assets/
│   │   └── react.svg         # Sample asset
│   ├── components/           # Reusable UI blocks
│   │   ├── Navbar.jsx        # Fixed top nav, smooth scroll links
│   │   ├── Hero.jsx          # Name, tagline, intro, CTAs
│   │   ├── About.jsx         # Bio, skills, timeline
│   │   ├── Projects.jsx      # Grid rendering of ProjectCard
│   │   ├── ProjectCard.jsx   # Title, description, tags, image, links
│   │   ├── Contact.jsx       # Email + social buttons
│   │   ├── Footer.jsx        # Copyright line
│   │   └── ResumeButton.jsx  # Thin outlined resume button
│   └── data/
│       └── projects.js       # Data array powering Projects section
└── vite.config.js            # Vite configuration
```

## Styling & Theme

- Tailwind v4 is used via a single import in `src/index.css`:
  ```css
  @import "tailwindcss";
  ```
- Theme tokens and global styles also live in `src/index.css`:

  ```css
  @theme {
    --color-black: #000;
    --color-white: #fff;
    --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-black text-white font-mono tracking-wider antialiased;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center border border-white/70 text-white uppercase tracking-widest text-xs sm:text-sm px-4 py-2 hover:bg-white hover:text-black transition-colors;
  }
  .section {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24;
  }
  .section-title {
    @apply text-sm font-bold uppercase tracking-widest mb-8 text-white/90;
  }
  ```

- Section headings are uppercase, monospaced, with slight letter spacing for a terminal feel.
- Buttons use a 1px outline style as required.

## App Layout

- `src/App.jsx` composes the page:
  - `Navbar` (fixed) — links: Home, About, Projects, Contact, Resume
  - `Hero` — name, tagline, quick intro, CTAs
  - `About` — bio, skills, timeline (experience + education)
  - `Projects` — data-driven grid of `ProjectCard`
  - `Contact` — email and social icons
  - `Footer` — copyright line
- Smooth scrolling is enabled globally (`html { scroll-behavior: smooth; }`).
- Each section includes `scroll-mt-24` so content isn’t hidden under the fixed navbar.

## Data-Driven Projects

- All project metadata lives in `src/data/projects.js`:
  ```js
  export const projects = [
    {
      title: "Terminal UI Portfolio",
      description: "A minimalist personal site...",
      tags: ["React", "Tailwind", "Vite"],
      image: "/vite.svg",
      links: {
        github: "https://github.com/yourname/terminal-portfolio",
        demo: "#",
      },
    },
    // ...more
  ];
  ```
- To add or edit projects, modify this array. Each item supports:
  - `title` (string)
  - `description` (string)
  - `tags` (string[])
  - `image` (path or URL)
  - `links.github` (URL), `links.demo` (URL)

## Customization Guide

- Text content: update components under `src/components`.
  - Replace `YOUR NAME` in `Hero.jsx`.
  - Update email and social URLs in `Contact.jsx`.
  - Tweak nav labels/links in `Navbar.jsx`.
- Fonts: IBM Plex Mono is loaded in `src/main.jsx` via `@fontsource`.
  - To use different weights or fonts, import the desired CSS files there.
- Resume: replace `public/resume.pdf` with your file (keep the same name to avoid code changes).
- Colors/spacing: adjust theme tokens and utilities in `src/index.css`.

## Icons

- Uses `react-icons` (Feather icons): `FiGithub`, `FiExternalLink`, `FiLinkedin`, `FiTwitter`.
- Import icons directly in the components where needed.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build into `dist`
- `npm run preview` — preview built site locally

## Notes

- Some CSS linters may warn about Tailwind v4’s `@theme` at‑rule. It’s valid for Tailwind v4; you can safely ignore or adjust the linter config.
- This project is static and does not require environment variables.
