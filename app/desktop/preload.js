// Live-brand adapter: maps read-only ledger data (gathered in main.js) into
// the UI's brand shape and registers it in the brand switcher. Runs only when
// brand.local.json exists; otherwise the app stays in demo mode.
const { ipcRenderer } = require("electron");
const LIVE = ipcRenderer.sendSync("get-live-data");

const FLAT = [1, 1, 1, 1, 1, 1, 1];
const NA = (why) => ["—", why, "flat"];

function series(arr, pick) {
  if (!arr || arr.length < 2) return FLAT;
  return arr.map(pick);
}

function buildBrand(d) {
  const ph = d.posthog && d.posthog.last;
  const today = new Date().toISOString().slice(0, 10);
  const pins = d.pins || {};
  const ful = d.fulfillment || {};
  const lastRun = (ful.runLog && ful.runLog[ful.runLog.length - 1]) || null;

  const decisions = [];
  if (d.handoff && d.handoff.diff) {
    decisions.push({ src: "07 · Analytics", txt: "Routine-edit proposal awaiting your approval: " + d.handoff.diff });
  }
  if (d.handoff && d.handoff.experiments && !/^none/i.test(d.handoff.experiments)) {
    decisions.push({ src: "07 · Analytics", txt: d.handoff.experiments });
  }
  if (!decisions.length) {
    decisions.push({ src: "Ledgers", txt: "No open approval items found in the local ledgers right now." });
  }

  const sched = [
    ["09:00", "08 · Fulfillment — order export",
      lastRun && lastRun.startsWith(today) ? "done" : "queued",
      lastRun ? lastRun.slice(0, 72) : "no run log found"],
    ["20:00", "06 · Products — IP gate", "queued", "runs from the scheduled-task registry"],
    ["21:00", "01 · Pinterest — daily pins",
      pins.lastScheduledDate && pins.lastScheduledDate >= today ? "done" : "queued",
      pins.lastScheduledDate ? "scheduled through " + pins.lastScheduledDate : "no state found"],
    ["21:00", "02 · Blog — research & write", "queued",
      d.blog ? d.blog.publishedCount + " posts in the topic ledger" : "no ledger found"],
  ];

  return {
    title: d.cfg.title,
    status: "● LIVE — local ledgers · " + (d.claude.detected ? d.claude.version : "Claude CLI not detected"),
    statusClass: d.claude.detected ? "pill ok" : "pill warn",
    kpis: {
      rev: NA("Shopify pull: Phase 2"),
      ord: ful.exportedTotal != null
        ? [String(ful.exportedTotal), "orders exported to partner (all-time)", "flat"]
        : NA("fulfillment ledger not found"),
      ses: ph ? [String(ph.sessions), "PostHog · wk of " + ph.date, "flat"] : NA("PostHog ledger not found"),
      cvr: ph ? [(ph.cvr * 100).toFixed(1) + "%", "PostHog · wk of " + ph.date, "flat"] : NA("PostHog ledger not found"),
    },
    spark: {
      rev: FLAT,
      ord: FLAT,
      ses: series(d.posthog && d.posthog.series, (s) => s.sessions || 0),
      cvr: series(d.posthog && d.posthog.series, (s) => (s.cvr || 0) * 100 + 0.001),
    },
    pin: {
      imp: NA("Metricool pull: Phase 2"),
      sav: NA("Metricool pull: Phase 2"),
      clk: NA("Metricool pull: Phase 2"),
      exp: pins.lastScheduledDate
        ? pins.pinsForLastDate + " pins ledgered for " + pins.lastScheduledDate
        : "pin-task state not found",
    },
    email: { rpr: NA("Klaviyo pull: Phase 2"), share: "—", list: "—" },
    blog: {
      posts: d.blog ? d.blog.publishedCount + " total" : "—",
      ses: NA("analytics pull: Phase 2"),
      top: d.blog && d.blog.lastHandle ? "“" + d.blog.lastHandle + "”" : "—",
    },
    digest:
      "<b>" + ((d.sales && d.sales.latestHeading) || "no sales audit logged yet") + ".</b> " +
      (lastRun ? "Fulfillment: " + lastRun + ". " : "") +
      ((d.handoff && d.handoff.title) ? d.handoff.title + "." : ""),
    channels: [["Ledgers only", "—", 0, "Shopify/Metricool channel pulls land in Phase 2", "flat"]],
    decisions: decisions,
    sched: sched,
  };
}

window.addEventListener("DOMContentLoaded", () => {
  try {
    if (!LIVE || !window.registerBrand) {
      if (window.toast) setTimeout(() => window.toast("Demo mode — add brand.local.json for a LIVE brand"), 600);
      return;
    }
    const activate = window.registerBrand("live", LIVE.cfg.label, buildBrand(LIVE));
    const ribbon = document.querySelector(".ribbon span:last-child");
    if (ribbon) {
      ribbon.innerHTML = "<b>Desktop test build</b> — the 🟢 LIVE brand is a read-only view of your local routine ledgers; the other brands are fictional demos. Nothing is written or sent anywhere.";
    }
    window.enterApp();
    activate();
    if (window.toast) setTimeout(() => window.toast("LIVE — read-only view of your local routine ledgers"), 600);
  } catch (e) {
    console.error("live adapter failed", e);
  }
});
