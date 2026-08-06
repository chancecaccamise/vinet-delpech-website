import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  intro: readonly string[];
  children?: ReactNode;
};

/**
 * Dark editorial hero band for interior pages — keeps the fixed header
 * legible in its transparent state, echoing the homepage hero.
 */
export function PageHero({ title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night text-off-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(197,160,90,0.3),transparent_32%),linear-gradient(115deg,#0a0705_0%,#1b130d_48%,#4a2e18_78%,#0d0a07_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,11,8,0.85),transparent_50%)]" />
      <div aria-hidden="true" className="absolute bottom-6 left-6 right-6 top-24 border border-off-white/15" />

      <div className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-40 sm:pb-24 sm:pt-48 lg:px-10">
        <Reveal>
          <h1 className="display display-xl max-w-4xl uppercase tracking-[0.06em]">{title}</h1>
        </Reveal>
        {intro.map((paragraph, index) => (
          <Reveal key={index} delay={300 + index * 120}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-off-white/70">{paragraph}</p>
          </Reveal>
        ))}
        {children && <Reveal delay={450}>{children}</Reveal>}
      </div>
    </section>
  );
}
