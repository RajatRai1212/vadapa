import Container from "./Container";

const slugify = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  const fallbackId = title ? slugify(title) : undefined;
  const sectionId = id || fallbackId;
  const headingId = title ? `${sectionId || fallbackId}-title` : undefined;

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={`py-14 sm:py-18 ${className}`}
    >
      <Container>
        {(eyebrow || title || subtitle) && (
          <header className="mb-8 max-w-3xl">
            {eyebrow && (
              <p className="text-sm tracking-wide uppercase text-brand-saffron/90">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="mt-2 text-3xl sm:text-4xl font-semibold text-brand-text"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-brand-muted">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
