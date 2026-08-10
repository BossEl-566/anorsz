"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

type DeleteMediaResult = {
  success: boolean;
  message: string;
};

export async function deleteMedia(
  mediaId: string,
): Promise<DeleteMediaResult> {
  const supabase = await createClient();

  /*
   * =========================================================
   * VERIFY AUTHENTICATION
   * =========================================================
   */

  const {
    data: claimsData,
    error: claimsError,
  } = await supabase.auth.getClaims();

  const userId =
    typeof claimsData?.claims?.sub === "string"
      ? claimsData.claims.sub
      : null;

  if (claimsError || !userId) {
    return {
      success: false,
      message:
        "Your session has expired. Please sign in again.",
    };
  }

  /*
   * =========================================================
   * VERIFY ADMIN PERMISSION
   * =========================================================
   */

  const {
    data: administrator,
    error: adminError,
  } = await supabase
    .from("admin_users")
    .select("role, is_active")
    .eq("user_id", userId)
    .maybeSingle();

  if (
    adminError ||
    !administrator ||
    !administrator.is_active
  ) {
    return {
      success: false,
      message:
        "You are not authorised to delete media.",
    };
  }

  if (
    administrator.role !== "admin" &&
    administrator.role !== "super_admin"
  ) {
    return {
      success: false,
      message:
        "Your account cannot delete website media.",
    };
  }

  /*
   * =========================================================
   * FIND MEDIA RECORD
   * =========================================================
   */

  const {
    data: media,
    error: mediaError,
  } = await supabase
    .from("media_library")
    .select(
      `
        id,
        bucket_name,
        storage_path
      `,
    )
    .eq("id", mediaId)
    .maybeSingle();

  if (mediaError || !media) {
    return {
      success: false,
      message: "The media item could not be found.",
    };
  }

  /*
   * =========================================================
   * DELETE ACTUAL STORAGE FILE
   * =========================================================
   */

  const {
    error: storageError,
  } = await supabase.storage
    .from(media.bucket_name)
    .remove([media.storage_path]);

  if (storageError) {
    console.error(
      "Unable to delete storage object:",
      storageError,
    );

    return {
      success: false,
      message:
        "The image could not be removed from storage.",
    };
  }

  /*
   * =========================================================
   * DELETE DATABASE RECORD
   * =========================================================
   */

  const {
    error: databaseError,
  } = await supabase
    .from("media_library")
    .delete()
    .eq("id", mediaId);

  if (databaseError) {
    console.error(
      "Unable to delete media record:",
      databaseError,
    );

    return {
      success: false,
      message:
        "The file was removed, but its database record could not be deleted.",
    };
  }

  revalidatePath("/admin/media");
  revalidatePath("/admin");

  return {
    success: true,
    message: "Image deleted successfully.",
  };
}