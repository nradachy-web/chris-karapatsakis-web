import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { BRAND, COMPLIANCE, NAV_LINKS, CITIES, titleSuffix } from "@/lib/constants";
import CallLink from "@/components/ui/CallLink";

/** Equal Housing Opportunity logo: house outline with an equals sign. */
function EqualHousingMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden role="img">
      <path
        d="M8 30 L32 12 L56 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28 V52 H50 V28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="24" y="34" width="16" height="3.4" rx="1" fill="currentColor" />
      <rect x="24" y="42" width="16" height="3.4" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="field-ink">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* brand + NAP */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/60" aria-hidden>
                <span className="font-display text-base font-medium tracking-[0.04em] text-sand">CK</span>
              </span>
              <div className="leading-none">
                <p className="font-display text-xl text-paper">Chris Karapatsakis</p>
                <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-sand">
                  Canton Listing Agent · {titleSuffix()}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#bfc4ba]">
              Straight answers, hard negotiation, and a no-risk listing. Nearly 30 years selling
              homes across Wayne, Oakland and Washtenaw counties.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <CallLink where="footer" className="flex items-center gap-3 text-[#d8ded6] hover:text-paper">
                <Phone className="h-4 w-4 text-sand" />
                <span className="tnum">{BRAND.phoneDisplay}</span>
              </CallLink>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-[#d8ded6] hover:text-paper"
              >
                <Mail className="h-4 w-4 text-sand" />
                {BRAND.email}
              </a>
              <a
                href={BRAND.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#d8ded6] hover:text-paper"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                <span>{BRAND.office.full}</span>
              </a>
            </div>
          </div>

          {/* explore */}
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sand">Explore</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#bfc4ba] transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-[#bfc4ba] transition-colors hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* areas */}
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sand">Areas I Serve</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/sell-your-home-${c.slug}-mi`}
                    className="text-[#bfc4ba] transition-colors hover:text-paper"
                  >
                    Sell in {c.name}, MI
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/home-value" className="text-sand transition-colors hover:text-paper">
                  Free Home Value Report
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* compliance band */}
        <div className="mt-14 border-t border-[var(--line-light)] pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex shrink-0 items-center gap-3">
              <EqualHousingMark className="h-9 w-9 text-[#bfc4ba]" />
              <span className="text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.16em] text-[#bfc4ba]">
                {COMPLIANCE.equalHousing}
              </span>
            </div>

            <div className="space-y-2 text-xs leading-relaxed text-[#a9aea4]">
              {/* Broker name rendered at a size equal-or-greater than the agent name. */}
              <p className="text-sm font-semibold text-[#d8ded6]">
                Brokerage: {COMPLIANCE.brokerName}
              </p>
              <p>
                {COMPLIANCE.brokerStreet}, {COMPLIANCE.brokerCityStateZip} · {COMPLIANCE.brokerPhoneDisplay}
              </p>
              <p>{COMPLIANCE.licensedStatus}</p>
              <p>{COMPLIANCE.guaranteeClarifier}</p>
              <p>{COMPLIANCE.fairHousingNote}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-[var(--line-light)] pt-6 text-xs text-[#8b9088] sm:flex-row sm:items-center sm:justify-between">
            <p>{COMPLIANCE.copyright}</p>
            <p>
              {BRAND.isRealtor ? "Chris Karapatsakis, REALTOR®" : "Licensed Michigan Real Estate Agent"} ·
              Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
