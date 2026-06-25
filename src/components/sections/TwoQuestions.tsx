import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TWO_QUESTIONS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** The two questions every seller asks. The brutal-honesty proof. */
export default function TwoQuestions() {
  return (
    <section className="section bg-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="No sugar-coating"
          title={TWO_QUESTIONS.heading}
          subtitle={TWO_QUESTIONS.intro}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TWO_QUESTIONS.cards.map((c, i) => (
            <Reveal key={c.q} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-lg border border-[var(--line-ink)] bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-clay/60 hover:shadow-[var(--shadow-lift)] sm:p-9"
              >
                <span className="font-display text-[0.85rem] font-semibold uppercase tracking-[0.16em] text-clay-deep">
                  Q{i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.5rem] leading-snug text-ink">{c.q}</h3>
                <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-stone">{c.teaser}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-clay-deep">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
