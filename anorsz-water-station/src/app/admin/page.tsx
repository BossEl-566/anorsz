import { redirect } from "next/navigation";
import {
  FileText,
  ImageIcon,
  LayoutDashboard,
  Mail,
  Video,
} from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/admin/login");
  }

  const email =
    typeof data.claims.email === "string"
      ? data.claims.email
      : "Administrator";

  const cards = [
    {
      title: "Website Content",
      description: "Manage text and information across the website.",
      icon: FileText,
    },
    {
      title: "Images",
      description: "Upload, replace and organise website images.",
      icon: ImageIcon,
    },
    {
      title: "Videos",
      description: "Manage gallery and website videos.",
      icon: Video,
    },
    {
      title: "Enquiries",
      description: "View messages submitted through the contact page.",
      icon: Mail,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f3f1]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#681761] text-white">
              <LayoutDashboard className="h-5 w-5" />
            </span>

            <div>
              <p className="font-semibold text-[#211024]">
                Anors.Z Admin
              </p>

              <p className="text-xs text-black/40">
                Website Management
              </p>
            </div>
          </div>

          <LogoutButton />
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <p className="text-sm text-black/45">
          Signed in as
        </p>

        <h1 className="mt-1 text-3xl font-medium tracking-[-0.04em] text-[#211024]">
          {email}
        </h1>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
                  <Icon className="h-5 w-5" />
                </span>

                <h2 className="mt-6 text-lg font-semibold text-[#211024]">
                  {card.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}