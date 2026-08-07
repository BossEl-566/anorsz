"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Images,
  LayoutDashboard,
  Mail,
  Newspaper,
  Settings,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";

import anorszLogo from "@/assets/images/anorsz-logo.jpeg";

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type AdminSidebarProps = {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Website Content",
    href: "/admin/content",
    icon: FileText,
  },
  {
    label: "Media Library",
    href: "/admin/media",
    icon: Video,
  },
  {
    label: "Gallery",
    href: "/admin/gallery",
    icon: Images,
  },
  {
    label: "Blog",
    href: "/admin/blog",
    icon: Newspaper,
  },
  {
    label: "Enquiries",
    href: "/admin/enquiries",
    icon: Mail,
  },
  {
    label: "Admin Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({
  isMobileOpen,
  onCloseMobile,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close admin menu"
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-white/10 bg-[#211024] text-white transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/admin"
            onClick={onCloseMobile}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 shadow-lg">
              <Image
                src={anorszLogo}
                alt="Anors.Z"
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <div>
              <p className="text-lg font-semibold tracking-[-0.03em]">
                Anors.Z
              </p>

              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
                Administration
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Management
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-white text-[#681761] shadow-lg"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
                      active
                        ? "bg-[#681761]/10"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Website link */}
        <div className="border-t border-white/10 p-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            View Public Website
          </Link>

          <p className="mt-4 text-center text-[10px] leading-5 text-white/25">
            Anors.Z Website Management
          </p>
        </div>
      </aside>
    </>
  );
}