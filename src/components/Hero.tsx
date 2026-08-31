import { MessageCircle, ChevronDown, MapPin } from "lucide-react";
import { business } from "../data/business";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Button } from "./ui/Button";

export function Hero() {
  const whatsappLink = generateWhatsAppLink();

  return (
    <section className="relative flex min-h-[94svh] items-end overflow-hidden bg-charcoal">
      {/* Gradient mesh stands in for a hero photograph — swap for a real <img> once property photography is available. */}
      <div className="absolute inset-0">
        <div className="bg-mesh bg-grain h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
          {business.city}, {business.state}
        </p>

        <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          {business.tagline}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          Single and double rooms for daily, weekly and monthly stays.
        </p>

        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          {business.nearbyLandmark}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {isWhatsAppConfigured ? (
            <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size="lg">
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </Button>
          ) : (
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          )}
          <Button href="/rooms" variant="outlineLight" size="lg">
            Explore Rooms
          </Button>
        </div>
      </div>

      <a
        href="#summary"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-white sm:block"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
