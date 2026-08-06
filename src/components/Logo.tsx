import Image from "next/image";
import { clsx } from "@/lib/clsx";

// TODO(launch): interim Vinet-Puranik artwork, derived from the supplied
// 200x200 JPEG — white background knocked out, trimmed, upscaled 4x, and the
// monogram cut from the full lockup. Replace both with the real vector assets
// when the rebrand pack lands.
const ARTWORK = {
  // The stacked lockup: VP monogram over "VINET-PURANIK / DISTILLERIE".
  full: { src: "/media/vinetPuranikLogo.png", width: 604, height: 428 },
  // Monogram only — for slots too small to carry the wordmark legibly.
  mark: { src: "/media/vinetPuranikMonogram.png", width: 315, height: 230 },
} as const;

type LogoProps = {
  /** Controls height (e.g. "h-14"); width tracks the lockup's aspect ratio. */
  className?: string;
  /**
   * "full" is the lockup; "mark" is the bare VP monogram. Below roughly 24px
   * tall the wordmark turns to mush, so small decorative slots want "mark".
   */
  variant?: keyof typeof ARTWORK;
  priority?: boolean;
  /** Leave empty when an ancestor link already carries the accessible name. */
  alt?: string;
};

export function Logo({ className, variant = "full", priority = false, alt = "" }: LogoProps) {
  const art = ARTWORK[variant];

  return (
    <Image
      src={art.src}
      alt={alt}
      width={art.width}
      height={art.height}
      priority={priority}
      aria-hidden={alt === "" ? true : undefined}
      className={clsx(
        "w-auto max-w-full object-contain transition-[height] duration-500",
        className,
      )}
    />
  );
}
