import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import WaxSeal from "@/components/ui/WaxSeal";
import CallLink from "@/components/ui/CallLink";
import ThankYouTracker from "@/components/fx/ThankYouTracker";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank you | Chris Karapatsakis",
  description: "Your request is in. Chris will be in touch, usually within the hour.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracker />
      <section className="flex min-h-[80vh] items-center bg-paper pt-28 pb-20">
        <div className="container-wide">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex w-fit justify-center">
              <WaxSeal topLabel="Received" monogram="CK" bottomLabel="On it" tilt={-4} />
            </div>
            <span className="record-label mt-10 justify-center">Request received</span>
            <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight tracking-[-0.02em] text-ink">
              Got it. I will be in touch.
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-stone">
              Thanks for reaching out. I review every request personally and respond usually within
              the hour. I will put together your real numbers and send them over with no pressure
              attached.
            </p>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-stone">
              In a hurry, or want to talk it through now? Call or text me directly.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallLink
                where="thank-you"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-clay"
              >
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </CallLink>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-sm border border-[var(--line-ink-strong)] px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-clay hover:text-clay-deep"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
