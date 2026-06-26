import { Star, Quote, ArrowUpRight } from "lucide-react";
import { GOOGLE, GOOGLE_REVIEWS, RECENT_SALES, SALES_SPAN_NOTE, PRESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EngraveRule from "@/components/ui/EngraveRule";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} fill-clay text-clay`} />
      ))}
    </span>
  );
}

/** Social proof: real Google rating + reviews, recent sold homes, and press. */
export default function SocialProof() {
  return (
    <section className="section bg-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What sellers say"
          title={`${GOOGLE.rating} stars across ${GOOGLE.count} Google reviews`}
          subtitle="Most agents pad their reviews. Chris would rather let his sellers speak. Here is what they say, plus recent sold homes and the press that has covered him."
        />

        {/* rating badge */}
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-lg border border-[var(--line-ink)] bg-card px-6 py-4">
            <Stars />
            <span className="font-display text-[1.5rem] leading-none text-ink tnum">{GOOGLE.rating}</span>
            <span className="text-sm text-stone">
              Rated <span className="font-semibold text-ink">{GOOGLE.rating} out of 5</span> from{" "}
              {GOOGLE.count} Google reviews
            </span>
            <a
              href={GOOGLE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-clay-deep transition-colors hover:text-clay"
            >
              Read them on Google
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* reviews grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col rounded-lg border border-[var(--line-ink)] bg-card p-6">
                <Quote className="h-6 w-6 text-clay/40" aria-hidden />
                <blockquote className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-stone">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-[var(--line-ink-soft)] pt-4">
                  <span className="text-sm font-semibold text-ink">{r.name}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Stars className="h-3 w-3" />
                    <span className="text-[0.68rem] uppercase tracking-[0.12em] text-ash">Google</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* recent sold + press */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
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
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <EngraveRule className="max-w-xs" />
            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ash">
              As featured in
            </p>
            <div className="mt-5 space-y-4">
              {PRESS.map((p) => (
                <div key={p.name} className="border-l-2 border-clay/30 pl-4">
                  <span className="font-display text-[1.3rem] text-ink/80">{p.name}</span>
                  <span className="mt-0.5 block text-[0.62rem] uppercase tracking-[0.16em] text-ash">
                    {p.note}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
