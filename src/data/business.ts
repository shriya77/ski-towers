/**
 * Central business configuration.
 * Update phone, whatsapp, email, address and mapsUrl here once available —
 * every component that shows contact details reads from this file.
 * Leave a value empty ("") if it isn't confirmed yet; components hide or
 * disable the related UI automatically rather than showing broken links.
 */
export const business = {
  name: "Ski Towers Erode",
  shortName: "Ski Towers",
  tagline: "Comfortable stays in Erode",
  supportingLine:
    "Single and double rooms for weekly and monthly stays. Walkable to Erode Railway Station.",

  // Digits only, with country code, no + or spaces. e.g. "919876543210"
  whatsapp: "919790297204",
  // Display format, e.g. "+91 98765 43210"
  phone: "+91 97902 97204",
  email: "skitowers@gmail.com",

  addressLine1: "Thayumanava, Sundram Street",
  addressLine2: "Near Lotus Hospital, Housing Unit",
  city: "Erode",
  state: "Tamil Nadu",
  pincode: "638002",

  // Google Business Profile share link — used for Directions and Reviews.
  mapsUrl: "https://share.google/rRVy7HmFmXHGCl7Rl",
  // Anchored to the verified Google Business Profile listing (more reliable geocoding
  // than the street address alone) — same Nadarmedu block as the address above.
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=SKI%20towers%20rooms%2C%20Nadarmedu%2C%20Erode%2C%20Tamil%20Nadu%20638002&output=embed",

  checkInTime: "",
  checkOutTime: "",
  businessHours: "",

  nearbyLandmark: "Walkable to Erode Railway Station",

  // Pulled from the Google Business Profile above — update if the listing changes.
  googleReviewUrl: "https://share.google/rRVy7HmFmXHGCl7Rl",
  googleRating: 4.1 as number | null,
  googleReviewCount: 30 as number | null,
};

export type Business = typeof business;
