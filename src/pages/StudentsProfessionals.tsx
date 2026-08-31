import { useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { buildBreadcrumbSchema } from "../lib/seo";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { RoomSection } from "../components/RoomSection";

export function StudentsProfessionals() {
  const { language, t } = useLanguage();
  const whatsappLink = generateWhatsAppLink({}, language);

  const jsonLd = useMemo(
    () =>
      buildBreadcrumbSchema([
        { name: t("studentsProfessionals.breadcrumbLabel"), path: "/students-professionals" },
      ]),
    [t]
  );

  useSEO({
    title: t("studentsProfessionals.pageTitle"),
    description: t("studentsProfessionals.pageDescription"),
    path: "/students-professionals",
    jsonLd,
  });

  return (
    <>
      <Breadcrumbs items={[{ label: t("studentsProfessionals.breadcrumbLabel") }]} />

      <section className="pb-16 pt-10 sm:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t("studentsProfessionals.eyebrow")}
          </p>
          <h1 className="mt-1 text-3xl sm:text-4xl">{t("studentsProfessionals.h1")}</h1>
          <p className="mt-4 leading-relaxed text-muted">{t("studentsProfessionals.intro")}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl">{t("studentsProfessionals.studentsHeading")}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t("studentsProfessionals.studentsBody")}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl">{t("studentsProfessionals.professionalsHeading")}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t("studentsProfessionals.professionalsBody")}</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-ivory-soft p-6 sm:p-8">
            <h2 className="text-xl">{t("studentsProfessionals.ctaHeading")}</h2>
            <p className="mt-2 text-sm text-muted">{t("studentsProfessionals.ctaBody")}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {isWhatsAppConfigured ? (
                <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.whatsappUs")}
                </Button>
              ) : (
                <Button href="/contact">{t("nav.contactUs")}</Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      <RoomSection />
    </>
  );
}
