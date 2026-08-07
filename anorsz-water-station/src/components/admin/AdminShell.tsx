"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

type AdminShellProps = {
  children: React.ReactNode;
  userEmail: string | null;
};

export default function AdminShell({
  children,
  userEmail,
}: AdminShellProps) {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  /*
   * Login page must remain completely independent
   * from the dashboard sidebar/header.
   */
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#f5f3f1]">
      <AdminSidebar
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      <div className="min-h-screen lg:pl-[280px]">
        <AdminTopbar
          userEmail={userEmail}
          onOpenMobileMenu={() =>
            setIsMobileMenuOpen(true)
          }
        />

        <main className="min-h-[calc(100vh-5rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}