# 01 · Pinterest — Weekly Audit (weekly)

ROUTINE STANDARD:
- TRIGGER: Monday 08:30 {{TIMEZONE}}.
- STRATEGIC GOAL: measure the channel against targets and continuously improve the daily routine through evidence-backed learnings.
- SCOPE: week-over-week KPI report, tracking & policy health, learnings + experiment distillation. NOT in scope: creating/editing pins (read-only toward {{SCHEDULER}}), store changes, keyword research.
- AUTONOMY: fully autonomous. Sanctioned writes: weekly-learnings.md append, blog-learnings.md append, pin-outcomes.jsonl append, the report page.
- KPIs REPORTED: outbound clicks (primary), outbound CTR vs 1.5–3%, saves vs 1–2% save rate, impressions, follower growth, Pinterest-attributed sessions/orders.
- HANDOFFS: IN ← daily routine ledgers, {{SCHEDULER}} analytics, store attribution. OUT → weekly-learnings.md (01 Daily reads nightly), blog-learnings.md (02 reads), report read by 00 Digest.
- LOGGING & HONESTY: report page under {{NOTION_WEEKLY_REPORT_PARENT}} = log of record; 3-line chat TL;DR. "No data yet" is always acceptable; fabricating never is.

WINDOW: completed Mon–Sun week vs the prior 7 days.

DATA TO PULL (skip gracefully what a connector can't give — note the gap):
1. {{SCHEDULER}} Pinterest analytics both windows: impressions, saves, outbound clicks, engagement, followers, per-pin metrics where exposed.
2. THROTTLE CANARY: average impressions per published pin, WoW. Dropped >50% with flat/rising volume → "⚠ POSSIBLE DISTRIBUTION THROTTLE" at the top; Action #1 = volume cut. Outranks all growth advice that week.
3. Store attribution: sessions/orders/revenue with utm_source=pinterest or referrer pinterest.com.
4. LINK A/B: linked product pins vs linkless inspiration pins vs blog pins (utm_medium=blog_pin) — clicks + saves per arm; verdict once 2–3 weeks of data exist.
5. BOARD BALANCE (board-usage.json): top-3 used, unused-in-30-days, one rebalance suggestion.
6. SLOT GRID CHECK: per-slot performance + the scheduler's best-time data vs the current grid; recommend changes only at ≥2 consecutive weeks of evidence, enacted via SLOT GRID OVERRIDE below — never by editing the daily prompt.
7. PIPELINE: scheduled-posts check for the next 2 days (~{{PINS_PER_DAY}}/day, no duplicates); product-folder runway; inspiration runway. Flag <5 days.
8. TRACKING & POLICY HEALTH: UTM-chain proxy (zero pinterest-tagged sessions across a week with ~70 pins live = tracking alarm = issue #1); confirm the Pinterest sales channel/feed still exists on the store; weekly reminder line "check tag Event Quality + catalog diagnostics manually"; POLICY SCAN from ledgers — zero duplicate images, daily caps respected, product pins land on their own product pages. Breach = top-of-report flag.
9. FEATURE×OUTCOME JOIN (the compounding dataset): join pin-features.jsonl rows with per-pin metrics → APPEND snapshot-dated rows to pin-outcomes.jsonl (append-only, never rewrite). Compute splits on the FULL ledger: titleStyle, opener, imageType, board, slot, room, experimentArm. Every learning must cite splits with sample sizes; n<10 per cell = "data too thin", say so.

LEARNINGS DISTILLATION → append a dated section to weekly-learnings.md (latest section must stand alone; carry forward valid rules, drop disproven, delete sections >8 weeks):
### COPY LEARNINGS (≤5 bullets, each citing ledger data)
### BOARD LEARNINGS (≤3, or "none")
### SLOT GRID OVERRIDE (NONE, or a complete replacement grid — only at ≥2 weeks of evidence)
### EXPERIMENT (next week)
- FIRST verdict last week's experiment from pin-outcomes.jsonl: CONFIRMED (promote winner into the learnings above) / REJECTED / INCONCLUSIVE (extend, say why). THEN at most ONE new experiment or NONE: hypothesis → mechanical assignment rule the daily routine executes blind → success metric + minimum sample. Style-level only. A video-pin trial (video ≈2× static engagement) is valid once fresh videos exist in {{DRIVE_SOCIAL_INTAKE_FOLDER_ID}}.
### NOTES (tentative — daily routine ignores)

BLOG LEARNINGS → append a dated section to blog-learnings.md: BLOG PERFORMANCE (sessions per post; join each post's `features` from the blog topic ledger — which recipes pull traffic), TRENDING SIGNALS FROM PINS (topics over-indexing in OUR pin data, phrased as blog opportunities, ≤5, evidence-cited), FORMAT LEARNINGS, NOTES.

REPORT PAGE (~45 lines): scorecard table WoW vs targets · top 3 / bottom 3 pins diagnosed · link A/B · board balance · slot grid · pipeline · tracking & policy health · blog section · learnings fed forward · Actions (max 3, impact-ordered). Chat: 3-line TL;DR + link.
