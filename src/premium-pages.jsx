/* global window, React */
(function () {
  const { useMemo, useState } = React;

  const CATEGORY_LABELS = {
    "executive-strategy": "Strategy & Institutional Effectiveness",
    "accreditation-cqi": "Accreditation, CQI & Governance",
    "ai-governance": "AI Governance & Digital Transformation",
    "analytics": "Analytics, Data Architecture & Decision Intelligence",
    "gme-finance": "GME Finance, Contracts & Academic Health Systems",
    "research-strategy": "Research, Cancer & Innovation Strategy",
    "admissions-ume": "Admissions, UME & Student Outcomes",
    "policy-rural": "Louisiana Workforce, Rural Health & Public Policy",
    "faculty-affairs": "Faculty Affairs & Institutional Culture",
    "simulation-quality": "Simulation, Patient Safety & Clinical Quality",
    "swimming-science": "Swimming Science & External Thought Leadership",
    "recognition": "Scholarship, Recognition & Professional Contributions"
  };

  const EXECUTIVE_CASES = [
    {
      num: "01", title: "Strategic Planning as an Institutional Operating Cycle", domain: "Strategy & institutional effectiveness",
      summary: "Longitudinal evidence spanning prior-plan evaluation, independent 2014–2019 closure analysis, ownership of the 2025–2030 planning process, KPI architecture, implementation monitoring, and CQI integration.",
      evidence: ["ev-strat-closure-2014-2019", "execstrat-01", "ev-allied-health-strategy-data"]
    },
    {
      num: "02", title: "Accreditation Leadership Across the Medical Education Continuum", domain: "Accreditation & governance",
      summary: "LCME, ACGME, ACCME, SACSCOC, ACS education-institute accreditation, and emerging CPHE policy intelligence presented as one governed accreditation continuum with explicit role boundaries.",
      evidence: ["cqi-01", "ev-lcme-dci-selfstudy", "ev-acgme-air", "ev-acgme-predictive", "ev-accme", "ev-sacscoc", "ev-cphe", "ev-acs-aei"]
    },
    {
      num: "03", title: "Predictive ACGME Accreditation Intelligence", domain: "GME accreditation",
      summary: "Moves accreditation surveillance upstream by combining Annual Institutional Review, program evaluation, citation history, survey data, and predictive modeling to identify risk before formal review.",
      evidence: ["ev-acgme-air", "ev-acgme-predictive", "ev-acgme-cler-umcno", "gme-07"]
    },
    {
      num: "04", title: "Institutional Effectiveness: Admissions to Practice", domain: "Data architecture & CQI",
      summary: "A longitudinal evidence architecture connecting admissions, UME, student outcomes, match, GME, physician practice, and workforce to support strategy, accreditation, CQI, and mission accountability.",
      evidence: ["ev-lifecycle-data-architecture", "an-02", "an-10", "adm-02", "adm-03", "gme-07"]
    },
    {
      num: "05", title: "GME Finance, Contracts & Academic Health-System Strategy", domain: "Academic health systems",
      summary: "Integrates Medicare and Medicaid GME policy, caps, FTEs, cost reports, affiliation agreements, partner negotiations, workforce, and teaching-site strategy across statewide hospital relationships.",
      evidence: ["gme-01", "gme-02", "gme-05", "ev-gme-contracts-enterprise", "ev-la-medicaid-gme", "ev-cms-cost-reports", "ev-la-gme-cap"]
    },
    {
      num: "06", title: "UMCNO Academic Partnership Governance", domain: "Executive partnership governance",
      summary: "Decision support at the interface of a medical school and its principal academic hospital, spanning education, GME finance, contracts, affiliation issues, and clinical learning environment readiness.",
      evidence: ["ev-umcno-academic-advisory", "ev-acgme-cler-umcno", "gme-05", "ev-umc-alumni"]
    },
    {
      num: "07", title: "Creation of the EQuIP GME Quality Infrastructure", domain: "Quality improvement",
      summary: "Program creation from structure and metrics through data collection, performance monitoring, resident/fellow engagement, and external scholarly dissemination.",
      evidence: ["ev-equip-creation", "ev-gme-clinical-report-cards", "sim-02"]
    },
    {
      num: "08", title: "Enterprise AI Governance & Policy Diffusion", domain: "AI governance",
      summary: "From School of Medicine policy architecture to student and GME policy, cross-school consultation, System governance participation, faculty literacy, and partner-governed clinical AI boundaries.",
      evidence: ["ai-01", "ev-ai-student-policy", "ev-ai-gme-policy", "ev-ai-cross-school", "ev-ai-system", "ai-11"]
    },
    {
      num: "09", title: "Pan-Oncology Tumor Board Intelligence", domain: "Governed clinical AI",
      summary: "A pan-oncology multi-agent research prototype built around provenance, independent evidence channels, missing-information gates, red-teaming, abstention, human attestation, and auditability rather than agent agreement as truth.",
      evidence: ["ev-pan-oncology", "ev-cancer-ai-governance"]
    },
    {
      num: "10", title: "Federal AI Science Policy & NCI Readiness", domain: "Cancer and research strategy",
      summary: "Translates federal AI priorities into institutional requirements for cancer data, governance, model validation, regulatory readiness, autonomous-lab infrastructure, and NCI strategy.",
      evidence: ["ev-federal-ai-nci", "ai-13", "ai-12", "ev-cancer-ai-governance"]
    },
    {
      num: "11", title: "NIH Research Intelligence & Growth Strategy", domain: "Research strategy",
      summary: "Federal funding intelligence, portfolio clustering, peer benchmarking, external dissemination, grant support, and research-infrastructure reporting translated into institutional growth decisions.",
      evidence: ["res-01", "res-04", "ev-nih-comparative", "ev-nih-reach", "ev-huron", "ev-nsf-facilities", "ev-nih-mdphd"]
    },
    {
      num: "12", title: "International Academic Partnership Development: India", domain: "International strategy",
      summary: "A progression from Ministry of Education engagement and Study in India opportunity development to IIT Madras partnership architecture, genomics, AI/ML, digital health, and Cancer Center alignment.",
      evidence: ["ev-india-moe-host", "ev-study-in-india", "res-07"]
    },
    {
      num: "13", title: "Louisiana Health Workforce, Public Policy & State Strategy", domain: "Public-sector strategy",
      summary: "Commission service, state-agency consultation, HPSA/MUA infrastructure, physician workforce intelligence, legislative decision support, rural health, GME financing, and workforce development across Louisiana.",
      evidence: ["ev-mec", "ev-healthworks", "ev-ldh-primary-care", "ev-lsbme-workforce", "ev-quality-forum", "pol-02", "pol-07"]
    },
    {
      num: "14", title: "Admissions Technology & Learner-Outcome Intelligence", domain: "Medical education strategy",
      summary: "Admissions platform transformation, predictive admissions research, MCAT transition analytics, student-outcome reporting, rotation optimization, and longitudinal learner evidence.",
      evidence: ["adm-01", "adm-02", "ev-mcat-transition", "ev-mcat-preclinical", "ev-childrens-matching", "ev-dean-match"]
    },
    {
      num: "15", title: "Enterprise Technology Due Diligence & Vendor Governance", domain: "Digital transformation",
      summary: "Technology governance extending beyond AI through faculty-information-system procurement, security/compliance review, vendor risk, legal review, negotiation, requirements definition, and disciplined no-purchase decisions.",
      evidence: ["ev-watermark", "adm-01", "ai-11"]
    },
    {
      num: "16", title: "Simulation, Patient Safety & Evaluation Science", domain: "Clinical quality",
      summary: "AHRQ TeamSTEPPS, EQuIP, Emergency Medicine simulation research, ACS education-institute accreditation, debriefing science, statewide quality infrastructure, and evaluation consulting.",
      evidence: ["sim-01", "ev-equip-creation", "ev-em-multiroom", "ev-acs-aei", "ev-debriefing", "ev-cals-10m"]
    },
    {
      num: "17", title: "Facilities, Space & Operational Infrastructure", domain: "Institutional operations",
      summary: "Clinical department space requirements, CALS-related planning, relocation readiness, market analysis, facilities strategy, and operational continuity translated into executive decision support.",
      evidence: ["ev-cals-space", "ev-clinical-relocation", "ev-market-charity", "an-09"]
    },
    {
      num: "18", title: "Faculty Development, Workforce & Institutional Culture", domain: "Faculty affairs",
      summary: "Evaluation infrastructure across departments, faculty development and mentoring, compensation and promotion analytics, workforce analysis, climate/equity intelligence, and faculty-data governance.",
      evidence: ["fac-01", "fac-02", "ev-faculty-salary", "ev-faculty-workforce", "ev-watermark"]
    }
  ];

  function artifactById(id) {
    return (window.ARTIFACTS || []).find((a) => a.id === id);
  }

  function Stat({ value, label, note }) {
    return <div className="premium-stat"><strong>{value}</strong><span>{label}</span>{note && <small>{note}</small>}</div>;
  }

  function EvidenceButton({ id, openArtifact }) {
    const a = artifactById(id);
    if (!a) return null;
    return <button type="button" className="evidence-chip" onClick={() => openArtifact && openArtifact(a)}>{a.title}</button>;
  }

  function PremiumHomePage({ openArtifact }) {
    const total = (window.ARTIFACTS || []).length;
    const newCount = Math.max(0, total - (window.PREMIUM_BASELINE_RECORD_COUNT || 97));
    return (
      <main className="premium-home">
        <section className="premium-review-banner"><div className="container"><strong>Premium clone · review environment</strong><span>Original live portfolio preserved unchanged on main.</span></div></section>
        <section className="premium-hero"><div className="container premium-hero-grid">
          <div>
            <div className="premium-kicker">Academic medicine · enterprise strategy · governed evidence</div>
            <h1>Institutional strategy built from evidence, governance, and execution.</h1>
            <p className="premium-lede">A career-spanning portfolio across accreditation, strategic planning, institutional effectiveness, GME finance, academic health-system partnerships, Louisiana workforce policy, research strategy, AI governance, and executive decision intelligence.</p>
            <div className="premium-hero-actions"><a href="#/case-studies" className="premium-primary">Explore executive cases</a><a href="#/library" className="premium-secondary">Search the evidence library</a></div>
          </div>
          <aside className="premium-hero-panel">
            <div className="panel-label">Evidence architecture</div>
            <div className="evidence-flow"><span>Career work</span><b>→</b><span>Evidence records</span><b>→</b><span>Capabilities</span><b>→</b><span>Executive cases</span></div>
            <p>The site is designed so an executive reader can understand the story quickly while a search committee can trace claims back to granular evidence.</p>
          </aside>
        </div></section>

        <section className="premium-stats"><div className="container premium-stat-grid">
          <Stat value="97" label="preserved baseline records" note="current live portfolio" />
          <Stat value={String(total)} label="records in premium evidence register" note={newCount + " normalized / newly surfaced additions"} />
          <Stat value="90+" label="institutional data sources" note="education · finance · research · workforce" />
          <Stat value="18" label="executive case themes" note="curated synthesis, not a second CV" />
        </div></section>

        <section className="premium-pillars"><div className="container">
          <div className="section-head"><div><span className="premium-kicker">Executive operating model</span><h2>Six systems, one institutional strategy practice.</h2></div><p>The portfolio is organized around the institutional problems solved, not around job-description keywords.</p></div>
          <div className="pillar-grid">
            {[
              ["01", "Accreditation & CQI", "LCME, ACGME, ACCME, SACSCOC, predictive accreditation surveillance, continuous readiness."],
              ["02", "Strategic Planning & IE", "Plan closure, strategy ownership, KPIs, implementation governance, institutional effectiveness."],
              ["03", "Academic Health Systems", "GME finance, contracts, affiliates, CMS/Medicaid, UMCNO governance, workforce."],
              ["04", "Research & Cancer Strategy", "NIH intelligence, NCI readiness, federal science policy, grants, international partnerships."],
              ["05", "AI & Digital Governance", "Policy, vendor evaluation, clinical AI safety, agentic systems, enterprise technology governance."],
              ["06", "Louisiana Public Strategy", "Workforce commissions, LDH, rural health, HPSA/MUA, legislation, statewide decision support."]
            ].map((p) => <article className="pillar-card" key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}
          </div>
        </div></section>

        <section className="premium-featured"><div className="container">
          <div className="section-head"><div><span className="premium-kicker">Selected executive cases</span><h2>Evidence synthesized into decision-level stories.</h2></div><a href="#/case-studies">View all 18 →</a></div>
          <div className="featured-grid">
            {EXECUTIVE_CASES.slice(0, 6).map((c) => <article className="featured-case" key={c.num}><div className="case-num">{c.num}</div><div className="case-domain">{c.domain}</div><h3>{c.title}</h3><p>{c.summary}</p><div className="case-evidence-row">{c.evidence.slice(0,2).map((id) => <EvidenceButton key={id} id={id} openArtifact={openArtifact} />)}</div></article>)}
          </div>
        </div></section>
      </main>
    );
  }

  function PremiumCaseStudiesPage({ openArtifact }) {
    return <main className="premium-page"><section className="premium-page-hero"><div className="container"><span className="premium-kicker">Executive case studies</span><h1>Curated synthesis, backed by a comprehensive evidence library.</h1><p>These cases are not a second list of projects. Each case connects multiple evidence records into an executive narrative around institutional strategy, governance, risk, and execution.</p></div></section><section className="container premium-case-list">{EXECUTIVE_CASES.map((c) => <article className="premium-case-row" key={c.num}><div className="case-index">{c.num}</div><div className="case-copy"><div className="case-domain">{c.domain}</div><h2>{c.title}</h2><p>{c.summary}</p><details><summary>{c.evidence.length} supporting evidence records</summary><div className="case-evidence-row expanded">{c.evidence.map((id) => <EvidenceButton key={id} id={id} openArtifact={openArtifact} />)}</div></details></div></article>)}</section></main>;
  }

  function PremiumLibraryPage({ openArtifact }) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const artifacts = window.ARTIFACTS || [];
    const categories = useMemo(() => Object.keys(CATEGORY_LABELS).filter((id) => artifacts.some((a) => a.category === id)), [artifacts.length]);
    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      return artifacts.filter((a) => {
        if (category !== "all" && a.category !== category) return false;
        if (!q) return true;
        return [a.title, a.role, a.summary, a.strategic].concat(a.skills || [], a.tags || [], a.audience || []).join(" ").toLowerCase().includes(q);
      });
    }, [query, category, artifacts.length]);

    return <main className="premium-page premium-library"><section className="premium-page-hero"><div className="container"><span className="premium-kicker">Evidence library</span><h1>{artifacts.length} distinct records. Search the work, not the résumé.</h1><p>The 97-record live baseline is preserved. The premium register splits hidden umbrella projects into discoverable evidence while retaining the original records for traceability.</p></div></section><section className="container library-controls"><input aria-label="Search evidence" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search accreditation, GME caps, Healthworks, NIH, AI governance, facilities…" /><div className="category-filter"><button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>{categories.map((id) => <button key={id} className={category === id ? "active" : ""} onClick={() => setCategory(id)}>{CATEGORY_LABELS[id]}</button>)}</div><div className="library-result-count">Showing <strong>{filtered.length}</strong> of {artifacts.length} evidence records</div></section><section className="container evidence-grid">{filtered.map((a) => <article className={"evidence-card" + (a.premiumEvidence ? " premium-added" : "")} key={a.id} onClick={() => openArtifact && openArtifact(a)} tabIndex="0" role="button"><div className="evidence-card-top"><span>{CATEGORY_LABELS[a.category] || a.category}</span>{a.premiumEvidence && <b>Normalized</b>}</div><h3>{a.title}</h3><div className="evidence-role">{a.role}</div><p>{a.summary}</p><div className="evidence-tags">{(a.skills || []).slice(0,4).map((s) => <span key={s}>{s}</span>)}</div></article>)}</section></main>;
  }

  window.HomePage = PremiumHomePage;
  window.CaseStudiesPage = PremiumCaseStudiesPage;
  window.LibraryPage = PremiumLibraryPage;
  window.PREMIUM_EXECUTIVE_CASES = EXECUTIVE_CASES;
})();
