/* global window, document, NodeFilter, MutationObserver */
// Adds the Rural Health Transformation strategic policy stress test without replacing the core portfolio data file.
(function () {
  const artifact = {
    id: "pol-12",
    title: "Rural Health Transformation Program: Strategic Policy Stress Test",
    category: "policy-rural",
    role: "Policy Analysis Artifact · Rural Health, Medicaid Finance, Federal-State Governance · 2026",
    summary: "Strategic policy stress test of the $50 billion Rural Health Transformation Program, evaluating whether temporary transformation grants can meaningfully offset projected Medicaid reductions and rural hospital operating-revenue exposure.",
    skills: [
      "Strategic policy analysis",
      "Rural health finance",
      "Medicaid exposure assessment",
      "Federal-state incentive analysis",
      "Implementation-risk modeling",
      "Executive briefing design",
      "Institutional intelligence"
    ],
    audience: [
      "Dean",
      "Senior leadership",
      "State policy leaders",
      "Rural health leaders",
      "Hospital finance leaders",
      "Search committees"
    ],
    strategic: "Demonstrates the ability to translate federal healthcare legislation, Medicaid financing exposure, cooperative agreement risk, and rural hospital implementation constraints into an executive-ready policy stress test for academic medical center and state-level planning.",
    sourceFile: "Rural Health Transformation Program: Strategic Policy Stress Test",
    tags: [
      "Rural health",
      "Medicaid",
      "Federal-state governance",
      "Policy stress test",
      "Hospital finance",
      "Implementation risk",
      "Institutional intelligence"
    ],
    featured: false,
    confidential: false,
    cleanFile: null,
    fullArtifactUrl: null,
    liveUrl: "rural-health-transformation-strategic-policy-stress-test.html",
    liveLabel: "View policy stress test"
  };

  if (Array.isArray(window.ARTIFACTS) && !window.ARTIFACTS.some(a => a.id === artifact.id)) {
    window.ARTIFACTS.push(artifact);
  }

  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(window.ARTIFACTS);
  }

  if (Array.isArray(window.HERO_STATS) && Array.isArray(window.ARTIFACTS)) {
    const portfolioStat = window.HERO_STATS.find(s => String(s.lbl || "").includes("Artifacts in capability portfolio"));
    if (portfolioStat) portfolioStat.num = String(window.ARTIFACTS.length);
  }

  if (Array.isArray(window.ARTIFACTS)) {
    const skills = new Set();
    const audiences = new Set();
    window.ARTIFACTS.forEach(a => {
      (a.skills || []).forEach(k => skills.add(k));
      (a.audience || []).forEach(k => audiences.add(k));
    });
    window.ALL_SKILLS = [...skills].sort();
    window.ALL_AUDIENCES = [...audiences].sort();
  }

  const replaceStaticCountText = () => {
    if (!document.body || !Array.isArray(window.ARTIFACTS)) return;
    const count = window.ARTIFACTS.length;
    const countWord = count === 84 ? "Eighty-four" : String(count);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!node.nodeValue) return;
      node.nodeValue = node.nodeValue
        .replace(/Eighty-two artifacts/g, `${countWord} artifacts`)
        .replace(/Eighty-three artifacts/g, `${countWord} artifacts`)
        .replace(/82 artifacts/g, `${count} artifacts`)
        .replace(/83 artifacts/g, `${count} artifacts`);
    });
  };

  window.addEventListener("load", replaceStaticCountText);
  const observer = new MutationObserver(replaceStaticCountText);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
