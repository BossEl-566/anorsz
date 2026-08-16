"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  SearchCheck,
  Send,
  type LucideIcon,
} from "lucide-react";

import ContactForm from "@/components/contact/ContactForm";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import ctaBackground from "@/assets/images/home-cta-background.png";

type ContactCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  content: ReactNode;
};

const viewport = {
  once: true,
  amount: 0.2,
} as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const enquirySteps = [
  {
    number: "01",
    title: "Send Your Enquiry",
    description:
      "Tell us about your institution, location, expected users and the type of water solution you require.",
    icon: Send,
  },
  {
    number: "02",
    title: "Requirements Review",
    description:
      "Our team reviews your water needs, site conditions and suitable station or treatment configuration.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Consultation",
    description:
      "We contact you to clarify the project and discuss packages, technical requirements and next steps.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Recommended Solution",
    description:
      "You receive a suitable recommendation based on your environment, capacity and water-access needs.",
    icon: SearchCheck,
  },
];

const contactCards: ContactCard[] = [
  {
    title: "Call Our Team",
    description:
      "Speak directly with us regarding water stations, installations and general enquiries.",
    icon: Phone,
    content: (
      <div className="mt-5 space-y-2">
        <a
          href="tel:+233244453920"
          className="block text-sm font-medium text-[#681761] transition hover:text-[#4d1049]"
        >
          024 445 3920
        </a>

        <a
          href="tel:+233241640730"
          className="block text-sm font-medium text-[#681761] transition hover:text-[#4d1049]"
        >
          024 164 0730
        </a>

        <a
          href="tel:+233591868018"
          className="block text-sm font-medium text-[#681761] transition hover:text-[#4d1049]"
        >
          059 186 8018
        </a>
      </div>
    ),
  },
  {
    title: "Send an Email",
    description:
      "Email your project information, questions or partnership proposal to our team.",
    icon: Mail,
    content: (
      <a
        href="mailto:info@anorsz.com"
        className="mt-5 block break-all text-sm font-medium text-[#681761] transition hover:text-[#4d1049]"
      >
        info@anorsz.com
      </a>
    ),
  },
  {
    title: "Service Coverage",
    description:
      "We provide institutional and community water solutions for clients across Ghana.",
    icon: MapPin,
    content: (
      <p className="mt-5 text-sm font-medium text-[#681761]">Ghana</p>
    ),
  },
  {
    title: "Project Consultation",
    description:
      "Contact us for guidance on station capacity, purification systems and implementation requirements.",
    icon: Headphones,
    content: (
      <Link
        href="#enquiry-form"
        className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#681761]"
      >
        Start an enquiry

        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    ),
  },
];

export default function ContactPageClient() {
  return (
    <main className="overflow-hidden bg-[#f7f6f4] text-[#171319]">
      {/* =========================================================
          CONTACT HERO
      ========================================================== */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#160b19] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={aboutSupportImage}
            alt="People using an Anors.Z community water station"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[#681761]/30" />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-r from-[#110513]/95 via-[#2e1030]/60 to-black/15" />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#160b19]/95" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[58%] w-[40%] opacity-[0.15] md:block"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="h-px w-5 bg-white/40" />

              <span>Contact</span>
            </motion.div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="max-w-4xl text-[clamp(2.5rem,5.7vw,5.5rem)] font-normal leading-[0.99] tracking-[-0.05em]"
              >
                Let&apos;s Talk About
                <span className="block">Your Water Needs.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="max-w-xl text-sm leading-7 text-white/72 sm:text-base lg:justify-self-end"
              >
                Tell us about your institution, community or water project. Our
                team will help you identify a suitable water station,
                purification system or support package.
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 h-px w-full origin-left bg-white/25"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                Water stations, treatment systems, installations, technical
                support and institutional packages.
              </p>

              <a
                href="#enquiry-form"
                className="group inline-flex w-fit items-center gap-3 border-b border-white/45 pb-2 text-sm font-medium text-white transition hover:border-white"
              >
                Start your enquiry

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT OPTIONS
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

        <div className="relative mx-auto max-w-360 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Contact Anors.Z
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                Choose the Most Convenient Way to Reach Us
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-xl text-sm leading-7 text-black/60 lg:justify-self-end"
            >
              Contact our team for enquiries about installations, station
              capacities, water-treatment systems, partnerships or technical
              assistance.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;


              return (
                <motion.article
                  key={card.title}
                  variants={staggerItem}
                  whileHover={{ y: -7 }}
                  className="group min-h-[310px] border-b border-r border-black/10 bg-white p-7 transition duration-300 hover:z-10 hover:border-[#681761]/30 hover:shadow-[0_24px_60px_rgba(50,14,49,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#681761]/10 text-[#681761] transition duration-300 group-hover:bg-[#681761] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-12 text-xl font-medium">{card.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {card.description}
                  </p>

                  {card.content}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY FORM
      ========================================================== */}
      <section id="enquiry-form" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:px-12 lg:py-28 xl:px-16">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative min-h-[500px] overflow-hidden bg-[#221025] text-white lg:min-h-full"
          >
            <Image
              src={aboutStoryImage}
              alt="Anors.Z intelligent water station"
              fill
              className="object-cover transition duration-700 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />

            <div className="absolute inset-0 bg-[#351139]/35" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#160719]/98 via-[#1f0a23]/55 to-black/25" />

            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-64 w-64 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1.5px)",
                backgroundSize: "18px 18px",
                WebkitMaskImage:
                  "linear-gradient(to left, black, transparent)",
                maskImage: "linear-gradient(to left, black, transparent)",
              }}
            />

            <div className="relative flex h-full min-h-[500px] flex-col justify-end p-7 sm:p-10 lg:p-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <Droplets className="h-5 w-5" />
              </span>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                Project Enquiry
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-normal leading-tight tracking-[-0.035em] sm:text-4xl">
                Help Us Understand What You Need
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                Provide as much information as possible about your location,
                institution, expected users and preferred solution. This helps
                our team prepare a more relevant response.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 space-y-4 border-t border-white/20 pt-6"
              >
                {[
                  "Institution and project information",
                  "Expected number of water users",
                  "Preferred water-station solution",
                  "Contact information for follow-up",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#72d69a]" />

                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="border border-black/10 bg-[#faf9f7] p-6 sm:p-9 lg:p-12"
          >
            <div className="mb-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
                Send an Enquiry
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                Tell Us About Your Project
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                Complete the form below and provide the information needed for
                our team to review your enquiry.
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS NEXT
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#221025] text-white">
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
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d99cd2] sm:text-xs">
                Our Enquiry Process
              </p>

              <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.04em]">
                What Happens After You Contact Us?
              </h2>
            </motion.div>

            <motion.p
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-xl text-sm leading-7 text-white/60 lg:justify-self-end"
            >
              Each enquiry is reviewed to help us understand the project and
              recommend a suitable water-access solution.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
          >
            {enquirySteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={staggerItem}
                  whileHover={{ y: -7 }}
                  className="group min-h-[340px] bg-[#221025] p-7 transition duration-300 hover:bg-[#681761]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-4xl font-light text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-medium">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/60 transition group-hover:text-white/75">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY IMAGE GALLERY
      ========================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#681761] sm:text-xs">
              Water for Every Environment
            </p>

            <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.04em]">
              Supporting Institutions, Businesses and Communities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55">
              Our water solutions can be adapted to different environments,
              populations, capacities and dispensing requirements.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="group relative min-h-[520px] overflow-hidden bg-[#ddd7df]"
            >
              <Image
                src={aboutCommunityOne}
                alt="Water solution for an institution"
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#170719]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 max-w-md text-white sm:bottom-9 sm:left-9">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Institutional Solutions
                </p>

                <p className="mt-3 text-2xl leading-tight">
                  Dependable drinking-water access designed around the people
                  who use it.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -7 }}
                className="group relative min-h-[250px] overflow-hidden bg-[#ddd7df]"
              >
                <Image
                  src={aboutCommunityTwo}
                  alt="Anors.Z community water access"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  sizes="(max-width: 1024px) 50vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#170719]/65 to-transparent" />
              </motion.div>

              <motion.div
                variants={staggerItem}
                whileHover={{ y: -7 }}
                className="group relative min-h-[250px] overflow-hidden bg-[#ddd7df]"
              >
                <Image
                  src={aboutCommunityThree}
                  alt="Clean water for businesses and communities"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  sizes="(max-width: 1024px) 50vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#170719]/65 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white px-3 pb-3 sm:px-5 sm:pb-5">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={viewport}
          className="relative mx-auto min-h-[430px] max-w-[1440px] overflow-hidden"
        >
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

          <div className="relative z-10 flex min-h-[430px] items-center justify-center px-5 py-16 text-center text-white sm:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="max-w-3xl"
            >
              <motion.span
                variants={staggerItem}
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                <Building2 className="h-5 w-5" />
              </motion.span>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-xs"
              >
                Begin Your Water Project
              </motion.p>

              <motion.h2
                variants={staggerItem}
                className="mt-4 text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em]"
              >
                Ready to Discuss the Right Solution for Your Institution?
              </motion.h2>

              <motion.p
                variants={staggerItem}
                className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70"
              >
                Contact our team and tell us about your location, users and
                water requirements.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <a
                  href="#enquiry-form"
                  className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#681761] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Complete the Form

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+233244453920"
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />

                  Call Our Team
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}