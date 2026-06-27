/* global window */
// Adds the AI-Ready Hiring Framework artifact without replacing the core portfolio data file.
(function () {
  const artifact = {
    id: "ai-17",
    title: "AI-Ready Hiring Framework for CME and Academic Operations",
    category: "ai-governance",
    role: "Project Lead · LSU Health New Orleans, Office of Medical Education · 2026",
    summary: "Structured interview screening protocol for CME Coordinator recruitment in an AI-augmented hiring environment. The framework responds to the collapse of cover letter screening as a reliable competency signal by shifting evaluation toward live judgment, verification behavior, communication quality, compliance escalation, and responsible AI use.",
    skills: ["AI governance", "Hiring protocol design", "CME operations", "ACCME judgment", "AI literacy assessment", "Staff recruitment"],
    audience: ["Dean", "CME leadership", "Academic operations", "Hiring committees", "Search committees"],
    strategic: "Shows AI governance translated into a practical staff hiring system: not AI detection, but structured evaluation of judgment, verification habits, privacy awareness, faculty communication, and compliance instinct in real time.",
    sourceFile: "AI-Ready Hiring Guide for CME and Academic Operations",
    tags: ["AI hiring", "CME", "Academic operations", "ACCME", "Staff recruitment", "AI literacy"],
    featured: false,
    confidential: false,
    cleanFile: null,
    fullArtifactUrl: null,
    liveUrl: "ai-ready-hiring-guide-cme-academic-operations.html",
    liveLabel: "View full guide"
  };

  if (Array.isArray(window.ARTIFACTS) && !window.ARTIFACTS.some(a => a.id === artifact.id)) {
    window.ARTIFACTS.push(artifact);
  }

  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(window.ARTIFACTS);
  }

  if (Array.isArray(window.HERO_STATS)) {
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
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (node.nodeValue && node.nodeValue.includes("Eighty-two artifacts")) {
        node.nodeValue = node.nodeValue.replace(/Eighty-two artifacts/g, "Eighty-three artifacts");
      }
      if (node.nodeValue && node.nodeValue.includes("82 artifacts")) {
        node.nodeValue = node.nodeValue.replace(/82 artifacts/g, "83 artifacts");
      }
    });
  };

  window.addEventListener("load", replaceStaticCountText);
  const observer = new MutationObserver(replaceStaticCountText);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
