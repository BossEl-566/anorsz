import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CreditCard,
  Droplets,
  Factory,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  House,
  Landmark,
  Leaf,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Users,
  UtensilsCrossed,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";
import ctaBackground from "@/assets/images/home-cta-background.png";

export const metadata: Metadata = {
  title: "Water Solutions",
  description:
    "Explore Anors.Z smart water stations, campus systems, community water stations, commercial purification and groundwater-treatment solutions.",
};

type SolutionCard = {
  number: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  icon: LucideIcon;
};

type ApplicationCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CapacityOption = {
  faucets: string;
  users: string;
  description: string;
  suitableFor: string;
};

const solutionCards: SolutionCard[] = [
  {
    number: "01",
    title: "Smart Water Stations",
    description:
      "Integrated purification, intelligent displays, smart-card access and configurable water temperatures.",
    href: "#smart-water-stations",
    image: aboutStoryImage,
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Campus Water Stations",
    description:
      "Multi-faucet water systems designed for schools, universities and other high-traffic learning environments.",
    href: "#campus-water-stations",
    image: aboutCommunityOne,
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Community Water Stations",
    description:
      "Accessible refill systems created to support residential communities and public-use environments.",
    href: "#community-water-stations",
    image: aboutCommunityThree,
    icon: Users,
  },
  {
    number: "04",
    title: "Commercial Purification",
    description:
      "Scalable drinking-water systems for offices, factories, hospitality and commercial institutions.",
    href: "#commercial-purification",
    image: aboutCommunityTwo,
    icon: Building2,
  },
  {
    number: "05",
    title: "Groundwater Treatment",
    description:
      "Larger purification systems designed to treat groundwater and support direct drinking-water supply.",
    href: "#groundwater-treatment",
    image: aboutMissionImage,
    icon: Waves,
  },
  {
    number: "06",
    title: "Installation and Support",
    description:
      "Site assessment, system selection, installation, training and continued technical assistance.",
    href: "#installation-support",
    image: aboutSupportImage,
    icon: Wrench,
  },
];

const capacityOptions: CapacityOption[] = [
  {
    faucets: "2 Faucets",
    users: "30–60 people",
    description:
      "Compact institutional station for smaller user groups and controlled daily demand.",
    suitableFor: "Small schools, offices and clinics",
  },
  {
    faucets: "3 Faucets",
    users: "60–100 people",
    description:
      "Balanced capacity for institutions requiring faster access during peak periods.",
    suitableFor: "Schools, offices and hospitality facilities",
  },
  {
    faucets: "4 Faucets",
    users: "100–150 people",
    description:
      "Higher-capacity station designed to reduce queues and support regular shared use.",
    suitableFor: "Secondary schools, churches and factories",
  },
  {
    faucets: "6 Faucets",
    users: "150–200 people",
    description:
      "Multi-user dispensing for busy institutions with concentrated refill periods.",
    suitableFor: "Large schools, campuses and industrial sites",
  },
];

const applicationCards: ApplicationCard[] = [
  {
    title: "Schools",
    description:
      "Water stations for basic, secondary and tertiary educational institutions.",
    icon: GraduationCap,
  },
  {
    title: "Companies",
    description:
      "Reliable refill access for offices, corporate institutions and shared workplaces.",
    icon: Building2,
  },
  {
    title: "Factories",
    description:
      "High-capacity systems for industrial sites, production teams and employee facilities.",
    icon: Factory,
  },
  {
    title: "Healthcare",
    description:
      "Purification and dispensing systems for hospitals, clinics and care facilities.",
    icon: HeartPulse,
  },
  {
    title: "Hotels",
    description:
      "Modern water solutions for guest facilities, staff areas and hospitality operations.",
    icon: Hotel,
  },
  {
    title: "Restaurants",
    description:
      "Purified water systems for kitchens, catering services and customer spaces.",
    icon: UtensilsCrossed,
  },
  {
    title: "Communities",
    description:
      "Accessible refill systems designed for residential and public-use environments.",
    icon: House,
  },
  {
    title: "Public Institutions",
    description:
      "Scalable water-access solutions for ministries, churches and government facilities.",
    icon: Landmark,
  },
];

const technologyFeatures = [
  {
    title: "Smart Card Access",
    description:
      "Customers use a dedicated card to access and collect water from the station.",
    icon: CreditCard,
  },
  {
    title: "Intelligent Displays",
    description:
      "Screens can display water temperature, volume, TDS information, date and time.",
    icon: MonitorSmartphone,
  },
  {
    title: "Ultrafiltration",
    description:
      "Helps remove sediments, suspended solids and fine particles from incoming water.",
    icon: Droplets,
  },
  {
    title: "UV Sterilisation",
    description:
      "Ultraviolet treatment helps control bacteria, viruses and harmful microorganisms.",
    icon: Zap,
  },
  {
    title: "Reverse Osmosis",
    description:
      "Helps remove dissolved substances, impurities and unwanted chemicals.",
    icon: Waves,
  },
  {
    title: "Temperature Options",
    description:
      "Station configurations can provide cold, normal, warm or hot drinking water.",
    icon: Thermometer,
  },
];

const supportSteps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "We assess the location, incoming water source, available services and expected usage.",
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "A suitable station, treatment capacity and faucet configuration are recommended.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "The selected system is installed, connected, tested and prepared for operation.",
  },
  {
    number: "04",
    title: "Training and Support",
    description:
      "Users receive operational guidance with continued technical support when required.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[76svh] overflow-hidden bg-[#160b19] text-white">
        <Image
          src={aboutMissionImage}
          alt="Anors.Z water purification and dispensing solution"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#681761]/30" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#100412]/95 via-[#2b102f]/65 to-black/15" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#160b19]/95" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[58%] w-[40%] opacity-[0.14] md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1.4px)",
            backgroundSize: "21px 21px",
            WebkitMaskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-[1440px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 xl:px-16">
          <div className="w-full">
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="h-px w-5 bg-white/40" />

              <span>Solutions</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-5xl text-[clamp(2.5rem,5.7vw,5.6rem)] font-normal leading-[0.99] tracking-[-0.05em]">
                Water Solutions Built
                <span className="block">Around Your Environment.</span>
              </h1>

              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end">
                From intelligent refill stations to larger groundwater
                treatment systems, we provide scalable solutions for schools,
                businesses, institutions and communities.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-white/25" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                Purification, smart access, dispensing, installation, training
                and technical support.
              </p>

              <a
                href="#solution-overview"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Explore our solutions

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION OVERVIEW
      ========================================================== */}
      <section
        id="solution-overview"
        className="relative scroll-mt-24 overflow-hidden bg-[#f7f6f4]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-72 w-72 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104,23,97,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(104,23,97,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.3), transparent)",
            maskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.3), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Our Solutions
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Choose the Right System for Your Water Needs
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Each installation is selected according to the incoming water
              source, number of users, expected daily demand, available space
              and preferred dispensing options.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {solutionCards.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="group relative min-h-[470px] overflow-hidden bg-[#1e0c21] text-white"
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover opacity-65 transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 34vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#160719] via-[#1b091e]/55 to-black/10" />

                  <div className="relative flex min-h-[470px] flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/15 backdrop-blur-md">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-3xl font-light text-white/30">
                        {solution.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-20">
                      <h3 className="text-2xl font-normal leading-tight">
                        {solution.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {solution.description}
                      </p>

                      <a
                        href={solution.href}
                        className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white"
                      >
                        View solution

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SMART WATER STATIONS
      ========================================================== */}
      <section
        id="smart-water-stations"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Smart Water Stations
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              Purification, Intelligence and Convenient Access in One System
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              An intelligent water station combines modern water treatment,
              digital information and controlled dispensing. Customers refill
              reusable bottles using a dedicated smart water card.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Smart-card water access",
                "Real-time digital information",
                "Multiple dispensing faucets",
                "Cold, normal, warm or hot water",
                "Integrated purification system",
                "Suitable for shared environments",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 border-b border-black/10 pb-4 text-sm text-black/65"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761]">
                    <Check className="h-3 w-3" />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#681761] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#52124d]"
            >
              Request a Consultation

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative min-h-[540px] overflow-hidden bg-[#ddd7df]">
            <Image
              src={aboutStoryImage}
              alt="Anors.Z smart water station"
              fill
              className="object-cover transition duration-700 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/70 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 border-t border-white/35 pt-5 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">
                Intelligent Dispensing
              </p>

              <p className="mt-2 max-w-md text-xl leading-tight sm:text-2xl">
                A modern refill experience designed for safer and more
                convenient drinking-water access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY FOUNDATION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#211024] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dda2d7] sm:text-xs">
                Technology Foundation
              </p>

              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Technologies Working Together Behind Every Refill
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              The final configuration depends on the incoming water source and
              the requirements of the intended installation.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group min-h-[300px] bg-[#211024] p-7 transition duration-300 hover:bg-[#681761]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-sm text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-medium">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS WATER STATIONS
      ========================================================== */}
      <section
        id="campus-water-stations"
        className="scroll-mt-24 bg-[#f7f6f4]"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Campus Water Stations
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Flexible Capacity for Different Institution Sizes
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Faucet count and station capacity should be selected according to
              expected users, peak refill periods, available water and the
              institution’s operating environment.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {capacityOptions.map((option, index) => (
              <article
                key={option.faucets}
                className="group min-h-[360px] bg-white p-7 transition duration-300 hover:z-10 hover:-translate-y-1 hover:bg-[#681761] hover:text-white"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                    <Gauge className="h-5 w-5" />
                  </span>

                  <span className="text-sm text-black/20 transition group-hover:text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-14 text-xs font-medium uppercase tracking-[0.16em] text-[#681761] transition group-hover:text-white/55">
                  {option.users}
                </p>

                <h3 className="mt-3 text-2xl font-medium">{option.faucets}</h3>

                <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                  {option.description}
                </p>

                <p className="mt-6 border-t border-black/10 pt-5 text-xs leading-5 text-black/45 transition group-hover:border-white/15 group-hover:text-white/55">
                  Suitable for: {option.suitableFor}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-black/45">
            These are preliminary planning ranges. Final capacity, power,
            storage and treatment specifications should be confirmed after a
            site and water-source assessment.
          </p>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY WATER STATIONS
      ========================================================== */}
      <section
        id="community-water-stations"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div className="relative min-h-[560px] overflow-hidden bg-[#ddd7df]">
            <Image
              src={aboutCommunityThree}
              alt="Community-based drinking-water solution"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Community Access
              </p>

              <p className="mt-3 max-w-lg text-2xl leading-tight">
                Refill infrastructure designed to bring treated drinking water
                closer to the people who need it.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Community Water Stations
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              Accessible Water Systems for Shared Community Use
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              Community-based stations can provide a central location where
              residents access treated drinking water using reusable
              containers.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Suitable for residential communities and public spaces",
                "Controlled dispensing through a water-card system",
                "Designed around expected daily and peak demand",
                "Supports reusable-container water access",
                "Can include intelligent display and monitoring features",
                "Technical support and operational training available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-black/10 pb-4 text-sm leading-6 text-black/65"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#159447]/10 text-[#159447]">
                    <Check className="h-3 w-3" />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL PURIFICATION
      ========================================================== */}
      <section
        id="commercial-purification"
        className="relative scroll-mt-24 overflow-hidden bg-[#f7f6f4]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,23,97,0.16) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.35), transparent)",
            maskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.35), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Commercial Purification
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Scalable Treatment for Business and Institutional Demand
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Larger treatment systems can support institutions that require
              higher output, central purification or water distribution across
              multiple use points.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
            {[
              {
                title: "Office and Corporate",
                description:
                  "Purified drinking-water solutions for shared offices, staff spaces and corporate institutions.",
                image: aboutCommunityTwo,
                icon: Building2,
              },
              {
                title: "Factories and Industry",
                description:
                  "Higher-capacity systems for industrial teams, production facilities and employee-use areas.",
                image: aboutStoryImage,
                icon: Factory,
              },
              {
                title: "Hospitality and Catering",
                description:
                  "Water-treatment systems for hotels, restaurants, kitchens and catering services.",
                image: aboutSustainabilityImage,
                icon: UtensilsCrossed,
              },
            ].map(({ title, description, image, icon: Icon }) => (
              <article
                key={title}
                className="group overflow-hidden bg-white"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#ddd7df]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/50 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="border border-t-0 border-black/10 p-6">
                  <h3 className="text-xl font-medium">{title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {description}
                  </p>

                  <Link
                    href="/contact"
                    className="group/link mt-6 inline-flex items-center gap-3 text-sm font-medium text-[#681761]"
                  >
                    Discuss this solution

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GROUNDWATER TREATMENT
      ========================================================== */}
      <section
        id="groundwater-treatment"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Groundwater Treatment
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              Treatment Systems for Groundwater and Direct Drinking Supply
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              Groundwater systems can combine sediment filtration, activated
              carbon, softening, precision filtration and reverse osmosis
              according to the characteristics of the source water.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Source-water assessment",
                "Sediment filtration",
                "Activated-carbon treatment",
                "Water softening when required",
                "Precision filtration",
                "Reverse-osmosis treatment",
                "Storage and pressure systems",
                "Institutional distribution planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-black/65"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761]">
                    <Check className="h-3 w-3" />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 border-l-2 border-[#681761] pl-5 text-xs leading-6 text-black/45">
              Exact treatment stages must be determined from the source-water
              quality and the intended drinking-water requirements.
            </p>
          </div>

          <div className="relative min-h-[560px] overflow-hidden bg-[#ddd7df]">
            <Image
              src={aboutMissionImage}
              alt="Groundwater purification and treatment system"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />

            <div className="absolute inset-0 bg-[#681761]/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Engineered Purification
              </p>

              <p className="mt-3 max-w-lg text-2xl leading-tight">
                A treatment configuration designed around the source water and
                expected demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Industries and Institutions
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.04em]">
              Water Solutions Adapted to Different Environments
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55">
              We consider user population, daily demand, location, available
              utilities and operating conditions when recommending a system.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {applicationCards.map((application) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="group min-h-[250px] border-b border-r border-black/10 bg-white p-6 transition duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#681761]/30 hover:shadow-[0_22px_60px_rgba(48,13,45,0.1)] sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-[#681761] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {application.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {application.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTALLATION AND SUPPORT
      ========================================================== */}
      <section
        id="installation-support"
        className="relative scroll-mt-24 overflow-hidden bg-[#211024] text-white"
      >
        <Image
          src={aboutSupportImage}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#211024]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#160719]/95 via-[#211024]/85 to-[#681761]/35" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dda2d7] sm:text-xs">
                Installation and Support
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                A Complete Process from Assessment to Continued Support
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              Our role does not end when the equipment arrives. We help clients
              understand the system, prepare users and plan for reliable
              operation.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {supportSteps.map((step) => (
              <article
                key={step.number}
                className="group min-h-[340px] bg-[#211024]/95 p-7 transition duration-300 hover:bg-[#681761]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    {step.number === "01" && <Gauge className="h-5 w-5" />}
                    {step.number === "02" && <Sparkles className="h-5 w-5" />}
                    {step.number === "03" && <Wrench className="h-5 w-5" />}
                    {step.number === "04" && <Handshake className="h-5 w-5" />}
                  </span>

                  <span className="text-4xl font-light text-white/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-medium">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Leaf className="h-5 w-5" />
              </span>

              <p className="max-w-xl text-sm leading-7 text-white/60">
                Long- and short-term arrangements can be discussed according
                to the selected system, client requirements and support needs.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white"
            >
              Discuss a package

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 py-3 sm:px-5 sm:py-5">
        <div className="relative mx-auto min-h-[440px] max-w-[1440px] overflow-hidden">
          <Image
            src={ctaBackground}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-[#210b25]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#160719]/85 via-[#681761]/35 to-[#0f1c19]/55" />

          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-52 opacity-20 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              WebkitMaskImage:
                "linear-gradient(to right, black, transparent)",
              maskImage: "linear-gradient(to right, black, transparent)",
            }}
          />

          <div className="relative z-10 flex min-h-[440px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <div className="max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                Find the Right Solution
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Tell Us About Your Water Requirements
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Share your location, incoming water source, expected number of
                users and preferred solution so our team can recommend the
                appropriate next step.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact#enquiry-form"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start an Enquiry

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/technology"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore Technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}