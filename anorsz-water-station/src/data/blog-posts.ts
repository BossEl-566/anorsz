import type { StaticImageData } from "next/image";

import aboutCommunityOne from "@/assets/images/about-community-1.jpeg";
import aboutCommunityTwo from "@/assets/images/about-community-2.jpeg";
import aboutCommunityThree from "@/assets/images/about-community-3.jpeg";
import aboutMissionImage from "@/assets/images/hero-1.jpeg";
import aboutStoryImage from "@/assets/images/home-water-station.jpeg";
import aboutSupportImage from "@/assets/images/home-community-impact.png";
import aboutSustainabilityImage from "@/assets/images/about-sustainability.jpeg";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  publishedAt: string;
  isoDate: string;
  readingTime: string;
  author: string;
  heroImage: StaticImageData;
  contentImage: StaticImageData;
  contentImageAlt: string;
  introduction: string[];
  sections: BlogSection[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-smart-water-stations-improve-water-access",
    title: "How Smart Water Stations Improve Access to Safe Drinking Water",
    shortTitle: "How Smart Water Stations Improve Water Access",
    description:
      "Explore how purification technology, intelligent displays and smart-card dispensing can improve access to clean and reliable drinking water.",
    category: "Water Technology",
    publishedAt: "30 July 2026",
    isoDate: "2026-07-30",
    readingTime: "5 min read",
    author: "Anors.Z Editorial Team",
    heroImage: aboutStoryImage,
    contentImage: aboutSupportImage,
    contentImageAlt:
      "People using an intelligent institutional drinking-water station",
    introduction: [
      "Access to clean drinking water is not only about having a water source. The water must also be properly treated, conveniently available and supported by a system that can serve users reliably.",
      "A smart water station combines modern purification with digital monitoring and controlled dispensing. This creates a more convenient water experience for schools, companies, hospitals, factories, hotels, communities and other institutions.",
    ],
    sections: [
      {
        heading: "What makes a water station smart?",
        paragraphs: [
          "A conventional water dispenser mainly stores and releases water. A smart water station adds purification, monitoring and controlled access to the dispensing process.",
          "The station can display information such as water temperature, dispensing volume, date, time and selected water-quality readings. These features help users and operators understand what is happening while the system is being used.",
        ],
        bullets: [
          "Smart-card access for controlled dispensing",
          "Intelligent screens that provide useful water information",
          "Multiple faucets for faster access",
          "Cold, warm or hot-water configurations",
          "Modern purification and sterilisation stages",
        ],
      },
      {
        heading: "Purification happens before dispensing",
        paragraphs: [
          "The effectiveness of a water station depends heavily on the purification process behind it. Different filtration stages perform different roles.",
          "Ultrafiltration helps remove suspended solids, sediments and fine particles. Ultraviolet treatment helps control harmful microorganisms, while reverse osmosis helps remove dissolved substances and unwanted impurities.",
          "The exact treatment configuration should be selected according to the incoming water source and the requirements of the installation.",
        ],
        callout:
          "A station should be selected according to the source water, expected number of users and required daily output.",
      },
      {
        heading: "Smart-card access improves convenience",
        paragraphs: [
          "Users can access the station using a dedicated water card. This provides a simple way to manage dispensing without requiring a staff member to supervise every refill.",
          "For institutions, controlled access can support better usage management. For customers, it creates a quick and convenient process: present the card, position a reusable bottle and collect the required water.",
        ],
      },
      {
        heading: "Better access for busy institutions",
        paragraphs: [
          "A station with several faucets can serve more than one person at a time. This is particularly useful in schools, factories, offices and public environments where many people may need water during the same period.",
          "Different station capacities are available because a small office and a large educational institution do not have the same level of demand. Capacity planning helps prevent long queues and inconsistent supply.",
        ],
        bullets: [
          "Estimate the number of daily users",
          "Understand peak refill periods",
          "Assess the available installation space",
          "Identify the incoming water source",
          "Choose the required water-temperature options",
          "Plan maintenance and technical support",
        ],
      },
      {
        heading: "Supporting more sustainable water habits",
        paragraphs: [
          "Smart refill stations can also encourage the use of reusable bottles. This reduces the need for people to purchase a new plastic bottle or sachet each time they need drinking water.",
          "When an institution combines convenient refill access with reusable-bottle policies, safe-water access and environmental responsibility can support each other.",
        ],
      },
    ],
    takeaways: [
      "Smart water stations combine purification, monitoring and dispensing.",
      "Different purification stages address different types of impurities.",
      "Smart cards provide convenient and controlled water access.",
      "Capacity should match the expected number of users.",
      "Reusable bottles can help reduce disposable water packaging.",
    ],
  },
  {
    slug: "why-safe-drinking-water-matters-in-schools",
    title: "Why Safe Drinking Water Matters in Schools",
    shortTitle: "Why Safe Water Matters in Schools",
    description:
      "Learn why convenient access to safe drinking water is important for students, teachers and the wider school environment.",
    category: "Institutions",
    publishedAt: "30 July 2026",
    isoDate: "2026-07-30",
    readingTime: "4 min read",
    author: "Anors.Z Editorial Team",
    heroImage: aboutCommunityOne,
    contentImage: aboutCommunityTwo,
    contentImageAlt:
      "Students accessing drinking water within an educational institution",
    introduction: [
      "Students spend a significant part of each weekday within the school environment. Schools therefore need practical systems that help students and staff access drinking water throughout the day.",
      "A reliable water station can make refilling easier, reduce dependence on single-use packaging and provide a structured water-access point for the institution.",
    ],
    sections: [
      {
        heading: "Convenient access supports healthy routines",
        paragraphs: [
          "Students are more likely to refill their bottles when clean water is available in a convenient and visible location. A water station placed near classrooms, dining areas or shared spaces can make water access part of the normal school routine.",
          "The station should be positioned where students can reach it safely without creating congestion or interrupting lessons.",
        ],
      },
      {
        heading: "Different schools require different systems",
        paragraphs: [
          "A kindergarten, junior high school, senior high school and university campus will not have the same water demand. Age, student population, operating hours and campus layout must all be considered.",
          "Smaller stations may be suitable for limited user groups, while larger schools may require multiple stations or high-capacity systems with several faucets.",
        ],
        bullets: [
          "Total number of students and staff",
          "Daily operating hours",
          "Location of classrooms and common areas",
          "Peak periods such as breaks and lunch",
          "Available power and water connections",
          "Accessibility for younger students and people with disabilities",
        ],
      },
      {
        heading: "Multiple faucets can reduce waiting time",
        paragraphs: [
          "Queues can become a major concern when hundreds of students try to refill during a short break. A station with multiple faucets allows several users to collect water at the same time.",
          "Schools should estimate peak demand rather than relying only on total enrolment. This helps determine whether one station is sufficient or whether several dispensing points are needed.",
        ],
        callout:
          "The right school water solution should be based on peak demand, not only the total student population.",
      },
      {
        heading: "Smart monitoring helps school management",
        paragraphs: [
          "An intelligent display can show water temperature, volume and selected system readings. This makes the station easier to observe and helps users understand the dispensing process.",
          "A smart-card system can also provide controlled access where the school wants to organise usage around registered students, staff or specific payment arrangements.",
        ],
      },
      {
        heading: "Reusable bottles reduce unnecessary waste",
        paragraphs: [
          "A school refill programme can encourage students to bring reusable bottles. This reduces the number of disposable bottles and sachets that may end up in classrooms, gutters and school grounds.",
          "The school can strengthen the programme by teaching students how reusable bottles should be cleaned and stored.",
        ],
      },
      {
        heading: "Installation is only the beginning",
        paragraphs: [
          "A school water station requires regular inspection, cleaning and technical support. Staff members should understand basic operation, while qualified technicians should handle specialised maintenance.",
          "Training and a clear maintenance arrangement help the school protect the system and maintain dependable water access over time.",
        ],
      },
    ],
    takeaways: [
      "Water stations should be easy and safe for students to reach.",
      "System capacity must reflect school population and peak demand.",
      "Multiple faucets help reduce queues during short breaks.",
      "Smart displays provide useful operating information.",
      "Reusable bottles can help schools reduce plastic and sachet waste.",
    ],
  },
  {
    slug: "reducing-plastic-waste-with-reusable-bottles",
    title: "Reducing Plastic Waste Through Reusable Water Bottles",
    shortTitle: "Reducing Plastic Waste with Reusable Bottles",
    description:
      "Discover how refill stations and reusable bottles can reduce dependence on disposable plastic bottles and sachet-water packaging.",
    category: "Sustainability",
    publishedAt: "30 July 2026",
    isoDate: "2026-07-30",
    readingTime: "4 min read",
    author: "Anors.Z Editorial Team",
    heroImage: aboutSustainabilityImage,
    contentImage: aboutCommunityThree,
    contentImageAlt:
      "Reusable drinking-water bottles at a community refill station",
    introduction: [
      "Disposable plastic bottles and sachet-water packaging provide convenience, but they can also create large amounts of waste when they are used once and discarded.",
      "A refill system offers another approach. Instead of purchasing a new container whenever water is needed, users carry a reusable bottle and refill it from a properly managed water station.",
    ],
    sections: [
      {
        heading: "The refill model changes the container, not the need",
        paragraphs: [
          "People will continue to need convenient drinking water. The refill model does not remove that need; it changes how the water is packaged and accessed.",
          "A reusable bottle can be used repeatedly, while a station provides treated water from a fixed and managed location. This can reduce the number of disposable containers entering an institution.",
        ],
      },
      {
        heading: "Convenience is essential",
        paragraphs: [
          "A reusable-bottle programme will struggle when refilling is difficult. People may return to disposable packaging when stations are too far away, frequently unavailable or unable to handle peak demand.",
          "Stations should therefore be installed in convenient locations and selected according to the number of people expected to use them.",
        ],
        callout:
          "Sustainability works best when the environmentally responsible option is also convenient.",
      },
      {
        heading: "Smart cards can organise access",
        paragraphs: [
          "A smart-card water station gives users a structured way to access refills. Depending on the institution’s operating model, cards can be issued to students, employees, residents or customers.",
          "The card becomes part of a simple routine: carry a reusable bottle, access the station and collect the required volume of water.",
        ],
      },
      {
        heading: "Institutions can lead behaviour change",
        paragraphs: [
          "Schools, offices, factories, hospitals, hotels and public institutions can influence the daily habits of large groups of people.",
          "An organisation can support reusable-bottle adoption by providing convenient stations, communicating the purpose of the programme and establishing practical usage guidelines.",
        ],
        bullets: [
          "Provide every user with clear refill instructions",
          "Position stations in visible and convenient locations",
          "Encourage users to label personal bottles",
          "Teach correct bottle cleaning and storage",
          "Inspect and clean dispensing areas regularly",
          "Track station performance and maintenance needs",
        ],
      },
      {
        heading: "Reusable does not mean maintenance-free",
        paragraphs: [
          "Reusable bottles must be cleaned properly. Users should follow the bottle manufacturer’s instructions and avoid sharing personal bottles unnecessarily.",
          "The refill station itself must also receive appropriate cleaning, filter replacement and technical maintenance. Sustainability should never replace proper hygiene and water-quality management.",
        ],
      },
      {
        heading: "A practical step toward cleaner environments",
        paragraphs: [
          "No single system will solve every waste problem, but refill stations can provide a practical reduction strategy for organisations that currently depend heavily on disposable water packaging.",
          "The combination of safe water, reusable containers, convenient access and responsible maintenance can support healthier people and cleaner surroundings.",
        ],
      },
    ],
    takeaways: [
      "Refill stations reduce the need for a new container for every drink.",
      "Convenient station placement supports reusable-bottle adoption.",
      "Institutions can influence the habits of large user groups.",
      "Reusable bottles and stations both require proper cleaning.",
      "Safe water access and waste reduction can work together.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(
  currentSlug: string,
  limit = 2,
): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}