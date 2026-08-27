import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { en, type Content } from "@/lib/content/en";
import { fr } from "@/lib/content/fr";
import { es } from "@/lib/content/es";
import {
  brandAssets,
  experienceImages,
  familyAssets,
  featurePanelAssets,
  groupFigures,
  houseBrandAssets,
  companyRegistration,
  knowHowFigures,
  leaderPortraits,
  legalHostDetails,
  legalSlugs,
  serviceSlugs,
  tastingSlugs,
  tastingSenses,
  testimonialNames,
  testimonialSlugs,
  tourSlugs,
  type Brand,
  type BrandAward,
  type Experience,
  type FeatureFigure,
  type FeaturePanel,
  type HouseBrand,
  type LabelledAward,
  type LeaderKey,
  type LegalPage,
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


/**
 * The house's own bottles, with the brochure's long-form copy attached.
 *
 * Driven off `houseBrandAssets` rather than the combined list, so `asset.slug`
 * is the narrow nine-member union and `c.houseBrands.items[...]` resolves to a
 * single uniform shape.
 */
export function getHouseBrands(locale: Locale, family?: SpiritFamilySlug): HouseBrand[] {
  const c = getContent(locale);
  const labels = c.houseBrands.labels;

  return houseBrandAssets
    .filter((asset) => !family || asset.family === family)
    .map((asset) => {
      const copy = c.houseBrands.items[asset.slug];
      const figures: readonly FeatureFigure[] = ("figures" in asset ? asset.figures : []).map(
        (figure) => ({
          value: figure.value,
          suffix: figure.suffix,
          label: labels.figures[figure.key],
        }),
      );
      // An award tile reading just "92 points" with no competition behind it
      // reads as invented. The unattributed scores stay in site.ts under their
      // TODO(confirm) and return here once the house names the panel.
      // Typed as the broad award shape on purpose: the inferred filter
      // predicate would otherwise erase the score branch below, which must
      // survive for the day a score arrives with its competition named.
      const attributed: readonly BrandAward[] = ("awards" in asset ? asset.awards : []).filter(
        (award) => award.rank !== "score" || "competition" in award,
      );
      const awards: readonly LabelledAward[] = attributed.map(
        (award) => ({
          ...award,
          label:
            award.rank === "score"
              ? fill(labels.ranks.score, { score: award.score ?? 0 })
              : labels.ranks[award.rank],
        }),
      );

      return {
        ...asset,
        ...c.brands[asset.slug],
        heritage: copy.heritage,
        story: copy.story,
        storyFrameLabel: copy.storyFrameLabel,
        notes: tastingSenses.map((sense) => ({ sense, note: copy.notes[sense] })),
        figures,
        awards,
      };
    });
}

/** The partner bottles of one category — the house's own render separately. */
export function getPartnerBrandsInFamily(locale: Locale, family: SpiritFamilySlug): Brand[] {
  return getBrands(locale).filter(
    (brand) => brand.family === family && brand.origin === "partner",
  );
}

export type BrandCardCta = {
  href: string;
  label: string;
  ariaLabel: string;
  /** Producer pages open in a new tab; in-site anchors do not. */
  external: boolean;
};

/**
 * One decision point for both card consumers — the rail and the grid — so the
 * two can never disagree about where a card leads.
 *
 * A partner bottle sends you to the producer's own page. A house bottle has no
 * such page: its story sits on the category page, so the card scrolls there
 * and says "read the story" rather than promising a spec sheet elsewhere.
 */
export function getBrandCta(
  locale: Locale,
  brand: Brand,
  labels: Content["partnerships"],
): BrandCardCta | undefined {
  if (brand.url) {
    return {
      href: brand.url,
      external: true,
      label: labels.viewDetails,
      ariaLabel: fill(labels.viewDetailsAria, { name: brand.name }),
    };
  }
  if (brand.origin === "house") {
    return {
      href: localizePath(locale, `/partnerships/${brand.family}#brand-${brand.slug}`),
      external: false,
      label: labels.readTheStory,
      ariaLabel: fill(labels.readTheStoryAria, { name: brand.name }),
    };
  }
  return undefined;
}

/**
 * The legal and policy pages. Same split as everywhere else: the slugs (which
 * are URLs) live in site.ts, the prose lives in the dictionaries.
 */
export function getLegalPages(locale: Locale): LegalPage[] {
  const c = getContent(locale);
  // The statutory identifiers are structural, so the prose carries {tokens}
  // and they are filled here — one set of numbers, identical in every edition.
  const leaders = c.leadership.leaders;
  const values = {
    ...companyRegistration,
    host: legalHostDetails,
    // Names and titles come from the leadership block rather than being
    // repeated here, so the legal notice and the About page cannot disagree.
    ceoName: leaders.rahul.name,
    ceoRole: leaders.rahul.role,
    gmName: leaders.bruno.name,
    gmRole: leaders.bruno.role,
  };
  return legalSlugs.map((slug) => {
    const page = c.legal.pages[slug];
    return {
      slug,
      ...page,
      sections: page.sections.map((section) => ({
        heading: section.heading,
        body: section.body.map((paragraph) => fill(paragraph, values)),
      })),
    };
  });
}

export function findLegalPage(locale: Locale, slug: string): LegalPage | undefined {
  return getLegalPages(locale).find((page) => page.slug === slug);
}

/** The chrome shared by every legal page — the date and the way back. */
export function getLegalChrome(locale: Locale) {
  const { updatedLabel, updated, backLabel } = getContent(locale).legal;
  return { updatedLabel, updated, backLabel };
}

export type Testimonial = { slug: string; name: string; quote: string };

/**
 * The testimonial slider's voices, in `testimonialSlugs` order — quotes from
 * the dictionary, names from site.ts, per-slide dot labels pre-filled here so
 * the client component ships no interpolation of its own.
 */
export function getTestimonials(locale: Locale): {
  label: string;
  items: Testimonial[];
  dotLabels: string[];
} {
  const c = getContent(locale);
  return {
    label: c.testimonials.label,
    items: testimonialSlugs.map((slug) => ({
      slug,
      name: testimonialNames[slug],
      quote: c.testimonials.items[slug].quote,
    })),
    dotLabels: testimonialSlugs.map((_, index) =>
      fill(c.testimonials.showAria, { index: index + 1 }),
    ),
  };
}

/** The two people who speak for the house, for the leadership pair on /about. */
export function getLeaders(locale: Locale) {
  const c = getContent(locale);
  return (Object.keys(leaderPortraits) as LeaderKey[]).map((key) => ({
    key,
    portrait: leaderPortraits[key],
    ...c.leadership.leaders[key],
  }));
}

/** Sawnee Group figures, values from site.ts and labels from the dictionary. */
export function getGroupFigures(locale: Locale): FeatureFigure[] {
  const labels = getContent(locale).group.figureLabels;
  return groupFigures.map((figure) => ({
    value: figure.value,
    suffix: figure.suffix,
    label: labels[figure.key],
  }));
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
      cta: { label: copy.ctaLabel, href: localizePath(locale, "/contact") },
      frameLabel: copy.frameLabel,
      figures: isKnowHow ? knowHow.figures : undefined,
      // The bespoke panel carries the six métiers: the private-label and
      // white-label service list that had sat fully translated but unrendered
      // in `savoirFaire` since the redesign.
      details: isKnowHow
        ? knowHow.details
        : getServices(locale).map((service) => ({
            label: service.title,
            body: service.body,
          })),
    };
  });
}

export function getTours(locale: Locale): Experience[] {
  const c = getContent(locale);
  return tourSlugs.map((slug) => ({
    slug,
    ...c.tours.items[slug],
    price: c.experiences.onEnquiry,
    image: experienceImages[slug],
  }));
}

export function getTastings(locale: Locale): Experience[] {
  const c = getContent(locale);
  return tastingSlugs.map((slug) => ({
    slug,
    ...c.tastings.items[slug],
    price: c.experiences.onEnquiry,
    image: experienceImages[slug],
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

  // "Our story" leads: the page about the house outranks its home-page
  // anchors. Order is positional against c.nav.about.links in each dictionary.
  const aboutHrefs = ["/about", "/#bespoke", "/#know-how", "/#leadership", "/#timeline"];
  // "#practical" stays on the page itself; the dropdown stops listing it.
  const visitHrefs = ["/visit", "/visit/tours", "/visit/tastings", "/visit#book"];

  return [
    {
      label: c.nav.about.label,
      href: path("/about"),
      links: c.nav.about.links.map((label, index) => ({ label, href: path(aboutHrefs[index]) })),
      featured: {
        heading: c.nav.about.featuredHeading,
        items: [
          {
            ...c.nav.about.featured[0],
            href: path("/#know-how"),
            image: "/media/estate/nav-production.webp",
          },
          {
            ...c.nav.about.featured[1],
            href: path("/#timeline"),
            image: "/media/estate/nav-heritage.webp",
          },
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
            // Bottles keep the tall product canvas; every other featured
            // card is estate photography on the landscape frame.
            packshot: true,
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
          {
            ...c.nav.visit.featured[0],
            href: path("/visit/tours#cellar-and-distillery-tour"),
            image: "/media/estate/nav-tour.webp",
          },
          {
            ...c.nav.visit.featured[1],
            href: path("/visit/tastings#signature-tasting"),
            // The tasting room itself — the ageing line on the white bench —
            // which finally exists in the galleries. Fresh filename, as ever,
            // to dodge the four-hour image cache a same-name swap sits behind.
            image: "/media/estate/nav-tasting-room.webp",
          },
        ],
      },
      viewAll: { label: c.nav.visit.viewAll, href: path("/visit") },
    },
    {
      // No `links`/`featured`: Contact is a plain link straight to the
      // enquiry form, so the header gives it no panel.
      label: c.nav.contact.label,
      href: path("/contact"),
    },
  ];
}

/** Flat top-level items — used by the footer. */
export function getTopLevelNav(locale: Locale) {
  return getNav(locale).map((group) => ({ label: group.label, href: group.href }));
}
