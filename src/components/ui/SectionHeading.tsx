import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}

/**
 * Section header: a mono "record label" eyebrow, a Newsreader display title,
 * and an optional subtitle. The shared opening device for every section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "record-label",
              centered && "justify-center",
              tone === "dark" && "record-label-sand"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-light leading-[1.06] tracking-[-0.02em]",
            tone === "dark" ? "text-paper" : "text-ink",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-[1.04rem] leading-relaxed pretty",
              centered && "mx-auto",
              tone === "dark" ? "text-[#c4c1b8]" : "text-stone"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
