"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Phone, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, WEB3FORMS_KEY } from "@/lib/constants";
import { trackCmaLead, captureUtm } from "@/lib/analytics";

const STEPS = ["Address", "About you", "Contact"] as const;

const TIMELINES = [
  { id: "now", label: "Ready now" },
  { id: "1-3", label: "1 to 3 months" },
  { id: "3-6", label: "3 to 6 months" },
  { id: "curious", label: "Just curious" },
] as const;

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
};

export default function ValuationForm({
  source = "site",
  className,
}: {
  source?: string;
  className?: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [timeline, setTimeline] = useState("now");
  const [contact, setContact] = useState({ email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && !address.trim()) e.address = "Add your property address so I can pull the right comps.";
    if (step === 1 && !name.trim()) e.name = "What should I call you?";
    if (step === 2) {
      if (!contact.email.trim() && !contact.phone.trim())
        e.email = "Add an email or a phone so I can send your numbers.";
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
        e.email = "That email looks off.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) {
      setDir(1);
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }
  };
  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const timelineLabel = TIMELINES.find((t) => t.id === timeline)?.label ?? "";

  const submit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    const utm = captureUtm();
    const message = [
      `New home value request from ${name}`,
      ``,
      `Property: ${address}`,
      `Timeline: ${timelineLabel}`,
      ``,
      `Name: ${name}`,
      contact.email ? `Email: ${contact.email}` : "",
      contact.phone ? `Phone: ${contact.phone}` : "",
      contact.notes ? `Notes: ${contact.notes}` : "",
      `Source page: ${source}`,
      utm ? `\nAd attribution: ${JSON.stringify(utm)}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const hasKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("REPLACE");

    try {
      if (hasKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Home Value Request: ${name} (${address})`,
            from_name: "chriskarapatsakis.com",
            name,
            email: contact.email || "no-reply@chriskarapatsakis.com",
            phone: contact.phone,
            property_address: address,
            timeline: timelineLabel,
            source,
            message,
          }),
        });
        if (!res.ok) throw new Error("send failed");
      } else if (typeof window !== "undefined") {
        console.warn("[ValuationForm] WEB3FORMS_KEY not set. Lead not delivered:\n", message);
      }
      trackCmaLead({ source, timeline });
      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong sending that.");
      setSubmitting(false);
    }
  };

  return (
    <div className={cn("card reg-frame relative overflow-hidden rounded-lg p-5 sm:p-7", className)}>
      {/* response badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-clay/30 bg-clay/[0.07] px-3 py-1.5">
        <Clock className="h-3.5 w-3.5 text-clay-deep" />
        <span className="text-[0.72rem] font-semibold text-clay-deep">
          I personally respond, usually within the hour
        </span>
      </div>

      {/* progress dots */}
      <div className="mb-6 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <button
              type="button"
              onClick={() => i < step && (setDir(-1), setStep(i))}
              className={cn(
                "h-1.5 flex-1 rounded-pill transition-colors",
                i <= step ? "bg-clay" : "bg-hair",
                i < step && "cursor-pointer"
              )}
              aria-label={`Step ${i + 1}: ${label}`}
            />
          </div>
        ))}
      </div>

      <div className="relative min-h-[244px] overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">What is your home worth?</h3>
                  <p className="mt-1.5 text-sm text-stone">
                    The real number, not a Zestimate. Start with the address.
                  </p>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-stone">Property address</label>
                  <input
                    className={cn("field", errors.address && "border-[#b4392f]")}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && next()}
                    placeholder="123 Heritage Park Dr, Canton, MI 48188"
                  />
                  {errors.address && <p className="mt-1 text-xs text-[#b4392f]">{errors.address}</p>}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-2xl text-ink">Nice to meet you.</h3>
                  <p className="mt-1.5 text-sm text-stone">And when are you thinking of selling?</p>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-stone">Your name</label>
                  <input
                    className={cn("field", errors.name && "border-[#b4392f]")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && next()}
                    placeholder="First and last name"
                    autoFocus
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#b4392f]">{errors.name}</p>}
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-stone">Timeline</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {TIMELINES.map((t) => {
                      const sel = timeline === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimeline(t.id)}
                          className={cn(
                            "rounded-sm border px-3 py-2.5 text-sm font-medium transition-all",
                            sel
                              ? "border-clay bg-clay text-paper"
                              : "border-[var(--line-ink)] bg-card text-stone hover:border-clay/60"
                          )}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">Where do I send it?</h3>
                  <p className="mt-1.5 text-sm text-stone">
                    Email or phone is fine. Phone just lets me text you the number faster.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone">Email</label>
                    <input
                      className={cn("field", errors.email && "border-[#b4392f]")}
                      type="email"
                      value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      placeholder="you@email.com"
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone">
                      Phone <span className="text-ash">(optional)</span>
                    </label>
                    <input
                      className="field"
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      placeholder="(734) 555-0123"
                    />
                  </div>
                </div>
                {errors.email && <p className="text-xs text-[#b4392f]">{errors.email}</p>}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-stone">
                    Anything I should know? <span className="text-ash">(optional)</span>
                  </label>
                  <textarea
                    className="field resize-none"
                    rows={2}
                    value={contact.notes}
                    onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                    placeholder="Updates you have made, a deadline, questions, anything helpful."
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {submitError && (
        <p className="mt-4 rounded-sm border border-[#b4392f]/40 bg-[#b4392f]/10 px-4 py-3 text-sm text-[#8f2d25]">
          {submitError}{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="font-semibold underline">
            Call {BRAND.phoneDisplay}
          </a>
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            onClick={back}
            className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--line-ink)] px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-clay hover:text-clay-deep"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-clay-deep"
          >
            <Phone className="h-4 w-4 text-clay" /> Prefer to call?
          </a>
        )}

        {step < STEPS.length - 1 ? (
          <button
            onClick={next}
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-7 py-3 text-sm font-semibold text-paper shadow-[0_14px_32px_-18px_rgba(28,27,25,0.85)] transition-colors hover:bg-clay"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={submitting}
            className={cn(
              "inline-flex items-center gap-2 rounded-sm bg-clay px-7 py-3 text-sm font-semibold text-paper shadow-[0_14px_32px_-16px_rgba(133,92,56,0.7)] transition-colors hover:bg-clay-deep",
              submitting && "opacity-60"
            )}
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                Sending
              </>
            ) : (
              <>
                Send Me the Straight Numbers <Check className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-ash">
        Free CMA · Free home warranty to every seller · Cancel anytime
      </p>
    </div>
  );
}
