import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import EngraveRule from "@/components/ui/EngraveRule";

/** Standard interior-page header. Pass `image` for a cinematic scene treatment. */
export default function PageHero({
  eyebrow,
  title,
  italic,
  subtitle,
  cta,
  image,
  video,
}: {
  eyebrow: string;
  title: React.ReactNode;
  italic?: string;
  subtitle?: React.ReactNode;
  cta?: { href: string; label: string };
  image?: string;
  video?: string;
}) {
  const onImage = Boolean(image);

  return (
    <header
      className={cn(
        "relative overflow-hidden",
        onImage ? "isolate flex min-h-[58vh] items-end pb-14 pt-40" : "bg-paper pt-36 pb-12 sm:pt-40 lg:pt-44"
      )}
    >
      {onImage && (
        <div className="absolute inset-0 -z-10">
          {video ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={asset(image!)}>
              <source src={asset(video)} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={asset(image!)} alt="" aria-hidden className="kenburns h-full w-full object-cover" />
          )}
          <div className="scene-scrim" />
        </div>
      )}

      <div className="container-wide">
        <Reveal>
          <span className={cn("record-label", onImage && "record-label-sand")}>{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1
            className={cn(
              "mt-5 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.7rem)] font-light leading-[1.04] tracking-[-0.025em]",
              onImage ? "text-paper" : "text-ink"
            )}
          >
            {title}
            {italic && (
              <span className={cn("display-italic", onImage ? "text-sand" : "text-clay-deep")}> {italic}</span>
            )}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-[1.08rem] leading-relaxed pretty",
                onImage ? "text-[#e7e3d9]" : "text-stone"
              )}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={0.18}>
            <Link
              href={cta.href}
              className={cn(
                "group mt-8 inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[0.95rem] font-semibold transition-colors",
                onImage
                  ? "bg-paper text-ink hover:bg-sand"
                  : "bg-ink text-paper shadow-[0_16px_36px_-20px_rgba(28,27,25,0.9)] hover:bg-clay"
              )}
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        )}
        {!onImage && (
          <div className="mt-12">
            <EngraveRule className="max-w-[10rem]" />
          </div>
        )}
      </div>
    </header>
  );
}
