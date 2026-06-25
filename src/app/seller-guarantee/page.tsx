import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import ArticleBody, { type Block } from "@/components/sections/ArticleBody";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { SEO, GUARANTEE, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.guarantee.title,
  description: SEO.guarantee.description,
  alternates: { canonical: "/seller-guarantee" },
  openGraph: { title: SEO.guarantee.title, description: SEO.guarantee.description, url: "/seller-guarantee" },
};

const BLOCKS: Block[] = [
  {
    h2: "Why I put the risk on me",
    p: "Most listing agreements lock you in for months whether you are happy or not. I have never understood that. If I am doing my job, you will not want to leave. If I am not, you should be able to walk without a fight. So that is exactly how I do it.",
  },
  {
    h2: "How the Easy-Exit Guarantee works",
    list: [
      "List your home with me with confidence, not a long-term trap",
      "If at any point you are unhappy with my service, you simply tell me",
      "I cancel your listing. No questions asked, and no cancellation fee",
      "Cancellations are processed through my brokerage, Remerica Hometown III",
      "You get the simple written terms before you ever sign, so there are no surprises",
    ],
  },
  {
    h2: "And a home warranty on top of it",
    p: "Every seller I list also gets a home warranty, on me, while the home is on the market. It protects you during the listing period and gives buyers added confidence in the house, which helps it sell. Ask me for the plan specifics when we talk.",
    note: GUARANTEE.carveout,
  },
];

const FAQ_ITEMS = [
  {
    q: "Is there really no cancellation fee?",
    a: "That is the promise. If you are unhappy with my service, I cancel the listing with no questions asked and no cancellation fee. Cancellations go through my brokerage, Remerica Hometown III, and you get the written terms before signing.",
  },
  {
    q: "Is there any catch to the guarantee?",
    a: "It is straightforward. Easy-Exit cancels the listing agreement at your request with no cancellation fee. It does not waive a commission if you sell to a buyer I personally introduced during the listing. You get the full written terms before you sign.",
  },
  {
    q: "Do I also get the home warranty if I list with you?",
    a: "Yes. Every seller I represent gets a home warranty while the home is listed, on me. Ask me for the specifics of the plan when we meet.",
  },
  {
    q: "How do I get started?",
    a: `Start with a free market analysis. There is no obligation, and you will see the guarantee and warranty terms before anything is signed. Call or text ${BRAND.phoneDisplay} or request it online.`,
  },
];

export default function GuaranteePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <PageHero
        eyebrow="A no-risk listing"
        title="Unhappy? Cancel anytime,"
        italic="no questions asked."
        subtitle="The Easy-Exit Listing Guarantee. If I am not earning your business, you should be free to walk. Here is exactly how it works, in writing."
        cta={{ href: "/home-value", label: "Start with a free market analysis" }}
      />
      <GuaranteePledge showCta={false} />
      <ArticleBody blocks={BLOCKS} />
      <FaqSection items={FAQ_ITEMS} eyebrow="Guarantee questions" heading="The guarantee, answered" />
      <FinalCTA />
    </>
  );
}
