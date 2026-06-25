"use client";

import { BRAND } from "@/lib/constants";
import { trackCall } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface CallLinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  where?: string; // attribution context for the call event
}

/** Click-to-call link that fires the Google Ads call conversion. */
export default function CallLink({ children, className, ariaLabel, where }: CallLinkProps) {
  return (
    <a
      href={`tel:${BRAND.phoneTel}`}
      data-conversion="call"
      aria-label={ariaLabel || `Call or text Chris at ${BRAND.phoneDisplay}`}
      onClick={() => trackCall({ where })}
      className={cn(className)}
    >
      {children}
    </a>
  );
}
