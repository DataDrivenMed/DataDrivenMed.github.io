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
    ["src/humansim-epic-artifacts.js", false],
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
    ["src/humansim-epic-case-integration.js", false],
    ["src/final-accuracy-cleanup.js", false],
    ["src/final-refinements.jsx", true],
    ["src/final-copy-cleanup.jsx", true],
    ["src/final-home-refinements.jsx", true],
    ["src/humansim-signature-pages.jsx", true],
    ["src/final-library-refinements.jsx", true]
  ];
  var appLayer = [["src/detail.jsx", true], ["src/app.jsx", true]];

  var status = { phase: "starting", loaded: [], errors: [], retries: 0, baselineCount: 0, totalCount: 0 };
  window.FINAL_CANDIDATE_STATUS = status;

  function signal(phase) {
    status.phase = phase;
    window.dispatchEvent(new CustomEvent("final-candidate-status", { detail: status }));
  }

  function execute(path, source, babel) {
    var code = source;

    // Keep the existing detail UI unchanged while allowing selected artifacts
    // to supply their own evidence-specific approach/execution content.
    if (path === "src/detail.jsx") {
      code = code.replace(
        "const detail = CASE_DETAILS[artifact.id] || fallbackCaseDetail(artifact);",
        "const detail = artifact.detailData || CASE_DETAILS[artifact.id] || fallbackCaseDetail(artifact);"
      );
    }

    // Preserve the Executive Profile layout while adding digital medical-
    // learning system design to the existing AI/digital capability narrative.
    if (path === "src/final-content.jsx") {
      code = code.replace(
        '["AI & digital governance", "Student and GME policy, cross-school consultation, tool vetting, enterprise implementation frameworks, clinical AI evaluation, and System-level governance participation."]',
        '["AI & digital governance", "Student and GME policy, cross-school consultation, tool vetting, enterprise implementation frameworks, clinical AI evaluation, AI-supported medical-learning system design, and System-level governance participation."]'
      );
    }

    // Elevate HumanSim into the existing signature-evidence component without
    // changing the component structure or styling.
    if (path === "src/final-library-refinements.jsx") {
      code = code.replace(
        "      proof: 'Federal policy · Louisiana strategy · implementation readiness'\n    }\n  ];",
        "      proof: 'Federal policy · Louisiana strategy · implementation readiness'\n    },\n    {\n      key: 'humansim',\n      num: '08',\n      label: 'Connected Medical Learning',\n      artifactId: 'ev-humansim',\n      question: 'How can medical students learn foundational and clinical medicine as one connected system rather than as separate disciplines?',\n      operating: 'One patient-anchored model connects anatomy, physiology, biochemistry, molecular biology, pathology, pharmacology, diagnostics, compensation, interventions and clinical response across biological scales and time.',\n      evidence: 'A live formative digital-human prototype lets learners enter through a patient, intervention or medical concept and traverse the connected mechanism from patient to molecule or molecule back to patient.',\n      proof: 'Patient state · connected mechanisms · compensation · interventions · visual learning · live prototype'\n    }\n  ];"
      );
      code = code.replace("Seven institutional dossiers.", "Eight institutional dossiers.");
    }

    if (babel) {
      if (!window.Babel) throw new Error("Babel unavailable while loading " + path);
      code = window.Babel.transform(code, { presets: ["env", "react"], sourceType: "script" }).code;
    }
    (0, eval)(code + "\n//# sourceURL=" + path);
    status.loaded.push(path);
  }

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  async function fetchSource(item, attempt) {
    var path = item[0], babel = item[1];
    attempt = attempt || 1;
    var response;
    try {
      response = await fetch(path + "?final_candidate=19", {
        cache: attempt === 1 ? "force-cache" : "reload"
      });
    } catch (networkError) {
      if (attempt < 4) {
        status.retries += 1;
        await wait(300 * Math.pow(2, attempt - 1));
        return fetchSource(item, attempt + 1);
      }
      throw networkError;
    }
    if (!response.ok) {
      if ((response.status === 429 || response.status >= 500) && attempt < 4) {
        status.retries += 1;
        await wait(300 * Math.pow(2, attempt - 1));
        return fetchSource(item, attempt + 1);
      }
      throw new Error(path + " returned HTTP " + response.status + " after " + attempt + " attempt" + (attempt === 1 ? "" : "s"));
    }
    return { path: path, babel: babel, source: await response.text() };
  }

  async function fetchWithLimit(items, limit) {
    var sources = new Array(items.length);
    var nextIndex = 0;

    async function worker() {
      while (nextIndex < items.length) {
        var index = nextIndex++;
        sources[index] = await fetchSource(items[index]);
      }
    }

    var workers = [];
    var workerCount = Math.min(limit, items.length);
    for (var i = 0; i < workerCount; i++) workers.push(worker());
    await Promise.all(workers);
    return sources;
  }

  function executeSeries(sources) {
    for (var i = 0; i < sources.length; i++) {
      var item = sources[i];
      execute(item.path, item.source, item.babel);
    }
  }

  async function boot() {
    try {
      // Bound concurrency so GitHub Pages is not flooded with simultaneous
      // requests. Execute dependency groups in their original order.
      var allItems = originalStack.concat(evidenceLayers, contentLayer, appLayer);
      var allSources = await fetchWithLimit(allItems, 6);
      var firstBreak = originalStack.length;
      var secondBreak = firstBreak + evidenceLayers.length;
      var thirdBreak = secondBreak + contentLayer.length;
      var sourceGroups = [
        allSources.slice(0, firstBreak),
        allSources.slice(firstBreak, secondBreak),
        allSources.slice(secondBreak, thirdBreak),
        allSources.slice(thirdBreak)
      ];

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
