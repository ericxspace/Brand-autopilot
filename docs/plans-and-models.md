# Your Claude account, plans, and model choices

## Bring your own Claude — always

Brand Autopilot is a prompt kit, not a hosted service. **Everything runs on the user's own Claude subscription**: the setup interview, every scheduled routine, every analysis. There is no shared account, no API key of ours in the loop, and nothing to reimburse anyone for — if you install this kit, your Claude account does the work and your subscription's usage limits apply. (The kit contains zero credentials by design; connectors are authorized by you, in your Claude app, against your own tool accounts.)

## Which plan do you need?

| Plan | Verdict |
|---|---|
| **Claude Max** (recommended) | The full 12-routine system was designed and battle-tested on Max. Daily content generation + 2×/week long-form blog writing + weekly audits is a real workload; Max's higher usage limits absorb it. Multi-brand definitely wants the higher Max tier. |
| **Claude Pro** | Workable only for a **trimmed core**: 01 Pinterest Daily (at a reduced pins/day), 02 Blog, and the 00 Digest — on the cheaper models below, with 03/05/07 skipped or run manually. Pro's usage caps will likely throttle the full system, and Pro's allowance for the biggest model is small. The setup skill asks which plan you have and trims accordingly. |
| **Free** | Not viable for scheduled routines. |

Usage limits and model availability change — check Anthropic's current plan pages rather than trusting this table's vintage.

## Recommended model per routine

Principle: **the cheapest model that passes the routine's quality bar.** Mechanical routines (fixed steps, a script does the risky part) run on Haiku. Customer-facing copy runs on Sonnet — copy quality is the product. Judgment-heavy weekly analysis earns Opus, because one good decision a week is worth more than the tokens it costs — and one bad policy call can cost a merchant account.

| Routine | Model | Why |
|---|---|---|
| 00 · Ops — Weekly Digest | **Sonnet** | Read-and-summarize with citation fidelity; weekly, so cost is trivial either way |
| 01 · Pinterest — Daily Content | **Sonnet** | Daily customer-facing copy + rails compliance — the volume routine where quality pays |
| 01 · Pinterest — Weekly Audit | **Sonnet**, escalate to **Opus** for deep dives | Ledger joins are mechanical; a distribution-collapse investigation is not |
| 02 · Blog — Research & Write | **Sonnet** | Long-form SEO writing; the single biggest token consumer — Opus here is the classic waste |
| 03 · Reddit — Thread Scout | **Haiku** | JSON scanning + short drafts; upgrade to Sonnet only if drafts read flat |
| 03 · Reddit — Posting Reminder | **Haiku** | A nudge |
| 04 · Sales — Weekly Audit | **Opus** (Sonnet if budget-tight) | Cross-source judgment that ends in store-changing recommendations |
| 05 · Social — Daily Content | **Haiku** | Caption + scheduling mechanics from your Drive drops |
| 05 · Social — Weekly Report | **Sonnet** | Light analytics with honest n-size caveats |
| 06 · Products — IP Gate | **Sonnet**, escalate UNCERTAIN verdicts to **Opus** | Policy risk calls; a wrong PASS can strike your merchant account |
| 07 · Analytics — Conversion Intelligence | **Opus** | Statistical reasoning + confidence labeling; weekly, worth it |
| 08 · Fulfillment — Daily Order Export | **Haiku** | Fixed steps; the price-blind guard lives in the script, not the model |

Rule of thumb: **Haiku for mechanics, Sonnet for copy, Opus for weekly judgment.** On Pro, cap everything at Sonnet and accept softer analysis.

## The scheduler caveat (read this before configuring)

Where your routines run determines how much of the table you can actually apply:

- **Claude desktop app scheduled tasks** currently run on the **app's default model** — there is no per-task model field. Practical setup: set the app default to **Sonnet** (right for 7 of 12 routines), let the two analysis routines escalate their judgment steps through a subagent with a model override where available, and accept that the three Haiku routines run a little rich. That over-spend is small; don't contort the system around it.
- **Cloud scheduled agents / Claude Agent SDK** let you set the model per routine — apply the table directly.

## Not wasting tokens (bigger levers than model choice)

1. **Lean context beats cheap models.** Routines read a config sheet + their own ledgers, never a whole knowledge base. Keep `brand-config.md` tight.
2. **Ledgers, not transcripts.** Append-only JSONL lines are what weekly audits re-read — a season of history in a few KB.
3. **Weekly analysis, daily execution.** Daily routines execute mechanical rules; only the weekly audits think hard. Don't move analysis into daily runs.
4. **No subagents for routine content.** Spawning agents re-derives context from cold — reserve it for the rare deep-dive.
5. **Cap research.** Scout routines have fixed thread/keyword budgets; blog research is bounded per run. Unbounded web research is the silent token sink.
