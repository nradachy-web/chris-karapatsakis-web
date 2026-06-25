import Link from "next/link";
import { Phone } from "lucide-react";
import CallLink from "@/components/ui/CallLink";
import { BRAND } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-paper pt-28 pb-20">
      <div className="container-wide text-center">
        <span className="record-label justify-center">Page not found</span>
        <h1 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-none tracking-[-0.02em] text-ink">
          404
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-stone">
          That page moved or never existed. Let's get you back to selling your home.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-sm bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-clay"
          >
            Back to home
          </Link>
          <CallLink
            where="404"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--line-ink-strong)] px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:border-clay hover:text-clay-deep"
          >
            <Phone className="h-4 w-4 text-clay" />
            {BRAND.phoneDisplay}
          </CallLink>
        </div>
      </div>
    </section>
  );
}
