/* global window, React */
// =============================================================
// Consultation Footprint patch for Career & Governance page
// Adds a tiered consultation map while preserving the existing page.
// Adds a cross-cutting data architecture section to the Capabilities page.
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

(function () {
  function capabilitySkillTone(skill) {
    const s = skill.toLowerCase();
    if (s.includes("strategic") || s.includes("executive") || s.includes("stakeholder") || s.includes("matrix")) return "tone-strategy";
    if (s.includes("lcme") || s.includes("acgme") || s.includes("pdsa") || s.includes("lean") || s.includes("quality") || s.includes("gap")) return "tone-governance";
    if (s.includes("ai") || s.includes("policy") || s.includes("regulatory") || s.includes("vetting") || s.includes("compliance")) return "tone-ai";
    if (s.includes("tableau") || s.includes("python") || s.includes("predictive") || s.includes("decision") || s.includes("data") || s.includes("analytics")) return "tone-analytics";
    if (s.includes("cms") || s.includes("medicare") || s.includes("negotiation") || s.includes("forecast") || s.includes("cost")) return "tone-finance";
    if (s.includes("nih") || s.includes("grants") || s.includes("benchmark") || s.includes("fda") || s.includes("reporter")) return "tone-research";
    if (s.includes("admissions") || s.includes("usmle") || s.includes("nbme") || s.includes("aamc") || s.includes("vendor")) return "tone-education";
    if (s.includes("legislative") || s.includes("rural") || s.includes("policy intelligence") || s.includes("consulting")) return "tone-policy";
    if (s.includes("logic model") || s.includes("mentoring") || s.includes("climate") || s.includes("faculty")) return "tone-culture";
    if (s.includes("ahrq") || s.includes("hedis") || s.includes("quality measures") || s.includes("debriefing") || s.includes("simulation")) return "tone-quality";
    if (s.includes("sports") || s.includes("editorial") || s.includes("international")) return "tone-thought";
    if (s.includes("peer") || s.includes("authorship") || s.includes("conference")) return "tone-recognition";
    return "tone-neutral";
  }

  function ArchitectureCard({ title, body }) {
    return (
      <article style={{
        background: "#fff",
        border: "1px solid var(--border)",
        padding: "22px 24px",
        minHeight: 150,
        boxShadow: "0 18px 45px rgba(17, 24, 39, 0.04)"
      }}>
        <h3 style={{ fontSize: 15, marginBottom: 10 }}>{title}</h3>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.66, margin: 0 }}>{body}</p>
      </article>
    );
  }

  function ArchitectureGroup({ label, items }) {
    return (
      <section style={{ marginTop: 34 }}>
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 16
        }}>
          {label}
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18
        }}>
          {items.map((item) => <ArchitectureCard key={item.title} {...item} />)}
        </div>
      </section>
    );
  }

  function ModernDataArchitectureSection() {
    const applied = [
      {
        title: "BI, Visualization, and Decision Support",
        body: "Tableau, Streamlit, Plotly, interactive HTML dashboards, executive scorecards, KPI frameworks, and institutional decision-support interfaces."
      },
      {
        title: "Data Modeling and Analytics",
        body: "SQL, Python, Pandas, longitudinal tracking, benchmarking, scenario modeling, clustering, predictive modeling, synthetic data generation, data cleaning, and semantic metric design."
      },
      {
        title: "Web and Data Product Deployment",
        body: "GitHub Pages, Vercel, Streamlit, static web applications, interactive JavaScript-based resources, and public-facing analytical tools."
      },
      {
        title: "AI, LLM Evaluation, and Advanced Analytics",
        body: "LLM benchmarking, AI tool evaluation, prompt engineering, Retrieval-Augmented Generation architecture, vector database architecture, agentic AI workflow design, human-in-the-loop validation, and enterprise AI governance frameworks."
      }
    ];

    const enterprise = [
      {
        title: "Cloud and Data Platforms",
        body: "AWS, Microsoft Azure, Snowflake, Databricks, Redshift, BigQuery, cloud data lakes, lakehouse architecture, secure data storage, scalable compute, and cost-aware infrastructure planning, including FinOps."
      },
      {
        title: "Data Integration and Pipeline Architecture",
        body: "Modern ELT frameworks, dbt-style transformation logic, automated data pipelines, data freshness monitoring, pipeline orchestration, reproducible analytics workflows, and multi-source data integration."
      },
      {
        title: "Semantic Layer and Governed Analytics",
        body: "Centralized metric definitions, reusable KPI logic, row-level security, governed self-service analytics, enterprise dashboard architecture, and metric standardization across schools, departments, programs, and leadership audiences."
      },
      {
        title: "Data Governance and Stewardship",
        body: "Data lineage, data catalogs, Collibra, Microsoft Purview, data quality frameworks, data stewardship models, access governance, HIPAA-aware analytics design, FERPA-aware analytics design, and compliance-oriented data architecture."
      },
      {
        title: "Higher Education and Institutional Source Systems",
        body: "Workday, Banner, PeopleSoft, Slate, Canvas, Blackboard, ACGME systems, institutional research systems, GME finance data, admissions data, accreditation data, research enterprise data, HR data, finance data, faculty affairs data, and student affairs data."
      }
    ];

    const clinical = [
      {
        title: "Clinical and EHR Source Systems",
        body: "Epic, Oracle Health/Cerner, MEDITECH, athenahealth, eClinicalWorks, clinical data warehouses, Epic Clarity and Caboodle architecture, encounter data, provider data, patient access data, quality and safety data, clinical operations data, and training-site data."
      },
      {
        title: "Claims, Payer, and Reimbursement Data",
        body: "Medicare cost-report data, Medicaid data, payer claims data, Aetna and other payer data structures, reimbursement data, risk-adjustment data, HCC models, hospital finance data, GME reimbursement data, provider attribution, and health-plan data."
      },
      {
        title: "Healthcare Interoperability and Coding Standards",
        body: "HL7, FHIR, C-CDA, ICD-10-CM, CPT, HCPCS, DRG, MS-DRG, NPI, taxonomy codes, LOINC, SNOMED CT, RxNorm, clinical quality measure data, and clinical reporting standards."
      }
    ];

    return (
      <section id="cap-modern-data-analytics-ai-architecture" style={{
        background: "var(--paper)",
        padding: "56px 0 46px",
        borderBottom: "1px solid var(--border)"
      }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(180px, 240px) 1fr",
            gap: 36,
            alignItems: "start"
          }}>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)"
            }}>
              § Cross-cutting architecture layer
            </div>
            <div>
              <h2 style={{ marginBottom: 14 }}>Modern Data, Analytics, and AI Architecture</h2>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.72, maxWidth: "72ch", marginBottom: 16 }}>
                My portfolio reflects more than dashboard development. It demonstrates the ability to translate complex institutional problems into scalable data products, governance models, analytical frameworks, and AI-ready decision-support systems.
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.72, maxWidth: "72ch", marginBottom: 26 }}>
                I approach this work through a modern data-stack lens spanning source systems, data integration, metric standardization, analytics products, governed data use, clinical and claims data awareness, and AI-enabled workflows.
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 10
              }}>
                {["Data products", "Semantic metrics", "AI readiness", "Clinical data", "Claims data", "Governed analytics", "Executive decision support"].map((chip) => (
                  <span key={chip} className="tag tone-analytics">{chip}</span>
                ))}
              </div>
            </div>
          </div>

          <ArchitectureGroup label="Applied Technical Stack" items={applied} />
          <ArchitectureGroup label="Enterprise Architecture Fluency" items={enterprise} />
          <ArchitectureGroup label="Clinical, Claims, and Partner Health-System Data Fluency" items={clinical} />

          <div style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20
          }}>
            <div style={{ background: "var(--dark-1)", color: "var(--paper-2)", padding: "26px 28px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                Strategic value
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--dark-muted)", margin: 0 }}>
                This capability connects institutional strategy, data architecture, analytics execution, health sciences operations, governance, and AI-enabled decision support.
              </p>
            </div>
            <div style={{ background: "var(--dark-2)", color: "var(--paper-2)", padding: "26px 28px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                Positioning statement
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--dark-muted)", margin: 0 }}>
                The goal is not simply to build dashboards. The goal is to design the data, analytics, and AI operating architecture that allows academic health sciences leaders to make better decisions from trusted, governed, and reusable information.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  window.CapabilitiesPage = function PatchedCapabilitiesPage() {
    React.useEffect(() => {
      const id = window.location.hash.split("#")[2];
      if (id) {
        const el = document.getElementById("cap-" + id) || document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
      }
    }, []);

    return (
      <main className="page-enter">
        <div className="cap-dark-header">
          <div className="container">
            <window.Eyebrow light>Capability Map</window.Eyebrow>
            <h1>Twelve domains of<br/>enterprise capability.</h1>
            <p>
              Each domain is a documented body of work across accreditation, analytics, AI governance, workforce finance,
              faculty affairs, research strategy, simulation, policy, and beyond. The architecture layer below explains the
              technical and data-operating model that runs across those domains.
            </p>
          </div>
        </div>

        <ModernDataArchitectureSection />

        <div className="cap-list">
          <div className="container">
            {window.CAPABILITIES.map(c => {
              const skills = c.skills.slice(0, 5);
              return (
                <a
                  key={c.id}
                  id={"cap-" + c.id}
                  href={"#/library?cat=" + c.id}
                  className="cap-row"
                >
                  <div className="num">{c.num}</div>
                  <div>
                    <h3>{c.title}</h3>
                    <div className="skills">
                      {skills.map(s => <span key={s} className={`tag ${capabilitySkillTone(s)}`}>{s}</span>)}
                    </div>
                  </div>
                  <div className="desc">{c.short}</div>
                  <div className="right">
                    <span className="go-label">View artifacts</span>
                    <window.ArrowRight size={15} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    );
  };
})();
