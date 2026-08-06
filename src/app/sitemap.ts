import type { MetadataRoute } from "next";
import { siteConfig, spiritFamilySlugs } from "@/lib/site";
import { locales } from "@/lib/i18n";

/**
 * Every route in every language. Paths are locale-prefixed, so the sitemap is
 * the cross product of the two lists rather than a hand-maintained roster.
 */
const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/partnerships", priority: 0.8 },
  ...spiritFamilySlugs.map((slug) => ({ path: `/partnerships/${slug}`, priority: 0.7 })),
  { path: "/visit", priority: 0.8 },
  { path: "/visit/tours", priority: 0.7 },
  { path: "/visit/tastings", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      // Each URL declares its siblings, so a crawler landing on any edition
      // can find the other two.
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${siteConfig.url}/${alt}${path}`]),
        ),
      },
    })),
  );
}
