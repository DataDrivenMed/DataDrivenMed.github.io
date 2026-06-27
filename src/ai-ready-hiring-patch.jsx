/* global window */
// Adds AI-aware hiring artifacts without replacing the core portfolio data file.
(function () {
  const artifacts = [
    {
      id: "ai-19",
      title: "AI-Ready Hiring Framework for CME and Academic Operations",
      category: "ai-governance",
      role: "Project Lead · LSU Health New Orleans, Office of Medical Education · 2026",
      summary: "Structured interview screening protocol for CME Coordinator recruitment in an AI-augmented hiring environment. The framework responds to the collapse of cover letter screening as a reliable competency signal by shifting evaluation toward live judgment, verification behavior, communication quality, compliance escalation, and responsible AI use.",
      skills: ["AI governance", "Hiring protocol design", "CME operations", "ACCME judgment", "AI literacy assessment", "Staff recruitment"],
      audience: ["Dean", "CME leadership", "Academic operations", "Hiring committees", "Search committees"],
      strategic: "Shows AI governance translated into a practical staff hiring system: not AI detection, but structured evaluation of judgment, verification habits, privacy awareness, faculty communication, and compliance instinct in real time. This artifact remains the CME-specific hiring framework, distinct from the broader academic medical center staff hiring guide.",
      sourceFile: "AI-Ready Hiring Guide for CME and Academic Operations",
      tags: ["AI hiring", "CME", "Academic operations", "ACCME", "Staff recruitment", "AI literacy"],
      featured: false,
      confidential: false,
      cleanFile: null,
      fullArtifactUrl: null,
      liveUrl: "ai-ready-hiring-guide-cme-academic-operations.html",
      liveLabel: "View CME guide"
    },
    {
      id: "ai-18",
      title: "AI-Aware Hiring Guide for Academic Medical Centers",
      category: "ai-governance",
      role: "Featured interactive workforce governance artifact · Academic medical center staff hiring · 2026",
      summary: "Interactive hiring guide for non-faculty staff recruitment in academic medical centers. Generative AI has made it trivially easy to produce polished cover letters and rehearsed interview answers, which means traditional screening tools no longer reliably distinguish strong candidates from weak ones. This artifact gives hiring managers a structured process for testing judgment, communication, verification behavior, and responsible AI use in real time.",
      skills: ["AI-aware hiring", "Workforce strategy", "Structured interviews", "AI governance", "Staff retention", "Academic medical center operations", "Responsible AI use", "Hiring manager enablement"],
      audience: ["Dean", "Senior leadership", "HR leaders", "Department administrators", "Search committees"],
      strategic: "The deliverable is a fully interactive single-page HTML tool with no backend and no dependencies. It walks hiring managers through application review, phone screening, a 45-minute structured interview framework, role-specific scenario builders with built-in constraint changes, a live AI artifact review exercise, scoring rubrics, interviewer notes, implementation checklists, and AI-aware onboarding. The guide covers administrative, research administration, clinical support, and finance roles and integrates responsible-use guidance for frontier AI tools including Claude, Microsoft Copilot, ChatGPT, and Grok. Its design philosophy distinguishes between AI as a thinking accelerator, which is what institutions want to hire, and AI as a thinking replacement, which creates institutional risk.",
      sourceFile: "AI-Aware Hiring Guide for Academic Medical Centers",
      tags: ["AI hiring", "Academic medical centers", "Staff recruitment", "Structured interview", "AI governance", "Retention", "Interactive guide"],
      featured: true,
      confidential: false,
      cleanFile: null,
      fullArtifactUrl: null,
      liveUrl: "https://datadrivenmed.github.io/AI-Aware-Hiring-Guide/",
      liveLabel: "Launch interactive guide"
    }
  ];

  if (Array.isArray(window.ARTIFACTS)) {
    artifacts.forEach(artifact => {
      const existing = window.ARTIFACTS.find(a => a.id === artifact.id);
      if (existing) {
        Object.assign(existing, artifact);
      } else {
        window.ARTIFACTS.push(artifact);
      }
    });
  }

  if (Array.isArray(window.FLAGSHIP_IDS)) {
    ["ai-18", "ai-19"].forEach(id => {
      if (!window.FLAGSHIP_IDS.includes(id)) window.FLAGSHIP_IDS.push(id);
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
      if (!node.nodeValue) return;
      node.nodeValue = node.nodeValue
        .replace(/Eighty-two artifacts/g, String(window.ARTIFACTS.length) + " artifacts")
        .replace(/Eighty-three artifacts/g, String(window.ARTIFACTS.length) + " artifacts")
        .replace(/Eighty-four artifacts/g, String(window.ARTIFACTS.length) + " artifacts")
        .replace(/82 artifacts/g, String(window.ARTIFACTS.length) + " artifacts")
        .replace(/83 artifacts/g, String(window.ARTIFACTS.length) + " artifacts")
        .replace(/84 artifacts/g, String(window.ARTIFACTS.length) + " artifacts");
    });
  };

  window.addEventListener("load", replaceStaticCountText);
  const observer = new MutationObserver(replaceStaticCountText);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
