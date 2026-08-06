"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions/contact";
import type { Content } from "@/lib/content/en";
import type { Locale } from "@/lib/i18n";

const initialState: EnquiryState = { status: "idle" };

export function ContactForm({
  locale,
  content,
  enquiryTypes,
}: {
  locale: Locale;
  content: Content["contact"]["form"];
  enquiryTypes: readonly string[];
}) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const f = content;

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="border border-gold/40 px-8 py-12 text-center">
        <p className="font-serif text-2xl tracking-[0.06em] text-gold-ink" aria-hidden="true">
          VD
        </p>
        <p className="mt-5 text-sm leading-7 text-ink/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-7">
      {/* The edition this was sent from, so the server answers in the same
          language the visitor filled the form in. */}
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot — hidden from real visitors, catches naive bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{f.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            {f.name}<span className="text-gold-ink"> *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-2 text-xs text-gold-ink">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="field-label">
            {f.company}
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className="field" />
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="field-label">
            {f.email}<span className="text-gold-ink"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-2 text-xs text-gold-ink">
              {state.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enquiryType" className="field-label">
            {f.enquiryType}<span className="text-gold-ink"> *</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            defaultValue=""
            className="field"
            aria-invalid={Boolean(state.errors?.enquiryType)}
            aria-describedby={state.errors?.enquiryType ? "enquiry-error" : undefined}
          >
            <option value="" disabled>
              {f.selectPlaceholder}
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {state.errors?.enquiryType && (
            <p id="enquiry-error" className="mt-2 text-xs text-gold-ink">
              {state.errors.enquiryType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          {f.message}<span className="text-gold-ink"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder={f.messagePlaceholder}
          className="field resize-y"
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-2 text-xs text-gold-ink">
            {state.errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={pending} className="btn btn-accent disabled:opacity-60">
          {pending ? f.submitting : f.submit}
        </button>
        <div aria-live="polite" role="status">
          {state.status === "error" && !state.errors && (
            <p className="text-xs leading-6 text-gold-ink">{state.message}</p>
          )}
          {state.status === "error" && state.errors && (
            <p className="text-xs leading-6 text-ink/60">{state.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}
