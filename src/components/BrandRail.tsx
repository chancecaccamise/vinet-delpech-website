"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Brand } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { getBrandCta } from "@/lib/content";
import type { Content } from "@/lib/content/en";
import { BrandCard } from "@/components/BrandCard";
import { clsx } from "@/lib/clsx";

/**
 * Horizontal glide-through showcase of the house’s brands, on a light section.
 * Native scroll + snap underneath; the flanking arrows are a progressive
 * enhancement. The rail is deliberately allowed to run past the container's
 * right edge so cards bleed off-screen rather than sitting in a narrow well.
 */
export function BrandRail({
  locale,
  brands,
  labels,
  ui,
}: {
  locale: Locale;
  brands: readonly Brand[];
  labels: Content["partnerships"];
  ui: Content["ui"];
}) {
  const railRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const syncButtons = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanPrev(rail.scrollLeft > 8);
    setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 8);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    syncButtons();
    rail.addEventListener("scroll", syncButtons, { passive: true });
    window.addEventListener("resize", syncButtons, { passive: true });
    return () => {
      rail.removeEventListener("scroll", syncButtons);
      window.removeEventListener("resize", syncButtons);
    };
  }, [syncButtons]);

  const glide = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.75, behavior: "smooth" });
  };

  // Deep links (/#brand-<slug>) glide the rail horizontally to the matching
  // brand card. The Partnerships megamenu now points at the category pages
  // instead, but the anchors are kept: they are linkable and still used.
  useEffect(() => {
    const scrollToHash = () => {
      const match = window.location.hash.match(/^#brand-(.+)$/);
      if (!match) return;
      const item = railRef.current?.querySelector<HTMLElement>(`#brand-${CSS.escape(match[1])}`);
      if (!item) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      item.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "center", block: "nearest" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const arrow =
    "absolute top-[26%] z-10 hidden h-12 w-12 items-center justify-center text-ink/50 transition-colors duration-300 hover:text-blue disabled:pointer-events-none disabled:opacity-0 lg:flex";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => glide(-1)}
        disabled={!canPrev}
        aria-label={ui.previousBrands}
        className={clsx(arrow, "-left-14")}
      >
        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden="true">
          <path d="M13 1 1 13l12 12" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => glide(1)}
        disabled={!canNext}
        aria-label={ui.nextBrands}
        className={clsx(arrow, "-right-2 lg:-right-4")}
      >
        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden="true">
          <path d="m1 1 12 12L1 25" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      <ul ref={railRef} className="rail m-0 list-none gap-8 p-0" aria-label={ui.brandCollection}>
        {brands.map((brand) => (
          <li
            key={brand.name}
            id={`brand-${brand.slug}`}
            className="w-[70vw] sm:w-[38vw] lg:w-[25vw] xl:w-[22vw]"
          >
            <BrandCard
              brand={brand}
              cta={getBrandCta(locale, brand, labels)}
              sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 25vw, (min-width: 640px) 38vw, 70vw"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
