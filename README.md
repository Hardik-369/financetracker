# Finance Tracker

A privacy-first, behavioral-finance intelligence web app.

## Project Docs
- Product and UX: [design.md](./design.md)
- Engineering and delivery: [development.md](./development.md)

## MVP status
This repository now contains an MVP scaffold aligned to the specifications in the two documents:
- App Router pages for dashboard and transaction entry
- API route handlers for auth, transactions, and insights
- Core finance algorithms for mood scoring, impulse detection, and projection
- Prisma schema for core entities (`User`, `Transaction`, `InsightSnapshot`)

## Quick start
1. Install dependencies (Next.js, Prisma, Zod, etc.)
2. Configure `.env`
3. Run migrations
4. Start the app

See [development.md](./development.md) for full technical details.
