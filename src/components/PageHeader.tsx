import { Container } from "./ui/Container";

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border bg-ivory-soft pb-10 pt-32 sm:pb-14 sm:pt-40">
      <Container>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        )}
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{description}</p>}
      </Container>
    </section>
  );
}
