import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent, getTastings } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
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

  return pageMetadata({
    locale,
    path: "/visit/tastings",
    title: c.metadata.tastingsTitle,
    description: c.tastings.metaDescription,
  });
}

export default async function TastingsPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const page = c.tastings;
  const items = getTastings(locale);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.visitTitle, path: "/visit" },
            { name: c.metadata.tastingsTitle, path: "/visit/tastings" },
          ]),
        ]}
      />

      <PageHero title={page.title} intro={[page.intro]}>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-cream/70">
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
                href={localizePath(locale, "/visit/tours")}
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
