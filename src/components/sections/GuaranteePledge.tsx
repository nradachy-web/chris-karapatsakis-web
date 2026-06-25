import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GUARANTEE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import WaxSeal from "@/components/ui/WaxSeal";

/**
 * The signature element: a signed pledge on bone document stock with the
 * embossed seal and Chris's script signature. The one thing no Remerica
 * template has.
 */
export default function GuaranteePledge({
  compact = false,
  showCta = true,
}: {
  compact?: boolean;
  showCta?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 rounded-lg border border-[var(--line-clay-soft)] bg-clay/[0.05] px-5 py-4">
        <ShieldCheck className="h-6 w-6 shrink-0 text-clay-deep" strokeWidth={1.6} aria-hidden />
        <p className="text-sm leading-snug text-stone">
          <span className="font-semibold text-ink">{GUARANTEE.name}.</span> {GUARANTEE.promise}
        </p>
      </div>
    );
  }

  return (
    <section className="field-pine section">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl">
          <div className="reg-frame relative rounded-xl border border-[var(--line-ink)] bg-card px-7 py-12 text-center shadow-[var(--shadow-float)] sm:px-12 sm:py-14">
            <span className="record-label justify-center">A signed promise</span>

            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,2.9rem)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
              {GUARANTEE.name}
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-display text-[1.2rem] font-light italic leading-relaxed text-stone sm:text-[1.35rem]">
              &ldquo;{GUARANTEE.promise}&rdquo;
            </p>

            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-stone">{GUARANTEE.fine}</p>

            {/* seal + signature */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              <WaxSeal topLabel="Easy-Exit" monogram="CK" bottomLabel="Guarantee" />
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-script text-[2.6rem] leading-none text-ink">
                  {GUARANTEE.signature}
                </span>
                <div className="mt-2 h-px w-48 bg-[var(--line-ink)]" />
                <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay-deep">
                  Chris Karapatsakis · Canton Listing Agent
                </span>
              </div>
            </div>

            {showCta && (
              <div className="mt-10">
                <Link
                  href="/seller-guarantee"
                  className="group link-underline inline-flex items-center gap-2 text-sm font-semibold text-clay-deep"
                >
                  Read the full guarantee
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}

            <p className="mx-auto mt-8 max-w-lg text-[0.72rem] leading-relaxed text-stone/80">
              {GUARANTEE.carveout}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
