import Image from "next/image";
import { teamImage } from "@/lib/site";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";

/**
 * The house, edge to edge on the dark navy ground.
 *
 * Its own chapter rather than a plate inside the president's statement: the
 * `bg-navy` band separates the cream president section above from the
 * white testimonials below, and gives the photograph a ground of its own.
 * It is the one break in the page's white/cream alternation, which resumes
 * underneath it.
 *
 * The image is full-bleed and uncropped — laid out on the file's own wide
 * ratio (`h-auto w-full`, no `object-cover`), so the band's height follows
 * the viewport width; that is the intended behaviour. It currently carries
 * the still house (see `teamImage` in src/lib/site.ts); when the house sends
 * a new team photograph, repointing that export is the whole swap.
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
        <figure className="page-frame py-8">
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
