import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { getContent } from "@/lib/content";

/**
 * Social card, one per language — it lives under `[locale]` so every localized
 * route inherits it, and so a link shared from the Spanish edition previews in
 * Spanish.
 */
export const alt = `${siteConfig.name} — ${getContent(defaultLocale).metadata.homeTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Brand tokens mirrored from globals.css (ImageResponse can't read CSS vars).
const NIGHT = "#0f0b08";
const PARCHMENT = "#f5eee3";
const GOLD = "#c5a05a";

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
          background: `radial-gradient(circle at 62% 30%, rgba(197,160,90,0.28), transparent 40%), ${NIGHT}`,
          color: PARCHMENT,
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
            border: `1px solid rgba(245,238,227,0.25)`,
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
            border: `2px solid ${GOLD}`,
            fontSize: 44,
            letterSpacing: -2,
          }}
        >
          VD
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
            background: GOLD,
            display: "flex",
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: GOLD,
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
