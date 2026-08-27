import Image from "next/image";
import type { LabelledAward } from "@/lib/site";

/**
 * Competition medals and point scores for one bottle.
 *
 * Not a `StatsBand` variant: that component exists to count a number up from
 * zero, which is wrong for a static medal and would push client JS onto
 * category pages that currently ship none. It does borrow StatsBand's cell
 * chrome — the left hairline and its indent — so the two rhyme.
 *
 * Badges are the house's own marks, reproduced from its brochure. Records
 * without artwork (the unattributed point scores) simply render as type.
 */
export function AwardRow({
  awards,
  heading,
}: {
  awards: readonly LabelledAward[];
  heading: string;
}) {
  if (awards.length === 0) return null;

  return (
    <div className="mt-10 max-w-lg border-t border-ink/12 pt-8">
      <h3 className="eyebrow text-ink/50">{heading}</h3>
      <ul className="m-0 mt-6 grid list-none gap-x-6 gap-y-8 p-0 sm:grid-cols-2">
        {awards.map((award, index) => (
          <li
            key={`${award.competition ?? "score"}-${award.rank}-${index}`}
            className="flex items-center gap-4 border-l border-ink/15 pl-4"
          >
            {award.image && (
              <Image
                src={award.image}
                alt=""
                width={56}
                height={56}
                sizes="56px"
                className="h-14 w-14 shrink-0 object-contain"
              />
            )}
            <div className="min-w-0">
              <p className="display display-sm uppercase tracking-[0.06em] text-blue tabular-nums">
                {award.label}
              </p>
              {award.competition && (
                <p className="mt-1 text-sm leading-6 text-ink/60">
                  {award.competition}
                  {award.year && <span className="text-ink/65"> · {award.year}</span>}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
