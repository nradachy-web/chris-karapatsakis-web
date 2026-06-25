"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Fires a GA4 funnel event when the thank-you page is reached. The Ads
 *  conversion already fired on a successful submit, so we do not double count. */
export default function ThankYouTracker() {
  useEffect(() => {
    trackEvent("lead_thank_you", { event_category: "lead" });
  }, []);
  return null;
}
