/**
 * Renders a script that runs synchronously as the browser parses the HTML —
 * before the first paint, and long before React hydrates.
 *
 * Not `next/script`: `beforeInteractive` only guarantees ordering relative to
 * Next's own bundle, not relative to the first paint. This is the pattern from
 * the "preventing flash before hydration" guide in
 * `node_modules/next/dist/docs/01-app/02-guides/`.
 *
 * React warns in development when a render produces <script> tags, so the type
 * is `text/javascript` on the server (where the markup is generated) and inert
 * `text/plain` on the client. `suppressHydrationWarning` covers that mismatch.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
