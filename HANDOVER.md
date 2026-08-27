# Handover — questions for the house

Everything below needs a decision or a piece of information from Vinet-Puranik.
It is ordered by risk, not by effort. Items 1–4 carry legal or commercial
exposure; the rest are quality and completeness.

Technical setup lives in `README.md`. This file is only what we cannot answer
ourselves.

---

## 1. Pineau medal attribution — labelling risk

`src/lib/site.ts` (see the `TODO(confirm)` above `puranique-pineau-blanc`)

Four medals are printed in the brochure for the **Pineau range as a whole**.
They are currently duplicated onto **both** the Blanc and the Rouge records, so
the site claims each expression won all four.

A medal claim attached to the wrong expression is a labelling problem, not a
copy nit. **Please confirm which medal belongs to which expression.** If it
cannot be confirmed from the competition records, the safe course is to remove
them from both — which is what the code comment already recommends.

## 2. Unattributed award scores — currently invisible

Puranique Cognac V.S (88 points), V.S.O.P (92) and Jus d'Manguier (92) carry
scores with **no awarding panel named**. The site deliberately hides any score
without a competition behind it, because "92 points" from nobody in particular
reads as invented — so **these three products currently display no awards at
all**.

Naming the panels restores four award tiles. Also to confirm:

- Puranique Vodka: a **gold and a silver from the same competition in the same
  year** (London Spirits 2018) is unusual — is that right?
- Mangeaux: the brochure says "New York Spirits & Wine". Is that the New York
  World Wine & Spirits Competition, and which year?

## 3. Published contact details — two conflicts

| Field | Site currently uses | Conflict |
|---|---|---|
| Switchboard | `+33 5 46 49 10 10` | Brochure prints `+33 546 700 466` |
| House email | `contact@vinet-puranik.com` | Brochure prints `yml@vinet-delpech.com` (legacy domain) |
| Commercial email | `yml@vinet-delpech.com` | Still on the pre-rebrand domain |

These are not cosmetic any more: they now feed the **Organization structured
data**, which Google can surface directly in search results, and the house
email is also the fallback shown to a visitor if the enquiry form fails.

## 4. The logo is an upscaled JPEG

`src/components/Logo.tsx`

The brand mark on every page — header, footer, age gate, social card — is
derived from a supplied **200 × 200 JPEG**: background knocked out, trimmed and
upscaled 4×. It is soft at large sizes and it is the first thing a visitor
sees. **Please supply the real vector artwork** (SVG or EPS) from the rebrand
pack.

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
- **Studio packshots** for both Pineaux and Montlieu X.O — the current files are
  ~500 px crops recovered from the brochure PDF, against 1000 × 1250 for the
  rest, and they render visibly soft.
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
