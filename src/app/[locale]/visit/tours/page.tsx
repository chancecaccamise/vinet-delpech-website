import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { privateToursImage, siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { AppointmentSection } from "@/components/AppointmentSection";
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
    path: "/visit/tours",
    title: c.metadata.toursTitle,
    description: c.tours.metaDescription,
  });
}

export default async function ToursPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const page = c.tours;

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.visitTitle, path: "/visit" },
            { name: c.metadata.toursTitle, path: "/visit/tours" },
          ]),
        ]}
      />

      <PageHero title={page.title} intro={[page.intro]} />

      {/* The offer in the house's own words — private visits by prior
          appointment — beside the still house, with the way in. Shared with
          the tastings page, so the two can never ask for a booking
          differently. */}
      <AppointmentSection
        locale={locale}
        label={page.title}
        body={page.body}
        ctaLabel={page.ctaLabel}
        image={privateToursImage}
        alt={page.frameLabel}
      />

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
