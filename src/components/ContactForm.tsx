"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions/contact";
import type { Content } from "@/lib/content/en";
import type { Locale } from "@/lib/i18n";
import { Logo } from "@/components/Logo";

const initialState: EnquiryState = { status: "idle" };

/** Field-level validation message, with a mark that does not rely on colour. */
function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="field-error">
      <span aria-hidden="true">&#9679;</span>
      <span>{children}</span>
    </p>
  );
}

/**
 * B2B enquiry form.
 *
 * Laid out as a single column: a trade buyer reads and completes a form faster
 * down one axis than across two, and the earlier side-by-side pairing put
 * "Company" beside a required "Name" so the asterisks fell out of rhythm.
 *
 * Validation speaks in `--error`, never the house blue, and every invalid field
 * carries both a coloured edge and a marked message so the state does not rest
 * on colour alone.
 */
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
  const invalid = (key: keyof NonNullable<EnquiryState["errors"]>) =>
    Boolean(state.errors?.[key]);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Send focus where the visitor needs to look next: the first field the server
  // rejected, or the confirmation panel once the enquiry is away. A live region
  // inserted into the DOM together with its text is often not announced, so the
  // success panel is focused rather than relying on aria-live alone.
  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
      return;
    }
    const firstInvalid = state.errors && Object.keys(state.errors)[0];
    if (!firstInvalid) return;
    formRef.current
      ?.querySelector<HTMLElement>(`[name="${CSS.escape(firstInvalid)}"]`)
      ?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        aria-live="polite"
        className="border border-blue/25 bg-white px-8 py-16 text-center sm:px-12"
      >
        <Logo variant="mark" className="mx-auto h-12" />
        <p className="mx-auto mt-8 max-w-sm text-sm leading-8 text-ink/75">{state.message}</p>
      </div>
    );
  }

  return (
    // No `noValidate`: the browser's own checks catch an empty or malformed
    // field before a round trip, which matters because a rejected submission is
    // what puts a long brief at risk in the first place. The server re-validates
    // everything regardless — see `submitEnquiry`.
    <form ref={formRef} action={formAction} className="max-w-xl">
      {/* The edition this was sent from, so the server answers in the same
          language the visitor filled the form in. */}
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot — hidden from real visitors, catches naive bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{f.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-8">
        <div>
          <label htmlFor="name" className="field-label">
            {f.name}
            <span className="field-required" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            defaultValue={state.values?.name}
            autoComplete="name"
            className="field"
            aria-invalid={invalid("name")}
            aria-describedby={invalid("name") ? "name-error" : undefined}
          />
          {state.errors?.name && <FieldError id="name-error">{state.errors.name}</FieldError>}
        </div>

        <div>
          <label htmlFor="company" className="field-label">
            {f.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={160}
            defaultValue={state.values?.company}
            autoComplete="organization"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            {f.email}
            <span className="field-required" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            defaultValue={state.values?.email}
            autoComplete="email"
            className="field"
            aria-invalid={invalid("email")}
            aria-describedby={invalid("email") ? "email-error" : undefined}
          />
          {state.errors?.email && <FieldError id="email-error">{state.errors.email}</FieldError>}
        </div>

        <div>
          <label htmlFor="enquiryType" className="field-label">
            {f.enquiryType}
            <span className="field-required" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id="enquiryType"
            // Unlike the inputs, a <select> only takes `defaultValue` when it
            // mounts, so after the form is reset it would fall back to the
            // placeholder. Keying it on the echoed value remounts it with the
            // visitor's choice still selected.
            key={state.values?.enquiryType ?? ""}
            name="enquiryType"
            required
            defaultValue={state.values?.enquiryType ?? ""}
            className="field"
            aria-invalid={invalid("enquiryType")}
            aria-describedby={invalid("enquiryType") ? "enquiry-error" : undefined}
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
            <FieldError id="enquiry-error">{state.errors.enquiryType}</FieldError>
          )}
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            {f.message}
            <span className="field-required" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            minLength={10}
            maxLength={5000}
            defaultValue={state.values?.message}
            placeholder={f.messagePlaceholder}
            className="field resize-y"
            aria-invalid={invalid("message")}
            aria-describedby={invalid("message") ? "message-error" : undefined}
          />
          {state.errors?.message && (
            <FieldError id="message-error">{state.errors.message}</FieldError>
          )}
        </div>
      </div>

      <div className="mt-10 border-t border-ink/12 pt-8">
        <button type="submit" disabled={pending} className="btn btn-blue disabled:opacity-60">
          {pending ? f.submitting : f.submit}
        </button>

        {/* Form-level status sits under the button rather than beside it, so a
            long message cannot push the button out of the row. */}
        <div aria-live="polite" role="status">
          {state.status === "error" && (
            <p
              className={`mt-5 text-sm leading-6 ${state.errors ? "text-ink/70" : "text-error"}`}
            >
              {state.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
