@echo off
cd /d "%~dp0"
set PORT=8000
set PY=
where py >nul 2>nul
if %errorlevel%==0 set PY=py
if not defined PY (
  where python >nul 2>nul
  if not errorlevel 1 set PY=python
)
if not defined PY (
  echo Python was not found. Install it from https://www.python.org/downloads/ or use the Live Server extension in VS Code.
  pause
  exit /b 1
)
echo Preview running at http://localhost:%PORT%  (press Ctrl+C to stop)
start "" cmd /c "timeout /t 2 >nul & start http://localhost:%PORT%"
%PY% -m http.server %PORT%
