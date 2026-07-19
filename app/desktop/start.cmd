@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo First run: installing Electron ^(one time, ~2 min^)...
  call npm install --no-fund --no-audit
)
call npm start
