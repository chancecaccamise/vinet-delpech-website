import Image from "next/image";
import Link from "next/link";
import { siteConfig, type HouseBrand } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { clsx } from "@/lib/clsx";
import { Reveal } from "@/components/Reveal";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { StatsBand } from "@/components/StatsBand";
import { TastingNotes } from "@/components/TastingNotes";
import { AwardRow } from "@/components/AwardRow";

/**
 * One house bottle told at length — heritage, origin story, tasting notes and
 * medals — as an alternating editorial block.
 *
 * The skeleton is `ExperienceSection`'s, deliberately copied rather than
 * shared: the two diverge in their meta row, their list and their tail, and
 * retrofitting one component to serve both would mean four conditional
 * branches inside it.
 *
 * Partner bottles never reach here. Their story lives on the producer's own
 * site, which is what their card links to; the house has no such page, so this
 * block is where its cards land.
 */
export function BrandStory({
  locale,
  brand,
  labels,
  flip = false,
}: {
  locale: Locale;
  brand: HouseBrand;
  labels: Content["houseBrands"]["labels"];
  /** Media moves to the right on alternate blocks. */
  flip?: boolean;
}) {
  return (
    <article
      id={`brand-${brand.slug}`}
      className="grid scroll-mt-32 gap-10 border-t border-ink/12 py-16 lg:grid-cols-12 lg:items-center lg:py-20"
    >
      <Reveal className={clsx("lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        {/* Full column width: the studio packshots run 790-1100px, ample for
            the ~510px this column reaches. The three remaining brochure crops
            (both Pineaux, Montlieu) render slightly soft at this size until
            their studio files arrive — see the TODO on `houseBrandAssets`. */}
        <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden">
          {brand.image ? (
            <Image
              src={brand.image}
              alt=""
              fill
              sizes="(min-width: 1360px) 510px, (min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          ) : (
            <PlaceholderFrame label={brand.frameLabel} aspect="4 / 5" tone="light" />
          )}
        </div>
      </Reveal>

      <Reveal
        delay={150}
        className={clsx("lg:col-span-6", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}
      >
        <div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-blue">
            <span>{labels.houseMark}</span>
            <span aria-hidden="true">·</span>
            <span>{brand.category}</span>
          </div>

          <h2 className="display display-md mt-5 uppercase tracking-[0.06em]">{brand.name}</h2>

          <h3 className="eyebrow mt-8 text-ink/50">{labels.heritage}</h3>
          <p className="mt-4 max-w-lg text-sm leading-8 text-ink/65">{brand.heritage}</p>

          <h3 className="eyebrow mt-8 text-ink/50">{labels.story}</h3>
          <p className="mt-4 max-w-lg text-sm leading-8 text-ink/65">{brand.story}</p>

          {brand.figures.length > 0 && (
            <StatsBand
              stats={brand.figures}
              className="mt-8 max-w-lg grid-cols-2 gap-x-4 gap-y-6"
              figureClassName="display-sm"
            />
          )}

          <TastingNotes
            notes={brand.notes}
            senses={labels.senses}
            heading={labels.tasting}
          />

          <AwardRow awards={brand.awards} heading={labels.awards} />

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
              {labels.ctaLabel}
            </Link>
            <a
              href={siteConfig.brandSite}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-blue"
            >
              {labels.brandSiteLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
