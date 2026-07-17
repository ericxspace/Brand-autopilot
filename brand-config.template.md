# Brand Config — fill via the `/brand-autopilot-setup` interview
*Copy to `brand-config.md`, replace every value. Every routine template reads its `{{PLACEHOLDERS}}` from here.*

## Identity & voice
| Placeholder | Value | Example |
|---|---|---|
| `{{BRAND_NAME}}` | | Retro Loft Co. |
| `{{STORE_DOMAIN}}` | | mystore.com |
| `{{NICHE}}` | | Gen Z home decor — Memphis / dopamine / eclectic MCM |
| `{{AESTHETICS}}` | comma list, drives hashtag banks + copy matching | dopamine, memphis, mcm, eclectic |
| `{{AUDIENCE}}` | | Gen Z small-space / apartment decorators, US + Canada |
| `{{VOICE}}` | 1–2 lines | playful, confident, aesthetic-literate; never corporate |
| `{{TAGLINE_CTA}}` | the EXACT sign-off sentence for pins/blog CTAs — never varied (repetition is the asset) | "Decorate boldly at mystore.com." |
| `{{TIMEZONE}}` | IANA | America/New_York |
| `{{AUDIENCE_PEAK_TZ}}` | audience timezone for slot grids | America/New_York |

## Platforms & connectors
| Placeholder | Value | Notes |
|---|---|---|
| `{{CLAUDE_PLAN}}` | the USER's own Claude subscription — the engine everything runs on | Max (recommended; Pro = trimmed core — see `docs/plans-and-models.md`) |
| `{{STORE_PLATFORM}}` | | Shopify (MCP connector) |
| `{{SCHEDULER}}` | | Metricool — brand/blogId `{{METRICOOL_BRAND_ID}}` |
| `{{PINTEREST_ACCOUNT}}` | | handle |
| `{{SOCIAL_NETWORKS}}` | | tiktok, instagram, youtube |
| `{{REDDIT_USERNAME}}` | the founder's own account — Claude only ever READS its public feed | u/yourhandle |
| `{{EMAIL_PLATFORM}}` | optional | Klaviyo account id |
| `{{ANALYTICS_TOOL}}` | optional — only if installing Group 07 | PostHog project id + host (read-only API key kept in a local env file, never in this config) |

## Assets (Google Drive)
| Placeholder | Value | Notes |
|---|---|---|
| `{{DRIVE_PRODUCT_FOLDER_ID}}` | | parent of per-product subfolders (`P0001`, `P0002`…), each ideally holding `Pin/` (room-scene pin images), `Web/` (.webp site images), `Stu/` (.webp studio shots), `Review/` (real customer photos) — routines read only the set they need (pins from `Pin/`) |
| `{{DRIVE_INSPIRATION_FOLDER_ID}}` | | lifestyle/room-scene image pool |
| `{{DRIVE_SOCIAL_INTAKE_FOLDER_ID}}` | | where you drop short-form videos |

## Outputs
| Placeholder | Value | Notes |
|---|---|---|
| `{{NOTION_PIN_AUDIT_PARENT}}` | page ID | daily pin audit pages |
| `{{NOTION_WEEKLY_REPORT_PARENT}}` | page ID | weekly audits |
| `{{NOTION_REDDIT_QUEUE_PARENT}}` | page ID | reddit queue |
| `{{NOTION_DIGEST_PARENT}}` | page ID | Saturday digest |
| `{{OPS_FOLDER}}` | local path | ledgers & logs, e.g. `<project>/ops/` |
| `{{FULFILLMENT_OUTPUT_FOLDER}}` | optional — only if installing Group 08 | where the daily price-blind order .xlsx lands, e.g. `Desktop/FULFILLMENT` |

## Cadence & autonomy choices
| Placeholder | Value | Options |
|---|---|---|
| `{{PINS_PER_DAY}}` | total pins/day | default 10 — treat 10 as the anti-spam ceiling; if the account is new or recovering, trim the TOTAL, not just the ratio |
| `{{PRODUCT_PINS_PER_DAY}}` | product-pin share of the total | default 6 |
| `{{INSPIRATION_PINS_PER_DAY}}` | inspiration-pin share (always takes the peak slots) | default 4 — product + inspiration must sum to `{{PINS_PER_DAY}}` |
| `{{BLOG_POSTS_PER_WEEK}}` | posts/week | default 2, HARD CAP 3 (quality + anti-cannibalization); must match the number of days in `{{BLOG_DAYS}}` |
| `{{BLOG_DAYS}}` | one run day per post | default Tue + Sat |
| `{{BLOG_PUBLISH_MODE}}` | | `draft` (recommended start) or `publish` (full auto) |
| `{{PRODUCT_GATE_MODE}}` | | `propose` (recommended start) or `full-auto` (clean PASS activates) |
| `{{REDDIT_DAYS}}` | | default Tue/Thu/Sat |
| `{{REDDIT_DRAFTS_PER_RUN}}` | thread drafts per scout run | default 5 (3–8; the ≤2 product-mention cap per run is a disclosure rail, NOT adjustable) |
| `{{SOCIAL_POSTS_PER_PLATFORM_PER_DAY}}` | reels / TikToks / Shorts per platform per day | default 2 (1–3; consistency beats volume) |
| `{{PRODUCTS_PER_NIGHT}}` | drafts the nightly gate processes | default 5 (1–10) |
| `{{PROHIBITED_EXTRAS}}` | niche-specific additions to the IP gate's red-flag list | e.g. "kids' sleep products" |
