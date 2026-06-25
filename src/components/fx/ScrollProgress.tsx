"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin clay-bronze rule that fills as you read, like the margin line on a
 * recorded document advancing page by page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-clay"
    />
  );
}
