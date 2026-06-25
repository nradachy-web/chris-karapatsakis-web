import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProcessTrack from "@/components/sections/ProcessTrack";
import SellerGets from "@/components/sections/SellerGets";
import CMASection from "@/components/sections/CMASection";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import FinalCTA from "@/components/sections/FinalCTA";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.howISell.title,
  description: SEO.howISell.description,
  alternates: { canonical: "/how-i-sell-your-home" },
  openGraph: { title: SEO.howISell.title, description: SEO.howISell.description, url: "/how-i-sell-your-home" },
};

export default function HowISellPage() {
  return (
    <>
      <PageHero
        eyebrow="The process"
        title="How I actually sell"
        italic="your home"
        subtitle="No fluff, no mystery. Just the steps that get you sold for the most the market will pay, with the honesty and speed that have defined nearly 30 years of my work."
        cta={{ href: "/home-value", label: "Start with the real number" }}
      />
      <ProcessTrack tone="dark" />
      <SellerGets />
      <GuaranteePledge />
      <CMASection source="how-i-sell" />
      <FinalCTA />
    </>
  );
}
