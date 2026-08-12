import Link from "next/link";

import {
  ArrowLeft,
  ExternalLink,
  Waves,
} from "lucide-react";

import {
  createClient,
} from "@/lib/supabase/server";

import {
  defaultSolutionsContent,
} from "@/lib/content/default-solutions-content";

import {
  mergeSolutionsContent,
} from "@/lib/content/merge-solutions-content";

import type {
  MediaItem,
} from "@/types/media";

import type {
  SolutionsPageContent,
} from "@/types/website-content";

export default async function AdminSolutionsContentPage() {
  const supabase =
    await createClient();

  /*
   * =======================================================
   * LOAD EXISTING PAGE CONTENT
   * =======================================================
   */

  const {
    data,
    error,
  } = await supabase
    .from(
      "website_pages",
    )
    .select(
      "content, updated_at",
    )
    .eq(
      "slug",
      "solutions",
    )
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to load Solutions content:",
      error,
    );
  }

  const databaseContent =
    data?.content as
      | Partial<SolutionsPageContent>
      | null;

  const content =
    databaseContent
      ? mergeSolutionsContent(
          databaseContent,
        )
      : defaultSolutionsContent;

  /*
   * =======================================================
   * LOAD SOLUTIONS MEDIA
   * =======================================================
   */

  const {
    data: mediaData,
    error: mediaError,
  } = await supabase
    .from(
      "media_library",
    )
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
    .eq(
      "media_type",
      "image",
    )
    .in(
      "page_usage",
      [
        "solutions",
        "global",
      ],
    )
    .order(
      "created_at",
      {
        ascending:
          false,
      },
    );

  if (mediaError) {
    console.error(
      "Unable to load Solutions media:",
      mediaError,
    );
  }

  const media =
    (mediaData ??
      []) as MediaItem[];

  return (
    <div className="mx-auto max-w-[1300px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Header */}

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
              <Waves className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
                Page Content
              </p>

              <h1 className="mt-2 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
                Solutions
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
                Manage water
                solutions,
                technology,
                capacity ranges,
                industries,
                groundwater
                treatment and
                installation
                support.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/solutions"
          target="_blank"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/55 transition hover:text-[#681761]"
        >
          View Solutions Page

          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {data?.updated_at && (
        <p className="mt-6 text-xs text-black/35">
          Last database
          update:{" "}
          {new Date(
            data.updated_at,
          ).toLocaleString()}
        </p>
      )}

      {/* Temporary status */}

      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#681761]">
          Solutions CMS
        </p>

        <h2 className="mt-3 text-xl font-semibold text-[#211024]">
          Content model ready
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/50">
          The Solutions
          content structure has
          loaded successfully.
          The editor will use{" "}
          <strong>
            {media.length}
          </strong>{" "}
          available Solutions /
          Global images.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Hero",
            "Solution Overview",
            "Smart Water Stations",
            "Technology",
            "Campus Capacity",
            "Community Stations",
            "Commercial Purification",
            "Groundwater Treatment",
            "Industries Served",
            "Installation & Support",
            "Final CTA",
          ].map(
            (
              section,
            ) => (
              <div
                key={
                  section
                }
                className="rounded-xl border border-black/10 bg-[#faf9f8] px-4 py-4 text-sm font-medium text-[#211024]"
              >
                {section}
              </div>
            ),
          )}
        </div>

        {/* Prevent unused variable while editor is next */}
        <div className="hidden">
          {
            content.hero
              .titleLineOne
          }
        </div>
      </div>
    </div>
  );
}