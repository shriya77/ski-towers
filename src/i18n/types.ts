export type Language = "en" | "ta" | "hi";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "hi", label: "हिन्दी" },
];

/** Text that varies by language — used for room/amenity data so rooms.ts stays the single source of truth. */
export type Localized = Record<Language, string>;

/** Safe fallback for optional Localized fields — lets useLocalized be called unconditionally (Rules of Hooks). */
export const EMPTY_LOCALIZED: Localized = { en: "", ta: "", hi: "" };
