import type { Metadata } from "next";
import CityTemplate from "@/components/sections/CityTemplate";
import JsonLd from "@/components/JsonLd";
import { cityAgentJsonLd, faqJsonLd } from "@/lib/schema";
import { cityFaqs, CITY_SEO } from "@/lib/cityContent";
import { CITIES } from "@/lib/constants";

const SLUG = "northville";
const PATH = "/sell-your-home-northville-mi";
const city = CITIES.find((c) => c.slug === SLUG)!;

export const metadata: Metadata = {
  title: CITY_SEO[SLUG].title,
  description: CITY_SEO[SLUG].description,
  alternates: { canonical: PATH },
  openGraph: { title: CITY_SEO[SLUG].title, description: CITY_SEO[SLUG].description, url: PATH },
};

export default function Page() {
  return (
    <>
      <JsonLd data={cityAgentJsonLd(city, PATH)} />
      <JsonLd data={faqJsonLd(cityFaqs(city))} />
      <CityTemplate city={city} />
    </>
  );
}
