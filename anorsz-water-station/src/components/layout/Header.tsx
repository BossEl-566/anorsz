"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import anorszLogo from "@/assets/images/anorsz-logo.jpeg";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled || isMenuOpen
          ? "border-b border-white/10 bg-[#160b19]/92 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12 xl:px-16">
        {/* Logo: left side */}
        <Link
          href="/"
          aria-label="Anors.Z Global Water Station home"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center"
        >
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white px-3 py-2 shadow-lg ring-1 ring-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl sm:w-16 lg:h-16 lg:w-16">
            <Image
              src={anorszLogo}
              alt="Anors.Z Global Water Station"
              priority
              className="h-full w-full object-contain"
              sizes="(max-width: 640px) 145px, (max-width: 1024px) 165px, 185px"
            />
          </div>
        </Link>

        {/* Desktop navigation: right side */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative py-3 text-sm font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu button: right side */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 lg:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#160b19]/97 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1440px] flex-col px-5 py-6 sm:px-8"
        >
          {navigationItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className="group flex items-center justify-between border-b border-white/10 py-4 text-base font-medium text-white/85 transition hover:pl-2 hover:text-white"
            >
              <span>{item.label}</span>

              <span className="text-sm text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-7 flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition hover:bg-cyan-50"
          >
            Make an Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}