import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  FileText,
  ImageIcon,
  Mail,
  Newspaper,
  Plus,
  Settings,
  Users,
  Video,
} from "lucide-react";

const summaryCards = [
  {
    title: "Website Pages",
    value: "7",
    description: "Public pages available for management",
    icon: FileText,
    href: "/admin/content",
  },
  {
    title: "Gallery Media",
    value: "0",
    description: "Managed images and videos",
    icon: ImageIcon,
    href: "/admin/gallery",
  },
  {
    title: "Blog Posts",
    value: "3",
    description: "Existing articles currently on the website",
    icon: Newspaper,
    href: "/admin/blog",
  },
  {
    title: "Enquiries",
    value: "0",
    description: "Messages submitted through the website",
    icon: Mail,
    href: "/admin/enquiries",
  },
];

const quickActions = [
  {
    title: "Edit Website",
    description: "Change page text and information",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "Upload Media",
    description: "Add images or videos",
    href: "/admin/media",
    icon: Video,
  },
  {
    title: "Create Blog Post",
    description: "Publish a new article",
    href: "/admin/blog",
    icon: Plus,
  },
  {
    title: "Manage Users",
    description: "Control administrator access",
    href: "/admin/users",
    icon: Users,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
            Administration
          </p>

          <h1 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
            Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
            Manage the Anors.Z website, media, blog posts,
            customer enquiries and administrator accounts from
            one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black/60 transition hover:border-[#681761]/20 hover:text-[#681761]"
          >
            View Website

            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 rounded-xl bg-[#681761] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#52114d]"
          >
            <FileText className="h-4 w-4" />

            Manage Content
          </Link>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#681761]/20 hover:shadow-xl hover:shadow-black/5 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
                  <Icon className="h-5 w-5" />
                </span>

                <ArrowRight className="h-4 w-4 text-black/20 transition group-hover:translate-x-1 group-hover:text-[#681761]" />
              </div>

              <p className="mt-7 text-3xl font-medium tracking-[-0.04em] text-[#211024]">
                {card.value}
              </p>

              <h2 className="mt-2 text-sm font-semibold text-[#211024]">
                {card.title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-black/40">
                {card.description}
              </p>
            </Link>
          );
        })}
      </section>

      {/* =====================================================
          MAIN AREA
      ====================================================== */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        {/* Quick actions */}
        <section className="rounded-2xl border border-black/10 bg-white">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-semibold text-[#211024]">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-black/40">
                Common website management tasks
              </p>
            </div>

            <Settings className="h-5 w-5 text-black/20" />
          </div>

          <div className="grid gap-px bg-black/10 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group bg-white p-5 transition hover:bg-[#faf8fa] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761] transition group-hover:bg-[#681761] group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-[#211024]">
                        {action.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-black/40">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Activity */}
        <section className="rounded-2xl border border-black/10 bg-white">
          <div className="border-b border-black/10 px-5 py-5 sm:px-6">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#681761]" />

              <h2 className="font-semibold text-[#211024]">
                Recent Activity
              </h2>
            </div>

            <p className="mt-1 text-xs text-black/40">
              Administrative activity will appear here
            </p>
          </div>

          <div className="flex min-h-[260px] flex-col items-center justify-center px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#681761]/8 text-[#681761]">
              <Clock3 className="h-6 w-6" />
            </span>

            <h3 className="mt-5 text-sm font-semibold text-[#211024]">
              No activity recorded yet
            </h3>

            <p className="mt-2 max-w-xs text-xs leading-5 text-black/40">
              Once administrators begin updating website
              content, their actions will be recorded here.
            </p>
          </div>
        </section>
      </div>

      {/* =====================================================
          SYSTEM STATUS
      ====================================================== */}
      <section className="mt-6 rounded-2xl border border-black/10 bg-[#211024] p-6 text-white">
        <div className="grid gap-6 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              System Status
            </p>

            <h2 className="mt-2 text-xl font-medium">
              Anors.Z Administration
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <div>
              <p className="text-sm font-medium">
                Authentication
              </p>

              <p className="mt-1 text-xs text-white/40">
                Supabase connected
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-300" />

            <div>
              <p className="text-sm font-medium">
                Content Database
              </p>

              <p className="mt-1 text-xs text-white/40">
                Setup pending
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}