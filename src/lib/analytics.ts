// Lightweight Google Ads / GA4 helpers. Everything no-ops safely when no tag is
// loaded (ANALYTICS ids empty), so the site works before Nick wires conversions.
import { ANALYTICS } from "./constants";

type GtagParams = Record<string, unknown>;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof w.gtag === "function") {
    w.gtag(...args);
  }
}

/** GA4 / generic event. */
export function trackEvent(name: string, params: GtagParams = {}) {
  gtag("event", name, params);
}

/** Google Ads conversion (uses a send_to label). */
export function trackConversion(sendTo: string, params: GtagParams = {}) {
  if (!sendTo) return;
  gtag("event", "conversion", { send_to: sendTo, ...params });
}

/** Fire on a CMA / valuation lead submit. */
export function trackCmaLead(extra: GtagParams = {}) {
  trackEvent("cma_lead", { event_category: "lead", ...extra });
  trackConversion(ANALYTICS.cmaConversionSendTo, extra);
}

/** Fire on a click-to-call. */
export function trackCall(extra: GtagParams = {}) {
  trackEvent("call_click", { event_category: "lead", ...extra });
  trackConversion(ANALYTICS.callConversionSendTo, extra);
}

/** Capture ad attribution from the URL for the lead payload. */
export function captureUtm(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  const p = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((k) => {
    const v = p.get(k);
    if (v) out[k] = v;
  });
  if (typeof document !== "undefined" && document.referrer) out.referrer = document.referrer;
  return Object.keys(out).length ? out : null;
}
