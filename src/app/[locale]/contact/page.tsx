import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { languageAlternates } from "@/app/[locale]/layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getContent(locale);

  return {
    title: c.metadata.contactTitle,
    description: c.contact.metaDescription,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: languageAlternates("/contact"),
    },
  };
}

/** A labelled line of contact details — heading, then rows of links. */
function DetailBlock({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink/15 pt-6">
      <h3 className="eyebrow text-ink/45">{heading}</h3>
      <div className="mt-4 space-y-2 text-sm leading-7 text-ink/70">{children}</div>
    </div>
  );
}

function DetailLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block text-ink underline decoration-ink/25 underline-offset-4 transition-colors duration-300 hover:decoration-blue"
    >
      {children}
    </a>
  );
}

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const c = getContent(locale);
  const contact = c.contact;

  // Labels are proper nouns, so they live here rather than in the dictionaries.
  const social: readonly (readonly [string, string])[] = [
    ["LinkedIn", siteConfig.social.linkedin],
    ["Instagram", siteConfig.social.instagram],
    ["Facebook", siteConfig.social.facebook],
    ["puraniques.com", siteConfig.brandSite],
  ];

  return (
    <>
      <PageHero title={contact.title} intro={contact.intro} />

      {/* The form leads. Everything a visitor needs to send an enquiry sits in
          one column on white, with no panel around it — the earlier version
          boxed the form inside a tinted card on an already-tinted section. */}
      <section aria-label={contact.formHeading} className="bg-white py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-x-20 gap-y-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <Reveal>
              <div>
                <h2 className="display display-md uppercase tracking-[0.05em]">
                  {contact.formHeading}
                </h2>
                <p className="mt-6 text-sm leading-8 text-ink/65">{contact.body}</p>
                <p className="mt-6 text-xs leading-6 text-ink/45">{contact.formIntro}</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={150}>
              <ContactForm
                locale={locale}
                content={contact.form}
                enquiryTypes={contact.enquiryTypes}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label={contact.detailsLabel} className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <Reveal>
            <h2 className="display display-md uppercase tracking-[0.05em]">
              {contact.detailsLabel}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <DetailBlock heading={contact.distilleryHeading}>
                <address className="not-italic">
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address}
                </address>
              </DetailBlock>
            </Reveal>

            <Reveal delay={120}>
              <DetailBlock heading={contact.switchboardHeading}>
                <DetailLink href={`mailto:${siteConfig.email}`}>{siteConfig.email}</DetailLink>
                <DetailLink href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  {siteConfig.phone}
                </DetailLink>
              </DetailBlock>
            </Reveal>

            <Reveal delay={240}>
              <DetailBlock heading={contact.commercialHeading}>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  {siteConfig.commercial.name}
                </p>
                <p className="eyebrow text-ink/45">{contact.commercialRole}</p>
                <DetailLink href={`mailto:${siteConfig.commercial.email}`}>
                  {siteConfig.commercial.email}
                </DetailLink>
                <DetailLink href={`tel:${siteConfig.commercial.phone.replace(/\s/g, "")}`}>
                  {siteConfig.commercial.phone}
                </DetailLink>
              </DetailBlock>
            </Reveal>

            <Reveal delay={360}>
              <DetailBlock heading={contact.followHeading}>
                {social.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-ink underline decoration-ink/25 underline-offset-4 transition-colors duration-300 hover:decoration-blue"
                  >
                    {label}
                  </a>
                ))}
              </DetailBlock>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
