export type HomeProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type HomeStatistic = {
  value: string;
  suffix: string;
  label: string;
};

export type WebsiteMediaSelection = {
  id: string;
  name: string;
  url: string;
  alt: string;
};

export type WebsiteVideoSelection = {
  id: string;
  name: string;
  url: string;
  description: string;
  mimeType: string;
};

export type HomeInstitution = {
  key:
    | "schools"
    | "companies"
    | "factories"
    | "healthcare"
    | "hotels"
    | "restaurants"
    | "communities"
    | "publicInstitutions";

  title: string;
  description: string;
};

export type HomeFeature = {
  key:
    | "cleanSafe"
    | "technology"
    | "eco"
    | "reliable";

  title: string;
};

export type HomePurposePoint = {
  text: string;
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;

    primaryButtonLabel: string;
    primaryButtonHref: string;

    secondaryButtonLabel: string;
    secondaryButtonHref: string;
    
  };

  overview: {
    eyebrow: string;
    title: string;

    image: WebsiteMediaSelection | null;

    imageBadge: string;

    lowerTitle: string;
    lowerDescription: string;

    linkLabel: string;
    linkHref: string;

    features: HomeFeature[];
    
  };

  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;

    steps: HomeProcessStep[];
  };

  impact: {
    eyebrow: string;
    title: string;
    description: string;

    statistics: HomeStatistic[];
  };

  whoWeServe: {
    eyebrow: string;
    title: string;
    description: string;

    institutions: HomeInstitution[];
  };

  whoWeAre: {
    eyebrow: string;
    title: string;
    description: string;

    image: WebsiteMediaSelection | null;

    points: HomePurposePoint[];

    purposeEyebrow: string;
    purposeText: string;
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;

    backgroundImage: WebsiteMediaSelection | null;

    primaryButtonLabel: string;
    primaryButtonHref: string;

    secondaryButtonLabel: string;
    phoneNumber: string;
    phoneHref: string;
  };
};

export type AboutValueKey =
  | "waterQuality"
  | "accessibility"
  | "innovation"
  | "sustainability";

export type AboutTechnologyKey =
  | "smartCard"
  | "display"
  | "ultrafiltration"
  | "uv"
  | "reverseOsmosis"
  | "highCapacity";

export type AboutImpactKey =
  | "education"
  | "business"
  | "communities";

export type AboutSupportKey =
  | "siteAssessment"
  | "systemSelection"
  | "installation"
  | "trainingSupport";

export type AboutValue = {
  key: AboutValueKey;
  title: string;
  description: string;
};

export type AboutTechnologyItem = {
  key: AboutTechnologyKey;
  number: string;
  title: string;
  description: string;
};

export type AboutImpactItem = {
  key: AboutImpactKey;
  title: string;
  description: string;

  image: WebsiteMediaSelection | null;
};

export type AboutSupportItem = {
  key: AboutSupportKey;
  title: string;
  description: string;
};

export type AboutPageContent = {
  hero: {
    breadcrumbLabel: string;

    titleLineOne: string;
    titleLineTwo: string;

    description: string;
    audienceDescription: string;

    linkLabel: string;
    linkHref: string;

    video: WebsiteVideoSelection | null;
  };

  story: {
    eyebrow: string;
    title: string;

    image: WebsiteMediaSelection | null;

    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;

    linkLabel: string;
    linkHref: string;

    beliefEyebrow: string;
    beliefText: string;
  };

  purpose: {
    eyebrow: string;
    title: string;
    description: string;

    missionEyebrow: string;
    missionTitle: string;
    missionDescription: string;
    missionImage: WebsiteMediaSelection | null;

    visionEyebrow: string;
    visionTitle: string;
    visionDescription: string;
    visionImage: WebsiteMediaSelection | null;
  };

  values: {
    eyebrow: string;
    title: string;

    items: AboutValue[];
  };

  technology: {
    eyebrow: string;
    title: string;
    description: string;

    videoLabel: string;

    video: WebsiteVideoSelection | null;

    items: AboutTechnologyItem[];
  };

  impact: {
    eyebrow: string;
    title: string;
    description: string;

    items: AboutImpactItem[];
  };

  sustainability: {
    eyebrow: string;
    title: string;
    description: string;

    image: WebsiteMediaSelection | null;

    imageEyebrow: string;
    imageText: string;

    points: string[];
  };

  support: {
    eyebrow: string;
    title: string;
    description: string;

    image: WebsiteMediaSelection | null;

    items: AboutSupportItem[];

    video: WebsiteVideoSelection | null;

    imageEyebrow: string;
    imageText: string;
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;

    primaryButtonLabel: string;
    primaryButtonHref: string;

    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};