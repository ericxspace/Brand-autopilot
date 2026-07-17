# 07 · Analytics — Conversion Intelligence (weekly)

*Requires a product-analytics tool with session-level events and a query API. Built and field-tested on **PostHog** (free tier is enough for a small store: web analytics + session replay + HogQL); adapt the pull queries if you use something else. Skip this group entirely if you don't run on-site analytics yet — 04 · Sales still covers store-level numbers.*

ROUTINE STANDARD:
- TRIGGER: Monday 08:00 {{TIMEZONE}} — BEFORE 04 · Sales — Weekly Audit (09:00), which consumes this routine's handoff.
- STRATEGIC GOAL: turn on-site behavior data into a continuous loop — monitor → report → propose → (founder approval) → implement (via 04) → measure — with ONE goal: steadily raise the sales conversion rate.
- SCOPE: read analytics + read store context; analyze; propose. NOT in scope: ANY write to the live store/theme (04 · Sales is the only implementing routine), any edit to any routine (proposals only — the founder approves in chat; application happens in a normal work session, never in this run).
- AUTONOMY: analysis + report fully autonomous. Everything that changes the store or a routine is approval-gated. Never interpret silence as approval; re-propose or drop next week.
- KPIs: PRIMARY sitewide sales conversion rate. Supporting: funnel step rates, CVR by channel, add-to-cart rate, checkout completion rate, revenue per session.
- HANDOFFS: OUT → `{{OPS_FOLDER}}/analytics/handoff-to-04-latest.md` (read by 04 at 09:00 — overwrite each run) + the weekly report page; read by 00 · Ops — Weekly Digest (Sat). IN ← previous reports + `routine-change-log.md`.
- LOGGING & HONESTY: append one JSON line per run to `{{OPS_FOLDER}}/analytics/run-ledger.jsonl` ({date, mode, sessions, cvr, insights: n, proposals: n, anomalies}). Never fabricate or extrapolate missing data — a broken tracker is a FINDING, not a gap to paper over. Correlation ≠ causation. A small store means noisy weekly numbers: compare against 4-week trends before declaring a win/loss, and label every insight's confidence honestly (high/medium/low).

Reporting window: the completed Mon–Sun week ending yesterday, vs the prior week, vs the 4-week trend once it exists.

DATA HYGIENE (apply to EVERY query):
- Exclude your own/Claude's verification traffic (tag test events with a recognizable prefix, then exclude any session containing one).
- Know your tracker's artifacts: sandboxed pixels (e.g. Shopify web pixels) fire events from sandbox URLs — keep the NAMED commerce events, exclude sandbox pageviews. Headless/automation sessions often emit activity without a pageview — treat those as suspect, not funnel data points.
- Tracking-anomaly check FIRST, before any conclusion: event volume vs prior week. A sudden drop usually means broken tracking (theme republished without the snippet, key revoked, tool outage) — verify the snippet still serves on the live site before calling it a traffic change.
- Purchases: use the purchase event AND cross-check the count against actual store orders for the same window — a mismatch is a data-quality finding to report.

MODE SWITCH — baseline weeks: for the first 2 weeks after install, run in BASELINE/DATA-QUALITY mode: verify tracking end-to-end (theme events vs pixel events, duplicates, pollution), audit the UTM taxonomy (see PULL e), report baseline numbers with small-sample caveats, and make NO aggressive recommendations — max 1 conservative, clearly-flagged proposal if something is glaring. From week 3: full mode, and the first full clean week = the official baseline (record it in the ledger).

═══ A. PULL ═══
a. Sitewide CVR (purchases/sessions) + WoW; funnel per step: landing pageview → product-page view → add-to-cart → checkout started → checkout completed. Absolute counts AND step-to-step %.
b. CVR + funnel by channel and by device. Map channels to the ROUTINES that own them (session entry utm_source/referrer/entry path): your pin platform → 01; entry path on the blog → 02; reddit.com referrer → 03 (no UTMs on Reddit by policy — referrer only); short-form networks → 05; email platform utm_source → email; AI-assistant referrers (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com) → AI; else Direct/Other.
c. Top drop-off pages/steps; biggest negative movers WoW.
d. ~10 session recordings at the single worst drop-off point: report METADATA only (duration, pages, clicks, rage clicks, console errors) + replay links for the founder — NEVER claim to have watched video content. Also pull rage-click / dead-click counts by URL if available.
e. Top viewed vs top purchased products (interest without conversion = a signal). BASELINE MODE ONLY: list all distinct utm_source/utm_medium/utm_campaign values seen, compare against the channel map above and each routine's documented UTM standard; propose taxonomy fixes if inconsistent.

═══ B. REPORT (one page MAX, identical format every week) ═══
1. Headline vs last week: CVR, sessions, revenue per session.
2. Funnel table + channel-by-routine table.
3. THREE insights — each as data → interpretation → confidence (high/med/low).
4. THREE proposed actions (see C).
5. Status of previously implemented changes: before/after numbers vs the week they shipped (read `routine-change-log.md` + previous reports; "too early to tell" is a valid verdict — keep-or-revert recommendations at ≥2 weeks).
Output: save to `{{OPS_FOLDER}}/analytics/reports/CRO-<YYYY-MM-DD>.md`; create a page "CRO-<date>" under {{NOTION_WEEKLY_REPORT_PARENT}} (fallback: local md only); write the handoff file; append the ledger line; completion notification = the 3 headline numbers + top insight in plain language.

═══ C. ACT (the improvement loop) ═══
- STORE/CRO EXPERIMENTS → write each as a hypothesis: "If we change X, funnel step Y should improve because Z; measured by ___". Put them in the handoff file under "## Experiments for 04's approval queue" (04 · Sales presents them to the founder with the rest of its recommendations). This routine NEVER touches the live store. Prefer ONE store experiment live at a time so effects stay attributable — say so when queueing a second.
- ROUTINE ADJUSTMENTS → when data shows another routine's output isn't converting (e.g. blog keywords bring bouncing traffic; pins land on weak pages), propose the edit AS A DIFF in the report: current instruction → proposed instruction → reason (with data) → expected impact → how measured. MAX 2 per week. WAIT for approval — never edit any routine inside this run. After approval, record in `{{OPS_FOLDER}}/analytics/routine-change-log.md` (date, routine, change, reason, result after 2 weeks).
- CLOSE THE LOOP: every approved change gets measured in following weeks' reports (section B5) until a keep/revert verdict at ≥2 weeks.

GUARDRAILS: never modify the live store or any routine (proposals only); never fabricate data; recordings stay masked — never attempt to identify individual users; every figure comes from a tool result; log every run; if the analytics tool is unreachable, deliver a short "data unavailable" report naming exactly what access is broken and what the founder must do — NEVER skip a week silently.
