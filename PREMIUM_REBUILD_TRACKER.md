# Premium Portfolio Rebuild Tracker

## Safety boundary

- Source site: `main` branch.
- Review branch: `premium-portfolio-preview-2026-08-21`.
- The review branch preserves the current live portfolio and adds new files/layers; no changes from this rebuild have been merged to `main`.
- Baseline live runtime inventory used for preservation: **97 evidence/artifact records**.
- The legacy filename `ARTIFACT_MANIFEST_82.csv` and `data.jsx` comment are not treated as the live record count.

## Source hierarchy used for the premium rebuild

1. Current 97-record live portfolio runtime and current Career & Governance page.
2. Updated CV dated June 28, 2026.
3. 2014–2019 School of Medicine strategic-plan closure report.
4. KPSOM Chief Accreditation and Strategy Officer leadership profile (August 2026) for the review-only role crosswalk.
5. User-supplied career clarifications and newly completed work from the August 2026 portfolio audit conversation.
6. Public project repositories/resources where needed to describe public prototypes accurately.

## Evidence-model rule

The premium site is not a second CV. It uses four layers:

`Career work → granular evidence records → capability domains → executive case studies`

A named project should be independently searchable when it represents a distinct institutional problem, audience, method, governance role, decision, funded activity, external collaboration, or public work product. Components of one coherent project remain inside a single evidence record rather than being fragmented into micro-records.

## Current premium architecture

- Premium preview entry point: `premium-preview.html`
- Core normalized additions/corrections: `src/premium-evidence.js`
- Expanded CV normalization: `src/premium-evidence-expanded.js`
- Premium Home / Evidence Library / Executive Case Studies: `src/premium-pages.jsx`
- Premium design layer: `premium.css`
- Review-only KPSOM CASO crosswalk: `premium-caso-alignment.html`

## Executive case layer

The premium case layer remains intentionally selective at 18 themes:

1. Strategic Planning as an Institutional Operating Cycle
2. Accreditation Leadership Across the Medical Education Continuum
3. Predictive ACGME Accreditation Intelligence
4. Institutional Effectiveness: Admissions to Practice
5. GME Finance, Contracts & Academic Health-System Strategy
6. UMCNO Academic Partnership Governance
7. Creation of the EQuIP GME Quality Infrastructure
8. Enterprise AI Governance & Policy Diffusion
9. Pan-Oncology Tumor Board Intelligence
10. Federal AI Science Policy & NCI Readiness
11. NIH Research Intelligence & Growth Strategy
12. International Academic Partnership Development: India
13. Louisiana Health Workforce, Public Policy & State Strategy
14. Admissions Technology & Learner-Outcome Intelligence
15. Enterprise Technology Due Diligence & Vendor Governance
16. Simulation, Patient Safety & Evaluation Science
17. Facilities, Space & Operational Infrastructure
18. Faculty Development, Workforce & Institutional Culture

## Major normalized evidence added beyond the live portfolio umbrellas

### Strategy and institutional effectiveness
- 2014–2019 Strategic Plan Closure & Institutional Performance Evaluation
- School of Medicine 2025–2030 strategic-planning process ownership
- School of Allied Health Professions strategic-planning data-framework consultation
- Medical Education Lifecycle Intelligence Architecture: admissions to practice
- Historical Longitudinal Educational Database

### Accreditation and CQI
- LCME DCI, self-study evidence, element monitoring, site-visit readiness and responses
- ACGME Annual Institutional Review
- ACGME Annual Program Evaluation, surveys and citation surveillance
- Predictive ACGME citation-risk modeling
- ACGME corrective-action analytics and pre-review intervention
- ACGME CLER data readiness with UMCNO
- ACCME accreditation/CME CQI contribution
- SACSCOC institutional accreditation data-response support
- CPHE/SACSCOC emerging accreditation policy analysis
- ACS Accredited Education Institute accreditation/reaccreditation support

### Academic health systems / GME finance
- UMCNO Academic Advisory Committee decision support
- LCMC GME contract, FTE and cap decision support
- OLOL GME finance and affiliation strategy
- Ochsner GME training-site and financing analysis
- VA GME training-site and affiliation analysis
- Louisiana Medicaid GME funding liaison/technical support
- Hospital CMS cost-report and GME funding analysis
- Louisiana Medicare GME cap analysis
- Medicaid Section 1115 waiver / teaching-health-center evaluation
- UTMB CMS/GME financing analysis
- UT Health San Antonio GME/CMS consultation
- Louisiana Vision for Medicaid Support of GME
- Statewide GME workforce and financing analysis
- Louisiana GME White Paper support
- Bogalusa Family Medicine residency development
- GME clinical report cards

### MCIP / statewide quality infrastructure
- MCIP operations, steering and informatics architecture
- MCIP GME component
- MCIP cancer-screening video learning platform
- Greater New Orleans CHC Infrastructure Investment Grant — Co-PI / resident-fellow clinical outcomes dashboard

### Admissions / UME / student outcomes
- MCAT transition and admissions predictor analysis
- Admissions leadership project support
- MCAT and pre-clinical GPA predictive-validity support
- Tulane equity/performance study data support
- Medical Student/GME match analysis for public communication
- Dean's Office match outcome reporting
- Children's Hospital clinical-rotation matching algorithm
- Educational outcomes and student-performance reporting
- Learner assessment / performance-based evaluation consultation

### Research / cancer / innovation
- NIH comparative funding analysis
- NIH research-intelligence external dissemination metrics
- LSU A&M / Huron research strategic-growth data support
- NSF Science & Engineering Research Facilities Survey
- NSF EPSCoR CREST support (retained from live portfolio)
- NIH MD/PhD training-grant analytics
- TexLa Telehealth Resource Center workforce grant support
- Board of Regents scholarship data support
- Departmental funding-distribution verification
- Federal AI Science Strategy, Cancer Data Governance & NCI Readiness
- Cancer Center AI governance advisory support
- Pan-Oncology Tumor Board Intelligence

### Enterprise technology / facilities / operations
- Watermark Faculty Success / Digital Measures procurement and due diligence
- Security & compliance review
- Vendor risk assessment
- Contract negotiation / legal review
- CALS faculty/program space-requirements planning
- Clinical department relocation and space planning
- Program-space and departmental-resource tabulation
- New Orleans healthcare market / Charity Hospital redevelopment analysis
- Long-term supports and services cost analysis
- High-cost patient-care management analysis

### Faculty affairs
- Faculty promotions, salary and equity study
- Faculty lifecycle analytics: recruitment, retention, rank and tenure
- LSUHSC faculty/staff workforce analysis for LSU System
- Teaching assessment for faculty recognition/promotion/tenure
- Academy for the Advancement of Educational Scholarship consultation

### Louisiana workforce, rural health and public policy
- Louisiana State Medical Education Commission
- Louisiana Healthworks Commission
- LDH/DHH Bureau of Primary Care & Rural Health consultancy
- Louisiana State Board of Medical Examiners workforce reporting
- Louisiana Healthcare Quality Forum analysis
- Health & Welfare Committee workforce support
- Acadiana regional workforce report
- State specialty workforce analysis
- State physician workforce + LSUHSC GME statistics for LSU System
- Rural practice predictive modeling / Rural Track outcomes
- Louisiana physician-supply data infrastructure
- LSU graduates practicing in MUA/P analysis
- Southeast Louisiana AHEC / LA-SEARCH evaluation
- AHEC grant data support
- State Student Loan Repayment Program support
- National Health Service Corps Ambassador role
- Academic–community health center partnership
- Interprofessional FQHC rotation model
- Community-based rotations with LDH/LPCA/FQHCs
- New Orleans Metro physician-workforce grant
- LSU Foundation physician-workforce shortage grant
- Bogalusa residency alumni outcomes
- Pediatric physician-workforce analysis
- Primary care after a natural disaster data support
- LSUHSC legislative presentation data support
- Medicaid Expansion workforce-capacity analysis
- District-level legislative/economic footprint analysis
- Equitable funding support related to LSUHSC Shreveport / University Health
- Individual Louisiana bill/resolution records retained as searchable evidence

### International strategy
- India Ministry of Education campus engagement and institutional point-of-contact role
- Study in India opportunity-development engagement
- IIT Madras collaboration and MOU architecture (retained and clarified)
- UCSD-linked genomics planning
- WhatsApp digital-health collaboration pillar

### Simulation / patient safety
- Emergency Medicine multiroom simulation study design and analytics
- Emergency Medicine disaster-simulation research plan
- Simulation Center utilization analysis
- Medtronic Patient Safety Course evaluation
- AHRQ STEPS/TeamSTEPPS work (retained)
- Tri-continental debriefing collaboration
- CALS $10M federal community-project funding evaluation
- LSU Healthcare Network encounter mapping
- Interim Louisiana Hospital patient-level mapping
- UMCNO/Charity/ILH physician-alumni data support

### AI governance and digital transformation
- Student AI policy
- GME AI policy
- Graduate School AI-policy support
- LSUHSC-level AI-policy support
- Cross-school policy diffusion to other health-professions schools
- LSU System AI governance working-group contribution / CIO nomination
- Cancer Center AI governance
- Collision-free preservation records for AI hiring and faculty architecture resources
- Existing live AI resources remain preserved

### Early public health / research foundation
- Illinois Department of Public Health Office of Women's Health
- Illinois WISEWOMAN
- Southern Illinois University School of Medicine research-analysis role
- CDC ADAPT-POL
- NO/AIDS Task Force data-management role

### External scholarship / sports governance
- Published ASCA invited article, July 29, 2026
- Integrated Council of Noble Swimmers — Vice President
- International Doping Tests & Management — Doping Control Officer
- Swimming Federation of India / Basavanagudi Aquatic Centre strategic-advisory work
- Existing SwimEd / Chlorinated Chronicles / SwimAI artifacts retained

## Accuracy boundaries that must remain in any eventual public version

- No claim of eight years of direct staff supervision.
- No claim of WSCUC Accreditation Liaison Officer experience.
- No claim of BPPE experience.
- No claim of being the formal SACSCOC liaison.
- LCME, ACGME and ACCME outcomes are described as successful institutional accreditation outcomes to which Ram was a major contributor; do not imply sole formal leadership unless separately documented.
- Strategic-planning process ownership is distinguished from Dean-level formal institutional accountability.
- Tumor Board Intelligence is a research prototype, not a clinically validated autonomous treatment system.
- Research-intelligence social metrics demonstrate reach/visibility, not verified adoption or global researcher use.
- Cancer Center AI governance support does not claim authorship of other investigators' underlying clinical pilots.
- Study in India engagement does not imply formal institutional membership or partnership in that program unless separately documented.

## Before any merge to `main`

1. Review the premium clone visually and for tone.
2. Reconcile all premium evidence IDs for duplicates/collisions.
3. Verify any public URLs and publication dates intended for display.
4. Decide which internal/sanitized records should remain public versus review-only.
5. Review executive cases for narrative strength and overclaim risk.
6. Update the public Scholarship page so the traditional academic record is easy to find.
7. Only after approval, plan a controlled migration from the premium branch to the live site.
