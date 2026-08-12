"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  CheckCircle2,
  ExternalLink,
  Loader2,
  Save,
  XCircle,
} from "lucide-react";

import ContentField from "@/components/admin/content/ContentField";
import ContentSection from "@/components/admin/content/ContentSection";

import { saveAboutContent } from "@/app/admin/content/about/actions";


import MediaPickerField from "@/components/admin/media/MediaPickerField";

import type { MediaItem } from "@/types/media";

import type {
  AboutPageContent,
  WebsiteMediaSelection,
  WebsiteVideoSelection,
} from "@/types/website-content";

import VideoPickerField from "@/components/admin/media/VideoPickerField";

type Props = {
  initialContent: AboutPageContent;

  mediaLibrary: MediaItem[];
};

type Message =
  | {
      type: "success" | "error";
      text: string;
    }
  | null;

export default function AboutContentForm({
  initialContent,
  mediaLibrary,
}: Props) {
  const [content, setContent] =
    useState(initialContent);

  const [message, setMessage] =
    useState<Message>(null);

  const [isPending, startTransition] =
    useTransition();

  function updateSection(
    section: keyof AboutPageContent,
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

  function updateArrayItem(
    section:
      | "values"
      | "technology"
      | "impact"
      | "support",
    index: number,
    field: string,
    value: string,
  ) {
    setContent((current) => {
      const currentSection =
        current[section];

      const items =
        currentSection.items.map(
          (item, itemIndex) =>
            itemIndex === index
              ? {
                  ...item,
                  [field]: value,
                }
              : item,
        );

      return {
        ...current,

        [section]: {
          ...currentSection,
          items,
        },
      } as AboutPageContent;
    });
  }

  function updateSustainabilityPoint(
    index: number,
    value: string,
  ) {
    setContent((current) => ({
      ...current,

      sustainability: {
        ...current.sustainability,

        points:
          current.sustainability.points.map(
            (point, pointIndex) =>
              pointIndex === index
                ? value
                : point,
          ),
      },
    }));
  }

  function handleSave() {
    setMessage(null);

    startTransition(async () => {
      const result =
        await saveAboutContent(content);

      setMessage({
        type: result.success
          ? "success"
          : "error",

        text: result.message,
      });
    });
  }

  function updateStoryImage(
  image: WebsiteMediaSelection | null,
) {
  setContent((current) => ({
    ...current,

    story: {
      ...current.story,
      image,
    },
  }));
}

function updateMissionImage(
  missionImage: WebsiteMediaSelection | null,
) {
  setContent((current) => ({
    ...current,

    purpose: {
      ...current.purpose,
      missionImage,
    },
  }));
}

function updateVisionImage(
  visionImage: WebsiteMediaSelection | null,
) {
  setContent((current) => ({
    ...current,

    purpose: {
      ...current.purpose,
      visionImage,
    },
  }));
}

function updateImpactImage(
  index: number,
  image: WebsiteMediaSelection | null,
) {
  setContent((current) => {
    const items =
      current.impact.items.map(
        (item, itemIndex) =>
          itemIndex === index
            ? {
                ...item,
                image,
              }
            : item,
      );

    return {
      ...current,

      impact: {
        ...current.impact,
        items,
      },
    };
  });
}

function updateSustainabilityImage(
  image: WebsiteMediaSelection | null,
) {
  setContent((current) => ({
    ...current,

    sustainability: {
      ...current.sustainability,
      image,
    },
  }));
}

function updateSupportImage(
  image: WebsiteMediaSelection | null,
) {
  setContent((current) => ({
    ...current,

    support: {
      ...current.support,
      image,
    },
  }));
}

function updateHeroVideo(
  video:
    | WebsiteVideoSelection
    | null,
) {
  setContent((current) => ({
    ...current,

    hero: {
      ...current.hero,
      video,
    },
  }));
}

function updateTechnologyVideo(
  video:
    | WebsiteVideoSelection
    | null,
) {
  setContent((current) => ({
    ...current,

    technology: {
      ...current.technology,
      video,
    },
  }));
}

function updateSupportVideo(
  video:
    | WebsiteVideoSelection
    | null,
) {
  setContent((current) => ({
    ...current,

    support: {
      ...current.support,
      video,
    },
  }));
}

  return (
    <div className="space-y-6">
      {/* HERO */}

      <ContentSection
        number="01"
        title="About Hero"
        description="Manage the text displayed over the About page video."
      >
        <VideoPickerField
  label="Hero Background Video"
  description="Background video displayed at the top of the About page."
  value={
    content.hero.video
  }
  media={
    mediaLibrary
  }
  onChange={
    updateHeroVideo
  }
/>
        <ContentField
          label="Breadcrumb Label"
          value={content.hero.breadcrumbLabel}
          onChange={(value) =>
            updateSection(
              "hero",
              "breadcrumbLabel",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Heading Line 1"
            value={content.hero.titleLineOne}
            onChange={(value) =>
              updateSection(
                "hero",
                "titleLineOne",
                value,
              )
            }
          />

          <ContentField
            label="Heading Line 2"
            value={content.hero.titleLineTwo}
            onChange={(value) =>
              updateSection(
                "hero",
                "titleLineTwo",
                value,
              )
            }
          />
        </div>

        <ContentField
          label="Description"
          value={content.hero.description}
          multiline
          onChange={(value) =>
            updateSection(
              "hero",
              "description",
              value,
            )
          }
        />

        <ContentField
          label="Audience Description"
          value={
            content.hero.audienceDescription
          }
          multiline
          onChange={(value) =>
            updateSection(
              "hero",
              "audienceDescription",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Link Label"
            value={content.hero.linkLabel}
            onChange={(value) =>
              updateSection(
                "hero",
                "linkLabel",
                value,
              )
            }
          />

          <ContentField
            label="Link"
            value={content.hero.linkHref}
            onChange={(value) =>
              updateSection(
                "hero",
                "linkHref",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* STORY */}

      <ContentSection
        number="02"
        title="Company Story"
        description="Manage the company introduction and belief statement."
      >
        <MediaPickerField
  label="Company Story Image"
  description="Large image used in the company story section."
  value={content.story.image}
  media={mediaLibrary}
  onChange={updateStoryImage}
/>
        <ContentField
          label="Eyebrow"
          value={content.story.eyebrow}
          onChange={(value) =>
            updateSection(
              "story",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.story.title}
          onChange={(value) =>
            updateSection(
              "story",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Paragraph 1"
          value={content.story.paragraphOne}
          multiline
          onChange={(value) =>
            updateSection(
              "story",
              "paragraphOne",
              value,
            )
          }
        />

        <ContentField
          label="Paragraph 2"
          value={content.story.paragraphTwo}
          multiline
          onChange={(value) =>
            updateSection(
              "story",
              "paragraphTwo",
              value,
            )
          }
        />

        <ContentField
          label="Paragraph 3"
          value={content.story.paragraphThree}
          multiline
          onChange={(value) =>
            updateSection(
              "story",
              "paragraphThree",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Link Label"
            value={content.story.linkLabel}
            onChange={(value) =>
              updateSection(
                "story",
                "linkLabel",
                value,
              )
            }
          />

          <ContentField
            label="Link"
            value={content.story.linkHref}
            onChange={(value) =>
              updateSection(
                "story",
                "linkHref",
                value,
              )
            }
          />
        </div>

        <div className="grid gap-5 border-t border-black/10 pt-5 md:grid-cols-2">
          <ContentField
            label="Image Eyebrow"
            value={
              content.story.beliefEyebrow
            }
            onChange={(value) =>
              updateSection(
                "story",
                "beliefEyebrow",
                value,
              )
            }
          />

          <ContentField
            label="Belief"
            value={content.story.beliefText}
            onChange={(value) =>
              updateSection(
                "story",
                "beliefText",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* MISSION + VISION */}

      <ContentSection
        number="03"
        title="Mission & Vision"
        description="Manage Anors.Z's purpose, mission and vision statements."
      >
        <MediaPickerField
  label="Mission Image"
  description="Image displayed with the Mission content."
  value={content.purpose.missionImage}
  media={mediaLibrary}
  onChange={updateMissionImage}
/>
        <ContentField
          label="Eyebrow"
          value={content.purpose.eyebrow}
          onChange={(value) =>
            updateSection(
              "purpose",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.purpose.title}
          onChange={(value) =>
            updateSection(
              "purpose",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Introduction"
          value={content.purpose.description}
          multiline
          onChange={(value) =>
            updateSection(
              "purpose",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 border-t border-black/10 pt-5 lg:grid-cols-2">
          <div className="space-y-4 rounded-xl bg-[#faf9f8] p-5">
            <ContentField
              label="Mission Label"
              value={
                content.purpose
                  .missionEyebrow
              }
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "missionEyebrow",
                  value,
                )
              }
            />

            <ContentField
              label="Mission Heading"
              value={
                content.purpose.missionTitle
              }
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "missionTitle",
                  value,
                )
              }
            />

            <ContentField
              label="Mission Description"
              value={
                content.purpose
                  .missionDescription
              }
              multiline
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "missionDescription",
                  value,
                )
              }
            />
          </div>

          <div className="space-y-4 rounded-xl bg-[#faf9f8] p-5">
            <MediaPickerField
  label="Vision Image"
  description="Image displayed with the Vision content."
  value={content.purpose.visionImage}
  media={mediaLibrary}
  onChange={updateVisionImage}
/>
            <ContentField
              label="Vision Label"
              value={
                content.purpose
                  .visionEyebrow
              }
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "visionEyebrow",
                  value,
                )
              }
            />

            <ContentField
              label="Vision Heading"
              value={
                content.purpose.visionTitle
              }
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "visionTitle",
                  value,
                )
              }
            />

            <ContentField
              label="Vision Description"
              value={
                content.purpose
                  .visionDescription
              }
              multiline
              onChange={(value) =>
                updateSection(
                  "purpose",
                  "visionDescription",
                  value,
                )
              }
            />
          </div>
        </div>
      </ContentSection>

      {/* VALUES */}

      <ContentSection
        number="04"
        title="Company Values"
        description="Edit the four values displayed on the About page."
      >
        <ContentField
          label="Eyebrow"
          value={content.values.eyebrow}
          onChange={(value) =>
            updateSection(
              "values",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.values.title}
          onChange={(value) =>
            updateSection(
              "values",
              "title",
              value,
            )
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {content.values.items.map(
            (item, index) => (
              <div
                key={item.key}
                className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-5"
              >
                <p className="text-xs font-semibold text-[#681761]">
                  Value {index + 1}
                </p>

                <ContentField
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem(
                      "values",
                      index,
                      "title",
                      value,
                    )
                  }
                />

                <ContentField
                  label="Description"
                  value={item.description}
                  multiline
                  onChange={(value) =>
                    updateArrayItem(
                      "values",
                      index,
                      "description",
                      value,
                    )
                  }
                />
              </div>
            ),
          )}
        </div>
      </ContentSection>

      {/* TECHNOLOGY */}

      <ContentSection
        number="05"
        title="Technology"
        description="Manage the technology introduction and six technology cards."
      >
        <VideoPickerField
  label="Technology Demonstration Video"
  description="Main demonstration video displayed above the technology cards."
  value={
    content.technology.video
  }
  media={
    mediaLibrary
  }
  onChange={
    updateTechnologyVideo
  }
/>
        <ContentField
          label="Eyebrow"
          value={content.technology.eyebrow}
          onChange={(value) =>
            updateSection(
              "technology",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.technology.title}
          onChange={(value) =>
            updateSection(
              "technology",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.technology.description}
          multiline
          onChange={(value) =>
            updateSection(
              "technology",
              "description",
              value,
            )
          }
        />

        <ContentField
          label="Video Label"
          value={
            content.technology.videoLabel
          }
          onChange={(value) =>
            updateSection(
              "technology",
              "videoLabel",
              value,
            )
          }
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.technology.items.map(
            (item, index) => (
              <div
                key={item.key}
                className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-5"
              >
                <ContentField
                  label="Number"
                  value={item.number}
                  onChange={(value) =>
                    updateArrayItem(
                      "technology",
                      index,
                      "number",
                      value,
                    )
                  }
                />

                <ContentField
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem(
                      "technology",
                      index,
                      "title",
                      value,
                    )
                  }
                />

                <ContentField
                  label="Description"
                  value={item.description}
                  multiline
                  onChange={(value) =>
                    updateArrayItem(
                      "technology",
                      index,
                      "description",
                      value,
                    )
                  }
                />
              </div>
            ),
          )}
        </div>
      </ContentSection>

      {/* IMPACT */}

      <ContentSection
        number="06"
        title="Impact"
        description="Manage the three environments featured in the impact gallery."
      >
        <ContentField
          label="Eyebrow"
          value={content.impact.eyebrow}
          onChange={(value) =>
            updateSection(
              "impact",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.impact.title}
          onChange={(value) =>
            updateSection(
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
            updateSection(
              "impact",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {content.impact.items.map(
            (item, index) => (
              <div
                key={item.key}
                className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-5"
              >
                <MediaPickerField
  label={`Image ${index + 1}`}
  description={`Image for ${item.title}.`}
  value={item.image}
  media={mediaLibrary}
  onChange={(image) =>
    updateImpactImage(
      index,
      image,
    )
  }
/>
                <ContentField
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem(
                      "impact",
                      index,
                      "title",
                      value,
                    )
                  }
                />

                <ContentField
                  label="Description"
                  value={item.description}
                  multiline
                  onChange={(value) =>
                    updateArrayItem(
                      "impact",
                      index,
                      "description",
                      value,
                    )
                  }
                />
              </div>
            ),
          )}
        </div>
      </ContentSection>

      {/* SUSTAINABILITY */}

      <ContentSection
        number="07"
        title="Sustainability"
        description="Manage environmental responsibility messaging."
      >
        <MediaPickerField
  label="Sustainability Image"
  description="Main image displayed in the sustainability section."
  value={content.sustainability.image}
  media={mediaLibrary}
  onChange={updateSustainabilityImage}
/>
        <ContentField
          label="Eyebrow"
          value={
            content.sustainability.eyebrow
          }
          onChange={(value) =>
            updateSection(
              "sustainability",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={
            content.sustainability.title
          }
          onChange={(value) =>
            updateSection(
              "sustainability",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={
            content.sustainability.description
          }
          multiline
          onChange={(value) =>
            updateSection(
              "sustainability",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Image Eyebrow"
            value={
              content.sustainability
                .imageEyebrow
            }
            onChange={(value) =>
              updateSection(
                "sustainability",
                "imageEyebrow",
                value,
              )
            }
          />

          <ContentField
            label="Image Text"
            value={
              content.sustainability.imageText
            }
            onChange={(value) =>
              updateSection(
                "sustainability",
                "imageText",
                value,
              )
            }
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {content.sustainability.points.map(
            (point, index) => (
              <ContentField
                key={index}
                label={`Point ${index + 1}`}
                value={point}
                onChange={(value) =>
                  updateSustainabilityPoint(
                    index,
                    value,
                  )
                }
              />
            ),
          )}
        </div>
      </ContentSection>

      {/* SUPPORT */}

      <ContentSection
        number="08"
        title="Installation & Support"
        description="Manage installation, training and technical-support content."
      >
        <VideoPickerField
  label="Installation & Support Video"
  description="Video demonstrating installation, setup or technical support."
  value={
    content.support.video
  }
  media={
    mediaLibrary
  }
  onChange={
    updateSupportVideo
  }
/>
        <MediaPickerField
  label="Installation & Support Image"
  description="Image displayed alongside installation and support information."
  value={content.support.image}
  media={mediaLibrary}
  onChange={updateSupportImage}
/>
        <ContentField
          label="Eyebrow"
          value={content.support.eyebrow}
          onChange={(value) =>
            updateSection(
              "support",
              "eyebrow",
              value,
            )
          }
        />

        <ContentField
          label="Heading"
          value={content.support.title}
          onChange={(value) =>
            updateSection(
              "support",
              "title",
              value,
            )
          }
        />

        <ContentField
          label="Description"
          value={content.support.description}
          multiline
          onChange={(value) =>
            updateSection(
              "support",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {content.support.items.map(
            (item, index) => (
              <div
                key={item.key}
                className="space-y-4 rounded-xl border border-black/10 bg-[#faf9f8] p-5"
              >
                <ContentField
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem(
                      "support",
                      index,
                      "title",
                      value,
                    )
                  }
                />

                <ContentField
                  label="Description"
                  value={item.description}
                  multiline
                  onChange={(value) =>
                    updateArrayItem(
                      "support",
                      index,
                      "description",
                      value,
                    )
                  }
                />
              </div>
            ),
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Image Eyebrow"
            value={
              content.support.imageEyebrow
            }
            onChange={(value) =>
              updateSection(
                "support",
                "imageEyebrow",
                value,
              )
            }
          />

          <ContentField
            label="Image Text"
            value={content.support.imageText}
            onChange={(value) =>
              updateSection(
                "support",
                "imageText",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* CTA */}

      <ContentSection
        number="09"
        title="Final Call to Action"
        description="Manage the final section that directs visitors toward an enquiry or another page."
      >
        <ContentField
          label="Eyebrow"
          value={content.cta.eyebrow}
          onChange={(value) =>
            updateSection(
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
            updateSection(
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
            updateSection(
              "cta",
              "description",
              value,
            )
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          <ContentField
            label="Primary Button"
            value={
              content.cta.primaryButtonLabel
            }
            onChange={(value) =>
              updateSection(
                "cta",
                "primaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Primary Link"
            value={
              content.cta.primaryButtonHref
            }
            onChange={(value) =>
              updateSection(
                "cta",
                "primaryButtonHref",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Button"
            value={
              content.cta
                .secondaryButtonLabel
            }
            onChange={(value) =>
              updateSection(
                "cta",
                "secondaryButtonLabel",
                value,
              )
            }
          />

          <ContentField
            label="Secondary Link"
            value={
              content.cta
                .secondaryButtonHref
            }
            onChange={(value) =>
              updateSection(
                "cta",
                "secondaryButtonHref",
                value,
              )
            }
          />
        </div>
      </ContentSection>

      {/* SAVE */}

      <div className="sticky bottom-4 z-20 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-5">
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
                {message.type ===
                "success" ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <XCircle className="h-4 w-4" />
                )}

                {message.text}
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-[#211024]">
                  About page changes
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Save and publish when the
                  content is ready.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="/about"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-black/10 px-5 text-sm font-medium text-black/55"
            >
              <ExternalLink className="h-4 w-4" />

              View About Page
            </a>

            <button
              type="button"
              disabled={isPending}
              onClick={handleSave}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#681761] px-6 text-sm font-semibold text-white transition hover:bg-[#52114d] disabled:opacity-60"
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