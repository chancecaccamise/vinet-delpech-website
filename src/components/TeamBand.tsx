import Image from "next/image";
import { teamImage } from "@/lib/site";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";

/**
 * The team, edge to edge on the dark house ground.
 *
 * Its own chapter rather than a plate inside the president's statement: the
 * `bg-navy` band separates the cream president section above from the
 * white contact section below, and gives the only full-colour photograph on
 * the page a ground of its own.
 *
 * The image is full-bleed and uncropped — laid out on the file's own
 * 1800 × 782 ratio (`h-auto w-full`, no `object-cover`), because a group shot
 * cropped to a fixed band loses whoever stands at the ends. That means the
 * band's height follows the viewport width; that is the intended behaviour.
 */
export function TeamBand({ content }: { content: Content["team"] }) {
  const team = content;
  return (
    <section aria-label={team.label} className="bg-navy text-cream">
      <Reveal>
        <Image
          src={teamImage.src}
          alt={team.alt}
          width={teamImage.width}
          height={teamImage.height}
          sizes="100vw"
          className="h-auto w-full"
        />
      </Reveal>

      <Reveal delay={150}>
        <figure className="mx-auto max-w-[1320px] px-6 py-8 lg:px-10">
          {/* `items-start` with the rule nudged onto the first baseline — the
              caption wraps to two lines on narrow screens, and a centred rule
              then floats between them. */}
          <figcaption className="eyebrow flex items-start gap-4 text-[0.6rem] text-cream/50">
            <span aria-hidden="true" className="mt-[0.5em] h-px w-10 shrink-0 bg-sand/50" />
            {team.caption}
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
