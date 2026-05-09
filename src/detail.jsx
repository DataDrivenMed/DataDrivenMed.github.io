/* global window, React */
// =============================================================
// detail.jsx - Artifact / Case Study detail overlay
// =============================================================
const { useEffect: useEffectD, useState: useStateD, useMemo: useMemoD } = React;

// Hand-authored rich case-study sections for a few flagships.
// Other artifacts auto-render a structured but lighter detail page from data.
const CASE_DETAILS = {
  "ai-01": {
    problem: "When generative AI hit medical education in 2023, no academic medical center had a governance vocabulary that could speak to the Dean, the Provost, the IRB, the LCME, the General Counsel, and a frontline faculty member in the same document. Tools were being adopted faster than they could be vetted, with no shared mental model of risk, regulatory class, or institutional posture.",
    role: "Lead author and institutional convener. Drafted the governance language, ran consultation cycles with Faculty Affairs, GC, and the Dean's office, and produced the entire six-document suite - Policy, Audit, Vetting Framework, AI Fluency Studio, Micromodules, and the Dean briefing.",
    approach: [
      "Anchored governance in five evaluation axes - intent, regulatory class, data exposure, validation evidence, and lifecycle audit - that translate cleanly between procurement, IRB, LCME, and faculty.",
      "Built the suite as a system rather than a single policy: each document has a different audience and operating cadence, but all share the same axes.",
      "Stress-tested the framework against ChatGPT, OpenEvidence, UpToDate Expert AI, and the Med-AI Vercel teaching module - case studies of how the framework runs in practice.",
    ],
    execution: [
      "AI Policy - institutional posture, scope, and accountability lines.",
      "AI Audit - evidence collection cadence and risk re-classification triggers.",
      "Vetting Framework - operational tool intake and procurement gating.",
      "AI Fluency Studio - faculty literacy program scaffolded against the same axes.",
      "AI Micromodules - bite-sized faculty learning units, deployable in 10-minute slots.",
      "Dean Briefing - single-document executive summary positioning the SOM externally.",
    ],
    tools: ["LCME", "AAMC", "FDA SaMD framing", "HIPAA", "FERPA", "Institutional GC review", "PRISMA-style evidence synthesis"],
    value: "The SOM holds an institutional posture on AI that can be communicated upward (Dean, Provost, Board), outward (LCME, AAMC, peer institutions), and downward (faculty, residents, students) using a single, coherent vocabulary. Procurement decisions stop being ad hoc.",
    competencies: ["Regulatory synthesis", "Executive communication", "Cross-functional convening", "Faculty literacy program design", "Institutional risk framing"],
    related: ["ai-04", "ai-07", "ai-09", "ai-12"],
  },
  "gme-01": {
    problem: "Seventy-plus residency and fellowship programs at LSU SOM are distributed across three competing health systems - Ochsner, LCMC, and University Medical Center. The funding architecture sits on top of CMS DGME, IME, IRIS, and a web of CEAs and MOUs that none of those systems alone are positioned to manage. Without a coordinating institutional document, every contract cycle is renegotiated from scratch.",
    role: "Author and steward of the institutional GME Policy Statement. Coordinator across SOM, GME office, three health systems, and CMS Medicare cost reporting cycles. Negotiator on CEA / MOU language.",
    approach: [
      "Treat the SOM as the persistent institutional party in a market where health-system partners change. The Policy Statement is the durable layer.",
      "Codify CMS DGME / IME mechanics inside the institutional document so contract negotiation can happen at the legal layer without re-litigating the financial mechanics.",
      "Build a workforce-finance model that ties resident counts, FTE caps, and per-resident allocations into a single picture the Dean and senior leadership can read.",
    ],
    execution: [
      "Authored the multi-system GME Policy Statement.",
      "Modeled DGME / IME flows under several CEA scenarios.",
      "Drafted CEA / MOU language adopted across cycles.",
      "Reconciled IRIS submissions against CMS Medicare cost reports.",
    ],
    tools: ["CMS DGME", "CMS IME", "Medicare Cost Report", "IRIS", "CEA / MOU drafting", "ACGME WebADS", "Excel financial modeling"],
    value: "The institution can renegotiate CEAs in a single quarter rather than a year. The Dean and senior leadership operate from the same workforce-finance model. Risk of resident-cap drift across system transitions is structurally reduced.",
    competencies: ["Workforce finance", "Multi-party negotiation", "Regulatory mechanics", "Executive coordination", "Long-horizon institutional stewardship"],
    related: ["gme-03", "gme-05", "gme-04", "execstrat-01"],
  },
  "fac-01": {
    problem: "Faculty Affairs at scale - 900+ faculty, 15 departments, multiple tracks, and a $2M+ annual development portfolio - is a measurement problem first and a culture problem second. Without a shared evaluation infrastructure, every department generates its own metrics, leadership cannot compare across units, and faculty development spend cannot be evaluated.",
    role: "Architect of the institutional faculty-evaluation infrastructure: the data model, the evaluation frameworks (Logic Model, CIPP, Kirkpatrick), the climate analytics, and the longitudinal dashboards.",
    approach: [
      "Standardize evaluation language across departments using Logic Model + CIPP + Kirkpatrick - three frameworks chosen specifically because each handles a different evaluation question.",
      "Build the climate analytics layer as an institutional asset, not a one-off survey.",
      "Tie development spend to evaluation outcomes so the $2M+ portfolio can be defended in the budget cycle.",
    ],
    execution: [
      "Logic Model and CIPP evaluation frameworks deployed across faculty development programs.",
      "Climate survey instrumentation refreshed with longitudinal cohort tracking.",
      "Mentoring program evaluation overhauled to tie outcomes to faculty pipeline metrics.",
      "Faculty Affairs dashboard surfacing evaluation, climate, and pipeline data side by side.",
    ],
    tools: ["Logic Model", "CIPP", "Kirkpatrick", "AAMC FAS", "Tableau", "Survey psychometrics"],
    value: "Faculty Affairs operates from a single, longitudinal evaluation system. Development investments become more defensible to senior leadership. Department comparisons become possible without re-instrumenting each year.",
    competencies: ["Evaluation infrastructure", "Climate analytics", "Faculty pipeline strategy", "Budget defense", "Cross-departmental coordination"],
    related: ["fac-02", "fac-03", "fac-04"],
  },
};

function fallbackCaseDetail(a) {
  return {
    problem:
      "This artifact addresses a specific institutional problem in the " +
      (window.CAPABILITIES.find(c => c.id === a.category)?.title.toLowerCase() || "portfolio") +
      " domain. The problem statement is captured in the source artifact and summarized here for executive review.",
    role: a.role + " - owning artifact authorship, stakeholder coordination, and institutional positioning.",
    approach: [
      "Anchor the work in evidence - regulatory text, data, or peer benchmarks - before writing any institutional posture.",
      "Build the artifact for the actual decision-maker (Dean, HSC leader, university leader, state leader, health-system partner, search committee, external agency), not for the analyst.",
      "Structure the deliverable so it survives leadership transitions and contract cycles.",
    ],
    execution: [
      "Drafted and circulated the artifact through the relevant institutional channels.",
      "Iterated against stakeholder feedback at the SOM, health-system, and where relevant federal levels.",
      "Linked the artifact to adjacent capability areas inside this portfolio.",
    ],
    tools: a.skills,
    value: a.strategic,
    competencies: a.skills.slice(0, 4),
    related: window.ARTIFACTS
      .filter(x => x.category === a.category && x.id !== a.id)
      .slice(0, 4)
      .map(x => x.id),
  };
}

// ---------- Detail overlay ----------
function ArtifactDetail({ artifact, onClose }) {
  useEffectD(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const detail = CASE_DETAILS[artifact.id] || fallbackCaseDetail(artifact);
  const cap = window.CAPABILITIES.find(c => c.id === artifact.category);
  const related = (detail.related || [])
    .map(id => window.ARTIFACTS.find(a => a.id === id))
    .filter(Boolean);

  return (
    <div className="cs-overlay">
      <div className="cs-overlay-bg" onClick={onClose}></div>
      <div className="cs-overlay-panel">
        <div className="container cs">
          <a className="cs-back" onClick={(e) => { e.preventDefault(); onClose(); }} href="#">
            <window.ArrowLeft size={14} /> Back to portfolio
          </a>
          <div className="cs-cat">{cap ? cap.title : artifact.category}</div>
          <h1 className="cs-title">{artifact.title}</h1>
          <p className="cs-summary">{artifact.summary}</p>
          {(artifact.liveUrl || artifact.fullArtifactUrl) && (
            <div className="detail-actions">
              {artifact.liveUrl && (
                <a className="btn" href={artifact.liveUrl} target="_blank" rel="noopener noreferrer">
                  {artifact.liveLabel || "View live project"} <window.ArrowRight size={14} />
                </a>
              )}
              {artifact.fullArtifactUrl && (
                <a className="btn secondary" href={artifact.fullArtifactUrl} target="_blank" rel="noopener noreferrer">
                  Evidence page <window.ArrowRight size={14} />
                </a>
              )}
              <span className="detail-note">Live links are prioritized when a public artifact exists. Evidence pages preserve the source artifact for review and future RAG preparation.</span>
            </div>
          )}

          <div className="cs-meta-strip">
            <div className="item">
              <div className="lbl">My role</div>
              <div className="v">{artifact.role}</div>
            </div>
            <div className="item">
              <div className="lbl">Audience</div>
              <div className="v">{artifact.audience.slice(0, 3).join(" · ")}</div>
            </div>
            <div className="item">
              <div className="lbl">Source</div>
              <div className="v" style={{ fontFamily: "var(--mono)", fontSize: 12.5 }}>{artifact.sourceFile}</div>
            </div>
            <div className="item">
              <div className="lbl">Status</div>
              <div className="v">
                {artifact.featured ? "Featured · " : ""}
                {artifact.confidential ? "Confidential" : "Open review"}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cs-body">
            <div className="cs-toc">
              <span className="tlbl">On this page</span>
              <a href="#sec-summary">Executive summary</a>
              <a href="#sec-problem">Problem &amp; opportunity</a>
              <a href="#sec-role">My role</a>
              <a href="#sec-approach">Strategic approach</a>
              <a href="#sec-execution">Execution</a>
              <a href="#sec-tools">Tools &amp; frameworks</a>
              <a href="#sec-value">Institutional value</a>
              <a href="#sec-comp">Competencies</a>
              {related.length > 0 && <a href="#sec-related">Related artifacts</a>}
            </div>

            <div>
              <section className="cs-section" id="sec-summary">
                <h2>Executive summary</h2>
                <p>{artifact.summary}</p>
                <p style={{ color: "var(--muted)" }}>
                  <b style={{ color: "var(--ink-2)" }}>Strategic value · </b>
                  {artifact.strategic}
                </p>
              </section>

              <section className="cs-section" id="sec-problem">
                <h2>Problem &amp; opportunity</h2>
                <p>{detail.problem}</p>
              </section>

              <section className="cs-section" id="sec-role">
                <h2>My role</h2>
                <p>{detail.role}</p>
              </section>

              <section className="cs-section" id="sec-approach">
                <h2>Strategic approach</h2>
                <ul>
                  {detail.approach.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </section>

              <section className="cs-section" id="sec-execution">
                <h2>Execution</h2>
                <ul>
                  {detail.execution.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </section>

              <section className="cs-section" id="sec-tools">
                <h2>Tools &amp; frameworks</h2>
                <div className="cs-tools">
                  {detail.tools.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </section>

              <section className="cs-section" id="sec-value">
                <h2>Institutional value</h2>
                <p>{detail.value}</p>
              </section>

              <section className="cs-section" id="sec-comp">
                <h2>Leadership competencies demonstrated</h2>
                <div className="cs-tools">
                  {detail.competencies.map(c => <span key={c} className="tag">{c}</span>)}
                </div>
              </section>

              {related.length > 0 && (
                <section className="cs-section" id="sec-related">
                  <h2>Related artifacts</h2>
                  <div className="cs-related">
                    {related.map(r => (
                      <window.ArtifactCard key={r.id} a={r} onOpen={() => {
                        // Swap to the related artifact
                        onClose();
                        setTimeout(() => window.__openArtifact && window.__openArtifact(r), 50);
                      }} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ArtifactDetail });
