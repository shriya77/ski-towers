import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { RoomCard } from "../components/RoomCard";
import { AvailabilityChecker } from "../components/AvailabilityChecker";
import { rooms } from "../data/rooms";

export function Rooms() {
  usePageMeta(
    "Rooms & Rates | Ski Towers Erode",
    "Single and double rooms at Ski Towers Erode, available for daily, weekly and monthly stays. View rates and book on WhatsApp."
  );

  return (
    <>
      <PageHeader
        eyebrow="Rooms & Rates"
        title="Rooms & Rates"
        description="Single and double rooms available for daily, weekly and monthly stays."
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
