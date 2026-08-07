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
    },

    howItWorks: {
      ...defaultHomeContent.howItWorks,
      ...(content?.howItWorks ?? {}),
    },

    impact: {
      ...defaultHomeContent.impact,
      ...(content?.impact ?? {}),
    },

    whoWeServe: {
      ...defaultHomeContent.whoWeServe,
      ...(content?.whoWeServe ?? {}),
    },

    whoWeAre: {
      ...defaultHomeContent.whoWeAre,
      ...(content?.whoWeAre ?? {}),
    },

    cta: {
      ...defaultHomeContent.cta,
      ...(content?.cta ?? {}),
    },
  };
}