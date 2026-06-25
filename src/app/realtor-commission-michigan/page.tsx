import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ArticleBody, { type Block } from "@/components/sections/ArticleBody";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { SEO, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.commission.title,
  description: SEO.commission.description,
  alternates: { canonical: "/realtor-commission-michigan" },
  openGraph: { title: SEO.commission.title, description: SEO.commission.description, url: "/realtor-commission-michigan" },
};

const BLOCKS: Block[] = [
  {
    p: "This is the second question almost every seller asks me, and most agents are slippery about it. I am not. Here is how listing commission actually works in Michigan, in plain language, so you can make a clear decision.",
  },
  {
    h2: "Commission is negotiable. Always.",
    p: "There is no set or legal commission rate in Michigan. Any agent who tells you the rate is fixed is not being straight with you. Commission is a negotiated fee for a service, and it has always been negotiable. What matters is what you get for it and what it nets you at the closing table.",
  },
  {
    h2: "Who pays what, after the 2024 rule changes",
    p: "The way buyer-agent compensation is handled changed across the industry in 2024. The short version: as a seller, you and I agree on my listing fee in writing up front, and whether or how you offer to contribute to a buyer's agent is a separate decision we make together based on your goals and the market. I will walk you through the options and the math before anything is signed.",
  },
  {
    h2: "What a real listing fee actually covers",
    list: [
      "Pricing your home correctly with a true market analysis, the single biggest driver of your final number",
      "Professional listing presentation and photography that earns showings",
      "MLS listing and syndication to the major portals where buyers actually look",
      "Negotiation on price, terms, contingencies, and repairs, which is where the fee pays for itself",
      "Managing inspection, appraisal, and paperwork so the deal does not fall apart",
      "A home warranty for your home while it is listed, on me",
    ],
  },
  {
    h2: "Why the cheapest commission is not always the best deal",
    p: "A discount agent who underprices your home or negotiates weakly can cost you far more than they saved you in fee. The right question is not 'what is the lowest rate,' it is 'who will put the most money in my pocket at closing, after their fee.' Nearly 30 years of negotiating is exactly what protects that number.",
    note: "Bottom line: I will tell you my fee and exactly what it covers before you commit, in writing, and you are protected by the Easy-Exit Guarantee the entire time. No games.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is real estate commission negotiable in Michigan?",
    a: "Yes. There is no fixed or legal commission rate in Michigan. Commission is always a negotiable fee for service. I will explain my fee and exactly what it covers before anything is listed.",
  },
  {
    q: "Who pays the real estate commission when I sell?",
    a: "As the seller, you agree to a listing fee with your agent in writing. How buyer-agent compensation is handled changed across the industry in 2024 and is now a separate decision we make together based on your goals. I will walk you through the current options and the math.",
  },
  {
    q: "Does a lower commission save me money?",
    a: "Not always. A discount agent who misprices your home or negotiates poorly can cost you far more than the fee they saved. What matters is your net at closing after the fee, which is where experienced pricing and negotiation pay off.",
  },
  {
    q: "How do I find out what selling will actually net me?",
    a: `Ask me for a free market analysis. I will show you the realistic sale price and walk through the costs so you see your estimated net, with no obligation. Call or text ${BRAND.phoneDisplay} or request it online.`,
  },
];

export default function CommissionPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageHero
        eyebrow="Straight answers · Commission"
        title="What sellers actually pay in"
        italic="Michigan"
        subtitle="Honest answers about listing commission, with none of the dodging. Commission is negotiable, and you deserve to know exactly what you are paying for."
        cta={{ href: "/home-value", label: "Get my free net-proceeds estimate" }}
      />
      <ArticleBody blocks={BLOCKS} />
      <GuaranteePledge />
      <FaqSection items={FAQ_ITEMS} eyebrow="Commission questions" heading="The honest commission FAQ" />
      <FinalCTA
        heading="Want the real numbers on your sale?"
        sub="I will show you the likely sale price, the costs, and your estimated net, before you owe me a thing."
      />
    </>
  );
}
