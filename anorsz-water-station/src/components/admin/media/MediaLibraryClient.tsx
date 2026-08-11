"use client";

/* eslint-disable @next/next/no-img-element */

import {
  useMemo,
  useState,
  useTransition,
} from "react";

import { useRouter } from "next/navigation";

import {
  AlertTriangle,
  Calendar,
  FileImage,
  FileVideo,
  HardDrive,
  Images,
  Loader2,
  Play,
  Search,
  Trash2,
  Upload,
  Video,
  X,
} from "lucide-react";

import MediaUploadModal from "@/components/admin/media/MediaUploadModal";

import { deleteMedia } from "@/app/admin/media/actions";

import type { MediaItem } from "@/types/media";

type MediaLibraryClientProps = {
  initialMedia: MediaItem[];
};

type MediaTypeFilter =
  | "all"
  | "image"
  | "video";

const PAGE_FILTERS = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "home",
    label: "Home",
  },
  {
    value: "about",
    label: "About",
  },
  {
    value: "solutions",
    label: "Solutions",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "gallery",
    label: "Gallery",
  },
  {
    value: "blog",
    label: "Blog",
  },
  {
    value: "global",
    label: "Global",
  },
];

const MEDIA_TYPE_FILTERS: {
  value: MediaTypeFilter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Media",
  },
  {
    value: "image",
    label: "Images",
  },
  {
    value: "video",
    label: "Videos",
  },
];

/*
 * =========================================================
 * FILE SIZE
 * =========================================================
 */

function formatFileSize(
  bytes: number | null,
) {
  if (
    bytes === null ||
    bytes === undefined
  ) {
    return "Unknown";
  }

  if (bytes === 0) {
    return "0 B";
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

  return `${(
    bytes /
    1024 /
    1024
  ).toFixed(2)} MB`;
}

/*
 * =========================================================
 * DATE
 * =========================================================
 */

function formatDate(
  value: string,
) {
  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  ).format(
    new Date(value),
  );
}

/*
 * =========================================================
 * COMPONENT
 * =========================================================
 */

export default function MediaLibraryClient({
  initialMedia,
}: MediaLibraryClientProps) {
  const router =
    useRouter();

  /*
   * =========================================================
   * STATE
   * =========================================================
   */

  const [
    isUploadOpen,
    setIsUploadOpen,
  ] = useState(false);

  const [
    selectedMedia,
    setSelectedMedia,
  ] =
    useState<MediaItem | null>(
      null,
    );

  const [
    deleteConfirmation,
    setDeleteConfirmation,
  ] =
    useState<MediaItem | null>(
      null,
    );

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    pageFilter,
    setPageFilter,
  ] = useState("all");

  const [
    mediaTypeFilter,
    setMediaTypeFilter,
  ] =
    useState<MediaTypeFilter>(
      "all",
    );

  const [
    deleteError,
    setDeleteError,
  ] = useState("");

  const [
    isDeleting,
    startDeleteTransition,
  ] = useTransition();

  /*
   * =========================================================
   * FILTER MEDIA
   * =========================================================
   */

  const filteredMedia =
    useMemo(() => {
      const query =
        searchTerm
          .trim()
          .toLowerCase();

      return initialMedia.filter(
        (media) => {
          /*
           * Media type
           */

          const matchesMediaType =
            mediaTypeFilter ===
              "all" ||
            media.media_type ===
              mediaTypeFilter;

          /*
           * Website page
           */

          const matchesPage =
            pageFilter ===
              "all" ||
            media.page_usage ===
              pageFilter;

          /*
           * Search
           */

          const matchesSearch =
            !query ||
            media.name
              .toLowerCase()
              .includes(
                query,
              ) ||
            media.alt_text
              ?.toLowerCase()
              .includes(
                query,
              ) ||
            media.storage_path
              .toLowerCase()
              .includes(
                query,
              );

          return (
            matchesMediaType &&
            matchesPage &&
            matchesSearch
          );
        },
      );
    }, [
      initialMedia,
      mediaTypeFilter,
      pageFilter,
      searchTerm,
    ]);

  /*
   * =========================================================
   * DELETE MEDIA
   * =========================================================
   */

  function handleDelete() {
    if (
      !deleteConfirmation
    ) {
      return;
    }

    setDeleteError("");

    startDeleteTransition(
      async () => {
        const result =
          await deleteMedia(
            deleteConfirmation.id,
          );

        if (
          !result.success
        ) {
          setDeleteError(
            result.message,
          );

          return;
        }

        setDeleteConfirmation(
          null,
        );

        setSelectedMedia(
          null,
        );

        router.refresh();
      },
    );
  }

  /*
   * =========================================================
   * COUNTS
   * =========================================================
   */

  const visibleImageCount =
    filteredMedia.filter(
      (item) =>
        item.media_type ===
        "image",
    ).length;

  const visibleVideoCount =
    filteredMedia.filter(
      (item) =>
        item.media_type ===
        "video",
    ).length;

  return (
    <>
      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          {/* Search */}

          <div className="relative w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/30" />

            <input
              type="search"
              value={
                searchTerm
              }
              onChange={(
                event,
              ) =>
                setSearchTerm(
                  event.target
                    .value,
                )
              }
              placeholder="Search images and videos..."
              className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-11 pr-4 text-sm text-[#211024] outline-none transition placeholder:text-black/25 focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
            />
          </div>

          {/* Upload */}

          <button
            type="button"
            onClick={() =>
              setIsUploadOpen(
                true,
              )
            }
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#681761] px-5 text-sm font-semibold text-white transition hover:bg-[#52114d]"
          >
            <Upload className="h-4 w-4" />

            Upload Media
          </button>
        </div>

        {/* =================================================
            MEDIA TYPE FILTER
        ================================================== */}

        <div className="mt-5 border-t border-black/10 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {MEDIA_TYPE_FILTERS.map(
              (item) => {
                const active =
                  mediaTypeFilter ===
                  item.value;

                return (
                  <button
                    key={
                      item.value
                    }
                    type="button"
                    onClick={() =>
                      setMediaTypeFilter(
                        item.value,
                      )
                    }
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      active
                        ? "bg-[#211024] text-white shadow-sm"
                        : "bg-[#f5f3f1] text-black/45 hover:bg-[#681761]/10 hover:text-[#681761]"
                    }`}
                  >
                    {
                      item.label
                    }
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* =================================================
            PAGE FILTER
        ================================================== */}

        <div className="mt-4 border-t border-black/10 pt-4">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-black/30">
            Website Section
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {PAGE_FILTERS.map(
              (item) => {
                const active =
                  pageFilter ===
                  item.value;

                return (
                  <button
                    key={
                      item.value
                    }
                    type="button"
                    onClick={() =>
                      setPageFilter(
                        item.value,
                      )
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                      active
                        ? "bg-[#681761] text-white"
                        : "bg-[#f5f3f1] text-black/45 hover:bg-[#681761]/10 hover:text-[#681761]"
                    }`}
                  >
                    {
                      item.label
                    }
                  </button>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULT SUMMARY
      ====================================================== */}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#211024]">
            Media Files
          </h2>

          <p className="mt-1 text-xs text-black/40">
            {
              filteredMedia.length
            }{" "}
            {filteredMedia.length ===
            1
              ? "item"
              : "items"}{" "}
            found
          </p>
        </div>

        {filteredMedia.length >
          0 && (
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full bg-[#f5f3f1] px-3 py-1.5 text-black/45">
              {
                visibleImageCount
              }{" "}
              {visibleImageCount ===
              1
                ? "image"
                : "images"}
            </span>

            <span className="rounded-full bg-[#f5f3f1] px-3 py-1.5 text-black/45">
              {
                visibleVideoCount
              }{" "}
              {visibleVideoCount ===
              1
                ? "video"
                : "videos"}
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {filteredMedia.length ===
        0 && (
        <section className="mt-5 flex min-h-[420px] items-center justify-center rounded-2xl border border-black/10 bg-white p-6 text-center">
          <div className="max-w-sm">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
              <Images className="h-7 w-7" />
            </span>

            <h3 className="mt-5 font-semibold text-[#211024]">
              No media found
            </h3>

            <p className="mt-2 text-sm leading-6 text-black/45">
              No images or videos
              match the current
              filters. Upload a new
              file or change your
              search and filters.
            </p>

            <button
              type="button"
              onClick={() =>
                setIsUploadOpen(
                  true,
                )
              }
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#681761] px-5 text-sm font-semibold text-white transition hover:bg-[#52114d]"
            >
              <Upload className="h-4 w-4" />

              Upload Media
            </button>
          </div>
        </section>
      )}

      {/* =====================================================
          MEDIA GRID
      ====================================================== */}

      {filteredMedia.length >
        0 && (
        <section className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredMedia.map(
            (media) => (
              <button
                key={media.id}
                type="button"
                onClick={() =>
                  setSelectedMedia(
                    media,
                  )
                }
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white text-left transition duration-300 hover:-translate-y-1 hover:border-[#681761]/20 hover:shadow-xl hover:shadow-black/5"
              >
                {/* =================================================
                    MEDIA PREVIEW
                ================================================== */}

                <div className="relative aspect-[4/3] overflow-hidden bg-[#211024]">
                  {media.media_type ===
                  "image" ? (
                    <img
                      src={
                        media.public_url
                      }
                      alt={
                        media.alt_text ||
                        media.name
                      }
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <>
                      <video
                        src={
                          media.public_url
                        }
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Video overlay */}

                      <div className="pointer-events-none absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />

                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur-md transition duration-300 group-hover:scale-110">
                          <Play className="ml-0.5 h-5 w-5 fill-current" />
                        </span>
                      </div>
                    </>
                  )}

                  {/* Page badge */}

                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                    {media.page_usage ||
                      "global"}
                  </span>

                  {/* Type badge */}

                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#211024] shadow-sm backdrop-blur-md">
                    {media.media_type ===
                    "video" ? (
                      <Video className="h-3 w-3" />
                    ) : (
                      <FileImage className="h-3 w-3" />
                    )}

                    {
                      media.media_type
                    }
                  </span>
                </div>

                {/* =================================================
                    MEDIA INFORMATION
                ================================================== */}

                <div className="p-4">
                  <h3 className="truncate text-sm font-semibold text-[#211024]">
                    {media.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-black/40">
                    {media.alt_text ||
                      (media.media_type ===
                      "video"
                        ? "No video description provided."
                        : "No alternative text provided.")}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 text-[10px] text-black/35">
                    <span>
                      {formatFileSize(
                        media.file_size,
                      )}
                    </span>

                    <span>
                      {formatDate(
                        media.created_at,
                      )}
                    </span>
                  </div>
                </div>
              </button>
            ),
          )}
        </section>
      )}

      {/* =====================================================
          UPLOAD MODAL
      ====================================================== */}

      <MediaUploadModal
        isOpen={isUploadOpen}
        onClose={() =>
          setIsUploadOpen(
            false,
          )
        }
      />

      {/* =====================================================
          MEDIA PREVIEW MODAL
      ====================================================== */}

      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}

          <button
            type="button"
            aria-label="Close media preview"
            onClick={() =>
              setSelectedMedia(
                null,
              )
            }
            className="absolute inset-0 bg-[#160b19]/80 backdrop-blur-sm"
          />

          {/* Modal */}

          <div className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Header */}

            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-white/95 px-5 py-4 backdrop-blur-xl sm:px-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {selectedMedia.media_type ===
                  "video" ? (
                    <Video className="h-4 w-4 shrink-0 text-[#681761]" />
                  ) : (
                    <FileImage className="h-4 w-4 shrink-0 text-[#681761]" />
                  )}

                  <h2 className="truncate font-semibold text-[#211024]">
                    {
                      selectedMedia.name
                    }
                  </h2>
                </div>

                <p className="mt-1 text-xs capitalize text-black/40">
                  {
                    selectedMedia.media_type
                  }{" "}
                  details
                </p>
              </div>

              <button
                type="button"
                aria-label="Close preview"
                onClick={() =>
                  setSelectedMedia(
                    null,
                  )
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 text-black/40 transition hover:bg-black/5 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
              {/* =================================================
                  LARGE PREVIEW
              ================================================== */}

              <div className="flex min-h-[420px] items-center justify-center bg-[#171319] p-4 sm:p-6">
                {selectedMedia.media_type ===
                "video" ? (
                  <video
                    key={
                      selectedMedia.id
                    }
                    src={
                      selectedMedia.public_url
                    }
                    controls
                    playsInline
                    preload="metadata"
                    className="max-h-[680px] w-full max-w-full bg-black object-contain"
                  >
                    Your browser does
                    not support video
                    playback.
                  </video>
                ) : (
                  <img
                    src={
                      selectedMedia.public_url
                    }
                    alt={
                      selectedMedia.alt_text ||
                      selectedMedia.name
                    }
                    className="max-h-[680px] max-w-full object-contain"
                  />
                )}
              </div>

              {/* =================================================
                  DETAILS
              ================================================== */}

              <div className="border-t border-black/10 p-5 lg:border-l lg:border-t-0 lg:p-6">
                <div className="space-y-6">
                  {/* Media type */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Media Type
                    </p>

                    <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#681761]/10 px-3 py-2 text-xs font-semibold capitalize text-[#681761]">
                      {selectedMedia.media_type ===
                      "video" ? (
                        <Video className="h-3.5 w-3.5" />
                      ) : (
                        <FileImage className="h-3.5 w-3.5" />
                      )}

                      {
                        selectedMedia.media_type
                      }
                    </div>
                  </div>

                  {/* Description */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      {selectedMedia.media_type ===
                      "video"
                        ? "Description"
                        : "Alternative Text"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#211024]">
                      {selectedMedia.alt_text ||
                        (selectedMedia.media_type ===
                        "video"
                          ? "No video description provided."
                          : "No alternative text provided.")}
                    </p>
                  </div>

                  {/* Page */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Website Section
                    </p>

                    <p className="mt-2 text-sm capitalize text-[#211024]">
                      {selectedMedia.page_usage ||
                        "Global"}
                    </p>
                  </div>

                  {/* MIME type */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      File Type
                    </p>

                    <p className="mt-2 text-sm text-[#211024]">
                      {selectedMedia.mime_type ||
                        "Unknown"}
                    </p>
                  </div>

                  {/* File size */}

                  <div className="flex items-start gap-3">
                    <HardDrive className="mt-0.5 h-4 w-4 shrink-0 text-[#681761]" />

                    <div>
                      <p className="text-xs font-medium text-[#211024]">
                        File Size
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        {formatFileSize(
                          selectedMedia.file_size,
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Upload date */}

                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#681761]" />

                    <div>
                      <p className="text-xs font-medium text-[#211024]">
                        Uploaded
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        {formatDate(
                          selectedMedia.created_at,
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Storage path */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Storage Path
                    </p>

                    <p className="mt-2 break-all rounded-lg bg-[#f8f7f5] p-3 font-mono text-[10px] leading-5 text-black/45">
                      {
                        selectedMedia.storage_path
                      }
                    </p>
                  </div>

                  {/* Public URL */}

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Public URL
                    </p>

                    <p className="mt-2 max-h-24 overflow-y-auto break-all rounded-lg bg-[#f8f7f5] p-3 font-mono text-[10px] leading-5 text-black/45">
                      {
                        selectedMedia.public_url
                      }
                    </p>
                  </div>
                </div>

                {/* Delete */}

                <div className="mt-8 border-t border-black/10 pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      setDeleteError(
                        "",
                      );

                      setDeleteConfirmation(
                        selectedMedia,
                      );
                    }}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />

                    Delete Media
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          DELETE CONFIRMATION
      ====================================================== */}

      {deleteConfirmation && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-5">
          {/* Overlay */}

          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Dialog */}

          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </span>

            <h2 className="mt-5 text-xl font-semibold text-[#211024]">
              Delete this media
              file?
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/50">
              This will permanently
              remove{" "}
              <strong className="font-semibold text-[#211024]">
                {
                  deleteConfirmation.name
                }
              </strong>{" "}
              from Supabase Storage
              and the media library.
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#f8f7f5] p-3">
              {deleteConfirmation.media_type ===
              "video" ? (
                <FileVideo className="h-4 w-4 shrink-0 text-[#681761]" />
              ) : (
                <FileImage className="h-4 w-4 shrink-0 text-[#681761]" />
              )}

              <span className="text-xs capitalize text-black/50">
                {
                  deleteConfirmation.media_type
                }{" "}
                •{" "}
                {formatFileSize(
                  deleteConfirmation.file_size,
                )}
              </span>
            </div>

            {deleteError && (
              <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
                <p className="text-sm leading-6 text-red-600">
                  {deleteError}
                </p>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={
                  isDeleting
                }
                onClick={() => {
                  setDeleteError(
                    "",
                  );

                  setDeleteConfirmation(
                    null,
                  );
                }}
                className="h-11 flex-1 rounded-xl border border-black/10 text-sm font-medium text-black/55 transition hover:bg-black/5 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={
                  isDeleting
                }
                onClick={
                  handleDelete
                }
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />

                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />

                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}