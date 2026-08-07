import { Settings } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminSettingsPage() {
  return (
    <AdminComingSoon
      title="Settings"
      description="Manage general website information, company contact details and administration settings."
      icon={Settings}
    />
  );
}