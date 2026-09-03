import Image from "next/image";
import Link from "next/link";
import { terroirImages } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";

/**
 * The vineyards and the region — French craftsmanship shown where it comes
 * from. Sits where the two-voice "word from our leadership" used to: the
 * house asked that the home page show the estate, the vines and the craft
 * rather than the people, and the two leaders still speak on /about.
 *
 * Three photographs, none used anywhere else on the site, in two tiers. The
 * wide view across the vines to the treeline runs the full width of the
 * frame and carries the region; beneath it the rows and the ripe grapes sit
 * beside four short facets (the region, the crus, the grape, the craft) and
 * the one call to action, which goes to the visit page.
 *
 * The photographs take the left of the lower tier and the facets the right —
 * the estate showcase and the production section above both put their text
 * on the left, so the page's eye line changes side here. Below lg the tiers
 * simply stack, so the section reads photograph, photographs, facets, and
 * ends on the button rather than burying it between pictures.
 *
 * Server-rendered — nothing here needs client JS.
 */
export function TerroirSection({
  locale,
  content,
}: {
  locale: Locale;
  content: Content["terroir"];
}) {
  const plates = [
    { src: terroirImages.rows, alt: content.alts.rows, caption: content.captions.rows },
    { src: terroirImages.grapes, alt: content.alts.grapes, caption: content.captions.grapes },
  ];

  return (
    <section
      id="terroir"
      aria-labelledby="terroir-title"
      className="bg-cream py-24 text-ink sm:py-32"
    >
      <div className="page-frame">
        <Reveal>
          <p className="eyebrow text-blue">{content.kicker}</p>
        </Reveal>

        {/* Title left, statement right, both hung from the same top line: the
            kicker keeps its own row above so that whichever column runs
            longer (French does) the section still opens on the kicker. */}
        <div className="mt-6 grid gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-start">
          <Reveal delay={150} className="lg:col-span-7">
            <h2
              id="terroir-title"
              className="display display-lg max-w-3xl uppercase tracking-[0.04em]"
            >
              {content.title}
            </h2>
          </Reveal>
          <Reveal delay={300} className="lg:col-span-5 lg:pt-2">
            <div className="space-y-5 text-sm leading-8 text-ink/65">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The region, edge to edge of the frame. Two to one on wide screens;
            on a phone that ratio would make a letterbox, so it opens to 4:3
            and the crop closes in on the centre of the field. */}
        <Reveal delay={200} className="mt-14 sm:mt-16">
          <figure className="m-0">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[2/1]">
              <Image
                src={terroirImages.landscape}
                alt={content.alts.landscape}
                fill
                sizes="(min-width: 1480px) 1384px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 flex items-start gap-4 text-[0.6rem] text-ink/50">
              <span aria-hidden="true" className="mt-[0.5em] h-px w-10 shrink-0 bg-blue/40" />
              {content.captions.landscape}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-start">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
            {plates.map((plate, index) => (
              <Reveal key={plate.src} delay={200 + index * 150}>
                <figure className="m-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={plate.src}
                      alt={plate.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="eyebrow mt-4 flex items-start gap-4 text-[0.6rem] text-ink/50">
                    <span aria-hidden="true" className="mt-[0.5em] h-px w-10 shrink-0 bg-blue/40" />
                    {plate.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/65">{content.facetsLabel}</p>
            </Reveal>
            <Reveal delay={150}>
              <dl className="mt-6 grid gap-6 border-t border-ink/12 pt-6">
                {content.facets.map((facet) => (
                  <div key={facet.title} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-5">
                    <dt className="eyebrow text-ink/65 sm:pt-1">{facet.title}</dt>
                    <dd className="m-0 text-sm leading-7 text-ink/70">{facet.body}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={300}>
              <Link href={localizePath(locale, "/visit")} className="btn btn-blue mt-10">
                {content.ctaLabel}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
