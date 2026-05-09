/* global window, React */
// =============================================================
// components.jsx - shared shell, nav, footer, primitives
// =============================================================
const { useState, useEffect, useMemo, useRef } = React;

// ---------- Tiny hash-based router ----------
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
  return (
    <a
      href={"#" + to}
      className={className}
      onClick={(e) => { /* default hashchange handles it */ }}
      {...rest}
    >
      {children}
    </a>
  );
}

// ---------- Icons ----------
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
       strokeLinejoin="round" className="arrow">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ArrowLeft = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);
const SearchIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const SendIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const MailIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <path d="M3 7l9 6 9-6"></path>
  </svg>
);

const LinkedInIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
  </svg>
);
const SubstackIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 3h18v2.9H3V3zm0 5.05h18v2.9H3v-2.9zm0 5.05h18V21l-9-5-9 5v-7.9z"/>
  </svg>
);

// ---------- Top bar ----------
function TopBar({ route }) {
  const isActive = (p) =>
    route === p || (p !== "/" && route.startsWith(p)) ? "active" : "";
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
        <nav className="nav">
          <Link to="/" className={isActive("/") && route === "/" ? "active" : ""}>Home</Link>
          <Link to="/about" className={isActive("/about")}>Profile</Link>
          <Link to="/capabilities" className={isActive("/capabilities")}>Capabilities</Link>
          <Link to="/case-studies" className={isActive("/case-studies")}>Case Studies</Link>
          <Link to="/library" className={isActive("/library")}>Library</Link>
          <Link to="/ask" className="cta">Ask the Portfolio</Link>
        </nav>
      </div>
    </header>
  );
}


function ConnectCard({ compact = false }) {
  return (
    <aside className={compact ? "connect-card compact" : "connect-card"} aria-label="Connect with Ram Paragi">
      <span className="connect-label">Connect</span>
      <a href="mailto:ramparagi@gmail.com" aria-label="Email Ram Paragi">
        <MailIcon /> <span>Email</span>
      </a>
      <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <LinkedInIcon /> <span>LinkedIn</span>
      </a>
      <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer" aria-label="Substack">
        <SubstackIcon /> <span>Substack</span>
      </a>
    </aside>
  );
}
window.ConnectCard = ConnectCard;

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <span className="brand-mark">R</span>
              <span className="brand-name">
                <span>Ram Paragi</span>
                <small>Institutional Strategy Portfolio</small>
              </span>
            </div>
            <p style={{ maxWidth: 380, color: "var(--muted)" }}>
              Academic medical center enterprise strategy - accreditation, research, workforce finance,
              AI governance, and institutional analytics.
            </p>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>
              <li><Link to="/about">Executive profile</Link></li>
              <li><Link to="/capabilities">Capability areas</Link></li>
              <li><Link to="/case-studies">Featured case studies</Link></li>
              <li><Link to="/library">Portfolio library</Link></li>
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
            <div className="social-row">
              <a href="mailto:ramparagi@gmail.com" aria-label="Email Ram Paragi">
                <MailIcon /> <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/ramnarayan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <LinkedInIcon /> <span>LinkedIn</span>
              </a>
              <a href="https://swimed.substack.com/" target="_blank" rel="noopener noreferrer" aria-label="Substack">
                <SubstackIcon /> <span>Substack</span>
              </a>
            </div>
            <ul style={{ marginTop: 14 }}>
              <li><Link to="/ask">Ask the portfolio</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 · Ram Paragi · LSU Health New Orleans School of Medicine</span>
          <span className="right">v0.1 · Prototype build</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Card primitives ----------
function ArtifactCard({ a, onOpen }) {
  const cap = window.CAPABILITIES.find(c => c.id === a.category);
  return (
    <article className="card" onClick={() => onOpen(a)}>
      <div className="top">
        <span className="cat">{cap ? cap.title : a.category}</span>
        <span className="flags">
          {a.featured && <span className="flag featured">Featured</span>}
          {a.confidential && <span className="flag confid">Confidential</span>}
        </span>
      </div>
      <h3>{a.title}</h3>
      <p className="summary">{a.summary}</p>
      <div className="strat">
        <b>Strategic value · </b>{a.strategic}
      </div>
      <div className="tags">
        {a.tags.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="footer-row">
        <span>{a.role}</span>
        <span className="read">Executive summary <ArrowRight size={12} /></span>
      </div>
      <div className="artifact-action-row">
        {a.liveUrl && (
          <a className="artifact-link live" href={a.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            {a.liveLabel || "View live project"}
          </a>
        )}
        {a.fullArtifactUrl && (
          <a className="artifact-link evidence" href={a.fullArtifactUrl} onClick={(e) => e.stopPropagation()}>
            Evidence page
          </a>
        )}
      </div>
    </article>
  );
}

function FeaturedCover({ index, title }) {
  // Procedural minimal cover: angled lines + index numeral.
  const palettes = [
    ["#1f3a32", "#2c5246"],
    ["#14171c", "#2a2f38"],
    ["#a64d2e", "#7d3a23"],
    ["#1c2d4a", "#2c4570"],
  ];
  const p = palettes[index % palettes.length];
  return (
    <div className="feat-cover">
      <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id={"g" + index} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p[0]} stopOpacity="0.06"/>
            <stop offset="100%" stopColor={p[1]} stopOpacity="0.14"/>
          </linearGradient>
        </defs>
        <rect width="400" height="180" fill={"url(#g" + index + ")"} />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i}
            x1={-50 + i * 40} y1={0}
            x2={150 + i * 40} y2={180}
            stroke={p[0]} strokeOpacity="0.10" strokeWidth="1" />
        ))}
        <text x="20" y="160" fontFamily="Newsreader, serif" fontSize="64"
              fill={p[0]} fillOpacity="0.18" fontStyle="italic"
              letterSpacing="-2">
          {String(index + 1).padStart(2, "0")}
        </text>
      </svg>
    </div>
  );
}

function FeaturedCard({ a, index, onOpen }) {
  const cap = window.CAPABILITIES.find(c => c.id === a.category);
  return (
    <article className="feat" onClick={() => onOpen(a)}>
      <FeaturedCover index={index} title={a.title} />
      <div className="feat-body">
        <h3>{a.title}</h3>
        <p className="feat-sum">{a.summary}</p>
        <div className="feat-meta">
          <span>{cap ? cap.title : a.category}</span>
          <span className="read">Open case <ArrowRight size={12} /></span>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, {
  useRoute, go, Link, TopBar, Footer,
  ArrowRight, ArrowLeft, SearchIcon, SendIcon,
  ArtifactCard, FeaturedCard, FeaturedCover,
});
