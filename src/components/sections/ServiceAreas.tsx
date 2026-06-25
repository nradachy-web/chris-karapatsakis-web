import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { CITIES, BRAND } from "@/lib/constants";
import { asset } from "@/lib/asset";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** The four specialty cities, each linking to its landing page. */
export default function ServiceAreas() {
  return (
    <section className="section bg-vellum/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Where I sell"
          title="A specialist in four towns, not a tourist in forty"
          subtitle={`I focus where I know every street and subdivision. Selling across ${BRAND.counties.join(", ")} counties, with a home base in Canton.`}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <Link
                href={`/sell-your-home-${c.slug}-mi`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--line-ink)] bg-card transition-all duration-300 hover:-translate-y-1 hover:border-clay/60 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative h-32 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(`/scenes/${c.slug}.jpg`)}
                    alt={`${c.name}, Michigan`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md border border-paper/30 bg-ink/40 backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4 text-paper transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[1.4rem] text-ink">{c.name}</h3>
                {c.isHomeBase && (
                  <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-clay-deep">
                    Home base
                  </span>
                )}
                <p className="mt-3 text-[0.8rem] text-ash">{c.marketLabel}</p>

                <div className="mt-auto grid grid-cols-2 gap-2 border-t border-[var(--line-ink-soft)] pt-4">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-ash">Median</p>
                    <p className="font-display text-[1.05rem] text-ink tnum">{c.medianPrice}</p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.12em] text-ash">On market</p>
                    <p className="font-display text-[1.05rem] text-ink tnum">{c.daysOnMarket}</p>
                  </div>
                </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
