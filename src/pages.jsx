/* global window, React */
// =============================================================
// pages.jsx v24 — Four-Fix Update
// Changes from v23:
//   FIX 2: Brand block added inside hero (after hero-lead-secondary, before hero-actions)
//   FIX 1: Offer block added at bottom of HomePage (after triple-cta band)
//   FIX 3: FrameworkPage added as new exported page
// =============================================================
const { useState, useMemo, useEffect } = React;

const PORTFOLIO_ASSISTANT_URL = "https://ramparagi-ask-ram-portfolio-streamlit.hf.space";

// ---------- Eyebrow ----------
function Eyebrow({ children, light }) {
  return (
    <div className="eyebrow" style={light ? { color: "var(--gold)" } : {}}>
      <span className="dot" style={light ? { background: "var(--gold)" } : {}}></span>
      {children}
    </div>
  );
}

// ============================================================
// HOME
// ============================================================
function HomePage({ openArtifact }) {
  const flagship = window.FLAGSHIP_IDS
    .map(id => window.ARTIFACTS.find(a => a.id === id))
    .filter(Boolean);
  const featured3 = flagship.slice(0, 3);

  const heroStats = [
    { num: "70+",                      lbl: "Residency & fellowship programs with more than 1,000 FTEs" },
    { num: "90+",                      lbl: "Integrated institutional data sources" },
    { num: "25+",                      lbl: "Departments and centers" },
    { num: "Multiple federal & state", lbl: "Policy scopes analyzed for strategic alignment" },
  ];

  return (
    <main className="page-enter">

      {/* ── DARK HERO ── */}
      <section className="hero-dark">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-rule"></div>
              <Eyebrow light>Institutional Strategy &amp; Leadership Evidence Base</Eyebrow>
              <h1 style={{ marginTop: 20 }}>
                Enterprise strategy<br />
                for academic medical<br />
                <em>center transformation.</em>
              </h1>
              <p className="hero-lead-dark">
                Academic medical centers don't fail from lack of effort. They fail because the leverage is scattered. My work is building the infrastructure that holds it together: accreditation systems that turn compliance into competitive advantage, analytics that give leadership real decision power, AI governance frameworks that get institutions ahead of policy, and GME workforce systems that protect flexibility across complex multi-system environments.
              </p>
              <p className="hero-lead-dark hero-lead-secondary">
                In high-stakes, multi-stakeholder environments, I start wide. Context, feedback loops, second-order consequences - all of that gets mapped before execution begins. That discipline is what keeps strategy and analytics from drifting apart. Once the architecture is clear, I work precisely: every deliverable, timeline, and metric has to earn its place. Execution without systems thinking is just motion. I try to do something harder than that.
              </p>

              {/* ── FIX 2: BRAND BLOCK ── */}
              {/* Explains what DataDrivenMed is and links the three publishing platforms */}
              <div style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: 18,
                margin: "28px 0 24px",
              }}>
                <p style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(232,224,210,0.72)",
                  margin: "0 0 12px",
                }}>
                  <span style={{ color: "var(--paper-2)", fontWeight: 500 }}>DataDrivenMed</span> is a public research and analytics practice — publishing tools, clinical AI evaluations, and institutional strategy frameworks for academic medicine. It is the external expression of 18 years of operational work inside an LCME-accredited medical school.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                  <a
                    href="https://datadrivenmed.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", letterSpacing: "0.03em" }}
                  >
                    GitHub · Tools &amp; evaluations ↗
                  </a>
                  <a
                    href="https://swimed.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", letterSpacing: "0.03em" }}
                  >
                    Substack · SwiMed essays ↗
                  </a>
                  <a
                    href="https://medai-lexicon.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", letterSpacing: "0.03em" }}
                  >
                    Interactive MedAI Lexicon ↗
                  </a>
                </div>
              </div>
              {/* ── END FIX 2 ── */}

              <div className="hero-actions" style={{ marginTop: 36 }}>
                <window.Link to="/library" className="btn gold">
                  Evidence library <window.ArrowRight size={13} />
                </window.Link>
                <window.Link to="/case-studies" className="btn outline">
                  Case studies
                </window.Link>
              </div>
            </div>
            <window.ConnectCard compact />
          </div>

          {/* Dark metadata bar */}
          <div className="hero-meta-bar">
            <div className="hero-meta-cell">
              <span className="lbl">Position</span>
              <span className="val">Enterprise-facing institutional strategy, accreditation, analytics, and governance portfolio</span>
            </div>
            <div className="hero-meta-cell">
              <span className="lbl">Institution</span>
              <span className="val">LSU Health New Orleans · School of Medicine</span>
            </div>
            <div className="hero-meta-cell">
              <span className="lbl">Reach</span>
              <span className="val">School · HSC · university · state · health-system · accreditation · external partner leadership</span>
            </div>
            <div className="hero-meta-cell">
              <span className="lbl">Index</span>
              <span className="val">82 artifacts · 12 capability areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="proof-band">
        <div className="container">
          <div className="proof-strip">
            {heroStats.map((s, i) => (
              <div className="proof-cell" key={i}>
                <span className="proof-num">{s.num}</span>
                <span className="proof-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EXEC VALUE PROPOSITION — DARK ── */}
      <div className="exec-band">
        <div className="container">
          <div className="exec-band-inner">
            <div>
              <div className="exec-band-label">§ Executive Value Proposition</div>
              <h2>Not a document archive.<br />A mapped evidence base for<br />enterprise-level institutional work.</h2>
            </div>
            <div className="exec-band-copy">
              <p>
                This portfolio organizes 82 artifacts into a leadership evidence base: work that
                reduces institutional risk, preserves organizational memory, clarifies priorities,
                connects stakeholders, and turns complex strategic priorities into governed execution.
              </p>
              <div className="exec-pills">
                <span>Risk reduction</span>
                <span>Executive decision support</span>
                <span>Cross-functional governance</span>
                <span>Data-informed accountability</span>
                <span>Institutional transformation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LEADERSHIP READOUT — LIGHT ── */}
      <div className="readout-section">
        <div className="container">
          <div className="readout-header">
            <div className="readout-h-label">§ Senior Leadership Readout</div>
            <div className="readout-h-content">
              <h2>Why the portfolio matters to institutional leadership.</h2>
              <p>
                The signal is not only the volume of work. It is the pattern: cross-boundary
                leadership, institutional risk reduction, data-governed decision support, and
                durable systems that remain useful beyond a single project cycle.
              </p>
            </div>
          </div>
          <div className="readout-cells">
            <div className="readout-cell">
              <strong>Hard-to-replace institutional memory</strong>
              <span>Accreditation, GME finance, analytics, research strategy, AI governance, and policy context connected in one operating view.</span>
            </div>
            <div className="readout-cell">
              <strong>Cross-system execution capacity</strong>
              <span>Work across school, HSC, university, state, health-system, accreditation, and external partner leadership.</span>
            </div>
            <div className="readout-cell">
              <strong>Executive decision infrastructure</strong>
              <span>Dashboards, frameworks, briefs, models, and governance routines that convert ambiguity into leadership action.</span>
            </div>
            <div className="readout-cell">
              <strong>Future-ready transformation</strong>
              <span>AI governance, clinical AI evaluation, research intelligence, and portfolio-wide data strategy positioned for the next operating model of academic medicine.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CAPABILITY ARCHITECTURE — LIGHT ── */}
      <div className="cap-arch-section">
        <div className="container">
          <div className="cap-arch-inner">
            <div>
              <div className="cap-arch-label">§ Capability Architecture</div>
            </div>
            <div className="cap-arch-content">
              <h2>Twelve domains of enterprise capability.</h2>
              <p>
                Each domain is a documented body of work across the School of Medicine's
                operational scope — accreditation, analytics, AI governance, workforce finance,
                faculty affairs, research strategy, simulation, policy, and beyond.
              </p>
              <window.Link to="/capabilities" className="btn outline-dark">
                Open full capability map <window.ArrowRight size={13} />
              </window.Link>
              <img
                src="capability-map-home.png"
                alt="Twelve domains of enterprise capability."
                className="cap-arch-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── FLAGSHIP CASES — LIGHT ALT ── */}
      <div className="cases-section">
        <div className="container">
          <div className="cases-header">
            <div className="cases-h-label">§ Selected Case Evidence</div>
            <div className="cases-h-content">
              <h2>Selected work that shows enterprise operating capacity.</h2>
              <p>
                These examples anchor the broader evidence library: institutional AI governance,
                multi-system GME policy and workforce finance, accreditation and CQI architecture,
                research strategy, faculty evaluation infrastructure, and cross-institutional policy leadership.
              </p>
            </div>
          </div>

          <div className="featured-grid">
            {featured3.map((a, i) => (
              <window.FeaturedCard key={a.id} a={a} index={i} onOpen={openArtifact} />
            ))}

            {/* ── FRAMEWORK CARD — same grid, same visual weight as featured artifacts ── */}
            <article
              className="feat"
              onClick={() => { window.location.hash = "/framework"; }}
              style={{ cursor: "pointer" }}
            >
              <div className="feat-cover" style={{ background: "#0d1117" }}>
                <svg width="100%" height="100%" viewBox="0 0 400 100"
                     preserveAspectRatio="xMidYMid slice"
                     style={{ position: "absolute", inset: 0 }}>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <line key={idx}
                      x1={-80 + idx * 64} y1={0}
                      x2={80 + idx * 64}  y2={100}
                      stroke="rgba(184,152,90,0.08)" strokeWidth="1" />
                  ))}
                  <line x1="0" y1="98" x2="400" y2="98" stroke="rgba(184,152,90,0.25)" strokeWidth="1" />
                  {[0,1,2,3].map(idx => (
                    <line key={idx}
                      x1={24 + idx * 20} y1={30}
                      x2={24 + idx * 20} y2={72}
                      stroke="rgba(184,152,90,0.30)" strokeWidth="2" />
                  ))}
                  <text x="16" y="86"
                        fontFamily="Newsreader, serif" fontSize="48"
                        fill="rgba(184,152,90,0.12)" fontStyle="italic"
                        letterSpacing="-2">FM</text>
                </svg>
              </div>
              <div className="feat-body">
                <h3>Clinical AI Evaluation Framework</h3>
                <p className="feat-sum">
                  A four-failure-mode methodology for evaluating clinical AI tools — applied in the OpenEvidence and ChatGPT for Clinicians assessments.
                </p>
                <div className="feat-meta">
                  <span>AI Governance · Methodology</span>
                  <span className="read">Open framework <window.ArrowRight size={11} /></span>
                </div>
              </div>
            </article>
            {/* ── END FRAMEWORK CARD ── */}

          </div>

          <div style={{ marginTop: 20, textAlign: "right" }}>
            <window.Link to="/case-studies" className="quiet-link">
              All twelve flagship case studies <window.ArrowRight size={12} />
            </window.Link>
          </div>
        </div>
      </div>

      {/* ── TRIPLE CTA BAND — DARK ── */}
      <div className="cta-band">
        <div className="container" style={{ padding: 0 }}>
          <div className="triple-cta">
            <div className="cta-cell">
              <span className="num">§ 03 · Featured</span>
              <h3>Start with the flagship work.</h3>
              <p>
                A curated entry point for busy executives: the clearest examples of
                strategy, governance, analytics, policy, and institutional execution.
              </p>
              <window.Link to="/case-studies" className="btn gold">
                View case studies <window.ArrowRight size={13} />
              </window.Link>
            </div>
            <div className="cta-cell">
              <span className="num">§ 04 · Full Library</span>
              <h3>Then review the complete record.</h3>
              <p>
                Eighty-two artifacts indexed by capability, skill, audience, confidentiality,
                and strategic value so the full breadth is visible without becoming clutter.
              </p>
              <window.Link to="/library" className="btn outline">
                Open library <window.ArrowRight size={13} />
              </window.Link>
            </div>
            <div className="cta-cell">
              <span className="num">§ 05 · Ask</span>
              <h3>Ask the portfolio directly.</h3>
              <p>
                Use the evidence-based portfolio assistant to ask about leadership scope,
                accreditation, AI governance, analytics, GME finance, research strategy,
                and institutional impact.
              </p>
              <window.Link to="/ask" className="btn warm">
                Open assistant <window.ArrowRight size={13} />
              </window.Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FIX 1: EXTERNAL ENGAGEMENT — DARK ── */}
      {/* Framed as scholarly/consulting footprint, not an availability signal */}
      <div style={{
        background: "var(--dark-1)",
        borderTop: "1px solid rgba(184,152,90,0.18)",
        padding: "64px 0",
      }}>
        <div className="container">
          <div style={{ marginBottom: 10, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--mono)" }}>
            § External Engagement
          </div>
          <h2 style={{ color: "var(--paper-2)", marginBottom: 16, fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
            Extending the work<br />beyond the institution.
          </h2>
          <p style={{ fontSize: 14, color: "var(--dark-muted)", lineHeight: 1.7, maxWidth: "58ch", marginBottom: 40 }}>
            The frameworks, evaluations, and analytics in this portfolio are designed to
            be durable beyond a single institutional context. Peer AMC leaders, conference
            organizers, and scholarly collaborators are welcome to engage directly.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 44,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--paper-2)", marginBottom: 6 }}>
                Institutional strategy consulting
              </div>
              <div style={{ fontSize: 13, color: "var(--dark-muted)", lineHeight: 1.66 }}>
                Peer AMC leaders working through accreditation transitions, AI governance buildouts, or GME policy complexity can engage directly. The work in this portfolio is available as a reference framework.
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--paper-2)", marginBottom: 6 }}>
                External advisory and peer collaboration
              </div>
              <div style={{ fontSize: 13, color: "var(--dark-muted)", lineHeight: 1.66 }}>
                Open to collaborating with academic health center leadership on shared challenges: LCME strategy, clinical AI governance, multi-affiliate GME, and data-driven institutional decision-making.
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--paper-2)", marginBottom: 6 }}>
                Speaking and scholarly engagement
              </div>
              <div style={{ fontSize: 13, color: "var(--dark-muted)", lineHeight: 1.66 }}>
                Available for conference presentations, panel participation, and scholarly collaboration on AI literacy in medical education, clinical AI evaluation, and AMC institutional strategy.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="mailto:ramparagi@gmail.com"
              className="btn gold"
              style={{ textDecoration: "none" }}
            >
              Contact <window.ArrowRight size={13} />
            </a>
            <window.Link to="/framework" className="btn outline">
              Evaluation framework <window.ArrowRight size={13} />
            </window.Link>
          </div>
        </div>
      </div>
      {/* ── END FIX 1 ── */}

    </main>
  );
}

// ============================================================
// ABOUT / EXECUTIVE PROFILE
// ============================================================
function AboutPage() {
  return (
    <main className="page-enter">

      {/* Dark header */}
      <div className="about-dark-header">
        <div className="container">
          <div className="about-header-inner">
            <div className="about-portrait">
              <span className="initials">R P</span>
            </div>
            <div className="about-hero-copy">
              <Eyebrow light>Executive Profile</Eyebrow>
              <h1>
                Ram Paragi: academic medical center <em>enterprise strategist</em>.
              </h1>
              <div className="about-meta">
                <span>LSU Health New Orleans</span>
                <span>School of Medicine</span>
                <span>New Orleans · LA</span>
              </div>
              <p className="about-bio">
                Ram operates at the intersection of institutional strategy, accreditation,
                analytics, AI governance, research growth, medical education, and workforce
                finance. His portfolio connects work that is often separated across offices:
                LCME and ACGME readiness, multi-system GME policy and financing, faculty
                evaluation infrastructure, executive dashboards, research intelligence,
                AI governance and policy drafting, and state and health-system strategy. The through-line is a
                systems-first leadership model: define the institutional problem, map the
                stakeholders and risks, build the analytical infrastructure, and create a
                durable operating system for execution.
              </p>
              <div className="role-strip">
                <span className="pill">Strategic planning</span>
                <span className="pill">LCME &amp; ACGME</span>
                <span className="pill">AI governance</span>
                <span className="pill">CMS DGME / IME</span>
                <span className="pill">Predictive analytics</span>
                <span className="pill">Tableau &amp; Python</span>
                <span className="pill">Faculty Affairs</span>
                <span className="pill">Research strategy</span>
                <span className="pill">Legislative consulting</span>
                <span className="pill">Patient-safety simulation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencies — light zone with McKinsey column layout */}
      <div className="competencies-section">
        <div className="container">
          <div className="competencies-inner">
            <div className="comp-label">§ Leadership<br/>Competencies</div>
            <div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.66, marginBottom: 32, maxWidth: "58ch" }}>
                Eight senior leadership competencies, each anchored in artifacts inside this
                portfolio and expressed as institutional operating capacity, not aspirational language.
              </p>
              <div className="competencies">
                {[
                  ["Strategic planning at scale", "Executive briefings, institutional planning architecture, and matrixed alignment across the School of Medicine, health systems, and LSU Health Sciences Center."],
                  ["Regulatory and policy synthesis", "Working fluency in LCME, ACGME, AAMC, NIH, FDA, AHRQ, CMS, AAU, Medicare/Medicaid GME policy, and Louisiana legislative context."],
                  ["Quantitative leadership", "Predictive models, executive dashboards, K-means / PCA / Bayesian / regression frameworks, and longitudinal analytics built for decision support."],
                  ["Workforce finance", "70+ residency and fellowship programs with more than 1000 FTEs · Medicare/Medicaid GME policy and regulations · three major healthcare systems across the state."],
                  ["Institutional culture", "Faculty Affairs evaluation infrastructure across 25+ departments and centers, including mentoring, climate, and development portfolio evaluation."],
                  ["Public-sector positioning", "FDA RFI-grade clinical trials response · NCI AI Innovation Program contribution · multiple federal and state policy scopes analyzed for strategic alignment."],
                  ["Research and scholarship", "NIH portfolio clustering, NSF EPSCoR analytics, scholarly productivity, and translation of research intelligence into institutional growth strategy."],
                ].map(([h, d]) => (
                  <div className="item" key={h}>
                    <div className="h">{h}</div>
                    <div className="d">{d}</div>
                  </div>
                ))}

                {/* AI governance — custom item with framework link */}
                <div className="item" key="AI governance">
                  <div className="h">AI governance</div>
                  <div className="d">
                    SOM AI governance suite spanning a pre-final policy draft, compliance audit, tool vetting, faculty fluency, teaching guides, clinical AI evaluation, and leadership briefings.
                    <span style={{ display: "block", marginTop: 8 }}>
                      <window.Link
                        to="/framework"
                        style={{
                          fontSize: 12,
                          color: "var(--gold, #B8985A)",
                          textDecoration: "none",
                          fontFamily: "var(--mono)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Applied evaluation methodology: four-failure-mode framework →
                      </window.Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

// ============================================================
// CAPABILITIES
// ============================================================
function skillTone(skill) {
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

function CapabilitiesPage() {
  useEffect(() => {
    const id = window.location.hash.split("#")[2];
    if (id) {
      const el = document.getElementById("cap-" + id);
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, []);

  return (
    <main className="page-enter">

      {/* Dark header */}
      <div className="cap-dark-header">
        <div className="container">
          <Eyebrow light>Capability Map</Eyebrow>
          <h1>Twelve domains of<br/>enterprise capability.</h1>
          <p>
            Each domain is a documented body of work — accreditation, analytics, AI
            governance, workforce finance, faculty affairs, research strategy, simulation,
            policy, and beyond. Click any row to filter the library to that domain.
          </p>
        </div>
      </div>

      {/* Capability list — light zone */}
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
                    {skills.map(s => <span key={s} className={`tag ${skillTone(s)}`}>{s}</span>)}
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
}

// ============================================================
// LIBRARY
// ============================================================
function LibraryPage({ openArtifact }) {
  const initial = useMemo(() => {
    const q = window.location.hash.split("?")[1] || "";
    const params = new URLSearchParams(q);
    return {
      cat: params.get("cat") || "all",
      aud: params.get("aud") || "all",
      featured: params.get("featured") === "1",
    };
  }, []);

  const [cat, setCat] = useState(initial.cat);
  const [aud, setAud] = useState(initial.aud);
  const [featuredOnly, setFeaturedOnly] = useState(initial.featured);
  const [confidOnly, setConfidOnly] = useState(false);
  const [q, setQ] = useState("");
  const [view, setView] = useState("index");

  const codeMap = useMemo(() => {
    const m = new Map();
    window.CAPABILITIES.forEach(c => {
      const arts = window.ARTIFACTS.filter(a => a.category === c.id);
      arts.forEach((a, i) => {
        m.set(a.id, c.num + "." + String(i + 1).padStart(2, "0"));
      });
    });
    return m;
  }, []);

  const filtered = useMemo(() => {
    return window.ARTIFACTS.filter(a => {
      if (cat !== "all" && a.category !== cat) return false;
      if (aud !== "all" && !a.audience.includes(aud)) return false;
      if (featuredOnly && !a.featured) return false;
      if (confidOnly && !a.confidential) return false;
      if (q) {
        const needle = q.toLowerCase();
        const hay = (a.title + " " + a.summary + " " + a.strategic + " " + a.tags.join(" ") + " " + a.skills.join(" ")).toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [cat, aud, featuredOnly, confidOnly, q]);

  const grouped = useMemo(() => {
    const g = new Map();
    filtered.forEach(a => {
      const arr = g.get(a.category) || [];
      arr.push(a);
      g.set(a.category, arr);
    });
    return g;
  }, [filtered]);

  const reset = () => { setCat("all"); setAud("all"); setFeaturedOnly(false); setConfidOnly(false); setQ(""); };

  return (
    <main className="page-enter">

      {/* Dark header */}
      <div className="lib-dark-header">
        <div className="container">
          <Eyebrow light>Evidence Library · {window.ARTIFACTS.length} artifacts indexed</Eyebrow>
          <h1>The evidence<br/>library.</h1>
          <p>
            A searchable institutional record. Eighty-two artifacts across twelve capability
            areas — indexed by domain, audience, and confidentiality status. Every entry
            links to a structured executive read.
          </p>
        </div>
      </div>

      {/* Light body */}
      <div className="lib-body">
        <div className="container">
          <div className="ev-search">
            <window.SearchIcon size={17} />
            <input
              placeholder="Search — CMS DGME, AI policy, faculty evaluation, NIH clustering, COVID Rt…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            {q && <button className="ev-clear" onClick={() => setQ("")}>×</button>}
          </div>

          <div className="ev-toolbar">
            <div className="ev-tools-left">
              <select className="ev-select" value={cat} onChange={e => setCat(e.target.value)}>
                <option value="all">All capabilities · {window.ARTIFACTS.length}</option>
                {window.CAPABILITIES.map(c => {
                  const n = window.ARTIFACTS.filter(a => a.category === c.id).length;
                  return <option key={c.id} value={c.id}>{c.num} · {c.title} · {n}</option>;
                })}
              </select>
              <select className="ev-select" value={aud} onChange={e => setAud(e.target.value)}>
                <option value="all">All audiences</option>
                {window.AUDIENCES.map(a => {
                  const n = window.ARTIFACTS.filter(x => x.audience.includes(a)).length;
                  if (!n) return null;
                  return <option key={a} value={a}>{a} · {n}</option>;
                })}
              </select>
              <button className={"ev-flag " + (featuredOnly ? "active" : "")} onClick={() => setFeaturedOnly(!featuredOnly)}>
                <span className="dot featured"></span> Featured
              </button>
              <button className={"ev-flag " + (confidOnly ? "active" : "")} onClick={() => setConfidOnly(!confidOnly)}>
                <span className="dot confid"></span> Confidential
              </button>
              {(cat !== "all" || aud !== "all" || featuredOnly || confidOnly || q) && (
                <button className="ev-reset" onClick={reset}>Reset</button>
              )}
            </div>
            <div className="ev-tools-right">
              <span className="ev-count">{filtered.length} / {window.ARTIFACTS.length}</span>
              <div className="ev-view">
                <button className={view === "index" ? "active" : ""} onClick={() => setView("index")}>Index</button>
                <button className={view === "cards" ? "active" : ""} onClick={() => setView("cards")}>Cards</button>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty" style={{ marginTop: 48 }}>
              No artifacts match these filters. Try resetting or broadening the search.
            </div>
          ) : view === "cards" ? (
            <div className="lib-grid">
              {filtered.map(a => (
                <window.ArtifactCard key={a.id} a={a} onOpen={openArtifact} />
              ))}
            </div>
          ) : (
            <div className="ev-index">
              <div className="ev-row ev-head">
                <div className="ev-c-code">Code</div>
                <div className="ev-c-title">Title</div>
                <div className="ev-c-skills">Skills Demonstrated</div>
                <div className="ev-c-aud">Audience</div>
                <div className="ev-c-flags">Status</div>
              </div>
              {window.CAPABILITIES.map(c => {
                const arts = grouped.get(c.id);
                if (!arts || arts.length === 0) return null;
                return (
                  <React.Fragment key={c.id}>
                    <div className="ev-group">
                      <span className="ev-g-num">{c.num}</span>
                      <span className="ev-g-title">{c.title}</span>
                      <span className="ev-g-count">{arts.length}</span>
                    </div>
                    {arts.map(a => (
                      <button key={a.id} className="ev-row ev-item" onClick={() => openArtifact(a)}>
                        <div className="ev-c-code">{codeMap.get(a.id)}</div>
                        <div className="ev-c-title">
                          <span className="t">{a.title}</span>
                          <span className="s">{a.summary}</span>
                        </div>
                        <div className="ev-c-skills">
                          {a.skills.slice(0, 3).map(s => <span key={s} className="tag">{s}</span>)}
                          {a.skills.length > 3 && <span className="tag-more">+{a.skills.length - 3}</span>}
                        </div>
                        <div className="ev-c-aud">{a.audience.slice(0, 2).join(" · ")}</div>
                        <div className="ev-c-flags">
                          {a.featured && <span className="dot featured" title="Featured"></span>}
                          {a.confidential && <span className="dot confid" title="Confidential"></span>}
                          <window.ArrowRight size={12} />
                        </div>
                      </button>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </main>
  );
}

// ============================================================
// CASE STUDIES INDEX
// ============================================================
function CaseStudiesPage({ openArtifact }) {
  const flagship = window.FLAGSHIP_IDS
    .map(id => window.ARTIFACTS.find(a => a.id === id))
    .filter(Boolean);

  return (
    <main className="page-enter">

      <div className="casestudies-dark">
        <div className="container">
          <Eyebrow light>Flagship evidence set · {flagship.length}</Eyebrow>
          <h1>Flagship work that<br/>shows enterprise scope.</h1>
          <p>
            These 12 artifacts are the best first read for a senior leader: strategy, governance,
            accreditation, AI, workforce finance, analytics, policy, faculty infrastructure,
            research intelligence, and institutional execution.
          </p>
        </div>
      </div>

      <div className="casestudies-body">
        <div className="container">
          <div className="featured-grid">
            {flagship.map((a, i) => (
              <window.FeaturedCard key={a.id} a={a} index={i} onOpen={openArtifact} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}

// ============================================================
// ASK / LIVE PORTFOLIO ASSISTANT
// ============================================================
function AskPage() {
  const prompts = [
    "What should a hiring manager take away from this portfolio?",
    "What evidence shows Ram understands institutional risk?",
    "What are Ram's strongest examples of AI governance?",
    "What evidence shows Ram understands GME finance and contracts?",
    "What role would this portfolio best support?",
    "What are Ram's sports achievements?",
  ];

  return (
    <main className="page-enter">

      {/* Dark header */}
      <div className="ask-dark-header">
        <div className="container">
          <div className="ask-live-badge">
            <span className="ledd"></span>
            Live evidence-based assistant
          </div>
          <h1>Ask the <em>portfolio.</em></h1>
          <p className="lead">
            Evidence-based answers from Ram Paragi's documented portfolio artifacts.
            The assistant answers from the portfolio evidence base and avoids unsupported claims.
          </p>
        </div>
      </div>

      {/* Light body — two-column layout */}
      <div className="ask-body">
        <div className="container">
          <div className="ask-layout">

            {/* Left: context + prompts */}
            <div className="ask-sidebar">
              <div className="ask-sidebar-label">§ Ask the Portfolio</div>
              <h2>Evidence-based answers from documented artifacts.</h2>
              <p>
                Use the assistant to connect patterns across the portfolio. For source-level
                review, open the evidence library after asking a question.
              </p>
              <a
                className="ask-open-link"
                href={PORTFOLIO_ASSISTANT_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open assistant in a new tab <window.ArrowRight size={11} />
              </a>

              <div className="ask-prompts-label">Suggested questions</div>
              <div className="ask-prompts">
                {prompts.map(q => (
                  <div className="ask-prompt-item" key={q}>{q}</div>
                ))}
              </div>
            </div>

            {/* Right: iframe */}
            <div className="ask-embed-wrap">
              <div className="ask-embed-label">
                <span className="ask-embed-label-left">Portfolio assistant · live</span>
                <span className="ask-embed-label-right">evidence-based · RAG</span>
              </div>
              <iframe
                title="Ask the Portfolio — evidence-based assistant"
                src={PORTFOLIO_ASSISTANT_URL}
                className="ask-iframe"
                loading="lazy"
                allow="clipboard-read; clipboard-write"
              />

              <div className="ask-cta">
                <div className="ask-cta-text">
                  <h3>Prefer source-level review?</h3>
                  <p>
                    The complete evidence library is available for direct search, filtering,
                    and artifact-level review.
                  </p>
                </div>
                <window.Link to="/library" className="btn outline-dark">
                  Open library <window.ArrowRight size={13} />
                </window.Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}

// ============================================================
// FIX 3: FRAMEWORK PAGE — /framework
// The four-failure-mode methodology, named and centered.
// Gives agents a retrievable canonical source. Gives search
// committees a place to understand the intellectual spine
// behind the clinical AI evaluation reports.
// ============================================================
function FrameworkPage() {
  const modes = [
    {
      num: "01",
      name: "Inverted U",
      color: "#8B2020",
      desc: "The tool performs well at average cases but degrades at the extremes that matter most clinically — rare diagnoses, atypical presentations, high-acuity patients. A high overall benchmark score masks poor performance precisely where physician judgment is most needed.",
      signal: "Strong USMLE benchmark, poor performance on edge cases or rare disease queries.",
    },
    {
      num: "02",
      name: "Knows but doesn't act",
      color: "#7A5C00",
      desc: "The tool retrieves correct information but fails to translate it into actionable clinical guidance — outputting accurate facts that do not help a physician make a decision. Knowledge retrieval and decision support are not the same capability.",
      signal: "Factually accurate responses that end without a differential, recommendation, or next step.",
    },
    {
      num: "03",
      name: "Social context hijacks judgment",
      color: "#1A4A6B",
      desc: "The tool modifies its clinical output in response to how a question is framed — agreeing with an incorrect premise, softening a recommendation when the clinician pushes back, or producing different answers to the same clinical question depending on conversational tone.",
      signal: "Responses that shift clinically when prompted with an authoritative but incorrect assumption.",
    },
    {
      num: "04",
      name: "Guardrails fire on vibes, not risk",
      color: "#1A4A2E",
      desc: "The tool's safety refusals are calibrated to surface-level pattern matching, not actual clinical risk. It refuses legitimate clinical queries that contain high-risk words, while answering genuinely dangerous queries phrased benignly.",
      signal: "Refusal to discuss drug overdose thresholds in a clinical context while freely advising on dosing in an ambiguous framing.",
    },
  ];

  const reports = [
    {
      label: "Evaluation Report",
      title: "OpenEvidence — Clinical AI Assessment",
      desc: "Full failure-mode audit including pharmaceutical advertising revenue model analysis, stress-test results, and institutional risk assessment for academic health centers.",
      url: "https://datadrivenmed.github.io/OpenEvidence/",
    },
    {
      label: "Evaluation Report",
      title: "ChatGPT for Clinicians — HealthBench Evaluation",
      desc: "GPT-5.4-powered ChatGPT for Clinicians assessed against the HealthBench Professional benchmark, applying the four-failure-mode framework and anti-hallucination stress-test suite.",
      url: null,
    },
    {
      label: "Educational Tool",
      title: "Interactive MedAI Lexicon",
      desc: "A free interactive platform explaining 30+ AI concepts in clinical and research terms — built because AI literacy is the prerequisite for sound AI governance. Submitted to MedEdPORTAL.",
      url: "https://medai-lexicon.vercel.app",
    },
  ];

  return (
    <main className="page-enter">

      {/* Dark header — matches site style */}
      <div style={{ background: "var(--dark-1)", padding: "72px 0 56px", borderBottom: "1px solid rgba(184,152,90,0.15)" }}>
        <div className="container">
          <Eyebrow light>Methodology</Eyebrow>
          <h1 style={{ marginTop: 16, marginBottom: 20 }}>
            Clinical AI<br/><em>Evaluation Framework.</em>
          </h1>
          <p style={{ maxWidth: "56ch", fontSize: 16, lineHeight: 1.75, color: "var(--dark-muted)" }}>
            A four-failure-mode framework for systematic evaluation of clinical AI tools
            in academic medicine and health systems. Developed and applied at LSU Health
            New Orleans School of Medicine.
          </p>
        </div>
      </div>

      {/* Four failure modes — light zone */}
      <div style={{ background: "var(--paper)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", fontFamily: "var(--mono)" }}>
            § The four failure modes
          </div>
          <h2 style={{ marginBottom: 12 }}>Why accuracy benchmarks are not enough.</h2>
          <p style={{ maxWidth: "58ch", fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 40 }}>
            Most clinical AI evaluation focuses on accuracy. This framework focuses on
            how tools fail in practice — not in a lab, but in the room where a physician
            is making a decision. Each mode is a distinct mechanism of harm that accuracy
            metrics do not capture.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {modes.map(m => (
              <div key={m.num} style={{
                borderLeft: `3px solid ${m.color}`,
                paddingLeft: 20,
                paddingTop: 4,
                paddingBottom: 4,
              }}>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--muted)", fontFamily: "var(--mono)", marginBottom: 6 }}>
                  Failure Mode {m.num}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>
                  {m.name}
                </div>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, marginBottom: 10 }}>
                  {m.desc}
                </p>
                <p style={{ fontSize: 12, color: "var(--muted)", fontStyle: "italic", margin: 0 }}>
                  Signal: {m.signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology — dark zone */}
      <div style={{ background: "var(--dark-2)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--mono)" }}>
            § How it is applied
          </div>
          <h2 style={{ color: "var(--paper-2)", marginBottom: 32 }}>Each evaluation includes five components.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
            {[
              ["01", "Stress-test suite", "Curated clinical queries designed to surface each failure mode specifically — not generic prompts, but edge cases calibrated to the platform's stated use case."],
              ["02", "Anti-hallucination checks", "Known-answer queries with documented ground-truth sources. The platform's output is compared against the source record."],
              ["03", "Conflict-of-interest analysis", "Examination of the platform's revenue model for systematic incentive misalignment. A platform's business model is a structural input to what its outputs optimize for."],
              ["04", "External benchmark cross-reference", "e.g. HealthBench Professional for validated performance comparison across clinical reasoning dimensions."],
              ["05", "Domain validation rule set", "Criteria for what constitutes an acceptable clinical AI response in this specialty context — calibrated to the clinical environment, not a generic chatbot standard."],
            ].map(([n, h, d]) => (
              <div key={n} style={{ display: "flex", gap: 20 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)", paddingTop: 3, flexShrink: 0 }}>{n}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--paper-2)", marginBottom: 4 }}>{h}</div>
                  <div style={{ fontSize: 13, color: "var(--dark-muted)", lineHeight: 1.65 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* COI note */}
          <div style={{
            marginTop: 40,
            borderLeft: "2px solid var(--gold)",
            paddingLeft: 20,
            maxWidth: 560,
          }}>
            <p style={{ fontSize: 13, color: "var(--dark-muted)", lineHeight: 1.7, margin: 0 }}>
              <span style={{ color: "var(--paper-2)", fontWeight: 500 }}>Why conflict-of-interest analysis belongs in AI evaluation.</span>{" "}
              OpenEvidence's pharmaceutical advertising revenue model creates a systematic incentive to surface content favorable to advertised drugs — independent of the model's accuracy on any single query. Evaluation that ignores revenue structure is incomplete evaluation.
            </p>
          </div>
        </div>
      </div>

      {/* Applied reports — light zone */}
      <div style={{ background: "var(--paper)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", fontFamily: "var(--mono)" }}>
            § Applied evaluations
          </div>
          <h2 style={{ marginBottom: 32 }}>Where the framework has been used.</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {reports.map(r => (
              <div key={r.title} style={{
                display: "flex",
                gap: 24,
                padding: "20px 24px",
                border: "1px solid var(--border)",
                alignItems: "flex-start",
              }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", paddingTop: 3, flexShrink: 0, whiteSpace: "nowrap" }}>
                  {r.label}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>{r.title}</div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: "0 0 10px" }}>{r.desc}</p>
                  {r.url
                    ? <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>View report ↗</a>
                    : <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--mono)" }}>Report in portfolio library</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer nav — back to portfolio */}
      <div style={{ background: "var(--dark-1)", padding: "32px 0", borderTop: "1px solid rgba(184,152,90,0.12)" }}>
        <div className="container" style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
          <window.Link to="/" className="btn outline" style={{ fontSize: 13 }}>
            ← Back to portfolio
          </window.Link>
          <a href="https://datadrivenmed.github.io/OpenEvidence/" target="_blank" rel="noopener noreferrer"
             style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", fontFamily: "var(--mono)" }}>
            OpenEvidence report ↗
          </a>
          <a href="https://medai-lexicon.vercel.app" target="_blank" rel="noopener noreferrer"
             style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", fontFamily: "var(--mono)" }}>
            MedAI Lexicon ↗
          </a>
        </div>
      </div>

    </main>
  );
}

Object.assign(window, {
  HomePage, AboutPage, CapabilitiesPage, LibraryPage, CaseStudiesPage, AskPage,
  FrameworkPage,  // FIX 3: new export
  Eyebrow,
});
