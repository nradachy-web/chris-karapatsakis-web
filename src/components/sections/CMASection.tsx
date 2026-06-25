import { Check } from "lucide-react";
import ValuationForm from "@/components/forms/ValuationForm";
import Reveal from "@/components/ui/Reveal";

const POINTS = [
  "A true comparative market analysis, built from real recent sales near you",
  "What your home should list for, and what you can realistically net",
  "An honest read on timing for your exact street and price band",
  "No obligation, no pressure, and no sales pitch attached",
];

/** The conversion centerpiece: the real-number CMA pitch + the form. */
export default function CMASection({ source = "home" }: { source?: string }) {
  return (
    <section id="home-value" className="section bg-paper scroll-mt-24">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="record-label">The real number</span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-light leading-[1.06] tracking-[-0.02em] text-ink">
              What is your home actually worth?{" "}
              <span className="display-italic text-clay-deep">Not the Zestimate.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-stone pretty">
              An algorithm has never walked your street or stood in your kitchen. I have, for nearly
              30 years. Tell me about your home and I will send you the number it should actually sell
              for, with the comps to back it up.
            </p>

            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] text-stone">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-clay/15">
                    <Check className="h-3 w-3 text-clay-deep" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <ValuationForm source={source} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
