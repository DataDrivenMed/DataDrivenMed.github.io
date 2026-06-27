/* global window */
// =============================================================
// genai-atlas-patch.jsx
// Adds the Generative AI Use-Case Atlas for Academic Health Sciences
// as a live public evidence artifact mapped to AI governance,
// research strategy, NCI readiness, and partner-governed implementation.
// =============================================================

(function addGenAIAtlasArtifact() {
  if (!window.ARTIFACTS || !Array.isArray(window.ARTIFACTS)) return;

  const atlasArtifact = {
    id: "ai-17",
    title: "Generative AI Use-Case Atlas for Academic Health Sciences",
    category: "ai-governance",
    role: "Live public institutional AI governance and faculty education artifact",
    summary:
      "Interactive web-based atlas organizing more than 60 generative AI use cases for academic health sciences faculty and staff across teaching, clinical care, research and NCI readiness, administration, operations, and partner-governed health-system workflows. Built to help faculty and staff understand where AI can be used safely, where partner approval is required, which models and tools should be evaluated, and how governance, PHI, IRB, clinical validation, and human review requirements differ across use cases.",
    skills: [
      "AI governance",
      "Faculty AI literacy",
      "Academic medicine strategy",
      "Clinical AI risk classification",
      "NCI readiness",
      "Research strategy",
      "Partner-governed implementation",
      "Interactive web artifact",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel deployment"
    ],
    audience: [
      "Faculty",
      "Staff",
      "Dean",
      "Research leadership",
      "Program directors",
      "Clinical partners",
      "AI governance committees",
      "NCI planning teams"
    ],
    strategic:
      "Demonstrates the ability to translate generative AI from a broad technology trend into a practical institutional decision-support framework for academic medicine. The artifact connects AI literacy, teaching, clinical partner governance, biomedical research, NCI readiness, operational decision-making, model evaluation, and data-sensitivity controls into one navigable product. It is especially relevant for an academic health sciences center that trains learners and conducts research across partner hospital systems rather than directly owning hospitals.",
    sourceFile: "generative-ai-use-case-atlas-academic-health-sciences-live.md",
    cleanFile: "generative-ai-use-case-atlas-academic-health-sciences-live.md",
    tags: [
      "Generative AI",
      "AI governance",
      "Academic health sciences",
      "NCI readiness",
      "Clinical partner governance",
      "Faculty development",
      "Research strategy",
      "Vercel"
    ],
    featured: true,
    confidential: false,
    liveUrl: "https://genai-healthcare-usecase-atlas.vercel.app/",
    liveLabel: "Launch atlas",
    fullArtifactUrl:
      "artifact.html?file=generative-ai-use-case-atlas-academic-health-sciences-live.md&id=ai-17"
  };

  const existing = window.ARTIFACTS.find((item) => item.id === atlasArtifact.id);
  if (existing) {
    Object.assign(existing, atlasArtifact);
  } else {
    window.ARTIFACTS.push(atlasArtifact);
  }

  if (Array.isArray(window.HERO_STATS)) {
    const artifactStat = window.HERO_STATS.find((s) =>
      /Artifacts in capability portfolio/i.test(s.lbl || "")
    );
    if (artifactStat) artifactStat.num = String(window.ARTIFACTS.length);
  }

  if (Array.isArray(window.FLAGSHIP_IDS) && !window.FLAGSHIP_IDS.includes("ai-17")) {
    window.FLAGSHIP_IDS.push("ai-17");
  }

  window.ALL_SKILLS = [...new Set(window.ARTIFACTS.flatMap((a) => a.skills || []))].sort();
  window.ALL_AUDIENCES = [...new Set(window.ARTIFACTS.flatMap((a) => a.audience || []))].sort();

  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(window.ARTIFACTS);
  }
})();
