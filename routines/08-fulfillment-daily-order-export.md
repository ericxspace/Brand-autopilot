# 08 · Fulfillment — Daily Order Export (daily)

*For brands that forward orders to a fulfillment partner / sourcing agent as a spreadsheet. Skip this group if your platform fulfills natively (Shopify Fulfillment Network, FBA, print-on-demand apps). The kit ships the builder script at `tools/build_fulfillment_xlsx.py` — the setup skill copies it into `{{OPS_FOLDER}}/fulfillment/`.*

ROUTINE STANDARD:
- TRIGGER: every day 09:00 {{TIMEZONE}}.
- STRATEGIC GOAL: every new paid order reaches the fulfillment partner exactly once, fast, and WITHOUT ever exposing your selling prices.
- SCOPE: store orders that are UNFULFILLED, not cancelled, not test, payment-cleared, and not already exported. NOT in scope: fulfilled orders, pricing, refunds, contacting the partner (the founder sends the file themselves).
- AUTONOMY: FULL AUTO for the read + file build. NEVER emails/sends the file anywhere — the founder forwards it manually.
- KPIs: new orders exported / held for payment / errors, per run. Zero price leaks. Zero double-exports.
- HANDOFFS: OUT → the .xlsx in {{FULFILLMENT_OUTPUT_FOLDER}} is the deliverable; held-payment orders surface in the completion summary; read by 00 · Ops — Weekly Digest.
- LOGGING & HONESTY: every run appends a runLog line to `{{OPS_FOLDER}}/fulfillment/state.json`. If a step fails or is skipped, say so in the FIRST line of the completion summary — never bury it.

🔒 THE ONE HARD RULE: the fulfillment partner must NEVER see selling prices (they'd learn your margins). Do not query, log, print, or write ANY money field — no item price, discount, tax, shipping cost, subtotal, or total. The builder script enforces this two ways (a fixed column allowlist + it refuses to run if any money-bearing key reaches it). If it refuses, FIX THE QUERY — never work around the guard, never hand-build the sheet to bypass it.

CONNECTORS: the store platform's API/MCP is the ONLY order-read path. If it is unavailable, stop, report clearly, and do nothing else (no partial file).

═══ STEP 0 — PRE-FLIGHT ═══
Confirm `{{OPS_FOLDER}}/fulfillment/build_fulfillment_xlsx.py` exists (requires Python + `openpyxl`). If it does NOT, STOP and report — do not attempt to rebuild the script or hand-write the Excel.
Read `{{OPS_FOLDER}}/fulfillment/state.json` (the ledger). If missing, treat as {"exported": {}, "heldForPayment": {}, "runLog": []}.

═══ STEP 1 — QUERY NEW ORDERS ═══
Query open, unfulfilled orders with a deliberately price-free field set — order id/name/date, financial + fulfillment status, test/cancelled flags, note, customer name/email/phone, full shipping address, and line items (title, variant, SKU, qty, image URL). On Shopify (GraphQL): `orders(query: "fulfillment_status:unfulfilled AND status:open")`, paginate while hasNextPage. If a field name errors, fix it against the schema and note the correction in the summary — but NEVER add a money field while fixing.

═══ STEP 2 — FILTER ═══
Drop an order if ANY of these is true:
- its id is already a key in `exported` (never export twice — this is what stops a slow-to-ship order being re-sent every morning),
- it is a test order, or it is cancelled,
- payment has not cleared (PENDING / EXPIRED / VOIDED / REFUNDED) → do NOT export (never ship before the money clears). Record it in `heldForPayment` {id: {name, status, firstSeen}} and LIST IT IN THE COMPLETION SUMMARY. It exports automatically on a later run once it clears. PAID / AUTHORIZED / PARTIALLY_PAID / PARTIALLY_REFUNDED are exportable.

If ZERO orders survive: append one runLog line ("YYYY-MM-DD: no new orders — skipped"), write state.json, and END THE RUN QUIETLY. No file, no report. This is the NORMAL outcome most days — an empty result is expected, not an error. Still mention any heldForPayment orders.

═══ STEP 3 — BUILD THE EXCEL ═══
1. Write the surviving order nodes to a temp JSON as {"orders": [ ...nodes... ]}. (Contains customer PII — delete it in STEP 5.)
2. Filename = the DATE THIS RUN FIRES (run date, not order date), month.day with no leading zeros: `{{FULFILLMENT_OUTPUT_FOLDER}}/order-<M>.<D>.xlsx` → e.g. July 17 = `order-7.17.xlsx`.
3. Run: `python {{OPS_FOLDER}}/fulfillment/build_fulfillment_xlsx.py --orders <temp.json> --out <path>`. The script owns ALL formatting and the price allowlist — never build the sheet by hand. It prints `WROTE <path> | orders=N | rows=N` on success; it exits non-zero + "REFUSING TO BUILD" if a money field slipped into the query → remove that field, re-run, report it. If the file already exists (a second run today), the script APPENDS — intended, nothing is overwritten.

═══ STEP 4 — VERIFY ═══
Confirm the .xlsx exists and its row count matches the exported line-item count. If the file is missing or the script failed, do NOT update the ledger — an unexported order must stay unexported so tomorrow's run retries it.

═══ STEP 5 — LEDGER + REPORT ═══
- For each exported order add to `exported`: {"<order id>": {"name": "#1042", "orderedAt": ..., "exportedOn": "YYYY-MM-DD", "file": "order-7.17.xlsx"}}. Refresh `heldForPayment` (drop any that cleared and exported this run). Append a runLog line: "YYYY-MM-DD: N new orders → order-7.17.xlsx (M held for payment)". Keep valid JSON.
- Delete the temp JSON (customer PII).
- Completion summary, first line: "<N> new orders exported → order-<M>.<D>.xlsx" — plus, same line, any held-for-payment count or failure. If nothing happened: "No new orders."
- Then list each exported order: order number, customer name, city/country, item count. No prices — not even in chat.

═══ STANDING RAILS ═══
- NEVER send, email, or upload the file anywhere. Saving it to the output folder is the whole job; the founder forwards it to the fulfillment partner themselves.
- NEVER write to the store. This routine is READ-ONLY — no fulfillment creation, no status changes, no tags.
- An order is exported EXACTLY ONCE. The ledger is the source of truth; do not "helpfully" re-export a still-unfulfilled order.
- Never invent data. If a field is missing (no phone, no SKU), leave the cell blank — the partner will ask. A fabricated address ships a package to nowhere.
- If the run is interrupted mid-build, leave the ledger untouched so the next run re-exports cleanly.
