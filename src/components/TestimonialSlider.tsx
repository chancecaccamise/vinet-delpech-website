"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Testimonial } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { clsx } from "@/lib/clsx";

/** How long each voice holds the stage before the track glides on. */
const HOLD_MS = 6000;
/** Must match the `duration-700` on the track below. */
const GLIDE_MS = 700;

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReduceMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCE_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/** Live media-query read; `false` on the server, where nothing animates. */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReduceMotion,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  );
}

/**
 * Client testimonials on the cream ground — its own chapter between the navy
 * team band and the white closing call to action, deliberately not an
 * extension of either.
 *
 * All three voices show side by side from `lg` up; the timer still glides the
 * row one card to the left every few seconds, so the columns rotate. Below
 * `lg` one card fills the viewport and the same glide pages through them.
 *
 * The track renders the list twice — [a, b, c, a′, b′, c′] — so every step,
 * the wrap included, glides left instead of rewinding across the strip; when
 * the track reaches the clone of its own start, it snaps back to the real
 * first card with the transition off. One step is one card width, which is
 * `--shift` — 100% of the viewport below `lg`, a third of it above — so the
 * same index drives both layouts. The timer pauses while the pointer or
 * keyboard focus is inside, and never starts for visitors who prefer reduced
 * motion — the dots still page for them, without the glide.
 */
export function TestimonialSlider({
  label,
  items,
  dotLabels,
}: {
  label: string;
  items: readonly Testimonial[];
  dotLabels: readonly string[];
}) {
  // Index runs over the track (clone included); the dots run over `items`.
  const [index, setIndex] = useState(0);
  const [gliding, setGliding] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The wrap: land on the clone, then snap to the real first slide unseen.
  const advance = useCallback(() => {
    setIndex((current) => {
      if (current >= items.length) return current; // mid-snap; let it settle
      const next = current + 1;
      if (next === items.length) {
        snapTimer.current = setTimeout(() => {
          setGliding(false);
          setIndex(0);
          // Two frames, not one: the browser must paint the un-transitioned
          // jump before the transition property returns.
          requestAnimationFrame(() => requestAnimationFrame(() => setGliding(true)));
        }, GLIDE_MS);
      }
      return next;
    });
  }, [items.length]);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(advance, HOLD_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, advance]);

  useEffect(
    () => () => {
      if (snapTimer.current) clearTimeout(snapTimer.current);
    },
    [],
  );

  const shown = index % items.length;
  // The whole list again, not just the first card: from `lg` up, three cards
  // are on stage at once, so the strip must stay full for a further two steps
  // past the last real card.
  const track = [...items, ...items];

  return (
    <section
      aria-label={label}
      className="bg-cream py-20 text-ink sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <h2 className="eyebrow flex items-center gap-4 text-[0.6rem] text-blue">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-blue/30" />
            {label}
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 overflow-hidden">
            <ul
              className={clsx(
                "m-0 flex list-none items-stretch p-0 [--shift:100%] lg:[--shift:33.3333%]",
                gliding && !reduceMotion && "transition-transform duration-700 ease-out",
              )}
              style={{ transform: `translateX(calc(${index} * -1 * var(--shift)))` }}
            >
              {track.map((item, trackIndex) => (
                <li
                  key={`${item.slug}-${trackIndex}`}
                  className="w-full shrink-0 pr-6 lg:w-1/3 lg:pr-14"
                  aria-hidden={trackIndex >= items.length || undefined}
                >
                  <blockquote className="m-0 flex h-full flex-col">
                    <p className="display display-sm flex-1 italic text-blue">
                      «&nbsp;{item.quote}&nbsp;»
                    </p>
                    {/* Bottom-aligned across the row, so three quotes of
                        different lengths still sign off on one line. */}
                    <footer className="mt-7 border-t border-ink/10 pt-4 font-serif text-base tracking-[0.02em]">
                      {item.name}
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex gap-2">
            {items.map((item, dotIndex) => (
              <button
                key={item.slug}
                type="button"
                aria-label={dotLabels[dotIndex]}
                aria-current={dotIndex === shown || undefined}
                onClick={() => {
                  if (snapTimer.current) clearTimeout(snapTimer.current);
                  setGliding(true);
                  setIndex(dotIndex);
                }}
                className="group/dot p-2"
              >
                <span
                  className={clsx(
                    "block h-[2px] w-8 transition-colors duration-300",
                    dotIndex === shown ? "bg-blue" : "bg-ink/20 group-hover/dot:bg-ink/40",
                  )}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
