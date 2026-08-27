import type { NextConfig } from "next";

/**
 * Response headers applied to every route.
 *
 * `script-src` has to allow inline, and the reason is worth recording because
 * the alternative looks tempting until you cost it. The age gate runs an inline
 * script in <head> before first paint (`ageGateInlineScript`, src/lib/age-gate.ts)
 * and Next emits its own inline bootstrap. Locking those down means a
 * per-request nonce — and a nonce is per-request, so every one of the 71 pages
 * would have to be rendered dynamically instead of served as static HTML. That
 * is a real cost on a marketing site for a policy that mainly guards against
 * injected markup this site has no mechanism to produce: there is no user
 * content, no comments, no search, and no third-party script.
 *
 * Omitting `script-src` entirely is not an option either — it falls back to
 * `default-src`, which blocks the inline scripts and takes the age gate and
 * hydration with it. (Verified: it does exactly that.)
 *
 * The rest still pays for itself: `frame-ancestors` blocks clickjacking,
 * `base-uri` stops a base-tag injection repointing every relative URL, and
 * `form-action` stops the enquiry form being aimed at another origin.
 */
// React Fast Refresh compiles modules with eval, so a policy without
// 'unsafe-eval' silently kills hot reload and fills the console on every page.
// Development gets the relaxed form; production never does.
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      // Packshots and estate photography are all first-party; `data:` covers
      // the inline SVGs and blur placeholders Next generates.
      "img-src 'self' data: blob:",
      "media-src 'self'",
      // next/font self-hosts, so no font origin is needed beyond our own.
      "font-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site asks for none of these; saying so stops an embedded third party
  // asking on our behalf.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Nothing gained by announcing the framework and version to a scanner.
  poweredByHeader: false,

  images: {
    // AVIF first, WebP behind it: the estate photography is large and
    // photographic, which is exactly where AVIF wins most.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
