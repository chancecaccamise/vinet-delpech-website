"use server";

import { siteConfig } from "@/lib/site";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "enquiryType" | "message", string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

  // Honeypot — real visitors never see or fill this field.
  if (formData.get("website")) {
    return { status: "success", message: form.successMessage };
  }

  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const enquiryType = String(formData.get("enquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: EnquiryState["errors"] = {};
  if (name.length < 2) errors.name = form.errors.name;
  if (!EMAIL_PATTERN.test(email)) errors.email = form.errors.email;
  // The select's options are the current edition's, so validate against those.
  if (!(content.contact.enquiryTypes as readonly string[]).includes(enquiryType)) {
    errors.enquiryType = form.errors.enquiryType;
  }
  if (message.length < 10 || message.length > 5000) {
    errors.message = form.errors.message;
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: form.errorReview, errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? `enquiries@${new URL(siteConfig.url).hostname}`;

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
          subject: `[${enquiryType}] Enquiry from ${name}${company ? ` — ${company}` : ""}`,
          text: body,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend responded ${response.status}`);
      }
      return { status: "success", message: form.successMessage };
    } catch (error) {
      console.error("[contact] failed to send enquiry:", error);
      return {
        status: "error",
        message: `${form.errorMessage} (${siteConfig.email})`,
      };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] RESEND_API_KEY not set — enquiry logged instead of sent:\n" + body);
    return { status: "success", message: form.successMessage };
  }

  console.error("[contact] enquiry received but no delivery transport is configured.");
  return {
    status: "error",
    message: `${form.errorMessage} (${siteConfig.email})`,
  };
}
