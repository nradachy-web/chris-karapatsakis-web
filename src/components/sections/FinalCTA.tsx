import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FINAL_CTA, BRAND, CTA } from "@/lib/constants";
import CallLink from "@/components/ui/CallLink";
import Reveal from "@/components/ui/Reveal";

/** Closing call to action band. */
export default function FinalCTA({
  heading = FINAL_CTA.heading,
  sub = FINAL_CTA.sub,
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="field-ink section">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="record-label record-label-sand justify-center">No pressure, ever</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.2rem)] font-light leading-[1.05] tracking-[-0.02em] text-paper">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#bfc4ba] pretty">
            {sub}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/home-value"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-clay px-8 py-4 text-[0.98rem] font-semibold text-paper shadow-[0_18px_40px_-18px_rgba(133,92,56,0.8)] transition-colors hover:bg-[#b9874f]"
            >
              {CTA.primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <CallLink
              where="final-cta"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--line-light-strong)] px-7 py-4 text-[0.98rem] font-semibold text-paper transition-colors hover:border-sand hover:text-sand"
            >
              <Phone className="h-4 w-4 text-sand" />
              {BRAND.phoneDisplay}
            </CallLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
