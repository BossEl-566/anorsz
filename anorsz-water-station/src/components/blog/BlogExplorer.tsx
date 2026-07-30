"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  X,
} from "lucide-react";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: StaticImageData;
  slug: string;
};

const categories = [
  "All",
  "Water Technology",
  "Health & Safety",
  "Sustainability",
  "Institutions",
  "Community Impact",
];

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How Smart Water Stations Improve Access to Safe Drinking Water",
    excerpt:
      "Explore how digital monitoring, smart-card access and modern dispensing technology can make clean drinking water more convenient and reliable.",
    category: "Water Technology",
    publishedAt: "July 2026",
    readingTime: "5 min read",
    image: aboutStoryImage,
    slug: "how-smart-water-stations-improve-water-access",
  },
  {
    id: 2,
    title: "Why Safe Drinking Water Matters in Schools",
    excerpt:
      "Reliable access to safe water supports student health, concentration, attendance and the overall learning environment.",
    category: "Institutions",
    publishedAt: "July 2026",
    readingTime: "4 min read",
    image: aboutCommunityOne,
    slug: "why-safe-drinking-water-matters-in-schools",
  },
  {
    id: 3,
    title: "Reducing Plastic Waste Through Reusable Water Bottles",
    excerpt:
      "A refill-based water system can reduce dependence on disposable plastic bottles and sachet-water packaging.",
    category: "Sustainability",
    publishedAt: "July 2026",
    readingTime: "4 min read",
    image: aboutSustainabilityImage,
    slug: "reducing-plastic-waste-with-reusable-bottles",
  },
  {
    id: 4,
    title: "Understanding Reverse Osmosis, UV and Ultrafiltration",
    excerpt:
      "Learn how different purification technologies work together to remove sediments, dissolved substances and harmful microorganisms.",
    category: "Water Technology",
    publishedAt: "July 2026",
    readingTime: "6 min read",
    image: aboutMissionImage,
    slug: "understanding-modern-water-purification",
  },
  {
    id: 5,
    title: "Choosing the Right Water Station for Your Institution",
    excerpt:
      "Station capacity, available space, water source, user population and temperature requirements all influence the right configuration.",
    category: "Institutions",
    publishedAt: "July 2026",
    readingTime: "5 min read",
    image: aboutCommunityTwo,
    slug: "choosing-the-right-water-station",
  },
  {
    id: 6,
    title: "Creating Healthier Communities Through Better Water Access",
    excerpt:
      "Community-based water systems can improve convenience, support public health and create more sustainable water-consumption habits.",
    category: "Community Impact",
    publishedAt: "July 2026",
    readingTime: "5 min read",
    image: aboutSupportImage,
    slug: "creating-healthier-communities-through-water",
  },
  {
    id: 7,
    title: "The Importance of Monitoring Drinking-Water Quality",
    excerpt:
      "Intelligent displays and regular system monitoring help operators understand water quality, usage and station performance.",
    category: "Health & Safety",
    publishedAt: "July 2026",
    readingTime: "4 min read",
    image: aboutCommunityThree,
    slug: "importance-of-monitoring-water-quality",
  },
];

export default function BlogExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.excerpt.toLowerCase().includes(normalizedSearch) ||
        post.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      {/* Filters and search */}
      <div className="flex flex-col gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
            Browse by topic
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition duration-300 sm:text-sm ${
                    isActive
                      ? "border-[#681761] bg-[#681761] text-white"
                      : "border-black/15 bg-white text-black/60 hover:border-[#681761]/40 hover:text-[#681761]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="blog-search" className="sr-only">
            Search blog articles
          </label>

          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/35" />

          <input
            id="blog-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search articles..."
            className="h-12 w-full rounded-full border border-black/15 bg-white pl-11 pr-11 text-sm text-[#171319] outline-none transition placeholder:text-black/35 focus:border-[#681761] focus:ring-2 focus:ring-[#681761]/10"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear blog search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-black/40 transition hover:bg-black/5 hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results summary */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-black/50">
          Showing{" "}
          <span className="font-medium text-[#171319]">
            {filteredPosts.length}
          </span>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </p>

        {(activeCategory !== "All" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="text-sm font-medium text-[#681761] transition hover:text-[#4d1049]"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Article grid */}
      {filteredPosts.length > 0 ? (
        <div className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group">
              <Link
                href={`/blog/${post.slug}`}
                className="block overflow-hidden bg-[#ded8df]"
                aria-label={`Read ${post.title}`}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/35 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-md">
                    {post.category}
                  </div>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#681761] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <div className="pt-5">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-black/40">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {post.publishedAt}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-medium leading-[1.25] tracking-[-0.025em]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition group-hover:text-[#681761]"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/55">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#681761]"
                >
                  Read article

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex min-h-[320px] flex-col items-center justify-center border border-dashed border-black/15 bg-white px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/8 text-[#681761]">
            <Search className="h-5 w-5" />
          </span>

          <h3 className="mt-5 text-xl font-medium">No articles found</h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
            Try another search term or select a different article category.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 rounded-full bg-[#681761] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#4d1049]"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}