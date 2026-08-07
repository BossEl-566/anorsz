import type { HomePageContent } from "@/types/website-content";

export const defaultHomeContent: HomePageContent = {
  hero: {
    eyebrow: "Smart Water Solutions",
    title: "Pure Water Solutions for Healthier Communities",
    description:
      "Smart water purification and dispensing solutions designed for institutions, businesses and communities across Ghana.",
    primaryButtonLabel: "Explore Solutions",
    primaryButtonHref: "/solutions",
    secondaryButtonLabel: "Contact Us",
    secondaryButtonHref: "/contact",
  },

  overview: {
    eyebrow: "Company Overview",
    title: "Making Safe Drinking Water More Accessible",
    description:
      "Anors.Z Global Water Station provides intelligent water purification and dispensing solutions designed around convenience, quality and sustainable access.",
  },

  howItWorks: {
    eyebrow: "How It Works",
    title: "Smart Technology. Simple Access.",
    description:
      "Our systems combine modern purification technology with intelligent dispensing and convenient water access.",
  },

  impact: {
    eyebrow: "Our Impact",
    title: "Water Solutions Built Around People",
    description:
      "Supporting institutions and communities with practical access to purified drinking water.",

    stat1Value: "6",
    stat1Label: "Faucet configurations",

    stat2Value: "200",
    stat2Label: "Users in larger station configurations",

    stat3Value: "24/7",
    stat3Label: "Convenient access",
  },

  whoWeServe: {
    eyebrow: "Who We Serve",
    title: "Solutions for Different Environments",
    description:
      "Our water solutions can support educational institutions, offices, factories, hospitals, hotels, communities and other shared environments.",
  },

  whoWeAre: {
    eyebrow: "Who We Are",
    title: "Building a Better Water Experience",
    description:
      "We combine water purification, intelligent dispensing and ongoing technical support to improve access to safe drinking water.",
  },

  cta: {
    eyebrow: "Start a Conversation",
    title: "Ready to Improve Water Access?",
    description:
      "Speak with our team about the right water solution for your institution, business or community.",
    buttonLabel: "Make an Enquiry",
    buttonHref: "/contact",
  },
};