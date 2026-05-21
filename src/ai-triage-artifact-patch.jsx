/* global window */
// Preserves both ChatGPT clinical AI artifacts as separate portfolio records.
// 1) AI Triage Safety Leadership Brief
// 2) ChatGPT for Clinicians: HealthBench Professional Evaluation

(function () {
  const artifacts = window.ARTIFACTS || [];
  const triageArtifact = artifacts.find(a => a.id === "ai-08");

  if (triageArtifact) {
    Object.assign(triageArtifact, {
      title: "AI Triage Safety Leadership Brief",
      role: "Clinical AI safety leadership brief",
      summary: "Static, zero-dependency HTML leadership brief translating a peer-reviewed Nature Medicine study on ChatGPT Health triage failures into role-specific operational intelligence for UME and GME leaders, faculty, and trainees at LSU Health.",
      skills: [
        "Clinical AI safety",
        "Evidence synthesis",
        "Triage risk analysis",
        "Trainee safety governance",
        "Multi-system policy translation"
      ],
      audience: [
        "UME leadership",
        "GME leadership",
        "Program directors",
        "Faculty",
        "Trainees"
      ],
      strategic: "Places ChatGPT Health triage evidence into LSU Health's real clinical learning environment by mapping structural LLM failure modes to trainee risks across affiliate hospitals, including dangerous undertriage at clinical extremes, anchoring bias, chain-of-thought betrayal, and paradoxical safeguard behavior.",
      tags: [
        "ChatGPT Health",
        "Clinical AI",
        "AI triage",
        "Trainee safety",
        "Nature Medicine",
        "LLM failure modes"
      ],
      liveUrl: "https://datadrivenmed.github.io/ChatGPT-Triage/",
      liveLabel: "Open leadership brief",
      cleanFile: "explanation-artifact-ai-triage-safety-brief.md",
      fullArtifactUrl: "artifact.html?file=explanation-artifact-ai-triage-safety-brief.md&id=ai-08"
    });
  }

  if (!artifacts.some(a => a.id === "ai-14")) {
    artifacts.push({
      id: "ai-14",
      title: "ChatGPT for Clinicians: A HealthBench Professional Evaluation",
      category: "ai-governance",
      role: "Clinical AI product evaluation report",
      summary: "Independent structural evaluation of OpenAI's ChatGPT for Clinicians workspace against the HealthBench Professional dataset, separating vendor-reported benchmark performance from real-world clinical safety, workflow, and governance risk.",
      skills: [
        "Clinical AI evaluation",
        "HealthBench appraisal",
        "Benchmark interpretation",
        "Clinical workflow risk analysis",
        "AI governance"
      ],
      audience: [
        "UME leadership",
        "GME leadership",
        "Clinical faculty",
        "AI governance committees",
        "Program directors"
      ],
      strategic: "Shows how a high-profile clinician-facing AI launch should be evaluated beyond benchmark scores by mapping architectural constraints such as blank-context session design, lack of EHR integration, one-time NPI verification, template staleness, anchoring bias, and chain-of-thought dissociation to institutional adoption risk.",
      sourceFile: "Explanation Artifact-ChatGPT for Clinicians Evaluation Report.md",
      tags: [
        "ChatGPT for Clinicians",
        "HealthBench Professional",
        "Clinical AI",
        "GPT-5.4",
        "Benchmark risk",
        "EHR integration"
      ],
      featured: false,
      confidential: false,
      cleanFile: "explanation-artifact-chatgpt-for-clinicians-healthbench-evaluation.md",
      fullArtifactUrl: "artifact.html?file=explanation-artifact-chatgpt-for-clinicians-healthbench-evaluation.md&id=ai-14",
      liveUrl: "https://datadrivenmed.github.io/ChatGPT-for-Clinicians/",
      liveLabel: "Open evaluation report"
    });
  }
  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(artifacts);
  }
})();
