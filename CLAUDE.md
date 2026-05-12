# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (run before deploying)
npm run lint     # ESLint via Next.js
npm start        # serve production build
```

There is no test suite.

## Architecture

**Next.js 15 App Router** — all routes live under `src/app/`. Each route is a `page.tsx` file that is a React Server Component by default. `src/app/layout.tsx` wraps every page with a fixed `<Nav />` and `<Footer />`, and offsets `<main>` by `paddingTop: 68px` (nav height).

Shared components are in `src/components/`. There are only two: `Nav` and `Footer`. `Footer` is marked `"use client"` because it uses mouse event handlers. Any component that uses browser events, `useState`, `useEffect`, or other client APIs must include `"use client"` at the top.

## Styling

All styles are defined in `src/app/globals.css`. Tailwind CSS v4 is imported (`@import "tailwindcss"`) but the project primarily uses hand-written CSS utility classes defined in that file — not Tailwind utility classes. Pages and components use a mix of these CSS class names and inline `style` props.

**Design tokens** (CSS variables on `:root`):

| Token | Value | Role |
|---|---|---|
| `--navy` | `#08111f` | Primary background |
| `--navy-2` | `#0d1e35` | Alternate section background |
| `--teal` | `#00c9a7` | Accent / CTA |
| `--white` | `#ffffff` | Primary text |
| `--gray-2` | `#c8d6e5` | Body text |
| `--gray-3` | `#7a94b0` | Secondary / muted text |
| `--gray-4` | `#3a5068` | Disabled / tertiary |
| `--font-display` | Syne | Headings, labels, buttons |
| `--font-body` | DM Sans | Body copy |

Key reusable classes: `.container`, `.section`, `.section-sm`, `.card`, `.btn-primary`, `.btn-outline`, `.chip`, `.pill`, `.label`, `.display-xl`, `.display-lg`, `.display-md`, `.teal`, `.grid-bg`, `.glow-teal`, `.fade-up` / `.fade-up-d1–d4`, `.form-input`, `.page-hero`.

## Content locations

| Content | File |
|---|---|
| Brand colours / fonts | `src/app/globals.css` |
| Site metadata | `src/app/layout.tsx` |
| Nav links | `src/components/Nav.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Homepage | `src/app/page.tsx` |
| Product details & pricing | `src/app/products/page.tsx` |
| Services | `src/app/services/page.tsx` |
| Team & company story | `src/app/about/page.tsx` |
| Contact details & form | `src/app/contact/page.tsx` |
