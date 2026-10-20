# LazyGrid

**One grid for every digital asset.** LazyGrid is a general-purpose marketplace where anyone can
sell game assets, art, designs, source code, AI agents, packages, and bundles, all in one place.

[![CI](https://github.com/bishallaha/lazygrid/actions/workflows/ci.yml/badge.svg)](https://github.com/bishallaha/lazygrid/actions/workflows/ci.yml)

> **Status:** early development. Nothing here is live yet. See the [roadmap](docs/ROADMAP.md).

## Why LazyGrid

Creators currently spread their work across many niche marketplaces, and buyers have to search
across all of them. LazyGrid is a single, low-friction place to list and buy any digital asset.

## Planned features

- Fast, simple listing flow for any asset type
- Secure paid downloads (time-limited signed links, never public files)
- Commission-based payments with automatic seller splits
- Seller dashboards and buyer purchase history
- Accessible, keyboard-friendly, responsive UI

## Tech stack

| Layer                   | Choice                           |
| ----------------------- | -------------------------------- |
| Language                | TypeScript                       |
| Framework               | Next.js (App Router), React      |
| Styling                 | Tailwind CSS                     |
| Database, auth, storage | Supabase (Postgres)              |
| Payments                | Razorpay Route (India first)     |
| Hosting                 | Vercel                           |
| Quality                 | ESLint, Prettier, GitHub Actions |

## Getting started

Requires Node.js 22 or newer.

```bash
git clone https://github.com/bishallaha/lazygrid.git
cd lazygrid
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the dev server                         |
| `npm run build`     | Production build                             |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Run the TypeScript compiler without emitting |
| `npm run format`    | Format code with Prettier                    |

## Workflow

`main` is always deployable. All changes go through short-lived branches
(`feat/…`, `fix/…`, `chore/…`, `docs/…`) and pull requests that must pass CI.
Commits follow the [Conventional Commits](https://www.conventionalcommits.org/) style.

## License

Copyright (c) 2026 Bishal Laha. All rights reserved. Source is viewable for evaluation only;
see [LICENSE](LICENSE).
