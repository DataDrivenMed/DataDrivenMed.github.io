/* global window */
// Final user-directed library curation: merge overlapping records, place work in
// the most defensible capability, and replace granular scholarship/service cards
// with grouped artifacts whose full entries remain visible in the detail view.
(function () {
  "use strict";

  if (!Array.isArray(window.ARTIFACTS)) return;

  var artifacts = window.ARTIFACTS;

  function unique(values) {
    return Array.from(new Set((values || []).filter(Boolean)));
  }

  function byId(id) {
    return artifacts.find(function (artifact) { return artifact && artifact.id === id; });
  }

  function mergeRecords(canonicalId, duplicateIds, overrides) {
    var canonical = byId(canonicalId);
    if (!canonical) return;
    var records = [canonicalId].concat(duplicateIds).map(byId).filter(Boolean);
    var merged = Object.assign({}, canonical, overrides || {});
    merged.skills = unique(records.flatMap(function (record) { return record.skills || []; }).concat((overrides && overrides.skills) || []));
    merged.audience = unique(records.flatMap(function (record) { return record.audience || []; }).concat((overrides && overrides.audience) || []));
    merged.tags = unique(records.flatMap(function (record) { return record.tags || []; }).concat((overrides && overrides.tags) || []));
    merged.featured = records.some(function (record) { return Boolean(record.featured); });
    merged.confidential = records.some(function (record) { return Boolean(record.confidential); });
    merged.premiumEvidence = true;
    merged.normalizedRecord = true;
    merged.mergedFromIds = unique((canonical.mergedFromIds || []).concat(duplicateIds));
    var index = artifacts.findIndex(function (artifact) { return artifact && artifact.id === canonicalId; });
    artifacts[index] = merged;
    artifacts = artifacts.filter(function (artifact) { return artifact && duplicateIds.indexOf(artifact.id) === -1; });
    window.ARTIFACTS = artifacts;
  }

  function moveRecord(id, category, overrides) {
    var record = byId(id);
    if (!record) return;
    Object.assign(record, overrides || {}, {
      category: category,
      normalizedRecord: true,
      premiumEvidence: true
    });
  }

  mergeRecords("ai-01", ["ai-02"], {
    title: "School of Medicine AI Policy and Governance Framework",
    role: "Pre-final policy framework with leadership-facing explanation",
    summary: "Developed a pre-final School of Medicine AI policy and governance framework and a companion explanation clarifying its purpose, institutional fit, decision points, and areas requiring leadership review before formal adoption.",
    strategic: "Combines the policy architecture and its executive explanation into one record, showing both governance design and the ability to translate that design for institutional review.",
    entries: [
      "Pre-final School of Medicine AI policy and governance framework covering responsible use, medical education, clinical learning environments, data protection, tool evaluation, and faculty and staff guidance.",
      "Companion explanation describing why School-level educational governance was needed alongside institutional IT and compliance rules, and which issues still required leadership review."
    ],
    entriesIntro: "This artifact combines the draft framework and its companion explanation because they are two parts of the same governance work product.",
    skills: ["AI policy", "Governance design", "Executive communication", "Institutional review"],
    tags: ["AI policy", "Governance framework", "Leadership explanation"]
  });

  mergeRecords("execstrat-01", ["ev-strategy-annual-monitoring"], {
    title: "School of Medicine Strategic Planning, Implementation and Annual Monitoring: 2025-2030",
    role: "Strategic planning process owner and implementation architect",
    summary: "Owned the School of Medicine 2025-2030 strategic-planning lifecycle from environmental analysis, stakeholder engagement, workgroup coordination, priority setting, and KPI design through implementation monitoring, annual updates, leadership review, and CQI linkage.",
    strategic: "Presents planning and implementation as one operating cycle rather than two separate artifacts, demonstrating responsibility for both strategy formation and follow-through.",
    entries: [
      "Strategic-planning design, consultant coordination, environmental and institutional analysis, stakeholder engagement, workgroup facilitation, priority development, and executive presentation.",
      "KPI architecture, implementation monitoring, annual update processes, leadership review, CQI linkage, and response to emerging institutional risks and priorities."
    ],
    entriesIntro: "The planning process and annual monitoring cycle are consolidated because they represent one continuous strategy-to-execution responsibility.",
    skills: ["Strategic planning", "Implementation monitoring", "KPI architecture", "CQI", "Executive reporting"],
    tags: ["2025-2030 strategic plan", "Implementation", "Annual monitoring"]
  });

  mergeRecords("res-05", ["res-06"], {
    title: "Grants, Contracts and Funded Research Portfolio",
    role: "Consolidated funding and research-support record",
    summary: "Consolidated the structured grants and contracts portfolio with the original detailed source covering funded roles and projects including WISEWOMAN, ADAPT-POL, STEPS, and related research and program work.",
    strategic: "Keeps the summary and its detailed source together so reviewers can see the funding record without encountering two versions of the same portfolio.",
    entries: [
      "Structured portfolio of grants, contracts, research roles, and funding history.",
      "Detailed source record covering WISEWOMAN, ADAPT-POL, STEPS, and related funded projects and supporting roles."
    ],
    entriesIntro: "This record combines the structured summary and original detailed source for the same grants and contracts portfolio.",
    skills: ["Grant support", "Contracts", "Funded research", "Portfolio documentation"],
    tags: ["Grants", "Contracts", "Funded work"]
  });

  mergeRecords("res-07", ["ev-india-moe-host", "ev-study-in-india"], {
    title: "International Academic and Research Collaborations",
    role: "International collaboration and opportunity-development lead",
    summary: "Led and supported India-facing academic and research collaboration development involving LSU Health New Orleans, IIT Madras, Indian Ministry of Education representatives, and the Study in India ecosystem, with priority areas spanning genomics, AI and machine learning, digital health, faculty exchange, and possible maternal and child health work.",
    strategic: "Combines the partnership, government engagement, and opportunity-development records into one coherent international-collaboration artifact while avoiding any claim that LSU Health was a formal Study in India participant.",
    entries: [
      "LSU Health New Orleans and IIT Madras collaboration development, including MoU work and priority areas in comparative and population genomics, AI and machine learning analytics, digital health, faculty seminars and workshops, and possible maternal and child health expansion.",
      "Engagement with Indian Ministry of Education representatives to support institutional introductions and identify academic and research collaboration pathways.",
      "Study in India ecosystem review and opportunity development; no claim is made that LSU Health was a formal participating institution."
    ],
    entriesIntro: "These entries are grouped because they are connected parts of the same India-facing collaboration pipeline.",
    skills: ["International partnerships", "Academic collaboration", "Research collaboration", "Opportunity development", "India"],
    tags: ["IIT Madras", "India Ministry of Education", "Study in India", "International collaboration"]
  });

  moveRecord("ev-texla", "policy-rural", {
    title: "TexLa Telehealth Workforce and Rural Access Grant Analysis",
    role: "Telehealth, rural access, and workforce grant analytics",
    summary: "Provided workforce data gathering and analysis for a TexLa Telehealth Resource Center grant application focused on telehealth needs in underserved Texas and Louisiana communities.",
    strategic: "Fits policy and workforce evidence because the work centered on underserved access, cross-state workforce needs, and telehealth capacity rather than research production.",
    evidenceType: "funded",
    skills: ["Telehealth policy", "Rural access", "Workforce analysis", "Grant support"],
    tags: ["Telehealth", "Rural workforce", "Texas", "Louisiana", "Underserved communities"]
  });

  moveRecord("ev-board-regents", "analytics", {
    title: "Board of Regents Scholarship and Institutional Advancement Data Support",
    role: "Institutional and alumni data support",
    summary: "Provided institutional and alumni data support for Board of Regents Support Fund scholarship applications in collaboration with the LSU Foundation.",
    strategic: "Best placed within analytics and decision intelligence because the contribution was institutional data support for advancement and funding applications, not research strategy.",
    evidenceType: "projects",
    skills: ["Institutional analytics", "Alumni data", "Advancement support", "Application support"],
    tags: ["Board of Regents", "LSU Foundation", "Institutional advancement", "Scholarship support"]
  });

  mergeRecords("adm-02", ["ev-mcat-transition"], {
    title: "Admissions Data Strategy, Accreditation Compliance and MCAT Predictive Analysis",
    role: "Admissions analytics and accreditation decision support",
    summary: "Led admissions data strategy spanning predictive analysis, dashboards, LCME alignment, and evaluation of the transition between older and newer MCAT formats and their relationship to subsequent academic outcomes.",
    strategic: "Combines a broad admissions analytics responsibility with a specific MCAT predictor study that directly supported admissions interpretation and accreditation-ready decision making.",
    entries: [
      "Office of Admissions data strategy, predictive analytics, dashboards, and LCME-aligned reporting.",
      "MCAT transition analysis relating older and newer score formats and evaluating their predictive value for later academic outcomes."
    ],
    entriesIntro: "The MCAT analysis is retained inside the broader admissions data-strategy artifact because it was a component of that work.",
    skills: ["Admissions analytics", "MCAT", "Predictive validity", "LCME compliance", "Dashboards"],
    tags: ["Admissions", "MCAT transition", "Predictive analysis", "LCME"]
  });

  mergeRecords("ev-career-lsu-omerad", ["adm-09", "ev-omerad-education-research"], {
    title: "OMERAD Medical Education Research, Faculty Development and Data Strategy",
    role: "Research Associate, LSU OMERAD, 2007-2010",
    summary: "Conducted medical education research, predictive modeling, learner-assessment consultation, dashboard and workforce analysis, accreditation support, educational scholarship, and faculty-development work within LSU Health New Orleans OMERAD.",
    strategic: "Combines three overlapping descriptions of the same OMERAD role into one career-based artifact that shows the full scope of research, evaluation, data, assessment, and faculty-development responsibilities.",
    entries: [
      "Medical education research and educational scholarship focused on teaching, learning, assessment, leadership, professional learning, and reflective practice.",
      "Predictive modeling, dashboards, workforce analysis, program-accreditation support, and medical education data strategy.",
      "Faculty development and learner-assessment consultation within the Office of Medical Education Research and Development."
    ],
    entriesIntro: "These records described the same OMERAD position from different angles and are therefore presented as one role-based artifact.",
    skills: ["Medical education research", "Faculty development", "Learner assessment", "Predictive modeling", "Accreditation support"],
    tags: ["OMERAD", "Research Associate", "Medical education", "Faculty development"]
  });

  moveRecord("ev-medstudent-research-eval", "research-strategy", {
    title: "Medical Student Research Program Evaluation and Participation Analytics",
    role: "Research-program evaluation and leadership analytics",
    summary: "Evaluated medical student research activity across summer research opportunities, electives, Honors Program participation, and year-long research experiences, producing leadership-facing analysis of participation and program outcomes.",
    strategic: "Fits research strategy because it evaluates the medical student research pipeline and research-program outcomes rather than general student affairs operations.",
    evidenceType: "projects",
    skills: ["Medical student research", "Research pipeline", "Program evaluation", "Participation analytics", "Leadership reporting"],
    tags: ["Student research", "Summer research", "Honors Program", "Research evaluation"]
  });

  mergeRecords("fac-02", ["ev-faculty-workforce"], {
    title: "Faculty and Staff Workforce Analytics and Institutional Affairs Data Strategy",
    role: "Faculty, staff, and institutional workforce analytics",
    summary: "Conducted faculty and staff workforce analysis, benchmarking, governance support, and equity and climate analysis for School, LSUHSC, and LSU System decision making.",
    strategic: "Combines faculty-affairs data strategy and enterprise workforce analysis into one record because both relied on the same institutional workforce evidence and leadership use case.",
    entries: [
      "Faculty analytics, benchmarking, governance protocols, and equity and climate survey analysis.",
      "Faculty and staff workforce composition, trend, and planning analysis supporting LSUHSC and LSU System leadership."
    ],
    entriesIntro: "The School-level faculty data work and enterprise workforce analysis are grouped as one institutional workforce-intelligence artifact.",
    skills: ["Faculty analytics", "Staff workforce", "Benchmarking", "Climate analysis", "Institutional planning"],
    tags: ["Faculty workforce", "Staff workforce", "Institutional affairs", "LSU System"]
  });

  var recognitionCapability = (window.CAPABILITIES || []).find(function (capability) { return capability.id === "recognition"; });
  if (recognitionCapability) {
    recognitionCapability.title = "Awards, Scholarship and Service";
    recognitionCapability.short = "Grouped records for awards, publications, curriculum and model development, books, presentations, technical reports, peer review, committee work, and professional service.";
    recognitionCapability.skills = ["Scholarly communication", "Peer review", "Committee service", "Professional engagement"];
  }

  var removedRecognitionIds = artifacts.filter(function (artifact) {
    return artifact && artifact.category === "recognition";
  }).map(function (artifact) { return artifact.id; });
  artifacts = artifacts.filter(function (artifact) {
    return artifact && artifact.category !== "recognition";
  });

  function groupedRecord(id, title, role, summary, strategic, skills, audience, evidenceType, entries, entriesIntro) {
    return {
      id: id,
      title: title,
      category: "recognition",
      role: role,
      summary: summary,
      strategic: strategic,
      skills: skills,
      audience: audience,
      tags: unique(skills.concat(["Grouped portfolio record"])),
      featured: false,
      confidential: false,
      sourceFile: null,
      cleanFile: null,
      fullArtifactUrl: null,
      evidenceStatus: "User-supplied grouped portfolio record",
      evidenceType: evidenceType,
      evidenceLevel: "grouped-record",
      premiumEvidence: true,
      normalizedRecord: true,
      entries: entries,
      entriesIntro: entriesIntro
    };
  }

  var groupedRecognitionRecords = [
    groupedRecord(
      "ev-group-awards-honors",
      "Awards and Honors",
      "Grouped awards and recognition record",
      "Eight documented academic, public-health, and athletic honors spanning 1987-2011.",
      "Keeps awards visible as a single record while preserving the title, year, organization, and basis for each recognition.",
      ["Awards", "Academic recognition", "Public health", "Athletic leadership"],
      ["Search committees", "Academic leaders", "Professional audiences"],
      "credentials",
      [
        "2011: Paper of Distinction at the combined meeting of the Association for Surgical Education, Association of Program Directors in Surgery, and Association of Residency Coordinators in Surgery for “Objective Structured Assessment of Debriefing in Surgery: Identifying and Quantifying Best Practice.”",
        "2010: Outstanding Presentation, AAMC Medical Education Scholarship Award, for “Using a Standardized Model for Creating Sustainable and Value-Added Academic-Community Partnerships and Learning Rotations.”",
        "2004: Finalist, Best Student Abstract, 132nd American Public Health Association Annual Meeting, for “Trends in Prevalence of Obesity and Overweight Among Illinois Adults, 1995-2002: Implications for Healthy People 2010 Objectives.”",
        "2004: Nominated for the Illinois Public Health Association Student Worker of the Year Award.",
        "1999: Guest of Honor, University of Mysore, India.",
        "1988-1997: Honors from state and national swimming organizations for excellence in swimming and water polo at national and international levels.",
        "1987-1993: Captain, Karnataka State Swim Team, for seven years.",
        "1987-1994: Best Sportsman of the Year recognition for eight years during undergraduate and graduate education in Bangalore, India."
      ],
      "Awards are consolidated into one artifact so the library shows the recognition record without creating a separate card for each honor."
    ),
    groupedRecord(
      "ev-group-journal-publications",
      "Journal Publications",
      "Grouped publication record",
      "Sixteen publications and published abstracts across public health, HIV prevention, cancer and physician workforce, medical education, simulation, teamwork, patient safety, and global medical education.",
      "Shows the scholarly record as a body of work while keeping every citation accessible within one artifact.",
      ["Journal publications", "Public health", "Simulation", "Medical education", "Physician workforce"],
      ["Researchers", "Academic leaders", "Search committees"],
      "scholarship",
      [
        "McKleroy V, Galbraith J, Cummings B, Jones P, Harshbarger C, Collins C, Gelaude D, Carey J, and the ADAPT Team (Paragi-Gururaja R). Adapting Evidence Based Behavioral Interventions for New Settings and Target Populations. AIDS Education and Prevention. 2006;18(4 Suppl A):59-73. PMID: 16987089.",
        "Raminani SR, Gai S, Ferreria-Pinto JB, Robinson BE, Rohatgi R, Gururaja RP, Lund SM, Moreno AV, Redmann J, Rente K, Shankle MD, Tieso TL, Wilson J, Bradford J. Results of CDC Funded Multi-site EBI Adaptation Project for Adult HIV+ Men of Color Who Have Sex with Men. National HIV Prevention Conference Abstract Book. 2007.",
        "Rogers LQ, Courneya KS, Paragi-Gururaja R, Markwell SJ, Imeokparia R. Lifestyle behaviors, obesity, and perceived health among men with and without a diagnosis of prostate cancer: a population-based, cross-sectional study. BMC Public Health. 2008;8:23. PMID: 18211697.",
        "Paige JT, Kozmenko V, Yang T, Gururaja RP, Cohn I, Hilton C, Chauvin S. The Mobile Mock Operating Room: Bringing Team Training to the Point of Care. In: Advances in Patient Safety: New Directions and Alternative Approaches, Vol. 3. Agency for Healthcare Research and Quality. 2008. PMID: 21249941.",
        "Gururaja RP, Yang T, Paige JT, Chauvin SW. Examining the Effectiveness of Debriefing at the Point of Care in Simulation-Based Operating Room Team Training. In: Advances in Patient Safety: New Directions and Alternative Approaches, Vol. 3. Agency for Healthcare Research and Quality. 2008. PMID: 21249934.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. High Fidelity, Simulation-based Training at the Point-of-Care Improves Teamwork in the Operating Room. Journal of the American College of Surgeons. 2008;207(3):S87-S88.",
        "Paige JT, Kozmenko V, Yang T, Paragi Gururaja R, Hilton CW, Cohn I Jr, Chauvin SW. High-fidelity, simulation-based, interdisciplinary operating room team training at the point of care. Surgery. 2009;145(2):138-146. PMID: 19167968.",
        "Paige JT, Kozmenko V, Yang T, Gururaja RP, Hilton CW, Cohn I Jr, Chauvin SW. Attitudinal Changes Resulting from Repetitive Training of Operating Room Personnel Using High Fidelity Simulation at the Point-of-Care. The American Surgeon. 2009;75(7):584-590. PMID: 19655602.",
        "Maronge GF, Narmala SK, Ramnarayan PG, Jahangir KS, Varughese S, Boulmay BC, Rigby PG. Hematology/Oncology: Sufficient, Surplus, or Shortage of Specialists. Journal of Investigative Medicine. 2012;60(1):410. Abstract.",
        "Ahmed M, Sevdalis N, Paige J, Paragi-Gururaja R, Nestel D, Arora S. Identifying Best Practice Guidelines for Debriefing in Surgery: A Tri-Continental Study. The American Journal of Surgery. 2012;203(4):523-529. PMID: 22450027.",
        "Detiege P, Lofaso D, Gururaja R, Moreno-Walton L. Conducting Hospital Disaster Drills Using Simulation Technology. Annals of Emergency Medicine. 2013;62(5):S176-S177.",
        "Maronge GF, Paragi Gururaja R, Rigby PG. The Supply of Hematology/Oncology Specialists. Journal of the Louisiana State Medical Society. 2014;166:10-14.",
        "Rigby PG, Paragi Gururaja R, Hilton C. MATCH PLAY, SOAP Hope. Journal of the Louisiana State Medical Society. 2015;167:134-139.",
        "Rigby PG, Paragi Gururaja R. Katrina Kinetics: The Physician Supply. Journal of the Louisiana State Medical Society. 2016;167(4):132-136.",
        "Rigby PG, Paragi Gururaja R. Physician Pipeline Production: Peak or Plateau. Journal of the Louisiana State Medical Society. 2016;168(5):162-165.",
        "Rigby PG, Gururaja RP. World Medical Schools: The Sum Also Rises. JRSM Open. 2017;8(6):2054270417698631."
      ],
      "All publications from the supplied record are retained here as citations rather than separate library artifacts."
    ),
    groupedRecord(
      "ev-group-curriculum-model-development",
      "Curriculum and Model Development",
      "Grouped curriculum and model-development record",
      "Development of an evidence-based model for academic and community health-center collaboration and sustainable clinical learning rotations.",
      "Shows applied model development connecting medical education, community health centers, interprofessional learning, and workforce-oriented clinical training.",
      ["Curriculum development", "Model development", "Community health centers", "Interprofessional education"],
      ["Medical educators", "Community health centers", "Academic leaders"],
      "projects",
      [
        "Development of an Evidence-Based Model for Academic and Community Health Center Collaboration, with S. Chauvin and R. Paragi.",
        "The model established a standardized, adaptable framework for academic residency and clinical rotations in Louisiana Federally Qualified Health Centers, including interprofessional learning teams and expansion of community-based educational programs."
      ],
      "The model and its intended use are presented together as one curriculum-development artifact."
    ),
    groupedRecord(
      "ev-group-books",
      "Books",
      "Grouped book record",
      "One authored book on nutrition for competitive swimmers.",
      "Documents early applied scholarship connecting medicine, nutrition, and competitive swimming.",
      ["Book authorship", "Sports nutrition", "Swimming science"],
      ["Competitive swimmers", "Coaches", "Sports science audiences"],
      "scholarship",
      [
        "Ramnarayan PG. Nutrition for Swimmers: A Comprehensive Nutritional Guide for Competitive Swimmers. Association of Integrated Council of Noble Swimmers, Bangalore, India. 2004."
      ],
      "The supplied record contains one authored book."
    ),
    groupedRecord(
      "ev-group-book-chapters",
      "Book Chapters",
      "Grouped book-chapter record",
      "One documented acknowledgement for contribution to a book chapter on Internet-enabled community-based research.",
      "Preserves the contribution while accurately identifying it as an acknowledgement rather than chapter authorship.",
      ["Book chapter contribution", "Community-based research", "Digital research", "HIV prevention"],
      ["Researchers", "Public health audiences"],
      "scholarship",
      [
        "Gai S, Redmann JM. The Internet as Platform to Do Community-Based Research: A Project Perspective. In: Stanton B, Galbraith J, Kaljee L, eds. The Uncharted Path from Clinic-Based to Community-Based Research. NOVA Science Publishers; 2008:115-135. Paragi Gururaja R acknowledged as a contributor."
      ],
      "The source identifies an acknowledged contribution, which is stated directly to avoid overstating authorship."
    ),
    groupedRecord(
      "ev-group-poster-presentations",
      "Poster Presentations",
      "Grouped poster-presentation record",
      "Eleven poster presentations spanning chronic disease prevention, population health, simulation, patient safety, teamwork, rural operating-room education, and disaster preparedness.",
      "Shows repeated dissemination across public-health, AHRQ, simulation, anesthesia, and emergency-medicine audiences without creating a separate card for each presentation.",
      ["Poster presentations", "Public health", "Simulation", "Patient safety", "Research dissemination"],
      ["Researchers", "Medical educators", "Public health audiences"],
      "scholarship",
      [
        "Zinn K, Austin L, Paragi Gururaja R, Balmer P. Illinois WISEWOMAN Program. 17th National Conference on Chronic Disease Prevention and Control; St. Louis, Missouri. February 2003.",
        "Gai S, Paragi Gururaja R, Neimary D. Determinants of Obesity in Illinois Adult Population. 62nd Illinois Public Health Association Conference and Annual Meeting; Springfield, Illinois. April 2003.",
        "Gai S, Paragi Gururaja R, Imeokparia R. Trends in Prevalence of Obesity and Overweight Among Illinois Adults, 1995-2002: Implications for Healthy People 2010 Objectives. 132nd American Public Health Association Annual Meeting; Washington, DC. November 2004.",
        "Paragi R, Imeokparia R. Gender Differences in Cardiovascular Disease Risk Factors: Trend Analysis, 1996-2005. 66th Illinois Public Health Association Conference; Springfield, Illinois. April 2007.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. STEPS for Better Patient Care: System for Teamwork Effectiveness and Patient Safety. Gulf Coast Forum, Gulf States Alliance: Network Science and Recovery; Biloxi, Mississippi. August 2007.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. Initial Evaluation of the Impact of Point-of-Care High-Fidelity, Simulation-Based Interdisciplinary Training on Teamwork in the Operating Room. AHRQ Annual Conference; Bethesda, Maryland. September 2007.",
        "Chauvin S, Paige J, Kozmenko V, Yang T, Paragi R, Cohn I Jr. Evaluation of the System for Teamwork Effectiveness and Patient Safety. AHRQ Annual Conference; Bethesda, Maryland. September 2007.",
        "Kozmenko V, Paige J, Yang T, Paragi R, Rusnak V, Hilton C, Cohn I Jr, Chauvin S. Conducting a Multidisciplinary Team Training Course to Improve OR Patient Safety Using High-Fidelity Human Patient Simulation. Society for Simulation in Healthcare Annual Meeting; San Diego, California. January 2008.",
        "Chauvin S, Paige J, Paragi R, Kozmenko V, Yang T. The Influence of Point-of-Care Teamwork Training on Actual Operating Room Practice. AHRQ Annual Conference; Bethesda, Maryland. September 2008.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Chauvin S. Reworking Rural Operating Room Education: Portability of Team Training Using the Mobile Mock OR. American Society of Anesthesiologists Annual Meeting; New Orleans, Louisiana. October 2009.",
        "Detiege P, Lofaso D, Paragi Gururaja R, Moreno-Walton L. Conducting Hospital Disaster Drills Using Simulation Technology. CORD Academic Assembly; Denver, Colorado. March 2013."
      ],
      "All poster presentations from the supplied record are consolidated here."
    ),
    groupedRecord(
      "ev-group-oral-presentations",
      "Oral Presentations",
      "Grouped oral-presentation record",
      "Twenty-six oral and paper presentations spanning public health, HIV prevention, community-based education, simulation, patient safety, medical education, physician workforce, and quality improvement.",
      "Shows a sustained dissemination record across local, state, national, and international venues while preserving each presentation inside one artifact.",
      ["Oral presentations", "Medical education", "Simulation", "Public health", "Quality improvement"],
      ["Academic leaders", "Researchers", "Medical educators", "Public health audiences"],
      "scholarship",
      [
        "Paragi Gururaja R. Illinois Breast and Cervical Cancer Program and Illinois WISEWOMAN Programs: A Perspective. Sangamon County Department of Public Health; Springfield, Illinois. April 2003.",
        "Zinn K, Austin L, Paragi Gururaja R. Illinois WISEWOMAN Pharmaceutical Assistance Project: An Overview. Illinois Department of Aging; Springfield, Illinois. May 2003.",
        "Zinn K, Austin L, Paragi Gururaja R, Balmer P. Implementation of Illinois WISEWOMAN Program. Office of Women’s Health, DuPage County Health Department; Wheaton, Illinois. May 2003.",
        "Paragi R. Illinois WISEWOMAN Program: A Cardiovascular Intervention Program. Illinois State Diabetes Prevention and Control Program Annual Meeting; Springfield, Illinois. August 2003.",
        "Gai S, Paragi Gururaja R, Imeokparia R, Steiner B. County Trends in Prevalence of Obese and Overweight Illinois Adults: Behavioral Risk Factor Surveillance System Data, 1995-2002. 63rd Illinois Public Health Association Conference; Bloomingdale, Illinois. April 2004.",
        "Gai S, Gururaja RP, Redmann J, Fegley J. Using the Internet as an Innovative Technology for Formative Research to Adapt Effective Behavioral Interventions for Men Who Have Sex with Men. National HIV Prevention Leadership Summit; New Orleans, Louisiana. May 2007.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. Feasibility of Conducting High-Fidelity, Simulation-Based Interdisciplinary Operating Room Team Training at the Point of Care. American College of Surgeons Annual Meeting; New Orleans, Louisiana. October 2007.",
        "Kozmenko V, Paige J, Yang T, Paragi R, Chauvin S. Initial Implementation of Mixed Reality Simulation Targeting Teamwork and Patient Safety. Medicine Meets Virtual Reality Conference; Long Beach, California. February 2008.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. Feasibility of Conducting High-Fidelity, Simulation-Based Interdisciplinary Operating Room Team Training at the Point of Care. Louisiana Chapter of the American College of Surgeons Annual Meeting; New Orleans, Louisiana. June 2008.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I Jr, Chauvin S. High Fidelity, Simulation-Based Training at the Point of Care Improves Teamwork in the Operating Room. American College of Surgeons Clinical Congress; San Francisco, California. October 2008.",
        "Chauvin S, Paige J, Yang T, Paragi R, Kozmenko V. Effectiveness of Operating Teamwork Training Implemented at the Point of Care. AAMC Annual Meeting; San Antonio, Texas. November 2008.",
        "Chauvin S, Hilton C, Kozmenko V, Yang T, Paige J, Lofaso D, Hoxsey R, Paragi R, Rusnak V. Applying a Core Laboratory Concept to Facilitate Collaborative Educational Excellence and Scholarship. AAMC Innovations in Medical Education; San Antonio, Texas. November 2008.",
        "Kozmenko V, Chauvin S, Paige J, Paragi R, Yang T, Rusnak V. Lessons Learned: Strategies for Effective Implementation of High-Fidelity Human Patient Simulation-Based OR Teamwork Training at the Point of Care. International Meeting on Simulation in Healthcare; Lake Buena Vista, Florida. January 2009.",
        "Paige J, Kozmenko V, Yang T, Paragi R, Hilton C, Cohn I, Chauvin S. Attitudinal Changes Resulting from Repetitive Training of Operating Room Personnel Using High-Fidelity Simulation at the Point of Care. Southeastern Surgical Congress; Atlanta, Georgia. February 2009.",
        "Paige J, Kozmenko V, Paragi R, Yang T, Chauvin S. Initial Impact of STEPS on the Culture of Patient Safety Within an Operating Room. International Forum on Quality and Safety in Health Care; Berlin, Germany. March 2009.",
        "Chauvin S, Kozmenko V, Paige J, Paragi R, Yang T, Rusnak V. Strategies for Effective Implementation of Simulation-Based Teamwork Training at the Point of Care. AAMC Southern Group on Educational Affairs Annual Meeting; New Orleans, Louisiana. April 2009.",
        "Chauvin S, Paragi R, Yang T. Creating Value-Added Learner Rotations in Community Health Centers and Settings. Louisiana Primary Care Association Annual Conference; Lake Charles, Louisiana. June 2009.",
        "Paige J, Kozmenko V, Paragi R, Yang T, Hilton C, Cohn I Jr, Chauvin S. Impact of Point-of-Care High-Fidelity, Simulation-Based Interdisciplinary Operating Room Team Training on General Surgical Residents. Louisiana Chapter of the American College of Surgeons Annual Meeting; New Orleans, Louisiana. June 2009.",
        "Chauvin S, Paragi R, Yang T. Using a Standardized Model for Creating Sustainable and Value-Added Academic-Community Partnerships and Learning Rotations. AAMC Southern Group on Educational Affairs Annual Meeting; Oklahoma City, Oklahoma. April 2010.",
        "Chauvin S, Paragi R, Yang T. Creating New Academic-Community Partnerships and Sustainable Learning Experiences in Community Health Settings: An Eight-Step Model. International Association of Medical Science Educators Annual Meeting; New Orleans, Louisiana. July 2010.",
        "Arora S, Paige J, Sevdalis N, Hull L, Paragi R, Nestel D. Assessment of Debriefings in High-Fidelity Simulation. Surgical Education Research Fellowship Symposium; San Antonio, Texas. April 2010.",
        "Arora S, Ahmed M, Paige J, Hull L, Paragi-Gururaja R, Runnacles J, Nestel D, Darzi A, Sevdalis N. Objective Structured Assessment of Debriefing in Surgery: Identifying and Quantifying Best Practice. ASE, APDS, and ARCS Combined Meeting; Boston, Massachusetts. March 2011.",
        "Yang T, Li B, Gururaja Paragi R, Paige J, DiCarlo R, Chauvin S. Assessment Opportunities and Challenges in Simulation. American Educational Research Association Annual Meeting; New Orleans, Louisiana. April 2011.",
        "Paige J, Yang T, Gururaja Paragi R, Garbee D, Kozmenko V, Rusnak V, Kozmenko L, Bonanno L, Chauvin S. Surgical Simulations: Technical Knowledge and Skills, Teamwork, and Interprofessional Learning. American Educational Research Association Annual Meeting; New Orleans, Louisiana. April 2011.",
        "Maronge GF, Narmala SK, Ramnarayan PG, Jahangir KS, Varughese S, Boulmay BC, Rigby PG. Hematology/Oncology: Sufficient, Surplus, or Shortage of Specialists. American Federation for Medical Research Southern Regional Meeting; New Orleans, Louisiana. February 2012.",
        "Ali M, Harkin V, Odinet-Frey R, Callac C, Paragi-Gururaja R, Reed P, Hilton C, Ali J. The Enhancing Quality Improvement for Patients Program at LSU Health Sciences Center New Orleans. AAMC Integrating Quality Meeting; Rosemont, Illinois. June 2013."
      ],
      "All oral and paper presentations from the supplied record are consolidated here."
    ),
    groupedRecord(
      "ev-group-governmental-technical-reports",
      "Governmental Technical Reports",
      "Grouped governmental report record",
      "Five Louisiana Medical Education Commission annual reports published from 2010 through 2014.",
      "Documents recurring technical-report contributions supporting state medical education, GME, workforce, and policy discussion.",
      ["Government reports", "Medical education", "GME", "Louisiana policy"],
      ["Louisiana policymakers", "Medical education leaders", "Workforce stakeholders"],
      "scholarship",
      [
        "Rigby P, Pinsky W, Amedee R, Weise J, Hilton C, Paragi R, Chesson A. Louisiana Medical Education Commission, 13th Annual Report. November 12, 2010.",
        "Rigby P, Pinsky W, Amedee R, Weise J, Hilton C, Paragi R, Chesson A. Louisiana Medical Education Commission, 14th Annual Report. November 21, 2011.",
        "Rigby P, Pinsky W, Amedee R, Weise J, Hilton C, Paragi R, Chesson A. Louisiana Medical Education Commission, 15th Annual Report. November 21, 2012.",
        "Rigby P, Pinsky W, Amedee R, Weise J, Hilton C, Paragi R, Chesson A. Louisiana Medical Education Commission, 16th Annual Report. November 21, 2013.",
        "Rigby P, Pinsky W, Amedee R, Weise J, Hilton C, Paragi R, Chesson A. Louisiana Medical Education Commission, 17th Annual Report. November 21, 2014."
      ],
      "The annual reports are retained as five entries within one governmental technical-report artifact."
    ),
    groupedRecord(
      "ev-group-reviewer",
      "Reviewer",
      "Grouped peer-review and evaluation record",
      "Seven manuscript-review, abstract-review, publication-review, and grant-program evaluation roles spanning 2007 to the present.",
      "Consolidates recurring scholarly service while distinguishing manuscript review, abstract review, publication review, and program evaluation.",
      ["Manuscript review", "Abstract review", "Academic evaluation", "Cancer education"],
      ["Journal editors", "Conference organizers", "Academic leaders"],
      "scholarship",
      [
        "Manuscript Reviewer, Journal of General Internal Medicine, 2020-present.",
        "Manuscript Reviewer, Annals of Family Medicine, 2019-present.",
        "Manuscript Reviewer, British Medical Journals, London, United Kingdom, 2010-present.",
        "Reviewer, Advances in Patient Safety: New Directions and Alternative Approaches, Agency for Healthcare Research and Quality, August 2008.",
        "Abstract Reviewer, Effective Teamwork Equals Excellence in Patient Care, AAMC Southern Group on Educational Affairs Annual Conference, October 2009.",
        "Abstract Reviewer, Medical Education: Balancing Learning Strategies and Technologies, AAMC Southern Group on Educational Affairs Annual Conference, April 2008.",
        "Evaluator and Analyst, NCI Cancer Education Grant Program, Short Research Experiences in Cancer, LSU Health Sciences Center, 2007-2008."
      ],
      "Reviewer and evaluator roles are grouped to show the full service record without separate cards for each appointment."
    ),
    groupedRecord(
      "ev-group-service-administration",
      "Service and Administration",
      "Service portfolio overview",
      "Overview of School, campus, national, international, professional-community, and state and regional workforce service.",
      "Provides one entry point to the service portfolio while the six focused artifacts retain the underlying appointments and responsibilities.",
      ["Institutional service", "Committee governance", "Professional engagement", "Workforce service"],
      ["Academic leaders", "Search committees", "Professional audiences"],
      "governance",
      [
        "School committees: Dean’s staff and administrative governance, CME, EQuIP, strategic planning, and LCME and CQI service.",
        "LSUHSC campus committee: Managed Care Incentive Payment program informatics service.",
        "National committee and association memberships in public health.",
        "International service involving academic collaboration, swimming administration, and doping control.",
        "Professional society and professional community engagement through AAMC communities and working groups.",
        "State, regional, and health workforce service through AHEC, LDH, the Louisiana Medical Education Commission, and the Louisiana Healthworks Commission."
      ],
      "This overview organizes the service record; detailed appointments appear in the six grouped service artifacts that follow."
    ),
    groupedRecord(
      "ev-group-school-committees",
      "School Committees",
      "Grouped School of Medicine committee record",
      "Eight School of Medicine governance, accreditation, quality, continuing medical education, and strategic-planning committee appointments.",
      "Shows recurring participation in School governance and cross-mission planning rather than presenting each committee as a separate artifact.",
      ["School governance", "Strategic planning", "LCME", "CME", "Quality improvement"],
      ["Dean", "School leadership", "Faculty"],
      "governance",
      [
        "LSU School of Medicine Dean’s Staff Committee and Administrative Committee, 2017-present.",
        "Advisory Committee on Continuing Medical Education, 2014-present.",
        "Steering Committee, Enhancing Quality Improvement for Patients Program, 2012-2020.",
        "LSU School of Medicine Strategic Planning Advisory Committee, 2024.",
        "LSU School of Medicine Strategic Planning Clinical Workgroup, 2024.",
        "LSU School of Medicine Strategic Planning Research Workgroup, 2024.",
        "LSU School of Medicine Strategic Planning Education Workgroup, 2024.",
        "LSU School of Medicine LCME Accreditation Steering Committee and Quality Improvement and Accreditation Team, 2023-present."
      ],
      "School committee appointments are consolidated into one governance artifact."
    ),
    groupedRecord(
      "ev-group-campus-committees",
      "LSUHSC Campus Committees",
      "Grouped campus committee record",
      "Campus-level informatics service for the Managed Care Incentive Payment program.",
      "Documents cross-campus service linking quality improvement, data, and program operations.",
      ["Campus governance", "MCIP", "Informatics", "Quality improvement"],
      ["LSUHSC leadership", "Program leaders"],
      "governance",
      [
        "Member, Managed Care Incentive Payment Program Informatics Team, 2018-present."
      ],
      "The supplied record contains one LSUHSC campus committee appointment."
    ),
    groupedRecord(
      "ev-group-national-committee",
      "National Committee",
      "Grouped public-health association record",
      "Public-health association membership during the Illinois public-health phase of the career.",
      "Preserves the national and state association record without overstating the memberships as formal committee appointments.",
      ["Public health", "Professional membership", "National engagement"],
      ["Public health audiences", "Professional peers"],
      "governance",
      [
        "Member, Illinois Public Health Association, 2003-2005.",
        "Member, American Public Health Association, 2004-2005."
      ],
      "The source labels this section National Committee; the entries themselves are association memberships and are described that way."
    ),
    groupedRecord(
      "ev-group-international-service",
      "International Service",
      "Grouped international service record",
      "Three international service roles spanning academic collaboration, swimming administration, and anti-doping work.",
      "Shows sustained international engagement across academic health sciences and competitive sport while keeping distinct roles in one service artifact.",
      ["International collaboration", "Academic partnerships", "Swimming administration", "Anti-doping"],
      ["International partners", "Academic leaders", "Sports organizations"],
      "governance",
      [
        "Strategic Collaboration Lead, LSUHSC School of Medicine and IIT Madras International Collaboration, 2025-present. Led collaboration development and MoU work involving LSUHSC, IIT Madras, and Indian Ministry of Education representatives, with priority areas in genomics, AI and machine learning, digital health, faculty programming, and possible maternal and child health work.",
        "Vice President, Integrated Council of Noble Swimmers, Bangalore, India, 1997-present.",
        "Doping Control Officer, International Doping Tests and Management, Lidingö, Sweden, 2005-present."
      ],
      "International academic, professional, and sport-governance service are retained as three entries within one artifact."
    ),
    groupedRecord(
      "ev-group-professional-engagement",
      "Professional Society and Professional Community Engagement",
      "Grouped professional-community record",
      "Seven AAMC professional communities and working groups joined in 2024.",
      "Shows active engagement across student affairs, assessment, academic technology, institutional advancement, staff development, education across the continuum, and data-driven academic medicine.",
      ["AAMC", "Professional communities", "Assessment", "Academic technology", "Institutional advancement"],
      ["Academic leaders", "Medical education professionals", "Staff professionals"],
      "governance",
      [
        "AAMC Group on Student Affairs, 2024-present.",
        "AAMC Assessment and Evaluation Communities, 2024-present.",
        "AAMC Information Technology in Academic Medicine Community, 2024-present.",
        "AAMC Institutional Advancement Community, 2024-present.",
        "AAMC Virtual Community for Staff Professionals, 2024-present.",
        "Across the Continuum of Education community, 2024-present.",
        "AAMC Data-Driven Academic Medical Centers Work Group, 2024-present."
      ],
      "Professional society and community participation are grouped by organization and purpose."
    ),
    groupedRecord(
      "ev-group-state-workforce-service",
      "State, Regional and Health Workforce Service",
      "Grouped state and regional service record",
      "Four sustained service roles supporting Louisiana workforce data, rural and primary-care planning, graduate medical education, and cross-agency workforce development.",
      "Shows long-term state and regional service connecting academic medicine, public policy, workforce analysis, and community-based education.",
      ["Health workforce", "Rural health", "GME", "State policy", "Program evaluation"],
      ["Louisiana policymakers", "LDH", "Medical education leaders", "Workforce stakeholders"],
      "governance",
      [
        "Evaluation and Data Management Support, Southeast Louisiana Area Health Education Center and Louisiana Student and Resident Experiences and Rotations in Community Health Program, 2007-2016. Supported programs intended to improve the supply and distribution of health professionals through community and academic partnerships.",
        "Consultant, Louisiana Department of Health and Hospitals Bureau of Primary Care and Rural Health, Recruitment and Retention Services Unit, 2010-2020. Supported HPSA and MUA designation work, physician manpower studies, and health-workforce planning.",
        "Member, Louisiana State Medical Education Commission, 2010-2019. Supported graduate medical education data analysis, medical education trend reporting, funding-distribution questions, public reports, and state policy discussions.",
        "Louisiana Healthworks Commission. Supported health-workforce development analysis and coordination across state departments, education programs, health-workforce stakeholders, and workforce-development initiatives."
      ],
      "State and regional appointments are grouped because they form one continuous workforce and policy service record."
    )
  ];

  artifacts = artifacts.concat(groupedRecognitionRecords);

  var replacementIdMap = {
    "ai-02": "ai-01",
    "ev-strategy-annual-monitoring": "execstrat-01",
    "res-06": "res-05",
    "ev-india-moe-host": "res-07",
    "ev-study-in-india": "res-07",
    "ev-mcat-transition": "adm-02",
    "adm-09": "ev-career-lsu-omerad",
    "ev-omerad-education-research": "ev-career-lsu-omerad",
    "ev-faculty-workforce": "fac-02"
  };

  var medaiLexicon = byId("ai-05");
  if (medaiLexicon) {
    Object.assign(medaiLexicon, {
      liveUrl: "https://datadrivenmed.github.io/MedAI--Lexicon/",
      liveLabel: "Launch MedAI Lexicon",
      featured: true,
      externalSelection: [
        {
          institution: "Yale School of Medicine",
          context: "Educational Technology & Innovation newsletter, January 2026",
          url: "https://yppsweb2.its.yale.edu/yalemessage/pages/ad2862/22202630518/"
        },
        {
          institution: "University of North Dakota School of Medicine & Health Sciences",
          context: "Teaching & Learning Resource Repository",
          url: "https://med.und.edu/education-training/learning-innovation/repository.html"
        }
      ]
    });
  }

  var medaiTeachingGuide = byId("ai-06");
  if (medaiTeachingGuide) {
    Object.assign(medaiTeachingGuide, {
      featured: true,
      relatedLiveUrl: "https://datadrivenmed.github.io/MedAI--Lexicon/",
      relatedLiveLabel: "Open the MedAI learning system"
    });
  }

  var panOncology = byId("ev-pan-oncology");
  if (panOncology) {
    Object.assign(panOncology, {
      liveUrl: "https://tumor-boards.vercel.app/",
      liveLabel: "Launch Pan-Oncology prototype",
      featured: true
    });
  }

  if (!byId("swim-04")) {
    artifacts.push({
      id: "swim-04",
      title: "BAC Elite Swim Center Institutional Intelligence Prototype",
      category: "swimming-science",
      role: "Concept designer and prototype developer",
      summary: "Designed a live institutional-intelligence concept prototype for the operating context of Basavanagudi Aquatic Centre in Bengaluru, a nonprofit aquatic institution founded in 1986 that reports training more than 500 swimmers regularly. The prototype reframes the center as an interconnected performance and operating system rather than a collection of isolated race times or reports.",
      strategic: "Shows how athlete development, coaching, sports science, competition, program participation, facility capacity, and organizational operations could be organized within a shared decision-support architecture. The work demonstrates system-level sports analytics and prototype design; it does not imply BAC adoption, commissioned development, production use, or validated athlete prediction.",
      skills: [
        "Institutional intelligence",
        "Sports analytics",
        "Athlete-development systems",
        "Decision-support design",
        "AI prototyping",
        "Performance operations"
      ],
      audience: [
        "Swimming leadership",
        "Coaches and performance staff",
        "Sports science teams",
        "Aquatic center administrators"
      ],
      tags: [
        "Basavanagudi Aquatic Centre",
        "BAC",
        "Swimming intelligence",
        "Institutional analytics",
        "International swimming",
        "Live prototype"
      ],
      entries: [
        "Institutional model connecting athlete development, coaching, sports science, competition, programs, and operations within one leadership view.",
        "Focus on longitudinal athlete pathways, program-level indicators, capacity visibility, and performance patterns rather than one-time race analysis.",
        "Concept for converting a long-established aquatic institution's accumulated operational and coaching knowledge into structured decision support.",
        "Evidence boundary: independent conceptual prototype designed for BAC's institutional context; not represented as commissioned, adopted, deployed, or performance validated."
      ],
      entriesIntro: "The prototype is presented as a system-design artifact with an explicit boundary between demonstrated architecture and institutional implementation.",
      sourceFile: null,
      liveUrl: "https://bac-intelligence.ai.studio/",
      liveLabel: "Launch BAC Intelligence prototype",
      evidenceType: "public",
      evidenceStatus: "Live public conceptual prototype and portfolio evidence record",
      evidenceLevel: "public-concept-prototype",
      featured: true,
      confidential: false,
      premiumEvidence: true,
      normalizedRecord: true
    });
  }

  if (Array.isArray(window.FLAGSHIP_IDS)) {
    window.FLAGSHIP_IDS = unique(window.FLAGSHIP_IDS
      .map(function (id) { return replacementIdMap[id] || id; })
      .filter(function (id) { return artifacts.some(function (artifact) { return artifact && artifact.id === id; }); }));
  }

  window.ARTIFACTS = artifacts;
  window.ALL_SKILLS = unique(artifacts.flatMap(function (artifact) { return artifact.skills || []; })).sort();
  window.ALL_AUDIENCES = unique(artifacts.flatMap(function (artifact) { return artifact.audience || []; })).sort();
  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(artifacts);
  }
  if (Array.isArray(window.HERO_STATS)) {
    var artifactStat = window.HERO_STATS.find(function (stat) {
      return /Artifacts in capability portfolio/i.test(stat.lbl || "");
    });
    if (artifactStat) artifactStat.num = String(artifacts.length);
  }
  window.PREMIUM_EVIDENCE_COUNT = artifacts.length;
  window.FINAL_LIBRARY_CURATION = {
    mergedGroups: 7,
    correctedInternationalMerge: ["res-07", "ev-india-moe-host", "ev-study-in-india"],
    preservedSeparateResearchRecord: "ev-nih-comparative",
    movedRecords: {
      "ev-texla": "policy-rural",
      "ev-board-regents": "analytics",
      "ev-medstudent-research-eval": "research-strategy"
    },
    removedRecognitionRecords: removedRecognitionIds,
    groupedRecognitionRecords: groupedRecognitionRecords.map(function (record) { return record.id; }),
    finalRecordCount: artifacts.length
  };
})();
