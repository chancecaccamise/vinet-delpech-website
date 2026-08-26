"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, localizePath } from "@/lib/i18n";
import { getContent } from "@/lib/content";

/**
 * A not-found page receives no route params, so the locale is read back off the
 * pathname — reliable here because the locale is always the first segment and
 * `src/proxy.ts` guarantees one is present.
 */
export default function NotFound() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale = isLocale(first) ? first : defaultLocale;
  const c = getContent(locale).notFound;

  return (
    <section className="flex min-h-svh items-center justify-center bg-navy px-6 text-center text-cream">
      <div>
        <h1 className="display display-lg mt-6 uppercase tracking-[0.06em]">{c.title}</h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-cream/65">{c.body}</p>
        <div className="mt-10">
          <Link href={localizePath(locale, "/")} className="btn btn-cream">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
