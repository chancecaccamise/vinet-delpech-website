# Handover — questions for the house

Everything below needs a decision or a piece of information from Vinet-Puranik.
It is ordered by risk, not by effort. Items 2–4 carry legal or commercial
exposure; the rest are quality and completeness. Item 1 is a record of what the
house has already decided, kept because it retires three earlier questions and
leaves one open choice.

Technical setup lives in `README.md`. This file is only what we cannot answer
ourselves.

---

## 1. The Puranique range has left this site

At the house's request, nothing carrying the Maison D' Puranique mark is shown
here any more: the vodka, both cognacs, both Pineaux, and both mango liqueurs
(Jus d'Manguier and Mangeaux). The range lives on **puraniques.com**, and the
**Partners** section links straight out to it rather than restating it.

The house's own bottles on this site are now **Montlieu X.O and Glen Mac Clay**.

Three questions this file used to carry are retired with those records: the
Pineau medal attribution (four medals printed for the range as a whole and
duplicated onto both expressions), the unattributed point scores on the two
cognacs, and the unattributed 92 on Jus d'Manguier. **If any of the range comes
back to this site, its question comes back with it** — in particular the medals
must be matched to the right expression before publication, since a medal claim
on the wrong bottle is a labelling problem rather than a copy nit.

**Liqueurs is now an empty category.** Both mango liqueurs were its only
bottles. The page was kept rather than deleted, because the house does still
produce the category to order and says so across the rest of the site ("every
spirit, one house", eight categories). It now reads as an offer — the process,
"Made to order" in place of a bottle count, and a route to the enquiry form —
and its cover is the still house rather than a packshot. **If the house would
rather drop liqueurs from the site altogether, say so and it comes out of
`familyAssets`; the nav, the sitemap and the "what we produce" list all follow
from that one array.**

## 2. Published contact details — two conflicts

| Field | Site currently uses | Conflict |
|---|---|---|
| Switchboard | `+33 5 46 49 10 10` | Brochure prints `+33 546 700 466` |
| House email | `contact@vinet-puranik.com` | Brochure prints `yml@vinet-delpech.com` (legacy domain) |
| Commercial email | `yml@vinet-delpech.com` | Still on the pre-rebrand domain |

These are not cosmetic any more: they now feed the **Organization structured
data**, which Google can surface directly in search results, and the house
email is also the fallback shown to a visitor if the enquiry form fails.

## 3. The logo is an upscaled JPEG

`src/components/Logo.tsx`

The brand mark on every page — header, footer, age gate, social card — is
derived from a supplied **200 × 200 JPEG**: background knocked out, trimmed and
upscaled 4×. It is soft at large sizes and it is the first thing a visitor
sees. **Please supply the real vector artwork** (SVG or EPS) from the rebrand
pack.

## 4. Navigation restructure — what moved

The bar is now six items: **About Us · Partners · Private Labels / White Labels ·
Visit Us · Tours & Tastings · Contact**.

- **Partners** is new. It holds Les Brûleries Modernes, whose four bottles moved
  here off the category pages, and an outbound card for Puranique.
- **Private Labels / White Labels** is the old Partnerships section: same eight
  category pages, now at `/private-label/…`, carrying the eight client brands
  and the house's own four remaining bottles.
- **Tours & Tastings** is promoted out of the Visit Us menu. The pages
  themselves did not move — they are still `/visit/tours` and `/visit/tastings`.
- The desktop bar now crosses over to the mobile drawer at **1280px** rather
  than 1024px: six items, one of them "Private labels / White labels", do not
  fit beside the lockup and the language switcher at the narrower width.

**To confirm:** Les Brûleries Modernes shares the distillery's address and its
site describes itself as building on the Vinet-Delpech heritage, so it is
presented here as a house alongside the distillery rather than as a client. If
the relationship is something else, the copy on `/partners` should say so.

## 5. Production domain and email delivery

- `siteConfig.url` is `https://www.vinet-puranik.com`. **Confirm this is
  final** — it builds every canonical URL, the sitemap, robots.txt, the social
  card URLs and the structured data. If it changes after launch, all of those
  change with it.
- Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (see
  `.env.example`). **Until these are set the enquiry form does not send.**
  `CONTACT_FROM_EMAIL` must be on the **apex** domain — Resend does not verify
  `www.` subdomains.

## 6. Placeholder content still on the site

These are live and will be seen by anyone reviewing the site. They are marked
`TODO(launch)` in the code.

- **Testimonials (home page).** All three quotes and all three names —
  Camille Roussel, James Ashworth, Sofía Herrero — are **invented**, written to
  fill the layout. Replace with real, approved quotes, or remove the section.
  Publishing invented client praise is a real risk.
- **Tours and tastings.** Every name, duration, group size, language pairing
  and inclusion is a **structured placeholder**. Prices are the one honest
  field — they all read "On enquiry". The pages carry a visible line admitting
  the programme is to be confirmed; that line should come out with the
  placeholders.
- **Events.** The three entries on `/events` are samples, each carrying a
  visible **"Sample"** tag so nobody can act on them, and each deliberately
  left out of the Event structured data so no search engine can surface a date
  the house is not keeping. Replace them in `eventAssets` (`src/lib/site.ts`)
  and the `events.items` block in each dictionary, and drop the `placeholder`
  flag — that flag is what turns the rich-result markup on. If there is nothing
  to list, delete all three and the page shows a short "no events scheduled"
  message on its own.

## 7. Two contradictions in the copy

- **Founding date.** Seven strings, including the browser title, say the house
  has been creating spirits **"since 1777"**. The timeline attributes 1777 to
  the Delpech Fougerat family buying the Font Gireau estate, and dates the
  distillery itself to **1934**. Both may be defensible, but the site should
  say which claim it is making.
- **Tour length.** The tours introduction promises "a full day inside the
  métiers", while the longest tour listed is **"Half day"**. This is in the
  English source and was faithfully translated into French and Spanish, so
  fixing the English fixes all three.

## 8. Legal pages — two actions, two things to verify

The five pages are complete and publishable in all three languages, written to
be legally sufficient but readable by a customer. Company identifiers come from
the French public register (SIREN 527 250 120): SAS, share capital 500 000 €,
RCS Saintes, SIRET 527 250 120 00021.

**Directors of publication** are named as Rahul Puranik (Chief Executive
Officer) and Bruno Delannoy (General manager). They are pulled from the About
page's leadership block rather than typed into the legal notice, so the two can
never disagree. Note the public register still lists Bruno as *président* — an
old filing. **If the register is out of date, updating it is worth doing**, as
third parties rely on it.

**You must do these two things:**

- **Set the hosting provider.** French law requires the legal notice to name
  the host with their address and telephone. Until the deployment target is
  chosen the page says so plainly. Set `legalHostDetails` in `src/lib/site.ts` —
  one string, one place, all three languages.
- **Sign Resend's Data Processing Agreement.** The privacy policy now discloses
  that enquiries leave the EU (Resend is US-based) and states the transfer is
  covered by a DPA using the European Commission's standard contractual
  clauses. That disclosure is required by the GDPR — but the statement must be
  true, so the DPA has to be in place before the form goes live.

**Please verify:**

- **VAT number `FR84527250120`.** Derived from the SIREN using the standard
  French key algorithm rather than read off a document. Almost certainly right;
  confirming it on the EU VIES checker takes about ten seconds.
- **Registered name.** The register lists the company as **VINET-PURANIK
  DISTILLERIE**, while the site prints "Distillerie Vinet-Puranik SAS". A legal
  notice should carry the registered form exactly — a one-line change in
  `siteConfig.legalName`.

**One more to check:** public records showed a *redressement judiciaire* opened
at the Tribunal de Commerce de Saintes in May 2024. We could not establish its
current status, and the same records were wrong about the president, so treat
this as a prompt rather than a fact. If such a procedure is in force it must be
disclosed on commercial documents and the legal notice would need a line added.

**Not covered, because we cannot know it:** if the distillery holds an
*entrepositaire agréé* (excise warehouse) number or any licence number that
must appear on its commercial communications, add it to the legal notice.

## 9. Photography still wanted

- **A bottling line.** The house runs four and has never photographed one; the
  "what we produce" section borrows a shot of spirit running off the still.
- **A studio packshot for Montlieu X.O** — the current file is a ~500 px crop
  recovered from the brochure PDF, against 1000 × 1250 for the rest, and it
  renders visibly soft.
- **Packshots for the rest of the Les Brûleries Modernes range.** Its own site
  lists Excellency Club, Irie and Palisson batches 02 and 03; the new
  `/partners/les-bruleries-modernes` page can only show the four bottles we
  hold files for.
- **More of the tasting room.** One good frame now exists and is used on the
  Cognac & Pineau Flight; the other tastings still borrow cellar imagery.
- **A 1440p hero video export**, ideally with a `.webm` sibling. The current
  file is 720p and 7.2 MB, which reads soft on large displays and is the
  heaviest thing a mobile visitor downloads.
- **Opening hours and map coordinates**, which would let us complete the
  local-business structured data and improve the site's showing in local
  search. Omitted rather than guessed — invented hours send visitors to a
  closed gate.

---

## Notes on things we decided, so nobody undoes them

- **The age gate can be bypassed** — by disabling JavaScript, by editing a
  cookie, or by reloading after being turned away. This is normal for spirits
  sites and is a good-faith control, not access security. Please do not treat
  it as protecting anything.
- **There is no cookie consent banner, on purpose.** The site sets exactly one
  cookie (the age check), uses no analytics and loads no third-party scripts,
  and strictly-necessary cookies are exempt from consent under CNIL guidance.
  Adding analytics later **would** require a banner and a change to the cookie
  policy.
- **The `/` → `/en` redirect is temporary (307), not permanent.** A permanent
  redirect would be cached and would pin one visitor's language for everyone
  behind a shared cache.
- **Rate limiting on the enquiry form is best-effort**, held in the server
  process. Serverless hosting spreads requests across instances that do not
  share it. If abuse becomes a problem, the durable fix is edge protection
  (Vercel WAF) or a shared store such as Upstash.
- **The Content-Security-Policy allows inline scripts.** Locking that down
  needs a per-request nonce, which would force all 71 pages to render
  dynamically instead of being served as static HTML. Given the site has no
  user content, no search and no third-party scripts, that trade was not worth
  it. The other directives (`frame-ancestors`, `base-uri`, `form-action`,
  `object-src`) are active and do real work.
- **The French responsible-drinking notice** now appears only in the reader's
  own language rather than being restated in French on every edition. If the
  house's counsel reads the Loi Évin as requiring the French sanitary message
  on all editions regardless of language, that is a one-line change back.
- **`public/Distillery`, `public/Cellars` and `public/Vineyards`** hold ~206 MB
  of camera-original photography, including nine Nikon `.NEF` raw files (94 MB)
  that no browser can display. They are unreferenced by the site but are
  deployed and publicly downloadable — kept that way at your request. If deploy
  size or download costs ever matter, moving them out of `public/` is a
  five-minute change with no visible effect on the site.
