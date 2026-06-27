/* global window */
// Adds AI-aware hiring artifacts without replacing the core portfolio data file.
(function () {
  const artifacts = [
    {
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
    },
    {
      id: "ai-18",
      title: "AI-Aware Hiring Guide for Academic Medical Centers",
      category: "ai-governance",
      role: "Interactive workforce governance artifact · Academic medical center staff hiring · 2026",
      summary: "Generative AI has made it trivially easy to produce polished cover letters and rehearsed interview answers, which means the tools most hiring managers rely on no longer distinguish strong candidates from weak ones. This project addresses that gap with a structured hiring framework built specifically for non-faculty staff at academic medical centers, where errors in judgment carry real regulatory and operational consequences.",
      skills: ["AI-aware hiring", "Workforce strategy", "Structured interviews", "AI governance", "Staff retention", "Academic medical center operations"],
      audience: ["Dean", "Senior leadership", "HR leaders", "Department administrators", "Search committees"],
      strategic: "The deliverable is a fully interactive single-page HTML tool with no backend and no dependencies. It walks hiring managers through application review, phone screening, a 45-minute structured interview framework, role-specific scenario builders with built-in constraint changes, a live AI artifact review exercise, and a scoring rubric with automatic recommendations. The guide covers administrative, research administration, clinical support, and finance roles and integrates responsible-use guidance for frontier AI tools including Claude, Microsoft Copilot, ChatGPT, and Grok. Its design philosophy distinguishes between AI as a thinking accelerator, which is what institutions want to hire, and AI as a thinking replacement, which creates institutional risk. Every question, scenario, and scoring criterion is built to surface that difference in real time, not on paper.",
      sourceFile: "AI-Aware Hiring Guide for Academic Medical Centers",
      tags: ["AI hiring", "Academic medical centers", "Staff recruitment", "Structured interview", "AI governance", "Retention"],
      featured: false,
      confidential: false,
      cleanFile: null,
      fullArtifactUrl: null,
      liveUrl: "https://datadrivenmed.github.io/AI-Aware-Hiring-Guide/",
      liveLabel: "View live guide"
    }
  ];

  if (Array.isArray(window.ARTIFACTS)) {
    artifacts.forEach(artifact => {
      if (!window.ARTIFACTS.some(a => a.id === artifact.id)) {
        window.ARTIFACTS.push(artifact);
      }
    });
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
        node.nodeValue = node.nodeValue.replace(/Eighty-two artifacts/g, "Eighty-four artifacts");
      }
      if (node.nodeValue && node.nodeValue.includes("Eighty-three artifacts")) {
        node.nodeValue = node.nodeValue.replace(/Eighty-three artifacts/g, "Eighty-four artifacts");
      }
      if (node.nodeValue && node.nodeValue.includes("82 artifacts")) {
        node.nodeValue = node.nodeValue.replace(/82 artifacts/g, "84 artifacts");
      }
      if (node.nodeValue && node.nodeValue.includes("83 artifacts")) {
        node.nodeValue = node.nodeValue.replace(/83 artifacts/g, "84 artifacts");
      }
    });
  };

  window.addEventListener("load", replaceStaticCountText);
  const observer = new MutationObserver(replaceStaticCountText);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
