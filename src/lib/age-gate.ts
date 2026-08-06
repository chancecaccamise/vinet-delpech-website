/**
 * Age gate — persistence and date maths.
 *
 * Deliberately free of `"use client"`: the root layout (a Server Component)
 * imports `ageGateInlineScript`, while the gate component imports the helpers.
 *
 * The inline script is a plain string, so it cannot import anything. It is
 * built from the constants below instead, which is what keeps the cookie name
 * the script reads and the cookie name the component writes from ever drifting
 * apart.
 */

export const AGE_GATE_COOKIE = "vd_age_verified";
export const AGE_GATE_VALUE = "1";
export const AGE_GATE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days, in seconds.
export const AGE_GATE_ATTRIBUTE = "data-age-gate";
export const AGE_GATE_OPEN = "open";

const COOKIE_PATTERN_SOURCE = `(?:^|;\\s*)${AGE_GATE_COOKIE}=${AGE_GATE_VALUE}(?:;|$)`;
const cookiePattern = new RegExp(COOKIE_PATTERN_SOURCE);

/** Client-only. Returns false during SSR, so the gate's rendered default is "open". */
export function isAgeVerified(): boolean {
  if (typeof document === "undefined") return false;
  try {
    return cookiePattern.test(document.cookie);
  } catch {
    return false;
  }
}

export function setAgeVerifiedCookie(): void {
  // `Secure` would stop the cookie being set over http://localhost, so it is
  // only attached once the site is actually served over TLS.
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${AGE_GATE_COOKIE}=${AGE_GATE_VALUE}; Path=/; Max-Age=${AGE_GATE_MAX_AGE}; SameSite=Lax${secure}`;
}

/**
 * Runs synchronously while the browser parses <head> — before the first paint
 * and long before React hydrates. Unverified visitors therefore get the overlay
 * with the very first frame, and verified ones never see it flash.
 *
 * The script *adds* the attribute rather than removing a server-rendered one.
 * That direction matters: the attribute is deliberately absent from the
 * layout's JSX, so React never re-applies it. Switching language re-renders
 * <html> (the lang attribute has to change), and with the attribute in JSX that
 * re-render would put the gate back up in front of a visitor who had already
 * passed it.
 *
 * JSON.stringify does the escaping. Note that a future Content-Security-Policy
 * without 'unsafe-inline' would need a nonce here.
 */
export const ageGateInlineScript =
  `(function(){try{if(!new RegExp(${JSON.stringify(COOKIE_PATTERN_SOURCE)}).test(document.cookie))` +
  `document.documentElement.setAttribute(${JSON.stringify(AGE_GATE_ATTRIBUTE)},` +
  `${JSON.stringify(AGE_GATE_OPEN)})}catch(e){}})();`;

// ---------------------------------------------------------------------------
// Date of birth
// ---------------------------------------------------------------------------

export type DobParts = { month: string; day: string; year: string };

export type DobResult =
  | { ok: true; ofAge: boolean }
  | { ok: false; reason: "incomplete" | "invalid" | "future" };

const MAX_AGE_YEARS = 120;

/**
 * Validates a typed date of birth and decides whether it clears `minimumAge`.
 * Pure — `now` is injectable so the calendar edge cases can be exercised
 * without waiting for a birthday.
 */
export function evaluateDob(parts: DobParts, minimumAge: number, now: Date = new Date()): DobResult {
  const { month, day, year } = parts;
  if (month.length < 2 || day.length < 2 || year.length < 4) {
    return { ok: false, reason: "incomplete" };
  }

  const m = Number(month);
  const d = Number(day);
  const y = Number(year);
  const currentYear = now.getFullYear();

  if (m < 1 || m > 12 || d < 1 || d > 31) return { ok: false, reason: "invalid" };
  if (y > currentYear || y < currentYear - MAX_AGE_YEARS) return { ok: false, reason: "invalid" };

  // Round-tripping through Date rejects days that do not exist: 02/31, 04/31,
  // 02/29 in a common year. setFullYear defuses the two-digit-year trap, where
  // new Date(99, ...) would silently mean 1999.
  const dob = new Date(y, m - 1, d);
  dob.setFullYear(y);
  if (dob.getFullYear() !== y || dob.getMonth() !== m - 1 || dob.getDate() !== d) {
    return { ok: false, reason: "invalid" };
  }

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (dob.getTime() > today.getTime()) return { ok: false, reason: "future" };

  // Calendar-correct. Dividing a millisecond delta by an "average" year is off
  // by a day around leap years, which is exactly where it matters.
  let age = today.getFullYear() - y;
  const beforeBirthdayThisYear =
    today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d);
  if (beforeBirthdayThisYear) age -= 1;

  return { ok: true, ofAge: age >= minimumAge };
}
