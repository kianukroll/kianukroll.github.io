# Kianu-Thomé Kroll — Portfolio

> **TL;DR:** Production-ready, bilingual portfolio and interactive CV for a DevOps & Software Engineer. Built with Vue 3 and TypeScript. Static deployment to GitHub Pages. No backend. Fast, accessible, print-ready.

**Live site:** [kianukroll.com](https://kianukroll.com/)

## What this communicates

- **End-to-end engineering:** design, development, testing, shipping, and operations.
- **Production experience:** web applications, platform engineering, Kubernetes, and self-hosted infrastructure.
- **Proof of work:** featured projects, technology choices, certificates, and downloadable/printable CV views.
- **Professional readiness:** responsive UI, English/German localization, SEO metadata, accessible navigation, and automated delivery.

## Product surface

| Route          | Purpose                                                         |
| -------------- | --------------------------------------------------------------- |
| `/`            | Portfolio overview: profile, CV summary, projects, certificates |
| `/cv`          | General print-ready CV                                          |
| `/cv/devops`   | DevOps-focused CV                                               |
| `/cv/software` | Software-focused CV                                             |
| `/imprint`     | Legal imprint                                                   |
| `/privacy`     | Privacy policy                                                  |

## Stack

- Vue 3 + `<script setup>`
- TypeScript
- Tailwind CSS 4
- Vite
- Vitest + Vue Test Utils
- Oxlint + Oxfmt
- GitHub Actions + GitHub Pages

## Run locally

Requirements: Node.js, pnpm.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
pnpm lint          # static analysis
pnpm format:check  # formatting
pnpm typecheck     # Vue/TypeScript checks
pnpm test          # test suite
pnpm build         # production build
```

Run all local checks:

```bash
pnpm lint && pnpm format:check && pnpm typecheck && pnpm test && pnpm build
```

## Delivery

Pushes and pull requests targeting `main` run CI through [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). A successful push to `main` builds `dist/` and deploys it to GitHub Pages.

## Project map

```text
src/
├── components/       reusable UI and page sections
├── composables/      shared Vue logic, including localization
├── data/             typed CV, project, certificate, and profile content
├── types/            content model definitions
├── App.vue           route selection and page composition
└── main.ts           application entry point
public/               static assets and crawler files
```

Content changes usually belong in `src/data/`; layout and behavior belong in `src/components/`.
