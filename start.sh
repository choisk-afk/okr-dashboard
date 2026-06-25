#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

PORT="${PORT:-8080}"
URL="http://127.0.0.1:${PORT}"

pick_port() {
  local p="$1"
  while lsof -nP -iTCP:"${p}" -sTCP:LISTEN >/dev/null 2>&1; do
    p=$((p + 1))
  done
  echo "${p}"
}

PORT="$(pick_port "${PORT}")"
URL="http://127.0.0.1:${PORT}"

echo ""
echo "  OKR 대시보드 (로컬 전용)"
echo "  → ${URL}"
echo "  로그인: choisk@woowahan.com"
echo "  종료: Ctrl+C"
echo ""

python3 -m http.server "${PORT}" --bind 127.0.0.1 &
SERVER_PID=$!

cleanup() {
  kill "${SERVER_PID}" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

for _ in $(seq 1 30); do
  if curl -fsS "${URL}/" >/dev/null 2>&1; then
    break
  fi
  sleep 0.1
done

if command -v open >/dev/null 2>&1; then
  open "${URL}"
fi

wait "${SERVER_PID}"
