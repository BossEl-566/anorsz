import Link from "next/link";

import {
  ArrowLeft,
  Building2,
  ExternalLink,
} from "lucide-react";

import AboutContentForm from "@/components/admin/content/AboutContentForm";

import { createClient } from "@/lib/supabase/server";

import { defaultAboutContent } from "@/lib/content/default-about-content";

import { mergeAboutContent } from "@/lib/content/merge-about-content";

import type { AboutPageContent } from "@/types/website-content";
import type { MediaItem } from "@/types/media";
export default async function AdminAboutContentPage() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("website_pages")
    .select("content, updated_at")
    .eq("slug", "about")
    .maybeSingle();
 const {
  data: mediaData,
  error: mediaError,
} = await supabase
  .from("media_library")
  .select(
    `
      id,
      name,
      alt_text,
      media_type,
      bucket_name,
      storage_path,
      public_url,
      mime_type,
      file_size,
      page_usage,
      uploaded_by,
      created_at,
      updated_at
    `,
  )
  .eq("media_type", "image")
  .in(
    "page_usage",
    [
      "about",
      "global",
    ],
  )
  .order(
    "created_at",
    {
      ascending: false,
    },
  );

if (mediaError) {
  console.error(
    "Unable to load About page media:",
    mediaError,
  );
}

const media =
  (mediaData ?? []) as MediaItem[];

  const databaseContent =
    data?.content as
      | Partial<AboutPageContent>
      | null;

  const content = databaseContent
    ? mergeAboutContent(databaseContent)
    : defaultAboutContent;



  return (
    <div className="mx-auto max-w-[1300px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 text-xs font-medium text-black/40 transition hover:text-[#681761]"
          >
            <ArrowLeft className="h-4 w-4" />

            Website Content
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <Building2 className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
                Page Content
              </p>

              <h1 className="mt-2 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
                About Us
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
                Manage the company story,
                mission, vision, values,
                technology, sustainability and
                support information.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/about"
          target="_blank"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/55 transition hover:text-[#681761]"
        >
          View About Page

          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {data?.updated_at && (
        <p className="mt-6 text-xs text-black/35">
          Last database update:{" "}
          {new Date(
            data.updated_at,
          ).toLocaleString()}
        </p>
      )}

      <div className="mt-8">
        <AboutContentForm
  initialContent={content}
  mediaLibrary={media}
/>
      </div>
    </div>
  );
}