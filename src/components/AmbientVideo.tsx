"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AmbientVideoProps = {
  /** Footage URL, served straight from `public/` — video is not optimised. */
  src: string;
  /** First frame of `src`, so the hand-off from still to footage cannot jump. */
  poster: string;
  /** Describes the footage; carried by the poster and by the video element. */
  alt: string;
  /** Passed to the poster's `sizes` — the video itself fills the same box. */
  sizes: string;
};

/**
 * A silent looping clip standing in for a photograph, inside a figure that
 * still has its own caption.
 *
 * Unlike the hero, this one sits well below the fold, so nothing is fetched
 * until it is nearly in view: `preload="none"` holds the request back and the
 * observer below starts it. It then pauses again whenever it scrolls away,
 * which keeps a decorative loop off the CPU (and off a laptop battery) while
 * the visitor is reading something else further down the page.
 *
 * The poster is a real `next/image`, not the `<video poster>` attribute, so
 * the still gets the same AVIF/WebP treatment and responsive sizes as every
 * other frame in the section. It stays underneath the footage rather than
 * being swapped out, which is also what a visitor sees when autoplay is
 * blocked, when JavaScript never runs, or when they have asked for reduced
 * motion — in all three cases this is simply the photograph it replaced.
 */
export function AmbientVideo({ src, poster, alt, sizes }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Only mounts the <video> once it is worth fetching; until then the poster
  // is the whole figure, and a visitor who never scrolls here pays nothing.
  const [wanted, setWanted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = videoRef.current?.parentElement;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setWanted(entry.isIntersecting),
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (wanted) {
      // `play()` rejects when the browser blocks autoplay; the poster stays up
      // in that case, which is the same graceful outcome as no JavaScript.
      void video.play().catch(() => {});
    } else {
      // The fade back to the poster is driven by the element's own `pause`
      // event rather than set here, so the two can never disagree about
      // whether the footage is actually running.
      video.pause();
    }
  }, [wanted]);

  return (
    <div className="relative h-full w-full">
      <Image src={poster} alt={alt} fill sizes={sizes} className="object-cover" />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        src={wanted ? src : undefined}
        // The poster above already carries the description to assistive
        // technology, and the figure has a caption; a second copy here would
        // only be read twice.
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
}
