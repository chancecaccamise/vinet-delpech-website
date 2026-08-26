import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent, getTours } from "@/lib/content";
import { languageAlternates } from "@/app/[locale]/layout";
import { PageHero } from "@/components/PageHero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Reveal } from "@/components/Reveal";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);

  return {
    title: c.metadata.toursTitle,
    description: c.tours.metaDescription,
    alternates: {
      canonical: `/${locale}/visit/tours`,
      languages: languageAlternates("/visit/tours"),
    },
  };
}

export default async function ToursPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const page = c.tours;
  const items = getTours(locale);

  return (
    <>
      <PageHero title={page.title} intro={[page.intro]}>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-cream/45">
          {page.note}
        </p>
      </PageHero>

      <section aria-label={page.title} className="bg-white text-ink">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {items.map((experience, index) => (
            <ExperienceSection
              key={experience.slug}
              locale={locale}
              experience={experience}
              labels={c.experiences}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Cross-link */}
      <section className="bg-cream py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="display display-md mt-4 uppercase tracking-[0.06em]">
              {page.crossLinkTitle}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <Link
                href={localizePath(locale, "/visit/tastings")}
                className="btn btn-outline-dark"
              >
                {page.crossLinkCta}
              </Link>
              <Link href={localizePath(locale, "/visit")} className="link-quiet text-blue">
                {page.crossLinkBack}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
