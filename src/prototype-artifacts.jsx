/* global window */
// =============================================================
// prototype-artifacts.jsx
// Adds public live demonstration prototypes that use sample/synthetic data.
// Loaded after data.jsx so the core inventory remains intact.
// =============================================================

(function addPrototypeArtifacts() {
  if (!window.ARTIFACTS || !Array.isArray(window.ARTIFACTS)) return;

  const prototypeArtifacts = [
    {
      id: "gme-09",
      title: "GME Finance Scenario Simulator",
      category: "gme-finance",
      role: "Live demonstration prototype using synthetic data",
      summary: "Interactive demonstration tool modeling the financial and operational implications of GME trainee movements, payment-rate changes, cap scenarios, and affiliation structures. Built to show how complex GME finance assumptions can be translated into executive-ready scenario analysis.",
      skills: ["GME finance", "Scenario modeling", "Waterfall analysis", "Sensitivity modeling", "Streamlit", "Executive decision support", "Synthetic data prototype"],
      audience: ["Dean", "CFO", "GME leadership", "Health-system partners", "Contracts team", "Senior leadership"],
      strategic: "Shows the ability to convert GME finance complexity into a practical decision-support product for senior leadership, finance teams, and health-system partners. Demonstrates how changes in trainee distribution, payment assumptions, and affiliation scenarios can be compared through waterfall analysis, sensitivity modeling, and board-ready tables. Uses synthetic demonstration data only.",
      sourceFile: "gme-finance-scenario-simulator-synthetic-prototype.md",
      cleanFile: "gme-finance-scenario-simulator-synthetic-prototype.md",
      tags: ["GME finance", "Scenario modeling", "Affiliation strategy", "Waterfall analysis", "Synthetic data"],
      featured: true,
      confidential: false,
      liveUrl: "https://gme-finance-simulator.streamlit.app/",
      liveLabel: "Launch simulator",
      fullArtifactUrl: "artifact.html?file=gme-finance-scenario-simulator-synthetic-prototype.md&id=gme-09",
    },
    {
      id: "an-10",
      title: "Enterprise Institutional Effectiveness Dashboard",
      category: "analytics",
      role: "Live demonstration prototype using synthetic data",
      summary: "Interactive demonstration dashboard showing how academic medical center leaders can view education outcomes, research enterprise indicators, workforce analytics, and accreditation compliance signals in one executive decision-support interface.",
      skills: ["Institutional effectiveness", "Executive analytics", "Academic medical center dashboard", "Accreditation monitoring", "Plotly", "Streamlit", "Synthetic data prototype"],
      audience: ["Dean", "Chancellor", "Vice Chancellor", "Associate Deans", "Strategic planning leaders", "Accreditation leaders", "Institutional effectiveness teams"],
      strategic: "Demonstrates the ability to design a unified institutional effectiveness view that connects academic, research, workforce, and accreditation domains. The prototype shows how leadership can move from fragmented reports to an integrated executive dashboard for monitoring performance, risk, and strategic priorities. Uses synthetic demonstration data only.",
      sourceFile: "enterprise-institutional-effectiveness-dashboard-synthetic-prototype.md",
      cleanFile: "enterprise-institutional-effectiveness-dashboard-synthetic-prototype.md",
      tags: ["Institutional effectiveness", "Executive analytics", "Accreditation", "Research enterprise", "Workforce analytics", "Synthetic data"],
      featured: true,
      confidential: false,
      liveUrl: "https://institutional-effectiveness-dashboard.streamlit.app/",
      liveLabel: "Launch dashboard",
      fullArtifactUrl: "artifact.html?file=enterprise-institutional-effectiveness-dashboard-synthetic-prototype.md&id=an-10",
    },
  ];

  prototypeArtifacts.forEach((artifact) => {
    if (!window.ARTIFACTS.some((existing) => existing.id === artifact.id)) {
      window.ARTIFACTS.push(artifact);
    }
  });

  if (Array.isArray(window.HERO_STATS)) {
    const artifactStat = window.HERO_STATS.find((s) => /Artifacts in capability portfolio/i.test(s.lbl || ""));
    if (artifactStat) artifactStat.num = String(window.ARTIFACTS.length);
  }

  if (Array.isArray(window.FLAGSHIP_IDS)) {
    ["gme-09", "an-10"].forEach((id) => {
      if (!window.FLAGSHIP_IDS.includes(id)) window.FLAGSHIP_IDS.push(id);
    });
  }

  window.ALL_SKILLS = [...new Set(window.ARTIFACTS.flatMap((a) => a.skills || []))].sort();
  window.ALL_AUDIENCES = [...new Set(window.ARTIFACTS.flatMap((a) => a.audience || []))].sort();
})();
