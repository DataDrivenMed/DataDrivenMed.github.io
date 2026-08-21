/* global window, React */
(function () {
  const { useEffect, useMemo, useState } = React;

  // --- Homepage: preserve the current component/design, make only requested refinements. ---
  const BaseHomePage = window.HomePage;
  function RefinedHomePage(props) {
    useEffect(() => {
      // Keep the swimming differentiator, but remove the oversized standalone "India" stat.
      const proofCells = document.querySelectorAll('.proof-strip .proof-cell');
      if (proofCells.length) {
        const cell = proofCells[proofCells.length - 1];
        const num = cell.querySelector('.proof-num');
        const lbl = cell.querySelector('.proof-lbl');
        if (num) num.textContent = '7 yrs';
        if (lbl) lbl.textContent = 'Former international swimmer who represented India; Karnataka State Swim Team captain';
      }

      // Slightly reduce only the final-candidate homepage hero headline.
      if (!document.getElementById('final-hero-size-refinement')) {
        const style = document.createElement('style');
        style.id = 'final-hero-size-refinement';
        style.textContent = '.hero-dark .hero-copy > h1{font-size:clamp(2.65rem,4.65vw,4.75rem)!important;}';
        document.head.appendChild(style);
      }
    }, []);
    return <BaseHomePage {...props} />;
  }

  // --- Library: concise executive audience groups; complete record is the default. ---
  function recordType(a) {
    const id = String(a.id || '');
    const text = [a.title, a.role, a.summary].join(' ').toLowerCase();
    if (id.startsWith('ev-pub-') || id.startsWith('ev-poster-') || id.startsWith('ev-oral-') || id.startsWith('ev-reviewer-') || id.startsWith('ev-mec-report-') || text.includes('publication') || text.includes('poster presentation') || text.includes('oral presentation') || text.includes('manuscript reviewer')) return 'scholarship';
    if (id.startsWith('ev-credential-') || id.startsWith('ev-award-') || text.includes('degree') || text.includes('certification') || text.includes('award') || text.includes('honor')) return 'credentials';
    if (text.includes('grant') || text.includes('funded') || text.includes('co-principal') || text.includes('co-pi') || id.includes('wisewoman') || id.includes('adapt-pol') || id.includes('steps') || id.includes('medtronic') || id.includes('nih-mdphd') || id.includes('nsf')) return 'funded';
    if (text.includes('committee') || text.includes('commission') || text.includes('governance') || text.includes('steering') || text.includes('advisory') || text.includes('member') || text.includes('professional service') || text.includes('doping control')) return 'governance';
    if (a.liveUrl || text.includes('public guide') || text.includes('interactive') || text.includes('dashboard') || text.includes('field guide') || text.includes('resource hub')) return 'public';
    return 'projects';
  }

  const AUDIENCE_GROUPS = [
    { id: 'leadership', label: 'Senior & institutional leadership', re: /dean|chancellor|senior leadership|executive|board|vice chancellor|cfo|cio|associate dean|school leadership|institutional leadership/i },
    { id: 'education', label: 'Medical education & accreditation', re: /accredit|lcme|accme|medical education|student affairs|ume|admissions|curriculum|educator|education leadership|students/i },
    { id: 'gme-health', label: 'GME & health-system partners', re: /gme|resident|fellow|program director|hospital|health system|clinical partner|training site|umc|lcmc|ochsner|olol|va|contracts|finance/i },
    { id: 'faculty-learners', label: 'Faculty, staff & learners', re: /faculty|staff|trainee|learner|clinician|department chair|administrator|researcher/i },
    { id: 'research', label: 'Research, cancer & innovation', re: /research|cancer|nci|nih|clinical trial|innovation|sponsored projects|research leadership|scientist/i },
    { id: 'policy', label: 'Government, policy & workforce', re: /ldh|dhh|government|legisl|policy|workforce|commission|state|medicaid|cms|rural|public health|regulator/i },
    { id: 'external', label: 'External, scholarly & professional', re: /search committee|reviewer|editor|conference|professional|international|public|coach|swim|external|partner|community/i }
  ];

  function audienceGroupMatch(a, groupId) {
    if (groupId === 'all') return true;
    const g = AUDIENCE_GROUPS.find(x => x.id === groupId);
    if (!g) return true;
    return g.re.test((a.audience || []).join(' '));
  }

  function RefinedLibraryPage({ openArtifact }) {
    const initial = useMemo(() => {
      const qstr = window.location.hash.split('?')[1] || '';
      const params = new URLSearchParams(qstr);
      return { cat: params.get('cat') || 'all', aud: 'all', featured: params.get('featured') === '1', depth: 'all' };
    }, []);

    const [cat, setCat] = useState(initial.cat);
    const [aud, setAud] = useState(initial.aud);
    const [featuredOnly, setFeaturedOnly] = useState(initial.featured);
    const [confidOnly, setConfidOnly] = useState(false);
    const [q, setQ] = useState('');
    const [view, setView] = useState('index');
    const [depth, setDepth] = useState(initial.depth);
    const all = window.ARTIFACTS || [];

    const depthMatch = a => depth === 'all' || recordType(a) === depth;

    const filtered = useMemo(() => all.filter(a => {
      if (!depthMatch(a)) return false;
      if (cat !== 'all' && a.category !== cat) return false;
      if (!audienceGroupMatch(a, aud)) return false;
      if (featuredOnly && !a.featured) return false;
      if (confidOnly && !a.confidential) return false;
      if (q) {
        const needle = q.toLowerCase();
        const hay = [a.title, a.summary, a.strategic, a.role].concat(a.tags || [], a.skills || [], a.audience || []).join(' ').toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    }), [cat, aud, featuredOnly, confidOnly, q, depth, all.length]);

    const grouped = useMemo(() => {
      const g = new Map();
      filtered.forEach(a => { const arr = g.get(a.category) || []; arr.push(a); g.set(a.category, arr); });
      return g;
    }, [filtered]);

    const codeMap = useMemo(() => {
      const m = new Map();
      window.CAPABILITIES.forEach(c => all.filter(a => a.category === c.id).forEach((a, i) => m.set(a.id, c.num + '.' + String(i + 1).padStart(2, '0'))));
      return m;
    }, [all.length]);

    const depthCounts = useMemo(() => ({
      projects: all.filter(a => recordType(a) === 'projects').length,
      governance: all.filter(a => recordType(a) === 'governance').length,
      scholarship: all.filter(a => recordType(a) === 'scholarship').length,
      funded: all.filter(a => recordType(a) === 'funded').length,
      credentials: all.filter(a => recordType(a) === 'credentials').length,
      public: all.filter(a => recordType(a) === 'public').length
    }), [all.length]);

    const audienceCounts = useMemo(() => Object.fromEntries(AUDIENCE_GROUPS.map(g => [g.id, all.filter(a => audienceGroupMatch(a, g.id)).length])), [all.length]);
    const reset = () => { setCat('all'); setAud('all'); setFeaturedOnly(false); setConfidOnly(false); setQ(''); setDepth('all'); };

    return (
      <main className="page-enter">
        <div className="lib-dark-header"><div className="container"><div className="eyebrow" style={{ color: 'var(--gold)' }}><span className="dot" style={{ background: 'var(--gold)' }}></span>Evidence Library · {all.length} records indexed</div><h1>The evidence<br/>library.</h1><p>A comprehensive career evidence register across twelve capability areas. Start with the complete record, then use the concise filters to focus on the type of evidence, institutional domain, or audience most relevant to your review.</p></div></div>
        <div className="lib-body"><div className="container">
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', marginBottom: 18, border: '1px solid var(--line)', background: 'var(--paper-2)' }}>
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.5 }}>ⓘ</span>
            <div style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Use the filters to go deeper.</strong> Evidence Depth narrows the full register to projects, governance, scholarship, funded work, credentials, or public tools. Audience choices are consolidated into broad institutional groups for faster review; the underlying records retain their original detailed audience metadata.</div>
          </div>

          <div className="ev-search"><window.SearchIcon size={17} /><input placeholder="Search — strategic planning, LCME, GME caps, Healthworks, NIH, AI governance, facilities…" value={q} onChange={e => setQ(e.target.value)} />{q && <button className="ev-clear" onClick={() => setQ('')}>×</button>}</div>

          <div className="ev-toolbar"><div className="ev-tools-left">
            <select className="ev-select" value={depth} onChange={e => setDepth(e.target.value)} aria-label="Evidence depth">
              <option value="all">Evidence Depth · Complete record · {all.length}</option>
              <option value="projects">Projects & initiatives · {depthCounts.projects}</option>
              <option value="governance">Governance & service · {depthCounts.governance}</option>
              <option value="scholarship">Scholarship & presentations · {depthCounts.scholarship}</option>
              <option value="funded">Grants & funded work · {depthCounts.funded}</option>
              <option value="credentials">Credentials & recognition · {depthCounts.credentials}</option>
              <option value="public">Public tools & resources · {depthCounts.public}</option>
            </select>

            <select className="ev-select" value={cat} onChange={e => setCat(e.target.value)}>
              <option value="all">All capabilities · {all.length}</option>
              {window.CAPABILITIES.map(c => { const n = all.filter(a => a.category === c.id).length; return <option key={c.id} value={c.id}>{c.num} · {c.title} · {n}</option>; })}
            </select>

            <select className="ev-select" value={aud} onChange={e => setAud(e.target.value)} aria-label="Audience group">
              <option value="all">All audiences</option>
              {AUDIENCE_GROUPS.map(g => <option key={g.id} value={g.id}>{g.label} · {audienceCounts[g.id]}</option>)}
            </select>

            <button className={'ev-flag ' + (featuredOnly ? 'active' : '')} onClick={() => setFeaturedOnly(!featuredOnly)}><span className="dot featured"></span> Featured</button>
            <button className={'ev-flag ' + (confidOnly ? 'active' : '')} onClick={() => setConfidOnly(!confidOnly)}><span className="dot confid"></span> Confidential</button>
            {(cat !== 'all' || aud !== 'all' || featuredOnly || confidOnly || q || depth !== 'all') && <button className="ev-reset" onClick={reset}>Reset</button>}
          </div><div className="ev-tools-right"><span className="ev-count">{filtered.length} / {all.length}</span><div className="ev-view"><button className={view === 'index' ? 'active' : ''} onClick={() => setView('index')}>Index</button><button className={view === 'cards' ? 'active' : ''} onClick={() => setView('cards')}>Cards</button></div></div></div>

          {filtered.length === 0 ? <div className="empty" style={{ marginTop: 48 }}>No evidence records match these filters. Try resetting or broadening the search.</div> : view === 'cards' ? <div className="lib-grid">{filtered.map(a => <window.ArtifactCard key={a.id} a={a} onOpen={openArtifact} />)}</div> : <div className="ev-index">
            <div className="ev-row ev-head"><div className="ev-c-code">Code</div><div className="ev-c-title">Title</div><div className="ev-c-skills">Skills Demonstrated</div><div className="ev-c-aud">Audience</div><div className="ev-c-flags">Status</div></div>
            {window.CAPABILITIES.map(c => {
              const arts = grouped.get(c.id);
              if (!arts || !arts.length) return null;
              return <React.Fragment key={c.id}>
                <div className="ev-group"><span className="ev-g-num">{c.num}</span><span className="ev-g-title">{c.title}</span><span className="ev-g-count">{arts.length}</span></div>
                {arts.map(a => <button key={a.id} className="ev-row ev-item" onClick={() => openArtifact(a)}>
                  <div className="ev-c-code">{codeMap.get(a.id)}</div>
                  <div className="ev-c-title"><span className="t">{a.title}</span><span className="s">{a.summary}</span></div>
                  <div className="ev-c-skills">{(a.skills || []).slice(0,3).map(s => <span key={s} className="tag">{s}</span>)}{(a.skills || []).length > 3 && <span className="tag-more">+{a.skills.length - 3}</span>}</div>
                  <div className="ev-c-aud">{(a.audience || []).slice(0,2).join(' · ')}</div>
                  <div className="ev-c-flags">{(a.statusLabels || []).slice(0,2).map(s => <span key={s.key + s.label} className={'status-chip tiny ' + s.key}>{s.label}</span>)}<window.ArrowRight size={12} /></div>
                </button>)}
              </React.Fragment>;
            })}
          </div>}
        </div></div>
      </main>
    );
  }

  if (BaseHomePage) window.HomePage = RefinedHomePage;
  window.LibraryPage = RefinedLibraryPage;
})();
