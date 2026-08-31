import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";
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

export function Footer() {
  const { language, t } = useLanguage();

  const links = [
    { label: t("nav.rooms"), to: "/rooms" },
    { label: t("nav.shops"), to: "/shops" },
    { label: t("nav.gallery"), to: "/gallery" },
    { label: t("nav.location"), to: "/#location" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-charcoal text-ivory/80">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">SKI TOWERS ERODE</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/60">{t("footer.tagline")}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ivory/50">{t("footer.explore")}</p>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ivory/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ivory/50">{t("footer.contact")}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {isWhatsAppConfigured && (
                <li>
                  <a
                    href={generateWhatsAppLink({}, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ivory/70 hover:text-white"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> {t("contact.whatsapp")}
                  </a>
                </li>
              )}
              {isPhoneConfigured && (
                <li>
                  <a href={generateTelLink()} className="flex items-center gap-2 text-ivory/70 hover:text-white">
                    <Phone className="h-3.5 w-3.5" /> {business.phone}
                  </a>
                </li>
              )}
              {isEmailConfigured && (
                <li>
                  <a href={generateMailLink()} className="flex items-center gap-2 text-ivory/70 hover:text-white">
                    <Mail className="h-3.5 w-3.5" /> {business.email}
                  </a>
                </li>
              )}
              {!isWhatsAppConfigured && !isPhoneConfigured && !isEmailConfigured && (
                <li className="text-ivory/50">{t("footer.comingSoon")}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-ivory/50">
          © {new Date().getFullYear()} {business.name}. {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
