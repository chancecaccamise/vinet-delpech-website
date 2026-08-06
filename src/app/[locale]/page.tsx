import Link from "next/link";
import { notFound } from "next/navigation";
import { heroMedia, siteConfig } from "@/lib/site";
import { isLocale, localizePath } from "@/lib/i18n";
import { getBrands, getContent, getFeaturePanels } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { HeroMedia } from "@/components/HeroMedia";
import { BrandRail } from "@/components/BrandRail";
import { FeaturePanels } from "@/components/FeaturePanels";
import { Timeline } from "@/components/Timeline";
import { PresidentWord } from "@/components/PresidentWord";
import { TeamBand } from "@/components/TeamBand";
import { ContactForm } from "@/components/ContactForm";

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
  sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
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
      <section id="home" className="relative min-h-svh overflow-hidden bg-night text-off-white">
        {/* Background footage — see `heroMedia` in src/lib/site.ts. */}
        <Parallax speed={0.14} className="absolute -inset-y-[8%] inset-x-0">
          <HeroMedia
            videoSrc={heroMedia.videoSrc}
            poster="/media/hero-poster.svg"
            label={c.hero.posterLabel}
          />
        </Parallax>
        {/* Two scrims, kept light so the footage still reads as footage: an
            even wash over the whole frame, then a bottom-up gradient that only
            deepens under the name and the button. */}
        <div className="absolute inset-0 bg-night/35" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,11,8,0.55),transparent_40%)]" />

        {/* Hairline frame, inset from the viewport edge. */}
        <div aria-hidden="true" className="absolute bottom-8 left-8 right-8 top-28 border border-off-white/15" />

        <div className="relative mx-auto flex min-h-svh max-w-[1480px] items-end px-6 pb-24 pt-40 sm:px-10 lg:px-14 lg:pb-32">
          <div className="max-w-4xl">
            <Reveal delay={150}>
              <h1 className="display display-xl uppercase tracking-[0.04em]">{siteConfig.name}</h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-base text-off-white/80 sm:text-lg">{c.hero.support}</p>
            </Reveal>
            <Reveal delay={450}>
              <Link href={localizePath(locale, "/#contact")} className="btn btn-gold mt-10">
                {c.hero.primaryCtaLabel}
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
          <span className="eyebrow text-[0.55rem] text-off-white/45">{c.hero.scroll}</span>
          <span aria-hidden="true" className="scroll-cue" />
        </div>
      </section>

      {/* ------------------------------------------------------------------
          The collection — brand partnerships, wide horizontal rail. Sits
          directly under the hero: title column on the left, cards gliding
          off the right edge of the viewport.
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
                <Link href={localizePath(locale, "/partnerships")} className="btn btn-accent mt-9">
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
          Timeline — horizontal chronology, pinned while it scrolls.
      ------------------------------------------------------------------ */}
      {/* No `overflow-hidden` here: an ancestor with a clipped overflow becomes
          the sticky scroll container and the pin silently stops working. The
          track is clipped inside Timeline instead. */}
      <section id="timeline" className="bg-white pb-24 pt-24 text-ink lg:pb-32 lg:pt-28">
        <Timeline
          entries={c.timeline.entries}
          title={c.timeline.title}
          intro={c.timeline.intro}
        />
      </section>

      {/* ------------------------------------------------------------------
          A word from the president — opens the off-white chapter it shares
          with the house statement below.
      ------------------------------------------------------------------ */}
      <PresidentWord content={c.presidentWord} />

      {/* ------------------------------------------------------------------
          The team — full-bleed photograph on the dark ground, closing the
          off-white chapter above before the white contact section below.
      ------------------------------------------------------------------ */}
      <TeamBand content={c.team} />

      {/* ------------------------------------------------------------------
          Contact — B2B enquiry, working form.
      ------------------------------------------------------------------ */}
      <section id="contact" className="bg-white py-28 text-ink sm:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display display-lg uppercase tracking-[0.05em]">{c.contact.title}</h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-md text-sm leading-8 text-ink/65">{c.contact.body}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-12 space-y-6 border-t border-ink/10 pt-10">
                <div>
                  <h3 className="eyebrow text-ink/50">{c.contact.distilleryHeading}</h3>
                  <address className="mt-3 not-italic text-sm leading-7 text-ink/70">
                    {siteConfig.legalName}
                    <br />
                    {siteConfig.address}
                  </address>
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:decoration-gold-ink"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="block text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:decoration-gold-ink"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={200}>
              <div className="border border-ink/12 bg-off-white p-8 sm:p-10">
                <ContactForm
                  locale={locale}
                  content={c.contact.form}
                  enquiryTypes={c.contact.enquiryTypes}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
