---
name: brand-autopilot-setup
description: Set up the Brand Autopilot routine system for a small e-commerce brand — interview the user, fill brand-config.md, instantiate the 10 routine templates with their values, create the scheduled tasks in their timezone, and run safe draft-mode tests. Use when the user says "set up brand autopilot", "install the brand routines", or points at this kit.
---

You are installing **Brand Autopilot** (see the kit's README.md for the philosophy). The user is likely a no-coder founder. Your job: one interview → a fully running, safety-railed routine system tailored to their brand. Never skip the approval gate at the end.

## Step 1 — Locate the kit & verify connectors
1. Find the kit folder (this skill's parent repo: `routines/`, `brand-config.template.md`). If the user only pasted this SKILL.md, ask for the kit folder or the GitHub URL and fetch the templates.
2. Ping each connector cheaply and report a ✅/❌ table: store platform (e.g. Shopify shop-info), Metricool (getBrandSettings — note the brandId and which networks are connected), Google Drive (list one folder), Notion (search one page), web search. Optional: Klaviyo, Canva.
3. For every ❌: name what breaks without it and its fallback (Metricool ❌ → routines output ready-to-paste scheduling sheets; Notion ❌ → local markdown reports). Never pretend a connector works.

## Step 2 — The interview (batch questions; keep it under ~10)
Collect every `brand-config.template.md` value:
- Brand: name, store domain, niche, aesthetics list, audience, 1–2-line voice, the exact tagline/CTA sign-off sentence (explain: it's repeated verbatim on every pin and blog CTA — repetition builds the brand; it should read like a sentence, not a slogan fragment).
- Time: the user's timezone AND the audience's peak timezone (slot grids are built on the audience's clock).
- Assets: Drive folder links for product images (one subfolder per product), inspiration images, and short-form video intake. If a folder doesn't exist yet, have the user create it now and paste the link.
- Outputs: create the four Notion parent pages yourself (pin audits, weekly reports, reddit queue, digest) and record their IDs; create the local `{{OPS_FOLDER}}` with empty ledger files.
- Autonomy choices (explain the trade-offs plainly): `{{BLOG_PUBLISH_MODE}}` draft vs publish; `{{PRODUCT_GATE_MODE}}` propose vs full-auto. **Recommend `draft` + `propose` for the first 2 weeks.**
- Cadences: accept the defaults unless the user objects; keep total recurring tasks ≤10.
- Reddit: their own username (read-only outcome tracking), and confirm they understand Claude never posts for them.
- Niche red-flags: ask what product categories in THEIR niche are risky on shopping platforms; add to `{{PROHIBITED_EXTRAS}}`.

Write the completed `brand-config.md` next to the template and show it for confirmation.

## Step 3 — Instantiate the routines
For each template in `routines/` (skip groups the user opted out of):
1. Replace every `{{PLACEHOLDER}}` from brand-config.md. Adapt sections for missing connectors using the template's written fallbacks — never leave a dangling reference to a connector the user lacks.
2. If the user's primary visual channel isn't Pinterest, adapt Group 01 mechanically (same rotation/dedupe/hook-title/slot-grid/feature-ledger mechanics; platform-specific push calls per the scheduler's docs).
3. Create each as a scheduled task (cron in the USER's local timezone; convert the template's default times). Name = the template's `0X · Group — Function (cadence)` line. If scheduled tasks aren't available in this environment, output each finished prompt in a copy-paste block with its cron line and tell the user how to add it (Claude app → scheduled tasks, or cloud scheduled agents).
4. Respect the evening chain: if Groups 06 and 01 are both installed, 06 must finish before 01 fires (default: 06 at 20:00, 01 at 21:00 local).

## Step 4 — Safe test runs (MANDATORY — never skip)
- Run each content routine once in **draft mode** (scheduler drafts, blog draft, gate propose-only) regardless of the chosen autonomy settings.
- Show the user real samples: 2–3 pins, one blog outline + intro, one Reddit draft, one social caption set, the audit/digest formats.
- Fix what they don't like (voice, hashtag banks, slot times) by editing the instantiated prompts.
- **WAIT for an explicit "go".** Only then flip the autonomy settings to the user's chosen modes and confirm every task's next-run time.

## Step 5 — Hand-off
Deliver a short go-live note: the schedule table, where each report lands, the 3 things the user must do themselves (drop assets in Drive, post the Reddit queue manually, answer the approval items in the Monday sales audit + Saturday digest), and the reminder that routines fire only while the Claude desktop app is open (unless they used cloud scheduling).

## Rails
- Ask before anything outward-facing beyond the draft tests. No fabricated data anywhere, including in samples. Keep the user's total recurring tasks ≤10. If the user asks for a channel this kit doesn't cover, build it as an 8th group following `routines/README.md`'s standard block — don't bolt it onto an existing routine.
