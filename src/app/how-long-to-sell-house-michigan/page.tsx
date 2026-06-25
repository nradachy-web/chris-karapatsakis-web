import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ArticleBody, { type Block } from "@/components/sections/ArticleBody";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { SEO, CITIES, CITY_DATA_NOTE, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.daysToSell.title,
  description: SEO.daysToSell.description,
  alternates: { canonical: "/how-long-to-sell-house-michigan" },
  openGraph: { title: SEO.daysToSell.title, description: SEO.daysToSell.description, url: "/how-long-to-sell-house-michigan" },
};

const BLOCKS: Block[] = [
  {
    h2: "Price is the lever, not luck",
    p: "Days on market is mostly a pricing story. A well-priced home in a healthy market gets showings in the first week and offers soon after. An overpriced home sits, goes stale, and often sells for less than if it had been priced right from day one. The market tells you the truth quickly. The trick is listening to it before you list, not after.",
  },
  {
    h2: "What actually moves your timeline",
    list: [
      "Price relative to recent comparable sales, by far the biggest factor",
      "Condition and how show-ready the home is on day one",
      "Photography and presentation that earn the click and the showing",
      "Local demand for your price band and neighborhood right now",
      "Time of year, though a well-priced home sells in any season",
    ],
  },
  {
    h2: "How I keep your home from sitting",
    p: "I price your home where the data says it sells, not where hope says it should. We prep and present it to look its best from the first photo, and I watch the early showing and feedback signals closely. If the market is telling us something, I tell you straight, fast, so we can adjust before the listing goes cold.",
    note: "The fastest sales and the highest prices usually come from the same thing: pricing right at launch. That is what a free market analysis gets you.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does it take to sell a house in the Canton area right now?",
    a: "It varies by town and price. Across Canton, Plymouth, Northville and South Lyon, well-priced homes are generally selling in roughly three to five weeks, and some go faster in the tighter markets. Overpricing is the main reason a home sits.",
  },
  {
    q: "Why is my neighbor's house taking so long to sell?",
    a: "Almost always price, sometimes condition or presentation. A home priced above what buyers will pay gets fewer showings and stalls. The market corrects it eventually, usually at a lower number than if it had been priced right at launch.",
  },
  {
    q: "Will a lower price always sell faster?",
    a: "A right price sells fast. You do not need to give the home away. The goal is pricing it where it draws strong activity quickly, which often produces competing interest and protects your final number. I will show you exactly where that is for your home.",
  },
  {
    q: "How do I find out the right price for my home?",
    a: `Ask me for a free market analysis. I will base it on real comparable sales near you and the current pace of your market. Call or text ${BRAND.phoneDisplay} or request it online.`,
  },
];

export default function DaysToSellPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageHero
        eyebrow="Straight answers · Time on market"
        title="How long will it take to"
        italic="sell my house?"
        subtitle="Your first big question, answered with real local data. Here is how fast homes are moving in the towns I sell in, and what actually drives the timeline."
        cta={{ href: "/home-value", label: "See what my home should list for" }}
      />

      {/* DOM by city */}
      <section className="section-tight bg-vellum/50">
        <div className="container-wide">
          <span className="record-label">Average days on market</span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c, i) => (
              <Reveal
                key={c.slug}
                delay={i * 0.06}
                className="rounded-lg border border-[var(--line-ink)] bg-card p-6"
              >
                <p className="font-display text-[1.3rem] text-ink">{c.name}</p>
                <p className="mt-3 font-display text-[2.2rem] leading-none text-clay-deep tnum">
                  {c.daysOnMarket.replace("~", "")}
                </p>
                <p className="mt-2 text-[0.8rem] text-ash">{c.marketLabel}</p>
                <Link
                  href={`/sell-your-home-${c.slug}-mi`}
                  className="link-underline mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-clay-deep"
                >
                  {c.name} sellers <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ash">{CITY_DATA_NOTE}</p>
        </div>
      </section>

      <ArticleBody blocks={BLOCKS} />
      <FaqSection items={FAQ_ITEMS} eyebrow="Timing questions" heading="How long to sell, answered" />
      <FinalCTA
        heading="Find out how fast your home will sell"
        sub="A free market analysis shows you the right price and a realistic timeline for your exact home."
      />
    </>
  );
}
