"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeMeta, switchLocaleInPath, type Locale } from "@/lib/i18n";
import { clsx } from "@/lib/clsx";

/**
 * Language picker for the header.
 *
 * The trigger shows the edition currently being read — flag and short code —
 * and opens the three offered languages. Every entry is a real route: choosing
 * one keeps your place in the site (/es/visit/tours from /en/visit/tours)
 * rather than dropping you on the home page, because the locale is only ever
 * the first path segment.
 */
type LocaleSwitcherProps = {
  /** The edition currently being read. */
  locale: Locale;
  /** Translated word for "Language", used in the trigger's accessible name. */
  label: string;
  /** Header palette: `true` once the bar is solid (ink on light). */
  solid: boolean;
  className?: string;
};

export function LocaleSwitcher({ locale, label, solid, className }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const current = localeMeta[locale];

  // Escape closes and returns focus; a pointer outside just closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={clsx("relative", className)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="locale-menu"
        aria-haspopup="true"
        aria-label={`${label}: ${current.name}`}
        onClick={() => setOpen((value) => !value)}
        className={clsx(
          "flex items-center gap-2 border px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
          solid
            ? "border-ink/15 text-ink/75 hover:border-blue hover:text-ink"
            : "border-cream/25 text-cream/85 hover:border-sand hover:text-cream",
        )}
      >
        <Flag code={locale} />
        <span>{current.short}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 10 6"
          className={clsx("h-1.5 w-2.5 transition-transform duration-300", open && "rotate-180")}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {/* The panel keeps the light palette in both header states, like the
          megamenus, so the list never has to restyle mid-scroll. */}
      <ul
        id="locale-menu"
        hidden={!open}
        className="absolute right-0 top-[calc(100%+0.6rem)] z-10 m-0 w-52 list-none border border-ink/10 bg-white/97 p-0 py-1 text-ink shadow-2xl backdrop-blur-xl"
      >
        {locales.map((code) => {
          const meta = localeMeta[code];
          const isCurrent = code === locale;
          const content = (
            <>
              <Flag code={code} />
              <span className="flex-1">{meta.name}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                {meta.short}
              </span>
            </>
          );

          return (
            <li key={code}>
              {isCurrent ? (
                <span
                  aria-current="true"
                  className="flex items-center gap-3 bg-ink/[0.06] px-4 py-2.5 text-sm text-ink"
                >
                  {content}
                </span>
              ) : (
                <Link
                  href={switchLocaleInPath(pathname, code)}
                  lang={meta.htmlLang}
                  hrefLang={meta.htmlLang}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink/70 transition-colors duration-300 hover:bg-ink/[0.04] hover:text-ink"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Simplified flags, drawn rather than fetched: emoji flags don't render on
 * Windows and an icon font would be a network request for three glyphs. All
 * three share a 3:2 box so the switcher's rows stay aligned.
 */
export function Flag({ code, className }: { code: Locale; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 40"
      className={clsx("h-3.5 w-[1.3rem] shrink-0 ring-1 ring-inset ring-black/15", className)}
    >
      {code === "en" && (
        <>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="9" />
          <path d="M0 0l60 40M60 0L0 40" stroke="#c8102e" strokeWidth="4" />
          <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="14" />
          <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="8" />
        </>
      )}
      {code === "fr" && (
        <>
          <rect width="60" height="40" fill="#fff" />
          <rect width="20" height="40" fill="#002395" />
          <rect x="40" width="20" height="40" fill="#ed2939" />
        </>
      )}
      {code === "es" && (
        <>
          <rect width="60" height="40" fill="#aa151b" />
          <rect y="10" width="60" height="20" fill="#f1bf00" />
        </>
      )}
    </svg>
  );
}
