# Brand Autopilot v0.2.0-beta.1 (Windows x64)

First public beta of the Brand Autopilot desktop app — the cockpit UI for a Claude-run marketing system for small e-commerce brands.

**Download `BrandAutopilot-v0.2.0-beta.1-win64.zip`, unzip anywhere, run `Brand Autopilot.exe`.** Windows SmartScreen will warn (unsigned beta): *More info → Run anyway*. No install, no registry — delete the folder to remove. See `TESTERS.md` inside the zip for a 10-minute test script and how to send feedback.

## What's in the beta
- Full clickable product experience with fictional demo brands: Shopify-style sign-in → 5-step setup wizard (connections, Google Drive media library with per-product Pin/Web/Stu/Review folders, brand profile, routines with quantity dials + quality-first model tags, draft-mode test drive, go-live gate) → multi-brand dashboard (KPIs, sales by channel incl. Agentic, today's schedule, decisions queue) → Routines and Settings pages.
- **LIVE mode (optional, advanced):** drop a `brand.local.json` next to the exe (template included) pointing at your Brand Autopilot routine ledgers — the app becomes a read-only dashboard of your real brand and detects your local Claude Code sign-in. Runs on **your own Claude subscription** (Max recommended — see `docs/plans-and-models.md` in the repo).

## Honest limits
- The app makes no network calls; demo data is fictional and labeled as such.
- Not wired yet (shown as "—"/"Phase 2" in-app, never faked): live Shopify/Metricool/Klaviyo pulls, in-app approvals and pause controls, in-app connection management, the wizard writing real configs.
- Unsigned binary (SmartScreen warning is expected); Windows x64 only.

Feedback → GitHub issues or directly to Eric.
