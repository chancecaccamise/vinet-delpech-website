import Image from "next/image";
import { presidentPortrait, presidentSignatureName } from "@/lib/site";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";

/**
 * "A word from the president" — the founder's statement, quoted.
 *
 * Sits on the off-white tone of the section rhythm, opening the quiet chapter
 * it shares with the house statement below; the white timeline above is
 * separated by a hairline rather than a change of ground.
 *
 * The medallion on the rule echoes the monogram-on-a-rule device from the
 * existing production site, drawn here with the house lockup.
 *
 * The measure is deliberately narrow — a first-person statement reads as
 * correspondence, not as a full-width editorial block.
 */
export function PresidentWord({ content }: { content: Content["presidentWord"] }) {
  const presidentWord = content;

  return (
    <section
      id="president"
      aria-labelledby="president-title"
      className="border-t border-ink/10 bg-off-white py-20 text-ink sm:py-24"
    >
      <div className="mx-auto max-w-[66rem] px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          {/* Portrait — offset hairline behind the plate, the way a print
              block sits proud of its rule. */}
          <div className="md:col-span-4">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[16rem] md:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 hidden h-full w-full border border-gold-ink/25 lg:block"
                />
                <Image
                  src={presidentPortrait.src}
                  alt={presidentWord.portraitAlt}
                  width={presidentPortrait.width}
                  height={presidentPortrait.height}
                  sizes="(min-width: 768px) 16rem, 70vw"
                  className="relative h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <h2
                id="president-title"
                className="display display-md uppercase tracking-[0.05em]"
              >
                {presidentWord.title}
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-5 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-ink/35">
                  <Logo variant="mark" className="h-4" />
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gradient-to-r from-gold-ink/40 to-transparent"
                />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="display display-sm mt-6 italic text-gold-ink">
                « {presidentWord.quote} »
              </p>
            </Reveal>

            <div className="mt-5 space-y-4">
              {presidentWord.body.map((paragraph, index) => (
                <Reveal key={index} delay={350 + index * 90}>
                  <p className="max-w-[38rem] text-sm leading-7 text-ink/65">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* Name and role share a line — the block is a sign-off, not a
                second heading, and it keeps the column from running long. */}
            <Reveal delay={650}>
              <p className="mt-8 max-w-[38rem] border-t border-ink/10 pt-5 text-sm tracking-[0.02em]">
                <span className="font-serif text-base">{presidentSignatureName}</span>
                <span className="eyebrow ml-3 text-[0.6rem] text-gold-ink">
                  {presidentWord.signatureRole}
                </span>
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
