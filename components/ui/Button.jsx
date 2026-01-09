export default function Button({
  as: Comp = "button",
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-saffron/40 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-chili to-brand-saffron text-white shadow-soft hover:-translate-y-0.5 hover:brightness-105",
    secondary:
      "bg-brand-card text-brand-text border border-brand-border hover:-translate-y-0.5 hover:shadow-soft",
    ghost:
      "bg-transparent text-brand-text border border-brand-border hover:bg-brand-card"
  };

  const common = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (Comp === "a" || href) {
    return (
      <a className={common} href={href} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={common} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
