import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ValuationForm from "@/components/forms/ValuationForm";
import GuaranteePledge from "@/components/sections/GuaranteePledge";
import CallLink from "@/components/ui/CallLink";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { SEO, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: SEO.contact.title, description: SEO.contact.description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Reach Chris"
        italic="directly"
        subtitle="You will get me, not a call center. Call or text anytime, or send your address for a free market analysis and I will get back to you, usually within the hour."
      />

      <section className="section-tight bg-paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SmartImage
                src="/images/office-day.jpg"
                alt="Chris Karapatsakis Real Estate office at 44245 Ford Rd, Canton MI"
                ratio="aspect-[16/10]"
                className="mb-6 shadow-[var(--shadow-card)]"
                fallbackLabel="Office on Ford Rd"
              />
              <div className="space-y-4">
                <CallLink
                  where="contact-page"
                  className="flex items-center gap-4 rounded-lg border border-[var(--line-ink)] bg-card p-5 transition-colors hover:border-clay/60"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                    <Phone className="h-5 w-5 text-clay-deep" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ash">
                      Call or text
                    </span>
                    <span className="font-display text-[1.3rem] text-ink tnum">{BRAND.phoneDisplay}</span>
                  </span>
                </CallLink>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 rounded-lg border border-[var(--line-ink)] bg-card p-5 transition-colors hover:border-clay/60"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                    <Mail className="h-5 w-5 text-clay-deep" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ash">
                      Email
                    </span>
                    <span className="text-[1.05rem] text-ink">{BRAND.email}</span>
                  </span>
                </a>

                <a
                  href={BRAND.office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-[var(--line-ink)] bg-card p-5 transition-colors hover:border-clay/60"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                    <MapPin className="h-5 w-5 text-clay-deep" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ash">
                      Office
                    </span>
                    <span className="text-[1.05rem] text-ink">{BRAND.office.full}</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-lg border border-[var(--line-ink-soft)] bg-vellum/50 p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                    <Clock className="h-5 w-5 text-clay-deep" />
                  </span>
                  <span className="text-[0.95rem] text-stone">
                    I respond personally, usually within the hour. Call or text anytime.
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <GuaranteePledge compact />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ValuationForm source="contact" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
