import Image from "next/image";
import Link from "next/link";

import anorszLogo from "@/assets/images/anorsz-logo.jpeg";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      {
        label: "Water Stations",
        href: "/solutions/water-stations",
      },
      {
        label: "Purification Systems",
        href: "/solutions/purification-systems",
      },
      {
        label: "Our Technology",
        href: "/technology",
      },
      {
        label: "Gallery",
        href: "/gallery",
      },
    ],
  },
  {
    title: "About Anors.Z",
    links: [
      {
        label: "Who We Are",
        href: "/about",
      },
      {
        label: "Mission & Vision",
        href: "/about#mission-vision",
      },
      {
        label: "Sustainability",
        href: "/about#sustainability",
      },
      {
        label: "Blog & Insights",
        href: "/blog",
      },
    ],
  },
  {
    title: "Support & Resources",
    links: [
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Make an Enquiry",
        href: "/contact#enquiry",
      },
      {
        label: "Frequently Asked Questions",
        href: "/faqs",
      },
      {
        label: "Employee Webmail",
        href: "/employee-webmail",
      },
    ],
  },
];

/*
 * Add the official social media URLs when the client provides them.
 * An empty URL displays the icon without making it clickable.
 */
const socialLinks = [
  {
    label: "LinkedIn",
    href: "",
    icon: <LinkedInIcon />,
  },
  {
    label: "Facebook",
    href: "",
    icon: <FacebookIcon />,
  },
  {
    label: "Instagram",
    href: "",
    icon: <InstagramIcon />,
  },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.5H7v11H3.4v-11Zm5.8 0h3.5V11c.5-.9 1.7-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.9v5.5h-3.6v-4.9c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5H9.2v-11Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M13.8 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.7-1.5H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-[#681761] bg-[#f8f8f8] text-[#172033]">
      {/* Main footer section */}
      <div className="relative overflow-hidden">
        {/* Decorative background pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-40 w-80 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104, 23, 97, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(104, 23, 97, 0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
          {/* Company information */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Anors.Z Global Water Station home"
              className="inline-flex"
            >
              <div className="relative h-[72px] w-[190px]">
                <Image
                  src={anorszLogo}
                  alt="Anors.Z Global Water Station"
                  fill
                  className="object-contain object-left"
                  sizes="190px"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#404859] sm:text-[15px]">
              Providing clean, safe and affordable drinking water through
              intelligent, sustainable and technologically advanced water
              purification solutions.
            </p>
          </div>

          {/* Footer navigation columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-[#172033]">
                {column.title}
              </h2>

              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-[#777d89] transition-colors duration-300 hover:text-[#681761]"
                    >
                      <span>{link.label}</span>

                      <span className="ml-0 h-px w-0 bg-[#681761] transition-all duration-300 group-hover:ml-2 group-hover:w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer section */}
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <p className="text-sm text-[#333947]">
            Copyright © {currentYear} Anors.Z Global Water Station. All rights
            reserved.
          </p>

          <div
            className="flex items-center gap-5"
            aria-label="Social media platforms"
          >
            {socialLinks.map((socialLink) =>
              socialLink.href ? (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Anors.Z on ${socialLink.label}`}
                  className="text-[#151515] transition duration-300 hover:-translate-y-1 hover:text-[#681761]"
                >
                  {socialLink.icon}
                </a>
              ) : (
                <span
                  key={socialLink.label}
                  title={`${socialLink.label} link will be added later`}
                  aria-label={`${socialLink.label} link will be added later`}
                  className="cursor-default text-[#151515]"
                >
                  {socialLink.icon}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}