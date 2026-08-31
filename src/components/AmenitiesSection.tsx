import { rooms } from "../data/rooms";
import type { Amenity } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { AmenityGrid } from "./AmenityGrid";

function collectVisibleAmenities(): Amenity[] {
  const seen = new Set<string>();
  const result: Amenity[] = [];
  for (const room of rooms) {
    for (const amenity of room.amenities) {
      if ((amenity.enabled || amenity.comingSoon) && !seen.has(amenity.id)) {
        seen.add(amenity.id);
        result.push(amenity);
      }
    }
  }
  return result;
}

export function AmenitiesSection() {
  const { t } = useLanguage();
  const amenities = collectVisibleAmenities();
  if (amenities.length === 0) return null;

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t("amenities.eyebrow")} title={t("amenities.title")} />
        </Reveal>
        <Reveal className="mt-8" delay={80}>
          <AmenityGrid amenities={amenities} />
        </Reveal>
      </Container>
    </section>
  );
}
