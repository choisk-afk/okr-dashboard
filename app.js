(function () {
  const state = {
    currentMonthIndex: OKR_DATA.months.length - 1,
    currentSection: "overview",
    taskFilter: "all",
    charts: {}
  };

  function getCurrentMonth() {
    return OKR_DATA.months[state.currentMonthIndex];
  }

  function getMonthDisplayLabel(monthStr) {
    const [y, m] = monthStr.split("-");
    return `${y}년 ${parseInt(m)}월`;
  }

  function r2(n) { return Math.round(n * 100) / 100; }

  function calcRate(kr, month) {
    const d = kr.monthly[month];
    if (!d) return null;
    const actual = d.actual;
    const target = d.target;

    if (kr.isLowerBetter) {
      if (target === 0) return actual === 0 ? 100 : 0;
      if (actual <= target) return 100;
      return r2((target / Math.max(actual, 0.01)) * 100);
    }

    if (target === 0) return actual === 0 ? 100 : (actual > 0 ? 100 : 0);
    return r2((actual / target) * 100);
  }

  function calcObjectiveRate(obj, month) {
    const rates = obj.keyResults
      .map(kr => calcRate(kr, month))
      .filter(r => r !== null);
    if (rates.length === 0) return 0;
    return r2(rates.reduce((a, b) => a + b, 0) / rates.length);
  }

  function calcOverallRate(month) {
    const rates = OKR_DATA.objectives.map(o => calcObjectiveRate(o, month));
    return r2(rates.reduce((a, b) => a + b, 0) / rates.length);
  }

  function fmtRate(r) { return r !== null ? r.toFixed(2) + "%" : "-"; }

  function rateClass(r) {
    if (r >= 90) return "high";
    if (r >= 70) return "mid";
    return "low";
  }

  function rateColor(r) {
    if (r >= 90) return "var(--success)";
    if (r >= 70) return "var(--warning)";
    return "var(--danger)";
  }

  function formatValue(val, unit) {
    if (val === null || val === undefined) return "-";
    if (Array.isArray(val)) return val.map((v, i) => v + (unit ? unit : "%")).join(" / ");
    if (unit === "억원") return val.toFixed(2) + unit;
    if (unit === "%") return val.toFixed(2) + unit;
    if (unit === "원") return val.toLocaleString() + unit;
    if (unit === "$") return "$" + val.toLocaleString();
    return val.toLocaleString() + (unit ? " " + unit : "");
  }

  function formatDisplay(kr, val) {
    if (val === null || val === undefined) return "-";
    if (kr.isComposite && Array.isArray(val)) {
      return kr.subMetrics.map((sm, i) => `${val[i]}${sm.unit}`).join(" / ");
    }
    return formatValue(val, kr.unit);
  }

  function getTrend(kr, monthIndex) {
    if (monthIndex <= 0) return null;
    const prev = calcRate(kr, OKR_DATA.months[monthIndex - 1]);
    const cur = calcRate(kr, OKR_DATA.months[monthIndex]);
    if (prev === null || cur === null) return null;
    return cur - prev;
  }

  function isCompleted(status) {
    return status === "완료" || status === "과제완료" || status === "실험완료, Roll-out" || (status || "").startsWith("과제완료");
  }

  function isNewTask(t) {
    return t.addedMonth === getCurrentMonth();
  }

  function newBadge() {
    return '<span class="task-new-badge">NEW</span>';
  }

  function getStatusCounts() {
    const all = [];
    OKR_DATA.objectives.forEach(obj => {
      obj.keyResults.forEach(kr => {
        kr.tasks.forEach(t => all.push(t));
      });
    });
    return {
      total: all.length,
      완료: all.filter(t => isCompleted(t.status)).length,
      진행중: all.filter(t => t.status === "진행중").length,
      계획중: all.filter(t => t.status === "계획중").length,
      기타: all.filter(t => ["홀딩", "드랍"].includes(t.status)).length,
      all
    };
  }

  // Navigation
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const section = item.dataset.section;
      state.currentSection = section;
      document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
      document.getElementById(section).classList.add("active");
      document.getElementById("pageTitle").textContent = item.textContent.trim();
      render();
    });
  });

  document.getElementById("prevMonth").addEventListener("click", () => {
    if (state.currentMonthIndex > 0) { state.currentMonthIndex--; render(); }
  });
  document.getElementById("nextMonth").addEventListener("click", () => {
    if (state.currentMonthIndex < OKR_DATA.months.length - 1) { state.currentMonthIndex++; render(); }
  });

  function updateMonthSelector() {
    document.getElementById("monthLabel").textContent = getMonthDisplayLabel(getCurrentMonth());
    document.getElementById("prevMonth").disabled = state.currentMonthIndex === 0;
    document.getElementById("nextMonth").disabled = state.currentMonthIndex === OKR_DATA.months.length - 1;
  }

  function render() {
    updateMonthSelector();
    renderOverview();
    renderOKRDetail();
    renderTasks();
    renderOrgView();
    renderAIReport();
  }

  // ─── Overview ───
  function getAllKRs() {
    const krs = [];
    OKR_DATA.objectives.forEach(obj => {
      obj.keyResults.forEach(kr => krs.push({ ...kr, objId: obj.id, objTitle: obj.title, objSub: obj.subtitle }));
    });
    return krs;
  }

  function renderOverview() {
    const month = getCurrentMonth();
    const allKRs = getAllKRs();
    const counts = getStatusCounts();

    const krRates = allKRs.map(kr => calcRate(kr, month)).filter(r => r !== null);
    const avgRate = krRates.length ? r2(krRates.reduce((a, b) => a + b, 0) / krRates.length) : 0;
    const onTrack = krRates.filter(r => r >= 90).length;
    const atRisk = krRates.filter(r => r >= 70 && r < 90).length;
    const offTrack = krRates.filter(r => r < 70).length;

    let prevRates = null;
    if (state.currentMonthIndex > 0) {
      const pm = OKR_DATA.months[state.currentMonthIndex - 1];
      const prev = allKRs.map(kr => calcRate(kr, pm)).filter(r => r !== null);
      prevRates = prev.length ? r2(prev.reduce((a, b) => a + b, 0) / prev.length) : 0;
    }
    const diff = prevRates !== null ? r2(avgRate - prevRates) : null;

    const el = document.getElementById("overview");
    el.innerHTML = `
      <div class="overview-grid" style="grid-template-columns:repeat(4,1fr);">
        <div class="summary-card blue">
          <div class="summary-label">KR 평균 달성률</div>
          <div class="summary-value">${avgRate.toFixed(2)}%</div>
          ${diff !== null
            ? `<div class="summary-sub ${diff >= 0 ? "trend-up" : "trend-down"}">${diff >= 0 ? "▲" : "▼"} 전월 대비 ${Math.abs(diff).toFixed(2)}%p</div>`
            : '<div class="summary-sub">첫 달 데이터</div>'}
        </div>
        <div class="summary-card green">
          <div class="summary-label">순항 (≥90%)</div>
          <div class="summary-value">${onTrack}<span style="font-size:18px;color:var(--text-muted)"> / ${allKRs.length} KR</span></div>
        </div>
        <div class="summary-card orange">
          <div class="summary-label">주의 (70~89%)</div>
          <div class="summary-value">${atRisk}<span style="font-size:18px;color:var(--text-muted)">개</span></div>
        </div>
        <div class="summary-card" style="position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--danger);"></div>
          <div class="summary-label">미달 (<70%)</div>
          <div class="summary-value">${offTrack}<span style="font-size:18px;color:var(--text-muted)">개</span></div>
        </div>
      </div>

      <div class="chart-row">
        <div class="card">
          <div class="card-title">KR별 달성률 — ${getMonthDisplayLabel(month)}</div>
          <div class="chart-container" style="height:360px;"><canvas id="krBarChart"></canvas></div>
        </div>
        <div class="card">
          <div class="card-title">KR 월별 추이</div>
          <div class="chart-container" style="height:360px;"><canvas id="trendChart"></canvas></div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">KR 달성 현황 — ${getMonthDisplayLabel(month)}</div>
        <div style="overflow-x:auto;">
          <table class="task-table">
            <thead>
              <tr>
                <th>Key Result</th>
                <th>목표</th>
                <th>실적</th>
                <th>달성률</th>
                <th>추이</th>
                <th>과제</th>
              </tr>
            </thead>
            <tbody>
              ${allKRs.map(kr => {
                const d = kr.monthly[month];
                const rate = calcRate(kr, month);
                const trend = getTrend(kr, state.currentMonthIndex);
                const taskDone = kr.tasks.filter(t => isCompleted(t.status)).length;
                const taskTotal = kr.tasks.length;
                return `<tr>
                  <td>
                    <span style="font-size:11px;color:var(--accent);font-weight:600;">${kr.objId}</span>
                    <div style="font-size:13px;font-weight:500;margin-top:2px;">${kr.title}</div>
                  </td>
                  <td>${d ? formatDisplay(kr, d.target) : "-"}</td>
                  <td style="font-weight:600;">${d ? formatDisplay(kr, d.actual) : "-"}</td>
                  <td><span style="font-weight:700;color:${rateColor(rate)};">${fmtRate(rate)}</span></td>
                  <td>${trend !== null ? `<span class="${trend >= 0 ? "trend-up" : "trend-down"}">${trend >= 0 ? "▲" : "▼"} ${Math.abs(trend).toFixed(2)}%p</span>` : "-"}</td>
                  <td><span style="font-size:13px;">${taskDone}/${taskTotal}</span></td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    renderKRBarChart(month, allKRs);
    renderTrendChart(allKRs);
  }

  function renderKRBarChart(month, allKRs) {
    if (state.charts.obj) state.charts.obj.destroy();
    const ctx = document.getElementById("krBarChart");
    if (!ctx) return;

    const labels = allKRs.map(kr => kr.title.length > 25 ? kr.title.slice(0, 25) + "…" : kr.title);
    const data = allKRs.map(kr => calcRate(kr, month) || 0);
    const colors = data.map(d => d >= 90 ? "#10b981" : d >= 70 ? "#f59e0b" : "#ef4444");

    state.charts.obj = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets: [{ data, backgroundColor: colors, borderRadius: 4, maxBarThickness: 32 }] },
      options: {
        indexAxis: "y",
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, max: 120, ticks: { callback: v => v + "%" } },
          y: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });
  }

  function renderTrendChart(allKRs) {
    if (state.charts.trend) state.charts.trend.destroy();
    const ctx = document.getElementById("trendChart");
    if (!ctx) return;

    const labels = OKR_DATA.months.map(m => OKR_DATA.monthLabels[m]);
    const hues = ["#4f6ef7","#10b981","#f59e0b","#a78bfa","#ec4899","#ef4444","#06b6d4","#6b7280","#8b5cf6","#f97316","#14b8a6"];
    const datasets = allKRs.map((kr, i) => ({
      label: kr.title.length > 20 ? kr.title.slice(0, 20) + "…" : kr.title,
      data: OKR_DATA.months.map(m => calcRate(kr, m) || 0),
      borderColor: hues[i % hues.length], backgroundColor: hues[i % hues.length] + "20",
      tension: 0.3, fill: false, pointRadius: 3, pointHoverRadius: 5, borderWidth: 2
    }));

    state.charts.trend = new Chart(ctx, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { usePointStyle: true, padding: 12, font: { size: 10 } } } },
        scales: {
          y: { beginAtZero: true, max: 120, ticks: { callback: v => v + "%" } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // ─── OKR Detail ───
  function taskStatusLabel(t) {
    const completed = isCompleted(t.status);
    const status = completed ? "과제완료" : t.status;

    let dateStr = "";
    if (completed && t.completedDate) {
      dateStr = t.completedDate;
    } else if ((status === "진행중" || status === "계획중") && t.targetDate) {
      dateStr = `~${t.targetDate}`;
    } else if (status === "홀딩" && t.targetDate) {
      dateStr = `${t.targetDate} 홀딩`;
    } else if (status === "드랍" && t.targetDate) {
      dateStr = `${t.targetDate} 드랍`;
    }

    return { status, dateStr };
  }

  function renderOKRDetail() {
    const month = getCurrentMonth();
    const el = document.getElementById("okr-detail");

    const legend = ``;

    el.innerHTML = legend + OKR_DATA.objectives.map(obj => {
      return `
        <div class="objective-block">
          <div class="objective-header" onclick="this.nextElementSibling.classList.toggle('open'); this.querySelector('.expand-icon').classList.toggle('open')">
            <div class="obj-left">
              <span class="obj-badge">${obj.id}</span>
              <div>
                <div class="obj-title">${obj.title}</div>
                <div class="obj-owner">${obj.subtitle}</div>
              </div>
            </div>
            <div style="display:flex;align-items:center;">
              <svg class="expand-icon open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>
          <div class="obj-body open">
            ${obj.keyResults.map(kr => {
              const d = kr.monthly[month];
              const rate = calcRate(kr, month);
              const rc = rateClass(rate);
              const krUid = `tasks-${kr.id.replace(/[^a-z0-9]/gi, "-")}`;
              const cumNote = kr.isCumulative
                ? `<span style="font-size:11px;color:var(--text-muted);margin-left:8px;">📈 누적</span>`
                : "";
              return `
                <div class="kr-item">
                  <div class="kr-top">
                    <div style="display:flex;align-items:center;flex-wrap:wrap;">
                      <span class="kr-id">${kr.id}</span>
                      <span class="kr-title">${kr.title}</span>
                      ${cumNote}
                    </div>
                    <div class="kr-numbers">
                      <span class="kr-target">목표 ${d ? formatDisplay(kr, d.target) : "-"}</span>
                      <span class="kr-actual" style="color:${rateColor(rate)}">실적 ${d ? formatDisplay(kr, d.actual) : "-"}</span>
                      <span style="font-weight:700;color:${rateColor(rate)}">달성률 ${fmtRate(rate)}</span>
                    </div>
                  </div>
                  <div class="kr-progress-bar">
                    <div class="kr-progress-fill ${rc}" style="width:${Math.min(rate||0,100)}%"></div>
                  </div>
                  ${kr.baselineLabel ? `<div style="font-size:11px;color:var(--text-muted);margin-bottom:10px;">기준: ${kr.baselineLabel}</div>` : ""}
                  ${kr.subKRs ? `
                    <div class="subkr-block">
                      <div class="subkr-header">
                        <span class="subkr-title-label">Sub-KR</span>
                        <span class="subkr-month">${getMonthDisplayLabel(month)} 기준</span>
                      </div>
                      <div class="subkr-list">
                        ${kr.subKRs.map(sub => {
                          const sd = sub.monthly[month];
                          if (!sd) return "";
                          const subRate = sd.t === 0 ? (sd.a === 0 ? 100 : 0) : r2((sd.a / sd.t) * 100);
                          const rc = rateClass(subRate);
                          return `
                            <div class="subkr-item">
                              <div class="subkr-item-top">
                                <span class="subkr-label">${sub.label}</span>
                                <span class="subkr-rate ${rc}">${subRate.toFixed(2)}%</span>
                              </div>
                              <div class="subkr-nums">
                                <span class="subkr-num-target">목표 <strong>${formatValue(sd.t, kr.unit)}</strong></span>
                                <span class="subkr-num-arrow">→</span>
                                <span class="subkr-num-actual ${rc}">실적 <strong>${formatValue(sd.a, kr.unit)}</strong></span>
                              </div>
                              <div class="kr-progress-bar" style="margin-bottom:0;margin-top:6px;">
                                <div class="kr-progress-fill ${rc}" style="width:${Math.min(subRate,100)}%"></div>
                              </div>
                            </div>
                          `;
                        }).join("")}
                      </div>
                    </div>
                  ` : ""}
                  ${kr.tasks.length > 0 ? `
                    <button class="kr-tasks-toggle" onclick="(function(btn){
                      const box = document.getElementById('${krUid}');
                      const open = box.classList.toggle('open');
                      btn.querySelector('.toggle-label').textContent = open ? '과제 접기' : '과제 ${kr.tasks.length}건 보기';
                      btn.querySelector('.toggle-icon').style.transform = open ? 'rotate(180deg)' : '';
                    })(this)">
                      <svg class="toggle-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition:transform .2s"><polyline points="6 9 12 15 18 9"/></svg>
                      <span class="toggle-label">과제 ${kr.tasks.length}건 보기</span>
                    </button>
                    <div class="kr-tasks" id="${krUid}">
                      ${kr.tasks.map(t => {
                        const { status, dateStr } = taskStatusLabel(t);
                        const linkHref = t.wikiLink || t.jiraLink || t.link || "";
                        const linkBadge = t.wikiLink
                          ? `<span class="task-link-badge wiki">Wiki</span>`
                          : t.jiraLink
                          ? `<span class="task-link-badge jira">Jira</span>`
                          : "";
                        const nameWithBadge = `<span class="kr-task-name-wrap"><span class="kr-task-name-text">${t.name}</span>${isNewTask(t) ? newBadge() : ""}</span>`;
                        const inner = `
                          <span class="task-label task-label-${status}">${status}</span>
                          ${nameWithBadge}
                          ${linkBadge}
                          <span class="dept">${t.team}</span>
                          <span class="kr-task-date">${dateStr || "-"}</span>
                        `;
                        return linkHref
                          ? `<a class="kr-task-tag" href="${linkHref}" target="_blank" rel="noopener">${inner}</a>`
                          : `<div class="kr-task-tag">${inner}</div>`;
                      }).join("")}
                    </div>
                  ` : ""}
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  // ─── Tasks ───
  function renderTasks() {
    const allTasks = [];
    OKR_DATA.objectives.forEach(obj => {
      obj.keyResults.forEach(kr => {
        kr.tasks.forEach(t => {
          allTasks.push({ ...t, objective: obj.title, objId: obj.id, objSub: obj.subtitle, kr: kr.title, krId: kr.id });
        });
      });
    });

    const statuses = ["all", "과제완료", "진행중", "계획중"];
    const filtered = state.taskFilter === "all" ? allTasks :
      state.taskFilter === "과제완료" ? allTasks.filter(t => isCompleted(t.status)) :
      allTasks.filter(t => t.status === state.taskFilter);

    const el = document.getElementById("tasks");
    el.innerHTML = `
      <div class="filter-bar">
        ${statuses.map(s => `
          <button class="filter-btn ${state.taskFilter === s ? "active" : ""}" data-filter="${s}">
            ${s === "all" ? "전체" : s} (${s === "all" ? allTasks.length : s === "과제완료" ? allTasks.filter(t => isCompleted(t.status)).length : allTasks.filter(t => t.status === s).length})
          </button>
        `).join("")}
      </div>
      <div class="card">
        <div style="overflow-x:auto;">
          <table class="task-table">
            <thead>
              <tr>
                <th>과제명</th>
                <th>OKR</th>
                <th>담당 팀</th>
                <th>목표일</th>
                <th>상태</th>
                <th>바로가기</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(t => {
                const statusLabel = isCompleted(t.status) ? "과제완료" : t.status;
                const statusClass = isCompleted(t.status) ? "과제완료" : t.status;
                const jiraIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline;vertical-align:middle;"><path d="M11.571 11.429 6 5.714 11.571 0l5.572 5.714-5.572 5.715Zm0 0L17.143 17 11.57 22.714 6 17l5.571-5.571Z" stroke="#0052CC" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
                const wikiIcon = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0065FF" stroke-width="2" style="display:inline;vertical-align:middle;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>`;
                return `
                <tr>
                  <td style="font-weight:500;">${t.name}${isNewTask(t) ? " " + newBadge() : ""}</td>
                  <td>
                    <span style="color:var(--accent);font-weight:600;">${t.objId}</span>
                    <span style="font-size:12px;color:var(--text-muted);">${t.krId}</span>
                  </td>
                  <td>${t.team}</td>
                  <td><span style="font-size:13px;">${t.targetDate || "-"}</span></td>
                  <td><span class="status-badge ${statusClass}"><span class="task-status ${statusClass}"></span>${statusLabel}</span></td>
                  <td>
                    <div style="display:flex;gap:5px;">
                      ${t.jiraLink ? `<a href="${t.jiraLink}" target="_blank" rel="noopener" class="task-link-btn jira">${jiraIcon} Jira</a>` : ""}
                      ${t.wikiLink ? `<a href="${t.wikiLink}" target="_blank" rel="noopener" class="task-link-btn wiki">${wikiIcon} Wiki</a>` : ""}
                      ${t.link && !t.jiraLink && !t.wikiLink ? `<a href="${t.link}" target="_blank" rel="noopener" class="task-link-btn wiki">${wikiIcon} 링크</a>` : ""}
                      ${!t.jiraLink && !t.wikiLink && !t.link ? `<span style="color:var(--text-muted);font-size:12px;">-</span>` : ""}
                    </div>
                  </td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    el.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => { state.taskFilter = btn.dataset.filter; renderTasks(); });
    });
  }

  // ─── Org View ───
  function renderOrgView() {
    const teamMap = {};
    OKR_DATA.objectives.forEach(obj => {
      obj.keyResults.forEach(kr => {
        kr.tasks.forEach(t => {
          if (!teamMap[t.team]) teamMap[t.team] = [];
          teamMap[t.team].push({ ...t, objId: obj.id, objSub: obj.subtitle, krId: kr.id, krTitle: kr.title });
        });
      });
    });

    function renderOrgTask(t) {
      const taskLink = t.wikiLink || t.jiraLink || t.link || "";
      const newMark = isNewTask(t) ? ' <span class="task-new-badge">NEW</span>' : '';
      const nameEl = taskLink
        ? '<a class="org-task-name org-task-link" href="' + taskLink + '" target="_blank" rel="noopener">' + t.name + newMark + '</a>'
        : '<div class="org-task-name">' + t.name + newMark + '</div>';
      const stCls = isCompleted(t.status) ? "과제완료" : t.status;
      const stDot = isCompleted(t.status) ? "완료" : t.status;
      const stLabel = isCompleted(t.status) ? "완료" : t.status;
      return '<div class="org-task-item">'
        + '<span class="org-task-okr">' + t.objId + ' / ' + t.krId + '</span>'
        + '<div class="org-task-info">'
        + nameEl
        + '<div class="org-task-status">'
        + '<span class="status-badge ' + stCls + '"><span class="task-status ' + stDot + '"></span>' + stLabel + '</span>'
        + '</div></div></div>';
    }

    function renderOrgCard(team, tasks) {
      return '<div class="org-card">'
        + '<div class="org-card-header"><h3>' + team + '</h3>'
        + '<div class="org-task-count">과제 ' + tasks.length + '건 · 완료 ' + tasks.filter(t => isCompleted(t.status)).length + '건 · 진행중 ' + tasks.filter(t => t.status === "진행중").length + '건</div>'
        + '</div>'
        + '<div class="org-task-list">' + tasks.map(renderOrgTask).join("") + '</div>'
        + '</div>';
    }

    const el = document.getElementById("org-view");
    el.innerHTML = '<div class="org-grid">' + Object.entries(teamMap).map(([team, tasks]) => renderOrgCard(team, tasks)).join("") + '</div>';
  }

  // ─── AI Report ───
  function renderAIReport() {
    const month = getCurrentMonth();
    const report = OKR_DATA.aiReports[month];
    const el = document.getElementById("ai-report");

    if (!report) {
      el.innerHTML = `
        <div class="card" style="text-align:center;padding:60px 20px;">
          <div style="font-size:48px;margin-bottom:16px;">📊</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:8px;">해당 월의 AI 리포트가 없습니다</div>
          <div style="color:var(--text-muted);font-size:14px;">데이터가 수집되면 자동으로 리포트가 생성됩니다.</div>
        </div>
      `;
      return;
    }

    el.innerHTML = `
      <div class="ai-report-card">
        <div class="ai-report-header">
          <div class="ai-icon">✦</div>
          <div>
            <h2>AI 월간 분석 리포트</h2>
            <p>${getMonthDisplayLabel(month)} · ${OKR_DATA.orgName}</p>
          </div>
        </div>
        <div class="ai-report-body">
          <div class="ai-summary">${report.summary}</div>

          <div class="ai-section">
            <div class="ai-section-title"><span class="icon green">✓</span>주요 성과</div>
            <ul class="ai-list achievements">${report.achievements.map(a => `<li>${a}</li>`).join("")}</ul>
          </div>

          <div class="ai-section">
            <div class="ai-section-title"><span class="icon orange">!</span>리스크 및 미달성 원인</div>
            <ul class="ai-list risks">${report.risks.map(r => `<li>${r}</li>`).join("")}</ul>
          </div>

          <div class="ai-section">
            <div class="ai-section-title"><span class="icon blue">→</span>개선 권고사항</div>
            <ul class="ai-list recommendations">${report.recommendations.map(r => `<li>${r}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    `;
  }

  render();

  // ─── 구글시트 업데이트 ───
  const METRICS_CSV_URL = "https://docs.google.com/spreadsheets/d/1ZfCB3XwmRPFRT446uGYrVVT29LdgJ71KlyyPBI4_KpE/export?format=csv&gid=1098880899";
  const TASKS_CSV_URL   = "https://docs.google.com/spreadsheets/d/1j9oC2lhIt0cgOFZ7L-iEtMopsFnFUNaQQZkqxHBaSSU/export?format=csv&gid=1293403084";

  // actual: col 14~19 (1~6월), target: col 26~31 (1~6월)
  const MONTH_KEYS = ["2026-01","2026-02","2026-03","2026-04","2026-05","2026-06"];
  const ACTUAL_COLS = [14,15,16,17,18,19];
  const TARGET_COLS = [26,27,28,29,30,31];

  // 월별 수치 시트 행 인덱스 (0-based)
  const KR_ROW = {
    "KR1-1": 5,  "KR1-2": 10, "KR1-3": 14,
    "KR2-1": 18, "KR2-2": 19,
    "KR3-1": 21, "KR3-2": 22, "KR3-3": 24,
    "KR4-1": 31, "KR4-2": 37, "KR4-3": 38, "KR4-4": 39
  };

  // Sub-KR 행 인덱스
  const SUBKR_ROW = {
    "KR1-1": [6,7,8,9],    // 카드/계좌/머니/휴대폰
    "KR1-3": [15,16],       // 배민상품권/외부교환권
    "KR3-3": [25,26,27,28,29], // 팀별 CS
    "KR4-1": [32,33,34,35]  // 팀별 운영시간
  };

  function parseCSV(text) {
    return text.split("\n").map(line => {
      const cols = []; let cur = "", inQ = false;
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') { inQ = !inQ; continue; }
        if (line[i] === "," && !inQ) { cols.push(cur.trim()); cur = ""; continue; }
        cur += line[i];
      }
      cols.push(cur.trim());
      return cols;
    });
  }

  function toNum(s) {
    if (!s) return null;
    const n = parseFloat(s.replace(/[%$,\s원시간건]/g, "").replace(",", ""));
    return isNaN(n) ? null : n;
  }

  function detectMonths(rows) {
    // 실 KR 행(5)의 actual 컬럼에 값 있는 월만 추출
    const base = rows[5] || [];
    const available = [];
    ACTUAL_COLS.forEach((col, i) => {
      if (toNum(base[col]) !== null) available.push(MONTH_KEYS[i]);
    });
    return available;
  }

  function getLabel(m) {
    const [,mm] = m.split("-");
    return parseInt(mm) + "월";
  }

  window.updateFromSheets = async function () {
    const btn = document.getElementById("update-btn");
    btn.disabled = true;
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 1s linear infinite"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg> 불러오는 중...';

    try {
      const [mRes, tRes] = await Promise.all([
        fetch(METRICS_CSV_URL), fetch(TASKS_CSV_URL)
      ]);
      if (!mRes.ok || !tRes.ok) throw new Error("시트 접근 실패 — 공개 공유 여부를 확인해주세요.");

      const [mCSV, tCSV] = await Promise.all([mRes.text(), tRes.text()]);
      const mRows = parseCSV(mCSV);
      const tRows = parseCSV(tCSV);

      // 1. 사용 가능한 월 업데이트
      const months = detectMonths(mRows);
      if (!months.length) throw new Error("수치 데이터 없음 — 시트를 확인해주세요.");
      OKR_DATA.months = months;
      OKR_DATA.monthLabels = {};
      months.forEach(m => OKR_DATA.monthLabels[m] = getLabel(m));

      // 2. 각 KR 월별 수치 업데이트
      OKR_DATA.objectives.forEach(obj => {
        obj.keyResults.forEach(kr => {
          const rowIdx = KR_ROW[kr.id];
          if (rowIdx === undefined) return;
          const row = mRows[rowIdx];
          if (!row) return;

          kr.monthly = {};
          months.forEach((m, i) => {
            const a = toNum(row[ACTUAL_COLS[i]]);
            const t = toNum(row[TARGET_COLS[i]]);
            if (a !== null || t !== null) {
              kr.monthly[m] = { actual: a ?? 0, target: t ?? 0 };
            }
          });

          // Sub-KR 업데이트
          if (kr.subKRs && SUBKR_ROW[kr.id]) {
            SUBKR_ROW[kr.id].forEach((subRowIdx, si) => {
              if (!kr.subKRs[si]) return;
              const sRow = mRows[subRowIdx] || [];
              kr.subKRs[si].monthly = {};
              months.forEach((m, i) => {
                const a = toNum(sRow[ACTUAL_COLS[i]]);
                const t = toNum(sRow[TARGET_COLS[i]]);
                if (a !== null || t !== null) {
                  kr.subKRs[si].monthly[m] = { a: a ?? 0, t: t ?? 0 };
                }
              });
            });
          }
        });
      });

      // 3. 과제 상태 업데이트 (결제정산프로덕트실 행, col4=실, col7=과제명, col27=상태, col22=목표일, col23=완료일)
      const taskMap = {};
      tRows.forEach(row => {
        if (row[4] && row[4].includes("결제정산") && row[7]) {
          taskMap[row[7].trim()] = { status: row[27] || "", targetDate: row[22] || "", completedDate: row[23] || "" };
        }
      });

      OKR_DATA.objectives.forEach(obj => {
        obj.keyResults.forEach(kr => {
          kr.tasks.forEach(t => {
            const match = taskMap[t.name.trim()];
            if (!match) return;
            if (match.status) t.status = match.status.trim();
            if (match.targetDate) t.targetDate = match.targetDate.replace(/\./g, "-").replace(/\s/g, "").replace(/-+$/, "").replace(/^(\d{4})-(\d{1,2})-(\d{1,2})$/, (_, y,m,d) => `${y}-${m.padStart(2,"0")}-${d.padStart(2,"0")}`);
            if (match.completedDate) t.completedDate = match.completedDate.replace(/\./g, "-").replace(/\s/g, "").replace(/-+$/, "").replace(/^(\d{4})-(\d{1,2})-(\d{1,2})$/, (_, y,m,d) => `${y}-${m.padStart(2,"0")}-${d.padStart(2,"0")}`);
          });
        });
      });

      // 4. 최신 월로 이동 후 재렌더
      state.currentMonthIndex = OKR_DATA.months.length - 1;
      render();

      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 업데이트 완료';
      btn.style.background = "#10b981";
      setTimeout(() => {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg> 업데이트';
        btn.style.background = "#4f6ef7";
        btn.disabled = false;
      }, 2500);

    } catch (e) {
      const isAccess = e.message.includes("Failed to fetch") || e.message.includes("접근 실패");
      btn.innerHTML = isAccess ? "⚠ 시트 공개 설정 필요" : "⚠ " + e.message;
      btn.style.background = "#ef4444";
      if (isAccess) alert("구글 시트가 비공개 상태입니다.\n시트 → 공유 → '링크가 있는 모든 사용자' → 뷰어 로 설정해주세요.");
      setTimeout(() => {
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg> 업데이트';
        btn.style.background = "#4f6ef7";
        btn.disabled = false;
      }, 4000);
    }
  };
})();
