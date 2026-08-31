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
import { Link } from "react-router-dom";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export function FeatureChecklist() {
  const { t } = useLanguage();

  const features = [
    { icon: TrainFront, label: t("features.nearStation"), to: "/near-erode-railway-station" },
    { icon: Users, label: t("features.occupancy") },
    { icon: BedSingle, label: t("features.cotMattress") },
    { icon: Droplets, label: t("features.hotWater") },
    { icon: ShieldCheck, label: t("features.safe") },
    { icon: IndianRupee, label: t("features.affordable") },
    { icon: Briefcase, label: t("features.suitableFor"), to: "/students-professionals" },
  ];

  return (
    <section className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t("features.eyebrow")} title={t("features.title")} />
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {features.map(({ icon: Icon, label, to }, i) => {
            const content = (
              <>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-charcoal-soft">{label}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
              </>
            );

            return (
              <Reveal key={label} delay={i * 40}>
                {to ? (
                  <Link
                    to={to}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 transition-colors hover:border-accent/40"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
