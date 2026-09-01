import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { partnerCompanyAssets, siteConfig } from "@/lib/site";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import {
  getContent,
  getPartnerCompany,
  getPartnerCompanyBrands,
  pluralize,
} from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BrandGrid } from "@/components/BrandGrid";
import { Reveal } from "@/components/Reveal";

type Params = { locale: string; slug: string };

/**
 * One page per partner company that carries its range here.
 *
 * Only the records flagged `portfolio` get a route: Puranique has a site of
 * its own and is linked out to, so generating an empty page for it would give
 * the crawler a URL the navigation deliberately never points at.
 */
export const dynamicParams = false;

const portfolioSlugs = partnerCompanyAssets
  .filter((company) => company.portfolio)
  .map((company) => company.slug);

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) => portfolioSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const company = getPartnerCompany(locale, slug);
  if (!company) return {};

  return pageMetadata({
    locale,
    path: `/partners/${company.slug}`,
    title: company.name,
    description: company.intro,
  });
}

export default async function PartnerCompanyPage({ params }: { params: Promise<Params> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const company = getPartnerCompany(locale, slug);
  if (!company || !company.portfolio) notFound();

  const c = getContent(locale);
  const brands = getPartnerCompanyBrands(locale, company.slug);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.partnersTitle, path: "/partners" },
            { name: company.name, path: `/partners/${company.slug}` },
          ]),
        ]}
      />

      <PageHero title={company.name} intro={[company.intro]}>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-cream/70">
          {pluralize(c.privateLabel.inCollectionOne, c.privateLabel.inCollectionOther, brands.length)}
        </p>
      </PageHero>

      <section aria-label={c.partners.rangeHeading} className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-ink/65">{c.partners.rangeHeading}</p>
          </Reveal>

          <div className="mt-12">
            {/* Every bottle here links out to the company's own product page,
                so the grid needs only the outbound half of the CTA labels. */}
            <BrandGrid locale={locale} brands={brands} labels={c.privateLabel} />
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-blue"
              >
                {c.partners.visitSite}
              </a>
              <Link href={localizePath(locale, "/partners")} className="link-quiet text-blue">
                {c.partners.backToPartners}
              </Link>
            </div>
            <p className="eyebrow mt-10 text-ink/65">{c.partners.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
