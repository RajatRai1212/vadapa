import { BRAND } from "@/lib/brand";

export default function WhatsAppFloat() {
  const wa = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I want to order / ask about franchise for City Vada Pav and Chai."
  )}`;

  return (
    <a
      href={wa}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-chutney px-4 py-3 text-sm font-semibold text-white shadow-soft hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-chutney/40"
      aria-label="Chat on WhatsApp"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
      WhatsApp
    </a>
  );
}
