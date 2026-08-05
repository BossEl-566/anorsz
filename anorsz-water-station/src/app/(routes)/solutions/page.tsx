import type { Metadata } from "next";

import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "Water Solutions",
  description:
    "Explore Anors.Z smart water stations, campus systems, community water stations, commercial purification and groundwater-treatment solutions.",
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}