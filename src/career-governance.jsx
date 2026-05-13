/* global window, React */
// =============================================================
// Career & Governance page - internal leadership record
// =============================================================

function CareerGovernancePage() {
  const careerArc = [
    [
      "01",
      "Clinical foundation",
      "Physician training and hospital care",
      "Early medicine, ICU, casualty, and emergency-unit experience created a grounded view of clinical operations, patient needs, and frontline care delivery.",
      "Built clinical credibility and an operator's understanding of healthcare systems."
    ],
    [
      "02",
      "Public health and prevention systems",
      "IDPH, WISEWOMAN, women's health, NO/AIDS, ADAPT-POL",
      "State public health, CDC-funded prevention work, women's health policy support, county implementation, HIV prevention data systems, and community-based intervention adaptation.",
      "Built public-sector fluency, population-health perspective, program implementation experience, and cross-office coordination."
    ],
    [
      "03",
      "Medical education, research, and patient safety",
      "OMERAD, medical education research, simulation, AHRQ / NIH work",
      "Medical education scholarship, learner assessment, faculty development, patient-safety simulation, evaluation design, and academic-community partnership work.",
      "Built the evaluation and CQI foundation behind later accreditation, student success, and institutional learning systems."
    ],
    [
      "04",
      "Accreditation, analytics, and institutional infrastructure",
      "LCME, ACGME, CME, admissions, UME, GME, student affairs, faculty affairs",
      "Longitudinal education data, predictive analytics, dashboards, accreditation readiness, student outcomes, faculty analytics, and governance documentation across core academic offices.",
      "Built institutional operating systems, not just reports."
    ],
    [
      "05",
      "Workforce finance, policy, and cross-system strategy",
      "GME finance, CMS, Medicaid, workforce, commissions, legislative support",
      "Medical Education Commission work, Healthworks Commission participation, legislative data support, specialty shortage task-force support, GME contracts, cost reports, and workforce analysis.",
      "Built cross-system capacity across the school, health systems, state policy, and public-sector workforce planning."
    ],
    [
      "06",
      "Executive strategy, AI governance, and swim science leadership",
      "AI policy, research strategy, executive decision support, international swimming and swim science",
      "AI governance, clinical AI evaluation, research intelligence, NCI and FDA-facing strategy, executive analytics, public digital scholarship, international swimming experience, anti-doping service, and swim science thought leadership.",
      "Shows a varied leadership profile: institutional strategist, systems thinker, policy translator, analytics builder, and high-performance sport/science communicator."
    ]
  ];

  const summaryCards = [
    ["Career arc", "Clinical medicine, state public health, CDC-funded prevention, medical education, accreditation, workforce policy, AI governance, and swim science leadership."],
    ["Governance trust", "LCME, CQI, CME, strategic planning, MCIP informatics, Medical Education Commission, Louisiana Healthworks Commission, and state policy support."],
    ["Cross-system scope", "School of Medicine, HSC, LSU System, health systems, state agencies, federal agencies, FQHC partners, and international collaborators."],
    ["Evidence base", "Administrative responsibilities, strategic consultations, funded projects, legislative support, scholarship, public digital artifacts, and sports governance."]
  ];

  const officeScope = [
    ["Dean's Office and Accreditation", "LCME, ACCME, ACGME, CQI, strategic planning compliance, documentation, dashboards, and institutional governance."],
    ["Admissions", "Predictive admissions analytics, LCME alignment, applicant strategy, MCAT analysis, vendor scoping, and diversity pipeline support."],
    ["UME and Medical Education", "Curriculum support, educational outcomes, NBME and USMLE analytics, AAMC GQ monitoring, longitudinal education data, and program evaluation."],
    ["GME", "ACGME improvement support, annual program reviews, resident surveys, workforce studies, CMS cost reports, GME funding, and LSU System reporting."],
    ["Student Affairs", "Residency match outcomes, academic support, career advising analytics, educational records, medical student research reporting, and student success indicators."],
    ["Community Engagement and Health Programs", "Student, admissions, GME, faculty, leadership, feeder school, and community engagement analytics."],
    ["Research Services and Research Strategy", "Research grant analytics, scholarly activity analytics, SWOT analysis, Huron data support, NSF facilities reporting, and research growth strategy."],
    ["Faculty and Institutional Affairs", "Faculty rank, time in rank, tenure, term appointment, salary equity, climate, retention, benchmarking, and data governance."],
    ["CALS and Simulation", "Simulation evaluation frameworks, standardized patient infrastructure, clinical performance metrics, patient outcomes, utilization, and longitudinal training impact."],
    ["Healthcare Workforce and Policy", "Physician supply and demand, HPSA and MUA/P, rural workforce, Medical Education Commission reporting, legislative support, and state workforce strategy."]
  ];

  const internalGovernance = [
    ["Advisory Committee on Continuing Medical Education", "2014-present", "CME governance and educational quality."],
    ["Enhancing Quality Improvement for Patients Program Steering Committee", "2012-2020", "Quality improvement, patient care education, and program oversight."],
    ["LSU School of Medicine Strategic Planning Advisory Committee", "2024", "Schoolwide strategic planning participation."],
    ["Strategic Planning Clinical Workgroup", "2024", "Clinical strategy alignment."],
    ["Strategic Planning Research Workgroup", "2024", "Research enterprise strategy."],
    ["Strategic Planning Education Workgroup", "2024", "Education mission strategy."],
    ["LCME Accreditation Steering Committee and Quality Improvement and Accreditation Team", "2023-present", "Accreditation governance and CQI leadership."],
    ["Managed Care Incentive Payment Program Informatics Team", "2018-present", "Medicaid incentive program, quality, informatics, and data infrastructure."]
  ];

  const policyService = [
    ["Illinois Department of Public Health Office of Women's Health", "Supported state women's health program and policy work, including Medical Advisory Board materials, demographic and risk data, WISEWOMAN program research, program development, CPT coding, IRB inputs, curriculum support, and bill-drafting support for the Office during major women's cancer prevention, screening, and funding initiatives."],
    ["Illinois WISEWOMAN Program", "Team member through 2005 on a CDC cardiovascular prevention program linked to breast and cervical cancer screening infrastructure, including coordination with chronic disease, aging, health statistics, health promotion, county partners, and UIC-linked collaborators."],
    ["Louisiana State Medical Education Commission", "Member, 2010-2019. Supported medical education and GME data translation, annual reports, public reporting, and funding-related recommendations."],
    ["Louisiana Healthworks Commission", "Was a member of the state workforce commission, showing participation in statewide healthcare workforce coordination and policy infrastructure."],
    ["DHH / LDH and rural health work", "Supported HPSA and MUA/P validation, physician supply infrastructure, rural workforce analysis, and policy-relevant healthcare workforce reporting."]
  ];

  const bills = [
    ["HCR241", "Requested DHH and LSU Board of Supervisors study current and future healthcare and medical education delivery in Louisiana."],
    ["SB428", "Authorized LSU Health Sciences Center to maximize affiliation agreements with other hospitals to maximize Medicare GME monies."],
    ["HCR116", "Requested DHH and LSU Board of Supervisors study healthcare and medical education delivery and recommendations."],
    ["SB98", "Provided definition of major teaching hospital for hospital prospective reimbursement methodology."],
    ["SB178", "Created a fund for out-of-state tuition for students in medical education programs not offered in Louisiana."],
    ["SR191", "Requested study of governance, efficiencies, and service delivery of LSU HCSD and LSU Health Sciences Center."],
    ["HR42", "Required House Appropriations approval for certain cooperative endeavor agreements involving public hospital management changes."],
    ["HCR83", "Created a task force to study, identify, and recommend solutions for specialist physician shortages in Louisiana."],
    ["HCR134", "Created the Medical Education and Research Finance Work Group for formula-based funding recommendations."],
    ["HB885", "Enacted the Safety Net Hospital Preservation Act."],
    ["HCR17", "Created study committee to evaluate and recommend improvements to Louisiana's healthcare delivery system."],
    ["HR230", "Requested study of ways to enhance access to health services in health professional shortage areas."],
    ["SB408", "Provided definition of major teaching hospital for hospital prospective reimbursement methodology."],
    ["HR205", "Requested LDH and Louisiana Workforce Commission committee to address direct support professional workforce shortage."],
    ["HB1033", "Provided for the Workforce and Innovation for a Stronger Economy Fund."],
    ["SB337", "Provided for development of outcomes-based funding formula for postsecondary education."]
  ];

  const footprint = [
    ["School of Medicine", "Dean's Office, Faculty and Institutional Affairs, Admissions, UME, GME, Student Affairs, Diversity and Community Engagement, Research Services, CALS."],
    ["Health Sciences Center", "Chancellor's Office, ORS, Sponsored Projects, Contracts, Accounting, Clinical Trials Office, LSU Healthcare Network, Cancer Center."],
    ["Health-system partners", "LCMC Health, LSU Healthcare Network, Interim LSU Public Hospital, Louisiana Hospital Enterprise, training sites, and GME partner environments."],
    ["State agencies and commissions", "LDH, DHH, Louisiana legislature, Medical Education Commission, Healthworks Commission, Bureau of Primary Care and Rural Health."],
    ["Federal and national bodies", "CDC, NIH/AHRQ, CMS, NSF, ACGME, LCME, AAMC, ACS, FDA-facing policy response work."],
    ["Community and FQHC partners", "Excelth, Jefferson Parish Community Health Center, Louisiana Primary Care Association, Southeast Louisiana AHEC, LA-SEARCH."],
    ["External academic and international partners", "Imperial College London, Monash / Gippsland Medical School, Tulane, UT Health San Antonio, UIC-linked collaborators, IIT Madras, UCSD."],
    ["International service and sports governance", "Integrated Council of Noble Swimmers, international swimmer background, swim science writing, and former Doping Control Officer with International Doping Tests & Management, Sweden."]
  ];

  const strategicWork = [
    "GME contracts and negotiations",
    "GME policy, financing, workforce strategy, CMS cost reports, DGME and IME interpretation",
    "Admissions management platform transformation and vendor scoping",
    "NIH research portfolio clustering and growth strategy",
    "Huron / LSU A&M research strategic growth data support",
    "FDA RFI response on AI-enabled real-time clinical trials",
    "LSU-LCMC NCI AI Innovation Program contribution",
    "School of Medicine AI governance and policy framework",
    "AI tool vetting, clinical AI literacy, and public MedAI education tools",
    "Rural health, workforce, and legislative policy analytics"
  ];

  const activeInitiatives = [
    "Cancer Screening Video Learning Platform for MCIP",
    "Legislative presentations and data reporting for UME, GME, residency match statistics, educational funding, and fiscal metrics",
    "Medical school and GME residency match statistics for Dean-level reporting and media releases",
    "Hospital CMS cost reports and GME funding analysis",
    "Board of Regents Support Fund Endowed Superior Graduate Student Scholarships support",
    "Physician workforce shortage analysis for LSU Foundation grant applications",
    "Continuing Medical Education activities analysis",
    "GME data reporting for LSU System Office",
    "Faculty promotions and salary study with the Committee on Women's Affairs",
    "NSF Science and Engineering Research Facilities Survey"
  ];

  const completedWork = [
    ["Community and rural health", "Rural practice predictive model, rural track practice-location tracking, HPSA and MUA/P validation, physician supply infrastructure, Excelth and Jefferson Parish Community Health Center partnership, and FQHC academic rotation model."],
    ["Applied analytics and research", "Simulation Center usage analysis, MCAT predictive work, admissions leadership project support, physician workforce analysis, COVID-19 reporting and forecasting, Charity Hospital market-value analysis, UMCNO marketing data, LSU System workforce data, and AHEC / LA-SEARCH evaluation."],
    ["Finance and resource management", "MCIP reporting and informatics framework, GME Medicaid funding, DSH and LSU hospital Medicaid funding analysis, NIH grant funding benchmarking, TexLa Telehealth Resource Center support, and departmental funding distribution verification."]
  ];

  const fundedRoles = [
    ["Illinois WISEWOMAN Program", "CDC DHDSP", "Data Analyst"],
    ["ADAPT-POL New Orleans", "CDC Community Based Organization Program", "Data Analyst"],
    ["STEPS", "NIH/AHRQ", "Data Analyst / Project Manager"],
    ["Medtronic Patient Safety Course", "Medtronic / LSUHSC", "Data Analyst"],
    ["ACS Education Institutes accreditation and reaccreditation", "American College of Surgeons", "Evaluator / Data Analyst"],
    ["Louisiana CHC Academic Residency / Rotation Model", "Louisiana Primary Care Association", "Data Analyst / Project Manager"],
    ["Louisiana Greater New Orleans CHC Infrastructure Investment Grant", "GNOCHC / Louisiana DHH", "Co-PI"],
    ["Louisiana Managed Care Incentive Program", "Louisiana Department of Health", "Consultant"],
    ["CALS Project", "U.S. House Appropriations community project funding request", "Evaluation Consultant"]
  ];

  const scholarship = [
    "Peer-reviewed and indexed work across public health, HIV prevention, patient safety, simulation, operating-room teamwork, medical education, and physician workforce.",
    "AHRQ patient safety publications and debriefing / simulation scholarship, including tri-continental debriefing work.",
    "Medical Education Commission governmental technical reports from 2010 through 2014.",
    "Reviewer service for Journal of General Internal Medicine, Annals of Family Medicine, British Medical Journals, AHRQ Advances in Patient Safety, SGEA abstracts, and NCI Cancer Education Grant evaluation.",
    "Book: Nutrition for Swimmers, linking competitive swimming, training, and public education."
  ];

  const recognitions = [
    "Paper of Distinction, 2011, Association for Surgical Education / APDS / ARCS",
    "Outstanding Presentation, 2010, AAMC Medical Education Scholarship Award",
    "Finalist, Best Student Abstract, 2004, APHA",
    "Nominated, Student Worker of the Year, 2004, Illinois Public Health Association",
    "Guest of Honor, 1999, University of Mysore",
    "Swimming and water polo honors, 1988-1997, State Swimming Association and Indian National Swimming Federation",
    "Captain, Karnataka State Swim Team for 7 years, 1987-1993",
    "Best Sportsman of the Year for 8 years, 1987-1994"
  ];

  return (
    <main className="page-enter career-page">
      <section className="career-hero">
        <div className="container">
          <Eyebrow light>Career &amp; Governance</Eyebrow>
          <h1>Career arc and governance footprint for <em>institutional leadership.</em></h1>
          <p>
            A comprehensive but organized view of the operating range behind the portfolio: clinical care,
            state public health, CDC-funded prevention work, medical education systems, accreditation,
            workforce policy, GME finance, AI governance, research strategy, and international swim science.
          </p>
          <div className="career-hero-note">
            Built for institutional leaders reviewing scope, trust, judgment, execution capacity, and cross-system reach.
          </div>
        </div>
      </section>

      <section className="career-light career-snapshot">
        <div className="container career-grid4">
          {summaryCards.map(([h, d]) => (
            <article className="career-stat-card" key={h}>
              <span>{h}</span>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="career-light">
        <div className="container career-two-col">
          <div className="career-label">§ Career arc</div>
          <div>
            <h2>An expanding operating radius, not a narrow analytics track.</h2>
            <p className="career-intro">
              The pattern is cumulative: clinical and public-health experience became medical education evaluation,
              then institutional analytics and accreditation infrastructure, then workforce finance, state policy,
              executive strategy, AI governance, and swim science communication.
            </p>
            <div className="career-arc-flow">
              {careerArc.map(([num, h, sub, body, signal], index) => (
                <article className="career-arc-node" key={num}>
                  <div className="career-arc-num">{num}</div>
                  <h3>{h}</h3>
                  <strong>{sub}</strong>
                  <p>{body}</p>
                  <div className="career-arc-signal">{signal}</div>
                  {index < careerArc.length - 1 && <span className="career-arc-arrow">→</span>}
                </article>
              ))}
            </div>
            <div className="career-conclusion-box">
              <strong>What institutional leaders should see</strong>
              <p>
                This record shows a systems-oriented institutional leader who uses data as one tool within a broader
                leadership toolkit: clinical context, public health implementation, program evaluation, accreditation,
                finance, workforce strategy, policy translation, governance design, and executive decision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="career-dark">
        <div className="container career-two-col">
          <div className="career-label gold">§ Public health foundation</div>
          <div>
            <h2>State-government, CDC-funded, and community-based research roots.</h2>
            <div className="career-card-grid three">
              <article>
                <h3>IDPH Office of Women's Health</h3>
                <p>Supported Office of Women's Health portfolio through Medical Advisory Board materials, demographic and health-risk data, program development, medical updates, CPT coding, IRB inputs, curriculum support, training materials, and bill-drafting support for the Office during major women's health prevention and funding initiatives.</p>
              </article>
              <article>
                <h3>Illinois WISEWOMAN Program</h3>
                <p>Team member through 2005 on CDC cardiovascular prevention work linked to breast and cervical cancer screening infrastructure, including coordination across IDPH offices, county-level public health partners, and UIC-linked collaborators.</p>
              </article>
              <article>
                <h3>NO/AIDS and ADAPT-POL</h3>
                <p>Managed and supported community-based HIV prevention data systems and CDC project reporting for intervention adaptation work using online venues, focus groups, and counseling workflows.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="career-light">
        <div className="container career-two-col">
          <div className="career-label">§ Institutional operating scope</div>
          <div>
            <h2>Administrative responsibility across the academic medical center.</h2>
            <div className="career-card-grid two">
              {officeScope.map(([h, d]) => <article key={h}><h3>{h}</h3><p>{d}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="career-light alt">
        <div className="container career-two-col">
          <div className="career-label">§ Governance and committees</div>
          <div>
            <h2>Institutional trust signals.</h2>
            <div className="governance-card-grid">
              {internalGovernance.map(([group, years, signal]) => (
                <article className="governance-card" key={group}>
                  <span>{years}</span>
                  <h3>{group}</h3>
                  <p>{signal}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="career-dark">
        <div className="container career-two-col">
          <div className="career-label gold">§ Public policy and commissions</div>
          <div>
            <h2>State policy, legislative support, and commission service.</h2>
            <div className="career-card-grid two policy-cards">
              {policyService.map(([h, d]) => <article key={h}><h3>{h}</h3><p>{d}</p></article>)}
            </div>
            <details className="career-details">
              <summary>Open full Louisiana legislative bill support table</summary>
              <div className="career-table-wrap dark-table">
                <table className="career-table">
                  <thead><tr><th>Bill</th><th>Policy description</th></tr></thead>
                  <tbody>{bills.map(([b, d]) => <tr key={b}><td>{b}</td><td>{d}</td></tr>)}</tbody>
                </table>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="career-light">
        <div className="container career-two-col">
          <div className="career-label">§ Cross-system footprint</div>
          <div>
            <h2>Operating radius across institutions, sectors, and partners.</h2>
            <div className="footprint-grid">
              {footprint.map(([h, d]) => <article key={h}><h3>{h}</h3><p>{d}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="career-light alt">
        <div className="container career-two-col">
          <div className="career-label">§ Advisory work</div>
          <div>
            <h2>Strategic consultations and evidence products.</h2>
            <div className="career-bullet-grid">
              {strategicWork.map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="career-light">
        <div className="container career-two-col">
          <div className="career-label">§ Active and completed work</div>
          <div>
            <h2>Current initiatives and applied analytics record.</h2>
            <div className="career-columns">
              <div>
                <h3> Representative Strategic Initiatives</h3>
                <ul className="career-list">{activeInitiatives.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <h3>Completed applied analytics work</h3>
                {completedWork.map(([h, d]) => <div className="mini-block" key={h}><strong>{h}</strong><p>{d}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-light alt">
        <div className="container career-two-col">
          <div className="career-label">§ Funded and sponsored roles</div>
          <div>
            <h2>Grants, contracts, and accountable project environments.</h2>
            <div className="career-table-wrap">
              <table className="career-table">
                <thead><tr><th>Project / program</th><th>Agency / context</th><th>Role</th></tr></thead>
                <tbody>{fundedRoles.map(r => <tr key={r[0]}>{r.map(c => <td key={c}>{c}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="career-dark final">
        <div className="container career-two-col">
          <div className="career-label gold">§ Scholarship and recognition</div>
          <div>
            <h2>Scholarly credibility, reviewer service, awards, and sports leadership.</h2>
            <div className="career-columns">
              <div>
                <h3>Scholarly snapshot</h3>
                <ul className="career-list gold-list">{scholarship.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <h3>Awards and athletic leadership</h3>
                <ul className="career-list gold-list">{recognitions.map(x => <li key={x}>{x}</li>)}</ul>
                <div className="mini-block gold-block">
                  <strong>International Service &amp; Sports Governance</strong>
                  <p>Vice President, Integrated Council of Noble Swimmers, former Doping Control Officer, International Doping Tests &amp; Management, Sweden, and public swim science contributor.</p>
                </div>
              </div>
            </div>
            <div className="career-cta-row">
              <window.Link to="/library" className="btn gold">Open evidence library <window.ArrowRight size={13} /></window.Link>
              <window.Link to="/ask" className="btn outline">Ask the portfolio</window.Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { CareerGovernancePage });
