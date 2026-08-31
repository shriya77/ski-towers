import { usePageMeta } from "../hooks/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHeader } from "../components/PageHeader";
import { ShopSection } from "../components/ShopSection";

export function Shops() {
  const { t } = useLanguage();

  usePageMeta(
    "Shops & Commercial Spaces | Ski Towers Erode",
    "Commercial spaces and shops available for rent at Ski Towers Erode. Enquire on WhatsApp for size, rent and availability."
  );

  return (
    <>
      <PageHeader
        eyebrow={t("shops.eyebrow")}
        title={t("shops.pageTitle")}
        description={t("shops.pageDescription")}
      />
      <ShopSection />
    </>
  );
}
