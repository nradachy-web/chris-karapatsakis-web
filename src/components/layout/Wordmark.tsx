import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND, titleSuffix } from "@/lib/constants";

/** CK monogram seal + name. The recurring brand signature. */
export default function Wordmark({
  onClick,
  onDark = false,
  className,
}: {
  onClick?: () => void;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${BRAND.name} home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-clay/60 bg-ink"
        aria-hidden
      >
        <span className="font-display text-[0.95rem] font-medium tracking-[0.04em] text-sand">CK</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.12rem] tracking-[-0.01em]",
            onDark ? "text-paper" : "text-ink"
          )}
        >
          Chris Karapatsakis
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em]",
            onDark ? "text-sand" : "text-clay-deep"
          )}
        >
          Canton Listing Agent · {titleSuffix()}
        </span>
      </span>
    </Link>
  );
}
