"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Droplets,
  Film,
  ImageIcon,
  Play,
  Sparkles,
} from "lucide-react";

import GalleryExplorer from "@/components/gallery/GalleryExplorer";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import ctaBackground from "@/assets/images/home-cta-background.png";

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

const galleryHighlights = [
  {
    title: "Videos",
    value: "04",
    description:
      "Company, installation, technology and social-media videos.",
    icon: Film,
  },
  {
    title: "Photo Stories",
    value: "08",
    description:
      "Water stations, institutions, communities and sustainability.",
    icon: Camera,
  },
  {
    title: "Media Categories",
    value: "05",
    description:
      "Organised collections that make the gallery easier to explore.",
    icon: ImageIcon,
  },
];


export default function GalleryPageClient() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          GALLERY HERO
      ========================================================== */}
      <section className="relative isolate min-h-[76svh] overflow-hidden bg-[#160b19] text-white">
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="absolute inset-0"
        >
          <Image
            src={aboutSupportImage}
            alt="Anors.Z water station serving an institution and community"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Brand tint */}
        <div className="absolute inset-0 bg-[#681761]/30" />

        {/* Header readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/10 to-transparent" />

        {/* Side contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-[#100412]/95 via-[#2b102f]/65 to-black/15" />

        {/* Bottom contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#160b19]/95" />

        {/* Decorative pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[58%] w-[40%] opacity-[0.14] md:block"
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

        <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-[1440px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 xl:px-16">
          <div className="w-full">
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

              <span>Gallery</span>
            </motion.div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <motion.h1
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
                className="max-w-5xl text-[clamp(2.5rem,5.7vw,5.6rem)] font-normal leading-[0.99] tracking-[-0.05em]"
              >
                Our Water Story
                <span className="block">in Pictures and Motion.</span>
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
                className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end"
              >
                Explore the water stations, people, installations, technology
                and sustainability initiatives that bring the Anors.Z vision
                to life.
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
              className="mt-10 h-px w-full origin-left bg-white/25"
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
              className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                Portrait videos, project photographs, institutional
                installations and community impact.
              </p>

              <a
                href="#gallery-introduction"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Explore the gallery

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY INTRODUCTION
      ========================================================== */}
      <section
        id="gallery-introduction"
        className="relative scroll-mt-24 overflow-hidden bg-white"
      >
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Explore Our Work
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4.1rem)] font-normal leading-[1.04] tracking-[-0.045em]">
                Real People, Practical Technology and Visible Impact
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
                Our gallery brings together moments from installations,
                institutional use, community access and demonstrations of the
                technology behind the water stations.
              </p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 flex items-start gap-4 border-l-2 border-[#681761] pl-5"
              >
                <Play className="mt-1 h-5 w-5 shrink-0 text-[#681761]" />

                <p className="max-w-lg text-sm leading-7 text-black/55">
                  The videos are displayed vertically to preserve their
                  original portrait format and provide the same natural viewing
                  experience as mobile and social-media content.
                </p>
              </motion.div>
            </motion.div>

            {/* Intro image composition */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -7,
                }}
                className="group relative min-h-[440px] overflow-hidden bg-[#ddd7df]"
              >
                <Image
                  src={aboutCommunityOne}
                  alt="Students and community members using a water station"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/55 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -7,
                }}
                className="group relative mt-12 min-h-[440px] overflow-hidden bg-[#ddd7df]"
              >
                <Image
                  src={aboutMissionImage}
                  alt="Anors.Z water technology and purification system"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/55 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>

          {/* Gallery statistics */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-3"
          >
            {galleryHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <motion.article
                  key={highlight.title}
                  variants={staggerItem}
                  whileHover={{
                    y: -7,
                  }}
                  className="group min-h-[240px] bg-[#f8f7f5] p-7 transition duration-300 hover:bg-[#681761] hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-4xl font-light text-[#681761] transition group-hover:text-white/30">
                      {highlight.value}
                    </span>
                  </div>

                  <h3 className="mt-10 text-lg font-medium">
                    {highlight.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55 transition group-hover:text-white/70">
                    {highlight.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE VIDEOS AND IMAGES
      ========================================================== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
        }}
      >
        <GalleryExplorer />
      </motion.section>

      {/* =========================================================
          GALLERY PURPOSE STRIP
      ========================================================== */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-12 xl:px-16">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex items-center gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#681761] text-white">
              <Camera className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                More Media Coming
              </p>

              <p className="mt-1 text-lg font-medium">
                A growing record of our work
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-3xl text-sm leading-7 text-black/55 lg:justify-self-end"
          >
            The gallery can continue to grow as new stations are installed,
            clients are served and company activities are documented. Future
            uploads can be managed through the website&apos;s administrative
            dashboard.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 py-3 sm:px-5 sm:py-5">
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
          className="relative mx-auto min-h-[440px] max-w-[1440px] overflow-hidden"
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

          <div className="relative z-10 flex min-h-[440px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
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
                <Sparkles className="h-5 w-5" />
              </motion.span>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs"
              >
                Create Your Own Impact Story
              </motion.p>

              <motion.h2
                variants={staggerItem}
                className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]"
              >
                Ready to Bring a Water Station to Your Institution?
              </motion.h2>

              <motion.p
                variants={staggerItem}
                className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70"
              >
                Contact our team to discuss your environment, expected users,
                water source and preferred water-station solution.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/contact#enquiry-form"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start an Enquiry

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  <Droplets className="h-4 w-4" />

                  View Solutions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}