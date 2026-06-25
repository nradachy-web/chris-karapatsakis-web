"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "clay" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  onDark?: boolean;
  ariaLabel?: string;
  dataConversion?: string;
}

const base =
  "focus-ring relative inline-flex items-center justify-center gap-2 rounded-sm font-body font-semibold tracking-[0.005em] transition-all duration-300 cursor-pointer";

function variantClass(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case "primary":
      // ink button that warms to clay on hover (brief: "fills with clay accent")
      return "bg-ink text-paper shadow-[0_14px_32px_-18px_rgba(28,27,25,0.85)] hover:bg-clay";
    case "clay":
      return "bg-clay text-paper shadow-[0_14px_32px_-16px_rgba(133,92,56,0.7)] hover:bg-clay-deep";
    case "outline":
      return onDark
        ? "bg-transparent text-paper border border-[var(--line-light-strong)] hover:border-sand hover:text-sand"
        : "bg-transparent text-ink border border-[var(--line-ink-strong)] hover:border-clay hover:text-clay-deep";
    case "ghost":
      return onDark
        ? "bg-transparent text-[#d8ded6] hover:text-paper"
        : "bg-transparent text-stone hover:text-ink";
  }
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3 text-[0.9rem]",
  lg: "px-8 py-4 text-[0.98rem]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className,
  external = false,
  onDark = false,
  ariaLabel,
  dataConversion,
}: ButtonProps) {
  const classes = cn(
    base,
    variantClass(variant, onDark),
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  const content = <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>;

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <motion.a
          href={href}
          aria-label={ariaLabel}
          data-conversion={dataConversion}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0, scale: 0.99 }}
          className={classes}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }} className="inline-flex">
        <Link href={href} aria-label={ariaLabel} data-conversion={dataConversion} className={classes}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      data-conversion={dataConversion}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.99 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
