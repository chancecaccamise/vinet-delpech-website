import Link from "next/link";
import { footerCapabilityHrefs, footerLegalHrefs, siteConfig, type NavLink } from "@/lib/site";
import { locales, localeMeta, localizePath, switchLocaleInPath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer({
  locale,
  nav,
  content,
  responsibleDrinking,
}: {
  locale: Locale;
  nav: NavLink[];
  content: Content["footer"];
  responsibleDrinking: string;
}) {
  const year = new Date().getFullYear();
  // True now that the legal pages exist; kept as a guard so blanking the hrefs
  // hides the column rather than shipping a list of dead anchors.
  const hasLegalPages = footerLegalHrefs.some((href) => href !== "#");

  return (
    <footer className="mt-auto bg-navy text-cream">
      <div className="hairline-sand" />
      <div className="mx-auto max-w-[1480px] px-6 py-16 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <Link
            href={localizePath(locale, "/#home")}
            aria-label={siteConfig.name}
            className="group flex items-center"
          >
            <Logo className="h-24 transition-opacity duration-300 group-hover:opacity-75" />
          </Link>

          <Link
            href={localizePath(locale, "/contact")}
            className="btn btn-outline-light self-start"
          >
            {content.navigateCta}
          </Link>
        </div>

        <div
          className={`grid gap-10 border-b border-cream/10 py-12 sm:grid-cols-2 ${
            hasLegalPages ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          <div>
            <h3 className="eyebrow text-sand">{content.navigateHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-sand">{content.capabilitiesHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0">
              {/* One capability, one destination — positional against
                  `footerCapabilityHrefs` in site.ts. */}
              {content.capabilities.map((item, index) => (
                <li key={item}>
                  <Link
                    href={localizePath(locale, footerCapabilityHrefs[index])}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The guard stays: it kept the column hidden while these were four
              anchors to "#", and it still degrades gracefully if the hrefs are
              ever emptied again. `footerLegalHrefs` now points at real routes,
              so the column renders. */}
          {hasLegalPages && (
            <div>
            <h3 className="eyebrow text-sand">{content.legalHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0">
              {content.legalLinks.map((item, index) => (
                <li key={item}>
                  <Link
                    href={localizePath(locale, footerLegalHrefs[index])}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          )}

          <div>
            <h3 className="eyebrow text-sand">{content.contactHeading}</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-cream/60">
              {siteConfig.legalName}
              <br />
              {siteConfig.address}
            </address>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-6 flex gap-4">
              {(
                [
                  ["instagram", "Instagram", siteConfig.social.instagram],
                  ["facebook", "Facebook", siteConfig.social.facebook],
                  ["linkedin", "LinkedIn", siteConfig.social.linkedin],
                ] as const
              ).map(([network, label, href]) => (
                <a
                  key={network}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/60 transition-colors duration-300 hover:border-sand hover:text-sand"
                >
                  <SocialIcon network={network} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* One warning, in the reader's own language. The French edition
            carries the Loi Évin wording through `responsibleDrinking`; the
            English and Spanish editions no longer restate it in French
            underneath, which read as a duplicate rather than as a notice. */}
        <div className="flex flex-col gap-4 border-b border-cream/10 py-8 text-center">
          <p className="text-[0.68rem] uppercase leading-6 tracking-[0.2em] text-cream/75">
            {responsibleDrinking}
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[0.62rem] uppercase tracking-[0.18em] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {content.rights}
          </p>
          <p className="flex items-center gap-2">
            {locales.map((code, index) => (
              <span key={code} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-cream/25">
                    ·
                  </span>
                )}
                {code === locale ? (
                  <span aria-current="true" className="text-cream/70">
                    {localeMeta[code].short}
                  </span>
                ) : (
                  <Link
                    href={switchLocaleInPath(`/${locale}`, code)}
                    lang={localeMeta[code].htmlLang}
                    hrefLang={localeMeta[code].htmlLang}
                    className="text-cream/60 underline underline-offset-4 transition-colors duration-300 hover:text-cream"
                  >
                    {localeMeta[code].short}
                  </Link>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
