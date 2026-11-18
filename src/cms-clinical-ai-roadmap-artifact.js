/* global window */
(function () {
  "use strict";
  if (!Array.isArray(window.ARTIFACTS)) return;
  var item = {
  "id": "ev-cms-clinical-ai-roadmap",
  "title": "Federal Clinical AI Roadmap: Faculty Brief",
  "category": "ai-governance",
  "role": "Public faculty-facing policy interpretation and governance briefing",
  "summary": "A faculty-facing briefing translating the federal clinical AI roadmap into practical questions about clinical autonomy, payment incentives, evidence quality, clinician responsibility, teaching and affiliate-specific governance. Includes policy-status comparisons, an autonomy ladder, payment illustrations, an evidence table, action checklists and linked sources.",
  "skills": [
    "Federal health policy interpretation",
    "Clinical AI governance",
    "Healthcare payment analysis",
    "Evidence appraisal",
    "Faculty communication",
    "Distributed health-system governance"
  ],
  "audience": [
    "Clinical faculty",
    "Physicians",
    "Residents",
    "CMIOs",
    "Academic medicine leaders",
    "AI governance teams",
    "Finance and practice-plan leaders"
  ],
  "strategic": "Connects national clinical AI strategy with the operational reality of a medical school whose faculty practice across independently governed health systems. Demonstrates policy translation and decision-focused communication while distinguishing an informational briefing from institutional policy, affiliate authorization or a legal or billing determination.",
  "sourceFile": "cms-clinical-ai-roadmap-faculty-brief.md",
  "cleanFile": "cms-clinical-ai-roadmap-faculty-brief.md",
  "tags": [
    "CMS",
    "Clinical AI roadmap",
    "Super intelligence",
    "ACCESS",
    "TEMPO",
    "ADVOCATE",
    "Payment incentives",
    "Evidence appraisal",
    "LCMC",
    "Ochsner",
    "FMOLHS",
    "Faculty development"
  ],
  "featured": false,
  "confidential": false,
  "evidenceType": "public",
  "publicDocument": true,
  "liveUrl": "https://datadrivenmed.github.io/CMS-Superintelligence/",
  "liveLabel": "Read the Clinical AI Roadmap Brief",
  "fullArtifactUrl": "artifact.html?file=cms-clinical-ai-roadmap-faculty-brief.md&id=ev-cms-clinical-ai-roadmap",
  "fullArtifactLabel": "Read the portfolio evidence record",
  "fullArtifactShortLabel": "Methods & evidence",
  "fullArtifactNote": "Informational faculty brief, not an institutional directive. Operational decisions remain subject to current primary sources and the governance of the clinical site.",
  "entriesIntro": "This record describes the public briefing and the reasoning and communication work it demonstrates. It does not establish institutional adoption or independent validation of each policy claim.",
  "entries": [
    "Policy translation: organizes roadmap themes and related initiatives by their stated status, separating active programs, pilots, proposals and longer-term ambitions.",
    "Distributed governance: distinguishes affiliate control of clinical tools, EHR access and workflows from medical-school responsibilities for education, supervision, research and faculty development.",
    "Payment interpretation: uses charts and worked examples to explain outcome-aligned payments, withholds and physician co-management in the ACCESS discussion.",
    "Evidence appraisal: places selected clinical AI studies alongside their settings and limitations, including the distinction between written cases, simulated encounters and real clinical care.",
    "Faculty action: combines practical questions, local approval pathways, teaching implications, an in-browser checklist, a glossary and links to supporting sources.",
    "Evidence boundary: the public artifact demonstrates policy interpretation and communication. It is not an official CMS publication, an institutional directive, affiliate approval, individualized billing advice or proof of policy adoption."
  ],
  "detailData": {
    "approach": [
      "Translate federal strategy into the questions clinical faculty and institutional leaders face at the bedside, in teaching and in payment arrangements.",
      "Keep policy status, technical autonomy, empirical evidence and local decision authority separate so one does not imply the others.",
      "Use a distributed academic-practice context to explain why governance can differ across LCMC Health, Ochsner and FMOLHS/OLOL sites."
    ],
    "execution": [
      "Developed a public faculty brief with a policy-status table, timeline, autonomy ladder, payment charts and worked examples.",
      "Summarized selected clinical AI evidence together with setting-specific limitations rather than treating benchmark performance as proof of patient benefit.",
      "Added role-specific action checklists, a glossary and source links to support further review by clinical, education, governance and finance stakeholders."
    ],
    "tools": [
      "HTML / CSS",
      "JavaScript",
      "Policy-status tables",
      "Accessible payment charts",
      "Evidence appraisal",
      "Browser-local checklist",
      "GitHub Pages"
    ],
    "value": "Makes an emerging federal AI strategy easier for faculty and academic-health-system leaders to interpret in the context of payment, evidence, clinical responsibility and separately governed practice sites. The public contribution is the briefing and its analytic framing; no measured adoption, institutional endorsement or clinical impact is claimed.",
    "competencies": [
      "Federal policy translation",
      "Clinical AI governance",
      "Healthcare payment reasoning",
      "Evidence appraisal",
      "Faculty development",
      "Executive communication"
    ],
    "related": [
      "ai-epic-chatgpt",
      "ai-01",
      "ai-04"
    ]
  }
};
  var i = window.ARTIFACTS.findIndex(function (a) { return a && a.id === item.id; });
  if (i >= 0) window.ARTIFACTS[i] = item; else window.ARTIFACTS.push(item);
  if (typeof window.applyEvidenceStatusMetadata === "function") window.applyEvidenceStatusMetadata([item]);
  item.evidenceStrength = "Live public informational brief; institutional adoption not claimed";
  window.ALL_SKILLS = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.skills || []; }))).sort();
  window.ALL_AUDIENCES = Array.from(new Set(window.ARTIFACTS.flatMap(function (a) { return a.audience || []; }))).sort();
})();
