import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { business } from "../data/business";
import {
  generateMailLink,
  generateTelLink,
  generateWhatsAppLink,
  isEmailConfigured,
  isPhoneConfigured,
  isWhatsAppConfigured,
} from "../lib/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function ContactSection({
  eyebrowKey = "contact.eyebrow",
  titleKey = "contact.title",
  descriptionKey = "contact.description",
}: {
  eyebrowKey?: string;
  titleKey?: string;
  descriptionKey?: string;
}) {
  const { language, t } = useLanguage();

  const cards = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: isPhoneConfigured ? business.phone : t("contact.comingSoon"),
      href: generateTelLink(),
      enabled: isPhoneConfigured,
      isWhatsapp: false,
    },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: isWhatsAppConfigured ? t("contact.messageUs") : t("contact.comingSoon"),
      href: generateWhatsAppLink({}, language),
      enabled: isWhatsAppConfigured,
      isWhatsapp: true,
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: isEmailConfigured ? business.email : t("contact.comingSoon"),
      href: generateMailLink(),
      enabled: isEmailConfigured,
      isWhatsapp: false,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t(eyebrowKey)} title={t(titleKey)} description={t(descriptionKey)} />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.label}>
              {card.enabled ? (
                <a
                  href={card.href}
                  target={card.isWhatsapp ? "_blank" : undefined}
                  rel={card.isWhatsapp ? "noopener noreferrer" : undefined}
                  className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent">
                    <card.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {card.label}
                    </p>
                    <p className="mt-0.5 font-semibold text-charcoal">{card.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-dashed border-border bg-ivory-soft p-6 opacity-70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-muted">
                    <card.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {card.label}
                    </p>
                    <p className="mt-0.5 font-semibold text-muted">{card.value}</p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {business.businessHours && (
          <Reveal className="mt-6">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-6 py-4">
              <Clock className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
              <p className="text-sm text-charcoal-soft">{business.businessHours}</p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
