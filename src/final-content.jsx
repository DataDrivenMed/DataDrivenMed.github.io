/* global window, React */
(function () {
  const { useMemo, useState, useEffect } = React;

  function FinalEyebrow({ children, light }) {
    return (
      <div className="eyebrow" style={light ? { color: "var(--gold)" } : {}}>
        <span className="dot" style={light ? { background: "var(--gold)" } : {}}></span>
        {children}
      </div>
    );
  }

  function artifact(id) {
    return (window.ARTIFACTS || []).find(a => a && a.id === id);
  }

  function patchArtifact(id, updates) {
    const a = artifact(id);
    if (a) Object.assign(a, updates);
  }

  // Public wording is permanent-portfolio language, not application-gap language.
  patchArtifact("ev-sacscoc", {
    summary: "Provided extensive institutional data-response and analysis support to the designated SACSCOC institutional liaison, including complex institutional data requests and cross-campus support involving LSU Baton Rouge.",
    strategic: "Provides transferable institution-level accreditation experience distinct from professional program accreditation."
  });
  patchArtifact("ev-study-in-india", {
    summary: "Engaged with the Government of India's Study in India ecosystem to identify academic, educational, and research collaboration opportunities between LSU Health and Indian higher-education institutions.",
    strategic: "Extends the India collaboration pipeline beyond a single institutional partnership and supports systematic international opportunity development."
  });
  patchArtifact("ev-ai-system", {
    summary: "Nominated by LSUHSC New Orleans CIO leadership to participate in a cross-campus, cross-functional LSU System AI governance effort addressing institutional audit and governance needs.",
    strategic: "Adds enterprise-scale governance experience across campuses and functions."
  });
  patchArtifact("ev-cancer-ai-governance", {
    summary: "Supported Cancer Center AI governance around existing and planned initiatives, including governance structure, data provenance, consent and secondary-use considerations, model validation, human oversight, bias review, and alignment with broader institutional governance.",
    strategic: "Connects Cancer Center innovation planning with durable governance, validation, and institutional accountability."
  });

  const OVERVIEW_IDS = new Set([
    "execstrat-01", "ev-strat-closure-2014-2019", "ev-strategy-workgroups", "ev-allied-health-strategy-data", "ev-dean-staff-governance",
    "cqi-01", "ev-lcme-dci-selfstudy", "ev-acgme-air", "ev-acgme-predictive", "ev-acgme-cler-umcno", "ev-accme", "ev-sacscoc", "ev-cphe", "ev-lcme-steering",
    "an-02", "an-10", "ev-lifecycle-data-architecture", "ev-longitudinal-education-db", "ev-education-outcomes", "ev-market-charity",
    "gme-01", "gme-02", "gme-05", "ev-gme-contracts-enterprise", "ev-gme-lcmc-partner", "ev-gme-olol-partner", "ev-umcno-academic-advisory", "ev-la-hospital-enterprise-finance", "ev-state-gme-medicaid-dsh", "ev-ppp-hospital-transition", "ev-mcip-governance",
    "res-01", "res-04", "res-07", "ev-federal-ai-nci", "ev-nih-comparative", "ev-nih-mdphd", "ev-nsf-facilities", "ev-huron",
    "adm-01", "adm-02", "ev-mcat-transition", "ev-childrens-matching", "ev-dean-match",
    "ev-mec", "ev-healthworks", "ev-ldh-primary-care", "ev-lsbme-workforce", "ev-quality-forum", "ev-rural-predictive", "ev-ahec-lasearch", "ev-la-med-ed-workforce",
    "fac-01", "fac-02", "ev-faculty-lifecycle", "ev-faculty-salary", "ev-faculty-workforce", "ev-teaching-assessment",
    "sim-01", "ev-equip-creation", "ev-em-multiroom", "ev-cals-evaluation-framework", "ev-gnochc-dashboard", "ev-acs-aei",
    "ai-01", "ev-ai-student-policy", "ev-ai-gme-policy", "ev-ai-cross-school", "ev-ai-system", "ev-pan-oncology", "ev-cancer-ai-governance", "ai-amc-guide", "ev-ai-architecture-faculty",
    "ev-watermark", "ev-cals-space", "ev-clinical-relocation", "ev-program-space-tabulation",
    "ev-india-moe-host", "ev-study-in-india", "ev-asca-ai"
  ]);

  (window.ARTIFACTS || []).forEach(a => {
    if (!a) return;
    if (a.featured || OVERVIEW_IDS.has(a.id)) {
      a.portfolioOverview = true;
      if (!Array.isArray(a.statusLabels)) a.statusLabels = [];
      if (!a.statusLabels.some(s => s && s.label === "Portfolio Overview")) {
        a.statusLabels.push({ key: "overview", label: "Portfolio Overview" });
      }
    }
  });

  const EXECUTIVE_CASES = [
    {
      num: "01",
      title: "Strategic Planning & Institutional Effectiveness",
      domain: "Strategy · implementation · performance",
      challenge: "Convert strategic planning from a periodic document exercise into a measurable institutional operating cycle that links prior-plan learning, current priorities, implementation, and CQI.",
      role: "Owned the School of Medicine 2025–2030 strategic-planning process and independently conducted the formal 2014–2019 strategic-plan closure assessment; also advised another LSU Health school on its strategic-planning data framework.",
      actions: [
        "Built the project plan, environmental and institutional evidence base, stakeholder-engagement process, consultant coordination, and mission workgroup structure.",
        "Translated priorities into goals, measures, KPI architecture, executive reporting, implementation monitoring, and CQI linkage.",
        "Evaluated the prior plan across 9 goals, 19 priority areas, and 84 action items to preserve institutional learning across planning cycles."
      ],
      approach: "Strategy lifecycle management: baseline evidence → stakeholder interpretation → priority architecture → measurable objectives → implementation governance → annual monitoring → CQI feedback.",
      outcome: "The 2014–2019 closure assessment documented 94% overall plan success and created an evidence bridge into the next planning cycle. The 2025–2030 process established a structured framework for implementation and ongoing institutional performance review.",
      evidence: ["execstrat-01", "ev-strat-closure-2014-2019", "ev-strategy-workgroups", "ev-allied-health-strategy-data"]
    },
    {
      num: "02",
      title: "Accreditation & Continuous Readiness Across Academic Medicine",
      domain: "Accreditation · governance · CQI",
      challenge: "Maintain readiness across multiple accreditation systems while turning standards, evidence, and findings into durable institutional improvement rather than episodic compliance work.",
      role: "CQI Lead and major contributor to successful full LCME, ACGME, and ACCME accreditation/reaccreditation outcomes, with additional institution-level SACSCOC data-response support and emerging accreditation-policy analysis.",
      actions: [
        "Developed LCME DCI and self-study evidence, element monitoring, site-visit preparation, response materials, and continuous-readiness structures.",
        "Integrated ACGME Sponsoring Institution, program, survey, citation, and Annual Institutional Review evidence into leadership surveillance and improvement workflows.",
        "Supported ACCME governance, analytics, strategic planning, and CQI through long-standing CME committee work."
      ],
      approach: "Standards interpretation → evidence architecture → compliance monitoring → leadership review → corrective action → continuous readiness.",
      outcome: "Supported sustained accreditation readiness and successful full accreditation/reaccreditation outcomes while embedding accreditation evidence within broader institutional CQI and governance processes.",
      evidence: ["cqi-01", "ev-lcme-dci-selfstudy", "ev-acgme-air", "ev-accme", "ev-sacscoc", "ev-cphe", "ev-lcme-steering"]
    },
    {
      num: "03",
      title: "Institutional Data Governance & Admissions-to-Practice Intelligence",
      domain: "Institutional effectiveness · data architecture",
      challenge: "Connect fragmented academic and administrative data so leaders can evaluate the complete medical-education lifecycle rather than isolated annual snapshots.",
      role: "Designed institutional analytics spanning 90+ organizational data sources and created a longitudinal architecture linking admissions, UME, student outcomes, match, GME, physician practice, and workforce outcomes.",
      actions: [
        "Defined a lifecycle evidence model from applicant characteristics through downstream practice and workforce outcomes.",
        "Connected educational, accreditation, workforce, faculty, finance, research, and operational data into reusable decision-support structures.",
        "Built dashboards, longitudinal datasets, data definitions, cohort views, and executive reporting frameworks for CQI and strategy."
      ],
      approach: "Common definitions → longitudinal identifiers → governed source mapping → cohort analytics → mission/outcome measures → executive interpretation.",
      outcome: "Created an institutional evidence backbone capable of supporting accreditation, CQI, strategic planning, learner-outcome analysis, workforce evaluation, and mission accountability from one longitudinal architecture.",
      evidence: ["ev-lifecycle-data-architecture", "ev-longitudinal-education-db", "an-10", "an-02", "ev-education-outcomes"]
    },
    {
      num: "04",
      title: "Predictive Accreditation Risk & Proactive CQI",
      domain: "Predictive analytics · ACGME · risk",
      challenge: "Identify accreditation vulnerability early enough to intervene before a formal review, citation, or site visit converts a weak signal into an institutional problem.",
      role: "Developed predictive accreditation surveillance using longitudinal ACGME program, survey, citation, accreditation, and outcome data.",
      actions: [
        "Built models to identify programs at elevated future citation risk and estimate likely citation domains.",
        "Combined Annual Program Evaluation, resident/fellow survey, citation history, outcomes, and institutional review data.",
        "Translated model findings into targeted corrective-action, documentation, program-review, and site-readiness support."
      ],
      approach: "Risk signal detection → domain prediction → leadership review → targeted remediation → pre-review readiness.",
      outcome: "Enabled program and GME leadership to move accreditation work upstream from retrospective response toward preventive surveillance and targeted intervention.",
      evidence: ["ev-acgme-predictive", "ev-acgme-air", "ev-acgme-ape-surveys", "ev-acgme-corrective-action", "ev-acgme-cler-umcno"]
    },
    {
      num: "05",
      title: "Cross-Functional Governance & Matrix Leadership",
      domain: "Governance · alignment · execution",
      challenge: "Advance enterprise initiatives that cross schools, offices, hospitals, state agencies, and professional domains where authority is distributed and progress depends on shared evidence and trust.",
      role: "Led and supported complex institutional work through matrixed governance structures spanning the Dean's Office, strategic-planning workgroups, accreditation teams, MCIP, AI governance, and cross-school consultation.",
      actions: [
        "Created common data frameworks and decision structures that allowed different offices to work from the same evidence base.",
        "Facilitated alignment among academic, finance, contracts, IT, clinical, research, accreditation, and public-sector stakeholders.",
        "Used committee governance, workgroups, executive briefings, and structured follow-through to sustain initiatives across organizational boundaries."
      ],
      approach: "Shared problem definition → evidence normalization → stakeholder mapping → governance cadence → decision ownership → follow-through.",
      outcome: "Provided an operating method for moving cross-functional work forward even when no single office controlled all of the required data, resources, or decisions.",
      evidence: ["ev-dean-staff-governance", "ev-strategy-workgroups", "ev-mcip-governance", "ev-mcip-informatics-team", "ev-ai-system", "ev-allied-health-strategy-data"]
    },
    {
      num: "06",
      title: "Academic Health-System Integration & UMCNO Partnership Governance",
      domain: "Medical school · teaching hospital · enterprise partnership",
      challenge: "Coordinate education, accreditation, finance, contracts, and clinical-learning-environment issues across a medical school and a separately governed principal teaching hospital.",
      role: "Provided recurring analytical and technical support to the UMCNO Academic Advisory Committee and collaborated with UMCNO leadership on ACGME CLER readiness and other academic partnership needs.",
      actions: [
        "Supported joint leadership discussions involving medical education, GME operations and financing, affiliations, contracts, and training relationships.",
        "Provided CLER-related data and analytical readiness support linking Sponsoring Institution responsibilities with the clinical learning environment.",
        "Developed physician-training and alumni outcome evidence supporting the hospital-school academic relationship."
      ],
      approach: "Joint governance → shared evidence → academic/financial issue framing → partner-specific decision support → continuity monitoring.",
      outcome: "Strengthened the evidence available to hospital and School of Medicine leaders for decisions at the education-finance-contract interface.",
      evidence: ["ev-umcno-academic-advisory", "ev-acgme-cler-umcno", "ev-umc-alumni", "ev-gme-lcmc-partner", "ev-ppp-hospital-transition"]
    },
    {
      num: "07",
      title: "GME Finance, Contracts & Statewide Workforce Strategy",
      domain: "GME finance · contracts · health systems",
      challenge: "Manage GME strategy across Medicare and Medicaid financing, resident/fellow FTEs, caps, cost reports, affiliation agreements, program growth, and multiple health-system partners.",
      role: "Served as a technical and analytical resource for GME leadership, Contracts, finance, state Medicaid stakeholders, and external partners across Louisiana and beyond.",
      actions: [
        "Analyzed DGME/IME, Medicare caps, Medicaid and supplemental GME funding, DSH, cost reports, FTE attribution, and affiliation structures.",
        "Supported contract and partner analysis involving LCMC, Our Lady of the Lake, Ochsner, VA sites, and other training environments.",
        "Connected financing decisions with physician-workforce need, program capacity, training-site strategy, and statewide medical-education policy."
      ],
      approach: "Regulatory interpretation → financial modeling → training-site/FTE mapping → contract implications → workforce and program strategy.",
      outcome: "Provided decision architecture for high-stakes GME financing, affiliation, capacity, and partner questions while preserving the educational mission across a multi-site statewide network.",
      evidence: ["gme-01", "gme-02", "ev-gme-contracts-enterprise", "ev-gme-lcmc-partner", "ev-gme-olol-partner", "ev-gme-ochsner-partner", "ev-gme-va-partner", "ev-state-medicaid-gme-liaison", "ev-la-hospital-enterprise-finance", "ev-state-gme-medicaid-dsh"]
    },
    {
      num: "08",
      title: "Assessment, Surveys & Outcomes Intelligence",
      domain: "Assessment · surveys · organizational learning",
      challenge: "Turn multiple internal, external, regulatory, learner, faculty, and program data streams into coherent evidence for improvement rather than isolated reports.",
      role: "Developed and integrated educational, faculty, GME, CME, accreditation, and institutional assessment evidence for executive and program-level decision support.",
      actions: [
        "Analyzed educational outcomes including NBME, USMLE, course, clerkship, match, and longitudinal performance measures.",
        "Integrated ACGME survey and program-evaluation data with citation and outcome surveillance.",
        "Connected faculty, CME, accreditation, and institutional assessment data to CQI, planning, and governance conversations."
      ],
      approach: "Assessment source inventory → denominator and definition control → trend/benchmark analysis → risk and opportunity interpretation → action tracking.",
      outcome: "Created repeatable evidence pathways for leaders to connect surveys and outcomes with program review, accreditation, planning, and continuous improvement.",
      evidence: ["ev-education-outcomes", "ev-cme-activity", "ev-faculty-lifecycle", "ev-acgme-ape-surveys", "an-02", "an-10"]
    },
    {
      num: "09",
      title: "Enterprise AI Strategy, Governance & Responsible Adoption",
      domain: "AI governance · policy · digital transformation",
      challenge: "Move AI adoption beyond tool enthusiasm by defining policy, risk, governance, validation, human oversight, education, and procurement expectations appropriate for academic health sciences.",
      role: "Developed School of Medicine student and GME AI policy, contributed to broader institutional policy development, supported cross-school policy transfer, and participated in System-level AI governance work.",
      actions: [
        "Created policy and governance frameworks for student, trainee, faculty, administrative, and clinical-learning contexts.",
        "Built tool-vetting, enterprise implementation, hiring, clinical evaluation, and faculty-development resources.",
        "Supported Cancer Center AI governance around provenance, validation, consent, bias, data stewardship, human oversight, and institutional accountability."
      ],
      approach: "Use-case definition → data/risk classification → governance requirements → validation → human oversight → education → monitoring and accountability.",
      outcome: "Established a portfolio of practical governance infrastructure that helps academic leaders distinguish responsible adoption from unsupported deployment.",
      evidence: ["ai-01", "ev-ai-student-policy", "ev-ai-gme-policy", "ev-ai-cross-school", "ev-ai-system", "ev-cancer-ai-governance", "ai-amc-guide", "ev-ai-architecture-faculty"]
    },
    {
      num: "10",
      title: "Dean's Office Special Projects & Executive Decision Support",
      domain: "Executive analytics · special projects",
      challenge: "Provide fast, defensible decision support for institutional questions that do not fit neatly inside one administrative office or data system.",
      role: "Supported Dean- and senior-leadership priorities across strategy, accreditation, research growth, health-system finance, facilities, technology, policy, and emerging federal initiatives.",
      actions: [
        "Built leadership briefs, executive analytics, environmental scans, scenario models, market analyses, and evidence frameworks for time-sensitive institutional questions.",
        "Translated external policy and regulatory developments into concrete institutional implications and decision points.",
        "Connected data across offices when decisions required simultaneous academic, financial, operational, regulatory, and strategic interpretation."
      ],
      approach: "Clarify the executive question → assemble minimum defensible evidence → model alternatives → surface risk and tradeoffs → deliver a decision-ready product.",
      outcome: "Created a repeatable executive decision-support function for high-impact projects spanning the School of Medicine, Health Sciences Center, health-system partners, state stakeholders, and research enterprise.",
      evidence: ["ev-federal-ai-nci", "res-01", "ev-market-charity", "ev-cals-space", "ev-watermark", "ev-india-moe-host", "ev-umcno-academic-advisory"]
    },
    {
      num: "11",
      title: "Program Creation & Quality Improvement Infrastructure",
      domain: "Program development · QI · implementation",
      challenge: "Build quality-improvement infrastructure that has governance, measures, data collection, accountability, and educational value rather than relying on one-time projects.",
      role: "Helped create the EQuIP GME quality-improvement infrastructure with the Associate Dean for Academic Affairs and contributed to MCIP operations, steering, informatics, and GME quality strategy.",
      actions: [
        "Designed EQuIP structure, framework, metrics, data collection, priority setting, and continuous monitoring.",
        "Supported MCIP governance and informatics architecture connecting Medicaid incentives, quality measures, hospitals, and GME.",
        "Helped develop trainee clinical reporting and a resident/fellow clinical-outcomes dashboard through funded quality initiatives."
      ],
      approach: "Program charter → governance → measures → data capture → feedback → improvement cycle → dissemination.",
      outcome: "Helped establish durable QI infrastructure that linked trainees, clinical outcomes, hospital quality, state incentives, and institutional learning.",
      evidence: ["ev-equip-creation", "ev-mcip-governance", "ev-mcip-gme", "ev-gnochc-dashboard", "ev-gme-clinical-report-cards"]
    },
    {
      num: "12",
      title: "Admissions, Medical Education & Learner-Outcome Strategy",
      domain: "Admissions · UME · student outcomes",
      challenge: "Connect student selection, educational performance, advising, match outcomes, and downstream practice to support mission-aligned medical education decisions.",
      role: "Developed admissions predictive analyses, technology evaluation, MCAT transition work, longitudinal student-outcome reporting, match analytics, and rotation-optimization tools.",
      actions: [
        "Evaluated admissions variables and predictive relationships with academic outcomes.",
        "Supported admissions technology/vendor scoping and workflow requirements.",
        "Analyzed NBME/USMLE, match, specialty/geography, advising, research, and clinical rotation data across the student lifecycle."
      ],
      approach: "Selection evidence → educational outcomes → progression and advising → match → GME/practice linkage → mission evaluation.",
      outcome: "Built an analytical foundation for connecting admissions decisions with downstream student and workforce outcomes rather than evaluating each stage independently.",
      evidence: ["adm-01", "adm-02", "ev-mcat-transition", "ev-mcat-preclinical", "ev-childrens-matching", "ev-dean-match", "ev-lifecycle-data-architecture"]
    },
    {
      num: "13",
      title: "Research, Cancer & Innovation Strategy",
      domain: "Research growth · NCI readiness · federal strategy",
      challenge: "Translate research-enterprise data, federal priorities, funding patterns, and emerging AI expectations into institutional growth strategy.",
      role: "Developed NIH portfolio intelligence, peer benchmarking, clustering and growth analyses; supported Cancer Center AI governance/NCI readiness; and contributed institutional analytics to federal grant and infrastructure work.",
      actions: [
        "Applied federal funding data, clustering, benchmarking, and portfolio analysis to identify research strengths and growth opportunities.",
        "Translated federal AI science priorities into cancer-data governance, validation, provenance, regulatory, and infrastructure implications.",
        "Supported NIH MD/PhD, NSF EPSCoR/CREST, Huron research strategy, and institutional research-infrastructure reporting."
      ],
      approach: "Portfolio intelligence → peer position → growth opportunity → infrastructure requirements → governance and funding alignment.",
      outcome: "Provided research leadership with a more integrated view of funding opportunity, institutional capacity, Cancer Center readiness, and federal strategic direction.",
      evidence: ["res-01", "res-04", "ev-nih-comparative", "ev-nih-mdphd", "ev-nsf-facilities", "ev-huron", "ev-federal-ai-nci", "ev-cancer-ai-governance"]
    },
    {
      num: "14",
      title: "Louisiana Health Workforce, Rural Health & Public Policy",
      domain: "State strategy · workforce · rural health",
      challenge: "Provide defensible workforce and medical-education evidence for a state with persistent geographic, specialty, rural, underserved, and financing challenges.",
      role: "Served on the Louisiana State Medical Education Commission, supported the Louisiana Healthworks Commission, consulted with the state Bureau of Primary Care and Rural Health, and developed workforce/policy analyses for state and institutional leaders.",
      actions: [
        "Analyzed physician supply, specialty, geography, HPSA/MUA status, licensure, practice patterns, GME capacity, and training outcomes.",
        "Produced data and policy support for legislative resolutions, state reports, workforce initiatives, rural programs, AHEC, FQHC, and loan-repayment work.",
        "Connected education pipeline data with rural/underserved practice, Medicaid policy, specialty shortages, and statewide workforce strategy."
      ],
      approach: "Workforce data infrastructure → geographic/specialty analysis → training pipeline → policy translation → state and institutional decision support.",
      outcome: "Created a longitudinal public-policy and workforce evidence base spanning state commissions, LDH, legislative stakeholders, academic institutions, and community partners.",
      evidence: ["ev-mec", "ev-healthworks", "ev-ldh-primary-care", "ev-lsbme-workforce", "ev-quality-forum", "ev-rural-predictive", "ev-ahec-lasearch", "ev-la-med-ed-workforce"]
    },
    {
      num: "15",
      title: "Faculty Affairs, Workforce & Institutional Culture",
      domain: "Faculty lifecycle · evaluation · culture",
      challenge: "Build a coherent evidence base for faculty development, advancement, compensation, retention, climate, and institutional culture across a large medical school.",
      role: "Developed faculty evaluation and workforce analytics spanning recruitment, retention, rank, tenure, promotion, salary, mentoring, climate, development, and scholarly activity.",
      actions: [
        "Analyzed faculty lifecycle patterns including recruitment, attrition, retention, rank, time-in-rank, tenure, demographics, and leadership representation.",
        "Supported promotion/salary/equity analysis and faculty-development evaluation across departments and centers.",
        "Contributed teaching-assessment and educator-scholarship infrastructure supporting recognition and advancement."
      ],
      approach: "Lifecycle metrics → internal benchmarking → equity/context review → program evaluation → leadership interpretation.",
      outcome: "Provided Faculty Affairs and senior leadership with integrated evidence for understanding faculty workforce patterns, development needs, advancement, and institutional culture.",
      evidence: ["fac-01", "fac-02", "ev-faculty-lifecycle", "ev-faculty-salary", "ev-faculty-workforce", "ev-teaching-assessment", "ev-academy-education-scholarship"]
    },
    {
      num: "16",
      title: "Enterprise Technology, Procurement & Operational Infrastructure",
      domain: "Technology · facilities · institutional operations",
      challenge: "Evaluate major institutional technology and infrastructure decisions through requirements, risk, governance, space, operational, and resource lenses.",
      role: "Led initial Watermark Faculty Success procurement due diligence and supported major facilities, space-requirement, relocation, CALS, and resource-planning initiatives.",
      actions: [
        "Led functional requirements, security/compliance review, vendor risk assessment, contract negotiation, and legal-review workflow for Watermark Faculty Success.",
        "Worked with senior School of Medicine and facilities leadership on faculty/program space requirements and clinical-department relocation readiness.",
        "Supported CALS infrastructure evaluation, departmental resource tabulation, and facilities-related strategic analysis."
      ],
      approach: "Requirements → risk/compliance → stakeholder review → financial/contract implications → operational readiness → decision support.",
      outcome: "Demonstrated disciplined institutional due diligence across both digital systems and physical infrastructure, including situations where evaluation informed a decision not to proceed with a purchase.",
      evidence: ["ev-watermark", "ev-cals-space", "ev-clinical-relocation", "ev-program-space-tabulation", "ev-cals-10m", "ev-department-funding-verification"]
    },
    {
      num: "17",
      title: "International Academic Partnership Development",
      domain: "Internationalization · government engagement · research collaboration",
      challenge: "Move international interest from introductory conversations into structured, institutionally relevant academic and research collaboration opportunities.",
      role: "Served as LSU Health point of contact and collaboration lead with Indian Ministry of Education counterparts, hosted Ministry representatives on campus, engaged the Study in India ecosystem, and helped develop the LSUHSC–IIT Madras collaboration and MoU structure.",
      actions: [
        "Coordinated campus engagement between Ministry representatives and LSU Health stakeholders.",
        "Identified collaboration opportunities across Indian higher-education institutions and translated them into priority areas for institutional discussion.",
        "Helped structure the IIT Madras relationship around genomics, machine learning, digital health, faculty exchange, and emerging Cancer Center priorities."
      ],
      approach: "Government/partner engagement → opportunity scan → institutional fit → stakeholder alignment → collaboration architecture → research priority development.",
      outcome: "Built a structured international collaboration pathway connecting government engagement, higher-education opportunity development, and a concrete research partnership agenda.",
      evidence: ["ev-india-moe-host", "ev-study-in-india", "res-07", "ev-serf-collaboration", "ev-debriefing"]
    },
    {
      num: "18",
      title: "Simulation, Patient Safety & Evaluation Science",
      domain: "Simulation · patient safety · research methods",
      challenge: "Evaluate whether simulation-based education improves teamwork, preparedness, learner performance, clinical behaviors, and patient-safety capability—and design the measurement systems to find out.",
      role: "Worked across AHRQ-funded operating-room teamwork research, Emergency Medicine disaster and multiroom simulation, ACS education-institute accreditation, CALS evaluation, and international debriefing research collaborations.",
      actions: [
        "Supported study design, data analysis, program evaluation, and dissemination for simulation-based teamwork and patient-safety initiatives.",
        "Developed Emergency Medicine simulation research and evaluation plans and consulted on multiroom simulation study design with EM faculty and simulation leadership.",
        "Contributed to debriefing-methodology research, ACS simulation accreditation, CALS longitudinal evaluation, and clinical quality dashboards."
      ],
      approach: "Training objective → performance construct → study design → measurement → debriefing/feedback → longitudinal evaluation → dissemination.",
      outcome: "Built a sustained evaluation portfolio connecting simulation education with patient safety, teamwork, disaster preparedness, quality improvement, and scholarly dissemination.",
      evidence: ["sim-01", "ev-em-multiroom", "ev-em-disaster-sim", "ev-debriefing", "ev-acs-aei", "ev-cals-evaluation-framework", "ev-medtronic", "ev-gnochc-dashboard"]
    }
  ];

  window.FINAL_EXECUTIVE_CASES = EXECUTIVE_CASES;

  function evidenceFor(c) {
    return c.evidence.map(artifact).filter(Boolean);
  }

  function CaseCard({ c, openArtifact, compact }) {
    const [open, setOpen] = useState(false);
    const ev = evidenceFor(c);
    return (
      <article className="feat">
        <div className="feat-cover" style={{ background: "var(--dark-2)", minHeight: compact ? 72 : 92, display: "flex", alignItems: "flex-end", padding: "14px 16px" }}>
          <span style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: 11, letterSpacing: ".12em" }}>CASE {c.num} · {c.domain}</span>
        </div>
        <div className="feat-body">
          <h3>{c.title}</h3>
          <p className="feat-sum">{c.challenge}</p>
          {!compact && (
            <>
              <div className="feat-meta">
                <span>{ev.length} supporting evidence records</span>
                <button className="quiet-link" style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0 }} onClick={() => setOpen(!open)}>
                  {open ? "Close case" : "Read case"} <window.ArrowRight size={11} />
                </button>
              </div>
              {open && (
                <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                  {[["Role", c.role], ["Approach", c.approach], ["Decision / outcome supported", c.outcome]].map(([h, d]) => (
                    <div key={h} style={{ marginBottom: 16 }}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>{h}</div>
                      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65 }}>{d}</p>
                    </div>
                  ))}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>What was built / done</div>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.65 }}>
                      {c.actions.map(x => <li key={x} style={{ marginBottom: 5 }}>{x}</li>)}
                    </ul>
                  </div>
                  {ev.length > 0 && (
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Supporting evidence</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                        {ev.map(a => (
                          <button key={a.id} className="ev-flag" onClick={() => openArtifact && openArtifact(a)}>{a.title}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {compact && <div className="feat-meta"><span>{ev.length} evidence records</span><span className="read">Case study <window.ArrowRight size={11} /></span></div>}
        </div>
      </article>
    );
  }

  function FinalHomePage({ openArtifact }) {
    const artifactCount = (window.ARTIFACTS || []).length;
    const heroStats = [
      { num: "18", lbl: "Executive case studies spanning the academic health sciences operating model" },
      { num: "90+", lbl: "Integrated institutional data sources across education, finance, research, workforce, and operations" },
      { num: "70+", lbl: "Residency and fellowship programs with more than 1,000 GME FTEs" },
      { num: "India", lbl: "Former international swimmer who represented India; seven-year Karnataka State Swim Team captain" }
    ];

    return (
      <main className="page-enter">
        <section className="hero-dark">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="hero-rule"></div>
                <FinalEyebrow light>Academic Health Sciences Strategy &amp; Institutional Effectiveness</FinalEyebrow>
                <h1 style={{ marginTop: 20 }}>
                  Academic health sciences<br />strategy and institutional<br /><em>effectiveness, documented as evidence.</em>
                </h1>
                <p className="hero-lead-dark">
                  A career-spanning evidence portfolio across strategic planning, institutional effectiveness, accreditation and CQI, data governance, academic health-system strategy, GME finance and contracts, medical education, faculty affairs, research growth, Louisiana workforce policy, AI governance, simulation, and executive decision support. The evidence register contains {artifactCount} indexed records.
                </p>
                <p className="hero-lead-dark hero-lead-secondary">
                  The through-line is institutional operating capacity: connect fragmented evidence, clarify risk and priorities, align stakeholders, build measurable systems, and turn complex academic-health-sciences questions into governed execution.
                </p>
                <div className="hero-actions" style={{ marginTop: 36 }}>
                  <window.Link to="/case-studies" className="btn gold">Executive case studies <window.ArrowRight size={13} /></window.Link>
                  <window.Link to="/library" className="btn outline">Evidence library</window.Link>
                  <window.Link to="/career-governance" className="btn outline">Career &amp; governance</window.Link>
                </div>
              </div>
              <window.ConnectCard compact />
            </div>
            <div className="hero-meta-bar">
              <div className="hero-meta-cell"><span className="lbl">Positioning</span><span className="val">Academic health sciences strategy and institutional effectiveness leader</span></div>
              <div className="hero-meta-cell"><span className="lbl">Institution</span><span className="val">LSU Health New Orleans · School of Medicine</span></div>
              <div className="hero-meta-cell"><span className="lbl">Operating reach</span><span className="val">School · HSC · LSU System · health systems · state · federal · international partners</span></div>
              <div className="hero-meta-cell"><span className="lbl">Evidence architecture</span><span className="val">{artifactCount} records · 12 capability areas · 18 executive cases</span></div>
            </div>
          </div>
        </section>

        <div className="proof-band"><div className="container"><div className="proof-strip">
          {heroStats.map((s, i) => <div className="proof-cell" key={i}><span className="proof-num">{s.num}</span><span className="proof-lbl">{s.lbl}</span></div>)}
        </div></div></div>

        <div className="exec-band"><div className="container"><div className="exec-band-inner">
          <div><div className="exec-band-label">§ Executive Value Proposition</div><h2>Strategy, evidence, governance,<br/>and execution in one<br/>institutional operating view.</h2></div>
          <div className="exec-band-copy">
            <p>This portfolio shows a broad academic-health-sciences operating model: strategic planning and implementation, accreditation readiness, institutional effectiveness, data governance, health-system integration, workforce finance, research strategy, responsible AI, public policy, and high-impact special projects.</p>
            <div className="exec-pills"><span>Institutional effectiveness</span><span>Executive decision support</span><span>Cross-functional governance</span><span>Continuous readiness</span><span>Strategy implementation</span></div>
          </div>
        </div></div></div>
      </main>
    );
  }

  function FinalAboutPage() {
    const competencies = [
      ["Strategic planning & institutional effectiveness", "End-to-end planning lifecycle, prior-plan closure, environmental evidence, KPI architecture, implementation monitoring, and CQI integration."],
      ["Accreditation & continuous readiness", "LCME, ACGME, ACCME, institutional accreditation data support, self-study evidence, site readiness, predictive risk surveillance, and corrective-action analytics."],
      ["Data governance & decision intelligence", "Longitudinal data architecture, 90+ institutional sources, dashboards, predictive models, definitions, cohort analytics, and executive reporting."],
      ["Academic health-system strategy", "GME finance, CMS/Medicaid policy, contracts, affiliations, CLER, partner governance, workforce, and multi-site educational operations."],
      ["Cross-functional matrix leadership", "Strategy, accreditation, MCIP, AI governance, research, facilities, and cross-school initiatives advanced through shared evidence and distributed governance."],
      ["Research, cancer & innovation strategy", "NIH portfolio intelligence, NCI readiness, federal AI science priorities, grant support, research infrastructure, and international collaboration."],
      ["AI & digital governance", "Student and GME policy, cross-school consultation, tool vetting, enterprise implementation frameworks, clinical AI evaluation, and System-level governance participation."],
      ["Public policy & workforce strategy", "Louisiana commissions, LDH rural-health consultancy, HPSA/MUA, physician workforce, legislative analysis, AHEC/FQHC work, and statewide GME strategy."]
    ];
    return (
      <main className="page-enter">
        <div className="about-dark-header"><div className="container"><div className="about-header-inner">
          <div className="about-portrait"><span className="initials">R P</span></div>
          <div className="about-hero-copy">
            <FinalEyebrow light>Executive Profile</FinalEyebrow>
            <h1>Ram Paragi: <em>academic health sciences strategy and institutional effectiveness leader</em>.</h1>
            <div className="about-meta"><span>LSU Health New Orleans</span><span>School of Medicine</span><span>New Orleans · LA</span></div>
            <p className="about-bio">Ram works across the institutional systems that determine whether an academic health sciences organization can execute: strategy, accreditation, CQI, data governance, medical education, GME finance, health-system partnerships, faculty affairs, workforce policy, research growth, and responsible AI. His career progression moves from clinical medicine and public health to medical education research, accreditation, institutional effectiveness, statewide workforce strategy, research intelligence, and enterprise governance. The leadership model is matrixed and evidence-centered: define the institutional problem, connect stakeholders and data, establish the operating framework, and create a durable mechanism for execution and learning. A distinctive parallel thread is a former international swimming career representing India, followed by sustained work in swimming science, analytics, and public scholarship.</p>
            <div className="role-strip"><span className="pill">Institutional effectiveness</span><span className="pill">Strategic planning</span><span className="pill">Accreditation &amp; CQI</span><span className="pill">Data governance</span><span className="pill">Academic health systems</span><span className="pill">GME finance</span><span className="pill">Research strategy</span><span className="pill">AI governance</span><span className="pill">Public policy</span><span className="pill">International swimmer · India</span></div>
          </div>
        </div></div></div>
        <div className="competencies-section"><div className="container"><div className="competencies-inner">
          <div className="comp-label">§ Leadership<br/>Competencies</div>
          <div><p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.66, marginBottom: 32, maxWidth: "62ch" }}>Eight leadership capabilities, each anchored in the evidence library and expressed as institutional operating capacity rather than aspirational positioning.</p><div className="competencies">
            {competencies.map(([h, d]) => <div className="item" key={h}><div className="h">{h}</div><div className="d">{d}</div></div>)}
          </div></div>
        </div></div></div>
      </main>
    );
  }

  function finalSkillTone(skill) {
    const s = String(skill || "").toLowerCase();
    if (s.includes("strategic") || s.includes("executive") || s.includes("stakeholder") || s.includes("matrix")) return "tone-strategy";
    if (s.includes("lcme") || s.includes("acgme") || s.includes("quality") || s.includes("accredit")) return "tone-governance";
    if (s.includes("ai") || s.includes("policy") || s.includes("regulatory") || s.includes("compliance")) return "tone-ai";
    if (s.includes("tableau") || s.includes("python") || s.includes("predictive") || s.includes("decision") || s.includes("data") || s.includes("analytics")) return "tone-analytics";
    if (s.includes("cms") || s.includes("medicare") || s.includes("cost") || s.includes("finance")) return "tone-finance";
    if (s.includes("nih") || s.includes("grants") || s.includes("research")) return "tone-research";
    if (s.includes("admissions") || s.includes("usmle") || s.includes("nbme") || s.includes("aamc")) return "tone-education";
    if (s.includes("legislative") || s.includes("rural") || s.includes("workforce")) return "tone-policy";
    if (s.includes("faculty") || s.includes("mentoring") || s.includes("climate")) return "tone-culture";
    if (s.includes("ahrq") || s.includes("simulation") || s.includes("patient safety")) return "tone-quality";
    if (s.includes("sports") || s.includes("international")) return "tone-thought";
    return "tone-neutral";
  }

  function FinalCapabilitiesPage() {
    useEffect(() => {
      const id = window.location.hash.split("#")[2];
      if (id) { const el = document.getElementById("cap-" + id); if (el) el.scrollIntoView({ block: "start", behavior: "instant" }); }
    }, []);
    return (
      <main className="page-enter">
        <div className="cap-dark-header"><div className="container"><FinalEyebrow light>Capability Map</FinalEyebrow><h1>Twelve domains of<br/>academic health sciences capability.</h1><p>Each domain represents a documented body of work. The breadth is intentional: institutional strategy in academic health sciences crosses accreditation, analytics, AI governance, GME finance, research, medical education, workforce policy, faculty affairs, simulation, and professional scholarship.</p></div></div>
        <div className="cap-list"><div className="container">
          {window.CAPABILITIES.map(c => <a key={c.id} id={"cap-" + c.id} href={"#/library?cat=" + c.id} className="cap-row"><div className="num">{c.num}</div><div><h3>{c.title}</h3><div className="skills">{c.skills.slice(0,5).map(s => <span key={s} className={`tag ${finalSkillTone(s)}`}>{s}</span>)}</div></div><div className="desc">{c.short}</div><div className="right"><span className="go-label">View evidence</span><window.ArrowRight size={15} /></div></a>)}
        </div></div>
      </main>
    );
  }

  function recordType(a) {
    const id = String(a.id || "");
    const text = [a.title, a.role, a.summary].join(" ").toLowerCase();
    if (id.startsWith("ev-pub-") || id.startsWith("ev-poster-") || id.startsWith("ev-oral-") || id.startsWith("ev-reviewer-") || id.startsWith("ev-mec-report-") || text.includes("publication") || text.includes("poster presentation") || text.includes("oral presentation") || text.includes("manuscript reviewer")) return "scholarship";
    if (id.startsWith("ev-credential-") || id.startsWith("ev-award-") || text.includes("degree") || text.includes("certification") || text.includes("award") || text.includes("honor")) return "credentials";
    if (text.includes("grant") || text.includes("funded") || text.includes("co-principal") || text.includes("co-pi") || id.includes("wisewoman") || id.includes("adapt-pol") || id.includes("steps") || id.includes("medtronic") || id.includes("nih-mdphd") || id.includes("nsf")) return "funded";
    if (text.includes("committee") || text.includes("commission") || text.includes("governance") || text.includes("steering") || text.includes("advisory") || text.includes("member") || text.includes("professional service") || text.includes("doping control")) return "governance";
    if (a.liveUrl || text.includes("public guide") || text.includes("interactive") || text.includes("dashboard") || text.includes("field guide") || text.includes("resource hub")) return "public";
    return "projects";
  }

  function FinalLibraryPage({ openArtifact }) {
    const initial = useMemo(() => {
      const qstr = window.location.hash.split("?")[1] || "";
      const params = new URLSearchParams(qstr);
      return { cat: params.get("cat") || "all", aud: params.get("aud") || "all", featured: params.get("featured") === "1", depth: params.get("cat") ? "all" : "overview" };
    }, []);
    const [cat, setCat] = useState(initial.cat);
    const [aud, setAud] = useState(initial.aud);
    const [featuredOnly, setFeaturedOnly] = useState(initial.featured);
    const [confidOnly, setConfidOnly] = useState(false);
    const [q, setQ] = useState("");
    const [view, setView] = useState("index");
    const [depth, setDepth] = useState(initial.depth);
    const all = window.ARTIFACTS || [];
    const audiences = useMemo(() => Array.from(new Set(all.flatMap(a => a.audience || []))).sort(), [all.length]);

    const depthMatch = a => {
      if (depth === "all") return true;
      if (depth === "overview") return !!a.portfolioOverview;
      return recordType(a) === depth;
    };

    const filtered = useMemo(() => all.filter(a => {
      if (!depthMatch(a)) return false;
      if (cat !== "all" && a.category !== cat) return false;
      if (aud !== "all" && !(a.audience || []).includes(aud)) return false;
      if (featuredOnly && !a.featured) return false;
      if (confidOnly && !a.confidential) return false;
      if (q) {
        const needle = q.toLowerCase();
        const hay = [a.title, a.summary, a.strategic, a.role].concat(a.tags || [], a.skills || [], a.audience || []).join(" ").toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    }), [cat, aud, featuredOnly, confidOnly, q, depth, all.length]);

    const grouped = useMemo(() => {
      const g = new Map();
      filtered.forEach(a => { const arr = g.get(a.category) || []; arr.push(a); g.set(a.category, arr); });
      return g;
    }, [filtered]);

    const codeMap = useMemo(() => {
      const m = new Map();
      window.CAPABILITIES.forEach(c => all.filter(a => a.category === c.id).forEach((a, i) => m.set(a.id, c.num + "." + String(i + 1).padStart(2, "0"))));
      return m;
    }, [all.length]);

    const depthCounts = useMemo(() => ({
      overview: all.filter(a => a.portfolioOverview).length,
      projects: all.filter(a => recordType(a) === "projects").length,
      governance: all.filter(a => recordType(a) === "governance").length,
      scholarship: all.filter(a => recordType(a) === "scholarship").length,
      funded: all.filter(a => recordType(a) === "funded").length,
      credentials: all.filter(a => recordType(a) === "credentials").length,
      public: all.filter(a => recordType(a) === "public").length
    }), [all.length]);

    const reset = () => { setCat("all"); setAud("all"); setFeaturedOnly(false); setConfidOnly(false); setQ(""); setDepth("overview"); };

    return (
      <main className="page-enter">
        <div className="lib-dark-header"><div className="container"><FinalEyebrow light>Evidence Library · {all.length} records indexed</FinalEyebrow><h1>The evidence<br/>library.</h1><p>A comprehensive career evidence register across twelve capability areas. The default Portfolio Overview keeps the first read focused; the Evidence Depth filter opens the granular record underneath it.</p></div></div>
        <div className="lib-body"><div className="container">
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", marginBottom: 18, border: "1px solid var(--line)", background: "var(--paper-2)" }}>
            <span style={{ color: "var(--gold)", fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.5 }}>ⓘ</span>
            <div style={{ fontSize: 12, lineHeight: 1.6, color: "var(--muted)" }}><strong style={{ color: "var(--ink)" }}>Portfolio Overview is the starting view.</strong> Use the <strong>Evidence Depth</strong> dropdown to reveal detailed projects and initiatives, governance and service, scholarship and presentations, funded work, credentials and recognition, public tools, or the complete record.</div>
          </div>
          <div className="ev-search"><window.SearchIcon size={17} /><input placeholder="Search — strategic planning, LCME, GME caps, Healthworks, NIH, AI governance, facilities…" value={q} onChange={e => { setQ(e.target.value); if (e.target.value && depth === "overview") setDepth("all"); }} />{q && <button className="ev-clear" onClick={() => setQ("")}>×</button>}</div>
          <div className="ev-toolbar"><div className="ev-tools-left">
            <select className="ev-select" value={depth} onChange={e => setDepth(e.target.value)} aria-label="Evidence depth">
              <option value="overview">Evidence Depth · Portfolio Overview · {depthCounts.overview}</option>
              <option value="all">Evidence Depth · Complete record · {all.length}</option>
              <option value="projects">Projects & initiatives · {depthCounts.projects}</option>
              <option value="governance">Governance & service · {depthCounts.governance}</option>
              <option value="scholarship">Scholarship & presentations · {depthCounts.scholarship}</option>
              <option value="funded">Grants & funded work · {depthCounts.funded}</option>
              <option value="credentials">Credentials & recognition · {depthCounts.credentials}</option>
              <option value="public">Public tools & resources · {depthCounts.public}</option>
            </select>
            <select className="ev-select" value={cat} onChange={e => setCat(e.target.value)}><option value="all">All capabilities · {all.length}</option>{window.CAPABILITIES.map(c => { const n = all.filter(a => a.category === c.id).length; return <option key={c.id} value={c.id}>{c.num} · {c.title} · {n}</option>; })}</select>
            <select className="ev-select" value={aud} onChange={e => setAud(e.target.value)}><option value="all">All audiences</option>{audiences.map(a => { const n = all.filter(x => (x.audience || []).includes(a)).length; return n ? <option key={a} value={a}>{a} · {n}</option> : null; })}</select>
            <button className={"ev-flag " + (featuredOnly ? "active" : "")} onClick={() => setFeaturedOnly(!featuredOnly)}><span className="dot featured"></span> Featured</button>
            <button className={"ev-flag " + (confidOnly ? "active" : "")} onClick={() => setConfidOnly(!confidOnly)}><span className="dot confid"></span> Confidential</button>
            {(cat !== "all" || aud !== "all" || featuredOnly || confidOnly || q || depth !== "overview") && <button className="ev-reset" onClick={reset}>Reset</button>}
          </div><div className="ev-tools-right"><span className="ev-count">{filtered.length} / {all.length}</span><div className="ev-view"><button className={view === "index" ? "active" : ""} onClick={() => setView("index")}>Index</button><button className={view === "cards" ? "active" : ""} onClick={() => setView("cards")}>Cards</button></div></div></div>
          {filtered.length === 0 ? <div className="empty" style={{ marginTop: 48 }}>No evidence records match these filters. Try resetting or broadening the search.</div> : view === "cards" ? <div className="lib-grid">{filtered.map(a => <window.ArtifactCard key={a.id} a={a} onOpen={openArtifact} />)}</div> : <div className="ev-index">
            <div className="ev-row ev-head"><div className="ev-c-code">Code</div><div className="ev-c-title">Title</div><div className="ev-c-skills">Skills Demonstrated</div><div className="ev-c-aud">Audience</div><div className="ev-c-flags">Status</div></div>
            {window.CAPABILITIES.map(c => { const arts = grouped.get(c.id); if (!arts || !arts.length) return null; return <React.Fragment key={c.id}><div className="ev-group"><span className="ev-g-num">{c.num}</span><span className="ev-g-title">{c.title}</span><span className="ev-g-count">{arts.length}</span></div>{arts.map(a => <button key={a.id} className="ev-row ev-item" onClick={() => openArtifact(a)}><div className="ev-c-code">{codeMap.get(a.id)}</div><div className="ev-c-title"><span className="t">{a.title}</span><span className="s">{a.summary}</span></div><div className="ev-c-skills">{(a.skills || []).slice(0,3).map(s => <span key={s} className="tag">{s}</span>)}{(a.skills || []).length > 3 && <span className="tag-more">+{a.skills.length - 3}</span>}</div><div className="ev-c-aud">{(a.audience || []).slice(0,2).join(" · ")}</div><div className="ev-c-flags">{(a.statusLabels || []).slice(0,2).map(s => <span key={s.key + s.label} className={"status-chip tiny " + s.key}>{s.label}</span>)}<window.ArrowRight size={12} /></div></button>)}</React.Fragment>; })}
          </div>}
        </div></div>
      </main>
    );
  }

  function FinalCaseStudiesPage({ openArtifact }) {
    return (
      <main className="page-enter">
        <div className="casestudies-dark"><div className="container"><FinalEyebrow light>Executive case studies · 18</FinalEyebrow><h1>Institutional problems,<br/>operating approach, and evidence.</h1><p>Eighteen structured cases synthesize the portfolio without narrowing it to one job description. Each case shows the institutional challenge, role, work performed, operating approach, decision or outcome supported, and the evidence records underneath it.</p></div></div>
        <div className="casestudies-body"><div className="container"><div className="featured-grid">{EXECUTIVE_CASES.map(c => <CaseCard key={c.num} c={c} openArtifact={openArtifact} />)}</div></div></div>
      </main>
    );
  }

  const BaseCareerGovernancePage = window.CareerGovernancePage;
  function FinalCareerGovernancePage() {
    const additions = [
      ["CALS faculty & program space planning", "Worked with senior School of Medicine and facilities leadership to define faculty/program space requirements and translate operating needs into structured facilities planning."],
      ["India Ministry of Education engagement", "Served as institutional point of contact and collaboration lead, hosted Ministry representatives on campus, and coordinated early LSU Health–India higher-education partnership discussions."],
      ["Study in India opportunity development", "Engaged the Government of India internationalization ecosystem to surface academic, educational, and research collaboration opportunities with Indian higher-education institutions."],
      ["Emergency Medicine multiroom simulation", "Provided study-design, methodological, and data-analysis consultation with Emergency Medicine faculty and simulation leadership."],
      ["EQuIP infrastructure creation", "Helped create the GME EQuIP structure with the Associate Dean for Academic Affairs, including framework, metrics, data collection, priority setting, and monitoring."],
      ["ACGME CLER / UMCNO", "Provided CLER-related data and analytical readiness support with University Medical Center New Orleans, connecting Sponsoring Institution and clinical-learning-environment evidence."],
      ["UMCNO Academic Advisory Committee", "Provided recurring analytical and technical support on education, GME finance, contracts, affiliations, and other medical-school/teaching-hospital partnership issues."],
      ["Admissions-to-practice data architecture", "Designed a longitudinal institutional architecture linking admissions, UME, match, GME, physician practice, workforce, accreditation, CQI, and strategic outcomes."]
    ];
    return (
      <React.Fragment>
        <BaseCareerGovernancePage />
        <section className="career-light" style={{ paddingTop: 0 }}><div className="container career-two-col"><div className="career-label">§ Newly surfaced leadership evidence</div><div><h2>Additional cross-institutional work now made explicit.</h2><p className="career-intro">These engagements were previously buried inside broader portfolio descriptions. They are now surfaced independently so the career record reflects both breadth and depth.</p><div className="career-grid4">{additions.map(([h,d]) => <article className="career-stat-card" key={h}><span>{h}</span><p>{d}</p></article>)}</div></div></div></section>
      </React.Fragment>
    );
  }

  window.HomePage = FinalHomePage;
  window.AboutPage = FinalAboutPage;
  window.CapabilitiesPage = FinalCapabilitiesPage;
  window.LibraryPage = FinalLibraryPage;
  window.CaseStudiesPage = FinalCaseStudiesPage;
  window.CareerGovernancePage = FinalCareerGovernancePage;
})();
