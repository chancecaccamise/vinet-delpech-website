import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig, visitEntryHrefs, visitEntryImages, visitEstateImage } from "@/lib/site";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { languageAlternates } from "@/app/[locale]/layout";
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

  return {
    title: c.metadata.visitTitle,
    description: c.visit.metaDescription,
    alternates: {
      canonical: `/${locale}/visit`,
      languages: languageAlternates("/visit"),
    },
  };
}

export default async function VisitPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const visit = getContent(locale).visit;
  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(visit.book.mailSubject)}`;

  return (
    <>
      <PageHero title={visit.title} intro={visit.intro}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="#book" className="btn btn-cream">
            {visit.bookCta}
          </Link>
          <Link href="#practical" className="btn btn-outline-light">
            {visit.practicalCta}
          </Link>
        </div>
      </PageHero>

      {/* What to expect */}
      <section aria-label={visit.expectLabel} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-3">
            {visit.expect.map((item, index) => (
              <Reveal key={item.title} delay={index * 150}>
                <div className="border-t border-ink/15 pt-8">
                  <h2 className="display display-md uppercase tracking-[0.06em]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Entry cards — Tours / Tastings */}
          <div className="mt-24 grid gap-10 md:grid-cols-2">
            {visit.entries.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 150}>
                <Link
                  href={localizePath(locale, visitEntryHrefs[index])}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={visitEntryImages[index]}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <h2 className="display display-md mt-7 uppercase tracking-[0.06em]">{entry.title}</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-ink/60">{entry.body}</p>
                  <span className="link-quiet mt-6 text-blue">{visit.discover}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book a visit */}
      <section id="book" className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="display display-lg mt-4 uppercase tracking-[0.05em]">{visit.book.heading}</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-ink/65">{visit.book.body}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                {visit.book.ctaLabel}
              </Link>
              <a href={mailHref} className="link-quiet text-blue">
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Practical information */}
      <section id="practical" className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display display-lg mt-4 uppercase tracking-[0.05em]">
                {visit.practical.heading}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-10 space-y-7">
                {visit.practical.items.map((item) => (
                  <div key={item.label} className="border-t border-ink/12 pt-5">
                    <dt className="eyebrow text-ink/50">{item.label}</dt>
                    <dd className="m-0 mt-2 text-sm leading-7 text-ink/75">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={200}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={visitEstateImage}
                  alt={visit.mapLabel}
                  fill
                  sizes="(min-width: 1024px) 46vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
