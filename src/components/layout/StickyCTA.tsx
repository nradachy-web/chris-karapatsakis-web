"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, LineChart } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackCall } from "@/lib/analytics";

/** Mobile-only sticky action bar: free market analysis + tap to call. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="glass-strong grid grid-cols-2 gap-2 border-t border-hair p-2.5">
        <Link
          href="/home-value"
          className="flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-paper"
        >
          <LineChart className="h-4 w-4" />
          Free Home Value
        </Link>
        <a
          href={`tel:${BRAND.phoneTel}`}
          data-conversion="call"
          onClick={() => trackCall({ where: "sticky-bar" })}
          className="flex items-center justify-center gap-2 rounded-sm border border-clay bg-paper px-4 py-3 text-sm font-semibold text-clay-deep"
        >
          <Phone className="h-4 w-4" />
          Call or Text
        </a>
      </div>
    </div>
  );
}

function cn(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}
