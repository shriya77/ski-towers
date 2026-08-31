import { usePageMeta } from "../hooks/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHeader } from "../components/PageHeader";
import { ContactSection } from "../components/ContactSection";
import { LocationSection } from "../components/LocationSection";

export function Contact() {
  const { t } = useLanguage();

  usePageMeta(
    "Contact | Ski Towers Erode",
    "Contact Ski Towers Erode by WhatsApp, phone or email. Find directions to our location in Erode, Tamil Nadu."
  );

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
