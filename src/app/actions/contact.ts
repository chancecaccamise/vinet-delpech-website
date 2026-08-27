"use server";

import { headers } from "next/headers";
import { siteConfig } from "@/lib/site";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

export type EnquiryFields = "name" | "company" | "email" | "enquiryType" | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Exclude<EnquiryFields, "company">, string>>;
  /**
   * What the visitor actually typed, echoed back so the form can refill itself.
   *
   * React 19 calls `requestFormReset` before a form action runs — unconditionally,
   * including when the action returns errors — so an uncontrolled form is blank by
   * the time the error messages render. Without this, one mistyped character costs
   * a trade buyer their entire brief. See `ContactForm`, which restores each field
   * from here via `defaultValue`.
   */
  values?: Partial<Record<EnquiryFields, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Upper bounds on the short fields; `message` has its own 10–5000 range below. */
const MAX = { name: 120, company: 160, email: 200 } as const;

/** Flatten any whitespace run to a single space — for mail header safety. */
function oneLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Best-effort in-process rate limit: 5 enquiries per IP per 10 minutes.
 *
 * Deliberately modest, because it is only as good as the process it lives in —
 * serverless spreads requests across instances that do not share this Map, and a
 * cold start empties it. It raises the cost of casual abuse of a public endpoint
 * that sends mail; it is not a substitute for edge protection (Vercel WAF or a
 * shared store such as Upstash), which is the real fix and is noted in HANDOVER.md.
 */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 } as const;
const attempts = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((at) => now - at < RATE_LIMIT.windowMs);
  recent.push(now);
  attempts.set(ip, recent);

  // Opportunistic sweep so the Map cannot grow without bound on a long-lived process.
  if (attempts.size > 5000) {
    for (const [key, times] of attempts) {
      if (times.every((at) => now - at >= RATE_LIMIT.windowMs)) attempts.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

/**
 * Handles the "start a project" enquiry form.
 *
 * Delivery is pluggable via environment variables (see README):
 * - RESEND_API_KEY + CONTACT_TO_EMAIL → sends via the Resend HTTP API
 *   (plain fetch, no SDK dependency).
 * - Otherwise, in development the enquiry is logged to the server console;
 *   in production the visitor is asked to email directly so no enquiry is
 *   ever silently dropped.
 */
export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // The form carries the edition it was submitted from, so a French visitor
  // is answered in French. An unknown value falls back rather than throwing —
  // this is user input like any other field.
  const rawLocale = String(formData.get("locale") ?? "");
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = getContent(locale);
  const form = content.contact.form;

  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const enquiryType = String(formData.get("enquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Echoed back on every non-success path so nothing the visitor typed is lost.
  const values = { name, company, email, enquiryType, message };

  // Honeypot — real visitors never see or fill this field. Logged rather than
  // dropped in silence: an over-eager password manager filling a field named
  // "website" would otherwise discard a genuine enquiry with no trace at all.
  if (formData.get("website")) {
    console.warn("[contact] honeypot triggered — enquiry discarded:", { name, email });
    return { status: "success", message: form.successMessage };
  }

  const errors: EnquiryState["errors"] = {};
  if (name.length < 2 || name.length > MAX.name) errors.name = form.errors.name;
  if (!EMAIL_PATTERN.test(email) || email.length > MAX.email) errors.email = form.errors.email;
  // The select's options are the current edition's, so validate against those.
  if (!(content.contact.enquiryTypes as readonly string[]).includes(enquiryType)) {
    errors.enquiryType = form.errors.enquiryType;
  }
  if (message.length < 10 || message.length > 5000) {
    errors.message = form.errors.message;
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: form.errorReview, errors, values };
  }

  // Rate limit only work that would actually send mail, so a visitor fixing a
  // typo three times is never locked out by their own corrections.
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    console.warn("[contact] rate limit hit for", ip);
    return {
      status: "error",
      message: `${form.errorMessage} (${siteConfig.email})`,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  // Resend verifies the apex domain, so the fallback must drop any `www.`:
  // `enquiries@www.vinet-puranik.com` is not a verifiable sender and every send
  // would 403 while the site looked correctly configured. Setting
  // CONTACT_FROM_EMAIL explicitly is still the supported path.
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ??
    `enquiries@${new URL(siteConfig.url).hostname.replace(/^www\./, "")}`;

  const body = [
    `Name: ${name}`,
    company && `Company: ${company}`,
    `Email: ${email}`,
    `Enquiry: ${enquiryType}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (apiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${siteConfig.name} website <${fromEmail}>`,
          to: [toEmail],
          reply_to: email,
          // Collapse any whitespace: a newline smuggled into `name` would
          // otherwise break the subject across lines in the delivered mail.
          subject: oneLine(
            `[${enquiryType}] Enquiry from ${name}${company ? `, ${company}` : ""}`,
          ),
          text: body,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend responded ${response.status}`);
      }
      return { status: "success", message: form.successMessage };
    } catch (error) {
      // The enquiry itself is logged alongside the error: if delivery fails the
      // visitor is told to email directly, but without this the content of what
      // they wrote would exist nowhere at all.
      console.error("[contact] failed to send enquiry:", error, "\n" + body);
      return {
        status: "error",
        message: `${form.errorMessage} (${siteConfig.email})`,
        values,
      };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] RESEND_API_KEY not set — enquiry logged instead of sent:\n" + body);
    return { status: "success", message: form.successMessage };
  }

  console.error(
    "[contact] enquiry received but no delivery transport is configured:\n" + body,
  );
  return {
    status: "error",
    message: `${form.errorMessage} (${siteConfig.email})`,
    values,
  };
}
