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

**Two Puranique packshots remain as cover images, not as products.** The
Partners card for Puranique is fronted by the Cognac V.S.O.P bottle, and on
3 September the Liqueurs category cover became a **Jus d'Manguier** packshot at
the house's request: every other category on `/private-label` is fronted by a
bottle, and the still-house photograph that stood there read as a picture of
the building rather than an example of the category. Neither bottle is listed,
linked or described anywhere: they have no brand card, no product page and no
entry in `brandAssets`. **Both labels carry the Maison D' Puranique mark and it
is legible at card size** — if the house wants the mark off the site
altogether, these two covers are what is left to change.

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
- **Tours and tastings** no longer carry any placeholder programme. Both
  pages say what the house told us — visits and tastings by prior appointment,
  arranged through the office — with a button to the enquiry form and the
  house email. If the house wants to publish real flights, durations or
  prices, that is new content for both pages, not something to switch back on.
- **Events.** The three entries on `/events` are samples, each carrying a
  visible **"Sample"** tag so nobody can act on them, and each deliberately
  left out of the Event structured data so no search engine can surface a date
  the house is not keeping. Replace them in `eventAssets` (`src/lib/site.ts`)
  and the `events.items` block in each dictionary, and drop the `placeholder`
  flag — that flag is what turns the rich-result markup on. If there is nothing
  to list, delete all three and the page shows a short "no events scheduled"
  message on its own.

## 7. A contradiction in the copy — now more urgent

- **Founding date.** The home page **headline** now reads "French Distilling
  Heritage Since 1777" — the claim the house asked for, and far more prominent
  than the seven supporting strings that already made it. The timeline on the
  same page attributes 1777 to the Delpech Fougerat family buying the Font
  Gireau estate, and dates the distillery itself to **1934**. Both may be
  defensible, but with the claim now in the H1 the house should confirm which
  one it is making. (A second contradiction listed here previously — a tour
  introduction promising "a full day" while the longest tour was "Half day" —
  retired with the invented tour programme; see §10.)

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
- **More of the tasting room.** One good frame exists and sits on the
  Tours & Tastings menu card; the tastings page itself shows spirit running
  off the still, because the room has only been photographed once.
- **A new team photograph.** The old panorama was removed from the home page at
  the house's request; the full-bleed band currently shows the still house.
  When a new group photograph arrives, repointing `teamImage` in
  `src/lib/site.ts` (and the `team` alt/caption in the three dictionaries) is
  the whole swap.
- **A 1440p hero video export**, ideally with a `.webm` sibling. The current
  file is 720p and 7.2 MB, which reads soft on large displays and is the
  heaviest thing a mobile visitor downloads.
- **Opening hours and map coordinates**, which would let us complete the
  local-business structured data and improve the site's showing in local
  search. Omitted rather than guessed — invented hours send visitors to a
  closed gate.

---

## 10. The distillery-first reposition (September 2026)

At the house's direction, the site now leads with the distillery rather than
any product range. What changed, in order:

- **Old `/partnerships/*` URLs redirect permanently** to `/private-label/*`
  (`redirects()` in `next.config.ts`), so links indexed before the rename in
  §4 no longer 404.
- **The home hero** carries the house's verbatim headline — "French Distilling
  Heritage Since 1777" — with the house name in the eyebrow above it and
  "Distilled. Aged. Blended. Bottled. All Under One Roof." beneath. It is a
  real content key now (`hero.title`), translated in all three dictionaries;
  the H1 is no longer the hardcoded site name. A cream introduction band under
  the hero holds the house's two positioning paragraphs (`homeIntro`).
- **The bottle rail is gone from the home page.** In its place, an estate
  showcase (`EstateShowcase`): the still house, a barrel cellar and the vines,
  beside short notes on the four métiers — distillation, ageing, blending,
  bottling. The bottles remain on the Partners and Private Labels pages. The
  four frames were derived from the house's own photography (now in
  `assets/photo-source/`) at web sizes.
- **The team band** swapped the team panorama for a wide still-house frame at
  the house's request; §9 lists the replacement photograph as wanted, and the
  original file is kept at `assets/photo-source/vinetDelpechTeamImage.jpg`.
- **The tours page** dropped its three invented programmes for the house's own
  Private Tours copy: visits by prior appointment, arranged through the
  office. **The tastings page followed on 3 September**: its two placeholder
  flights are gone and it now carries the same appointment copy, the same
  contact button and email, and one photograph. Both pages render one shared
  block (`AppointmentSection`), so how a booking is asked for is written once.
- **The home page's leadership section became the vineyards section** on
  3 September, at the house's request that the page show the estate, the
  vines and the craft rather than the people. The two leaders still speak on
  /about, which is where the nav's leadership link now goes.
- **Dead assets left the deploy**: the six retired Puranique packshots (git
  history keeps them if the range returns — §1), the six unreferenced award
  badges, and the camera-original folders (see the note below).

## 11. Copy review (3 September 2026): decisions for the house

All three dictionaries were reviewed against each other on 3 September:
mistranslations, untranslated terms, terminology drift, typography (French
narrow no-break spaces, Spanish ¿ ¡), stale references to the retired tasting
flights and home-page leadership section, and English source errors were
corrected. What remains are questions only the house can settle:

- **The house's name in prose.** The site mostly says "Distillerie
  Vinet-Puranik"; the house's own supplied copy (home introduction, both
  leadership statements) says "Vinet-Puranik Distillerie", which is also the
  registered form. Choose one; the legal notice should carry the registered
  name exactly.
- **Ownership wording.** "Independent", "family-owned" and "owned and run by
  the two families that built it" sit beside the Sawnee Group section. Confirm
  these are still the words the house wants.
- **The timeline stops before the Puranik family arrives.** The 2011 entry
  reads "Distillerie Vinet-Puranik is born" from the merger of the Delpech
  Fougerat and Vinet families; the Puranik family and the group appear nowhere
  in it. Supply the year the house took its current name and we add the entry.
- **Who is General Manager.** The 2018 entry makes Jean-Baptiste Delannoy
  General Manager; the leadership block and the legal notice name Bruno
  Delannoy. One of them is out of date.
- **"Distributed in France by Mähler-Besse."** This note renders under every
  partner brand and category page. Confirm which brands, if any, it applies
  to; it likely belonged to the Puranique range only.
- **The puraniques.com link under the house bottles.** Montlieu X.O and Glen
  Mac Clay both carry a "puraniques.com" link beneath their story. Confirm
  they are sold there, or the link comes out.
- **Menu label parity.** The English menu says "Private labels / white
  labels"; French says "Marques de distributeur" and Spanish "Marca blanca",
  shortened so the bar fits at 1280px. Say if the full pair is wanted in all
  three, accepting the bar will cross over to the drawer at a wider width.
- **Spanish "ecológico".** Used for organic products; correct in Spain, but
  in Latin America it reads as "eco-friendly". "Orgánico" is understood in
  both markets. Choose one and it changes in five places.
- **Two small facts to confirm.** GIN40's category line gives a bottle size
  ("50 cl") where every other bottle gives a strength; and "hybrid products"
  in the know-how details is unexplained jargon on a public page.

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
- **The camera originals moved out of `public/`.** The ~206 MB of source
  photography (including nine Nikon `.NEF` raw files no browser can display)
  that sat in `public/Distillery`, `public/Cellars` and `public/Vineyards` now
  lives in `assets/photo-source/`, beside the existing
  `assets/products-source/` convention — it was shipping with every deploy and
  was publicly downloadable. This reverses an earlier "keep them in public/"
  decision, made as part of the reposition (§10). The files remain in git
  history, so repository size is unchanged; only the deploy slimmed, from
  ~215 MB of `public/` to ~14 MB. The old team panorama and the six retired
  award badges (`assets/awards-source/`) moved the same way.
