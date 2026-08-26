import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { getContent, getGroupFigures, getLeaders } from "@/lib/content";
import { languageAlternates } from "@/app/[locale]/layout";
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

  return {
    title: c.metadata.aboutTitle,
    description: c.about.metaDescription,
    alternates: {
      canonical: `/${locale}/about`,
      languages: languageAlternates("/about"),
    },
  };
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
      <PageHero title={about.title} intro={about.intro}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={localizePath(locale, "/contact")} className="btn btn-cream">
            {about.projectCta}
          </Link>
          <Link href={localizePath(locale, "/visit")} className="btn btn-outline-light">
            {about.visitCta}
          </Link>
        </div>
      </PageHero>

      {/* The statement — the same words that open the homepage, given room. */}
      <section aria-label={c.maisonStatement.kicker} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <p className="display display-lg max-w-4xl uppercase tracking-[0.04em]">
              {c.maisonStatement.line}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 max-w-2xl">
              <div className="hairline-accent" />
              <p className="eyebrow mt-5 text-blue">{c.maisonStatement.origin}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What the house stands for — the hairline rows fill with blue on hover. */}
      <section aria-label={about.marksLabel} className="bg-cream py-24 text-ink sm:py-28">
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
      <section aria-label={about.skillsLabel} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="eyebrow text-ink/50">{about.skillsLabel}</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 sm:grid-cols-3">
            {about.skills.map((skill, index) => (
              <Reveal key={skill.title} delay={index * 150}>
                <div className="border-t border-ink/15 pt-8">
                  <h3 className="display display-sm uppercase tracking-[0.06em]">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/65">{skill.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadershipBand content={c.leadership} leaders={getLeaders(locale)} />

      <GroupBand content={c.group} figures={getGroupFigures(locale)} />

      {/* Cross-links back into the house. */}
      <section className="bg-cream py-20 text-ink sm:py-24">
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
              <Link href={localizePath(locale, "/partnerships")} className="link-quiet text-blue">
                {about.crossLinkPartnerships}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
