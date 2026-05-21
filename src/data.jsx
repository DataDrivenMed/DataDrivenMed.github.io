/* global window */
// =============================================================
// data.jsx - capability categories + 82 artifact records
// =============================================================

const CAPABILITIES = [
  {
    id: "executive-strategy",
    num: "01",
    title: "Executive Strategy & Institutional Leadership",
    short: "Executive-level strategic planning, executive advising, and matrixed institutional alignment.",
    skills: ["Strategic planning", "Executive advising", "Matrix coordination", "Stakeholder alignment"],
  },
  {
    id: "accreditation-cqi",
    num: "02",
    title: "Accreditation, CQI & Governance",
    short: "LCME and ACGME leadership, gap analyses, and a 90+ data-stream institutional monitoring architecture.",
    skills: ["LCME", "ACGME", "PDSA", "Lean Six Sigma", "Gap analysis", "Quality reporting"],
  },
  {
    id: "ai-governance",
    num: "03",
    title: "AI Governance & Digital Transformation",
    short: "Drafted a pre-final SOM AI policy and governance framework to guide School of Medicine leadership, inform LSUHSC-level discussion, and connect policy, education, tool vetting, and responsible AI use.",
    skills: ["Pre-final AI policy draft", "Regulatory synthesis", "Tool vetting", "Compliance audit", "Faculty AI literacy"],
  },
  {
    id: "analytics",
    num: "04",
    title: "Analytics, Dashboards & Decision Intelligence",
    short: "Predictive modeling, executive dashboards, and 90+ integrated organizational data sources.",
    skills: ["Predictive modeling", "Tableau", "Python / R", "Data architecture", "Decision support"],
  },
  {
    id: "gme-finance",
    num: "05",
    title: "GME Policy, Workforce Finance & Contracts",
    short: "70+ residency and fellowship programs with more than 1000 FTEs across three major healthcare systems across the state, navigating Medicare/Medicaid GME policy and regulations.",
    skills: ["CMS DGME / IME", "Medicare cost reporting", "CEA / MOU", "Workforce forecasting", "Negotiation"],
  },
  {
    id: "research-strategy",
    num: "06",
    title: "Research Strategy, Grants & Scholarly Productivity",
    short: "NIH portfolio clustering, NSF EPSCoR analytics, and FDA RFI-grade clinical trials positioning.",
    skills: ["NIH RePORTER", "K-means / Ansoff", "Grants strategy", "Benchmarking", "FDA RFI response"],
  },
  {
    id: "admissions-ume",
    num: "07",
    title: "Admissions, Student Affairs & Medical Education",
    short: "AMP/ZAP vendor scoping, admissions data systems, predictive admissions analytics, and longitudinal UME outcomes.",
    skills: ["Vendor scoping", "Predictive admissions", "USMLE / NBME analytics", "AAMC GQ", "LCME compliance"],
  },
  {
    id: "policy-rural",
    num: "08",
    title: "Community, Rural Health & Legislative Policy",
    short: "Louisiana legislative consultations, rural hospital risk intelligence, and multiple federal and state policy scopes analyzed for strategic alignment.",
    skills: ["Legislative analysis", "Rural workforce", "Policy intelligence", "HPSA / MUA", "Cross-institutional consulting"],
  },
  {
    id: "faculty-affairs",
    num: "09",
    title: "Faculty Affairs & Institutional Culture",
    short: "Evaluation infrastructure across 25+ departments and centers, faculty development, mentoring, climate, and institutional culture work.",
    skills: ["Logic Model", "CIPP", "Kirkpatrick", "Climate analytics", "Mentoring evaluation"],
  },
  {
    id: "simulation-quality",
    num: "10",
    title: "Simulation, Patient Safety & Clinical Quality",
    short: "AHRQ TeamSTEPPS point-of-care simulation work, multi-hospital quality networks, and trainee report cards.",
    skills: ["AHRQ TeamSTEPPS", "HEDIS", "Mock OR design", "Quality measures", "Debriefing"],
  },
  {
    id: "swimming-science",
    num: "11",
    title: "Swimming Science & International Thought Leadership",
    short: "Centre for Swimming Science (CSSP) governance design and Substack thought leadership cited by SwimSwam.",
    skills: ["Sports physiology", "International collaboration", "Governance design", "Editorial / writing"],
  },
  {
    id: "recognition",
    num: "12",
    title: "Recognition, Publications, Presentations & Service",
    short: "Peer-reviewed publications, books and chapters, oral and poster presentations, peer review, and committee service.",
    skills: ["Peer review", "Authorship", "Conference presentation", "Editorial service"],
  },
];

// ----- Artifacts -------------------------------------------------------------
// Synthesized from CONTENT_INVENTORY_AND_RENAMES.txt + MASTER_PORTFOLIO.
// Compact summaries grounded in source evidence; no fabricated metrics.

const ART = (
  id, title, category, role, summary, skills, audience, strategic,
  sourceFile, tags = [], featured = false, confidential = false
) => ({ id, title, category, role, summary, skills, audience, strategic, sourceFile, tags, featured, confidential });

const ARTIFACTS = [
  // ---------- 01 Executive Strategy ----------
  ART("execstrat-01", "Executive Leadership in Strategic Planning",
    "executive-strategy", "Flagship positioning artifact",
    "Co-led the medical school's comprehensive strategic planning initiative in direct partnership with the Interim Dean, acting as primary liaison between executive leadership, clinical partners, and external management consultants. Synthesized inputs across a matrixed institution into a cohesive strategic roadmap.",
    ["Strategic planning", "Executive advising", "Stakeholder alignment", "Roadmap synthesis"],
    ["Dean", "Senior leadership", "Search committees"],
    "Demonstrates the ability to translate senior leadership priorities into cross-functional planning architecture, execution logic, and measurable institutional work across a large academic medical center environment.",
    "Executive Leadership in Strategic Planning.md",
    ["Strategic planning", "Dean partnership", "Institutional alignment"],
    true),

  ART("execstrat-02", "Interdisciplinary Projects",
    "executive-strategy", "Supporting capability artifact",
    "Cross-disciplinary institutional initiatives spanning multiple offices, departments, and external partners. Demonstrates capacity to convene and execute on multi-domain enterprise efforts.",
    ["Cross-functional leadership", "Project execution", "Multi-domain collaboration"],
    ["Dean", "Senior leadership", "Search committees"],
    "Evidence of breadth - strategic value lies in willingness and capability to operate horizontally across the institution.",
    "INTERDISCIPLINARY PROJECTS.md",
    ["Cross-functional", "Institutional initiatives"]),

  // ---------- 02 Accreditation / CQI ----------
  ART("cqi-01", "Core CQI & Accreditation Leadership Statement",
    "accreditation-cqi", "Flagship positioning artifact",
    "Served as CQI Lead for a successful LCME medical school reaccreditation and secured full ACGME accreditation for the sponsoring institution and 70+ GME programs. Triangulates 90+ internal and external data streams (AMCAS, AAMC GQ, ACGME CLER, NIH RePORTER) using PDSA and Lean Six Sigma to drive institutional outcomes beyond compliance.",
    ["LCME", "ACGME", "PDSA", "Lean Six Sigma", "Root-cause analysis", "Executive dashboards"],
    ["Dean", "Senior leadership", "Accreditation bodies"],
    "Positions the candidate for enterprise accreditation and CQI leadership with a proven, systems-based architecture ready to scale across the educational continuum.",
    "CQI core.md",
    ["LCME reaccreditation", "ACGME", "CQI", "Enterprise monitoring"],
    true),

  // ---------- 03 AI Governance ----------
  ART("ai-01", "School of Medicine AI Policy & Governance Draft Framework",
    "ai-governance", "Pre-final flagship policy framework",
    "Drafted a pre-final School of Medicine AI policy and governance framework intended to guide SOM leadership, inform LSUHSC-level discussion, and create a practical starting architecture for responsible AI use across medical education, clinical learning environments, data protection, tool evaluation, and faculty/staff guidance.",
    ["Pre-final AI policy draft", "Regulatory synthesis", "Compliance audit", "Stakeholder communication", "Multi-institutional coordination"],
    ["Dean", "Program directors", "Department chairs", "Search committees"],
    "Positions the work as a leadership-ready draft policy architecture rather than a finalized institutional policy. Translates institutional AI committee structures, federal and state AI policy movement, AAMC-facing educational concerns, and clinical training realities into a usable School of Medicine governance starting point.",
    "school-of-medicine-ai-governance-and-policy-framework.md",
    ["AI policy draft", "Governance", "Multi-hospital", "Leadership briefing"],
    true),

  ART("ai-02", "Explanation Artifact: AI Policy Draft Framework",
    "ai-governance", "Supporting artifact",
    "Companion explainer to the pre-final SOM AI policy draft and white paper. Clarifies why the School of Medicine needed an educational governance framework to complement institutional IT and compliance rules, while identifying areas requiring leadership review before final adoption.",
    ["Policy framing", "Audience translation", "Strategic narrative"],
    ["Faculty", "Program directors", "Reviewers"],
    "Pairs with the AI policy draft to show policy judgment, institutional fit analysis, and awareness of what still requires review before formal approval.",
    "Explanation Artifact for AI Policy.md",
    ["AI policy draft", "Explainer"]),

  ART("ai-03", "Thalamus Cortex AI Transcript Model Review",
    "ai-governance", "Supporting case study",
    "Zero-dependency interactive HTML briefing isolating four structural failure modes of the Thalamus Cortex GPT-5o mini upgrade for the 2026 ERAS cycle. Translates a WIRED investigation, a Laryngoscope editorial, and Thalamus's own methodology into an operational threat assessment for GME and Medical Student Affairs.",
    ["AI tool review", "MSPE / ERAS", "Threat modeling"],
    ["GME leadership", "Student Affairs"],
    "Demonstrates ability to translate vendor methodology and external reporting into actionable program-level guidance.",
    "Explanation Artifact Thalamus Cortex.md",
    ["Thalamus", "ERAS", "MSPE", "Residency"]),

  ART("ai-04", "UpToDate Expert AI vs OpenEvidence Analysis",
    "ai-governance", "Supporting artifact",
    "Comparative analytical framework and faculty report defining appropriate clinical workflows, inherent risks, and use cases for deploying clinical AI systems at the point of care.",
    ["Comparative analysis", "Clinical AI evaluation", "Faculty education"],
    ["Faculty", "Trainees"],
    "Underwrites institutional credibility on commercial clinical AI tooling.",
    "Explanation Artifact UpToDate Expert AI.md",
    ["Clinical AI", "Evidence systems"]),

  ART("ai-05", "Interactive MedAI Lexicon",
    "ai-governance", "Supporting artifact",
    "Interactive reference platform translating abstract AI terminology into concrete clinical and research contexts, with live animations and knowledge checks. Built to give faculty and residents the shared vocabulary needed to push back on vendor claims.",
    ["Interactive education", "Curriculum design", "Web prototyping"],
    ["Faculty", "Residents", "Students"],
    "Closes a critical AI-literacy governance vulnerability identified during AI committee work.",
    "Explanation Artifact for MedAI vercel.md",
    ["MedAI", "Lexicon", "Faculty literacy"]),

  ART("ai-06", "MedAI Teaching Guide (Educator Companion)",
    "ai-governance", "Supporting artifact",
    "Single self-contained 260KB HTML companion to the MedAI Lexicon covering 29 AI concepts across five curriculum categories. Each concept has dual-lens definitions, a 'Why Teach This' panel, and how-to-teach guidance.",
    ["Curriculum design", "Educator enablement", "Self-contained tooling"],
    ["Educators", "Faculty developers"],
    "Operationalizes AI fluency across a faculty body without requiring institutional LMS dependencies.",
    "Explanation Artifact- Med-AI teaching module.md",
    ["MedAI", "Teaching", "Curriculum"]),

  ART("ai-07", "MedAI Fluency Studio",
    "ai-governance", "Supporting artifact",
    "Diagnostic assessment tool generating a personalized 'Fluency Map' across five AI competencies - Clinical, Education, Research, Leadership, Technology - using a curated 20-question rotating bank with radar-chart visualization.",
    ["Assessment design", "Radar visualization", "Question banking"],
    ["Faculty", "Trainees"],
    "Supplies the diagnostic layer that points learners to the right MedAI Lexicon and Teaching Guide modules.",
    "Explanation Artifact-AI Fleuncy Studio.md",
    ["AI fluency", "Diagnostic"]),

  ART("ai-08", "AI Triage Safety Brief (ChatGPT)",
    "ai-governance", "Supporting artifact",
    "Long-form leadership brief translating a 2026 Nature Medicine study on ChatGPT Health into actionable governance for trainees rotating across LCMC, Ochsner, and FMOLHS.",
    ["Evidence synthesis", "Safety briefing", "Multi-system policy translation"],
    ["GME", "Faculty leaders"],
    "Bridges peer-reviewed evidence to local multi-hospital training reality.",
    "Explanation Artifact-ChatGPT.md",
    ["ChatGPT", "Triage", "Safety"]),

  ART("ai-09", "MedAI Fluency Studio: Microlearning Companion",
    "ai-governance", "Companion evidence artifact",
    "Companion evidence file associated with the MedAI Fluency Studio and microlearning architecture. Preserved to show the educational design logic behind AI fluency assessment, modular learning, and faculty-facing AI development.",
    ["Microlearning design", "AI fluency", "Faculty development"],
    ["Faculty", "Educators"],
    "Documents the instructional design layer behind the broader MedAI fluency ecosystem and preserves the source evidence as part of the full AI education portfolio.",
    "Explanation Artifact-Micromodules.md",
    ["Microlearning", "AI fluency", "Faculty development"]),

  ART("ai-10", "OpenEvidence Clinical Briefing",
    "ai-governance", "Supporting artifact",
    "Long-form analytical briefing synthesizing 18 internal documents into an 18-section interactive report on OpenEvidence - covering technical architecture, clinical benchmarks, failure modes, and business model.",
    ["Long-form synthesis", "Vendor analysis", "Faculty briefing"],
    ["Clinical faculty", "GME"],
    "Establishes a structured evaluation framework clinicians can re-use for future commercial AI tools.",
    "Explanation Artifact-OpenEvidence.md",
    ["OpenEvidence", "Clinical AI"]),

  ART("ai-11", "AI Tool Vetting Framework",
    "ai-governance", "Supporting artifact",
    "Custom 'Bias Towards No' visual framework for evaluating AI tool adoption - forcing a three-question vetting process: identify a measurable pain point, map true cost of sustainment, and identify the worst-case failure mode.",
    ["Decision framework", "Risk evaluation"],
    ["Leaders", "AI committees"],
    "Provides a reusable evaluation lens applicable across departments and committees.",
    "Explanation Artifact-Vetting AI tools.md",
    ["AI vetting", "Decision tooling"]),

  ART("ai-12", "FDA RFI Response on AI-Enabled Real-Time Clinical Trials",
    "research-strategy", "Flagship case study",
    "Initiated and led LSU Health New Orleans's response to FDA's RFI on AI-enabled real-time clinical trials (Docket FDA-2026-N-4390). Drafted the institutional response for review by the Dean and the LSU Health-LCMC Cancer Center Director, with a designed Gulf South consortium architecture and an analysis of the competitive landscape against NCI-designated centers.",
    ["FDA regulatory writing", "Consortium architecture", "Strategic positioning", "Cancer center strategy"],
    ["Dean", "Cancer Center", "External federal"],
    "Positions the institution within national AI clinical trials policy and supports NCI Comprehensive Cancer Center designation.",
    "FDA for dossier.md",
    ["FDA", "AI", "Clinical trials", "NCI"],
    true),

  ART("ai-13", "LSU-LCMC NCI AI Innovation Program Contribution",
    "research-strategy", "Flagship case study",
    "Invited contributor to the AI Innovation Program supporting LSU Health's NCI Comprehensive Cancer Center designation application. Collaborating lead on AI governance, institutional data analytics, and education & training strategy across a five-track program architecture spanning 21 pilots at LSU Health and LCMC.",
    ["AI governance", "Data analytics strategy", "Education strategy"],
    ["Cancer Center leadership", "NCI"],
    "Direct contribution to a designation application that materially shifts institutional research scale.",
    "LSU-LCMC NCI AI.md",
    ["NCI", "Cancer", "AI Innovation"],
    true),

  // ---------- 04 Analytics ----------
  ART("an-01", "Data Analysis, Predictive Modeling & Institutional Research Portfolio",
    "analytics", "Flagship capability artifact",
    "Portfolio of predictive modeling, epidemiology, workforce analytics, educational outcomes, and market analysis in service of the Director of Accreditation & Strategic Planning Compliance role.",
    ["Predictive modeling", "Epidemiology", "Workforce analytics", "Educational outcomes"],
    ["Dean", "Senior leadership"],
    "Establishes the candidate as the institution's analytics centerpiece, not merely a reporter.",
    "DATA ANALYSIS AND RESEARCH PROJECTS.md",
    ["Analytics", "Predictive modeling"],
    true),

  ART("an-02", "LSU Health SOM Analytics Data Sources",
    "analytics", "RAG source / technical appendix",
    "Catalog of 90+ data sources across Organizational, Faculty, GME, UME, Admissions, Finance, Practice, and Research domains - the underlying integrated data layer behind dashboards and CQI.",
    ["Data architecture", "Source cataloging"],
    ["Internal", "Audit"],
    "Evidence of the data foundation that makes 90+ stream triangulation real, not aspirational.",
    "Data Sources For my Analytics.md",
    ["90+ data sources", "Data architecture"]),

  // ---------- 05 GME ----------
  ART("gme-01", "Comprehensive GME Policy, Financing & Workforce Strategy Statement",
    "gme-finance", "Flagship case study",
    "Drives GME strategy and cross-system alignment across LSU Health New Orleans — 70+ residency and fellowship programs, 1,000+ FTEs, three major health systems — working at the intersection of Medicare/Medicaid policy, physician workforce planning, and institutional governance.",
    ["CMS DGME / IME", "Workforce math", "Multi-system politics", "Strategic forecasting"],
    ["Dean", "Senior leadership", "Search committees"],
    "Single most defensible GME-finance positioning artifact in the portfolio.",
    "GME Policy, Financing and Workforce Strategy Expertise Statement.md",
    ["70+ programs", "1000+ FTEs", "Medicare/Medicaid GME policy", "Three major healthcare systems"],
    true),

  ART("gme-02", "Statewide Public-Private Partnership GME Transformation",
    "gme-finance", "Flagship case study",
    "Navigated the public-private hospital transition spanning Clinical Educational Affiliation Agreements, Medicare GME FTE caps, and CMS / ACGME compliance under sustained inter-system pressure.",
    ["CEA / MOU", "Medicare GME caps", "ACGME navigation"],
    ["Dean", "GME leadership"],
    "Demonstrates capability to structure GME financing through a hospital-system transition without trainee disruption.",
    "Public private Partnership.md",
    ["Public-private", "GME caps", "Transition"],
    true),

  ART("gme-03", "Lake Charles Family Medicine LPPF & GME Financing Analysis",
    "gme-finance", "Flagship case study",
    "Provided policy and financial analysis to the Lake Charles Family Medicine Residency during a contentious regional dispute over Louisiana's Local Provider Participation Fund (LPPF). Synthesized Medicaid financing mechanics, hospital competitive dynamics, and GME training implications into a single strategic brief.",
    ["LPPF analysis", "Medicaid financing", "Conflict reframing"],
    ["Program leadership", "Hospital partners"],
    "Reframed a politically charged regional dispute into actionable program guidance.",
    "Lake Charles.md",
    ["LPPF", "Medicaid", "GME"],
    true),

  ART("gme-04", "External GME Finance Consultation for OLOL & Reimbursement Solutions",
    "gme-finance", "Flagship case study",
    "External advisory engagement on DGME caps, MOU and CEA documentation, and Medicare cost reporting for OLOL via Reimbursement Solutions LLC.",
    ["External advisory", "Medicare cost reporting", "DGME caps"],
    ["External hospital systems", "Consulting firms"],
    "Evidence of consulting-grade advisory work outside the home institution.",
    "OLOL GME consultant.md",
    ["External", "DGME", "Cost reporting"],
    true),

  ART("gme-05", "GME Contracts and Negotiations",
    "gme-finance", "Supporting case study",
    "Served as primary staff resource for a multi-million-dollar LSU–LCMC partnership agreement, drafting strategic contract language and contributing to negotiation of provisions and a portfolio-level planning framework.",
    ["Contract negotiation", "Strategic language", "Portfolio framing"],
    ["Senior leadership", "Legal"],
    "Direct line-of-sight to dollars-on-the-table outcomes for clinical service lines.",
    "GME CONTRACTS NEGOTIATIONS.MD",
    ["Contracts", "Negotiation"]),

  ART("gme-06", "Graduate Medical Education Projects",
    "gme-finance", "Flagship capability artifact",
    "Capability portfolio across GME analytics, ACGME compliance, program development, workforce, and finance under the Director of Accreditation role since 2017.",
    ["GME analytics", "ACGME", "Program development"],
    ["Dean", "GME leadership"],
    "Breadth artifact - the catalog behind individual GME case studies.",
    "GRADUATE MEDICAL EDUCATION PROJECTS.md",
    ["GME", "ACGME", "Workforce"]),

  ART("gme-07", "Office of Graduate Medical Education Data Strategy",
    "gme-finance", "Supporting case study",
    "Led GME analytics, ACGME compliance, workforce analysis, and dashboards for the Office of Graduate Medical Education.",
    ["Dashboards", "ACGME compliance", "Workforce analysis"],
    ["GME leadership"],
    "Operational base for GME decision-making.",
    "Office of Graduate Medical Education.md",
    ["GME", "Dashboards"]),

  ART("gme-08", "NIH-Funded Intern Health Study: GME Wellness Analytics",
    "gme-finance", "Supporting case study",
    "Analyzed LSU Health resident data from the University of Michigan Intern Health Study, coordinating directly with the Michigan team for data access and managing depression risk data under strict confidentiality protocols.",
    ["Wellness analytics", "Confidential data handling", "Multi-institutional research"],
    ["GME leadership", "Research"],
    "Demonstrates capacity to handle high-sensitivity trainee data on a multi-institutional NIH study.",
    "INTERN HEALTH STUDY.MD",
    ["Intern Health", "Wellness", "NIH"], false, true),

  // ---------- 06 Research Strategy ----------
  ART("res-01", "NIH Research Portfolio Clustering & Growth Strategy",
    "research-strategy", "Flagship case study",
    "Presented NIH research portfolio intelligence to the LSUHSC Chancellor, Dean, and senior research leadership. Translated multi-year federal funding data into institutional growth strategy via K-means clustering and an Ansoff Matrix benchmarked against Tulane.",
    ["NIH RePORTER", "K-means", "Ansoff Matrix", "Benchmarking"],
    ["Chancellor", "Dean", "Research leadership"],
    "Shifts research strategy from anecdote to measurable portfolio architecture.",
    "NIH CLustering.md",
    ["NIH", "Clustering", "Benchmarking"],
    true),

  ART("res-02", "NSF EPSCoR CREST Institutional Analytics Support",
    "research-strategy", "Flagship case study",
    "Institutional research analytics support for the NSF EPSCoR CREST award and the Center for Adaptive Nanometer Development.",
    ["Research analytics", "Federal funding support"],
    ["PIs", "Research office"],
    "Evidence of analytics underwriting major federal grant infrastructure.",
    "nsf-epscor.md",
    ["NSF", "EPSCoR", "CREST"],
    true),

  ART("res-03", "Office of Research Strategy & Analytics",
    "research-strategy", "Supporting case study",
    "Strategic and grant analytics for the Office of Research, including institutional planning across 60+ tracked initiatives and 92 reporting touchpoints.",
    ["Research strategy", "Grant analytics"],
    ["Research office"],
    "Operational evidence of the office-level research analytics function.",
    "OFFICE OF RESEARCH.md",
    ["Research", "Strategy"]),

  ART("res-04", "NIH Funding Intelligence Explorer",
    "research-strategy", "Supporting artifact",
    "Interactive dashboard translating fragmented NIH Data Book statistics into a unified probability landscape - replacing whisper networks and outdated payline tables with 'Effective Expected Paylines.'",
    ["Interactive dashboards", "NIH funding intelligence"],
    ["Faculty PIs"],
    "Translates institutional research intelligence into a tool faculty actually use.",
    "Explanation Artifact-NIH Explorer.md",
    ["NIH", "Funding", "Dashboards"]),

  ART("res-05", "Grants & Contracts (Structured Portfolio)",
    "research-strategy", "Evidence artifact",
    "Structured portfolio of grants, contracts, research roles, and funding history.",
    ["Grants", "Contracts"],
    ["Search committees"],
    "Evidence of funded research record.",
    "GRANTS AND CONTRACTS.md",
    ["Grants", "Funding"]),

  ART("res-06", "Grants & Contracts (Original Detailed Source)",
    "research-strategy", "Evidence artifact",
    "Original detailed grants source covering WISEWOMAN, ADAPT-POL, STEPS, and supporting projects.",
    ["Funded research"],
    ["Search committees"],
    "Detail behind the structured portfolio version.",
    "grants.md",
    ["Grants", "WISEWOMAN", "ADAPT-POL"]),

  // ---------- 07 Admissions / UME ----------
  ART("adm-01", "Admissions Management Platform Transformation & Vendor Scoping",
    "admissions-ume", "Flagship case study",
    "Led AMP/ZAP admissions technology evaluation across 3,000+ applicants and 200+ documented requirements gaps. Conducted vendor scoping and surfaced implementation risk for senior leadership.",
    ["Vendor scoping", "Requirements analysis", "Risk surfacing"],
    ["Senior leadership", "Admissions"],
    "Anchors enterprise-systems credibility - the kind of work that lives or dies on documented requirements rigor.",
    "AMP Project.md",
    ["AMP", "ZAP", "Vendor scoping"],
    true),

  ART("adm-02", "Office of Admissions Data Strategy & Accreditation Compliance",
    "admissions-ume", "Supporting case study",
    "Predictive admissions analytics, dashboards, LCME alignment, and admissions strategy for the Office of Admissions.",
    ["Predictive analytics", "LCME compliance", "Dashboards"],
    ["Admissions", "LCME"],
    "Demonstrates depth in admissions data strategy beyond reporting.",
    "Office of Admissions.md",
    ["Admissions", "Predictive analytics"]),

  ART("adm-03", "Office of Student Affairs Data Analytics & Academic Support",
    "admissions-ume", "Supporting case study",
    "Residency match, NBME, USMLE, and educational records analytics in support of student advising strategy.",
    ["USMLE / NBME", "Match analytics", "Advising"],
    ["Student Affairs"],
    "Operational evidence of the analytics layer behind student advising.",
    "Office of Student Affairs.md",
    ["Student Affairs", "Match", "USMLE"]),

  ART("adm-04", "Office of Medical Education Data Strategy & Policy",
    "admissions-ume", "Supporting case study",
    "Analytics, dashboards, ACGME navigation, and workforce analysis for the Office of Medical Education.",
    ["Medical education analytics", "ACGME", "Workforce"],
    ["Medical Education leadership"],
    "Operational depth across UME and GME data work.",
    "Office of Medical Education.md",
    ["OME", "Analytics"]),

  ART("adm-05", "Office of Undergraduate Medical Education Data Strategy",
    "admissions-ume", "Supporting case study",
    "UME analytics, statistical modeling, curriculum development support, and LCME compliance.",
    ["UME analytics", "Statistical modeling", "LCME"],
    ["UME leadership"],
    "Direct UME line of sight on outcomes and compliance.",
    "Office of Undergraduate Medical Education.md",
    ["UME", "LCME"]),

  ART("adm-06", "Office of Medical Student Research Strategic Support",
    "admissions-ume", "Supporting artifact",
    "Data analysis and slide-deck development supporting the Assistant Dean for Medical Student Research, including Summer Research Opportunities, electives, the Honors Program, and year-long research experiences.",
    ["Data support", "Executive presentation"],
    ["Assistant Dean", "Research office"],
    "Direct support to executive presentation of program outcomes.",
    "Office Student Research.md",
    ["MSR", "Honors"]),

  ART("adm-07", "Academic & Community Health Center Curriculum Model Development",
    "admissions-ume", "Evidence artifact",
    "Co-developed (Chauvin S, Paragi R) an evidence-based model for academic and community health center collaboration including FQHC rotations and interprofessional design.",
    ["Curriculum design", "Academic-community partnership"],
    ["UME leadership"],
    "Published-grade scholarly contribution to curriculum design.",
    "CURRICULUM AND MODEL DEVELOPMENT.md",
    ["Curriculum", "FQHC"]),

  ART("adm-08", "Office of Medical Education Research & Development Role (OMERAD)",
    "admissions-ume", "Evidence artifact",
    "Research Associate at OMERAD (2007-2010): educational research, assessment design, faculty development, and simulation.",
    ["Educational research", "Assessment design", "Faculty development"],
    ["Research collaborators"],
    "Establishes long-arc research credibility in medical education.",
    "Office of Medical Education-Research Development.md",
    ["OMERAD", "Educational research"]),

  ART("adm-09", "Research Associate: Medical Education Data Strategy",
    "admissions-ume", "Evidence artifact",
    "Predictive modeling, dashboards, workforce analysis, and program accreditation work in the Research Associate role.",
    ["Predictive modeling", "Program accreditation"],
    ["Internal"],
    "Foundational role artifact behind later directorial work.",
    "Research Associate-Office of Medical Education.md",
    ["Research Associate", "ME data"]),

  ART("adm-10", "Program Development & Healthcare Initiatives",
    "admissions-ume", "Flagship capability artifact",
    "Program design across GME, EQuIP, Medicare and Medicaid, and clinical simulation initiatives.",
    ["Program design", "Healthcare initiatives"],
    ["Dean", "Senior leadership"],
    "Breadth artifact across program-development capacity.",
    "PROGRAM DEVELOPMENT INITIATIVES.md",
    ["EQuIP", "Programs"]),

  // ---------- 08 Community / Rural / Policy ----------
  ART("pol-01", "Cross-Institutional Consulting & Health Policy Analytics",
    "policy-rural", "Flagship case study",
    "Strategic data consultant for Louisiana's premier regulatory and academic bodies - State Department of Health, State Medical Licensing Board, LSU Healthcare Division, LSU A&M, and LSU Health Shreveport. Functions as an objective subject matter expert providing customized data strategy and policy analytics.",
    ["External consultation", "Policy analytics", "Workforce dynamics"],
    ["State agencies", "Sister institutions", "Consulting firms"],
    "Demonstrates external credibility and consulting-grade engagement beyond direct operational oversight.",
    "Cross-Institutional Consulting.md",
    ["External consulting", "Policy"],
    true),

  ART("pol-02", "Data-Driven Consultations for Louisiana Legislative Bills",
    "policy-rural", "Flagship case study",
    "Supplied data-driven insights for Louisiana legislative bills covering workforce needs, medical education, health system delivery, teaching hospital reimbursement, safety-net hospital preservation, and postsecondary funding mechanisms.",
    ["Legislative analysis", "Workforce needs", "Funding mechanisms"],
    ["State legislature", "External consulting"],
    "Direct contribution to state policy with documented bill-level engagement.",
    "Data Driven Consultations for Legislative Bills.md",
    ["Louisiana", "Legislative", "Bills"],
    true),


  ART("pol-03", "Federal and State Rural Health Policy Strategic Response",
    "policy-rural", "Flagship case study",
    "Proactive strategic response to multiple federal and state rural health policy scopes. Identified Louisiana opportunity through proactive policy monitoring rather than reactive scrambling after passage.",
    ["Federal policy", "Strategic positioning", "Rural health"],
    ["Senior leadership", "Government affairs"],
    "Demonstrates a proactive, rather than reactive, federal-policy posture.",
    "HR1.MD",
    ["Federal and state policy", "Strategic alignment", "Rural health"],
    true),

  ART("pol-04", "Legislative Policy Initiatives",
    "policy-rural", "Flagship capability artifact",
    "Capability portfolio for state legislative policy, healthcare financing, and strategic analysis.",
    ["Policy initiatives", "Healthcare financing"],
    ["State", "Internal leadership"],
    "Catalog behind individual legislative case studies.",
    "LEGISLATIVE POLICY INITIATIVES.md",
    ["Policy", "Legislation"]),

  ART("pol-05", "Legislative Bills Portfolio",
    "policy-rural", "Evidence artifact",
    "Detailed Louisiana bills portfolio across medical education, workforce, and funding policy.",
    ["Bill analysis", "Policy detail"],
    ["State", "Internal"],
    "Evidence inventory underlying legislative consulting work.",
    "LEGISLATIVE BILLS.md",
    ["Bills", "Louisiana"]),

  ART("pol-06", "Governmental & Technical Reports",
    "policy-rural", "Evidence artifact",
    "Governmental and technical reports - policy documentation across 13 to 17 reporting cycles.",
    ["Reporting", "Policy documentation"],
    ["External", "Internal"],
    "Demonstrates sustained reporting cadence on policy topics.",
    "GOVERNMENTAL ADN TECHNICAL REPORTS.md",
    ["Governmental", "Technical reports"]),

  ART("pol-07", "Community & Rural Health Data Strategy Projects",
    "policy-rural", "Supporting case study",
    "Rural healthcare planning, HPSA/MUA validation, workforce projections, and community health analytics.",
    ["HPSA / MUA", "Rural workforce", "Community health"],
    ["Rural partners", "State agencies"],
    "Operational evidence of rural-health analytics depth.",
    "COMMUNITY ADN RURAL HEALTH PROJECTS.md",
    ["Rural", "HPSA / MUA"]),

  ART("pol-08", "Community Service & External Strategic Collaborations",
    "policy-rural", "Supporting case study",
    "Community service activities and external collaborations, including healthcare workforce analytics and CMS financial consultation.",
    ["External collaboration", "CMS consultation"],
    ["External partners"],
    "Evidence of partnership maintenance over many years.",
    "Community and External Collaborations.md",
    ["External", "CMS"]),

  ART("pol-09", "Office of Community Engagement & Health Programs Analytics",
    "policy-rural", "Supporting case study",
    "Diversity analytics, pipeline development, community engagement, and dashboard reporting.",
    ["Diversity analytics", "Pipeline programs"],
    ["Community engagement office"],
    "Operational evidence of the analytics layer behind community engagement strategy.",
    "Office of Community Engagement and Health Programs.md",
    ["Diversity", "Pipeline"]),

  ART("pol-10", "Rural Hospital Closure Strategic Intelligence",
    "policy-rural", "Supporting artifact",
    "Custom interactive web application analyzing closure patterns and financial vulnerability across 2,496 rural US hospitals - visualizing state-level risk and evaluating federal policy effectiveness, including the 94.4% closure rate of Medicare-Dependent Hospitals.",
    ["Web application", "Risk analysis", "Federal policy evaluation"],
    ["Leadership", "External"],
    "Concrete artifact behind rural hospital risk discussion.",
    "Explanation Artifact- Rural Hospital Closure.md",
    ["Rural hospitals", "Closure", "Risk"]),

  ART("pol-11", "Rural Health Signal Monitor",
    "policy-rural", "Supporting artifact",
    "Automated daily intelligence tracker monitoring policy news affecting rural hospitals, clinics, and GME pipelines via RSS ingestion (e.g., KFF Health News).",
    ["Signal monitoring", "RSS ingestion"],
    ["Leadership"],
    "Always-on policy intelligence layer.",
    "Explanation Artifact-Rural Health Signal Monitor.md",
    ["Rural", "Signal monitor"]),

  ART("pol-12", "Rural Health Signal Monitor - Daily Digest",
    "policy-rural", "Supporting artifact",
    "Static web-based daily digest aggregating and filtering rural health news, funding, policy shifts, and market signals.",
    ["Daily digest", "News intelligence"],
    ["Leadership"],
    "Daily distilled output of the signal monitor.",
    "Explanation Artifact-Rural Health News.md",
    ["Rural", "Daily digest"]),

  ART("pol-13", "Rural Health Bill Tracker",
    "policy-rural", "Supporting artifact",
    "Zero-dependency static web dashboard mapping pending legislation directly to rural healthcare and physician workforce planning impacts.",
    ["Legislative tracking", "Static dashboards"],
    ["Leadership", "Policy stakeholders"],
    "Translates dense legislative text into operational intelligence.",
    "Explanation Artifact-Rural Bill Tracker.md",
    ["Rural", "Bill tracker"]),

  // ---------- 09 Faculty Affairs ----------
  ART("fac-01", "Faculty Development & Mentoring Evaluation Infrastructure",
    "faculty-affairs", "Flagship case study",
    "Built foundational evaluation infrastructure for a new institutional office across 25+ departments and centers, using a hybrid Logic Model + CIPP + Kirkpatrick architecture across 90+ data sources.",
    ["Logic Model", "CIPP", "Kirkpatrick", "Evaluation infrastructure"],
    ["Faculty Affairs leadership", "Dean"],
    "Anchor faculty-affairs flagship - defensible scale and methodological seriousness.",
    "Office of Faculty Affairs-Faculty Development and Mentoring.md",
    ["25+ departments and centers", "Logic Model", "CIPP", "Kirkpatrick"],
    true),

  ART("fac-02", "Faculty & Institutional Affairs Data Strategy",
    "faculty-affairs", "Supporting case study",
    "Faculty analytics, benchmarking, governance protocols, and equity / climate survey analysis.",
    ["Faculty analytics", "Climate survey", "Governance"],
    ["Faculty Affairs"],
    "Operational depth across faculty data work.",
    "Office of Faculty and Institutional Affairs.md",
    ["Faculty", "Climate", "Equity"]),

  // ---------- 10 Simulation / Patient Safety ----------
  ART("sim-01", "World-First AHRQ TeamSTEPPS Point-of-Care Simulation Initiative",
    "simulation-quality", "Flagship case study",
    "Program Lead for an AHRQ TeamSTEPPS & Patient Safety initiative at LSU Health Sciences Center - surgical teamwork training, mobile mock OR design, and structured debriefing as a point-of-care simulation modality.",
    ["AHRQ TeamSTEPPS", "Mock OR design", "Debriefing"],
    ["Patient safety", "External"],
    "Distinctive AHRQ TeamSTEPPS point-of-care simulation artifact carrying narrative weight in interview settings.",
    "AHRQ first in the world.md",
    ["AHRQ", "TeamSTEPPS", "Mock OR"],
    true),

  ART("sim-02", "Resident & Fellow Quality and Patient Safety Report Cards",
    "simulation-quality", "Flagship case study",
    "Trainee report cards using LSU HCSD quality measures, HEDIS, and national benchmarks for resident and fellow evaluation.",
    ["HEDIS", "Quality measures", "Benchmarking"],
    ["GME", "Quality leadership"],
    "Concrete instrument linking trainees to measured quality outcomes.",
    "Resident Report Cards.md",
    ["HEDIS", "Report cards"],
    true),

  ART("sim-03", "Centers for Advanced Learning & Simulation Evaluation Portfolio",
    "simulation-quality", "Supporting case study",
    "Simulation evaluation, assessment framework design, longitudinal analytics, and grant support across the centers.",
    ["Assessment frameworks", "Longitudinal analytics"],
    ["Simulation centers"],
    "Operational depth on simulation evaluation.",
    "CENTERS FOR ADVANCED LEARNING AND SIMULATION.md",
    ["Simulation", "Assessment"]),

  ART("sim-04", "MCIP Educational Platform for Louisiana Quality Network",
    "simulation-quality", "Supporting case study",
    "Led development of the MCIP educational technology platform for Louisiana Quality Network's 17-hospital statewide network, covering CMS quality milestones via video modules, dashboards, and cancer screening.",
    ["Educational platform", "Statewide quality"],
    ["LQN", "CMS"],
    "Direct link from local platform work to statewide CMS quality outcomes.",
    "MCIP LQN.MD",
    ["MCIP", "LQN", "17 hospitals"]),

  ART("sim-05", "Patient Care & Clinical Practice Initiatives",
    "simulation-quality", "Supporting capability artifact",
    "Clinical analytics, spatial mapping, patient encounters, and clinical competency portfolio.",
    ["Clinical analytics", "Spatial mapping"],
    ["Clinical leadership"],
    "Capability breadth on the clinical-analytics axis.",
    "PATIENT CARE ADN CLINICAL PRACTICE INITIATIVES.md",
    ["Clinical", "Spatial"]),

  // ---------- Public Health (mapped under analytics) ----------
  ART("an-03", "COVID-19 Rt and Infection Burden Strategic Analysis",
    "analytics", "Flagship case study",
    "Estimated total infections using confirmed cases and test positivity, then normalized by population to compare states fairly. Generated O-zone plots and Rt analyses driving reopening risk discussion.",
    ["Rt estimation", "Test-positivity adjustment", "O-zone plots"],
    ["Public health", "External"],
    "Methodologically distinct public health work outside the LSU operational lane.",
    "COVID Analysis.md",
    ["COVID", "Rt", "Reopening"],
    true),

  ART("an-04", "COVID-19 Epidemiological Tracking Tableau Dashboard",
    "analytics", "Flagship case study",
    "Tableau dashboard implementing Rt estimation, test-adjusted infection rates, and public health visualization for state-level comparisons during 2020.",
    ["Tableau", "Rt estimation", "Public health visualization"],
    ["Public health"],
    "Working artifact behind the Rt analysis - concrete, audience-ready.",
    "COVID Tableau Dashboard.md",
    ["Tableau", "COVID", "Rt"],
    true),

  ART("an-05", "Louisiana Women & Children Health Analytics Dashboard",
    "analytics", "Supporting artifact",
    "Interactive browser-based dashboard rendering 86,000+ data points across 1,650 measures from the United Health Foundation report into accessible Louisiana-specific insights.",
    ["Interactive dashboards", "Population health"],
    ["State", "Leadership"],
    "Translates a dense national report into an actionable state narrative.",
    "Explanation Artifact-Women and Childrens.md",
    ["Women / children", "Population health"]),

  // ---------- Finance ----------
  ART("an-06", "Financial & Resource Management Data Strategy Projects",
    "analytics", "Flagship capability artifact",
    "Financial analytics, grant strategy, Medicaid, GME funding, and resource allocation across the Director of Accreditation portfolio since 2017.",
    ["Financial analytics", "Grant strategy", "Resource allocation"],
    ["Senior leadership", "HSC leadership"],
    "Bridges analytics and finance - directly compensation-relevant.",
    "Financial AND Resource Management PROJECTS.md",
    ["Finance", "Grants", "Medicaid"],
    true),

  // ---------- Workforce ----------
  ART("an-07", "Healthcare Workforce Strategy Portfolio",
    "analytics", "Flagship capability artifact",
    "Healthcare workforce projections, strategic planning, and clinical training site analysis.",
    ["Workforce projections", "Strategic planning"],
    ["State", "Senior leadership"],
    "Long-arc workforce-strategy track record.",
    "HEALTHCARE WORKFORCE.md",
    ["Workforce", "Projections"]),

  ART("an-08", "Healthcare Workforce Projects",
    "analytics", "Flagship capability artifact",
    "Workforce analytics, physician need, manpower planning, and healthcare delivery work.",
    ["Workforce analytics", "Manpower planning"],
    ["State", "Internal"],
    "Catalog behind individual workforce engagements.",
    "HEALTHCARE WORKFORCE PROJECTS.md",
    ["Workforce", "Physician need"]),

  // ---------- 11 Swimming Science ----------
  ART("swim-01", "Centre for Swimming Science & Performance (CSSP) Collaboration",
    "swimming-science", "Specialized external leadership artifact",
    "Multi-year work with the National Swimming Coach of India and the country's top competitive swim programs. Designed governance, funding, and staffing for a proposed independent research and applied science center embedded at Basavanagudi Aquatic Centre, Bengaluru.",
    ["Sports physiology", "Governance design", "International collaboration"],
    ["International partners"],
    "Distinctive thought-leadership signal outside academic medicine.",
    "BAC CSSP.md",
    ["India", "Swimming science", "CSSP"]),

  ART("swim-02", "The Chlorinated Chronicles - Swimming Science Thought Leadership",
    "swimming-science", "Specialized external leadership artifact",
    "Substack platform with international swimming audience and SwimSwam citation. Functions as a public think-tank role for swimming science.",
    ["Public writing", "Thought leadership"],
    ["International swimming community"],
    "Demonstrates capacity to build and maintain an external audience as a subject-matter authority.",
    "chlorinated chronicles.md",
    ["Substack", "SwimSwam", "Public writing"]),

  ART("swim-03", "Swimming Performance Intelligence: Sodium Bicarbonate and Applied Physiology",
    "swimming-science", "Applied sports science artifact",
    "Applied swimming-performance intelligence focused on sodium bicarbonate, physiology, training interpretation, and evidence-based performance decision-making.",
    ["Applied physiology", "Swimming performance", "Evidence synthesis"],
    ["Swimming audience", "Coaches", "Athletes"],
    "Extends the portfolio into applied performance science and public-facing sports intelligence, demonstrating translation of research into usable decision support.",
    "chlorinated chronicles - Copy.md",
    ["Swimming", "Performance", "Sodium bicarbonate"]),

  // ---------- 12 Recognition ----------
  ART("rec-01", "Awards and Honors - Structured Portfolio",
    "recognition", "Evidence artifact",
    "Structured portfolio version of awards and honors covering medical education scholarship, public health research, and athletic achievement (1987-present).",
    ["Recognition", "Scholarship"],
    ["Search committees"],
    "Evidence for compensation and recognition discussions.",
    "AWARDS.md",
    ["Awards", "Honors"]),

  ART("rec-02", "Awards and Honors - Original CV Source",
    "recognition", "Evidence artifact",
    "Original CV awards-and-honors source. Includes Paper of Distinction, outstanding presentations, and athletic recognition.",
    ["Recognition", "CV record"],
    ["Search committees"],
    "Source-of-truth for awards listings.",
    "Awards and Honors.md",
    ["Awards", "CV"]),

  ART("rec-03", "Books and Book Chapters",
    "recognition", "Evidence artifact",
    "Books and book chapters in nutritional science and community-based research.",
    ["Authorship", "Books"],
    ["Search committees"],
    "Evidence of long-form scholarly authorship.",
    "BOOKS AND BOOK CHAPTERS.md",
    ["Books", "Chapters"]),

  ART("rec-04", "Journal Publications",
    "recognition", "Evidence artifact",
    "Peer-reviewed journal publications across medical education, public health, simulation, and workforce dynamics.",
    ["Peer-reviewed publication"],
    ["Search committees"],
    "Standard evidence of academic productivity.",
    "JOURNAL PUBLICATIONS.md",
    ["Publications", "Peer-reviewed"]),

  ART("rec-05", "Oral Presentations",
    "recognition", "Evidence artifact",
    "63+ oral presentations across public health, simulation, and academic-community partnerships.",
    ["Conference presentation"],
    ["Search committees"],
    "Evidence of national engagement and scholarly visibility.",
    "ORAL PRESENTATIONS.md",
    ["Oral presentations"]),

  ART("rec-06", "Poster Presentations",
    "recognition", "Evidence artifact",
    "Poster presentations across chronic disease, simulation, and competency-based education.",
    ["Conference presentation"],
    ["Search committees"],
    "Evidence of conference engagement.",
    "POSTER PRESENTATIONS.md",
    ["Posters"]),

  ART("rec-07", "Peer Review and Academic Evaluation",
    "recognition", "Evidence artifact",
    "Manuscript review, abstract review, and grant program evaluation activity.",
    ["Peer review", "Editorial service"],
    ["Editors", "Search committees"],
    "Evidence of editorial service and field standing.",
    "Reviewer.md",
    ["Reviewer", "Service"]),

  ART("rec-08", "Comprehensive Scholarly Portfolio Source",
    "recognition", "Evidence artifact",
    "Comprehensive scholarly portfolio: publications, curriculum, books, oral presentations, and reviewer activity.",
    ["Scholarly portfolio"],
    ["Search committees"],
    "Master scholarly source-of-truth.",
    "Scholarly.md",
    ["Scholarly", "Master"]),

  ART("rec-09", "Institutional Leadership and Committee Memberships",
    "recognition", "Evidence artifact",
    "Institutional strategic planning, LCME, informatics, quality improvement, and national committee memberships (1997-present).",
    ["Committee service", "Governance"],
    ["Search committees", "Internal"],
    "Evidence of institutional service breadth.",
    "Committees.md",
    ["Committees", "Memberships"]),

  // ---------- IIT Madras (mapped under research-strategy) ----------
  ART("res-07", "IIT Madras International Partnership for Cancer AI & Genomics",
    "research-strategy", "Flagship case study",
    "Partnership lead coordinating multi-institutional collaboration with IIT Madras, UCSD genomics, and AI/ML precision oncology, including WhatsApp digital health components - positioning LSU for NCI Cancer Center designation.",
    ["International partnerships", "Precision oncology", "Multi-institutional coordination"],
    ["Cancer Center leadership", "International partners"],
    "Distinctive international research-growth signal directly supporting NCI strategy.",
    "IIT MADRAS INTERNATIONAL PARTNERSHI.MD",
    ["IIT Madras", "UCSD", "NCI"],
    true),

  // ---------- Tech / Innovation (under analytics) ----------
  ART("an-09", "Resources, Technology & Innovation Initiatives",
    "analytics", "Supporting capability artifact",
    "Educational platforms, space tabulation, technology support, and compliance work across the Director of Accreditation portfolio.",
    ["Educational platforms", "Compliance", "Space tabulation"],
    ["Internal"],
    "Operational evidence of technology-and-resources work feeding institutional decisions.",
    "RESOIRCES TECHNOLOGY AND INNOVATION INITITATIVES.md",
    ["Tech", "Resources", "Compliance"]),
];

// Detailed bill table displayed inside the pol-02 library popup.
const LEGISLATIVE_BILLS_TABLE = [
  { bill: "HCR241", description: "Urges and requests the Dept. of Health and Hospitals and LSU Board of Supervisors to conduct a study assessing the current and future delivery of health care and medical education in La. and to make recommendations" },
  { bill: "SB428", description: "Authorizes the LSU Health Sciences Center to maximize the use of affiliation agreements with other hospitals in order to maximize the use of Medicare graduate medical education monies." },
  { bill: "HCR116", description: "Urges and requests the Dept. of Health and Hospitals and LSU Board of Supervisors to conduct a study assessing the current and future delivery of health care and medical education in La. and to make recommendations" },
  { bill: "SB98", description: "Provides for the definition of major teaching hospital for the purposes of hospital prospective reimbursement methodology." },
  { bill: "SB178", description: "Creates a fund for the purpose of funding the out-of-state tuition of certain students enrolled in certain medical education programs when such medical education programs are not offered in Louisiana." },
  { bill: "SR191", description: "Requests the Senate Committee on Health and Welfare to study the governance, efficiencies, and service delivery of the Louisiana State University Health Care Services Division and the Louisiana State University Health Sciences Center." },
  { bill: "HR42", description: "Requires submission for approval by the House Committee on Appropriations of any cooperative endeavor agreements between the LSU Board of Supervisors and a private entity involving the change in management of a public hospital" },
  { bill: "HOUSE CONCURRENT RESOLUTION NO. 83", description: "Task force to study, identify, and make recommendations to address the shortage of specialist physicians in this state." },
  { bill: "HCR134", description: "Creates the Medical Education & Research Finance Work Group to provide findings and recommendations to the legislature relative to a formula-based financing model for the funding of Louisiana's public institutions for graduate and professional medical education and biomedical and health-related research" },
  { bill: "HB885", description: "Enacts the Safety Net Hospital Preservation Act" },
  { bill: "HCR17", description: "Creates a study committee to evaluate and make recommendations concerning Louisiana's system of healthcare delivery" },
  { bill: "HR230", description: "Requests a study of means by which to enhance access to health services in health professional shortage areas" },
  { bill: "SB408", description: "Provides for the definition of major teaching hospital for the purposes of hospital prospective reimbursement methodology." },
  { bill: "HR205", description: "Urges and requests the Louisiana Department of Health and the Louisiana Workforce Commission to organize a special committee to develop strategies for addressing the direct support professional workforce shortage" },
  { bill: "HB1033", description: "Provides for enactment of the Workforce and Innovation for a Stronger Economy (WISE) Fund" },
  { bill: "SB 337", description: "Provides for the development of an outcomes-based funding formula for postsecondary education." },
];

const legislativeBillsArtifact = ARTIFACTS.find(a => a.id === "pol-02");
if (legislativeBillsArtifact) {
  legislativeBillsArtifact.billTableIntro = "Responsible for supplying data-driven insights to support legislative bills. The legislative bills vary in their focus, ranging from workforce needs to medical education and funding mechanisms.";
  legislativeBillsArtifact.billTable = LEGISLATIVE_BILLS_TABLE;
}

// Map flagship case studies for the home + featured-cases pages.
const FLAGSHIP_IDS = [
  "execstrat-01", // Executive strategic planning
  "cqi-01",       // CQI and accreditation leadership
  "ai-01",        // SOM AI governance and policy framework
  "gme-01",       // GME policy, financing, and workforce strategy
  "fac-01",       // Faculty development and mentoring evaluation infrastructure
  "res-01",       // NIH research clustering and growth strategy
  "adm-01",       // Admissions platform transformation
  "ai-12",        // FDA RFI response on AI-enabled clinical trials
  "pol-01",       // Cross-institutional consulting and health policy analytics
  "sim-01",       // AHRQ TeamSTEPPS point-of-care simulation
  "pol-08",       // Rural health transformation strategic response
  "an-01",        // Data analysis, predictive modeling, and institutional research portfolio
];



// Full evidence artifact file mapping. These files live in /content/artifacts_cleaned_82/.
const CLEANED_ARTIFACT_FILES_BY_SOURCE = {
  "AHRQ first in the world.md": "world-first-ahrq-teamstepps-point-of-care-simulation-initiative.md",
  "AI Policy.md": "school-of-medicine-ai-governance-and-policy-framework.md",
  "AMP Project.md": "admissions-management-platform-transformation-and-vendor-scoping.md",
  "AWARDS.md": "awards-and-honors-structured-portfolio-version.md",
  "Awards and Honors.md": "awards-and-honors-original-cv-source.md",
  "BAC CSSP.md": "centre-for-swimming-science-and-performance-collaboration.md",
  "BOOKS AND BOOK CHAPTERS.md": "books-and-book-chapters.md",
  "CENTERS FOR ADVANCED LEARNING AND SIMULATION.md": "centers-for-advanced-learning-and-simulation-evaluation-portfolio.md",
  "COMMUNITY ADN RURAL HEALTH PROJECTS.md": "community-and-rural-health-data-strategy-projects.md",
  "COVID Analysis.md": "covid-19-rt-and-infection-burden-strategic-analysis.md",
  "COVID Tableau Dashboard.md": "covid-19-epidemiological-tracking-tableau-dashboard.md",
  "CQI core.md": "core-cqi-and-accreditation-leadership-statement.md",
  "CURRICULUM AND MODEL DEVELOPMENT.md": "academic-and-community-health-center-curriculum-model-development.md",
  "Committees.md": "institutional-leadership-and-committee-memberships.md",
  "Community and External Collaborations.md": "community-service-and-external-strategic-collaborations.md",
  "Cross-Institutional Consulting.md": "cross-institutional-consulting-and-health-policy-analytics.md",
  "DATA ANALYSIS AND RESEARCH PROJECTS.md": "data-analysis-predictive-modeling-and-institutional-research-portfolio.md",
  "Data Driven Consultations for Legislative Bills.md": "data-driven-consultations-for-louisiana-legislative-bills.md",
  "Data Sources For my Analytics.md": "lsu-health-school-of-medicine-analytics-data-sources.md",
  "Executive Leadership in Strategic Planning.md": "executive-leadership-in-strategic-planning.md",
  "Explanation Artifact Thalamus Cortex.md": "explanation-artifact-thalamus-cortex-ai-transcript-model-review.md",
  "Explanation Artifact UpToDate Expert AI.md": "explanation-artifact-uptodate-expert-ai-vs-openevidence-analysis.md",
  "Explanation Artifact for AI Policy.md": "explanation-artifact-ai-policy-framework.md",
  "Explanation Artifact for MedAI vercel.md": "explanation-artifact-interactive-medai-lexicon.md",
  "Explanation Artifact- Med-AI teaching module.md": "medai-teaching-guide-explanation-artifact.md",
  "Explanation Artifact- Rural Hospital Closure.md": "explanation-artifact-rural-hospital-closure-strategic-intelligence.md",
  "Explanation Artifact-AI Fleuncy Studio.md": "explanation-artifact-medai-fluency-studio.md",
  "Explanation Artifact-ChatGPT.md": "explanation-artifact-ai-triage-safety-brief.md",
  "Explanation Artifact-Micromodules.md": "explanation-artifact-medai-fluency-studio-duplicate-or-companion.md",
  "Explanation Artifact-NIH Explorer.md": "explanation-artifact-nih-funding-intelligence-explorer.md",
  "Explanation Artifact-OpenEvidence.md": "explanation-artifact-openevidence-clinical-briefing.md",
  "Explanation Artifact-Rural Bill Tracker.md": "explanation-artifact-rural-health-bill-tracker.md",
  "Explanation Artifact-Rural Health News.md": "explanation-artifact-rural-health-signal-monitor-daily-digest.md",
  "Explanation Artifact-Rural Health Signal Monitor.md": "explanation-artifact-rural-health-signal-monitor.md",
  "Explanation Artifact-Vetting AI tools.md": "explanation-artifact-ai-tool-vetting-framework.md",
  "Explanation Artifact-Women and Childrens.md": "explanation-artifact-louisiana-women-and-children-health-analytics-dashboard.md",
  "FDA for dossier.md": "fda-rfi-response-on-ai-enabled-real-time-clinical-trials.md",
  "Financial AND Resource Management PROJECTS.md": "financial-and-resource-management-data-strategy-projects.md",
  "GME CONTRACTS NEGOTIATIONS.MD": "gme-contracts-and-negotiations.md",
  "GME Policy, Financing and Workforce Strategy Expertise Statement.md": "comprehensive-gme-policy-financing-and-workforce-strategy-expertise-statement.md",
  "GOVERNMENTAL ADN TECHNICAL REPORTS.md": "governmental-and-technical-reports.md",
  "GRADUATE MEDICAL EDUCATION PROJECTS.md": "graduate-medical-education-projects.md",
  "GRANTS AND CONTRACTS.md": "grants-and-contracts-structured-portfolio-version.md",
  "HEALTHCARE WORKFORCE PROJECTS.md": "healthcare-workforce-projects.md",
  "HEALTHCARE WORKFORCE.md": "healthcare-workforce-strategy-portfolio.md",
  "HR1.MD": "h-r-1-rural-health-transformation-program-strategic-response.md",
  "IIT MADRAS INTERNATIONAL PARTNERSHI.MD": "iit-madras-international-partnership-for-cancer-ai-and-genomics.md",
  "INTERDISCIPLINARY PROJECTS.md": "interdisciplinary-projects.md",
  "INTERN HEALTH STUDY.MD": "nih-funded-intern-health-study-gme-wellness-analytics.md",
  "JOURNAL PUBLICATIONS.md": "journal-publications.md",
  "LEGISLATIVE BILLS.md": "legislative-bills-portfolio.md",
  "LEGISLATIVE POLICY INITIATIVES.md": "legislative-policy-initiatives.md",
  "LSU-LCMC NCI AI.md": "lsu-lcmc-nci-ai-innovation-program-contribution.md",
  "Lake Charles.md": "lake-charles-family-medicine-lppf-and-gme-financing-analysis.md",
  "MCIP LQN.MD": "mcip-educational-platform-for-louisiana-quality-network.md",
  "NIH CLustering.md": "nih-research-portfolio-clustering-and-growth-strategy.md",
  "OFFICE OF RESEARCH.md": "office-of-research-strategy-and-analytics.md",
  "OLOL GME consultant.md": "external-gme-finance-consultation-for-olol-and-reimbursement-solutions.md",
  "ORAL PRESENTATIONS.md": "oral-presentations.md",
  "Office Student Research.md": "office-of-medical-student-research-strategic-support.md",
  "Office of Admissions.md": "office-of-admissions-data-strategy-and-accreditation-compliance.md",
  "Office of Community Engagement and Health Programs.md": "office-of-community-engagement-and-health-programs-analytics.md",
  "Office of Faculty Affairs-Faculty Development and Mentoring.md": "faculty-development-and-mentoring-evaluation-infrastructure.md",
  "Office of Faculty and Institutional Affairs.md": "faculty-and-institutional-affairs-data-strategy.md",
  "Office of Graduate Medical Education.md": "office-of-graduate-medical-education-data-strategy.md",
  "Office of Medical Education-Research Development.md": "office-of-medical-education-research-and-development-role.md",
  "Office of Medical Education.md": "office-of-medical-education-data-strategy-and-policy.md",
  "Office of Student Affairs.md": "office-of-student-affairs-data-analytics-and-academic-support.md",
  "Office of Undergraduate Medical Education.md": "office-of-undergraduate-medical-education-data-strategy.md",
  "PATIENT CARE ADN CLINICAL PRACTICE INITIATIVES.md": "patient-care-and-clinical-practice-initiatives.md",
  "POSTER PRESENTATIONS.md": "poster-presentations.md",
  "PROGRAM DEVELOPMENT INITIATIVES.md": "program-development-and-healthcare-initiatives.md",
  "Public private Partnership.md": "statewide-public-private-partnership-gme-transformation.md",
  "RESOIRCES TECHNOLOGY AND INNOVATION INITITATIVES.md": "resources-technology-and-innovation-initiatives.md",
  "Research Associate-Office of Medical Education.md": "research-associate-role-medical-education-data-strategy.md",
  "Resident Report Cards.md": "resident-and-fellow-quality-and-patient-safety-report-cards.md",
  "Reviewer.md": "peer-review-and-academic-evaluation.md",
  "Scholarly.md": "comprehensive-scholarly-portfolio-source.md",
  "chlorinated chronicles - Copy.md": "the-chlorinated-chronicles-duplicate-copy.md",
  "chlorinated chronicles.md": "the-chlorinated-chronicles-swimming-science-thought-leadership.md",
  "grants.md": "grants-and-contracts-original-detailed-source.md",
  "nsf-epscor.md": "nsf-epscor-crest-institutional-analytics-support.md"
};

const LIVE_ARTIFACT_LINKS = {
  "ai-03": { url: "https://datadrivenmed.github.io/Thalamus/", label: "View live project" },
  "ai-04": { url: "https://datadrivenmed.github.io/UpToDateAI/", label: "View live project" },
  "ai-05": { url: "https://medai-lexicon.vercel.app/", label: "View live project" },
  "ai-08": { url: "https://datadrivenmed.github.io/ChatGPT-for-Clinicians/", label: "View live project" },
  "ai-10": { url: "https://datadrivenmed.github.io/OpenEvidence/", label: "View live project" },
  "ai-11": { url: "https://datadrivenmed.github.io/Vetting-AI-Tools/", label: "View live project" },
  "sim-04": { url: "https://www.lsuhsc.edu/admin/vcaf/mcip.aspx", label: "View live project" },
  "an-04": { url: "https://public.tableau.com/app/profile/ramparagi/vizzes", label: "View live project" },
  "an-05": { url: "https://datadrivenmed.github.io/hwc-analytics/", label: "View live project" },
  "res-04": { url: "https://datadrivenmed.github.io/nih-funding-intelligence-explorer/", label: "View live project" },
  "pol-10": { url: "https://datadrivenmed.github.io/Rural-Health-Strategic-Intelligence/", label: "View live project" },
  "pol-11": { url: "https://datadrivenmed.github.io/rural-health-signal-monitor/", label: "View live project" },
  "swim-02": { url: "https://swimed.substack.com/", label: "Read Substack" },
  "swim-03": { url: "https://datadrivenmed.github.io/nahco3-intel/", label: "View live project" },
};

const CLEANED_ARTIFACT_FILE_SET = new Set(Object.values(CLEANED_ARTIFACT_FILES_BY_SOURCE));

ARTIFACTS.forEach(a => {
  const mappedCleanFile = CLEANED_ARTIFACT_FILES_BY_SOURCE[a.sourceFile];
  const alreadyCleanFile = CLEANED_ARTIFACT_FILE_SET.has(a.sourceFile) ? a.sourceFile : null;
  a.cleanFile = mappedCleanFile || alreadyCleanFile || null;
  a.fullArtifactUrl = a.cleanFile ? `artifact.html?file=${encodeURIComponent(a.cleanFile)}&id=${encodeURIComponent(a.id)}` : null;
  const live = LIVE_ARTIFACT_LINKS[a.id];
  a.liveUrl = live ? live.url : null;
  a.liveLabel = live ? live.label : null;
});

const STATUS_DEFINITIONS = {
  featured: "Selected as a first-read artifact for senior reviewers.",
  confidential: "Public summary only; source material may contain internal or confidential context.",
  internal: "Internal evidence record summarized for public portfolio review.",
  draft: "Draft or pre-final work; not represented as final institutional policy.",
  live: "Public live artifact or externally accessible project.",
  synthetic: "Demonstration uses sample or synthetic data only.",
  evaluation: "Public or portfolio-based evaluation/briefing artifact.",
  privateProof: "Private proof may be needed for adoption, approval, or impact claims."
};

function evidenceStatusForArtifact(a) {
  const hay = [
    a.id, a.title, a.role, a.summary, a.strategic,
    ...(a.skills || []), ...(a.tags || [])
  ].join(" ").toLowerCase();
  const labels = [];
  const add = (key, label) => {
    if (!labels.some(item => item.key === key)) labels.push({ key, label });
  };

  if (a.featured) add("featured", "Featured");
  if (a.confidential) add("confidential", "Confidential");
  if (a.liveUrl) add("live", "Live public artifact");
  if (/synthetic|sample data|demonstration prototype/.test(hay)) add("synthetic", "Synthetic data demo");
  if (/pre-final|draft|for review|leadership-ready draft/.test(hay)) add("draft", "Draft / pre-final");
  if (/evaluation|briefing|review|assessment|analysis|vetting/.test(hay)) add("evaluation", "Evaluation / briefing");
  if (!a.liveUrl && !/synthetic/.test(hay)) add("internal", "Internal evidence record");
  if (/adopted|approved|secured|successful|world-first|first in the world|full acgme/.test(hay)) add("privateProof", "Proof-sensitive claim");

  return labels;
}

function applyEvidenceStatusMetadata(artifacts = ARTIFACTS) {
  artifacts.forEach(a => {
    a.statusLabels = evidenceStatusForArtifact(a);
    a.statusSummary = a.statusLabels.map(s => s.label).join(" | ");
    a.evidenceStrength = a.statusLabels.some(s => s.key === "live")
      ? "Public artifact available"
      : a.statusLabels.some(s => s.key === "draft")
        ? "Draft evidence; adoption not implied"
        : a.statusLabels.some(s => s.key === "confidential")
          ? "Public summary; source proof may be private"
          : "Portfolio evidence record";
  });
}

applyEvidenceStatusMetadata();

// Hero / About stats
const HERO_STATS = [
  { num: "70+",  lbl: "Residency & fellowship programs with more than 1000 FTEs (Medicare/ Medicaid GME policy & regulations, three major healthcare systems across the state)" },
  { num: "90+",  lbl: "Integrated institutional data sources" },
  { num: "25+", lbl: "Departments and centers in institutional analytics scope" },
  { num: "Multiple federal and state", lbl: "Federal and state policy scopes analyzed for strategic alignment" },
  { num: "21",   lbl: "Pilots in NCI AI Innovation Program contribution" },
  { num: "82",   lbl: "Artifacts in capability portfolio" },
];

// Audiences master list
const AUDIENCES = [
  "Dean", "Senior leadership", "School leadership", "HSC leadership", "University leadership", "State leadership", "Search committees",
  "GME leadership", "Faculty Affairs", "Research office",
  "External agencies", "Consulting firms",
];

const ALL_SKILLS = (() => {
  const s = new Set();
  ARTIFACTS.forEach(a => a.skills.forEach(k => s.add(k)));
  return [...s].sort();
})();

const ALL_AUDIENCES = (() => {
  const s = new Set();
  ARTIFACTS.forEach(a => a.audience.forEach(k => s.add(k)));
  return [...s].sort();
})();

Object.assign(window, {
  CAPABILITIES, ARTIFACTS, FLAGSHIP_IDS, HERO_STATS,
  AUDIENCES, ALL_SKILLS, ALL_AUDIENCES,
  STATUS_DEFINITIONS, applyEvidenceStatusMetadata,
});
