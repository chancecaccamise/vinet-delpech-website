import Link from "next/link";
import { siteConfig, mainNav } from "@/lib/site";

const legalLinks = ["Terms and Conditions", "Accessibility", "Privacy Policy", "Cookie Policy", "FAQ"];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#eeeeee] text-[#15110e]">
      <div className="mx-auto max-w-[1480px] px-6 py-16 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 border-b border-black/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/#home" className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black/40 font-serif text-xl tracking-[-0.08em]">
              VD
            </span>
            <span className="font-serif text-3xl uppercase leading-none tracking-[0.12em]">
              Vinet<br />Delpech
            </span>
          </Link>

          <Link href="/#contact" className="btn border border-black text-black hover:bg-black hover:text-white">
            Contact us
          </Link>
        </div>

        <div className="grid gap-10 border-b border-black/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em]">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-black/62 transition hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em]">Capabilities</h3>
            <ul className="mt-5 space-y-3 text-sm text-black/62">
              <li>Private labels</li>
              <li>Product development</li>
              <li>Dry material sourcing</li>
              <li>Custom bottling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em]">Legal pages</h3>
            <ul className="mt-5 space-y-3 text-sm text-black/62">
              {legalLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em]">Contact</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-black/62">
              {siteConfig.address}
            </address>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 block text-sm text-black/70 hover:text-black">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm text-black/70 hover:text-black">
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-[0.18em] text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>France · English</p>
        </div>
      </div>
    </footer>
  );
}
