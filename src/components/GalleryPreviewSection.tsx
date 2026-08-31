import { galleryImages } from "../data/gallery";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { PlaceholderImage } from "./ui/PlaceholderImage";

const PREVIEW_CATEGORIES = ["Rooms", "Exterior", "Bathrooms", "Common Areas"];

export function GalleryPreviewSection() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Gallery" title="Take a look around" />
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(previewImages.length > 0 ? previewImages : PREVIEW_CATEGORIES).map((item, i) => (
            <Reveal key={typeof item === "string" ? item : item.src} delay={i * 60}>
              <div className="aspect-square overflow-hidden rounded-xl">
                {typeof item === "string" ? (
                  <PlaceholderImage label={item} compact />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
