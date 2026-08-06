import Link from "next/link";
import { footerLegalHrefs, siteConfig, type NavLink } from "@/lib/site";
import { locales, localeMeta, localizePath, switchLocaleInPath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { Logo } from "@/components/Logo";

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

  return (
    <footer className="mt-auto bg-night text-off-white">
      <div className="hairline-gold" />
      <div className="mx-auto max-w-[1480px] px-6 py-16 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 border-b border-off-white/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <Link
            href={localizePath(locale, "/#home")}
            aria-label={siteConfig.name}
            className="group flex items-center"
          >
            <Logo className="h-24 transition-opacity duration-300 group-hover:opacity-75" />
          </Link>

          <Link
            href={localizePath(locale, "/#contact")}
            className="btn btn-outline-light self-start"
          >
            {content.navigateCta}
          </Link>
        </div>

        <div className="grid gap-10 border-b border-off-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow text-gold">{content.navigateHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-off-white/60 transition-colors duration-300 hover:text-off-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">{content.capabilitiesHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0 text-sm text-off-white/60">
              {content.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">{content.legalHeading}</h3>
            <ul className="mt-5 list-none space-y-3 p-0">
              {content.legalLinks.map((item, index) => (
                <li key={item}>
                  <a
                    href={footerLegalHrefs[index]}
                    className="text-sm text-off-white/60 transition-colors duration-300 hover:text-off-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">{content.contactHeading}</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-off-white/60">
              {siteConfig.legalName}
              <br />
              {siteConfig.address}
            </address>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-off-white/70 transition-colors duration-300 hover:text-off-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-off-white/70 transition-colors duration-300 hover:text-off-white"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-6 flex gap-5">
              <a
                href={siteConfig.social.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/50 transition-colors duration-300 hover:text-gold"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.instagram}
                rel="noopener noreferrer"
                target="_blank"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/50 transition-colors duration-300 hover:text-gold"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b border-off-white/10 py-8 text-center">
          <p className="text-[0.68rem] uppercase leading-6 tracking-[0.2em] text-off-white/55">
            {responsibleDrinking}
          </p>
          {/* The French warning is a labelling requirement in France and is
              shown on every edition, alongside the reader's own language. */}
          {locale !== "fr" && (
            <p
              lang="fr"
              className="text-[0.62rem] uppercase leading-6 tracking-[0.2em] text-off-white/35"
            >
              L’abus d’alcool est dangereux pour la santé. À consommer avec modération.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[0.62rem] uppercase tracking-[0.18em] text-off-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {content.rights}
          </p>
          <p className="flex items-center gap-2">
            {locales.map((code, index) => (
              <span key={code} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-off-white/25">
                    ·
                  </span>
                )}
                {code === locale ? (
                  <span aria-current="true" className="text-off-white/70">
                    {localeMeta[code].short}
                  </span>
                ) : (
                  <Link
                    href={switchLocaleInPath(`/${locale}`, code)}
                    lang={localeMeta[code].htmlLang}
                    hrefLang={localeMeta[code].htmlLang}
                    className="text-off-white/40 underline underline-offset-4 transition-colors duration-300 hover:text-off-white"
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
