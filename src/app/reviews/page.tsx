import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import { SEO, PROOF_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.reviews.title,
  description: SEO.reviews.description,
  alternates: { canonical: "/reviews" },
  openGraph: { title: SEO.reviews.title, description: SEO.reviews.description, url: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reputation"
        title="5.0 stars, and a record to"
        italic="back it up"
        subtitle="A perfect 5.0 across 14 Google reviews, hundreds of homes sold, and real press. Here is the honest picture of nearly 30 years selling homes in Metro Detroit."
      />

      {/* proof stats */}
      <section className="section-tight bg-vellum/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PROOF_STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.06}
                className="rounded-lg border border-[var(--line-ink)] bg-card p-6 text-center"
              >
                <p className="font-display text-[2.1rem] leading-none text-ink tnum">{s.value}</p>
                <p className="mt-3 text-[0.82rem] leading-snug text-stone">{s.label}</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-ash">via {s.source}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ash">
            Every review below is real and verifiable on Google. If you have worked with Chris, a
            review genuinely helps other sellers find an agent they can trust.
          </p>
        </div>
      </section>

      <SocialProof />
      <FinalCTA />
    </>
  );
}
