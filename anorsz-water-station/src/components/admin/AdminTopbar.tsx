"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  ShieldCheck,
} from "lucide-react";

import LogoutButton from "@/components/admin/LogoutButton";

type AdminTopbarProps = {
  userEmail: string | null;
  onOpenMobileMenu: () => void;
};

export default function AdminTopbar({
  userEmail,
  onOpenMobileMenu,
}: AdminTopbarProps) {
  const initial =
    userEmail?.charAt(0).toUpperCase() ?? "A";

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open admin menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/50 transition hover:bg-black/5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <p className="text-sm font-semibold text-[#211024]">
              Website Management
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-black/35">
                System Online
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black/45 transition hover:border-[#681761]/20 hover:bg-[#681761]/5 hover:text-[#681761]"
          >
            <Bell className="h-[18px] w-[18px]" />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#681761]" />
          </button>

          {/* User */}
          <div className="hidden items-center gap-3 rounded-xl border border-black/10 bg-[#f8f7f5] px-3 py-2 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#681761] text-xs font-semibold text-white">
              {initial}
            </span>

            <div className="max-w-[180px]">
              <p className="truncate text-xs font-semibold text-[#211024]">
                {userEmail ?? "Administrator"}
              </p>

              <div className="mt-0.5 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-[#681761]" />

                <span className="text-[9px] uppercase tracking-[0.08em] text-black/35">
                  Administrator
                </span>
              </div>
            </div>

            <ChevronDown className="h-4 w-4 text-black/30" />
          </div>

          <LogoutButton />
        </div>
      </div>
    </header>
  );
}