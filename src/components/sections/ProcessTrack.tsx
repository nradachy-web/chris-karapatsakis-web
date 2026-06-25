import { PROCESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * How I sell your home. Numbered because it genuinely is a sequence, the order
 * carries meaning (price before market, market before negotiate).
 */
export default function ProcessTrack({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "field-ink section" : "section bg-vellum/50"}>
      <div className="container-wide">
        <SectionHeading eyebrow="The process" title={PROCESS.heading} subtitle={PROCESS.intro} tone={tone} />

        <ol className="mt-12 space-y-px overflow-hidden rounded-lg border border-[var(--line-ink-soft)] bg-[var(--line-ink-soft)]">
          {PROCESS.steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.05}
              as="li"
              className={dark ? "bg-ink" : "bg-card"}
            >
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-baseline sm:gap-8 sm:p-8">
                <span className="font-display text-[1.7rem] leading-none text-clay-deep tnum sm:w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:flex-1">
                  <h3 className={`font-display text-[1.3rem] ${dark ? "text-paper" : "text-ink"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-2 max-w-2xl text-[0.97rem] leading-relaxed ${dark ? "text-[#bfc4ba]" : "text-stone"}`}>
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
