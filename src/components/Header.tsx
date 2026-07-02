"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, mainNav } from "@/lib/site";
import { clsx } from "@/lib/clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/35 to-transparent" />

      <div className="relative mx-auto flex h-[96px] max-w-[1480px] items-center px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="mr-4 flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-white/25 bg-black/15 text-white backdrop-blur transition hover:bg-white hover:text-black lg:hidden"
        >
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </button>

        <Link
          href="/#home"
          aria-label={`${siteConfig.name} homepage`}
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/70 bg-black/20 font-serif text-xl tracking-[-0.08em] text-white backdrop-blur">
            VD
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block font-serif text-2xl uppercase tracking-[0.12em]">
              Vinet
            </span>
            <span className="block font-serif text-2xl uppercase tracking-[0.12em]">
              Delpech
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/#home"
                ? pathname === "/"
                : pathname === item.href.split("#")[0];

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "nav-link text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:text-white",
                  active && "text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.2em] md:flex">
          <a href="https://www.vinet-delpech.com/fr/" className="text-white/85 transition hover:text-white">
            FR
          </a>
          <span className="h-4 w-px bg-white/35" />
          <Link href="/#contact" className="text-white/85 transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-y border-white/15 bg-[#11100e]/95 px-5 py-6 text-white shadow-2xl backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.vinet-delpech.com/fr/"
              className="pt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
            >
              Français
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
