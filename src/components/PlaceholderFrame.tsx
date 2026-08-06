import { clsx } from "@/lib/clsx";
import type { CSSProperties } from "react";

type PlaceholderFrameProps = {
  /** Caption describing the photography/video to drop in, e.g. "Hero — barrel cellar, cinematic". */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 9", "2 / 3". Ignored when `fill` is set. */
  aspect?: string;
  /** Stretch to the parent's height (for split layouts) instead of an aspect ratio. */
  fill?: boolean;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Elegant, clearly-labeled stand-in for real photography. Swap for
 * `next/image` (or a background video) once assets exist — the caption
 * states exactly what belongs in each slot.
 */
export function PlaceholderFrame({
  label,
  aspect = "16 / 9",
  fill = false,
  tone = "dark",
  className,
}: PlaceholderFrameProps) {
  return (
    <figure
      className={clsx(
        "frame m-0",
        fill && "frame-fill",
        tone === "dark" ? "frame--dark" : "frame--light",
        className,
      )}
      style={fill ? undefined : ({ "--frame-aspect": aspect } as CSSProperties)}
    >
      <figcaption>{label}</figcaption>
    </figure>
  );
}
