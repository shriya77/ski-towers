export interface Testimonial {
  quote: string;
  name: string;
}

/**
 * Short excerpts pulled from real guest reviews on the Google Business
 * Profile (see business.googleReviewUrl) — these are Google's own featured
 * highlight snippets, kept short and attributed. Full reviews are on Google;
 * update this list if the featured snippets change.
 */
export const testimonials: Testimonial[] = [
  {
    quote: "Great place to stay, I stayed here for more that one year.",
    name: "Vishnu Remesh",
  },
  {
    quote: "Hot water and cleaned toilets, bathroom awesome.",
    name: "hari kkumar",
  },
  {
    quote: "It's good place and peaceful place to stay in budget also.",
    name: "Bhanusri Karri",
  },
];
