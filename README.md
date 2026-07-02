# Vinet-Delpech Website

Marketing website for Vinet-Delpech, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

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
    layout.tsx        Root layout: fonts, metadata, Header + Footer
    page.tsx          Homepage (hero, services preview, CTA)
    globals.css       Design tokens (colors, fonts) + Tailwind import
    about/            /about page
    services/         /services page
    contact/          /contact page (includes a not-yet-wired form)
  components/
    Header.tsx        Sticky nav with mobile menu
    Footer.tsx        Site footer
    Container.tsx     Max-width layout wrapper
  lib/
    site.ts           Central config: name, tagline, nav, contact details
    clsx.ts           Tiny classname helper
```

## Customizing

Most content and branding is centralized so it's easy to change:

- **Name, tagline, contact info, navigation** — edit `src/lib/site.ts`.
- **Colors and fonts** — edit the CSS variables in `src/app/globals.css`
  (including the `--accent` brand color and the dark-mode overrides).
- **Page copy** — the current text is placeholder; edit each page under
  `src/app/`.

## To do before launch

- Replace all placeholder copy with real content.
- Set the real brand `--accent` color and confirm the palette.
- Wire up the contact form (`src/app/contact/page.tsx`) to an email service
  or API route — it currently does not submit anywhere.
- Add real favicon / Open Graph images and confirm `siteConfig.url`.
