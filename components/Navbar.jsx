"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { BRAND } from "@/lib/brand";
import { useOrderModal } from "@/components/OrderNowModal";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/franchise", label: "Franchise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar({ brandFontClass = "" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const modal = useOrderModal();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-bg/80 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/chai.svg" alt={`${BRAND.name} logo`} width={36} height={36} />
            <div className="leading-tight">
              <div className={`text-lg font-semibold ${brandFontClass}`}>
                {BRAND.name}
              </div>
              <div className="text-xs text-brand-muted">
                A taste of Mumbai in Mohali
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active ? "bg-brand-card text-brand-text" : "text-brand-muted hover:text-brand-text hover:bg-brand-card"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={() => modal?.setOpen(true)}
              aria-label="Order now"
            >
              Order Now
            </Button>
            <Button as="a" href="/franchise" variant="primary">
              Franchise Enquiry <Sparkles className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="lg:hidden rounded-xl border border-brand-border bg-brand-card/70 p-2 hover:bg-brand-card"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-2xl border border-brand-border bg-brand-card p-3 shadow-soft">
            <nav className="grid gap-1" aria-label="Mobile">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className="rounded-xl px-3 py-2 text-sm text-brand-muted hover:text-brand-text hover:bg-brand-card"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid gap-2">
              <Button variant="secondary" onClick={() => { setOpen(false); modal?.setOpen(true); }}>
                Order Now
              </Button>
              <Button as="a" href="/franchise" variant="primary" onClick={() => setOpen(false)}>
                Franchise Enquiry
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
