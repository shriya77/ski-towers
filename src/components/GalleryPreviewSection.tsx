import { galleryImages } from "../data/gallery";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function GalleryPreviewSection() {
  const { t } = useLanguage();
  const previewImages = galleryImages.slice(0, 4);
  const previewCategories = [
    t("gallery.categoryRooms"),
    t("gallery.categoryExterior"),
    t("gallery.categoryBathrooms"),
    t("gallery.categoryCommonAreas"),
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t("gallery.eyebrow")} title={t("gallery.previewTitle")} />
          <Button href="/gallery" variant="outline">
            {t("gallery.viewFull")}
          </Button>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(previewImages.length > 0 ? previewImages : previewCategories).map((item, i) => (
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
