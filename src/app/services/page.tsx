import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Services",
  description: "What Vinet-Delpech offers.",
};

const services = [
  {
    title: "Strategy",
    body: "Placeholder — describe this service in a paragraph. Cover what it includes, who it's for, and the result the client can expect.",
  },
  {
    title: "Design",
    body: "Placeholder — describe this service in a paragraph. Cover what it includes, who it's for, and the result the client can expect.",
  },
  {
    title: "Delivery",
    body: "Placeholder — describe this service in a paragraph. Cover what it includes, who it's for, and the result the client can expect.",
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Services
        </h1>
        <p className="mt-6 text-lg text-foreground/70">
          Placeholder intro. Explain your overall offering, then break it down
          into the services below.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="grid gap-4 border-t border-black/5 pt-8 sm:grid-cols-[auto_1fr] sm:gap-12"
          >
            <div className="text-sm font-medium text-foreground/40">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-foreground/70">{service.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
