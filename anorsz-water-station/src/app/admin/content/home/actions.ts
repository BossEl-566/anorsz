"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import type { HomePageContent } from "@/types/website-content";

type SaveResult = {
  success: boolean;
  message: string;
};

function cleanText(value: string) {
  return value.trim();
}

function cleanHref(value: string) {
  const href = value.trim();

  if (href.startsWith("/")) {
    return href;
  }

  if (
    href.startsWith("https://") ||
    href.startsWith("http://")
  ) {
    return href;
  }

  return "/";
}

export async function saveHomeContent(
  content: HomePageContent,
): Promise<SaveResult> {
  const supabase = await createClient();

  // Verify authenticated user
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims) {
    return {
      success: false,
      message: "Your session has expired. Please sign in again.",
    };
  }

  const userId = claimsData.claims.sub;

  if (!userId) {
    return {
      success: false,
      message: "Unable to identify the authenticated user.",
    };
  }

  // Verify role
  const { data: administrator, error: administratorError } =
    await supabase
      .from("admin_users")
      .select("role, is_active")
      .eq("user_id", userId)
      .maybeSingle();

  if (
    administratorError ||
    !administrator ||
    !administrator.is_active
  ) {
    return {
      success: false,
      message: "You are not authorised to manage website content.",
    };
  }

  if (
    administrator.role !== "admin" &&
    administrator.role !== "super_admin"
  ) {
    return {
      success: false,
      message:
        "Your account does not have permission to edit website content.",
    };
  }

  const cleanedContent: HomePageContent = {
    hero: {
      eyebrow: cleanText(content.hero.eyebrow),
      title: cleanText(content.hero.title),
      description: cleanText(content.hero.description),

      primaryButtonLabel: cleanText(
        content.hero.primaryButtonLabel,
      ),

      primaryButtonHref: cleanHref(
        content.hero.primaryButtonHref,
      ),

      secondaryButtonLabel: cleanText(
        content.hero.secondaryButtonLabel,
      ),

      secondaryButtonHref: cleanHref(
        content.hero.secondaryButtonHref,
      ),
    },

    overview: {
      eyebrow: cleanText(content.overview.eyebrow),
      title: cleanText(content.overview.title),
      description: cleanText(content.overview.description),
    },

    howItWorks: {
      eyebrow: cleanText(content.howItWorks.eyebrow),
      title: cleanText(content.howItWorks.title),
      description: cleanText(content.howItWorks.description),
    },

    impact: {
      eyebrow: cleanText(content.impact.eyebrow),
      title: cleanText(content.impact.title),
      description: cleanText(content.impact.description),

      stat1Value: cleanText(content.impact.stat1Value),
      stat1Label: cleanText(content.impact.stat1Label),

      stat2Value: cleanText(content.impact.stat2Value),
      stat2Label: cleanText(content.impact.stat2Label),

      stat3Value: cleanText(content.impact.stat3Value),
      stat3Label: cleanText(content.impact.stat3Label),
    },

    whoWeServe: {
      eyebrow: cleanText(content.whoWeServe.eyebrow),
      title: cleanText(content.whoWeServe.title),
      description: cleanText(content.whoWeServe.description),
    },

    whoWeAre: {
      eyebrow: cleanText(content.whoWeAre.eyebrow),
      title: cleanText(content.whoWeAre.title),
      description: cleanText(content.whoWeAre.description),
    },

    cta: {
      eyebrow: cleanText(content.cta.eyebrow),
      title: cleanText(content.cta.title),
      description: cleanText(content.cta.description),
      buttonLabel: cleanText(content.cta.buttonLabel),
      buttonHref: cleanHref(content.cta.buttonHref),
    },
  };

  const { error } = await supabase
    .from("website_pages")
    .upsert(
      {
        slug: "home",
        title: "Home",
        content: cleanedContent,
        is_published: true,
        updated_by: userId,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "slug",
      },
    );

  if (error) {
    console.error("Failed to save homepage content:", error);

    return {
      success: false,
      message:
        "The homepage content could not be saved. Please try again.",
    };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/content");
  revalidatePath("/admin/content/home");

  return {
    success: true,
    message: "Homepage content saved successfully.",
  };
}