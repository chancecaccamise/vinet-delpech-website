import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import {
  fill,
  getPrivateLabelBrands,
  getContent,
  getSpiritFamilies,
  pluralize,
} from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);

  return pageMetadata({
    locale,
    path: "/private-label",
    title: c.metadata.privateLabelTitle,
    description: c.privateLabel.metaDescription,
  });
}

export default async function PartnershipsPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const families = getSpiritFamilies(locale);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.privateLabelTitle, path: "/private-label" },
          ]),
        ]}
      />

      <PageHero title={c.privateLabel.title} intro={c.privateLabel.intro}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={localizePath(locale, "/contact")} className="btn btn-cream">
            {c.privateLabel.ctaLabel}
          </Link>
        </div>
      </PageHero>

      <section aria-label={c.metadata.privateLabelTitle} className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <ul className="m-0 grid list-none gap-x-10 gap-y-14 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((family, index) => {
              const count = getPrivateLabelBrands(locale, family.slug).length;
              // `h-full` is carried down through the Reveal wrapper so the
              // "Explore" link lands on the same baseline in every card,
              // whatever the length of the summary above it.
              return (
                <li key={family.slug} className="h-full">
                  <Reveal delay={index * 90} className="h-full">
                    <Link
                      href={localizePath(locale, `/private-label/${family.slug}`)}
                      className="group flex h-full flex-col"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={family.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
                          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
                        />
                      </div>

                      <h2 className="display display-sm mt-7 uppercase tracking-[0.05em]">
                        {family.name}
                      </h2>
                      {/* The count is the honest measure of the category — it
                          tells a trade visitor how deep the house's range runs
                          before they click. A category the house can produce
                          but has no bottle to show says that instead: "0
                          brands" reads as a broken page, not as an offer. */}
                      <p className="eyebrow mt-2 text-blue">
                        {count === 0
                          ? c.privateLabel.noBrandsYet
                          : pluralize(
                              c.privateLabel.brandCountOne,
                              c.privateLabel.brandCountOther,
                              count,
                            )}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-7 text-ink/60">{family.summary}</p>
                      <span className="link-quiet mt-5 text-blue">
                        {fill(c.privateLabel.explore, { name: family.name })}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={200}>
            <p className="eyebrow mt-16 text-ink/65">{c.privateLabel.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
