import type { LucideIcon } from "lucide-react";
import type { Localized } from "../i18n/types";

export interface Amenity {
  /** Stable id used as the translation key (see i18n/translations amenity map) — not shown directly. */
  id: string;
  name: Localized;
  icon: LucideIcon;
  enabled: boolean;
  /** Shown in the amenities list, dimmed with a "Coming soon" label, without claiming it's available yet. */
  comingSoon?: boolean;
}

export interface RoomImage {
  src: string;
  alt: string;
}

export interface Room {
  id: string;
  name: Localized;
  shortDescription: Localized;
  description: Localized;
  beds: Localized;
  suitableFor: Localized | null;
  weeklyRate: number | null;
  monthlyRate: number | null;
  amenities: Amenity[];
  images: RoomImage[];
  /** SEO-optimized copy for the room detail page — deliberately longer/keyword-aware than `name`, which stays short for cards/UI. */
  seo: {
    title: Localized;
    description: Localized;
    heading: Localized;
  };
}

export interface Shop {
  id: string;
  name: string;
  size: string | null;
  floor: string | null;
  monthlyRent: number | null;
  available: boolean;
  description: string | null;
  images: RoomImage[];
}

export type GalleryCategory =
  | "All"
  | "Rooms"
  | "Exterior"
  | "Bathrooms"
  | "Common Areas"
  | "Shops";

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
}
