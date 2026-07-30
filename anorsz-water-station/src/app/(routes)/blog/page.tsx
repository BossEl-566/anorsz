import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Droplets,
  Leaf,
  Lightbulb,
  Newspaper,
} from "lucide-react";

import BlogExplorer from "@/components/blog/BlogExplorer";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import ctaBackground from "@/assets/images/home-cta-background.png";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read water technology, health, sustainability and community-impact insights from Anors.Z Global Water Station.",
};

const insightTopics = [
  {
    title: "Water Technology",
    description:
      "Understand purification, intelligent monitoring and smart water-station systems.",
    icon: Lightbulb,
  },
  {
    title: "Health and Safety",
    description:
      "Learn why reliable access to clean and safe drinking water matters.",
    icon: Droplets,
  },
  {
    title: "Sustainability",
    description:
      "Discover practical ways to reduce plastic waste through refill-based water access.",
    icon: Leaf,
  },
];

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          BLOG HERO
      ========================================================== */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#160b19] text-white">
        <Image
          src={aboutStoryImage}
          alt="Anors.Z water station and safe drinking-water technology"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Brand tint */}
        <div className="absolute inset-0 bg-[#681761]/30" />

        {/* Header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-transparent" />

        {/* Left-side contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#110513]/95 via-[#29102d]/65 to-black/15" />

        {/* Strong bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#160b19]/95" />

        {/* Decorative dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[58%] w-[40%] opacity-[0.15] md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1.4px)",
            backgroundSize: "21px 21px",
            WebkitMaskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1440px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 xl:px-16">
          <div className="w-full">
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="h-px w-5 bg-white/40" />

              <span>Blog</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-4xl text-[clamp(2.5rem,5.7vw,5.5rem)] font-normal leading-[0.99] tracking-[-0.05em]">
                Ideas for Cleaner Water
                <span className="block">and Healthier Communities.</span>
              </h1>

              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end">
                Explore useful information about water purification,
                intelligent water stations, sustainability, public health and
                institutional water access.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-white/25" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                Insights from Anors.Z Global Water Station.
              </p>

              <a
                href="#latest-articles"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Explore our articles

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-72 w-72 opacity-40"
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

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Featured Insight
              </p>

              <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.04em]">
                Recommended Reading
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-black/45">
              <Newspaper className="h-4 w-4" />
              Water knowledge and industry insights
            </div>
          </div>

          <article className="grid overflow-hidden bg-[#241026] text-white lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href="/blog/how-smart-water-stations-improve-water-access"
              className="group relative min-h-[420px] overflow-hidden lg:min-h-[590px]"
              aria-label="Read how smart water stations improve access to safe drinking water"
            >
              <Image
                src={aboutSupportImage}
                alt="Students and community members using a smart water station"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#180719]/55 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                Featured
              </span>
            </Link>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-16">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d899d0]">
                Water Technology
              </p>

              <h3 className="mt-5 text-[clamp(2rem,3vw,3.2rem)] font-normal leading-[1.08] tracking-[-0.04em]">
                How Smart Water Stations Improve Access to Safe Drinking Water
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/65">
                Smart water stations combine modern purification, intelligent
                displays and convenient card-based access to provide cleaner,
                safer and more reliable water for everyday use.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-white/45">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  July 2026
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  5 min read
                </span>
              </div>

              <Link
                href="/blog/how-smart-water-stations-improve-water-access"
                className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Read featured article

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          TOPIC INTRODUCTION
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Explore Our Topics
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Practical Information for Better Water Decisions
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Our blog explains water technologies and sustainability topics
              in a clear way to help institutions and communities make
              informed decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 lg:mt-16 lg:grid-cols-3">
            {insightTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.title}
                  className="group min-h-[310px] bg-[#f8f7f5] p-7 transition duration-300 hover:bg-[#681761] hover:text-white sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-sm text-black/20 transition group-hover:text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{topic.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                    {topic.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE EXPLORER
      ========================================================== */}
      <section
        id="latest-articles"
        className="scroll-mt-24 bg-[#f7f6f4]"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Latest Articles
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Water Insights and Useful Resources
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Search our sample articles or select a topic to find information
              relevant to your institution, community or water project.
            </p>
          </div>

          <BlogExplorer />
        </div>
      </section>

      {/* =========================================================
          KNOWLEDGE CTA
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12 xl:px-16">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#681761] text-white">
              <BookOpen className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                Need Specific Guidance?
              </p>

              <p className="mt-1 text-lg font-medium">
                Talk directly with our water-solutions team
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-black/55">
              Contact us when you need advice tailored to your institution,
              expected number of users, water source or preferred station
              configuration.
            </p>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-[#681761]"
            >
              Speak with our team

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 pb-3 sm:px-5 sm:pb-5">
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

          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-52 opacity-20 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              WebkitMaskImage:
                "linear-gradient(to right, black, transparent)",
              maskImage: "linear-gradient(to right, black, transparent)",
            }}
          />

          <div className="relative z-10 flex min-h-[430px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <div className="max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <Droplets className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                From Knowledge to Action
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Ready to Improve Water Access at Your Institution?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Contact our team to discuss your users, water requirements and
                suitable purification or water-station solution.
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