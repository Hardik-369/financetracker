# Finance Tracker

A privacy-first, behavioral-finance intelligence web app.

## Project Docs
- Product and UX: [design.md](./design.md)
- Engineering and delivery: [development.md](./development.md)

## MVP status
This repository contains an MVP scaffold aligned to the specification docs:
- App Router pages for dashboard and transaction entry
- API route handlers for auth, transactions, and insights
- Core finance algorithms for mood scoring, impulse detection, and projection
- Prisma schema for core entities (`User`, `Transaction`, `InsightSnapshot`)

## Environment values
Copy `.env.example` to `.env.local` for local development.

Required variables:
- `DATABASE_URL` (PostgreSQL connection string)
- `JWT_SECRET` (long random secret used for signing auth tokens)
- `NODE_ENV` (`development` locally, `production` on Vercel)

## Local quick start
1. Install dependencies
2. Create env file
   - `cp .env.example .env.local`
3. Run migrations
4. Start the app

## Vercel deployment
This repository includes `vercel.json` and is ready for deployment.

### Option A: Vercel dashboard
1. Import the Git repository in Vercel.
2. Set these project environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NODE_ENV=production`
3. Deploy.

### Option B: Vercel CLI
```bash
vercel login
vercel link
vercel env add DATABASE_URL production
vercel env add JWT_SECRET production
vercel env add NODE_ENV production
vercel --prod
```

## Notes
If Prisma is used at runtime/build time, ensure `DATABASE_URL` points to a reachable production database.
