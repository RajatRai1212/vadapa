import "./globals.css";
import { DM_Sans, Newsreader } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import OrderNowModal from "../components/OrderNowModal";

import { BRAND } from "@/lib/brand";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});

export const metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} — ${BRAND.taglinePrimary}`,
    template: `%s — ${BRAND.name}`
  },
  description: BRAND.description,
  openGraph: {
    title: `${BRAND.name} — ${BRAND.taglinePrimary}`,
    description: BRAND.description,
    type: "website",
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    locale: "en_IN",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} hero`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.taglinePrimary}`,
    description: BRAND.description,
    images: ["/images/hero.png"]
  },
  icons: {
    icon: BRAND.logoPath
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF4E6"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${dmSans.variable} ${newsreader.variable} antialiased`}>
        {/* warm, vibrant backdrop */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-brand-bg" />
          <div className="absolute inset-0 hero-bg" />
          <div className="absolute -top-48 right-[-160px] h-[520px] w-[520px] rounded-full bg-brand-saffron/25 blur-3xl" />
          <div className="absolute top-[15%] left-[-220px] h-[520px] w-[520px] rounded-full bg-brand-chili/20 blur-3xl" />
          <div className="absolute bottom-[-240px] left-1/2 h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-brand-chutney/15 blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-size:18px_18px] bg-[radial-gradient(circle_at_1px_1px,rgba(120,72,34,0.18)_1px,transparent_0)]" />
        </div>

        <div className="min-h-screen flex flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 rounded-lg bg-brand-card px-4 py-2 text-sm text-brand-text shadow-soft"
          >
            Skip to content
          </a>
          <Navbar brandFontClass={newsreader.className} />
          <OrderNowModal />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        <WhatsAppFloat />
      </body>
    </html>
  );
}
