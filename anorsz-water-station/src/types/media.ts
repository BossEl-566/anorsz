export type MediaType =
  | "image"
  | "video";

export type MediaPageUsage =
  | "home"
  | "about"
  | "solutions"
  | "technology"
  | "gallery"
  | "blog"
  | "global";

export type MediaItem = {
  id: string;

  name: string;

  alt_text: string | null;

  media_type: MediaType;

  bucket_name: string;

  storage_path: string;

  public_url: string;

  mime_type: string | null;

  file_size: number | null;

  page_usage: MediaPageUsage | null;

  uploaded_by: string | null;

  created_at: string;

  updated_at: string;
};