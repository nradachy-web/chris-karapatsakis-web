import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import ArticleBody from "@/components/sections/ArticleBody";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { BLOG_POSTS, getPost, formatDate } from "@/lib/blog";
import { SITE_URL, BRAND } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: path,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE_URL}${post.scene}`,
    author: { "@type": "Person", name: BRAND.name, url: `${SITE_URL}/about` },
    publisher: { "@type": "Person", name: BRAND.name, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd(post.faqs)} />

      <PageHero
        eyebrow={`${formatDate(post.date)} · ${post.readMinutes} min read`}
        title={post.title}
        image={post.scene}
      />

      <ArticleBody blocks={post.blocks} />

      <FaqSection items={post.faqs} eyebrow="Common questions" heading="Sellers also ask" />

      {/* related posts */}
      <section className="section-tight bg-vellum/50">
        <div className="container-wide">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light tracking-[-0.02em] text-ink">
              Keep reading
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-clay-deep transition-colors hover:text-clay"
            >
              <ArrowLeft className="h-4 w-4" /> All posts
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-[var(--line-ink)] bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-clay/60"
                >
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ash">
                    <Clock className="h-3 w-3" /> {r.readMinutes} min
                  </span>
                  <h3 className="mt-3 font-display text-[1.1rem] leading-snug text-ink">{r.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-deep">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
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
