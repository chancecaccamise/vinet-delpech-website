import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  intro: readonly string[];
  children?: ReactNode;
};

/**
 * Navy editorial hero band for interior pages — keeps the fixed header
 * legible in its transparent state, echoing the homepage hero.
 */
export function PageHero({ title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div aria-hidden="true" className="absolute bottom-6 left-6 right-6 top-24 border border-cream/15" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-40 sm:pb-24 sm:pt-48 lg:px-10">
        <Reveal>
          <h1 className="display display-xl max-w-4xl uppercase tracking-[0.06em]">{title}</h1>
        </Reveal>
        {intro.map((paragraph, index) => (
          <Reveal key={index} delay={300 + index * 120}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/70">{paragraph}</p>
          </Reveal>
        ))}
        {children && <Reveal delay={450}>{children}</Reveal>}
      </div>
    </section>
  );
}
