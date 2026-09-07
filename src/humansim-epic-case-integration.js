/* global window */
// Connects the new public artifacts to existing executive cases without
// creating new cases or changing the case-study UI.
(function () {
  "use strict";
  if (!Array.isArray(window.FINAL_EXECUTIVE_CASES)) return;

  function addEvidence(caseNum, artifactId) {
    var c = window.FINAL_EXECUTIVE_CASES.find(function (item) { return item && item.num === caseNum; });
    if (!c) return;
    c.evidence = Array.isArray(c.evidence) ? c.evidence : [];
    if (c.evidence.indexOf(artifactId) < 0) c.evidence.push(artifactId);
  }

  addEvidence("09", "ai-epic-chatgpt");
  addEvidence("18", "ev-humansim");

  var aiCase = window.FINAL_EXECUTIVE_CASES.find(function (item) { return item && item.num === "09"; });
  if (aiCase && Array.isArray(aiCase.actions)) {
    var aiAction = "Translated emerging clinical AI/EHR developments into clinician-facing governance briefings that distinguish technical capability from local approval, validation, privacy controls, and human oversight.";
    if (aiCase.actions.indexOf(aiAction) < 0) aiCase.actions.push(aiAction);
  }

  var simCase = window.FINAL_EXECUTIVE_CASES.find(function (item) { return item && item.num === "18"; });
  if (simCase && Array.isArray(simCase.actions)) {
    var simAction = "Extended the simulation and evaluation trajectory into HumanSim, a public formative digital-human learning prototype connecting patient state, foundational sciences, interventions, compensation, and clinical response.";
    if (simCase.actions.indexOf(simAction) < 0) simCase.actions.push(simAction);
  }
})();
