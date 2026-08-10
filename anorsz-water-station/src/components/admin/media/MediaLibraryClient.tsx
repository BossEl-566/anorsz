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
  HardDrive,
  ImagePlus,
  Images,
  Loader2,
  Search,
  Trash2,
  X,
} from "lucide-react";

import MediaUploadModal from "@/components/admin/media/MediaUploadModal";

import { deleteMedia } from "@/app/admin/media/actions";

import type { MediaItem } from "@/types/media";

type MediaLibraryClientProps = {
  initialMedia: MediaItem[];
};

const FILTERS = [
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

function formatFileSize(
  bytes: number | null,
) {
  if (!bytes) {
    return "Unknown";
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

export default function MediaLibraryClient({
  initialMedia,
}: MediaLibraryClientProps) {
  const router = useRouter();

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
    filter,
    setFilter,
  ] = useState("all");

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
          const matchesFilter =
            filter === "all" ||
            media.page_usage ===
              filter;

          const matchesSearch =
            !query ||
            media.name
              .toLowerCase()
              .includes(query) ||
            media.alt_text
              ?.toLowerCase()
              .includes(query) ||
            media.storage_path
              .toLowerCase()
              .includes(query);

          return (
            matchesFilter &&
            matchesSearch
          );
        },
      );
    }, [
      initialMedia,
      filter,
      searchTerm,
    ]);

  /*
   * =========================================================
   * DELETE
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

        if (!result.success) {
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

  return (
    <>
      {/* =====================================================
          TOOLBAR
      ====================================================== */}

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/30" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value,
                )
              }
              placeholder="Search media..."
              className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-11 pr-4 text-sm outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setIsUploadOpen(
                true,
              )
            }
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#681761] px-5 text-sm font-semibold text-white transition hover:bg-[#52114d]"
          >
            <ImagePlus className="h-4 w-4" />

            Upload Image
          </button>
        </div>

        {/* Filters */}

        <div className="mt-5 flex gap-2 overflow-x-auto border-t border-black/10 pt-4">
          {FILTERS.map(
            (item) => {
              const active =
                filter ===
                item.value;

              return (
                <button
                  key={
                    item.value
                  }
                  type="button"
                  onClick={() =>
                    setFilter(
                      item.value,
                    )
                  }
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-[#681761] text-white"
                      : "bg-[#f5f3f1] text-black/45 hover:text-[#681761]"
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
      </section>

      {/* =====================================================
          RESULT SUMMARY
      ====================================================== */}

      <div className="mt-6 flex items-center justify-between gap-4">
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
              : "items"}
          </p>
        </div>
      </div>

      {/* =====================================================
          EMPTY
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
              Upload the first image to start building the Anors.Z media library.
            </p>

            <button
              type="button"
              onClick={() =>
                setIsUploadOpen(
                  true,
                )
              }
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#681761] px-5 text-sm font-semibold text-white"
            >
              <ImagePlus className="h-4 w-4" />

              Upload Image
            </button>
          </div>
        </section>
      )}

      {/* =====================================================
          GRID
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
                {/* Image */}

                <div className="relative aspect-[4/3] overflow-hidden bg-[#eee9ee]">
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
                    <div className="flex h-full items-center justify-center">
                      <FileImage className="h-10 w-10 text-black/20" />
                    </div>
                  )}

                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {media.page_usage ||
                      "global"}
                  </span>
                </div>

                {/* Information */}

                <div className="p-4">
                  <h3 className="truncate text-sm font-semibold text-[#211024]">
                    {media.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-black/40">
                    {media.alt_text ||
                      "No alternative text provided."}
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
          UPLOAD
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
          PREVIEW MODAL
      ====================================================== */}

      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close preview"
            onClick={() =>
              setSelectedMedia(
                null,
              )
            }
            className="absolute inset-0 bg-[#160b19]/75 backdrop-blur-sm"
          />

          <div className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
              <div>
                <h2 className="font-semibold text-[#211024]">
                  {
                    selectedMedia.name
                  }
                </h2>

                <p className="mt-1 text-xs text-black/40">
                  Media details
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedMedia(
                    null,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/40"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
              {/* Preview */}

              <div className="flex min-h-[400px] items-center justify-center bg-[#eee9ee] p-4">
                <img
                  src={
                    selectedMedia.public_url
                  }
                  alt={
                    selectedMedia.alt_text ||
                    selectedMedia.name
                  }
                  className="max-h-[650px] max-w-full object-contain"
                />
              </div>

              {/* Details */}

              <div className="border-t border-black/10 p-5 lg:border-l lg:border-t-0 lg:p-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Alternative Text
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#211024]">
                      {selectedMedia.alt_text ||
                        "No alternative text"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/30">
                      Used For
                    </p>

                    <p className="mt-2 text-sm capitalize text-[#211024]">
                      {selectedMedia.page_usage ||
                        "Global"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <HardDrive className="mt-0.5 h-4 w-4 text-[#681761]" />

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

                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 text-[#681761]" />

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
                </div>

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

                    Delete Image
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </span>

            <h2 className="mt-5 text-xl font-semibold text-[#211024]">
              Delete this image?
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/50">
              This permanently removes{" "}
              <strong>
                {
                  deleteConfirmation.name
                }
              </strong>{" "}
              from Supabase Storage and the media library.
            </p>

            {deleteError && (
              <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {deleteError}
              </p>
            )}

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() =>
                  setDeleteConfirmation(
                    null,
                  )
                }
                className="h-11 flex-1 rounded-xl border border-black/10 text-sm font-medium text-black/55"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={
                  handleDelete
                }
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 text-sm font-semibold text-white disabled:opacity-60"
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