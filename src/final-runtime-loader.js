/* Final content candidate loader — current main design, expanded content only. */
(function () {
  "use strict";

  var originalStack = [
    ["src/data.jsx", true],
    ["src/ai-ready-hiring-patch.jsx", true],
    ["src/ai-triage-artifact-patch.jsx", true],
    ["src/prototype-artifacts.jsx", true],
    ["src/genai-atlas-patch.jsx", true],
    ["src/rht-stress-test-patch.jsx", true],
    ["src/ai-architecture-guide-patch.jsx", true],
    ["src/amc-guide-direct.js", false],
    ["src/ai-resources-final.js", false],
    ["src/components.jsx", true],
    ["src/nav-patch.jsx", true],
    ["src/pages.jsx", true],
    ["src/ai-library-rescue.jsx", true],
    ["src/career-governance.jsx", true],
    ["src/consultation-patch.jsx", true]
  ];

  var evidenceLayers = [
    ["src/final-evidence-core.js", false],
    ["src/final-evidence-expanded.js", false],
    ["src/final-evidence-granular.js", false],
    ["src/final-evidence-scholarship.js", false],
    ["src/final-evidence-career-depth.js", false],
    ["src/final-evidence-preservation.js", false],
    ["src/final-evidence-normalization.js", false],
    ["src/final-library-curation.js", false]
  ];

  var contentLayer = [
    ["src/final-content.jsx", true],
    ["src/final-accuracy-cleanup.js", false],
    ["src/final-refinements.jsx", true],
    ["src/final-copy-cleanup.jsx", true],
    ["src/final-home-refinements.jsx", true],
    ["src/final-library-refinements.jsx", true]
  ];
  var appLayer = [["src/detail.jsx", true], ["src/app.jsx", true]];

  var status = { phase: "starting", loaded: [], errors: [], baselineCount: 0, totalCount: 0 };
  window.FINAL_CANDIDATE_STATUS = status;

  function signal(phase) {
    status.phase = phase;
    window.dispatchEvent(new CustomEvent("final-candidate-status", { detail: status }));
  }

  function execute(path, source, babel) {
    var code = source;
    if (babel) {
      if (!window.Babel) throw new Error("Babel unavailable while loading " + path);
      code = window.Babel.transform(source, { presets: ["env", "react"], sourceType: "script" }).code;
    }
    (0, eval)(code + "\n//# sourceURL=" + path);
    status.loaded.push(path);
  }

  async function fetchSource(item) {
    var path = item[0], babel = item[1];
    var response = await fetch(path + "?final_candidate=13", { cache: "force-cache" });
    if (!response.ok) throw new Error(path + " returned HTTP " + response.status);
    return { path: path, babel: babel, source: await response.text() };
  }

  function fetchSeries(items) {
    return Promise.all(items.map(fetchSource));
  }

  function executeSeries(sources) {
    for (var i = 0; i < sources.length; i++) {
      var item = sources[i];
      execute(item.path, item.source, item.babel);
    }
  }

  async function boot() {
    try {
      // Download every source concurrently, then execute each dependency group
      // in its original order. The versioned URL permits safe browser caching.
      var sourceGroups = await Promise.all([
        fetchSeries(originalStack),
        fetchSeries(evidenceLayers),
        fetchSeries(contentLayer),
        fetchSeries(appLayer)
      ]);

      signal("loading-current-site");
      executeSeries(sourceGroups[0]);
      if (!Array.isArray(window.ARTIFACTS)) throw new Error("Current portfolio did not create ARTIFACTS.");
      status.baselineCount = window.ARTIFACTS.length;
      window.FINAL_BASELINE_RECORD_COUNT = status.baselineCount;

      signal("loading-expanded-evidence");
      executeSeries(sourceGroups[1]);
      status.totalCount = window.ARTIFACTS.length;
      window.FINAL_EVIDENCE_COUNT = status.totalCount;
      if (status.totalCount <= status.baselineCount) throw new Error("Expanded evidence register did not load.");

      signal("loading-final-content");
      executeSeries(sourceGroups[2]);
      if (!Array.isArray(window.FINAL_EXECUTIVE_CASES) || window.FINAL_EXECUTIVE_CASES.length !== 18) {
        throw new Error("Final executive case architecture did not load 18 cases.");
      }

      if (!window.FINAL_AUDIT_ONLY) {
        executeSeries(sourceGroups[3]);
        signal("ready");
      } else {
        signal("audit-ready");
      }
      window.dispatchEvent(new CustomEvent("final-candidate-ready", { detail: status }));
    } catch (err) {
      status.errors.push(String(err && err.stack ? err.stack : err));
      signal("failed");
      console.error("Final candidate failed", err);
      var el = document.getElementById("final-candidate-error");
      if (el) {
        el.style.display = "block";
        el.textContent = String(err && err.message ? err.message : err);
      }
      window.dispatchEvent(new CustomEvent("final-candidate-failed", { detail: status }));
    }
  }

  boot();
})();
