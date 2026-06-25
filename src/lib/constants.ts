// ============================================================
// Chris Karapatsakis - Canton MI Listing Agent
// Single source of truth for copy + data.
//
// HONESTY BRAND RULES (do not break):
//  - No fabricated reviews, press, or unlabeled figures.
//  - Self-reported numbers are labeled as his own claim.
//  - No em dashes in copy (use commas / periods / parentheses).
//  - Items tagged GATE in comments need written client confirmation
//    before they are true-to-life. They are wired so Nick can flip them.
// ============================================================

export const SITE_URL = "https://chriskarapatsakis.com";

// ---- form + tracking backends (Nick fills these before launch) ----
// Web3Forms access key for the CMA lead form. The form degrades gracefully
// (logs the lead) until a real key replaces this placeholder.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

// Google Ads + GA4. Empty = no tags rendered. Provide AW-XXXX / G-XXXX to wire.
export const ANALYTICS = {
  adsId: process.env.NEXT_PUBLIC_ADS_ID || "", // e.g. "AW-1234567890"
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "", // e.g. "G-XXXXXXXXXX"
  // conversion send_to labels, e.g. "AW-123/abcDEFgh"
  cmaConversionSendTo: process.env.NEXT_PUBLIC_ADS_CMA_SENDTO || "",
  callConversionSendTo: process.env.NEXT_PUBLIC_ADS_CALL_SENDTO || "",
} as const;

// ============================================================
// BRAND / NAP  (NAP must stay identical everywhere + in schema + GBP)
// ============================================================
export const BRAND = {
  name: "Chris Karapatsakis",
  legalFirst: "Christo", // legal / MLS first name, used once on About + schema alternateName
  // GATE(REALTOR): only render the REALTOR mark if NAR membership is confirmed.
  // Research lists him as an NAR member; flip to false to fall back to
  // "licensed real estate agent" everywhere.
  isRealtor: true,
  roleShort: "Canton Listing Agent",
  roleLong: "Listing Specialist serving Wayne, Oakland and Livingston Counties",

  // Real headshot in place (387x413, from his Remerica/Zillow profile). A higher
  // resolution original from Chris would render even sharper at large sizes.
  hasHeadshot: true,

  // GATE(PHONE): client-provided lead line. Appears on zero public records.
  phoneDisplay: "(734) 634-7056",
  phoneTel: "+17346347056",
  email: "Chrisremerica@yahoo.com",

  // GATE(OFFICE): client-provided current working office (his own suite, NOT a
  // labeled Remerica branch). Use as his office; the brokerage of record is the
  // Canton Center Rd address in COMPLIANCE below.
  office: {
    street: "44245 Ford Rd, Ste 101",
    city: "Canton",
    state: "MI",
    zip: "48187",
    full: "44245 Ford Rd, Ste 101, Canton, MI 48187",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=44245+Ford+Rd+Ste+101+Canton+MI+48187",
  },

  brokerage: "Remerica Hometown III",
  languages: ["English", "Arabic"], // GATE(LANG): confirm Arabic before featuring
  // GATE(LICENSE): optional in MI. Pull from val.apps.lara.state.mi.us if wanted.
  licenseNumber: "",

  counties: ["Wayne", "Oakland", "Livingston"],
  specialtyCities: ["Canton", "Plymouth", "Northville", "South Lyon"],

  awards: [
    { name: "Real Estate All Star", by: "Hour Detroit / DBusiness", year: "2015" },
    { name: "Million Dollar Agent", by: "Remerica", year: "2024 to 2025" },
  ],

  social: {
    zillow: "https://www.zillow.com/profile/chris-karapatsakis/",
    linkedin: "https://www.linkedin.com/in/chris-karapatsakis-98842828/",
    facebook: "https://www.facebook.com/chriskrealtor1/",
    homelight: "https://www.homelight.com/agents/christo-karapatsakis-mi-6501294146",
  },
} as const;

export function titleSuffix(): string {
  return BRAND.isRealtor ? "REALTOR®" : "Licensed Real Estate Agent";
}

// ============================================================
// COMPLIANCE  (footer + legal disclosures, MCL 339.2512e)
// ============================================================
export const COMPLIANCE = {
  // GATE(BROKER ENTITY): confirm exact LARA-registered entity name.
  brokerName: "Remerica Hometown III",
  brokerStreet: "6231 N Canton Center Rd, Ste 106",
  brokerCityStateZip: "Canton, MI 48187",
  brokerPhoneDisplay: "(734) 459-9898",
  licensedStatus:
    "Chris Karapatsakis is a licensed real estate salesperson with Remerica Hometown III.",
  // No em dashes; mirrors the listing paperwork.
  guaranteeClarifier:
    "Easy-Exit cancels the listing agreement at your request with no cancellation fee. It does not waive a commission if you sell to a buyer Chris introduced during the listing. Commissions are negotiable. Full written terms are provided before signing.",
  equalHousing: "Equal Housing Opportunity",
  fairHousingNote:
    "All real estate services are offered without regard to race, color, religion, sex, disability, familial status, or national origin.",
  copyright: `© ${2026} Chris Karapatsakis. All rights reserved.`,
} as const;

// ============================================================
// NAV
// ============================================================
export const NAV_LINKS = [
  { href: "/home-value", label: "Home Value" },
  { href: "/how-i-sell-your-home", label: "How I Sell" },
  { href: "/seller-guarantee", label: "Guarantee" },
  { href: "/reviews", label: "Reviews" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
] as const;

export const CTA = {
  primary: "Get My Free Market Analysis",
  primaryShort: "Free Market Analysis",
  call: "Call or Text Chris",
} as const;

// ============================================================
// HERO  (homepage)
// ============================================================
export const HERO = {
  eyebrow: "Canton · Plymouth · Northville · South Lyon",
  // h1 with an italic emphasis span
  headline: {
    lead: "What is your home ",
    italic: "really worth",
    rest: ", and how fast will it sell?",
  },
  sub: "Straight answers from Canton's veteran listing agent. Nearly 30 years selling homes across Wayne, Oakland and Livingston. A free market analysis, a home warranty for every seller, and your listing back if you are ever unhappy.",
  ctaPrimary: CTA.primary,
  ctaSecondary: "Or call or text Chris",
  trust: "Free, no obligation. I personally respond, usually within the hour.",
} as const;

// ============================================================
// STAT RIBBON  (homepage, defensible figures only)
// ============================================================
export const STAT_RIBBON = [
  { value: "Nearly 30 Years", label: "Selling homes across Metro Detroit" },
  { value: "Hundreds of Homes", label: "Closed for Wayne, Oakland and Livingston families" },
  { value: "Sellers Only", label: "A listing specialist, in your corner alone" },
  { value: "Free Home Warranty", label: "Included for every seller I represent" },
] as const;

// Sourced, attributed proof stats (About + Reviews pages)
export const PROOF_STATS = [
  { value: "700+", label: "Career transactions", source: "HomeLight" },
  { value: "~84%", label: "Of his work is representing sellers", source: "HomeLight" },
  { value: "Top 7%", label: "Of agents in Plymouth", source: "HomeLight" },
  { value: "5.0", label: "Client rating", source: "Zillow, 1 review" },
] as const;

// ============================================================
// THE TWO QUESTIONS  (his stated top-2 seller questions)
// ============================================================
export const TWO_QUESTIONS = {
  heading: "The two questions every seller asks me",
  intro:
    "After nearly 30 years, I hear the same two first. I will answer both straight, before you ever sign anything.",
  cards: [
    {
      q: "How long will it take to sell my house?",
      teaser:
        "It comes down to price. Well-priced homes in this market are still moving in weeks, not months. I will show you the real days-on-market numbers for your town, no sugar-coating.",
      href: "/how-long-to-sell-house-michigan",
      cta: "See days-on-market by city",
    },
    {
      q: "How much is your commission?",
      teaser:
        "In Michigan, commission is always negotiable, and I will tell you exactly what it covers. Most agents dodge this question. I would rather you hear it from me first.",
      href: "/realtor-commission-michigan",
      cta: "How commission works",
    },
  ],
} as const;

// ============================================================
// THE GUARANTEE  (signature element, compliance-approved wording)
// ============================================================
export const GUARANTEE = {
  name: "The Easy-Exit Listing Guarantee",
  promise:
    "If you are ever unhappy with my service, just tell me and I will cancel your listing. No questions asked, no cancellation fee.",
  fine:
    "Cancellations are processed through my brokerage, Remerica Hometown III. Ask me for the simple written terms before you sign.",
  carveout: COMPLIANCE.guaranteeClarifier,
  signature: "Chris Karapatsakis",
} as const;

// ============================================================
// WHY CHRIS  (differentiators, each with a concrete proof point)
// ============================================================
export const WHY_CHRIS = {
  heading: "Why sellers choose Chris",
  reasons: [
    {
      icon: "Clock",
      title: "I answer, fast",
      body: "You get me, not a call center. I personally respond to sellers usually within the hour. Quick answers are how good deals get protected.",
    },
    {
      icon: "MessageSquareQuote",
      title: "I will not sugar-coat it",
      body: "If your price is wrong or a repair will cost you at the table, I will tell you plainly. Honest beats comfortable when your equity is on the line.",
    },
    {
      icon: "Handshake",
      title: "I negotiate hard for your bottom line",
      body: "Representing sellers is nearly all I do. That focus shows up in the number on your closing statement, where it counts.",
    },
    {
      icon: "ShieldCheck",
      title: "Your listing is never a trap",
      body: "Every listing comes with the Easy-Exit Guarantee and a free home warranty. If you are unhappy, you walk. The risk is on me, not you.",
    },
  ],
} as const;

// ============================================================
// WHAT EVERY SELLER GETS
// ============================================================
export const SELLER_GETS = {
  heading: "What every seller gets, before paying a cent",
  items: [
    {
      icon: "LineChart",
      title: "A real market analysis (CMA)",
      body: "Not a Zestimate. A true comparative market analysis on your home, based on what comparable homes near you actually sold for, so you list at the right number from day one.",
    },
    {
      icon: "BadgeCheck",
      title: "A home warranty, on me",
      body: "I provide a home warranty for every seller I list. It protects you while your home is on the market and gives buyers confidence in the house.",
    },
    {
      icon: "Megaphone",
      title: "Marketing that gets the showings",
      body: "Professional listing presentation, MLS syndication, and the exposure your home needs to reach the buyers who will pay the most for it.",
    },
    {
      icon: "ScrollText",
      title: "The Easy-Exit Guarantee",
      body: "Unhappy at any point? Tell me and I will cancel the listing. No questions asked, no cancellation fee.",
    },
  ],
} as const;

// ============================================================
// HOW I SELL  (process, E-E-A-T)
// ============================================================
export const PROCESS = {
  heading: "How I sell your home",
  intro:
    "A straight path from our first conversation to the closing table. No fluff, no surprises, just the steps that get you sold for the most the market will pay.",
  steps: [
    {
      title: "The honest conversation",
      body: "We sit down and I learn your home, your timeline, and your goal. You get a clear read on the market and an answer to both of your big questions, days to sell and commission, up front.",
    },
    {
      title: "The right number",
      body: "I run a full market analysis and price your home where it sells fast and nets you the most. Priced right is the single biggest factor in how quickly your home moves.",
    },
    {
      title: "Listed and marketed",
      body: "We prep, photograph, and launch your listing with the warranty in place. Your home hits the MLS and the major portals where ready buyers are looking.",
    },
    {
      title: "The negotiation",
      body: "When offers come in, I negotiate hard on price, terms, and contingencies. This is where decades of reps pay you back, line by line.",
    },
    {
      title: "Straight to closing",
      body: "I manage inspections, appraisal, and paperwork so nothing derails the deal. You get to the table on time, with the number we set out to get.",
    },
  ],
} as const;

// ============================================================
// SOCIAL PROOF
// ============================================================
// The ONLY real public testimonial. Reproduce verbatim, ellipsis included.
export const REVIEW = {
  quote:
    "Chris has helped me to buy and rent my houses. He is very professional and has deep understanding of the market in Detroit Metro area. It is always a pleasure to work wit…",
  attribution: "Verified Zillow review, 5.0 stars",
  context: "Northville, MI client, 2017",
  source: BRAND.social.zillow,
} as const;

// Real, sourced recent sales (seller side). Area + price, no street addresses.
export const RECENT_SALES = [
  { area: "Northville", zip: "48168", price: "$1,450,000", detail: "5 bd · 4 ba · 5,198 sqft", note: "Luxury, seller represented" },
  { area: "Canton", zip: "48188", price: "$700,000", detail: "Single family · closed 2024", note: "Seller represented" },
  { area: "Canton", zip: "48188", price: "$600,000", detail: "Single family · closed 2024", note: "Seller represented" },
  { area: "Canton", zip: "48187", price: "$330,000", detail: "Condo · 2 bd · 2 ba", note: "Seller represented" },
  { area: "Canton", zip: "48187", price: "$260,000", detail: "Condo · 2 bd · 3 ba", note: "Seller represented" },
  { area: "Westland", zip: "48186", price: "$185,000", detail: "Single family", note: "Seller represented" },
] as const;

export const SALES_SPAN_NOTE =
  "Recent sold homes range from condos near $165K to a $1.45M Northville luxury home. A sample of recent closings, not a complete list.";

// Real press only (verified)
export const PRESS = [
  { name: "Hour Detroit", note: "Real Estate All Star" },
  { name: "DBusiness", note: "Real Estate All Star" },
  { name: "U.S. News", note: "Featured agent profile" },
] as const;

// ============================================================
// CITIES  (real market data, mid-2026, refresh quarterly)
// ============================================================
export interface CityData {
  slug: string; // route segment: sell-your-home-<slug>-mi
  name: string;
  county: string;
  zips: string[];
  medianPrice: string;
  daysOnMarket: string;
  marketLabel: string;
  marketLine: string; // one honest sentence about the local market
  neighborhoods: string[];
  blurb: string;
  isHomeBase?: boolean;
}

export const CITIES: CityData[] = [
  {
    slug: "canton",
    name: "Canton",
    county: "Wayne County",
    zips: ["48187", "48188"],
    medianPrice: "~$415,000",
    daysOnMarket: "~32 days",
    marketLabel: "Balanced market",
    marketLine:
      "Canton is steady, and homes are sitting a little longer than they did a year ago. That makes pricing the difference between a fast sale and a stale listing, which is exactly where a real market analysis earns its keep.",
    neighborhoods: [
      "Heritage Park",
      "Sunflower",
      "Central Park Estates",
      "Carriage Hills",
      "Arbor Village",
      "Ashton Woods",
      "Autumn Ridge",
      "Pheasant View",
      "Cherry Hill Village",
    ],
    blurb:
      "Canton is home base. I have sold homes on these streets for nearly three decades, from condos near Ford Road to the larger colonials south of Cherry Hill.",
    isHomeBase: true,
  },
  {
    slug: "plymouth",
    name: "Plymouth",
    county: "Wayne County",
    zips: ["48170"],
    medianPrice: "~$515,000",
    daysOnMarket: "~22 days",
    marketLabel: "Strong seller's market",
    marketLine:
      "Plymouth is one of the tightest markets in the area. Well-presented homes near downtown are selling close to asking and fast. If you have thought about selling, this is a strong window.",
    neighborhoods: [
      "Downtown Plymouth",
      "Lake Pointe",
      "Trailwood",
      "Plymouth Hills",
      "Bradbury",
      "Ridgewood Hills",
      "Palmer Acres",
    ],
    blurb:
      "Plymouth buyers pay a premium for the downtown lifestyle. I price and market your home to capture it. HomeLight ranks me in the top 7% of agents in Plymouth.",
  },
  {
    slug: "northville",
    name: "Northville",
    county: "Wayne and Oakland Counties",
    zips: ["48167", "48168"],
    medianPrice: "~$580,000",
    daysOnMarket: "~30 days",
    marketLabel: "Premium market",
    marketLine:
      "Northville spans charming in-town homes to luxury estates, and pricing a higher-end home correctly is its own skill. Overprice it and it sits. I have sold here at every level, including a recent $1.45M close.",
    neighborhoods: [
      "Downtown Northville",
      "Highland Lakes",
      "Country Club Village",
      "Northville Hills",
      "Steeplechase",
      "Connemara Hills",
      "Lexington Commons",
      "Whipple Estates",
    ],
    blurb:
      "Northville rewards a careful pricing strategy and real marketing. My most recent luxury sale here closed at $1,450,000, seller represented.",
  },
  {
    slug: "south-lyon",
    name: "South Lyon",
    county: "Oakland and Livingston Counties",
    zips: ["48178"],
    medianPrice: "~$395,000",
    daysOnMarket: "~20 days",
    marketLabel: "Fast seller's market",
    marketLine:
      "South Lyon has tightened up dramatically. Homes that used to take two months are now selling in about three weeks. Speed like that is good news for sellers who price and present right.",
    neighborhoods: [
      "Downtown and Historic District",
      "Pinehurst",
      "Hidden Creek",
      "Trailside at Mill River",
      "Abbey Knoll",
      "Arcadia Ridge",
      "Maple Creek",
      "Colonial Acres",
    ],
    blurb:
      "South Lyon is moving fast right now. I will help you use that momentum instead of guessing at it.",
  },
];

export const CITY_DATA_NOTE =
  "Market figures are approximate and reflect mid-2026 local data. They move month to month. Ask me for the current numbers on your exact street.";

// ============================================================
// FAQ  (home + reusable)
// ============================================================
export const FAQ = [
  {
    q: "How long will it take to sell my house?",
    a: "It depends mostly on price and condition, not luck. In our area, well-priced homes are still selling in roughly three to five weeks, and some go faster. The fastest way to a slow sale is overpricing out of the gate. I will show you the real days-on-market numbers for your town and price your home to move.",
  },
  {
    q: "How much is your commission?",
    a: "In Michigan, real estate commission is always negotiable, and it is never a fixed legal rate. I will explain exactly what my fee covers, from marketing to negotiation to managing your closing, and we will agree on terms in writing before anything is listed. Most agents avoid this question. I would rather you hear it straight from me.",
  },
  {
    q: "What is the Easy-Exit Listing Guarantee?",
    a: "It is simple. If you are ever unhappy with my service, you tell me and I cancel your listing. No questions asked and no cancellation fee. Cancellations are handled through my brokerage, Remerica Hometown III, and I will give you the written terms before you sign. It means the risk of listing with me is on me, not you.",
  },
  {
    q: "Do you really give a home warranty to every seller?",
    a: "Yes. I provide a home warranty for every seller I list. It protects you while the home is on the market and gives buyers added confidence in the house, which helps it sell. Ask me for the specifics of the plan when we meet.",
  },
  {
    q: "Do you work with buyers, or only sellers?",
    a: "I am a listing specialist. The vast majority of my work is representing sellers, and that is where my focus and negotiating leverage are sharpest. If you are selling, you want an agent who lives on your side of the table.",
  },
  {
    q: "What areas do you serve?",
    a: "I sell homes across Wayne, Oakland, and Livingston counties, and I specialize in Canton, Plymouth, Northville, and South Lyon. If your home is in or near these communities, call or text me at (734) 634-7056 and we will talk.",
  },
  {
    q: "What is the first step?",
    a: "A free, no-obligation market analysis. Tell me about your home and I will put together the real number, what it should list for and what you can expect to net, with no pressure to do anything next. Start online or call me at (734) 634-7056.",
  },
] as const;

// ============================================================
// FINAL CTA
// ============================================================
export const FINAL_CTA = {
  heading: "Find out what your home is really worth",
  sub: "Get a free market analysis from an agent who has sold homes here for nearly 30 years. No pressure, no obligation, and the straight numbers either way.",
} as const;

// ============================================================
// SEO  (title + description per page)
// ============================================================
export const SEO = {
  home: {
    title: "Chris Karapatsakis · Canton MI Listing Agent | Sell Your Home",
    description:
      "Veteran Canton listing agent, nearly 30 years. Free market analysis, a home warranty for every seller, and a no-questions-asked listing guarantee. Serving Canton, Plymouth, Northville and South Lyon.",
  },
  homeValue: {
    title: "What's My Home Worth? Free Market Analysis (Not a Zestimate)",
    description:
      "Get the real number from a 30-year listing pro, not an algorithm. A free, no-obligation home valuation for Canton, Plymouth, Northville and South Lyon sellers.",
  },
  guarantee: {
    title: "The Easy-Exit Listing Guarantee | Cancel Anytime, No Fee",
    description:
      "Unhappy with your listing agent? Cancel your listing, no questions asked, no fee. Plus a free home warranty for every seller. Chris Karapatsakis, Canton MI.",
  },
  howISell: {
    title: "How I Sell Your Home | Pricing, Marketing and Hard Negotiation",
    description:
      "The straight path from first conversation to closing. How a nearly-30-year Canton listing agent prices, markets, and negotiates your home sale.",
  },
  commission: {
    title: "Realtor Commission in Michigan | What Sellers Actually Pay",
    description:
      "Honest answers on listing commission in Michigan. It is negotiable. What it covers, how to weigh fee against value, from a veteran Canton listing agent.",
  },
  daysToSell: {
    title: "How Long to Sell a House in Canton, Plymouth, Northville & South Lyon",
    description:
      "Real days-on-market data for Canton, Plymouth, Northville and South Lyon, and why well-priced homes sell fastest. From listing agent Chris Karapatsakis.",
  },
  reviews: {
    title: "Reviews | Chris Karapatsakis, Canton MI Listing Agent",
    description:
      "What sellers say, recent sold homes, and the press. An honest look at nearly 30 years of selling homes across Metro Detroit.",
  },
  about: {
    title: "About Chris (Christo) Karapatsakis | Canton MI Listing Agent",
    description:
      "Nearly 30 years, hundreds of homes sold, the vast majority seller-side. Real Estate All Star (Hour Detroit/DBusiness). Serving Wayne, Oakland and Livingston.",
  },
  contact: {
    title: "Contact Chris Karapatsakis | Canton MI Listing Agent",
    description:
      "Call or text Chris at (734) 634-7056 or request a free market analysis. Listing homes across Canton, Plymouth, Northville and South Lyon.",
  },
  areas: {
    title: "Areas I Serve | Canton, Plymouth, Northville & South Lyon Listing Agent",
    description:
      "Selling a home in Canton, Plymouth, Northville or South Lyon? Local market data and a free home valuation from a nearly-30-year listing specialist.",
  },
} as const;

// City page SEO is generated from CityData in the page file.
