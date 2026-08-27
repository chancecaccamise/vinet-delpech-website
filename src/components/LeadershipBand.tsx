import Image from "next/image";
import type { Content } from "@/lib/content/en";
import { clsx } from "@/lib/clsx";
import { Reveal } from "@/components/Reveal";

type Leader = {
  key: string;
  portrait: { src: string; width: number; height: number };
  name: string;
  role: string;
  quote: string;
  body: readonly string[];
  portraitAlt: string;
};

/**
 * The two people who speak for the house, side by side.
 *
 * `LeadershipWord` on the home page carries Bruno's longer statement in a
 * bespoke single-portrait layout; this is the pair, with the shorter brochure
 * quotes, so /about does not simply repeat the home page. The two are kept
 * apart on purpose — folding both into one component would mean branching its
 * layout on how many people it was handed.
 *
 * Portraits are circular cutouts with real alpha, so they need no plate behind
 * them; the ring is a hairline, matching the rules used elsewhere on cream.
 */
export function LeadershipBand({
  content,
  leaders,
}: {
  content: Content["leadership"];
  leaders: readonly Leader[];
}) {
  return (
    <section id="leadership" className="bg-white py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-blue">{content.label}</p>
          <h2 className="display display-md mt-6 max-w-3xl uppercase tracking-[0.05em]">
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-ink/65">{content.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-16 lg:grid-cols-2">
          {leaders.map((leader, index) => (
            <Reveal key={leader.key} delay={index * 150}>
              <figure className="m-0 flex h-full flex-col">
                <div className="flex items-center gap-6">
                  <div
                    className={clsx(
                      "relative h-24 w-24 shrink-0 overflow-hidden rounded-full",
                      "ring-1 ring-ink/15",
                    )}
                  >
                    <Image
                      src={leader.portrait.src}
                      alt={leader.portraitAlt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                      {leader.name}
                    </p>
                    <p className="eyebrow mt-2 text-ink/65">{leader.role}</p>
                  </figcaption>
                </div>

                <blockquote className="m-0 mt-8 border-t border-ink/12 pt-8">
                  <p className="display display-sm uppercase tracking-[0.06em] text-blue">
                    {leader.quote}
                  </p>
                  {leader.body.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-sm leading-8 text-ink/65">
                      {paragraph}
                    </p>
                  ))}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
