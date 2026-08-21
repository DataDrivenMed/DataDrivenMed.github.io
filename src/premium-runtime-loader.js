/* Premium deterministic runtime loader — review branch only.
   Loads the existing portfolio stack first, then premium evidence layers,
   then premium UI, eliminating Babel/plain-script race conditions. */
(function () {
  "use strict";

  var baseline = [
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

  var premiumEvidence = [
    ["src/premium-evidence.js", false],
    ["src/premium-evidence-expanded.js", false],
    ["src/premium-evidence-final.js", false],
    ["src/premium-evidence-scholarship.js", false],
    ["src/premium-evidence-career-depth.js", false],
    ["src/premium-evidence-preservation.js", false]
  ];

  var premiumUI = [
    ["src/premium-pages.jsx", true],
    ["src/premium-library-depth.jsx", true],
    ["src/premium-caso-executive.jsx", true],
    ["src/detail.jsx", true],
    ["src/app.jsx", true]
  ];

  var status = {
    phase: "starting",
    loaded: [],
    errors: [],
    baselineCount: null,
    premiumCount: null
  };
  window.PREMIUM_RUNTIME_STATUS = status;

  function updateStatus(phase) {
    status.phase = phase;
    window.dispatchEvent(new CustomEvent("premium-runtime-status", { detail: status }));
  }

  function executeSource(path, source, needsBabel) {
    var code = source;
    if (needsBabel) {
      if (!window.Babel) throw new Error("Babel is unavailable while loading " + path);
      code = window.Babel.transform(source, {
        presets: ["env", "react"],
        sourceType: "script"
      }).code;
    }
    (0, eval)(code + "\n//# sourceURL=" + path);
    status.loaded.push(path);
  }

  async function loadOne(item) {
    var path = item[0], needsBabel = item[1];
    var response = await fetch(path + "?premium_runtime=7", { cache: "no-store" });
    if (!response.ok) throw new Error(path + " returned HTTP " + response.status);
    var source = await response.text();
    executeSource(path, source, needsBabel);
  }

  async function loadSeries(series) {
    for (var i = 0; i < series.length; i++) await loadOne(series[i]);
  }

  async function boot() {
    try {
      updateStatus("loading-baseline");
      await loadSeries(baseline);

      if (!Array.isArray(window.ARTIFACTS)) {
        throw new Error("Baseline completed but window.ARTIFACTS was not created.");
      }
      status.baselineCount = window.ARTIFACTS.length;
      window.PREMIUM_BASELINE_RECORD_COUNT = status.baselineCount;
      updateStatus("baseline-ready");

      await loadSeries(premiumEvidence);
      status.premiumCount = window.ARTIFACTS.length;
      window.PREMIUM_EVIDENCE_COUNT = status.premiumCount;

      if (status.premiumCount <= status.baselineCount) {
        throw new Error("Premium evidence did not increase the artifact register. Baseline=" + status.baselineCount + ", premium=" + status.premiumCount);
      }

      var requiredIds = [
        "ev-strat-closure-2014-2019",
        "ev-acgme-predictive",
        "ev-sacscoc",
        "ev-equip-creation",
        "ev-umcno-academic-advisory",
        "ev-lifecycle-data-architecture",
        "ev-healthworks",
        "ev-watermark",
        "ev-india-moe-host",
        "ev-pan-oncology",
        "ev-mcip-governance",
        "ev-gme-lcmc-partner",
        "ev-pub-surgery-team-training-2009",
        "ev-oral-equip-2013",
        "ev-mec-report-2014",
        "ev-credential-mbbs",
        "ev-award-paper-distinction-2011",
        "ev-cqi-policy",
        "ev-medstudent-research-eval",
        "ev-serf-collaboration"
      ];
      var loadedIds = window.ARTIFACTS.map(function(a){ return a && a.id; });
      var missingIds = requiredIds.filter(function(id){ return loadedIds.indexOf(id) < 0; });
      if (missingIds.length) {
        throw new Error("Premium preservation sentinels missing: " + missingIds.join(", "));
      }

      window.PREMIUM_RUNTIME_SENTINEL = {
        ok: true,
        baseline: status.baselineCount,
        total: status.premiumCount,
        added: status.premiumCount - status.baselineCount,
        requiredIds: requiredIds,
        preservationMode: true,
        noDeletionPolicy: true
      };
      updateStatus("premium-evidence-ready");

      if (!window.PREMIUM_AUDIT_ONLY) {
        await loadSeries(premiumUI);
        updateStatus("app-mounted");
      } else {
        updateStatus("audit-ready");
      }

      window.dispatchEvent(new CustomEvent("premium-runtime-ready", { detail: window.PREMIUM_RUNTIME_SENTINEL }));
    } catch (err) {
      status.errors.push(String(err && err.stack ? err.stack : err));
      updateStatus("failed");
      window.PREMIUM_RUNTIME_SENTINEL = { ok: false, error: String(err) };
      window.dispatchEvent(new CustomEvent("premium-runtime-failed", { detail: status }));
      var target = document.getElementById("premium-runtime-error");
      if (target) target.textContent = String(err && err.message ? err.message : err);
      console.error("Premium runtime failed", err);
    }
  }

  boot();
})();