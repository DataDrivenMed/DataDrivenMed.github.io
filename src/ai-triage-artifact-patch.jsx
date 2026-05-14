/* global window */
// Updates the AI Triage Safety artifact with the current live leadership brief.

(function () {
  const artifacts = window.ARTIFACTS || [];
  const artifact = artifacts.find(a => a.id === "ai-08");
  if (!artifact) return;

  Object.assign(artifact, {
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
    liveLabel: "Open leadership brief"
  });
})();
