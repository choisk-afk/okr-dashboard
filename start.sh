#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
URL="http://localhost:${PORT}"
echo ""
echo "  OKR 대시보드 (로컬 전용)"
echo "  → ${URL}"
echo "  로그인: choisk@woowahan.com"
echo "  종료: Ctrl+C"
echo ""
if command -v open >/dev/null 2>&1; then
  open "${URL}"
fi
exec python3 -m http.server "${PORT}"
