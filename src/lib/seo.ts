// ---------------------------------------------------------------------------
// One place where a page's search and social metadata is assembled.
//
// Next merges metadata between segments *shallowly*: a nested object like
// `openGraph` is replaced wholesale by the last segment that defines one, and
// inherited untouched by every segment that does not. Before this file existed
// only the locale layout declared `openGraph`, so every child page inherited
// the home page's og:title, og:description and og:url — /en/about shared to
// LinkedIn as "Creators of tailor-made spirits since 1777", pointing at /en.
//
// `pageMetadata` therefore builds the whole set for each route rather than
// leaving anything to inheritance. The JSON-LD builders below live here for
// the same reason: one definition of who the house is, reused by every page
// that needs to declare it.
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { locales, localeMeta, type Locale } from "@/lib/i18n";

/** hreflang map for a path, plus x-default pointing at the English edition. */
export function languageAlternates(path = "/"): Record<string, string> {
  const suffix = path === "/" ? "" : path;
  const entries = locales.map((locale) => [localeMeta[locale].htmlLang, `/${locale}${suffix}`]);
  return Object.fromEntries([...entries, ["x-default", `/en${suffix}`]]);
}

/**
 * Complete metadata for one localized route.
 *
 * `path` is the unprefixed app path ("/about", or "/" for the home page); the
 * locale prefix is added here so a caller cannot canonicalize one edition to
 * another's URL. `title` is the bare page title — the locale layout's
 * `title.template` adds the house name, so it must not be repeated here.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  /** Bare page title, or omitted on the home page, which uses the default. */
  title?: string;
  description: string;
}): Metadata {
  const suffix = path === "/" ? "" : path;
  const url = `${siteConfig.url}/${locale}${suffix}`;
  // og:title carries the house name because a social card is seen with no tab
  // and no address bar around it — the title template that dresses the
  // document title does not apply to Open Graph.
  const socialTitle = title ? `${siteConfig.name} · ${title}` : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      ...(socialTitle ? { title: socialTitle } : {}),
      description,
      url,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      // Tells a crawler the same page exists in the other two languages.
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => localeMeta[other].ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...(socialTitle ? { title: socialTitle } : {}),
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

/**
 * Serialize JSON-LD for a <script> tag. `<` is escaped so a stray "</script>"
 * inside any string can never close the block early.
 */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Stable @id for the house, so every graph node points at one entity. */
const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/**
 * The house itself. Typed as both Organization and Distillery: it is a
 * company that also receives visitors at a real address, and the pair is what
 * makes it eligible for a knowledge panel and for local results.
 *
 * TODO(launch): a Distillery is a LocalBusiness, so `openingHours` and `geo`
 * would strengthen this considerably — both are omitted rather than guessed,
 * since invented opening hours would send visitors to a closed gate.
 */
export function organizationJsonLd(description: string) {
  return {
    "@type": ["Organization", "Distillery"],
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/media/vinetPuranikLogo.png`,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/media/vinetPuranikLogo.png`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3, impasse Félix Chartier",
      addressLocality: "Brie-sous-Archiac",
      postalCode: "17520",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.commercial.email,
      telephone: siteConfig.commercial.phone,
      availableLanguage: ["French", "English", "Spanish", "Chinese"],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      ...siteConfig.social.productInstagram,
      siteConfig.brandSite,
    ],
  };
}

/** The site as an entity, which is what carries the name in a sitelinks box. */
export function webSiteJsonLd(locale: Locale, description: string) {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    description,
    url: `${siteConfig.url}/${locale}`,
    inLanguage: localeMeta[locale].htmlLang,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * Breadcrumb trail for a subpage. `trail` is ordered from the top of the site
 * down to (but not including) the current page, which is appended by the
 * caller passing its own name last.
 */
export function breadcrumbJsonLd(
  locale: Locale,
  crumbs: readonly { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}/${locale}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}

/**
 * Wrap nodes in a single @graph. One script tag per page holding one graph
 * beats several loose blocks: the nodes can then reference each other by @id
 * instead of restating the organization on every page.
 */
export function graphJsonLd(nodes: readonly unknown[]): string {
  return jsonLdString({ "@context": "https://schema.org", "@graph": nodes });
}
