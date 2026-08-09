import type { Metadata } from "next";

import AboutPageClient from "./AboutPageClient";

import { createClient } from "@/lib/supabase/server";

import { defaultAboutContent } from "@/lib/content/default-about-content";
import { mergeAboutContent } from "@/lib/content/merge-about-content";

import type { AboutPageContent } from "@/types/website-content";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Anors.Z Global Water Station, our mission, vision, technology and commitment to safe drinking water and environmental sustainability.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("website_pages")
    .select("content")
    .eq("slug", "about")
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to load published About page content:",
      error,
    );
  }

  const databaseContent =
    data?.content as Partial<AboutPageContent> | null;

  const content = databaseContent
    ? mergeAboutContent(databaseContent)
    : defaultAboutContent;

  return <AboutPageClient content={content} />;
}