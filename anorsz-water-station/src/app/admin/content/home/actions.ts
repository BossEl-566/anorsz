"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { defaultHomeContent } from "@/lib/content/default-home-content";

import type {
  HomePageContent,
  HomeFeature,
  HomeInstitution,
  HomeProcessStep,
  HomePurposePoint,
  HomeStatistic,
} from "@/types/website-content";

type SaveResult = {
  success: boolean;
  message: string;
};

function cleanText(value: unknown, fallback = "") {
  if (typeof value !== "string") {
    return fallback;
  }

  return value.trim();
}

function cleanHref(value: unknown, fallback = "/") {
  if (typeof value !== "string") {
    return fallback;
  }

  const href = value.trim();

  if (href.startsWith("/")) {
    return href;
  }

  if (
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }

  return fallback;
}

function cleanFeatures(
  features: HomeFeature[],
): HomeFeature[] {
  return defaultHomeContent.overview.features.map(
    (defaultFeature, index) => {
      const feature = features?.[index];

      return {
        key: defaultFeature.key,

        title: cleanText(
          feature?.title,
          defaultFeature.title,
        ),
      };
    },
  );
}

function cleanSteps(
  steps: HomeProcessStep[],
): HomeProcessStep[] {
  return defaultHomeContent.howItWorks.steps.map(
    (defaultStep, index) => {
      const step = steps?.[index];

      return {
        number: cleanText(
          step?.number,
          defaultStep.number,
        ),

        title: cleanText(
          step?.title,
          defaultStep.title,
        ),

        description: cleanText(
          step?.description,
          defaultStep.description,
        ),
      };
    },
  );
}

function cleanStatistics(
  statistics: HomeStatistic[],
): HomeStatistic[] {
  return defaultHomeContent.impact.statistics.map(
    (defaultStatistic, index) => {
      const statistic = statistics?.[index];

      return {
        value: cleanText(
          statistic?.value,
          defaultStatistic.value,
        ),

        suffix: cleanText(
          statistic?.suffix,
          defaultStatistic.suffix,
        ),

        label: cleanText(
          statistic?.label,
          defaultStatistic.label,
        ),
      };
    },
  );
}

function cleanInstitutions(
  institutions: HomeInstitution[],
): HomeInstitution[] {
  return defaultHomeContent.whoWeServe.institutions.map(
    (defaultInstitution, index) => {
      const institution = institutions?.[index];

      return {
        key: defaultInstitution.key,

        title: cleanText(
          institution?.title,
          defaultInstitution.title,
        ),

        description: cleanText(
          institution?.description,
          defaultInstitution.description,
        ),
      };
    },
  );
}

function cleanPurposePoints(
  points: HomePurposePoint[],
): HomePurposePoint[] {
  return defaultHomeContent.whoWeAre.points.map(
    (defaultPoint, index) => {
      const point = points?.[index];

      return {
        text: cleanText(
          point?.text,
          defaultPoint.text,
        ),
      };
    },
  );
}

export async function saveHomeContent(
  content: HomePageContent,
): Promise<SaveResult> {
  const supabase = await createClient();

  /*
   * ---------------------------------------------------------
   * 1. Verify the logged-in user.
   * ---------------------------------------------------------
   */
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims) {
    return {
      success: false,
      message:
        "Your session has expired. Please sign in again.",
    };
  }

  const userId = claimsData.claims.sub;

  if (!userId) {
    return {
      success: false,
      message:
        "Unable to identify the authenticated administrator.",
    };
  }

  /*
   * ---------------------------------------------------------
   * 2. Verify admin permissions.
   * ---------------------------------------------------------
   */
  const {
    data: administrator,
    error: administratorError,
  } = await supabase
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
      message:
        "You are not authorised to manage website content.",
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

  /*
   * ---------------------------------------------------------
   * 3. Clean content before saving.
   * ---------------------------------------------------------
   */
  const cleanedContent: HomePageContent = {
    hero: {
      eyebrow: cleanText(
        content.hero.eyebrow,
        defaultHomeContent.hero.eyebrow,
      ),

      title: cleanText(
        content.hero.title,
        defaultHomeContent.hero.title,
      ),

      description: cleanText(
        content.hero.description,
        defaultHomeContent.hero.description,
      ),

      primaryButtonLabel: cleanText(
        content.hero.primaryButtonLabel,
        defaultHomeContent.hero.primaryButtonLabel,
      ),

      primaryButtonHref: cleanHref(
        content.hero.primaryButtonHref,
        defaultHomeContent.hero.primaryButtonHref,
      ),

      secondaryButtonLabel: cleanText(
        content.hero.secondaryButtonLabel,
        defaultHomeContent.hero.secondaryButtonLabel,
      ),

      secondaryButtonHref: cleanHref(
        content.hero.secondaryButtonHref,
        defaultHomeContent.hero.secondaryButtonHref,
      ),
    },

    overview: {
      eyebrow: cleanText(
        content.overview.eyebrow,
        defaultHomeContent.overview.eyebrow,
      ),

      title: cleanText(
        content.overview.title,
        defaultHomeContent.overview.title,
      ),

      imageBadge: cleanText(
        content.overview.imageBadge,
        defaultHomeContent.overview.imageBadge,
      ),

      lowerTitle: cleanText(
        content.overview.lowerTitle,
        defaultHomeContent.overview.lowerTitle,
      ),

      lowerDescription: cleanText(
        content.overview.lowerDescription,
        defaultHomeContent.overview.lowerDescription,
      ),

      linkLabel: cleanText(
        content.overview.linkLabel,
        defaultHomeContent.overview.linkLabel,
      ),

      linkHref: cleanHref(
        content.overview.linkHref,
        defaultHomeContent.overview.linkHref,
      ),

      features: cleanFeatures(
        content.overview.features,
      ),
    },

    howItWorks: {
      eyebrow: cleanText(
        content.howItWorks.eyebrow,
        defaultHomeContent.howItWorks.eyebrow,
      ),

      title: cleanText(
        content.howItWorks.title,
        defaultHomeContent.howItWorks.title,
      ),

      description: cleanText(
        content.howItWorks.description,
        defaultHomeContent.howItWorks.description,
      ),

      steps: cleanSteps(
        content.howItWorks.steps,
      ),
    },

    impact: {
      eyebrow: cleanText(
        content.impact.eyebrow,
        defaultHomeContent.impact.eyebrow,
      ),

      title: cleanText(
        content.impact.title,
        defaultHomeContent.impact.title,
      ),

      description: cleanText(
        content.impact.description,
        defaultHomeContent.impact.description,
      ),

      statistics: cleanStatistics(
        content.impact.statistics,
      ),
    },

    whoWeServe: {
      eyebrow: cleanText(
        content.whoWeServe.eyebrow,
        defaultHomeContent.whoWeServe.eyebrow,
      ),

      title: cleanText(
        content.whoWeServe.title,
        defaultHomeContent.whoWeServe.title,
      ),

      description: cleanText(
        content.whoWeServe.description,
        defaultHomeContent.whoWeServe.description,
      ),

      institutions: cleanInstitutions(
        content.whoWeServe.institutions,
      ),
    },

    whoWeAre: {
      eyebrow: cleanText(
        content.whoWeAre.eyebrow,
        defaultHomeContent.whoWeAre.eyebrow,
      ),

      title: cleanText(
        content.whoWeAre.title,
        defaultHomeContent.whoWeAre.title,
      ),

      description: cleanText(
        content.whoWeAre.description,
        defaultHomeContent.whoWeAre.description,
      ),

      points: cleanPurposePoints(
        content.whoWeAre.points,
      ),

      purposeEyebrow: cleanText(
        content.whoWeAre.purposeEyebrow,
        defaultHomeContent.whoWeAre.purposeEyebrow,
      ),

      purposeText: cleanText(
        content.whoWeAre.purposeText,
        defaultHomeContent.whoWeAre.purposeText,
      ),
    },

    cta: {
      eyebrow: cleanText(
        content.cta.eyebrow,
        defaultHomeContent.cta.eyebrow,
      ),

      title: cleanText(
        content.cta.title,
        defaultHomeContent.cta.title,
      ),

      description: cleanText(
        content.cta.description,
        defaultHomeContent.cta.description,
      ),

      primaryButtonLabel: cleanText(
        content.cta.primaryButtonLabel,
        defaultHomeContent.cta.primaryButtonLabel,
      ),

      primaryButtonHref: cleanHref(
        content.cta.primaryButtonHref,
        defaultHomeContent.cta.primaryButtonHref,
      ),

      secondaryButtonLabel: cleanText(
        content.cta.secondaryButtonLabel,
        defaultHomeContent.cta.secondaryButtonLabel,
      ),

      phoneNumber: cleanText(
        content.cta.phoneNumber,
        defaultHomeContent.cta.phoneNumber,
      ),

      phoneHref: cleanHref(
        content.cta.phoneHref,
        defaultHomeContent.cta.phoneHref,
      ),
    },
  };

  /*
   * ---------------------------------------------------------
   * 4. Save/publish.
   * ---------------------------------------------------------
   */
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
    console.error(
      "Failed to save homepage content:",
      error,
    );

    return {
      success: false,
      message:
        "The homepage content could not be saved. Please try again.",
    };
  }

  /*
   * ---------------------------------------------------------
   * 5. Invalidate cached pages.
   * ---------------------------------------------------------
   */
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/content");
  revalidatePath("/admin/content/home");

  return {
    success: true,
    message:
      "Homepage content saved and published successfully.",
  };
}