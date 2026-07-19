// Builds the distributable beta: copies the UI into the app dir, runs
// electron-packager, and stages tester docs next to the exe. The zip step is
// left to the caller so the output can be inspected first.
// SAFETY: brand.local.json (private per-machine config) is excluded by ignore
// pattern — verify it is absent from dist before shipping a zip.
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const here = __dirname;
fs.copyFileSync(path.join(here, "..", "prototype.html"), path.join(here, "prototype.html"));

const ignores = [
  "^/dist",
  "^/brand\\.local\\.json$",
  "^/smoke.*\\.png$",
  "^/start\\.cmd$",
  "^/install-shortcuts\\.ps1$",
  "^/build-package\\.js$",
];
const cmd =
  'npx electron-packager . "Brand Autopilot" --platform=win32 --arch=x64 --out=dist --overwrite --prune=true --icon=icon.ico ' +
  ignores.map((i) => '--ignore="' + i + '"').join(" ") +
  ' --win32metadata.ProductName="Brand Autopilot" --win32metadata.CompanyName="Brand Autopilot (beta)"';
console.log(cmd);
execSync(cmd, { cwd: here, stdio: "inherit" });

const out = path.join(here, "dist", "Brand Autopilot-win32-x64");
for (const f of ["TESTERS.md", "brand.local.template.json"]) {
  fs.copyFileSync(path.join(here, f), path.join(out, f));
}
fs.rmSync(path.join(here, "prototype.html")); // build copy only — dev loads ../prototype.html
console.log("PACKAGED -> " + out);
