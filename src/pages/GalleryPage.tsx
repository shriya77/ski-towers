import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/PageHeader";
import { Container } from "../components/ui/Container";
import { Gallery } from "../components/Gallery";

export function GalleryPage() {
  const { t } = useLanguage();

  useSEO({
    title: `${t("gallery.pageTitle")} | SKI Towers`,
    description: t("gallery.pageDescription"),
    path: "/gallery",
  });

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
