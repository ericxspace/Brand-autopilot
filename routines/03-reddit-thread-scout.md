# 03 · Reddit — Thread Scout (3×/wk)

ROUTINE STANDARD:
- TRIGGER: {{REDDIT_DAYS}} 19:00 {{TIMEZONE}}.
- STRATEGIC GOAL: build the founder's credibility on Reddit — trust first, traffic second. The founder posts manually from {{REDDIT_USERNAME}}; **Claude NEVER posts**.
- SCOPE: find up to {{REDDIT_DRAFTS_PER_RUN}} live threads per run (default 5; quality bar beats quota — fewer is fine) where the founder's expertise fits; research + draft ready-to-paste replies; max 1/week proactive post idea; track outcomes of past posts. NOT in scope: posting, logging in, voting, DMs, any account automation — undisclosed automated promotion risks a sitewide domain ban and FTC exposure. This rule is absolute.
- KPIs: comment karma growth, replies/upvotes, profile followers, reddit.com referral sessions (measured by 04/07).
- GUARDRAILS: no astroturfing, no fake engagement; account-wide value-to-promo ratio ≈9:1; obey each sub's self-promo rules; new/cold accounts do karma-only warm-up first.
- LOGGING & HONESTY: the chat summary is the run log. Reddit unreachable → say so and stop; never work around it with a login.

CONFIG (in {{OPS_FOLDER}}/reddit/): routine-config.json (target subreddits for the niche, caps, disclosure lines, warm-up rule, product blocklist), thread-history.json (never surface a thread twice), reddit-learnings.md.

STEPS:
1. SCAN (read-only, logged-out): Reddit's public JSON endpoints (`/r/<sub>/new.json`, `/r/<sub>/search.json?q=…&sort=new&t=week`, `<permalink>.json`) via a logged-out browser session if direct fetch is blocked; ≥2s between requests, <60 requests/run. First time in a sub: fetch its rules and record its self-promo policy in the config.
2. SELECT: young threads with rising engagement, genuine questions (not showcases), under the comment cap, not in history. Two lanes: "product-fit" (our products/expertise genuinely solve the OP's problem — ≤2/run recommended with product mention) and "karma" (helpful answers with ZERO store mention — these keep the ratio healthy).
3. RESEARCH each selected thread properly (web search where useful). The answer must be genuinely useful even if the reader never visits the store.
4. VERIFY any product before mentioning: live + in stock, not blocklisted. No health claims, no prices, no brand sign-offs/taglines on Reddit — Reddit hates marketing voice.
5. DRAFT: product-fit threads get 2–3 labeled variants (≥1 with no product mention at all); karma threads 1 draft. Every draft: sounds human, no bare URLs, includes the owner-disclosure line whenever the store or a product is mentioned.
5b. PROACTIVE POST IDEA (max 1/calendar week, first scan of the week only, only if genuinely strong): before/after, founder lessons, or a styling guide — sub + why + its rules + title draft + 5-line outline.
6. OUTCOME TRACKING (read-only): fetch {{REDDIT_USERNAME}}'s public comment feed (`/user/<name>/comments.json?limit=25`); mark queued threads the founder actually posted, refresh score/replies on past posts, flag possible mod removals; append durable patterns to reddit-learnings.md "## Outcomes" (which subs/styles earn karma — with numbers).
7. DELIVER: queue page under {{NOTION_REDDIT_QUEUE_PARENT}} ("REDDIT-<date>") + local mirror: per thread — URL, sub + its self-promo rule, the OP's problem in one line, why it fits, the variants, which to post, the exact disclosure line. Update thread-history. Chat summary: threads queued, karma outcomes since last scan, what to post first.

QUALITY BAR: fewer, better. Nothing fits tonight → an honest empty-queue note. Forced placements are what get accounts banned.
