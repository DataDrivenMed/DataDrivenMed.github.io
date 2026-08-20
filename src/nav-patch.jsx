/* global window, document, React */
// Adds Career & Governance to the existing navigation without changing older page components.
// Premium executive mobile drawer for tablet and phone navigation.
// v4: Adds GenAI atlas and AI resources as Babel-loaded safety patches.

function upsertPortfolioArtifact(a) {
  if (!Array.isArray(window.ARTIFACTS)) return;
  const i = window.ARTIFACTS.findIndex((x) => x && x.id === a.id);
  if (i >= 0) window.ARTIFACTS[i] = Object.assign({}, window.ARTIFACTS[i], a);
  else window.ARTIFACTS.push(a);
}

function refreshPortfolioArtifactMetadata(featuredIds = []) {
  if (!Array.isArray(window.ARTIFACTS)) return;
  window.FLAGSHIP_IDS = Array.isArray(window.FLAGSHIP_IDS) ? window.FLAGSHIP_IDS : [];
  featuredIds.forEach((id) => {
    if (!window.FLAGSHIP_IDS.includes(id)) window.FLAGSHIP_IDS.push(id);
  });
  if (typeof window.applyEvidenceStatusMetadata === "function") {
    window.applyEvidenceStatusMetadata(window.ARTIFACTS);
  }
  if (Array.isArray(window.HERO_STATS)) {
    const artifactStat = window.HERO_STATS.find((s) => /Artifacts in capability portfolio/i.test(s.lbl || ""));
    if (artifactStat) artifactStat.num = String(window.ARTIFACTS.length);
  }
  window.ALL_SKILLS = [...new Set(window.ARTIFACTS.flatMap((a) => a.skills || []))].sort();
  window.ALL_AUDIENCES = [...new Set(window.ARTIFACTS.flatMap((a) => a.audience || []))].sort();
}

(function ensureGenAIAtlasArtifact() {
  if (!Array.isArray(window.ARTIFACTS)) return;

  upsertPortfolioArtifact({
    id: "ai-17",
    title: "Generative AI Use-Case Atlas for Academic Health Sciences",
    category: "ai-governance",
    role: "Live public institutional AI governance and faculty education artifact",
    summary: "Interactive web-based atlas organizing more than 60 generative AI use cases for academic health sciences faculty and staff across teaching, clinical care, research and NCI readiness, administration, operations, and partner-governed health-system workflows.",
    skills: ["AI governance", "Faculty AI literacy", "Academic medicine strategy", "Clinical AI risk classification", "NCI readiness", "Research strategy", "Partner-governed implementation", "Interactive web artifact", "Next.js", "React", "Tailwind CSS", "Vercel deployment"],
    audience: ["Faculty", "Staff", "Dean", "Research leadership", "Program directors", "Clinical partners", "AI governance committees", "NCI planning teams"],
    strategic: "Demonstrates the ability to translate generative AI from a broad technology trend into a practical institutional decision-support framework for academic medicine. The artifact connects AI literacy, teaching, clinical partner governance, biomedical research, NCI readiness, operational decision-making, model evaluation, and data-sensitivity controls into one navigable product.",
    sourceFile: "generative-ai-use-case-atlas-academic-health-sciences-live.md",
    cleanFile: "generative-ai-use-case-atlas-academic-health-sciences-live.md",
    tags: ["Generative AI", "AI governance", "Academic health sciences", "NCI readiness", "Clinical partner governance", "Faculty development", "Research strategy", "Vercel"],
    featured: true,
    confidential: false,
    liveUrl: "https://genai-healthcare-usecase-atlas.vercel.app/",
    liveLabel: "Launch atlas",
    fullArtifactUrl: "artifact.html?file=generative-ai-use-case-atlas-academic-health-sciences-live.md&id=ai-17"
  });

  refreshPortfolioArtifactMetadata(["ai-17"]);
})();

(function ensureAIResourceArtifacts() {
  if (!Array.isArray(window.ARTIFACTS)) return;

  const resources = [
    {
      id: "ai-18",
      title: "Prompt Injection in Healthcare",
      category: "ai-governance",
      role: "Live public AI safety and governance education artifact",
      summary: "Public AI safety resource for academic health sciences faculty and staff explaining prompt injection as a trust, workflow, and system-design problem in healthcare. Includes healthcare-specific examples, warning signs, response steps, organizational controls, and the PAUSE framework.",
      skills: ["AI governance", "Prompt injection", "AI safety", "Cybersecurity translation", "Healthcare risk communication", "Faculty AI literacy", "Workflow controls"],
      audience: ["Faculty", "Staff", "Clinicians", "Researchers", "Educators", "Administrators", "Privacy", "Compliance", "Informatics", "AI governance committees"],
      strategic: "Demonstrates the ability to translate a technical AI security threat into practical workforce education and institutional governance guidance for academic health sciences settings. The artifact links cybersecurity-aware AI governance with clinical, educational, research, and administrative workflows without overclaiming policy authority.",
      sourceFile: "prompt-injection-healthcare-ai-safety-resource.md",
      cleanFile: "prompt-injection-healthcare-ai-safety-resource.md",
      tags: ["Prompt injection", "AI safety", "Healthcare AI", "Cybersecurity", "PAUSE framework", "AI governance", "Faculty education"],
      featured: true,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/prompt-injection-healthcare/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=prompt-injection-healthcare-ai-safety-resource.md&id=ai-18"
    },
    {
      id: "ai-19",
      title: "AI Agents in Medicine",
      category: "ai-governance",
      role: "Live public faculty-facing AI literacy and institutional strategy artifact",
      summary: "Public education and governance resource for academic health sciences faculty and staff explaining how AI agents differ from ordinary chatbots and why autonomy, tools, memory, retrieval, permissions, and human review change the risk profile of AI systems in medicine.",
      skills: ["AI governance", "Agentic AI", "Faculty AI literacy", "Academic medicine strategy", "Workflow design", "Human-in-the-loop governance", "AI implementation planning"],
      audience: ["Faculty", "Staff", "Researchers", "Program directors", "Administrators", "Clinical partners", "AI governance committees", "Research leadership"],
      strategic: "Demonstrates the ability to translate agentic AI from a vendor-driven technology category into a practical institutional framework for education, research, clinical partner pilots, and administrative operations. The artifact supports institutional readiness by clarifying autonomy, permissions, data sensitivity, human review, and partner-governed deployment boundaries.",
      sourceFile: "ai-agents-in-medicine-resource.md",
      cleanFile: "ai-agents-in-medicine-resource.md",
      tags: ["AI agents", "Agentic AI", "Academic medicine", "AI literacy", "Digital transformation", "Governance", "Human review"],
      featured: true,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/ai-agents/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=ai-agents-in-medicine-resource.md&id=ai-19"
    },
    {
      id: "ai-20",
      title: "Safe Use of AI in Health Professions Education",
      category: "ai-governance",
      role: "Live public health professions education governance artifact",
      summary: "Public faculty and staff education resource focused on responsible AI use in health professions learning environments. Frames safe AI use around role, data type, intended purpose, human review, institutional approval, professionalism, learner assessment, and clinical-site boundaries.",
      skills: ["AI governance", "Health professions education", "Faculty AI literacy", "Learner assessment", "Academic integrity", "Privacy-aware education", "Medical education policy translation"],
      audience: ["Faculty", "Staff", "Students", "Residents", "Fellows", "Program directors", "Medical educators", "Student Affairs", "UME", "GME"],
      strategic: "Demonstrates the ability to translate AI governance into the educational operating environment of health professions programs. The artifact connects AI literacy, learner support, assessment validity, professionalism, privacy, and clinical-site governance in a form usable by faculty and staff.",
      sourceFile: "ai-health-professions-safe-use-resource.md",
      cleanFile: "ai-health-professions-safe-use-resource.md",
      tags: ["AI safe use", "Health professions education", "Medical education", "Faculty education", "Academic integrity", "AI governance", "Learner support"],
      featured: false,
      confidential: false,
      liveUrl: "https://datadrivenmed.github.io/resources/ai-health-professions-safe-use/",
      liveLabel: "Launch resource",
      fullArtifactUrl: "artifact.html?file=ai-health-professions-safe-use-resource.md&id=ai-20"
    }
  ];

  resources.forEach(upsertPortfolioArtifact);
  refreshPortfolioArtifactMetadata(["ai-18", "ai-19"]);
})();

function PatchedTopBar({ route }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isActive = (p) => (route === p || (p !== "/" && route.startsWith(p))) ? "active" : "";

  const navItems = [
    { to: "/", label: "Home", mobileLabel: "Home", desc: "Return to the executive portfolio landing page." },
    { to: "/about", label: "Profile", mobileLabel: "Executive Profile", desc: "Leadership narrative, academic role, and institutional scope." },
    { to: "/career-governance", label: "Career", mobileLabel: "Career & Governance", desc: "Promotion evidence, governance work, and leadership architecture." },
    { to: "/capabilities", label: "Capabilities", mobileLabel: "Capabilities", desc: "Twelve domains of enterprise capability and strategic value." },
    { to: "/case-studies", label: "Case Studies", mobileLabel: "Case Studies", desc: "Selected institutional projects and executive-use examples." },
    { to: "/library", label: "Library", mobileLabel: "Evidence Library", desc: "Documented artifacts, dashboards, frameworks, and proof points." },
    { to: "/framework", label: "Framework", mobileLabel: "AI Evaluation Framework", desc: "Four-failure-mode methodology for evaluating clinical AI tools." },
  ];

  React.useEffect(() => { setDrawerOpen(false); }, [route]);

  React.useEffect(() => {
    document.body.classList.toggle("nav-lock", drawerOpen);
    return () => document.body.classList.remove("nav-lock");
  }, [drawerOpen]);

  React.useEffect(() => {
    if (!drawerOpen) return undefined;

    const handlePointer = (e) => {
      if (!e.target.closest(".nav-drawer") && !e.target.closest(".nav-menu-button")) {
        setDrawerOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [drawerOpen]);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <window.Link to="/" className="brand">
            <span className="brand-mark">R</span>
            <span className="brand-name">
              <span>Ram Paragi</span>
              <small>Institutional Strategy Portfolio</small>
            </span>
          </window.Link>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <window.Link
              key={item.to}
              to={item.to}
              className={item.to === "/" ? (route === "/" ? "active" : "") : isActive(item.to)}
            >
              {item.label}
            </window.Link>
          ))}
          <window.Link to="/ask" className="cta">Ask the Portfolio</window.Link>
        </nav>

        <button
          className={"nav-menu-button" + (drawerOpen ? " open" : "")}
          type="button"
          aria-label={drawerOpen ? "Close portfolio menu" : "Open portfolio menu"}
          aria-expanded={drawerOpen}
          aria-controls="portfolio-mobile-menu"
          onClick={() => setDrawerOpen(v => !v)}
        >
          <span className="nav-menu-label">Menu</span>
          <span className="nav-menu-icon" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>

      <button
        className={"nav-drawer-backdrop" + (drawerOpen ? " open" : "")}
        type="button"
        aria-label="Close menu"
        onClick={() => setDrawerOpen(false)}
      />

      <nav
        id="portfolio-mobile-menu"
        className={"nav-drawer executive-drawer" + (drawerOpen ? " open" : "")}
        aria-label="Mobile navigation"
      >
        <div className="drawer-shell">
          <div className="drawer-head">
            <span className="drawer-kicker">Portfolio Navigation</span>
            <span className="drawer-title">Ram Paragi</span>
            <p className="drawer-subtitle">
              Evidence-led institutional strategy portfolio for academic medicine, accreditation, analytics, research strategy, AI governance, and workforce finance.
            </p>
          </div>

          <div className="drawer-section-label">Navigate</div>
          <div className="drawer-links">
            {navItems.map((item) => (
              <window.Link
                key={item.to}
                to={item.to}
                className={"drawer-link " + (item.to === "/" ? (route === "/" ? "active" : "") : isActive(item.to))}
              >
                <span className="drawer-link-copy">
                  <span className="drawer-link-title">{item.mobileLabel}</span>
                  <span className="drawer-link-desc">{item.desc}</span>
                </span>
                <span className="drawer-arrow" aria-hidden="true">›</span>
              </window.Link>
            ))}
          </div>

          <div className="drawer-primary">
            <window.Link to="/ask" className="drawer-cta">
              <span>Ask the Portfolio</span>
              <span aria-hidden="true">›</span>
            </window.Link>
          </div>

          <div className="drawer-connect">
            <span className="drawer-connect-label">Connect</span>
            <div className="drawer-connect-row">
              <a href="mailto:ramparagi@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function PatchedFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 20, color: "var(--paper-2)" }}>
              <span className="brand-mark">R</span>
              <span className="brand-name">
                <span>Ram Paragi</span>
                <small>Institutional Strategy Portfolio</small>
              </span>
            </div>
            <p style={{ maxWidth: 340, lineHeight: 1.66, fontSize: 13, color: "var(--dark-muted)" }}>
              Academic medical center enterprise strategy: accreditation, research,
              workforce finance, AI governance, and institutional analytics.
            </p>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>
              <li><window.Link to="/about">Executive profile</window.Link></li>
              <li><window.Link to="/career-governance">Career &amp; Governance</window.Link></li>
              <li><window.Link to="/capabilities">Capability areas</window.Link></li>
              <li><window.Link to="/case-studies">Case studies</window.Link></li>
              <li><window.Link to="/library">Evidence library</window.Link></li>
              <li><window.Link to="/truth-layer">Truth layer</window.Link></li>
              <li><window.Link to="/claims-evidence">Claims/evidence map</window.Link></li>
              <li><window.Link to="/framework">AI Evaluation Framework</window.Link></li>
            </ul>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul>
              <li><window.Link to="/capabilities#ai-governance">AI Governance</window.Link></li>
              <li><window.Link to="/capabilities#gme-finance">GME &amp; Workforce Finance</window.Link></li>
              <li><window.Link to="/capabilities#accreditation-cqi">Accreditation &amp; CQI</window.Link></li>
              <li><window.Link to="/capabilities#research-strategy">Research Strategy</window.Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-row" style={{ marginBottom: 16 }}>
              <a href="mailto:ramparagi@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
            </div>
            <ul><li><window.Link to="/ask">Ask the portfolio</window.Link></li></ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 · Ram Paragi · LSU Health New Orleans School of Medicine</span>
          <span>{window.ARTIFACTS.length} artifacts · 12 capability domains · status-labeled evidence</span>
        </div>
      </div>
    </footer>
  );
}

window.TopBar = PatchedTopBar;
window.Footer = PatchedFooter;
