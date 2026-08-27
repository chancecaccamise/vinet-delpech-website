import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { legalSlugs, siteConfig } from "@/lib/site";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import { findLegalPage, getContent, getLegalChrome } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

type Params = { locale: string; slug: string };

/**
 * The legal and policy pages, one route for all five.
 *
 * A closed set, like the spirit families: every combination is prerendered and
 * anything else 404s rather than being rendered on demand.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => legalSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = findLegalPage(locale, slug);
  if (!page) return {};

  return {
    ...pageMetadata({
      locale,
      path: `/legal/${page.slug}`,
      title: page.title,
      description: page.metaDescription,
    }),
    // Policy pages should be reachable and citable, but they are not what the
    // house wants ranking against its own name, and Google treats thin
    // boilerplate as low-value. Indexed, but kept out of the running.
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const page = findLegalPage(locale, slug);
  if (!page) notFound();

  const c = getContent(locale);
  const chrome = getLegalChrome(locale);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: page.title, path: `/legal/${page.slug}` },
          ]),
        ]}
      />

      <PageHero title={page.title} intro={[page.intro]} />

      <section aria-label={page.title} className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[46rem] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/65">
              {chrome.updatedLabel} · {chrome.updated}
            </p>
          </Reveal>

          <div className="mt-10 space-y-11">
            {page.sections.map((section, index) => (
              <Reveal key={section.heading} delay={150 + index * 60}>
                <section>
                  <h2 className="display display-sm uppercase tracking-[0.05em]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-ink/75">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 border-t border-ink/12 pt-8">
              <Link href={localizePath(locale, "/")} className="link-quiet text-blue">
                {chrome.backLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The responsible-drinking line is in the footer on every page; the
          contact route is repeated here because a visitor who arrives on a
          policy page from a search result has no other way onward. */}
      <section aria-label={c.contact.kicker} className="bg-cream py-16 text-ink">
        <div className="mx-auto max-w-[46rem] px-6 lg:px-10">
          <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
            {c.contact.kicker}
          </Link>
        </div>
      </section>
    </>
  );
}
