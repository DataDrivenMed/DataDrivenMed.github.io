/* Final claim-level accuracy cleanup for the comprehensive portfolio candidate. */
(function(){
  if(!Array.isArray(window.ARTIFACTS)) return;

  function patch(id, updates){
    var a=window.ARTIFACTS.find(function(x){return x&&x.id===id;});
    if(a) Object.assign(a, updates);
  }

  patch("ai-12", {
    title: "FDA RFI Response Framework on AI-Enabled Real-Time Clinical Trials",
    role: "Institutional response development and research strategy support",
    summary: "Initiated and drafted an institutional response framework for review by School of Medicine and Cancer Center leadership addressing FDA questions on AI-enabled real-time clinical trials, Gulf South research infrastructure, real-world data, regulatory expectations, data quality, reproducibility, clinical AI governance, and NCI-related research strategy.",
    strategic: "Demonstrates the ability to translate an emerging federal regulatory question into a leadership-ready institutional strategy framework without implying final institutional submission or adoption."
  });

  patch("ai-13", {
    title: "LSU-LCMC Cancer Center AI Governance & NCI Readiness Support",
    role: "Cancer Center AI governance and strategy contributor",
    summary: "Supported Cancer Center leadership in reviewing and strategically refining proposed AI initiatives in the context of NCI Comprehensive Cancer Center readiness, contributing recommendations on governance structure, data provenance, validation, human oversight, research reproducibility, community engagement, and education/training. Contributed to review of five master program areas and 21 proposed pilots without claiming ownership of those programs or pilots.",
    strategic: "Demonstrates advisory contribution to Cancer Center AI governance, responsible implementation, and NCI-readiness strategy without overstating program ownership."
  });

  patch("ev-watermark", {
    strategic: "Shows disciplined enterprise technology governance across functional requirements, security and compliance review, vendor risk, contract review, legal review, and institutional decision support."
  });

  patch("an-01", {
    strategic: "Demonstrates breadth across predictive modeling, epidemiology, workforce analytics, educational outcomes, and executive decision support within an academic medical center."
  });

  patch("ai-15", {
    summary: "AI literacy platform purpose-built for competitive swimming coaches, performance staff, and swim families, translating abstract AI concepts into sports-performance decision contexts through practical modules on race analysis, tool vetting, athlete-data governance, workflow use, and domain-specific AI critique."
  });

  if(Array.isArray(window.FINAL_EXECUTIVE_CASES)){
    var c16=window.FINAL_EXECUTIVE_CASES.find(function(c){return c&&c.num==="16";});
    if(c16){
      c16.outcome="Demonstrated disciplined institutional due diligence across digital systems and physical infrastructure, from requirements and risk review through operational planning and decision support.";
    }
  }

  window.FINAL_ACCURACY_CLEANUP_LOADED=true;
})();