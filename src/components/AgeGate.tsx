"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import type { Content } from "@/lib/content/en";
import { fill } from "@/lib/content";
import {
  AGE_GATE_ATTRIBUTE,
  AGE_GATE_OPEN,
  evaluateDob,
  isAgeVerified,
  setAgeVerifiedCookie,
} from "@/lib/age-gate";

const FIELDS = ["month", "day", "year"] as const;
type Field = (typeof FIELDS)[number];

const MAX_LENGTH: Record<Field, number> = { month: 2, day: 2, year: 4 };
const AUTOCOMPLETE: Record<Field, string> = {
  month: "bday-month",
  day: "bday-day",
  year: "bday-year",
};
const EMPTY: Record<Field, string> = { month: "", day: "", year: "" };

/**
 * Legal-age gate: date of birth, remembered for thirty days by cookie.
 *
 * The overlay is shown and hidden entirely by CSS, keyed off `data-age-gate`
 * on <html> (see globals.css and the inline script in the root layout), so it
 * paints with the very first frame and never flashes either way. This
 * component therefore renders the *same* markup on the server and on the
 * client — `open` drives effects only, never output. Returning null for a
 * verified visitor would be a hydration mismatch, which would make React
 * client-render the whole boundary and reintroduce the flash we removed.
 */
export function AgeGate({
  content,
  minimumAge,
  responsibleDrinking,
}: {
  content: Content["ageGate"];
  minimumAge: number;
  responsibleDrinking: string;
}) {
  // The denial and legal lines carry the minimum age, so they interpolate
  // rather than hard-coding 18 in three languages.
  const deniedMessage = fill(content.deniedMessage, { age: minimumAge });
  const legal = fill(content.legal, { age: minimumAge });

  // Reads the same cookie the inline <head> script read, so React's initial
  // state always agrees with the DOM that script produced.
  const [open, setOpen] = useState(() => !isAgeVerified());
  // An eager visitor can type into the server-rendered inputs before this
  // component hydrates. Seeding from the DOM adopts those digits instead of
  // reconciling them away — and it keeps initial state matching the markup.
  const [values, setValues] = useState(() => {
    if (typeof document === "undefined") return EMPTY;
    const seeded = { ...EMPTY };
    for (const field of FIELDS) {
      const node = document.getElementById(`age-gate-${field}`);
      seeded[field] = node instanceof HTMLInputElement ? node.value : "";
    }
    return seeded;
  });
  const [error, setError] = useState<string | null>(null);
  const [denied, setDenied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const deniedRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const inputRefs: Record<Field, React.RefObject<HTMLInputElement | null>> = {
    month: monthRef,
    day: dayRef,
    year: yearRef,
  };

  const focusField = (field: Field, caretAtEnd = false) => {
    const node = inputRefs[field].current;
    if (!node) return;
    node.focus();
    if (caretAtEnd) node.setSelectionRange(node.value.length, node.value.length);
    else node.select();
  };

  // Modality: hold the attribute, make the rest of the page inert, take focus.
  // No Escape handler — the gate is not dismissible by design.
  useEffect(() => {
    if (!open) return;
    const shell = document.getElementById("site-shell");
    document.documentElement.setAttribute(AGE_GATE_ATTRIBUTE, AGE_GATE_OPEN);
    shell?.setAttribute("inert", "");
    monthRef.current?.focus({ preventScroll: true });

    // `inert` covers current browsers; this mirrors the Header's trap for the
    // rest, and keeps Tab cycling inside the panel either way.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>("input, button:not([disabled]), [data-focus-target]"),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      shell?.removeAttribute("inert");
      // Only once inert is lifted can focus actually land in the page.
      document.getElementById("main-content")?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (denied) deniedRef.current?.focus();
  }, [denied]);

  const handleChange = (field: Field) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const max = MAX_LENGTH[field];
    const atEnd = event.target.selectionStart === event.target.value.length;
    const digits = event.target.value.replace(/\D/g, "").slice(0, max);
    setValues((current) => ({ ...current, [field]: digits }));
    setError(null);
    // Advance only when the caret sits at the end, so correcting a digit in
    // the middle of a field doesn't fling focus forward.
    const next = FIELDS[FIELDS.indexOf(field) + 1];
    if (digits.length === max && next && atEnd) focusField(next);
  };

  const handleKeyDown = (field: Field) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    const index = FIELDS.indexOf(field);
    const input = event.currentTarget;
    const caret = input.selectionStart ?? 0;
    if (event.key === "Backspace" && input.value === "" && index > 0) {
      // preventDefault so stepping back doesn't also eat a digit there.
      event.preventDefault();
      focusField(FIELDS[index - 1], true);
    } else if (event.key === "ArrowLeft" && caret === 0 && index > 0) {
      event.preventDefault();
      focusField(FIELDS[index - 1], true);
    } else if (
      event.key === "ArrowRight" &&
      caret === input.value.length &&
      index < FIELDS.length - 1
    ) {
      event.preventDefault();
      focusField(FIELDS[index + 1], true);
    }
  };

  // Pasting "05/12/1990" — or "05121990" — into any field distributes forward.
  const handlePaste = (field: Field) => (event: React.ClipboardEvent<HTMLInputElement>) => {
    const digits = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!digits) return;
    event.preventDefault();
    const next = { ...values };
    let rest = digits;
    let last = field;
    for (const key of FIELDS.slice(FIELDS.indexOf(field))) {
      if (!rest) break;
      next[key] = rest.slice(0, MAX_LENGTH[key]);
      rest = rest.slice(MAX_LENGTH[key]);
      last = key;
    }
    setValues(next);
    setError(null);
    queueMicrotask(() => focusField(last, true));
  };

  const complete =
    values.month.length === 2 && values.day.length === 2 && values.year.length === 4;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = evaluateDob(values, minimumAge);
    if (!result.ok) {
      setError(content.errors[result.reason]);
      focusField(result.reason === "future" ? "year" : "month");
      return;
    }
    if (!result.ofAge) {
      // Dead end, and deliberately no cookie: a reload lets them try again.
      setDenied(true);
      return;
    }
    setAgeVerifiedCookie();
    // Drop the attribute by hand so the overlay is gone this frame, rather
    // than waiting on React's commit.
    document.documentElement.removeAttribute(AGE_GATE_ATTRIBUTE);
    setOpen(false);
  };

  return (
    <div
      id="age-gate"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-subhead"
      // No `flex` here — .age-gate owns `display`, which is what toggles it.
      className="age-gate fixed inset-0 z-[100] items-center justify-center overflow-y-auto bg-night/95 px-6 py-10 backdrop-blur-sm"
    >
      <div className="age-gate-panel w-full max-w-md border border-off-white/15 bg-espresso px-8 py-12 text-center sm:px-10 sm:py-14">
        {/* For an unverified visitor this is the LCP element. It resolves to
            the same URL the Header already preloads with `priority`, so the
            preload is deduplicated and eager loading here costs nothing. */}
        <Logo priority className="mx-auto h-14" />

        <h2
          id="age-gate-title"
          className="display display-md mt-8 uppercase tracking-[0.08em] text-off-white"
        >
          {content.title}
        </h2>
        <p id="age-gate-subhead" className="mt-4 text-sm leading-7 text-off-white/70">
          {content.subhead}
        </p>
        <div className="hairline-gold mx-auto mt-8" />

        {denied ? (
          <div ref={deniedRef} tabIndex={-1} data-focus-target role="alert" className="mt-8">
            <p className="display display-sm text-off-white">{content.deniedTitle}</p>
            <p className="mt-4 text-sm leading-7 text-off-white/70">{deniedMessage}</p>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="mt-8">
            <p id="age-gate-dob" className="eyebrow text-off-white/60">
              {content.dobPrompt}
            </p>

            <div
              role="group"
              aria-labelledby="age-gate-dob"
              className="mt-5 grid grid-cols-[1fr_1fr_1.5fr] gap-3"
            >
              {FIELDS.map((field) => (
                <div key={field}>
                  {/* type="text" + inputMode, not type="number": no spinners,
                      no scroll-wheel mutation, and maxLength actually applies. */}
                  <input
                    id={`age-gate-${field}`}
                    ref={inputRefs[field]}
                    className="field field-dark dob-input"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete={AUTOCOMPLETE[field]}
                    maxLength={MAX_LENGTH[field]}
                    placeholder={content.placeholders[field]}
                    value={values[field]}
                    onChange={handleChange(field)}
                    onKeyDown={handleKeyDown(field)}
                    onPaste={handlePaste(field)}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "age-gate-error" : undefined}
                  />
                  {/* Sits below the input visually; htmlFor still names it. */}
                  <label htmlFor={`age-gate-${field}`} className="dob-label">
                    {content.labels[field]}
                  </label>
                </div>
              ))}
            </div>

            {error && (
              <p id="age-gate-error" role="alert" className="mt-4 text-xs leading-6 text-gold">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!complete}
              className="btn btn-gold mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40"
            >
              {content.submit}
            </button>
          </form>
        )}

        {/* Only meaningful alongside the form — it describes the act of
            entering, which someone turned away has not done. */}
        {!denied && (
          <p className="mt-8 text-[0.62rem] leading-5 text-off-white/45">{legal}</p>
        )}
        <p className="mt-4 text-[0.62rem] uppercase leading-6 tracking-[0.18em] text-off-white/40">
          {responsibleDrinking}
        </p>
      </div>
    </div>
  );
}
