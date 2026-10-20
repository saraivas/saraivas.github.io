/* About page: timeline tabs and the list of what AI does not do. */

(function () {
  var tab = "work";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderTabs() {
    var box = document.getElementById("tabs");
    box.textContent = "";
    window.getDict().lists.aboutTabs.forEach(function (t) {
      var btn = el("button", "chip", t.l);
      btn.type = "button";
      btn.setAttribute("aria-pressed", t.k === tab ? "true" : "false");
      btn.addEventListener("click", function () { tab = t.k; renderTabs(); renderTimeline(); });
      box.appendChild(btn);
    });
  }

  function renderTimeline() {
    var box = document.getElementById("timeline");
    box.textContent = "";
    window.getDict().lists.timeline[tab].forEach(function (e) {
      var item = el("div", "tl-item");
      item.appendChild(el("div", "tl-when", e.when));
      item.appendChild(el("h3", "tl-what", e.what));
      item.appendChild(el("div", "tl-where", e.where));
      item.appendChild(el("p", "tl-text", e.text));

      var tags = el("div", "tags");
      e.tags.forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
      item.appendChild(tags);

      if (e.href) {
        var a = el("a", "link-accent tl-link", e.linkLabel + " ↗");
        a.href = e.href;
        a.rel = "noopener";
        item.appendChild(a);
      }
      box.appendChild(item);
    });
  }

  function renderLimits() {
    var list = document.getElementById("limits");
    list.textContent = "";
    window.getDict().lists.aboutLimits.forEach(function (text) {
      list.appendChild(el("li", "", text));
    });
  }

  function renderAll() { renderTabs(); renderTimeline(); renderLimits(); }

  document.addEventListener("langchange", renderAll);
  renderAll();
})();
