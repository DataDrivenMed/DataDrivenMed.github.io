/* global window */
// Final library normalization: merge verified duplicates and replace aggregate
// legislative-bill listings with one evidence record per user-supplied bill item.
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

    var mergedIds = [canonicalId].concat(duplicateIds);
    var records = mergedIds.map(byId).filter(Boolean);
    var combined = Object.assign({}, canonical, overrides || {});

    combined.skills = unique(records.flatMap(function (record) { return record.skills || []; }).concat((overrides && overrides.skills) || []));
    combined.audience = unique(records.flatMap(function (record) { return record.audience || []; }).concat((overrides && overrides.audience) || []));
    combined.tags = unique(records.flatMap(function (record) { return record.tags || []; }).concat((overrides && overrides.tags) || []));
    combined.featured = records.some(function (record) { return Boolean(record.featured); });
    combined.confidential = records.some(function (record) { return Boolean(record.confidential); });
    combined.premiumEvidence = records.some(function (record) { return Boolean(record.premiumEvidence); });
    combined.normalizedRecord = true;
    combined.mergedFromIds = duplicateIds.slice();

    var canonicalIndex = artifacts.findIndex(function (artifact) { return artifact && artifact.id === canonicalId; });
    artifacts[canonicalIndex] = combined;
    window.ARTIFACTS = artifacts = artifacts.filter(function (artifact) {
      return artifact && duplicateIds.indexOf(artifact.id) === -1;
    });
  }

  // Exact duplicate work products. The retained record keeps the stronger source,
  // public link, and flagship status while absorbing the richer metadata.
  mergeRecords("ai-25", ["ai-18"], {
    role: "Live public AI safety, governance, and faculty education artifact",
    summary: "Public AI safety resource for academic health sciences faculty and staff explaining prompt injection as a trust, workflow, and system-design risk in healthcare. Covers attack patterns, healthcare-specific scenarios, warning signs, response steps, organizational controls, and the PAUSE framework.",
    strategic: "Translates a technical AI security threat into practical workforce education and institutional governance guidance for clinical, educational, research, and administrative settings without overstating policy authority.",
    evidenceStatus: "Live public artifact and portfolio evidence record"
  });

  mergeRecords("ai-amc-guide", ["ev-ai-hiring-amc"], {
    role: "Featured interactive AI-aware hiring and workforce governance artifact",
    summary: "Public interactive guide translating responsible AI into hiring, role design, structured interviews, candidate verification, governance, and workforce-readiness practices for academic medical centers.",
    strategic: "Provides academic medical center leaders and search committees with a practical process for distinguishing AI-assisted judgment from AI-dependent performance during hiring.",
    evidenceStatus: "Live public artifact and portfolio evidence record"
  });

  mergeRecords("gme-03", ["ev-lake-charles-lppf"], {
    role: "Flagship case study · GME finance and regional strategy",
    summary: "Provided policy and financial analysis for the Lake Charles Family Medicine Residency during a regional dispute involving Louisiana Local Provider Participation Fund dynamics, Medicaid financing, hospital competitive positioning, and GME training implications.",
    strategic: "Converted a politically charged regional financing issue into actionable guidance for residency leadership and hospital partners while preserving the Medicaid, GME, and regional-strategy dimensions of the work.",
    evidenceStatus: "Portfolio and career evidence record"
  });

  mergeRecords("sim-02", ["ev-gme-resident-patient-safety-reportcards"], {
    role: "Flagship case study · GME quality measurement architecture",
    summary: "Developed resident and fellow quality and patient-safety report cards using LSU HCSD clinical quality measures, HEDIS-related measures, and national benchmarks to connect trainee performance with measured care outcomes and continuous improvement.",
    strategic: "Created a concrete measurement instrument linking GME evaluation, patient safety, clinical quality, and program-level improvement.",
    evidenceStatus: "Portfolio and career evidence record"
  });

  // Same scholarly work disseminated in more than one form. Keep one work-product
  // record and state every distinct publication, venue, and year.
  mergeRecords("ev-pub-hemonc-abstract-2012", ["ev-oral-hemonc-2012"], {
    role: "Journal abstract and oral presentation · Journal of Investigative Medicine and American Federation for Medical Research · 2012",
    summary: "Co-authored physician-workforce research on hematology/oncology specialist supply, published as a Journal of Investigative Medicine abstract and presented orally to the American Federation for Medical Research in 2012.",
    strategic: "One scholarly work product with two documented dissemination formats: publication and oral presentation.",
    evidenceLevel: "consolidated-scholarly-output"
  });

  mergeRecords("ev-pub-disaster-sim-2013", ["ev-poster-disaster-drill-2013"], {
    role: "Journal abstract and poster presentation · Annals of Emergency Medicine and CORD Academic Assembly · 2013",
    summary: "Co-authored scholarship on hospital disaster drills using simulation technology, published as an Annals of Emergency Medicine abstract and presented as a poster at the CORD Academic Assembly in 2013.",
    strategic: "One scholarly work product with two documented dissemination formats: publication and poster presentation.",
    evidenceLevel: "consolidated-scholarly-output"
  });

  mergeRecords("ev-oral-sim-feasibility-acs-2007", ["ev-oral-sim-feasibility-laacs-2008"], {
    role: "Oral presentations · American College of Surgeons (2007) and Louisiana Chapter, American College of Surgeons (2008)",
    summary: "Presented the feasibility of high-fidelity, simulation-based interdisciplinary operating-room team training at the point of care to the American College of Surgeons in 2007 and its Louisiana chapter in 2008.",
    strategic: "One applied simulation study presented to two professional audiences across two years.",
    evidenceLevel: "consolidated-scholarly-output"
  });

  mergeRecords("ev-review-sgea-2008", ["ev-review-sgea-2009"], {
    role: "Abstract-review service · AAMC Southern Group on Educational Affairs · 2008 and 2009",
    summary: "Served as an abstract reviewer for the AAMC Southern Group on Educational Affairs in 2008 and 2009.",
    strategic: "Consolidates consecutive-year service for the same organization and review function while preserving both years.",
    evidenceLevel: "consolidated-service-record"
  });

  // Remove the two opaque aggregate bill-list records. Non-bill policy work and
  // the rural bill-tracker tool remain because they are separate work products.
  var removedAggregateBillIds = ["pol-02", "pol-05"];
  window.ARTIFACTS = artifacts = artifacts.filter(function (artifact) {
    return removedAggregateBillIds.indexOf(artifact.id) === -1;
  });

  function billRecord(id, title, role, summary, strategic, skills, options) {
    options = options || {};
    return {
      id: id,
      title: title,
      category: "policy-rural",
      role: role,
      summary: summary,
      skills: unique(["Legislative analysis", "Policy translation", "Decision support"].concat(skills || [])),
      audience: options.audience || ["LSUHSC leadership", "Legislative and policy stakeholders"],
      strategic: strategic,
      sourceFile: options.sourceFile || null,
      tags: unique(["Legislative policy", "Louisiana", "Health workforce"].concat(options.tags || skills || [])),
      featured: Boolean(options.featured),
      confidential: false,
      cleanFile: options.cleanFile || null,
      fullArtifactUrl: options.fullArtifactUrl || null,
      liveUrl: options.liveUrl || null,
      liveLabel: options.liveLabel || null,
      evidenceStatus: "User-provided bill-level evidence record",
      premiumEvidence: true,
      normalizedRecord: true,
      evidenceLevel: "distinct-bill-record"
    };
  }

  var bills = [
    billRecord(
      "pol-03",
      "H.R. 1 - Rural Health Transformation Program, Sec. 71401",
      "Federal rural-health policy analysis and strategic opportunity brief",
      "Established the Rural Health Transformation Program under H.R. 1, Sec. 71401, creating a five-year federal funding opportunity for states to improve rural access, outcomes, workforce recruitment and retention, technology-enabled care, rural hospital sustainability, mental health and substance use disorder services, value-based care, and long-term access to high-quality rural care. State plans are required; state matching funds are not.",
      "Proactively identified the program as an opportunity for LSUHSC New Orleans, LSU School of Medicine, LSU Health Sciences Center, and Louisiana. Developed a brief for senior leadership that translated the statute into institutional strategy, state-engagement options, implementation priorities, and potential academic, workforce, analytics, implementation, and technical-assistance roles with LDH.",
      ["Federal rural health policy", "Strategic opportunity analysis", "LDH engagement", "Rural workforce", "Implementation planning"],
      { featured: true, sourceFile: "HR1.MD", cleanFile: "h-r-1-rural-health-transformation-program-strategic-response.md", tags: ["H.R. 1", "Sec. 71401", "Rural Health Transformation Program"] }
    ),
    billRecord(
      "pol-12",
      "H.R. 1 - Rural Health Transformation Program Strategic Policy Stress Test and LSU-LDH Partnership Framework",
      "Federal policy stress test and LSU-LDH partnership framework",
      "Sec. 71401 requires state rural-health transformation plans addressing access to hospitals and providers, rural outcomes, emerging technology, local and regional partnerships, clinician recruitment and retention, data- and technology-enabled delivery, rural hospital solvency, and the risk of closure, conversion, or service reduction.",
      "Developed a strategic policy stress test and LSU-LDH partnership framework positioning LSUHSC New Orleans as a statewide implementation partner. Mapped rural workforce pipelines, Rural Scholar Track, rural Family Medicine residencies, AHEC, telehealth and Project ECHO-type models, behavioral health, simulation, public-health analytics, interprofessional assets, technology-enabled care, and value-based care opportunities to the statute.",
      ["Policy stress testing", "LSU-LDH partnership design", "Rural hospital finance", "Telehealth", "Value-based care"],
      { featured: true, liveUrl: "rural-health-transformation-strategic-policy-stress-test.html", liveLabel: "Open policy stress test", tags: ["H.R. 1", "Sec. 71401", "LSU-LDH"] }
    ),
    billRecord(
      "ev-bill-hr1-rural-asset-map",
      "H.R. 1 - LSUHSC Rural Asset Mapping and Implementation Architecture",
      "Rural asset map and implementation architecture",
      "The Rural Health Transformation Program permits state investment in chronic-disease prevention, provider payments, consumer-facing technology, rural hospital technology, workforce recruitment and retention, health IT and cybersecurity, health-system right-sizing, mental health and substance use disorder access, innovative care models, and other activities supporting sustainable rural access.",
      "Created LSUHSC rural asset-mapping resources and a visual execution framework aligning LSU Health New Orleans assets with all ten Sec. 71401 funding categories. Connected the five health-professions schools, AHEC, rural residency sites, Rural Scholar Track, telehealth, simulation, behavioral health, mobile services, community-health-worker training, and data and analytics infrastructure to Louisiana implementation options.",
      ["Asset mapping", "Implementation architecture", "Interprofessional strategy", "Rural workforce", "Data and analytics"],
      { tags: ["H.R. 1", "Sec. 71401", "LSUHSC rural assets"] }
    ),
    billRecord(
      "ev-bill-hcr241",
      "HCR 241 - Health Care Delivery and Medical Education Study",
      "Louisiana health-system and medical-education policy analysis",
      "Urged the Department of Health and Hospitals and LSU Board of Supervisors to study the current and future delivery of health care and medical education in Louisiana and make recommendations.",
      "Provided data and policy analysis on Louisiana health care delivery capacity, medical education infrastructure, physician workforce needs, public-hospital training capacity, and the relationship between LSU medical education programs and statewide health-system planning.",
      ["Healthcare delivery", "Medical education", "Physician workforce", "Public hospitals"]
    ),
    billRecord(
      "ev-bill-sb428",
      "SB 428 - Affiliation Agreements and Medicare GME Funding",
      "GME affiliation and Medicare financing analysis",
      "Authorized LSU Health Sciences Center to maximize affiliation agreements with other hospitals to maximize the use of Medicare graduate medical education funding.",
      "Provided policy and technical analysis on clinical educational affiliation agreements, Medicare GME funding, resident training sites, hospital partnerships, and the implications of affiliation structures for GME financing.",
      ["Medicare GME", "Affiliation agreements", "Hospital partnerships", "Resident training sites"]
    ),
    billRecord(
      "ev-bill-hcr116",
      "HCR 116 - Health Care Delivery and Medical Education Study",
      "Louisiana medical-education capacity and workforce analysis",
      "Urged the Department of Health and Hospitals and LSU Board of Supervisors to study the current and future delivery of health care and medical education in Louisiana and make recommendations.",
      "Supported analysis of medical education capacity, physician workforce distribution, health care delivery needs, LSU Health Sciences Center training infrastructure, and policy options for aligning medical education with state health-system needs.",
      ["Medical education capacity", "Physician distribution", "Health-system planning", "Training infrastructure"]
    ),
    billRecord(
      "ev-bill-sb98",
      "SB 98 - Major Teaching Hospital Reimbursement Methodology",
      "Teaching-hospital reimbursement policy analysis",
      "Defined major teaching hospital for purposes of hospital prospective reimbursement methodology.",
      "Provided analysis of teaching-hospital definitions, GME activity, hospital reimbursement policy, public-hospital financing, and the relationship between major teaching hospitals and physician training capacity.",
      ["Teaching hospitals", "Prospective reimbursement", "GME activity", "Public-hospital finance"]
    ),
    billRecord(
      "ev-bill-sb178",
      "SB 178 - Out-of-State Tuition Support for Medical Education Programs Not Offered in Louisiana",
      "Health-professions education pipeline policy analysis",
      "Created a fund to support out-of-state tuition for certain students enrolled in medical education programs not offered in Louisiana.",
      "Supported analysis of health-professions pipeline needs, program availability, student training pathways, state workforce gaps, and tuition support as a response to specialized education needs unavailable within Louisiana.",
      ["Tuition policy", "Education pipeline", "Program availability", "Workforce gaps"]
    ),
    billRecord(
      "ev-bill-sr191",
      "SR 191 - Governance, Efficiency, and Service Delivery Study",
      "LSU health governance and service-delivery analysis",
      "Requested the Senate Committee on Health and Welfare to study the governance, efficiency, and service delivery of the LSU Health Care Services Division and LSU Health Sciences Center.",
      "Provided data and policy support on LSU health care delivery structures, educational and clinical functions, public-hospital governance, service delivery, workforce capacity, and health-system efficiency.",
      ["Health-system governance", "Service delivery", "Public hospitals", "Operational efficiency"]
    ),
    billRecord(
      "ev-bill-hr42",
      "HR 42 - Cooperative Endeavor Agreements and Public Hospital Management Changes",
      "Public-private hospital transition and GME continuity analysis",
      "Required House Appropriations Committee approval of cooperative endeavor agreements between the LSU Board of Supervisors and private entities involving changes in public-hospital management.",
      "Supported analysis of public-private hospital transitions, cooperative endeavor agreements, GME continuity, public-hospital governance, clinical training sites, and policy implications of management changes.",
      ["Cooperative endeavor agreements", "Public-private transitions", "GME continuity", "Hospital governance"]
    ),
    billRecord(
      "ev-bill-hcr83",
      "HCR 83 - Specialist Physician Shortage Task Force",
      "Physician specialty supply and GME pipeline analysis",
      "Created a task force to study, identify, and recommend responses to Louisiana's shortage of specialist physicians.",
      "Provided workforce and medical-education analysis on specialty supply, regional distribution, specialist shortages, GME pipeline capacity, and policy options for closing specialty workforce gaps.",
      ["Specialist shortages", "Physician supply", "GME pipeline", "Regional distribution"]
    ),
    billRecord(
      "ev-bill-hcr134",
      "HCR 134 - Medical Education and Research Finance Work Group",
      "Medical education and research financing analysis",
      "Created the Medical Education and Research Finance Work Group to recommend a formula-based financing model for Louisiana's public graduate and professional medical education and biomedical and health-related research.",
      "Provided analysis of medical education financing, GME funding, biomedical and health-related research support, formula-based funding, public institutional finance, and the connection between research infrastructure and health-professions training.",
      ["Medical education finance", "Research funding", "Formula funding", "Public institutions"]
    ),
    billRecord(
      "ev-bill-hb885",
      "HB 885 - Safety Net Hospital Preservation Act",
      "Safety-net hospital financing and access analysis",
      "Enacted the Safety Net Hospital Preservation Act.",
      "Supported policy analysis on safety-net hospital financing, public-hospital sustainability, Medicaid populations, clinical training infrastructure, GME implications, and access for vulnerable populations.",
      ["Safety-net hospitals", "Medicaid", "Hospital sustainability", "Access to care"]
    ),
    billRecord(
      "ev-bill-hcr17",
      "HCR 17 - Louisiana Health Care Delivery System Study Committee",
      "Statewide health care delivery-system analysis",
      "Created a study committee to evaluate and recommend changes to Louisiana's health care delivery system.",
      "Provided data and policy analysis on statewide health care delivery, physician workforce distribution, medical education capacity, public-hospital systems, access to care, and LSU Health Sciences Center's role in Louisiana's health infrastructure.",
      ["Healthcare delivery", "Physician distribution", "Medical education capacity", "Access to care"]
    ),
    billRecord(
      "ev-bill-hr230",
      "HR 230 - Access to Health Services in Shortage Areas",
      "Rural and underserved access policy analysis",
      "Requested a study of ways to enhance access to health services in health professional shortage areas.",
      "Provided analysis of HPSA and MUA designations, physician workforce distribution, rural and underserved access, medical education pipeline strategies, and policy options for improving services in shortage areas.",
      ["HPSA", "MUA", "Rural access", "Underserved workforce"]
    ),
    billRecord(
      "ev-bill-sb408",
      "SB 408 - Major Teaching Hospital Reimbursement Methodology",
      "Teaching-hospital classification and reimbursement analysis",
      "Defined major teaching hospital for purposes of hospital prospective reimbursement methodology.",
      "Supported analysis of teaching-hospital classification, prospective reimbursement, GME activity, public-hospital financing, and the policy link between reimbursement methodology and medical training infrastructure.",
      ["Teaching-hospital classification", "Prospective reimbursement", "GME", "Training infrastructure"]
    ),
    billRecord(
      "ev-bill-hr205",
      "HR 205 - Direct Support Professional Workforce Shortage",
      "Health care workforce shortage analysis",
      "Urged the Louisiana Department of Health and Louisiana Workforce Commission to organize a committee to develop strategies addressing the direct support professional workforce shortage.",
      "Provided workforce analysis on direct support professional needs, health-system staffing capacity, workforce-development infrastructure, and the connection between workforce gaps and service delivery.",
      ["Direct support professionals", "Workforce shortage", "LDH", "Louisiana Workforce Commission"]
    ),
    billRecord(
      "ev-bill-hb1033",
      "HB 1033 - Workforce and Innovation for a Stronger Economy Fund",
      "Higher education and workforce investment analysis",
      "Provided for enactment of the Workforce and Innovation for a Stronger Economy Fund.",
      "Supported analysis of workforce development, higher education alignment, health-professions education capacity, medical education outcomes, and the connection between public investment, workforce production, and state economic development.",
      ["WISE Fund", "Higher education", "Workforce development", "Economic development"]
    ),
    billRecord(
      "ev-bill-sb337",
      "SB 337 - Outcomes-Based Postsecondary Education Funding Formula",
      "Outcomes-based higher education funding analysis",
      "Provided for development of an outcomes-based funding formula for postsecondary education.",
      "Provided analysis of outcomes-based funding, medical education performance measures, workforce outcomes, GME production, student-pipeline metrics, and implications for health-sciences education and state workforce needs.",
      ["Outcomes-based funding", "Performance measures", "Student pipeline", "Workforce outcomes"]
    )
  ];

  bills.forEach(function (bill) {
    var index = artifacts.findIndex(function (artifact) { return artifact && artifact.id === bill.id; });
    if (index >= 0) artifacts[index] = Object.assign({}, artifacts[index], bill);
    else artifacts.push(bill);
  });

  // Keep global references consistent after record removal and canonical-ID merges.
  var idMap = {
    "ai-18": "ai-25",
    "ev-ai-hiring-amc": "ai-amc-guide",
    "ev-lake-charles-lppf": "gme-03",
    "ev-gme-resident-patient-safety-reportcards": "sim-02",
    "ev-oral-hemonc-2012": "ev-pub-hemonc-abstract-2012",
    "ev-poster-disaster-drill-2013": "ev-pub-disaster-sim-2013",
    "ev-oral-sim-feasibility-laacs-2008": "ev-oral-sim-feasibility-acs-2007",
    "ev-review-sgea-2009": "ev-review-sgea-2008"
  };

  if (Array.isArray(window.FLAGSHIP_IDS)) {
    window.FLAGSHIP_IDS = unique(window.FLAGSHIP_IDS
      .filter(function (id) { return removedAggregateBillIds.indexOf(id) === -1; })
      .map(function (id) { return idMap[id] || id; })
      .filter(function (id) { return Boolean(byId(id)); }));
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

  window.FINAL_EVIDENCE_NORMALIZATION = {
    mergedDuplicateGroups: 8,
    removedAggregateBillRecords: removedAggregateBillIds.slice(),
    billLevelRecords: bills.map(function (bill) { return bill.id; }),
    finalRecordCount: artifacts.length
  };
})();
