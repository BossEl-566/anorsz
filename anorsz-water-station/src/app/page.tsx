import HomePageClient from "@/components/home/HomePageClient";

import { createClient } from "@/lib/supabase/server";

import { defaultHomeContent } from "@/lib/content/default-home-content";
import { mergeHomeContent } from "@/lib/content/merge-home-content";

import type { HomePageContent } from "@/types/website-content";

export const revalidate = 60;

export default async function HomePage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("website_pages")
    .select("content")
    .eq("slug", "home")
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to load published homepage content:",
      error,
    );
  }

  const databaseContent =
    data?.content as Partial<HomePageContent> | null;

  const content = databaseContent
    ? mergeHomeContent(databaseContent)
    : defaultHomeContent;

  return <HomePageClient content={content} />;
}