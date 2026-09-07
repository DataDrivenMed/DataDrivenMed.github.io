/* global window, React */
// Adds a compact Selected Live Work strip to the existing portfolio homepage.
// The section uses the site's existing academic-executive visual language and
// leaves the hero, profile, navigation, case studies, and evidence UI intact.
(function () {
  "use strict";

  const BaseHomePage = window.HomePage;
  if (typeof BaseHomePage !== "function" || !window.React) return;

  function artifactLiveUrl(id, fallback) {
    const item = (window.ARTIFACTS || []).find(a => a && a.id === id);
    return (item && item.liveUrl) || fallback;
  }

  const LIVE_WORK = [
    {
      name: "HumanSim",
      descriptor: "Connected medical learning",
      type: "human",
      url: () => artifactLiveUrl("ev-humansim", "https://mechanism-atlas.vercel.app/")
    },
    {
      name: "MedAI Lexicon",
      descriptor: "AI literacy for medicine",
      type: "book",
      url: () => artifactLiveUrl("ai-05", "https://datadrivenmed.github.io/MedAI--Lexicon/")
    },
    {
      name: "Pan-Oncology",
      descriptor: "Governed tumor-board AI",
      type: "network",
      url: () => artifactLiveUrl("ev-pan-oncology", "https://tumor-boards.vercel.app/")
    },
    {
      name: "AI Tool Vetting",
      descriptor: "Enterprise AI governance",
      type: "shield",
      url: () => "https://datadrivenmed.github.io/AI-tool-Vetting/"
    },
    {
      name: "GenAI Use-Case Atlas",
      descriptor: "Academic medicine AI strategy",
      type: "atlas",
      url: () => artifactLiveUrl("ai-17", "https://genai-healthcare-usecase-atlas.vercel.app/")
    },
    {
      name: "GME Finance Simulator",
      descriptor: "Executive decision modeling",
      type: "chart",
      url: () => artifactLiveUrl("gme-09", "https://gme-finance-simulator.streamlit.app/")
    }
  ];

  function LiveWorkIcon({ type }) {
    const common = {
      width: 25,
      height: 25,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.45,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": true
    };

    if (type === "human") return (
      <svg {...common}>
        <circle cx="12" cy="5" r="2.25" />
        <path d="M8.5 20v-5.5L7 11l2.3-2.7h5.4L17 11l-1.5 3.5V20" />
        <path d="M9.2 10.2h5.6M12 8.4V17" />
      </svg>
    );
    if (type === "book") return (
      <svg {...common}>
        <path d="M3.5 5.5c2.8-.7 5.4-.2 8.5 1.4v12c-3.1-1.6-5.7-2.1-8.5-1.4z" />
        <path d="M20.5 5.5c-2.8-.7-5.4-.2-8.5 1.4v12c3.1-1.6 5.7-2.1 8.5-1.4z" />
      </svg>
    );
    if (type === "network") return (
      <svg {...common}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
        <circle cx="12" cy="13" r="2" />
        <path d="M12 7v4M10.2 14.2 6.7 16M13.8 14.2l3.5 1.8" />
      </svg>
    );
    if (type === "shield") return (
      <svg {...common}>
        <path d="M12 3 19 6v5.2c0 4.5-2.8 7.7-7 9.8-4.2-2.1-7-5.3-7-9.8V6z" />
        <path d="m8.6 12.1 2.1 2.1 4.7-5" />
      </svg>
    );
    if (type === "atlas") return (
      <svg {...common}>
        <path d="M4 5.5 9 3l6 2.5L20 3v15.5L15 21l-6-2.5L4 21z" />
        <path d="M9 3v15.5M15 5.5V21" />
        <circle cx="12" cy="11.5" r="1.4" />
      </svg>
    );
    return (
      <svg {...common}>
        <path d="M4 20V10h3v10M10.5 20V5h3v15M17 20v-8h3v8" />
        <path d="M3 20.5h18" />
      </svg>
    );
  }

  function SelectedLiveWorkHome(props) {
    return (
      <React.Fragment>
        <BaseHomePage {...props} />
        <section className="selected-live-work" aria-labelledby="selected-live-work-title">
          <style>{`
            .selected-live-work{
              background:var(--paper);
              border-top:1px solid var(--border);
              border-bottom:1px solid var(--border);
              padding:38px 0 34px;
            }
            .selected-live-work-head{
              display:flex;
              align-items:flex-end;
              justify-content:space-between;
              gap:24px;
              margin-bottom:20px;
            }
            .selected-live-work-head h2{
              margin:7px 0 0;
              font-size:clamp(25px,2.6vw,34px);
              line-height:1.05;
            }
            .selected-live-work-head p{
              margin:0;
              max-width:500px;
              color:var(--muted);
              font-size:13px;
              line-height:1.6;
              text-align:right;
            }
            .selected-live-work-grid{
              display:grid;
              grid-template-columns:repeat(6,minmax(0,1fr));
              gap:10px;
            }
            .selected-live-card{
              position:relative;
              min-height:144px;
              padding:18px 16px 16px;
              border:1px solid var(--border);
              background:rgba(255,255,255,.48);
              color:var(--ink);
              text-decoration:none;
              transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease,background .16s ease;
            }
            .selected-live-card:hover{
              transform:translateY(-2px);
              border-color:rgba(184,152,90,.55);
              background:#fff;
              box-shadow:0 14px 34px rgba(17,24,39,.07);
            }
            .selected-live-icon{
              width:40px;
              height:40px;
              display:flex;
              align-items:center;
              justify-content:center;
              border-radius:50%;
              color:var(--gold);
              border:1px solid rgba(184,152,90,.28);
              background:rgba(184,152,90,.07);
              margin-bottom:15px;
            }
            .selected-live-name{
              display:block;
              padding-right:24px;
              font-family:Newsreader,serif;
              font-size:17px;
              font-weight:600;
              line-height:1.08;
              color:var(--ink);
            }
            .selected-live-desc{
              display:block;
              margin-top:6px;
              font-size:11.5px;
              line-height:1.4;
              color:var(--muted);
            }
            .selected-live-arrow{
              position:absolute;
              right:13px;
              top:15px;
              color:var(--gold);
            }
            .selected-live-footer{
              display:flex;
              justify-content:flex-end;
              margin-top:16px;
            }
            .selected-live-footer a{
              display:inline-flex;
              align-items:center;
              gap:7px;
              color:var(--ink-2);
              font-family:var(--mono);
              font-size:10px;
              letter-spacing:.08em;
              text-transform:uppercase;
              text-decoration:none;
            }
            .selected-live-footer a:hover{color:var(--gold);}
            @media (max-width:1100px){
              .selected-live-work-grid{grid-template-columns:repeat(3,minmax(0,1fr));}
            }
            @media (max-width:700px){
              .selected-live-work{padding:30px 0 28px;}
              .selected-live-work-head{display:block;margin-bottom:16px;}
              .selected-live-work-head p{text-align:left;margin-top:9px;}
              .selected-live-work-grid{
                display:flex;
                overflow-x:auto;
                gap:10px;
                padding-bottom:8px;
                scroll-snap-type:x proximity;
                scrollbar-width:thin;
              }
              .selected-live-card{
                min-width:185px;
                max-width:185px;
                min-height:138px;
                scroll-snap-align:start;
              }
            }
          `}</style>

          <div className="container">
            <div className="selected-live-work-head">
              <div>
                <div className="eyebrow"><span className="dot"></span>Selected live work</div>
                <h2 id="selected-live-work-title">Working systems, not just frameworks.</h2>
              </div>
              <p>A small selection of public builds across medical education, clinical AI, governance, and executive decision support. The Evidence Library contains the broader record.</p>
            </div>

            <div className="selected-live-work-grid">
              {LIVE_WORK.map(item => (
                <a
                  key={item.name}
                  className="selected-live-card"
                  href={item.url()}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open ${item.name}`}
                >
                  <span className="selected-live-arrow"><window.ArrowRight size={12} /></span>
                  <span className="selected-live-icon"><LiveWorkIcon type={item.type} /></span>
                  <span className="selected-live-name">{item.name}</span>
                  <span className="selected-live-desc">{item.descriptor}</span>
                </a>
              ))}
            </div>

            <div className="selected-live-footer">
              <a href="#/library">More work in the Evidence Library <window.ArrowRight size={12} /></a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  window.HomePage = SelectedLiveWorkHome;
})();
