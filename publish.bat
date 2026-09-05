@echo off
chcp 65001 >nul
setlocal
echo ========================================
echo   威沃报价·手机版  一键发布
echo ========================================
echo.

rem ========== 配置 ==========
rem 数据源：最新生产数据（9/5 起维护后台导出的权威文件）
set SRC=E:\业务助手\biz-data.js
rem Git 仓库目录（.git 完整，remote 指向 firmware901/weivo-mobile）
set DST=E:\work\weivo-mobile-pages
rem =========================

echo [1/4] 复制最新报价数据...
if not exist "%SRC%" (
  echo   [失败] 找不到数据文件：%SRC%
  echo   请确认 E:\业务助手\biz-data.js 存在（维护后台导出后应在此）
  pause
  exit /b 1
)
copy /Y "%SRC%" "%DST%\biz-data.js" >nul
if errorlevel 1 (
  echo   [失败] 复制失败
  pause
  exit /b 1
)
echo   OK
echo.

echo [2/4] 检查 git...
where git >nul 2>nul
if errorlevel 1 (
  echo   [失败] 系统找不到 git，请确认已安装并加入 PATH
  pause
  exit /b 1
)
cd /d "%DST%"
if not exist ".git" (
  echo   [失败] %DST% 不是 Git 仓库（缺少 .git）
  pause
  exit /b 1
)
echo   OK
echo.

echo [3/4] 提交并推送到 GitHub...
git add biz-data.js
if errorlevel 1 ( echo   [失败] git add 失败 & pause & exit /b 1 )
git commit -m "Update prices %DATE% %TIME%"
if errorlevel 1 (
  echo   [提示] 提交失败——若提示 nothing to commit 说明数据无变化，属正常
  echo   [继续] 仍尝试推送...
)
git push origin main
if errorlevel 1 (
  echo   [失败] 推送失败——请检查网络或 GitHub 凭据
  pause
  exit /b 1
)
echo   OK
echo.

echo [4/4] GitHub Pages 自动部署中（云端，无需本地操作）...
echo.
echo ========================================
echo   [OK] 发布完成！
echo.
echo   业务员访问链接：
echo   https://firmware901.github.io/weivo-mobile/
echo.
echo   验证方法：打开链接，看页面版本是否为最新
echo   （GitHub Pages 约 1-2 分钟后生效）
echo ========================================
pause
