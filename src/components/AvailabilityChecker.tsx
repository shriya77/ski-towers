import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { rooms } from "../data/rooms";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import type { Localized } from "../i18n/types";
import { Button } from "./ui/Button";

const inputClasses =
  "w-full rounded-xl border border-border bg-ivory px-4 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-accent";

export function AvailabilityChecker({ defaultRoomId }: { defaultRoomId?: string }) {
  const { language, t } = useLanguage();
  const [roomId, setRoomId] = useState(defaultRoomId ?? rooms[0]?.id ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const room = rooms.find((r) => r.id === roomId);
  const roomName = useLocalized(room?.name ?? rooms[0].name);
  const link = generateWhatsAppLink(
    {
      roomName,
      checkIn: checkIn || undefined,
      checkOut: checkOut || undefined,
      guests: guests || undefined,
    },
    language
  );

  return (
    <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
      <p className="text-sm font-semibold text-charcoal">{t("availability.title")}</p>
      <p className="mt-1 text-xs text-muted">{t("availability.description")}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">{t("availability.roomType")}</span>
          <select
            className={inputClasses}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          >
            {rooms.map((r) => (
              <RoomOption key={r.id} id={r.id} name={r.name} />
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">{t("availability.guests")}</span>
          <input
            type="number"
            min={1}
            placeholder={t("availability.guestsPlaceholder")}
            className={inputClasses}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">{t("availability.checkIn")}</span>
          <input
            type="date"
            className={inputClasses}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">{t("availability.checkOut")}</span>
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
            {t("availability.checkWhatsapp")}
          </Button>
        ) : (
          <Button href="/contact" className="w-full sm:w-auto">
            {t("availability.contactUs")}
          </Button>
        )}
      </div>
    </div>
  );
}

function RoomOption({ id, name }: { id: string; name: Localized }) {
  const label = useLocalized(name);
  return <option value={id}>{label}</option>;
}
