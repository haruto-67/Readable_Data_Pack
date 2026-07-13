// リーダブル・データパック — サイト共通スクリプト
// サイドバー・前後ページナビを1か所の定義から全ページに生成する
(function () {
  "use strict";

  var PAGES = [
    { file: "index.html",       no: "",      title: "ホーム",                     group: "はじめに" },
    { file: "naming.html",      no: "1",     title: "命名規則",                   group: "設計の基礎" },
    { file: "structure.html",   no: "2–3",   title: "名前空間とディレクトリ構造", group: "設計の基礎" },
    { file: "context.html",     no: "4–5",   title: "コメントと実行文脈",         group: "設計の基礎" },
    { file: "macros.html",      no: "6",     title: "マクロ関数の設計 ★",         group: "書き方の実践" },
    { file: "variables.html",   no: "7–8",   title: "変数管理と制御構造",         group: "書き方の実践" },
    { file: "performance.html", no: "9–10",  title: "パフォーマンスと互換性",     group: "書き方の実践" },
    { file: "operations.html",  no: "11–13", title: "運用・配布・ツール",         group: "運用と品質" },
    { file: "testing.html",     no: "14–15", title: "テストとアンチパターン",     group: "運用と品質" },
    { file: "checklist.html",   no: "16–17", title: "チェックリストと参考文献",   group: "運用と品質" }
  ];

  var path = location.pathname.split("/").pop() || "index.html";
  var currentIndex = -1;
  for (var i = 0; i < PAGES.length; i++) {
    if (PAGES[i].file === path) { currentIndex = i; break; }
  }

  // ---- サイドバー生成 ----
  var sidebar = document.getElementById("sidebar");
  if (sidebar) {
    var lastGroup = null;
    PAGES.forEach(function (p, idx) {
      if (p.group !== lastGroup) {
        var label = document.createElement("div");
        label.className = "nav-group-label";
        label.textContent = p.group;
        sidebar.appendChild(label);
        lastGroup = p.group;
      }
      var a = document.createElement("a");
      a.href = p.file;
      if (idx === currentIndex) a.className = "active";
      var no = document.createElement("span");
      no.className = "ch-no";
      no.textContent = p.no;
      a.appendChild(no);
      a.appendChild(document.createTextNode(p.title));
      sidebar.appendChild(a);
    });
  }

  // ---- 前後ページナビ生成 ----
  var pager = document.getElementById("pager");
  if (pager && currentIndex >= 0) {
    function link(p, cls, label) {
      var a = document.createElement("a");
      a.href = p.file;
      a.className = cls;
      var l = document.createElement("span");
      l.className = "pager-label";
      l.textContent = label;
      var t = document.createElement("span");
      t.className = "pager-title";
      t.textContent = (p.no ? p.no + ". " : "") + p.title;
      a.appendChild(l);
      a.appendChild(t);
      return a;
    }
    if (currentIndex > 0) {
      pager.appendChild(link(PAGES[currentIndex - 1], "prev", "← 前のページ"));
    } else {
      var s1 = document.createElement("span");
      s1.className = "spacer";
      pager.appendChild(s1);
    }
    if (currentIndex < PAGES.length - 1) {
      pager.appendChild(link(PAGES[currentIndex + 1], "next", "次のページ →"));
    }
  }

  // ---- モバイルメニュー ----
  var menuBtn = document.getElementById("menu-btn");
  var backdrop = document.getElementById("sidebar-backdrop");
  function closeNav() { document.body.classList.remove("nav-open"); }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeNav);
  if (sidebar) {
    sidebar.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
  }
})();
