import type { MetadataRoute } from "next";
import { legalSlugs, siteConfig, spiritFamilySlugs } from "@/lib/site";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * Every route in every language. Paths are locale-prefixed, so the sitemap is
 * the cross product of the two lists rather than a hand-maintained roster.
 */
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/events", priority: 0.7 },
  { path: "/partnerships", priority: 0.8 },
  ...spiritFamilySlugs.map((slug) => ({ path: `/partnerships/${slug}`, priority: 0.7 })),
  { path: "/visit", priority: 0.8 },
  { path: "/visit/tours", priority: 0.7 },
  { path: "/visit/tastings", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  // Reachable and citable, but they should never outrank the house itself.
  ...legalSlugs.map((slug) => ({ path: `/legal/${slug}`, priority: 0.3 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  // One timestamp for the whole build rather than per-route dates invented
  // here: every page is statically generated together, so the build is the
  // honest answer to "when did this last change".
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      // Each URL declares its siblings, so a crawler landing on any edition
      // can find the other two. x-default matches the <head> hreflang set and
      // names the English edition as the fallback for unmatched languages.
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((alt) => [alt, `${siteConfig.url}/${alt}${path}`]),
          ),
          "x-default": `${siteConfig.url}/${defaultLocale}${path}`,
        },
      },
    })),
  );
}
