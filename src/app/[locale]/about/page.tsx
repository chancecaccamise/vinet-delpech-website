import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutSkillImages, siteConfig } from "@/lib/site";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent, getGroupFigures, getLeaders } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LeadershipBand } from "@/components/LeadershipBand";
import { GroupBand } from "@/components/GroupBand";

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
    path: "/about",
    title: c.metadata.aboutTitle,
    description: c.about.metaDescription,
  });
}

/**
 * Our story — what the house is, in its own words. The chronology stays on the
 * homepage (`/#timeline`) and the president keeps his own section there too;
 * this page carries the positioning and links back to both.
 */
export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const about = c.about;

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.aboutTitle, path: "/about" },
          ]),
        ]}
      />

      <PageHero title={about.title} intro={about.intro}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={localizePath(locale, "/contact")} className="btn btn-cream">
            {about.projectCta}
          </Link>
          <Link href={localizePath(locale, "/visit")} className="btn btn-outline-light">
            {about.visitCta}
          </Link>
        </div>
        {/* The made-in-France mark, kept from the removed statement section. */}
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-cream/70">
          {c.maisonStatement.origin}
        </p>
      </PageHero>

      {/* What the house stands for — the hairline rows fill with blue on hover. */}
      <section aria-label={about.marksLabel} className="bg-white py-24 text-ink sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="eyebrow text-ink/50">{about.marksLabel}</h2>
          </Reveal>
          <dl className="mt-10 m-0">
            {about.marks.map((mark, index) => (
              <Reveal key={mark.label} delay={index * 100}>
                <div className="metier grid gap-2 py-7 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
                  <dt className="display display-sm uppercase tracking-[0.05em]">{mark.label}</dt>
                  <dd className="m-0 max-w-xl text-sm leading-8 text-ink/65">{mark.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Skills — same three-up as the "what to expect" band on /visit. */}
      <section aria-label={about.skillsLabel} className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="eyebrow text-ink/50">{about.skillsLabel}</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {about.skills.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 150} className="h-full">
                <div className="flex h-full flex-col border-t border-ink/15 pt-8">
                  <h3 className="display display-sm uppercase tracking-[0.06em]">{skill.title}</h3>
                  {/* flex-1 pushes the photos onto one baseline across the
                      row, however long a body runs. */}
                  <p className="mt-4 flex-1 text-sm leading-7 text-ink/65">{skill.body}</p>
                  <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={aboutSkillImages[index]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadershipBand content={c.leadership} leaders={getLeaders(locale)} />

      <GroupBand content={c.group} figures={getGroupFigures(locale)} />

      {/* Cross-links back into the house. */}
      <section className="bg-white py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="display display-md uppercase tracking-[0.06em]">
              {about.crossLinkTitle}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              <Link href={localizePath(locale, "/#timeline")} className="link-quiet text-blue">
                {about.crossLinkHistory}
              </Link>
              <Link href={localizePath(locale, "/#leadership")} className="link-quiet text-blue">
                {about.crossLinkPresident}
              </Link>
              <Link href={localizePath(locale, "/private-label")} className="link-quiet text-blue">
                {about.crossLinkPartnerships}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
