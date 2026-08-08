"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  BarChart3,
  Building2,
  CheckCircle2,
  CircleCheck,
  ExternalLink,
  Layers3,
  Loader2,
  Megaphone,
  Save,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

import ContentField from "@/components/admin/content/ContentField";
import ContentSection from "@/components/admin/content/ContentSection";

import { saveHomeContent } from "@/app/admin/content/home/actions";

import type { HomePageContent } from "@/types/website-content";

type HomeContentFormProps = {
  initialContent: HomePageContent;
};

type Message =
  | {
      type: "success" | "error";
      text: string;
    }
  | null;

export default function HomeContentForm({
  initialContent,
}: HomeContentFormProps) {
  const [content, setContent] =
    useState<HomePageContent>(initialContent);

  const [message, setMessage] =
    useState<Message>(null);

  const [isPending, startTransition] =
    useTransition();

  /*
   * =========================================================
   * SIMPLE SECTION FIELDS
   * =========================================================
   */

  function updateSimpleField<
    Section extends keyof HomePageContent,
  >(
    section: Section,
    field: string,
    value: string,
  ) {
    setContent((current) => ({
      ...current,

      [section]: {
        ...current[section],
        [field]: value,
      },
    }));
  }

  /*
   * =========================================================
   * OVERVIEW FEATURES
   * =========================================================
   */

  function updateFeature(
    index: number,
    value: string,
  ) {
    setContent((current) => {
      const features =
        current.overview.features.map(
          (feature, featureIndex) =>
            featureIndex === index
              ? {
                  ...feature,
                  title: value,
                }
              : feature,
        );

      return {
        ...current,

        overview: {
          ...current.overview,
          features,
        },
      };
    });
  }

  /*
   * =========================================================
   * PROCESS STEPS
   * =========================================================
   */

  function updateProcessStep(
    index: number,
    field:
      | "number"
      | "title"
      | "description",
    value: string,
  ) {
    setContent((current) => {
      const steps =
        current.howItWorks.steps.map(
          (step, stepIndex) =>
            stepIndex === index
              ? {
                  ...step,
                  [field]: value,
                }
              : step,
        );

      return {
        ...current,

        howItWorks: {
          ...current.howItWorks,
          steps,
        },
      };
    });
  }

  /*
   * =========================================================
   * STATISTICS
   * =========================================================
   */

  function updateStatistic(
    index: number,
    field: "value" | "suffix" | "label",
    value: string,
  ) {
    setContent((current) => {
      const statistics =
        current.impact.statistics.map(
          (statistic, statisticIndex) =>
            statisticIndex === index
              ? {
                  ...statistic,
                  [field]: value,
                }
              : statistic,
        );

      return {
        ...current,

        impact: {
          ...current.impact,
          statistics,
        },
      };
    });
  }

  /*
   * =========================================================
   * INSTITUTIONS
   * =========================================================
   */

  function updateInstitution(
    index: number,
    field: "title" | "description",
    value: string,
  ) {
    setContent((current) => {
      const institutions =
        current.whoWeServe.institutions.map(
          (institution, institutionIndex) =>
            institutionIndex === index
              ? {
                  ...institution,
                  [field]: value,
                }
              : institution,
        );

      return {
        ...current,

        whoWeServe: {
          ...current.whoWeServe,
          institutions,
        },
      };
    });
  }

  /*
   * =========================================================
   * PURPOSE POINTS
   * =========================================================
   */

  function updatePurposePoint(
    index: number,
    value: string,
  ) {
    setContent((current) => {
      const points =
        current.whoWeAre.points.map(
          (point, pointIndex) =>
            pointIndex === index
              ? {
                  ...point,
                  text: value,
                }
              : point,
        );

      return {
        ...current,

        whoWeAre: {
          ...current.whoWeAre,
          points,
        },
      };
    });
  }

  /*
   * =========================================================
   * SAVE
   * =========================================================
   */

  function handleSave() {
    setMessage(null);

    startTransition(async () => {
      const result =
        await saveHomeContent(content);

      setMessage({
        type: result.success
          ? "success"
          : "error",

        text: result.message,
      });

      if (result.success) {
        window.setTimeout(() => {
          setMessage(null);
        }, 6000);
      }
    });
  }

  return (
    <div className="space-y-6">
      {/* =====================================================
          HERO
      ====================================================== */}

      <ContentSection
        number="01"
        title="Hero Section"
        description="Manage the main message visitors see when they first open the website."
      >
        <div className="flex items-start gap-3 rounded-xl border border-[#681761]/10 bg-[#681761]/5 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#681761]" />

          <div>
            <p className="text-sm font-semibold text-[#211024]">
              Homepage Hero
            </p>

            <p className="mt-1 text-xs leading-5 text-black/45">
              These fields will be connected to the
              video Hero component in the next step.
            </p>
          </div>
        </div>

        <ContentField
          label="Eyebrow"
          value={content.hero.eyebrow}
          onChange={(value) =>
            updateSimpleField(
              "hero",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Main Heading"
          value={content.hero.title}
          onChange={(value) =>
            updateSimpleField(
              "hero",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.hero.description}
          multiline
          onChange={(value) =>
            updateSimpleField(
              "hero",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Primary Button Label"
            value={
              content.hero.primaryButtonLabel
            }
            onChange={(value) =>
              updateSimpleField(
                "hero",
                "primaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Primary Button Link"
            value={
              content.hero.primaryButtonHref
            }
            description="Example: /solutions"
            onChange={(value) =>
              updateSimpleField(
                "hero",
                "primaryButtonHref",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Button Label"
            value={
              content.hero.secondaryButtonLabel
            }
            onChange={(value) =>
              updateSimpleField(
                "hero",
                "secondaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Button Link"
            value={
              content.hero.secondaryButtonHref
            }
            description="Example: /contact"
            onChange={(value) =>
              updateSimpleField(
                "hero",
                "secondaryButtonHref",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* =====================================================
          COMPANY OVERVIEW
      ====================================================== */}

      <ContentSection
        number="02"
        title="Company Overview"
        description="Manage the company introduction, image label, feature highlights and About link."
      >
        <ContentField
          label="Section Eyebrow"
          value={content.overview.eyebrow}
          onChange={(value) =>
            updateSimpleField(
              "overview",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Main Heading"
          value={content.overview.title}
          onChange={(value) =>
            updateSimpleField(
              "overview",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Image Badge"
          value={content.overview.imageBadge}
          description="Text displayed over the water-station image."
          onChange={(value) =>
            updateSimpleField(
              "overview",
              "imageBadge",
              value,
            )
          }
        />

        <div className="border-t border-black/10 pt-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
            Lower Introduction
          </p>

          <div className="space-y-5">
            <ContentField
              label="Heading"
              value={
                content.overview.lowerTitle
              }
              onChange={(value) =>
                updateSimpleField(
                  "overview",
                  "lowerTitle",
                  value,
                )
              }
            />

            <ContentField
              label="Description"
              value={
                content.overview
                  .lowerDescription
              }
              multiline
              onChange={(value) =>
                updateSimpleField(
                  "overview",
                  "lowerDescription",
                  value,
                )
              }
            />

            <div className="grid gap-5 md:grid-cols-2">
              <ContentField
                label="Link Label"
                value={
                  content.overview.linkLabel
                }
                onChange={(value) =>
                  updateSimpleField(
                    "overview",
                    "linkLabel",
                    value,
                  )
                }
              />

              <ContentField
                label="Link Destination"
                value={
                  content.overview.linkHref
                }
                description="Example: /about"
                onChange={(value) =>
                  updateSimpleField(
                    "overview",
                    "linkHref",
                    value,
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5">
            <p className="text-sm font-semibold text-[#211024]">
              Feature Highlights
            </p>

            <p className="mt-1 text-xs text-black/40">
              These are the four small feature
              cards displayed in the overview
              section.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {content.overview.features.map(
              (feature, index) => (
                <div
                  key={feature.key}
                  className="rounded-xl border border-black/10 bg-[#faf9f8] p-4"
                >
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#681761]">
                    Feature {index + 1}
                  </p>

                  <ContentField
                    label="Title"
                    value={feature.title}
                    onChange={(value) =>
                      updateFeature(
                        index,
                        value,
                      )
                    }
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <ContentSection
        number="03"
        title="How It Works"
        description="Manage the introduction and four water-station process steps."
      >
        <ContentField
          label="Section Eyebrow"
          value={
            content.howItWorks.eyebrow
          }
          onChange={(value) =>
            updateSimpleField(
              "howItWorks",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Section Heading"
          value={content.howItWorks.title}
          onChange={(value) =>
            updateSimpleField(
              "howItWorks",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={
            content.howItWorks.description
          }
          multiline
          onChange={(value) =>
            updateSimpleField(
              "howItWorks",
              "description",
              value,
            )
          }
        />

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <Layers3 className="h-5 w-5 text-[#681761]" />

            <div>
              <p className="text-sm font-semibold text-[#211024]">
                Process Steps
              </p>

              <p className="mt-1 text-xs text-black/40">
                Edit the four purification and
                access stages.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {content.howItWorks.steps.map(
              (step, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-black/10 bg-[#faf9f8] p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#211024]">
                      Step {index + 1}
                    </p>

                    <span className="rounded-full bg-[#681761]/10 px-3 py-1 text-xs font-semibold text-[#681761]">
                      {step.number}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <ContentField
                      label="Number"
                      value={step.number}
                      onChange={(value) =>
                        updateProcessStep(
                          index,
                          "number",
                          value,
                        )
                      }
                    />

                    <ContentField
                      label="Title"
                      value={step.title}
                      onChange={(value) =>
                        updateProcessStep(
                          index,
                          "title",
                          value,
                        )
                      }
                    />

                    <ContentField
                      label="Description"
                      value={step.description}
                      multiline
                      onChange={(value) =>
                        updateProcessStep(
                          index,
                          "description",
                          value,
                        )
                      }
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          IMPACT
      ====================================================== */}

      <ContentSection
        number="04"
        title="Performance & Statistics"
        description="Manage the homepage performance section and its four key numbers."
      >
        <ContentField
          label="Section Eyebrow"
          value={content.impact.eyebrow}
          onChange={(value) =>
            updateSimpleField(
              "impact",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Section Heading"
          value={content.impact.title}
          onChange={(value) =>
            updateSimpleField(
              "impact",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.impact.description}
          multiline
          onChange={(value) =>
            updateSimpleField(
              "impact",
              "description",
              value,
            )
          }
        />

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-[#681761]" />

            <div>
              <p className="text-sm font-semibold text-[#211024]">
                Key Numbers
              </p>

              <p className="mt-1 text-xs text-black/40">
                Values displayed prominently on
                the public homepage.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.impact.statistics.map(
              (statistic, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-black/10 bg-[#faf9f8] p-4"
                >
                  <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#681761]">
                    Statistic {index + 1}
                  </p>

                  <div className="space-y-4">
                    <ContentField
                      label="Value"
                      value={statistic.value}
                      onChange={(value) =>
                        updateStatistic(
                          index,
                          "value",
                          value,
                        )
                      }
                    />

                    <ContentField
                      label="Suffix"
                      value={statistic.suffix}
                      description="Examples: /7, %, +"
                      onChange={(value) =>
                        updateStatistic(
                          index,
                          "suffix",
                          value,
                        )
                      }
                    />

                    <ContentField
                      label="Label"
                      value={statistic.label}
                      onChange={(value) =>
                        updateStatistic(
                          index,
                          "label",
                          value,
                        )
                      }
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          WHO WE SERVE
      ====================================================== */}

      <ContentSection
        number="05"
        title="Who We Serve"
        description="Manage the section heading and the eight institution categories."
      >
        <ContentField
          label="Section Eyebrow"
          value={
            content.whoWeServe.eyebrow
          }
          onChange={(value) =>
            updateSimpleField(
              "whoWeServe",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Section Heading"
          value={content.whoWeServe.title}
          onChange={(value) =>
            updateSimpleField(
              "whoWeServe",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={
            content.whoWeServe.description
          }
          multiline
          onChange={(value) =>
            updateSimpleField(
              "whoWeServe",
              "description",
              value,
            )
          }
        />

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <Building2 className="h-5 w-5 text-[#681761]" />

            <div>
              <p className="text-sm font-semibold text-[#211024]">
                Institution Categories
              </p>

              <p className="mt-1 text-xs text-black/40">
                These cards appear beneath the
                Who We Serve introduction.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.whoWeServe.institutions.map(
              (institution, index) => (
                <div
                  key={institution.key}
                  className="rounded-xl border border-black/10 bg-[#faf9f8] p-4"
                >
                  <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#681761]">
                    Category {index + 1}
                  </p>

                  <div className="space-y-4">
                    <ContentField
                      label="Title"
                      value={institution.title}
                      onChange={(value) =>
                        updateInstitution(
                          index,
                          "title",
                          value,
                        )
                      }
                    />

                    <ContentField
                      label="Description"
                      value={
                        institution.description
                      }
                      multiline
                      onChange={(value) =>
                        updateInstitution(
                          index,
                          "description",
                          value,
                        )
                      }
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <ContentSection
        number="06"
        title="Who We Are"
        description="Manage the sustainability message, benefit points and purpose overlay."
      >
        <ContentField
          label="Section Eyebrow"
          value={content.whoWeAre.eyebrow}
          onChange={(value) =>
            updateSimpleField(
              "whoWeAre",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Section Heading"
          value={content.whoWeAre.title}
          onChange={(value) =>
            updateSimpleField(
              "whoWeAre",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={
            content.whoWeAre.description
          }
          multiline
          onChange={(value) =>
            updateSimpleField(
              "whoWeAre",
              "description",
              value,
            )
          }
        />

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <CircleCheck className="h-5 w-5 text-[#681761]" />

            <div>
              <p className="text-sm font-semibold text-[#211024]">
                Benefit Points
              </p>

              <p className="mt-1 text-xs text-black/40">
                Short benefit statements shown
                with check icons.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {content.whoWeAre.points.map(
              (point, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-black/10 bg-[#faf9f8] p-4"
                >
                  <ContentField
                    label={`Benefit ${index + 1}`}
                    value={point.text}
                    onChange={(value) =>
                      updatePurposePoint(
                        index,
                        value,
                      )
                    }
                  />
                </div>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-black/10 pt-5">
          <div className="mb-5 flex items-center gap-3">
            <Users className="h-5 w-5 text-[#681761]" />

            <div>
              <p className="text-sm font-semibold text-[#211024]">
                Image Purpose Message
              </p>

              <p className="mt-1 text-xs text-black/40">
                Text displayed over the large
                community image.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <ContentField
              label="Eyebrow"
              value={
                content.whoWeAre
                  .purposeEyebrow
              }
              onChange={(value) =>
                updateSimpleField(
                  "whoWeAre",
                  "purposeEyebrow",
                  value,
                )
              }
            />

            <ContentField
              label="Purpose Message"
              value={
                content.whoWeAre.purposeText
              }
              multiline
              onChange={(value) =>
                updateSimpleField(
                  "whoWeAre",
                  "purposeText",
                  value,
                )
              }
            />
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          CTA
      ====================================================== */}

      <ContentSection
        number="07"
        title="Final Call to Action"
        description="Manage the final homepage enquiry section and telephone call button."
      >
        <div className="flex items-start gap-3 rounded-xl border border-[#681761]/10 bg-[#681761]/5 p-4">
          <Megaphone className="mt-0.5 h-5 w-5 shrink-0 text-[#681761]" />

          <p className="text-xs leading-5 text-black/50">
            This is the large branded section at
            the bottom of the homepage.
          </p>
        </div>

        <ContentField
          label="Eyebrow"
          value={content.cta.eyebrow}
          onChange={(value) =>
            updateSimpleField(
              "cta",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.cta.title}
          onChange={(value) =>
            updateSimpleField(
              "cta",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.cta.description}
          multiline
          onChange={(value) =>
            updateSimpleField(
              "cta",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Primary Button Label"
            value={
              content.cta.primaryButtonLabel
            }
            onChange={(value) =>
              updateSimpleField(
                "cta",
                "primaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Primary Button Link"
            value={
              content.cta.primaryButtonHref
            }
            description="Example: /contact"
            onChange={(value) =>
              updateSimpleField(
                "cta",
                "primaryButtonHref",
                value,
              )
            }
          />

          <ContentField
            label="Call Button Label"
            value={
              content.cta.secondaryButtonLabel
            }
            onChange={(value) =>
              updateSimpleField(
                "cta",
                "secondaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Displayed Phone Number"
            value={content.cta.phoneNumber}
            description="Example: +233 24 445 3920"
            onChange={(value) =>
              updateSimpleField(
                "cta",
                "phoneNumber",
                value,
              )
            }
          />

          <div className="md:col-span-2">
            <ContentField
              label="Phone Link"
              value={content.cta.phoneHref}
              description="Example: tel:+233244453920"
              onChange={(value) =>
                updateSimpleField(
                  "cta",
                  "phoneHref",
                  value,
                )
              }
            />
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          SAVE BAR
      ====================================================== */}

      <div className="sticky bottom-4 z-20 overflow-hidden rounded-2xl border border-black/10 bg-white/95 shadow-2xl shadow-black/10 backdrop-blur-xl">
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            {message ? (
              <div
                className={`flex items-start gap-2 text-sm font-medium ${
                  message.type === "success"
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {message.type ===
                "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}

                <span>{message.text}</span>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-[#211024]">
                  Homepage changes
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Changes are only published
                  after you press Save & Publish.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 text-sm font-medium text-black/55 transition hover:border-[#681761]/25 hover:text-[#681761]"
            >
              <ExternalLink className="h-4 w-4" />

              Preview Website
            </a>

            <button
              type="button"
              disabled={isPending}
              onClick={handleSave}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#681761] px-6 text-sm font-semibold text-white transition hover:bg-[#52114d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />

                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />

                  Save & Publish
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}