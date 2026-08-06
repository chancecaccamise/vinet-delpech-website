"use client";

import { useEffect, useRef } from "react";

type HeroMediaProps = {
  /** Footage URL. When null the poster stands in as a still placeholder. */
  videoSrc: string | null;
  poster: string;
  /** Described by the surrounding copy, so the media itself stays decorative. */
  label: string;
};

/**
 * Full-bleed hero background. Renders the looping footage once it exists and
 * falls back to the poster still until then — same box either way, so the
 * scrims and headline layout above it never need to change.
 *
 * `autoPlay` stays in the markup so playback never depends on JavaScript; the
 * effect below only takes it away again from visitors who asked for reduced
 * motion, leaving them the poster frame.
 */
export function HeroMedia({ videoSrc, poster, label }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else if (video.paused) {
        // `play()` rejects when the browser blocks autoplay; the poster stays
        // up in that case, which is the same graceful outcome.
        void video.play().catch(() => {});
      }
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [videoSrc]);

  if (!videoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- decorative full-bleed backdrop, not a content image
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        data-placeholder={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={videoSrc}
      poster={poster}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
