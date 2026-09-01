import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/site";
import type { BrandCardCta } from "@/lib/content";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";

/**
 * One bottle as a card — packshot, name, category, descriptor, call to action.
 *
 * Every grid shows the same card; only the viewport `sizes` hint differs
 * between placements, so that is the single layout knob this takes. It began
 * as two near-identical copies in the old home-page rail and `BrandGrid`,
 * which had already drifted apart by the time the house's own range arrived
 * needing a second kind of link.
 *
 * Where the card leads is decided once, in `getBrandCta`, not here.
 */
export function BrandCard({
  brand,
  cta,
  sizes,
}: {
  brand: Brand;
  cta?: BrandCardCta;
  /** Responsive width hint — the rail and the grid lay out differently. */
  sizes: string;
}) {
  return (
    <article className="group flex h-full flex-col text-center">
      {brand.image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={brand.image}
            alt=""
            fill
            sizes={sizes}
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
      <p className="eyebrow mt-2 text-blue">{brand.category}</p>
      <p className="mt-3 flex-1 px-2 text-sm leading-7 text-ink/55">{brand.descriptor}</p>

      {cta && (
        <div className="mt-6">
          {cta.external ? (
            // Producers keep their own product pages; the house links out
            // rather than restating a partner's sheet.
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cta.ariaLabel}
              className="btn btn-outline-blue btn-sm"
            >
              {cta.label}
            </a>
          ) : (
            <Link href={cta.href} aria-label={cta.ariaLabel} className="btn btn-outline-blue btn-sm">
              {cta.label}
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
