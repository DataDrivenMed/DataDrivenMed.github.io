/* global window */
// Connects the new public artifacts to existing executive cases and the
// existing public-thought-leadership block without changing layout.
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

  var BaseCareerGovernancePage = window.CareerGovernancePage;
  if (typeof BaseCareerGovernancePage === "function" && window.React) {
    window.CareerGovernancePage = function HumanSimEpicCareerIntegration() {
      window.React.useEffect(function () {
        var cards = Array.prototype.slice.call(document.querySelectorAll(".consultation-card"));
        var target = cards.find(function (card) {
          var h3 = card.querySelector("h3");
          return h3 && h3.textContent.trim() === "Public digital and professional thought leadership";
        });
        if (!target) return;

        var row = target.querySelector(".consultation-chip-row");
        if (row) {
          ["HumanSim", "ChatGPT + Epic"].forEach(function (label) {
            var exists = Array.prototype.some.call(row.querySelectorAll("span"), function (span) {
              return span.textContent.trim() === label;
            });
            if (!exists) {
              var span = document.createElement("span");
              span.textContent = label;
              row.appendChild(span);
            }
          });
        }

        var signal = target.querySelector(".consultation-signal p");
        if (signal) {
          signal.textContent = "Converts complex institutional, clinical, policy, research, medical-education, simulation, and performance-science knowledge into public-facing tools, briefings, and learning systems.";
        }
      }, []);

      return window.React.createElement(BaseCareerGovernancePage);
    };
  }
})();
