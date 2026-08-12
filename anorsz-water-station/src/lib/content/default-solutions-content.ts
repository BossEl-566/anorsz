import type {
  SolutionsPageContent,
} from "@/types/website-content";

export const defaultSolutionsContent: SolutionsPageContent =
  {
    /*
     * =====================================================
     * HERO
     * =====================================================
     */

    hero: {
      breadcrumbLabel:
        "Solutions",

      titleLineOne:
        "Water Solutions Built",

      titleLineTwo:
        "Around Your Environment.",

      description:
        "From intelligent refill stations to larger groundwater treatment systems, we provide scalable solutions for schools, businesses, institutions and communities.",

      lowerDescription:
        "Purification, smart access, dispensing, installation, training and technical support.",

      linkLabel:
        "Explore our solutions",

      linkHref:
        "#solution-overview",

      image: null,
    },

    /*
     * =====================================================
     * SOLUTION OVERVIEW
     * =====================================================
     */

    overview: {
      eyebrow:
        "Our Solutions",

      title:
        "Choose the Right System for Your Water Needs",

      description:
        "Each installation is selected according to the incoming water source, number of users, expected daily demand, available space and preferred dispensing options.",

      items: [
        {
          key:
            "smartWater",

          number:
            "01",

          title:
            "Smart Water Stations",

          description:
            "Integrated purification, intelligent displays, smart-card access and configurable water temperatures.",

          href:
            "#smart-water-stations",

          image: null,
        },

        {
          key:
            "campus",

          number:
            "02",

          title:
            "Campus Water Stations",

          description:
            "Multi-faucet water systems designed for schools, universities and other high-traffic learning environments.",

          href:
            "#campus-water-stations",

          image: null,
        },

        {
          key:
            "community",

          number:
            "03",

          title:
            "Community Water Stations",

          description:
            "Accessible refill systems created to support residential communities and public-use environments.",

          href:
            "#community-water-stations",

          image: null,
        },

        {
          key:
            "commercial",

          number:
            "04",

          title:
            "Commercial Purification",

          description:
            "Scalable drinking-water systems for offices, factories, hospitality and commercial institutions.",

          href:
            "#commercial-purification",

          image: null,
        },

        {
          key:
            "groundwater",

          number:
            "05",

          title:
            "Groundwater Treatment",

          description:
            "Larger purification systems designed to treat groundwater and support direct drinking-water supply.",

          href:
            "#groundwater-treatment",

          image: null,
        },

        {
          key:
            "support",

          number:
            "06",

          title:
            "Installation and Support",

          description:
            "Site assessment, system selection, installation, training and continued technical assistance.",

          href:
            "#installation-support",

          image: null,
        },
      ],
    },

    /*
     * =====================================================
     * SMART WATER
     * =====================================================
     */

    smartWater: {
      eyebrow:
        "Smart Water Stations",

      title:
        "Purification, Intelligence and Convenient Access in One System",

      description:
        "An intelligent water station combines modern water treatment, digital information and controlled dispensing. Customers refill reusable bottles using a dedicated smart water card.",

      features: [
        "Smart-card water access",

        "Real-time digital information",

        "Multiple dispensing faucets",

        "Cold, normal, warm or hot water",

        "Integrated purification system",

        "Suitable for shared environments",
      ],

      buttonLabel:
        "Request a Consultation",

      buttonHref:
        "/contact",

      image: null,

      imageEyebrow:
        "Intelligent Dispensing",

      imageText:
        "A modern refill experience designed for safer and more convenient drinking-water access.",
    },

    /*
     * =====================================================
     * TECHNOLOGY
     * =====================================================
     */

    technology: {
      eyebrow:
        "Technology Foundation",

      title:
        "Technologies Working Together Behind Every Refill",

      description:
        "The final configuration depends on the incoming water source and the requirements of the intended installation.",

      items: [
        {
          key:
            "smartCard",

          title:
            "Smart Card Access",

          description:
            "Customers use a dedicated card to access and collect water from the station.",
        },

        {
          key:
            "display",

          title:
            "Intelligent Displays",

          description:
            "Screens can display water temperature, volume, TDS information, date and time.",
        },

        {
          key:
            "ultrafiltration",

          title:
            "Ultrafiltration",

          description:
            "Helps remove sediments, suspended solids and fine particles from incoming water.",
        },

        {
          key:
            "uv",

          title:
            "UV Sterilisation",

          description:
            "Ultraviolet treatment helps control bacteria, viruses and harmful microorganisms.",
        },

        {
          key:
            "reverseOsmosis",

          title:
            "Reverse Osmosis",

          description:
            "Helps remove dissolved substances, impurities and unwanted chemicals.",
        },

        {
          key:
            "temperature",

          title:
            "Temperature Options",

          description:
            "Station configurations can provide cold, normal, warm or hot drinking water.",
        },
      ],
    },

    /*
     * =====================================================
     * CAMPUS
     * =====================================================
     */

    campus: {
      eyebrow:
        "Campus Water Stations",

      title:
        "Flexible Capacity for Different Institution Sizes",

      description:
        "Faucet count and station capacity should be selected according to expected users, peak refill periods, available water and the institution’s operating environment.",

      capacities: [
        {
          faucets:
            "2 Faucets",

          users:
            "30–60 people",

          description:
            "Compact institutional station for smaller user groups and controlled daily demand.",

          suitableFor:
            "Small schools, offices and clinics",
        },

        {
          faucets:
            "3 Faucets",

          users:
            "60–100 people",

          description:
            "Balanced capacity for institutions requiring faster access during peak periods.",

          suitableFor:
            "Schools, offices and hospitality facilities",
        },

        {
          faucets:
            "4 Faucets",

          users:
            "100–150 people",

          description:
            "Higher-capacity station designed to reduce queues and support regular shared use.",

          suitableFor:
            "Secondary schools, churches and factories",
        },

        {
          faucets:
            "6 Faucets",

          users:
            "150–200 people",

          description:
            "Multi-user dispensing for busy institutions with concentrated refill periods.",

          suitableFor:
            "Large schools, campuses and industrial sites",
        },
      ],

      disclaimer:
        "These are preliminary planning ranges. Final capacity, power, storage and treatment specifications should be confirmed after a site and water-source assessment.",
    },

    /*
     * =====================================================
     * COMMUNITY
     * =====================================================
     */

    community: {
      eyebrow:
        "Community Water Stations",

      title:
        "Accessible Water Systems for Shared Community Use",

      description:
        "Community-based stations can provide a central location where residents access treated drinking water using reusable containers.",

      features: [
        "Suitable for residential communities and public spaces",

        "Controlled dispensing through a water-card system",

        "Designed around expected daily and peak demand",

        "Supports reusable-container water access",

        "Can include intelligent display and monitoring features",

        "Technical support and operational training available",
      ],

      image: null,

      imageEyebrow:
        "Community Access",

      imageText:
        "Refill infrastructure designed to bring treated drinking water closer to the people who need it.",
    },

    /*
     * =====================================================
     * COMMERCIAL
     * =====================================================
     */

    commercial: {
      eyebrow:
        "Commercial Purification",

      title:
        "Scalable Treatment for Business and Institutional Demand",

      description:
        "Larger treatment systems can support institutions that require higher output, central purification or water distribution across multiple use points.",

      items: [
        {
          key:
            "corporate",

          title:
            "Office and Corporate",

          description:
            "Purified drinking-water solutions for shared offices, staff spaces and corporate institutions.",

          image: null,

          linkLabel:
            "Discuss this solution",

          linkHref:
            "/contact",
        },

        {
          key:
            "industry",

          title:
            "Factories and Industry",

          description:
            "Higher-capacity systems for industrial teams, production facilities and employee-use areas.",

          image: null,

          linkLabel:
            "Discuss this solution",

          linkHref:
            "/contact",
        },

        {
          key:
            "hospitality",

          title:
            "Hospitality and Catering",

          description:
            "Water-treatment systems for hotels, restaurants, kitchens and catering services.",

          image: null,

          linkLabel:
            "Discuss this solution",

          linkHref:
            "/contact",
        },
      ],
    },

    /*
     * =====================================================
     * GROUNDWATER
     * =====================================================
     */

    groundwater: {
      eyebrow:
        "Groundwater Treatment",

      title:
        "Treatment Systems for Groundwater and Direct Drinking Supply",

      description:
        "Groundwater systems can combine sediment filtration, activated carbon, softening, precision filtration and reverse osmosis according to the characteristics of the source water.",

      features: [
        "Source-water assessment",

        "Sediment filtration",

        "Activated-carbon treatment",

        "Water softening when required",

        "Precision filtration",

        "Reverse-osmosis treatment",

        "Storage and pressure systems",

        "Institutional distribution planning",
      ],

      disclaimer:
        "Exact treatment stages must be determined from the source-water quality and the intended drinking-water requirements.",

      image: null,

      imageEyebrow:
        "Engineered Purification",

      imageText:
        "A treatment configuration designed around the source water and expected demand.",
    },

    /*
     * =====================================================
     * WHO WE SERVE
     * =====================================================
     */

    applications: {
      eyebrow:
        "Industries and Institutions",

      title:
        "Water Solutions Adapted to Different Environments",

      description:
        "We consider user population, daily demand, location, available utilities and operating conditions when recommending a system.",

      items: [
        {
          key:
            "schools",

          title:
            "Schools",

          description:
            "Water stations for basic, secondary and tertiary educational institutions.",
        },

        {
          key:
            "companies",

          title:
            "Companies",

          description:
            "Reliable refill access for offices, corporate institutions and shared workplaces.",
        },

        {
          key:
            "factories",

          title:
            "Factories",

          description:
            "High-capacity systems for industrial sites, production teams and employee facilities.",
        },

        {
          key:
            "healthcare",

          title:
            "Healthcare",

          description:
            "Purification and dispensing systems for hospitals, clinics and care facilities.",
        },

        {
          key:
            "hotels",

          title:
            "Hotels",

          description:
            "Modern water solutions for guest facilities, staff areas and hospitality operations.",
        },

        {
          key:
            "restaurants",

          title:
            "Restaurants",

          description:
            "Purified water systems for kitchens, catering services and customer spaces.",
        },

        {
          key:
            "communities",

          title:
            "Communities",

          description:
            "Accessible refill systems designed for residential and public-use environments.",
        },

        {
          key:
            "publicInstitutions",

          title:
            "Public Institutions",

          description:
            "Scalable water-access solutions for ministries, churches and government facilities.",
        },
      ],
    },

    /*
     * =====================================================
     * INSTALLATION + SUPPORT
     * =====================================================
     */

    support: {
      eyebrow:
        "Installation and Support",

      title:
        "A Complete Process from Assessment to Continued Support",

      description:
        "Our role does not end when the equipment arrives. We help clients understand the system, prepare users and plan for reliable operation.",

      backgroundImage:
        null,

      items: [
        {
          key:
            "assessment",

          number:
            "01",

          title:
            "Site Assessment",

          description:
            "We assess the location, incoming water source, available services and expected usage.",
        },

        {
          key:
            "design",

          number:
            "02",

          title:
            "Solution Design",

          description:
            "A suitable station, treatment capacity and faucet configuration are recommended.",
        },

        {
          key:
            "installation",

          number:
            "03",

          title:
            "Installation",

          description:
            "The selected system is installed, connected, tested and prepared for operation.",
        },

        {
          key:
            "training",

          number:
            "04",

          title:
            "Training and Support",

          description:
            "Users receive operational guidance with continued technical support when required.",
        },
      ],
    },

    /*
     * =====================================================
     * FINAL CTA
     * =====================================================
     */

    cta: {
      eyebrow:
        "Work With Anors.Z",

      title:
        "Let’s Build a Cleaner and Safer Water Future",

      description:
        "Speak with our team about a water station or purification solution suited to your institution, organisation or community.",

      primaryButtonLabel:
        "Start an Enquiry",

      primaryButtonHref:
        "/contact",

      secondaryButtonLabel:
        "View Our Solutions",

      secondaryButtonHref:
        "/solutions",

      backgroundImage:
        null,
    },
  };