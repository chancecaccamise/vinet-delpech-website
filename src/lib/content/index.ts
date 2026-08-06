import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { en, type Content } from "@/lib/content/en";
import { fr } from "@/lib/content/fr";
import { es } from "@/lib/content/es";
import {
  brandAssets,
  familyAssets,
  featurePanelAssets,
  knowHowFigures,
  serviceSlugs,
  tastingSlugs,
  tourSlugs,
  type Brand,
  type Experience,
  type FeaturePanel,
  type NavGroup,
  type Service,
  type SpiritFamily,
  type SpiritFamilySlug,
} from "@/lib/site";

export type { Content };

const dictionaries: Record<Locale, Content> = { en, fr, es };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/**
 * Fill `{name}`-style placeholders. Deliberately tiny — the site has a handful
 * of interpolated strings ("{count} brands"), and a full ICU formatter would be
 * more machinery than the copy warrants.
 */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}

/** "1 brand" / "4 brands", in the current language. */
export function pluralize(one: string, other: string, count: number): string {
  return count === 1 ? fill(one, { count }) : fill(other, { count });
}

// ---------------------------------------------------------------------------
// Builders — structure (slugs, images, URLs, numbers) from site.ts married to
// the translated strings above. Components consume these, never the raw
// dictionaries, so a locale can never carry a different image or product link.
// ---------------------------------------------------------------------------

export function getBrands(locale: Locale): Brand[] {
  const c = getContent(locale);
  return brandAssets.map((asset) => ({ ...asset, ...c.brands[asset.slug] }));
}

export function getBrandsInFamily(locale: Locale, family: SpiritFamilySlug): Brand[] {
  return getBrands(locale).filter((brand) => brand.family === family);
}

export function getSpiritFamilies(locale: Locale): SpiritFamily[] {
  const c = getContent(locale);
  return familyAssets.map((asset) => ({ ...asset, ...c.families[asset.slug] }));
}

export function findSpiritFamily(locale: Locale, slug: string): SpiritFamily | undefined {
  return getSpiritFamilies(locale).find((family) => family.slug === slug);
}

export function getServices(locale: Locale): Service[] {
  const c = getContent(locale);
  return serviceSlugs.map((slug) => ({ slug, ...c.savoirFaire.services[slug] }));
}

export function getKnowHow(locale: Locale) {
  const c = getContent(locale);
  return {
    title: c.knowHow.title,
    body: c.knowHow.body,
    figures: knowHowFigures.map((figure) => ({
      value: figure.value,
      suffix: figure.suffix,
      label: c.knowHow.figureLabels[figure.key],
    })),
    details: [c.knowHow.details.certified, c.knowHow.details.languages, c.knowHow.details.rd],
  };
}

export function getFeaturePanels(locale: Locale): FeaturePanel[] {
  const c = getContent(locale);
  const knowHow = getKnowHow(locale);

  return featurePanelAssets.map((asset) => {
    const copy = c.featurePanels[asset.slug];
    // The know-how panel reuses the know-how block's own title, body and
    // specs rather than restating them in the dictionary.
    const isKnowHow = asset.slug === "know-how";
    return {
      ...asset,
      title: isKnowHow ? knowHow.title : (copy as { title: string }).title,
      body: isKnowHow ? knowHow.body : (copy as { body: string }).body,
      cta: { label: copy.ctaLabel, href: localizePath(locale, "/#contact") },
      frameLabel: copy.frameLabel,
      figures: isKnowHow ? knowHow.figures : undefined,
      details: isKnowHow ? knowHow.details : undefined,
    };
  });
}

export function getTours(locale: Locale): Experience[] {
  const c = getContent(locale);
  return tourSlugs.map((slug) => ({
    slug,
    ...c.tours.items[slug],
    price: c.experiences.onEnquiry,
  }));
}

export function getTastings(locale: Locale): Experience[] {
  const c = getContent(locale);
  return tastingSlugs.map((slug) => ({
    slug,
    ...c.tastings.items[slug],
    price: c.experiences.onEnquiry,
  }));
}

/**
 * The grouped navigation, with every href already carrying the locale prefix.
 * Building it here (rather than storing hrefs per language) is what keeps the
 * three editions structurally identical.
 */
export function getNav(locale: Locale): NavGroup[] {
  const c = getContent(locale);
  const path = (p: string) => localizePath(locale, p);
  const families = getSpiritFamilies(locale);

  const aboutHrefs = ["/#bespoke", "/#know-how", "/#timeline", "/#president", "/#know-how"];
  const visitHrefs = ["/visit", "/visit/tours", "/visit/tastings", "/visit#book", "/visit#practical"];
  const contactHrefs = ["/#contact", "/#contact", "/#contact", "/visit#book"];

  return [
    {
      label: c.nav.about.label,
      href: path("/#know-how"),
      links: c.nav.about.links.map((label, index) => ({ label, href: path(aboutHrefs[index]) })),
      featured: {
        heading: c.nav.about.featuredHeading,
        items: [
          { ...c.nav.about.featured[0], href: path("/#know-how") },
          { ...c.nav.about.featured[1], href: path("/#timeline") },
        ],
      },
      viewAll: { label: c.nav.about.viewAll, href: path("/#know-how") },
    },
    {
      label: c.nav.partnerships.label,
      href: path("/partnerships"),
      // One link per category rather than one per bottle: twelve product names
      // outgrew the column, and a visitor arrives knowing the category they
      // work in long before they know a brand's name.
      links: [
        { label: c.nav.partnerships.overview, href: path("/partnerships") },
        ...families.map((family) => ({
          label: family.name,
          href: path(`/partnerships/${family.slug}`),
        })),
      ],
      featured: {
        heading: c.nav.partnerships.featuredHeading,
        // Cognac, gin and rum — the three the house leads with.
        items: (["cognac", "gin", "rum"] as const).map((slug, index) => {
          const family = families.find((entry) => entry.slug === slug)!;
          return {
            label: family.name,
            href: path(`/partnerships/${slug}`),
            frameLabel: c.nav.partnerships.featuredFrameLabels[index],
            image: family.image,
          };
        }),
      },
      viewAll: { label: c.nav.partnerships.viewAll, href: path("/partnerships") },
    },
    {
      label: c.nav.visit.label,
      href: path("/visit"),
      links: c.nav.visit.links.map((label, index) => ({ label, href: path(visitHrefs[index]) })),
      featured: {
        heading: c.nav.visit.featuredHeading,
        items: [
          { ...c.nav.visit.featured[0], href: path("/visit/tours#cellar-and-distillery-tour") },
          { ...c.nav.visit.featured[1], href: path("/visit/tastings#signature-tasting") },
        ],
      },
      viewAll: { label: c.nav.visit.viewAll, href: path("/visit") },
    },
    {
      label: c.nav.contact.label,
      href: path("/#contact"),
      links: c.nav.contact.links.map((label, index) => ({
        label,
        href: path(contactHrefs[index]),
      })),
      featured: {
        heading: c.nav.contact.featuredHeading,
        items: [{ ...c.nav.contact.featured[0], href: path("/#contact") }],
      },
    },
  ];
}

/** Flat top-level items — used by the footer. */
export function getTopLevelNav(locale: Locale) {
  return getNav(locale).map((group) => ({ label: group.label, href: group.href }));
}
