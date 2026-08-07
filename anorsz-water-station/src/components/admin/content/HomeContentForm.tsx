"use client";

import { useState, useTransition } from "react";
import {
  CheckCircle2,
  Loader2,
  Save,
  XCircle,
} from "lucide-react";

import ContentField from "@/components/admin/content/ContentField";
import ContentSection from "@/components/admin/content/ContentSection";

import { saveHomeContent } from "@/app/admin/content/home/actions";

import type { HomePageContent } from "@/types/website-content";

type HomeContentFormProps = {
  initialContent: HomePageContent;
};

type Message = {
  type: "success" | "error";
  text: string;
} | null;

export default function HomeContentForm({
  initialContent,
}: HomeContentFormProps) {
  const [content, setContent] =
    useState<HomePageContent>(initialContent);

  const [message, setMessage] =
    useState<Message>(null);

  const [isPending, startTransition] =
    useTransition();

  const updateField = (
    section: keyof HomePageContent,
    field: string,
    value: string,
  ) => {
    setContent((currentContent) => {
      return {
        ...currentContent,

        [section]: {
          ...(currentContent[section] as Record<
            string,
            string
          >),

          [field]: value,
        },
      } as HomePageContent;
    });
  };

  const handleSave = () => {
    setMessage(null);

    startTransition(async () => {
      const result = await saveHomeContent(content);

      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      });
    });
  };

  return (
    <div className="space-y-6">
      {/* =====================================================
          HERO
      ====================================================== */}

      <ContentSection
        number="01"
        title="Hero Section"
        description="The first content visitors see when they open the website."
      >
        <ContentField
          label="Eyebrow"
          value={content.hero.eyebrow}
          onChange={(value) =>
            updateField("hero", "eyebrow", value)
          }
        />

        <ContentField
          label="Main Heading"
          value={content.hero.title}
          onChange={(value) =>
            updateField("hero", "title", value)
          }
        />

        <ContentField
          label="Description"
          value={content.hero.description}
          multiline
          onChange={(value) =>
            updateField("hero", "description", value)
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Primary Button"
            value={content.hero.primaryButtonLabel}
            onChange={(value) =>
              updateField(
                "hero",
                "primaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Primary Button Link"
            value={content.hero.primaryButtonHref}
            description="Example: /solutions"
            onChange={(value) =>
              updateField(
                "hero",
                "primaryButtonHref",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Button"
            value={content.hero.secondaryButtonLabel}
            onChange={(value) =>
              updateField(
                "hero",
                "secondaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Button Link"
            value={content.hero.secondaryButtonHref}
            description="Example: /contact"
            onChange={(value) =>
              updateField(
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
        description="Manage the introductory company information displayed on the homepage."
      >
        <ContentField
          label="Eyebrow"
          value={content.overview.eyebrow}
          onChange={(value) =>
            updateField("overview", "eyebrow", value)
          }
        />

        <ContentField
          label="Heading"
          value={content.overview.title}
          onChange={(value) =>
            updateField("overview", "title", value)
          }
        />

        <ContentField
          label="Description"
          value={content.overview.description}
          multiline
          onChange={(value) =>
            updateField(
              "overview",
              "description",
              value,
            )
          }
        />
      </ContentSection>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <ContentSection
        number="03"
        title="How It Works"
        description="Control the introduction to the water-station process."
      >
        <ContentField
          label="Eyebrow"
          value={content.howItWorks.eyebrow}
          onChange={(value) =>
            updateField(
              "howItWorks",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.howItWorks.title}
          onChange={(value) =>
            updateField(
              "howItWorks",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.howItWorks.description}
          multiline
          onChange={(value) =>
            updateField(
              "howItWorks",
              "description",
              value,
            )
          }
        />
      </ContentSection>

      {/* =====================================================
          IMPACT
      ====================================================== */}

      <ContentSection
        number="04"
        title="Impact & Statistics"
        description="Manage the impact section and numerical highlights."
      >
        <ContentField
          label="Eyebrow"
          value={content.impact.eyebrow}
          onChange={(value) =>
            updateField("impact", "eyebrow", value)
          }
        />

        <ContentField
          label="Heading"
          value={content.impact.title}
          onChange={(value) =>
            updateField("impact", "title", value)
          }
        />

        <ContentField
          label="Description"
          value={content.impact.description}
          multiline
          onChange={(value) =>
            updateField(
              "impact",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-4">
            <ContentField
              label="Statistic 1 Value"
              value={content.impact.stat1Value}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat1Value",
                  value,
                )
              }
            />

            <ContentField
              label="Statistic 1 Label"
              value={content.impact.stat1Label}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat1Label",
                  value,
                )
              }
            />
          </div>

          <div className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-4">
            <ContentField
              label="Statistic 2 Value"
              value={content.impact.stat2Value}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat2Value",
                  value,
                )
              }
            />

            <ContentField
              label="Statistic 2 Label"
              value={content.impact.stat2Label}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat2Label",
                  value,
                )
              }
            />
          </div>

          <div className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-4">
            <ContentField
              label="Statistic 3 Value"
              value={content.impact.stat3Value}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat3Value",
                  value,
                )
              }
            />

            <ContentField
              label="Statistic 3 Label"
              value={content.impact.stat3Label}
              onChange={(value) =>
                updateField(
                  "impact",
                  "stat3Label",
                  value,
                )
              }
            />
          </div>
        </div>
      </ContentSection>

      {/* =====================================================
          WHO WE SERVE
      ====================================================== */}

      <ContentSection
        number="05"
        title="Who We Serve"
        description="Manage the introduction to the industries and institutions Anors.Z serves."
      >
        <ContentField
          label="Eyebrow"
          value={content.whoWeServe.eyebrow}
          onChange={(value) =>
            updateField(
              "whoWeServe",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.whoWeServe.title}
          onChange={(value) =>
            updateField(
              "whoWeServe",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.whoWeServe.description}
          multiline
          onChange={(value) =>
            updateField(
              "whoWeServe",
              "description",
              value,
            )
          }
        />
      </ContentSection>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <ContentSection
        number="06"
        title="Who We Are"
        description="Manage the company identity section on the homepage."
      >
        <ContentField
          label="Eyebrow"
          value={content.whoWeAre.eyebrow}
          onChange={(value) =>
            updateField(
              "whoWeAre",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.whoWeAre.title}
          onChange={(value) =>
            updateField(
              "whoWeAre",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.whoWeAre.description}
          multiline
          onChange={(value) =>
            updateField(
              "whoWeAre",
              "description",
              value,
            )
          }
        />
      </ContentSection>

      {/* =====================================================
          CTA
      ====================================================== */}

      <ContentSection
        number="07"
        title="Call to Action"
        description="Manage the final homepage call-to-action section."
      >
        <ContentField
          label="Eyebrow"
          value={content.cta.eyebrow}
          onChange={(value) =>
            updateField("cta", "eyebrow", value)
          }
        />

        <ContentField
          label="Heading"
          value={content.cta.title}
          onChange={(value) =>
            updateField("cta", "title", value)
          }
        />

        <ContentField
          label="Description"
          value={content.cta.description}
          multiline
          onChange={(value) =>
            updateField(
              "cta",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Button Label"
            value={content.cta.buttonLabel}
            onChange={(value) =>
              updateField(
                "cta",
                "buttonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Button Link"
            value={content.cta.buttonHref}
            description="Example: /contact"
            onChange={(value) =>
              updateField(
                "cta",
                "buttonHref",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* =====================================================
          SAVE BAR
      ====================================================== */}

      <div className="sticky bottom-4 z-20 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {message ? (
              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  message.type === "success"
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <XCircle className="h-4 w-4" />
                )}

                {message.text}
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-[#211024]">
                  Homepage changes
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Save when you are ready to publish the
                  updated content.
                </p>
              </>
            )}
          </div>

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
  );
}