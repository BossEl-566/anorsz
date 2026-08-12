import {
  HardDrive,
  ImageIcon,
  Video,
} from "lucide-react";

import MediaLibraryClient from "@/components/admin/media/MediaLibraryClient";

import { createClient } from "@/lib/supabase/server";

import type { MediaItem } from "@/types/media";

/*
 * =========================================================
 * STORAGE FORMATTER
 * =========================================================
 */

function formatStorageSize(
  bytes: number,
) {
  if (bytes === 0) {
    return "0 KB";
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  if (
    bytes <
    1024 *
      1024 *
      1024
  ) {
    return `${(
      bytes /
      1024 /
      1024
    ).toFixed(2)} MB`;
  }

  return `${(
    bytes /
    1024 /
    1024 /
    1024
  ).toFixed(2)} GB`;
}

/*
 * =========================================================
 * MEDIA LIBRARY PAGE
 * =========================================================
 */

export default async function AdminMediaPage() {
  const supabase =
    await createClient();

  /*
   * =========================================================
   * LOAD MEDIA LIBRARY
   * =========================================================
   */

  const {
    data,
    error,
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
    .order(
      "created_at",
      {
        ascending: false,
      },
    );

  if (error) {
    console.error(
      "Unable to load media library:",
      error,
    );
  }

  const media =
    (data ??
      []) as MediaItem[];

  /*
   * =========================================================
   * MEDIA STATISTICS
   * =========================================================
   */

  const imageCount =
    media.filter(
      (item) =>
        item.media_type ===
        "image",
    ).length;

  const videoCount =
    media.filter(
      (item) =>
        item.media_type ===
        "video",
    ).length;

  const totalBytes =
    media.reduce(
      (
        total,
        item,
      ) =>
        total +
        (item.file_size ??
          0),
      0,
    );

  const totalStorage =
    formatStorageSize(
      totalBytes,
    );

  return (
    <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
          Administration
        </p>

        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
              Media Library
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
              Upload and manage
              images and videos used
              throughout the Anors.Z
              website.
            </p>
          </div>

          {/* Total media */}

          <div className="w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/45">
            <span className="font-semibold text-[#211024]">
              {media.length}
            </span>{" "}
            total{" "}
            {media.length === 1
              ? "file"
              : "files"}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* =================================================
            IMAGE COUNT
        ================================================== */}

        <div className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:border-[#681761]/20 hover:shadow-lg hover:shadow-black/[0.03]">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <ImageIcon className="h-5 w-5" />
            </span>

            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#211024]">
                {imageCount}
              </p>

              <p className="mt-1 text-xs text-black/40">
                {imageCount === 1
                  ? "Image"
                  : "Images"}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-black/10 pt-4">
            <p className="text-xs leading-5 text-black/35">
              JPG, PNG, WebP and
              AVIF website assets.
            </p>
          </div>
        </div>

        {/* =================================================
            VIDEO COUNT
        ================================================== */}

        <div className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:border-[#681761]/20 hover:shadow-lg hover:shadow-black/[0.03]">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <Video className="h-5 w-5" />
            </span>

            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#211024]">
                {videoCount}
              </p>

              <p className="mt-1 text-xs text-black/40">
                {videoCount === 1
                  ? "Video"
                  : "Videos"}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-black/10 pt-4">
            <p className="text-xs leading-5 text-black/35">
              MP4 and WebM video
              assets stored in
              Supabase.
            </p>
          </div>
        </div>

        {/* =================================================
            STORAGE
        ================================================== */}

        <div className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:border-[#681761]/20 hover:shadow-lg hover:shadow-black/[0.03] sm:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <HardDrive className="h-5 w-5" />
            </span>

            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#211024]">
                {totalStorage}
              </p>

              <p className="mt-1 text-xs text-black/40">
                Recorded Storage
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-black/10 pt-4">
            <p className="text-xs leading-5 text-black/35">
              Combined size of all
              images and videos
              recorded in the media
              library.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEDIA LIBRARY
      ====================================================== */}

      <MediaLibraryClient
        initialMedia={media}
      />
    </div>
  );
}