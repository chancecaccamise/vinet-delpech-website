import Link from "next/link";
import Image from "next/image";
import type { FeaturePanel } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { StatsBand } from "@/components/StatsBand";
import { clsx } from "@/lib/clsx";

/**
 * Full-bleed editorial panels: photography fills one half, a short statement
 * and a single call to action sit in the other. Sides alternate per panel via
 * `mediaSide`. Below `lg` the halves stack, media first, so the image always
 * introduces its statement.
 */
export function FeaturePanels({
  panels,
  label,
}: {
  panels: readonly FeaturePanel[];
  /** Accessible name for the group, translated: `ui.featured`. */
  label: string;
}) {
  return (
    <section aria-label={label} className="bg-white text-ink">
      {panels.map((panel) => {
        const isSpec = Boolean(panel.figures?.length || panel.details?.length);
        return (
        <article key={panel.slug} id={panel.slug} className="grid lg:grid-cols-2">
          <div
            className={clsx(
              "relative min-h-[52vh] overflow-hidden lg:min-h-[78vh]",
              // Media stacks first on mobile regardless of desktop side.
              panel.mediaSide === "right" && "lg:order-2",
            )}
          >
            {panel.image ? (
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <PlaceholderFrame label={panel.frameLabel} fill tone="dark" className="h-full" />
            )}
          </div>

          <div
            className={clsx(
              "flex items-center justify-center px-6 sm:px-12 lg:px-16",
              // Spec panels carry more content, so they run tighter padding to
              // stay the same height as a plain statement panel.
              isSpec ? "py-14 lg:py-14" : "py-20 lg:py-24",
            )}
          >
            <div className={isSpec ? "w-full max-w-xl" : "max-w-md"}>
              <Reveal>
                <h2
                  className={clsx(
                    "display uppercase tracking-[0.05em]",
                    isSpec ? "display-md" : "display-lg",
                  )}
                >
                  {panel.title}
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className={clsx("text-sm leading-7 text-ink/65", isSpec ? "mt-5" : "mt-7")}>
                  {panel.body}
                </p>
              </Reveal>

              {panel.figures && panel.figures.length > 0 && (
                <Reveal delay={250}>
                  <StatsBand
                    stats={panel.figures}
                    className="mt-7 grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3"
                    figureClassName="display-sm"
                  />
                </Reveal>
              )}

              {panel.details && panel.details.length > 0 && (
                <Reveal delay={350}>
                  <dl className="mt-7 grid gap-2.5 border-t border-ink/12 pt-6">
                    {panel.details.map((detail) => (
                      <div key={detail.label} className="grid gap-0.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                        <dt className="eyebrow text-ink/65 sm:pt-0.5">{detail.label}</dt>
                        <dd className="m-0 text-sm leading-6 text-ink/70">{detail.body}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}

              <Reveal delay={450}>
                <Link href={panel.cta.href} className={clsx("btn btn-blue", isSpec ? "mt-7" : "mt-10")}>
                  {panel.cta.label}
                </Link>
              </Reveal>
            </div>
          </div>
        </article>
        );
      })}
    </section>
  );
}
