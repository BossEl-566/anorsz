import type { Metadata } from "next";

import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photos and videos of Anors.Z water stations, purification technology, installations and community impact.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}