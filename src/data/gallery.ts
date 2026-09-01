import type { GalleryImage } from "../types";

/**
 * Add real photos here as they're supplied — each entry needs a src, a
 * descriptive alt and a category. Until then the Gallery component renders
 * tasteful placeholders per category instead of stock photography.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/photos/ski-towers-single-room-wide-erode.jpeg",
    alt: "Single occupancy monthly room at SKI Towers, Erode, with bed, wardrobe and window",
    category: "Rooms",
  },
  {
    src: "/photos/ski-towers-single-room-bed-erode.jpeg",
    alt: "Bed in a single occupancy monthly room at SKI Towers, Erode",
    category: "Rooms",
  },
  {
    src: "/photos/ski-towers-single-room-erode.jpeg",
    alt: "Single room at SKI Towers in Erode, with wash basin and window",
    category: "Rooms",
  },
  {
    src: "/photos/ski-towers-double-room-erode.jpeg",
    alt: "Double bed in a double occupancy monthly room at SKI Towers, Erode",
    category: "Rooms",
  },
  {
    src: "/photos/ski-towers-toilet-erode.jpeg",
    alt: "Attached bathroom with toilet at SKI Towers, Erode",
    category: "Bathrooms",
  },
  {
    src: "/photos/ski-towers-wash-basin-erode.jpeg",
    alt: "Wash basin with mirror in an attached bathroom at SKI Towers, Erode",
    category: "Bathrooms",
  },
  {
    src: "/photos/ski-towers-study-table-erode.jpeg",
    alt: "Study table and chair in the common area at SKI Towers, Erode",
    category: "Common Areas",
  },
];
