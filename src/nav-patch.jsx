/* global window, React */
// Adds Career & Governance to the existing navigation without changing older page components.

function PatchedTopBar({ route }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isActive = (p) => (route === p || (p !== "/" && route.startsWith(p))) ? "active" : "";

  React.useEffect(() => { setDrawerOpen(false); }, [route]);
  React.useEffect(() => {
    if (!drawerOpen) return;
    const handle = (e) => {
      if (!e.target.closest(".nav-drawer") && !e.target.closest(".nav-hamburger")) setDrawerOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
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
          <window.Link to="/" className={route === "/" ? "active" : ""}>Home</window.Link>
          <window.Link to="/about" className={isActive("/about")}>Profile</window.Link>
          <window.Link to="/career-governance" className={isActive("/career-governance")}>Career &amp; Governance</window.Link>
          <window.Link to="/capabilities" className={isActive("/capabilities")}>Capabilities</window.Link>
          <window.Link to="/case-studies" className={isActive("/case-studies")}>Case Studies</window.Link>
          <window.Link to="/library" className={isActive("/library")}>Library</window.Link>
          <window.Link to="/ask" className="cta">Ask the Portfolio</window.Link>
        </nav>
        <button
          className={"nav-hamburger" + (drawerOpen ? " open" : "")}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(v => !v)}
        ><span /><span /><span /></button>
      </div>
      <nav className={"nav-drawer" + (drawerOpen ? " open" : "")} aria-label="Mobile navigation">
        <window.Link to="/" className={route === "/" ? "active" : ""}>Home</window.Link>
        <window.Link to="/about" className={isActive("/about")}>Executive Profile</window.Link>
        <window.Link to="/career-governance" className={isActive("/career-governance")}>Career &amp; Governance</window.Link>
        <window.Link to="/capabilities" className={isActive("/capabilities")}>Capabilities</window.Link>
        <window.Link to="/case-studies" className={isActive("/case-studies")}>Case Studies</window.Link>
        <window.Link to="/library" className={isActive("/library")}>Evidence Library</window.Link>
        <window.Link to="/ask" className="cta">Ask the Portfolio</window.Link>
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
