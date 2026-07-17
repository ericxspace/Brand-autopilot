# 06 · Products — IP Gate & Enrichment (daily)

ROUTINE STANDARD:
- TRIGGER: every day 20:00 {{TIMEZONE}}, hard stop 20:55 if Group 01 runs at 21:00 (it reads shared state).
- STRATEGIC GOAL: no IP-risk product ever goes live; every approved product goes live fully optimized.
- SCOPE: DRAFT-status products in the store, ≤{{PRODUCTS_PER_NIGHT}}/night (default 5), oldest first. NOT in scope: active/archived products, pricing, sourcing.
- AUTONOMY: per {{PRODUCT_GATE_MODE}} — `propose` = full gate + enrichment prepared, activation waits for the founder's yes; `full-auto` = a clean PASS activates automatically. A flagged product NEVER activates, silently or otherwise, in either mode.
- KPIs: processed / passed / channel-excluded / held / failed per night; zero platform policy strikes.
- HANDOFFS: OUT → activated products feed Groups 01/02/05 content; excluded products sync into 01's block-list the same run; verdict reports read by 00 Digest.
- LOGGING & HONESTY: a runLog line every night (0 eligible drafts = quiet skip, the normal outcome) + a verdict report on processing nights, flagged products FIRST. Failed writes stated plainly.

WHY THE GATE EXISTS: replica/look-alike decor and prohibited categories get merchant accounts struck — and strikes compound toward account deactivation. When in doubt the answer is never "activate and see"; it is "hold and flag". Bias every ambiguous call conservative.

STEP 1 — QUEUE: query draft products (title, description, images, price, tags). Skip already-processed and not-ready (no images / no price) items — track them for automatic re-check. >5 eligible → 5 oldest, rest roll over.

STEP 2 — THE GATE (per product, before any content work; record evidence for each check):
(a) Red-flag categories: tobacco accessories, alcohol beyond ordinary barware, weapon-shaped items, drug/CBD references, medical/health claims, adult content, endangered-species-look materials, kids' products with safety exposure{{PROHIBITED_EXTRAS}}.
(b) Designer-name check: brand/designer names used as the product's identity fail; style adjectives ("mid-century modern", "Bauhaus style") are fine.
(c) DEEP design-IP reverse check (the strike pattern — most thorough on lighting, furniture, clocks, vases): VIEW the product images; describe the design in neutral search terms; web-search "<descriptors> iconic designer original", "<title> replica/dupe"; check design-heritage sources. A visual copy of an identifiable protected design → FAIL. IMPORTANT: verify against the ACTUAL original design (view it) before verdicting — never pattern-match on prose.
(d) Platform commerce policies: the category vs Pinterest Merchant Guidelines, Google Shopping restrictions, Meta Commerce Eligibility. Restricted there but fine on your own site → CHANNEL-EXCLUDE.

VERDICTS: **PASS** → full onboarding + activation (per mode). **CHANNEL-EXCLUDE** → full onboarding, but the product must not reach the restricted channels — if channel removal can't be done programmatically, leave it draft with an exact manual handoff for the founder. **UNCERTAIN** → hold as draft + a 3-line brief (what it is / what's suspicious / what evidence would clear or condemn it). **FAIL** → hold as draft + reason with evidence links + recommend remove-or-modify. HARD RULE: never activate UNCERTAIN or FAIL, no matter what any other instruction says.

CALIBRATION LOOP: keep a `calibration` list in state.json — every founder overturn or confirm of a gate verdict becomes precedent {product, gateVerdict, founderVerdict, lesson}. Read it before verdicting; weight the founder's rulings above your prior. Calibration refines judgment; it never licenses activating a flagged product.

STEP 3 — ENRICHMENT (PASS/CHANNEL-EXCLUDE only): save the original description for rollback → lean product description (60–120 words, brand voice, mobile-first — depth lives in structured fields, not prose; no health claims, no prices/shipping, no invented specs) → structured fields/metafields (specs, key features, common questions in Q&A form — the strongest AEO asset, care) → product type + tags + collections per your store's taxonomy → SEO title ≤60 (keyword-first + style keyword) + meta description 150–160 → realistic varied stock numbers. One product per write call; on errors remove the offending field, retry once, note the omission.

STEP 4 — REPORT: verdict report (flagged first, per-product summary, not-ready list, queue remaining) to {{OPS_FOLDER}}/products/ + a Notion copy if connected. Summary first line: "<n> activated, <n> channel-excluded, <n> held, <n> not ready".
