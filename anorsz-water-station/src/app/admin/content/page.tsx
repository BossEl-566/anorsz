import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Contact,
  Cpu,
  FileText,
  Home,
  Lightbulb,
} from "lucide-react";

const pages = [
  {
    name: "Home",
    description:
      "Hero, overview, process, impact, audiences and call-to-action.",
    href: "/admin/content/home",
    icon: Home,
    status: "Available",
  },

  {
    name: "About Us",
    description:
      "Company story, mission, vision, values and sustainability.",
    href: "/admin/content/about",
    icon: Building2,
    status: "Next",
  },

  {
    name: "Solutions",
    description:
      "Water station solutions, industries and service information.",
    href: "/admin/content/solutions",
    icon: Lightbulb,
    status: "Pending",
  },

  {
    name: "Technology",
    description:
      "Purification, smart-card and dispensing technology content.",
    href: "/admin/content/technology",
    icon: Cpu,
    status: "Pending",
  },

  {
    name: "Contact",
    description:
      "Contact information, enquiry text and business details.",
    href: "/admin/content/contact",
    icon: Contact,
    status: "Pending",
  },

  {
    name: "Global Company Information",
    description:
      "Company name, public email addresses, phone numbers and social links.",
    href: "/admin/content/global",
    icon: FileText,
    status: "Pending",
  },
];

export default function AdminContentPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
          Administration
        </p>

        <h1 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
          Website Content
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
          Manage the text and information displayed throughout
          the Anors.Z public website.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pages.map((page) => {
          const Icon = page.icon;

          const available =
            page.status === "Available";

          return (
            <Link
              key={page.name}
              href={
                available
                  ? page.href
                  : "/admin/content"
              }
              className={`group rounded-2xl border bg-white p-6 transition ${
                available
                  ? "border-black/10 hover:-translate-y-1 hover:border-[#681761]/20 hover:shadow-xl hover:shadow-black/5"
                  : "cursor-default border-black/5 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#681761]/10 text-[#681761]">
                  <Icon className="h-5 w-5" />
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                    available
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-black/5 text-black/30"
                  }`}
                >
                  {page.status}
                </span>
              </div>

              <h2 className="mt-6 text-lg font-semibold text-[#211024]">
                {page.name}
              </h2>

              <p className="mt-2 min-h-[48px] text-sm leading-6 text-black/45">
                {page.description}
              </p>

              {available && (
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#681761]">
                  Edit content

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}