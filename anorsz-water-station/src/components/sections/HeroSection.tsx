import Link from "next/link";
import BackgroundVideo from "next-video/background-video";

import heroVideo from "@videos/hero-video.mp4";

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M7 17L17 7M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#160b19] text-white"
    >
      <BackgroundVideo
        src={heroVideo}
        posterFetchPriority="high"
        aria-hidden="true"
        className="
          absolute inset-0 h-full w-full
          [&_.next-video-bg-text]:!place-content-stretch
          [&_.next-video-bg-text]:!p-0
        "
      >
        {/* 
          Everything inside this container is layered directly
          over the background video.
        */}
        <div className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
          {/* General brand-colour tint */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#681761]/20"
          />

          {/* Dark overlay at the top for the transparent header */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent"
          />

          {/* Gentle side contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-black/20"
          />

          {/* Strong bottom overlay behind the text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 25%, rgba(49, 13, 48, 0.10) 42%, rgba(35, 10, 38, 0.58) 68%, rgba(18, 5, 22, 0.96) 100%)",
            }}
          />

          {/* Purple glow around the lower section */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#681761]/25 to-transparent"
          />

          {/* Subtle lower-right pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 hidden h-[48%] w-[42%] opacity-[0.12] lg:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.75) 1px, transparent 1.4px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "linear-gradient(to left, black 10%, rgba(0,0,0,0.65) 55%, transparent 100%)",
              maskImage:
                "linear-gradient(to left, black 10%, rgba(0,0,0,0.65) 55%, transparent 100%)",
            }}
          />

          {/* Hero content */}
          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-32 sm:px-8 sm:pb-10 md:pb-12 lg:px-12 xl:px-16">
            <div className="max-w-5xl">
              {/* Small heading */}
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                Anors.Z Global Water Station
              </p>

              {/* Main heading — intentionally smaller */}
              <h1
                id="home-hero-heading"
                className="max-w-4xl text-[clamp(2.25rem,4.2vw,4rem)] font-normal leading-[1.08] tracking-[-0.035em] text-white"
              >
                Pure Water Solutions for
                <span className="block">Healthier Communities</span>
              </h1>
            </div>

            {/* Horizontal line */}
            <div className="mt-7 h-px w-full bg-white/30 sm:mt-8 lg:mt-9" />

            {/* Lower text area */}
            <div className="grid gap-6 pt-5 sm:pt-6 md:grid-cols-2 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_auto] lg:items-end lg:gap-14">
              <p className="max-w-sm text-[13px] leading-5.5 text-white/75 sm:text-sm sm:leading-6">
                We provide clean, safe and affordable drinking water through
                advanced purification systems designed for reliable everyday
                access.
              </p>

              <p className="max-w-md text-[13px] leading-5.5 text-white/75 sm:text-sm sm:leading-6">
                Our intelligent water stations combine smart-card access,
                real-time monitoring and sustainable refill technology for
                institutions and communities.
              </p>

              <div className="md:col-span-2 lg:col-span-1 lg:justify-self-end">
                <Link
                  href="/solutions"
                  className="group inline-flex min-w-[180px] items-center justify-between gap-6 border-b border-white/50 pb-2 text-[13px] font-medium text-white transition-colors duration-300 hover:border-white sm:text-sm"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom brand line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-30 h-[3px] w-full bg-gradient-to-r from-[#681761] via-[#9a247e] to-[#159447]"
          />
        </div>
      </BackgroundVideo>
    </section>
  );
}