# Installs Brand Autopilot on this PC: Desktop + Start Menu shortcuts that
# launch the Electron app windowless-console, with the app icon. Run from
# anywhere; paths resolve relative to this script. Re-running updates the
# shortcuts in place. (No registry changes; uninstall = delete the two .lnk files.)
$ErrorActionPreference = "Stop"
$appDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$electron = Join-Path $appDir "node_modules\electron\dist\electron.exe"
$icon = Join-Path $appDir "icon.ico"

if (-not (Test-Path $electron)) {
  Write-Host "Electron not installed yet - running npm install first (one time)..."
  Push-Location $appDir
  npm install --no-fund --no-audit
  Pop-Location
}
if (-not (Test-Path $electron)) { throw "electron.exe still missing at $electron - check npm output (allow-scripts policy?)" }

$shell = New-Object -ComObject WScript.Shell
$targets = @(
  (Join-Path ([Environment]::GetFolderPath("Desktop")) "Brand Autopilot.lnk"),
  (Join-Path ([Environment]::GetFolderPath("StartMenu")) "Programs\Brand Autopilot.lnk")
)
foreach ($lnkPath in $targets) {
  $dir = Split-Path -Parent $lnkPath
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  $lnk = $shell.CreateShortcut($lnkPath)
  $lnk.TargetPath = $electron
  $lnk.Arguments = '"' + $appDir + '"'
  $lnk.WorkingDirectory = $appDir
  if (Test-Path $icon) { $lnk.IconLocation = $icon }
  $lnk.Description = "Brand Autopilot - your marketing team, on autopilot (local test build)"
  $lnk.Save()
  Write-Host "Installed: $lnkPath"
}
Write-Host "Done. Launch from the Desktop or Start Menu; pin to taskbar from the running window if you like."
