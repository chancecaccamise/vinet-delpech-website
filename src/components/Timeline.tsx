"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/lib/site";
import { clsx } from "@/lib/clsx";

/**
 * Horizontal chronology.
 *
 * On wide viewports (with motion allowed) the section is pinned and the track
 * travels sideways in step with vertical scroll — the page scrolls down, the
 * years move left, 1:1 with pixels so it never feels detached from the wheel.
 *
 * Everywhere else — narrow screens, reduced-motion — it degrades to a native
 * horizontal scroll rail with snap points. Same markup, same content order,
 * no pinning and no scroll hijacking.
 *
 * Whichever mode is active, the entry nearest the centre is emphasised and the
 * sand axis fills to show progress through the chronology.
 */
type TimelineProps = {
  entries: readonly TimelineEntry[];
  title: string;
  intro: string;
};

export function Timeline({ entries, title, intro }: TimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [pinned, setPinned] = useState(false);
  const [travel, setTravel] = useState(0);
  const [viewportH, setViewportH] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  // Pinned mode is an enhancement: wide viewports that haven't asked for
  // reduced motion. Everything else uses the scroll rail.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setPinned(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // How far the track has to move for its last entry to reach the viewport.
  // The viewport height is measured rather than expressed in `svh`, so the
  // section's scroll budget is exactly `travel` and the pin releases on the
  // same pixel the track finishes.
  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setTravel(Math.max(0, rail.scrollWidth - rail.clientWidth));
    setViewportH(window.innerHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure, { passive: true });
    // Track width also shifts when webfonts land or the entries reflow, which
    // no resize event covers — a stale measurement would end the pin early.
    const observer = new ResizeObserver(measure);
    if (railRef.current) observer.observe(railRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [measure, pinned]);

  // Pinned: map vertical scroll through the section onto horizontal travel.
  useEffect(() => {
    if (!pinned || travel <= 0) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const distance = section.offsetHeight - window.innerHeight;
      if (distance <= 0) return;
      const passed = Math.min(Math.max(-section.getBoundingClientRect().top, 0), distance);
      const ratio = passed / distance;
      setProgress(ratio);
      setActive(Math.round(ratio * (entries.length - 1)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinned, travel, entries.length]);

  // Rail mode: derive the same two values from the rail's own scroll position.
  useEffect(() => {
    if (pinned) return;
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = rail.scrollWidth - rail.clientWidth;
      setProgress(max > 0 ? rail.scrollLeft / max : 0);
      const centre = rail.scrollLeft + rail.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const distance = Math.abs(item.offsetLeft + item.offsetWidth / 2 - centre);
        if (distance < best) {
          best = distance;
          nearest = index;
        }
      });
      setActive(nearest);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinned]);

  return (
    <div
      ref={sectionRef}
      // The extra height is the scroll budget the pinned track spends moving
      // sideways; in rail mode the section is its natural height.
      style={pinned && travel > 0 && viewportH > 0 ? { height: `${viewportH + travel}px` } : undefined}
    >
      <div
        className={clsx(pinned && "sticky top-0 flex flex-col justify-center overflow-hidden")}
        style={pinned && viewportH > 0 ? { height: `${viewportH}px` } : undefined}
      >
        {/* Inside the sticky area so the heading stays with the years while
            the track scrubs, rather than scrolling away before the pin. */}
        <div className="mx-auto w-full max-w-[1320px] shrink-0 px-6 pb-14 lg:px-10">
          <h2 className="display display-lg uppercase tracking-[0.05em]">{title}</h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-ink/65">{intro}</p>
        </div>

        <div className="relative">
          {/* Axis with a sand fill tracking progress. */}
          <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-ink/15">
            <div
              className="h-full bg-blue transition-[width] duration-200 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

          <ol
            ref={railRef}
            className={clsx(
              "relative m-0 flex list-none p-0",
              // Only the fallback scrolls natively; the pinned track is moved
              // by transform instead.
              pinned ? "overflow-hidden" : "rail",
            )}
          >
            {entries.map((entry, index) => {
              const isActive = index === active;
              const above = index % 2 === 0;
              return (
                <li
                  key={entry.year}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  aria-current={isActive ? "step" : undefined}
                  className="flex h-[26rem] w-[78vw] shrink-0 flex-col px-6 sm:w-[46vw] lg:w-[26rem] lg:px-10"
                  style={
                    // No CSS transition here: progress already updates once per
                    // animation frame, and easing it would let the track lag
                    // behind the scroll and finish after the pin releases.
                    pinned ? { transform: `translateX(-${progress * travel}px)` } : undefined
                  }
                >
                  {/* Entries alternate above and below the axis, echoing the
                      zigzag of the original vertical timeline. */}
                  <div className="flex flex-1 flex-col justify-end pb-8">
                    {above && <Entry entry={entry} isActive={isActive} />}
                  </div>

                  <div className="relative flex h-3 items-center">
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "block rounded-full transition-all duration-500",
                        isActive ? "h-3 w-3 bg-blue" : "h-1.5 w-1.5 bg-ink/30",
                      )}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-start pt-8">
                    {!above && <Entry entry={entry} isActive={isActive} />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Entry({ entry, isActive }: { entry: TimelineEntry; isActive: boolean }) {
  return (
    <div
      className={clsx(
        "max-w-xs transition-all duration-500 ease-out",
        isActive ? "opacity-100" : "opacity-45",
      )}
    >
      <p
        className={clsx(
          "display transition-all duration-500",
          isActive ? "display-lg text-blue" : "display-md text-ink/45",
        )}
      >
        {entry.year}
      </p>
      <p className="mt-4 text-sm leading-7 text-ink/65">{entry.body}</p>
    </div>
  );
}
