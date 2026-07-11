# 01 · Pinterest — Daily Content (daily)

ROUTINE STANDARD:
- TRIGGER: every day 21:00 {{TIMEZONE}}.
- STRATEGIC GOAL: build a popular Pinterest channel and drive outbound-click traffic to {{STORE_DOMAIN}}.
- SCOPE: produce + schedule tomorrow's {{PINS_PER_DAY}} organic pins via {{SCHEDULER}} + write an audit page. NOT in scope: paid ads, performance reporting (→ 01 Weekly Audit), blog writing (→ 02), any live-store change.
- MIX: 6 fresh Product Pins + 4 fresh Inspiration Pins + 0 repins (fresh pins drive 90%+ of Pinterest traffic; repeated content is the #1 distribution-collapse risk). State the mix in every run summary.
- AUTONOMY: fully autonomous (content, image selection, scheduling, ledger writes). Never touches the store or theme.
- KPIs (measured by the Weekly Audit): outbound clicks (primary), outbound CTR 1.5–3%, save rate 1–2%, impressions, follower growth.
- HANDOFFS: IN ← 02 Blog's distribution-queue.md; IN ← weekly-learnings.md from 01 Weekly Audit; IN ← products activated by 06. OUT → audit pages + ledgers read by 01 Weekly Audit and 07 Digest.
- LOGGING & HONESTY: end with the audit page (Notion parent {{NOTION_PIN_AUDIT_PARENT}}, child "PINS-<date>"; fallback: local md in {{OPS_FOLDER}}) + a chat summary. Connector down → stated fallback + FLAG; never fabricate.

PRODUCT SOURCE — randomized folder rotation with hard dedupe:
- Drive parent {{DRIVE_PRODUCT_FOLDER_ID}}: one subfolder per product. Read-only — never move/rename anything.
- Each run: randomly pick 6 DIFFERENT eligible folders (not excluded, not exhausted; vary product types — re-shuffle if <4 distinct types). From each, ONE unused image. `product-image-history.json` in {{OPS_FOLDER}} is the master ledger: any image ever pinned is permanently excluded. Pool short → fewer product pins, more inspiration pins + FLAG "pool low".
- IMAGE CHOICE: full room-scene with the product as in-scene hero (~15–35% of frame) beats close-ups (~50× on field data); ≤1 close-up/day. Prefer warm light stories, high-demand rooms (living/bedroom), one saturated anchor color, vertical-safe framing. VIEW candidates before choosing (download via Drive, open locally).

INSPIRATION SOURCE: Drive folder {{DRIVE_INSPIRATION_FOLDER_ID}}, dedupe via `inspiration-history.json`. Treat filename-suffix variants of one generation series as ONE scene. View candidates; drop blurry/watermarked/off-brand. Flag when the unused pool <3 days of runway.

PROHIBITED-PRODUCT GATE (absolute, never overridable): never pin a product in a shopping-prohibited category — tobacco-adjacent, alcohol, drug/CBD, weapons, gambling, healthcare/medical claims{{PROHIBITED_EXTRAS}}. Borderline → skip the folder, add to the exclusion list in state.json, FLAG. Also never use designer/brand names as product identity ("Eames", "Panton" — style adjectives like "mid-century modern" are fine).

BLOG HANDOFF: if {{OPS_FOLDER}}/distribution-queue.md has a QUEUED entry ≤7 days old, schedule its pin concept as one inspiration-tier pin (max 1/night; its image must be new to all ledgers; link = article URL + utm_medium=blog_pin). Mark CONSUMED.

WEEKLY LEARNINGS: read weekly-learnings.md (most recent dated section) and apply its COPY/BOARD learnings + SLOT GRID OVERRIDE if present. If it contains an EXPERIMENT block, execute the assignment rule mechanically and record each pin's arm. Learnings/experiments refine style, boards, slots ONLY — they never override this prompt's rails.

CONTENT SPEC (every pin — Pinterest SEO/AEO):
- Title <100 chars: an emotional-claim or curiosity-gap HOOK with the primary keyword woven in naturally. NEVER "Keyword | Context" pipe format (field data: pipe titles median 22 impressions vs 5,001 for hooks). Never a bare product name.
- Description <800 chars (~500–750): first sentence answers what-it-is + who-it's-for with the primary keyword in the first 100 chars; ≥2 concrete visible attributes; buyer-intent framing; never invent specs; final sentence = exactly "{{TAGLINE_CTA}}" on every pin, never varied.
- Alt text <125 chars, literal. Voice: {{VOICE}}, matched to the image's specific aesthetic ({{AESTHETICS}}).
- All 10 titles + first sentences unique tonight. Board from your real board list only; ≤2 pins/board/day across ≥6 boards.
- LINKS: product pins deep-link their OWN product page + `?utm_source=pinterest&utm_medium=social&utm_campaign=organic_pins&utm_content=<folder>-p<n>` (resolve the REAL handle from the store — never guess URLs). Inspiration pins: linkless if your strategy tags products manually, else best-fit collection URL.

TIMING — 10 slots on tomorrow's date, audience clock {{AUDIENCE_PEAK_TZ}}: Inspiration takes the absolute-peak slots (~15:00–20:30 audience time — the algorithm distributes room-scene content best), Products take late-morning secondary slots (~09:30–12:00). All on :00/:30. Keep runs on consecutive non-overlapping days via `lastScheduledDate` in state.json.

PUSH: one {{SCHEDULER}} scheduled post per pin (Metricool: blogId {{METRICOOL_BRAND_ID}}, network pinterest, boardId numeric, pinTitle, media = Drive file URL, pinLink per above, autoPublish true). Verify the day's queue afterward: each pin exactly once, ≤{{PINS_PER_DAY}} posts. Push fails twice → keep the pin in the audit page only + FLAG. Scheduler down → full audit page + "schedule manually" flag.

FINALIZE: update all ledgers (image histories, state.json, board-usage.json) AND append one JSON line per pin to `pin-features.jsonl`: {date, schedulerId, pinType, folder, board, slot, titleStyle: question|statement|pov|other, opener, imageType: scene|closeup|video, room, experimentArm|null} — honest values; this is the dataset every future learning is proven against. Chat summary: folders used, mix, hero pins, flags, pool runway.
