#!/usr/bin/env node
/**
 * 구글 시트 → data.js 동기화 (gws CLI 필요)
 * 사용: node scripts/sync-from-sheets.mjs
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const GWS = process.env.GWS_BIN || "/Users/woowahan/.claude/plugins/cache/woowa-plugin-marketplace/googleworkspace/0.0.4/bin/gws";

const METRICS_ID = "1ZfCB3XwmRPFRT446uGYrVVT29LdgJ71KlyyPBI4_KpE";
const TASKS_ID = "1j9oC2lhIt0cgOFZ7L-iEtMopsFnFUNaQQZkqxHBaSSU";
const METRICS_SHEET = "결정실 okr";
const PAY_ID = "1lLx4G2q6K6Oqo07cInITCCx9a68-oC2xfwreljx0N2U";

const MONTH_KEYS = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06"];
const ACTUAL_COLS = [14, 15, 16, 17, 18, 19];
const TARGET_COLS = [26, 27, 28, 29, 30, 31];

const KR_ROW = {
  "KR1-1": 5, "KR1-2": 10, "KR1-3": 14,
  "KR2-1": 18, "KR2-2": 19,
  "KR3-1": 21, "KR3-2": 22, "KR3-3": 24,
  "KR4-1": 31, "KR4-2": 37, "KR4-3": 38, "KR4-4": 39
};

const SUBKR_ROW = {
  "KR1-1": [6, 7, 8, 9],
  "KR1-3": [15, 16],
  "KR3-3": [25, 26, 27, 28, 29],
  "KR4-1": [32, 33, 34, 35]
};

const PAY_METHODS = [
  { name: "배민페이(전체)", group: "배민페이" },
  { name: "배민페이카드", group: "배민페이" },
  { name: "배민페이계좌", group: "배민페이" },
  { name: "배민페이머니", group: "배민페이" },
  { name: "신용/체크카드", group: "일반" },
  { name: "카카오페이", group: "간편3사" },
  { name: "네이버페이", group: "간편3사" },
  { name: "토스페이", group: "간편3사" },
  { name: "즉시할인", group: "기타" },
  { name: "휴대폰", group: "기타" },
  { name: "상품권", group: "기타" },
  { name: "쿠폰", group: "기타" },
  { name: "포인트", group: "기타" },
  { name: "애플페이", group: "기타" },
  { name: "해외카드", group: "기타" },
  { name: "알리페이", group: "기타" },
  { name: "위챗페이", group: "기타" }
];

function gwsGet(spreadsheetId, range) {
  const params = JSON.stringify({ spreadsheetId, range });
  const out = execSync(
    `"${GWS}" sheets spreadsheets values get --params '${params.replace(/'/g, "'\\''")}' --format json`,
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
  );
  return JSON.parse(out).values || [];
}

function toNum(s) {
  if (!s) return null;
  const n = parseFloat(String(s).replace(/[%$,\s원시간건]/g, "").replace(/,/g, ""));
  return isNaN(n) ? null : n;
}

function pct(s) {
  if (!s) return null;
  const n = parseFloat(String(s).replace("%", ""));
  return isNaN(n) ? null : n;
}

function normDate(s) {
  if (!s) return "";
  const t = String(s).trim();
  const m = t.match(/(\d{4})[.\s/-]+(\d{1,2})[.\s/-]+(\d{1,2})/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  return t.replace(/\./g, "-").replace(/\s/g, "").replace(/-+$/, "");
}

function normStatus(s) {
  if (!s) return "";
  const t = String(s).trim();
  if (t.startsWith("과제완료")) return "과제완료";
  if (t.startsWith("실험완료")) return "실험완료";
  if (t === "진행중" || t === "계획중" || t === "홀딩" || t === "드랍") return t;
  return t;
}

function detectMonths(rows) {
  const base = rows[5] || [];
  const available = [];
  ACTUAL_COLS.forEach((col, i) => {
    if (toNum(base[col]) !== null) available.push(MONTH_KEYS[i]);
  });
  return available;
}

function monthLabel(m) {
  const [, mm] = m.split("-");
  return `${parseInt(mm, 10)}월`;
}

function loadData() {
  const code = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
  const fn = new Function(code + "\n;return OKR_DATA;");
  return fn();
}

function syncMetrics(data, rows) {
  const months = detectMonths(rows);
  if (!months.length) throw new Error("월별 수치 없음");
  data.months = months;
  data.monthLabels = {};
  months.forEach((m) => { data.monthLabels[m] = monthLabel(m); });

  data.objectives.forEach((obj) => {
    obj.keyResults.forEach((kr) => {
      const rowIdx = KR_ROW[kr.id];
      if (rowIdx === undefined) return;
      const row = rows[rowIdx];
      if (!row) return;

      const monthly = {};
      months.forEach((m, i) => {
        const a = toNum(row[ACTUAL_COLS[i]]);
        const t = toNum(row[TARGET_COLS[i]]);
        if (a !== null) monthly[m] = { actual: a, target: t ?? 0 };
      });
      kr.monthly = monthly;

      if (kr.subKRs && SUBKR_ROW[kr.id]) {
        SUBKR_ROW[kr.id].forEach((subRowIdx, si) => {
          if (!kr.subKRs[si]) return;
          const sRow = rows[subRowIdx] || [];
          const subMonthly = {};
          months.forEach((m, i) => {
            const a = toNum(sRow[ACTUAL_COLS[i]]);
            const t = toNum(sRow[TARGET_COLS[i]]);
            if (a !== null) subMonthly[m] = { a, t: t ?? 0 };
          });
          kr.subKRs[si].monthly = subMonthly;
        });
      }
    });
  });
  console.log("✓ KR 월별 수치:", months.join(", "));
}

function syncTasks(data, rows) {
  const taskMap = {};
  rows.forEach((row) => {
    if (row[4] && String(row[4]).includes("결제정산") && row[7]) {
      const name = String(row[7]).trim();
      taskMap[name] = {
        status: normStatus(row[27]),
        targetDate: normDate(row[22]),
        completedDate: normDate(row[23]),
        wikiLink: (row[31] || "").trim(),
        jiraLink: (row[33] || "").trim() || (row[32] || "").trim()
      };
    }
  });

  function normTaskName(s) {
    return String(s)
      .trim()
      .replace(/\s/g, "")
      .replace(/구독자가/g, "구독자")
      .replace(/머니로/g, "머니")
      .replace(/으로/g, "")
      .replace(/를/g, "")
      .replace(/을/g, "");
  }

  function findTaskMatch(taskName) {
    const key = taskName.trim();
    if (taskMap[key]) return taskMap[key];
    const nk = normTaskName(key);
    const sheetNames = Object.keys(taskMap);
    const hit = sheetNames.find((sn) => {
      const ns = normTaskName(sn);
      return ns === nk || ns.includes(nk) || nk.includes(ns);
    });
    return hit ? taskMap[hit] : null;
  }

  let matched = 0;
  data.objectives.forEach((obj) => {
    obj.keyResults.forEach((kr) => {
      kr.tasks.forEach((t) => {
        const match = findTaskMatch(t.name);
        if (!match) return;
        matched++;
        if (match.status) t.status = match.status;
        if (match.targetDate) t.targetDate = match.targetDate;
        if (match.completedDate) t.completedDate = match.completedDate;
        if (match.wikiLink && match.wikiLink.startsWith("http")) t.wikiLink = match.wikiLink;
        if (match.jiraLink && match.jiraLink.startsWith("http")) {
          if (match.jiraLink.includes("jira")) t.jiraLink = match.jiraLink;
          else if (!t.wikiLink) t.wikiLink = match.jiraLink;
        }
      });
    });
  });
  console.log("✓ 과제 상태/일정 동기화:", matched, "건");
}

function syncPaymentShare(data, payRows) {
  const months = ["2026-01", "2026-02", "2026-03", "2026-04", "2026-05"].filter((m) =>
    data.months.includes(m)
  );
  const cols = [31, 32, 33, 34, 35];
  const payMonths = [];
  cols.forEach((c, i) => {
    const any = payRows.some((r) => pct(r[c]) !== null);
    if (any && MONTH_KEYS[i]) payMonths.push(MONTH_KEYS[i]);
  });
  const useMonths = payMonths.length ? payMonths : months;

  const methods = PAY_METHODS.map((cfg) => {
    const row = payRows.find((r) => (r[1] || "").trim() === cfg.name);
    const dataMap = {};
    useMonths.forEach((m, i) => {
      const col = cols[MONTH_KEYS.indexOf(m)];
      if (col === undefined) return;
      const v = row ? pct(row[col]) : null;
      if (v !== null) dataMap[m] = v;
    });
    return { ...cfg, data: dataMap };
  }).filter((m) => Object.keys(m.data).length > 0);

  if (!data.paymentShare) data.paymentShare = {};
  data.paymentShare.months = useMonths;
  data.paymentShare.methods = methods;
  console.log("✓ 결제수단 점유율:", useMonths.join(", "));
}

function writeData(data) {
  const out = "const OKR_DATA = " + JSON.stringify(data, null, 2) + ";\n";
  fs.writeFileSync(path.join(ROOT, "data.js"), out, "utf8");
}

function main() {
  console.log("시트 동기화 시작…");
  const mRows = gwsGet(METRICS_ID, `'${METRICS_SHEET}'!A1:AL44`);
  const tRows = gwsGet(TASKS_ID, "'♦️[OKR] 대시보드 1H♦️'!A1:AZ700");
  const payRows = gwsGet(PAY_ID, "'점유율(금액 기준, 보조결제수단 포함)'!A1:AZ25");

  const data = loadData();
  syncMetrics(data, mRows);
  syncTasks(data, tRows);
  syncPaymentShare(data, payRows);
  writeData(data);
  console.log("data.js 저장 완료");
}

main();
