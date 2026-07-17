# Routine Templates — Architecture

Twelve templates, nine groups (00–08). Each is a complete scheduled-task prompt once its `{{PLACEHOLDERS}}` are filled from `brand-config.md` (the `/brand-autopilot-setup` skill does this for you). Groups 07 and 08 are optional add-ons — install them only if you run on-site analytics / forward orders to a fulfillment partner.

Two templates co-read the shared **`playbooks/`** (02 Blog and 04 Sales): `blog-editorial-standard.md` (the 90/10 subtle-sell rule + mandatory pre-delivery gate) and `multi-engine-seo.md` (Bing/Copilot write-time rules + the weekly/monthly organic-search ops checklist). Keep the playbook files wherever your instantiated prompts can read them — the setup skill resolves the paths.

## Schedule (defaults, user-local time) + recommended model

Everything runs on **the installing user's own Claude account**. Model picks follow "cheapest model that passes the quality bar" — full reasoning + plan guidance in [`docs/plans-and-models.md`](../docs/plans-and-models.md). (Desktop-app scheduled tasks run on the app-default model; the column applies directly where your scheduler supports per-task models.)

| # | Routine | Default trigger | Model |
|---|---|---|---|
| 00 | Ops — Weekly Digest | Sat 09:00 | Sonnet |
| 01 | Pinterest — Daily Content | daily 21:00 | Sonnet |
| 01 | Pinterest — Weekly Audit | Mon 08:30 | Sonnet (Opus for deep dives) |
| 02 | Blog — Research & Write | Tue + Sat 21:00 | Sonnet |
| 03 | Reddit — Thread Scout | Tue/Thu/Sat 19:00 | Haiku |
| 03 | Reddit — Posting Reminder | Tue/Thu/Sat 22:00 | Haiku |
| 04 | Sales — Weekly Audit | Mon 09:00 | Opus (Sonnet if budget-tight) |
| 05 | Social — Daily Content | daily 10:00 | Haiku |
| 05 | Social — Weekly Report | Sun 20:00 | Sonnet |
| 06 | Products — IP Gate & Enrichment | daily 20:00 | Sonnet (Opus on UNCERTAIN) |
| 07 | Analytics — Conversion Intelligence *(optional)* | Mon 08:00 | Opus |
| 08 | Fulfillment — Daily Order Export *(optional)* | daily 09:00 | Haiku |

**Evening chain (keep the order):** 06 products (20:00) finishes before 01 pins (21:00) so newly activated products can enter the same night's rotation.

**Monday chain (keep the order):** 07 analytics (08:00) → 01 weekly audit (08:30) → 04 sales audit (09:00) — 04 consumes both handoffs, so it must fire last.

## The standard block
Every routine prompt opens with the same header: TRIGGER · STRATEGIC GOAL · SCOPE (incl. what's NOT in scope) · AUTONOMY (what's autonomous vs approval-gated) · KPIs · HANDOFFS (in/out) · LOGGING & HONESTY (fallbacks + never-fabricate). Keep this block when you customize — it's what keeps twelve routines coherent.

## Handoffs between groups
- 02 Blog → `distribution-queue.md` → 01 Pinterest consumes a second pin concept per post; FB/IG captions are drafted for the founder, never auto-posted.
- 01 Weekly Audit → `weekly-learnings.md` (read nightly by 01 Daily) + `blog-learnings.md` (read by 02).
- 04 Sales (Step 4b) → GSC striking-distance queries (position 4–15 with impressions) → 02's keyword bank — your own impression data beats any keyword tool.
- 06 Products → activated products feed 01/02/05 content; excluded products sync to 01's block-list.
- 07 Analytics → `handoff-to-04-latest.md` → 04 Sales presents 07's CRO experiment hypotheses in its approval queue; 07 never touches the store itself — 04 is the only implementing routine.
- 04 Sales findings can re-prioritize every content routine (via the founder).
- 00 Digest reads all groups' ledgers every Saturday (08's "no new orders" runLog lines count as ran).

## The learning loop (wired into every group)
1. **Feature tags at creation** — daily routines record how each piece was made (title style, opener, image type, board/slot, aesthetic…) in a ledger.
2. **Feature × outcome joins** — weekly audits join those tags with real metrics into append-only `*-outcomes.jsonl` files. Never prune them; splits are computed on the full history with an n-size honesty rule (n<10 per cell = "data too thin").
3. **One controlled experiment per channel per week** — the audit verdicts last week's experiment (promote / drop / extend), then defines at most one new mechanical assignment rule for the daily routine. Experiments are style-level only; they can never override quality bars, anti-spam rails, or the IP gate. (07's store/CRO experiments follow the same one-at-a-time rule, gated through 04.)
4. **Loop health** — the Saturday digest flags any learning file stale ≥2 weeks.

## Editing a live routine
Tell Claude what to change; it edits the scheduled task's prompt. If you keep a GitHub mirror of your instantiated prompts (recommended for phone access), re-copy + push after every edit — the mirror is documentation, not the control surface.
