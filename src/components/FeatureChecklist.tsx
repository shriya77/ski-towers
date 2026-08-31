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
import { useLanguage } from "../i18n/LanguageContext";

export function FeatureChecklist() {
  const { t } = useLanguage();

  const features = [
    { icon: TrainFront, label: t("features.nearStation") },
    { icon: Users, label: t("features.occupancy") },
    { icon: BedSingle, label: t("features.cotMattress") },
    { icon: Droplets, label: t("features.hotWater") },
    { icon: ShieldCheck, label: t("features.safe") },
    { icon: IndianRupee, label: t("features.affordable") },
    { icon: Briefcase, label: t("features.suitableFor") },
  ];

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t("features.eyebrow")} title={t("features.title")} />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {features.map(({ icon: Icon, label }, i) => (
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
