import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { heroMedia, leaderPortraits, productionImage, siteConfig } from "@/lib/site";
import { isLocale, localizePath } from "@/lib/i18n";
import {
  getContent,
  getFeaturePanels,
  getSpiritFamilies,
  getTestimonials,
} from "@/lib/content";
import { graphJsonLd, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { HeroMedia } from "@/components/HeroMedia";
import { EstateShowcase } from "@/components/EstateShowcase";
import { FeaturePanels } from "@/components/FeaturePanels";
import { Timeline } from "@/components/Timeline";
import { LeadershipWord } from "@/components/LeadershipWord";
import { TeamBand } from "@/components/TeamBand";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);

  return (
    <>
      {/* Organization and WebSite in one @graph, so the site node can point at
          the house by @id rather than restating it. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graphJsonLd([
            organizationJsonLd(c.metadata.description),
            webSiteJsonLd(locale, c.metadata.description),
          ]),
        }}
      />

      {/* ------------------------------------------------------------------
          Hero — full screen, commanding serif headline, media slot.
      ------------------------------------------------------------------ */}
      <section id="home" className="relative min-h-svh overflow-hidden bg-navy text-cream">
        {/* Background footage — see `heroMedia` in src/lib/site.ts. */}
        <Parallax speed={0.14} className="absolute -inset-y-[8%] inset-x-0">
          <HeroMedia
            videoSrc={heroMedia.videoSrc}
            poster={heroMedia.poster}
            label={c.hero.posterLabel}
          />
        </Parallax>
        {/* One flat navy wash, kept light so the footage still reads as
            footage while the cream headline and button stay legible over it. */}
        <div className="absolute inset-0 bg-navy/45" />

        {/* Hairline frame, inset from the viewport edge. */}
        <div aria-hidden="true" className="absolute bottom-8 left-8 right-8 top-28 border border-cream/15" />

        <div className="relative mx-auto flex min-h-svh max-w-[1480px] items-end px-6 pb-24 pt-40 sm:px-10 lg:px-14 lg:pb-32">
          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow text-cream/70">{c.hero.eyebrow}</p>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="display display-xl mt-6 uppercase tracking-[0.04em]">{c.hero.title}</h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-base text-cream/80 sm:text-lg">{c.hero.support}</p>
            </Reveal>
            <Reveal delay={450}>
              <Link href={localizePath(locale, "/contact")} className="btn btn-cream mt-10">
                {c.hero.primaryCtaLabel}
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
          <span className="eyebrow text-[0.55rem] text-cream/70">{c.hero.scroll}</span>
          <span aria-hidden="true" className="scroll-cue" />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Introduction — the distillery itself, before any brand appears:
          where it stands and what it does, in the house's own words. Cream,
          so the navy hero and the white section below keep the page's
          alternation of tones.
      ------------------------------------------------------------------ */}
      {/* The first line carries the weight, in the display serif but not in
          capitals — the hero owns the only shouted line on this page. The
          second follows as quiet supporting text, the same kicker → statement
          → body order the closing invitation uses further down. Shares the
          hero's 1480px frame so the top of the page holds one left edge. */}
      <section aria-label={c.homeIntro.kicker} className="bg-cream py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-12">
          <Reveal>
            <p className="eyebrow text-blue">{c.homeIntro.kicker}</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="display display-md display-prose mt-7 max-w-4xl">
              {c.homeIntro.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-7 max-w-xl text-sm leading-8 text-ink/65">
              {c.homeIntro.paragraphs[1]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          The estate — the place before any brand: still house, cellar and
          vines beside the four métiers. The bottles live on the Partners
          and Private Labels pages.
      ------------------------------------------------------------------ */}
      <EstateShowcase locale={locale} content={c.estate} />

      {/* ------------------------------------------------------------------
          Feature panels — two full-bleed halves, alternating sides.
      ------------------------------------------------------------------ */}
      <FeaturePanels panels={getFeaturePanels(locale)} />


      {/* ------------------------------------------------------------------
          What we produce — the eight categories as a linked index, on white
          after the cream feature panels; the timeline and president sections
          below swap tones to keep the page alternating. Category names come
          from the families data, so this list can never drift from the
          partnership pages.
      ------------------------------------------------------------------ */}
      <section id="production" className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-x-16 gap-y-12 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-blue">{c.production.kicker}</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="display display-md mt-6 uppercase tracking-[0.05em]">
                {c.production.title}
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 max-w-xl text-sm leading-8 text-ink/65">
                {c.production.intro}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <ul className="m-0 mt-10 grid list-none gap-x-10 p-0 sm:grid-cols-2">
                {getSpiritFamilies(locale).map((family) => (
                  <li key={family.slug} className="border-t border-ink/15">
                    <Link
                      href={localizePath(locale, `/private-label/${family.slug}`)}
                      className="group flex items-center justify-between py-3.5 text-sm text-ink/70 transition-colors duration-300 hover:text-blue"
                    >
                      {family.name}
                      <span
                        aria-hidden="true"
                        className="text-blue/80 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={500}>
              <Link
                href={localizePath(locale, "/private-label")}
                className="link-quiet mt-10 inline-block text-blue"
              >
                {c.production.allProducts}
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
            <div className="relative h-full min-h-[24rem] w-full overflow-hidden">
              <Image
                src={productionImage}
                alt={c.production.frameLabel}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Timeline — horizontal chronology, pinned while it scrolls.
      ------------------------------------------------------------------ */}
      {/* No `overflow-hidden` here: an ancestor with a clipped overflow becomes
          the sticky scroll container and the pin silently stops working. The
          track is clipped inside Timeline instead. */}
      <section id="timeline" className="bg-cream pb-24 pt-24 text-ink lg:pb-32 lg:pt-28">
        <Timeline
          entries={c.timeline.entries}
          title={c.timeline.title}
          intro={c.timeline.intro}
        />
      </section>

      {/* ------------------------------------------------------------------
          A word from the president — opens the cream chapter it shares
          with the house statement below.
      ------------------------------------------------------------------ */}
      <LeadershipWord
        title={c.leadership.homeTitle}
        voices={[
          // Rahul first, Bruno second — the house's requested reading order.
          {
            key: "rahul",
            portrait: leaderPortraits.rahul,
            ...c.leadership.leaders.rahul,
          },
          {
            key: "bruno",
            portrait: leaderPortraits.bruno,
            ...c.leadership.leaders.bruno,
            // Bruno keeps the longer statement this section has always
            // carried, rather than the short brochure version /about uses.
            quote: c.presidentWord.quote,
            body: c.presidentWord.body,
          },
        ]}
      />

      {/* ------------------------------------------------------------------
          The team — full-bleed photograph on the dark ground, closing the
          cream chapter above before the white contact section below.
      ------------------------------------------------------------------ */}
      <TeamBand content={c.team} />

      {/* ------------------------------------------------------------------
          Client voices, three abreast on their own cream chapter between the
          navy team band and the white closing invitation — the photograph
          shows the people, the slider quotes the people they work for.
          TODO(launch): placeholder quotes; see site.ts.
      ------------------------------------------------------------------ */}
      <TestimonialSlider {...getTestimonials(locale)} />

      {/* ------------------------------------------------------------------
          Closing call to action. The enquiry form itself now lives on its own
          page; what stays here is the invitation to go there, so the home page
          still ends on a way in rather than on the team photograph.
      ------------------------------------------------------------------ */}
      <section aria-label={c.contact.kicker} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-blue">{c.contact.kicker}</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="display display-lg mt-6 max-w-3xl uppercase tracking-[0.04em]">
              {c.contact.homeTitle}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-7 max-w-xl text-sm leading-8 text-ink/65">{c.contact.homeBody}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                {c.contact.kicker}
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-quiet text-blue"
              >
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
