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

    points: HomePurposePoint[];

    purposeEyebrow: string;
    purposeText: string;
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;

    primaryButtonLabel: string;
    primaryButtonHref: string;

    secondaryButtonLabel: string;
    phoneNumber: string;
    phoneHref: string;
  };
};