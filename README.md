# David Ihomba Kibandi — Portfolio

A personal portfolio site built with **React 18 + TypeScript + Vite**, styled with
**Tailwind CSS** and **shadcn/ui** components (Button, Card, Badge, Separator),
preserving the original dark, arched-portrait design.

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs a static, deployable site to `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deploying

`dist/` is a plain static site, so it can be deployed to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output
  directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch (or use an action like
  `peaceiris/actions-gh-pages`).

## Project structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui primitives (Button, Card, Badge, Separator)
│   └── sections/       # Page sections (Hero, About, Projects, Experience, Skills, Contact)
├── data/
│   └── portfolio.ts    # All content: profile info, projects, experience, education, skills
├── App.tsx
├── main.tsx
└── index.css            # Tailwind directives + shadcn theme tokens (dark theme)
public/
└── David_Ihomba_Kibandi_Resume.pdf
```

## Editing content

All text content (projects, experience, education, skills, contact info) lives in
`src/data/portfolio.ts` — edit that one file to update the site without touching
any component markup.

## Adding more shadcn/ui components

This project is pre-configured with `components.json` for the shadcn CLI, so you
can add more components anytime:

```bash
npx shadcn@latest add dialog
```
