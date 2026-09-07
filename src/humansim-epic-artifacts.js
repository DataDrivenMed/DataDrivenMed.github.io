/* global window */
// Adds HumanSim and the ChatGPT + Epic clinician briefing to the existing
// portfolio evidence model without changing page layout or component structure.
(function () {
  "use strict";

  if (!Array.isArray(window.ARTIFACTS)) return;

  var artifacts = [
    {
      id: "ev-humansim",
      title: "HumanSim — Living Visual Medical Knowledge Network",
      category: "simulation-quality",
      role: "Live public medical-education and digital-human simulation prototype",
      summary: "A formative interactive medical-learning environment designed to connect patient cases and interventions with anatomy, physiology, biochemistry, molecular biology, genetics, pathology, pharmacology, diagnostics, compensation, and clinical medicine through one visual, multi-scale patient model.",
      skills: ["Digital-human simulation", "Medical education innovation", "Curriculum integration", "Scientific visualization", "Simulation architecture", "AI-supported learning design", "Systems thinking"],
      audience: ["Medical students", "Medical educators", "Curriculum leaders", "Simulation faculty", "Academic medicine leaders"],
      strategic: "Demonstrates a systems-level approach to medical education: instead of treating foundational sciences, clinical medicine, and interventions as separate modules, HumanSim uses one patient-anchored knowledge model so learners can move from patient to mechanism or mechanism to patient. The public build is a formative educational prototype; no claim is made that it is a clinically validated simulator, a validated all-specialty physiology model, or an institutionally adopted curriculum platform.",
      sourceFile: "humansim-living-visual-medical-knowledge-network.md",
      cleanFile: "humansim-living-visual-medical-knowledge-network.md",
      tags: ["HumanSim", "Medical education", "Digital human", "Simulation", "Foundational sciences", "Clinical integration", "Mechanism learning", "Scientific visualization", "HumanOS"],
      featured: true,
      confidential: false,
      evidenceType: "public",
      publicDocument: true,
      liveUrl: "https://mechanism-atlas.vercel.app/",
      liveLabel: "Launch HumanSim",
      fullArtifactUrl: "artifact.html?file=humansim-living-visual-medical-knowledge-network.md&id=ev-humansim",
      fullArtifactLabel: "Open portfolio evidence record",
      fullArtifactNote: "HumanSim is presented here as a public formative prototype. The evidence record explains the educational problem, product architecture, design logic, and current validation boundary before reviewers launch the live application.",
      evidenceStrength: "Public formative prototype · clinical validation not claimed",
      entriesIntro: "The record below explains why HumanSim belongs in the portfolio and the boundaries of what the current public prototype demonstrates.",
      entries: [
        "Problem addressed — Medical students often encounter anatomy, physiology, biochemistry, pathology, pharmacology, diagnostics, and clinical medicine as separate bodies of knowledge. HumanSim is designed to make those relationships visible from one patient state rather than as disconnected modules.",
        "Product model — Patient → investigate or intervene → observe → WHY → mechanism → comparison → time → connected medicine → replay, with anatomy used as the spatial anchor rather than the curriculum itself.",
        "Connected-learning architecture — The same medical concept can be traversed from molecule to patient or from patient back to molecule, with patient context changing which relationships are emphasized.",
        "Scientific workflow — Reference normal, disease disturbance, compensatory physiology, intervention, and response over time are kept distinct so learners can understand not only what changed but why.",
        "Implementation — The public build integrates BodyParts3D anatomy, the HumanOS patient-state engine, a full-screen mechanism workspace, concept resolution, and progressive Core, Deep, Clinical, and Board learning depths.",
        "Evidence boundary — HumanSim is a formative educational prototype. It is not presented as a validated clinical decision-support system, a validated all-specialty physiology simulator, or an institutionally adopted curriculum platform."
      ],
      detailData: {
        approach: [
          "Anchor learning in one patient state rather than separate specialty or discipline modules, so anatomy, physiology, pathology, pharmacology, diagnostics, and clinical consequences can be traversed as one connected system.",
          "Use patient context to activate the most relevant medical relationships while preserving bidirectional learning from molecule to patient and from patient back to mechanism.",
          "Separate the authoritative simulation/state layer from the explanatory AI layer: quantitative physiology should come from explicit models and validated sources where available, while AI supports navigation, explanation, and debriefing rather than inventing physiology."
        ],
        execution: [
          "Designed a patient-first launch flow so learners enter through a clinical problem, with search and anatomy exploration available as alternate entry points.",
          "Integrated a detailed BodyParts3D anatomical atlas with the HumanOS patient-state engine and a full-screen WHY workspace for mechanism, comparison, time, and connected-knowledge views.",
          "Structured explanations across reference normal, disease disturbance, compensation, intervention, and response over time, with progressive Core, Deep, Clinical, and Board learning depths.",
          "Added live concept resolution and curated mechanism dossiers so a recognized medical concept can be learned even when a quantitative HumanOS intervention model is not yet available."
        ],
        tools: ["BodyParts3D", "HumanOS", "Three.js", "Next.js", "React", "Supabase", "RxNorm / NLM concept normalization", "Medical mechanism visualization"],
        value: "HumanSim extends a long-standing simulation and evaluation portfolio into a digital learning environment focused on medical connectedness. Its value proposition is educational rather than diagnostic: help learners see why a patient changes, how compensatory systems interact, and how foundational science connects to clinical findings and interventions.",
        competencies: ["Simulation and medical education design", "Systems thinking", "Product architecture", "Scientific visualization", "Curriculum integration", "Responsible AI design"],
        related: ["sim-01", "ev-cals-evaluation-framework", "ev-ai-ume-gme-competency-map", "ai-06"]
      }
    },
    {
      id: "ai-epic-chatgpt",
      title: "ChatGPT + Epic: What It Means for Clinicians",
      category: "ai-governance",
      role: "Live public clinician-facing AI/EHR governance briefing",
      summary: "A clinician-focused briefing on ChatGPT for Healthcare connecting to authorized Epic patient data—how access works, what HIPAA and business associate agreements do and do not permit, where the capability may help, and why clinician judgment and local health-system governance still matter.",
      skills: ["Clinical AI evaluation", "EHR / AI integration analysis", "HIPAA and BAA translation", "Clinician education", "AI governance", "Health-system workflow analysis", "Executive communication"],
      audience: ["Clinical faculty", "Physicians", "Residents", "CMIOs", "Health-system leaders", "AI governance teams"],
      strategic: "Shows how an emerging clinical AI announcement can be translated from headline-level technology news into practical questions of authorization, data access, workflow, privacy, human oversight, and partner-specific governance. The briefing does not claim that ChatGPT for Healthcare is deployed, approved, or available at LSU Health or any LSU clinical partner.",
      sourceFile: "chatgpt-epic-clinical-briefing.md",
      cleanFile: "chatgpt-epic-clinical-briefing.md",
      tags: ["ChatGPT for Healthcare", "Epic", "Clinical AI", "EHR integration", "HIPAA", "Business associate agreement", "Human oversight", "Health-system governance"],
      featured: false,
      confidential: false,
      evidenceType: "public",
      publicDocument: true,
      liveUrl: "https://datadrivenmed.github.io/resources/epic-chatgpt/",
      liveLabel: "Read live clinical briefing",
      fullArtifactUrl: "artifact.html?file=chatgpt-epic-clinical-briefing.md&id=ai-epic-chatgpt",
      fullArtifactLabel: "Open portfolio evidence record",
      fullArtifactNote: "This record explains the institutional question, analysis frame, and evidence boundary. The live briefing provides the complete clinician-facing explanation.",
      evidenceStrength: "Public clinician-facing analysis · no local deployment claimed",
      entriesIntro: "The briefing is included as evidence of clinical-AI translation and governance analysis, not as evidence of local deployment or endorsement.",
      entries: [
        "Institutional question — What does authorized ChatGPT for Healthcare connectivity to Epic actually mean for clinicians beyond the headline that an AI system can access chart information?",
        "Analysis frame — Authorization, data access, HIPAA and business associate agreement boundaries, plausible clinical uses, failure modes, clinician accountability, and local health-system approval are treated as separate but connected questions.",
        "Distributed-practice relevance — Academic medical faculty may practice and teach across separately governed health systems whose EHR configurations, approved AI tools, and permitted workflows differ.",
        "Clinical governance point — Technical connectivity does not itself establish clinical appropriateness, workflow validation, security approval, or permission to use the capability in a specific health system.",
        "Communication product — An approximately eight-minute clinician-facing explanation translates a fast-moving AI/EHR development into practical questions for clinical faculty and health-system leaders.",
        "Evidence boundary — The briefing does not claim that ChatGPT for Healthcare is approved, deployed, endorsed, or available at LSU Health or any LSU clinical partner."
      ],
      detailData: {
        approach: [
          "Start with the actual technical and governance question—what authorized data an AI system can access and under whose controls—rather than reducing the announcement to the phrase 'AI can read the chart.'",
          "Separate HIPAA compliance and BAA coverage from clinical appropriateness, local approval, workflow validation, security controls, and clinician accountability.",
          "Translate a national product capability into a distributed academic-medical-school context where faculty practice and teach across separately governed partner health systems."
        ],
        execution: [
          "Authored an approximately eight-minute clinician-facing explanation of the Epic connection, its practical meaning, and the limits of the announcement.",
          "Explained authorization and data-access boundaries, HIPAA/BAA implications, plausible clinical uses, failure modes, and the continued requirement for clinician review.",
          "Explicitly distinguished national product availability from local deployment or approval and emphasized that EHR configuration and permitted AI use can differ across health systems."
        ],
        tools: ["Clinical AI evaluation", "Epic / EHR workflow analysis", "HIPAA", "Business associate agreements", "Human oversight", "Multi-health-system governance", "Faculty communication"],
        value: "Provides a practical example of responsible AI translation: take a rapidly moving clinical technology development and convert it into the questions clinicians and academic-health-system leaders need to ask before assuming that technical connectivity equals safe or approved clinical use.",
        competencies: ["Clinical AI governance", "Regulatory translation", "Clinician communication", "EHR workflow reasoning", "Risk framing", "Cross-system institutional analysis"],
        related: ["ai-01", "ai-04", "ai-19", "ai-amc-guide"]
      }
    }
  ];

  artifacts.forEach(function (item) {
    var existing = window.ARTIFACTS.find(function (a) { return a && a.id === item.id; });
    if (existing) Object.assign(existing, item);
    else window.ARTIFACTS.push(item);
  });

  var aiCap = (window.CAPABILITIES || []).find(function (c) { return c && c.id === "ai-governance"; });
  if (aiCap) {
    aiCap.short = "AI policy and governance, clinical AI and EHR integration evaluation, tool vetting, faculty education, and responsible adoption across academic health sciences.";
    aiCap.skills = ["Pre-final AI policy draft", "Clinical AI / EHR integration", "Tool vetting", "Regulatory synthesis", "Faculty AI literacy"];
  }

  var simCap = (window.CAPABILITIES || []).find(function (c) { return c && c.id === "simulation-quality"; });
  if (simCap) {
    simCap.short = "Simulation evaluation, patient safety, clinical quality, and digital-human learning systems connecting foundational and clinical medicine.";
    simCap.skills = ["AHRQ TeamSTEPPS", "Simulation evaluation", "Digital-human learning", "Patient safety", "Debriefing"];
  }

  window.ALL_SKILLS = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.skills || []; }))).sort();
  window.ALL_AUDIENCES = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.audience || []; }))).sort();
})();
