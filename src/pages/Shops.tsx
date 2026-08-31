import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/PageHeader";
import { ShopSection } from "../components/ShopSection";

export function Shops() {
  const { t } = useLanguage();

  useSEO({
    title: `${t("shops.pageTitle")} | SKI Towers`,
    description: t("shops.pageDescription"),
    path: "/shops",
  });

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
