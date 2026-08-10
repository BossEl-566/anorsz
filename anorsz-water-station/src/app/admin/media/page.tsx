import {
  HardDrive,
  ImageIcon,
} from "lucide-react";

import MediaLibraryClient from "@/components/admin/media/MediaLibraryClient";

import { createClient } from "@/lib/supabase/server";

import type { MediaItem } from "@/types/media";

export default async function AdminMediaPage() {
  const supabase =
    await createClient();

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
    (data ?? []) as MediaItem[];

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

  const totalMB =
    totalBytes /
    1024 /
    1024;

  return (
    <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Header */}

      <section>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
          Administration
        </p>

        <h1 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
          Media Library
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
          Upload and manage images used throughout the Anors.Z website.
        </p>
      </section>

      {/* Stats */}

      <section className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <ImageIcon className="h-5 w-5" />
            </span>

            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#211024]">
                {media.length}
              </p>

              <p className="mt-1 text-xs text-black/40">
                Media files
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <HardDrive className="h-5 w-5" />
            </span>

            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] text-[#211024]">
                {totalMB < 1
                  ? `${(
                      totalBytes /
                      1024
                    ).toFixed(
                      1,
                    )} KB`
                  : `${totalMB.toFixed(
                      2,
                    )} MB`}
              </p>

              <p className="mt-1 text-xs text-black/40">
                Recorded image storage
              </p>
            </div>
          </div>
        </div>
      </section>

      <MediaLibraryClient
        initialMedia={media}
      />
    </div>
  );
}