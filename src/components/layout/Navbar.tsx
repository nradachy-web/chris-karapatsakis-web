"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { BRAND, NAV_LINKS, CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import CallLink from "@/components/ui/CallLink";
import Wordmark from "./Wordmark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="container-wide">
          <div
            className={cn(
              "mt-0 flex items-center justify-between gap-4 px-3 transition-all duration-500 sm:px-4",
              scrolled
                ? "glass-strong mt-3 rounded-xl border-hair py-2 shadow-[0_18px_44px_-30px_rgba(28,27,25,0.5)]"
                : "mt-0 rounded-none border-b border-transparent py-3"
            )}
          >
            <Wordmark />

            <div className="hidden items-center gap-7 lg:flex">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-[0.875rem] font-medium transition-colors duration-200",
                      active ? "text-clay-deep" : "text-stone hover:text-ink"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px bg-clay transition-all duration-300",
                        active ? "w-full" : "w-0"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2.5">
              <CallLink
                where="navbar"
                className="hidden items-center gap-2 rounded-sm border border-[var(--line-ink)] px-3.5 py-2 text-sm font-medium text-ink transition-all hover:border-clay hover:text-clay-deep xl:inline-flex"
              >
                <Phone className="h-4 w-4 text-clay" />
                <span className="tnum">{BRAND.phoneDisplay}</span>
              </CallLink>
              <Link
                href="/home-value"
                className="hidden rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-paper shadow-[0_14px_32px_-18px_rgba(28,27,25,0.85)] transition-colors hover:bg-clay sm:inline-flex"
              >
                {CTA.primaryShort}
              </Link>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="grid h-10 w-10 place-items-center text-ink lg:hidden"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="glass-strong fixed inset-y-0 right-0 z-50 flex w-80 max-w-[86vw] flex-col lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-hair px-5 py-4">
                <Wordmark onClick={() => setOpen(false)} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 shrink-0 place-items-center text-ash hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-md px-4 py-3.5 text-sm font-medium transition-colors",
                          active ? "bg-clay/[0.1] text-clay-deep" : "text-stone hover:bg-vellum hover:text-ink"
                        )}
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="space-y-3 border-t border-hair px-5 py-5">
                <Link
                  href="/home-value"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-paper"
                >
                  {CTA.primary}
                </Link>
                <CallLink
                  where="mobile-drawer"
                  className="flex w-full items-center justify-center gap-2 rounded-sm border border-[var(--line-ink)] px-5 py-3 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4 text-clay" />
                  {BRAND.phoneDisplay}
                </CallLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
