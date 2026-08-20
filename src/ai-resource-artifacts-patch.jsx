/* global window */
// =============================================================
// ai-resource-artifacts-patch.jsx
// Adds public AI governance resource artifacts to the portfolio library.
// =============================================================

(function addAIResourceArtifacts() {
  if (!window.ARTIFACTS || !Array.isArray(window.ARTIFACTS)) return;

  const resources = [
    {
      id: "ai-18",
      title: "Prompt Injection in Healthcare",
      category: "ai-governance",
      role: "Live public AI safety and governance education artifact",
      summary: "Public AI safety resource for academic health sciences faculty and staff explaining prompt injection as a trust, workflow, and system-design problem in healthcare. Includes healthcare-specific examples, warning signs, response steps, organizational controls, and the PAUSE framework for practical review of permissions, approved tools, untrusted content, sensitive information, and external action.",
      skills: ["AI governance", "Prompt injection", "AI safety", "Cybersecurity translation", "Healthcare risk communication", "Faculty AI literacy", "Workflow controls", "Non-PHI public education"],
      audience: ["Faculty", "Staff", "Clinicians", "Researchers", "Educators", "Administrators", "Privacy", "Compliance", "Informatics", "AI governance committees"],
      strategic: "Demonstrates the ability to translate a technical AI security threat into practical workforce education and institutional governance guidance for academic health sciences settings. The artifact links cybersecurity-aware AI governance with clinical, educational, research, and administrative workflows without overclaiming policy authority.",
      sourceFile: "prompt-injection-healthcare-ai-safety-resource.md",
      cleanFile: "prompt-injection-healthcare-ai-safety-resource.md",
      tags: ["Prompt injection", "AI safety", "Healthcare AI", "Cybersecurity", "PAUSE framework", "AI governance", "Faculty education"],
      featured: true,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/prompt-injection-healthcare/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=prompt-injection-healthcare-ai-safety-resource.md&id=ai-18"
    },
    {
      id: "ai-19",
      title: "AI Agents in Medicine",
      category: "ai-governance",
      role: "Live public faculty-facing AI literacy and institutional strategy artifact",
      summary: "Public education and governance resource for academic health sciences faculty and staff explaining how AI agents differ from ordinary chatbots and why autonomy, tools, memory, retrieval, permissions, and human review change the risk profile of AI systems in medicine.",
      skills: ["AI governance", "Agentic AI", "Faculty AI literacy", "Academic medicine strategy", "Workflow design", "Human-in-the-loop governance", "AI implementation planning", "Non-PHI public education"],
      audience: ["Faculty", "Staff", "Researchers", "Program directors", "Administrators", "Clinical partners", "AI governance committees", "Research leadership"],
      strategic: "Demonstrates the ability to translate agentic AI from a vendor-driven technology category into a practical institutional framework for education, research, clinical partner pilots, and administrative operations. The artifact supports institutional readiness by clarifying autonomy, permissions, data sensitivity, human review, and partner-governed deployment boundaries.",
      sourceFile: "ai-agents-in-medicine-resource.md",
      cleanFile: "ai-agents-in-medicine-resource.md",
      tags: ["AI agents", "Agentic AI", "Academic medicine", "AI literacy", "Digital transformation", "Governance", "Human review"],
      featured: true,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/ai-agents/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=ai-agents-in-medicine-resource.md&id=ai-19"
    },
    {
      id: "ai-20",
      title: "Safe Use of AI in Health Professions Education",
      category: "ai-governance",
      role: "Live public health professions education governance artifact",
      summary: "Public faculty and staff education resource focused on responsible AI use in health professions learning environments. Frames safe AI use around role, data type, intended purpose, human review, institutional approval, professionalism, learner assessment, and clinical-site boundaries.",
      skills: ["AI governance", "Health professions education", "Faculty AI literacy", "Learner assessment", "Academic integrity", "Privacy-aware education", "Medical education policy translation", "Non-PHI public education"],
      audience: ["Faculty", "Staff", "Students", "Residents", "Fellows", "Program directors", "Medical educators", "Student Affairs", "UME", "GME"],
      strategic: "Demonstrates the ability to translate AI governance into the educational operating environment of health professions programs. The artifact connects AI literacy, learner support, assessment validity, professionalism, privacy, and clinical-site governance in a form usable by faculty and staff.",
      sourceFile: "ai-health-professions-safe-use-resource.md",
      cleanFile: "ai-health-professions-safe-use-resource.md",
      tags: ["AI safe use", "Health professions education", "Medical education", "Faculty education", "Academic integrity", "AI governance", "Learner support"],
      featured: false,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/ai-health-professions-safe-use/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=ai-health-professions-safe-use-resource.md&id=ai-20"
    }
  ];

  resources.forEach((artifact) => {
    const existing = window.ARTIFACTS.find((item) => item.id === artifact.id);
    if (existing) Object.assign(existing, artifact);
    else window.ARTIFACTS.push(artifact);
  });

  if (Array.isArray(window.FLAGSHIP_IDS)) {
    ["ai-18", "ai-19"].forEach((id) => {
      if (!window.FLAGSHIP_IDS.includes(id)) window.FLAGSHIP_IDS.push(id);
    });
  }

  if (Array.isArray(window.HERO_STATS)) {
    const artifactStat = window.HERO_STATS.find((s) => /Artifacts in capability portfolio/i.test(s.lbl || ""));
    if (artifactStat) artifactStat.num = String(window.ARTIFACTS.length);
  }

  window.ALL_SKILLS = [...new Set(window.ARTIFACTS.flatMap((a) => a.skills || []))].sort();
  window.ALL_AUDIENCES = [...new Set(window.ARTIFACTS.flatMap((a) => a.audience || []))].sort();

  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(window.ARTIFACTS);
  }
})();
