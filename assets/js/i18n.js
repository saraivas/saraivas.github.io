/* Language switch (PT / EN).
   - Reads text from window.I18N (data.js) and fills every [data-i18n] element.
   - Remembers the choice in localStorage; falls back gracefully if storage is blocked.
   - Fires a "langchange" event so page scripts can re-render lists. */

(function () {
  var KEY = "lang";
  var current = "pt";

  function readStored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* storage blocked: ignore */ }
  }
  function detect() {
    var saved = readStored();
    if (saved === "pt" || saved === "en") return saved;
    var nav = (navigator.language || "pt").toLowerCase();
    return nav.indexOf("pt") === 0 ? "pt" : "en";
  }

  function apply() {
    var dict = window.I18N[current];
    document.documentElement.lang = current === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict["meta.desc"]) desc.setAttribute("content", dict["meta.desc"]);

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === current ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function set(lang) {
    if (lang !== "pt" && lang !== "en") return;
    current = lang;
    store(lang);
    apply();
  }

  window.getLang = function () { return current; };
  window.getDict = function () { return window.I18N[current]; };

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { set(btn.getAttribute("data-lang")); });
  });

  current = detect();
  apply();
})();
