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
  // (app/actions/contact.ts), every mailto on /visit and in
  // ExperienceSection, the footer, and the Organization JSON-LD.
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

export type NavLink = { label: string; href: string };

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
 * appellation claim. Jus d'Manguier and Mangeaux are fruit liqueurs — neither
 * grape-based nor apéritif strength — so they do not belong under `aperitifs`
 * either.
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
 * The house's own bottles — the Puranique range, plus Montlieu and Glen Mac
 * Clay. Kept in their own array rather than interleaved with the partner
 * records so `HouseBrandSlug` is derived rather than hand-listed, and so
 * `origin: "house"` is pinned by the satisfies clause below instead of being
 * typed out nine times and trusted.
 *
 * These carry the brochure's long-form copy (`c.houseBrands.items`); partner
 * records do not, which is why the two live in separate dictionary blocks.
 *
 * Packshots: six are the house's own studio files, refitted to the 4:5 card —
 * the vodka, both cognacs, both liqueurs and Glen Mac Clay. Each is centred on
 * the bottle rather than on its content box, since several trail a shadow to
 * one side that would otherwise drag the composition off-centre.
 *
 * TODO(assets): the remaining three — both Pineaux and Montlieu — are still
 * crops recovered from the brochure PDF and top out around 500 px wide, against
 * the 1000 x 1250 the partner packshots use. Since the story-block cap was
 * lifted they render slightly soft at full column width; ask the house for
 * studio files to match the other six.
 */
export const houseBrandAssets = [
  {
    slug: "puranique-vodka",
    name: "Puranique Vodka",
    family: "vodka",
    origin: "house",
    image: "/spirits/puranique-vodka.webp",
    figures: [{ key: "distillations", value: 9, suffix: "×" }],
    // TODO(confirm): the 94-point score is unattributed in the brochure, and a
    // gold *and* a silver from one competition in one year is unusual. Confirm
    // both with the house before these are published.
    awards: [
      {
        competition: "London Spirits Competition",
        year: 2018,
        rank: "gold",
        image: "/awards/lsc-gold-2018.png",
      },
      {
        competition: "London Spirits Competition",
        year: 2018,
        rank: "silver",
        image: "/awards/lsc-silver-2018.png",
      },
      { rank: "score", score: 94 },
    ],
  },
  {
    slug: "puranique-cognac-vs",
    name: "Puranique Cognac V.S",
    family: "cognac",
    origin: "house",
    image: "/spirits/puranique-cognac-vs.webp",
    figures: [{ key: "ageing", value: 2, suffix: "" }],
    // TODO(confirm): awarding panel unknown.
    awards: [{ rank: "score", score: 88 }],
  },
  {
    slug: "puranique-cognac-vsop",
    name: "Puranique Cognac V.S.O.P",
    family: "cognac",
    origin: "house",
    image: "/spirits/puranique-cognac-vsop.webp",
    figures: [{ key: "ageing", value: 4, suffix: "" }],
    // TODO(confirm): awarding panel unknown.
    awards: [{ rank: "score", score: 92 }],
  },
  {
    slug: "jus-d-manguier",
    name: "Jus d'Manguier",
    family: "liqueurs",
    origin: "house",
    image: "/spirits/jus-d-manguier.webp",
    // TODO(confirm): awarding panel unknown.
    awards: [{ rank: "score", score: 92 }],
  },
  {
    slug: "mangeaux",
    name: "Mangeaux",
    family: "liqueurs",
    origin: "house",
    image: "/spirits/mangeaux.webp",
    // TODO(confirm): the brochure says "New York Spirits & Wine", most likely
    // the New York World Wine & Spirits Competition. Confirm name and year.
    awards: [{ competition: "New York Spirits & Wine Competition", rank: "silver" }],
  },
  // Pineau splits into two records, following the brigitte-et-louise-blanc /
  // -rouge precedent already in the partner array: two bottles, two tasting
  // profiles, one shared heritage.
  //
  // TODO(confirm): the four medals are printed for the Pineau range as a whole.
  // Establish which colour won which before go-live — a medal claim on the
  // wrong expression is a labelling problem, not a copy nit. If the house
  // cannot confirm, strip them from both records.
  {
    slug: "puranique-pineau-blanc",
    name: "Puranique Pineau des Charentes Blanc",
    family: "aperitifs",
    origin: "house",
    image: "/spirits/puranique-pineau-blanc.png",
    awards: [
      {
        competition: "Concours Mondial des Féminalise",
        rank: "gold",
        image: "/awards/feminalise-gold.png",
      },
      {
        competition: "Concours Mondial de Bruxelles",
        year: 2022,
        rank: "gold",
        image: "/awards/bruxelles-gold-2022.png",
      },
      {
        competition: "Concours Général Agricole Paris",
        year: 2023,
        rank: "bronze",
        image: "/awards/paris-bronze-2023.png",
      },
      {
        competition: "Women's International Trophy",
        year: 2022,
        rank: "gold",
        image: "/awards/womens-trophy-2022.png",
      },
    ],
  },
  {
    slug: "puranique-pineau-rouge",
    name: "Puranique Pineau des Charentes Rouge",
    family: "aperitifs",
    origin: "house",
    image: "/spirits/puranique-pineau-rouge.png",
    awards: [
      {
        competition: "Concours Mondial des Féminalise",
        rank: "gold",
        image: "/awards/feminalise-gold.png",
      },
      {
        competition: "Concours Mondial de Bruxelles",
        year: 2022,
        rank: "gold",
        image: "/awards/bruxelles-gold-2022.png",
      },
      {
        competition: "Concours Général Agricole Paris",
        year: 2023,
        rank: "bronze",
        image: "/awards/paris-bronze-2023.png",
      },
      {
        competition: "Women's International Trophy",
        year: 2022,
        rank: "gold",
        image: "/awards/womens-trophy-2022.png",
      },
    ],
  },
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
    name: "Gin Hold Up",
    family: "gin",
    origin: "partner",
    image: "/products/hold-up.jpg",
    url: "https://lesbruleriesmodernes.com/produit/hold-up/",
  },
  {
    slug: "palisson-batch-01",
    name: "Palisson Batch 01",
    family: "whisky",
    origin: "partner",
    image: "/products/palisson-batch-01.jpg",
    url: "https://lesbruleriesmodernes.com/produit/palisson-batch-01/",
  },
  {
    slug: "brigitte-et-louise-blanc",
    name: "Brigitte et Louise Blanc",
    family: "aperitifs",
    origin: "partner",
    image: "/products/brigitte-et-louise-blanc.jpg",
    url: "https://lesbruleriesmodernes.com/produit/brigitte-et-louise-blanc/",
  },
  {
    slug: "brigitte-et-louise-rouge",
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
 * Four categories are fronted by the house's own bottle rather than a partner's
 * — a category card carrying our own label reads stronger than one carrying
 * someone else's. TODO(confirm): check this with the house, since it changes
 * which brand a visitor meets first in each category.
 */
export const familyAssets = [
  { slug: "cognac", image: "/spirits/puranique-cognac-vsop.webp" },
  { slug: "brandy", image: "/spirits/montlieu-xo.png" },
  { slug: "whisky", image: "/products/palisson-batch-01.jpg" },
  { slug: "rum", image: "/products/maca-rum.jpg" },
  { slug: "gin", image: "/products/hold-up.jpg" },
  { slug: "vodka", image: "/spirits/puranique-vodka.webp" },
  { slug: "liqueurs", image: "/spirits/mangeaux.webp" },
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
  // panel-bespoke.webp stays on disk as an archive.
  { slug: "bespoke", image: "/media/estate/panel-bespoke-cellar.webp", mediaSide: "left" },
  // `slug` is the anchor id: the nav and megamenus link to /#know-how.
  { slug: "know-how", image: "/media/distilleryImage.jpg", mediaSide: "right" },
] as const satisfies readonly {
  slug: "bespoke" | "know-how";
  image: string;
  mediaSide: "left" | "right";
}[];

// ---------------------------------------------------------------------------
// Timeline and president
// ---------------------------------------------------------------------------

export type TimelineEntry = { year: string; body: string };

// The tall black-and-white Bruno portrait (/media/vinetDelpechPresidentPortrait.jpg)
// is no longer referenced: the home page leadership section uses the circular
// pair in `leaderPortraits` below. The file stays on disk as an archive.

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

export const aboutSkillImages = [
  "/media/estate/skill-quality.webp",
  "/media/estate/skill-reliability.webp",
  "/media/estate/skill-export.webp",
] as const;

/**
 * Circular portraits of the two people who speak for the house, harvested from
 * the brochure. They serve both leadership sections: the pair on /about and
 * the two-voice "word from our leadership" on the home page.
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
 * The team photograph — a 1800 × 782 panorama, laid out on its own aspect ratio
 * rather than cropped to a band, so no one is lost at either end of the frame.
 */
export const teamImage = {
  src: "/media/vinetDelpechTeamImage.jpg",
  width: 1800,
  height: 782,
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
// Visit us — tours & tastings.
// TODO(launch): every offering (names, durations, group sizes, languages,
// inclusions, prices, opening arrangements) is a structured placeholder.
// Confirm the real programme with the house before go-live.
// ---------------------------------------------------------------------------

export const tourSlugs = [
  "discovery-tour",
  "cellar-and-distillery-tour",
  "heritage-tour",
] as const;

export const tastingSlugs = [
  "signature-tasting",
  "cognac-and-pineau-flight",
] as const;

/**
 * Photography for each experience, from the house's cellar, distillery and
 * vineyard galleries. Cropped to the 4:3 box `ExperienceSection` draws.
 *
 * TODO(assets): real tasting-room photography now exists but only one frame
 * of it — the ageing-line bench on the flight card. The other two tastings
 * still borrow the nearest production and cellar imagery; replace once more
 * of the tasting room is shot.
 */
export const experienceImages: Record<TourSlug | TastingSlug, string> = {
  "discovery-tour": "/media/estate/tour-cellar.webp",
  "cellar-and-distillery-tour": "/media/estate/tour-distillery.webp",
  "heritage-tour": "/media/estate/tour-vineyard.webp",
  "signature-tasting": "/media/estate/tasting-signature.webp",
  "cognac-and-pineau-flight": "/media/estate/tasting-room.webp",
};

export type TourSlug = (typeof tourSlugs)[number];
export type TastingSlug = (typeof tastingSlugs)[number];

export type Experience = {
  slug: string;
  name: string;
  duration: string;
  groupSize: string;
  languages: string;
  includes: readonly string[];
  price: string;
  body: string;
  frameLabel: string;
  /** Estate photograph; falls back to the labelled frame when absent. */
  image?: string;
};

/** The two cards on /visit, in order, with the routes they lead to. */
export const visitEntryHrefs = ["/visit/tours", "/visit/tastings"] as const;

/** Photographs for those two cards, in the same order. 16:10. */
export const visitEntryImages = [
  "/media/estate/visit-tours-card.webp",
  "/media/estate/visit-tastings-card.webp",
] as const;

/**
 * Shown beside the practical details. The slot was drawn as a map placeholder;
 * the house supplied drone imagery rather than a map, so it now carries an
 * aerial of the estate and its vineyards.
 *
 * TODO(confirm): a visitor looking for directions is better served by a real
 * map. Check whether the house wants one here instead.
 */
export const visitEstateImage = "/media/estate/visit-estate-aerial.webp";

/**
 * Destinations for the footer's Capabilities column, positional against
 * `footer.capabilities` in the dictionaries. Three entries, three distinct
 * sections — the earlier list had four labels all pointing at one anchor,
 * which read as broken. Dry-goods sourcing and custom bottling are rows of
 * the six-métiers list the first link lands on.
 */
export const footerCapabilityHrefs = ["/#bespoke", "/#know-how", "/#production"] as const;

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
