import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  Droplets,
  Mail,
} from "lucide-react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import ctaBackground from "@/assets/images/home-cta-background.png";
import {
  blogPosts,
  getBlogPost,
  getRelatedBlogPosts,
} from "@/data/blog-posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested Anors.Z blog article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.category,
      "Anors.Z Global Water Station",
      "safe drinking water",
      "water purification",
      "water station Ghana",
      "sustainable water access",
    ],
    authors: [
      {
        name: post.author,
      },
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
      images: [
        {
          url: post.heroImage.src,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage.src],
    },
  };
}

function createHeadingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Anors.Z Global Water Station",
    },
    image: post.heroImage.src,
  };

  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* =========================================================
          ARTICLE HERO
      ========================================================== */}
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#160b19] text-white">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Brand tint */}
        <div className="absolute inset-0 bg-[#681761]/30" />

        {/* Header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/15 to-transparent" />

        {/* Left-side contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#100412]/95 via-[#28102c]/65 to-black/15" />

        {/* Bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#160b19]/95" />

        {/* Decorative dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[55%] w-[40%] opacity-[0.14] md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1.4px)",
            backgroundSize: "21px 21px",
            WebkitMaskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1440px] items-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-16">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="h-px w-4 bg-white/35" />

              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>

              <span className="h-px w-4 bg-white/35" />

              <span>{post.category}</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {post.category}
                </span>

                <h1 className="mt-5 max-w-5xl text-[clamp(2.35rem,5vw,5rem)] font-normal leading-[1.01] tracking-[-0.05em]">
                  {post.title}
                </h1>
              </div>

              <div className="lg:justify-self-end">
                <p className="max-w-xl text-sm leading-7 text-white/70">
                  {post.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/55">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {post.publishedAt}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-white/25" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/55 sm:text-sm">
                Written by{" "}
                <span className="font-medium text-white/80">
                  {post.author}
                </span>
              </p>

              <Link
                href="/blog"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE CONTENT
      ========================================================== */}
      <section className="relative bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-80 w-72 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104,23,97,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(104,23,97,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.3), transparent)",
            maskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.3), transparent)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:px-12 lg:py-24">
          {/* Main article */}
          <article className="min-w-0">
            {/* Introduction */}
            <div className="border-l-2 border-[#681761] pl-5 sm:pl-7">
              {post.introduction.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-lg leading-8 text-black/70 last:mb-0 sm:text-xl sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article sections */}
            <div className="mt-14 space-y-14">
              {post.sections.map((section, sectionIndex) => {
                const headingId = createHeadingId(section.heading);

                return (
                  <section key={section.heading} aria-labelledby={headingId}>
                    <div className="flex items-start gap-4">
                      <span className="mt-1 text-xs font-medium text-[#681761]/50">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>

                      <h2
                        id={headingId}
                        className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl"
                      >
                        {section.heading}
                      </h2>
                    </div>

                    {section.paragraphs && (
                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[15px] leading-8 text-black/62"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.bullets && (
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 border border-black/10 bg-[#faf9f7] p-4 text-sm leading-6 text-black/65"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761]">
                              <Check className="h-3 w-3" />
                            </span>

                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <blockquote className="relative mt-8 overflow-hidden bg-[#251027] px-6 py-7 text-white sm:px-8 sm:py-9">
                        <div
                          aria-hidden="true"
                          className="absolute right-0 top-0 h-full w-36 opacity-[0.12]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, white 1px, transparent 1.4px)",
                            backgroundSize: "16px 16px",
                            WebkitMaskImage:
                              "linear-gradient(to left, black, transparent)",
                            maskImage:
                              "linear-gradient(to left, black, transparent)",
                          }}
                        />

                        <p className="relative max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                          “{section.callout}”
                        </p>
                      </blockquote>
                    )}

                    {sectionIndex === 1 && (
                      <figure className="mt-10">
                        <div className="relative aspect-[16/9] overflow-hidden bg-[#ded8df]">
                          <Image
                            src={post.contentImage}
                            alt={post.contentImageAlt}
                            fill
                            className="object-cover transition duration-700 hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 100vw, 850px"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/35 via-transparent to-transparent" />
                        </div>

                        <figcaption className="mt-3 text-xs leading-5 text-black/40">
                          Anors.Z water solutions combine convenient access,
                          modern purification and institution-focused system
                          planning.
                        </figcaption>
                      </figure>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Key takeaways */}
            <section
              aria-labelledby="article-takeaways"
              className="mt-16 border border-[#681761]/15 bg-[#f7f4f7] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761] text-white">
                  <BookOpen className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#681761]">
                    Article Summary
                  </p>

                  <h2
                    id="article-takeaways"
                    className="mt-1 text-xl font-medium"
                  >
                    Key Takeaways
                  </h2>
                </div>
              </div>

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {post.takeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-3 text-sm leading-7 text-black/65"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#159447]/10 text-[#159447]">
                      <Check className="h-3 w-3" />
                    </span>

                    {takeaway}
                  </li>
                ))}
              </ul>
            </section>

            {/* Previous page link */}
            <div className="mt-12 border-t border-black/10 pt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 text-sm font-medium text-[#681761]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                View all blog articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-black/10 bg-[#faf9f7] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#681761]">
                In This Article
              </p>

              <nav aria-label="Article contents" className="mt-5">
                <ol className="space-y-4">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${createHeadingId(section.heading)}`}
                        className="group flex items-start gap-3 text-sm leading-5 text-black/55 transition hover:text-[#681761]"
                      >
                        <span className="text-xs text-black/25 transition group-hover:text-[#681761]/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <div className="mt-5 bg-[#251027] p-6 text-white">
              <Droplets className="h-6 w-6 text-[#dca1d5]" />

              <h2 className="mt-5 text-xl font-medium">
                Need a water solution?
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Speak with our team about the water requirements of your
                institution, company or community.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-3 text-sm font-medium"
              >
                Start an enquiry

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-5 border border-black/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                Share Article
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    post.title,
                  )}&body=${encodeURIComponent(
                    `Read this article from Anors.Z Global Water Station: ${post.title}`,
                  )}`}
                  aria-label="Share article by email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/55 transition hover:border-[#681761] hover:bg-[#681761] hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>

                <span
                  title="LinkedIn sharing will be activated after deployment"
                  className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-black/10 text-black/35"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </span>

                <span
                  title="Facebook sharing will be activated after deployment"
                  className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-black/10 text-black/35"
                >
                  <FaFacebookF className="h-4 w-4" />
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          RELATED ARTICLES
      ========================================================== */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="flex flex-col gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761] sm:text-xs">
                Continue Reading
              </p>

              <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.5rem)] font-normal leading-tight tracking-[-0.04em]">
                Related Articles
              </h2>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-sm font-medium text-[#681761]"
            >
              View all articles

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                className="group grid overflow-hidden bg-white sm:grid-cols-[0.9fr_1.1fr]"
              >
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="relative min-h-[270px] overflow-hidden bg-[#ddd7df]"
                >
                  <Image
                    src={relatedPost.heroImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/45 via-transparent to-transparent" />
                </Link>

                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#681761]">
                    {relatedPost.category}
                  </p>

                  <h3 className="mt-4 text-xl font-medium leading-tight tracking-[-0.025em]">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="transition group-hover:text-[#681761]"
                    >
                      {relatedPost.shortTitle}
                    </Link>
                  </h3>

                  <div className="mt-5 flex items-center gap-4 text-xs text-black/40">
                    <span>{relatedPost.publishedAt}</span>
                    <span>{relatedPost.readingTime}</span>
                  </div>

                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#681761]"
                  >
                    Read article

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 py-3 sm:px-5 sm:py-5">
        <div className="relative mx-auto min-h-[430px] max-w-[1440px] overflow-hidden">
          <Image
            src={ctaBackground}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-[#210b25]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#160719]/85 via-[#681761]/35 to-[#0f1c19]/55" />

          <div className="relative z-10 flex min-h-[430px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <div className="max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <Droplets className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                From Knowledge to Action
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Let’s Discuss Your Water Requirements
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Contact our team for guidance on water stations, purification
                systems, installation capacity and institutional packages.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start an Enquiry

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}