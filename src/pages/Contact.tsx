import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/PageHeader";
import { ContactSection } from "../components/ContactSection";
import { LocationSection } from "../components/LocationSection";

export function Contact() {
  const { t } = useLanguage();

  useSEO({
    title: t("contact.seoTitle"),
    description: t("contact.seoDescription"),
    path: "/contact",
  });

  return (
    <>
      <PageHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.pageTitle")}
        description={t("contact.pageDescription")}
      />
      <ContactSection />
      <LocationSection />
    </>
  );
}
