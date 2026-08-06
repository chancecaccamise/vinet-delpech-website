import Link from "next/link";
import type { Experience } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import { fill } from "@/lib/content";
import type { Content } from "@/lib/content/en";
import { Reveal } from "@/components/Reveal";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { clsx } from "@/lib/clsx";

/**
 * One tour/tasting offering as an alternating editorial block. Booking goes
 * to the homepage enquiry form ("Visits & tastings" type), with a pre-filled
 * mailto as the direct alternative — no dead buttons.
 */
export function ExperienceSection({
  locale,
  experience,
  labels,
  flip = false,
}: {
  locale: Locale;
  experience: Experience;
  labels: Content["experiences"];
  flip?: boolean;
}) {
  const mailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    fill(labels.bookingSubject, { name: experience.name }),
  )}`;

  return (
    <article
      id={experience.slug}
      className="grid gap-10 border-t border-ink/12 py-16 lg:grid-cols-12 lg:items-center lg:py-20"
    >
      <Reveal className={clsx("lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        <PlaceholderFrame label={experience.frameLabel} aspect="4 / 3" tone="light" />
      </Reveal>

      <Reveal delay={150} className={clsx("lg:col-span-6", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
        <div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
            <span>{experience.duration}</span>
            <span aria-hidden="true">·</span>
            <span>{experience.groupSize}</span>
            <span aria-hidden="true">·</span>
            <span>{experience.languages}</span>
          </div>
          <h2 className="display display-md mt-5 uppercase tracking-[0.06em]">{experience.name}</h2>
          <p className="mt-4 max-w-lg text-sm leading-8 text-ink/65">{experience.body}</p>

          <h3 className="eyebrow mt-8 text-ink/50">{labels.included}</h3>
          <ul className="mt-4 max-w-lg list-none space-y-2 p-0">
            {experience.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-ink/70">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-gold-ink" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-gold-ink">
            {experience.price}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href={localizePath(locale, "/#contact")} className="btn btn-accent">
              {labels.book}
            </Link>
            <a href={mailHref} className="link-quiet text-gold-ink">
              {labels.orEmail}
            </a>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
