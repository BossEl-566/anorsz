import { Newspaper } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminBlogPage() {
  return (
    <AdminComingSoon
      title="Blog"
      description="Create, edit, publish and manage articles displayed on the Anors.Z blog."
      icon={Newspaper}
    />
  );
}