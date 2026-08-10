import type { AboutPageContent } from "@/types/website-content";

export const defaultAboutContent: AboutPageContent = {
  hero: {
    breadcrumbLabel: "About Us",

    titleLineOne: "Pure Water.",
    titleLineTwo: "Positive Impact.",

    description:
      "We combine modern purification technology, intelligent dispensing and environmental responsibility to help people access cleaner and safer drinking water.",

    audienceDescription:
      "Serving schools, businesses, healthcare facilities, hospitality organisations, homes and communities.",

    linkLabel: "Speak with our team",
    linkHref: "/contact",
  },

  story: {
    eyebrow: "Our Story",

    title:
      "Rethinking How People Access Safe Drinking Water",
    image: null,

    paragraphOne:
      "Anors.Z Global Water Station is a water-refilling company focused on making pure, safe, reliable and affordable drinking water available for everyday consumption.",

    paragraphTwo:
      "Our solutions are designed for schools, companies, hospitals, restaurants, hotels, homes, government institutions and communities that require dependable water access.",

    paragraphThree:
      "Through advanced purification and smart dispensing technologies, we seek to improve public health while reducing environmental waste from disposable bottles and sachet water.",

    linkLabel: "Explore our water solutions",
    linkHref: "/solutions",

    beliefEyebrow: "Our Belief",

    beliefText:
      "Water is life. Pure water makes healthier living possible.",
  },

  purpose: {
    eyebrow: "Why We Exist",

    title:
      "Guided by Purpose and Long-Term Impact",

    description:
      "Our mission and vision guide how we design water systems, work with institutions and measure our impact on people and the environment.",

    missionEyebrow: "Our Mission",

    missionTitle:
      "Make clean and safe drinking water accessible and affordable.",

    missionDescription:
      "We provide dependable water stations that combine modern purification, convenient smart-card access and reusable bottles to protect health and reduce waste.",

    missionImage: null,

    visionEyebrow: "Our Vision",

    visionTitle:
      "Build healthier communities and a more sustainable future.",

    visionDescription:
      "We aim to create positive global impact by improving access to safe water, protecting the environment and supporting future generations.",

    visionImage: null,
  },

  values: {
    eyebrow: "What Guides Us",

    title:
      "Values That Shape Every Solution We Deliver",

    items: [
      {
        key: "waterQuality",

        title: "Water Quality",

        description:
          "We place clean, safe and dependable drinking water at the centre of every solution we deliver.",
      },

      {
        key: "accessibility",

        title: "Accessibility",

        description:
          "Our systems make quality drinking water easier to access across institutions and communities.",
      },

      {
        key: "innovation",

        title: "Innovation",

        description:
          "We use smart-card access, intelligent displays and modern purification systems to improve water access.",
      },

      {
        key: "sustainability",

        title: "Sustainability",

        description:
          "We encourage reusable bottles and help reduce waste from disposable plastic and sachet-water packaging.",
      },
    ],
  },

  technology: {
    eyebrow: "Our Technology",

    title:
      "Intelligent Systems Behind Every Drop",

    description:
      "Our water stations combine filtration, sterilisation, smart-card access, real-time information and modern dispensing technology in one integrated solution.",

    videoLabel: "Technology demonstration",

    items: [
      {
        key: "smartCard",
        number: "01",

        title: "Smart Water Card",

        description:
          "Customers use a dedicated smart card to access water conveniently and securely.",
      },

      {
        key: "display",
        number: "02",

        title: "Intelligent Display",

        description:
          "Digital screens show temperature, water volume, TDS readings, date, time and card information.",
      },

      {
        key: "ultrafiltration",
        number: "03",

        title: "Ultrafiltration",

        description:
          "The filtration system removes suspended solids, sediments and fine colloidal particles.",
      },

      {
        key: "uv",
        number: "04",

        title: "UV Sterilisation",

        description:
          "Ultraviolet treatment helps eliminate bacteria, viruses and other harmful microorganisms.",
      },

      {
        key: "reverseOsmosis",
        number: "05",

        title: "Reverse Osmosis",

        description:
          "Reverse osmosis removes dissolved substances, impurities and unwanted chemicals.",
      },

      {
        key: "highCapacity",
        number: "06",

        title: "High-Capacity Output",

        description:
          "Available configurations include multiple faucets and cold, warm or hot-water dispensing.",
      },
    ],
  },

  impact: {
  eyebrow: "Where We Make an Impact",

  title:
    "Water Solutions Designed for Different Environments",

  description:
    "Station size, faucet configuration, temperature options and purification capacity can be selected according to the environment and expected number of users.",

  items: [
    {
      key: "education",

      title: "Education",

      description:
        "Supporting basic, secondary and tertiary institutions with dependable access to safe drinking water.",

      image: null,
    },

    {
      key: "business",

      title: "Business and Industry",

      description:
        "Providing scalable systems for offices, corporate institutions, factories and commercial facilities.",

      image: null,
    },

    {
      key: "communities",

      title: "Communities and Public Spaces",

      description:
        "Creating convenient refill access for communities, hospitals, hotels and public institutions.",

      image: null,
    },
  ],
},

  sustainability: {
    eyebrow: "Sustainability",

    title:
      "Better for People. More Responsible for the Environment.",

    description:
      "Our refill model encourages customers to carry reusable bottles instead of depending exclusively on disposable bottled and sachet water. It connects access to safe water with practical action against plastic pollution.",

    image: null,

    imageEyebrow:
      "Environmental Responsibility",

    imageText:
      "Cleaner water access with less dependence on disposable packaging.",

    points: [
      "Promotes the use of reusable water bottles",
      "Reduces dependence on disposable plastic bottles",
      "Helps reduce sachet-water waste",
      "Uses efficient modern purification technologies",
      "Supports healthier institutions and communities",
    ],
  },

  support: {
    eyebrow: "Installation and Support",

    title:
      "Support That Continues Beyond Installation",

    description:
      "We work with each client to understand their environment, expected number of users, water requirements and preferred station configuration.",

    image: null,

    items: [
      {
        key: "siteAssessment",

        title: "Site Assessment",

        description:
          "Understanding the location, water source and expected usage.",
      },

      {
        key: "systemSelection",

        title: "System Selection",

        description:
          "Choosing the suitable station size and purification capacity.",
      },

      {
        key: "installation",

        title: "Installation",

        description:
          "Professional setup, testing and commissioning of the station.",
      },

      {
        key: "trainingSupport",

        title: "Training and Support",

        description:
          "User guidance and continued technical assistance.",
      },
    ],

    imageEyebrow: "A Long-Term Partner",

    imageText:
      "Training, technical guidance and flexible support packages.",
  },

  cta: {
    eyebrow: "Begin Your Water Project",

    title:
      "Ready to Discuss the Right Solution for Your Institution?",

    description:
      "Contact our team and tell us about your location, users and water requirements.",

    primaryButtonLabel: "Start an Enquiry",
    primaryButtonHref: "/contact#enquiry-form",

    secondaryButtonLabel: "Explore Solutions",
    secondaryButtonHref: "/solutions",
  },
};