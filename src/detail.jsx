/* global window, React */
// =============================================================
// detail.jsx - Artifact / Case Study detail overlay
// =============================================================
const { useEffect: useEffectD, useState: useStateD } = React;

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
  "ev-ai-ume-gme-competency-map": {
    problem: "Medical schools need a developmental approach to AI education that protects foundational clinical reasoning before trainees begin relying on AI-supported workflows. A collection of terminology lessons or a general-use policy does not establish when learners may use AI, what they must demonstrate first, or how progression should be assessed across UME and GME.",
    role: "Framework designer and author. Developed the three-phase curriculum architecture, measurable milestones, required evidence, assessment methods, supervision expectations, safety controls, progression gates, and proposed accreditation alignment. Circulated the framework to the Dean and the Associate Deans responsible for Graduate Medical Education and Student Affairs for review and consideration.",
    approach: [
      "Sequence AI learning developmentally: protect independent reasoning first, train error detection second, and introduce supervised clinical integration only after defined progression gates.",
      "Translate each competency into observable behavior, a required artifact, an assessment method, an oversight level, and explicit risk controls.",
      "Connect the curriculum with clinical safety, learner development, institutional AI governance, and proposed LCME and ACGME alignment."
    ],
    execution: [
      "Designed an AI-independent baseline for MS1-MS2 with protected reasoning exercises, AI-restricted assessments, and calibrated self-assessment.",
      "Designed an adversarial-calibration phase for MS3-MS4 using independent reasoning traces, source verification, error detection, documentation review, and supervised safety audits.",
      "Designed a supervised-integration phase for PGY1-PGY2 using disclosure statements, override documentation, escalation protocols, medication-safety controls, and governance participation.",
      "Shared the proposed framework with the Dean, Associate Dean for Graduate Medical Education, and Associate Dean for Student Affairs. No response, endorsement, formal approval, adoption, or implementation is claimed."
    ],
    tools: ["Competency-based medical education", "AI-independent assessment", "Adversarial calibration", "Clinical AI safety", "Progression gates", "LCME and ACGME mapping"],
    value: "Extends the MedAI learning system from terminology and teaching support into a longitudinal curriculum model that leadership can evaluate, revise, pilot, and validate before any institutional adoption.",
    competencies: ["AI curriculum design", "UME-GME integration", "Assessment architecture", "Clinical reasoning protection", "AI safety and governance"],
    related: ["ai-01", "ai-05", "ai-06", "ev-ai-gme-policy"]
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
    problem: "Faculty Affairs and institutional culture work across 25+ departments and centers is a measurement problem first and a culture problem second. Without a shared evaluation infrastructure, every department and center generates its own metrics, leadership cannot compare across units, and faculty development work cannot be evaluated consistently.",
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

const IMPORTANT_FULL_EVIDENCE_IDS = new Set(["ai-01", "gme-01", "fac-01"]);

function fallbackCaseDetail(a) {
  return {
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

function neutralizePositionTitleLanguage(text) {
  return String(text || "")
    .replace(/my vision as\s+(?:an?\s+)?(?:Assistant\s*\/\s*Associate|Associate\s*\/\s*Assistant|Assistant|Associate)\s+Dean(?:\s+of\s+[^,.]+)?\s+is/gi, "my vision is")
    .replace(/as\s+(?:an?\s+)?(?:Assistant\s*\/\s*Associate|Associate\s*\/\s*Assistant|Assistant|Associate)\s+Dean(?:\s+of\s+[^,.]+)?/gi, "as an institutional leader")
    .replace(/(?:Assistant\s*\/\s*Associate|Associate\s*\/\s*Assistant|Assistant|Associate)\s+Dean(?:\s+of\s+[^,.]+)?/gi, "institutional leadership role");
}

function cleanEvidenceLine(line) {
  return neutralizePositionTitleLanguage(String(line || "")
    .replace(/^[-*•]\s+/, "")
    .replace(/^o\s+/, "")
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/__+/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim());
}

function stripFrontMatter(text) {
  return String(text || "").replace(/^---[\s\S]*?---\s*/, "");
}

function sourceUrlForArtifact(artifact) {
  const file = artifact.cleanFile || artifact.sourceFile;
  if (!file) return null;
  return "content/artifacts_cleaned_82/" + encodeURIComponent(file);
}

function extractSection(text, headingRegex) {
  const match = text.match(headingRegex);
  if (!match) return "";
  const start = match.index + match[0].length;
  const rest = text.slice(start);
  const next = rest.search(/^##\s+/m);
  return next >= 0 ? rest.slice(0, next) : rest;
}

function extractSourceEvidence(raw, artifact) {
  const withoutYaml = stripFrontMatter(raw);
  const body = withoutYaml.split(/## Original Source Content/i)[1] || withoutYaml;

  const priorityBlocks = [
    extractSection(body, /^##\s+Professional summary\s*$/im),
    extractSection(body, /^##\s+Role description\s*$/im),
    extractSection(body, /^##\s+Accomplishments\s*$/im),
    extractSection(body, /^##\s+Primary Responsibility\s*$/im),
    extractSection(body, /^##\s+Key Functions\s*$/im),
    extractSection(body, /^##\s+Skills\s*$/im),
    body,
  ].filter(Boolean).join("\n");

  const lines = priorityBlocks.split("\n").map(l => l.trim()).filter(Boolean);
  const bullets = [];
  const seen = new Set();

  lines.forEach((line) => {
    const isBullet = /^[-*•]\s+/.test(line) || /^o\s+/.test(line);
    const isUsefulParagraph = !isBullet && line.length > 85 && !line.startsWith("#") && !line.startsWith("---") && !/^\*\*Portfolio/.test(line) && !/^\*\*Tags/.test(line);
    if (!isBullet && !isUsefulParagraph) return;
    const cleaned = cleanEvidenceLine(line);
    if (cleaned.length < 45) return;
    const key = cleaned.toLowerCase().slice(0, 120);
    if (seen.has(key)) return;
    seen.add(key);
    bullets.push(cleaned.length > 340 ? cleaned.slice(0, 337).trim() + "..." : cleaned);
  });

  return { bullets: bullets.slice(0, 7) };
}

function LegislativeBillsTable({ artifact, compact = false }) {
  if (!artifact.billTable) return null;
  return (
    <div className={compact ? "leg-bill-block compact" : "leg-bill-block"} id="sec-bills">
      <div className="leg-bill-kicker">Legislative bill evidence</div>
      <h3>Louisiana legislative bills supported</h3>
      {artifact.billTableIntro && <p>{artifact.billTableIntro}</p>}
      <div className="leg-bill-table-wrap">
        <table className="leg-bill-table">
          <thead>
            <tr>
              <th>Louisiana Legislative Bill</th>
              <th>Bill Description</th>
            </tr>
          </thead>
          <tbody>
            {artifact.billTable.map((row) => (
              <tr key={row.bill}>
                <td>{row.bill}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SourceEvidenceSnapshot({ artifact }) {
  const [state, setState] = useStateD({ status: "idle", evidence: null });

  useEffectD(() => {
    const url = sourceUrlForArtifact(artifact);
    if (!url) {
      setState({ status: "missing", evidence: null });
      return;
    }
    let cancelled = false;
    setState({ status: "loading", evidence: null });
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Could not load evidence");
        return res.text();
      })
      .then((raw) => {
        if (cancelled) return;
        setState({ status: "ready", evidence: extractSourceEvidence(raw, artifact) });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ status: "error", evidence: null });
      });
    return () => { cancelled = true; };
  }, [artifact.id, artifact.sourceFile, artifact.cleanFile]);

  if (state.status === "loading") {
    return <p style={{ color: "var(--muted)" }}>Loading evidence details...</p>;
  }

  if (state.status === "error" || state.status === "missing") {
    return (
      <div>
        <p style={{ color: "var(--muted)" }}>
          The detailed evidence could not be displayed inline.
        </p>
      </div>
    );
  }

  const evidence = state.evidence;
  if (!evidence || !evidence.bullets || evidence.bullets.length === 0) {
    return <p style={{ color: "var(--muted)" }}>No structured excerpt was available for this artifact.</p>;
  }

  return (
    <ul>
      {evidence.bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  );
}

function GroupedEvidenceList({ artifact }) {
  if (!Array.isArray(artifact.entries) || artifact.entries.length === 0) return null;
  return (
    <ul>
      {artifact.entries.map((entry, index) => <li key={artifact.id + "-entry-" + index}>{entry}</li>)}
    </ul>
  );
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
  const statusLabels = artifact.statusLabels || [];
  const showFullEvidenceRecord = Boolean(
    artifact.fullArtifactUrl && (artifact.publicDocument || artifact.billTable || IMPORTANT_FULL_EVIDENCE_IDS.has(artifact.id))
  );

  const liveButtonStyle = {
    background: "linear-gradient(135deg, #d8b76a, #b8985a)",
    color: "#0d1117",
    borderColor: "rgba(216,183,106,0.72)",
    boxShadow: "0 14px 32px rgba(184,152,90,0.22)",
    fontWeight: 700,
  };

  const liveBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginRight: 8,
    fontFamily: "var(--mono)",
    fontSize: 9,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#0d1117",
  };

  const liveDotStyle = {
    width: 7,
    height: 7,
    borderRadius: 999,
    background: "#155e3b",
    boxShadow: "0 0 0 4px rgba(21,94,59,0.13)",
  };

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
          {(artifact.liveUrl || showFullEvidenceRecord) && (
            <div className="detail-actions">
              {artifact.liveUrl && (
                <a className="btn" style={liveButtonStyle} href={artifact.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span style={liveBadgeStyle}><span style={liveDotStyle}></span>Live</span>
                  {artifact.liveLabel || "View live project"} <window.ArrowRight size={14} />
                </a>
              )}
              {showFullEvidenceRecord && (
                <a className="btn secondary" href={artifact.fullArtifactUrl} target="_blank" rel="noopener noreferrer">
                  {artifact.fullArtifactLabel || "Open full evidence record"} <window.ArrowRight size={14} />
                </a>
              )}
              <span className="detail-note">
                {artifact.fullArtifactNote || (showFullEvidenceRecord
                  ? "This view includes the key evidence directly. Use the full record only if you want to review the longer supporting text."
                  : "This view includes the key evidence directly so reviewers can understand the artifact without opening another page.")}
              </span>
            </div>
          )}

          <div className="cs-meta-strip">
            <div className="item">
              <div className="lbl">Artifact role</div>
              <div className="v">{artifact.role}</div>
            </div>
            <div className="item">
              <div className="lbl">Audience</div>
              <div className="v">{artifact.audience.slice(0, 3).join(" · ")}</div>
            </div>
            <div className="item">
              <div className="lbl">Status</div>
              <div className="v">
                {artifact.evidenceStrength || (artifact.confidential ? "Public summary; source proof may be private" : "Portfolio evidence record")}
              </div>
            </div>
            <div className="item">
              <div className="lbl">Evidence labels</div>
              <div className="v status-row">
                {statusLabels.map(s => <span key={s.key} className={"status-chip " + s.key}>{s.label}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cs-body">
            <div className="cs-toc">
              <span className="tlbl">On this page</span>
              <a href="#sec-summary">Executive summary</a>
              <a href="#sec-evidence">{artifact.entries ? "Included record" : "Evidence snapshot"}</a>
              <a href="#sec-approach">Strategic approach</a>
              <a href="#sec-execution">Execution</a>
              <a href="#sec-tools">Tools &amp; frameworks</a>
              {artifact.billTable && <a href="#sec-bills">Legislative bills</a>}
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
                {artifact.billTable && <LegislativeBillsTable artifact={artifact} compact={true} />}
              </section>

              <section className="cs-section" id="sec-evidence">
                <h2>{artifact.entries ? "Included record" : "Evidence snapshot"}</h2>
                {artifact.entries ? (
                  <>
                    <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                      {artifact.entriesIntro || "The entries below are consolidated within this artifact so the library remains concise while preserving the underlying record."}
                    </p>
                    <GroupedEvidenceList artifact={artifact} />
                  </>
                ) : (
                  <>
                    <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                      Selected evidence from the underlying artifact record, shown here so reviewers can understand the work without opening another page.
                    </p>
                    <SourceEvidenceSnapshot artifact={artifact} />
                  </>
                )}
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
