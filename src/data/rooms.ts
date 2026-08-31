import { Droplets, Wifi, Wind, Tv, ParkingSquare, Sparkles, ArrowUpDown, BedSingle } from "lucide-react";
import type { Room } from "../types";

/**
 * Update rates, descriptions and images here — RoomCard and the room detail
 * pages all read from this file, nothing is hardcoded in JSX.
 * Set a rate to `null` to show "Contact for rate" instead of a fake price.
 * Name/description fields are Localized (en/ta/hi) — update all three when
 * you change the English copy so the site stays consistent across languages.
 */
export const rooms: Room[] = [
  {
    id: "single",
    name: { en: "Single Room", ta: "சிங்கிள் ரூம்", hi: "सिंगल रूम" },
    shortDescription: {
      en: "A simple, comfortable room for one.",
      ta: "ஒருவருக்கு ஏற்ற எளிய, வசதியான ரூம்.",
      hi: "एक व्यक्ति के लिए सिंपल, आरामदायक कमरा।",
    },
    description: {
      en: "A comfortable single-occupancy room, well suited for daily commuters, working professionals and anyone looking for a quiet, affordable stay close to Erode Railway Station.",
      ta: "தினமும் பயணிப்பவர்கள், வேலைக்குச் செல்பவர்கள், ஈரோடு ரயில் நிலையத்திற்கு அருகில் அமைதியாக, மலிவாக தங்க விரும்புவோருக்கு ஏற்ற சிங்கிள் ரூம்.",
      hi: "रोज़ आने-जाने वालों, वर्किंग प्रोफेशनल्स और इरोड रेलवे स्टेशन के पास शांत, किफ़ायती जगह ढूंढने वालों के लिए बढ़िया सिंगल कमरा।",
    },
    beds: { en: "1 bed", ta: "1 படுக்கை", hi: "1 बेड" },
    suitableFor: { en: "1 guest", ta: "1 பேர்", hi: "1 व्यक्ति" },
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: 4000,
    amenities: [
      { id: "wifi", name: { en: "Wi-Fi", ta: "வைஃபை", hi: "वाई-फाई" }, icon: Wifi, enabled: true },
      {
        id: "hotWater",
        name: { en: "24-Hour Hot Water", ta: "24 மணி நேர சூடு தண்ணீர்", hi: "24 घंटे गर्म पानी" },
        icon: Droplets,
        enabled: true,
      },
      {
        id: "cotMattress",
        name: { en: "Cot & Mattress", ta: "காட் & மெத்தை", hi: "कॉट और गद्दा" },
        icon: BedSingle,
        enabled: true,
      },
      { id: "ac", name: { en: "Air Conditioning", ta: "ஏசி", hi: "एसी" }, icon: Wind, enabled: false },
      { id: "tv", name: { en: "TV", ta: "டிவி", hi: "टीवी" }, icon: Tv, enabled: false },
      { id: "parking", name: { en: "Parking", ta: "பார்க்கிங்", hi: "पार्किंग" }, icon: ParkingSquare, enabled: false },
      {
        id: "housekeeping",
        name: { en: "Housekeeping", ta: "சுத்தம் செய்யும் சேவை", hi: "सफ़ाई सेवा" },
        icon: Sparkles,
        enabled: false,
      },
      {
        id: "lift",
        name: { en: "Lift", ta: "லிஃப்ட்", hi: "लिफ्ट" },
        icon: ArrowUpDown,
        enabled: false,
        comingSoon: true,
      },
    ],
    images: [
      { src: "/photos/room-single-1.jpeg", alt: "Single room at Ski Towers Erode with seating and window" },
      { src: "/photos/room-single-2.jpeg", alt: "Single bed in a room at Ski Towers Erode" },
      { src: "/photos/room-single-3.jpeg", alt: "Storage cupboard in a single room at Ski Towers Erode" },
      { src: "/photos/room-single-4.jpeg", alt: "Bedding in a single room at Ski Towers Erode" },
    ],
  },
  {
    id: "double",
    name: { en: "Double Room", ta: "டபுள் ரூம்", hi: "डबल रूम" },
    shortDescription: {
      en: "More space, ideal for two.",
      ta: "இருவருக்கு ஏற்ற விசாலமான இடம்.",
      hi: "दो लोगों के लिए ज़्यादा जगह।",
    },
    description: {
      en: "A spacious double room with room for two, ideal for friends, couples or colleagues travelling together. Just a short walk from Erode Railway Station.",
      ta: "நண்பர்கள், ஜோடிகள் அல்லது சக ஊழியர்கள் ஒன்றாக தங்க ஏற்ற விசாலமான டபுள் ரூம். ஈரோடு ரயில் நிலையத்திலிருந்து சில நிமிட நடையில் தான்.",
      hi: "दोस्तों, कपल्स या साथ रहने वाले कलीग्स के लिए बढ़िया, बड़ा डबल रूम। इरोड रेलवे स्टेशन से बस कुछ ही कदम की दूरी पर।",
    },
    beds: { en: "2 beds", ta: "2 படுக்கைகள்", hi: "2 बेड" },
    suitableFor: { en: "2 guests", ta: "2 பேர்", hi: "2 व्यक्ति" },
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: 5000,
    amenities: [
      { id: "wifi", name: { en: "Wi-Fi", ta: "வைஃபை", hi: "वाई-फाई" }, icon: Wifi, enabled: true },
      {
        id: "hotWater",
        name: { en: "24-Hour Hot Water", ta: "24 மணி நேர சூடு தண்ணீர்", hi: "24 घंटे गर्म पानी" },
        icon: Droplets,
        enabled: true,
      },
      {
        id: "cotMattress",
        name: { en: "Cot & Mattress", ta: "காட் & மெத்தை", hi: "कॉट और गद्दा" },
        icon: BedSingle,
        enabled: true,
      },
      { id: "ac", name: { en: "Air Conditioning", ta: "ஏசி", hi: "एसी" }, icon: Wind, enabled: false },
      { id: "tv", name: { en: "TV", ta: "டிவி", hi: "टीवी" }, icon: Tv, enabled: false },
      { id: "parking", name: { en: "Parking", ta: "பார்க்கிங்", hi: "पार्किंग" }, icon: ParkingSquare, enabled: false },
      {
        id: "housekeeping",
        name: { en: "Housekeeping", ta: "சுத்தம் செய்யும் சேவை", hi: "सफ़ाई सेवा" },
        icon: Sparkles,
        enabled: false,
      },
      {
        id: "lift",
        name: { en: "Lift", ta: "லிஃப்ட்", hi: "लिफ्ट" },
        icon: ArrowUpDown,
        enabled: false,
        comingSoon: true,
      },
    ],
    images: [{ src: "/photos/room-double-1.jpeg", alt: "Double bed in a room at Ski Towers Erode" }],
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
