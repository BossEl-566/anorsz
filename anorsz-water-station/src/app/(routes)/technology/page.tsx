import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Video from "next-video";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleGauge,
  CreditCard,
  Droplets,
  Factory,
  Gauge,
  GraduationCap,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  MoonStar,
  Play,
  Recycle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Users,
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

import technologyVideo from "@videos/about-technology-video.mp4";

export const metadata: Metadata = {
  title: "Our Technology",
  description:
    "Explore the smart-card access, intelligent displays, purification stages and dispensing technology used by Anors.Z Global Water Station.",
};

type TechnologyFeature = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type PurificationStage = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type StationConfiguration = {
  faucets: string;
  users: string;
  description: string;
  application: string;
};

const technologyFeatures: TechnologyFeature[] = [
  {
    number: "01",
    title: "Smart Water Card",
    description:
      "Customers access the station using a dedicated water card, creating a convenient and controlled dispensing process.",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Intelligent Main Display",
    description:
      "The main screen can display water temperature, TDS information, volume, date, time and other operating information.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Individual Faucet Displays",
    description:
      "Separate screens at the dispensing points can show card and water information during each refill.",
    icon: ScanLine,
  },
  {
    number: "04",
    title: "Night-Use Lighting",
    description:
      "Integrated faucet lighting improves visibility when the station is used in low-light or evening environments.",
    icon: MoonStar,
  },
  {
    number: "05",
    title: "High-Volume Dispensing",
    description:
      "Multi-faucet configurations allow several users to collect water during busy institutional periods.",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Temperature Control",
    description:
      "Configurations can provide cold, room-temperature, warm or hot water according to the selected station.",
    icon: Thermometer,
  },
];

const purificationStages: PurificationStage[] = [
  {
    number: "01",
    title: "Pre-Filtration",
    description:
      "The initial treatment stage helps reduce larger particles, visible sediments and suspended material.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Ultrafiltration",
    description:
      "Ultrafiltration helps remove fine suspended solids, sediments and colloidal particles from the incoming water.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Reverse Osmosis",
    description:
      "Reverse osmosis helps reduce dissolved substances, unwanted chemicals and other impurities.",
    icon: CircleGauge,
  },
  {
    number: "04",
    title: "UV Sterilisation",
    description:
      "Ultraviolet treatment helps control bacteria, viruses and other harmful microorganisms.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Final Dispensing",
    description:
      "Purified water is stored and delivered through the selected cold, normal, warm or hot-water outlets.",
    icon: ShieldCheck,
  },
];

const stationConfigurations: StationConfiguration[] = [
  {
    faucets: "2 Faucets",
    users: "30–60 people",
    description:
      "A compact configuration for smaller institutions and controlled daily usage.",
    application: "Small schools, offices and clinics",
  },
  {
    faucets: "3 Faucets",
    users: "60–100 people",
    description:
      "Provides faster shared access for institutions with moderate peak-period demand.",
    application: "Schools, offices and hospitality facilities",
  },
  {
    faucets: "4 Faucets",
    users: "100–150 people",
    description:
      "A higher-capacity system designed to reduce waiting time in busy environments.",
    application: "Secondary schools, churches and factories",
  },
  {
    faucets: "6 Faucets",
    users: "150–200 people",
    description:
      "Multi-user dispensing designed for institutions with concentrated refill periods.",
    application: "Large schools, campuses and industrial sites",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Water Assessment",
    description:
      "The incoming water source and treatment requirements are reviewed before selecting the system.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Capacity Planning",
    description:
      "Expected users, peak refill periods and required daily output are considered.",
    icon: Users,
  },
  {
    number: "03",
    title: "System Configuration",
    description:
      "Purification stages, faucet count, temperature options and storage requirements are selected.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Installation and Testing",
    description:
      "The station is connected, tested and prepared for safe and dependable operation.",
    icon: ShieldCheck,
  },
];

export default function TechnologyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[76svh] overflow-hidden bg-[#160b19] text-white">
        <Image
          src={aboutMissionImage}
          alt="Anors.Z intelligent water-station technology"
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

              <span>Technology</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-5xl text-[clamp(2.5rem,5.7vw,5.6rem)] font-normal leading-[0.99] tracking-[-0.05em]">
                Intelligent Technology
                <span className="block">Behind Every Refill.</span>
              </h1>

              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end">
                Our systems combine advanced purification, intelligent
                monitoring, smart-card access and high-capacity dispensing to
                create a modern drinking-water experience.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-white/25" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                Smart access, water-quality information, purification,
                temperature control and multi-user dispensing.
              </p>

              <a
                href="#technology-overview"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Explore the technology

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY OVERVIEW
      ========================================================== */}
      <section
        id="technology-overview"
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
                Technology Overview
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                One Integrated System with Multiple Intelligent Features
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Every feature plays a different role. Purification supports water
              quality, intelligent displays provide information, smart cards
              organise access and multiple faucets improve dispensing capacity.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {technologyFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group min-h-[335px] bg-white p-7 transition duration-300 hover:z-10 hover:-translate-y-1 hover:bg-[#681761] hover:text-white sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-3xl font-light text-black/15 transition group-hover:text-white/25">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-14 text-xl font-medium">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY VIDEO
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
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dda2d7] sm:text-xs">
                Technology Demonstration
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                See the Water Station Technology in Operation
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              The demonstration can show the smart-card process, intelligent
              displays, dispensing outlets, temperature options and physical
              station configuration.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden border border-white/15 bg-black lg:mt-16">
            <div className="aspect-video">
              <Video
                src={technologyVideo}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pointer-events-none absolute left-5 top-5 z-10 hidden items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white backdrop-blur-md sm:flex">
              <Play className="h-3.5 w-3.5" />
              <span>Anors.Z technology demonstration</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PURIFICATION PROCESS
      ========================================================== */}
      <section className="relative overflow-hidden bg-white">
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
                Purification Process
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Multiple Treatment Stages Working Together
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              The final treatment arrangement should be selected after
              assessing the incoming water. Different stages address different
              types of particles, substances and microorganisms.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 lg:mt-16 lg:grid-cols-5">
            {purificationStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="group relative min-h-[360px] overflow-hidden bg-[#f8f7f5] p-7 transition duration-300 hover:bg-[#681761] hover:text-white"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-black/5 transition duration-500 group-hover:scale-125 group-hover:border-white/10"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-3xl font-light text-black/15 transition group-hover:text-white/25">
                        {stage.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <h3 className="text-xl font-medium">{stage.title}</h3>

                      <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-black/45">
            Treatment requirements can vary according to the quality of the
            municipal, piped or groundwater source. Final system specifications
            should be based on water assessment and project requirements.
          </p>
        </div>
      </section>

      {/* =========================================================
          SMART CARD AND DISPLAY
      ========================================================== */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div className="relative min-h-[560px] overflow-hidden bg-[#ddd7df]">
            <Image
              src={aboutStoryImage}
              alt="Anors.Z smart-card and intelligent display technology"
              fill
              className="object-cover transition duration-700 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />

            <div className="absolute inset-0 bg-[#681761]/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Intelligent User Experience
              </p>

              <p className="mt-3 max-w-lg text-2xl leading-tight">
                Access, information and dispensing brought together in one
                station.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Smart Access and Monitoring
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              A More Informative and Convenient Refill Experience
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              Customers can access water using a dedicated smart card, while
              the station’s screens provide useful information during the
              dispensing process.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Dedicated smart-card access",
                "Main intelligent information screen",
                "Individual faucet display readings",
                "Water-volume information",
                "Water-temperature information",
                "TDS and operating information",
                "Date and time display",
                "Faucet lighting for low-light environments",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-black/10 pb-4 text-sm leading-6 text-black/65"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761]">
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
          DISPENSING CONFIGURATIONS
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Dispensing Configurations
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Faucet Capacity Selected Around the Number of Users
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              The suitable configuration depends on user population, refill
              duration, peak demand, power requirements, water storage and
              available installation space.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {stationConfigurations.map((configuration, index) => (
              <article
                key={configuration.faucets}
                className="group min-h-[390px] bg-[#f8f7f5] p-7 transition duration-300 hover:z-10 hover:-translate-y-1 hover:bg-[#681761] hover:text-white"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                    <Gauge className="h-5 w-5" />
                  </span>

                  <span className="text-sm text-black/20 transition group-hover:text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-14 text-xs font-semibold uppercase tracking-[0.17em] text-[#681761] transition group-hover:text-white/55">
                  {configuration.users}
                </p>

                <h3 className="mt-3 text-2xl font-medium">
                  {configuration.faucets}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                  {configuration.description}
                </p>

                <p className="mt-7 border-t border-black/10 pt-5 text-xs leading-6 text-black/45 transition group-hover:border-white/15 group-hover:text-white/55">
                  Suitable for: {configuration.application}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-black/45">
            These figures are preliminary planning ranges based on the product
            materials. Final capacity and equipment specifications should be
            confirmed after assessment.
          </p>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE AND USER ENVIRONMENTS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#211024] text-white">
        <Image
          src={aboutCommunityTwo}
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#211024]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#160719]/95 via-[#211024]/85 to-[#681761]/35" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#dda2d7] sm:text-xs">
                Built for Real Environments
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Technology That Can Adapt to Different Institutions
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              System capacity, temperature options and treatment stages can be
              considered according to each installation’s environment and
              expected level of use.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {[
              {
                title: "Education",
                description:
                  "Multi-faucet solutions for basic schools, secondary schools and tertiary campuses.",
                icon: GraduationCap,
              },
              {
                title: "Corporate",
                description:
                  "Controlled refill access for offices and commercial institutions.",
                icon: Users,
              },
              {
                title: "Industry",
                description:
                  "Higher-capacity dispensing for factories and production environments.",
                icon: Factory,
              },
              {
                title: "Community",
                description:
                  "Accessible systems for shared residential and public-use environments.",
                icon: Droplets,
              },
            ].map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group min-h-[320px] bg-[#211024]/95 p-7 transition duration-300 hover:bg-[#681761]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-14 text-xl font-medium">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUSTAINABILITY
      ========================================================== */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div className="relative min-h-[520px] overflow-hidden bg-[#d9d2db]">
            <Image
              src={aboutSustainabilityImage}
              alt="Reusable water bottles and sustainable refill technology"
              fill
              className="object-cover transition duration-700 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9 sm:right-9">
              <div className="flex items-center gap-3">
                <Recycle className="h-5 w-5" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/65">
                  Sustainable Refill Technology
                </span>
              </div>

              <p className="mt-3 max-w-lg text-2xl leading-tight">
                Modern water access designed to support reusable bottles and
                reduce disposable packaging.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#159447] sm:text-xs">
              Technology and Sustainability
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              Intelligent Water Access with Environmental Benefits
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              The refill model provides a practical alternative to purchasing
              a new plastic bottle or sachet whenever drinking water is needed.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Encourages reusable water bottles",
                "Reduces dependence on disposable packaging",
                "Helps reduce bottle and sachet waste",
                "Supports organised institutional refill programmes",
                "Provides controlled access through smart cards",
                "Combines water access with modern purification",
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
          IMPLEMENTATION PROCESS
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Technology Implementation
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Selecting Technology Around the Actual Water Project
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              The same system should not be used for every location. Source
              water, user population, daily demand and operating environment
              determine the correct configuration.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {implementationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group min-h-[350px] bg-[#f8f7f5] p-7 transition duration-300 hover:bg-[#681761] hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-4xl font-light text-black/15 transition group-hover:text-white/25">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55 transition group-hover:text-white/70">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT STRIP
      ========================================================== */}
      <section className="border-y border-black/10 bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-12 xl:px-16">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761] text-white">
              <Lightbulb className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                Need Technical Guidance?
              </p>

              <p className="mt-1 text-lg font-medium">
                Let us help configure the right system
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-end">
            <p className="max-w-xl text-sm leading-7 text-black/55">
              Share your water source, location, expected number of users and
              temperature requirements so that the appropriate treatment and
              dispensing configuration can be discussed.
            </p>

            <Link
              href="/contact#enquiry-form"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-[#681761]"
            >
              Request technical advice

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
                <Sparkles className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                Intelligent Water Technology
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Let’s Configure the Right Technology for Your Environment
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Contact our team to discuss source-water treatment, station
                capacity, smart access, temperature options and installation
                requirements.
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
                  href="/solutions"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  View Water Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}