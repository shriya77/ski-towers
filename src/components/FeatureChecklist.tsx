import {
  TrainFront,
  Users,
  BedSingle,
  Droplets,
  ShieldCheck,
  IndianRupee,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const FEATURES = [
  { icon: TrainFront, label: "Near Erode Railway Station" },
  { icon: Users, label: "Single & Double Occupancy" },
  { icon: BedSingle, label: "Cot & Mattress Provided" },
  { icon: Droplets, label: "24-Hour Hot Water" },
  { icon: ShieldCheck, label: "Clean & Safe Environment" },
  { icon: IndianRupee, label: "Affordable Monthly Rent" },
  { icon: Briefcase, label: "Suitable for Working Professionals & Students" },
];

export function FeatureChecklist() {
  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why Ski Towers" title="Why guests choose us" />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 40}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-charcoal-soft">{label}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
