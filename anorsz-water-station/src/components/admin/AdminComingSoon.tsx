import Link from "next/link";
import {
  ArrowLeft,
  Construction,
  type LucideIcon,
} from "lucide-react";

type AdminComingSoonProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function AdminComingSoon({
  title,
  description,
  icon: Icon,
}: AdminComingSoonProps) {
  return (
    <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
          Administration
        </p>

        <h1 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-[#211024] sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
          {description}
        </p>
      </div>

      <div className="mt-8 flex min-h-[420px] items-center justify-center rounded-2xl border border-black/10 bg-white px-5">
        <div className="max-w-md text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#681761]/10 text-[#681761]">
            <Icon className="h-7 w-7" />
          </span>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Construction className="h-4 w-4 text-amber-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
              Module Setup
            </p>
          </div>

          <h2 className="mt-3 text-xl font-semibold text-[#211024]">
            This management module is ready for development
          </h2>

          <p className="mt-3 text-sm leading-6 text-black/45">
            The admin structure is complete. We will connect this
            section to the database and public website in the next
            development phases.
          </p>

          <Link
            href="/admin"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-medium text-black/55 transition hover:border-[#681761]/20 hover:text-[#681761]"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}