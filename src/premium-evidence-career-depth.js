/* Credentials, awards, funded-project, and service depth — preservation-first premium layer. */
(function(){
  if(!Array.isArray(window.ARTIFACTS))return;
  function upsert(a){var i=window.ARTIFACTS.findIndex(function(x){return x&&x.id===a.id;});if(i>=0)window.ARTIFACTS[i]=Object.assign({},window.ARTIFACTS[i],a);else window.ARTIFACTS.push(a);}
  function R(id,title,category,role,summary,skills,audience){return {id:id,title:title,category:category,role:role,summary:summary,skills:skills||[],audience:audience||[],strategic:summary,sourceFile:null,tags:skills||[],featured:false,confidential:false,evidenceStatus:"CV-supported career/professional record",premiumEvidence:true,normalizedRecord:true,evidenceLevel:"distinct-record"};}

  // Education and certifications — retained as searchable evidence in addition to Career & Governance.
  [
    R("ev-credential-mbbs","MBBS — Bangalore Medical College and Research Institute","recognition","Medical degree","Completed the MBBS medical degree at Bangalore Medical College and Research Institute, Bangalore, India.",["Medical education","MBBS"],["Search committees","Academic audiences"]),
    R("ev-credential-mph","Master of Public Health — University of Illinois Springfield","recognition","Graduate degree","Completed the Master of Public Health degree at the University of Illinois Springfield in 2006.",["Public health","MPH"],["Search committees","Academic audiences"]),
    R("ev-credential-ecfmg","ECFMG Certification","recognition","Professional certification · 2008–present","Maintains ECFMG certification, reflecting completion of the credentialing pathway for international medical graduates.",["ECFMG","Medical credentialing"],["Academic and healthcare audiences"]),
    R("ev-credential-onc-hitt","Health Informatics Curriculum Training for Transformation","recognition","ONC health-informatics training · 2017","Completed Health Informatics Curriculum Training for Transformation through the Office of the National Coordinator.",["Health informatics","ONC","Digital health"],["Academic and healthcare audiences"])
  ].forEach(upsert);

  // Selected early professional appointments so the public evidence system can stand without the CV.
  [
    R("ev-career-clinical-intern","Medicine Internship — Victoria Hospital / Bowring & Lady Curzon Hospital","recognition","Medicine Intern · 2000–2001","Held responsibility for ICU, casualty and emergency-unit work during the internship year in Bangalore, India.",["Clinical medicine","Emergency care","ICU"],["Professional audiences"]),
    R("ev-career-physician-shamsingh","Physician — Sham Singh Medical Center","recognition","Physician · 2001–2002","Managed ICU, casualty and emergency-unit responsibilities at Sham Singh Medical Center in Bangalore, India.",["Clinical medicine","Emergency care","ICU"],["Professional audiences"]),
    R("ev-career-lsu-omerad","LSU OMERAD Research Associate","admissions-ume","Research Associate · 2007–2010","Conducted medical-education research, faculty development, learner-assessment consultation and educational scholarship within LSU Health New Orleans OMERAD.",["Medical education research","Faculty development","Assessment"],["Faculty","Medical education leadership"]),
    R("ev-career-lsu-ome","LSU Office of Medical Education Research Associate","admissions-ume","Research Associate · 2010–2013","Supported accreditation, GME program review, workforce studies, longitudinal educational data, predictive modeling, simulation research and executive reporting.",["Medical education","Accreditation","GME","Predictive analytics"],["Medical education leadership"]),
    R("ev-career-lsu-assistant-professor-ome","Assistant Professor–Research, Office of Medical Education","recognition","Assistant Professor–Research · 2013–2017","Advanced institutional analytics, GME accreditation support, workforce research, simulation consultation, research design and grantsmanship within the School of Medicine.",["Academic medicine","Institutional analytics","Research"],["Academic audiences"]),
    R("ev-career-current-role","Director of Accreditation and Strategic Planning Compliance / Assistant Professor–Research","executive-strategy","Dean's Office matrix leadership · 2017–present","Leads applied institutional accreditation analytics, CQI, strategic outcomes analysis and executive decision support across accreditation, admissions, UME, GME, Student Affairs, Faculty Affairs, research, community engagement, CME, simulation, workforce, policy, GME finance and emerging AI governance.",["Accreditation","Strategic planning","CQI","Institutional effectiveness","Executive decision support"],["Dean","Senior leadership","Associate Deans"])
  ].forEach(upsert);

  // Funded and contract-supported work; individual records complement the grants umbrella.
  upsert(R("ev-grant-ahrq-steps","AHRQ STEPS — System for Teamwork Effectiveness and Patient Safety","simulation-quality","Data Analyst / Project Manager · AHRQ-funded project","Supported implementation, evaluation and refinement of the AHRQ-funded STEPS interdisciplinary simulation and change-process strategy using a mobile mock operating room, point-of-care training, reflective debriefing and patient-safety culture evaluation.",["AHRQ","Project management","Simulation","Patient safety","Program evaluation"],["AHRQ","Surgical teams","Institutional leadership"]));
  upsert(R("ev-grant-lpca-chc-model","Louisiana CHC Academic Residency/Rotation Model — Louisiana Primary Care Association","policy-rural","Data Analyst / Project Manager · funded project","Supported development of an evidence-based standardized model for academic-community health-center partnerships and residency/clinical rotations in Louisiana FQHCs, including interprofessional learning and community-based education.",["Louisiana Primary Care Association","FQHC","Project management","Curriculum development","Community partnerships"],["LPCA","Academic partners","Community health centers"]));
  upsert(R("ev-grant-wisewoman-role","Illinois WISEWOMAN — CDC Funded Role","analytics","Data Analyst · CDC-funded program","Served as Data Analyst/program researcher for the Illinois WISEWOMAN cardiovascular prevention program, linking population-health data, intervention delivery and program development.",["CDC","Grant-supported work","Population health","Program evaluation"],["Illinois Department of Public Health","CDC stakeholders"]));
  upsert(R("ev-grant-adapt-pol-role","ADAPT-POL — CDC Funded Community-Based HIV Prevention","analytics","Data Analyst · CDC-funded project","Served as Data Analyst on the CDC-funded ADAPT-POL project adapting evidence-based HIV prevention interventions to new populations and Internet-based settings.",["CDC","Grant-supported work","HIV prevention","Intervention adaptation"],["CDC stakeholders","Community partners"]));

  // Upgrade existing federally supported research/training records with CV-supported funding scale where documented.
  var eps=window.ARTIFACTS.find(function(a){return a&&a.id==="ev-nsf-epscor";});
  if(eps){eps.summary=(eps.summary||"")+" The CV documents a $7.5 million NSF EPSCoR CREST award associated with this institutional analytics support.";eps.fundingScale="$7.5M award";}
  var cals=window.ARTIFACTS.find(function(a){return a&&a.id==="ev-cals-10m";});
  if(cals){cals.fundingScale="$10M requested federal community-project funding";}

  // School/HSC governance and professional membership records not to be lost inside chronology.
  upsert(R("ev-equip-steering-service","EQuIP Steering Committee Service","simulation-quality","Steering Committee Member · 2012–2020","Served on the EQuIP Steering Committee supporting the quality-improvement program's governance, measurement, resident/fellow engagement and continuous improvement.",["EQuIP","Governance","GME","Quality improvement"],["GME leadership","Residents","Fellows"]));
  upsert(R("ev-ipha-membership","Illinois Public Health Association","recognition","Professional membership · 2003–2005","Professional society membership during the Illinois public-health phase of the career.",["Public health","Professional service"],["Public health community"]));
  upsert(R("ev-apha-membership","American Public Health Association","recognition","Professional membership · 2004–2005","Professional society membership supporting public-health scholarship and professional engagement.",["Public health","Professional service"],["Public health community"]));

  // Awards and honors as individual searchable records.
  [
    ["ev-award-paper-distinction-2011","Paper of Distinction — Objective Structured Assessment of Debriefing in Surgery","ASE/APDS/ARCS combined meeting · 2011","Paper of Distinction recognition for work on Objective Structured Assessment of Debriefing in Surgery."],
    ["ev-award-mesa-2010","Outstanding Presentation — Medical Education Scholarship Award","AAMC MESA · 2010","Outstanding Presentation recognition for the standardized academic-community partnership and learning-rotation model."],
    ["ev-award-apha-finalist-2004","Finalist — Best Student Abstract","American Public Health Association · 2004","Named a finalist for Best Student Abstract for analysis of obesity and overweight trends among Illinois adults."],
    ["ev-award-ipha-student-2004","Student Worker of the Year Award Nomination","Illinois Public Health Association · 2004","Nominated for the Illinois Public Health Association Student Worker of the Year Award."],
    ["ev-award-mysore-guest-1999","Guest of Honor","University of Mysore · 1999","Recognized as Guest of Honor by the University of Mysore."],
    ["ev-award-swimming-honors","National and International Swimming / Water Polo Honors","1988–1997","Received honors from state and national swimming organizations for excellence in swimming and water polo at national and international levels."],
    ["ev-award-karnataka-captain","Captain — Karnataka State Swim Team","1987–1993","Served as captain of the Karnataka State Swim Team for seven years."],
    ["ev-award-best-sportsman","Best Sportsman Recognition","1987–1994","Received repeated Best Sportsman of the Year recognition during school and university years in Bangalore." ]
  ].forEach(function(r){upsert(R(r[0],r[1],"recognition",r[2],r[3],["Award","Recognition"],["Professional audiences"]));});

  window.PREMIUM_CAREER_DEPTH_LAYER_LOADED=true;
  window.PREMIUM_EVIDENCE_COUNT=window.ARTIFACTS.length;
})();