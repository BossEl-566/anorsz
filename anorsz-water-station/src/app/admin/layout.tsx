import AdminShell from "@/components/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getClaims();

  const email =
    typeof data?.claims?.email === "string"
      ? data.claims.email
      : null;

  return (
    <AdminShell userEmail={email}>
      {children}
    </AdminShell>
  );
}