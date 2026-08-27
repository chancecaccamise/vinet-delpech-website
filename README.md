# Vinet-Puranik Website

Marketing site for Distillerie Vinet-Puranik — a family-owned Cognac-region
distillery creating bespoke and private-label spirits for international trade
partners. Multi-page editorial site in **three languages** (English, French,
Spanish), built with Next.js (App Router), TypeScript and Tailwind CSS v4.

> ⚠️ This project uses a **modified Next.js 16.2.10** with breaking changes.
> Read `AGENTS.md` and consult `node_modules/next/dist/docs/` before writing
> Next.js code. Two renames catch people out: middleware is now **`src/proxy.ts`**,
> and `headers()` / `params` are **async**.

## Getting started

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build (71 static pages)
npm run start   # serve the production build
npm run lint    # ESLint
npx tsc --noEmit  # typecheck
```

Copy `.env.example` to `.env.local` and fill it in before the contact form
will deliver anything. See **Contact form delivery** below.

## The one thing to understand first

**Structure and copy are deliberately separated.**

| | Lives in | Holds |
|---|---|---|
| **Copy** | `src/lib/content/{en,fr,es}.ts` | Every translatable string |
| **Structure** | `src/lib/site.ts` | Slugs (they are URLs), image paths, external links, numbers, dimensions, contact details |
| **The join** | `src/lib/content/index.ts` | Builders that marry the two |

`Content` is inferred from `en.ts`, and `fr.ts` / `es.ts` are declared
`satisfies Content`. **Add a key to `en.ts` and the other two fail to compile
until they match** — that is the guardrail that keeps the three editions in
step, so never silence it by loosening the type.

Components consume the builders (`getBrands`, `getSpiritFamilies`,
`getLegalPages`…), never the raw dictionaries — so an image path or a product
link cannot drift between languages.

Design tokens (palette, type scale, motion) sit at the top of
`src/app/globals.css`. The palette comments document contrast ratios for
full-opacity pairings; if you apply an opacity modifier (`text-ink/50`), those
ratios no longer hold — check before going below `/65` on small text.

## Routing and i18n

Every page lives under `/[locale]`, so there is no unprefixed edition. `/` and
any stale unprefixed URL are redirected by **`src/proxy.ts`** (Next 16's
renamed middleware) to the best match for the visitor's `Accept-Language`,
falling back to English. That redirect is a **307, deliberately** — a permanent
redirect would be cached and would pin the first visitor's language for
everyone behind a shared cache.

Path segments stay in English in every language (`/fr/partnerships/gin`), so
one route tree serves all three and a link is localized by swapping one prefix
via `localizePath()`.

`src/proxy.ts` has a `matcher` that lists the paths it must **not** touch —
`robots.txt`, `sitemap.xml`, `icon.svg`, `favicon.ico`, `apple-icon.png`,
`manifest.webmanifest` and the public asset folders. **Add a new root-level
asset and you must add it here**, or it will 307 into `/en/...` and silently
404 instead of being served.

### Adding a locale

1. Add the code to `locales` and `localeMeta` in `src/lib/i18n.ts` (including
   `ogLocale`, which takes Open Graph's `language_TERRITORY` form).
2. Create `src/lib/content/<code>.ts` ending in `satisfies Content`. TypeScript
   will list every missing key.
3. Register it in the `dictionaries` map in `src/lib/content/index.ts`.

Sitemap, hreflang, the language switcher and the static params all derive from
`locales`, so nothing else needs touching.

## Project structure

```
src/
  proxy.ts                    Locale routing (Next 16's renamed middleware)
  app/
    [locale]/
      layout.tsx              Fonts, metadata defaults, viewport, Header/Footer, AgeGate
      page.tsx                Home
      about/ contact/         Interior pages
      partnerships/           Overview + [family] category pages
      visit/                  Hub + tours + tastings
      legal/[slug]/           Mentions légales, privacy, cookies, terms, accessibility
      not-found.tsx           On-brand 404
      opengraph-image.tsx     Social card, generated per locale
    actions/contact.ts        Enquiry Server Action (validation, rate limit, Resend)
    globals.css               Design tokens, type scale, motion, component classes
    sitemap.ts robots.ts manifest.ts
    icon.svg favicon.ico apple-icon.png
  components/                 30 components; see the file headers for intent
  lib/
    site.ts                   Structure: slugs, image paths, links, figures
    content/{en,fr,es}.ts     Copy, one file per language
    content/index.ts          Builders joining the two
    seo.ts                    pageMetadata() + JSON-LD builders
    i18n.ts                   Locales, localizePath, Accept-Language matching
    age-gate.ts               Cookie, pre-paint inline script, DOB evaluation
    clsx.ts
```

## SEO

`pageMetadata()` in `src/lib/seo.ts` builds a page's title, description,
canonical, hreflang, Open Graph and Twitter tags. **Use it for every new
page.** Next merges metadata between segments *shallowly*, so a page that does
not declare `openGraph` silently inherits the home page's — which is how
every subpage once ended up sharing as the home page on LinkedIn.

Structured data goes through `<JsonLd nodes={[…]} />` with the builders in
`seo.ts` (`organizationJsonLd`, `webSiteJsonLd`, `breadcrumbJsonLd`), emitted
as one `@graph` per page so nodes can reference each other by `@id`.

When swapping an image that is already live, **give the new file a new name**.
Next's image cache holds the old one for four hours otherwise; several files
carry a `-card` or `-room` suffix for exactly this reason.

## Contact form delivery

The enquiry form validates on the server, rate-limits by IP, carries a
honeypot, and sends via the [Resend](https://resend.com) HTTP API.

| Env var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Enables real delivery (required in production) |
| `CONTACT_TO_EMAIL` | Recipient (defaults to `siteConfig.email`) |
| `CONTACT_FROM_EMAIL` | Verified sender — must be on the **apex** domain |

Without a key: in development the enquiry is logged to the server console; in
production the visitor is shown the direct email address. Delivery failures log
the full enquiry body so its content is never lost to a transport outage.

## Legal pages

`/legal/mentions-legales`, `/privacy`, `/cookies`, `/terms`, `/accessibility`,
in all three languages, driven by `legalSlugs` in `site.ts` and the `legal`
block in each dictionary.

**They are drafts.** They accurately describe what the site does — one
strictly-necessary cookie, no trackers, no analytics — but every bracketed
value (`[SIRET]`, `[RCS NUMBER]`, `[HOST NAME]`…) must be supplied by the
house, and the wording needs its counsel's review. Each page renders a visible
draft notice until then; remove it in the `legal.draftNotice` key once signed
off.

## Before go-live

See **`HANDOVER.md`** for the full list, including the decisions only the house
can make. The short version:

- [ ] Confirm the production domain in `siteConfig.url` — it feeds every
      canonical, the sitemap, robots and the JSON-LD.
- [ ] Set `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`.
- [ ] Replace the interim logo (`src/components/Logo.tsx`) with real vector art.
- [ ] Confirm the published email and phone (two conflicting numbers exist).
- [ ] Replace the placeholder testimonials and the tour/tasting programme, or
      remove those sections.
- [ ] Resolve the Pineau medal attribution before publishing medal claims.
- [ ] Have counsel review the legal pages and fill in the bracketed values.
