"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { isValidEmail, isValidPhoneIN } from "@/lib/validators";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    if (!payload.name || String(payload.name).trim().length < 2) return setErr("Enter your name.");
    if (!isValidPhoneIN(payload.phone)) return setErr("Enter a valid phone number.");
    if (!isValidEmail(payload.email)) return setErr("Enter a valid email.");

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed to send message.");
      setDone(true);
      e.currentTarget.reset();
    } catch (ex) {
      setErr(ex.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      eyebrow="Message"
      title="Send us a quick message"
      subtitle="We reply as fast as possible during working hours."
    >
      <SectionReveal>
        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft max-w-3xl">
          {!done ? (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-brand-muted">Name</label>
                <input
                  name="name"
                  autoComplete="name"
                  className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-sm text-brand-muted">Phone</label>
                  <input
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-brand-muted">Email</label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm text-brand-muted">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                  placeholder="Type your message..."
                  required
                />
              </div>

              {err && (
                <div
                  className="rounded-xl border border-brand-chili/20 bg-brand-chili/10 px-4 py-3 text-sm text-brand-chili"
                  role="alert"
                  aria-live="polite"
                >
                  {err}
                </div>
              )}

              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>
          ) : (
            <div>
              <div className="text-2xl font-semibold">Message sent ✅</div>
              <p className="mt-2 text-brand-muted">
                Thanks! We’ll get back to you shortly.
              </p>
              <Button className="mt-4" variant="secondary" onClick={() => setDone(false)}>
                Send another message
              </Button>
            </div>
          )}
        </div>
      </SectionReveal>
    </Section>
  );
}
