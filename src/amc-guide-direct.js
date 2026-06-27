(function(){
  var a={
    id:"ai-amc-guide",
    title:"AI-Aware Hiring Guide for Academic Medical Centers",
    category:"ai-governance",
    role:"Featured interactive workforce governance artifact · Academic medical center staff guide · 2026",
    summary:"Interactive guide for academic medical center staff selection in an AI-enabled workplace. Includes structured process design, scenario review, scoring support, notes, checklist, and onboarding guidance.",
    skills:["AI governance","Workforce strategy","Structured interviews","Responsible AI use","Staff retention","Interactive guide"],
    audience:["Dean","Senior leadership","HR leaders","Department administrators","Search committees"],
    strategic:"Translates responsible AI governance into a practical workforce process artifact for academic medical centers.",
    sourceFile:"AI-Aware Hiring Guide for Academic Medical Centers",
    tags:["AI hiring","Academic medical centers","Staff recruitment","Structured interview","AI governance","Interactive guide"],
    featured:true,
    confidential:false,
    cleanFile:null,
    fullArtifactUrl:null,
    liveUrl:"https://datadrivenmed.github.io/AI-Aware-Hiring-Guide/",
    liveLabel:"Launch interactive guide"
  };
  window.ARTIFACTS=Array.isArray(window.ARTIFACTS)?window.ARTIFACTS:[];
  var i=window.ARTIFACTS.findIndex(function(x){return x&&x.id===a.id;});
  if(i>=0){window.ARTIFACTS[i]=a;}else{window.ARTIFACTS.push(a);}
  window.FLAGSHIP_IDS=Array.isArray(window.FLAGSHIP_IDS)?window.FLAGSHIP_IDS:[];
  if(window.FLAGSHIP_IDS.indexOf(a.id)<0)window.FLAGSHIP_IDS.push(a.id);
})();
