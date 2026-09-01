import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, localizePath } from "@/lib/i18n";
import { fill, getContent, getPartnerCompanies } from "@/lib/content";
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
    path: "/partners",
    title: c.metadata.partnersTitle,
    description: c.partners.metaDescription,
  });
}

/**
 * The two houses alongside the distillery, as two cards.
 *
 * Only one of them has a page here. Puranique's card leaves the site, and it
 * says so on its face — the outbound label is the domain itself — because the
 * house asked that the Puranique range not be duplicated on this site. Which
 * card behaves which way is decided in `getPartnerCompanies`, from the
 * `portfolio` flag on the record, not here.
 */
export default async function PartnersPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const c = getContent(locale);
  const companies = getPartnerCompanies(locale);

  return (
    <>
      <JsonLd
        nodes={[
          breadcrumbJsonLd(locale, [
            { name: siteConfig.name, path: "/" },
            { name: c.metadata.partnersTitle, path: "/partners" },
          ]),
        ]}
      />

      <PageHero title={c.partners.title} intro={c.partners.intro} />

      <section aria-label={c.metadata.partnersTitle} className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          {/* Capped well inside the 1320px column: two 4:5 packshots split
              across the full width render half a metre tall, against the
              ~300px cards every other grid on the site uses. */}
          <ul className="m-0 grid max-w-3xl list-none gap-x-12 gap-y-16 p-0 sm:grid-cols-2">
            {companies.map((company, index) => {
              const external = !company.portfolio;
              const label = external ? c.partners.visitSite : c.partners.viewRange;
              const ariaLabel = fill(
                external ? c.partners.visitSiteAria : c.partners.viewRangeAria,
                { name: company.name },
              );

              return (
                <li key={company.slug} className="h-full">
                  <Reveal delay={index * 120} className="h-full">
                    <Link
                      href={company.href}
                      aria-label={ariaLabel}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex h-full flex-col"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                        <Image
                          src={company.image}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 22rem, 85vw"
                          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
                        />
                      </div>

                      <h2 className="display display-sm mt-7 uppercase tracking-[0.05em]">
                        {company.name}
                      </h2>
                      <p className="eyebrow mt-2 text-blue">{company.descriptor}</p>
                      <p className="mt-3 flex-1 text-sm leading-7 text-ink/60">{company.intro}</p>
                      <span className="link-quiet mt-5 text-blue">{label}</span>
                      {/* The bare domain, so a card that leaves the site says
                          where to before it is clicked. */}
                      <span className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-ink/45">
                        {company.linkLabel}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={200}>
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <Link href={localizePath(locale, "/contact")} className="btn btn-blue">
                {c.partners.ctaLabel}
              </Link>
            </div>
            <p className="eyebrow mt-10 text-ink/65">{c.partners.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
