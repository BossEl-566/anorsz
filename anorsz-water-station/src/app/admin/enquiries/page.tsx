import { Mail } from "lucide-react";

import AdminComingSoon from "@/components/admin/AdminComingSoon";

export default function AdminEnquiriesPage() {
  return (
    <AdminComingSoon
      title="Customer Enquiries"
      description="Review and manage messages submitted through the Anors.Z website contact form."
      icon={Mail}
    />
  );
}