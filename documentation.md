# City Vada Pav and Chai — Website Documentation (Next.js App Router)

This document explains the project in **simple words**, what is already built, how to run it, and **exactly where you must change things** (links, phone, images, brochure, lead storage).

---

## 1) What this project is

This is a **production-ready marketing + ordering + franchise lead website** for a street-food brand:

- Brand: **City Vada Pav and Chai**
- Focus: **Franchise lead generation first**, then **local orders**, then branding + store info
- Built using:
  - **Next.js 14+ (App Router)**
  - **JavaScript (not TypeScript)**
  - **Tailwind CSS** for styling
  - **Framer Motion** for subtle animations
  - **Lucide React** icons
- No paid assets: only **local placeholder SVG images** with clear TODO notes.

---

## 2) Goals (what the site is optimized for)

Priority order:

1. **Franchise leads**
   - Dedicated Franchise page
   - High conversion sections + form
   - WhatsApp CTA
   - Lead stored via API route (placeholder storage)

2. **Customer ordering**
   - “Order Now” modal available from nav
   - Buttons for Swiggy, Zomato, Call-to-order

3. **Brand trust**
   - Best sellers, combos, testimonials
   - Hygiene + consistency messaging
   - Premium design system

4. **Store info**
   - Contact page with address, timings, map button
   - Locations section designed for scaling

---

## 3) Pages included

### ✅ Home (`/`)
Includes:
- Hero section with brand messaging + CTAs (Order Now + Franchise)
- Press/Featured placeholder logos row
- Best sellers cards
- Why People Love Us
- Combos
- Delivery CTAs (Swiggy/Zomato/Call)
- Testimonials (Google rating style placeholder)
- Locations (scalable for future franchises)
- Franchise teaser banner
- Footer

### ✅ Menu (`/menu`)
- Categorized menu: Vada Pav, Chai, Snacks, Meals, Add-ons
- Each item includes:
  - Name, description
  - Veg indicator
  - Spice level badge
  - Price placeholder
  - Tags
- Add-ons chips (placeholder)

### ✅ Franchise (`/franchise`)
Designed to convert:
- Why franchise works
- Support provided
- Requirements
- Investment range placeholder
- Franchise enquiry form (Name, City, Phone, Email, Budget, Message)
- Success UI after submit
- Sticky WhatsApp button (floating globally)
- “Download brochure” button (placeholder PDF link)

### ✅ About (`/about`)
- Story + authenticity
- Quality promise
- Brand vibe photos placeholder

### ✅ Contact (`/contact`)
- Address, phone, email, hours
- Google Maps link button
- Contact form (via API route)
- WhatsApp encouragement

---

## 4) Folder structure (what lives where)

app/ -> all routes/pages (App Router)
layout.js -> global layout (Navbar + Footer + WhatsApp + Modal)
page.js -> Home
menu/page.js -> Menu
franchise/page.js -> Franchise
about/page.js -> About
contact/page.js -> Contact
api/
franchise/route.js -> stores franchise leads (POST)
contact/route.js -> handles contact form (POST)
globals.css -> Tailwind base + global theme

components/ -> reusable UI sections
Navbar.jsx
Footer.jsx
Hero.jsx
BestSellers.jsx
WhyLoveUs.jsx
Combos.jsx
DeliveryCTA.jsx
Testimonials.jsx
Locations.jsx
MenuGrid.jsx
FranchiseSections.jsx
FranchiseForm.jsx
ContactCard.jsx
ContactForm.jsx
OrderNowModal.jsx
WhatsAppFloat.jsx
JsonLd.jsx
PressLogos.jsx
ui/ -> small UI building blocks
Button.jsx
Chip.jsx
Container.jsx
Section.jsx
SectionReveal.jsx

data/ -> all local data models
menu.js
combos.js
testimonials.js
locations.js
(optional) leads.json -> created at runtime if server allows

lib/ -> small helpers and config
brand.js -> ✅ MOST IMPORTANT FILE to update
validators.js -> email/phone validation
leadsStore.js -> memory + json file storage (placeholder)

public/ -> images/logos/brochure
images/
logos/
franchise-brochure.pdf (to be added)


---

## 5) What I have built (in detail)

### A) Premium design system
- Dark premium background with warm brand glows (saffron/chili/chutney)
- Consistent spacing and max-width containers (`Container`, `Section`)
- Card-based layout with rounded corners + soft shadows
- Clear typography hierarchy + CTA styling

### B) Conversions built-in
- Sticky navbar with 2 main CTAs:
  - **Order Now** (opens modal)
  - **Franchise Enquiry** (goes to franchise page)
- **Floating WhatsApp** button on every page
- Franchise page has:
  - pitch section
  - support section
  - requirement section
  - form + success state

### C) Data-driven menu and testimonials
- Menu and testimonials are not hardcoded inside pages.
- They come from `data/menu.js` and `data/testimonials.js`.
- Easy to edit and scale.

### D) Lead capture with API route
- Franchise form submits to: `POST /api/franchise`
- Route validates input and stores lead using `lib/leadsStore.js`

Important note:
- `leadsStore.js` tries to store to memory + `data/leads.json`.
- On serverless hosting (Vercel), writing to disk might not persist.
- This is why it’s marked as a placeholder and should be replaced by Sheets/Airtable/CRM.

### E) SEO
- Global metadata in `app/layout.js`
- Page-specific metadata in each page file
- JSON-LD schema added via `components/JsonLd.jsx` (LocalBusiness/Restaurant style)

---

## 6) Setup & run locally

### Install
```bash
npm install

Run dev server
npm run dev


Open:
http://localhost:3000

Build for production
npm run build
npm start

7) IMPORTANT: What you MUST change before going live

This is the main checklist.

✅ 1) Update brand details (MOST IMPORTANT)

File: lib/brand.js

Change these:

phone

email

addressLine

hours

mapsUrl (real Google Maps location link)

swiggyUrl (real Swiggy store URL)

zomatoUrl (real Zomato store URL)

whatsappNumber (format: countrycode+number, no +)

instagramUrl (optional but recommended)

localBusiness.geo.lat/lng (exact coordinates if possible)

Why this matters:

This file controls almost all CTAs and contact info across the site.

If this file is correct, most of the site becomes correct automatically.

✅ 2) Replace placeholder domain in SEO metadata

File: app/layout.js

Change:

metadataBase: new URL("https://example.com")


To your real domain:

metadataBase: new URL("https://cityvadapavandchai.com")


This helps:

OpenGraph previews

SEO canonical URLs

Proper metadata generation

✅ 3) Replace images with real photos

Current images are placeholders:

public/images/hero-food.svg

public/images/placeholder-food.svg

Where they are used:

components/Hero.jsx uses hero-food.svg

Best sellers / About uses placeholder

What to do:

Add real images inside public/images/

store-front

food closeups (vada pav, garlic vada pav, misal, poha)

packaging

hygiene shots

crowd/ambience

Then replace the source in:

components/Hero.jsx

components/BestSellers.jsx

components/AboutStory.jsx

and anywhere else you want food-first visuals

✅ 4) Add real brochure PDF

Right now the button points to:
/franchise-brochure.pdf

You must add this file:

Place your PDF in: public/franchise-brochure.pdf

If you want a different name, change:
File: components/FranchiseSections.jsx

✅ 5) Replace lead storage (Franchise + Contact)

Currently:

Franchise leads stored in memory + tries to write data/leads.json

Contact form only returns OK (no storage)

Files involved:

app/api/franchise/route.js

lib/leadsStore.js

app/api/contact/route.js

Recommended upgrades (simple, not overkill):

Google Sheets (fast, cheap, simple)

Airtable (nice UI)

Email notification (send an email to owner)

CRM webhook (Zoho, HubSpot, etc.)

TODO markers are already inside these files.

8) How franchise lead flow works (simple)

User opens /franchise

Fills form

Form sends request:

POST /api/franchise

Server validates:

name, email, phone, city

Server saves:

addFranchiseLead() in lib/leadsStore.js

API returns success

UI shows success message

9) How “Order Now” works

Navbar has “Order Now”

Clicking it opens modal (no page change)

Modal shows:

Swiggy button

Zomato button

Call-to-order button

Files:

components/Navbar.jsx

components/OrderNowModal.jsx

lib/brand.js contains the links and phone number

10) Content changes (menu, testimonials, locations)
Menu edits

File: data/menu.js

Add/edit items, descriptions, prices

Assign category keys: vada_pav, chai, snacks, meals, addons

Testimonials edits

File: data/testimonials.js

Replace with real Google reviews later (keep short and punchy)

Locations edits

File: data/locations.js

Add new outlets as franchise grows

Home page automatically reflects

11) Accessibility + performance notes

What’s already done:

Semantic headings (H1 per page)

Button accessibility labels where needed

Fast loading: minimal JS, local assets, simple data files

Tailwind for consistent responsive UI

What you can improve later (optional):

Add real OpenGraph image

Add sitemap.xml and robots.txt

Add analytics (GA4) later

Add real review count and rating

12) Deployment notes
Best deployment

Vercel (recommended for Next.js)

or any Node hosting

Important:

Writing to data/leads.json may not persist on serverless.

If you deploy on Vercel, use:

Google Sheets / Airtable / Database

Do NOT rely on file writes

13) Quick “Go Live” checklist (copy-paste)

 Update lib/brand.js (phone/email/address/links/WhatsApp)

 Update domain in app/layout.js (metadataBase)

 Add real images (replace SVG placeholders)

 Add public/franchise-brochure.pdf

 Connect franchise leads to Google Sheets/Airtable/email

 Replace testimonials with real reviews

 Replace Swiggy/Zomato placeholder links

 Confirm timings and service area text

14) Where to edit most frequently (summary)
What you want to change	File
Phone/email/address/WhatsApp/Swiggy/Zomato	lib/brand.js
Menu items + prices	data/menu.js
Combos	data/combos.js
Testimonials	data/testimonials.js
Store locations	data/locations.js
Franchise brochure link	components/FranchiseSections.jsx
Franchise lead API logic	app/api/franchise/route.js
Lead storage method	lib/leadsStore.js
Contact form API logic	app/api/contact/route.js
SEO base domain	app/layout.js
15) Next improvements (optional but high impact)

If you want the site to feel 100% franchise-investor level:

Add real outlet photos (biggest trust factor)

Add real brochure with investment + support + sample ROI

Add real Google reviews (even 6–10)

Add unit economics snapshot section (simple numbers, not marketing fluff)

16) Notes / TODO reminders already in code

Throughout the project you will see TODO comments like:

TODO: Replace with real number

TODO: Replace Swiggy/Zomato links

TODO: Connect to Google Sheets/Airtable/Email

TODO: Replace placeholder images

These are intentionally placed where the change is needed.

If you want, I can also generate:

README.md for GitHub

A ready Google Sheets integration for /api/franchise (no overkill, just direct row insert)

Real SEO assets (sitemap + robots + OG image placeholder)
Just tell me which one you want next.