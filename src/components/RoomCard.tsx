import { MessageCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Room } from "../types";
import { formatPrice } from "../lib/utils";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Button } from "./ui/Button";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function RoomCard({ room }: { room: Room }) {
  const whatsappLink = generateWhatsAppLink({ roomName: room.name });
  const image = room.images[0];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      <Link to={`/rooms/${room.id}`} className="relative block aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage label={room.name} />
        )}
        {room.monthlyRate !== null && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-charcoal shadow-sm backdrop-blur-sm">
            From {formatPrice(room.monthlyRate)}/mo
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link to={`/rooms/${room.id}`}>
          <h3 className="text-xl transition-colors group-hover:text-accent">{room.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted">{room.shortDescription}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-charcoal-soft">
          <span>{room.beds}</span>
          {room.suitableFor && (
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {room.suitableFor}
            </span>
          )}
        </div>

        <div className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm">
          <RateRow label="Daily" value={room.dailyRate} />
          <RateRow label="Weekly" value={room.weeklyRate} />
          <RateRow label="Monthly" value={room.monthlyRate} emphasize />
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button href={`/rooms/${room.id}`} variant="outline" size="md" className="flex-1">
            View Details
          </Button>
          {isWhatsAppConfigured ? (
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="flex-1"
            >
              <MessageCircle className="h-4 w-4" />
              Book this Room
            </Button>
          ) : (
            <Button href="/contact" size="md" className="flex-1">
              Book this Room
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function RateRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: number | null;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className={emphasize ? "font-bold text-charcoal" : "font-medium text-charcoal-soft"}>
        {formatPrice(value)}
      </span>
    </div>
  );
}
