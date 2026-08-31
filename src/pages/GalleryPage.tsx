import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/PageHeader";
import { Container } from "../components/ui/Container";
import { Gallery } from "../components/Gallery";

export function GalleryPage() {
  usePageMeta(
    "Gallery | Ski Towers Erode",
    "Photos of rooms, exterior and common areas at Ski Towers Erode."
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Gallery"
        description="A look at the rooms, exterior and common areas at Ski Towers Erode."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Gallery />
        </Container>
      </section>
    </>
  );
}
