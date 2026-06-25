import { Star, Quote } from "lucide-react";
import { REVIEW, RECENT_SALES, SALES_SPAN_NOTE, PRESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EngraveRule from "@/components/ui/EngraveRule";

/** Social proof, honest version: real production + the one real review + press. */
export default function SocialProof() {
  return (
    <section className="section bg-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The record"
          title="Hundreds of homes sold, and a reputation he protects"
          subtitle="Most agents pad their reviews. Chris would rather show you the work. Here is real recent production, one verified review, and the press that has covered him."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* the one real review */}
          <Reveal>
            <figure className="reg-frame flex h-full flex-col rounded-lg border border-[var(--line-ink)] bg-card p-8 sm:p-10">
              <Quote className="h-8 w-8 text-clay/40" aria-hidden />
              <blockquote className="mt-5 font-display text-[1.3rem] font-light leading-relaxed text-ink sm:text-[1.45rem]">
                {REVIEW.quote}
              </blockquote>
              <figcaption className="mt-7">
                <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-clay text-clay" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">{REVIEW.attribution}</p>
                <p className="text-sm text-ash">{REVIEW.context}</p>
                <a
                  href={REVIEW.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-block text-xs font-semibold text-clay-deep"
                >
                  Verify on Zillow
                </a>
              </figcaption>
            </figure>
          </Reveal>

          {/* recent sold strip */}
          <Reveal delay={0.1}>
            <div>
              <p className="record-label">Recently sold · seller represented</p>
              <ul className="mt-5 divide-y divide-[var(--line-ink-soft)] overflow-hidden rounded-lg border border-[var(--line-ink)] bg-card">
                {RECENT_SALES.map((s) => (
                  <li key={`${s.area}-${s.price}`} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-medium text-ink">
                        {s.area}, MI <span className="text-ash">{s.zip}</span>
                      </p>
                      <p className="text-[0.82rem] text-ash">{s.detail}</p>
                    </div>
                    <p className="font-display text-[1.25rem] text-clay-deep tnum">{s.price}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-ash">{SALES_SPAN_NOTE}</p>
            </div>
          </Reveal>
        </div>

        {/* press */}
        <div className="mt-16">
          <EngraveRule className="mx-auto max-w-xs" />
          <p className="mt-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ash">
            As featured in
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {PRESS.map((p) => (
              <div key={p.name} className="text-center">
                <span className="font-display text-[1.35rem] text-ink/75">{p.name}</span>
                <span className="mt-0.5 block text-[0.62rem] uppercase tracking-[0.16em] text-ash">
                  {p.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
