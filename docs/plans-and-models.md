# Your Claude account, plans, and model choices

## Bring your own Claude — always

Brand Autopilot is a prompt kit, not a hosted service. **Everything runs on the user's own Claude subscription**: the setup interview, every scheduled routine, every analysis. There is no shared account, no API key of ours in the loop, and nothing to reimburse anyone for — if you install this kit, your Claude account does the work and your subscription's usage limits apply. (The kit contains zero credentials by design; connectors are authorized by you, in your Claude app, against your own tool accounts.)

## Which plan do you need?

| Plan | Verdict |
|---|---|
| **Claude Max** (recommended, and assumed by the model table below) | The full 12-routine system was designed and battle-tested on Max. Daily content generation + 2×/week long-form blog writing + weekly audits is a real workload; Max's higher usage limits absorb it. Multi-brand definitely wants the higher Max tier. |
| **Claude Pro** | Workable only for a **trimmed core**: 01 Pinterest Daily (at a reduced pins/day), 02 Blog, and the 00 Digest — all capped at Sonnet, with 03/05/07 skipped or run manually. Pro's usage caps will likely throttle the full system. The setup skill asks which plan you have and trims accordingly. |
| **Free** | Not viable for scheduled routines. |

Usage limits and model availability change — check Anthropic's current plan pages rather than trusting this table's vintage.

## The model policy: quality-first

**Outcome quality per run beats cost per token — you already paid for Max.** A bigger model on the same routine consumes roughly the same tokens; it just draws down plan allowance faster per token. So the question is never "what's the cheapest model that works?" but "does the next model up measurably improve this routine's outcome?" Where the answer is yes, upgrade. Two facts from the source brand make the case concrete:

- Pin **title style alone** produced a 5,001-vs-22 median-impressions spread. Copy quality is not a nice-to-have on content routines — it is the distribution lever. Never starve the routine that writes your hooks.
- One wrong product-gate PASS can strike a merchant account (it happened — twice). On judgment routines, the error cost dwarfs any conceivable model saving.

Downgrade only where the bigger model **buys nothing**: fixed-step mechanics whose risky parts live in a script, or nudges with no quality dimension.

## Workload × efficiency, per routine

Token figures are order-of-magnitude estimates from the source brand's real runs (tool results included); yours vary with catalog size and connector verbosity. "Weekly weight" = tokens/run × runs/week.

| Routine | Runs/wk | ~Tokens/run | Weekly weight | Quality sensitivity | Error cost | **Model** | What the top model buys here |
|---|---|---|---|---|---|---|---|
| 00 · Weekly Digest | 1 | 150K | 0.15M | Med-high — it's your decision surface; a misread propagates | Med | **Opus** | Faithful cross-ledger synthesis; sharper "decisions waiting on you" triage. 1×/wk → upgrade is ~free |
| 01 · Pinterest Daily | 7 | 200K | 1.4M | **Highest in the system** — titles/hooks are a measured 200×+ lever | Med (spam rails are mechanical) | **Opus** | Better hooks on every one of ~70 pins/wk; this is the single most valuable upgrade AND the most expensive line — first to drop to Sonnet if limits pinch |
| 01 · Weekly Audit | 1 | 250K | 0.25M | High — experiment verdicts + the learnings that steer the daily routine all week | Med | **Opus** | Correct verdicts from noisy small-n data; one bad promoted "learning" misdirects 70 pins |
| 02 · Blog | 2 | 300K | 0.6M | High — long-form persuasion, AEO structure, subtle-sell discipline | Low-med | **Opus** | Materially better articles: structure, answer-first sections, restraint. 2×/wk keeps cost sane |
| 03 · Thread Scout | 3 | 120K | 0.36M | Med — owner-honest voice + thread-fit judgment; a human (you) reviews anyway | Low (you post manually) | **Sonnet** | Opus gain is marginal on ≤8 short human-reviewed drafts; Sonnet already writes credible owner-voice |
| 03 · Reminder | 3 | 15K | 0.05M | None — it's a nudge | None | **Haiku** | Nothing. The one line where upgrading is pure waste |
| 04 · Sales Audit | 1 | 275K | 0.28M | High — cross-source judgment ending in store-changing recommendations | High (founder-gated, but bad recs erode trust) | **Opus** | Better prioritization + honest win-rate reasoning; the approval queue is only as good as the judgment behind it |
| 05 · Social Daily | 7 | 90K | 0.63M | Med — hooks drive views, but captions are short and formulaic | Low | **Sonnet** | Clear upgrade over Haiku (hook quality); Opus adds little to 3 short captions/day |
| 05 · Social Report | 1 | 125K | 0.13M | Med-high — distills the learnings the daily routine executes | Low | **Opus** | Same logic as 01 Audit: the weekly thinker steers the daily doer. 1×/wk → cheap |
| 06 · IP Gate & Enrichment | 7 | 175K | 1.2M | High — policy judgment + PDP copy | **Highest — a wrong PASS = merchant strike** | **Opus** | Fewer false PASSes and fewer needless holds; the strike history is why this is non-negotiable |
| 07 · Conversion Intel | 1 | 200K | 0.2M | High — statistical reasoning, confidence labeling, correlation≠causation discipline | Med | **Opus** | Exactly the workload where model intelligence shows up most |
| 08 · Order Export | 7 | 20K | 0.14M | Low — fixed steps; the price-blind guard is scripted | High stakes but script-guarded | **Sonnet** | Instruction-following reliability around PII + ledger discipline; tiny runs make this upgrade ~free. Opus buys nothing beyond that |

**Resulting mix** (full system, ~5.4M tokens/wk): ≈78% Opus, ≈21% Sonnet, ≈1% Haiku.

**If you hit Max limits**, downgrade in this order (biggest saving, smallest quality loss first):
1. 01 Daily → Sonnet (saves ~1.4M/wk of Opus; Sonnet pin copy is good, Opus is better)
2. 06 → Sonnet with **Opus escalation on every UNCERTAIN verdict** (keeps the judgment where the risk is)
3. 02 Blog → Sonnet
4. Never downgrade 04 and 07 — they're 1×/wk each and are the system's brain.

**Frontier tier** (Fable/Mythos-class, if your plan or credits include it): reserve it for 04, 07, and crisis investigations (a distribution collapse, a strike appeal) — everywhere else Opus saturates the task.

## The scheduler caveat (read this before configuring)

Where your routines run determines how much of the table you can actually apply:

- **Claude desktop app scheduled tasks** currently run on the **app's default model** — there is no per-task model field. Practical setup under the quality-first policy: set the app default to **Opus** (right for 8 of 12 routines) and accept that the Sonnet/Haiku routines run rich — that overshoot is the price of the simple setup. If that blows your limits, default to Sonnet and run the Monday pair (04, 07) manually on Opus.
- **Cloud scheduled agents / Claude Agent SDK** let you set the model per routine — apply the table directly.

## Not wasting tokens (these levers are free — model choice isn't the only dial)

1. **Lean context beats any model choice.** Routines read a config sheet + their own ledgers, never a whole knowledge base. Keep `brand-config.md` tight.
2. **Ledgers, not transcripts.** Append-only JSONL lines are what weekly audits re-read — a season of history in a few KB.
3. **Weekly analysis, daily execution.** Daily routines execute mechanical rules; only the weekly audits think hard. Don't move analysis into daily runs.
4. **No subagents for routine content.** Spawning agents re-derives context from cold — reserve it for the rare deep-dive.
5. **Cap research.** Scout routines have fixed thread/keyword budgets; blog research is bounded per run. Unbounded web research is the silent token sink.
