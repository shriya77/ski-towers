import { Store } from "lucide-react";
import { shops } from "../data/shops";
import { business } from "../data/business";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ShopCard } from "./ShopCard";

export function ShopSection() {
  const { language, t } = useLanguage();
  const whatsappLink = generateWhatsAppLink({}, language);

  return (
    <section id="shops" className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("shops.eyebrow")}
            title={t("shops.title")}
            description={t("shops.description", { business: business.name })}
          />
        </Reveal>

        {shops.length === 0 ? (
          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent">
                <Store className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="max-w-sm text-sm text-muted">
                {t("shops.emptyState", { business: business.name })}
              </p>
              {isWhatsAppConfigured ? (
                <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {t("shops.enquireWhatsapp")}
                </Button>
              ) : (
                <Button href="/contact">{t("nav.contactUs")}</Button>
              )}
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shops.map((shop, i) => (
              <Reveal key={shop.id} delay={i * 80}>
                <ShopCard shop={shop} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
