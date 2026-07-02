import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Vinet-Delpech.",
};

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About
        </h1>
        <div className="mt-8 space-y-6 text-lg text-foreground/70">
          <p>
            Placeholder — tell the story of Vinet-Delpech here. Who you are,
            what you believe, and why clients choose to work with you.
          </p>
          <p>
            Replace this copy with your real narrative. A strong about page
            builds trust: share your background, your approach, and the people
            behind the work.
          </p>
        </div>
      </div>
    </Container>
  );
}
