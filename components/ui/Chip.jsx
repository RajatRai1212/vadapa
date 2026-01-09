export default function Chip({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-brand-card text-brand-muted border-brand-border",
    hot: "bg-brand-chili/10 text-brand-chili border-brand-chili/20",
    medium: "bg-brand-saffron/15 text-brand-chai border-brand-saffron/30",
    mild: "bg-brand-chutney/10 text-brand-chutney border-brand-chutney/20"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
        tones[tone] || tones.neutral
      }`}
    >
      {children}
    </span>
  );
}
