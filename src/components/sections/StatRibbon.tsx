import { STAT_RIBBON } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

/** Thin trust ribbon of defensible figures. Big serif values, hairline splits. */
export default function StatRibbon() {
  return (
    <section className="border-y border-hair bg-vellum/60">
      <div className="container-wide">
        <div className="grid grid-cols-2 divide-x divide-y divide-[var(--line-ink-soft)] sm:grid-cols-4 sm:divide-y-0">
          {STAT_RIBBON.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.06} className="px-5 py-8 text-center sm:px-6 sm:py-10">
              <p className="font-display text-[1.45rem] leading-tight text-ink sm:text-[1.6rem]">
                {s.value}
              </p>
              <p className="mx-auto mt-2 max-w-[18ch] text-[0.78rem] leading-snug text-stone">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
