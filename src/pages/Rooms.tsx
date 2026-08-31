import { useLanguage } from "../i18n/LanguageContext";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { RoomCard } from "../components/RoomCard";
import { AvailabilityChecker } from "../components/AvailabilityChecker";
import { rooms } from "../data/rooms";

export function Rooms() {
  const { t } = useLanguage();

  useSEO({
    title: t("rooms.pageTitle"),
    description: t("rooms.pageDescription"),
    path: "/rooms",
  });

  return (
    <>
      <PageHeader
        eyebrow={t("rooms.eyebrow")}
        title={t("rooms.pageH1")}
        description={t("rooms.description")}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {rooms.map((room, i) => (
              <Reveal key={room.id} delay={i * 80}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-2xl">
          <Reveal>
            <AvailabilityChecker />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
