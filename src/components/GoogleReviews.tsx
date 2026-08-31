import { Star, ExternalLink, Quote } from "lucide-react";
import { business } from "../data/business";
import { testimonials } from "../data/testimonials";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

/**
 * Shows short, attributed excerpts from the real Google Business Profile
 * (data/testimonials.ts) alongside the aggregate rating, with a link to the
 * full profile for complete reviews. Hidden until a review URL, rating, or
 * testimonial is set — never shows placeholder or fabricated reviews.
 */
export function GoogleReviews() {
  const hasUrl = Boolean(business.googleReviewUrl);
  const hasRating = business.googleRating !== null;
  const hasTestimonials = testimonials.length > 0;

  if (!hasUrl && !hasRating && !hasTestimonials) return null;

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading eyebrow="Reviews" title="What guests say on Google" align="center" />

          {hasRating && (
            <div className="mt-5 flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-extrabold text-charcoal">
                  {business.googleRating?.toFixed(1)}
                </span>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.round(business.googleRating ?? 0) ? "currentColor" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>
              {business.googleReviewCount !== null && (
                <p className="text-sm text-muted">Based on {business.googleReviewCount} Google reviews</p>
              )}
            </div>
          )}
        </Reveal>

        {hasTestimonials && (
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-white p-6 text-left">
                  <Quote className="h-5 w-5 text-accent/60" fill="currentColor" strokeWidth={0} />
                  <p className="text-sm leading-relaxed text-charcoal-soft">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-muted">
                    <span className="font-semibold text-charcoal">{t.name}</span>
                    <span>· Google review</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {hasUrl && (
          <Reveal className="mt-8 flex justify-center" delay={hasTestimonials ? 240 : 0}>
            <Button href={business.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              Read Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
