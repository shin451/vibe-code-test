# RE:BOUND — Studio Site

A warm, editorial marketing site for a Lagree / Megaformer studio. Built with
**Next.js (App Router)**, **TypeScript**, **Tailwind CSS** and **shadcn/ui**,
scaffolded on the [OhhWells starter](https://github.com/ohhwells/ohhwells-starter)
folder structure. All design tokens (colour + typography) come directly from
`DESIGN.md`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

> Requires Node 18.18+ (built on Node 24 LTS).

## Stack & conventions

- **Design tokens** — `DESIGN.md` → CSS variables in `src/styles/globals.css`
  → mapped into the Tailwind theme (`tailwind.config.ts`). Single source of
  truth, also documented as data in `src/content/brand.ts`.
- **Fonts** — `Newsreader` (display serif w/ italics) + `Hanken Grotesk`
  (grotesque sans) via `next/font` in `src/lib/fonts.ts` — the open fallbacks
  named in DESIGN.md (Canela / Neue Montreal are licensed).
- **Content** — every page's copy lives in `src/content/*.ts`, typed by
  `src/types/content.ts`. Edit content without touching components.

## Structure

```
src/
  app/                 # routes: /, /about, /services, /pricing, /contact, /faqs
  components/
    ui/                # shadcn/ui primitives (button, input, card, accordion, sheet)
    layout/            # Navbar, MobileMenu, Footer, Container, WordmarkSignoff
    sections/          # Hero, StatementBlock, FormatCards, Testimonial, WaitlistForm, CtaBand
  content/             # per-page content + brand tokens
  lib/                 # fonts, seo, utils (cn), constants
  styles/              # globals.css (design tokens)
  types/               # content type definitions
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, what-is-Lagree, three formats, testimonial, waitlist form |
| `/about` | About — story, founder, values, ethos, instructors |
| `/services` | Classes — three formats expanded, class timeline, equipment |
| `/pricing` | Pricing — three tiers, free-class highlight, billing FAQ |
| `/contact` | Contact — form + studio details + map |
| `/faqs` | FAQs — grouped accordions |

Imagery uses warm-graded Unsplash placeholders with walnut/espresso gradient
fallbacks; swap the URLs in `src/content/*.ts` for production photography.
