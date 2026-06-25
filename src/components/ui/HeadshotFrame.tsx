"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

/**
 * Chris's portrait. Drop a real high-res headshot at
 * public/images/chris-headshot.jpg and set BRAND.hasHeadshot = true, and it
 * appears automatically. Until then an intentional engraved nameplate shows
 * (never a broken image, never a stock face, per the honesty brand).
 */
export default function HeadshotFrame({
  src = "/images/chris-headshot.jpg",
  className,
  ratio = "aspect-[4/5]",
}: {
  src?: string;
  className?: string;
  ratio?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const showPhoto = BRAND.hasHeadshot && !failed;

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-md bg-vellum", ratio, className)}>
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={asset(src)}
          alt="Chris Karapatsakis, Canton MI listing agent"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="reg-frame absolute inset-2.5 rounded-sm border border-[var(--line-clay-soft)]" />
          <div className="relative flex flex-col items-center text-center">
            <span className="grid h-16 w-16 place-items-center rounded-md border border-clay/50 bg-ink">
              <span className="font-display text-xl tracking-[0.05em] text-sand">CK</span>
            </span>
            <span className="mt-4 font-display text-lg text-ink">Chris Karapatsakis</span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ash">
              Portrait
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
