"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig, type NavGroup } from "@/lib/site";
import { locales, localeMeta, localizePath, switchLocaleInPath, type Locale } from "@/lib/i18n";
import type { Content } from "@/lib/content/en";
import { clsx } from "@/lib/clsx";
import { PlaceholderFrame } from "@/components/PlaceholderFrame";
import { Logo } from "@/components/Logo";
import { Flag, LocaleSwitcher } from "@/components/LocaleSwitcher";

const CLOSE_DELAY = 140;

/**
 * Rémy-style fixed navigation: monogram left, four condensed top-level items
 * in the centre — each opening a full-width megamenu (text-link column +
 * hairline divider + featured image cards) — language switcher right.
 * Transparent over the hero, solid/blurred once scrolled or while a menu is
 * open. On mobile the megamenus collapse into an accessible drawer of
 * accordions.
 *
 * Nav and labels arrive as props from the locale layout: the header is a
 * client component, so it cannot read the route's locale param itself.
 */
export function Header({
  locale,
  nav,
  ui,
}: {
  locale: Locale;
  nav: NavGroup[];
  ui: Content["ui"];
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<number | null>(null);

  // Scroll state.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const cancelScheduledClose = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openNow = useCallback(
    (index: number) => {
      cancelScheduledClose();
      setOpenMenu(index);
    },
    [cancelScheduledClose],
  );

  const scheduleClose = useCallback(() => {
    cancelScheduledClose();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, [cancelScheduledClose]);

  const closeMenuNow = useCallback(() => {
    cancelScheduledClose();
    setOpenMenu(null);
  }, [cancelScheduledClose]);

  const closeAll = useCallback(() => {
    cancelScheduledClose();
    setOpenMenu(null);
    setDrawerOpen(false);
  }, [cancelScheduledClose]);

  // Escape closes the open megamenu (refocusing its trigger) or the drawer.
  useEffect(() => {
    if (openMenu === null && !drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openMenu !== null) {
        triggerRefs.current[openMenu]?.focus();
        setOpenMenu(null);
      }
      if (drawerOpen) {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu, drawerOpen]);

  // Clicking outside the header closes the megamenu.
  useEffect(() => {
    if (openMenu === null) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  // Focus trap while the drawer is open (hamburger + drawer live in the header).
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const root = headerRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // Keyboard focus leaving the header closes the megamenu.
  const onHeaderBlur = (event: React.FocusEvent) => {
    if (openMenu !== null && !headerRef.current?.contains(event.relatedTarget as Node)) {
      setOpenMenu(null);
    }
  };

  const solid = scrolled || openMenu !== null || drawerOpen;

  // Two palettes for one bar: white-on-hero while transparent, ink-on-light
  // once the bar goes solid. Every interior surface reads from these so the
  // whole header crosses over together.
  const c = solid
    ? { text: "text-ink", hairline: "border-ink/15" }
    : { text: "text-cream", hairline: "border-cream/25" };

  return (
    <header
      ref={headerRef}
      className={clsx("fixed inset-x-0 top-0 z-50 transition-colors duration-500", c.text)}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelScheduledClose}
      onBlur={onHeaderBlur}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        {ui.skipToContent}
      </a>

      <div
        className={clsx(
          "relative border-b transition-[background-color,border-color,backdrop-filter] duration-500",
          solid ? "border-ink/10 bg-white/95 backdrop-blur-md" : "border-transparent bg-transparent",
        )}
      >
        <div
          className={clsx(
            "mx-auto flex max-w-[1480px] items-center px-5 transition-[height] duration-500 sm:px-8 lg:px-12",
            scrolled ? "h-[72px]" : "h-[96px]",
          )}
        >
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={drawerOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            onClick={() => setDrawerOpen((value) => !value)}
            className={clsx(
              "mr-4 flex h-11 w-11 flex-col items-center justify-center gap-1.5 border transition-colors duration-300 lg:hidden",
              c.hairline,
              c.text,
              solid ? "hover:border-blue hover:text-blue" : "hover:border-sand hover:text-sand",
            )}
          >
            <span
              className={clsx(
                "block h-px w-5 bg-current transition-transform duration-300",
                drawerOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "block h-px w-5 bg-current transition-transform duration-300",
                drawerOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>

          {/* Persistent house lockup — home lives here, like Rémy. */}
          <Link
            href={localizePath(locale, "/#home")}
            aria-label={`${siteConfig.name}, ${ui.home}`}
            className="group flex min-w-0 items-center"
            onClick={closeAll}
          >
            <Logo
              priority
              className={clsx(
                "transition-opacity duration-300 group-hover:opacity-75",
                scrolled ? "h-11" : "h-14",
              )}
            />
          </Link>

          <nav
            aria-label={ui.mainNavigation}
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          >
            {nav.map((group, index) => {
              // Anchor groups (…/#know-how) never mark a route active — only
              // real routes do. Locale-prefixed hrefs mean the old
              // `startsWith("/#")` test no longer identifies an anchor.
              const routeActive = !group.href.includes("#") && pathname.startsWith(group.href);
              // Contact carries no panel, so it announces itself as an ordinary
              // link and reaching it dismisses whichever menu was open.
              const hasMenu = Boolean(group.links?.length);
              const active = (hasMenu && openMenu === index) || routeActive;
              return (
                <div
                  key={group.label}
                  onMouseEnter={() => (hasMenu ? openNow(index) : closeMenuNow())}
                >
                  <Link
                    ref={(node) => {
                      triggerRefs.current[index] = node;
                    }}
                    href={group.href}
                    aria-expanded={hasMenu ? openMenu === index : undefined}
                    aria-controls={hasMenu ? `megamenu-${index}` : undefined}
                    aria-haspopup={hasMenu ? "true" : undefined}
                    aria-current={active ? "true" : undefined}
                    onFocus={() => (hasMenu ? openNow(index) : closeMenuNow())}
                    onClick={closeAll}
                    className={clsx(
                      "nav-link text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300",
                      solid ? "nav-link-ink text-ink/75 hover:text-ink" : "text-cream/85 hover:text-cream",
                    )}
                  >
                    {group.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center">
            <LocaleSwitcher
              locale={locale}
              label={ui.language}
              solid={solid}
              className="hidden md:block"
            />
          </div>
        </div>

        {/* --------------------------------------------------------------
            Desktop megamenus — all panels are server-rendered (crawlable)
            and toggled with the `hidden` attribute; only one open at a time.
        -------------------------------------------------------------- */}
        <div className="absolute inset-x-0 top-full max-lg:hidden">
          {nav.map((group, index) =>
            !group.links?.length || !group.featured ? null : (
            <div
              key={group.label}
              id={`megamenu-${index}`}
              hidden={openMenu !== index}
              className="megapanel border-b border-ink/10 bg-white/97 shadow-2xl backdrop-blur-xl"
            >
              <div className="mx-auto grid max-w-[1480px] grid-cols-[0.9fr_1px_1.5fr] gap-12 px-5 py-12 sm:px-8 lg:px-12">
                <ul className="m-0 list-none space-y-1 p-0">
                  {group.links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link
                        href={link.href}
                        onClick={closeAll}
                        className="group/link block py-2 text-sm text-ink/65 transition-colors duration-300 hover:text-ink"
                      >
                        <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover/link:border-blue">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                  {group.viewAll && (
                    <li className="pt-4">
                      <Link
                        href={group.viewAll.href}
                        onClick={closeAll}
                        className="link-quiet text-blue"
                      >
                        {group.viewAll.label}
                      </Link>
                    </li>
                  )}
                </ul>

                <div aria-hidden="true" className="w-px self-stretch bg-ink/12" />

                <div>
                  <h3 className="eyebrow text-ink/50">{group.featured.heading}</h3>
                  <div className="mt-6 flex flex-wrap gap-8">
                    {group.featured.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeAll}
                        className="group/card block w-56"
                      >
                        <div className="overflow-hidden">
                          {item.image ? (
                            // Packshots share the products' 4:5 canvas, so they
                            // fill the frame without letterboxing.
                            <div className="relative aspect-[4/5] w-full bg-white">
                              <Image
                                src={item.image}
                                alt=""
                                fill
                                sizes="224px"
                                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover/card:scale-[1.05]"
                              />
                            </div>
                          ) : (
                            <PlaceholderFrame
                              label={item.frameLabel}
                              aspect="3 / 2"
                              tone="light"
                              className="transition-transform duration-700 ease-out motion-safe:group-hover/card:scale-[1.05]"
                            />
                          )}
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/80 transition-colors duration-300 group-hover/card:text-blue">
                          {item.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            ),
          )}
        </div>
      </div>

      {/* --------------------------------------------------------------
          Mobile drawer — accordions mirror the megamenu groups.
      -------------------------------------------------------------- */}
      {drawerOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink/10 bg-white/97 px-6 pb-16 pt-6 text-ink backdrop-blur-xl lg:hidden"
        >
          <nav aria-label={ui.mobileNavigation} className="mx-auto flex max-w-xl flex-col">
            {nav.map((group, index) => {
              const links = group.links;
              const featured = group.featured;

              // Menu-less groups are a single row that navigates, not an
              // accordion with nothing to unfold.
              if (!links?.length) {
                return (
                  <div key={group.label} className="border-b border-ink/10">
                    <Link
                      href={group.href}
                      onClick={closeAll}
                      className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl uppercase tracking-[0.14em] text-ink/85 transition-colors duration-300 hover:text-blue"
                    >
                      {group.label}
                      <span aria-hidden="true" className="text-blue">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                );
              }

              return (
              <div key={group.label} className="border-b border-ink/10">
                <button
                  type="button"
                  aria-expanded={expandedGroup === index}
                  aria-controls={`drawer-group-${index}`}
                  onClick={() => setExpandedGroup(expandedGroup === index ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl uppercase tracking-[0.14em] text-ink/85 transition-colors duration-300 hover:text-blue"
                >
                  {group.label}
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "text-blue transition-transform duration-300",
                      expandedGroup === index && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div id={`drawer-group-${index}`} hidden={expandedGroup !== index} className="pb-6">
                  <ul className="m-0 list-none space-y-1 p-0">
                    {links.map((link) => (
                      <li key={`${link.label}-${link.href}`}>
                        <Link
                          href={link.href}
                          onClick={closeAll}
                          className="block py-2 text-sm text-ink/65 transition-colors duration-300 hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {/* Featured cards collapse to simple links on mobile —
                        minus any that already appear in the column above.
                        Partnerships features three of its own categories, so
                        without this the drawer lists Cognac, Gin and Rum
                        twice. */}
                    {featured?.items
                      .filter((item) => !links.some((link) => link.href === item.href))
                      .map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="block py-2 text-sm text-blue/85 transition-colors duration-300 hover:text-blue"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              );
            })}

            <Link
              href={localizePath(locale, "/contact")}
              onClick={closeAll}
              className="btn btn-blue mt-8 self-start"
            >
              {ui.startAProject}
            </Link>

            {/* Languages are a flat list in the drawer — a dropdown inside a
                drawer is a menu inside a menu. Same data as the switcher. */}
            <div className="mt-10 border-t border-ink/10 pt-6">
              <h2 className="eyebrow text-ink/45">{ui.language}</h2>
              <ul className="m-0 mt-4 list-none space-y-1 p-0">
                {locales.map((code) => {
                  const meta = localeMeta[code];
                  const isCurrent = code === locale;
                  const row = (
                    <>
                      <Flag code={code} />
                      <span className="flex-1">{meta.name}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                        {meta.short}
                      </span>
                    </>
                  );

                  return (
                    <li key={code}>
                      {isCurrent ? (
                        <span
                          aria-current="true"
                          className="flex items-center gap-3 py-2 text-sm text-ink"
                        >
                          {row}
                        </span>
                      ) : (
                        // Switching language holds your place in the site —
                        // /fr/visit from /en/visit, not back to the home page.
                        <Link
                          href={switchLocaleInPath(pathname, code)}
                          lang={meta.htmlLang}
                          hrefLang={meta.htmlLang}
                          onClick={closeAll}
                          className="flex items-center gap-3 py-2 text-sm text-ink/65 transition-colors duration-300 hover:text-ink"
                        >
                          {row}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
