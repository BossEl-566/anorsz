import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogPostNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1f0c22] px-5 py-32 text-white">
      <div className="max-w-xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <BookOpen className="h-6 w-6" />
        </span>

        <p className="mt-7 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
          Article Not Found
        </p>

        <h1 className="mt-4 text-4xl font-normal tracking-[-0.04em] sm:text-5xl">
          We Couldn’t Find That Article
        </h1>

        <p className="mt-5 text-sm leading-7 text-white/60">
          The article may have been moved, removed or the address may be
          incorrect. Return to the blog to explore the available water,
          technology and sustainability articles.
        </p>

        <Link
          href="/blog"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return to Blog
        </Link>
      </div>
    </main>
  );
}