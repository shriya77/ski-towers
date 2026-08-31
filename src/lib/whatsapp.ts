import { business } from "../data/business";
import type { Language } from "../i18n/types";

export interface BookingInquiry {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}

/** True once a real WhatsApp number has been configured in data/business.ts */
export const isWhatsAppConfigured = Boolean(business.whatsapp);

/** True once a real phone number has been configured in data/business.ts */
export const isPhoneConfigured = Boolean(business.phone);

/** True once a real email has been configured in data/business.ts */
export const isEmailConfigured = Boolean(business.email);

/**
 * Prefilled WhatsApp message text per language — written the way someone
 * would actually type it, not a literal translation of the English.
 */
const MESSAGES = {
  en: {
    bookRoom: (room: string) => `Hi, I'm interested in booking a ${room} at ${business.name}.`,
    generalIntro: () => `Hi, I'd like to know more about ${business.name}.`,
    checkIn: (v: string) => `Check-in: ${v}`,
    checkOut: (v: string) => `Check-out: ${v}`,
    guests: (v: string) => `Guests: ${v}`,
    withDatesClosing: "Please let me know about availability and pricing.",
    noDatesClosing: "I would like to know about availability and rates.",
    shopInquiry: (shop: string) => `Hi, I'm interested in ${shop} (commercial space) at ${business.name}.`,
    shopClosing: "Could you share more details on size, rent and availability?",
  },
  ta: {
    bookRoom: (room: string) => `வணக்கம், ${business.name}-ல் ${room} பதிவு செய்ய ஆர்வமா இருக்கேன்.`,
    generalIntro: () => `வணக்கம், ${business.name} பத்தி கொஞ்சம் தெரிஞ்சுக்கணும்.`,
    checkIn: (v: string) => `செக்-இன்: ${v}`,
    checkOut: (v: string) => `செக்-அவுட்: ${v}`,
    guests: (v: string) => `நபர்கள்: ${v}`,
    withDatesClosing: "இருப்பு மற்றும் விலை பத்தி சொல்லுங்க.",
    noDatesClosing: "இருப்பு மற்றும் விலை பத்தி தெரிஞ்சுக்கணும்.",
    shopInquiry: (shop: string) => `வணக்கம், ${business.name}-ல் ${shop} (கடை இடம்) பத்தி ஆர்வமா இருக்கேன்.`,
    shopClosing: "அளவு, வாடகை, இருப்பு பத்தி கொஞ்சம் விவரம் சொல்ல முடியுமா?",
  },
  hi: {
    bookRoom: (room: string) => `नमस्ते, मुझे ${business.name} में ${room} बुक करने में दिलचस्पी है।`,
    generalIntro: () => `नमस्ते, मुझे ${business.name} के बारे में जानकारी चाहिए।`,
    checkIn: (v: string) => `चेक-इन: ${v}`,
    checkOut: (v: string) => `चेक-आउट: ${v}`,
    guests: (v: string) => `व्यक्ति: ${v}`,
    withDatesClosing: "कृपया अवेलेबिलिटी और किराए के बारे में बताएं।",
    noDatesClosing: "मुझे अवेलेबिलिटी और किराए के बारे में जानना है।",
    shopInquiry: (shop: string) => `नमस्ते, मुझे ${business.name} में ${shop} (दुकान की जगह) में दिलचस्पी है।`,
    shopClosing: "साइज़, किराया और अवेलेबिलिटी के बारे में बता सकते हैं?",
  },
} satisfies Record<Language, unknown> as Record<
  Language,
  {
    bookRoom: (room: string) => string;
    generalIntro: () => string;
    checkIn: (v: string) => string;
    checkOut: (v: string) => string;
    guests: (v: string) => string;
    withDatesClosing: string;
    noDatesClosing: string;
    shopInquiry: (shop: string) => string;
    shopClosing: string;
  }
>;

function buildMessage(
  { roomName, checkIn, checkOut, guests }: BookingInquiry,
  language: Language
): string {
  const m = MESSAGES[language];
  const lines: string[] = [];

  lines.push(roomName ? m.bookRoom(roomName) : m.generalIntro());

  if (checkIn || checkOut || guests) {
    lines.push("");
    if (checkIn) lines.push(m.checkIn(checkIn));
    if (checkOut) lines.push(m.checkOut(checkOut));
    if (guests) lines.push(m.guests(guests));
    lines.push("");
    lines.push(m.withDatesClosing);
  } else {
    lines.push("");
    lines.push(m.noDatesClosing);
  }

  return lines.join("\n");
}

/** Builds a wa.me link with a pre-filled message. Returns "" if WhatsApp isn't configured. */
export function generateWhatsAppLink(inquiry: BookingInquiry = {}, language: Language = "en"): string {
  if (!isWhatsAppConfigured) return "";
  const text = encodeURIComponent(buildMessage(inquiry, language));
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

/** Builds a shop enquiry WhatsApp link. Returns "" if WhatsApp isn't configured. */
export function generateShopWhatsAppLink(shopName: string, language: Language = "en"): string {
  if (!isWhatsAppConfigured) return "";
  const m = MESSAGES[language];
  const text = encodeURIComponent(`${m.shopInquiry(shopName)}\n\n${m.shopClosing}`);
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

export function generateTelLink(): string {
  if (!isPhoneConfigured) return "";
  return `tel:${business.phone.replace(/\s+/g, "")}`;
}

export function generateMailLink(): string {
  if (!isEmailConfigured) return "";
  return `mailto:${business.email}`;
}
