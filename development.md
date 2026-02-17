# Finance Tracker Development

## 1. Technical Stack
Frontend:
- Next.js
- TypeScript
- TailwindCSS
- Recharts

Backend:
- Node.js (Next API routes)

Database:
- PostgreSQL
- Prisma ORM

Auth:
- JWT (HttpOnly cookies)

State:
- Zustand
- React Query

Hosting:
- Vercel + Railway/Supabase

## 2. Folder Structure
/app
/components
/lib
  /algorithms
  /auth
/prisma
/types

## 3. Database Schema
### User
- id
- email
- password_hash
- created_at

### Transaction
- id
- user_id
- amount
- category
- emotion
- impulse_flag
- created_at

### InsightSnapshot
- id
- user_id
- stability_score
- emotional_index
- savings_momentum
- created_at

## 4. API Endpoints
POST /api/auth/register
POST /api/auth/login
POST /api/transactions
GET /api/transactions
GET /api/insights

## 5. Core Algorithms
### Financial Mood Score
(Emotional volatility × 0.4)
+ (Impulse ratio × 0.3)
+ (Savings deviation × 0.3)
→ Normalize 0–100

### Spending Behavior
- 7-day rolling average
- Detect >1.5 std deviation spikes
- Cluster by emotion

### Impulse Detection
Trigger if:
- Amount > median × 1.8
- Emotional tag high-risk
- Outside normal purchase time

### Budget Prediction
Linear regression on 90-day data.

## 6. AI Integration
- LLM-generated weekly summaries
- Behavior explanation engine
- Pattern classification

## 7. Security
- bcrypt hashing
- JWT expiry
- CSRF protection
- Rate limiting
- Zod validation

## 8. Privacy Strategy
- Minimal data retention
- Field-level encryption
- No third-party tracking

## 9. Performance
- DB indexing (user_id, created_at)
- Cache insights
- ISR for dashboard

## 10. DevOps
- GitHub Actions CI
- Automated Prisma migrations
- Lint + test before merge

## 11. Testing
- Unit tests (algorithms)
- API integration tests
- Playwright E2E

## 12. Deployment
1. Set environment variables
2. Run prisma migrate
3. Build Next.js
4. Deploy frontend
5. Connect production DB

## 13. Scalability
- API separation if needed
- Redis cache
- Read replicas

## 14. Local-First Strategy
- IndexedDB optional mode
- Sync queue
- Timestamp conflict resolution

## 15. MVP Roadmap
Phase 1:
- Auth
- Transaction logging
- Emotion tagging

Phase 2:
- Mood scoring
- Dashboard

Phase 3:
- Narrative summaries
- Burnout detection

Phase 4:
- Projection engine
- Optimization
