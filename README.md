# Otar Alasania — Portfolio

Personal portfolio site: [otoalasania.com](https://otoalasania.com).

Built with Next.js 16 (App Router), React 19, TypeScript, CSS Modules and
[Motion](https://motion.dev). English and Spanish.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | What it does                     |
| ---------------- | -------------------------------- |
| `pnpm dev`       | Start the dev server             |
| `pnpm build`     | Production build                 |
| `pnpm start`     | Serve the production build       |
| `pnpm lint`      | ESLint                           |
| `pnpm typecheck` | TypeScript check (`tsc --noEmit`) |

## Environment variables

| Name                 | Required | Description                                                                                                                                         |
| -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Yes      | [Resend](https://resend.com) API key used by the contact form. A "sending access" key is enough.                                                    |
| `CONTACT_FROM_EMAIL` | No       | Sender address, e.g. `Portfolio <hello@otoalasania.com>`. Must be on a domain verified in Resend. Defaults to Resend's sandbox sender `onboarding@resend.dev`. |

## Project structure

```
app/
  page.tsx                 home page → components/PortfolioHome
  work/[slug]/             project page (direct visits)
  @modal/(.)work/[slug]/   project sheet (client navigation)
  actions/sendMessage.ts   contact form server action
  components/              one folder per section/component, CSS Module next to it
  i18n/                    en/es copy and the locale provider
  lib/                     small stores, hooks, SEO and share-image helpers
  data.ts                  projects, links and other non-text data
  opengraph-image.tsx      share image (each project has its own too)
  robots.ts, sitemap.ts
public/assets/             screenshots and SVGs (imported as components via @assets/*)
```
