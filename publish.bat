@echo off
:: ============================================================
::  Weiwo Quote Mobile - One-click publish
::  2026-09-05 v1.1 (GBK encoding, English UI - safe in any cmd)
::
::  What it does:
::    1) Copy E:\业务助手\biz-data.js  ->  E:\work\weivo-mobile-pages\biz-data.js
::    2) Verify git is available
::    3) git add + commit + push origin main
::    4) Tell you the GitHub Pages URL
::
::  Why English echo: 双击 .bat 启动的是旧版 system32\cmd.exe，
::    UTF-8 (chcp 65001) 在旧控制台里中文全乱码。英文 echo 永不乱码。
::    文件保存为 GBK 编码，路径里的中文能正常显示。
:: ============================================================
setlocal

echo ========================================
echo   Weiwo Quote Mobile - One-click Publish
echo ========================================
echo.

rem ---------- Config ----------
rem Source: latest biz-data.js exported by maintain console
set SRC=E:\业务助手\biz-data.js
rem Git repo root (with .git, remote = firmware901/weivo-mobile)
set DST=E:\work\weivo-mobile-pages
rem ----------------------------

echo [1/4] Copy latest biz-data.js ...
if not exist "%SRC%" (
  echo   [FAIL] Source file not found: %SRC%
  echo   Please export from maintain console, should be at E:\业务助手\biz-data.js
  pause
  exit /b 1
)
copy /Y "%SRC%" "%DST%\biz-data.js" >nul
if errorlevel 1 (
  echo   [FAIL] Copy failed
  pause
  exit /b 1
)
echo   OK
echo.

echo [2/4] Check git ...
:: Try PATH first; if absent, probe common install locations.
:: Use a single GIT_BIN variable with the full path - never call bare "git"
:: because double-click .bat cmd.exe does NOT inherit Git Bash's PATH.
set "GIT_BIN="
where git >nul 2>nul
if not errorlevel 1 set "GIT_BIN=git"
if not defined GIT_BIN if exist "C:\Users\gamea\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe"       set "GIT_BIN=C:\Users\gamea\.workbuddy\binaries\PortableGit\versions\1.2.0\cmd\git.exe"
if not defined GIT_BIN if exist "C:\Users\gamea\.workbuddy\binaries\PortableGit\versions\1.2.0\mingw64\bin\git.exe" set "GIT_BIN=C:\Users\gamea\.workbuddy\binaries\PortableGit\versions\1.2.0\mingw64\bin\git.exe"
if not defined GIT_BIN if exist "C:\Program Files\Git\cmd\git.exe"        set "GIT_BIN=C:\Program Files\Git\cmd\git.exe"
if not defined GIT_BIN if exist "C:\Program Files\Git\bin\git.exe"         set "GIT_BIN=C:\Program Files\Git\bin\git.exe"
if not defined GIT_BIN if exist "C:\Program Files (x86)\Git\cmd\git.exe"  set "GIT_BIN=C:\Program Files (x86)\Git\cmd\git.exe"
if not defined GIT_BIN (
  echo   [FAIL] git not found. Searched: PATH + 5 common locations.
  echo   If you have git elsewhere, edit this script and add your path.
  pause
  exit /b 1
)
echo   [INFO] Using git: %GIT_BIN%

:: Verify git repo using a real git command (more reliable than "if exist .git")
"%GIT_BIN%" -C "%DST%" rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
  echo   [FAIL] %DST% is not a git repo (git rev-parse failed)
  pause
  exit /b 1
)
echo   OK
echo.

echo [3/4] git add + commit + push ...
"%GIT_BIN%" -C "%DST%" add biz-data.js
if errorlevel 1 ( echo   [FAIL] git add failed & pause & exit /b 1 )
"%GIT_BIN%" -C "%DST%" commit -m "Update prices %DATE:~0,10% %TIME:~0,8%"
if errorlevel 1 (
  echo   [NOTE] Commit failed - probably "nothing to commit" (data unchanged). Push will be tried.
)
"%GIT_BIN%" -C "%DST%" push origin main
if errorlevel 1 (
  echo   [FAIL] Push failed - check network / GitHub credentials
  pause
  exit /b 1
)
echo   OK
echo.

echo [4/4] GitHub Pages auto-deploying (cloud side, no local action) ...
echo.
echo ========================================
echo   [OK] Publish complete!
echo.
echo   Mobile URL (open in phone browser):
echo   https://firmware901.github.io/weivo-mobile/
echo.
echo   Verify: open the URL, check version is up-to-date.
echo   GitHub Pages takes ~1-2 minutes to deploy.
echo ========================================
pause