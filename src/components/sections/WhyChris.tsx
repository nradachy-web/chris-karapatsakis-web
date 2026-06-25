import { WHY_CHRIS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

/** Why sellers choose Chris. Each reason carries a concrete proof point. */
export default function WhyChris() {
  return (
    <section className="section bg-vellum/50">
      <div className="container-wide">
        <SectionHeading eyebrow="The difference" title={WHY_CHRIS.heading} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[var(--line-ink-soft)] bg-[var(--line-ink-soft)] sm:grid-cols-2">
          {WHY_CHRIS.reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07} className="bg-card p-7 sm:p-9">
              <span className="grid h-12 w-12 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                <Icon name={r.icon} className="h-5 w-5 text-clay-deep" />
              </span>
              <h3 className="mt-5 font-display text-[1.3rem] text-ink">{r.title}</h3>
              <p className="mt-2.5 text-[0.97rem] leading-relaxed text-stone">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
