/* global window, React */
// =============================================================
// components.jsx v24 — Dark Academic Executive
// Changes from v23:
//   FIX 3: "Framework" nav link added to TopBar (desktop + mobile drawer)
//   FIX 4: AuthorStamp component added — paste at top of sub-pages
//           to re-attach orphaned artifacts to their author
// =============================================================
const { useState, useEffect, useMemo, useRef } = React;

// ---------- Router ----------
function useRoute() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.slice(1) || "/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
function go(path) { window.location.hash = path; }
function Link({ to, className = "", children, ...rest }) {
  return <a href={"#" + to} className={className} {...rest}>{children}</a>;
}

// ---------- Icons ----------
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
       strokeLinejoin="round" className="arrow">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const ArrowLeft = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
const SearchIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const SendIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const MailIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const LinkedInIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
  </svg>
);
const SubstackIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v2.9H3V3zm0 5.05h18v2.9H3v-2.9zm0 5.05h18V21l-9-5-9 5v-7.9z"/>
  </svg>
);

// ---------- Top bar — dark ----------
function TopBar({ route }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isActive = (p) => (route === p || (p !== "/" && route.startsWith(p))) ? "active" : "";

  useEffect(() => { setDrawerOpen(false); }, [route]);
  useEffect(() => {
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
          <Link to="/" className="brand">
            <span className="brand-mark">R</span>
            <span className="brand-name">
              <span>Ram Paragi</span>
              <small>Institutional Strategy Portfolio</small>
            </span>
          </Link>
        </div>
        <nav className="nav" aria-label="Primary navigation">
          <Link to="/"             className={route === "/" ? "active" : ""}>Home</Link>
          <Link to="/about"        className={isActive("/about")}>Profile</Link>
          <Link to="/capabilities" className={isActive("/capabilities")}>Capabilities</Link>
          <Link to="/case-studies" className={isActive("/case-studies")}>Case Studies</Link>
          <Link to="/library"      className={isActive("/library")}>Library</Link>
          {/* FIX 3: Framework nav link — desktop */}
          <Link to="/framework"    className={isActive("/framework")}>Framework</Link>
          <Link to="/ask"          className="cta">Ask the Portfolio</Link>
        </nav>
        <button
          className={"nav-hamburger" + (drawerOpen ? " open" : "")}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(v => !v)}
        ><span /><span /><span /></button>
      </div>
      <nav className={"nav-drawer" + (drawerOpen ? " open" : "")} aria-label="Mobile navigation">
        <Link to="/"             className={route === "/" ? "active" : ""}>Home</Link>
        <Link to="/about"        className={isActive("/about")}>Executive Profile</Link>
        <Link to="/capabilities" className={isActive("/capabilities")}>Capabilities</Link>
        <Link to="/case-studies" className={isActive("/case-studies")}>Case Studies</Link>
        <Link to="/library"      className={isActive("/library")}>Evidence Library</Link>
        {/* FIX 3: Framework nav link — mobile drawer */}
        <Link to="/framework"    className={isActive("/framework")}>AI Evaluation Framework</Link>
        <Link to="/ask"          className="cta">Ask the Portfolio</Link>
      </nav>
    </header>
  );
}

// ---------- Connect card — dark ----------
function ConnectCard({ compact = false }) {
  return (
    <aside className={compact ? "connect-card compact" : "connect-card"} aria-label="Connect">
      <span className="connect-label">Connect</span>
      <a href="mailto:ramparagi@gmail.com"><MailIcon /> <span>Email</span></a>
      <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon /> <span>LinkedIn</span>
      </a>
      <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer">
        <SubstackIcon /> <span>Substack</span>
      </a>
    </aside>
  );
}
window.ConnectCard = ConnectCard;

// ---------- Footer — dark ----------
function Footer() {
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
              Academic medical center enterprise strategy — accreditation, research,
              workforce finance, AI governance, and institutional analytics.
            </p>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>
              <li><Link to="/about">Executive profile</Link></li>
              <li><Link to="/capabilities">Capability areas</Link></li>
              <li><Link to="/case-studies">Case studies</Link></li>
              <li><Link to="/library">Evidence library</Link></li>
              {/* FIX 3: Framework in footer nav */}
              <li><Link to="/framework">AI Evaluation Framework</Link></li>
            </ul>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul>
              <li><Link to="/capabilities#ai-governance">AI Governance</Link></li>
              <li><Link to="/capabilities#gme-finance">GME &amp; Workforce Finance</Link></li>
              <li><Link to="/capabilities#accreditation-cqi">Accreditation &amp; CQI</Link></li>
              <li><Link to="/capabilities#research-strategy">Research Strategy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-row" style={{ marginBottom: 16 }}>
              <a href="mailto:ramparagi@gmail.com"><MailIcon /> <span>Email</span></a>
              <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> <span>LinkedIn</span>
              </a>
              <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer">
                <SubstackIcon /> <span>Substack</span>
              </a>
            </div>
            <ul><li><Link to="/ask">Ask the portfolio</Link></li></ul>
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

// ---------- Artifact card ----------
function ArtifactCard({ a, onOpen }) {
  const cap = window.CAPABILITIES.find(c => c.id === a.category);
  return (
    <article className="card" onClick={() => onOpen(a)}>
      <div className="top">
        <span className="cat">{cap ? cap.title : a.category}</span>
        <span className="flags">
          {a.featured     && <span className="flag featured">Featured</span>}
          {a.confidential && <span className="flag confid">Confidential</span>}
        </span>
      </div>
      <h3>{a.title}</h3>
      <p className="summary">{a.summary}</p>
      <div className="strat"><b>Strategic value · </b>{a.strategic}</div>
      <div className="tags">{a.tags.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}</div>
      <div className="footer-row">
        <span>{a.role}</span>
        <span className="read">Executive summary <ArrowRight size={11} /></span>
      </div>
      <div className="artifact-action-row">
        {a.liveUrl && (
          <a className="artifact-link live" href={a.liveUrl} target="_blank" rel="noopener noreferrer"
             onClick={e => e.stopPropagation()}>
            {a.liveLabel || "View live project"}
          </a>
        )}
        {a.fullArtifactUrl && (
          <a className="artifact-link evidence" href={a.fullArtifactUrl}
             onClick={e => e.stopPropagation()}>
            Evidence page
          </a>
        )}
      </div>
    </article>
  );
}

// ---------- Featured cover SVG ----------
function FeaturedCover({ index }) {
  const palettes = [
    ["#0d1117", "#151c28"],
    ["#151c28", "#1c2538"],
    ["#1c2538", "#0d1117"],
    ["#0d1117", "#1c2538"],
  ];
  const p = palettes[index % palettes.length];
  return (
    <div className="feat-cover" style={{ background: p[0] }}>
      <svg width="100%" height="100%" viewBox="0 0 400 100"
           preserveAspectRatio="xMidYMid slice"
           style={{ position: "absolute", inset: 0 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i}
            x1={-80 + i * 64} y1={0}
            x2={80 + i * 64}  y2={100}
            stroke="rgba(184,152,90,0.08)" strokeWidth="1" />
        ))}
        <line x1="0" y1="98" x2="400" y2="98" stroke="rgba(184,152,90,0.25)" strokeWidth="1" />
        <text x="16" y="86"
              fontFamily="Newsreader, serif" fontSize="48"
              fill="rgba(184,152,90,0.12)" fontStyle="italic"
              letterSpacing="-2">
          {String(index + 1).padStart(2, "0")}
        </text>
      </svg>
    </div>
  );
}

// ---------- Featured case card ----------
function FeaturedCard({ a, index, onOpen }) {
  const cap = window.CAPABILITIES.find(c => c.id === a.category);
  return (
    <article className="feat" onClick={() => onOpen(a)}>
      <FeaturedCover index={index} />
      <div className="feat-body">
        <h3>{a.title}</h3>
        <p className="feat-sum">{a.summary}</p>
        <div className="feat-meta">
          <span>{cap ? cap.title : a.category}</span>
          <span className="read">Open case <ArrowRight size={11} /></span>
        </div>
      </div>
    </article>
  );
}

// =============================================================
// FIX 4: AUTHOR STAMP
// A reusable component for sub-pages outside this React app
// (OpenEvidence/, Rural-Health-Strategic-Intelligence/, etc.)
// 
// HOW TO USE ON A SUB-PAGE:
// Those pages are plain HTML, not React. So this component
// shows you the exact HTML + CSS to paste at the top of each
// sub-page's <body>. See the DEPLOY guide for the snippets.
//
// Within this React app, AuthorStamp can be used on any page:
//   <AuthorStamp type="Evaluation Report" title="OpenEvidence" />
// =============================================================
function AuthorStamp({ type = "Portfolio", title = "DataDrivenMed" }) {
  return (
    <div style={{
      background: "var(--dark-1)",
      borderBottom: "1px solid rgba(184,152,90,0.15)",
      padding: "10px 0",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px 16px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link to="/" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--gold)", textDecoration: "none", textTransform: "uppercase" }}>
            DataDrivenMed
          </Link>
          <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.12)" }} />
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dark-muted)", fontFamily: "var(--mono)" }}>{type}</div>
            <div style={{ fontSize: 12, color: "rgba(232,224,210,0.7)" }}>{title}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 12, color: "var(--dark-muted)" }}>
            By <span style={{ color: "rgba(232,224,210,0.75)", fontWeight: 500 }}>Ram Paragi</span> · LSU Health New Orleans
          </span>
          <Link to="/" className="btn outline" style={{ fontSize: 11, padding: "4px 12px" }}>
            Portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  useRoute, go, Link, TopBar, Footer,
  ArrowRight, ArrowLeft, SearchIcon, SendIcon,
  ArtifactCard, FeaturedCard, FeaturedCover,
  AuthorStamp,  // FIX 4: new export
});
