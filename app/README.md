# Brand Autopilot — App (prototype)

`prototype.html` is a **clickable, self-contained mock** of the Brand Autopilot app — the beginner-friendly interface planned on top of the routine kit in this repo. Open it in any browser; every number and brand in it is fictional, nothing is saved, and no real service is contacted.

## What the prototype shows

1. **Sign in with Shopify** — the store *is* the account (in the real app: Shopify OAuth; we never see the password).
2. **Setup wizard** (once, ~15 min):
   - **Store** — read-only sync of products, blog, orders.
   - **Connections** — Metricool, Google Drive, Notion, Klaviyo, Canva, Gmail, Claude in Chrome, PostHog (add-on for routine 07), plus a browse-all-connectors entry. Each card: a plain-language "what it unlocks" + a written fallback if skipped.
   - **Media library** — creates the Drive structure (Products / Inspiration / Video intake), with each product folder holding **Pin** (room-scene pin images), **Web** (.webp site images), **Stu** (.webp studio shots), and **Review** (real customer photos). Each routine reads only the folder it needs.
   - **Brand profile** — niche, free-text aesthetics tags (the user's own words, no preset list), voice, the never-varied tagline sign-off, timezone.
   - **Routines & go-live** — the 12 routines (07/08 as opt-in add-ons), two autonomy choices with recommended-safe defaults, a mandatory draft-mode **test drive**, then an explicit go-live gate.
3. **Dashboard** — per-brand KPIs (revenue, orders, sessions, conversion), **sales by channel** (Pinterest / Direct / Email / Blog / Google / Agentic / Social, from order attribution), today's routine schedule, channel reports (Pinterest / Email / Blog), the Saturday-digest snippet, and a **"Decisions waiting on you"** approval queue.
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

## Path to a downloadable app

The goal: a user with **their own Claude account** (Max recommended — see [docs/plans-and-models.md](../docs/plans-and-models.md)) downloads one thing, fills in the wizard, and their routines run on *their* subscription — never on the author's account or keys. The recommended shape, in order:

1. **Today (zero build):** download this repo → open `app/prototype.html` to see the experience → run the `/brand-autopilot-setup` skill in Claude (desktop app or Claude Code) to actually install the routines. The user's own Claude subscription is the runtime and the auth — nothing to host, no keys to manage.
2. **Phase 2 — local app (recommended):** a small desktop app (Tauri; a few-MB installer) that renders this exact wizard UI and, under the hood, drives the **Claude Agent SDK** through the user's existing Claude Code sign-in. The wizard writes `brand-config.md`, instantiates the templates in `routines/`, and registers them as scheduled tasks. Prerequisite stays honest: the user installs Claude Code / the Claude desktop app once and signs in with their own account — the app never handles Anthropic credentials itself.
3. **Not recommended:** a self-contained `.exe` that embeds API access. It would need the developer's API key (you'd be paying for every user's tokens) or ask users to paste API keys (beginners don't have them; Max subscriptions don't include raw API usage). Also: unsigned Windows executables trigger SmartScreen warnings — budget for a code-signing certificate before shipping Phase 2.
