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
const GIFT_ID = "1ZZS_fPvczdZk8EL_yNHcrW3Xp3O1o0nDI1bmsGNmNSc";
const GIFT_SHEET = "2026 발행금액 목표_2604ver.";
const GIFT_COL_START = 52; // 26년 1월
const GIFT_ANNUAL_COL = 69;

const AR_METHOD_NAMES = [
  "전체", "배민페이카드", "배민페이계좌", "배민페이머니",
  "신용/체크카드", "카카오페이", "네이버페이", "토스페이", "휴대폰"
];

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

function toEok(won) {
  if (won === null || won === undefined) return null;
  return Math.round(won / 1e8 * 10) / 10;
}

function r2(n) {
  return Math.round(n * 100) / 100;
}

function calcRate(kr, month) {
  const d = kr.monthly?.[month];
  if (!d) return null;
  const { actual, target } = d;
  if (kr.isLowerBetter) {
    if (target === 0) return actual === 0 ? 100 : 0;
    if (actual <= target) return 100;
    return r2((target / Math.max(actual, 0.01)) * 100);
  }
  if (target === 0) return actual === 0 ? 100 : actual > 0 ? 100 : 0;
  return r2((actual / target) * 100);
}

function getAllKRs(data) {
  const krs = [];
  data.objectives.forEach((obj) => {
    obj.keyResults.forEach((kr) => {
      krs.push({ ...kr, objId: obj.id, objTitle: obj.title });
    });
  });
  return krs;
}

function findKr(data, id) {
  for (const obj of data.objectives) {
    const kr = obj.keyResults.find((k) => k.id === id);
    if (kr) return kr;
  }
  return null;
}

function monthLabelKo(m) {
  const [, mm] = m.split("-");
  return `${parseInt(mm, 10)}월`;
}

function fmtRate(r) {
  return r === null ? "-" : r.toFixed(2) + "%";
}

function giftCell(rows, rowIdx, monthIndex) {
  const col = GIFT_COL_START + monthIndex;
  const raw = rows[rowIdx]?.[col];
  const n = toNum(raw);
  return n !== null ? toEok(n) : null;
}

function syncGiftMetrics(data, giftRows) {
  const months = data.months.filter((_, i) => giftCell(giftRows, 6, i) !== null);
  const defs = [
    { name: "발행금액 전체", row: 6 },
    { name: "B2C (배민앱&PC)", row: 11 },
    { name: "B2B2C (카카오)", row: 13 },
    { name: "B2B (직접&대행)", row: 12 },
    { name: "B2B2C (그외채널)", row: 14 }
  ];

  const metrics = defs.map((def) => {
    const annualWon = toNum(giftRows[def.row]?.[GIFT_ANNUAL_COL]);
    const monthly = {};
    months.forEach((m, i) => {
      const v = giftCell(giftRows, def.row, data.months.indexOf(m));
      if (v !== null) monthly[m] = { actual: v };
    });
    return {
      name: def.name,
      unit: "억원",
      annualTarget: annualWon ? toEok(annualWon) : null,
      monthly
    };
  });

  const kr13 = findKr(data, "KR1-3");
  const orderMonthly = {};
  months.forEach((m) => {
    const d = kr13?.monthly?.[m];
    if (!d) return;
    orderMonthly[m] = {
      target: Math.round(d.target / 10000) / 100,
      actual: Math.round(d.actual / 10000) / 100
    };
  });

  data.giftMetrics = {
    annualTarget: toNum(giftRows[6]?.[GIFT_ANNUAL_COL]) || data.giftMetrics?.annualTarget || 0,
    months,
    metrics,
    orderCount: {
      name: "선물하기 주문수 (누적)",
      unit: "만건",
      annualTarget: kr13 ? Math.round(kr13.annualTarget / 10000) / 100 : 5680,
      monthly: orderMonthly
    },
    analysis: buildGiftAnalysis(data, months, metrics, orderMonthly)
  };
  console.log("✓ 선물하기 지표:", months.join(", "));
}

function buildGiftAnalysis(data, months, metrics, orderMonthly) {
  const analysis = {};
  const total = metrics.find((m) => m.name === "발행금액 전체");
  const kakao = metrics.find((m) => m.name === "B2B2C (카카오)");
  const b2c = metrics.find((m) => m.name === "B2C (배민앱&PC)");

  months.forEach((m, idx) => {
    const gaps = [];
    const ml = monthLabelKo(m);
    const oc = orderMonthly[m];
    const ocRate = oc && oc.target > 0 ? r2((oc.actual / oc.target) * 100) : null;
    const totalActual = total?.monthly?.[m]?.actual;
    const proRate = Math.round((idx + 1) / 12 * 1000) / 10;
    const ytd = metrics[0]?.monthly
      ? months.slice(0, idx + 1).reduce((s, mo) => s + (total.monthly[mo]?.actual || 0), 0)
      : null;
    const annualTarget = total?.annualTarget;
    const ytdPct = ytd && annualTarget ? r2((ytd / annualTarget) * 100) : null;

    if (ocRate !== null && ocRate < 90) {
      gaps.push({
        title: "주문수 누적 — 목표 대비 미달",
        detail: `${ml} 누적 실적 ${oc.actual}만건 / 목표 ${oc.target}만건 (${ocRate}%). KR1-3·선물하기 과제 진행 현황과 교차 확인 필요.`
      });
    }
    if (ytdPct !== null && ytdPct < proRate * 0.9) {
      gaps.push({
        title: "발행금액 전체 — 연간 진도율 하회",
        detail: `YTD ${ytd?.toFixed(1)}억 (연간목표 대비 ${ytdPct}%, ${idx + 1}월 기준선 ${proRate}%). 채널별 편차 확인 필요.`
      });
    }
    if (kakao?.monthly?.[m] && idx > 0) {
      const prev = months[idx - 1];
      const cur = kakao.monthly[m].actual;
      const prevV = kakao.monthly[prev]?.actual;
      if (prevV && cur < prevV) {
        gaps.push({
          title: "B2B2C(카카오) — 전월 대비 하락",
          detail: `${prevV}억 → ${cur}억. 제휴·프로모션 일정과 대조 필요.`
        });
      }
    }
    if (b2c?.monthly?.[m] && idx > 0) {
      const prev = months[idx - 1];
      const cur = b2c.monthly[m].actual;
      const prevV = b2c.monthly[prev]?.actual;
      if (prevV && cur > prevV * 1.15) {
        gaps.push({
          title: "B2C — 전월 대비 반등",
          detail: `${prevV}억 → ${cur}억. 앱·PC 채널 개선 신호로 해석 가능.`
        });
      }
    }

    const summaryParts = [];
    if (ocRate !== null) summaryParts.push(`누적 주문수 달성률 ${ocRate}%`);
    if (totalActual !== null) summaryParts.push(`발행금액 ${totalActual}억`);
    analysis[m] = {
      summary: `${ml} 선물하기 지표: ${summaryParts.join(", ") || "데이터 확인"}. (자동 생성·${GIFT_SHEET}·KR1-3 기준)`,
      gaps
    };
  });
  return analysis;
}

function syncArMetrics(data) {
  const months = data.months;
  const kr31 = findKr(data, "KR3-1");
  const overall = {};
  months.forEach((m) => {
    if (kr31?.monthly?.[m]) overall[m] = kr31.monthly[m].actual;
  });

  const prevMethods = data.arMetrics?.methods || [];
  const methods = AR_METHOD_NAMES.map((name) => {
    const prev = prevMethods.find((m) => m.name === name) || {};
    const blank = {};
    months.forEach((m) => { blank[m] = null; });
    return {
      name,
      sr: { ...blank, ...(prev.sr || {}) },
      rr: { ...blank, ...(prev.rr || {}) },
      fr: { ...blank, ...(prev.fr || {}) },
      ar: { ...blank, ...(prev.ar || {}) }
    };
  });

  // 전체 AR은 KR3-1 실적으로 채움 (수단별 SR/RR/FR은 Zeppelin 수동)
  const all = methods.find((m) => m.name === "전체");
  if (all) {
    months.forEach((m) => {
      if (overall[m] != null) all.ar[m] = overall[m];
    });
  }

  data.arMetrics = {
    description: data.arMetrics?.description || "결제수단별 AR(Authorization Rate) — 결제 성공률 (AR = SR + RR)",
    source: data.arMetrics?.source || "Zeppelin SR/RR/FR 노트북 (수단별) + KR3-1(전체 AR)",
    note: data.arMetrics?.note || "데이터 기준: 월별 집계 / 보조결제수단 제외 / B2B 제외 / AR = SR + RR",
    months,
    overall,
    methods
  };
  console.log("✓ AR 지표: 전체 AR", months.join(", "), "(수단별 SR/RR/FR은 Zeppelin 수동)");
}

function buildAiReports(data) {
  const reports = {};
  data.months.forEach((month) => {
    const krs = getAllKRs(data);
    const rated = krs
      .map((kr) => ({ kr, rate: calcRate(kr, month) }))
      .filter((x) => x.rate !== null);

    const onTrack = rated.filter((x) => x.rate >= 90);
    const atRisk = rated.filter((x) => x.rate >= 70 && x.rate < 90);
    const offTrack = rated.filter((x) => x.rate < 70);

    const achievements = onTrack.slice(0, 5).map(({ kr, rate }) => {
      const d = kr.monthly[month];
      const short = kr.title.length > 36 ? kr.title.slice(0, 36) + "…" : kr.title;
      return `${short} — 달성률 ${fmtRate(rate)} (실적 ${d.actual} / 목표 ${d.target})`;
    });

    const risks = [...offTrack, ...atRisk].slice(0, 6).map(({ kr, rate }) => {
      const d = kr.monthly[month];
      const short = kr.title.length > 32 ? kr.title.slice(0, 32) + "…" : kr.title;
      return `${short} — 달성률 ${fmtRate(rate)} (실적 ${d.actual} / 목표 ${d.target})`;
    });

    const recommendations = offTrack.slice(0, 3).map(({ kr }) => {
      const pending = (kr.tasks || []).filter((t) => t.status === "진행중" || t.status === "계획중");
      const taskHint = pending.length ? ` 관련 과제 ${pending.length}건(진행/계획) 일정 점검.` : "";
      return `${kr.id} ${kr.title.slice(0, 40)}… — 미달 원인 분석 및 액션플랜 수립.${taskHint}`;
    });
    if (recommendations.length === 0 && atRisk.length) {
      recommendations.push(`${atRisk[0].kr.id} 주의 구간 — 목표 대비 추이 모니터링 및 2주 내 중간 점검.`);
    }

    const ml = monthLabelKo(month);
    reports[month] = {
      summary: `${ml} OKR 자동 분석: 순항 ${onTrack.length}건 / 주의 ${atRisk.length}건 / 미달 ${offTrack.length}건 (KR ${rated.length}개 기준·결정실 okr 시트·과제 시트 동기화 데이터).`,
      achievements: achievements.length ? achievements : ["해당 월 목표 달성(90%+) KR 없음 — 세부 수치 확인 필요."],
      risks: risks.length ? risks : ["주요 리스크 KR 없음 — 전체 순항 구간."],
      recommendations: recommendations.length ? recommendations : ["현 추세 유지 — 다음 월 목표 페이스 점검."]
    };
  });
  data.aiReports = reports;
  console.log("✓ OKR AI 리포트:", data.months.join(", "));
}

function appendPayShareAnalysis(data) {
  if (!data.paymentShare?.methods?.length) return;
  const months = data.paymentShare.months || [];
  if (!data.paymentShare.analysis) data.paymentShare.analysis = {};
  const existing = data.paymentShare.analysis;

  months.forEach((month, idx) => {
    if (idx === 0 || existing[month]) return;
    const prev = months[idx - 1];
    const changes = [];
    data.paymentShare.methods.forEach((m) => {
      const cur = m.data[month];
      const pv = m.data[prev];
      if (cur == null || pv == null) return;
      const delta = r2(cur - pv);
      if (Math.abs(delta) < 0.05) return;
      const sign = delta > 0 ? "+" : "";
      changes.push({
        method: m.name,
        delta: `${sign}${delta.toFixed(2)}%p (${pv.toFixed(2)}% → ${cur.toFixed(2)}%)`,
        reason: `${monthLabelKo(month)} 전월 대비 점유율 변화. 프로모션·결제수단 정책 등은 그로스기획실 월별 위키와 교차 확인 필요.`
      });
    });
    changes.sort((a, b) => {
      const bamin = ["배민페이(전체)", "배민페이카드", "배민페이머니", "배민페이계좌"];
      const ai = bamin.indexOf(a.method), bi = bamin.indexOf(b.method);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return Math.abs(parseFloat(b.delta)) - Math.abs(parseFloat(a.delta));
    });
    existing[month] = {
      summary: `${monthLabelKo(month)} 전월 대비 주요 결제수단 점유율 변화 요약 (점유율 시트 기준·자동 생성).`,
      changes: changes.slice(0, 8)
    };
  });
  console.log("✓ 점유율 AI 분석: 신규 월만 자동 보충");
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
  const giftRows = gwsGet(GIFT_ID, `'${GIFT_SHEET}'!A1:BZ25`);

  const data = loadData();
  syncMetrics(data, mRows);
  syncTasks(data, tRows);
  syncPaymentShare(data, payRows);
  syncGiftMetrics(data, giftRows);
  syncArMetrics(data);
  buildAiReports(data);
  appendPayShareAnalysis(data);
  writeData(data);
  console.log("data.js 저장 완료");
}

main();
