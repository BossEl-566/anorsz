import type {
  StaticImageData,
} from "next/image";

import {
  Building2,
  CreditCard,
  Droplets,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  House,
  Landmark,
  MonitorSmartphone,
  Sparkles,
  Thermometer,
  Users,
  UtensilsCrossed,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";

import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";

import type {
  SolutionsApplicationKey,
  SolutionsCommercialKey,
  SolutionsOverviewKey,
  SolutionsSupportKey,
  SolutionsTechnologyKey,
} from "@/types/website-content";

/*
 * =========================================================
 * SOLUTION OVERVIEW
 * =========================================================
 */

export const solutionsOverviewIcons:
  Record<
    SolutionsOverviewKey,
    LucideIcon
  > = {
  smartWater:
    CreditCard,

  campus:
    GraduationCap,

  community:
    Users,

  commercial:
    Building2,

  groundwater:
    Waves,

  support:
    Wrench,
};

export const solutionsOverviewFallbackImages:
  Record<
    SolutionsOverviewKey,
    StaticImageData
  > = {
  smartWater:
    aboutStoryImage,

  campus:
    aboutCommunityOne,

  community:
    aboutCommunityThree,

  commercial:
    aboutCommunityTwo,

  groundwater:
    aboutMissionImage,

  support:
    aboutSupportImage,
};

/*
 * =========================================================
 * TECHNOLOGY
 * =========================================================
 */

export const solutionsTechnologyIcons:
  Record<
    SolutionsTechnologyKey,
    LucideIcon
  > = {
  smartCard:
    CreditCard,

  display:
    MonitorSmartphone,

  ultrafiltration:
    Droplets,

  uv:
    Zap,

  reverseOsmosis:
    Waves,

  temperature:
    Thermometer,
};

/*
 * =========================================================
 * APPLICATIONS
 * =========================================================
 */

export const solutionsApplicationIcons:
  Record<
    SolutionsApplicationKey,
    LucideIcon
  > = {
  schools:
    GraduationCap,

  companies:
    Building2,

  factories:
    Factory,

  healthcare:
    HeartPulse,

  hotels:
    Hotel,

  restaurants:
    UtensilsCrossed,

  communities:
    House,

  publicInstitutions:
    Landmark,
};

/*
 * =========================================================
 * COMMERCIAL
 * =========================================================
 */

export const solutionsCommercialIcons:
  Record<
    SolutionsCommercialKey,
    LucideIcon
  > = {
  corporate:
    Building2,

  industry:
    Factory,

  hospitality:
    UtensilsCrossed,
};

export const solutionsCommercialFallbackImages:
  Record<
    SolutionsCommercialKey,
    StaticImageData
  > = {
  corporate:
    aboutCommunityTwo,

  industry:
    aboutStoryImage,

  hospitality:
    aboutSustainabilityImage,
};

/*
 * =========================================================
 * SUPPORT
 * =========================================================
 */

export const solutionsSupportIcons:
  Record<
    SolutionsSupportKey,
    LucideIcon
  > = {
  assessment:
    Gauge,

  design:
    Sparkles,

  installation:
    Wrench,

  training:
    Handshake,
};