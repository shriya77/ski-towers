import { business } from "../data/business";

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

function buildMessage({ roomName, checkIn, checkOut, guests }: BookingInquiry): string {
  const lines: string[] = [];

  if (roomName) {
    lines.push(`Hi, I'm interested in booking a ${roomName} at ${business.name}.`);
  } else {
    lines.push(`Hi, I'd like to know more about ${business.name}.`);
  }

  if (checkIn || checkOut || guests) {
    lines.push("");
    if (checkIn) lines.push(`Check-in: ${checkIn}`);
    if (checkOut) lines.push(`Check-out: ${checkOut}`);
    if (guests) lines.push(`Guests: ${guests}`);
    lines.push("");
    lines.push("Please let me know about availability and pricing.");
  } else {
    lines.push("");
    lines.push("I would like to know about availability and rates.");
  }

  return lines.join("\n");
}

/** Builds a wa.me link with a pre-filled message. Returns "" if WhatsApp isn't configured. */
export function generateWhatsAppLink(inquiry: BookingInquiry = {}): string {
  if (!isWhatsAppConfigured) return "";
  const text = encodeURIComponent(buildMessage(inquiry));
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

/** Builds a shop enquiry WhatsApp link. Returns "" if WhatsApp isn't configured. */
export function generateShopWhatsAppLink(shopName: string): string {
  if (!isWhatsAppConfigured) return "";
  const text = encodeURIComponent(
    `Hi, I'm interested in ${shopName} (commercial space) at ${business.name}.\n\nCould you share more details on size, rent and availability?`
  );
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
