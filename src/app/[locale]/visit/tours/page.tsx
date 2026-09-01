import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { privateToursImage, siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
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
          appointment — beside the still house, with the way in. No invented
          programme of durations and prices. */}
      <section aria-label={page.title} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-x-16 gap-y-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="max-w-xl text-base leading-8 text-ink/70">{page.body}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                  {page.ctaLabel}
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="link-quiet text-blue">
                  {siteConfig.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={privateToursImage}
                alt={page.frameLabel}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
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
