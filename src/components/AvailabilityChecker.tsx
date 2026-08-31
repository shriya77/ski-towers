import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { rooms } from "../data/rooms";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Button } from "./ui/Button";

const inputClasses =
  "w-full rounded-xl border border-border bg-ivory px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-accent";

export function AvailabilityChecker({ defaultRoomId }: { defaultRoomId?: string }) {
  const [roomId, setRoomId] = useState(defaultRoomId ?? rooms[0]?.id ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const room = rooms.find((r) => r.id === roomId);
  const link = generateWhatsAppLink({
    roomName: room?.name,
    checkIn: checkIn || undefined,
    checkOut: checkOut || undefined,
    guests: guests || undefined,
  });

  return (
    <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
      <p className="text-sm font-semibold text-charcoal">Check availability</p>
      <p className="mt-1 text-xs text-muted">
        We don't hold live availability online — send us your dates and we'll confirm on WhatsApp.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Room type</span>
          <select
            className={inputClasses}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          >
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Guests</span>
          <input
            type="number"
            min={1}
            placeholder="e.g. 2"
            className={inputClasses}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Check-in</span>
          <input
            type="date"
            className={inputClasses}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">Check-out</span>
          <input
            type="date"
            className={inputClasses}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-5">
        {isWhatsAppConfigured ? (
          <Button href={link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" />
            Check Availability on WhatsApp
          </Button>
        ) : (
          <Button href="/contact" className="w-full sm:w-auto">
            Contact Us to Check Availability
          </Button>
        )}
      </div>
    </div>
  );
}
