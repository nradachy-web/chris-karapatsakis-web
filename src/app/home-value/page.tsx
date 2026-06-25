import type { Metadata } from "next";
import { Check } from "lucide-react";
import ValuationForm from "@/components/forms/ValuationForm";
import StatRibbon from "@/components/sections/StatRibbon";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import SocialProof from "@/components/sections/SocialProof";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import EngraveRule from "@/components/ui/EngraveRule";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.homeValue.title,
  description: SEO.homeValue.description,
  alternates: { canonical: "/home-value" },
  openGraph: { title: SEO.homeValue.title, description: SEO.homeValue.description, url: "/home-value" },
};

const POINTS = [
  "A real comparative market analysis, not an algorithm's guess",
  "What your home should list for, and what you can net",
  "An honest read on how fast it will sell at that price",
  "Free, no obligation, and no sales pitch attached",
];

const HV_FAQ = [
  {
    q: "Is the home valuation really free?",
    a: "Yes, completely. I provide a free comparative market analysis with no obligation. You can take the number and do nothing with it, and that is fine. It is how I introduce myself to sellers.",
  },
  {
    q: "How is this different from a Zillow Zestimate?",
    a: "A Zestimate is an algorithm averaging public data. It has never seen your kitchen, your updates, or your street. I price your home on real comparable sales nearby and what buyers are actually paying right now, which is what determines your real number.",
  },
  {
    q: "Do I have to list with you to get the analysis?",
    a: "No. There is no catch and no commitment. If we end up working together, great, and you will get a free home warranty and my Easy-Exit guarantee. If not, you still keep the honest numbers.",
  },
  {
    q: "How soon will I hear back?",
    a: "Fast. I personally respond to sellers, usually within the hour. Add your phone number and I can text you the number even quicker.",
  },
];

export default function HomeValuePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(HV_FAQ)} />

      {/* form-forward hero */}
      <section className="relative overflow-hidden bg-paper pt-32 pb-12 sm:pt-36 lg:pt-44">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="record-label">Free home value report</span>
              <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.7rem)] font-light leading-[1.04] tracking-[-0.025em] text-ink">
                What is your home <span className="display-italic text-clay-deep">really worth</span>?
              </h1>
              <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-stone pretty">
                Get the real number from an agent who has sold homes across Canton, Plymouth,
                Northville and South Lyon for nearly 30 years. Not a Zestimate. The number your home
                should actually sell for, with the comps to prove it.
              </p>
              <ul className="mt-8 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.97rem] text-stone">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-clay/15">
                      <Check className="h-3 w-3 text-clay-deep" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <EngraveRule className="max-w-[10rem]" />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="lg:sticky lg:top-28">
                <ValuationForm source="home-value-lp" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatRibbon />
      <GuaranteePledge />
      <SocialProof />
      <FaqSection items={HV_FAQ} eyebrow="Good to know" heading="About your free home value report" />
      <FinalCTA />
    </>
  );
}
