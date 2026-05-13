/* global window, React */
// =============================================================
// Consultation Footprint patch for Career & Governance page
// Adds a tiered consultation map while preserving the existing page.
// =============================================================

(function () {
  const OriginalCareerGovernancePage = window.CareerGovernancePage;

  function ConsultationFootprintSection() {
    const consultationTiers = [
      [
        "School of Medicine",
        "Dean's Office, LCME/CQI, Admissions, UME, GME, Student Affairs, Faculty and Institutional Affairs, Research Services, CALS, and AI governance.",
        "Trusted across core school missions: education, accreditation, student success, faculty affairs, research, GME, AI, and strategy."
      ],
      [
        "Health Sciences Center",
        "Chancellor's Office research data infrastructure, research portfolio intelligence, Sponsored Projects, Contracts, Accounting, Clinical Trials Office, Cancer Center, Huron / LSU A&M research growth support, and NSF facilities reporting.",
        "Translates school-level analytics into HSC-level institutional decision support."
      ],
      [
        "Health-system partners",
        "LCMC Health GME partnership and contract support, LSU Healthcare Network work, Interim LSU Public Hospital / Medicaid waiver dashboard work, Louisiana Hospital Enterprise CMS cost report and GME funding analysis, and partner hospital DGME / IME interpretation.",
        "Connects medical school strategy to clinical training sites, partner hospitals, contracts, and workforce finance."
      ],
      [
        "State and legislative",
        "Louisiana Medical Education Commission, Louisiana Healthworks Commission, Louisiana legislative bill support, specialty physician shortage task-force support, LDH / DHH Bureau of Primary Care and Rural Health consultation, HPSA and MUA/P validation, and rural workforce analysis.",
        "Operates beyond campus in state policy, workforce planning, rural health, and public-sector decision support."
      ],
      [
        "Federal and national",
        "CDC-funded WISEWOMAN and ADAPT-POL work, NIH/AHRQ STEPS patient-safety work, AHRQ reviewer role, NCI Cancer Education Grant evaluator role, CMS GME cost-report interpretation, FDA RFI response on AI-enabled clinical trials, AAMC communities, ACGME underserved areas/GME interest group, and ACS Education Institutes work.",
        "Interprets national funding, regulatory, accreditation, quality, research, and healthcare-financing frameworks."
      ],
      [
        "International and external academic",
        "Imperial College London patient-safety/simulation collaboration, Monash / Gippsland Medical School collaboration, Tulane, UT Health San Antonio, UIC-linked WISEWOMAN collaborators, IIT Madras / UCSD / LSU cancer and AI partnership framing, and former International Doping Tests & Management service.",
        "Works across institutions, countries, academic cultures, public health systems, sport science, and technical domains."
      ],
      [
        "Public digital and professional thought leadership",
        "AI governance artifacts, MedAI Lexicon, MedAI Teaching Guide, AI Tool Vetting Framework, OpenEvidence and UpToDate AI evaluations, Rural Health Strategic Intelligence, Rural Health Signal Monitor, NIH Funding Intelligence Explorer, swimming science analysis, and Nutrition for Swimmers.",
        "Converts complex institutional, clinical, policy, research, and performance-science knowledge into public-facing tools and education assets."
      ]
    ];

    return (
      <section className="career-light alt consultation-footprint-section">
        <div className="container career-two-col">
          <div className="career-label">§ Consultation footprint</div>
          <div>
            <h2>Consultation footprint across systems.</h2>
            <p className="career-intro">
              This section clarifies the level at which the work operates. The pattern is not narrow data support;
              it is advisory and technical translation work across school, HSC, health-system, state, federal,
              national, international, and public-facing domains.
            </p>
            <div className="consultation-grid">
              {consultationTiers.map(([tier, examples, signal]) => (
                <article className="consultation-card" key={tier}>
                  <h3>{tier}</h3>
                  <p>{examples}</p>
                  <div className="consultation-signal">{signal}</div>
                </article>
              ))}
            </div>
            <div className="career-conclusion-box consultation-conclusion">
              <strong>What this consultation record shows</strong>
              <p>
                People do not only ask for reports. They ask for structure, interpretation, translation, governance,
                and execution support across accreditation, finance, workforce, policy, research, AI, clinical education,
                and cross-system institutional strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (typeof OriginalCareerGovernancePage === "function") {
    window.CareerGovernancePage = function PatchedCareerGovernancePage() {
      return (
        <React.Fragment>
          <OriginalCareerGovernancePage />
          <ConsultationFootprintSection />
        </React.Fragment>
      );
    };
  }
})();
