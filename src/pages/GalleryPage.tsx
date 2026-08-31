import { usePageMeta } from "../hooks/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHeader } from "../components/PageHeader";
import { Container } from "../components/ui/Container";
import { Gallery } from "../components/Gallery";

export function GalleryPage() {
  const { t } = useLanguage();

  usePageMeta(
    "Gallery | Ski Towers Erode",
    "Photos of rooms, exterior and common areas at Ski Towers Erode."
  );

  return (
    <>
      <PageHeader
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.pageTitle")}
        description={t("gallery.pageDescription")}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Gallery />
        </Container>
      </section>
    </>
  );
}
