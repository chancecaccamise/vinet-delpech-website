import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";

type Voice = {
  key: string;
  portrait: { src: string; width: number; height: number };
  name: string;
  role: string;
  quote: string;
  body: readonly string[];
  portraitAlt: string;
};

/**
 * "A word from our leadership" — the two voices of the house, side by side.
 *
 * Replaces the single-portrait `PresidentWord`: with a general manager and a
 * group chief executive, one word from one man no longer told the whole
 * story. Rahul reads first, Bruno second, per the house's requested order.
 *
 * Keeps that section's devices — the monogram-on-a-rule under the title and
 * the guillemet quote in the accent blue — with square portrait plates cut
 * from inside the brochure's circular masks, the only portraits that exist
 * for both men.
 *
 * Each column reads as correspondence: portrait, quote, statement, sign-off.
 */
export function LeadershipWord({
  title,
  voices,
}: {
  title: string;
  voices: readonly Voice[];
}) {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
      className="border-t border-ink/10 bg-white py-20 text-ink sm:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal>
          <h2 id="leadership-title" className="display display-md uppercase tracking-[0.05em]">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-5 flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue/35">
              <Logo variant="mark" className="h-4" />
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-blue/25" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-16 lg:grid-cols-2">
          {voices.map((voice, index) => (
            <Reveal key={voice.key} delay={250 + index * 150}>
              <article className="flex h-full flex-col">
                <div className="relative h-36 w-36 overflow-hidden ring-1 ring-ink/15">
                  <Image
                    src={voice.portrait.src}
                    alt={voice.portraitAlt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>

                <p className="display display-sm mt-8 italic text-blue">« {voice.quote} »</p>

                <div className="mt-5 flex-1 space-y-4">
                  {voice.body.map((paragraph) => (
                    <p key={paragraph} className="max-w-[34rem] text-sm leading-7 text-ink/65">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Name and role share a line: a sign-off, not a heading. */}
                <p className="mt-8 max-w-[34rem] border-t border-ink/10 pt-5 text-sm tracking-[0.02em]">
                  <span className="font-serif text-base">{voice.name}</span>
                  <span className="eyebrow ml-3 text-[0.6rem] text-blue">{voice.role}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
