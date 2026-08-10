"use client";

/* eslint-disable @next/next/no-img-element */

import {
  useMemo,
  useState,
} from "react";

import {
  Check,
  ImageIcon,
  Images,
  Search,
  Trash2,
  X,
} from "lucide-react";

import type { MediaItem } from "@/types/media";

import type {
  WebsiteMediaSelection,
} from "@/types/website-content";

type MediaPickerFieldProps = {
  label: string;

  description?: string;

  value:
    | WebsiteMediaSelection
    | null;

  media: MediaItem[];

  onChange: (
    value:
      | WebsiteMediaSelection
      | null,
  ) => void;
};

export default function MediaPickerField({
  label,
  description,
  value,
  media,
  onChange,
}: MediaPickerFieldProps) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    search,
    setSearch,
  ] = useState("");

  const filteredMedia =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return media.filter(
        (item) => {
          if (
            item.media_type !==
            "image"
          ) {
            return false;
          }

          if (!query) {
            return true;
          }

          return (
            item.name
              .toLowerCase()
              .includes(query) ||
            item.alt_text
              ?.toLowerCase()
              .includes(query)
          );
        },
      );
    }, [
      media,
      search,
    ]);

  function selectMedia(
    item: MediaItem,
  ) {
    onChange({
      id: item.id,

      name: item.name,

      url: item.public_url,

      alt:
        item.alt_text ||
        item.name,
    });

    setIsOpen(false);
    setSearch("");
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

        {value ? (
          <div className="mt-3 overflow-hidden rounded-2xl border border-black/10 bg-[#faf9f8]">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#eee9ee]">
              <img
                src={value.url}
                alt={value.alt}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-16 text-white">
                <p className="truncate text-sm font-semibold">
                  {value.name}
                </p>

                <p className="mt-1 truncate text-xs text-white/60">
                  {value.alt}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-4 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  setIsOpen(true)
                }
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#681761] px-4 text-sm font-semibold text-white transition hover:bg-[#52114d]"
              >
                <Images className="h-4 w-4" />

                Change Image
              </button>

              <button
                type="button"
                onClick={() =>
                  onChange(null)
                }
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-medium text-red-600 transition hover:bg-red-100"
              >
                <Trash2 className="h-4 w-4" />

                Use Default
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() =>
              setIsOpen(true)
            }
            className="mt-3 flex min-h-[190px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#faf9f8] p-6 text-center transition hover:border-[#681761]/30 hover:bg-[#681761]/[0.03]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <ImageIcon className="h-5 w-5" />
            </span>

            <p className="mt-4 text-sm font-semibold text-[#211024]">
              Choose From Media Library
            </p>

            <p className="mt-2 text-xs text-black/40">
              No custom image selected.
              The website will use its
              original default image.
            </p>
          </button>
        )}
      </div>

      {/* =====================================================
          PICKER MODAL
      ====================================================== */}

      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close image picker"
            onClick={() =>
              setIsOpen(false)
            }
            className="absolute inset-0 bg-[#160b19]/75 backdrop-blur-sm"
          />

          <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-6">
              <div>
                <h2 className="font-semibold text-[#211024]">
                  Choose Image
                </h2>

                <p className="mt-1 text-xs text-black/40">
                  Select an image from
                  the Supabase media
                  library.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setIsOpen(false)
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
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value,
                    )
                  }
                  placeholder="Search images..."
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-11 pr-4 text-sm outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
                />
              </div>
            </div>

            {/* Grid */}

            <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-6">
              {filteredMedia.length ===
              0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <Images className="h-8 w-8 text-black/20" />

                  <p className="mt-4 text-sm font-semibold text-[#211024]">
                    No images found
                  </p>

                  <p className="mt-2 text-xs text-black/40">
                    Upload images from
                    the Media Library
                    first.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {filteredMedia.map(
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
                            selectMedia(
                              item,
                            )
                          }
                          className={`group overflow-hidden rounded-xl border text-left transition ${
                            selected
                              ? "border-[#681761] ring-2 ring-[#681761]/15"
                              : "border-black/10 hover:border-[#681761]/30"
                          }`}
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-[#eee9ee]">
                            <img
                              src={
                                item.public_url
                              }
                              alt={
                                item.alt_text ||
                                item.name
                              }
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />

                            {selected && (
                              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#681761] text-white shadow-lg">
                                <Check className="h-4 w-4" />
                              </span>
                            )}
                          </div>

                          <div className="p-3">
                            <p className="truncate text-sm font-semibold text-[#211024]">
                              {
                                item.name
                              }
                            </p>

                            <p className="mt-1 truncate text-xs capitalize text-black/35">
                              {item.page_usage ||
                                "global"}
                            </p>
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