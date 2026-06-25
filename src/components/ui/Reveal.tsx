"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span" | "li";
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal. Content rises and fades into place once, the way a
 * document settles onto a desk. Honors reduced-motion (renders in place).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const reduce = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : reduce ? { opacity: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
