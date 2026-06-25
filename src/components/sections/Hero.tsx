"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BRAND, HERO, PROOF_STATS } from "@/lib/constants";
import CallLink from "@/components/ui/CallLink";
import HeadshotFrame from "@/components/ui/HeadshotFrame";
import WaxSeal from "@/components/ui/WaxSeal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="container-wide relative z-10 pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* ---------- type ---------- */}
          <div className="lg:col-span-7">
            <motion.div {...rise(0.05)} className="record-label">
              {HERO.eyebrow}
            </motion.div>

            <h1 className="mt-6 font-display font-light leading-[1.03] tracking-[-0.025em] text-ink text-[clamp(2.5rem,5.6vw,4.6rem)]">
              <motion.span {...rise(0.12)} className="block">
                {HERO.headline.lead}
                <span className="display-italic text-clay-deep">{HERO.headline.italic}</span>
                {HERO.headline.rest}
              </motion.span>
            </h1>

            <motion.p
              {...rise(0.26)}
              className="mt-7 max-w-xl text-[1.075rem] leading-relaxed text-stone pretty"
            >
              {HERO.sub}
            </motion.p>

            <motion.div {...rise(0.38)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/home-value"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 text-[0.98rem] font-semibold text-paper shadow-[0_18px_40px_-20px_rgba(28,27,25,0.9)] transition-colors hover:bg-clay"
              >
                {HERO.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <CallLink
                where="hero"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--line-ink-strong)] px-7 py-4 text-[0.98rem] font-semibold text-ink transition-colors hover:border-clay hover:text-clay-deep"
              >
                <Phone className="h-4 w-4 text-clay" />
                {HERO.ctaSecondary}: <span className="tnum">{BRAND.phoneDisplay}</span>
              </CallLink>
            </motion.div>

            <motion.p {...rise(0.5)} className="mt-6 text-sm text-ash">
              {HERO.trust}
            </motion.p>
          </div>

          {/* ---------- the record card ---------- */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.25, ease }}
            className="lg:col-span-5"
          >
            <div className="reg-frame relative rounded-lg border border-[var(--line-ink)] bg-card p-3.5 shadow-[var(--shadow-lift)]">
              <HeadshotFrame />

              <div className="px-3 pb-2 pt-5">
                <p className="font-display text-2xl leading-none text-ink">Chris Karapatsakis</p>
                <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay-deep">
                  Canton Listing Specialist · Remerica Hometown III
                </p>

                <div className="my-4 hairline-ink" />

                <dl className="grid grid-cols-3 gap-3">
                  {PROOF_STATS.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <dt className="font-display text-[1.5rem] leading-none text-ink tnum">{s.value}</dt>
                      <dd className="mt-1.5 text-[0.68rem] leading-tight text-ash">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* the seal, pressed at the corner */}
              <div className="pointer-events-none absolute -bottom-7 -left-7 hidden sm:block">
                <WaxSeal
                  className="scale-[0.62]"
                  topLabel="Easy-Exit"
                  monogram="CK"
                  bottomLabel="Guarantee"
                  tilt={-8}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* settle line */}
      <div className="container-wide">
        <div className="hairline-ink" />
      </div>
    </section>
  );
}
