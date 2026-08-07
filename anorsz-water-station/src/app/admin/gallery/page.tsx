import { Images } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminGalleryPage() {
  return (
    <AdminComingSoon
      title="Gallery"
      description="Manage the photographs and portrait videos displayed on the public gallery page."
      icon={Images}
    />
  );
}