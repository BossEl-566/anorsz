import type { Metadata } from "next";

import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Anors.Z Global Water Station to discuss water stations, purification systems, institutional solutions and technical support.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}