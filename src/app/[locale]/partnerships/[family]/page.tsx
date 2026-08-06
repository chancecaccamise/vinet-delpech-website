import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spiritFamilySlugs } from "@/lib/site";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import {
  findSpiritFamily,
  getBrandsInFamily,
  getContent,
  getSpiritFamilies,
  pluralize,
  fill,
} from "@/lib/content";
import { languageAlternates } from "@/app/[locale]/layout";
import { PageHero } from "@/components/PageHero";
import { BrandGrid } from "@/components/BrandGrid";
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

  return {
    title: family.title,
    description: family.summary,
    alternates: {
      canonical: `/${locale}/partnerships/${family.slug}`,
      languages: languageAlternates(`/partnerships/${family.slug}`),
    },
  };
}

export default async function SpiritFamilyPage({ params }: { params: Promise<Params> }) {
  const { locale: rawLocale, family: slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const family = findSpiritFamily(locale, slug);
  if (!family) notFound();

  const c = getContent(locale);
  const brands = getBrandsInFamily(locale, family.slug);
  const others = getSpiritFamilies(locale).filter((entry) => entry.slug !== family.slug);

  return (
    <>
      <PageHero title={family.title} intro={family.intro}>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-off-white/45">
          {pluralize(c.partnerships.inCollectionOne, c.partnerships.inCollectionOther, brands.length)}
        </p>
      </PageHero>

      <section aria-label={`${family.name} brands`} className="bg-off-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <BrandGrid brands={brands} labels={c.partnerships} />

          <Reveal delay={200}>
            <p className="eyebrow mt-16 text-ink/45">{c.partnerships.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Sideways navigation: the other categories, so a visitor can move
          across the collection without going back up to the megamenu. */}
      <section aria-label="Other categories" className="bg-white py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="display display-md uppercase tracking-[0.05em]">{c.partnerships.otherCategories}</h2>
            <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-8 gap-y-4 p-0">
              {others.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={localizePath(locale, `/partnerships/${entry.slug}`)}
                    className="link-quiet text-gold-ink"
                  >
                    {entry.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link href={localizePath(locale, "/#contact")} className="btn btn-accent">
                {c.partnerships.ctaLabel}
              </Link>
              <Link
                href={localizePath(locale, "/partnerships")}
                className="link-quiet text-gold-ink"
              >
                {c.partnerships.backToAll}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
