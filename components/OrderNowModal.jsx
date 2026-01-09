"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { X, Phone, Bike } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Button from "@/components/ui/Button";

const OrderModalCtx = createContext(null);

export function useOrderModal() {
  return useContext(OrderModalCtx);
}

export default function OrderNowModal({ children }) {
  const [open, setOpen] = useState(false);
  const hasSwiggy = Boolean(BRAND.swiggyUrl);
  const hasZomato = Boolean(BRAND.zomatoUrl);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <OrderModalCtx.Provider value={value}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute inset-0 bg-black/50"
            aria-label="Close order modal"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-brand-card border border-brand-border shadow-soft p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-brand-saffron/90">
                  Order now
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  Get it delivered hot & fresh
                </h3>
                <p className="mt-2 text-sm text-brand-muted">
                  Choose your preferred platform for fast delivery or pickup.
                </p>
              </div>
              <button
                className="rounded-lg p-2 hover:bg-brand-card"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              {hasSwiggy && (
                <Button
                  as="a"
                  href={BRAND.swiggyUrl}
                  variant="secondary"
                  className="w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Bike className="h-4 w-4" />
                    Swiggy Delivery
                  </span>
                  <span className="text-brand-muted">Open</span>
                </Button>
              )}

              {hasZomato && (
                <Button
                  as="a"
                  href={BRAND.zomatoUrl}
                  variant="secondary"
                  className="w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Bike className="h-4 w-4" />
                    Zomato Delivery
                  </span>
                  <span className="text-brand-muted">Open</span>
                </Button>
              )}

              <Button
                as="a"
                href={`tel:${BRAND.phone}`}
                variant="primary"
                className="w-full justify-between"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call to Order
                </span>
                <span className="text-brand-muted">{BRAND.phone}</span>
              </Button>
            </div>

          </div>
        </div>
      )}
    </OrderModalCtx.Provider>
  );
}
