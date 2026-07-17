# Brand Autopilot — App (prototype)

`prototype.html` is a **clickable, self-contained mock** of the Brand Autopilot app — the beginner-friendly interface planned on top of the routine kit in this repo. Open it in any browser; every number and brand in it is fictional, nothing is saved, and no real service is contacted.

## What the prototype shows

1. **Sign in with Shopify** — the store *is* the account (in the real app: Shopify OAuth; we never see the password).
2. **Setup wizard** (once, ~15 min):
   - **Store** — read-only sync of products, blog, orders.
   - **Connections** — Metricool, Google Drive, Notion, Klaviyo, each with a plain-language "what it unlocks" + a written fallback if skipped.
   - **Media library** — creates the three Drive folders (Products / Inspiration / Video intake) with what-goes-here guidance.
   - **Brand profile** — niche, aesthetics, voice, the never-varied tagline sign-off, timezone.
   - **Routines & go-live** — the 12 routines (07/08 as opt-in add-ons), two autonomy choices with recommended-safe defaults, a mandatory draft-mode **test drive**, then an explicit go-live gate.
3. **Dashboard** — per-brand KPIs (revenue, orders, sessions, conversion), today's routine schedule, channel reports (Pinterest / Email / Blog), the Saturday-digest snippet, and a **"Decisions waiting on you"** approval queue.
4. **Multi-brand** — a brand switcher and a Brands screen; each brand runs its own config, ledgers, and routines under one login.

## From prototype to real app (proposed architecture)

| Layer | Prototype | Real app |
|---|---|---|
| Auth | mock button | Shopify OAuth (public app), one workspace per user, brands = installed stores |
| Connections | mock toggles | per-service OAuth (Metricool, Google Drive, Notion, Klaviyo); tokens server-side |
| Setup wizard | static copy | drives the same interview as `skills/brand-autopilot-setup/SKILL.md`, writes `brand-config.md` |
| Routines | mock table | scheduled Claude agents (Claude API / Agent SDK) running the templates in `routines/` |
| Dashboard data | hard-coded JS object | read from each routine's own ledgers + Shopify/Metricool/Klaviyo APIs — same "cited from the ledger" honesty rule |
| Approvals | mock buttons | the approval queue becomes the write-path: routines propose, the founder taps approve, the owning routine implements |

The safety rails are product features, not implementation details: approval-gated store writes, assist-only Reddit, the IP gate that can hold but never force, price-blind fulfillment exports, and no fabricated metrics anywhere.
