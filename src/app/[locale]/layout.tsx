import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgeGate } from "@/components/AgeGate";
import { InlineScript } from "@/components/InlineScript";
import { ageGateInlineScript } from "@/lib/age-gate";
import { MINIMUM_AGE, siteConfig } from "@/lib/site";
import { isLocale, locales, localeMeta, type Locale } from "@/lib/i18n";
import { getContent, getNav, getTopLevelNav } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Elegant high-contrast serif for display headlines, Rémy-register.
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type Params = { locale: string };

/**
 * Every locale is known at build time, and `dynamicParams = false` means a URL
 * like /de 404s instead of being rendered on demand.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

/** hreflang map for a path, plus x-default pointing at the English edition. */
export function languageAlternates(path = "/"): Record<string, string> {
  const suffix = path === "/" ? "" : path;
  const entries = locales.map((locale) => [localeMeta[locale].htmlLang, `/${locale}${suffix}`]);
  return Object.fromEntries([...entries, ["x-default", `/en${suffix}`]]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);

  const title = `${siteConfig.name} · ${c.metadata.homeTitle}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: c.metadata.titleTemplate },
    description: c.metadata.description,
    keywords: [
      "bespoke spirits",
      "private label spirits",
      "contract distilling",
      "custom bottling",
      "Cognac region distillery",
      "white label spirits",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates("/"),
    },
    openGraph: {
      title,
      description: c.metadata.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      locale: localeMeta[locale].htmlLang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: c.metadata.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<Params>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const content = getContent(locale);

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      data-scroll-behavior="smooth"
      // `data-age-gate` is deliberately NOT set here — the inline script below
      // adds it, before first paint, only for visitors who have not verified.
      // Keeping it out of the JSX means a language switch (which re-renders
      // <html> to change `lang`) cannot resurrect the gate. Hence
      // suppressHydrationWarning: the DOM legitimately differs here.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <InlineScript html={ageGateInlineScript} />
        {/* With scripting off the gate could never be dismissed, so hide it and
            release the scroll lock — no-JS clients (mostly crawlers and text
            browsers) get the whole site rather than an unpassable wall.
            Written via dangerouslySetInnerHTML because browsers parse
            <noscript> children as raw text when JS *is* enabled, which would
            otherwise mismatch on hydration. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>.age-gate{display:none!important}" +
              'html[data-age-gate="open"],html[data-age-gate="open"] body{overflow:visible!important}</style>',
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Everything the gate marks inert while it is open. */}
        <div id="site-shell" className="flex flex-1 flex-col">
          <Header locale={locale} nav={getNav(locale)} ui={content.ui} />
          {/* tabIndex allows focus to be parked here once the gate closes. */}
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer
            locale={locale}
            nav={getTopLevelNav(locale)}
            content={content.footer}
            responsibleDrinking={content.responsibleDrinking}
          />
        </div>
        <AgeGate
          content={content.ageGate}
          minimumAge={MINIMUM_AGE}
          responsibleDrinking={content.responsibleDrinking}
        />
      </body>
    </html>
  );
}
