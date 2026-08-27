import type { TastingNote } from "@/lib/site";
import type { Content } from "@/lib/content/en";
import { SenseIcon } from "@/components/SenseIcon";

/**
 * Eye, nose and palate as a definition list — which is what the relationship
 * actually is: three senses, each with the note it gives.
 *
 * Rides the `.metier` hairline row already used for the marks list on /about,
 * so the rule under each note grows on hover exactly as it does there. The
 * icon is decorative; the sense name beside it is the real label.
 */
export function TastingNotes({
  notes,
  senses,
  heading,
}: {
  notes: readonly TastingNote[];
  senses: Content["houseBrands"]["labels"]["senses"];
  heading: string;
}) {
  if (notes.length === 0) return null;

  return (
    <>
      <h3 className="eyebrow mt-8 text-ink/50">{heading}</h3>
      <dl className="m-0 mt-2 max-w-lg">
        {notes.map((note) => (
          <div
            key={note.sense}
            className="metier grid grid-cols-[1.5rem_4.5rem_minmax(0,1fr)] items-baseline gap-x-4 py-4"
          >
            <SenseIcon sense={note.sense} className="h-5 w-5 self-center text-blue" />
            <dt className="eyebrow text-[0.6rem] text-ink/65">{senses[note.sense]}</dt>
            <dd className="m-0 text-sm leading-7 text-ink/70">{note.note}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
