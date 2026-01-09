"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Section from "@/components/ui/Section";
import { TESTIMONIALS } from "@/data/testimonials";

const Stars = ({ n }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < n ? "text-brand-saffron" : "text-brand-border"}`}
        fill={i < n ? "currentColor" : "none"}
      />
    ))}
  </div>
);

export default function Testimonials() {
  const items = useMemo(() => TESTIMONIALS, []);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((x) => (x + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[idx];

  return (
    <Section
      eyebrow="Reviews"
      title="People don’t just like it — they repeat it"
      subtitle="Customer feedback highlights and early reviews."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-brand-muted">Average rating</div>
            <div className="text-lg font-semibold">4.7 ★</div>
          </div>
          <div className="mt-1 text-xs text-brand-subtle">
            Rating reflects early customer feedback and in-store responses.
          </div>

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
              >
                <Stars n={current.rating} />
                <p className="mt-3 text-lg leading-relaxed">
                  “{current.quote}”
                </p>
                <div className="mt-4 text-sm text-brand-muted">
                  — {current.name}, {current.location}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {items.slice(0, 6).map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIdx(i)}
                className={`h-2.5 w-2.5 rounded-full border ${
                  i === idx ? "bg-brand-saffron border-brand-saffron" : "bg-brand-card border-brand-border"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6 transition hover:-translate-y-1 hover:shadow-soft">
          <div className="text-lg font-semibold">Hygiene & quality promise</div>
          <p className="mt-2 text-sm text-brand-muted">
            We keep it clean, consistent, and fast — the kind of setup that scales into a trusted franchise.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-brand-muted">
            <div>• Fresh batches, made-to-order</div>
            <div>• Standardised prep for consistency</div>
            <div>• Packaging designed for delivery crunch</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
