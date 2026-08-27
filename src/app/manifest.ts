import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { defaultLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

/**
 * Web app manifest — what a phone uses when the site is added to a home
 * screen, and one of the signals Google reads for the site's name.
 *
 * English on purpose: a manifest is a single document at the root, outside the
 * locale tree, so it cannot vary by visitor the way the pages do. `start_url`
 * points at `/`, which `src/proxy.ts` then hands to the right edition.
 */
export default function manifest(): MetadataRoute.Manifest {
  const c = getContent(defaultLocale);

  return {
    name: `${siteConfig.name} — ${c.metadata.homeTitle}`,
    short_name: siteConfig.name,
    description: c.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1de",
    theme_color: "#f7f1de",
    lang: defaultLocale,
    categories: ["business", "food", "shopping"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
