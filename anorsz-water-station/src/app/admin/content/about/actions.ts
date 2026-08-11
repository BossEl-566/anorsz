"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { defaultAboutContent } from "@/lib/content/default-about-content";

import type {
  AboutPageContent,
  WebsiteMediaSelection,
} from "@/types/website-content";

type SaveResult = {
  success: boolean;
  message: string;
};

function cleanText(
  value: unknown,
  fallback = "",
) {
  if (typeof value !== "string") {
    return fallback;
  }

  const result = value.trim();

  return result || fallback;
}

function cleanHref(
  value: unknown,
  fallback = "/",
) {
  if (typeof value !== "string") {
    return fallback;
  }

  const href = value.trim();

  if (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }

  return fallback;
}

function cleanMediaSelection(
  value:
    | WebsiteMediaSelection
    | null
    | undefined,
): WebsiteMediaSelection | null {
  if (!value) {
    return null;
  }

  if (
    typeof value.id !== "string" ||
    typeof value.name !== "string" ||
    typeof value.url !== "string" ||
    typeof value.alt !== "string"
  ) {
    return null;
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!supabaseUrl) {
    return null;
  }

  const expectedPrefix =
    `${supabaseUrl}/storage/v1/object/public/site-media/`;

  if (
    !value.url.startsWith(
      expectedPrefix,
    )
  ) {
    return null;
  }

  return {
    id: value.id.trim(),
    name: value.name.trim(),
    url: value.url.trim(),
    alt: value.alt.trim(),
  };
}

export async function saveAboutContent(
  content: AboutPageContent,
): Promise<SaveResult> {
  const supabase = await createClient();

  /*
   * Verify authentication
   */
  const {
    data: claimsData,
    error: claimsError,
  } = await supabase.auth.getClaims();

  if (
    claimsError ||
    !claimsData?.claims?.sub
  ) {
    return {
      success: false,
      message:
        "Your session has expired. Please sign in again.",
    };
  }

  const userId = claimsData.claims.sub;

  /*
   * Verify role
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
        "Your account does not have permission to edit this page.",
    };
  }

  /*
   * Clean all content
   */
  const cleanedContent: AboutPageContent = {
    hero: {
      breadcrumbLabel: cleanText(
        content.hero.breadcrumbLabel,
        defaultAboutContent.hero.breadcrumbLabel,
      ),

      titleLineOne: cleanText(
        content.hero.titleLineOne,
        defaultAboutContent.hero.titleLineOne,
      ),

      titleLineTwo: cleanText(
        content.hero.titleLineTwo,
        defaultAboutContent.hero.titleLineTwo,
      ),

      description: cleanText(
        content.hero.description,
        defaultAboutContent.hero.description,
      ),

      audienceDescription: cleanText(
        content.hero.audienceDescription,
        defaultAboutContent.hero.audienceDescription,
      ),

      linkLabel: cleanText(
        content.hero.linkLabel,
        defaultAboutContent.hero.linkLabel,
      ),

      linkHref: cleanHref(
        content.hero.linkHref,
        defaultAboutContent.hero.linkHref,
      ),
    },

    story: {
      eyebrow: cleanText(
        content.story.eyebrow,
        defaultAboutContent.story.eyebrow,
      ),

      title: cleanText(
        content.story.title,
        defaultAboutContent.story.title,
      ),
      image: cleanMediaSelection(
  content.story.image,
),

      paragraphOne: cleanText(
        content.story.paragraphOne,
        defaultAboutContent.story.paragraphOne,
      ),

      paragraphTwo: cleanText(
        content.story.paragraphTwo,
        defaultAboutContent.story.paragraphTwo,
      ),

      paragraphThree: cleanText(
        content.story.paragraphThree,
        defaultAboutContent.story.paragraphThree,
      ),

      linkLabel: cleanText(
        content.story.linkLabel,
        defaultAboutContent.story.linkLabel,
      ),

      linkHref: cleanHref(
        content.story.linkHref,
        defaultAboutContent.story.linkHref,
      ),

      beliefEyebrow: cleanText(
        content.story.beliefEyebrow,
        defaultAboutContent.story.beliefEyebrow,
      ),

      beliefText: cleanText(
        content.story.beliefText,
        defaultAboutContent.story.beliefText,
      ),
    },

    purpose: {
      eyebrow: cleanText(
        content.purpose.eyebrow,
        defaultAboutContent.purpose.eyebrow,
      ),

      title: cleanText(
        content.purpose.title,
        defaultAboutContent.purpose.title,
      ),
      

      description: cleanText(
        content.purpose.description,
        defaultAboutContent.purpose.description,
      ),

      missionEyebrow: cleanText(
        content.purpose.missionEyebrow,
        defaultAboutContent.purpose.missionEyebrow,
      ),

      missionTitle: cleanText(
        content.purpose.missionTitle,
        defaultAboutContent.purpose.missionTitle,
      ),

      missionDescription: cleanText(
        content.purpose.missionDescription,
        defaultAboutContent.purpose.missionDescription,
      ),

      missionImage:
  cleanMediaSelection(
    content.purpose.missionImage,
  ),

      visionEyebrow: cleanText(
        content.purpose.visionEyebrow,
        defaultAboutContent.purpose.visionEyebrow,
      ),

      visionTitle: cleanText(
        content.purpose.visionTitle,
        defaultAboutContent.purpose.visionTitle,
      ),

      visionImage:
  cleanMediaSelection(
    content.purpose.visionImage,
  ),

      visionDescription: cleanText(
        content.purpose.visionDescription,
        defaultAboutContent.purpose.visionDescription,
      ),
    },

    

    values: {
      eyebrow: cleanText(
        content.values.eyebrow,
        defaultAboutContent.values.eyebrow,
      ),

      title: cleanText(
        content.values.title,
        defaultAboutContent.values.title,
      ),

      items:
        defaultAboutContent.values.items.map(
          (fallback, index) => ({
            key: fallback.key,

            title: cleanText(
              content.values.items?.[index]
                ?.title,
              fallback.title,
            ),

            description: cleanText(
              content.values.items?.[index]
                ?.description,
              fallback.description,
            ),
          }),
        ),
    },

    technology: {
      eyebrow: cleanText(
        content.technology.eyebrow,
        defaultAboutContent.technology.eyebrow,
      ),

      title: cleanText(
        content.technology.title,
        defaultAboutContent.technology.title,
      ),

      description: cleanText(
        content.technology.description,
        defaultAboutContent.technology.description,
      ),

      videoLabel: cleanText(
        content.technology.videoLabel,
        defaultAboutContent.technology.videoLabel,
      ),

      items:
        defaultAboutContent.technology.items.map(
          (fallback, index) => ({
            key: fallback.key,

            number: cleanText(
              content.technology.items?.[index]
                ?.number,
              fallback.number,
            ),

            title: cleanText(
              content.technology.items?.[index]
                ?.title,
              fallback.title,
            ),

            description: cleanText(
              content.technology.items?.[index]
                ?.description,
              fallback.description,
            ),
          }),
        ),
    },

    impact: {
      eyebrow: cleanText(
        content.impact.eyebrow,
        defaultAboutContent.impact.eyebrow,
      ),

      title: cleanText(
        content.impact.title,
        defaultAboutContent.impact.title,
      ),

      description: cleanText(
        content.impact.description,
        defaultAboutContent.impact.description,
      ),

      items:
  defaultAboutContent.impact.items.map(
    (fallback, index) => ({
      key: fallback.key,

      title: cleanText(
        content.impact.items?.[index]
          ?.title,
        fallback.title,
      ),

      description: cleanText(
        content.impact.items?.[index]
          ?.description,
        fallback.description,
      ),

      image:
        cleanMediaSelection(
          content.impact.items?.[index]
            ?.image,
        ),
    }),
  ),
    },

    sustainability: {
      eyebrow: cleanText(
        content.sustainability.eyebrow,
        defaultAboutContent.sustainability
          .eyebrow,
      ),

      title: cleanText(
        content.sustainability.title,
        defaultAboutContent.sustainability
          .title,
      ),

      description: cleanText(
        content.sustainability.description,
        defaultAboutContent.sustainability
          .description,
      ),

      image:
  cleanMediaSelection(
    content.sustainability.image,
  ),

      imageEyebrow: cleanText(
        content.sustainability.imageEyebrow,
        defaultAboutContent.sustainability
          .imageEyebrow,
      ),

      imageText: cleanText(
        content.sustainability.imageText,
        defaultAboutContent.sustainability
          .imageText,
      ),

      points:
        defaultAboutContent.sustainability.points.map(
          (fallback, index) =>
            cleanText(
              content.sustainability
                .points?.[index],
              fallback,
            ),
        ),
    },

    support: {
      eyebrow: cleanText(
        content.support.eyebrow,
        defaultAboutContent.support.eyebrow,
      ),

      title: cleanText(
        content.support.title,
        defaultAboutContent.support.title,
      ),

      description: cleanText(
        content.support.description,
        defaultAboutContent.support.description,
      ),
      image:
  cleanMediaSelection(
    content.support.image,
  ),

      items:
        defaultAboutContent.support.items.map(
          (fallback, index) => ({
            key: fallback.key,

            title: cleanText(
              content.support.items?.[index]
                ?.title,
              fallback.title,
            ),

            description: cleanText(
              content.support.items?.[index]
                ?.description,
              fallback.description,
            ),
          }),
        ),

      imageEyebrow: cleanText(
        content.support.imageEyebrow,
        defaultAboutContent.support
          .imageEyebrow,
      ),

      imageText: cleanText(
        content.support.imageText,
        defaultAboutContent.support.imageText,
      ),
    },

    cta: {
      eyebrow: cleanText(
        content.cta.eyebrow,
        defaultAboutContent.cta.eyebrow,
      ),

      title: cleanText(
        content.cta.title,
        defaultAboutContent.cta.title,
      ),

      description: cleanText(
        content.cta.description,
        defaultAboutContent.cta.description,
      ),

      primaryButtonLabel: cleanText(
        content.cta.primaryButtonLabel,
        defaultAboutContent.cta
          .primaryButtonLabel,
      ),

      primaryButtonHref: cleanHref(
        content.cta.primaryButtonHref,
        defaultAboutContent.cta
          .primaryButtonHref,
      ),

      secondaryButtonLabel: cleanText(
        content.cta.secondaryButtonLabel,
        defaultAboutContent.cta
          .secondaryButtonLabel,
      ),

      secondaryButtonHref: cleanHref(
        content.cta.secondaryButtonHref,
        defaultAboutContent.cta
          .secondaryButtonHref,
      ),
    },
  };

  /*
   * Save
   */
  const { error } = await supabase
    .from("website_pages")
    .upsert(
      {
        slug: "about",
        title: "About Us",
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
      "Unable to save About page:",
      error,
    );

    return {
      success: false,
      message:
        "The About page could not be saved.",
    };
  }

  revalidatePath("/about");
  revalidatePath("/admin");
  revalidatePath("/admin/content");
  revalidatePath("/admin/content/about");

  return {
    success: true,
    message:
      "About page saved and published successfully.",
  };
}