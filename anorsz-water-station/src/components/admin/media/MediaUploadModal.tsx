"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  CheckCircle2,
  FileImage,
  ImagePlus,
  Loader2,
  Upload,
  X,
  XCircle,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type MediaUploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MAX_FILE_SIZE =
  10 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

const PAGE_OPTIONS = [
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
    label: "Global / Shared",
  },
];

function sanitizeFileName(
  filename: string,
) {
  return filename
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "");
}

function removeExtension(
  filename: string,
) {
  return filename.replace(
    /\.[^/.]+$/,
    "",
  );
}

export default function MediaUploadModal({
  isOpen,
  onClose,
}: MediaUploadModalProps) {
  const router = useRouter();

  const [file, setFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [name, setName] =
    useState("");

  const [altText, setAltText] =
    useState("");

  const [pageUsage, setPageUsage] =
    useState("global");

  const [isUploading, setIsUploading] =
    useState(false);

  const [message, setMessage] =
    useState<{
      type: "success" | "error";
      text: string;
    } | null>(null);

  /*
   * =========================================================
   * IMAGE PREVIEW
   * =========================================================
   */

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl =
      URL.createObjectURL(file);

    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(
        objectUrl,
      );
    };
  }, [file]);

  /*
   * =========================================================
   * RESET
   * =========================================================
   */

  function resetForm() {
    setFile(null);
    setPreviewUrl(null);
    setName("");
    setAltText("");
    setPageUsage("global");
    setMessage(null);
    setIsUploading(false);
  }

  function handleClose() {
    if (isUploading) {
      return;
    }

    resetForm();
    onClose();
  }

  /*
   * =========================================================
   * SELECT FILE
   * =========================================================
   */

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selected =
      event.target.files?.[0];

    setMessage(null);

    if (!selected) {
      setFile(null);
      return;
    }

    if (
      !ALLOWED_TYPES.includes(
        selected.type,
      )
    ) {
      setMessage({
        type: "error",
        text:
          "Only JPG, PNG, WebP and AVIF images are allowed.",
      });

      event.target.value = "";

      return;
    }

    if (
      selected.size >
      MAX_FILE_SIZE
    ) {
      setMessage({
        type: "error",
        text:
          "The selected image is larger than 10 MB.",
      });

      event.target.value = "";

      return;
    }

    setFile(selected);

    if (!name) {
      setName(
        removeExtension(
          selected.name,
        )
          .replace(/[-_]+/g, " ")
          .trim(),
      );
    }
  }

  /*
   * =========================================================
   * UPLOAD
   * =========================================================
   */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setMessage(null);

    if (!file) {
      setMessage({
        type: "error",
        text:
          "Please select an image before uploading.",
      });

      return;
    }

    if (!name.trim()) {
      setMessage({
        type: "error",
        text:
          "Please enter a name for this image.",
      });

      return;
    }

    setIsUploading(true);

    try {
      const supabase =
        createClient();

      /*
       * ---------------------------------------
       * Confirm current user
       * ---------------------------------------
       */

      const {
        data: claimsData,
        error: claimsError,
      } =
        await supabase.auth.getClaims();

      const userId =
        typeof claimsData?.claims?.sub ===
        "string"
          ? claimsData.claims.sub
          : null;

      if (
        claimsError ||
        !userId
      ) {
        setMessage({
          type: "error",
          text:
            "Your session has expired. Please sign in again.",
        });

        return;
      }

      /*
       * ---------------------------------------
       * Generate safe unique path
       * ---------------------------------------
       */

      const safeFileName =
        sanitizeFileName(
          file.name,
        );

      const uniqueId =
        crypto.randomUUID();

      const storagePath =
        `${pageUsage}/${uniqueId}-${safeFileName}`;

      /*
       * ---------------------------------------
       * Upload directly to Supabase
       * ---------------------------------------
       */

      const {
        error: uploadError,
      } = await supabase.storage
        .from("site-media")
        .upload(
          storagePath,
          file,
          {
            cacheControl:
              "3600",

            upsert: false,

            contentType:
              file.type,
          },
        );

      if (uploadError) {
        console.error(
          "Upload error:",
          uploadError,
        );

        setMessage({
          type: "error",
          text:
            uploadError.message ||
            "The image could not be uploaded.",
        });

        return;
      }

      /*
       * ---------------------------------------
       * Public URL
       * ---------------------------------------
       */

      const {
        data: publicUrlData,
      } = supabase.storage
        .from("site-media")
        .getPublicUrl(
          storagePath,
        );

      const publicUrl =
        publicUrlData.publicUrl;

      /*
       * ---------------------------------------
       * Save media metadata
       * ---------------------------------------
       */

      const {
        error: databaseError,
      } = await supabase
        .from("media_library")
        .insert({
          name:
            name.trim(),

          alt_text:
            altText.trim() ||
            null,

          media_type:
            "image",

          bucket_name:
            "site-media",

          storage_path:
            storagePath,

          public_url:
            publicUrl,

          mime_type:
            file.type,

          file_size:
            file.size,

          page_usage:
            pageUsage,

          uploaded_by:
            userId,
        });

      /*
       * ---------------------------------------
       * Rollback storage if DB fails
       * ---------------------------------------
       */

      if (databaseError) {
        await supabase.storage
          .from("site-media")
          .remove([
            storagePath,
          ]);

        console.error(
          "Media DB error:",
          databaseError,
        );

        setMessage({
          type: "error",
          text:
            "The image uploaded, but its media record could not be created.",
        });

        return;
      }

      setMessage({
        type: "success",
        text:
          "Image uploaded successfully.",
      });

      router.refresh();

      window.setTimeout(() => {
        resetForm();
        onClose();
      }, 900);
    } catch (error) {
      console.error(
        "Unexpected media upload error:",
        error,
      );

      setMessage({
        type: "error",
        text:
          "Something went wrong while uploading the image.",
      });
    } finally {
      setIsUploading(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}

      <button
        type="button"
        aria-label="Close upload dialog"
        onClick={handleClose}
        className="absolute inset-0 bg-[#160b19]/70 backdrop-blur-sm"
      />

      {/* Modal */}

      <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-5 py-5 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              <ImagePlus className="h-5 w-5" />
            </span>

            <div>
              <h2 className="font-semibold text-[#211024]">
                Upload Image
              </h2>

              <p className="mt-1 text-xs text-black/40">
                Add a new image to the Anors.Z media library.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={isUploading}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/40 transition hover:bg-black/5 hover:text-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-6"
        >
          {/* Upload area */}

          <label className="group block cursor-pointer">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={
                handleFileChange
              }
              disabled={isUploading}
              className="sr-only"
            />

            {previewUrl ? (
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#f5f3f1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Selected upload preview"
                  className="max-h-[420px] w-full object-contain"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-white">
                  <p className="text-sm font-semibold">
                    {file?.name}
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Click image to select a different file
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#faf9f8] p-8 text-center transition group-hover:border-[#681761]/30 group-hover:bg-[#681761]/[0.03]">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
                  <Upload className="h-7 w-7" />
                </span>

                <h3 className="mt-5 text-sm font-semibold text-[#211024]">
                  Select an image
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-5 text-black/40">
                  JPG, PNG, WebP or AVIF. Maximum file size 10 MB.
                </p>

                <span className="mt-5 rounded-xl bg-[#681761] px-5 py-2.5 text-xs font-semibold text-white">
                  Browse Files
                </span>
              </div>
            )}
          </label>

          {/* File info */}

          {file && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/10 bg-[#faf9f8] p-4">
              <FileImage className="h-5 w-5 shrink-0 text-[#681761]" />

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#211024]">
                  {file.name}
                </p>

                <p className="mt-1 text-xs text-black/40">
                  {(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)}{" "}
                  MB
                </p>
              </div>
            </div>
          )}

          {/* Metadata */}

          <div className="mt-6 grid gap-5">
            <div>
              <label
                htmlFor="media-name"
                className="text-sm font-semibold text-[#211024]"
              >
                Image Name
              </label>

              <p className="mt-1 text-xs text-black/40">
                A friendly name used inside the admin system.
              </p>

              <input
                id="media-name"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value,
                  )
                }
                required
                disabled={isUploading}
                placeholder="Homepage water station"
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm text-[#211024] outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
              />
            </div>

            <div>
              <label
                htmlFor="alt-text"
                className="text-sm font-semibold text-[#211024]"
              >
                Alternative Text
              </label>

              <p className="mt-1 text-xs leading-5 text-black/40">
                Describe the image for accessibility and search engines.
              </p>

              <input
                id="alt-text"
                value={altText}
                onChange={(event) =>
                  setAltText(
                    event.target.value,
                  )
                }
                disabled={isUploading}
                placeholder="Anors.Z intelligent water station"
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm text-[#211024] outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
              />
            </div>

            <div>
              <label
                htmlFor="page-usage"
                className="text-sm font-semibold text-[#211024]"
              >
                Website Section
              </label>

              <p className="mt-1 text-xs text-black/40">
                Where is this image mainly intended to be used?
              </p>

              <select
                id="page-usage"
                value={pageUsage}
                onChange={(event) =>
                  setPageUsage(
                    event.target.value,
                  )
                }
                disabled={isUploading}
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm text-[#211024] outline-none focus:border-[#681761] focus:ring-4 focus:ring-[#681761]/10"
              >
                {PAGE_OPTIONS.map(
                  (option) => (
                    <option
                      key={
                        option.value
                      }
                      value={
                        option.value
                      }
                    >
                      {option.label}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>

          {/* Message */}

          {message && (
            <div
              className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                message.type ===
                "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message.type ===
              "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              ) : (
                <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
              )}

              <span>
                {message.text}
              </span>
            </div>
          )}

          {/* Buttons */}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-black/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              disabled={isUploading}
              className="h-12 rounded-xl border border-black/10 px-5 text-sm font-medium text-black/55 transition hover:bg-black/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={
                !file ||
                isUploading
              }
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#681761] px-6 text-sm font-semibold text-white transition hover:bg-[#52114d] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Upload Image
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}