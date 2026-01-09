# City Vada Pav and Chai

Marketing + ordering + franchise lead site built with Next.js App Router.

## Requirements
- Node.js 18+ (Next.js 14)

## Local setup
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build and run (production)
```bash
npm run build
npm run start
```

## Environment
Copy `.env.example` to `.env.local` and set values:
- `NEXT_PUBLIC_SITE_URL` (used for metadata and absolute URLs)

## Deployment (recommended)
- Vercel: import repo, set env vars, deploy.
- Other Node host: install deps, run `npm run build`, then `npm run start`.

## Notes
- `data/leads.json` is generated at runtime for local dev only. Use a real
  database or Sheets/Airtable for production.
- See `documentation.md` for the full update checklist.
