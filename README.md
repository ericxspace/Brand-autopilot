# Brand Autopilot — a Claude-powered marketing team for small e-commerce brands

One founder + Claude = a daily Pinterest channel, an SEO/AEO blog, Reddit founder-credibility, short-form social (TikTok / Reels / Shorts), a weekly sales audit, safe product onboarding with an IP gate, and a one-page Saturday digest — all running as **scheduled routines that measure their own results and improve every week**.

Built and battle-tested on a real Gen Z home-decor store, then genericized so any small brand can run it. No ad spend assumed. Designed for **no-coders**: you answer an interview once, then read reports.

---

## What's in the box

| Path | What it is |
|---|---|
| `skills/brand-autopilot-setup/` | An installable Claude **skill** that interviews you and builds YOUR routine system from the templates |
| `routines/` | 10 routine prompt **templates** (7 groups) with `{{PLACEHOLDERS}}` + an architecture README |
| `playbooks/` | Shared standards the routines co-read: the **blog editorial standard** (90/10 subtle-sell + the delete-the-products gate) and **multi-engine SEO** (Google + Bing + ChatGPT/Copilot rules + the organic-search ops checklist) |
| `brand-config.template.md` | The single config sheet the setup interview fills in |

### The 7 groups (10 recurring routines)

| Group | Routines | Default cadence |
|---|---|---|
| 01 Pinterest | Daily Content · Weekly Audit | daily + Mon |
| 02 Blog | Research & Write (one run = research → brief → write → publish → distribute) | 2×/week |
| 03 Reddit | Thread Scout · Posting Reminder — **assist-only, you post manually** | 3×/week |
| 04 Sales | Weekly Audit — audit → your approval → implement → measure | Mon |
| 05 Social (short-form) | Daily Content (Drive → captions → scheduler) · Weekly Report | daily + Sun |
| 06 Products | IP Gate & Enrichment — no risky product ever goes live | daily |
| 07 Ops | Weekly Digest — one page, everything, "decisions waiting on you" | Sat |

---

## Requirements

- **Claude desktop app** (Pro or Max) with scheduled tasks. Routines run while the app is open — leave it running in the hours your routines fire, or use Claude's cloud scheduled agents instead (the templates are plain prompts; they work with any scheduler that runs Claude).
- **Connectors** (add in claude.ai → Settings → Connectors): your store platform (Shopify MCP recommended), **Metricool** (the publishing + analytics rail — free tier works to start), **Google Drive** (asset intake), **Notion** (reports & queues), web search. Optional: **Klaviyo** (email audit in Group 04), **Canva** (blog covers).
- A store with products, and product/lifestyle images in a Google Drive folder.

## Quickstart (≈30 minutes)

1. **Download or clone this repo.**
2. Copy `skills/brand-autopilot-setup/` into your project's `.claude/skills/` folder (or just open the folder in a Claude session).
3. In Claude, run **`/brand-autopilot-setup`** (or say *"set up Brand Autopilot from this folder"*).
4. **Answer the interview** — brand voice, niche/aesthetics, audience + timezone, which connectors you have, asset folder links, and two autonomy choices (blog: draft-first or full-auto; products: auto-activate clean passes or propose-first).
5. Claude fills `brand-config.md`, instantiates the routine prompts with your values, creates the scheduled tasks in your timezone, and runs **safe draft-mode tests**.
6. Review the samples → say **go** → the routines go live.

---

## The operating philosophy (read this — it's why the system works)

**Autonomy split.** Research, drafts, reports, content generation, and scheduling social posts are autonomous. Anything touching your live store or theme, publishing blog posts (until you opt into full-auto), activating uncertain products, deleting anything, or spending money is **propose → WAIT for your yes → implement**. Silence never counts as approval.

**Honesty rails.** No routine may fabricate a metric, a review, a statistic, or a product link — ever. When a connector is down, the routine does what it still can, states exactly what failed, uses its written fallback (e.g. a ready-to-paste scheduling sheet when the scheduler is unreachable), and flags it for the Saturday digest.

**Anti-spam by design.** Fresh content only (no re-posting the same image twice, ever — enforced by dedupe ledgers), per-day caps per platform and per board, no engagement tricks. This isn't cosmetic: the source brand traced a Pinterest distribution collapse to duplicate-image batching. Fresh pins drive 90%+ of Pinterest traffic (Tailwind 2026 benchmark, 1.2M pins).

**Advice-first blog, enforced.** Every article must pass a written editorial gate before it ships: ≥90/10 value-to-promotion by word count, at most 4 product mentions and 2 cards, and the **delete-the-products self-test** — remove every product reference and the article must still be worth reading. Born from a real rejected post whose outline was the product list; the gate is in `playbooks/blog-editorial-standard.md`. The blog also writes for **both search engines and AI assistants** at once: Bing's index feeds ChatGPT and Copilot, so the templates bake in exact-phrase placement, as-written meta descriptions, and answer-first structure (`playbooks/multi-engine-seo.md`).

**The learning loop (the part that makes it *increasingly* good):**
1. Every piece of content gets **feature tags at creation** (title style, opener, image type, board, slot, aesthetic…).
2. Weekly audits **join features with real outcomes** into append-only ledger files — evidence compounds forever instead of fading.
3. Each channel runs **at most one controlled experiment per week** (e.g. question-titles vs statement-titles, split evenly), defined by the audit as a mechanical rule the daily routine executes blind.
4. Audits verdict the experiment, **promote winners into the live rules**, and the digest flags any learning loop that goes stale.

Field-tested defaults are baked in (e.g. on the source brand, room-scene product images outperformed plain close-ups ~50×, and emotional-hook pin titles medianed 5,001 impressions vs 22 for "Keyword | Context" pipe titles) — **but your own ledger data overrides every default as it accumulates.**

---

## Safety & platform-policy notes (non-negotiable in the templates)

- **Reddit is assist-only.** Claude scouts threads and drafts replies; it never posts, logs in, or votes. You post manually, with an owner-disclosure line. Undisclosed automated promotion risks a sitewide domain ban and (in the US) FTC trouble.
- **The product IP gate can hold, never force.** Look-alike/replica decor and prohibited categories (tobacco accessories, weapons, medical claims…) get merchant accounts struck. An UNCERTAIN or FAIL verdict never activates — no exception, no override.
- **No health/therapeutic claims** in any commercial copy, no invented product specs, no prices/shipping numbers hardcoded into content (they change — link to your policy pages).

## FAQ

- **My main channel isn't Pinterest.** Group 01's mechanics (folder rotation, dedupe ledger, hook titles, slot grid, feature ledger) adapt to any visual platform — tell the setup skill and it will adapt the template.
- **No Metricool?** Every publishing routine falls back to a ready-to-paste scheduling sheet. But the analytics joins are much weaker without it — the free tier is worth it.
- **What does it cost to run?** A Claude Pro/Max subscription + free connector tiers. The system was designed under a ~$1k/month total-burn constraint.
- **Where do reports land?** Notion pages per routine + local ledger files; the Saturday digest is one page with a "decisions waiting on you" list.
- **Can I change cadences?** Yes — every routine's trigger is one line; tell Claude to reschedule. Keep the evening chain order if you use Groups 06 + 01 together (products gate runs before the pin routine reads shared state).

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, build your brand with it.
