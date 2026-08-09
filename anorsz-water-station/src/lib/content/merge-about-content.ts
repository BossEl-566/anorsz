import { defaultAboutContent } from "@/lib/content/default-about-content";

import type { AboutPageContent } from "@/types/website-content";

export function mergeAboutContent(
  content:
    | Partial<AboutPageContent>
    | null
    | undefined,
): AboutPageContent {
  return {
    hero: {
      ...defaultAboutContent.hero,
      ...(content?.hero ?? {}),
    },

    story: {
      ...defaultAboutContent.story,
      ...(content?.story ?? {}),
    },

    purpose: {
      ...defaultAboutContent.purpose,
      ...(content?.purpose ?? {}),
    },

    values: {
      ...defaultAboutContent.values,
      ...(content?.values ?? {}),

      items:
        content?.values?.items?.length
          ? content.values.items
          : defaultAboutContent.values.items,
    },

    technology: {
      ...defaultAboutContent.technology,
      ...(content?.technology ?? {}),

      items:
        content?.technology?.items?.length
          ? content.technology.items
          : defaultAboutContent.technology.items,
    },

    impact: {
      ...defaultAboutContent.impact,
      ...(content?.impact ?? {}),

      items:
        content?.impact?.items?.length
          ? content.impact.items
          : defaultAboutContent.impact.items,
    },

    sustainability: {
      ...defaultAboutContent.sustainability,
      ...(content?.sustainability ?? {}),

      points:
        content?.sustainability?.points?.length
          ? content.sustainability.points
          : defaultAboutContent.sustainability.points,
    },

    support: {
      ...defaultAboutContent.support,
      ...(content?.support ?? {}),

      items:
        content?.support?.items?.length
          ? content.support.items
          : defaultAboutContent.support.items,
    },

    cta: {
      ...defaultAboutContent.cta,
      ...(content?.cta ?? {}),
    },
  };
}