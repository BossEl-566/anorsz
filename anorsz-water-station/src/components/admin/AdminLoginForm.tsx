"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function AdminLoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const supabase = createClient();

      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });

      if (loginError) {
        setError("Invalid email address or password.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError(
        "Something went wrong while signing in. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-[#211024]"
        >
          Company email
        </label>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35" />

          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@anorsz.com"
            className="h-14 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-12 pr-4 text-sm text-[#211024] outline-none transition placeholder:text-black/30 focus:border-[#681761] focus:ring-4 focus:ring-[#681761]/10"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#211024]"
          >
            Password
          </label>

          <span className="text-xs text-black/40">
            Secure access
          </span>
        </div>

        <div className="relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35" />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="h-14 w-full rounded-xl border border-black/10 bg-[#f8f7f5] pl-12 pr-12 text-sm text-[#211024] outline-none transition placeholder:text-black/30 focus:border-[#681761] focus:ring-4 focus:ring-[#681761]/10"
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35 transition hover:text-[#681761]"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#681761] px-6 text-sm font-semibold text-white transition hover:bg-[#52114d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign in to Admin

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <div className="flex items-start gap-3 rounded-xl bg-[#f8f7f5] p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#681761]" />

        <p className="text-xs leading-5 text-black/50">
          This area is restricted to authorised Anors.Z personnel.
          Login activity and administrative changes will later be
          recorded for security and accountability.
        </p>
      </div>
    </form>
  );
}