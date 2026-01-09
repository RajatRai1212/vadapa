"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { BRAND } from "@/lib/brand";
import { useOrderModal } from "@/components/OrderNowModal";

export default function Hero() {
  const modal = useOrderModal();

  return (
    <section className="relative overflow-hidden">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-card px-3 py-1 text-xs text-brand-muted shadow-soft">
              <Sparkles className="h-4 w-4 text-brand-saffron" />
              Premium street-food brand • Franchise-ready
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-brand-chili via-brand-saffron to-brand-chutney bg-clip-text text-transparent">
                {BRAND.taglinePrimary}
              </span>
              <span className="block mt-3 text-brand-muted">
                Street-style comfort, served hot — with a premium, hygienic vibe.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-brand-muted max-w-xl">
              Authentic Mumbai-style <b>Vada Pav</b>, crunchy <b>Chura</b>, hearty <b>Misal</b>,
              and kadak <b>Cutting Chai</b>. Perfect for delivery. Perfect for repeat customers.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" onClick={() => modal?.setOpen(true)}>
                Order Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" as="a" href="/franchise">
                Franchise Enquiry <Sparkles className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-xl">
              {[
                { k: "4.7★", v: "Customer rating highlight" },
                { k: "Hot & Fresh", v: "Made-to-order vadas & chura" },
                { k: "Pocket-friendly", v: "Premium taste, fair pricing" },
                { k: "Delivery Ready", v: "Swiggy & Zomato" }
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-brand-border bg-brand-card/70 p-4 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="text-lg font-semibold text-brand-text">{x.k}</div>
                  <div className="mt-1 text-xs text-brand-muted">{x.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-brand-border bg-brand-card shadow-soft overflow-hidden float-slow">
              <Image
                src="/images/hero.png"
                alt="Vada pav and chai hero"
                width={900}
                height={700}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-brand-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-saffron shadow-soft">
                cvp
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Fresh Vada", "Fiery Garlic", "Sweet + Spicy Chutneys", "Crunchy Chura"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand-border bg-brand-card/70 px-3 py-1 text-xs text-brand-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs text-brand-subtle">
              Authentic brand visuals featuring our signature vada pav and chai.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
