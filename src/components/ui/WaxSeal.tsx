"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaxSealProps {
  topLabel?: string;
  monogram?: string;
  bottomLabel?: string;
  className?: string;
  /** angle the pressed seal settles at, in degrees */
  tilt?: number;
}

/**
 * The signature mark. An embossed clay-bronze seal that presses into the page
 * on scroll, the way a closing is made official. Used on the guarantee.
 * Reduced-motion users get the settled seal with no press.
 */
export default function WaxSeal({
  topLabel = "Chris Karapatsakis",
  monogram = "CK",
  bottomLabel = "Guaranteed",
  className,
  tilt = -5,
}: WaxSealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="wax-seal"
        initial={reduce ? { opacity: 0, rotate: tilt } : { opacity: 0, scale: 1.6, rotate: tilt - 7, y: -12 }}
        animate={
          inView
            ? { opacity: 1, scale: 1, rotate: tilt, y: 0 }
            : reduce
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.6, rotate: tilt - 7, y: -12 }
        }
        transition={{ duration: 0.5, ease: [0.2, 0.9, 0.25, 1] }}
      >
        <div className="relative z-[1] flex flex-col items-center px-4 leading-none">
          <span className="font-body text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-[#f4ead9]/80">
            {topLabel}
          </span>
          <span className="my-1.5 font-display text-[2rem] tracking-[0.04em] text-[#f6ecda]">
            {monogram}
          </span>
          <span className="font-body text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-[#f4ead9]/80">
            {bottomLabel}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
