import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

/**
 * The way in, for tours and tastings alike: the house's own line that visits
 * are by prior appointment and arranged through the office, the button to
 * the enquiry form with the house email beside it, and one photograph.
 *
 * Both visit pages render this block, so how the house takes a booking is
 * written in one place. Neither page carries a programme of durations,
 * group sizes or prices any more — the house never confirmed one, and a
 * visitor who wants a tour or a tasting is asked to get in touch.
 */
export function AppointmentSection({
  locale,
  label,
  body,
  ctaLabel,
  image,
  alt,
}: {
  locale: Locale;
  /** Accessible name for the section — the page title. */
  label: string;
  body: string;
  ctaLabel: string;
  image: string;
  alt: string;
}) {
  return (
    <section aria-label={label} className="bg-white py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-x-16 gap-y-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="max-w-xl text-base leading-8 text-ink/70">{body}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                {ctaLabel}
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="link-quiet text-blue">
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
