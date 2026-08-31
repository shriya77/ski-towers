import type { LucideIcon } from "lucide-react";

export interface Amenity {
  name: string;
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
  name: string;
  shortDescription: string;
  description: string;
  beds: string;
  suitableFor: string | null;
  dailyRate: number | null;
  weeklyRate: number | null;
  monthlyRate: number | null;
  amenities: Amenity[];
  images: RoomImage[];
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
