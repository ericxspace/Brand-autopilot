# 03 · Reddit — Posting Reminder (3×/wk)

ROUTINE STANDARD:
- TRIGGER: {{REDDIT_DAYS}} 22:00 {{TIMEZONE}} (3 hours after the Thread Scout).
- STRATEGIC GOAL: make sure the queue actually gets posted — scouted threads go stale fast.
- SCOPE: a ≤10-line nudge. NOT in scope: posting, scanning, drafting, editing any file.
- AUTONOMY: fully autonomous, read-only.

STEPS:
1. Look for today's queue file in {{OPS_FOLDER}}/reddit/queue/.
2. If it exists: output a compact reminder — how many threads queued (product-fit vs karma), the single best thread to answer first (title + URL + recommended variant), the queue page link, and the checklist: post from your own account · tweak the wording so it reads as yours · keep the disclosure line whenever the store or a product is mentioned · check the sub's self-promo rule before adding any link · post the karma comments too, they keep the account credible.
3. If it doesn't exist: say tonight's scan produced no queue and that the founder can run the Thread Scout manually if they want one.
