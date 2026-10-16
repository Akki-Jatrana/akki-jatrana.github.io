// Loads the shared header and footer into every page, then marks the current page in the menu.
// To change the menu or footer, edit header.html or footer.html only.
$(function () {
  var current = (location.pathname.split("/").pop() || "index").replace(/\.html$/, "") || "index";

  function notice() {
    if ($(".load-note").length) { return; }
    $("body").prepend(
      '<div class="load-note" role="alert"><strong>The menu and footer could not load.</strong> ' +
      'They are read from header.html and footer.html, which browsers block when a page is opened straight from a folder. ' +
      'Run <code>preview.bat</code> (or <code>python -m http.server</code> in this folder) and open ' +
      '<code>http://localhost:8000</code>, or publish the site on GitHub Pages.</div>'
    );
  }

  $("#site-header").load("header.html", function (response, status) {
    if (status === "error") { notice(); return; }
    $("#site-header .nav a").each(function () {
      if ($(this).attr("href").replace(/\.html$/, "") === current) {
        $(this).attr("aria-current", "page");
      }
    });
  });
  $("#site-footer").load("footer.html", function (response, status) {
    if (status === "error") { notice(); }
  });
});
