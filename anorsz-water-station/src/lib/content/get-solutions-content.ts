import {
  createClient,
} from "@/lib/supabase/server";

import {
  defaultSolutionsContent,
} from "@/lib/content/default-solutions-content";

import {
  mergeSolutionsContent,
} from "@/lib/content/merge-solutions-content";

import type {
  SolutionsPageContent,
} from "@/types/website-content";

export async function getSolutionsContent(): Promise<SolutionsPageContent> {
  const supabase =
    await createClient();

  const {
    data,
    error,
  } = await supabase
    .from("website_pages")
    .select("content")
    .eq(
      "slug",
      "solutions",
    )
    .maybeSingle();

  if (error) {
    console.error(
      "Unable to load public Solutions content:",
      error,
    );

    return defaultSolutionsContent;
  }

  if (!data?.content) {
    return defaultSolutionsContent;
  }

  return mergeSolutionsContent(
    data.content as Partial<SolutionsPageContent>,
  );
}