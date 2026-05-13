/* global window, React */
// =============================================================
// Consultation Footprint patch for Career & Governance page
// Adds a tiered consultation map while preserving the existing page.
// =============================================================

(function () {
  const OriginalCareerGovernancePage = window.CareerGovernancePage;

  function ConsultationFootprintSection() {
    const consultationTiers = [
      {
        tier: "School of Medicine",
        chips: ["Dean's Office", "LCME / CQI", "Admissions", "UME", "GME", "Student Affairs", "Faculty Affairs", "Research Services", "CALS", "AI Governance"],
        signal: "Trusted across core school missions: education, accreditation, student success, faculty affairs, research, GME, AI, and strategy."
      },
      {
        tier: "Health Sciences Center",
        chips: ["Chancellor's Office", "Research Data Infrastructure", "Sponsored Projects", "Contracts", "Accounting", "Clinical Trials", "Cancer Center", "Huron / LSU A&M", "NSF Facilities Reporting"],
        signal: "Translates school-level analytics into HSC-level institutional decision support."
      },
      {
        tier: "Health-system partners",
        chips: ["LCMC Health", "GME Partnerships", "LSU Healthcare Network", "Interim LSU Public Hospital", "Louisiana Hospital Enterprise", "CMS Cost Reports", "DGME / IME", "Training Sites"],
        signal: "Connects medical school strategy to clinical training sites, partner hospitals, contracts, and workforce finance."
      },
      {
        tier: "State and legislative",
        chips: ["Medical Education Commission", "Healthworks Commission", "Legislative Bill Support", "Specialty Shortage Task Force", "LDH / DHH", "HPSA", "MUA / P", "Rural Workforce"],
        signal: "Operates beyond campus in state policy, workforce planning, rural health, and public-sector decision support."
      },
      {
        tier: "Federal and national",
        chips: ["CDC WISEWOMAN", "CDC ADAPT-POL", "NIH / AHRQ STEPS", "AHRQ Reviewer", "NCI Grant Evaluation", "CMS GME", "FDA RFI", "AAMC Communities", "ACGME", "ACS Education Institutes"],
        signal: "Interprets national funding, regulatory, accreditation, quality, research, and healthcare-financing frameworks."
      },
      {
        tier: "International and external academic",
        chips: ["Imperial College London", "Monash / Gippsland", "Tulane", "UT Health San Antonio", "UIC-linked WISEWOMAN", "IIT Madras", "UCSD", "International Doping Tests & Management"],
        signal: "Works across institutions, countries, academic cultures, public health systems, sport science, and technical domains."
      },
      {
        tier: "Public digital and professional thought leadership",
        chips: ["AI Governance", "MedAI Lexicon", "MedAI Teaching Guide", "AI Tool Vetting", "OpenEvidence", "UpToDate AI", "Rural Health Intelligence", "NIH Funding Explorer", "Swimming Science", "Nutrition for Swimmers"],
        signal: "Converts complex institutional, clinical, policy, research, and performance-science knowledge into public-facing tools and education assets."
      }
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
              {consultationTiers.map(({ tier, chips, signal }) => (
                <article className="consultation-card" key={tier}>
                  <h3>{tier}</h3>
                  <div className="consultation-chip-row">
                    {chips.map((chip) => <span key={chip}>{chip}</span>)}
                  </div>
                  <div className="consultation-signal">
                    <strong>Leadership signal</strong>
                    <p>{signal}</p>
                  </div>
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
