import { MessageCircle, ChevronDown, MapPin } from "lucide-react";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "./ui/Button";

export function Hero() {
  const { language, t } = useLanguage();
  const whatsappLink = generateWhatsAppLink({}, language);

  return (
    <section className="relative flex min-h-[94svh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img
          src="/photos/ski-towers-building-erode.jpeg"
          alt="SKI Towers building in Erode"
          className="h-full w-full object-cover brightness-[0.55] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          {t("hero.city")}, {t("hero.state")}
        </p>

        <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          {t("hero.tagline")}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          {t("hero.supportingLine")}
        </p>

        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          {t("hero.nearbyLandmark")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="#rooms" size="lg">
            {t("hero.checkAvailability")}
          </Button>
          {isWhatsAppConfigured ? (
            <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="outlineLight" size="lg">
              <MessageCircle className="h-5 w-5" />
              {t("nav.whatsappUs")}
            </Button>
          ) : (
            <Button href="/contact" variant="outlineLight" size="lg">
              {t("nav.contactUs")}
            </Button>
          )}
        </div>
      </div>

      <a
        href="#summary"
        aria-label={t("hero.scrollDown")}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-white sm:block"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
