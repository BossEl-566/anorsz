import { Video } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminMediaPage() {
  return (
    <AdminComingSoon
      title="Media Library"
      description="Upload, organise and manage images and videos used throughout the website."
      icon={Video}
    />
  );
}