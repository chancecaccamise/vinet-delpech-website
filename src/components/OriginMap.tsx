import type { Content } from "@/lib/content/en";
import {
  CHARENTE,
  FRANCE,
  MARITIME,
  NEIGHBOUR_LAND,
  OLERON,
  RE,
  type Point,
  type Ring,
} from "@/lib/map-outlines";

/**
 * Where the house stands — Charente-Maritime and Charente drawn at region
 * scale, the distillery pinned at Brie-sous-Archiac, and a thumbnail of France
 * to say where that sits in the country.
 *
 * Not a picture of a map and not a map library: the outlines are real
 * longitude/latitude (see `map-outlines.ts` for where they come from and how
 * far they were thinned), projected here. Town coordinates are the commune
 * centres the French government publishes, so a reader who checks the drawing
 * against an atlas finds the same thing in the same place.
 *
 * Server-rendered; the projection runs once, at build time.
 */

type Window = { lonMin: number; lonMax: number; latMin: number; latMax: number };
type Box = { x?: number; y?: number; w: number; h: number };

/** Commune centres, from geo.api.gouv.fr. */
const TOWNS = {
  brie: [-0.3026, 45.4722],
  cognac: [-0.3376, 45.696],
  saintes: [-0.6456, 45.7462],
  angouleme: [0.145, 45.6458],
  laRochelle: [-1.1765, 46.162],
  bordeaux: [-0.5848, 44.8624],
} as const satisfies Record<string, Point>;

// --- Projection -----------------------------------------------------------

/**
 * A landscape frame, not a square: it holds the two departments, the coast
 * they sit behind and Bordeaux below them, and stops just above La Rochelle —
 * everything further north is another region's country. Sized so the drawing
 * comes out about as tall as the statement beside it, rather than setting the
 * height of the whole band.
 */
const WIDTH = 560;
const HEIGHT = 428;
const REGION: Window = { lonMin: -1.95, lonMax: 1.3, latMin: 44.72, latMax: 46.45 };
const NATION: Window = { lonMin: -4.85, lonMax: 8.25, latMin: 42.3, latMax: 51.1 };

/**
 * Equirectangular, with the longitude scale corrected by the cosine of the
 * window's mid-latitude — without that, France leans a third too wide.
 */
function projector(win: Window, box: Box) {
  const { lonMin, lonMax, latMin, latMax } = win;
  const { x = 0, y = 0, w, h } = box;
  const k = Math.cos(((latMin + latMax) / 2) * (Math.PI / 180));
  const spanX = (lonMax - lonMin) * k;
  const spanY = latMax - latMin;
  const s = Math.min(w / spanX, h / spanY);
  const ox = x + (w - spanX * s) / 2;
  const oy = y + (h - spanY * s) / 2;
  const at = ([lon, lat]: Point): Point => [
    Number((ox + (lon - lonMin) * k * s).toFixed(1)),
    Number((oy + (latMax - lat) * s).toFixed(1)),
  ];
  const path = (ring: Ring) =>
    `M${ring.map(at).map(([px, py]) => `${px} ${py}`).join("L")}Z`;
  return { at, path };
}

const region = projector(REGION, { w: WIDTH, h: HEIGHT });
const nation = projector(NATION, { x: 14, y: HEIGHT - 118, w: 92, h: 99 });
const P = {
  brie: region.at(TOWNS.brie),
  cognac: region.at(TOWNS.cognac),
  saintes: region.at(TOWNS.saintes),
  angouleme: region.at(TOWNS.angouleme),
  laRochelle: region.at(TOWNS.laRochelle),
  bordeaux: region.at(TOWNS.bordeaux),
};

// --- Drawing --------------------------------------------------------------

function Town({
  point,
  label,
  side = "right",
  onNavy = false,
}: {
  point: Point;
  label: string;
  /** Which way the name runs. Every label has to stay on its own ground:
      cream names vanish the moment they cross onto the cream land. */
  side?: "left" | "right" | "top" | "bottom";
  onNavy?: boolean;
}) {
  const [x, y] = point;
  const { dx, dy, anchor } = {
    left: { dx: -9, dy: 4, anchor: "end" },
    right: { dx: 9, dy: 4, anchor: "start" },
    top: { dx: 0, dy: -9, anchor: "middle" },
    bottom: { dx: 0, dy: 17, anchor: "middle" },
  }[side] as { dx: number; dy: number; anchor: "start" | "middle" | "end" };
  return (
    <g>
      <circle cx={x} cy={y} r={3} className={onNavy ? "fill-cream/70" : "fill-ink/30"} />
      <text
        x={x + dx}
        y={y + dy}
        textAnchor={anchor}
        className={`text-[14px] ${onNavy ? "fill-cream/90" : "fill-ink/55"}`}
      >
        {label}
      </text>
    </g>
  );
}

function DeptLabel({ lon, lat, lines }: { lon: number; lat: number; lines: string[] }) {
  const [x, y] = region.at([lon, lat]);
  return (
    <>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x}
          y={y + i * 15}
          textAnchor="middle"
          className="fill-cream/70 text-[12px] font-semibold tracking-[0.16em]"
        >
          {line}
        </text>
      ))}
    </>
  );
}

export function OriginMap({ labels }: { labels: Content["homeIntro"]["map"] }) {
  const [bx, by] = P.brie;
  // "Atlantic Ocean" sets over two lines in every dictionary we carry.
  const ocean = labels.ocean.split(" ");

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={labels.description}
      className="h-auto w-full"
    >
      {/* The land runs past the frame in every direction, so it is faded out
          at the edges rather than cut: a hard cream rectangle would read as a
          panel dropped on the page instead of a window onto it. Only the land
          carries the mask — region, pin and labels stay crisp. */}
      <defs>
        <radialGradient id="origin-map-fade" cx="50%" cy="50%" r="62%">
          <stop offset="48%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="origin-map-land">
          <rect width={WIDTH} height={HEIGHT} fill="url(#origin-map-fade)" />
        </mask>
      </defs>
      {/* Land is cream, water is the section's own white: the coastline is the
          edge between them, so no shoreline stroke is needed. The neighbouring
          departments are stroked in their own colour as well as filled, which
          closes the hairline gaps thinning leaves between them. */}
      <g mask="url(#origin-map-land)">
        {NEIGHBOUR_LAND.map((land, i) => (
          <path
            key={i}
            d={region.path(land)}
            className="fill-cream stroke-cream"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        ))}
      </g>
      <g className="stroke-white" strokeWidth={3.5} strokeLinejoin="round">
        <path d={region.path(MARITIME)} className="fill-navy" />
        <path d={region.path(CHARENTE)} className="fill-navy" />
      </g>
      {/* The islands are Charente-Maritime too, and too small for the gap the
          mainland pair needs between them. */}
      <g className="stroke-white" strokeWidth={1.5} strokeLinejoin="round">
        <path d={region.path(RE)} className="fill-navy" />
        <path d={region.path(OLERON)} className="fill-navy" />
      </g>

      {ocean.map((word, i) => (
        <text
          key={word}
          x={20}
          y={178 + i * 19}
          className="fill-ink/25 text-[12px] font-semibold tracking-[0.24em]"
        >
          {word.toUpperCase()}
        </text>
      ))}

      <DeptLabel lon={-0.72} lat={45.98} lines={["CHARENTE-", "MARITIME"]} />
      <DeptLabel lon={0.36} lat={45.86} lines={["CHARENTE"]} />

      <Town point={P.laRochelle} label="La Rochelle" onNavy />
      <Town point={P.saintes} label="Saintes" side="left" onNavy />
      <Town point={P.cognac} label="Cognac" onNavy />
      <Town point={P.angouleme} label="Angoulême" side="bottom" onNavy />
      <Town point={P.bordeaux} label="Bordeaux" />

      {/* The house itself: a leader line out of the region into open country,
          so the pin never has to compete with a label sitting on top of it. */}
      <g>
        {/* White, like the channels between the shapes: a blue line reads as a
            road where it crosses the region, and vanishes on the cream. */}
        <line x1={bx + 9} y1={by + 9} x2={bx + 70} y2={by + 70} className="stroke-white" strokeWidth={2} />
        <circle cx={bx} cy={by} r={8} className="fill-blue stroke-white" strokeWidth={3} />
        <text
          x={bx + 74}
          y={by + 74}
          className="fill-navy text-[14px] font-bold tracking-[0.1em]"
        >
          BRIE-SOUS-ARCHIAC
        </text>
      </g>

      {/* Locator: the whole country, dropped in the empty water. */}
      <g>
        <path
          d={nation.path(FRANCE)}
          className="fill-cream stroke-ink/25"
          strokeWidth={1}
          strokeLinejoin="round"
        />
        <circle cx={nation.at(TOWNS.brie)[0]} cy={nation.at(TOWNS.brie)[1]} r={4.5} className="fill-blue" />
      </g>
    </svg>
  );
}
