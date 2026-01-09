import Container from "@/components/ui/Container";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="pt-12 pb-6">
      <Container>
        {eyebrow && (
          <p className="text-sm tracking-wide uppercase text-brand-saffron/90">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-brand-text">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-base sm:text-lg text-brand-muted">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
