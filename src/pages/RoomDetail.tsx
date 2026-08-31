import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";
import { getRoomById } from "../data/rooms";
import { usePageMeta } from "../hooks/usePageMeta";
import { formatPrice } from "../lib/utils";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import { EMPTY_LOCALIZED } from "../i18n/types";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { AmenityGrid } from "../components/AmenityGrid";
import { AvailabilityChecker } from "../components/AvailabilityChecker";

export function RoomDetail() {
  const { roomId } = useParams();
  const room = roomId ? getRoomById(roomId) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const { language, t } = useLanguage();

  const name = useLocalized(room?.name ?? EMPTY_LOCALIZED);
  const description = useLocalized(room?.description ?? EMPTY_LOCALIZED);
  const beds = useLocalized(room?.beds ?? EMPTY_LOCALIZED);
  const suitableForText = useLocalized(room?.suitableFor ?? EMPTY_LOCALIZED);

  usePageMeta(
    room ? `${name} | Ski Towers Erode` : "Room | Ski Towers Erode",
    room ? `${description} View rates and book on WhatsApp.` : undefined
  );

  if (!room) return <Navigate to="/rooms" replace />;

  const suitableFor = room.suitableFor ? suitableForText : null;
  const whatsappLink = generateWhatsAppLink({ roomName: name }, language);
  const images = room.images;

  return (
    <>
      <section className="pt-24 sm:pt-28">
        <Container>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("rooms.backToRooms")}
          </Link>
        </Container>
      </section>

      <section className="pb-16 pt-6 sm:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                {images.length > 0 ? (
                  <img
                    src={images[activeImage].src}
                    alt={images[activeImage].alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderImage label={name} />
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-3">
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show photo ${i + 1} of ${name}`}
                      className={`aspect-square overflow-hidden rounded-lg ring-2 transition-all ${
                        i === activeImage ? "ring-accent" : "ring-transparent opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-3xl sm:text-4xl">{name}</h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-charcoal-soft">
                <span>{beds}</span>
                {suitableFor && (
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {suitableFor}
                  </span>
                )}
              </div>

              <p className="mt-4 leading-relaxed text-muted">{description}</p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="grid grid-cols-3 divide-x divide-border bg-white text-center">
                  <RateBlock label={t("rooms.daily")} value={room.dailyRate} />
                  <RateBlock label={t("rooms.weekly")} value={room.weeklyRate} />
                  <RateBlock label={t("rooms.monthly")} value={room.monthlyRate} emphasize />
                </div>
              </div>

              {room.amenities.some((a) => a.enabled) && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-charcoal">{t("rooms.amenities")}</p>
                  <AmenityGrid amenities={room.amenities} />
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {isWhatsAppConfigured ? (
                  <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size="lg">
                    <MessageCircle className="h-5 w-5" />
                    {t("rooms.askAvailability")}
                  </Button>
                ) : (
                  <Button href="/contact" size="lg">
                    {t("rooms.askAvailability")}
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-2xl">
          <Reveal>
            <AvailabilityChecker defaultRoomId={room.id} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function RateBlock({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: number | null;
  emphasize?: boolean;
}) {
  const { t } = useLanguage();
  const price = formatPrice(value);
  return (
    <div className="px-3 py-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className={emphasize ? "mt-1 font-bold text-accent" : "mt-1 font-semibold text-charcoal-soft"}>
        {price ?? t("rooms.contactForRate")}
      </p>
    </div>
  );
}
