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
    eyebrow: "Our Company",

    title:
      "From Water Challenges to Intelligent Solutions",

    image: null,

    imageBadge: "Pure • Fresh • Safe",

    lowerTitle:
      "Accessible water. Smarter technology.",

    lowerDescription:
      "Anors.Z Global Water Station provides reliable and affordable drinking-water systems for institutions, businesses, communities and homes.",

    linkLabel: "Discover our company",
    linkHref: "/about",

    features: [
      {
        key: "cleanSafe",
        title: "Clean and safe",
      },
      {
        key: "technology",
        title: "Technology driven",
      },
      {
        key: "eco",
        title: "Eco-conscious",
      },
      {
        key: "reliable",
        title: "Reliable access",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",

    title:
      "How We Deliver Safe Water to You",

    description:
      "Every stage is designed to improve water quality, simplify access and create a reliable refill experience. From purification to smart-card dispensing, the system brings technology and sustainability together.",

    steps: [
      {
        number: "01",
        title: "Advanced Purification",
        description:
          "Water passes through advanced filtration processes that remove sediments, impurities and dissolved substances.",
      },
      {
        number: "02",
        title: "UV Sterilisation",
        description:
          "Ultraviolet treatment helps eliminate bacteria, viruses and other harmful microorganisms before dispensing.",
      },
      {
        number: "03",
        title: "Intelligent Monitoring",
        description:
          "Digital displays provide useful information including temperature, water volume, time and quality readings.",
      },
      {
        number: "04",
        title: "Smart Card Access",
        description:
          "Customers use a dedicated water card to access safe drinking water quickly, securely and conveniently.",
      },
    ],
  },

  impact: {
    eyebrow: "Designed for Performance",

    title:
      "More Than a Water Station — A Smarter Way to Access Clean Water",

    description:
      "High-capacity dispensing, intelligent monitoring and modern purification technologies work together to deliver dependable water access.",

    statistics: [
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
    ],
  },

  whoWeServe: {
    eyebrow: "Built for Every Environment",

    title:
      "Water Solutions for Institutions and Communities",

    description:
      "Our systems can be adapted to different environments, user populations, water demands and dispensing requirements.",

    institutions: [
      {
        key: "schools",
        title: "Schools",
        description:
          "Reliable drinking-water solutions for basic, secondary and tertiary institutions.",
      },
      {
        key: "companies",
        title: "Companies",
        description:
          "Convenient water access for offices, corporate institutions and commercial spaces.",
      },
      {
        key: "factories",
        title: "Factories",
        description:
          "High-capacity systems designed to serve industrial teams and production environments.",
      },
      {
        key: "healthcare",
        title: "Healthcare",
        description:
          "Clean drinking-water systems suitable for hospitals, clinics and care facilities.",
      },
      {
        key: "hotels",
        title: "Hotels",
        description:
          "Modern purification and dispensing solutions for hotels and hospitality facilities.",
      },
      {
        key: "restaurants",
        title: "Restaurants",
        description:
          "Safe water solutions for restaurants, kitchens and catering operations.",
      },
      {
        key: "communities",
        title: "Communities",
        description:
          "Accessible water stations that support healthier and more sustainable communities.",
      },
      {
        key: "publicInstitutions",
        title: "Public Institutions",
        description:
          "Scalable solutions for ministries, public facilities and government institutions.",
      },
    ],
  },

  whoWeAre: {
    eyebrow: "Who We Are",

    title:
      "More Than Water — A Partner in Health and Sustainability",

    description:
      "We believe that access to pure water supports healthier lives and stronger communities. Our model also encourages reusable bottles and reduces dependence on disposable plastic and sachet-water packaging.",

    image: null,

    points: [
      {
        text: "Safe drinking water",
      },
      {
        text: "Reduced plastic waste",
      },
      {
        text: "Modern technology",
      },
    ],

    purposeEyebrow: "Our Purpose",

    purposeText:
      "Promoting healthier lives and building a more sustainable future.",
  },

  cta: {
    eyebrow: "Start Your Water Project",

    title:
      "Ready to Bring Safe Water Closer to Your People?",

    description:
      "Speak with our team about the right water station, purification system or institutional package for your requirements.",

    backgroundImage: null,

    primaryButtonLabel: "Make an Enquiry",
    primaryButtonHref: "/contact",

    secondaryButtonLabel: "Call Our Team",

    phoneNumber: "+233 24 445 3920",
    phoneHref: "tel:+233244453920",
  },
};