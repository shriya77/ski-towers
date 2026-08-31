import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-16">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
        <h1 className="mt-2 text-3xl sm:text-4xl">Page not found</h1>
        <p className="mt-3 max-w-sm text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button href="/" className="mt-6">
          Back to Home
        </Button>
        <Link to="/rooms" className="mt-3 text-sm font-medium text-muted hover:text-accent">
          View Rooms & Rates
        </Link>
      </Container>
    </section>
  );
}
