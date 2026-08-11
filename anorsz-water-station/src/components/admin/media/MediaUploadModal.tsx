"use client";

/* eslint-disable @next/next/no-img-element */

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import * as tus from "tus-js-client";

import {
  CheckCircle2,
  FileImage,
  FileVideo,
  ImagePlus,
  Loader2,
  Upload,
  Video,
  X,
  XCircle,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type MediaUploadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SelectedMediaType =
  | "image"
  | "video";

const MAX_IMAGE_SIZE =
  10 * 1024 * 1024;

const MAX_VIDEO_SIZE =
  50 * 1024 * 1024;

const IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

const VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
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
    .replace(
      /[^a-z0-9.\-_]/g,
      "",
    );
}

function removeExtension(
  filename: string,
) {
  return filename.replace(
    /\.[^/.]+$/,
    "",
  );
}

function formatBytes(
  bytes: number,
) {
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

function getMediaType(
  file: File,
): SelectedMediaType | null {
  if (
    IMAGE_TYPES.includes(
      file.type,
    )
  ) {
    return "image";
  }

  if (
    VIDEO_TYPES.includes(
      file.type,
    )
  ) {
    return "video";
  }

  return null;
}

export default function MediaUploadModal({
  isOpen,
  onClose,
}: MediaUploadModalProps) {
  const router =
    useRouter();

  const [file, setFile] =
    useState<File | null>(
      null,
    );

  const [
    previewUrl,
    setPreviewUrl,
  ] =
    useState<string | null>(
      null,
    );

  const [
    mediaType,
    setMediaType,
  ] =
    useState<SelectedMediaType | null>(
      null,
    );

  const [name, setName] =
    useState("");

  const [
    altText,
    setAltText,
  ] = useState("");

  const [
    pageUsage,
    setPageUsage,
  ] =
    useState("global");

  const [
    isUploading,
    setIsUploading,
  ] =
    useState(false);

  const [
    uploadProgress,
    setUploadProgress,
  ] =
    useState(0);

  const [
    message,
    setMessage,
  ] =
    useState<{
      type:
        | "success"
        | "error";
      text: string;
    } | null>(null);

  /*
   * =========================================================
   * PREVIEW
   * =========================================================
   */

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl =
      URL.createObjectURL(
        file,
      );

    setPreviewUrl(
      objectUrl,
    );

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
    setMediaType(null);

    setName("");
    setAltText("");

    setPageUsage(
      "global",
    );

    setUploadProgress(0);

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
   * FILE SELECTION
   * =========================================================
   */

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selected =
      event.target
        .files?.[0];

    setMessage(null);
    setUploadProgress(0);

    if (!selected) {
      setFile(null);
      setMediaType(null);
      return;
    }

    const detectedType =
      getMediaType(
        selected,
      );

    if (!detectedType) {
      setMessage({
        type: "error",

        text:
          "Only JPG, PNG, WebP, AVIF, MP4 and WebM files are allowed.",
      });

      event.target.value =
        "";

      return;
    }

    if (
      detectedType ===
        "image" &&
      selected.size >
        MAX_IMAGE_SIZE
    ) {
      setMessage({
        type: "error",

        text:
          "Images must be 10 MB or smaller.",
      });

      event.target.value =
        "";

      return;
    }

    if (
      detectedType ===
        "video" &&
      selected.size >
        MAX_VIDEO_SIZE
    ) {
      setMessage({
        type: "error",

        text:
          "Videos must be 50 MB or smaller.",
      });

      event.target.value =
        "";

      return;
    }

    setFile(selected);

    setMediaType(
      detectedType,
    );

    if (!name) {
      setName(
        removeExtension(
          selected.name,
        )
          .replace(
            /[-_]+/g,
            " ",
          )
          .trim(),
      );
    }
  }

  /*
   * =========================================================
   * STANDARD IMAGE UPLOAD
   * =========================================================
   */

  async function uploadImage(
    storagePath: string,
  ) {
    if (!file) {
      throw new Error(
        "No image selected.",
      );
    }

    const supabase =
      createClient();

    const {
      error,
    } =
      await supabase.storage
        .from(
          "site-media",
        )
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

    if (error) {
      throw error;
    }

    setUploadProgress(
      100,
    );
  }

  /*
   * =========================================================
   * RESUMABLE VIDEO UPLOAD
   * =========================================================
   */

  async function uploadVideo(
    storagePath: string,
  ) {
    if (!file) {
      throw new Error(
        "No video selected.",
      );
    }

    const supabase =
      createClient();

    /*
     * We only use getSession here
     * to obtain the raw access token
     * for the Supabase Storage
     * resumable upload endpoint.
     */
    const {
      data: {
        session,
      },
      error:
        sessionError,
    } =
      await supabase.auth.getSession();

    if (
      sessionError ||
      !session
    ) {
      throw new Error(
        "Your session has expired.",
      );
    }

    const supabaseUrl =
      process.env
        .NEXT_PUBLIC_SUPABASE_URL;

    if (!supabaseUrl) {
      throw new Error(
        "Supabase URL is not configured.",
      );
    }

    const hostname =
      new URL(
        supabaseUrl,
      ).hostname;

    /*
     * Example:
     *
     * abc123.supabase.co
     * becomes:
     * abc123
     */
    const projectId =
      hostname.split(
        ".",
      )[0];

    if (!projectId) {
      throw new Error(
        "Unable to determine Supabase project ID.",
      );
    }

    const endpoint =
      `https://${projectId}.storage.supabase.co/storage/v1/upload/resumable`;

    await new Promise<void>(
      (
        resolve,
        reject,
      ) => {
        const upload =
          new tus.Upload(
            file,
            {
              endpoint,

              retryDelays: [
                0,
                3000,
                5000,
                10000,
                20000,
              ],

              headers: {
                authorization:
                  `Bearer ${session.access_token}`,
              },

              uploadDataDuringCreation:
                true,

              removeFingerprintOnSuccess:
                true,

              metadata: {
                bucketName:
                  "site-media",

                objectName:
                  storagePath,

                contentType:
                  file.type,

                cacheControl:
                  "3600",
              },

              /*
               * Supabase currently
               * requires a 6 MB chunk
               * size for TUS uploads.
               */
              chunkSize:
                6 *
                1024 *
                1024,

              onError(
                error,
              ) {
                console.error(
                  "TUS upload error:",
                  error,
                );

                reject(
                  error,
                );
              },

              onProgress(
                bytesUploaded,
                bytesTotal,
              ) {
                const percentage =
                  Math.round(
                    (
                      bytesUploaded /
                      bytesTotal
                    ) *
                      100,
                  );

                setUploadProgress(
                  percentage,
                );
              },

              onSuccess() {
                setUploadProgress(
                  100,
                );

                resolve();
              },
            },
          );

        /*
         * Resume an interrupted
         * upload when possible.
         */
        upload
          .findPreviousUploads()
          .then(
            (
              previousUploads,
            ) => {
              if (
                previousUploads.length >
                0
              ) {
                upload.resumeFromPreviousUpload(
                  previousUploads[
                    0
                  ],
                );
              }

              upload.start();
            },
          )
          .catch(
            reject,
          );
      },
    );
  }

  /*
   * =========================================================
   * SUBMIT
   * =========================================================
   */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setMessage(null);

    if (
      !file ||
      !mediaType
    ) {
      setMessage({
        type: "error",

        text:
          "Please select an image or video.",
      });

      return;
    }

    if (!name.trim()) {
      setMessage({
        type: "error",

        text:
          "Please enter a name for this media item.",
      });

      return;
    }

    setIsUploading(
      true,
    );

    setUploadProgress(
      0,
    );

    let storagePath:
      | string
      | null = null;

    try {
      const supabase =
        createClient();

      /*
       * ---------------------------------------
       * Confirm current user
       * ---------------------------------------
       */

      const {
        data:
          claimsData,
        error:
          claimsError,
      } =
        await supabase.auth.getClaims();

      const userId =
        typeof claimsData
          ?.claims
          ?.sub ===
        "string"
          ? claimsData
              .claims.sub
          : null;

      if (
        claimsError ||
        !userId
      ) {
        throw new Error(
          "Your session has expired. Please sign in again.",
        );
      }

      /*
       * ---------------------------------------
       * Unique storage path
       * ---------------------------------------
       */

      const safeFileName =
        sanitizeFileName(
          file.name,
        );

      const uniqueId =
        crypto.randomUUID();

      storagePath =
        `${pageUsage}/${mediaType}s/${uniqueId}-${safeFileName}`;

      /*
       * Examples:
       *
       * home/images/uuid-water.webp
       * about/videos/uuid-hero.mp4
       */

      if (
        mediaType ===
        "image"
      ) {
        await uploadImage(
          storagePath,
        );
      } else {
        await uploadVideo(
          storagePath,
        );
      }

      /*
       * ---------------------------------------
       * Obtain public URL
       * ---------------------------------------
       */

      const {
        data:
          publicUrlData,
      } =
        supabase.storage
          .from(
            "site-media",
          )
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
        error:
          databaseError,
      } =
        await supabase
          .from(
            "media_library",
          )
          .insert({
            name:
              name.trim(),

            alt_text:
              altText.trim() ||
              null,

            media_type:
              mediaType,

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
       * Remove orphaned Storage object if
       * database insert fails.
       * ---------------------------------------
       */

      if (
        databaseError
      ) {
        await supabase.storage
          .from(
            "site-media",
          )
          .remove([
            storagePath,
          ]);

        throw databaseError;
      }

      setMessage({
        type: "success",

        text:
          mediaType ===
          "video"
            ? "Video uploaded successfully."
            : "Image uploaded successfully.",
      });

      router.refresh();

      window.setTimeout(
        () => {
          resetForm();
          onClose();
        },
        900,
      );
    } catch (error) {
      console.error(
        "Media upload failed:",
        error,
      );

      /*
       * If something failed AFTER
       * the actual upload, attempt
       * cleanup.
       */
      if (
        storagePath
      ) {
        /*
         * Do not blindly remove here
         * because uploadVideo may have
         * failed mid-transfer.
         *
         * Successful-upload/database
         * failure cleanup already
         * happens above.
         */
      }

      setMessage({
        type: "error",

        text:
          error instanceof
          Error
            ? error.message
            : "The media file could not be uploaded.",
      });
    } finally {
      setIsUploading(
        false,
      );
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}

      <button
        type="button"
        aria-label="Close upload dialog"
        onClick={
          handleClose
        }
        className="absolute inset-0 bg-[#160b19]/75 backdrop-blur-sm"
      />

      {/* Modal */}

      <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-5 py-5 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
              {mediaType ===
              "video" ? (
                <Video className="h-5 w-5" />
              ) : (
                <ImagePlus className="h-5 w-5" />
              )}
            </span>

            <div>
              <h2 className="font-semibold text-[#211024]">
                Upload Media
              </h2>

              <p className="mt-1 text-xs text-black/40">
                Upload an image or
                video to the Anors.Z
                media library.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={
              handleClose
            }
            disabled={
              isUploading
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/40 transition hover:bg-black/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="p-5 sm:p-6"
        >
          {/* File picker */}

          <label className="group block cursor-pointer">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif,video/mp4,video/webm"
              disabled={
                isUploading
              }
              onChange={
                handleFileChange
              }
              className="sr-only"
            />

            {previewUrl ? (
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#171319]">
                {mediaType ===
                "video" ? (
                  <video
                    src={
                      previewUrl
                    }
                    controls
                    playsInline
                    preload="metadata"
                    className="max-h-[430px] w-full bg-black object-contain"
                  />
                ) : (
                  <img
                    src={
                      previewUrl
                    }
                    alt="Selected upload preview"
                    className="max-h-[430px] w-full object-contain"
                  />
                )}

                <div className="bg-[#171319] px-5 py-4 text-white">
                  <p className="truncate text-sm font-semibold">
                    {
                      file?.name
                    }
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Click to select
                    another file
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#faf9f8] p-8 text-center transition group-hover:border-[#681761]/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
                  <Upload className="h-7 w-7" />
                </span>

                <h3 className="mt-5 text-sm font-semibold text-[#211024]">
                  Select image or
                  video
                </h3>

                <p className="mt-2 max-w-sm text-xs leading-5 text-black/40">
                  Images: JPG, PNG,
                  WebP or AVIF up to
                  10 MB.
                  <br />
                  Videos: MP4 or WebM
                  up to 50 MB.
                </p>

                <span className="mt-5 rounded-xl bg-[#681761] px-5 py-2.5 text-xs font-semibold text-white">
                  Browse Files
                </span>
              </div>
            )}
          </label>

          {/* File information */}

          {file &&
            mediaType && (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/10 bg-[#faf9f8] p-4">
                {mediaType ===
                "video" ? (
                  <FileVideo className="h-5 w-5 shrink-0 text-[#681761]" />
                ) : (
                  <FileImage className="h-5 w-5 shrink-0 text-[#681761]" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#211024]">
                    {file.name}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-black/40">
                    <span>
                      {
                        mediaType
                      }
                    </span>

                    <span>
                      {formatBytes(
                        file.size,
                      )}
                    </span>

                    <span>
                      {
                        file.type
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* Upload progress */}

          {isUploading && (
            <div className="mt-5 rounded-xl border border-[#681761]/10 bg-[#681761]/5 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold text-[#211024]">
                  Uploading
                </p>

                <span className="text-xs font-semibold text-[#681761]">
                  {
                    uploadProgress
                  }
                  %
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#681761]/10">
                <div
                  className="h-full rounded-full bg-[#681761] transition-[width] duration-200"
                  style={{
                    width:
                      `${uploadProgress}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Metadata */}

          <div className="mt-6 grid gap-5">
            <div>
              <label className="text-sm font-semibold text-[#211024]">
                Media Name
              </label>

              <input
                value={name}
                onChange={(
                  event,
                ) =>
                  setName(
                    event
                      .target
                      .value,
                  )
                }
                required
                disabled={
                  isUploading
                }
                placeholder="About hero video"
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#211024]">
                Alternative Text /
                Description
              </label>

              <p className="mt-1 text-xs text-black/40">
                For images, describe
                the image. For videos,
                add a short description
                of what the video shows.
              </p>

              <input
                value={
                  altText
                }
                onChange={(
                  event,
                ) =>
                  setAltText(
                    event
                      .target
                      .value,
                  )
                }
                disabled={
                  isUploading
                }
                placeholder="Anors.Z water station demonstration"
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm outline-none transition focus:border-[#681761] focus:bg-white focus:ring-4 focus:ring-[#681761]/10"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#211024]">
                Website Section
              </label>

              <select
                value={
                  pageUsage
                }
                onChange={(
                  event,
                ) =>
                  setPageUsage(
                    event
                      .target
                      .value,
                  )
                }
                disabled={
                  isUploading
                }
                className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-[#f8f7f5] px-4 text-sm outline-none focus:border-[#681761] focus:ring-4 focus:ring-[#681761]/10"
              >
                {PAGE_OPTIONS.map(
                  (
                    option,
                  ) => (
                    <option
                      key={
                        option.value
                      }
                      value={
                        option.value
                      }
                    >
                      {
                        option.label
                      }
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
                {
                  message.text
                }
              </span>
            </div>
          )}

          {/* Footer */}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-black/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={
                isUploading
              }
              onClick={
                handleClose
              }
              className="h-12 rounded-xl border border-black/10 px-5 text-sm font-medium text-black/55"
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

                  Uploading{" "}
                  {
                    uploadProgress
                  }
                  %
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />

                  Upload Media
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}