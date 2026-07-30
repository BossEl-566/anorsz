"use client";

import Link from "next/link";
import { useRef, useState } from "react";
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

function MutedIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 10V14H8L13 18V6L8 10H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 9L21 13M21 9L17 13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 10V14H8L13 18V6L8 10H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16 9.5C16.7 10.1 17 10.8 17 12C17 13.2 16.7 13.9 16 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M18.5 7C20 8.3 20.7 9.9 20.7 12C20.7 14.1 20 15.7 18.5 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleSoundToggle = async () => {
    const mediaElement =
      heroRef.current?.querySelector<HTMLVideoElement>("video, mux-video");

    if (!mediaElement) {
      return;
    }

    const shouldMute = !mediaElement.muted;

    mediaElement.muted = shouldMute;
    setIsMuted(shouldMute);

    /*
     * When sound is enabled, request playback again.
     * The button click counts as direct user interaction.
     */
    if (!shouldMute) {
      try {
        await mediaElement.play();
      } catch {
        // The poster/video remains visible if playback cannot resume.
      }
    }
  };

  return (
    <section
      ref={heroRef}
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
        <div className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
          {/* General brand-colour tint */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#681761]/25"
          />

          {/* Dark top overlay for the transparent header */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/15 to-transparent"
          />

          {/* Side contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/25"
          />

          {/* Dark bottom overlay behind the hero content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 22%, rgba(49, 13, 48, 0.16) 40%, rgba(35, 10, 38, 0.68) 67%, rgba(18, 5, 22, 0.98) 100%)",
            }}
          />

          {/* Purple glow around the lower section */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#681761]/30 to-transparent"
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
          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-7 pt-32 sm:px-8 sm:pb-10 md:pb-12 lg:px-12 xl:px-16">
            <div className="max-w-5xl">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 sm:mb-4 sm:text-xs sm:tracking-[0.2em]">
                Anors.Z Global Water Station
              </p>

              <h1
                id="home-hero-heading"
                className="max-w-4xl text-[2rem] font-normal leading-[1.08] tracking-[-0.035em] text-white sm:text-[clamp(2.25rem,4.2vw,4rem)]"
              >
                Pure Water Solutions for
                <span className="block">Healthier Communities</span>
              </h1>
            </div>

            <div className="mt-6 h-px w-full bg-white/30 sm:mt-8 lg:mt-9" />

            <div className="grid gap-5 pt-4 sm:gap-6 sm:pt-6 md:grid-cols-2 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_auto] lg:items-end lg:gap-14">
              <p className="max-w-sm text-[13px] leading-5.5 text-white/75 sm:text-sm sm:leading-6">
                <span className="sm:hidden">
                  Clean, safe and affordable drinking water powered by advanced
                  purification technology.
                </span>

                <span className="hidden sm:inline">
                  We provide clean, safe and affordable drinking water through
                  advanced purification systems designed for reliable everyday
                  access.
                </span>
              </p>

              <p className="hidden max-w-md text-sm leading-6 text-white/75 sm:block">
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

      {/* Video sound control */}
      <button
        type="button"
        onClick={handleSoundToggle}
        aria-label={isMuted ? "Turn video sound on" : "Turn video sound off"}
        aria-pressed={!isMuted}
        className="absolute right-5 top-24 z-40 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 text-xs font-medium text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:top-28 sm:px-4 lg:right-12 xl:right-16"
      >
        {isMuted ? <MutedIcon /> : <SoundIcon />}

        <span className="hidden sm:inline">
          {isMuted ? "Sound on" : "Sound off"}
        </span>
      </button>
    </section>
  );
}