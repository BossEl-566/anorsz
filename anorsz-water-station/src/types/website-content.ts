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
    description: string;
  };

  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
  };

  impact: {
    eyebrow: string;
    title: string;
    description: string;

    stat1Value: string;
    stat1Label: string;

    stat2Value: string;
    stat2Label: string;

    stat3Value: string;
    stat3Label: string;
  };

  whoWeServe: {
    eyebrow: string;
    title: string;
    description: string;
  };

  whoWeAre: {
    eyebrow: string;
    title: string;
    description: string;
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};