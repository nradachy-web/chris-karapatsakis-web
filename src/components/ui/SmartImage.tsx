"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/**
 * Image that degrades to a labeled placeholder if the file is not present yet
 * (never a broken image). Drop the real file at the given path and it appears.
 * Handles the SSR case where the error fires before hydration via a mount check.
 */
export default function SmartImage({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className,
  imgClassName,
  fallbackLabel = "Photo",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-lg bg-vellum", ratio, className)}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={asset(src)}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="reg-frame absolute inset-3 rounded-sm border border-[var(--line-clay-soft)]" />
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ash">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
}
