import { Droplets, Wifi, Wind, Tv, ParkingSquare, Sparkles, ArrowUpDown, BedSingle } from "lucide-react";
import type { Room } from "../types";

/**
 * Update rates, descriptions and images here — RoomCard and the room detail
 * pages all read from this file, nothing is hardcoded in JSX.
 * Set a rate to `null` to show "Contact for rate" instead of a fake price.
 * Name/description fields are Localized (en/ta/hi) — update all three when
 * you change the English copy so the site stays consistent across languages.
 * `seo` holds longer, keyword-aware copy for the room detail page's <title>,
 * meta description and H1 — kept separate from `name` so cards/UI stay short.
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
    seo: {
      title: {
        en: "Single Rooms for Rent in Erode | SKI Towers",
        ta: "ஈரோட்டில் சிங்கிள் ரூம் வாடகைக்கு | SKI Towers",
        hi: "इरोड में सिंगल रूम किराए पर | SKI Towers",
      },
      description: {
        en: "Looking for an affordable single room in Erode? Explore monthly single occupancy rooms at SKI Towers near Erode Railway Station.",
        ta: "ஈரோட்டில் மலிவான சிங்கிள் ரூம் தேடுகிறீர்களா? ஈரோடு ரயில் நிலையம் அருகில் ஸ்கி டவர்ஸில் மாத சிங்கிள் ரூம்களைப் பாருங்கள்.",
        hi: "इरोड में किफ़ायती सिंगल रूम चाहिए? इरोड रेलवे स्टेशन के पास स्की टावर्स में मासिक सिंगल कमरे देखें।",
      },
      heading: {
        en: "Affordable Single Rooms for Monthly Rent in Erode",
        ta: "ஈரோட்டில் மாத வாடகைக்கு மலிவான சிங்கிள் ரூம்கள்",
        hi: "इरोड में मासिक किराए के लिए किफ़ायती सिंगल रूम",
      },
    },
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
      {
        src: "/photos/ski-towers-single-room-erode.jpeg",
        alt: "Single occupancy monthly room at SKI Towers in Erode, with seating area and window",
      },
      {
        src: "/photos/ski-towers-single-room-bed-erode.jpeg",
        alt: "Bed in a single room at SKI Towers, Erode",
      },
      {
        src: "/photos/ski-towers-single-room-storage-erode.jpeg",
        alt: "Storage cupboard in a single room at SKI Towers, Erode",
      },
      {
        src: "/photos/ski-towers-single-room-bedding-erode.jpeg",
        alt: "Bedding and linen in a single room at SKI Towers, Erode",
      },
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
    seo: {
      title: {
        en: "Double Rooms for Rent in Erode | SKI Towers",
        ta: "ஈரோட்டில் டபுள் ரூம் வாடகைக்கு | SKI Towers",
        hi: "इरोड में डबल रूम किराए पर | SKI Towers",
      },
      description: {
        en: "Find affordable double occupancy rooms in Erode at SKI Towers. Convenient monthly accommodation near Erode Railway Station.",
        ta: "ஈரோட்டில் மலிவான டபுள் ரூம் தேடுகிறீர்களா? ஈரோடு ரயில் நிலையம் அருகில் ஸ்கி டவர்ஸில் வசதியான மாத தங்குமிடம்.",
        hi: "इरोड में किफ़ायती डबल रूम चाहिए? इरोड रेलवे स्टेशन के पास स्की टावर्स में आरामदायक मासिक एकोमोडेशन।",
      },
      heading: {
        en: "Affordable Double Rooms for Monthly Rent in Erode",
        ta: "ஈரோட்டில் மாத வாடகைக்கு மலிவான டபுள் ரூம்கள்",
        hi: "इरोड में मासिक किराए के लिए किफ़ायती डबल रूम",
      },
    },
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
      {
        src: "/photos/ski-towers-double-room-erode.jpeg",
        alt: "Double occupancy room at SKI Towers in Erode",
      },
    ],
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
