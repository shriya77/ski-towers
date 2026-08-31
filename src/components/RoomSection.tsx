import { rooms } from "../data/rooms";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { RoomCard } from "./RoomCard";

export function RoomSection() {
  return (
    <section id="rooms" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Rooms & Rates"
            title="Choose a single or double room"
            description="Simple, comfortable rooms for daily, weekly and monthly stays. Message us on WhatsApp to check availability."
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
