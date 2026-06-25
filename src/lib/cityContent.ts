import { type CityData, BRAND } from "./constants";

/** Per-city title + meta description for the landing pages. */
export const CITY_SEO: Record<string, { title: string; description: string }> = {
  canton: {
    title: "Sell Your Home in Canton, MI | Top Listing Agent",
    description:
      "Canton's veteran listing specialist. Live market stats, a free CMA, a home warranty for every seller, and the Easy-Exit guarantee. Heritage Park, Sunflower, Cherry Hill and more.",
  },
  plymouth: {
    title: "Sell Your Home in Plymouth, MI | Top Listing Agent",
    description:
      "Plymouth listing specialist in a strong seller's market, about 22 days on market. Free home valuation, honest pricing, and hard negotiation. Top 7% of agents in Plymouth.",
  },
  northville: {
    title: "Sell Your Home in Northville, MI | Luxury Listing Agent",
    description:
      "Northville listing pro for 48167 and 48168. Premium pricing strategy, a free CMA, a home warranty for every seller, and the Easy-Exit guarantee.",
  },
  "south-lyon": {
    title: "Sell Your Home in South Lyon, MI | Top Listing Agent",
    description:
      "South Lyon homes are selling fast, about 20 days on market. Free market analysis, a home warranty for every seller, and a no-risk listing guarantee.",
  },
};

/** City-specific FAQ used for on-page content + FAQPage schema. */
export function cityFaqs(city: CityData): { q: string; a: string }[] {
  return [
    {
      q: `How long will it take to sell my house in ${city.name}?`,
      a: `Right now, ${city.name} homes are averaging about ${city.daysOnMarket.replace("~", "")} on the market, in a ${city.marketLabel.toLowerCase()}. ${city.marketLine} The single biggest factor is pricing, which is why I start every ${city.name} listing with a real market analysis.`,
    },
    {
      q: `What is my home worth in ${city.name}, MI?`,
      a: `The ${city.name} median sale price is around ${city.medianPrice.replace("~", "")}, but your home is not the median. I will give you a free comparative market analysis based on what comparable homes near you actually sold for, not a Zestimate. Call or text me at ${BRAND.phoneDisplay} or request it online.`,
    },
    {
      q: `What ${city.name} neighborhoods do you sell in?`,
      a: `I sell throughout ${city.name}, including ${city.neighborhoods.slice(0, 5).join(", ")}, and the surrounding ${city.county} area. After nearly 30 years I know how pricing and demand shift street to street here.`,
    },
    {
      q: `Do you only represent sellers in ${city.name}?`,
      a: `The vast majority of my work is representing sellers, and that focus is exactly what you want when you list. In ${city.name}, that means sharp pricing, real marketing, and hard negotiation on your behalf, plus a free home warranty and my Easy-Exit Guarantee on every listing.`,
    },
  ];
}
