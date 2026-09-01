import Image from "next/image";
import Link from "next/link";
import { estateShowcaseImages } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";

/**
 * The estate, directly under the hero — the place before any brand: the still
 * house, a barrel cellar and the vines, beside the four métiers the hero
 * tagline names. Replaces the brand rail this slot used to hold; the bottles
 * themselves live on the Partners and Private Labels pages.
 *
 * Server-rendered — nothing here needs client JS.
 */
export function EstateShowcase({
  locale,
  content,
}: {
  locale: Locale;
  content: Content["estate"];
}) {
  const metiers = [
    content.metiers.distillation,
    content.metiers.ageing,
    content.metiers.blending,
    content.metiers.bottling,
  ];

  return (
    <section id="estate" className="bg-white py-24 text-ink sm:py-32">
      {/* The media sections share the chrome's 1480px frame (header, hero),
          not the 1320px of the text bands — the old brand rail here was wider
          still for the same reason. */}
      <div className="mx-auto grid max-w-[1480px] gap-x-16 gap-y-12 px-6 sm:px-10 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-blue">{content.kicker}</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="display display-lg mt-6 uppercase tracking-[0.05em]">
              {content.title}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-sm leading-8 text-ink/65">{content.intro}</p>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-8 grid gap-2.5 border-t border-ink/12 pt-6">
              {metiers.map((metier) => (
                <div key={metier.title} className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                  <dt className="eyebrow text-ink/65 sm:pt-0.5">{metier.title}</dt>
                  <dd className="m-0 text-sm leading-6 text-ink/70">{metier.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={500}>
            <Link href={localizePath(locale, "/visit")} className="btn btn-blue mt-10">
              {content.ctaLabel}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-7">
          {/* The still spans both rows. On desktop the stacked pair drops its
              aspect lock and fills the column, so the trio shares clean edges
              with no gap; below lg the grid has no outside height to fill, so
              the aspect ratio is what gives the cells their size. */}
          <div className="grid h-full grid-cols-2 gap-3 sm:gap-4 lg:grid-rows-2">
            <div className="relative row-span-2 overflow-hidden">
              <Image
                src={estateShowcaseImages.stills}
                alt={content.alts.stills}
                fill
                sizes="(min-width: 1024px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden lg:aspect-auto">
              <Image
                src={estateShowcaseImages.cellar}
                alt={content.alts.cellar}
                fill
                sizes="(min-width: 1024px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden lg:aspect-auto">
              <Image
                src={estateShowcaseImages.vines}
                alt={content.alts.vines}
                fill
                sizes="(min-width: 1024px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
