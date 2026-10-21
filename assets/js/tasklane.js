/* tasklane-api page: action buttons, decisions (native <details>) and endpoint table. */

(function () {
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function button(href, text, primary) {
    var a = el("a", "btn " + (primary ? "btn-pri" : "btn-sec"), text);
    a.href = href;
    a.rel = "noopener";
    return a;
  }

  function renderActions() {
    var d = window.getDict();
    var site = window.SITE.tasklane;
    var box = document.getElementById("actions");
    box.textContent = "";
    if (site.repo) box.appendChild(button(site.repo, d["tl.btnRepo"] + " ↗", true));
    if (site.adrs) box.appendChild(button(site.adrs, "ADRs ↗", false));
    if (site.demo) box.appendChild(button(site.demo, d["tl.btnDemo"] + " ↗", false));
    if (site.post) box.appendChild(button(site.post, d["tl.btnPost"] + " ↗", false));
  }

  function renderDecisions() {
    var d = window.getDict();
    var box = document.getElementById("decisions");
    box.textContent = "";
    d.lists.tlDecisions.forEach(function (item, i) {
      var details = el("details");
      if (i === 0) details.open = true;
      details.appendChild(el("summary", "", item.title));

      var body = el("div", "decision-body");
      var ctx = el("p");
      ctx.appendChild(el("strong", "", d["tl.ctx"] + " "));
      ctx.appendChild(document.createTextNode(item.ctx));
      var trade = el("p");
      trade.appendChild(el("strong", "", d["tl.trade"] + " "));
      trade.appendChild(document.createTextNode(item.trade));
      body.appendChild(ctx);
      body.appendChild(trade);
      body.appendChild(el("span", "tag", item.ref));
      details.appendChild(body);
      box.appendChild(details);
    });
  }

  function renderApi() {
    var rows = window.getDict().lists.tlApi;
    var body = document.getElementById("api-rows");
    body.textContent = "";
    rows.forEach(function (r) {
      var tr = el("tr");
      tr.appendChild(el("td", "m", r[0]));
      tr.appendChild(el("td", "p", r[1]));
      tr.appendChild(el("td", "", r[2]));
      tr.appendChild(el("td", "", r[3]));
      body.appendChild(tr);
    });
  }

  function renderLimits() {
    var box = document.getElementById("limits");
    box.textContent = "";
    window.getDict().lists.tlLimits.forEach(function (t) { box.appendChild(el("li", "", t)); });
  }

  function renderAll() { renderActions(); renderDecisions(); renderApi(); renderLimits(); }

  document.addEventListener("langchange", renderAll);
  renderAll();
})();
