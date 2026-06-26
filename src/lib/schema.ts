// JSON-LD builders. aggregateRating reflects the REAL Google Business Profile
// (5.0 from 14 reviews), with a few verbatim Review nodes.
import { BRAND, COMPLIANCE, SITE_URL, GOOGLE, GOOGLE_REVIEWS, type CityData } from "./constants";

const brokerOrg = {
  "@type": "RealEstateAgent",
  name: COMPLIANCE.brokerName,
  telephone: COMPLIANCE.brokerPhoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPLIANCE.brokerStreet,
    addressLocality: "Canton",
    addressRegion: "MI",
    postalCode: "48187",
    addressCountry: "US",
  },
};

export function agentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#agent`,
    name: BRAND.name,
    alternateName: `${BRAND.legalFirst} Karapatsakis`,
    description:
      "Veteran listing agent serving Canton, Plymouth, Northville and South Lyon, Michigan. Free market analysis, a home warranty for every seller, and a no-questions-asked listing guarantee.",
    url: SITE_URL,
    image: `${SITE_URL}/images/chris-headshot.jpg`,
    telephone: BRAND.phoneTel,
    email: `mailto:${BRAND.email}`,
    knowsLanguage: ["en", "ar"],
    areaServed: [
      ...BRAND.specialtyCities.map((c) => ({ "@type": "City", name: `${c}, MI` })),
      ...BRAND.counties.map((c) => ({ "@type": "AdministrativeArea", name: `${c} County, MI` })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.office.street,
      addressLocality: BRAND.office.city,
      addressRegion: BRAND.office.state,
      postalCode: BRAND.office.zip,
      addressCountry: "US",
    },
    worksFor: brokerOrg,
    memberOf: brokerOrg,
    award: BRAND.awards.map((a) => `${a.name} (${a.by}, ${a.year})`),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE.rating,
      reviewCount: GOOGLE.count,
      bestRating: "5",
    },
    review: GOOGLE_REVIEWS.slice(0, 4).map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
    })),
    sameAs: [
      BRAND.social.zillow,
      BRAND.social.linkedin,
      BRAND.social.facebook,
      BRAND.social.homelight,
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/about/#person`,
    name: BRAND.name,
    alternateName: `${BRAND.legalFirst} Karapatsakis`,
    jobTitle: "Real Estate Listing Specialist",
    worksFor: brokerOrg,
    telephone: BRAND.phoneTel,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/chris-headshot.jpg`,
    knowsLanguage: ["en", "ar"],
  };
}

export function cityAgentJsonLd(city: CityData, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `${BRAND.name}, ${city.name} Listing Agent`,
    url: `${SITE_URL}${path}`,
    telephone: BRAND.phoneTel,
    image: `${SITE_URL}/images/chris-headshot.jpg`,
    areaServed: { "@type": "City", name: `${city.name}, MI` },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.office.street,
      addressLocality: BRAND.office.city,
      addressRegion: BRAND.office.state,
      postalCode: BRAND.office.zip,
      addressCountry: "US",
    },
    parentOrganization: brokerOrg,
  };
}

export function faqJsonLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
