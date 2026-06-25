import Script from "next/script";
import { ANALYTICS } from "@/lib/constants";

/**
 * Loads the Google tag (Ads + GA4) only when an id is configured. Until Nick
 * sets NEXT_PUBLIC_ADS_ID / NEXT_PUBLIC_GA4_ID, this renders nothing, so the
 * site ships clean and the conversion hooks in analytics.ts no-op safely.
 */
export default function Analytics() {
  const primaryId = ANALYTICS.adsId || ANALYTICS.ga4Id;
  if (!primaryId) return null;

  const configs = [ANALYTICS.ga4Id, ANALYTICS.adsId].filter(Boolean);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configs.map((id) => `gtag('config', '${id}');`).join("\n")}
        `}
      </Script>
    </>
  );
}
