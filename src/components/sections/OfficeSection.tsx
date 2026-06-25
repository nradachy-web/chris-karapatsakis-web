import { MapPin, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import SmartImage from "@/components/ui/SmartImage";
import CallLink from "@/components/ui/CallLink";
import Reveal from "@/components/ui/Reveal";

/** Real branded office credibility block. Photos: office-day.jpg / office-night.jpg */
export default function OfficeSection({ tone = "light" }: { tone?: "light" | "vellum" }) {
  return (
    <section className={tone === "vellum" ? "section bg-vellum/50" : "section bg-paper"}>
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-5 gap-3">
              <SmartImage
                src="/images/office-day.jpg"
                alt="Chris Karapatsakis Real Estate office at 44245 Ford Rd, Canton MI"
                ratio="aspect-[4/3]"
                className="col-span-5 shadow-[var(--shadow-card)]"
                fallbackLabel="Office photo"
              />
              <SmartImage
                src="/images/office-night.jpg"
                alt="Chris Karapatsakis Real Estate office sign at dusk"
                ratio="aspect-[16/10]"
                className="col-span-2 hidden sm:block"
                fallbackLabel="Office at dusk"
              />
              <div className="col-span-3 hidden flex-col justify-center rounded-lg border border-[var(--line-clay-soft)] bg-clay/[0.05] p-5 sm:flex">
                <p className="font-display text-[1.15rem] leading-snug text-ink">
                  Chris Karapatsakis Real Estate
                </p>
                <p className="mt-1.5 text-[0.85rem] text-stone">
                  His name is on the building. The accountability is too.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="record-label">A real, established office</span>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.8vw,2.6rem)] font-light leading-tight tracking-[-0.02em] text-ink">
              Not a virtual agent. A real office on Ford Road.
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-stone pretty">
              You will find Chris right here in Canton, his name on the sign out front. After nearly
              three decades, this is home base, and it is where your sale gets handled start to
              finish. Stop in, or call ahead and he will make time.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={BRAND.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[0.98rem] text-ink"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                  <MapPin className="h-4 w-4 text-clay-deep" />
                </span>
                <span className="font-medium">{BRAND.office.full}</span>
                <ArrowUpRight className="h-4 w-4 text-ash transition-transform group-hover:-translate-y-0.5" />
              </a>
              <CallLink
                where="office-section"
                className="group flex items-center gap-3 text-[0.98rem] text-ink"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                  <span className="text-clay-deep">☎</span>
                </span>
                <span className="font-medium tnum">{BRAND.phoneDisplay}</span>
              </CallLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
