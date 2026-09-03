// ---------------------------------------------------------------------------
// Structure and configuration for the Vinet-Puranik site.
//
// Copy does NOT live here any more — it lives in `src/lib/content/{en,fr,es}.ts`
// and is married to the structure below by the builders in
// `src/lib/content/index.ts`.
//
// What belongs in this file: anything identical in every language. Slugs (they
// are URLs), image paths, partner links, dimensions, counts, contact details.
// If a string would be translated, it belongs in the dictionaries instead.
// ---------------------------------------------------------------------------

import type { Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Vinet-Puranik",
  legalName: "Distillerie Vinet-Puranik SAS",
  // TODO(launch): confirm the final production domain before go-live.
  url: "https://www.vinet-puranik.com",
  // TODO(confirm): the house brochure prints yml@vinet-delpech.com — the
  // LEGACY domain — while this whole site is branded Vinet-Puranik. Do not
  // swap this without sign-off: it feeds the enquiry form fallback
  // (app/actions/contact.ts), every mailto on /visit and its tours and
  // tastings pages, the footer, and the Organization JSON-LD.
  email: "contact@vinet-puranik.com",

  // TODO(confirm): the brochure prints +33 546 700 466 against the named
  // commercial contact. That is a different number from this switchboard
  // (49 10 10 against 70 04 66) — establish which should be published.
  phone: "+33 5 46 49 10 10",
  address: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France",
  region: "Cognac, France",
  /** The Puranique product-brand site, printed on the brochure's back page. */
  brandSite: "https://www.puraniques.com",

  /**
   * Named commercial contact. The name is structural; the role label is
   * translated via `c.contact.commercialRole`.
   */
  commercial: {
    name: "Yiyi Ma-Ladrat",
    email: "yml@vinet-delpech.com", // TODO(confirm): legacy domain, see above.
    phone: "+33 546 700 466", // TODO(confirm): see above.
    portrait: { src: "/media/contactYiyiMaLadrat.png", width: 486, height: 485 },
  },

  social: {
    linkedin: "https://www.linkedin.com/company/vinet-puranik-distillerie/",
    // The house's live page still carries the pre-rebrand Vinet-Delpech name.
    facebook: "https://www.facebook.com/VinetDelpech/",
    instagram: "https://www.instagram.com/vinetpuranik/",
    /** Product-brand accounts — shown against the range, not in the footer. */
    productInstagram: [
      "https://www.instagram.com/puranique/",
      "https://www.instagram.com/puranique_gold/",
    ],
  },
} as const;

// Legal-age gate. One knob — 18 for France and most of the EU. The messages
// interpolate it, so changing it here carries through every language.
export const MINIMUM_AGE = 18;

export type NavLink = {
  label: string;
  href: string;
  /**
   * Leaves the site. Only Puranique does, today: it has its own site and the
   * house asked that its range not be restated here, so the menu hands the
   * visitor over rather than pretending to a page we do not have.
   */
  external?: boolean;
};

export type NavFeaturedItem = {
  label: string;
  href: string;
  /** Caption for the placeholder image frame until real photography exists. */
  frameLabel: string;
  /** Image path under /public; falls back to the placeholder frame. */
  image?: string;
  /**
   * True for bottle packshots, which keep the products' tall 4:5 canvas.
   * Estate photography renders on the 3:2 landscape frame instead — the
   * nav-* files are shot 672 × 448, and a portrait crop of them read as a
   * zoomed-in sliver.
   */
  packshot?: boolean;
  /** Leaves the site — see `NavLink.external`. */
  external?: boolean;
};

export type NavGroup = {
  label: string;
  /** Where the top-level item itself navigates (already locale-prefixed). */
  href: string;
  /**
   * Left text-link column of the megamenu. Omit — along with `featured` — for a
   * top-level item that is simply a link: Contact goes straight to the enquiry
   * form, and a panel offering four ways to reach the same place was friction
   * rather than navigation. `Header` renders those with no panel, no
   * `aria-haspopup`, and no accordion in the mobile drawer.
   */
  links?: NavLink[];
  /** Right featured area: small-caps heading + labeled image cards. */
  featured?: { heading: string; items: NavFeaturedItem[] };
  viewAll?: NavLink;
};

// ---------------------------------------------------------------------------
// Hero media
// ---------------------------------------------------------------------------

export const heroMedia = {
  // The house's own banner edit: H.264, 1280 × 720, ~21 s, no audio track,
  // 7.2 MB — inside the ≤ 8 MB budget. The poster is an aerial of the estate
  // from the vineyard gallery, matching the footage's opening shot so the
  // hand-off from still to video does not jump.
  //
  // TODO(launch): 720p reads soft on large displays — ask the house for a
  // 1440p export (plus a .webm sibling) if one exists.
  videoSrc: "/media/distillerybanner.mp4" as string | null,
  poster: "/media/estate/hero-poster.webp",
} as const;

// ---------------------------------------------------------------------------
// Savoir-faire — the six métiers. Slugs are anchor ids.
// ---------------------------------------------------------------------------

export const serviceSlugs = [
  "creation",
  "sourcing",
  "advisory",
  "regulatory",
  "bottling",
  "quality",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type Service = { slug: ServiceSlug; title: string; body: string };

// ---------------------------------------------------------------------------
// Know-how figures. Values come from the house's own "Know-how & Innovation"
// sheet — 13 stills and 4 bottling lines. Labels are translated.
// ---------------------------------------------------------------------------

export const knowHowFigures = [
  { key: "stills", value: 13, suffix: "" },
  { key: "lines", value: 4, suffix: "" },
  { key: "vats", value: 22000, suffix: " hL" },
  { key: "warehouse", value: 2200, suffix: " m²" },
  { key: "vineyard", value: 100, suffix: " ha" },
] as const;

export type KnowHowFigureKey = (typeof knowHowFigures)[number]["key"];
export type FeatureFigure = { value: number; suffix: string; label: string };
export type FeatureDetail = { label: string; body: string };

// ---------------------------------------------------------------------------
// The collection — brands the house makes for partners.
// ---------------------------------------------------------------------------

/**
 * The spirit families the collection is split into. Taken from the house's own
 * presentation of its partnerships (gin, whisky, rum, vodka, cognac, apéritifs
 * and spirit drinks) rather than invented here — each brand's classification is
 * checked against the producer's own product page.
 *
 * `aperitifs` carries the lower-strength grape products and Sephina, which is
 * sold as a spirit drink rather than a cognac: it is 56% VSOP cognac cut with
 * 44% Pineau des Charentes, so it cannot sit under the AOC.
 *
 * `brandy` and `liqueurs` arrived with the house's own range and are kept
 * separate on purpose. Montlieu X.O is column-distilled and labelled "Finest
 * Brandy": cognac is a PDO requiring double distillation in copper pot stills
 * inside the delimited area, so filing it under `cognac` would be a false
 * appellation claim. `liqueurs` now carries no bottle at all — both mango
 * liqueurs went to puraniques.com — but it stays, because a fruit liqueur is
 * neither grape-based nor apéritif strength and would be mis-filed under
 * `aperitifs`, and because the house does still produce the category to order.
 */
export type SpiritFamilySlug =
  | "cognac"
  | "brandy"
  | "whisky"
  | "rum"
  | "gin"
  | "vodka"
  | "liqueurs"
  | "aperitifs";

/**
 * Who the bottle belongs to. The house's own range and the brands it makes for
 * partners share the category pages, so every record says which it is: the
 * discriminator drives rail order, the card's call to action, and whether the
 * long-form brochure copy in `c.houseBrands` applies.
 */
export type BrandOrigin = "house" | "partner";

/**
 * The tasting triple, always in this order — the order is structure, the notes
 * themselves are copy. Named `palate` rather than the brochure's "mouth", which
 * is the tasting convention in all three languages.
 */
export const tastingSenses = ["eye", "nose", "palate"] as const;
export type TastingSense = (typeof tastingSenses)[number];
export type TastingNote = { sense: TastingSense; note: string };

/** Medal rank. The rank is structural; the word for it is translated. */
export type AwardRank = "gold" | "silver" | "bronze" | "score";

export type BrandAward = {
  /**
   * Competition name — a proper noun, identical in every language. Omitted for
   * the brochure's unattributed point scores.
   */
  competition?: string;
  year?: number;
  rank: AwardRank;
  /** Points out of 100, for `rank: "score"`. */
  score?: number;
  /** Badge artwork, where the house supplied one. */
  image?: string;
};

/**
 * Numbers a trade buyer scans for. Values are structural, labels translated —
 * the same split `knowHowFigures` uses.
 */
export const brandFigureKeys = ["distillations", "ageing"] as const;
export type BrandFigureKey = (typeof brandFigureKeys)[number];
export type BrandFigure = { key: BrandFigureKey; value: number; suffix: string };

export type BrandSlug = (typeof brandAssets)[number]["slug"];
export type HouseBrandSlug = (typeof houseBrandAssets)[number]["slug"];

export type Brand = {
  slug: string;
  name: string;
  family: SpiritFamilySlug;
  origin: BrandOrigin;
  category: string;
  descriptor: string;
  frameLabel: string;
  image?: string;
  /** Producer/product page. Partner brands only; the house links inward. */
  url?: string;
  /**
   * The partner company whose own section on this site carries the brand.
   * Set only where that section exists: those brands are shown under Partners
   * and are left out of the private-label listings, so one bottle is never
   * both a named partner's product and an anonymous example of client work.
   */
  company?: PartnerCompanySlug;
};

/**
 * A house bottle with the brochure's long-form copy attached. Extends `Brand`,
 * so a story block can render the card fields too.
 *
 * `story` is the brochure's "Origin story" paragraph — deliberately not named
 * `origin`, which is already the house/partner discriminator.
 */
export type HouseBrand = Brand & {
  origin: "house";
  heritage: string;
  story: string;
  notes: readonly TastingNote[];
  storyFrameLabel: string;
  figures: readonly FeatureFigure[];
  awards: readonly LabelledAward[];
};

export type LabelledAward = BrandAward & { label: string };

/**
 * The house's own bottles: Montlieu X.O and Glen Mac Clay. Kept in their own
 * array rather than interleaved with the partner records so `HouseBrandSlug` is
 * derived rather than hand-listed, and so `origin: "house"` is pinned by the
 * satisfies clause below instead of being typed out twice and trusted.
 *
 * Everything under the Puranique label is deliberately absent — the five
 * Puranique bottles and, since they carry the same Maison D' Puranique mark,
 * both mango liqueurs. That range has its own site (see `siteConfig.brandSite`)
 * and the house does not want the portfolio duplicated here, so Partners links
 * out to puraniques.com rather than restating it.
 *
 * These carry the brochure's long-form copy (`c.houseBrands.items`); partner
 * records do not, which is why the two live in separate dictionary blocks.
 *
 * No record here declares `awards` any more: every awarded house bottle went
 * with the Puranique range. `getHouseBrands` is written so that stays a fact
 * about the data rather than a compile error.
 *
 * TODO(assets): Montlieu is still a crop recovered from the brochure PDF and
 * tops out around 500 px wide, against the 1000 x 1250 the partner packshots
 * use. Since the story-block cap was lifted it renders slightly soft at full
 * column width; ask the house for a studio file. Glen Mac Clay is the house's
 * own studio file, centred on the bottle rather than its content box.
 */
export const houseBrandAssets = [
  {
    slug: "montlieu-xo",
    name: "Montlieu X.O",
    family: "brandy",
    origin: "house",
    image: "/spirits/montlieu-xo.png",
    figures: [{ key: "ageing", value: 3, suffix: "" }],
  },
  {
    slug: "glen-mac-clay",
    name: "Glen Mac Clay",
    family: "whisky",
    origin: "house",
    // "-card" is a fresh filename, not a different image: the packshot was
    // once swapped in under the old name, and a same-name swap sits behind
    // the four-hour image cache (see the nav-tasting-vines note in
    // content/index.ts). The new URL is what guarantees everyone sees it.
    image: "/spirits/glen-mac-clay-card.webp",
    figures: [{ key: "ageing", value: 3, suffix: "" }],
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  family: SpiritFamilySlug;
  /** Pinned here, so a record cannot land in this array mislabelled. */
  origin: "house";
  image: string;
  figures?: readonly BrandFigure[];
  awards?: readonly BrandAward[];
}[];

// ---------------------------------------------------------------------------
// Partner companies
// ---------------------------------------------------------------------------

/**
 * The two houses that sit alongside the distillery under Partners.
 *
 * They are not interchangeable, and the `portfolio` flag is what says so.
 * Les Brûleries Modernes shares the distillery's address and its range is
 * shown here in full, so it gets a page. Puranique already has its own site;
 * the house asked that its portfolio not be restated on this one, so its card
 * is a signpost and nothing more.
 *
 * Order is the order the cards appear in.
 */
export const partnerCompanyAssets = [
  {
    slug: "les-bruleries-modernes",
    name: "Les Brûleries Modernes",
    url: "https://lesbruleriesmodernes.com",
    /** Its brands are carried here, so the card opens a page on this site. */
    portfolio: true,
    // Hold Up is the range's best studio file; the card is a portrait of the
    // company, not a claim that gin is all it makes.
    image: "/products/hold-up.jpg",
  },
  {
    slug: "puranique",
    name: "Puranique",
    url: siteConfig.brandSite,
    /** No page here: the card links straight out to puraniques.com. */
    portfolio: false,
    // One packshot as a portrait of the brand. The range itself is not
    // duplicated here — that is the whole point of this record.
    image: "/spirits/puranique-cognac-vsop.webp",
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  url: string;
  portfolio: boolean;
  image: string;
}[];

export type PartnerCompanySlug = (typeof partnerCompanyAssets)[number]["slug"];

/** A partner company with its translated copy and resolved destination. */
export type PartnerCompany = {
  slug: PartnerCompanySlug;
  name: string;
  url: string;
  portfolio: boolean;
  image: string;
  /** Where its card leads: a page here, or the company's own site. */
  href: string;
  descriptor: string;
  intro: string;
  frameLabel: string;
  linkLabel: string;
};

/**
 * The brands the house makes for partners. Identity only: slug, trade name,
 * category membership, packshot and the producer's own product page. Names are
 * trade marks and stay as they are in every language; `category`, `descriptor`
 * and `frameLabel` are translated.
 *
 * Patte Blanche, Gigi and TIJUCA are studio packshots on white, refitted to
 * the 4:5 card the same way the house's own bottles were (bottle at ~87% of
 * the frame, centred on the base). Gigi is the one deliberate full-bleed: its
 * scarf runs off the frame's right edge, so any padded fit would leave the
 * cut floating mid-card. The remaining .jpg files are the producers'
 * lifestyle shots, kept on disk as archive.
 */
export const partnerBrandAssets = [
  {
    slug: "hold-up",
    company: "les-bruleries-modernes",
    name: "Gin Hold Up",
    family: "gin",
    origin: "partner",
    image: "/products/hold-up.jpg",
    url: "https://lesbruleriesmodernes.com/produit/hold-up/",
  },
  {
    slug: "palisson-batch-01",
    company: "les-bruleries-modernes",
    name: "Palisson Batch 01",
    family: "whisky",
    origin: "partner",
    image: "/products/palisson-batch-01.jpg",
    url: "https://lesbruleriesmodernes.com/produit/palisson-batch-01/",
  },
  {
    slug: "brigitte-et-louise-blanc",
    company: "les-bruleries-modernes",
    name: "Brigitte et Louise Blanc",
    family: "aperitifs",
    origin: "partner",
    image: "/products/brigitte-et-louise-blanc.jpg",
    url: "https://lesbruleriesmodernes.com/produit/brigitte-et-louise-blanc/",
  },
  {
    slug: "brigitte-et-louise-rouge",
    company: "les-bruleries-modernes",
    name: "Brigitte et Louise Rouge",
    family: "aperitifs",
    origin: "partner",
    image: "/products/brigitte-et-louise-rouge.jpg",
    url: "https://lesbruleriesmodernes.com/produit/brigitte-et-louise-rouge/",
  },
  {
    slug: "maca-rum",
    name: "MACA Rum",
    family: "rum",
    origin: "partner",
    image: "/products/maca-rum.jpg",
    url: "https://www.maca-spirits.com/maca-rum-classique",
  },
  {
    slug: "tijuca",
    name: "TIJUCA Brazilian Rum",
    family: "rum",
    origin: "partner",
    image: "/products/tijuca.webp",
    url: "https://tijuca.fr/en/product/brazilian-blended-rum/",
  },
  {
    slug: "gigi-en-provence",
    name: "Gigi en Provence",
    family: "gin",
    origin: "partner",
    image: "/products/gigi-en-provence.webp",
    // gigienprovence.fr stopped resolving; the brand is sold through its
    // producer, Vignobles Austruy, so the card points there instead.
    url: "https://www.vignobles-austruy.com/gigi-en-provence-gin-francais/gigi-en-provence-avec-etui.html",
  },
  {
    slug: "patte-blanche",
    name: "Patte Blanche",
    family: "cognac",
    origin: "partner",
    image: "/products/patte-blanche.webp",
    // The one retailer link in this array: the producer's own site is stale,
    // so the card points at the Rendez-Vous XO listing on Cognac Expert. The
    // Google Shopping click id (`?srsltid=`) is deliberately stripped — it is
    // per-session tracking, not part of the address.
    url: "https://www.cognac-expert.com/xo-cognac/patte-blanche-rendez-vous-xo-cognac",
  },
  {
    slug: "sephina",
    name: "Sephina",
    family: "aperitifs",
    origin: "partner",
    image: "/products/sephina.jpg",
    url: "https://sephinaspirits.com/",
  },
  {
    slug: "gin40",
    name: "GIN40",
    family: "gin",
    origin: "partner",
    image: "/products/gin40.jpg",
    url: "https://gin40.com/product-page/bouteille-gin-40-50cl",
  },
  {
    slug: "nade-vodka-2022",
    name: "Nade Vodka 2022 Vintage",
    family: "vodka",
    origin: "partner",
    image: "/products/nade-vodka-2022.jpg",
    url: "https://www.maison-mounicq.com/en/products/vodka-nade-millesime-2022",
  },
  {
    slug: "nade-vodka-2019",
    name: "Nade Vodka 2019 Vintage",
    family: "vodka",
    origin: "partner",
    image: "/products/nade-vodka-2019.jpg",
    url: "https://www.maison-mounicq.com/en/products/vodka-millesime-2019-vieillie-en-fut-de-fronsac",
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  family: SpiritFamilySlug;
  /** Pinned here, so a record cannot land in this array mislabelled. */
  origin: "partner";
  image: string;
  /** Producer/product page. Every partner brand has one. */
  url: string;
  company?: PartnerCompanySlug;
}[];

/**
 * House first, partners after — this array is the order the home page rail
 * glides through, and the house's own range leads it.
 *
 * No `as const` here: both source arrays are already const-asserted, so the
 * slug union is intact without relying on const-assertion-over-spread.
 */
export const brandAssets = [...houseBrandAssets, ...partnerBrandAssets];

export type SpiritFamily = {
  slug: SpiritFamilySlug;
  name: string;
  title: string;
  summary: string;
  intro: string[];
  image: string;
};

/**
 * The category pages, in house order — the home appellation first, then the
 * other aged grape, grain and cane spirits, the white spirits, and finally the
 * liqueurs and lower-strength grape products.
 *
 * Membership is not listed here: it is derived from each brand's `family`, so a
 * brand can never appear on two pages or none.
 *
 * Every cover is a bottle the visitor will actually meet on the page behind it.
 * That is a constraint, not a preference: four of these covers used to be
 * Puranique or Les Brûleries Modernes packshots, and when those ranges moved to
 * Partners the cards were left promising bottles the page no longer listed.
 */
export const familyAssets = [
  { slug: "cognac", image: "/products/patte-blanche.webp" },
  { slug: "brandy", image: "/spirits/montlieu-xo.png" },
  { slug: "whisky", image: "/spirits/glen-mac-clay-card.webp" },
  { slug: "rum", image: "/products/maca-rum.jpg" },
  { slug: "gin", image: "/products/gin40.jpg" },
  { slug: "vodka", image: "/products/nade-vodka-2022.jpg" },
  // The one cover that is not a bottle: both mango liqueurs went to
  // puraniques.com and the category has nothing of its own left to front it.
  // The still house is the honest stand-in — this page is now an offer of what
  // the house can macerate and blend, not a shelf.
  { slug: "liqueurs", image: "/media/estate/family-liqueurs-still.webp" },
  { slug: "aperitifs", image: "/products/sephina.jpg" },
] as const satisfies readonly { slug: SpiritFamilySlug; image: string }[];

export const spiritFamilySlugs = familyAssets.map((family) => family.slug);

// ---------------------------------------------------------------------------
// Feature panels — full-bleed editorial blocks below the collection rail.
// ---------------------------------------------------------------------------

export type FeaturePanel = {
  slug: string;
  title: string;
  body: string;
  cta: NavLink;
  frameLabel: string;
  image?: string;
  /** Which half the media occupies from `lg` up; panels alternate. */
  mediaSide: "left" | "right";
  figures?: readonly FeatureFigure[];
  details?: readonly FeatureDetail[];
};

export const featurePanelAssets = [
  // The ageing cellar, not the still house: this panel sits directly above
  // the know-how panel, which is already a copper-still photograph, and the
  // two read as the same picture twice. The receding barrel aisle also suits
  // the panel's tall half-page frame, where the old tight crop of two still
  // bulbs lost all sense of place. Fresh filename to clear the image cache;
  // The spirit under the alcoholmeter, not a barrel aisle: this panel is about
  // composing a liquid to a brief and finishing it to specification, and the
  // ageing cellars already carry the sections either side of it.
  { slug: "bespoke", image: "/media/estate/panel-bespoke-spec.webp", mediaSide: "left" },
  // `slug` is the anchor id: the nav and megamenus link to /#know-how.
  // The distillation hall down its length, not a still in close-up: the panel
  // claims six stills, four bottling lines and a warehouse, and a cropped
  // copper belly shows none of that. It is also the one frame on this page
  // taken from the floor looking down the hall — the estate showcase, the team
  // band and the panel above it are all close on the same coppers.
  { slug: "know-how", image: "/media/estate/panel-knowhow-hall.webp", mediaSide: "right" },
] as const satisfies readonly {
  slug: "bespoke" | "know-how";
  image: string;
  mediaSide: "left" | "right";
}[];

// ---------------------------------------------------------------------------
// Timeline, the vineyards and the leaders
// ---------------------------------------------------------------------------

export type TimelineEntry = { year: string; body: string };

// The tall black-and-white Bruno portrait (/media/vinetDelpechPresidentPortrait.jpg)
// is no longer referenced: the leadership pair on /about uses the circular
// portraits in `leaderPortraits` below. The file stays on disk as an archive.

/**
 * Photography for the three "our skills" tiles on /about, in the same order
 * as `about.skills` in the dictionaries (quality, reliability, worldwide
 * export). All three come from the house's own galleries: the copper stills
 * for the craft, the barrel stock for held volumes, the sunrise over the
 * estate's vines for reach.
 */
/**
 * The "what we produce" section's photograph: new-make spirit running off the
 * still into a copper receiver — the closest image the galleries hold to the
 * bottling idea the slot wants.
 *
 * TODO(assets): the house runs four bottling lines and has no photograph of
 * any of them. A real bottles-being-filled shot belongs here; this pour is
 * the interim.
 */
export const productionImage = "/media/estate/production-bottling.webp";

/**
 * The estate showcase under the home hero — the still house, a barrel cellar
 * and the vines, derived from the house's own photography. The still is the
 * tall frame; the other two stack beside it.
 */
export const estateShowcaseImages = {
  stills: "/media/estate/showcase-stills.webp",
  cellar: "/media/estate/showcase-cellar.webp",
  vines: "/media/estate/showcase-vines.webp",
} as const;

/**
 * The vineyards and the region, on the home page where the leadership quotes
 * used to sit. Three frames from the house's vineyard gallery, each cut from
 * an original no other page uses: the wide view across the vines to the
 * treeline (IMG_3206), the rows running to the horizon (IMG_3193) and ripe
 * grapes on the vine (IMG_3215). The gallery's other originals already serve
 * the showcase, the visit menu, the harvest event and the tastings card.
 */
export const terroirImages = {
  landscape: "/media/estate/terroir-landscape.webp",
  rows: "/media/estate/terroir-rows.webp",
  grapes: "/media/estate/terroir-grapes.webp",
} as const;

export const aboutSkillImages = [
  "/media/estate/skill-quality.webp",
  "/media/estate/skill-reliability-barrels.webp",
  "/media/estate/skill-export.webp",
] as const;

/**
 * Circular portraits of the two people who speak for the house, harvested from
 * the brochure. They serve the leadership pair on /about; the home page no
 * longer carries a leadership section of its own.
 *
 * Both carry real alpha — the brochure masks them to a circle — so they sit on
 * cream without a plate behind them.
 *
 * TODO(assets): 486 x 485 holds to about 256 CSS px. Ask the house for the
 * originals if these are ever wanted larger.
 */
export const leaderPortraits = {
  // Square crops cut from inside the brochure's circular masks — the largest
  // clean window each vignette allows, hence the slightly different sizes.
  bruno: { src: "/media/leaderBrunoDelannoySquare.webp", width: 304, height: 304 },
  rahul: { src: "/media/leaderRahulPuranikSquare.webp", width: 320, height: 320 },
} as const;

export type LeaderKey = keyof typeof leaderPortraits;

// ---------------------------------------------------------------------------
// The Sawnee Group — the parent organisation behind the house.
// ---------------------------------------------------------------------------

/**
 * Gold world map with the group's offices pinned, from the brochure. Raster,
 * flattened out of the source deck.
 *
 * TODO(assets): ask for the vector original before this is shown any wider.
 */
export const sawneeWorldMap = {
  src: "/media/sawneeWorldMap.png",
  width: 1272,
  height: 638,
} as const;

/**
 * Group figures. Values structural, labels translated — the same split
 * `knowHowFigures` uses. Deliberately no founding year: a date counting up
 * from zero reads as a bug, which is why `knowHowFigures` holds none either.
 *
 * TODO(confirm): "more than twenty countries" has been the house figure for
 * several years and already appears in four places in the copy. Ask for the
 * current number.
 */
export const groupFigures = [
  { key: "countries", value: 20, suffix: "+" },
  { key: "offices", value: 5, suffix: "" },
  { key: "industries", value: 7, suffix: "" },
] as const;

export type GroupFigureKey = (typeof groupFigures)[number]["key"];

/**
 * The full-bleed band photograph on the home page — currently the still house,
 * cropped wide. It replaced the team panorama at the house's request; when a
 * new team photograph arrives, repointing this export is the whole swap.
 */
export const teamImage = {
  src: "/media/estate/band-still-house.webp",
  width: 2000,
  height: 860,
} as const;

// ---------------------------------------------------------------------------
// Testimonials — the slider under the team photograph on the home page.
// ---------------------------------------------------------------------------

/**
 * One slug per voice, in slider order. Quotes live in the dictionaries
 * (`c.testimonials.items`); the names below are proper nouns and stay as they
 * are in every language, the same split `siteConfig.commercial` uses.
 *
 * TODO(launch): all three are structured placeholders written for the slot —
 * no client has signed off on a quote. Replace with real quotes, real names
 * and written permission before go-live; if none arrive, drop the section
 * rather than shipping invented praise.
 */
export const testimonialSlugs = ["private-label", "creation", "export"] as const;
export type TestimonialSlug = (typeof testimonialSlugs)[number];

export const testimonialNames: Record<TestimonialSlug, string> = {
  "private-label": "Camille Roussel",
  creation: "James Ashworth",
  export: "Sofía Herrero",
};

// ---------------------------------------------------------------------------
// Visit us — tours & tastings. Neither page carries a programme any more:
// the house offers private tours and seated tastings by prior appointment,
// arranged through the office, and both pages say exactly that in the
// house's own words (`tours` and `tastings` in the dictionaries) with one
// photograph and the way in. The invented durations, group sizes and
// inclusions that used to fill both pages are gone; if the house publishes a
// real programme, it comes back as content, not as placeholders.
// ---------------------------------------------------------------------------

/**
 * The tours page photograph — the still house, from the estate gallery.
 * Its only use: every section now carries its own frame, none shared.
 */
export const privateToursImage = "/media/estate/tour-distillery.webp";

/**
 * The tastings page photograph — new-make spirit running off the still into
 * a copper receiver. The one real frame of the tasting room stays on the
 * Tours & Tastings menu card, which is what promises the room; the page
 * itself shows the liquid.
 *
 * TODO(assets): more of the tasting room, so the page can show where a
 * tasting actually happens — see HANDOVER §9.
 */
export const tastingsImage = "/media/estate/tastings-pour.webp";

/** The two cards on /visit, in order, with the routes they lead to. */
export const visitEntryHrefs = ["/visit/tours", "/visit/tastings"] as const;

/** Photographs for those two cards, in the same order. 16:10. */
export const visitEntryImages = [
  "/media/estate/card-tours-still-house.webp",
  "/media/estate/card-tastings-grapes.webp",
] as const;

/**
 * Shown beside the practical details. The slot was drawn as a map placeholder;
 * the house supplied drone imagery rather than a map, so it now carries an
 * aerial of the estate and its vineyards.
 *
 * TODO(confirm): a visitor looking for directions is better served by a real
 * map. Check whether the house wants one here instead.
 */
export const visitEstateImage = "/media/estate/visit-estate-dawn.webp";

/**
 * Destinations for the footer's Capabilities column, positional against
 * `footer.capabilities` in the dictionaries. Three entries, three distinct
 * sections — the earlier list had four labels all pointing at one anchor,
 * which read as broken. Dry-goods sourcing and custom bottling are rows of
 * the six-métiers list the first link lands on.
 */
export const footerCapabilityHrefs = ["/private-label", "/#know-how", "/#production"] as const;

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export type EventAsset = {
  slug: string;
  /** ISO 8601. The displayed form is derived per locale, never hand-written. */
  date: string;
  image: string;
  /**
   * Marks an illustrative entry. A placeholder renders with a visible "sample"
   * tag and is left out of the Event structured data, so a search engine can
   * never surface a date the house is not actually keeping. Delete the flag
   * with the sample.
   */
  placeholder?: true;
};

/**
 * Events, newest first — the order is computed in `getEvents`, so entries can
 * be added here in any order.
 *
 * TODO(launch): all three below are samples, there to show the layout. Replace
 * them with the house's real programme and drop `placeholder`. A visitor can
 * act on an event listing — travel to a trade show — so nothing here should go
 * live unreplaced.
 */
export const eventAssets: readonly EventAsset[] = [
  {
    slug: "sample-trade-tasting",
    date: "2027-02-09",
    image: "/media/estate/event-trade-tasting.webp",
    placeholder: true,
  },
  {
    slug: "sample-harvest-open-day",
    date: "2026-10-15",
    image: "/media/estate/event-harvest-bin.webp",
    placeholder: true,
  },
  {
    slug: "sample-distillery-day",
    date: "2026-06-12",
    image: "/media/estate/event-distillery-day.webp",
    placeholder: true,
  },
];

export type EventItem = {
  slug: string;
  date: string;
  /** Formatted for the current locale. */
  dateLabel: string;
  image: string;
  placeholder: boolean;
  name: string;
  location: string;
  description: string;
};

// ---------------------------------------------------------------------------
// Legal pages
// ---------------------------------------------------------------------------

/**
 * The statutory and policy pages, in footer order. Slugs stay in French for
 * `mentions-legales` because that is the name of the document in French law —
 * the same reasoning that keeps the appellations untranslated.
 *
 * `mentions-legales` leads: for a French SAS running a commercial site it is a
 * statutory requirement (Article 6 III of the LCEN), and it was the one page
 * the original four footer labels did not include.
 *
 * The pages are written to be read by a visitor, not by a lawyer: short
 * sentences, no recitals, and only what the law actually requires. Every
 * company identifier in them is real and taken from the public register
 * (see `companyRegistration` below) — the one exception is the host, which
 * cannot be known until the deployment target is chosen.
 */
export const legalSlugs = [
  "mentions-legales",
  "privacy",
  "cookies",
  "terms",
  "accessibility",
] as const;

export type LegalSlug = (typeof legalSlugs)[number];

export type LegalSection = { heading: string; body: readonly string[] };
export type LegalPage = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  sections: readonly LegalSection[];
};

/**
 * Statutory identifiers for the legal notice, from the French public register
 * (SIREN 527 250 120). Structural, so they read identically in every language.
 *
 * `vat` is derived from the SIREN by the standard French key algorithm —
 * (12 + 3 × (SIREN mod 97)) mod 97 = 84 — rather than read off a document.
 * It is almost certainly right, and takes ten seconds to confirm against VIES.
 *
 * TODO(confirm): the register lists the company as "VINET-PURANIK DISTILLERIE",
 * while `siteConfig.legalName` prints "Distillerie Vinet-Puranik SAS". A legal
 * notice should carry the registered form exactly.
 */
export const companyRegistration = {
  legalForm: "SAS",
  shareCapital: "500 000 €",
  rcsCity: "Saintes",
  siren: "527 250 120",
  siret: "527 250 120 00021",
  vat: "FR84527250120",
} as const;

// The directors of publication are NOT listed here. They are built from
// `leadership.leaders` in the dictionaries, so the legal notice takes the same
// names and titles the About page shows. The public register still lists a
// former président, which is exactly how a hard-coded name here would go stale.

/**
 * The hosting provider, named in the legal notice because the LCEN requires it.
 *
 * TODO(launch): this is the one value on the legal pages that is not yet real.
 * Replace this whole string with the host's company name, registered address
 * and telephone number once the deployment target is settled — it is
 * interpolated into one sentence in each language and appears nowhere else.
 */
export const legalHostDetails =
  "— hosting provider to be confirmed before go-live —";

/** Positional against `footer.legalLinks` in the dictionaries. */
export const footerLegalHrefs = legalSlugs.map((slug) => `/legal/${slug}`);

/** Absolute URL for a locale's edition of a path, for canonicals and sitemaps. */
export function absoluteUrl(locale: Locale, path = "/"): string {
  const suffix = path === "/" ? "" : path;
  return `${siteConfig.url}/${locale}${suffix}`;
}
