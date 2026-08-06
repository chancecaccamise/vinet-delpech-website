# Vinet-Puranik Website

Marketing site for Distillerie Vinet-Puranik — a family-owned Cognac-region
distillery creating bespoke and private-label spirits for international trade
partners. Single-page cinematic editorial experience built with Next.js
(App Router), TypeScript, and Tailwind CSS v4.

> ⚠️ This project uses a **modified Next.js 16.2.10** with breaking changes.
> Read `AGENTS.md` and consult `node_modules/next/dist/docs/` before writing
> Next.js code.

## Getting started

```bash
npm install     # first time only
npm run dev     # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
src/
  app/
    layout.tsx           Root layout: fonts, metadata, Header/Footer, AgeGate
    page.tsx             Homepage (hero → savoir-faire → know-how → collection
                         → heritage → world-of → contact)
    visit/               /visit hub + /visit/tours + /visit/tastings
    globals.css          Design tokens, type scale, motion, component classes
    actions/contact.ts   Server Action for the enquiry form
    icon.svg             Favicon (VD monogram)
    opengraph-image.tsx  Generated OG/social image
    robots.ts sitemap.ts SEO files
    not-found.tsx        On-brand 404
  components/
    Header.tsx           Fixed nav: logo left, 4 megamenu groups (Rémy-style
                         panels), locale pill + CTA right, mobile drawer
    Footer.tsx           Multi-column footer + responsible-drinking notice
    AgeGate.tsx          Legal-age gate: date-of-birth entry, cookie-backed
                         for 30 days, no flash on either side
    InlineScript.tsx     Script that runs before first paint (no-flash helper)
    PageHero.tsx         Dark editorial hero band for interior pages
    ExperienceSection.tsx One tour/tasting offering as an editorial block
    Reveal.tsx           Scroll fade/rise reveal (reduced-motion safe)
    Parallax.tsx         Subtle scroll parallax (reduced-motion safe)
    StatsBand.tsx        Count-up production figures
    BrandRail.tsx        Horizontal brand showcase (scroll-snap + arrows,
                         /#brand-<slug> deep links)
    ContactForm.tsx      Enquiry form (useActionState + Server Action)
    PlaceholderFrame.tsx Labeled placeholder frames awaiting photography
  lib/
    site.ts              ALL content: copy, nav groups, stats, brands,
                         visit/tours/tastings, contact
    age-gate.ts          Age-gate cookie, inline script + date-of-birth checks
    clsx.ts              Tiny classname helper
```

## Editing content

**Everything editorial lives in [`src/lib/site.ts`](src/lib/site.ts)** — name,
tagline, navigation, services, production stats, brand portfolio, heritage
milestones, contact details, legal links, age-gate copy. Components only
render what that file provides.

Design tokens (palette, type scale, motion timing) live at the top of
[`src/app/globals.css`](src/app/globals.css).

## Contact form delivery

The enquiry form validates server-side (with a honeypot for spam) and sends
via the [Resend](https://resend.com) HTTP API when configured:

| Env var              | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `RESEND_API_KEY`     | Enables real delivery (required in production) |
| `CONTACT_TO_EMAIL`   | Recipient (defaults to `siteConfig.email`)     |
| `CONTACT_FROM_EMAIL` | Verified sender address                        |

Without a key: in development the enquiry is logged to the server console; in
production the visitor is shown the direct email address instead — nothing is
silently dropped.

## To do before launch

- [ ] **Verify production figures** in `knowHow.stats` (`src/lib/site.ts`)
      with the house — pot stills, bottling lines, hectares, export countries.
- [ ] **Confirm the visit programme** in `tours` / `tastings` / `visit`
      (`src/lib/site.ts`) — offerings, durations, group sizes, prices and
      opening arrangements are structured placeholders.
- [ ] Replace `PlaceholderFrame` slots with real photography/video — every
      frame is captioned with what belongs there (hero expects a background
      video; see the comment in `page.tsx`).
- [ ] Set `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`.
- [ ] Confirm the production domain in `siteConfig.url`.
- [ ] Point `siteConfig.social` at the house's real LinkedIn/Instagram.
- [ ] Create the legal pages linked from the footer (`footerContent.legalLinks`).
- [ ] When French content ships, add an `fr` dictionary in `site.ts` and point
      `siteConfig.locales.alternates.fr` at `/fr` (currently links to the
      existing FR production site).
