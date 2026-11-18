/* global window */
// Independent public-data visualization; original estimates and methodology are Lown Institute's.
(function () {
  "use strict";
  if (!Array.isArray(window.ARTIFACTS)) return;
  var file = "hospital-fair-share-explorer-2026.md";
  var item = {
    id: "ev-hospital-fair-share-2026",
    title: "Hospital Fair Share Explorer: Community Investment & Tax Benefits (2026)",
    category: "analytics",
    role: "Independent public-data visualization and interpretation",
    summary: "An interactive US state map and searchable hospital explorer translating the Lown Institute's 2026 Fair Share Spending report into a transparent comparison of estimated tax benefits and counted community investment. Covers 3,037 published hospital records using fiscal-year 2023 data, with five map measures, state rankings, exact hospital values, filtered CSV exports and plain-language interpretation.",
    skills: ["Healthcare financial analytics", "Interactive geospatial visualization", "Data reconciliation", "Public-data interpretation", "Executive communication", "Reproducible analytics"],
    audience: ["Hospital and health-system leaders", "Academic medicine leaders", "Finance", "Public health and policy stakeholders", "Community partners"],
    strategic: "Shows how public hospital financial estimates can be converted into an accessible decision-support product while preserving provenance, distinguishing gross deficits from net balances, and exposing source-summary discrepancies. The contribution is the independent visualization, reconciliation and explanation; the underlying estimates and fair-share framework are the Lown Institute's. No institutional adoption or measured policy impact is claimed.",
    sourceFile: file,
    cleanFile: file,
    tags: ["Hospital fair share", "Lown Institute", "Community benefit", "Tax exemption", "Nonprofit hospitals", "Choropleth", "Hospital finance", "Louisiana", "Public data"],
    featured: false,
    confidential: false,
    evidenceType: "public",
    publicDocument: true,
    liveUrl: "https://datadrivenmed.github.io/hospital-fair-share-2026.html",
    liveLabel: "Launch Hospital Fair Share Explorer",
    fullArtifactUrl: "artifact.html?file=" + file + "&id=ev-hospital-fair-share-2026",
    fullArtifactLabel: "Read methods and portfolio evidence",
    fullArtifactShortLabel: "Methods & evidence",
    fullArtifactNote: "Public Lown Institute data; independent visualization by Ram Paragi. The 2026 report uses FYE 2023 financial data. A fair share deficit is a gap under Lown's definition, not a clinical quality score or a finding of legal noncompliance.",
    evidenceStatus: "Live public artifact using published third-party data",
    entriesIntro: "The evidence below describes the published tool, data checks and interpretation safeguards. It separates the visualization contribution from the underlying Lown Institute analysis.",
    entries: [
      "Source and scope: 3,037 hospital rows across 50 states and Washington, DC, from the Lown Institute's 2026 report using FYE 2023 financial data; source snapshot November 17, 2026.",
      "Interactive product: five state-map measures, state rankings, hospital/city search, deficit and surplus filters, exact-dollar details, CSV downloads and a Louisiana shortcut.",
      "Metric discipline: total hospital deficits sum negative balances only; net fair share spending combines deficits and surpluses; deficit percentage uses included hospital counts; investment coverage uses aggregate investment divided by aggregate tax exemption.",
      "Data reconciliation: Missouri has 63 hospital rows versus 64 in the source state summary; Ohio's negative balances total -$1,349,745,390 versus -$1,349 million in that summary; the hospital rows yield a 51.5% deficit share versus the report's 52% headline. Differences are disclosed rather than silently overwritten.",
      "Plain-language interpretation: a hospital with $10 million in estimated tax benefits and $6 million in counted community investment has a $4 million deficit while still providing $6 million in counted investment.",
      "Evidence boundary: Lown's definition excludes Medicaid shortfall, medical education and research. The visualization is a static public-data snapshot, not an audit, legal determination, clinical quality ranking, population-adjusted comparison or record of institutional implementation."
    ],
    detailData: {
      approach: [
        "Begin with provenance and metric definitions so users can distinguish a third-party estimate from the independent visualization built around it.",
        "Use hospital-level rows as the common aggregation base, preserve published hospital balances and disclose disagreements with source-summary counts and rounded totals.",
        "Pair geographic exploration with exact hospital details and a worked financial example, so an accessible presentation does not obscure the meaning or limits of the measure."
      ],
      execution: [
        "Transformed the published hospital table into a state-linked dataset and checked hospital counts, aggregate balances, arithmetic and geographic coverage.",
        "Built an accessible state choropleth, state rankings, searchable hospital table, exact-value dialogs, deficit/surplus filters and state and hospital CSV exports.",
        "Added a reading guide explaining the five map measures, filter scope, deficit versus surplus and gross versus net balances, with a $10 million / $6 million worked example.",
        "Packaged the data, D3, geometry, styles and application logic into a portable HTML file, then published it under the portfolio's GitHub Pages domain."
      ],
      tools: ["Python", "JavaScript", "D3.js", "GeoJSON", "HTML / CSS", "CSV exports", "GitHub Pages"],
      value: "Demonstrates healthcare financial interpretation, geographic data communication and data-quality discipline in a public tool that leaders and community stakeholders can inspect directly. The work makes assumptions and reconciliation choices visible without presenting the visualization as independent validation of the underlying hospital estimates.",
      competencies: ["Healthcare financial analytics", "Data provenance", "Data-quality reconciliation", "Geospatial visualization", "Public policy communication", "Reproducible public artifacts"],
      related: ["an-01", "ev-market-charity", "pol-12"]
    }
  };
  var index = window.ARTIFACTS.findIndex(function (a) { return a && a.id === item.id; });
  if (index >= 0) window.ARTIFACTS[index] = item;
  else window.ARTIFACTS.push(item);
  if (typeof window.applyEvidenceStatusMetadata === "function") window.applyEvidenceStatusMetadata([item]);
  item.evidenceStrength = "Live public visualization; published third-party data and transparent limitations";
  window.ALL_SKILLS = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.skills || []; }))).sort();
  window.ALL_AUDIENCES = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.audience || []; }))).sort();
})();
