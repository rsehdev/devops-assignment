// Build metadata is injected at deploy time by the GitHub Actions workflow,
// which replaces the __BUILD_TIME__ and __COMMIT__ placeholders below.
(function () {
  var buildTime = "__BUILD_TIME__";
  var commit = "__COMMIT__";

  var buildEl = document.getElementById("build-time");
  var commitEl = document.getElementById("commit");

  if (buildEl) {
    buildEl.textContent = buildTime.indexOf("__") === 0 ? "local dev" : buildTime;
  }
  if (commitEl) {
    commitEl.textContent = commit.indexOf("__") === 0 ? "local dev" : commit;
  }
})();
