/* Projects page: filter chips + project cards, rebuilt on language change. */

(function () {
  var filter = "all";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(href, text, external) {
    var a = el("a", "", text);
    a.href = href;
    if (external) a.rel = "noopener";
    return a;
  }

  function renderChips() {
    var container = document.getElementById("chips");
    container.textContent = "";
    window.getDict().lists.projFilters.forEach(function (f) {
      var btn = el("button", "chip", f.l);
      btn.type = "button";
      btn.setAttribute("aria-pressed", f.k === filter ? "true" : "false");
      btn.addEventListener("click", function () { filter = f.k; renderChips(); renderList(); });
      container.appendChild(btn);
    });
  }

  function renderList() {
    var lists = window.getDict().lists;
    var container = document.getElementById("proj-list");
    container.textContent = "";

    lists.projects
      .filter(function (p) { return filter === "all" || p.k === filter; })
      .forEach(function (p) {
        var card = el("article", "card item");

        var top = el("div", "item-top");
        top.appendChild(el("span", "proj-name", p.name));
        top.appendChild(el("span", "tag " + (p.badge || ""), p.status));
        card.appendChild(top);

        card.appendChild(el("p", "", p.summary));

        var tags = el("div", "tags");
        p.tags.forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
        card.appendChild(tags);

        var links = el("div", "item-links");
        if (p.repo) links.appendChild(link(p.repo, p.repoLabel + " ↗", true));
        if (p.detail) links.appendChild(link(p.detail, lists.projDetail + " →", false));
        if (!p.repo && !p.detail) links.appendChild(el("span", "", p.soon));
        card.appendChild(links);

        container.appendChild(card);
      });
  }

  function renderAll() { renderChips(); renderList(); }

  document.addEventListener("langchange", renderAll);
  renderAll();
})();
