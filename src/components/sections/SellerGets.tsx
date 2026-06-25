import { SELLER_GETS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

/** What every seller gets, before paying a cent. */
export default function SellerGets() {
  return (
    <section className="section bg-paper">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Included, every time"
          title={SELLER_GETS.heading}
          subtitle="Real value on the table before you ever owe me anything. This is how I earn the listing, not how I bait it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SELLER_GETS.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-lg border border-[var(--line-ink)] bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md border border-clay/30 bg-clay/[0.06]">
                <Icon name={item.icon} className="h-5 w-5 text-clay-deep" />
              </span>
              <h3 className="mt-5 font-display text-[1.15rem] leading-snug text-ink">{item.title}</h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-stone">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
