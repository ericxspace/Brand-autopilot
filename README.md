# Brand Autopilot — a Claude-powered marketing team for small e-commerce brands

One founder + Claude = a daily Pinterest channel, an SEO/AEO blog, Reddit founder-credibility, short-form social (TikTok / Reels / Shorts), a weekly sales audit, safe product onboarding with an IP gate, a weekly conversion-intelligence report, a price-blind daily order export for your fulfillment partner, and a one-page Saturday digest — all running as **scheduled routines that measure their own results and improve every week**.

Built and battle-tested on a real Gen Z home-decor store, then genericized so any small brand can run it. No ad spend assumed. Designed for **no-coders**: you answer an interview once, then read reports.

---

## What's in the box

| Path | What it is |
|---|---|
| `skills/brand-autopilot-setup/` | An installable Claude **skill** that interviews you and builds YOUR routine system from the templates |
| `routines/` | 12 routine prompt **templates** (9 groups, 00–08) with `{{PLACEHOLDERS}}` + an architecture README |
| `playbooks/` | Shared standards the routines co-read: the **blog editorial standard** (90/10 subtle-sell + the delete-the-products gate) and **multi-engine SEO** (Google + Bing + ChatGPT/Copilot rules + the organic-search ops checklist) |
| `tools/` | `build_fulfillment_xlsx.py` — the price-blind Excel builder Group 08 uses (column allowlist + refuses to run if a money field reaches it) |
| `app/` | A clickable **prototype of the Brand Autopilot app** (sign in with Shopify → setup wizard → multi-brand dashboard) — open `app/prototype.html` in any browser; fictional data |
| `brand-config.template.md` | The single config sheet the setup interview fills in |
| `docs/plans-and-models.md` | Which Claude plan you need + the recommended model per routine (token-efficiency guide) |

### The 9 groups (12 recurring routines)

| Group | Routines | Default cadence |
|---|---|---|
| 00 Ops | Weekly Digest — one page, everything, "decisions waiting on you" | Sat |
| 01 Pinterest | Daily Content · Weekly Audit | daily + Mon |
| 02 Blog | Research & Write (one run = research → brief → write → publish → distribute) | 2×/week |
| 03 Reddit | Thread Scout · Posting Reminder — **assist-only, you post manually** | 3×/week |
| 04 Sales | Weekly Audit — audit → your approval → implement → measure | Mon |
| 05 Social (short-form) | Daily Content (Drive → captions → scheduler) · Weekly Report | daily + Sun |
| 06 Products | IP Gate & Enrichment — no risky product ever goes live | daily |
| 07 Analytics *(optional)* | Conversion Intelligence — behavior data → 1-page CRO report → hypothesis experiments into 04's approval queue; never touches the store | Mon |
| 08 Fulfillment *(optional)* | Daily Order Export — new paid orders → **price-blind** Excel for your fulfillment partner (you forward it; it never sends) | daily |

Monday order matters when 07 is installed: 07 analytics (08:00) → 01 audit (08:30) → 04 sales (09:00) — 04 consumes both handoffs.

---

## Requirements

- **Your own Claude account — this is the engine.** Every routine runs on the *user's* Claude subscription (nothing is hosted, no shared account, no API keys to paste). **Claude Max is recommended**; Pro fits only a trimmed core system. Per-plan guidance + the recommended model for each routine (quality-first: Opus wherever it measurably improves the outcome — copy that earns distribution, judgment that protects your merchant account — lighter models only where a bigger one buys nothing): **[docs/plans-and-models.md](docs/plans-and-models.md)**.
- **Claude desktop app** with scheduled tasks. Routines run while the app is open — leave it running in the hours your routines fire, or use Claude's cloud scheduled agents instead (the templates are plain prompts; they work with any scheduler that runs Claude).
- **Connectors** (add in claude.ai → Settings → Connectors): your store platform (Shopify MCP recommended), **Metricool** (the publishing + analytics rail — free tier works to start), **Google Drive** (asset intake), **Notion** (reports & queues), web search. Optional: **Klaviyo** (email audit in Group 04), **Canva** (blog covers), **PostHog** or similar session analytics (Group 07), Python + `openpyxl` (Group 08's Excel builder).
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
- **I don't sell decor — does this fit gardening / kitchenware / any other niche?** Yes: keywords, aesthetics, boards, and blog topics all come from YOUR config + live research at run time, not from a decor list. Two honest caveats: the decor-derived field stats baked into the defaults (room-scene ~50×, hook-title medians) transfer as *hypotheses* — your learning loop replaces them with your own numbers within weeks; and the niche red-flag interview matters more in some niches (gardening example: pesticides/herbicides are restricted on shopping platforms, seed shipping is regulated cross-border, machetes/axes read as weapons, and "medicinal plant" claims trip the health-claim rail). Strong seasonality niches should also expect the editorial calendar to lean into their season (planting calendar ≫ evergreen decor cycles).
- **No Metricool?** Every publishing routine falls back to a ready-to-paste scheduling sheet. But the analytics joins are much weaker without it — the free tier is worth it.
- **What does it cost to run?** Your own Claude subscription (Max recommended; Pro runs a trimmed core) + free connector tiers. The system was designed under a ~$1k/month total-burn constraint. Model-per-routine guidance to avoid wasting tokens: [docs/plans-and-models.md](docs/plans-and-models.md).
- **Does it use the author's Claude account or API key?** No — never. The kit is prompts + templates only; whoever installs it supplies the Claude account it runs on.
- **Where do reports land?** Notion pages per routine + local ledger files; the Saturday digest is one page with a "decisions waiting on you" list.
- **Can I change cadences?** Yes — every routine's trigger is one line; tell Claude to reschedule. Keep the evening chain order if you use Groups 06 + 01 together (products gate runs before the pin routine reads shared state), and the Monday order if you use Group 07 (analytics → Pinterest audit → sales audit).
- **I use a fulfillment partner — can they see my prices?** No. Group 08's export is price-blind by construction: the query carries no money fields, the builder script emits a fixed column allowlist, and it refuses to run if a money-bearing key ever reaches it. The routine also never sends the file — you forward it yourself.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, build your brand with it.
