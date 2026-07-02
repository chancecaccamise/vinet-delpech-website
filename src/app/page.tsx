import Link from "next/link";
import { siteConfig } from "@/lib/site";

const services = [
  "Customized product creation",
  "Effective sourcing of dry materials",
  "Technical and marketing advice on product development",
  "Regulatory support",
  "Customized bottling",
  "Permanent search for quality improvement",
];

const capabilities = [
  { value: "13", label: "pot stills" },
  { value: "4", label: "bottling lines" },
  { value: "22,000 hl", label: "vat storage" },
  { value: "2,200 m²", label: "storage warehouse" },
];

const partnerships = [
  "Gin Hold Up",
  "Whisky de France Palisson",
  "Brigitte et Louise Aperitifs",
  "Maca Rum",
  "Patte Blanche Organic Cognac",
  "Tijuca Brazilian Rum",
];

const discoverCards = [
  {
    eyebrow: "Tailor-made spirits",
    title: "Private label creation",
    body: "From liquid brief to finished bottle, Vinet-Delpech assembles the right components for bespoke spirits programs.",
    href: "#services",
  },
  {
    eyebrow: "Know-how",
    title: "Distillation, aging & bottling",
    body: "A production platform built for flexibility, quality control, and international partner requirements.",
    href: "#know-how",
  },
  {
    eyebrow: "Partnerships",
    title: "Brands developed with care",
    body: "A portfolio of spirits and partner projects that show the range of the house across categories and markets.",
    href: "#partnerships",
  },
];

function PlaceholderImage({ label, tone = "dark" }: { label: string; tone?: "dark" | "light" }) {
  return (
    <div
      className={
        tone === "dark"
          ? "image-placeholder bg-[radial-gradient(circle_at_30%_20%,rgba(207,164,113,0.55),transparent_30%),linear-gradient(135deg,#150f0b,#43301f_45%,#0b0908)]"
          : "image-placeholder bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.8),transparent_24%),linear-gradient(135deg,#f2e5d6,#cda06c_52%,#7c4f2d)]"
      }
    >
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(194,132,67,0.52),transparent_22%),linear-gradient(115deg,#060504_0%,#1c1510_42%,#6a3c1d_64%,#0b0908_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.65))]" />
        <div className="absolute bottom-8 left-8 right-8 top-28 border border-white/15" />

        <div className="relative mx-auto flex min-h-screen max-w-[1480px] items-end px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d5a66e]">
              {siteConfig.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-5xl uppercase leading-[0.94] tracking-[0.08em] text-balance sm:text-7xl lg:text-8xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#services" className="btn btn-gold">
                Discover our services
              </Link>
              <Link href="#story" className="btn btn-outline-light">
                Since 1777
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 text-[#15110e] sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title mt-3">Bespoke spirits, from concept to bottle</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-black/68">
              Flexible development, sourcing, compliance, and bottling support for partners who need a complete spirits solution from a single experienced house.
            </p>
            <Link href="#contact" className="btn btn-gold mt-9">
              Start a project
            </Link>
          </div>

          <div className="grid gap-px bg-black/10 sm:grid-cols-2">
            {services.map((service, index) => (
              <article key={service} className="bg-[#f5efe7] p-8 min-h-44">
                <span className="text-xs font-semibold tracking-[0.24em] text-[#a8753d]">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold uppercase tracking-[0.14em]">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="know-how" className="bg-[#efe4d6] text-[#15110e]">
        <div className="grid min-h-[680px] lg:grid-cols-2">
          <PlaceholderImage label="Upload vineyard / distillery image" tone="light" />
          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="section-kicker">Know-how & Innovation</p>
              <h2 className="section-title mt-3">Production capability with Cognac-region heritage</h2>
              <p className="mt-6 text-sm leading-7 text-black/65">
                Vinet-Delpech combines distillation, storage, sourcing, R&D, and bottling infrastructure with multilingual export experience and quality certifications.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px bg-black/15">
                {capabilities.map((item) => (
                  <div key={item.label} className="bg-[#efe4d6] p-5">
                    <div className="font-serif text-4xl text-[#8a5628]">{item.value}</div>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
                <span className="border border-black/20 px-4 py-3">AEO status</span>
                <span className="border border-black/20 px-4 py-3">ECOCERT certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#15110e] sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="text-center">
            <p className="section-kicker">A complete solution</p>
            <h2 className="section-title mx-auto mt-3 max-w-3xl">Designed for importers, partners, and private brands</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {discoverCards.map((card) => (
              <Link key={card.title} href={card.href} className="group block">
                <PlaceholderImage label="Upload product image" />
                <div className="pt-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a8753d]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.1em]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/58">{card.body}</p>
                  <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[0.22em] underline underline-offset-4">
                    Discover
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="bg-[#15110e] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#d5a66e]">Partnerships</p>
              <h2 className="section-title mt-3 text-white">Brands and spirits shaped by the house</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/70">
              From gin and whisky to rum, aperitifs, vodka, organic Cognac, and hybrid drinks, the house supports distinctive products built for modern markets.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {partnerships.map((partner) => (
              <article key={partner} className="bg-[#201913] p-6">
                <PlaceholderImage label="Upload bottle / brand image" />
                <h3 className="mt-7 min-h-16 text-xl font-semibold uppercase tracking-[0.16em]">
                  {partner}
                </h3>
                <Link href="#contact" className="mt-5 inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[#d5a66e] underline underline-offset-4">
                  More details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#efe4d6] text-[#15110e]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="section-kicker">Since 1777</p>
              <h2 className="section-title mt-3">Passion above all</h2>
              <p className="mt-6 text-sm leading-7 text-black/65">
                After taking over the family business in 1994, Bruno Delannoy developed Vinet-Delpech for export and became a specialist in tailor-made products and private brands.
              </p>
              <p className="mt-5 text-sm leading-7 text-black/65">
                Today, the distillery is present in more than twenty countries with a motivated, multicultural team and a deep understanding of bespoke spirits programs.
              </p>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a5628]">
                Bruno Delannoy · President
              </p>
            </div>
          </div>
          <PlaceholderImage label="Upload portrait / estate image" tone="light" />
        </div>
      </section>

      <section id="contact" className="bg-white py-24 text-[#15110e] sm:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title mt-3">Build your next spirit with Vinet-Delpech</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/68">
              Share your brief, product ambition, market, and timeline. The Vinet-Delpech team can advise on the right path from first idea to finished bottle.
            </p>
          </div>
          <div className="bg-[#15110e] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d5a66e]">
              Distillerie Vinet-Delpech SAS
            </p>
            <address className="mt-6 not-italic text-sm leading-7 text-white/72">
              {siteConfig.address}
            </address>
            <div className="mt-8 space-y-4 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="block uppercase tracking-[0.16em] text-white underline underline-offset-4">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="block uppercase tracking-[0.16em] text-white underline underline-offset-4">
                {siteConfig.phone}
              </a>
            </div>
            <Link href="mailto:contact@vinet-delpech.com" className="btn btn-gold mt-10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
