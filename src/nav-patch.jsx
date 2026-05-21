/* global window, document, React */
// Adds Career & Governance to the existing navigation without changing older page components.
// Premium executive mobile drawer for tablet and phone navigation.
// v2: Framework link added to desktop nav, mobile drawer, and footer.

function PatchedTopBar({ route }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isActive = (p) => (route === p || (p !== "/" && route.startsWith(p))) ? "active" : "";

  const navItems = [
    { to: "/", label: "Home", mobileLabel: "Home", desc: "Return to the executive portfolio landing page." },
    { to: "/about", label: "Profile", mobileLabel: "Executive Profile", desc: "Leadership narrative, academic role, and institutional scope." },
    { to: "/career-governance", label: "Career & Governance", mobileLabel: "Career & Governance", desc: "Promotion evidence, governance work, and leadership architecture." },
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
          <span>82 artifacts · 12 capability domains</span>
        </div>
      </div>
    </footer>
  );
}

window.TopBar = PatchedTopBar;
window.Footer = PatchedFooter;
