import type { Brand } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { getBrandCta, type BrandCtaLabels } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { BrandCard } from "@/components/BrandCard";

/**
 * The brands of one category, laid out as a static grid.
 *
 * The home page shows the whole collection as a horizontal rail; a category
 * page holds one to three bottles, where a rail would have nothing to glide
 * through. Server-rendered — no client JS, unlike `BrandRail`.
 *
 * The column count follows the number of brands rather than a fixed track, so
 * a single-bottle category reads as a plate rather than as a lonely card in a
 * three-up grid.
 */
export function BrandGrid({
  locale,
  brands,
  labels,
}: {
  locale: Locale;
  brands: readonly Brand[];
  labels: BrandCtaLabels;
}) {
  const columns =
    brands.length === 1
      ? "max-w-md"
      : brands.length === 2
        ? "max-w-3xl sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    // `h-full` runs all the way down each cell, so the call to action sits on
    // one baseline across the row however long a descriptor runs.
    <ul className={`m-0 grid list-none gap-x-10 gap-y-16 p-0 ${columns}`}>
      {brands.map((brand, index) => (
        <li key={brand.slug} id={`brand-${brand.slug}`} className="h-full scroll-mt-32">
          <Reveal delay={index * 120} className="h-full">
            <BrandCard
              brand={brand}
              cta={getBrandCta(locale, brand, labels)}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
