import Image from "next/image";
import type { Brand } from "@/lib/site";
import { fill } from "@/lib/content";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";

/**
 * The brands of one category, laid out as a static grid.
 *
 * The home page shows the whole collection as a horizontal rail; a category
 * page holds one to three bottles, where a rail would have nothing to glide
 * through. Server-rendered — no client JS, unlike `BrandRail`.
 *
 * The column count follows the number of brands rather than a fixed track, so
 * a single-bottle category (cognac, whisky) reads as a plate rather than as a
 * lonely card in a three-up grid.
 */
export function BrandGrid({
  brands,
  labels,
}: {
  brands: readonly Brand[];
  labels: Content["partnerships"];
}) {
  const columns =
    brands.length === 1
      ? "max-w-md"
      : brands.length === 2
        ? "max-w-3xl sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    // `h-full` runs all the way down each cell, so "View details" sits on one
    // baseline across the row however long a descriptor runs.
    <ul className={`m-0 grid list-none gap-x-10 gap-y-16 p-0 ${columns}`}>
      {brands.map((brand, index) => (
        <li key={brand.slug} id={`brand-${brand.slug}`} className="h-full scroll-mt-32">
          <Reveal delay={index * 120} className="h-full">
            <article className="group flex h-full flex-col text-center">
              {brand.image ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={brand.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <PlaceholderFrame
                  label={brand.frameLabel}
                  aspect="4 / 5"
                  tone="light"
                  className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
                />
              )}

              <h3 className="mt-7 text-sm font-semibold uppercase leading-6 tracking-[0.14em] text-ink">
                {brand.name}
              </h3>
              <p className="eyebrow mt-2 text-gold-ink">{brand.category}</p>
              <p className="mt-3 flex-1 px-2 text-sm leading-7 text-ink/55">{brand.descriptor}</p>

              {/* Producers keep their own product pages; the house links out
                  rather than restating a partner's sheet. Brands without a
                  page simply carry no button. */}
              {brand.url && (
                <div className="mt-6">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={fill(labels.viewDetailsAria, { name: brand.name })}
                    className="btn btn-outline-gold btn-sm"
                  >
                    {labels.viewDetails}
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
