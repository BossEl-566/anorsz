import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Droplets,
  Eye,
  Gauge,
  Handshake,
  Leaf,
  MonitorSmartphone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

import ctaBackground from "@/assets/images/home-cta-background.png";
import communityImpactImage from "@/assets/images/hero-1.jpeg";
import waterStationImage from "@/assets/images/home-water-station.jpeg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Anors.Z Global Water Station, our mission, vision, technology and commitment to safe drinking water and environmental sustainability.",
};

type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type TechnologyItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const companyValues: ValueItem[] = [
  {
    title: "Water Quality",
    description:
      "We prioritise clean, safe and dependable drinking water through carefully selected purification technologies.",
    icon: ShieldCheck,
  },
  {
    title: "Accessibility",
    description:
      "Our systems are designed to make quality drinking water easier to access across institutions and communities.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "We use intelligent monitoring, smart-card access and modern dispensing systems to improve the water experience.",
    icon: Sparkles,
  },
  {
    title: "Sustainability",
    description:
      "We encourage reusable bottles, reduce disposable packaging and promote environmentally responsible water access.",
    icon: Leaf,
  },
];

const technologyItems: TechnologyItem[] = [
  {
    number: "01",
    title: "Smart Water Card",
    description:
      "Customers use a dedicated smart card to access water conveniently and securely from the station.",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Intelligent Display",
    description:
      "Digital screens show useful information including water temperature, volume, date, time and water-quality readings.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Ultrafiltration",
    description:
      "The filtration process helps remove suspended solids, sediments and fine particles from the water.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "UV Sterilisation",
    description:
      "Ultraviolet treatment is used to help eliminate bacteria, viruses and other harmful microorganisms.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Reverse Osmosis",
    description:
      "Reverse osmosis helps remove dissolved substances, impurities and unwanted chemicals from the water.",
    icon: Waves,
  },
  {
    number: "06",
    title: "High-Capacity Output",
    description:
      "Selected stations can provide multiple faucets, strong cooling and configurable cold, warm or hot-water options.",
    icon: Gauge,
  },
];

const sustainabilityPoints = [
  "Promotes the use of reusable water bottles",
  "Reduces dependence on disposable plastic bottles",
  "Helps reduce sachet-water waste",
  "Designed for responsible energy consumption",
  "Supports healthier institutions and communities",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          ABOUT HERO
      ========================================================== */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#160b19] text-white">
        <Image
          src={communityImpactImage}
          alt="People benefiting from an Anors.Z water station"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Brand and readability overlays */}
        <div className="absolute inset-0 bg-[#681761]/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#130616]/95 via-[#29102d]/65 to-[#160b19]/25" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-[#160b19]/90" />

        {/* Decorative pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[55%] w-[38%] opacity-[0.16] md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1.4px)",
            backgroundSize: "21px 21px",
            WebkitMaskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 10%, rgba(0,0,0,0.6) 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1440px] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 xl:px-16">
          <div className="w-full">
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="h-px w-5 bg-white/40" />

              <span>About Us</span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <h1 className="max-w-4xl text-[clamp(2.6rem,6vw,5.8rem)] font-normal leading-[0.98] tracking-[-0.05em]">
                Pure Water.
                <span className="block">Positive Impact.</span>
              </h1>

              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end">
                Anors.Z Global Water Station combines modern purification
                technology, convenient access and environmental responsibility
                to help institutions and communities enjoy cleaner and safer
                drinking water.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-white/25" />
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY STORY
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
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

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Our Story
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4.2rem)] font-normal leading-[1.04] tracking-[-0.045em]">
              Rethinking How People Access Safe Drinking Water
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-black/60 sm:text-[15px]">
              <p>
                Anors.Z Global Water Station is a water-refilling company
                focused on providing pure, safe, reliable and affordable
                drinking water for everyday consumption.
              </p>

              <p>
                Our solution is designed for schools, companies, healthcare
                facilities, restaurants, hotels, homes, public institutions and
                communities that need dependable access to quality water.
              </p>

              <p>
                Through modern purification systems and smart dispensing
                technology, we seek to improve public health while helping to
                reduce the environmental waste created by disposable plastic
                bottles and sachet water.
              </p>
            </div>

            <Link
              href="/solutions"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#681761]/40 pb-2 text-sm font-medium text-[#681761] transition hover:border-[#681761]"
            >
              <span>Explore our solutions</span>

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.5] min-h-[480px] overflow-hidden bg-[#ddd6de]">
              <Image
                src={waterStationImage}
                alt="Anors.Z intelligent water station"
                fill
                className="object-cover transition duration-700 hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#160b19]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 border-t border-white/35 pt-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/65">
                  Our Belief
                </p>

                <p className="mt-2 max-w-md text-xl leading-tight sm:text-2xl">
                  Water is life. Pure water makes healthier living possible.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-[#681761]/40 lg:block" />
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION AND VISION
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Why We Exist
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Guided by Purpose and Long-Term Impact
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end">
              Our mission and vision guide how we design water-access
              solutions, work with institutions and measure our impact on
              people and the environment.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#4b164c]/20 bg-[#4b164c]/20 lg:mt-16 lg:grid-cols-2">
            {/* Mission */}
            <article className="group relative min-h-[420px] overflow-hidden bg-[#241026] p-7 text-white sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 transition duration-700 group-hover:scale-110"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
                    <Target className="h-5 w-5" />
                  </span>

                  <span className="text-5xl font-light text-white/15">01</span>
                </div>

                <div className="mt-auto pt-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Our Mission
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-normal leading-tight sm:text-3xl">
                    Make clean and safe drinking water accessible and
                    affordable.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                    We provide dependable water stations that combine modern
                    purification, convenient smart-card access and reusable
                    bottles to protect public health and reduce plastic waste.
                  </p>
                </div>
              </div>
            </article>

            {/* Vision */}
            <article className="group relative min-h-[420px] overflow-hidden bg-[#681761] p-7 text-white sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 transition duration-700 group-hover:scale-110"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Eye className="h-5 w-5" />
                  </span>

                  <span className="text-5xl font-light text-white/20">02</span>
                </div>

                <div className="mt-auto pt-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    Our Vision
                  </p>

                  <h3 className="mt-4 max-w-xl text-2xl font-normal leading-tight sm:text-3xl">
                    Build healthier communities and a more sustainable future.
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                    We aim to create positive global impact by improving access
                    to safe water, protecting the environment and supporting
                    generations with responsible water solutions.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY VALUES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f7f6f4]">
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              What Guides Us
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.04em]">
              Values That Shape Every Solution We Deliver
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {companyValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group min-h-[300px] border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:z-10 hover:-translate-y-1 hover:border-[#681761]/30 hover:shadow-[0_24px_60px_rgba(50,14,49,0.10)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition duration-300 group-hover:bg-[#681761] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-sm text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{value.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#1e0c21] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d89ad0] sm:text-xs">
                Our Technology
              </p>

              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Intelligent Systems Behind Every Drop
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end">
              The water station brings filtration, sterilisation, digital
              monitoring and smart access together in one integrated system.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {technologyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group min-h-[330px] bg-[#1e0c21] p-7 transition duration-300 hover:bg-[#681761] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-3xl font-light text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60">
              Water-station configurations can be selected according to the
              institution, expected number of users and preferred temperature
              options.
            </p>

            <Link
              href="/technology"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span>Explore the technology</span>

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUSTAINABILITY
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div className="relative aspect-[16/11] min-h-[420px] overflow-hidden bg-[#d9d2db]">
            <Image
              src={communityImpactImage}
              alt="Students and community members using reusable water bottles"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#180719]/65 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-3">
                <Recycle className="h-5 w-5" />

                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Environmental Responsibility
                </span>
              </div>

              <p className="mt-3 max-w-lg text-xl leading-tight sm:text-2xl">
                Cleaner water access with less dependence on disposable
                packaging.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#159447] sm:text-xs">
              Sustainability
            </p>

            <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
              Better for People. More Responsible for the Environment.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/60">
              Our refill model encourages people to carry reusable bottles
              rather than depend exclusively on disposable bottled and sachet
              water. It connects access to safe water with practical action
              against plastic pollution.
            </p>

            <div className="mt-8 space-y-4">
              {sustainabilityPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 border-b border-black/10 pb-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#159447]/10 text-[#159447]">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <p className="text-sm leading-6 text-black/65">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERSHIP
      ========================================================== */}
      <section className="border-y border-black/10 bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-12 xl:px-16">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761] text-white">
              <Handshake className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                Our Partnership Approach
              </p>

              <p className="mt-1 text-lg font-medium">
                Support beyond installation
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-black/60 lg:justify-self-end">
            We work with clients to understand their environment, expected
            water demand and preferred system configuration. Available
            packages can include training, technical support and flexible
            short- or long-term arrangements.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 py-3 sm:px-5 sm:py-5">
        <div className="relative mx-auto min-h-[430px] max-w-[1440px] overflow-hidden">
          <Image
            src={ctaBackground}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />

          <div className="absolute inset-0 bg-[#210b25]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#160719]/85 via-[#681761]/35 to-[#0f1c19]/55" />

          <div className="relative z-10 flex min-h-[430px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <div className="max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                <Droplets className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                Work With Anors.Z
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Let’s Build a Cleaner and Safer Water Future
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Speak with our team about a water station or purification
                solution suited to your institution, organisation or
                community.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span>Start an Enquiry</span>

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}