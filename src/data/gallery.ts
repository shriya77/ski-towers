import type { GalleryImage } from "../types";

/**
 * Add real photos here as they're supplied — each entry needs a src, a
 * descriptive alt and a category. Until then the Gallery component renders
 * tasteful placeholders per category instead of stock photography.
 */
export const galleryImages: GalleryImage[] = [
  { src: "/photos/room-single-1.jpeg", alt: "Single room with seating and window", category: "Rooms" },
  { src: "/photos/room-single-2.jpeg", alt: "Single bed in a room at Ski Towers Erode", category: "Rooms" },
  { src: "/photos/room-single-3.jpeg", alt: "Storage cupboard in a single room", category: "Rooms" },
  { src: "/photos/room-single-4.jpeg", alt: "Bedding in a single room", category: "Rooms" },
  { src: "/photos/room-double-1.jpeg", alt: "Double bed in a room at Ski Towers Erode", category: "Rooms" },
  { src: "/photos/bathroom-1.jpeg", alt: "Wash basin with mirror in an attached bathroom", category: "Bathrooms" },
  { src: "/photos/bathroom-2.jpeg", alt: "Clean toilet in an attached bathroom", category: "Bathrooms" },
  { src: "/photos/bathroom-3.jpeg", alt: "Toilet in an attached bathroom", category: "Bathrooms" },
  { src: "/photos/common-area-1.jpeg", alt: "Study table and chair", category: "Common Areas" },
];
