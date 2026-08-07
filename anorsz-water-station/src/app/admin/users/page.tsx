import { Users } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminUsersPage() {
  return (
    <AdminComingSoon
      title="Admin Users"
      description="Manage authorised administrators and their permissions within the Anors.Z administration system."
      icon={Users}
    />
  );
}