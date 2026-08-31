import { Droplets, Wifi, Wind, Tv, ParkingSquare, Sparkles, ArrowUpDown, BedSingle } from "lucide-react";
import type { Room } from "../types";

/**
 * Update rates, descriptions and images here — RoomCard and the room detail
 * pages all read from this file, nothing is hardcoded in JSX.
 * Set a rate to `null` to show "Contact for rate" instead of a fake price.
 */
export const rooms: Room[] = [
  {
    id: "single",
    name: "Single Room",
    shortDescription: "A simple, comfortable room for one.",
    description:
      "A comfortable single-occupancy room, well suited for daily commuters, working professionals and anyone looking for a quiet, affordable stay close to Erode Railway Station.",
    beds: "1 bed",
    suitableFor: "1 guest",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: 4000,
    amenities: [
      { name: "Wi-Fi", icon: Wifi, enabled: true },
      { name: "24-Hour Hot Water", icon: Droplets, enabled: true },
      { name: "Cot & Mattress", icon: BedSingle, enabled: true },
      { name: "Air Conditioning", icon: Wind, enabled: false },
      { name: "TV", icon: Tv, enabled: false },
      { name: "Parking", icon: ParkingSquare, enabled: false },
      { name: "Housekeeping", icon: Sparkles, enabled: false },
      { name: "Lift", icon: ArrowUpDown, enabled: false, comingSoon: true },
    ],
    images: [],
  },
  {
    id: "double",
    name: "Double Room",
    shortDescription: "More space, ideal for two.",
    description:
      "A spacious double room with room for two, ideal for friends, couples or colleagues travelling together. Just a short walk from Erode Railway Station.",
    beds: "2 beds",
    suitableFor: "2 guests",
    dailyRate: null,
    weeklyRate: null,
    monthlyRate: 5000,
    amenities: [
      { name: "Wi-Fi", icon: Wifi, enabled: true },
      { name: "24-Hour Hot Water", icon: Droplets, enabled: true },
      { name: "Cot & Mattress", icon: BedSingle, enabled: true },
      { name: "Air Conditioning", icon: Wind, enabled: false },
      { name: "TV", icon: Tv, enabled: false },
      { name: "Parking", icon: ParkingSquare, enabled: false },
      { name: "Housekeeping", icon: Sparkles, enabled: false },
      { name: "Lift", icon: ArrowUpDown, enabled: false, comingSoon: true },
    ],
    images: [],
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
