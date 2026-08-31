import { useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { buildBreadcrumbSchema } from "../lib/seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { LocationSection } from "../components/LocationSection";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function NearRailwayStation() {
  const { language, t } = useLanguage();
  const whatsappLink = generateWhatsAppLink({}, language);

  const jsonLd = useMemo(
    () =>
      buildBreadcrumbSchema([
        { name: t("railwayStation.breadcrumbLabel"), path: "/near-erode-railway-station" },
      ]),
    [t]
  );

  useSEO({
    title: t("railwayStation.pageTitle"),
    description: t("railwayStation.pageDescription"),
    path: "/near-erode-railway-station",
    jsonLd,
  });

  return (
    <>
      <Breadcrumbs items={[{ label: t("railwayStation.breadcrumbLabel") }]} />

      <section className="pb-16 pt-10 sm:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t("railwayStation.eyebrow")}
          </p>
          <h1 className="mt-1 text-3xl sm:text-4xl">{t("railwayStation.h1")}</h1>
          <p className="mt-4 leading-relaxed text-muted">{t("railwayStation.intro")}</p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl">{t("railwayStation.whyHeading")}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t("railwayStation.whyBody")}</p>
            </div>
            <div>
              <h2 className="text-xl">{t("railwayStation.landmarksHeading")}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t("railwayStation.landmarksBody")}</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="text-xl">{t("railwayStation.ctaHeading")}</h2>
            <p className="mt-2 text-sm text-muted">{t("railwayStation.ctaBody")}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {isWhatsAppConfigured ? (
                <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.whatsappUs")}
                </Button>
              ) : (
                <Button href="/contact">{t("nav.contactUs")}</Button>
              )}
              <Button href="/rooms" variant="outline">
                {t("railwayStation.viewRooms")}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <LocationSection />
    </>
  );
}
