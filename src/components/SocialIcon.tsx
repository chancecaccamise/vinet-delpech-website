import type { ReactNode } from "react";

export type SocialNetwork = "instagram" | "facebook" | "linkedin";

/**
 * The three social glyphs, drawn inline like `SenseIcon` — the site carries no
 * icon library for a handful of drawings. Solid `currentColor` fills, so the
 * footer's cream-at-half strength and its sand hover both come from the link.
 *
 * The glyphs are decorative: every consumer wraps them in a link that carries
 * the network's name as its accessible label.
 */
const PATHS: Record<SocialNetwork, ReactNode> = {
  instagram: (
    <>
      <path d="M12 4.4c2.47 0 2.77.01 3.75.05.9.04 1.4.19 1.72.32.44.17.74.37 1.07.7.32.32.53.63.7 1.06.12.33.28.82.32 1.73.04.97.05 1.27.05 3.74s-.01 2.77-.05 3.74c-.04.91-.2 1.4-.32 1.73-.17.43-.38.74-.7 1.06-.33.33-.63.53-1.07.7-.32.13-.82.28-1.72.32-.98.04-1.28.05-3.75.05s-2.77-.01-3.75-.05c-.9-.04-1.4-.19-1.72-.32a2.9 2.9 0 0 1-1.07-.7 2.9 2.9 0 0 1-.7-1.06c-.12-.33-.28-.82-.32-1.73-.04-.97-.05-1.27-.05-3.74s.01-2.77.05-3.74c.04-.91.2-1.4.32-1.73.17-.43.38-.74.7-1.06.33-.33.63-.53 1.07-.7.32-.13.82-.28 1.72-.32.98-.04 1.28-.05 3.75-.05M12 2.7c-2.52 0-2.83.01-3.82.06-.99.04-1.66.2-2.25.43-.61.24-1.13.55-1.64 1.07-.52.51-.83 1.03-1.07 1.64-.23.59-.39 1.26-.43 2.25-.05.99-.06 1.3-.06 3.82s.01 2.83.06 3.82c.04.99.2 1.66.43 2.25.24.61.55 1.13 1.07 1.64.51.52 1.03.83 1.64 1.07.59.23 1.26.39 2.25.43.99.05 1.3.06 3.82.06s2.83-.01 3.82-.06c.99-.04 1.66-.2 2.25-.43a4.4 4.4 0 0 0 1.64-1.07c.52-.51.83-1.03 1.07-1.64.23-.59.39-1.26.43-2.25.05-.99.06-1.3.06-3.82s-.01-2.83-.06-3.82c-.04-.99-.2-1.66-.43-2.25a4.4 4.4 0 0 0-1.07-1.64 4.4 4.4 0 0 0-1.64-1.07c-.59-.23-1.26-.39-2.25-.43-.99-.05-1.3-.06-3.82-.06Z" />
      <path d="M12 7.23a4.77 4.77 0 1 0 0 9.54 4.77 4.77 0 0 0 0-9.54Zm0 7.87a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Z" />
      <circle cx="16.96" cy="7.04" r="1.11" />
    </>
  ),
  facebook: (
    <path d="M13.4 21v-7.75h2.6l.39-3.02H13.4V8.3c0-.87.24-1.47 1.5-1.47h1.6V4.13c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.22H7.65v3.02h2.61V21h3.14Z" />
  ),
  linkedin: (
    <path d="M6.94 8.6H3.56V20h3.38V8.6ZM5.25 7.11a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 13.7c0-3.28-1.75-4.8-4.08-4.8-1.88 0-2.72 1.03-3.19 1.76V8.6H9.79V20h3.38v-6.17c0-1.63.75-2.6 2.19-2.6 1.32 0 1.7 1.04 1.7 2.65V20h3.38v-6.3Z" />
  ),
};

export function SocialIcon({
  network,
  className = "h-5 w-5",
}: {
  network: SocialNetwork;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[network]}
    </svg>
  );
}
