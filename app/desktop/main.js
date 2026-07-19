// Brand Autopilot desktop shell — test build.
// Reads brand.local.json (never committed) for a LIVE brand backed by local
// routine ledgers; without it the app runs the plain demo. All data gathering
// is read-only; nothing here writes to any ledger, store, or service.
const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function safe(fn, fallback) { try { return fn(); } catch (e) { return fallback; } }

function gatherLive() {
  const cfgPath = path.join(__dirname, "brand.local.json");
  if (!fs.existsSync(cfgPath)) return null;
  const cfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
  const L = cfg.ledgers || {};
  const read = (p) => fs.readFileSync(p, "utf8");
  const data = { cfg: { label: cfg.label, title: cfg.title }, generatedAt: new Date().toISOString() };

  // The user's own Claude sign-in is the account layer: detect the local CLI.
  data.claude = safe(() => ({
    detected: true,
    version: execSync("claude --version", { timeout: 15000 }).toString().trim().split("\n")[0],
  }), { detected: false });

  data.fulfillment = safe(() => {
    const s = JSON.parse(read(L.fulfillmentState));
    return {
      exportedTotal: Object.keys(s.exported || {}).length,
      held: Object.keys(s.heldForPayment || {}).length,
      runLog: (s.runLog || []).slice(-3),
    };
  }, null);

  data.posthog = safe(() => {
    const lines = read(L.posthogLedger).trim().split("\n").map((l) => JSON.parse(l));
    return { series: lines.slice(-7), last: lines[lines.length - 1] };
  }, null);

  data.blog = safe(() => {
    const t = JSON.parse(read(L.blogTopicLedger));
    const pub = t.published || [];
    return { publishedCount: pub.length, lastHandle: pub.length ? pub[pub.length - 1].handle : null };
  }, null);

  data.sales = safe(() => {
    const m = read(L.salesAuditLog).match(/^## .*$/gm);
    return { latestHeading: m ? m[m.length - 1].replace(/^## /, "") : null };
  }, null);

  data.handoff = safe(() => {
    const h = read(L.posthogHandoff);
    const title = (h.match(/^# .*$/m) || [null])[0];
    const exp = h.match(/## Experiments[^\n]*\n([\s\S]*?)(?=\n## |$)/);
    const diffProposed = h.match(/\*\*Proposed:\*\*([^\n]*)/);
    return {
      title: title ? title.replace(/^# /, "") : null,
      experiments: exp ? exp[1].trim().split("\n")[0].replace(/\*\*/g, "") : null,
      diff: diffProposed ? diffProposed[1].trim() : null,
    };
  }, null);

  data.pins = safe(() => {
    const s = JSON.parse(read(L.pinTaskState));
    const last = s.lastScheduledDate || null;
    const feats = safe(() => read(L.pinFeatures).trim().split("\n"), []);
    const forLast = last
      ? feats.filter((l) => l.includes('"date": "' + last + '"') || l.includes('"date":"' + last + '"')).length
      : 0;
    return { lastScheduledDate: last, pinsForLastDate: forLast };
  }, null);

  return data;
}

let LIVE = null;
ipcMain.on("get-live-data", (e) => { e.returnValue = LIVE; });

const smoke = process.argv.includes("--smoke");

app.whenReady().then(async () => {
  LIVE = gatherLive();
  const win = new BrowserWindow({
    width: 1360,
    height: 900,
    show: !smoke,
    title: "Brand Autopilot",
    icon: path.join(__dirname, "icon.ico"),
    backgroundColor: "#F3F1EA",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // Test build: the window only ever loads our local file, so the relaxed
      // isolation is acceptable. Harden (contextIsolation + IPC bridge) before
      // any build that loads remote content.
      contextIsolation: false,
      sandbox: false,
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });
  win.removeMenu();
  await win.loadFile(path.join(__dirname, "..", "prototype.html"));

  if (smoke) {
    setTimeout(async () => {
      try {
        const img = await win.webContents.capturePage();
        fs.writeFileSync(path.join(__dirname, "smoke.png"), img.toPNG());
        const summary = await win.webContents.executeJavaScript(
          '({liveOption: !!document.querySelector("#brandSel option[value=\\"live\\"]"),' +
          ' shellActive: document.getElementById("shell").classList.contains("active"),' +
          ' dashTitle: document.getElementById("dashTitle").textContent,' +
          ' status: document.getElementById("dashStatus").textContent})'
        );
        console.log("SMOKE " + JSON.stringify(summary));
      } catch (e) {
        console.error("SMOKE-FAIL", e.message);
      }
      app.exit(0);
    }, 2500);
  }
});

app.on("window-all-closed", () => app.quit());
