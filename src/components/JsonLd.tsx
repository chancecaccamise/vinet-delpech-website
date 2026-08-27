import { graphJsonLd } from "@/lib/seo";

/**
 * One structured-data block, rendered as a single schema.org @graph.
 *
 * A server component on purpose: the markup is for crawlers, so it must be in
 * the HTML that arrives rather than added later by script.
 */
export function JsonLd({ nodes }: { nodes: readonly unknown[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: graphJsonLd(nodes) }}
    />
  );
}
