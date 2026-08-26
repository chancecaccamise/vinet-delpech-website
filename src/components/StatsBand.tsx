"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

type Stat = { value: number; suffix: string; label: string };

const COUNT_DURATION = 1800;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * A single figure. The real value is server-rendered (SEO / no-JS parity);
 * once the band scrolls into view the number counts up from zero by writing
 * to the DOM node directly — no re-renders, static under reduced motion.
 */
function StatFigure({
  stat,
  started,
  figureClassName,
}: {
  stat: Stat;
  started: boolean;
  figureClassName: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!started || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / COUNT_DURATION, 1);
      node.textContent = Math.round(easeOut(progress) * stat.value).toLocaleString("en-GB");
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    node.textContent = "0";
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      node.textContent = stat.value.toLocaleString("en-GB");
    };
  }, [started, stat.value]);

  return (
    <div className="border-l border-ink/15 pl-4 sm:pl-5">
      <div
        className={clsx("display whitespace-nowrap text-blue tabular-nums", figureClassName)}
        aria-hidden="true"
      >
        <span ref={numberRef}>{stat.value.toLocaleString("en-GB")}</span>
        {/* Units read as units, not as part of the figure. */}
        {stat.suffix && <span className="text-[0.5em] tracking-[0.06em]">{stat.suffix}</span>}
      </div>
      {/* Stable figure for assistive tech, unaffected by the animation. */}
      <span className="sr-only">
        {stat.value.toLocaleString("en-GB")}
        {stat.suffix}
      </span>
      <div className="eyebrow mt-2 text-ink/55">{stat.label}</div>
    </div>
  );
}

/**
 * Cinematic stats band — figures count up once, when scrolled into view.
 * `className` overrides the grid so the same band works full-width or inside
 * a narrow feature-panel column.
 */
export function StatsBand({
  stats,
  className,
  figureClassName = "display-lg",
}: {
  stats: readonly Stat[];
  className?: string;
  figureClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx("grid gap-x-6 gap-y-10", className ?? "grid-cols-2 lg:grid-cols-4")}>
      {stats.map((stat) => (
        <StatFigure key={stat.label} stat={stat} started={started} figureClassName={figureClassName} />
      ))}
    </div>
  );
}
