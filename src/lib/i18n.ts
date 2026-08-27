// ---------------------------------------------------------------------------
// Locale configuration.
//
// Every route lives under `/[locale]`, so a page is always reached as
// `/en/visit`, `/fr/visit` or `/es/visit`. There is no unprefixed edition:
// `/` and any stale unprefixed URL are redirected by `src/proxy.ts`.
//
// Path segments themselves stay in English (`/fr/partnerships/gin`, not
// `/fr/partenariats/gin`) so one route tree serves every language and a link
// can be localized by swapping a single prefix.
// ---------------------------------------------------------------------------

export const locales = ["en", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type LocaleMeta = {
  /** Short form shown in the switcher trigger. */
  short: string;
  /** Endonym, shown in the dropdown list. */
  name: string;
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /**
   * `og:locale`, which takes Open Graph's `language_TERRITORY` form rather
   * than the bare subtag hreflang uses — Facebook and LinkedIn ignore a plain
   * "en". British English on purpose: the copy is written in it (programmes,
   * customised, apéritifs).
   */
  ogLocale: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { short: "EN", name: "English", htmlLang: "en", ogLocale: "en_GB" },
  fr: { short: "FR", name: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
  es: { short: "ES", name: "Español", htmlLang: "es", ogLocale: "es_ES" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Prefix an app-relative path with a locale.
 *
 * Content stores hrefs unprefixed (`/visit`, `/contact`) so the same content
 * tree works for every language; this is the single place a prefix is added.
 * External URLs and bare fragments are returned untouched.
 */
export function localizePath(locale: Locale, path: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//")) return path;
  if (path.startsWith("#")) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Swap the locale on a pathname the visitor is currently viewing, keeping the
 * rest of the path. Used by the language switcher so changing language holds
 * your place rather than dropping you on the home page.
 */
export function switchLocaleInPath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join("/")}`;
  }
  return localizePath(next, pathname);
}

/**
 * Best supported locale for an `Accept-Language` header, used by the proxy to
 * choose where `/` lands. Falls back to `defaultLocale`.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q.split("=")[1]) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    // Match on the primary subtag so "fr-CA" and "es-419" still resolve.
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return defaultLocale;
}
