import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[70svh] items-center pt-16">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl">{t("notFound.title")}</h1>
        <p className="mt-3 max-w-sm text-muted">{t("notFound.description")}</p>
        <Button href="/" className="mt-6">
          {t("notFound.backHome")}
        </Button>
        <Link to="/rooms" className="mt-3 text-sm font-medium text-muted hover:text-accent">
          {t("notFound.viewRooms")}
        </Link>
      </Container>
    </section>
  );
}
