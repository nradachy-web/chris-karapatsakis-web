"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection({
  items = FAQ as unknown as FaqItem[],
  eyebrow = "Straight answers",
  heading = "Questions sellers ask me",
}: {
  items?: FaqItem[];
  eyebrow?: string;
  heading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-paper">
      <div className="container-wide">
        <SectionHeading eyebrow={eyebrow} title={heading} align="center" />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--line-ink)] border-y border-[var(--line-ink)]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-display text-[1.15rem] leading-snug transition-colors sm:text-[1.25rem]",
                      isOpen ? "text-clay-deep" : "text-ink"
                    )}
                  >
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      isOpen ? "rotate-45 border-clay bg-clay text-paper" : "border-[var(--line-ink)] text-ink"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[0.97rem] leading-relaxed text-stone">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
