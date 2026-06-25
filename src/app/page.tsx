import Hero from "@/components/sections/Hero";
import StatRibbon from "@/components/sections/StatRibbon";
import CMASection from "@/components/sections/CMASection";
import CinematicBand from "@/components/sections/CinematicBand";
import TwoQuestions from "@/components/sections/TwoQuestions";
import SellerGets from "@/components/sections/SellerGets";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import WhyChris from "@/components/sections/WhyChris";
import ProcessTrack from "@/components/sections/ProcessTrack";
import SocialProof from "@/components/sections/SocialProof";
import OfficeSection from "@/components/sections/OfficeSection";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { FAQ } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Hero />
      <StatRibbon />
      <CMASection source="home" />
      <CinematicBand
        image="/scenes/brand-street.jpg"
        video="/video/brand-street.mp4"
        eyebrow="Wayne · Oakland · Livingston"
        title="Nearly 30 years on these streets."
        sub="I have not parachuted in from a downtown brokerage. I have sold homes block by block across Metro Detroit for almost three decades, and I know what yours is worth."
        cta={{ href: "/areas", label: "See your town" }}
      />
      <TwoQuestions />
      <SellerGets />
      <GuaranteePledge />
      <WhyChris />
      <ProcessTrack />
      <SocialProof />
      <OfficeSection tone="vellum" />
      <ServiceAreas />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
