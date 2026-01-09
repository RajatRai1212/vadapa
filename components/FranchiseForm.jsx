"use client";

import { useMemo, useState } from "react";
import Section from "@/components/ui/Section";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { isValidEmail, isValidPhoneIN } from "@/lib/validators";
import { BRAND } from "@/lib/brand";

const budgets = [
  "₹5–10 lakhs",
  "₹10–20 lakhs",
  "₹20–35 lakhs",
  "₹35+ lakhs"
];

export default function FranchiseForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const wa = useMemo(
    () =>
      `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
        "Hi! I want franchise details for City Vada Pav and Chai."
      )}`,
    []
  );

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    if (!payload.name || String(payload.name).trim().length < 2) {
      setErr("Please enter your name.");
      return;
    }
    if (!isValidPhoneIN(payload.phone)) {
      setErr("Please enter a valid phone number.");
      return;
    }
    if (!isValidEmail(payload.email)) {
      setErr("Please enter a valid email.");
      return;
    }
    if (!payload.city) {
      setErr("Please enter your city.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something went wrong.");
      }

      setDone(true);
      e.currentTarget.reset();
    } catch (ex) {
      setErr(ex.message || "Failed to submit.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      id="franchise-form"
      eyebrow="Franchise Enquiry"
      title="Request franchise details"
      subtitle="Tell us a bit. We’ll share the investment, model, and next steps."
    >
      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-soft">
            {!done ? (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-brand-muted">Full name</label>
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
                    <label className="text-sm text-brand-muted">City</label>
                    <input
                      name="city"
                      autoComplete="address-level2"
                      className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                      placeholder="e.g., Chandigarh"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm text-brand-muted">Budget range</label>
                    <select
                      name="budget"
                      className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                      defaultValue={budgets[1]}
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm text-brand-muted">Phone</label>
                    <input
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                      placeholder="10-digit phone"
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
                  <label className="text-sm text-brand-muted">Message (optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-saffron/30"
                    placeholder="Tell us your preferred area, timeline, or questions..."
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                  <Button as="a" href={wa} variant="secondary">
                    WhatsApp Instead
                  </Button>
                </div>

              </form>
            ) : (
              <div>
                <div className="text-2xl font-semibold">Enquiry received ✅</div>
                <p className="mt-2 text-brand-muted">
                  We’ll contact you shortly with investment details and next steps.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button as="a" href={wa} variant="primary">
                    WhatsApp Now
                  </Button>
                  <Button variant="secondary" onClick={() => setDone(false)}>
                    Submit another enquiry
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-card/70 p-6">
            <div className="text-lg font-semibold">What happens next?</div>
            <div className="mt-3 grid gap-3 text-sm text-brand-muted">
              <div>1) We validate your city and preferred area</div>
              <div>2) We share the investment range + model details</div>
              <div>3) Quick call to assess fit (space, budget, timeline)</div>
              <div>4) Location finalisation + onboarding plan</div>
            </div>
            <div className="mt-5 rounded-xl border border-brand-border bg-brand-card p-4">
              <div className="text-sm font-semibold">Franchise-ready messaging</div>
              <p className="mt-2 text-sm text-brand-muted">
                Built for speed, hygiene, and consistency — the three things franchise buyers
                care about after the taste.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
