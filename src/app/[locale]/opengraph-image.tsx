import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/content";

/**
 * Social card, one per language — it lives under `[locale]` so every localized
 * route inherits it, and so a link shared from the Spanish edition previews in
 * Spanish.
 */
export const alt = `${siteConfig.name}: ${getContent(defaultLocale).metadata.homeTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Brand tokens mirrored from globals.css (ImageResponse can't read CSS vars).
const CREAM = "#f7f1de";
const BLUE = "#1b4fa5";
const NAVY = "#0b2a5b";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const c = getContent(isLocale(raw) ? raw : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          color: NAVY,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: `1px solid rgba(27,79,165,0.35)`,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 110,
            height: 110,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            border: `2px solid ${BLUE}`,
            fontSize: 44,
            letterSpacing: -2,
            color: BLUE,
          }}
        >
          VP
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 68,
            letterSpacing: 10,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Vinet-Puranik
        </div>
        <div
          style={{
            marginTop: 28,
            width: 220,
            height: 1,
            background: BLUE,
            display: "flex",
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: BLUE,
            display: "flex",
          }}
        >
          {c.metadata.homeTitle}
        </div>
      </div>
    ),
    size,
  );
}
