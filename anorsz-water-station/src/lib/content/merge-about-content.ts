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
        defaultAboutContent.values.items.map(
          (defaultItem, index) => ({
            ...defaultItem,
            ...(content?.values?.items?.[index] ?? {}),
          }),
        ),
    },

    technology: {
      ...defaultAboutContent.technology,
      ...(content?.technology ?? {}),

      items:
        defaultAboutContent.technology.items.map(
          (defaultItem, index) => ({
            ...defaultItem,
            ...(content?.technology?.items?.[index] ??
              {}),
          }),
        ),
    },

    impact: {
      ...defaultAboutContent.impact,
      ...(content?.impact ?? {}),

      items:
        defaultAboutContent.impact.items.map(
          (defaultItem, index) => ({
            ...defaultItem,
            ...(content?.impact?.items?.[index] ?? {}),
          }),
        ),
    },

    sustainability: {
      ...defaultAboutContent.sustainability,
      ...(content?.sustainability ?? {}),

      points:
        defaultAboutContent.sustainability.points.map(
          (defaultPoint, index) =>
            content?.sustainability?.points?.[index] ??
            defaultPoint,
        ),
    },

    support: {
      ...defaultAboutContent.support,
      ...(content?.support ?? {}),

      items:
        defaultAboutContent.support.items.map(
          (defaultItem, index) => ({
            ...defaultItem,
            ...(content?.support?.items?.[index] ?? {}),
          }),
        ),
    },

    cta: {
      ...defaultAboutContent.cta,
      ...(content?.cta ?? {}),
    },
  };
}