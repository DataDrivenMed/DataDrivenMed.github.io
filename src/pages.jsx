/* global window, React */
// =============================================================
// pages.jsx - Home, About, Capabilities, Library, CaseStudies, Ask
// =============================================================
const { useState, useMemo, useEffect } = React;

// Live Hugging Face Space embed for the portfolio assistant.
// If your Space URL is different, change only this one line.
const PORTFOLIO_ASSISTANT_URL = "https://ramparagi-ask-ram-portfolio-streamlit.hf.space";

// ---------- Eyebrow ----------
function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="dot"></span>{children}
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
  const heroStats = window.HERO_STATS.slice(0, 4);

  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="hero hero-xl">
        <div className="container hero-primary-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <Eyebrow>Institutional Strategy & Leadership Evidence Base</Eyebrow>
            </div>
            <h1>
              Enterprise strategy<br />
              for academic medical<br />
              <em>center transformation.</em>
            </h1>
            <p className="hero-lead">
              I build the institutional systems that help academic medical centers move from
              fragmented activity to governed execution: accreditation infrastructure,
              executive analytics, AI governance, research strategy, workforce finance, and
              cross-system accountability.
            </p>
            <div className="hero-actions">
              <window.Link to="/library" className="btn">Open the evidence library <window.ArrowRight size={14} /></window.Link>
              <window.Link to="/case-studies" className="btn outline">Read a case study</window.Link>
            </div>
          </div>
          <window.ConnectCard compact />
        </div>
        <div className="container hero-footer">
          <div className="hf-cell">
            <span className="lbl">Position</span>
            <span className="val">Enterprise-facing institutional strategy, accreditation, analytics, and governance portfolio</span>
          </div>
          <div className="hf-cell">
            <span className="lbl">Institution</span>
            <span className="val">LSU Health New Orleans · School of Medicine</span>
          </div>
          <div className="hf-cell">
            <span className="lbl">Reach</span>
            <span className="val">School · HSC · university · state · health-system · accreditation · external partner leadership</span>
          </div>
          <div className="hf-cell">
            <span className="lbl">Index</span>
            <span className="val">82 artifacts · 12 capability areas</span>
          </div>
        </div>
      </section>

      {/* PROOF AT SCALE */}
      <section className="container" style={{ marginTop: 24 }}>
        <div className="proof-strip">
          {heroStats.map((s, i) => (
            <div className="proof-cell" key={i}>
              <span className="proof-num">{s.num}</span>
              <span className="proof-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTIVE VALUE PROPOSITION */}
      <section className="section no-border tight-section">
        <div className="container">
          <div className="exec-value-card">
            <div>
              <span className="num">§ EXECUTIVE VALUE PROPOSITION</span>
              <h2>Not a document archive. A mapped evidence base for enterprise-level institutional work.</h2>
            </div>
            <div className="exec-value-copy">
              <p>
                This portfolio organizes 82 artifacts into a leadership evidence base: work that
                reduces institutional risk, preserves organizational memory, clarifies priorities,
                connects stakeholders, and turns complex strategic priorities into governed execution.
              </p>
              <div className="value-pills">
                <span>Risk reduction</span>
                <span>Executive decision support</span>
                <span>Cross-functional governance</span>
                <span>Data-informed accountability</span>
                <span>Institutional transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SENIOR LEADERSHIP READOUT */}
      <section className="section no-border tight-section">
        <div className="container">
          <div className="leadership-readout">
            <div className="readout-head">
              <span className="num">§ SENIOR LEADERSHIP READOUT</span>
              <h2>Why the portfolio matters to institutional leadership.</h2>
              <p>
                The signal is not only the volume of work. It is the pattern: cross-boundary
                leadership, institutional risk reduction, data-governed decision support, and
                durable systems that remain useful beyond a single project cycle.
              </p>
            </div>
            <div className="readout-grid">
              <div>
                <strong>Hard-to-replace institutional memory</strong>
                <span>Accreditation, GME finance, analytics, research strategy, AI governance, and policy context connected in one operating view.</span>
              </div>
              <div>
                <strong>Cross-system execution capacity</strong>
                <span>Work across school, HSC, university, state, health-system, accreditation, and external partner leadership.</span>
              </div>
              <div>
                <strong>Executive decision infrastructure</strong>
                <span>Dashboards, frameworks, briefs, models, and governance routines that convert ambiguity into leadership action.</span>
              </div>
              <div>
                <strong>Future-ready transformation</strong>
                <span>AI governance, clinical AI evaluation, research intelligence, and portfolio-wide data strategy positioned for the next operating model of academic medicine.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY ARCHITECTURE */}
      <section className="section">
        <div className="container">
          <div className="cap-visual-card centered-architecture">
            <div className="cap-visual-copy compact-copy">
              <span className="num">§ CAPABILITY ARCHITECTURE</span>
            </div>
            <div className="cap-visual-figure centered-only">
              <img src="capability-map-home.png" alt="Twelve domains of enterprise capability." />
            </div>
            <div className="cap-visual-action">
              <window.Link to="/capabilities" className="btn outline">Open full capability map <window.ArrowRight size={14} /></window.Link>
            </div>
          </div>
        </div>
      </section>


      {/* FLAGSHIP CASES */}
      <section className="section section-xl">
        <div className="container">
          <div className="big-head">
            <h2>Selected work that shows enterprise operating capacity.</h2>
            <p className="lead">
              These examples anchor the broader evidence library: institutional AI governance,
              multi-system GME policy and workforce finance, accreditation and CQI architecture,
              research strategy, faculty evaluation infrastructure, and cross-institutional policy leadership.
            </p>
          </div>

          <div className="featured-grid" style={{ marginTop: 56 }}>
            {featured3.map((a, i) => (
              <window.FeaturedCard key={a.id} a={a} index={i} onOpen={openArtifact} />
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: "right" }}>
            <window.Link to="/case-studies" className="quiet-link">
              All twelve flagship case studies <window.ArrowRight size={12} />
            </window.Link>
          </div>
        </div>
      </section>

      {/* EVIDENCE LIBRARY + ASK - single CTA band */}
      <section className="section section-xl">
        <div className="container">
          <div className="dual-cta triple-cta">
            <div className="dual-cell">
              <span className="num">§ 03 · FEATURED</span>
              <h3>Start with the flagship work.</h3>
              <p>
                A curated entry point for busy executives: the clearest examples of
                strategy, governance, analytics, policy, and institutional execution.
              </p>
              <window.Link to="/case-studies" className="btn">View case studies <window.ArrowRight size={14} /></window.Link>
            </div>
            <div className="dual-cell">
              <span className="num">§ 04 · FULL LIBRARY</span>
              <h3>Then review the complete record.</h3>
              <p>
                Eighty-two artifacts indexed by capability, skill, audience, confidentiality,
                and strategic value so the full breadth is visible without becoming clutter.
              </p>
              <window.Link to="/library" className="btn outline">Open library <window.ArrowRight size={14} /></window.Link>
            </div>
            <div className="dual-cell warm">
              <span className="num">§ 05 · ASK</span>
              <h3>Ask the portfolio directly.</h3>
              <p>
                Use the evidence-based portfolio assistant to ask about leadership scope,
                accreditation, AI governance, analytics, GME finance, research strategy,
                and institutional impact.
              </p>
              <window.Link to="/ask" className="btn warm">Open assistant <window.ArrowRight size={14} /></window.Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// ABOUT / EXECUTIVE PROFILE
// ============================================================
function AboutPage() {
  return (
    <main className="page-enter">
      <section className="container">
        <div className="about-hero">
          <div className="about-portrait">
            <span className="initials">R P</span>
          </div>
          <div>
            <Eyebrow>Executive Profile</Eyebrow>
            <h1>
              Ram Paragi: academic medical center <em>enterprise strategist</em>.
            </h1>
            <div className="meta">
              <span>LSU HEALTH NEW ORLEANS</span>
              <span>SCHOOL OF MEDICINE</span>
              <span>NEW ORLEANS · LA</span>
            </div>
            <p className="bio">
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
      </section>

      <section className="container" style={{ marginTop: 32 }}>
        <div className="section-head">
          <div>
            <span className="num">§ COMPETENCIES</span>
            <h2>Leadership competencies</h2>
          </div>
          <p className="lead">
            Eight senior leadership competencies, each anchored in artifacts inside this
            portfolio and expressed as institutional operating capacity, not aspirational language.
          </p>
        </div>

        <div className="competencies" style={{ marginTop: 40 }}>
          {[
            ["Strategic planning at scale", "Executive briefings, institutional planning architecture, and matrixed alignment across the School of Medicine, health systems, and LSU Health Sciences Center."],
            ["Regulatory and policy synthesis", "Working fluency in LCME, ACGME, AAMC, NIH, FDA, AHRQ, CMS, AAU, Medicare/Medicaid GME policy, and Louisiana legislative context."],
            ["Quantitative leadership", "Predictive models, executive dashboards, K-means / PCA / Bayesian / regression frameworks, and longitudinal analytics built for decision support."],
            ["AI governance", "SOM AI governance suite spanning a pre-final policy draft, compliance audit, tool vetting, faculty fluency, teaching guides, clinical AI evaluation, and leadership briefings."],
            ["Workforce finance", "70+ residency and fellowship programs with more than 1000 FTEs · Medicare/Medicaid GME policy and regulations · three major healthcare systems across the state."],
            ["Institutional culture", "Faculty Affairs evaluation infrastructure across 500+ faculty and 15 departments, including mentoring, climate, and development portfolio evaluation."],
            ["Public-sector positioning", "FDA RFI-grade clinical trials response · NCI AI Innovation Program contribution · multiple federal and state policy scopes analyzed for strategic alignment."],
            ["Research and scholarship", "NIH portfolio clustering, NSF EPSCoR analytics, scholarly productivity, and translation of research intelligence into institutional growth strategy."],
          ].map(([h, d]) => (
            <div className="item" key={h}>
              <div className="h">{h}</div>
              <div className="d">{d}</div>
            </div>
          ))}
        </div>
      </section>


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
  // Honor #anchor scroll to in-section
  useEffect(() => {
    const id = window.location.hash.split("#")[2];
    if (id) {
      const el = document.getElementById("cap-" + id);
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, []);

  return (
    <main className="page-enter">
      <section className="container cap-page-hero">
        <Eyebrow>Capability map</Eyebrow>
        <h1>Twelve domains of<br/>enterprise capability.</h1>
        <p className="lead">
          Each domain is a documented body of work - accreditation, analytics, AI
          governance, workforce finance, faculty affairs, research strategy, simulation,
          policy, and beyond. Click any row to filter the library to that domain.
        </p>
      </section>

      <section className="container">
        <div className="cap-list">
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
                  <span className="go-label">Open capability</span>
                  <window.ArrowRight size={16} />
                </div>
              </a>
            );
          })}
        </div>
      </section>
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
  const [view, setView] = useState("index"); // 'index' | 'cards'

  // Evidence code: cap.num + "." + zero-padded index in cap
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

  // Group filtered by capability for index view
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
      <section className="container ev-hero">
        <Eyebrow>Evidence library · {window.ARTIFACTS.length} artifacts indexed</Eyebrow>
        <h1>The evidence library.</h1>
        <p className="lead">
          A searchable institutional record. Eighty-two artifacts across twelve capability
          areas - indexed by domain, audience, and confidentiality status. Every entry
          links to a structured executive read.
        </p>
      </section>

      <section className="container">
        <div className="ev-search">
          <window.SearchIcon size={18} />
          <input
            placeholder="Search the corpus - CMS DGME, AI policy, faculty evaluation, NIH clustering, COVID Rt…"
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
            <button
              className={"ev-flag " + (featuredOnly ? "active" : "")}
              onClick={() => setFeaturedOnly(!featuredOnly)}
            >
              <span className="dot featured"></span> Featured
            </button>
            <button
              className={"ev-flag " + (confidOnly ? "active" : "")}
              onClick={() => setConfidOnly(!confidOnly)}
            >
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
          <div className="lib-grid" style={{ marginTop: 32 }}>
            {filtered.map(a => (
              <window.ArtifactCard key={a.id} a={a} onOpen={openArtifact} />
            ))}
          </div>
        ) : (
          <div className="ev-index">
            <div className="ev-row ev-head">
              <div className="ev-c-code">CODE</div>
              <div className="ev-c-title">TITLE</div>
              <div className="ev-c-skills">SKILLS DEMONSTRATED</div>
              <div className="ev-c-aud">AUDIENCE</div>
              <div className="ev-c-flags">STATUS</div>
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
                    <button
                      key={a.id}
                      className="ev-row ev-item"
                      onClick={() => openArtifact(a)}
                    >
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
      </section>
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
      <section className="container cap-page-hero">
        <Eyebrow>Flagship evidence set · {flagship.length}</Eyebrow>
        <h1>Flagship work that<br/>shows enterprise scope.</h1>
        <p className="lead">
          These 12 artifacts are the best first read for a senior leader: strategy, governance,
          accreditation, AI, workforce finance, analytics, policy, faculty infrastructure,
          research intelligence, and institutional execution.
        </p>
      </section>

      <section className="container">
        <div className="featured-grid">
          {flagship.map((a, i) => (
            <window.FeaturedCard key={a.id} a={a} index={i} onOpen={openArtifact} />
          ))}
        </div>
      </section>
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
    <main className="page-enter ask-page-clean">
      <section className="container ask-hero-clean">
        <div className="badge live">
          <span className="ledd"></span>
          Live evidence-based assistant
        </div>
        <h1>Ask the <em>portfolio.</em></h1>
        <p className="lead">
          Explore evidence from Ram Paragi's documented portfolio across strategy,
          accreditation, AI governance, analytics, research, GME finance, policy,
          and institutional leadership. The assistant answers from the portfolio
          evidence base and avoids unsupported claims.
        </p>
      </section>

      <section className="container ask-panel-clean">
        <div className="ask-intro-clean">
          <div>
            <span className="num">§ ASK THE PORTFOLIO</span>
            <h2>Evidence-based answers from documented artifacts.</h2>
            <p>
              Use the assistant to connect patterns across the portfolio. For source-level
              review, open the evidence library after asking a question.
            </p>
          </div>
          <a
            className="quiet-link ask-open-link"
            href={PORTFOLIO_ASSISTANT_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open assistant in a new tab <window.ArrowRight size={12} />
          </a>
        </div>

        <div className="ask-prompt-grid-clean">
          {prompts.map(q => (
            <span className="ask-prompt-chip-clean" key={q}>{q}</span>
          ))}
        </div>

        <div className="ask-embed-card-clean">
          <div className="ask-embed-bar-clean">
            <div className="dots"><span></span><span></span><span></span></div>
            <div className="ttl">ask-the-portfolio · live assistant</div>
            <div className="right">evidence-based</div>
          </div>
          <iframe
            title="Ask the Portfolio assistant"
            src={PORTFOLIO_ASSISTANT_URL}
            className="ask-iframe-clean"
            loading="lazy"
            allow="clipboard-read; clipboard-write"
            style={{ width: "100%", height: "820px", border: 0, display: "block" }}
          />
        </div>

        <div className="cta-bar ask-fallback-clean">
          <div>
            <h3>Prefer source-level review?</h3>
            <p>
              The complete portfolio evidence library remains available for direct search,
              filtering, and artifact-level review.
            </p>
          </div>
          <window.Link to="/library" className="btn">Open library</window.Link>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, {
  HomePage, AboutPage, CapabilitiesPage, LibraryPage, CaseStudiesPage, AskPage, Eyebrow,
});
