"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({
  children,
}: SiteLayoutProps) {
  const pathname = usePathname();

  // Admin has its own layout, navigation and header.
  const isAdminRoute =
    pathname === "/admin" ||
    pathname.startsWith("/admin/");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}