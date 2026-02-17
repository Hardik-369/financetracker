# Finance Tracker  
*A Privacy-First, Behavioral-Finance Intelligence Web App*

---

# design.md

## 1. Product Vision
Finance Tracker is a minimal, intelligent, emotion-aware personal finance web app designed to help users understand **why** they spend — not just what they spend. It prioritizes psychological insight, privacy, and clarity over data overload.

---

## 2. Problem Statement
Traditional finance apps:
- Focus on budgeting and categorization
- Overwhelm users with dashboards
- Ignore emotional triggers
- Rely heavily on bank integrations

Users need behavioral insight, not spreadsheets.

---

## 3. Target Users
- Professionals (24–40) seeking financial clarity
- Freelancers with irregular income
- Privacy-conscious individuals
- Self-development oriented users

---

## 4. Unique Value Proposition
Unlike Mint-style trackers:
- No bank scraping required
- Emotion-based tagging
- Narrative summaries
- Impulse detection
- Burnout prediction
- Future financial projection
- Privacy-first design

---

## 5. Core Philosophy
Built on:
- Loss aversion theory
- Present bias
- Emotional regulation
- Decision fatigue modeling

Principles:
- Awareness reduces impulse
- Narrative reduces anxiety
- Minimalism increases consistency

---

## 6. Key Features

### Emotion-Based Expense Tagging
Attach emotional context (stressed, bored, celebratory, regretful).

### Financial Mood Analytics
Weekly emotional spending heatmap and stability index.

### Predictive Burnout Detection
Detect volatility, spending spikes, and savings drops.

### Smart Minimal Dashboard
Only 5 metrics:
- Stability Index
- Emotional Spending %
- Savings Momentum
- Impulse Risk
- Finance Score

### Narrative Financial Summaries
Human-readable weekly analysis.

### Personal Finance Score
Composite score (0–100) based on emotional and behavioral consistency.

### Future Self Projection
Savings and emotional trend forecast (6m / 1y / 3y).

### Anti-Impulse Detection
Flags abnormal spending patterns in real-time.

---

## 7. UX Strategy
- Single-focus layout
- Reflection-first flows
- Clean whitespace
- Calm, non-judgmental tone

---

## 8. UI Design System

### Colors
Primary:  
- #0F172A (Midnight Blue)  
- #14B8A6 (Calm Teal)  
- #E5E7EB (Soft Gray)  

Accent:  
- #F59E0B (Amber)  
- #EF4444 (Red)  
- #22C55E (Green)  

Background:  
- Light: #F8FAFC  
- Dark: #0B1220  

### Typography
- Inter (Primary)
- JetBrains Mono (Data)
- 8px spacing system
- 12px rounded corners

---

## 9. Wireframe Overview

### Dashboard
- Finance Score header
- Mood heatmap
- Savings trend line
- Narrative insight card

### Add Transaction
- Amount
- Category
- Emotion selector
- Impulse risk indicator

---

## 10. Data Visualization
- Line charts
- Heatmaps
- Stability meters
- No pie charts
- Minimal axes

---

## 11. Privacy-First Concept
- No data selling
- No ads
- Optional local-first storage
- Encrypted fields
- Self-host option

---

## 12. User Journey
1. Onboard
2. Log transaction
3. Tag emotion
4. Receive weekly narrative
5. Detect patterns
6. Build awareness habit

---

## 13. Monetization
- Free personal core
- Premium AI summaries
- Projection tools
- Export reports

No ads.

---

## 14. Roadmap
- AI journaling
- Optional bank sync
- Mobile app
- Therapist export mode

---

## 15. Differentiation Strategy
Positioned as:
> The calm alternative to aggressive budgeting apps.

Focus on emotional intelligence, privacy, and minimalism.

---

# development.md

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

---

## 2. Folder Structure

/app  
/components  
/lib  
  /algorithms  
  /auth  
/prisma  
/types  

---

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

---

## 4. API Endpoints

POST /api/auth/register  
POST /api/auth/login  
POST /api/transactions  
GET /api/transactions  
GET /api/insights  

---

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

---

## 6. AI Integration
- LLM-generated weekly summaries
- Behavior explanation engine
- Pattern classification

---

## 7. Security
- bcrypt hashing
- JWT expiry
- CSRF protection
- Rate limiting
- Zod validation

---

## 8. Privacy Strategy
- Minimal data retention
- Field-level encryption
- No third-party tracking

---

## 9. Performance
- DB indexing (user_id, created_at)
- Cache insights
- ISR for dashboard

---

## 10. DevOps
- GitHub Actions CI
- Automated Prisma migrations
- Lint + test before merge

---

## 11. Testing
- Unit tests (algorithms)
- API integration tests
- Playwright E2E

---

## 12. Deployment
1. Set environment variables
2. Run prisma migrate
3. Build Next.js
4. Deploy frontend
5. Connect production DB

---

## 13. Scalability
- API separation if needed
- Redis cache
- Read replicas

---

## 14. Local-First Strategy
- IndexedDB optional mode
- Sync queue
- Timestamp conflict resolution

---

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

---

End of Document
