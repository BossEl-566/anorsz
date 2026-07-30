import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CircleGauge,
  CreditCard,
  Droplets,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  House,
  Leaf,
  MonitorSmartphone,
  PhoneCall,
  Recycle,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import HeroSection from "@/components/sections/HeroSection";

import ctaBackground from "@/assets/images/home-cta-background.png";
import communityImpactImage from "@/assets/images/home-community-impact.png";
import waterStationImage from "@/assets/images/home-water-station.jpeg";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type Institution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Advanced Purification",
    description:
      "Water passes through advanced filtration processes that remove sediments, impurities and dissolved substances.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "UV Sterilisation",
    description:
      "Ultraviolet treatment helps eliminate bacteria, viruses and other harmful microorganisms before dispensing.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Intelligent Monitoring",
    description:
      "Digital displays provide useful information including temperature, water volume, time and quality readings.",
    icon: MonitorSmartphone,
  },
  {
    number: "04",
    title: "Smart Card Access",
    description:
      "Customers use a dedicated water card to access safe drinking water quickly, securely and conveniently.",
    icon: CreditCard,
  },
];

const institutions: Institution[] = [
  {
    title: "Schools",
    description:
      "Reliable drinking-water solutions for basic, secondary and tertiary institutions.",
    icon: GraduationCap,
  },
  {
    title: "Companies",
    description:
      "Convenient water access for offices, corporate institutions and commercial spaces.",
    icon: Building2,
  },
  {
    title: "Factories",
    description:
      "High-capacity systems designed to serve industrial teams and production environments.",
    icon: Factory,
  },
  {
    title: "Healthcare",
    description:
      "Clean drinking-water systems suitable for hospitals, clinics and care facilities.",
    icon: HeartPulse,
  },
  {
    title: "Hotels",
    description:
      "Modern purification and dispensing solutions for hotels and hospitality facilities.",
    icon: Hotel,
  },
  {
    title: "Restaurants",
    description:
      "Safe water solutions for restaurants, kitchens and catering operations.",
    icon: UtensilsCrossed,
  },
  {
    title: "Communities",
    description:
      "Accessible water stations that support healthier and more sustainable communities.",
    icon: House,
  },
  {
    title: "Public Institutions",
    description:
      "Scalable solutions for ministries, public facilities and government institutions.",
    icon: ShieldCheck,
  },
];

const impactStatistics = [
  {
    value: "6",
    suffix: "",
    label: "Maximum dispensing faucets",
  },
  {
    value: "3",
    suffix: "",
    label: "Advanced purification stages",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Continuous water access",
  },
  {
    value: "3",
    suffix: "",
    label: "Temperature options available",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      <HeroSection />

      {/* =========================================================
          COMPANY OVERVIEW
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        {/* Decorative pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-44 w-80 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104,23,97,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(104,23,97,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.4), transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, black, rgba(0,0,0,0.4), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Heading */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Our Company
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4.25rem)] font-normal leading-[1.04] tracking-[-0.045em]">
                From Water Challenges to Intelligent Solutions
              </h2>
            </div>

            {/* Main image */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ded9df]">
                <Image
                  src={waterStationImage}
                  alt="Anors.Z intelligent water station"
                  fill
                  priority={false}
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a091c]/35 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs text-white backdrop-blur-md sm:bottom-7 sm:left-7">
                  Pure • Fresh • Safe
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 border-b border-l border-[#681761]/40 lg:block" />
            </div>
          </div>

          {/* Lower overview row */}
          <div className="mt-12 grid gap-10 border-t border-black/15 pt-8 md:grid-cols-[0.8fr_1.2fr] lg:mt-16 lg:pt-10">
            <div>
              <h3 className="text-lg font-medium">
                Accessible water. Smarter technology.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-black/60">
                Anors.Z Global Water Station provides reliable and affordable
                drinking-water systems for institutions, businesses,
                communities and homes.
              </p>

              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#681761]/40 pb-2 text-sm font-medium text-[#681761] transition hover:border-[#681761]"
              >
                <span>Discover our company</span>

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Clean and safe",
                  icon: ShieldCheck,
                },
                {
                  title: "Technology driven",
                  icon: CircleGauge,
                },
                {
                  title: "Eco-conscious",
                  icon: Leaf,
                },
                {
                  title: "Reliable access",
                  icon: Droplets,
                },
              ].map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="group flex items-center gap-4 border border-black/10 bg-white px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#681761]/30 hover:shadow-[0_18px_50px_rgba(48,13,45,0.08)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#681761]/8 text-[#681761] transition group-hover:bg-[#681761] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW THE WATER STATION WORKS
      ========================================================== */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,23,97,0.16) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.4), transparent)",
            WebkitMaskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.4), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                How It Works
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                How We Deliver Safe Water to You
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Every stage is designed to improve water quality, simplify
              access and create a reliable refill experience. From
              purification to smart-card dispensing, the system brings
              technology and sustainability together.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#3a123a]/20 bg-[#3a123a]/20 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative min-h-[310px] overflow-hidden bg-[#241026] p-6 text-white transition duration-500 hover:bg-[#681761] sm:p-7 lg:min-h-[350px]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-4xl font-light text-white/25">
                        {step.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <h3 className="text-xl font-normal leading-tight">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-white/65 transition group-hover:text-white/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT / KEY NUMBERS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-60 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,23,97,0.14) 1px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to right, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, black, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Designed for Performance
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.7rem)] font-normal leading-[1.08] tracking-[-0.04em]">
              More Than a Water Station — A Smarter Way to Access Clean Water
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/60">
              High-capacity dispensing, intelligent monitoring and modern
              purification technologies work together to deliver dependable
              water access.
            </p>
          </div>

          <div className="mt-14 grid gap-y-10 border-y border-black/10 py-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {impactStatistics.map((statistic, index) => (
              <div
                key={statistic.label}
                className={`text-center ${
                  index !== 0 ? "sm:border-l sm:border-black/10" : ""
                }`}
              >
                <p className="text-5xl font-light tracking-[-0.05em] text-[#681761] sm:text-6xl">
                  {statistic.value}
                  <span className="text-2xl">{statistic.suffix}</span>
                </p>

                <p className="mx-auto mt-4 max-w-[180px] text-xs leading-5 text-black/55">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Built for Every Environment
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Water Solutions for Institutions and Communities
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Our systems can be adapted to different environments, user
              populations, water demands and dispensing requirements.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {institutions.map((institution) => {
              const Icon = institution.icon;

              return (
                <article
                  key={institution.title}
                  className="group min-h-[235px] border-b border-r border-black/10 bg-white p-6 transition duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#681761]/30 hover:shadow-[0_22px_60px_rgba(48,13,45,0.1)] sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#681761]/8 text-[#681761] transition duration-300 group-hover:bg-[#681761] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {institution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {institution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(104,23,97,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(104,23,97,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.5), transparent)",
            WebkitMaskImage:
              "linear-gradient(to left, black, rgba(0,0,0,0.5), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Who We Are
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                More Than Water — A Partner in Health and Sustainability
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-7 text-black/60">
                We believe that access to pure water supports healthier lives
                and stronger communities. Our model also encourages reusable
                bottles and reduces dependence on disposable plastic and
                sachet-water packaging.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Safe drinking water",
                  "Reduced plastic waste",
                  "Modern technology",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#159447]/12 text-[#159447]">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-12 aspect-[16/8.5] min-h-[360px] overflow-hidden bg-[#d8d2d9] lg:mt-16">
            <Image
              src={communityImpactImage}
              alt="Anors.Z supporting institutions and communities"
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#180719]/55 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 max-w-md text-white sm:bottom-8 sm:left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Our Purpose
              </p>

              <p className="mt-3 text-xl font-normal sm:text-2xl">
                Promoting healthier lives and building a more sustainable
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 py-3 sm:px-5 sm:py-5">
        <div className="relative mx-auto min-h-[390px] max-w-[1440px] overflow-hidden">
          <Image
            src={ctaBackground}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          {/* Dark branded overlays */}
          <div className="absolute inset-0 bg-[#2c102d]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#19081c]/80 via-[#681761]/35 to-[#11251e]/60" />

          <div
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-full w-48 opacity-20 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1.5px)",
              backgroundSize: "16px 16px",
              maskImage:
                "linear-gradient(to right, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, black, transparent)",
            }}
          />

          <div className="relative z-10 flex min-h-[390px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <div className="max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <Sparkles className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs">
                Start Your Water Project
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Ready to Bring Safe Water Closer to Your People?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Speak with our team about the right water station,
                purification system or institutional package for your
                requirements.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span>Make an Enquiry</span>

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+233244453920"
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}