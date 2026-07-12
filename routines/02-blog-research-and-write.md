# 02 · Blog — Research & Write (2×/wk)

ROUTINE STANDARD:
- TRIGGER: {{BLOG_DAYS}} 21:00 {{TIMEZONE}}.
- STRATEGIC GOAL: an SEO/GEO/AEO blog that pulls organic + social traffic to {{STORE_DOMAIN}}.
- SCOPE: ONE post per run, end-to-end (research → brief → write → create in store → distribute). NOT in scope: theme changes, posting to FB/IG (captions are drafted only).
- CADENCE: 2 posts/week, HARD CAP 3.
- AUTONOMY: per {{BLOG_PUBLISH_MODE}} — `draft` = create unpublished + notify the founder; `publish` = live + auto-distribute. Everything else autonomous.
- KPIs: organic sessions, social referral sessions, keywords ranked (no Search Console connector → "check manually", never fabricate), blog-assisted conversions (utm_source=blog).
- HANDOFFS: IN ← blog-learnings.md (written Mondays by 01 Weekly Audit — pin-derived demand signals are the strongest input, weight above generic research). OUT → distribution-queue.md (2nd pin concept for 01; FB/IG caption drafts for the founder); topic ledger read by 07 Digest.
- LOGGING & HONESTY: write a 3–5-line run summary into the week-plan ledger + chat. Never invent statistics, reviews, or product links.

MANDATORY PRE-READS: `playbooks/blog-editorial-standard.md` (the 90/10 subtle-sell rule + pre-delivery gate — governs every article) and `playbooks/multi-engine-seo.md` (Bing/Copilot write-time rules).

PHASE A — RESEARCH & BRIEF
A1. Read blog-learnings.md (latest section): what worked, trending signals from our own pin data, format learnings. Apply proven; ignore TENTATIVE.
A2. Monthly: refresh the pain-point bank from real customer language (product reviews, niche forum threads) — voice-of-customer phrases beat invented angles.
A3. Demand signals: web-search trends/autocomplete/People-Also-Ask for {{AESTHETICS}} + any open seasonal window. GEO/AEO-first: question-form, long-tail, clear intent. No paid keyword APIs.
A4. Score 6–10 candidates on: own-pin-data signal > search demand > purchase intent > pain-point mapping > catalog fit (≥3 live products) > seasonality. CANNIBALIZATION: reject any primary keyword semantically overlapping a published post (topic-ledger.json). Rotate per 2-week cycle: 1 evergreen how-to, 1 bottom-funnel buying-ADVICE article (mandatory — BOFU converts ~25× top-funnel; it answers a purchase decision with advice and honest trade-offs, NEVER a catalog walk — the editorial standard's caps apply in full), 1 brand-story/educational, 1 flex/seasonal.
A5. SERP recon on the winner: skip queries walled by big-magazine domains; prefer where forums/UGC rank. Write the brief: primary + secondary keywords, verbatim customer phrase, SERP gap, format, 4–8 fan-out subqueries (phrased the way searchers/Redditors actually ask), the ONE information-gain element no competitor can copy (own data, review mining, first-hand experience), live-verified product handles, image plan, internal links.

PHASE B — WRITE & CREATE
B1. Re-verify every product handle live (active only). Never construct URLs from memory.
B2. Write 800–1500 words in the brand voice ({{VOICE}}): 40–60-word answer capsule in the first 100 words; question-form H2s; each fan-out subquery answered under its own heading, first sentence = the direct answer, 40–80-word self-contained passage (AI engines quote passages, not pages); ≥5 cited statistics with named/linked sources (own labeled data counts; NEVER invent one); FAQ block + FAQPage JSON-LD in the body; SUBTLE-SELL CAPS (full rubric: playbooks/blog-editorial-standard.md): value-to-promotion ≥90/10 by word count, ≤4 linked product mentions (1 sentence each, product-type anchor text), ≤2 product cards placed AFTER the advice paragraph they illustrate (soft "See it" button, no prices), outline = the topic's logic never a product list, never open or close on a product, ≥1 honest trade-off/"skip this"; one real review quote if a review source exists; internal links to ≥1 collection (prose anchors, not CTAs) + 2–3 older posts; UTM `utm_source=blog&utm_medium=organic&utm_content={handle}` on every store link; MULTI-ENGINE RULES (playbooks/multi-engine-seo.md): the primary keyword appears VERBATIM in the title, one H2, once in body prose, and the meta description — no more; meta title ≤60 + meta description ≤155 written as a click-pitch containing the exact keyword (Bing displays and ranks meta descriptions as written); alt text everywhere; exactly ONE soft CTA — the closing block ending in "{{TAGLINE_CTA}}". No health claims, no hardcoded prices/shipping.
B2b. PRE-DELIVERY GATE: run the full gate in playbooks/blog-editorial-standard.md — structure, ratio, voice, banned patterns, and the delete-the-products self-test (remove every product mention/card/collection link mentally; the article must still be complete and worth reading). Any FAIL → fix and re-run. A failing draft is never published or delivered. If the playbook file is missing, apply the B2 caps + the delete-the-products test directly.
B3. Cover image: a lifestyle scene featuring the hero product (never a plain studio shot). If Canva is connected, build from your cover template (copy, never edit the master); else use the best lifestyle image directly.
B4. Create in the store blog per {{BLOG_PUBLISH_MODE}}. If `publish`: also schedule 1 blog pin via {{SCHEDULER}} (cover image, article URL + utm_medium=blog_pin, next-day audience-morning slot).

PHASE C — DISTRIBUTE & LEARN (published posts only)
C1. Append to distribution-queue.md: pin concept #2 (different hook + a DIFFERENT image from the cover), a Facebook caption + UTM link, an Instagram caption + hashtags ("link in bio") — drafts for the founder; status QUEUED.
C2. Append the post to topic-ledger.json `published` WITH a `features` object {bucket, format, word_count, title_style, fan_out_count, information_gain_type} — the weekly audit joins these with sessions to learn which recipes pull traffic. Write the run summary.
