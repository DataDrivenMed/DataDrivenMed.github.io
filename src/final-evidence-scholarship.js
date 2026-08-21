/* Individual scholarship and professional contribution records — preservation-first premium layer. */
(function () {
  if (!Array.isArray(window.ARTIFACTS)) return;
  function upsert(a){var i=window.ARTIFACTS.findIndex(function(x){return x&&x.id===a.id;});if(i>=0)window.ARTIFACTS[i]=Object.assign({},window.ARTIFACTS[i],a);else window.ARTIFACTS.push(a);}
  function S(id,title,role,summary,skills,audience){return {id:id,title:title,category:"recognition",role:role,summary:summary,skills:skills||[],audience:audience||[],strategic:summary,sourceFile:null,tags:skills||[],featured:false,confidential:false,evidenceStatus:"CV-supported scholarly/professional record",premiumEvidence:true,normalizedRecord:true,evidenceLevel:"distinct-output"};}

  var pubs = [
    ["ev-pub-adapt-2006","Adapting Evidence Based Behavioral Interventions for New Settings and Target Populations","Journal publication · AIDS Education and Prevention · 2006","Co-author on a CDC-related publication examining adaptation of evidence-based behavioral interventions for new settings and target populations.",["Peer-reviewed scholarship","HIV prevention","Intervention adaptation","CDC"]],
    ["ev-pub-adapt-multisite-2007","Results of CDC Funded Multi-site EBI Adaptation Project for Adult HIV+ Men of Color Who Have Sex with Men","Conference abstract publication · National HIV Prevention Conference · 2007","Contributing author on dissemination of findings from a CDC-funded multi-site evidence-based intervention adaptation project.",["HIV prevention","CDC","Community-based research","Scholarly dissemination"]],
    ["ev-pub-prostate-health-2008","Lifestyle Behaviors, Obesity, and Perceived Health Among Men With and Without a Diagnosis of Prostate Cancer","Journal publication · BMC Public Health · 2008","Co-author on a population-based study of lifestyle behavior, obesity and perceived health among men with and without prostate cancer.",["Public health","Population health","Cancer","Peer-reviewed scholarship"]],
    ["ev-pub-mobile-mock-or-2008","The Mobile Mock Operating Room: Bringing Team Training to the Point of Care","AHRQ Advances in Patient Safety · 2008","Co-author on an AHRQ publication describing point-of-care interdisciplinary operating-room simulation and team training.",["AHRQ","Simulation","Patient safety","Team training"]],
    ["ev-pub-debriefing-poc-2008","Examining the Effectiveness of Debriefing at the Point of Care in Simulation-Based Operating Room Team Training","AHRQ Advances in Patient Safety · 2008","Lead/co-author scholarship evaluating debriefing in point-of-care simulation-based operating-room team training.",["AHRQ","Simulation debriefing","Patient safety","Evaluation"]],
    ["ev-pub-jacs-teamwork-2008","High Fidelity, Simulation-Based Training at the Point-of-Care Improves Teamwork in the Operating Room","Journal of the American College of Surgeons · 2008","Co-author on simulation research examining the effect of high-fidelity point-of-care training on operating-room teamwork.",["Simulation","Operating room","Teamwork","Surgical education"]],
    ["ev-pub-surgery-team-training-2009","High-Fidelity, Simulation-Based, Interdisciplinary Operating Room Team Training at the Point of Care","Surgery · 2009","Co-author on a peer-reviewed study of interdisciplinary high-fidelity operating-room team training delivered at the point of care.",["Simulation","Interdisciplinary teams","Operating room","Peer-reviewed scholarship"]],
    ["ev-pub-attitudinal-2009","Attitudinal Changes Resulting from Repetitive Training of Operating Room Personnel Using High Fidelity Simulation at the Point-of-Care","The American Surgeon · 2009","Co-author on a study examining attitudinal effects of repetitive high-fidelity simulation training among operating-room personnel.",["Simulation","Team attitudes","Patient safety","Surgical education"]],
    ["ev-pub-hemonc-abstract-2012","Hematology/Oncology: Sufficient, Surplus, or Shortage of Specialists","Journal of Investigative Medicine abstract · 2012","Co-author on physician-specialty workforce analysis examining hematology/oncology specialist supply.",["Physician workforce","Hematology/oncology","Specialty supply","Workforce research"]],
    ["ev-pub-debriefing-tricontinental-2012","Identifying Best Practice Guidelines for Debriefing in Surgery: A Tri-Continental Study","The American Journal of Surgery · 2012","Co-author on an international study identifying best-practice guidance for surgical simulation debriefing.",["Simulation debriefing","International collaboration","Surgical education","Peer-reviewed scholarship"]],
    ["ev-pub-disaster-sim-2013","Conducting Hospital Disaster Drills Using Simulation Technology","Annals of Emergency Medicine abstract · 2013","Co-author on Emergency Medicine scholarship examining hospital disaster drills using simulation technology.",["Emergency Medicine","Disaster simulation","Preparedness","Scholarly dissemination"]],
    ["ev-pub-hemonc-supply-2014","The Supply of Hematology/Oncology Specialists","Journal of the Louisiana State Medical Society · 2014","Co-author on Louisiana hematology/oncology specialist workforce analysis.",["Physician workforce","Hematology/oncology","Louisiana","Specialty supply"]],
    ["ev-pub-match-play-2015","MATCH PLAY, SOAP Hope","Journal of the Louisiana State Medical Society · 2015","Co-author on analysis and discussion of residency Match and SOAP dynamics.",["GME","Residency Match","SOAP","Medical education"]],
    ["ev-pub-katrina-kinetics-2016","Katrina Kinetics: The Physician Supply","Journal of the Louisiana State Medical Society · 2016","Co-author on analysis of physician-supply dynamics following Hurricane Katrina.",["Physician workforce","Disaster recovery","Louisiana","Health services"]],
    ["ev-pub-pipeline-2016","Physician Pipeline Production: Peak or Plateau","Journal of the Louisiana State Medical Society · 2016","Co-author on analysis of physician pipeline production and workforce implications.",["Physician pipeline","Medical education","Workforce","Louisiana"]],
    ["ev-pub-world-med-schools-2017","World Medical Schools: The Sum Also Rises","JRSM Open · 2017","Co-author on international analysis of medical-school growth and medical-education capacity.",["Medical education","International","Workforce capacity","Peer-reviewed scholarship"]]
  ];
  pubs.forEach(function(r){upsert(S(r[0],r[1],r[2],r[3],r[4],["Academic and professional audiences"]));});

  upsert(S("ev-book-nutrition-swimmers-2004","Nutrition for Swimmers — A Comprehensive Nutritional Guide for Competitive Swimmers","Book · 2004","Authored a comprehensive nutrition guide for competitive swimmers published through the Integrated Council of Noble Swimmers.",["Swimming science","Sports nutrition","Book","Public scholarship"],["Competitive swimmers","Coaches"]));
  upsert(S("ev-bookchapter-internet-community-research-2008","The Internet as Platform to Do Community-Based Research: A Project Perspective","Book chapter acknowledgement · 2008","Acknowledged contributor to a chapter examining Internet-enabled community-based research and intervention adaptation.",["Community-based research","Digital research","HIV prevention","Book chapter"],["Researchers","Public health audiences"]));

  var posters = [
    ["ev-poster-wisewoman-2003","Illinois WISEWOMAN Program","Poster · 17th National Conference on Chronic Disease Prevention and Control · 2003"],
    ["ev-poster-obesity-il-2003","Determinants of Obesity in Illinois Adult Population","Poster · Illinois Public Health Association · 2003"],
    ["ev-poster-obesity-trends-2004","Trends in Prevalence of Obesity and Overweight Among Illinois Adults, 1995–2002","Poster · American Public Health Association · 2004"],
    ["ev-poster-cvd-gender-2007","Gender Differences in Cardiovascular Disease Risk Factors: Trend Analysis, 1996–2005","Poster · Illinois Public Health Association · 2007"],
    ["ev-poster-steps-2007","STEPS for Better Patient Care: System for Teamwork Effectiveness and Patient Safety","Poster · Gulf Coast Forum · 2007"],
    ["ev-poster-sim-teamwork-2007","Initial Evaluation of Point-of-Care High-Fidelity Simulation-Based Interdisciplinary Training on Teamwork in the Operating Room","Poster · AHRQ Annual Conference · 2007"],
    ["ev-poster-steps-eval-2007","Evaluation of the System for Teamwork Effectiveness and Patient Safety","Poster · AHRQ Annual Conference · 2007"],
    ["ev-poster-multidisciplinary-sim-2008","Conducting a Multidisciplinary Team Training Course to Improve OR Patient Safety at the Point of Healthcare","Poster · Society for Simulation in Healthcare · 2008"],
    ["ev-poster-or-practice-2008","The Influence of Point-of-Care Teamwork Training on Actual Operating Room Practice","Poster · AHRQ Annual Conference · 2008"],
    ["ev-poster-rural-or-2009","Reworking Rural Operating Room Education: Portability of Team Training Using the Mobile Mock OR","Poster · American Society of Anesthesiologists · 2009"],
    ["ev-poster-disaster-drill-2013","Conducting Hospital Disaster Drills Using Simulation Technology","Poster · CORD Academic Assembly · 2013"]
  ];
  posters.forEach(function(r){upsert(S(r[0],r[1],r[2],"Presented research findings through peer/professional poster dissemination.",["Poster presentation","Scholarly dissemination"],["Academic and professional audiences"]));});

  var oral = [
    ["ev-oral-wisewoman-perspective-2003","Illinois Breast & Cervical Cancer Program and Illinois WISEWOMAN Programs — A Perspective","Oral presentation · Sangamon County Department of Public Health · 2003"],
    ["ev-oral-pharma-assistance-2003","Illinois WISEWOMAN Pharmaceutical Assistance Project — An Overview","Oral presentation · Illinois Department of Aging · 2003"],
    ["ev-oral-wisewoman-implementation-2003","Implementation of Illinois WISEWOMAN Program","Oral presentation · DuPage County Health Department · 2003"],
    ["ev-oral-wisewoman-cvd-2003","Illinois WISEWOMAN Program — A Cardiovascular Intervention Program","Oral presentation · Illinois State Diabetes Prevention and Control Program · 2003"],
    ["ev-oral-obesity-county-2004","County Trends in Prevalence of Obese and Overweight Illinois Adults, 1995–2002","Oral presentation · Illinois Public Health Association · 2004"],
    ["ev-oral-pol-internet-2007","Using the Internet as an Innovative Technology for Formative Research to Adapt Effective Behavioral Interventions","Oral presentation · National HIV Prevention Leadership Summit · 2007"],
    ["ev-oral-sim-feasibility-acs-2007","Feasibility of Conducting High-Fidelity Simulation-Based Interdisciplinary Operating Room Team Training at the Point of Care","Oral presentation · American College of Surgeons · 2007"],
    ["ev-oral-mixed-reality-2008","Initial Implementation of Mixed Reality Simulation Targeting Teamwork and Patient Safety","Oral presentation · Medicine Meets Virtual Reality · 2008"],
    ["ev-oral-sim-feasibility-laacs-2008","Feasibility of Conducting High-Fidelity Simulation-Based Interdisciplinary Operating Room Team Training at the Point of Care","Oral presentation · Louisiana Chapter, American College of Surgeons · 2008"],
    ["ev-oral-sim-teamwork-acs-2008","High Fidelity Simulation-Based Training at the Point of Care Improves Teamwork in the Operating Room","Oral presentation · American College of Surgeons Clinical Congress · 2008"],
    ["ev-oral-teamwork-aamc-2008","Effectiveness of Operating Teamwork Training Implemented at the Point of Care","Oral presentation · AAMC Annual Meeting · 2008"],
    ["ev-oral-core-lab-aamc-2008","Applying a Core Laboratory Concept to Facilitate Collaborative Educational Excellence and Scholarship","Oral presentation · AAMC Annual Meeting · 2008"],
    ["ev-oral-sim-lessons-2009","Lessons Learned: Strategies for Effective Implementation of High-Fidelity Human Patient Simulation-Based OR Teamwork Training","Oral presentation · International Meeting on Simulation in Healthcare · 2009"],
    ["ev-oral-attitudinal-sim-2009","Attitudinal Changes Resulting From Repetitive Training of Operating Room Personnel Using High-Fidelity Simulation","Oral presentation · Southeastern Surgical Congress · 2009"],
    ["ev-oral-patient-safety-culture-2009","Initial Impact of STEPS on the Culture of Patient Safety Within an Operating Room","Oral presentation · International Forum on Quality and Safety in Health Care · 2009"],
    ["ev-oral-sim-implementation-sgea-2009","Strategies for Effective Implementation of Simulation-Based Teamwork Training at the Point of Care","Oral presentation · AAMC Southern Group on Educational Affairs · 2009"],
    ["ev-oral-chc-rotations-2009","Creating Value-Added Learner Rotations in Community Health Centers and Settings","Oral presentation · Louisiana Primary Care Association · 2009"],
    ["ev-oral-sim-residents-2009","Impact of Point-of-Care High-Fidelity Simulation-Based Interdisciplinary Operating Room Team Training on General Surgical Residents","Oral presentation · Louisiana Chapter, American College of Surgeons · 2009"],
    ["ev-oral-academic-community-2010","Using a Standardized Model for Creating Sustainable and Value-Added Academic-Community Partnerships and Learning Rotations","Oral presentation · AAMC Southern Group on Educational Affairs · 2010"],
    ["ev-oral-eight-step-2010","Creating New Academic Community Partnerships and Sustainable Learning Experiences in Community Health Settings: An Eight-Step Model","Oral presentation · IAMSE · 2010"],
    ["ev-oral-debriefing-serf-2010","Assessment of Debriefings in High-Fidelity Simulation","Oral presentation · Surgical Education Research Fellowship Symposium · 2010"],
    ["ev-oral-osad-2011","Objective Structured Assessment of Debriefing in Surgery: Identifying and Quantifying Best Practice","Paper presentation · ASE/APDS/ARCS · 2011"],
    ["ev-oral-sim-assessment-2011","Assessment Opportunities and Challenges in Simulation","Oral presentation · American Educational Research Association · 2011"],
    ["ev-oral-surgical-sim-2011","Surgical Simulations: Technical Knowledge and Skills, Teamwork, and Interprofessional Learning","Oral presentation · American Educational Research Association · 2011"],
    ["ev-oral-hemonc-2012","Hematology/Oncology: Sufficient, Surplus, or Shortage of Specialists","Oral presentation · American Federation for Medical Research · 2012"],
    ["ev-oral-equip-2013","The Enhancing Quality Improvement for Patients (EQuIP) Program at LSU Health Sciences Center New Orleans","Concurrent session · AAMC Integrating Quality Meeting · 2013"]
  ];
  oral.forEach(function(r){upsert(S(r[0],r[1],r[2],"Presented applied research, evaluation, workforce, simulation, quality-improvement or public-health work to professional audiences.",["Oral presentation","Scholarly dissemination"],["Academic and professional audiences"]));});

  for(var y=2010;y<=2014;y++){
    upsert(S("ev-mec-report-"+y,"Louisiana Medical Education Commission — "+(y-1997)+"th Annual Report","Governmental technical report · "+y,"Contributing author/member on the Louisiana Medical Education Commission annual public report covering graduate medical education and medical-education trends.",["Government report","GME","Louisiana policy","Medical Education Commission"],["Louisiana policymakers","Medical education stakeholders"]));
  }

  var review = [
    ["ev-review-jgim","Journal of General Internal Medicine — Manuscript Reviewer","Peer-review service · 2020–present"],
    ["ev-review-annals-family-medicine","Annals of Family Medicine — Manuscript Reviewer","Peer-review service · 2019–present"],
    ["ev-review-bmj","British Medical Journals — Manuscript Reviewer","Peer-review service · 2010–present"],
    ["ev-review-ahrq-patient-safety","AHRQ Advances in Patient Safety — Reviewer","Peer-review service · 2008"],
    ["ev-review-sgea-2008","AAMC Southern Group on Educational Affairs — Abstract Reviewer","Abstract-review service · 2008"],
    ["ev-review-sgea-2009","AAMC Southern Group on Educational Affairs — Abstract Reviewer","Abstract-review service · 2009"],
    ["ev-review-nci-cancer-education","NCI Cancer Education Grant Program — Evaluator/Analyst","Grant-program evaluation service · 2007–2008"]
  ];
  review.forEach(function(r){upsert(S(r[0],r[1],r[2],"Provided peer, abstract, publication, or grant-program review/evaluation service.",["Peer review","Professional service","Academic evaluation"],["Academic and research communities"]));});

  window.PREMIUM_SCHOLARSHIP_LAYER_LOADED = true;
  window.PREMIUM_EVIDENCE_COUNT = window.ARTIFACTS.length;
})();