import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent, getEvents } from "@/lib/content";
import { breadcrumbJsonLd, eventJsonLd, pageMetadata } from "@/lib/seo";
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
    path: "/events",
    title: c.events.title,
    description: c.events.metaDescription,
  });
}

export default async function EventsPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const events = getEvents(locale);
  // Sample entries are left out of the structured data on purpose: an Event
  // node is exactly what a search engine will surface as a real date, and a
  // visitor could travel for it. Real events opt in simply by not being
  // flagged as placeholders.
  const real = events.filter((event) => !event.placeholder);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.events.title, path: "/events" },
          ]),
          ...real.map((event) => eventJsonLd(event)),
        ]}
      />

      <PageHero title={c.events.title} intro={[c.events.intro]} />

      <section aria-label={c.events.title} className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          {events.length === 0 ? (
            <Reveal>
              <p className="max-w-xl text-sm leading-8 text-ink/70">{c.events.empty}</p>
            </Reveal>
          ) : (
            <ul className="m-0 list-none space-y-14 p-0">
              {events.map((event, index) => (
                <li key={event.slug}>
                  <Reveal delay={index * 80}>
                    {/* Image left, detail right: one row per event so the page
                        scans as a list rather than a grid of cards. */}
                    <article className="grid gap-6 border-t border-ink/12 pt-10 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] sm:gap-10">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 20rem, 100vw"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          {/* The machine-readable date sits on <time>; the
                              visible form is already localized. */}
                          <time dateTime={event.date} className="eyebrow text-blue">
                            {event.dateLabel}
                          </time>
                          <span aria-hidden="true" className="text-ink/30">
                            ·
                          </span>
                          <span className="eyebrow text-ink/65">{event.location}</span>
                          {event.placeholder && (
                            <span className="eyebrow border border-ink/25 px-2 py-0.5 text-[0.55rem] text-ink/65">
                              {c.events.placeholderTag}
                            </span>
                          )}
                        </div>

                        <h2 className="display display-sm mt-4 uppercase tracking-[0.04em]">
                          {event.name}
                        </h2>
                        <p className="mt-4 max-w-[42rem] text-sm leading-8 text-ink/70">
                          {event.description}
                        </p>

                        <Link
                          href={localizePath(locale, "/contact")}
                          className="link-quiet mt-6 inline-block text-blue"
                        >
                          {c.events.ctaLabel}
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
