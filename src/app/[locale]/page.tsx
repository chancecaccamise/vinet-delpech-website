import Link from "next/link";
import { notFound } from "next/navigation";
import { heroMedia, leaderPortraits, siteConfig } from "@/lib/site";
import { isLocale, localizePath } from "@/lib/i18n";
import { getBrands, getContent, getFeaturePanels, getSpiritFamilies } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { HeroMedia } from "@/components/HeroMedia";
import { BrandRail } from "@/components/BrandRail";
import { FeaturePanels } from "@/components/FeaturePanels";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { Timeline } from "@/components/Timeline";
import { LeadershipWord } from "@/components/LeadershipWord";
import { TeamBand } from "@/components/TeamBand";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3, impasse Félix Chartier",
    addressLocality: "Brie-sous-Archiac",
    postalCode: "17520",
    addressCountry: "FR",
  },
  // No LinkedIn until the real page URL lands: see its TODO(launch).
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    ...siteConfig.social.productInstagram,
    siteConfig.brandSite,
  ],
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
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
            <Reveal delay={150}>
              <h1 className="display display-xl uppercase tracking-[0.04em]">{siteConfig.name}</h1>
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
          <span className="eyebrow text-[0.55rem] text-cream/45">{c.hero.scroll}</span>
          <span aria-hidden="true" className="scroll-cue" />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          The collection — the house's own range and the brands it shapes for
          partners, in a wide horizontal rail. Sits directly under the hero:
          title column on the left, cards gliding off the right edge of the
          viewport.
      ------------------------------------------------------------------ */}
      <section id="collection" className="overflow-hidden bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1600px] pl-6 lg:pl-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="pr-6 lg:pr-0">
              <Reveal>
                <h2 className="display display-lg uppercase tracking-[0.05em]">{c.collection.title}</h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-ink/60">{c.collection.intro}</p>
                {/* The rail is a taste of the collection; the category pages
                    are where it is actually browsable. */}
                <Link href={localizePath(locale, "/partnerships")} className="btn btn-blue mt-9">
                  {c.collection.allProducts}
                </Link>
              </Reveal>
            </div>

            <Reveal delay={200} className="min-w-0">
              <BrandRail
                locale={locale}
                brands={getBrands(locale)}
                labels={c.partnerships}
                ui={c.ui}
              />
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p className="mt-14 pr-6 text-[0.62rem] uppercase tracking-[0.22em] text-ink/40">
              {c.collection.distributionNote}
            </p>
          </Reveal>
        </div>
      </section>

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
                      href={localizePath(locale, `/partnerships/${family.slug}`)}
                      className="group flex items-center justify-between py-3.5 text-sm text-ink/70 transition-colors duration-300 hover:text-blue"
                    >
                      {family.name}
                      <span
                        aria-hidden="true"
                        className="text-blue/60 transition-transform duration-300 group-hover:translate-x-1"
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
                href={localizePath(locale, "/partnerships")}
                className="link-quiet mt-10 inline-block text-blue"
              >
                {c.collection.allProducts}
              </Link>
            </Reveal>
          </div>

          {/* Placeholder until the house shoots the range side by side. */}
          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
            <PlaceholderFrame
              label={c.production.frameLabel}
              fill
              tone="dark"
              className="h-full"
            />
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
