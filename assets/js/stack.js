/* Stack page: groups of technologies; clicking one shows where it is used.
   Data comes from window.STACK (data.js). */

(function () {
  var picked = "FastAPI";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function findItem(name) {
    var found = null;
    window.STACK.forEach(function (g) {
      g.items.forEach(function (it) { if (it[0] === name) found = it; });
    });
    return found;
  }

  function showPanel() {
    var lang = window.getLang();
    var item = findItem(picked);
    if (!item) return;
    document.getElementById("sel-name").textContent = item[0];
    document.getElementById("sel-status").textContent = window.getDict().lists.stackStatus[item[1]];
    document.getElementById("sel-text").textContent = lang === "pt" ? item[2] : item[3];
    document.querySelectorAll("#groups .tech").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-name") === picked ? "true" : "false");
    });
  }

  function renderGroups() {
    var lang = window.getLang();
    var box = document.getElementById("groups");
    box.textContent = "";
    window.STACK.forEach(function (g) {
      var wrap = el("div");
      wrap.appendChild(el("h2", "", g.title[lang]));
      var chips = el("div", "tags");
      g.items.forEach(function (it) {
        var btn = el("button", "tech" + (it[1] === "use" ? "" : " plan"), it[0]);
        btn.type = "button";
        btn.setAttribute("data-name", it[0]);
        btn.addEventListener("click", function () { picked = it[0]; showPanel(); });
        chips.appendChild(btn);
      });
      wrap.appendChild(chips);
      box.appendChild(wrap);
    });
    showPanel();
  }

  document.addEventListener("langchange", renderGroups);
  renderGroups();
})();
