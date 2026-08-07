import type { ReactNode } from "react";

type ContentSectionProps = {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function ContentSection({
  number,
  title,
  description,
  children,
}: ContentSectionProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      <div className="border-b border-black/10 px-5 py-5 sm:px-6">
        <div className="flex items-start gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#681761]/10 text-xs font-semibold text-[#681761]">
            {number}
          </span>

          <div>
            <h2 className="font-semibold text-[#211024]">
              {title}
            </h2>

            <p className="mt-1 text-xs leading-5 text-black/40">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:p-6">
        {children}
      </div>
    </section>
  );
}