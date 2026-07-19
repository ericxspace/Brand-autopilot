# Brand Autopilot — desktop shell (test build v0.1)

A local Electron window around the app UI. Two modes:

- **Demo** (no config): identical to `app/prototype.html` — fictional brands, nothing saved.
- **LIVE** (with `brand.local.json`): adds a real brand to the switcher, fed **read-only** from your local routine ledgers, with your own Claude CLI sign-in detected as the account layer. Nothing is written anywhere; no data leaves your machine.

## Run it

Prerequisites: Node.js, and (for LIVE mode) Claude Code signed in with **your own** Claude account.

1. Double-click **`start.cmd`** (first run installs Electron, ~2 min), or run `npm install && npm start` here.
2. For LIVE mode: copy `brand.local.template.json` → `brand.local.json` and point the paths at your brand's ledgers. The file is gitignored — brand-specific paths never enter the repo.

## What LIVE actually shows in v0.1 (honest scope)

| Panel | Source | Status |
|---|---|---|
| Sessions + CVR (with sparkline) | analytics routine's `run-ledger.jsonl` | **real** |
| Orders exported / fulfillment run log | fulfillment routine's `state.json` | **real** |
| Pin schedule state | pin task's `state.json` + `pin-features.jsonl` | **real** |
| Blog post count + latest post | blog `topic-ledger.json` | **real** |
| Decisions waiting on you | analytics handoff file (proposals/experiments) | **real** |
| Saturday-digest line | latest sales-audit heading + fulfillment log | **real** |
| Revenue, Pinterest impressions, email RPR, channels | need Shopify / Metricool / Klaviyo pulls | **Phase 2** — shown as "—", never faked |

Phase 2 = the wizard + scheduled-agent management driving the Claude Agent SDK through the user's Claude Code sign-in (see `../README.md` → "Path to a downloadable app"). This build's security posture is test-grade (relaxed renderer isolation; it only ever loads the local UI file) — harden before shipping to anyone else.
