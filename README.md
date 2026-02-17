# Finance Tracker

A privacy-first, behavioral-finance intelligence web app focused on helping users understand **why** they spend.

## What this repo contains
- Product direction and UX goals in [`design.md`](./design.md)
- Technical architecture and delivery plan in [`development.md`](./development.md)
- A Next.js App Router MVP scaffold (pages + API routes + algorithms + Prisma schema)

## Runtime configuration
Create a local env file from the template:

```bash
cp .env.example .env.local
```

Required variables:
- `DATABASE_URL`: PostgreSQL connection URL
- `JWT_SECRET`: long random secret used for token signing
- `NODE_ENV`: `development` locally, `production` on Vercel

See `.env.example` for sample values.

## Local development
1. Install dependencies
   ```bash
   npm install
   ```
2. Configure env vars
   ```bash
   cp .env.example .env.local
   ```
3. Apply database migrations
   ```bash
   npx prisma migrate dev
   ```
4. Start the app
   ```bash
   npm run dev
   ```

## Deployment (Vercel)
This repository includes [`vercel.json`](./vercel.json).

### Vercel dashboard flow
1. Import this repository in Vercel.
2. Add environment variables in Project Settings:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NODE_ENV=production`
3. Trigger deploy.

### Vercel CLI flow
```bash
vercel login
vercel link
vercel env add DATABASE_URL production
vercel env add JWT_SECRET production
vercel env add NODE_ENV production
vercel --prod
```

## Troubleshooting
- If `npm install` fails with network/registry policy issues in your environment, run deployment from a machine/CI runner with npm registry access.
- Ensure `DATABASE_URL` points to a reachable production Postgres instance before deploying.
