/* Contact page: builds the link list from window.SITE.contact.
   Rows with an empty value are not shown, so the page never has dead links. */

(function () {
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function strip(url) {
    return url.replace(/^https?:\/\//, "").replace(/^mailto:/, "").replace(/\/$/, "");
  }

  function render() {
    var d = window.getDict();
    var c = window.SITE.contact;
    var rows = [
      { label: "GitHub", href: c.github, value: c.github && strip(c.github) },
      { label: "LinkedIn", href: c.linkedin, value: c.linkedin && strip(c.linkedin) },
      { label: "dev.to", href: c.devto, value: c.devto && strip(c.devto) },
      { label: d["contact.email"], href: c.email && "mailto:" + c.email, value: c.email },
      { label: d["contact.cv.pt"], href: c.cvPt, value: "PDF ↓", download: true },
      { label: d["contact.cv.en"], href: c.cvEn, value: "PDF ↓", download: true }
    ];

    var box = document.getElementById("contact-links");
    box.textContent = "";
    rows.forEach(function (r) {
      if (!r.href) return;
      var a = el("a", "contact-row");
      a.href = r.href;
      if (r.href.indexOf("http") === 0) a.rel = "noopener";
      if (r.download) a.setAttribute("download", "");
      a.appendChild(el("span", "label", r.label));
      a.appendChild(el("span", "value", r.download ? r.value : r.value + " ↗"));
      box.appendChild(a);
    });
  }

  document.addEventListener("langchange", render);
  render();
})();
