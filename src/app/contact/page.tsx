import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vinet-Delpech.",
};

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <div className="max-w-md">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Placeholder — invite visitors to reach out. Tell them what happens
            after they send a message and how quickly you respond.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-foreground/40">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Static form scaffold — wire up to a handler/service when ready. */}
        <form className="space-y-6" action="#" method="post">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/70"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground/40"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/70"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground/40"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground/70"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-lg border border-foreground/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground/40"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Send message
          </button>
          <p className="text-xs text-foreground/40">
            Note: this form is not yet connected. Wire it to an email service or
            API route before launch.
          </p>
        </form>
      </div>
    </Container>
  );
}
