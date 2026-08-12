"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  Check,
  Play,
  RotateCcw,
  Search,
  Video,
  X,
} from "lucide-react";

import type {
  MediaItem,
} from "@/types/media";

import type {
  WebsiteVideoSelection,
} from "@/types/website-content";

type VideoPickerFieldProps = {
  label: string;

  description?: string;

  value:
    | WebsiteVideoSelection
    | null;

  media: MediaItem[];

  onChange: (
    value:
      | WebsiteVideoSelection
      | null,
  ) => void;
};

function formatFileSize(
  bytes: number | null,
) {
  if (
    bytes === null ||
    bytes === undefined
  ) {
    return "Unknown";
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    1024 /
    1024
  ).toFixed(2)} MB`;
}

export default function VideoPickerField({
  label,
  description,
  value,
  media,
  onChange,
}: VideoPickerFieldProps) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    search,
    setSearch,
  ] = useState("");

  /*
   * =========================================================
   * ONLY SHOW VIDEOS
   * =========================================================
   */

  const videos =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return media.filter(
        (item) => {
          if (
            item.media_type !==
            "video"
          ) {
            return false;
          }

          if (!query) {
            return true;
          }

          return (
            item.name
              .toLowerCase()
              .includes(
                query,
              ) ||
            item.alt_text
              ?.toLowerCase()
              .includes(
                query,
              ) ||
            item.storage_path
              .toLowerCase()
              .includes(
                query,
              )
          );
        },
      );
    }, [
      media,
      search,
    ]);

  /*
   * =========================================================
   * SELECT VIDEO
   * =========================================================
   */

  function selectVideo(
    item: MediaItem,
  ) {
    onChange({
      id: item.id,

      name:
        item.name,

      url:
        item.public_url,

      description:
        item.alt_text ||
        item.name,

      mimeType:
        item.mime_type ||
        "video/mp4",
    });

    setSearch("");
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <div>
          <p className="text-sm font-semibold text-[#211024]">
            {label}
          </p>

          {description && (
            <p className="mt-1 text-xs leading-5 text-black/40">
              {description}
            </p>
          )}
        </div>

        {/* =================================================
            SELECTED VIDEO
        ================================================== */}

        {value ? (
          <div className="mt-3 overflow-hidden rounded-2xl border border-black/10 bg-[#171319]">
            <div className="relative aspect-video bg-black">
              <video
                key={
                  value.id
                }
                src={
                  value.url
                }
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              />

              <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                <Video className="h-3 w-3" />

                Custom Video
              </span>
            </div>

            <div className="bg-white p-4">
              <p className="truncate text-sm font-semibold text-[#211024]">
                {
                  value.name
                }
              </p>

              <p className="mt-1 line-clamp-2 text-xs leading-5 text-black/40">
                {
                  value.description
                }
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(
                      true,
                    )
                  }
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#681761] px-4 text-sm font-semibold text-white transition hover:bg-[#52114d]"
                >
                  <Video className="h-4 w-4" />

                  Change Video
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onChange(
                      null,
                    )
                  }
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm font-medium text-black/55 transition hover:bg-black/5"
                >
                  <RotateCcw className="h-4 w-4" />

                  Use Default
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =================================================
              DEFAULT VIDEO
          ================================================== */

          <button
            type="button"
            onClick={() =>
              setIsOpen(
                true,
              )
            }
            className="mt-3 flex min-h-[190px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#faf9f8] p-6 text-center transition hover:border-[#681761]/30 hover:bg-[#681761]/[0.03]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
              <Play className="ml-0.5 h-5 w-5" />
            </span>

            <p className="mt-4 text-sm font-semibold text-[#211024]">
              Choose From Media
              Library
            </p>

            <p className="mt-2 max-w-md text-xs leading-5 text-black/40">
              No custom video is
              selected. The website
              will continue using its
              original bundled video.
            </p>
          </button>
        )}
      </div>

      {/* =====================================================
          VIDEO PICKER MODAL
      ====================================================== */}

      {isOpen && (
        <div className="fixed inset-0 z-[170] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}

          <button
            type="button"
            aria-label="Close video picker"
            onClick={() =>
              setIsOpen(
                false,
              )
            }
            className="absolute inset-0 bg-[#160b19]/80 backdrop-blur-sm"
          />

          {/* Dialog */}

          <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
                  <Video className="h-5 w-5" />
                </span>

                <div>
                  <h2 className="font-semibold text-[#211024]">
                    Choose Video
                  </h2>

                  <p className="mt-1 text-xs text-black/40">
                    Select a video
                    uploaded to
                    Supabase.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setIsOpen(
                    false,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/40 transition hover:bg-black/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}

            <div className="border-b border-black/10 p-5 sm:p-6">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/30" />

                <input
                  type="search"
                  value={
                    search
                  }
                  onChange={(
                    event,
                  ) =>
                    setSearch(
                      event
                        .target
                        .value,
                    )
                  }
                  placeholder="Search videos..."
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-11 pr-4 text-sm text-[#211024] outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
                />
              </div>
            </div>

            {/* Videos */}

            <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-6">
              {videos.length ===
              0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
                    <Video className="h-6 w-6" />
                  </span>

                  <p className="mt-5 text-sm font-semibold text-[#211024]">
                    No videos found
                  </p>

                  <p className="mt-2 max-w-sm text-xs leading-5 text-black/40">
                    Upload an About
                    or Global video
                    from the Media
                    Library first.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map(
                    (item) => {
                      const selected =
                        value?.id ===
                        item.id;

                      return (
                        <button
                          key={
                            item.id
                          }
                          type="button"
                          onClick={() =>
                            selectVideo(
                              item,
                            )
                          }
                          className={`group overflow-hidden rounded-xl border bg-white text-left transition ${
                            selected
                              ? "border-[#681761] ring-2 ring-[#681761]/15"
                              : "border-black/10 hover:border-[#681761]/30"
                          }`}
                        >
                          <div className="relative aspect-video overflow-hidden bg-black">
                            <video
                              src={
                                item.public_url
                              }
                              muted
                              playsInline
                              preload="metadata"
                              className="h-full w-full object-cover"
                            />

                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15">
                              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md">
                                <Play className="ml-0.5 h-4 w-4 fill-current" />
                              </span>
                            </div>

                            {selected && (
                              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#681761] text-white">
                                <Check className="h-4 w-4" />
                              </span>
                            )}
                          </div>

                          <div className="p-4">
                            <p className="truncate text-sm font-semibold text-[#211024]">
                              {
                                item.name
                              }
                            </p>

                            <div className="mt-2 flex items-center justify-between gap-3 text-[10px] text-black/35">
                              <span className="capitalize">
                                {item.page_usage ||
                                  "global"}
                              </span>

                              <span>
                                {formatFileSize(
                                  item.file_size,
                                )}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    },
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}