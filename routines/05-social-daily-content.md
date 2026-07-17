# 05 · Social — Daily Content (daily)

ROUTINE STANDARD:
- TRIGGER: every day 10:00 {{TIMEZONE}}.
- STRATEGIC GOAL: grow {{SOCIAL_NETWORKS}} using media the founder produces — they only drop files into Drive; everything downstream is automated.
- SCOPE: intake new Drive assets → platform captions → schedule via {{SCHEDULER}} → ledger. NOT in scope: creating/editing media, the Pinterest channel (→ 01), store changes.
- AUTONOMY: fully autonomous. NEVER move, rename, duplicate, or delete the founder's files — read-only intake, no exceptions.
- KPIs (measured by 05 Weekly Report): views, completion rate, follower growth, profile clicks, referral sessions.
- HANDOFFS: IN ← Drive drops; IN ← social-learnings.md (Sundays). OUT → ledger.json read by the Weekly Report and 00 Digest.
- LOGGING & HONESTY: one ledger line per asset + a 3–5-line chat summary. Scheduler unreachable → output a ready-to-paste scheduling sheet (asset, platform, datetime, caption + hashtags), mark "failed" for retry, FLAG — never silently skip.

PLAYBOOK: read the framework doc in {{OPS_FOLDER}}/social/ first (time table, caption templates, hashtag banks per aesthetic, 2026 algorithm gates) + social-learnings.md (latest section = live guidance; never overrides caps or claim rules) + ledger.json.

STEPS:
1. LIST the intake folder {{DRIVE_SOCIAL_INTAKE_FOLDER_ID}} once (recursive). Media files only; a `<filename>.txt` beside an asset is the founder's note — read it.
2. DIFF vs ledger `processed` (+ retry `pending`/`failed`, oldest first). Zero new assets → one-line summary, done; that's the normal outcome.
3. UNDERSTAND each asset: sidecar note; view images directly; for videos infer from filename + note. Genuinely ambiguous → aesthetic-forward captions with NO specific product claims + FLAG "captioned blind — spot-check". Never invent product names, materials, or claims.
4. CAPTIONS per platform, voice {{VOICE}}, matched to the visible aesthetic ({{AESTHETICS}}):
   - YouTube Shorts: title ≤80 chars curiosity hook w/ keyword; 2–3-sentence description + UTM link `utm_source=youtube&utm_medium=social&utm_campaign=shorts`; 3–5 hashtags. (youtubeData: type "short", privacy "public", madeForKids false.)
   - Instagram Reels: hook line ↵ styling context ↵ "link in bio" CTA ↵ 10–15 hashtags (3 big + 5 mid + 4 niche from the banks). (instagramData: type "REEL"; video required.)
   - TikTok: ≤150 chars conversational hook + 4–6 hashtags. (tiktokData REQUIRES a `title` field — Metricool rejects without it; privacyOption "PUBLIC_TO_EVERYONE".)
   - Claim rules everywhere: conditions/experiences only, no health claims, no designer names as identity, no prices, nothing you can't see.
5. SCHEDULE one post per platform per asset via {{SCHEDULER}} (media = the Drive file URL; slot = next free slot from the time table, ≥3h ahead, best-day preferred). CAP: ≤2 posts per platform per day; the rest stay `pending`. Note backlog size.
6. VERIFY the queue (no duplicates). Update ledger.json: scheduler IDs, slots, status, and a `features` object per post {hookStyle: question|pov|statement, aesthetic, slotLocal, assetKind, captionLength} — honest values; the Weekly Report joins these with views/completion to learn which caption recipes work.
