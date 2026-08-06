import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, matchLocale } from "@/lib/i18n";

/**
 * Locale routing.
 *
 * Every page lives under `/[locale]`, so any request that arrives without a
 * locale prefix — `/`, or a stale link to `/visit` from before this site was
 * translated — is redirected to the best edition for that visitor's
 * `Accept-Language`, falling back to English.
 *
 * The redirect is a 307 rather than a permanent one: the right edition depends
 * on who is asking, and a 308 would be cached by the browser and pin the first
 * visitor's language for everyone behind a shared cache.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = matchLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals and the files that must stay at the root:
  // robots.txt, sitemap.xml, the icon and the OG image are single-URL assets
  // and must not be pushed under a locale.
  matcher: [
    "/((?!_next|api|favicon.ico|icon.svg|robots.txt|sitemap.xml|opengraph-image|media|products).*)",
  ],
};
