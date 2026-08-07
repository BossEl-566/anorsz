import { FileText } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminContentPage() {
  return (
    <AdminComingSoon
      title="Website Content"
      description="Manage text, headings, descriptions, contact information and other content displayed across the Anors.Z website."
      icon={FileText}
    />
  );
}