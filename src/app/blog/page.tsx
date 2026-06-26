import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";
import { BLOG_POSTS, formatDate } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Seller's Blog | Chris Karapatsakis, Canton MI Listing Agent",
  description:
    "Honest, practical advice for home sellers in Canton, Plymouth, Northville and South Lyon. Pricing, timing, prep, and negotiation from a 30-year listing agent.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "The Seller's Blog | Chris Karapatsakis", url: "/blog" },
};

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <PageHero
        eyebrow="The seller's blog"
        title="Straight advice for"
        italic="home sellers"
        subtitle="No fluff, just what actually moves the needle when you sell a home in Metro Detroit. Pricing, timing, prep, and negotiation, from nearly 30 years of doing it."
      />

      <section className="section-tight bg-paper">
        <div className="container-wide">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--line-ink)] bg-card transition-all duration-300 hover:-translate-y-1 hover:border-clay/60 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(post.scene)}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ash">
                      <span>{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readMinutes} min
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-[1.3rem] leading-snug text-ink">{post.title}</h2>
                    <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-stone">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clay-deep">
                      Read the post
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
