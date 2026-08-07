import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Droplets,
  ShieldCheck,
} from "lucide-react";

import AdminLoginForm from "@/components/admin/AdminLoginForm";

import anorszLogo from "@/assets/images/anorsz-logo.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";

export const metadata: Metadata = {
  title: "Admin Login | Anors.Z",
  description: "Secure administration portal for Anors.Z.",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f4]">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        {/* =====================================================
            LEFT
        ====================================================== */}
        <section className="relative hidden overflow-hidden bg-[#211024] lg:block">
          <Image
            src={aboutSupportImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="55vw"
          />

          <div className="absolute inset-0 bg-[#211024]/60" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#160719] via-[#211024]/50 to-black/20" />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 flex min-h-screen flex-col justify-between p-12 xl:p-16">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 text-sm text-white/65 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />

              Back to website
            </Link>

            <div className="max-w-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                <Droplets className="h-5 w-5" />
              </span>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Anors.Z Administration
              </p>

              <h1 className="mt-4 text-[clamp(2.8rem,5vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.055em] text-white">
                Manage the
                <span className="block">
                  Anors.Z experience.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                A secure workspace for managing website content,
                media, enquiries, articles and company information.
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-white/15 pt-6 text-xs text-white/45">
              <ShieldCheck className="h-4 w-4" />

              Authorised personnel only
            </div>
          </div>
        </section>

        {/* =====================================================
            LOGIN
        ====================================================== */}
        <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8 lg:px-12">
          <div className="w-full max-w-[480px]">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-[#681761] lg:hidden"
            >
              <ArrowLeft className="h-4 w-4" />

              Back to website
            </Link>

            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white p-2 shadow-sm">
                <Image
                  src={anorszLogo}
                  alt="Anors.Z"
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <div>
                <p className="text-xl font-semibold tracking-[-0.03em] text-[#211024]">
                  Anors.Z
                </p>

                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-black/40">
                  Administration Portal
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#681761]">
                Welcome Back
              </p>

              <h2 className="mt-3 text-4xl font-normal tracking-[-0.045em] text-[#211024] sm:text-5xl">
                Sign in
              </h2>

              <p className="mt-4 text-sm leading-6 text-black/50">
                Enter your authorised company email and password to
                access the administration dashboard.
              </p>
            </div>

            <AdminLoginForm />

            <p className="mt-8 text-center text-xs text-black/35">
              © {new Date().getFullYear()} Anors.Z Global Water
              Station
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}