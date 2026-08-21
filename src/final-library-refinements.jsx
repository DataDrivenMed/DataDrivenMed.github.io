/* global window, React */
(function () {
  const { useMemo, useState } = React;

  function recordType(a) {
    const id = String(a.id || '');
    const t = [a.title, a.role, a.summary].join(' ').toLowerCase();
    if (/^ev-(pub|poster|oral|reviewer|mec-report)-/.test(id) || /publication|poster presentation|oral presentation|manuscript reviewer/.test(t)) return 'scholarship';
    if (/^ev-(credential|award)-/.test(id) || /degree|certification|award|honor/.test(t)) return 'credentials';
    if (/grant|funded|co-principal|co-pi/.test(t) || /wisewoman|adapt-pol|steps|medtronic|nih-mdphd|nsf/.test(id)) return 'funded';
    if (/committee|commission|governance|steering|advisory|professional service|doping control/.test(t)) return 'governance';
    if (a.liveUrl || /public guide|interactive|dashboard|field guide|resource hub/.test(t)) return 'public';
    return 'projects';
  }

  const GROUPS = [
    ['executive', 'Executive & institutional leadership', ['dean','chancellor','senior leadership','executive','leadership','board','vice chancellor','associate dean']],
    ['academic', 'Academic affairs & accreditation', ['accredit','lcme','acgme','accme','cme','academic affairs','institutional effectiveness','cqi']],
    ['gme', 'GME & health-system partners', ['gme','program director','resident','fellow','hospital','health system','umc','lcmc','ochsner','olol','clinical partner']],
    ['education', 'Faculty, learners & education', ['faculty','student','learner','admissions','ume','curriculum','education','teaching','trainee']],
    ['research', 'Research, cancer & innovation', ['research','cancer','nih','nci','investigator','scientist','innovation','clinical trials']],
    ['operations', 'Finance, operations & technology', ['finance','financial','contracts','operations','facilities','technology','informatics','accounting','vendor']],
    ['policy', 'Government, policy & community', ['ldh','dhh','state','legisl','government','policy','community','rural','workforce','medicaid','cms','public health']],
    ['external', 'External, professional & public', ['external','public','professional','conference','journal','reviewer','coach','swim','international','collaborator']]
  ];

  function audMatch(a, id) {
    if (id === 'all') return true;
    const g = GROUPS.find(x => x[0] === id);
    const hay = (a.audience || []).join(' ').toLowerCase();
    return g ? g[2].some(k => hay.includes(k)) : true;
  }

  function LibraryPage({ openArtifact }) {
    const initial = useMemo(() => {
      const p = new URLSearchParams(window.location.hash.split('?')[1] || '');
      return { cat: p.get('cat') || 'all', featured: p.get('featured') === '1', depth: p.get('cat') ? 'all' : 'projects' };
    }, []);
    const [cat, setCat] = useState(initial.cat);
    const [aud, setAud] = useState('all');
    const [featured, setFeatured] = useState(initial.featured);
    const [confid, setConfid] = useState(false);
    const [q, setQ] = useState('');
    const [view, setView] = useState('index');
    const [depth, setDepth] = useState(initial.depth);
    const all = window.ARTIFACTS || [];

    const filtered = useMemo(() => all.filter(a => {
      if (depth !== 'all' && recordType(a) !== depth) return false;
      if (cat !== 'all' && a.category !== cat) return false;
      if (!audMatch(a, aud)) return false;
      if (featured && !a.featured) return false;
      if (confid && !a.confidential) return false;
      if (q) {
        const n = q.toLowerCase();
        const h = [a.title,a.summary,a.strategic,a.role].concat(a.tags||[],a.skills||[],a.audience||[]).join(' ').toLowerCase();
        if (!h.includes(n)) return false;
      }
      return true;
    }), [cat,aud,featured,confid,q,depth,all.length]);

    const grouped = useMemo(() => {
      const g = new Map();
      filtered.forEach(a => { const x = g.get(a.category) || []; x.push(a); g.set(a.category,x); });
      return g;
    }, [filtered]);

    const codes = useMemo(() => {
      const m = new Map();
      window.CAPABILITIES.forEach(c => all.filter(a => a.category === c.id).forEach((a,i) => m.set(a.id,c.num+'.'+String(i+1).padStart(2,'0'))));
      return m;
    }, [all.length]);

    const counts = useMemo(() => {
      const d = {}; ['projects','governance','scholarship','funded','credentials','public'].forEach(k => d[k] = all.filter(a => recordType(a) === k).length);
      const a = {}; GROUPS.forEach(g => a[g[0]] = all.filter(x => audMatch(x,g[0])).length);
      return { d, a };
    }, [all.length]);

    const reset = () => { setCat('all'); setAud('all'); setFeatured(false); setConfid(false); setQ(''); setDepth('projects'); };

    return <main className="page-enter">
      <div className="lib-dark-header"><div className="container">
        <div className="eyebrow" style={{color:'var(--gold)'}}><span className="dot" style={{background:'var(--gold)'}}></span>Evidence Library · {all.length} records indexed</div>
        <h1>The evidence<br/>library.</h1>
        <p>A comprehensive career evidence register across twelve capability areas. Start with projects and initiatives, then use the filters to explore governance, scholarship, funded work, credentials, public tools, or the complete record.</p>
      </div></div>
      <div className="lib-body"><div className="container">
        <div style={{display:'flex',gap:12,alignItems:'flex-start',padding:'14px 16px',marginBottom:18,border:'1px solid var(--line)',background:'var(--paper-2)'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--mono)',fontSize:12,lineHeight:1.5}}>ⓘ</span>
          <div style={{fontSize:12,lineHeight:1.6,color:'var(--muted)'}}><strong style={{color:'var(--ink)'}}>Use the filters to explore the depth of the record.</strong> The default view shows projects and initiatives. Select <strong>Complete record</strong> for everything, or narrow by evidence type, capability, or audience group.</div>
        </div>
        <div className="ev-search"><window.SearchIcon size={17}/><input placeholder="Search — strategic planning, LCME, GME caps, Healthworks, NIH, AI governance, facilities…" value={q} onChange={e => {setQ(e.target.value); if(e.target.value) setDepth('all');}}/>{q && <button className="ev-clear" onClick={()=>setQ('')}>×</button>}</div>
        <div className="ev-toolbar"><div className="ev-tools-left">
          <select className="ev-select" value={depth} onChange={e=>setDepth(e.target.value)} aria-label="Evidence type">
            <option value="all">Complete record · {all.length}</option>
            <option value="projects">Projects & initiatives · {counts.d.projects}</option>
            <option value="governance">Governance & service · {counts.d.governance}</option>
            <option value="scholarship">Scholarship & presentations · {counts.d.scholarship}</option>
            <option value="funded">Grants & funded work · {counts.d.funded}</option>
            <option value="credentials">Credentials & recognition · {counts.d.credentials}</option>
            <option value="public">Public tools & resources · {counts.d.public}</option>
          </select>
          <select className="ev-select" value={cat} onChange={e=>setCat(e.target.value)}><option value="all">All capabilities · {all.length}</option>{window.CAPABILITIES.map(c => <option key={c.id} value={c.id}>{c.num} · {c.title} · {all.filter(a=>a.category===c.id).length}</option>)}</select>
          <select className="ev-select" value={aud} onChange={e=>setAud(e.target.value)} aria-label="Audience group"><option value="all">All audience groups</option>{GROUPS.map(g => <option key={g[0]} value={g[0]}>{g[1]} · {counts.a[g[0]]}</option>)}</select>
          <button className={'ev-flag '+(featured?'active':'')} onClick={()=>setFeatured(!featured)}><span className="dot featured"></span> Featured</button>
          <button className={'ev-flag '+(confid?'active':'')} onClick={()=>setConfid(!confid)}><span className="dot confid"></span> Confidential</button>
          {(cat!=='all'||aud!=='all'||featured||confid||q||depth!=='projects') && <button className="ev-reset" onClick={reset}>Reset</button>}
        </div><div className="ev-tools-right"><span className="ev-count">{filtered.length} / {all.length}</span><div className="ev-view"><button className={view==='index'?'active':''} onClick={()=>setView('index')}>Index</button><button className={view==='cards'?'active':''} onClick={()=>setView('cards')}>Cards</button></div></div></div>
        {filtered.length===0 ? <div className="empty" style={{marginTop:48}}>No evidence records match these filters. Try resetting or broadening the search.</div> : view==='cards' ? <div className="lib-grid">{filtered.map(a=><window.ArtifactCard key={a.id} a={a} onOpen={openArtifact}/>)}</div> : <div className="ev-index">
          <div className="ev-row ev-head"><div className="ev-c-code">Code</div><div className="ev-c-title">Title</div><div className="ev-c-skills">Skills Demonstrated</div><div className="ev-c-aud">Audience</div><div className="ev-c-flags">Status</div></div>
          {window.CAPABILITIES.map(c => { const arts=grouped.get(c.id); if(!arts||!arts.length) return null; return <React.Fragment key={c.id}><div className="ev-group"><span className="ev-g-num">{c.num}</span><span className="ev-g-title">{c.title}</span><span className="ev-g-count">{arts.length}</span></div>{arts.map(a=><button key={a.id} className="ev-row ev-item" onClick={()=>openArtifact(a)}><div className="ev-c-code">{codes.get(a.id)}</div><div className="ev-c-title"><span className="t">{a.title}</span><span className="s">{a.summary}</span></div><div className="ev-c-skills">{(a.skills||[]).slice(0,3).map(s=><span key={s} className="tag">{s}</span>)}{(a.skills||[]).length>3&&<span className="tag-more">+{a.skills.length-3}</span>}</div><div className="ev-c-aud">{(a.audience||[]).slice(0,2).join(' · ')}</div><div className="ev-c-flags">{(a.statusLabels||[]).slice(0,2).map(s=><span key={s.key+s.label} className={'status-chip tiny '+s.key}>{s.label}</span>)}<window.ArrowRight size={12}/></div></button>)}</React.Fragment>; })}
        </div>}
      </div></div>
    </main>;
  }

  window.LibraryPage = LibraryPage;
})();
