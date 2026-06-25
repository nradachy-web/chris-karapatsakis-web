import type { Metadata } from "next";
import { Award, Languages, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import OfficeSection from "@/components/sections/OfficeSection";
import Reveal from "@/components/ui/Reveal";
import HeadshotFrame from "@/components/ui/HeadshotFrame";
import JsonLd from "@/components/JsonLd";
import { personJsonLd } from "@/lib/schema";
import { SEO, BRAND, PROOF_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.about.title,
  description: SEO.about.description,
  alternates: { canonical: "/about" },
  openGraph: { title: SEO.about.title, description: SEO.about.description, url: "/about" },
};

const PARAS = [
  "Christo Karapatsakis, known to everyone as Chris, has spent nearly three decades doing one thing well: selling homes across Metro Detroit. From his home base in Canton, he has represented hundreds of families through Wayne, Oakland, and Livingston counties.",
  "He is a listing specialist. The vast majority of his work is representing sellers, and that focus is deliberate. When you list with Chris, you get an agent whose entire attention, pricing, marketing, and hard negotiation, is on your side of the table.",
  "Sellers come back to Chris for the same reasons every time: he answers fast, usually within the hour, and he tells the truth. If your price is wrong or a repair will cost you at the table, he will say so plainly. He would rather give you an honest answer you can act on than a comfortable one you cannot.",
  "Every seller he lists gets a free market analysis, a home warranty, and the Easy-Exit Guarantee. The risk sits with Chris, not with you. After nearly 30 years, that confidence is earned.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <PageHero
        eyebrow="About"
        title="Nearly 30 years, and still"
        italic="straight with you"
        subtitle="Canton's veteran listing agent, a specialist who would rather lose a listing than sugar-coat the truth."
      />

      <section className="section-tight bg-paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="reg-frame rounded-lg border border-[var(--line-ink)] bg-card p-3.5 shadow-[var(--shadow-card)]">
                  <HeadshotFrame src="/images/chris-headshot-2.jpg" ratio="aspect-[4/5]" />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-stone">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-clay-deep" />
                    <span>
                      Real Estate All Star, Hour Detroit and DBusiness. Remerica Million Dollar Agent.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-stone">
                    <Languages className="mt-0.5 h-4 w-4 shrink-0 text-clay-deep" />
                    <span>Serves clients in {BRAND.languages.join(" and ")}.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-stone">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-deep" />
                    <span>{BRAND.brokerage}, serving {BRAND.counties.join(", ")} counties.</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                {PARAS.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[1.08rem] leading-relaxed text-stone pretty">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {PROOF_STATS.map((s) => (
                  <div key={s.label} className="border-l-2 border-clay/40 pl-4">
                    <p className="font-display text-[1.7rem] leading-none text-ink tnum">{s.value}</p>
                    <p className="mt-2 text-[0.72rem] leading-tight text-ash">{s.label}</p>
                    <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.1em] text-ash">{s.source}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <OfficeSection />
      <GuaranteePledge />
      <FinalCTA />
    </>
  );
}
