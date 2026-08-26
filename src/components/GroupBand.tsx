import Image from "next/image";
import { sawneeWorldMap } from "@/lib/site";
import type { FeatureFigure } from "@/lib/site";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";
import { StatsBand } from "@/components/StatsBand";

/**
 * The Sawnee Group — the parent behind the distillery.
 *
 * The industries and offices reuse the three-up hairline tile already on this
 * page for `about.skills`, so the section adds no new device. The figures go
 * through `StatsBand`, which is exactly what it is for; the founding year is
 * deliberately not among them, since a date counting up from zero reads as a
 * bug rather than a flourish.
 */
export function GroupBand({
  content,
  figures,
}: {
  content: Content["group"];
  figures: readonly FeatureFigure[];
}) {
  return (
    <section id="group" className="bg-cream py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div>
              <p className="eyebrow text-blue">{content.label}</p>
              <h2 className="display display-md mt-6 uppercase tracking-[0.05em]">{content.title}</h2>
              {content.body.map((paragraph) => (
                <p key={paragraph} className="mt-6 max-w-xl text-sm leading-8 text-ink/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <Image
              src={sawneeWorldMap.src}
              alt={content.mapAlt}
              width={sawneeWorldMap.width}
              height={sawneeWorldMap.height}
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="h-auto w-full"
            />
          </Reveal>
        </div>

        <Reveal delay={200}>
          <StatsBand
            stats={figures}
            className="mt-20 grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3"
          />
        </Reveal>

        <div className="mt-20 grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div>
              <h3 className="eyebrow text-ink/45">{content.industriesLabel}</h3>
              <ul className="m-0 mt-8 grid list-none gap-x-8 gap-y-6 p-0 sm:grid-cols-2">
                {content.industries.map((industry) => (
                  <li key={industry} className="border-t border-ink/15 pt-4 text-sm text-ink/70">
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div>
              <h3 className="eyebrow text-ink/45">{content.officesLabel}</h3>
              <ul className="m-0 mt-8 grid list-none gap-x-8 gap-y-6 p-0 sm:grid-cols-2">
                {content.offices.map((office) => (
                  <li key={office} className="border-t border-ink/15 pt-4 text-sm text-ink/70">
                    {office}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
