import { MapPin, Navigation } from "lucide-react";
import { business } from "../data/business";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

export function LocationSection() {
  const hasMapsUrl = Boolean(business.mapsUrl);
  const hasEmbed = Boolean(business.mapsEmbedUrl);
  const hasAddress = Boolean(business.addressLine1 && !business.addressLine1.startsWith("["));

  return (
    <section id="location" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Find Us" title="Find Ski Towers Erode" />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-white p-6 sm:p-8">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl">{business.name}</h3>

              <address className="mt-2 not-italic leading-relaxed text-muted">
                {hasAddress ? (
                  <>
                    {business.addressLine1}
                    <br />
                    {business.addressLine2 && (
                      <>
                        {business.addressLine2}
                        <br />
                      </>
                    )}
                    {business.city}, {business.state}
                    {business.pincode && !business.pincode.startsWith("[") ? ` — ${business.pincode}` : ""}
                  </>
                ) : (
                  <>Full address coming soon. {business.city}, {business.state}.</>
                )}
              </address>

              <p className="mt-3 text-sm font-medium text-accent">{business.nearbyLandmark}</p>

              {hasMapsUrl && (
                <Button
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
              )}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={80}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-ivory-soft lg:aspect-auto lg:h-full">
              {hasEmbed ? (
                <iframe
                  src={business.mapsEmbedUrl}
                  title={`Map showing the location of ${business.name}`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center text-muted">
                  <MapPin className="h-7 w-7 opacity-50" strokeWidth={1.5} />
                  <p className="text-sm">Map will appear here once the location is confirmed.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
