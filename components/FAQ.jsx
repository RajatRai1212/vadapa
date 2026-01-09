import Container from "@/components/ui/Container";

export default function FAQ({ title = "FAQs", subtitle, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="py-12">
      <Container>
        <header className="mb-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-brand-text">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-brand-muted">
              {subtitle}
            </p>
          )}
        </header>

        <dl className="grid gap-4">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft"
            >
              <dt className="text-base font-semibold text-brand-text">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm text-brand-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
