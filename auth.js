(function () {
  const ALLOWED = ["choisk@woowahan.com"];

  const KEY = "okr_auth_email";
  const overlay = document.getElementById("auth-overlay");
  let appBooted = false;

  function isAllowedEmail(email) {
    return ALLOWED.includes((email || "").trim().toLowerCase());
  }

  function bootApp() {
    if (appBooted) return;
    appBooted = true;
    if (typeof window.__loadDashboardApp === "function") {
      window.__loadDashboardApp();
    }
  }

  function grant() {
    overlay.style.display = "none";
    document.querySelectorAll(".sidebar, .main-content").forEach((el) => {
      el.style.display = "";
    });
    addLogoutBtn();
    bootApp();
  }

  function deny() {
    overlay.style.display = "flex";
    document.querySelectorAll(".sidebar, .main-content").forEach((el) => {
      el.style.display = "none";
    });
  }

  function addLogoutBtn() {
    const email = localStorage.getItem(KEY) || "";
    const nav = document.querySelector(".sidebar-nav");
    if (!nav || document.getElementById("logout-btn")) return;
    const btn = document.createElement("button");
    btn.id = "logout-btn";
    btn.textContent = "로그아웃";
    btn.style.cssText = "margin:auto 12px 20px;padding:9px 14px;background:rgba(255,255,255,.07);color:#a0a4ab;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-family:inherit;width:calc(100% - 24px);text-align:left;";
    btn.onmouseover = () => { btn.style.background = "rgba(255,255,255,.12)"; };
    btn.onmouseout = () => { btn.style.background = "rgba(255,255,255,.07)"; };
    btn.onclick = () => { localStorage.removeItem(KEY); location.reload(); };

    const emailLabel = document.createElement("div");
    emailLabel.style.cssText = "margin:auto 12px 4px;font-size:11px;color:#6b7280;padding:0 2px;";
    emailLabel.textContent = email;
    nav.after(emailLabel);
    emailLabel.after(btn);
  }

  window.checkAuth = function () {
    const input = document.getElementById("auth-email");
    const errEl = document.getElementById("auth-error");
    const email = (input.value || "").trim().toLowerCase();

    if (!email) {
      errEl.textContent = "이메일을 입력해주세요.";
      errEl.style.display = "block";
      return;
    }

    if (isAllowedEmail(email)) {
      localStorage.setItem(KEY, email);
      errEl.style.display = "none";
      grant();
    } else {
      errEl.textContent = "접근 권한이 없습니다.";
      errEl.style.display = "block";
      input.focus();
    }
  };

  window.__initAuth = function () {
    const saved = localStorage.getItem(KEY);
    if (saved && isAllowedEmail(saved)) {
      grant();
    } else {
      if (saved) localStorage.removeItem(KEY);
      deny();
    }
  };
})();
