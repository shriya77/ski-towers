import { rooms } from "../data/rooms";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { RoomCard } from "./RoomCard";

export function RoomSection() {
  const { t } = useLanguage();

  return (
    <section id="rooms" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("rooms.eyebrow")}
            title={t("rooms.title")}
            description={t("rooms.description")}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 80}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
