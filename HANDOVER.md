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

## 2. Published contact details — two conflicts, one settled

| Field | Site currently uses | Conflict |
|---|---|---|
| Switchboard | `+33 546 700 466` | **Settled 11 September** — see below |
| House email | `contact@vinet-puranik.com` | Brochure prints `yml@vinet-delpech.com` (legacy domain) |
| Commercial email | `yml@vinet-delpech.com` | Still on the pre-rebrand domain |

**The switchboard number is confirmed.** The house settled the conflict on
11 September in favour of the brochure's number: `+33 546 700 466` replaces
`+33 5 46 49 10 10` everywhere — the contact page, the footer, the legal
notice and the Organization structured data. It is the same number the
brochure prints against the named commercial contact, so the contact page now
shows one line under both the Switchboard and the Commercial headings. That is
correct, not a duplication bug. If Yiyi Ma-Ladrat has a direct line, send it
and it goes in `siteConfig.commercial.phone`, which is deliberately kept as its
own field rather than aliased to the switchboard.

The two email rows are not cosmetic: they feed the **Organization structured
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

- **Founding date.** The home page **headline** reads "French Distilling
  Heritage Since 1777" — the claim the house asked for, and far more prominent
  than the seven supporting strings that already made it. The retired timeline
  (§10) attributed 1777 to the Delpech Fougerat family buying the Font Gireau
  estate and dated the distillery itself to **1934**; with that section cut,
  1777 is now the site's only stated origin and nothing on the page qualifies
  it. The house should confirm the claim it is making. (A second contradiction listed here previously — a tour
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

- **A bottling line.** The house runs four and has never photographed one.
  Nothing on the site stands in for one now: "what we produce" shows a sample
  drawn from the cask (§10), which is ageing rather than bottling.
- **Packshots for the rest of the Les Brûleries Modernes range.** Its own site
  also lists Excellency Club and Palisson batches 02 and 03, which the
  `/partners/les-bruleries-modernes` page cannot show. The two Irie rums named
  here previously are now on the page: their packshots were taken from the
  producer's own product pages in September 2026 (§10), the same route the
  rest of the collection came by.
- **Tasting copy for Glen Smith and Velorin.** Both are on the site since
  11 September (§10) as white-label bottles, and their cards say only what
  their labels say — nothing about how either tastes. Every other client card
  carries a line of tasting copy; send one for each and they match.
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
- **A lighter export of the drone clip** now in the terroir section (§10). The
  house's file is 1920 × 1080 and looks excellent, but it runs 8.1 s at about
  6.6 Mbps — more than twice the hero's bitrate — and still carries a silent
  AAC track. Re-encoding without audio at a sane bitrate takes it from 6.7 MB
  to roughly 2 MB with no visible loss. Until then the page holds the download
  back until the section is nearly in view, so it costs nothing to a visitor
  who never scrolls that far.
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
- **Three bottles arrived** (11 September): Glen Smith, Velorin Vodka and a
  studio Montlieu X.O, supplied by the house.
  - **Glen Smith and Velorin are white labels, not house brands.** The
    distillery produces them; the names on the labels belong to the clients who
    commissioned them, and neither bottle carries a Vinet-Puranik mark. They
    sit in `partnerBrandAssets` with no `company`, so they show as client cards
    on `/private-label/whisky` and `/private-label/vodka` — which now read
    2 and 3 brands — alongside Patte Blanche, Nade and the rest.

    They were briefly filed as house bottles, which put "A Vinet-Puranik brand"
    over each of them and had them claiming to be the house's own Scotch and
    vodka. That was an inference from the phrase "traditional range" and from
    their being named beside Montlieu X.O, and it was wrong. **If a bottle's
    ownership is not documented, it is a white label**: the house's own bottles
    are the ones §1 lists, and that list is the authority.

    One structural consequence: `url` on a partner record is now optional. A
    white label has no public product page, which is exactly what separates it
    from a named partner's bottle, and `getBrandCta` already returned nothing
    in that case — so those two cards simply carry no call to action.
  - **Montlieu X.O finally has a studio file.** The ~390 px brochure crop is
    gone. The new file is a different filename (`montlieu-xo-card.webp`), not a
    same-name swap, so nobody is stuck behind the four-hour image cache.
  - **The three now front their categories**, on `/private-label` and in the
    nav dropdown, which leads with whisky, vodka and brandy instead of cognac,
    gin and rum. The dropdown card takes the category cover, so the two can
    never show different bottles for the same category.
  - **All three packshots were refitted** from 1080 × 1920 originals to the
    1000 × 1250 card with the bottle at 87% of the frame, matching the rest of
    the house range. Originals are in `assets/products-source/`.

- **The home page's "every spirit, one house" photograph changed**
  (11 September) to the cellar shot the house sent: a sample drawn from an oak
  cask, the pipette in hand, the tasting glass beside the bung. It says ageing
  and blending, where the frame it replaced said distillation only. Cut
  portrait off-centre from a 3796 × 2126 original so the hand, pipette and
  glass survive — a centred crop loses all three to the barrels. The original
  is in `assets/photo-source/cellars/`, and the retired
  `production-bottling.webp` left the deploy.

- **The vodka and apéritifs pages name Puranique** (11 September) — copy only,
  the same treatment as cognac, gin and rum below.
  - **Vodka.** Nade was named in *both* paragraphs, unlike every other category
    page, so both moved. The first now says "The house distils from Bordeaux
    grapes and releases by vintage" rather than "Nade is distilled…", which
    also brings it into line with the other categories, whose opening
    paragraphs describe the house rather than a brand. The second — previously
    the 2019's Fronsac casks and 250 numbered bottles — now reads "Puranique is
    the family's own vodka. The range lives on puraniques.com rather than
    here."
  - **Apéritifs.** "Sephina is a spirit drink at 30%: 56% VSOP cognac blended
    with 44% Pineau des Charentes…" becomes "Puranique Pineau des Charentes is
    the family's own apéritif. The range lives on puraniques.com rather than
    here."
  - **No detail was lost.** Every specific these paragraphs carried is already
    in the card copy directly beneath them, verbatim: the Cabernet/Merlot/
    Sémillon line is the Nade 2022 descriptor, the Fronsac casks and 250 bottles
    are the Nade 2019 descriptor, and the 56/44 split is Sephina's. The facts
    now sit only on the bottles they belong to.
  - **All three products are untouched** — cards, copy, packshots — and Sephina
    is still the cover for the apéritifs category, Nade 2022 for vodka.

- **The rum page names Irie instead of MACA** (11 September) — copy only, like
  the gin and cognac changes below. The second paragraph read "MACA is
  distilled in Mauritius and finished in France on cinnamon and tonka bean;
  TIJUCA is a Brazilian blend"; it now opens "Irie comes from the Dominican
  Republic and from Trinidad & Tobago, amber, on tropical fruit, praline and
  caramel". Irie is two bottles, so the clause names both origins and gives the
  profile their two descriptors share, rather than picking one of the pair.

  **MACA Rum is untouched** — card, copy, packshot, and it is still the cover
  for the rum category on `/private-label`. As on the gin page, the bottle now
  named in the prose is a Brûleries Modernes one and so is not carded here; the
  grid still shows MACA Rum and TIJUCA.

- **The gin page names Hold Up instead of Gigi en Provence** (11 September),
  and, like the cognac change below, only the copy moved. The second paragraph
  read "Gigi en Provence is organic, on violet, rosemary and a discreet note of
  olive; GIN40 carries the Landes"; it now reads "Hold Up meets juniper with
  tonka bean, anise and a light citrus edge; GIN40 carries the Landes". The
  Hold Up clause is drawn from that bottle's own descriptor, so the two say the
  same thing in both places.

  **Gigi en Provence is untouched** — its card, its copy and its packshot all
  stand. One thing to know: Hold Up carries `company: "les-bruleries-modernes"`,
  and brands with a company are deliberately excluded from the private-label
  category grids (`getBrands` in `content/index.ts`). So the gin page now names
  a bottle that is not carded on it — the grid still shows Gigi en Provence and
  GIN40. That is the same shape the whisky page has always had, where the
  paragraph names Glen Mac Clay above a grid that does not list it.

- **The cognac page names Puranique instead of Patte Blanche** (11 September).
  Only the copy changed. The hero's second paragraph used to read "Patte Blanche
  is the collection's organic expression: ECOCERT-certified, hand-distilled at
  Arthenac, with no artificial input from vine to glass"; it now reads
  "Puranique is the family's own cognac. The range lives on puraniques.com
  rather than here." The sentence claims nothing beyond the name on purpose —
  the certification, the hand distillation and the vine-to-glass claim belonged
  to Patte Blanche and cannot be moved to another bottle without the house
  confirming they apply to it.

  **Patte Blanche itself is untouched**: its card still sits in the collection,
  its packshot still fronts the cognac category, and its own copy — where the
  ECOCERT and Arthenac claims still live — is unchanged in all three
  dictionaries. The page now works the way the whisky page does, where the
  second paragraph names the house's own bottling (Glen Mac Clay) above a grid
  of partner bottles.

- **Brigitte et Louise left the Brûleries Modernes range** (11 September). The
  house confirmed that the Pineau is becoming Puranique Pineau des Charentes
  and is no longer a Brûleries Modernes product, so the Blanc and Rouge cards
  were replaced by the two Irie rums — République Dominicaine and Trinidad &
  Tobago, both 41%, both listed on the producer's own site. Three notes:
  - **The company blurb changed with them.** It read "French apéritifs and
    spirits for the on-trade", and with the Pineau gone the page shows no
    apéritif at all: it now reads "Gin, whisky and rum for the on-trade". The
    intro also claimed the bottles "are made in the same courtyard"; the Irie
    rums are distilled in the Caribbean, so it now says they are finished and
    dressed there, which is what the house actually does with imported rum
    (compare the MACA Rum note). **Confirm both readings.**
  - **The Puranique blurb needed nothing.** It already lists Pineau among what
    lives on puraniques.com, so the moved product is covered where it lands.
  - **The packshots were refitted, not merely dropped in.** The producer's two
    studio shots sit high in their frames; both were recut to the 1000 × 1250
    card with the bottle at 75% of the height — the same as Gin Hold Up beside
    them — so the four cards read as one row. Originals are in
    `assets/products-source/`. The two Brigitte et Louise packshots left
    `public/products/` and are in git history at commit `7ca7714`, with their
    originals also kept in `assets/products-source/`.

- **The terroir section leads with drone footage** (11 September). The house
  supplied an aerial clip of the estate ("VD EP1 vues drones"), and it replaces
  the wide vineyard still that opened the vineyards section. It plays silently
  on a loop, muted and without controls, exactly where the photograph was.
  Three things follow from it:
  - **The caption and alt text changed in all three dictionaries.** The clip
    shows the working site from the air — the steel vats, the bottling hall,
    the courtyard, with the village and the vines around them — not a row of
    vines, so `terroir.captions.landscape` and `terroir.alts.landscape` now
    describe the estate. The caption reads "The house at Brie-sous-Archiac,
    from the air".
  - **Nothing is fetched until the section is nearly in view**, and the clip
    pauses again when it scrolls away (`AmbientVideo`). A visitor who stops
    before the vineyards never downloads it.
  - **The poster is the clip's own opening frame**, cut from the file itself,
    so the still and the footage are the same shot and the hand-off cannot
    jump. It is also what a visitor sees with reduced motion, with autoplay
    blocked, or with no JavaScript — in each case the section is simply a
    photograph again. The ground-level still it replaced
    (`terroir-landscape.webp`) left the deploy; it is in git history at
    commit `0936ae2`.

- **The heritage chronology is gone** (11 September). "Two families, one
  house" — the pinned, horizontally scrolling timeline that sat between the
  category index and the vineyards on the home page — was cut at the house's
  request: hard to read, and nothing in it of interest beyond the dates. The
  vineyard section took its white ground so the page's white/cream alternation
  still holds. Its eight dated entries, the `timeline` block in all three
  dictionaries and `src/components/Timeline.tsx` are in git history if the
  house wants them back in a plainer form. The two nav routes into it now go
  to /about: the "Our history"/"Notre chronologie" column link is gone, and
  the "Since 1777" card points at the story page. The /about cross-link to it
  went with it (`about.crossLinkHistory` is retired in all three
  dictionaries).

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
- **When the house took its current name.** The retired timeline (§10) had
  the 2011 merger of the Delpech Fougerat and Vinet families producing
  "Distillerie Vinet-Puranik", with the Puranik family and the group appearing
  nowhere in it. The question outlives the section: supply the year the house
  took its present name, and it can be stated wherever the story is told.
- **Who is General Manager.** The timeline's 2018 entry made Jean-Baptiste
  Delannoy General Manager; the leadership block and the legal notice name
  Bruno Delannoy. Cutting the timeline removed the conflicting claim from the
  site, so the pages now agree on Bruno — but confirm that is current, and
  what Jean-Baptiste's role is.
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
