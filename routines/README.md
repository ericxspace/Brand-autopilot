# Routine Templates — Architecture

Ten templates, seven groups. Each is a complete scheduled-task prompt once its `{{PLACEHOLDERS}}` are filled from `brand-config.md` (the `/brand-autopilot-setup` skill does this for you).

## Schedule (defaults, user-local time)

| # | Routine | Default trigger |
|---|---|---|
| 01 | Pinterest — Daily Content | daily 21:00 |
| 01 | Pinterest — Weekly Audit | Mon 08:30 |
| 02 | Blog — Research & Write | Tue + Sat 21:00 |
| 03 | Reddit — Thread Scout | Tue/Thu/Sat 19:00 |
| 03 | Reddit — Posting Reminder | Tue/Thu/Sat 22:00 |
| 04 | Sales — Weekly Audit | Mon 09:00 |
| 05 | Social — Daily Content | daily 10:00 |
| 05 | Social — Weekly Report | Sun 20:00 |
| 06 | Products — IP Gate & Enrichment | daily 20:00 |
| 07 | Ops — Weekly Digest | Sat 09:00 |

**Evening chain (keep the order):** 06 products (20:00) finishes before 01 pins (21:00) so newly activated products can enter the same night's rotation.

## The standard block
Every routine prompt opens with the same header: TRIGGER · STRATEGIC GOAL · SCOPE (incl. what's NOT in scope) · AUTONOMY (what's autonomous vs approval-gated) · KPIs · HANDOFFS (in/out) · LOGGING & HONESTY (fallbacks + never-fabricate). Keep this block when you customize — it's what keeps ten routines coherent.

## Handoffs between groups
- 02 Blog → `distribution-queue.md` → 01 Pinterest consumes a second pin concept per post; FB/IG captions are drafted for the founder, never auto-posted.
- 01 Weekly Audit → `weekly-learnings.md` (read nightly by 01 Daily) + `blog-learnings.md` (read by 02).
- 06 Products → activated products feed 01/02/05 content; excluded products sync to 01's block-list.
- 04 Sales findings can re-prioritize every content routine (via the founder).
- 07 Digest reads all groups' ledgers every Saturday.

## The learning loop (wired into every group)
1. **Feature tags at creation** — daily routines record how each piece was made (title style, opener, image type, board/slot, aesthetic…) in a ledger.
2. **Feature × outcome joins** — weekly audits join those tags with real metrics into append-only `*-outcomes.jsonl` files. Never prune them; splits are computed on the full history with an n-size honesty rule (n<10 per cell = "data too thin").
3. **One controlled experiment per channel per week** — the audit verdicts last week's experiment (promote / drop / extend), then defines at most one new mechanical assignment rule for the daily routine. Experiments are style-level only; they can never override quality bars, anti-spam rails, or the IP gate.
4. **Loop health** — the Saturday digest flags any learning file stale ≥2 weeks.

## Editing a live routine
Tell Claude what to change; it edits the scheduled task's prompt. If you keep a GitHub mirror of your instantiated prompts (recommended for phone access), re-copy + push after every edit — the mirror is documentation, not the control surface.
