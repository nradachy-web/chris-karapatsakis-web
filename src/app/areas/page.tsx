import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FinalCTA from "@/components/sections/FinalCTA";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.areas.title,
  description: SEO.areas.description,
  alternates: { canonical: "/areas" },
  openGraph: { title: SEO.areas.title, description: SEO.areas.description, url: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where I sell"
        title="The towns I know"
        italic="street by street"
        subtitle="I focus on four communities where I have sold homes for nearly 30 years, across Wayne, Oakland and Washtenaw counties. Pick yours for local market data and a free home valuation."
      />
      <ServiceAreas />
      <FinalCTA />
    </>
  );
}
