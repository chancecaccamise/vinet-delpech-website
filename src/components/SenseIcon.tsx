import type { ReactNode } from "react";
import type { TastingSense } from "@/lib/site";

/**
 * The three tasting glyphs — eye, nose, palate — after the brochure's own.
 *
 * The site has no icon system and does not want one for three drawings, so
 * these follow the idiom already in the brand cards: a 24-unit grid, `currentColor`
 * at hairline weight, with size and colour supplied by the caller so the same
 * glyph works on cream and on navy.
 *
 * Purely decorative — every glyph sits beside its own written label, so they
 * carry no title and stay hidden from assistive technology.
 */
const PATHS: Record<TastingSense, ReactNode> = {
  // An open eye under short rays, as the brochure draws it.
  eye: (
    <>
      <path d="M2.5 13.5s3.6-4.8 9.5-4.8 9.5 4.8 9.5 4.8-3.6 4.8-9.5 4.8-9.5-4.8-9.5-4.8Z" />
      <circle cx="12" cy="13.5" r="2.4" />
      <path d="M12 5.2V3M6.6 6.3 5.5 4.5M17.4 6.3l1.1-1.8" />
    </>
  ),
  // The brochure uses an atomiser rather than a nose for the aroma note.
  nose: (
    <>
      <rect x="8.4" y="10.6" width="7.2" height="9.8" rx="1.6" />
      <path d="M10.6 10.6V8.2h2.8v2.4M13.4 9.4h3.1v1.9" />
      <circle cx="18.6" cy="8.4" r="1.5" />
      <path d="M5.4 5.2v.01M7.6 3.6v.01M4.4 8.2v.01" />
    </>
  ),
  // Lips: two arcs meeting at the corners, with the mouth line between.
  palate: (
    <>
      <path d="M2.6 12.4S6 8.2 12 8.2s9.4 4.2 9.4 4.2" />
      <path d="M2.6 12.4S6 17.6 12 17.6s9.4-5.2 9.4-5.2" />
      <path d="M2.6 12.4h18.8" />
    </>
  ),
};

export function SenseIcon({
  sense,
  className = "h-5 w-5",
}: {
  sense: TastingSense;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[sense]}
    </svg>
  );
}
