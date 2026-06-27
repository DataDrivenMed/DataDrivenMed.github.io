/* global window, document, NodeFilter, MutationObserver */
// Adds the AI Architecture Guide for Medical Faculty as a featured AI governance artifact.
(function () {
  const artifact = {
    id: "ai-18",
    title: "AI Architecture Guide for Medical Faculty",
    category: "ai-governance",
    role: "Interactive Faculty Development Reference · AI Literacy Infrastructure · 2026",
    summary: "Interactive architecture-focused AI literacy guide for medical faculty, translating foundational AI concepts, neural network architectures, generative AI systems, curriculum integration frameworks, glossary terms, and implementation readiness criteria into a usable faculty-development dashboard.",
    skills: [
      "Faculty AI literacy",
      "AI architecture education",
      "Curriculum integration",
      "Medical education technology",
      "AI-PACE framework",
      "Implementation readiness design",
      "Interactive HTML artifact design"
    ],
    audience: [
      "Dean",
      "Faculty",
      "Course directors",
      "Curriculum committees",
      "Medical educators",
      "Search committees"
    ],
    strategic: "Demonstrates the ability to convert complex AI architecture concepts into a practical faculty-development tool for academic medical centers. Positions AI literacy as institutional infrastructure rather than tool training, supporting curriculum design, faculty governance participation, and responsible AI adoption.",
    sourceFile: "AI Architecture Guide for Medical Faculty",
    tags: [
      "AI literacy",
      "Faculty development",
      "Medical education",
      "AI architecture",
      "AI-PACE",
      "Curriculum integration",
      "Responsible AI"
    ],
    featured: true,
    confidential: false,
    cleanFile: null,
    fullArtifactUrl: null,
    liveUrl: "ai-architecture-guide-medical-faculty.html",
    liveLabel: "View architecture guide"
  };

  const registerArtifact = () => {
    if (!Array.isArray(window.ARTIFACTS)) return false;

    const existingIndex = window.ARTIFACTS.findIndex(a => a.id === artifact.id);
    if (existingIndex >= 0) {
      window.ARTIFACTS[existingIndex] = { ...window.ARTIFACTS[existingIndex], ...artifact };
    } else {
      window.ARTIFACTS.push(artifact);
    }

    if (typeof window.applyEvidenceStatusMetadata === "function") {
      window.applyEvidenceStatusMetadata(window.ARTIFACTS);
    }

    if (Array.isArray(window.HERO_STATS)) {
      const portfolioStat = window.HERO_STATS.find(s => String(s.lbl || "").includes("Artifacts in capability portfolio"));
      if (portfolioStat) portfolioStat.num = String(window.ARTIFACTS.length);
    }

    const skills = new Set();
    const audiences = new Set();
    window.ARTIFACTS.forEach(a => {
      (a.skills || []).forEach(k => skills.add(k));
      (a.audience || []).forEach(k => audiences.add(k));
    });
    window.ALL_SKILLS = [...skills].sort();
    window.ALL_AUDIENCES = [...audiences].sort();
    return true;
  };

  const replaceStaticCountText = () => {
    if (!document.body || !Array.isArray(window.ARTIFACTS)) return;
    const count = window.ARTIFACTS.length;
    const countWord = count === 85 ? "Eighty-five" : count === 86 ? "Eighty-six" : String(count);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!node.nodeValue) return;
      node.nodeValue = node.nodeValue
        .replace(/Eighty-two artifacts/g, `${countWord} artifacts`)
        .replace(/Eighty-three artifacts/g, `${countWord} artifacts`)
        .replace(/Eighty-four artifacts/g, `${countWord} artifacts`)
        .replace(/Eighty-five artifacts/g, `${countWord} artifacts`)
        .replace(/82 artifacts/g, `${count} artifacts`)
        .replace(/83 artifacts/g, `${count} artifacts`)
        .replace(/84 artifacts/g, `${count} artifacts`)
        .replace(/85 artifacts/g, `${count} artifacts`);
    });
  };

  const run = () => {
    registerArtifact();
    replaceStaticCountText();
  };

  run();
  window.addEventListener("DOMContentLoaded", run);
  window.addEventListener("load", run);
  window.addEventListener("hashchange", run);

  const observer = new MutationObserver(run);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
