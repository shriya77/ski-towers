import { MessageCircle, Phone } from "lucide-react";
import { generateTelLink, generateWhatsAppLink, isPhoneConfigured, isWhatsAppConfigured } from "../lib/whatsapp";

/** Fixed floating WhatsApp button, bottom-right on all viewports. */
export function WhatsAppButton() {
  if (!isWhatsAppConfigured) return null;
  const link = generateWhatsAppLink();

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ivory shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-charcoal px-3 py-2 text-xs font-medium text-ivory opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

/** Sticky bottom bar on mobile with Call + WhatsApp, shown only when at least one is configured. */
export function MobileStickyBar() {
  if (!isWhatsAppConfigured && !isPhoneConfigured) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-ivory/95 backdrop-blur-md sm:hidden">
      {isPhoneConfigured && (
        <a
          href={generateTelLink()}
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-charcoal"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
      )}
      {isPhoneConfigured && isWhatsAppConfigured && <span className="my-2.5 w-px bg-border" />}
      {isWhatsAppConfigured && (
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-ivory"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      )}
    </div>
  );
}
