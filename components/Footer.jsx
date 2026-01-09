import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { BRAND } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-card/70">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/images/vadapav.svg" alt={`${BRAND.name} mark`} width={40} height={40} />
              <div className="text-lg font-semibold">{BRAND.name}</div>
            </div>
            <p className="mt-3 text-sm text-brand-muted max-w-sm">
              {BRAND.taglineSecondary} Premium street-food experience — built for
              repeat cravings and franchise-ready operations.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-brand-text">Quick Links</div>
            <nav className="mt-3 grid gap-2 text-sm text-brand-muted" aria-label="Footer">
              <Link href="/menu" className="hover:text-brand-text">Menu</Link>
              <Link href="/franchise" className="hover:text-brand-text">Franchise</Link>
              <Link href="/about" className="hover:text-brand-text">About</Link>
              <Link href="/contact" className="hover:text-brand-text">Contact</Link>
            </nav>
          </div>

          <div>
            <div className="text-sm font-semibold text-brand-text">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-brand-muted">
              <div>{BRAND.addressLine}</div>
              <a className="hover:text-brand-text" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
              <a className="hover:text-brand-text" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <div className="text-xs text-brand-subtle">{BRAND.hours}</div>
            </div>
            <div className="mt-4 text-xs text-brand-subtle">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
