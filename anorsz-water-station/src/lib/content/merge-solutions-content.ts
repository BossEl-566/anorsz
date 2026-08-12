import {
  defaultSolutionsContent,
} from "@/lib/content/default-solutions-content";

import type {
  SolutionsPageContent,
} from "@/types/website-content";

export function mergeSolutionsContent(
  content:
    | Partial<SolutionsPageContent>
    | null
    | undefined,
): SolutionsPageContent {
  return {
    /*
     * =====================================================
     * HERO
     * =====================================================
     */

    hero: {
      ...defaultSolutionsContent.hero,
      ...(content?.hero ?? {}),
    },

    /*
     * =====================================================
     * OVERVIEW
     * =====================================================
     */

    overview: {
      ...defaultSolutionsContent.overview,
      ...(content?.overview ??
        {}),

      items:
        defaultSolutionsContent.overview.items.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.overview
              ?.items?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * SMART WATER
     * =====================================================
     */

    smartWater: {
      ...defaultSolutionsContent.smartWater,
      ...(content?.smartWater ??
        {}),

      features:
        defaultSolutionsContent.smartWater.features.map(
          (
            defaultFeature,
            index,
          ) =>
            content
              ?.smartWater
              ?.features?.[
              index
            ] ??
            defaultFeature,
        ),
    },

    /*
     * =====================================================
     * TECHNOLOGY
     * =====================================================
     */

    technology: {
      ...defaultSolutionsContent.technology,
      ...(content?.technology ??
        {}),

      items:
        defaultSolutionsContent.technology.items.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.technology
              ?.items?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * CAMPUS
     * =====================================================
     */

    campus: {
      ...defaultSolutionsContent.campus,
      ...(content?.campus ??
        {}),

      capacities:
        defaultSolutionsContent.campus.capacities.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.campus
              ?.capacities?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * COMMUNITY
     * =====================================================
     */

    community: {
      ...defaultSolutionsContent.community,
      ...(content?.community ??
        {}),

      features:
        defaultSolutionsContent.community.features.map(
          (
            defaultFeature,
            index,
          ) =>
            content
              ?.community
              ?.features?.[
              index
            ] ??
            defaultFeature,
        ),
    },

    /*
     * =====================================================
     * COMMERCIAL
     * =====================================================
     */

    commercial: {
      ...defaultSolutionsContent.commercial,
      ...(content?.commercial ??
        {}),

      items:
        defaultSolutionsContent.commercial.items.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.commercial
              ?.items?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * GROUNDWATER
     * =====================================================
     */

    groundwater: {
      ...defaultSolutionsContent.groundwater,
      ...(content?.groundwater ??
        {}),

      features:
        defaultSolutionsContent.groundwater.features.map(
          (
            defaultFeature,
            index,
          ) =>
            content
              ?.groundwater
              ?.features?.[
              index
            ] ??
            defaultFeature,
        ),
    },

    /*
     * =====================================================
     * APPLICATIONS
     * =====================================================
     */

    applications: {
      ...defaultSolutionsContent.applications,
      ...(content?.applications ??
        {}),

      items:
        defaultSolutionsContent.applications.items.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.applications
              ?.items?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * SUPPORT
     * =====================================================
     */

    support: {
      ...defaultSolutionsContent.support,
      ...(content?.support ??
        {}),

      items:
        defaultSolutionsContent.support.items.map(
          (
            defaultItem,
            index,
          ) => ({
            ...defaultItem,

            ...(content
              ?.support
              ?.items?.[
              index
            ] ?? {}),
          }),
        ),
    },

    /*
     * =====================================================
     * CTA
     * =====================================================
     */

    cta: {
      ...defaultSolutionsContent.cta,
      ...(content?.cta ?? {}),
    },
  };
}