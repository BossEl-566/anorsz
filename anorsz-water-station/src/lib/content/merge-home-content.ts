import { defaultHomeContent } from "@/lib/content/default-home-content";
import type { HomePageContent } from "@/types/website-content";

export function mergeHomeContent(
  content: Partial<HomePageContent> | null | undefined,
): HomePageContent {
  return {
    hero: {
      ...defaultHomeContent.hero,
      ...(content?.hero ?? {}),
    },

    overview: {
      ...defaultHomeContent.overview,
      ...(content?.overview ?? {}),

      features:
        content?.overview?.features?.length
          ? content.overview.features
          : defaultHomeContent.overview.features,
    },

    howItWorks: {
      ...defaultHomeContent.howItWorks,
      ...(content?.howItWorks ?? {}),

      steps:
        content?.howItWorks?.steps?.length
          ? content.howItWorks.steps
          : defaultHomeContent.howItWorks.steps,
    },

    impact: {
      ...defaultHomeContent.impact,
      ...(content?.impact ?? {}),

      statistics:
        content?.impact?.statistics?.length
          ? content.impact.statistics
          : defaultHomeContent.impact.statistics,
    },

    whoWeServe: {
      ...defaultHomeContent.whoWeServe,
      ...(content?.whoWeServe ?? {}),

      institutions:
        content?.whoWeServe?.institutions?.length
          ? content.whoWeServe.institutions
          : defaultHomeContent.whoWeServe.institutions,
    },

    whoWeAre: {
      ...defaultHomeContent.whoWeAre,
      ...(content?.whoWeAre ?? {}),

      points:
        content?.whoWeAre?.points?.length
          ? content.whoWeAre.points
          : defaultHomeContent.whoWeAre.points,
    },

    cta: {
      ...defaultHomeContent.cta,
      ...(content?.cta ?? {}),
    },
  };
}