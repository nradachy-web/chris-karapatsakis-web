import Link from "next/link";
import { MapPin, TrendingUp, CalendarClock, ArrowRight } from "lucide-react";
import { type CityData, CITY_DATA_NOTE, SELLER_GETS } from "@/lib/constants";
import { cityFaqs } from "@/lib/cityContent";
import PageHero from "./PageHero";
import GuaranteePledge from "./GuaranteePledge";
import FaqSection from "./FaqSection";
import FinalCTA from "./FinalCTA";
import ValuationForm from "@/components/forms/ValuationForm";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

const VIDEO_CITIES = new Set(["plymouth", "northville"]);

export default function CityTemplate({ city }: { city: CityData }) {
  const faqs = cityFaqs(city);

  return (
    <>
      <PageHero
        eyebrow={`${city.county} · Listing Specialist`}
        title={`Sell your home in ${city.name}, MI`}
        subtitle={city.blurb}
        cta={{ href: "/home-value", label: `Get my free ${city.name} market analysis` }}
        image={`/scenes/${city.slug}.jpg`}
        video={VIDEO_CITIES.has(city.slug) ? `/video/${city.slug}.mp4` : undefined}
      />

      {/* market snapshot + form */}
      <section className="section-tight bg-paper">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="record-label">The {city.name} market right now</span>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: TrendingUp, label: "Median sale price", value: city.medianPrice },
                  { icon: CalendarClock, label: "Avg days on market", value: city.daysOnMarket },
                  { icon: MapPin, label: "Conditions", value: city.marketLabel },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-[var(--line-ink)] bg-card p-4">
                    <m.icon className="h-4 w-4 text-clay-deep" strokeWidth={1.7} aria-hidden />
                    <p className="mt-3 font-display text-[1.15rem] leading-tight text-ink tnum">{m.value}</p>
                    <p className="mt-1 text-[0.68rem] leading-tight text-ash">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[1rem] leading-relaxed text-stone pretty">{city.marketLine}</p>

              <div className="mt-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ash">
                  Neighborhoods I sell in
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="rounded-pill border border-[var(--line-ink)] bg-card px-3.5 py-1.5 text-[0.8rem] text-stone"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-xs leading-relaxed text-ash">{CITY_DATA_NOTE}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <ValuationForm source={`city-${city.slug}`} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* what every seller gets here */}
      <section className="section-tight bg-vellum/50">
        <div className="container-wide">
          <h2 className="max-w-2xl font-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-light leading-tight tracking-[-0.02em] text-ink">
            What every {city.name} seller gets, before paying a cent
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SELLER_GETS.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="rounded-lg border border-[var(--line-ink)] bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                  <Icon name={item.icon} className="h-4 w-4 text-clay-deep" />
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-stone">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/realtor-commission-michigan"
              className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-clay-deep"
            >
              And here is exactly how my commission works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <GuaranteePledge />

      <FaqSection
        items={faqs}
        eyebrow={`${city.name} sellers ask`}
        heading={`Selling in ${city.name}, answered straight`}
      />

      <FinalCTA
        heading={`Thinking of selling in ${city.name}?`}
        sub={`Get a free, no-obligation market analysis on your ${city.name} home from an agent who has sold here for nearly 30 years.`}
      />
    </>
  );
}
