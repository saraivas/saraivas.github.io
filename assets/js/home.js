/* Home page interactions: API explorer, progress checklist and AI workflow.
   Everything is rebuilt when the language changes (see i18n.js). */

(function () {
  var state = { example: 0, flow: 0 };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function markPressed(container, index) {
    Array.prototype.forEach.call(container.children, function (child, i) {
      child.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
  }

  /* ---- API explorer ------------------------------------------------------ */

  function showExample(list) {
    var item = window.getDict().lists.examples[state.example];
    markPressed(document.getElementById("ex-list"), state.example);
    document.getElementById("ex-status").textContent = item.status;
    document.getElementById("ex-body").textContent = item.body;
  }

  function renderExamples() {
    var container = document.getElementById("ex-list");
    container.textContent = "";
    window.getDict().lists.examples.forEach(function (item, i) {
      var btn = el("button", "pick", item.label);
      btn.type = "button";
      btn.addEventListener("click", function () { state.example = i; showExample(); });
      container.appendChild(btn);
    });
    showExample();
  }

  /* ---- Progress checklist ------------------------------------------------ */

  function renderProgress() {
    var lists = window.getDict().lists;
    var container = document.getElementById("prog-list");
    container.textContent = "";
    lists.progSteps.forEach(function (label, i) {
      var done = i < lists.progDoneCount;
      var row = el("div", "step");
      row.appendChild(el("span", "dot" + (done ? " done" : "")));
      row.appendChild(el("span", "step-label", label));
      row.appendChild(el("span", "step-state", done ? lists.progDone : lists.progNext));
      container.appendChild(row);
    });
  }

  /* ---- AI workflow ------------------------------------------------------- */

  function showFlow() {
    var item = window.getDict().lists.flow[state.flow];
    markPressed(document.getElementById("flow-steps"), state.flow);
    document.getElementById("flow-decide").textContent = item.d;
    document.getElementById("flow-ai").textContent = item.a;
    document.getElementById("flow-validate").textContent = item.v;
    document.getElementById("flow-example").textContent = item.e;
  }

  function renderFlow() {
    var container = document.getElementById("flow-steps");
    container.textContent = "";
    window.getDict().lists.flow.forEach(function (item, i) {
      var btn = el("button", "stp");
      btn.type = "button";
      btn.appendChild(el("span", "n", "0" + (i + 1)));
      btn.appendChild(document.createTextNode(item.l));
      btn.addEventListener("click", function () { state.flow = i; showFlow(); });
      container.appendChild(btn);
    });
    showFlow();
  }

  function renderAll() {
    renderExamples();
    renderProgress();
    renderFlow();
  }

  document.addEventListener("langchange", renderAll);
  renderAll();
})();
