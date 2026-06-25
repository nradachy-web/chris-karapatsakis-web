import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export interface Block {
  h2?: string;
  p?: string;
  list?: string[];
  note?: string;
}

/** Renders structured long-form content with the document type system. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <section className="section-tight bg-paper">
      <div className="container-prose">
        <div className="space-y-10">
          {blocks.map((b, i) => (
            <Reveal key={i} delay={0.02 * i}>
              {b.h2 && (
                <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.1rem)] font-light leading-tight tracking-[-0.02em] text-ink">
                  {b.h2}
                </h2>
              )}
              {b.p && <p className="mt-4 text-[1.04rem] leading-relaxed text-stone pretty">{b.p}</p>}
              {b.list && (
                <ul className="mt-4 space-y-2.5">
                  {b.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-[1rem] leading-relaxed text-stone">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-clay/15">
                        <Check className="h-3 w-3 text-clay-deep" strokeWidth={3} />
                      </span>
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {b.note && (
                <div className="mt-5 rounded-lg border border-[var(--line-clay-soft)] bg-clay/[0.05] px-5 py-4 text-[0.95rem] leading-relaxed text-stone">
                  {b.note}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
