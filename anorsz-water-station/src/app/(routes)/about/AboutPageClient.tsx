"use client";

import Image, {
  type StaticImageData,
} from "next/image";
import Link from "next/link";
import Video from "next-video";
import BackgroundVideo from "next-video/background-video";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Droplets,
  Eye,
  Gauge,
  Handshake,
  Leaf,
  MonitorSmartphone,
  Play,
  Recycle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import CmsImage from "@/components/content/CmsImage";

import type { AboutPageContent } from "@/types/website-content";
import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";
import aboutVisionImage from "@/assets/images/about-community-1.jpeg";
import ctaBackground from "@/assets/images/home-cta-background.png";

import aboutHeroVideo from "@videos/mission.mp4";
import aboutInstallationVideo from "@videos/about-installation-video.mp4";
import aboutTechnologyVideo from "@videos/hero-video.mp4";


const viewport = {
  once: true,
  amount: 0.2,
} as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const valueIcons = {
  waterQuality: ShieldCheck,
  accessibility: Users,
  innovation: Sparkles,
  sustainability: Leaf,
} satisfies Record<
  AboutPageContent["values"]["items"][number]["key"],
  LucideIcon
>;

const technologyIcons = {
  smartCard: CreditCard,
  display: MonitorSmartphone,
  ultrafiltration: Droplets,
  uv: Zap,
  reverseOsmosis: Waves,
  highCapacity: Gauge,
} satisfies Record<
  AboutPageContent["technology"]["items"][number]["key"],
  LucideIcon
>;

const impactImages = {
  education: aboutCommunityOne,
  business: aboutCommunityTwo,
  communities: aboutCommunityThree,
} satisfies Record<
  AboutPageContent["impact"]["items"][number]["key"],
  StaticImageData
>;

const supportIcons = {
  siteAssessment: Eye,
  systemSelection: Gauge,
  installation: Wrench,
  trainingSupport: Handshake,
} satisfies Record<
  AboutPageContent["support"]["items"][number]["key"],
  LucideIcon
>;

type AboutPageClientProps = {
  content: AboutPageContent;
};

export default function AboutPageClient({
  content,
}: AboutPageClientProps) {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          VIDEO HERO
      ========================================================== */}
      <section
        aria-labelledby="about-page-heading"
        className="relative isolate min-h-[82svh] overflow-hidden bg-[#160b19] text-white"
      >
        <BackgroundVideo
          src={aboutHeroVideo}
          posterFetchPriority="high"
          aria-hidden="true"
          className="
            absolute inset-0 h-full w-full
            [&_.next-video-bg-text]:!place-content-stretch
            [&_.next-video-bg-text]:!p-0
          "
        >
          <div className="relative flex min-h-[82svh] w-full items-end overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[#681761]/25"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/10 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#110513]/90 via-[#241027]/45 to-black/15"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 24%, rgba(46,13,47,0.14) 44%, rgba(32,8,35,0.67) 72%, rgba(18,5,22,0.98) 100%)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 hidden h-[55%] w-[40%] opacity-[0.14] md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1.4px)",
                backgroundSize: "21px 21px",
                WebkitMaskImage:
                  "linear-gradient(to left, black 10%, rgba(0,0,0,0.55) 55%, transparent 100%)",
                maskImage:
                  "linear-gradient(to left, black 10%, rgba(0,0,0,0.55) 55%, transparent 100%)",
              }}
            />

            <div className="relative z-10 mx-auto w-full max-w-360 px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-16">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs"
              >
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <span className="h-px w-5 bg-white/40" />

                <span>{content.hero.breadcrumbLabel}</span>
              </motion.div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <motion.h1
                  id="about-page-heading"
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.7,
                  }}
                  className="max-w-4xl text-[clamp(2.5rem,5.7vw,5.6rem)] font-normal leading-[0.99] tracking-tighter"
                >
                  {content.hero.titleLineOne}
                  <span className="block">{content.hero.titleLineTwo}</span>
                </motion.h1>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                  }}
                  className="max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:justify-self-end"
                >
                  {content.hero.description}
                </motion.p>
              </div>

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="mt-9 h-px w-full origin-left bg-white/25"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="max-w-lg text-xs leading-6 text-white/55 sm:text-sm">
                  {content.hero.audienceDescription}
                </p>

                <Link href={content.hero.linkHref}
                  className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
                >
                  <span>{content.hero.linkLabel}</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </BackgroundVideo>
      </section>

      {/* =========================================================
          COMPANY STORY
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

        <div className="relative mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
             {content.story.eyebrow}
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4.15rem)] font-normal leading-[1.04] tracking-[-0.045em]">
              {content.story.title}
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-black/60 sm:text-[15px]">
              <motion.p variants={staggerItem}>
  {content.story.paragraphOne}
</motion.p>

<motion.p variants={staggerItem}>
  {content.story.paragraphTwo}
</motion.p>

<motion.p variants={staggerItem}>
  {content.story.paragraphThree}
</motion.p>
            </div>

            <Link href={content.story.linkHref}
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#681761]/40 pb-2 text-sm font-medium text-[#681761] transition hover:border-[#681761]"
            >
              <span>{content.story.linkLabel}</span>

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="relative aspect-[4/4.5] min-h-[500px] overflow-hidden bg-[#ddd6de]">
             <CmsImage
  media={content.story.image}
  fallback={aboutStoryImage}
  fallbackAlt="Anors.Z water station"
  className="object-cover transition duration-700 hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#160b19]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 border-t border-white/35 pt-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">
                  {content.story.beliefEyebrow}
                </p>

                <p className="mt-2 max-w-md text-xl leading-tight sm:text-2xl">
                  {content.story.beliefText}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-[#681761]/40 lg:block" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MISSION AND VISION
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                {content.purpose.eyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                {content.purpose.title}
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end"
            >
              {content.purpose.description}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2"
          >
            <motion.article
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative min-h-[540px] overflow-hidden bg-[#241026] text-white"
            >
              <CmsImage
  media={
    content.purpose
      .missionImage
  }
  fallback={aboutMissionImage}
  fallbackAlt="Anors.Z mission"
  className="object-cover transition duration-700 hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#180719] via-[#241026]/65 to-[#241026]/20" />

              <div className="relative flex min-h-[540px] flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/15 backdrop-blur-md">
                    <Target className="h-5 w-5" />
                  </span>

                  <span className="text-5xl font-light text-white/30">01</span>
                </div>

                <div className="mt-auto pt-24">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    {content.purpose.missionEyebrow}
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-normal leading-tight sm:text-3xl">
                    {content.purpose.missionTitle}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                    {content.purpose.missionDescription}
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative min-h-[540px] overflow-hidden bg-[#681761] text-white"
            >
             <CmsImage
  media={
    content.purpose
      .visionImage
  }
  fallback={aboutVisionImage}
  fallbackAlt="Anors.Z vision"
  className="object-cover transition duration-700 hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#4b1048] via-[#681761]/65 to-[#681761]/20" />

              <div className="relative flex min-h-[540px] flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/15 backdrop-blur-md">
                    <Eye className="h-5 w-5" />
                  </span>

                  <span className="text-5xl font-light text-white/30">02</span>
                </div>

                <div className="mt-auto pt-24">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    {content.purpose.visionEyebrow}
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-normal leading-tight sm:text-3xl">
                   {content.purpose.visionTitle}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
                    {content.purpose.visionDescription}
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMPANY VALUES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,23,97,0.16) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.35), transparent)",
            maskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.35), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              {content.values.eyebrow}
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.04em]">
              {content.values.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          >
            {content.values.items.map((value, index) => {
  const Icon = valueIcons[value.key];

              return (
                <motion.article
                  key={value.key}
                  variants={staggerItem}
                  whileHover={{ y: -7 }}
                  className="group min-h-[310px] border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:z-10 hover:border-[#681761]/30 hover:shadow-[0_24px_60px_rgba(50,14,49,0.10)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition duration-300 group-hover:bg-[#681761] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-sm text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{value.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY VIDEO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#1e0c21] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d89ad0] sm:text-xs">
                {content.technology.eyebrow}
              </p>

              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                {content.technology.title}
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end"
            >
              {content.technology.description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative mt-12 overflow-hidden border border-white/15 bg-black lg:mt-16"
          >
            <div className="aspect-video">
              <Video
                src={aboutTechnologyVideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute left-5 top-5 z-10 hidden items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white backdrop-blur-md sm:flex">
              <Play className="h-3.5 w-3.5" />
              <span>{content.technology.videoLabel}</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
           {content.technology.items.map((item) => {
  const Icon = technologyIcons[item.key];

              return (
                <motion.article
                  key={item.key}
                  variants={staggerItem}
                  whileHover={{ y: -7 }}
                  className="group min-h-[310px] bg-[#1e0c21] p-7 transition duration-300 hover:bg-[#681761] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-3xl font-light text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-medium">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY IMPACT GALLERY
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                {content.impact.eyebrow}
              </p>

              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                {content.impact.title}
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end"
            >
              {content.impact.description}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3"
          >
            {content.impact.items.map((item, index) => {
  const image = impactImages[item.key];

  return (
    <motion.article
      key={item.key}
      variants={staggerItem}
      whileHover={{
        y: index === 1 ? 30 : -10,
      }}
      className={`group relative overflow-hidden ${
        index === 1
          ? "lg:translate-y-10"
          : ""
      }`}
    >
      <div className="relative aspect-[4/5] min-h-[440px] overflow-hidden bg-[#ded8df]">
        <CmsImage
  media={item.image}
  fallback={image}
  fallbackAlt={item.title}
  className="object-cover transition duration-700 group-hover:scale-[1.06]"
  sizes="(max-width: 1024px) 100vw, 34vw"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-[#170719]/90 via-[#170719]/15 to-transparent" />

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25 + index * 0.1,
            duration: 0.62,
          }}
          viewport={viewport}
          className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7"
        >
          <span className="text-xs text-white/50">
            {String(index + 1).padStart(
              2,
              "0",
            )}
          </span>

          <h3 className="mt-3 text-2xl font-normal">
            {item.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
})}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SUSTAINABILITY
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(21,148,71,0.18) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.3), transparent)",
            maskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.3), transparent)",
          }}
        />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative aspect-[16/11] min-h-[440px] overflow-hidden bg-[#d9d2db]"
          >
           <CmsImage
  media={
    content.sustainability.image
  }
  fallback={
    aboutSustainabilityImage
  }
  fallbackAlt="Anors.Z environmental sustainability"
  className="object-cover transition duration-700 hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#180719]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-3">
                <Recycle className="h-5 w-5" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  {content.sustainability.imageEyebrow}
                </span>
              </div>

              <p className="mt-3 max-w-lg text-xl leading-tight sm:text-2xl">
                {content.sustainability.imageText}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#159447] sm:text-xs">
              {content.sustainability.eyebrow}
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              {content.sustainability.eyebrow}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              {content.sustainability.description}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-8 space-y-4"
            >
              {content.sustainability.points.map((point) => (
                <motion.div
                  key={point}
                  variants={staggerItem}
                  className="flex items-start gap-4 border-b border-black/10 pb-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#159447]/10 text-[#159447]">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <p className="text-sm leading-6 text-black/65">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INSTALLATION AND SUPPORT VIDEO
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                {content.support.eyebrow}
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                {content.support.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
                {content.support.description}
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              >
                {content.support.items.map((item) => {
  const Icon = supportIcons[item.key];

  return (
    <motion.div
      key={item.key}
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group border border-black/10 bg-[#f7f6f4] p-5 transition duration-300 hover:border-[#681761]/25 hover:shadow-[0_16px_40px_rgba(48,13,45,0.08)]"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 7,
        }}
      >
        <Icon className="h-5 w-5 text-[#681761]" />
      </motion.div>

      <h3 className="mt-5 text-base font-medium">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-black/55">
        {item.description}
      </p>
    </motion.div>
  );
})}
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-5"
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="relative aspect-video overflow-hidden bg-black"
              >
                <Video
                  src={aboutInstallationVideo}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="relative aspect-[16/7] min-h-[230px] overflow-hidden bg-[#ded7df]"
              >
               <CmsImage
  media={content.support.image}
  fallback={aboutSupportImage}
  fallbackAlt="Anors.Z installation and technical support"
  className="object-cover transition duration-700 hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

                <div className="absolute inset-0 bg-gradient-to-r from-[#160b19]/65 to-transparent" />

                <div className="absolute bottom-6 left-6 max-w-sm text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {content.support.imageEyebrow}
                  </p>

                  <p className="mt-2 text-xl leading-tight">
                    {content.support.imageText}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 pb-3 sm:px-5 sm:pb-5">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={viewport}
          className="relative mx-auto min-h-[430px] max-w-[1440px] overflow-hidden"
        >
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
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-3xl"
            >
              <motion.span
                variants={staggerItem}
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                <Droplets className="h-5 w-5" />
              </motion.span>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs"
              >
                {content.cta.eyebrow}
              </motion.p>

              <motion.h2
                variants={staggerItem}
                className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]"
              >
                {content.cta.title}
              </motion.h2>

              <motion.p
                variants={staggerItem}
                className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70"
              >
                {content.cta.description}
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link href={content.cta.primaryButtonHref}
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span>{content.cta.primaryButtonLabel}</span>

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href={content.cta.secondaryButtonHref}
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  {content.cta.secondaryButtonLabel}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}