import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import Reveal from "@/components/ui/Reveal";

/**
 * Full-bleed cinematic statement band. Renders a video when one is provided
 * (muted, looping, with the still as poster), otherwise a slow Ken Burns still.
 * A legibility scrim keeps overlaid text readable.
 */
export default function CinematicBand({
  image,
  video,
  eyebrow,
  title,
  sub,
  cta,
  align = "center",
}: {
  image: string;
  video?: string;
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  cta?: { href: string; label: string };
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {video ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={asset(image)}
          >
            <source src={asset(video)} type="video/mp4" />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(image)}
            alt=""
            aria-hidden
            className="kenburns h-full w-full object-cover"
          />
        )}
        <div className="scene-scrim" />
      </div>

      <div className="container-wide relative py-28 sm:py-36">
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
          {eyebrow && (
            <Reveal>
              <span className={`record-label record-label-sand ${centered ? "justify-center" : ""}`}>
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.8vw,3.4rem)] font-light leading-[1.06] tracking-[-0.02em] text-paper">
              {title}
            </h2>
          </Reveal>
          {sub && (
            <Reveal delay={0.12}>
              <p className={`mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[#e7e3d9] pretty ${centered ? "mx-auto" : ""}`}>
                {sub}
              </p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={0.18}>
              <Link
                href={cta.href}
                className={`group mt-8 inline-flex items-center gap-2 rounded-sm bg-paper px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-sand ${centered ? "" : ""}`}
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
