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
  email: "contact@vinet-puranik.com",
  phone: "+33 5 46 49 10 10",
  address: "3, impasse Félix Chartier, 17520 Brie-sous-Archiac, France",
  region: "Cognac, France",
  social: {
    // TODO(launch): replace with the house's real profile URLs.
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
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
  /** Packshot path under /public; falls back to the placeholder frame. */
  image?: string;
};

export type NavGroup = {
  label: string;
  /** Where the top-level item itself navigates (already locale-prefixed). */
  href: string;
  /** Left text-link column of the megamenu. */
  links: NavLink[];
  /** Right featured area: small-caps heading + labeled image cards. */
  featured: { heading: string; items: NavFeaturedItem[] };
  viewAll?: NavLink;
};

// ---------------------------------------------------------------------------
// Hero media
// ---------------------------------------------------------------------------

export const heroMedia = {
  // TODO(launch): the supplied master is ~42 MB — well over the ≤ 8 MB budget.
  // Re-encode (H.264 + a .webm sibling, ~2560×1440, no audio track) before
  // go-live, and export a first-frame JPEG to replace the SVG poster.
  videoSrc: "/media/HeroVideoVinetDelpech.mp4" as string | null,
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
 * `aperitifs` carries the two lower-strength grape products and Sephina, which
 * is sold as a spirit drink rather than a cognac: it is 56% VSOP cognac cut
 * with 44% Pineau des Charentes, so it cannot sit under the AOC.
 */
export type SpiritFamilySlug =
  | "cognac"
  | "whisky"
  | "rum"
  | "gin"
  | "vodka"
  | "aperitifs";

export type BrandSlug = (typeof brandAssets)[number]["slug"];

export type Brand = {
  slug: string;
  name: string;
  family: SpiritFamilySlug;
  category: string;
  descriptor: string;
  frameLabel: string;
  image?: string;
  /** Producer/product page. "View details" links out when present. */
  url?: string;
};

/**
 * Brand identity: slug, trade name, category membership, packshot and the
 * producer's own product page. Names are trade marks and stay as they are in
 * every language; `category`, `descriptor` and `frameLabel` are translated.
 */
export const brandAssets = [
  {
    slug: "hold-up",
    name: "Gin Hold Up",
    family: "gin",
    image: "/products/hold-up.jpg",
    url: "https://lesbruleriesmodernes.com/produit/hold-up/",
  },
  {
    slug: "palisson-batch-01",
    name: "Palisson Batch 01",
    family: "whisky",
    image: "/products/palisson-batch-01.jpg",
    url: "https://lesbruleriesmodernes.com/produit/palisson-batch-01/",
  },
  {
    slug: "brigitte-et-louise-blanc",
    name: "Brigitte et Louise Blanc",
    family: "aperitifs",
    image: "/products/brigitte-et-louise-blanc.jpg",
    url: "https://lesbruleriesmodernes.com/produit/brigitte-et-louise-blanc/",
  },
  {
    slug: "brigitte-et-louise-rouge",
    name: "Brigitte et Louise Rouge",
    family: "aperitifs",
    image: "/products/brigitte-et-louise-rouge.jpg",
    url: "https://lesbruleriesmodernes.com/produit/brigitte-et-louise-rouge/",
  },
  {
    slug: "maca-rum",
    name: "MACA Rum",
    family: "rum",
    image: "/products/maca-rum.jpg",
    url: "https://www.maca-spirits.com/maca-rum-classique",
  },
  {
    slug: "tijuca",
    name: "TIJUCA Brazilian Rum",
    family: "rum",
    image: "/products/tijuca.jpg",
    url: "https://tijuca.fr/en/product/brazilian-blended-rum/",
  },
  {
    slug: "gigi-en-provence",
    name: "Gigi en Provence",
    family: "gin",
    image: "/products/gigi-en-provence.jpg",
    url: "https://gigienprovence.fr/",
  },
  {
    slug: "patte-blanche",
    name: "Patte Blanche",
    family: "cognac",
    image: "/products/patte-blanche.jpg",
    url: "https://cognacpatteblanche.com/",
  },
  {
    slug: "sephina",
    name: "Sephina",
    family: "aperitifs",
    image: "/products/sephina.jpg",
    url: "https://sephinaspirits.com/",
  },
  {
    slug: "gin40",
    name: "GIN40",
    family: "gin",
    image: "/products/gin40.jpg",
    url: "https://gin40.com/product-page/bouteille-gin-40-50cl",
  },
  {
    slug: "nade-vodka-2022",
    name: "Nade Vodka 2022 Vintage",
    family: "vodka",
    image: "/products/nade-vodka-2022.jpg",
    url: "https://www.maison-mounicq.com/en/products/vodka-nade-millesime-2022",
  },
  {
    slug: "nade-vodka-2019",
    name: "Nade Vodka 2019 Vintage",
    family: "vodka",
    image: "/products/nade-vodka-2019.jpg",
    url: "https://www.maison-mounicq.com/en/products/vodka-millesime-2019-vieillie-en-fut-de-fronsac",
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  family: SpiritFamilySlug;
  image: string;
  url: string;
}[];

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
 * aged grain and cane spirits, the white spirits, and finally the
 * lower-strength grape products.
 *
 * Membership is not listed here: it is derived from each brand's `family`, so a
 * brand can never appear on two pages or none.
 */
export const familyAssets = [
  { slug: "cognac", image: "/products/patte-blanche.jpg" },
  { slug: "whisky", image: "/products/palisson-batch-01.jpg" },
  { slug: "rum", image: "/products/maca-rum.jpg" },
  { slug: "gin", image: "/products/hold-up.jpg" },
  { slug: "vodka", image: "/products/nade-vodka-2022.jpg" },
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
  { slug: "bespoke", image: "/media/VSOPGraphic.png", mediaSide: "left" },
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

/**
 * Supplied black-and-white portrait. Intrinsic size is only 356 × 752, so the
 * layout keeps the column narrow — anything wider than ~340 CSS px will start
 * to soften on high-density screens. Ask the house for a larger file.
 */
export const presidentPortrait = {
  src: "/media/vinetDelpechPresidentPortrait.jpg",
  width: 356,
  height: 752,
} as const;

export const presidentSignatureName = "Bruno Delannoy";

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
  "bespoke-spirits-masterclass",
] as const;

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
};

/** The two cards on /visit, in order, with the routes they lead to. */
export const visitEntryHrefs = ["/visit/tours", "/visit/tastings"] as const;

// TODO(launch): create these pages (or link to hosted policies) before go-live.
export const footerLegalHrefs = ["#", "#", "#", "#"] as const;

/** Absolute URL for a locale's edition of a path, for canonicals and sitemaps. */
export function absoluteUrl(locale: Locale, path = "/"): string {
  const suffix = path === "/" ? "" : path;
  return `${siteConfig.url}/${locale}${suffix}`;
}
