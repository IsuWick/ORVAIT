# OrvaIt Website

Production-ready marketing website for OrvaIt — an AI-powered software company based in Sri Lanka.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, product showcase, process, CTA |
| `/products` | Full product details — Recruit, Insight, Flow, Guard + pricing |
| `/services` | AI consulting, custom dev, automation, analytics services |
| `/about` | Company story, mission, values, team, timeline |
| `/contact` | Contact form, FAQ, contact details |

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** — Syne (display) + DM Sans (body)

## Brand Colours

| Token | Value | Use |
|---|---|---|
| `--navy` | `#08111f` | Primary background |
| `--navy-2` | `#0d1e35` | Section alternates |
| `--teal` | `#00c9a7` | Accent, CTA, highlights |
| `--white` | `#ffffff` | Primary text |
| `--gray-2` | `#c8d6e5` | Body text |
| `--gray-3` | `#7a94b0` | Secondary text |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm run build   # verify build passes
```

Push to GitHub → Import to [vercel.com](https://vercel.com) → Deploy.

## Customisation

| What | Where |
|---|---|
| Company contact details | `src/app/contact/page.tsx` |
| Team members | `src/app/about/page.tsx` |
| Product pricing | `src/app/products/page.tsx` |
| Nav links | `src/components/Nav.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Brand colours | `src/app/globals.css` |
| Fonts | `src/app/globals.css` + `src/app/layout.tsx` |
