import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig, spiritFamilySlugs } from "@/lib/site";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import {
  findSpiritFamily,
  getPrivateLabelBrands,
  getContent,
  getHouseBrands,
  getPartnerBrandsInFamily,
  getSpiritFamilies,
  pluralize,
} from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BrandGrid } from "@/components/BrandGrid";
import { BrandStory } from "@/components/BrandStory";
import { Reveal } from "@/components/Reveal";

type Params = { locale: string; family: string };

/**
 * One page per spirit family. The set is closed — it comes from
 * `spiritFamilies`, not from a database — so every route is prerendered and
 * anything else 404s rather than being rendered on demand.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return locales.flatMap((locale) =>
    spiritFamilySlugs.map((family) => ({ locale, family })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, family: slug } = await params;
  if (!isLocale(locale)) return {};
  const family = findSpiritFamily(locale, slug);
  if (!family) return {};

  return pageMetadata({
    locale,
    path: `/private-label/${family.slug}`,
    title: family.title,
    description: family.summary,
  });
}

export default async function SpiritFamilyPage({ params }: { params: Promise<Params> }) {
  const { locale: rawLocale, family: slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const family = findSpiritFamily(locale, slug);
  if (!family) notFound();

  const c = getContent(locale);
  // The category's bottles, split by who they belong to: the house's own get
  // the long-form brochure treatment, the clients' stay as cards linking out.
  // A partner company's own range is not here — it has its own page under
  // Partners — so the count in the hero has to come from the same filtered
  // selector the sections below do, or it promises bottles this page omits.
  const brands = getPrivateLabelBrands(locale, family.slug);
  const houseBrands = getHouseBrands(locale, family.slug);
  const partnerBrands = getPartnerBrandsInFamily(locale, family.slug);
  const others = getSpiritFamilies(locale).filter((entry) => entry.slug !== family.slug);

  // Bands alternate white then cream down from the navy hero. Which sections
  // exist varies by category — brandy and liqueurs are house-only, rum and gin
  // partner-only — so the sequence is computed rather than written into each
  // section, otherwise a category that skips one ends up with two bands of the
  // same colour touching.
  const bandOrder = [
    houseBrands.length > 0 ? "house" : null,
    partnerBrands.length > 0 ? "partners" : null,
    "others",
  ].filter((name): name is string => name !== null);
  const band = (name: string) =>
    bandOrder.indexOf(name) % 2 === 0 ? "bg-white" : "bg-cream";

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.privateLabelTitle, path: "/private-label" },
            { name: family.name, path: `/private-label/${family.slug}` },
          ]),
        ]}
      />

      <PageHero title={family.title} intro={family.intro}>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-cream/70">
          {brands.length === 0
            ? c.privateLabel.noBrandsYet
            : pluralize(
                c.privateLabel.inCollectionOne,
                c.privateLabel.inCollectionOther,
                brands.length,
              )}
        </p>
      </PageHero>

      {houseBrands.length > 0 && (
        <section
          aria-label={c.privateLabel.houseHeading}
          className={`${band("house")} py-20 text-ink sm:py-28`}
        >
          <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
            <Reveal>
              <p className="eyebrow text-ink/65">{c.privateLabel.houseHeading}</p>
            </Reveal>
            {houseBrands.map((brand, index) => (
              <BrandStory
                key={brand.slug}
                locale={locale}
                brand={brand}
                labels={c.houseBrands.labels}
                flip={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      )}

      {/* Brandy and liqueurs are house-only, so the partner grid — and the
          distribution note, which is a partner fact — drop away entirely
          rather than leaving an empty three-column track behind. */}
      {partnerBrands.length > 0 && (
        <section
          aria-label={c.privateLabel.partnerHeading}
          className={`${band("partners")} py-20 text-ink sm:py-28`}
        >
          <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
            {houseBrands.length > 0 && (
              <Reveal>
                <h2 className="display display-md mb-12 uppercase tracking-[0.05em]">
                  {c.privateLabel.partnerHeading}
                </h2>
              </Reveal>
            )}

            <BrandGrid locale={locale} brands={partnerBrands} labels={c.privateLabel} />

            <Reveal delay={200}>
              <p className="eyebrow mt-16 text-ink/65">{c.privateLabel.note}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Sideways navigation: the other categories, so a visitor can move
          across the collection without going back up to the megamenu. */}
      <section aria-label={c.privateLabel.otherCategories} className={`${band("others")} py-20 text-ink sm:py-24`}>
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="display display-md uppercase tracking-[0.05em]">{c.privateLabel.otherCategories}</h2>
            <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-8 gap-y-4 p-0">
              {others.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={localizePath(locale, `/private-label/${entry.slug}`)}
                    className="link-quiet text-blue"
                  >
                    {entry.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                {c.privateLabel.ctaLabel}
              </Link>
              <Link
                href={localizePath(locale, "/private-label")}
                className="link-quiet text-blue"
              >
                {c.privateLabel.backToAll}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
