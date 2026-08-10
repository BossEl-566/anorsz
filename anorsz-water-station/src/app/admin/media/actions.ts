"use server";

import {
  revalidatePath,
} from "next/cache";

import { createClient } from "@/lib/supabase/server";

type UploadMediaResult = {
  success: boolean;
  message: string;

  media?: {
    id: string;
    publicUrl: string;
  };
};

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

const MAX_IMAGE_SIZE =
  10 * 1024 * 1024;

function sanitizeFileName(
  fileName: string,
) {
  return fileName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(
      /[^a-z0-9.\-_]/g,
      "",
    );
}

export async function uploadMedia(
  formData: FormData,
): Promise<UploadMediaResult> {
  const supabase =
    await createClient();

  /*
   * -----------------------------------------
   * Verify user
   * -----------------------------------------
   */

  const {
    data: claimsData,
    error: claimsError,
  } = await supabase.auth.getClaims();

  const userId =
    claimsData?.claims?.sub;

  if (
    claimsError ||
    !userId
  ) {
    return {
      success: false,
      message:
        "Your session has expired. Please sign in again.",
    };
  }

  /*
   * -----------------------------------------
   * Verify admin permissions
   * -----------------------------------------
   */

  const {
    data: administrator,
    error: adminError,
  } = await supabase
    .from("admin_users")
    .select(
      "role, is_active",
    )
    .eq(
      "user_id",
      userId,
    )
    .maybeSingle();

  if (
    adminError ||
    !administrator ||
    !administrator.is_active
  ) {
    return {
      success: false,
      message:
        "You are not authorised to upload media.",
    };
  }

  if (
    administrator.role !==
      "admin" &&
    administrator.role !==
      "super_admin"
  ) {
    return {
      success: false,
      message:
        "Your account cannot upload website media.",
    };
  }

  /*
   * -----------------------------------------
   * Read form
   * -----------------------------------------
   */

  const file =
    formData.get("file");

  const name =
    String(
      formData.get(
        "name",
      ) ?? "",
    ).trim();

  const altText =
    String(
      formData.get(
        "altText",
      ) ?? "",
    ).trim();

  const pageUsage =
    String(
      formData.get(
        "pageUsage",
      ) ?? "global",
    ).trim();

  if (
    !(file instanceof File)
  ) {
    return {
      success: false,
      message:
        "Please select an image.",
    };
  }

  /*
   * -----------------------------------------
   * Validate file
   * -----------------------------------------
   */

  if (
    !ALLOWED_IMAGE_TYPES.includes(
      file.type,
    )
  ) {
    return {
      success: false,
      message:
        "Only JPG, PNG, WebP and AVIF images are allowed.",
    };
  }

  if (
    file.size >
    MAX_IMAGE_SIZE
  ) {
    return {
      success: false,
      message:
        "The image must be 10 MB or smaller.",
    };
  }

  /*
   * -----------------------------------------
   * Build storage path
   * -----------------------------------------
   */

  const safeName =
    sanitizeFileName(
      file.name,
    );

  const storagePath =
    `${pageUsage}/${Date.now()}-${safeName}`;

  /*
   * -----------------------------------------
   * Upload to Supabase Storage
   * -----------------------------------------
   */

  const {
    error: uploadError,
  } = await supabase.storage
    .from("site-media")
    .upload(
      storagePath,
      file,
      {
        cacheControl: "3600",
        upsert: false,
        contentType:
          file.type,
      },
    );

  if (uploadError) {
    console.error(
      "Media upload error:",
      uploadError,
    );

    return {
      success: false,
      message:
        "The image could not be uploaded.",
    };
  }

  /*
   * -----------------------------------------
   * Get permanent public URL
   * -----------------------------------------
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
   * -----------------------------------------
   * Store metadata
   * -----------------------------------------
   */

  const {
    data: media,
    error: databaseError,
  } = await supabase
    .from("media_library")
    .insert({
      name:
        name ||
        file.name,

      alt_text:
        altText || null,

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
    })
    .select(
      "id, public_url",
    )
    .single();

  if (
    databaseError ||
    !media
  ) {
    /*
     * If DB insert fails,
     * remove orphaned file.
     */

    await supabase.storage
      .from("site-media")
      .remove([
        storagePath,
      ]);

    console.error(
      "Media database error:",
      databaseError,
    );

    return {
      success: false,
      message:
        "The media record could not be created.",
    };
  }

  revalidatePath(
    "/admin/media",
  );

  return {
    success: true,

    message:
      "Image uploaded successfully.",

    media: {
      id: media.id,

      publicUrl:
        media.public_url,
    },
  };
}