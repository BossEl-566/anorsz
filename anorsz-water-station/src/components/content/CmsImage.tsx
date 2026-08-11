import Image, {
  type StaticImageData,
} from "next/image";

import type {
  WebsiteMediaSelection,
} from "@/types/website-content";

type CmsImageProps = {
  media:
    | WebsiteMediaSelection
    | null
    | undefined;

  fallback: StaticImageData;

  fallbackAlt: string;

  className?: string;

  sizes?: string;

  priority?: boolean;
};

export default function CmsImage({
  media,
  fallback,
  fallbackAlt,
  className = "object-cover",
  sizes = "100vw",
  priority = false,
}: CmsImageProps) {
  if (media) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.url}
        alt={
          media.alt ||
          fallbackAlt
        }
        loading={
          priority
            ? "eager"
            : "lazy"
        }
        className={`absolute inset-0 h-full w-full ${className}`}
      />
    );
  }

  return (
    <Image
      src={fallback}
      alt={fallbackAlt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}