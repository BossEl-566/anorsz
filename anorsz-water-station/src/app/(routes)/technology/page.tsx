import type { Metadata } from "next";

import TechnologyPageClient from "./TechnologyPageClient";

export const metadata: Metadata = {
  title: "Our Technology",
  description:
    "Explore the smart-card access, intelligent displays, purification stages and dispensing technology used by Anors.Z Global Water Station.",
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}