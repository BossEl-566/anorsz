"use client";

import Image, { type StaticImageData } from "next/image";
import Video from "next-video";
import { useEffect, useMemo, useState } from "react";
import {
  Camera,
  Film,
  ImageIcon,
  Maximize2,
  Play,
  X,
  ZoomIn,
} from "lucide-react";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";
import aboutVisionImage from "@/assets/images/about-community-1.jpeg";

import aboutHeroVideo from "@videos/mission.mp4";
import aboutInstallationVideo from "@videos/about-installation-video.mp4";
import aboutTechnologyVideo from "@videos/about-technology-video.mp4";
import tiktokVideo from "@videos/gallery-tiktok-video.mp4";

const imageCategories = [
  "All",
  "Water Stations",
  "Technology",
  "Institutions",
  "Community",
  "Sustainability",
] as const;

type ImageCategory = (typeof imageCategories)[number];

type GalleryImage = {
  id: number;
  title: string;
  description: string;
  category: Exclude<ImageCategory, "All">;
  image: StaticImageData;
  alt: string;
};

const videoItems = [
  {
    id: 1,
    title: "Our Water Mission",
    description:
      "An introduction to the company’s vision for pure, safe and accessible drinking water.",
    category: "Company Story",
    src: aboutHeroVideo,
  },
  {
    id: 2,
    title: "Installation and Setup",
    description:
      "A closer look at water-station installation, setup and preparation for operation.",
    category: "Installation",
    src: aboutInstallationVideo,
  },
  {
    id: 3,
    title: "Technology Demonstration",
    description:
      "See the smart-card process, displays, dispensing features and water-station technology.",
    category: "Technology",
    src: aboutTechnologyVideo,
  },
  {
    id: 4,
    title: "Anors.Z Social Highlight",
    description:
      "A short portrait video highlighting the station, people and water-access experience.",
    category: "TikTok Highlight",
    src: tiktokVideo,
  },
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Intelligent Water Station",
    description:
      "A modern dispensing station combining purification, smart access and convenient refilling.",
    category: "Water Stations",
    image: aboutStoryImage,
    alt: "Anors.Z intelligent water station",
  },
  {
    id: 2,
    title: "Community Water Access",
    description:
      "Community members accessing safe drinking water using reusable bottles.",
    category: "Community",
    image: aboutSupportImage,
    alt: "Community members using a drinking-water station",
  },
  {
    id: 3,
    title: "Water for Education",
    description:
      "Water access designed to support students, teachers and educational institutions.",
    category: "Institutions",
    image: aboutCommunityOne,
    alt: "Students using an institutional water station",
  },
  {
    id: 4,
    title: "Institutional Installation",
    description:
      "A station configuration suitable for companies, schools and shared facilities.",
    category: "Institutions",
    image: aboutCommunityTwo,
    alt: "Institutional drinking-water installation",
  },
  {
    id: 5,
    title: "Shared Community Solution",
    description:
      "A refill system designed around the needs of communities and public environments.",
    category: "Community",
    image: aboutCommunityThree,
    alt: "Community drinking-water solution",
  },
  {
    id: 6,
    title: "Purification Technology",
    description:
      "Modern treatment technology supporting cleaner and safer drinking water.",
    category: "Technology",
    image: aboutMissionImage,
    alt: "Water purification technology",
  },
  {
    id: 7,
    title: "Reusable Bottle Culture",
    description:
      "Encouraging refill habits that reduce dependence on disposable plastic packaging.",
    category: "Sustainability",
    image: aboutSustainabilityImage,
    alt: "Reusable bottles and sustainable water access",
  },
  {
    id: 8,
    title: "Positive Community Impact",
    description:
      "Supporting healthier institutions and communities through accessible water systems.",
    category: "Water Stations",
    image: aboutVisionImage,
    alt: "People benefiting from safe drinking-water access",
  },
];

export default function GalleryExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<ImageCategory>("All");

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory,
    );
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      {/* =======================================================
          PORTRAIT VIDEO GALLERY
      ======================================================== */}
      <section className="relative overflow-hidden bg-[#211024] text-white">
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Film className="h-4 w-4 text-[#dda2d7]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dda2d7] sm:text-xs">
                  Video Gallery
                </p>
              </div>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                See Our Water Solutions in Motion
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              Watch company highlights, installation activities and
              demonstrations of the technology behind our intelligent water
              stations.
            </p>
          </div>

          {/* Portrait videos */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {videoItems.map((video, index) => (
              <article key={video.id} className="group">
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden border border-white/15 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                  <Video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full bg-black object-contain"
                    style={{
                      aspectRatio: "9 / 16",
                    }}
                  />

                  {/* Number badge */}
                  <span className="pointer-events-none absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-xs text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Portrait label */}
                  <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-md">
                    Portrait Video
                  </span>
                </div>

                <div className="mx-auto mt-5 max-w-[360px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dda2d7]">
                    {video.category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium">{video.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-white/55">
              <Play className="h-4 w-4" />

              <p>
                Select any video to play it and control its sound.
              </p>
            </div>

            <p className="text-xs text-white/40">
              Presented in their original portrait format.
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================
          IMAGE GALLERY
      ======================================================== */}
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <ImageIcon className="h-4 w-4 text-[#681761]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                  Photo Gallery
                </p>
              </div>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Our Stations, Technology and Community Impact
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Explore images covering water stations, institutional
              installations, community access, purification technology and
              sustainable refill practices.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-col gap-5 border-b border-black/10 pb-7 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {imageCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition duration-300 sm:text-sm ${
                      isActive
                        ? "border-[#681761] bg-[#681761] text-white"
                        : "border-black/15 bg-white text-black/55 hover:border-[#681761]/40 hover:text-[#681761]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-black/45">
              Showing{" "}
              <span className="font-medium text-[#171319]">
                {filteredImages.length}
              </span>{" "}
              {filteredImages.length === 1 ? "image" : "images"}
            </p>
          </div>

          {/* Image grid */}
          <div className="mt-8 grid auto-rows-[210px] gap-5 sm:auto-rows-[250px] md:grid-cols-2 lg:auto-rows-[270px] lg:grid-cols-3">
            {filteredImages.map((item, index) => {
              const isLarge =
                index === 0 ||
                (filteredImages.length > 4 && index === 4);

              return (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden bg-[#ddd7df] ${
                    isLarge
                      ? "md:row-span-2 lg:col-span-2"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Open ${item.title}`}
                    className="absolute inset-0 z-10 cursor-zoom-in text-left"
                  >
                    <span className="sr-only">
                      View {item.title}
                    </span>
                  </button>

                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    sizes={
                      isLarge
                        ? "(max-width: 768px) 100vw, 67vw"
                        : "(max-width: 768px) 100vw, 34vw"
                    }
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/90 via-[#160719]/10 to-transparent" />

                  <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/55 sm:text-[10px]">
                      {item.category}
                    </p>

                    <h3
                      className={`mt-2 font-medium leading-tight ${
                        isLarge
                          ? "text-xl sm:text-2xl"
                          : "text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-md text-sm leading-6 text-white/60 ${
                        isLarge ? "hidden sm:block" : "hidden"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-black/40">
            <Maximize2 className="h-4 w-4" />
            Select an image to view it in full-screen mode.
          </div>
        </div>
      </section>

      {/* =======================================================
          IMAGE LIGHTBOX
      ======================================================== */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0711]/95 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-[#180a1b] shadow-2xl"
          >
            <div className="relative min-h-[55vh] flex-1 bg-black sm:min-h-[68vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="border-t border-white/10 bg-[#180a1b] p-5 text-white sm:flex sm:items-end sm:justify-between sm:gap-10 sm:p-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dda2d7]">
                  {selectedImage.category}
                </p>

                <h2 className="mt-2 text-xl font-medium sm:text-2xl">
                  {selectedImage.title}
                </h2>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:mt-0">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}