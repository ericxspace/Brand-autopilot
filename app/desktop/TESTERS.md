# Brand Autopilot — beta for testers (v0.2.0-beta.1, Windows x64)

Thanks for testing! This build is the **cockpit UI** of Brand Autopilot — the interface a founder uses to set up and monitor a Claude-run marketing system. It ships with fictional demo brands so you can click through everything without connecting anything.

## Run it

1. Unzip the folder anywhere.
2. Double-click **`Brand Autopilot.exe`**.
3. Windows SmartScreen will likely warn you (this beta is unsigned): click **More info → Run anyway**.

No install, no registry changes — delete the folder to remove it.

## What to try (10 minutes)

1. **Sign in** (demo — it signs you into a fictional store; nothing real is contacted).
2. Walk the **5-step setup wizard**: store → connections → media library → brand profile → routines & go-live. Try the quantity dials and the test-drive step.
3. On the **dashboard**: switch between the demo brands, approve/park a decision, check Routines and Settings.

## What feedback helps most

- Where were you confused or unsure what to do next?
- Which option or number did you look for and not find?
- Any wording that reads like jargon?
- Would you trust this with your store? What's missing before you would?

Send notes (screenshots welcome) to Eric, or open an issue: https://github.com/ericxspace/Brand-autopilot/issues

## Honest scope of this beta

- Everything you see in demo mode is **fictional and clearly labeled**; the app makes **no network calls** and saves nothing.
- **LIVE mode** (optional, advanced): if you run the Brand Autopilot routine kit (see the repo README), copy `brand.local.template.json` → `brand.local.json` **next to the exe**, point it at your routine ledgers, and restart — the app then shows your real brand read-only, and detects your local Claude Code sign-in. The full autopilot runs on **your own Claude subscription** (Max recommended).
- Not wired yet (shown honestly as "—" or "Phase 2" in-app): live Shopify/Metricool/Klaviyo pulls, in-app approvals, pause controls, in-app connection management.
